## Fleet Magement Software Data Processing

En este proyecto se encuentran los scripts desarrollados para el procesamiento de los archivos .txt con información de taxis y ubicaciones. Los archivos son procesados y almacenados en una base de datos postgresql.

1. Instalar PostgreSQL. Crear una base de datos y en ella ejecutar el archivo ``dump.sql``. Esto creará dos tablas: ``taxi`` y ``gps_trajectory``.
2. Descomprimir los archivos ``fleet-management-software-data-part-1.zip``
y ``fleet-management-software-data-part-2.zip``. Se crearán dos carpetas: ``taxis`` y``trajectories``. 
3. Modificar la información de conexión a la base de datos en los archivos ``process_taxis.js`` y ``process_trajectories.js``. 
4. Ejecutar ``node process_taxis.js`` para procesar el archivo ``taxis/taxi.txt``
5. Ejecutar ``node process_trajectories.js`` para procesar los archivos de la carpeta ``trajectories/``