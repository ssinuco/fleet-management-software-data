-- Table: public.gps_trajectory

-- DROP TABLE public.gps_trajectory;

CREATE TABLE IF NOT EXISTS public.gps_trajectory
(
    id integer NOT NULL DEFAULT nextval('gps_trajectory_id_seq'::regclass),
    taxi_id integer NOT NULL,
    date timestamp with time zone NOT NULL,
    latitude double precision NOT NULL,
    longitude double precision NOT NULL,
    CONSTRAINT mobility_traces_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.gps_trajectory
    OWNER to postgres;
-- Index: gps_trajectory_idx

-- Table: public.taxi

-- DROP TABLE public.taxi;

CREATE TABLE IF NOT EXISTS public.taxi
(
    id integer NOT NULL,
    plate character varying COLLATE pg_catalog."default",
    CONSTRAINT pk_taxi PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.taxi
    OWNER to postgres;