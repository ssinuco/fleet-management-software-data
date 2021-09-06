const fs = require('fs');
const parse = require('csv-parse');
const { Client } = require('pg');

const SEARCH_PATH = `./taxis`;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'fleet_management_software',
  password: '',
  port: 5432,
});

const processFiles = (files) => {
  let file = files.pop();
  let p = processFile(file);

  p.then(
    () => {
      if(files.length > 0){
        processFiles(files);
      }
      else{
        client.end();
      }
    }
  );
}

const processFile = (fileName) => {
  return new Promise(async(resolve) => {
    let readerStream = fs.createReadStream(`${SEARCH_PATH}/${fileName}`);
    const parser = readerStream.pipe(
      parse({
        delimiter: ',',
        relax_column_count: true,
        from: 2,
      }
    ));

    for await (const row of parser) {
      row[1] += '+08';
      try{
        await client.query(
          `INSERT INTO public.taxi(id, plate)
           VALUES ($1, $2)`,
          row
        );
      }
      catch(e){
        console.log(e);
      }
    }
    console.log(fileName);
    resolve();
  });
}

(async () => {
  await client.connect();
  const fileNames = fs.readdirSync(SEARCH_PATH);
  processFiles(fileNames)
})()
