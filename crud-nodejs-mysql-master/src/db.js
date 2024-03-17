import { config } from 'dotenv';
config();

import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.MYSQL_ADDON_HOST,
  port: process.env.MYSQL_ADDON_PORT,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB
});

pool.getConnection()
  .then(connection => {
    console.log('Conexión exitosa a la base de datos!');
    connection.release(); // Liberar la conexión cuando haya terminado
    })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error.message);
  });

/*import { config } from 'dotenv';
config();

import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.MYSQL_ADDON_HOST,
  port: process.env.MYSQL_ADDON_PORT,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB
});

pool.getConnection()
  .then(connection => {
    console.log('Conexión exitosa a la base de datos!');
    connection.release(); // Liberar la conexión cuando haya terminado
    })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error.message);
  });
*/









/*MYSQL_ADDON_HOST=b99jphn1qrr8h6rrqcpc-mysql.services.clever-cloud.com
MYSQL_ADDON_DB=b99jphn1qrr8h6rrqcpc
MYSQL_ADDON_USER=ufhirtyipkx2iuus
MYSQL_ADDON_PORT=3306
MYSQL_ADDON_PASSWORD=gloAOJIQ8R5riVh9DiTQ
MYSQL_ADDON_URI=mysql://ufhirtyipkx2iuus:gloAOJIQ8R5riVh9DiTQ@b99jphn1qrr8h6rrqcpc-mysql.services.clever-cloud.com:3306/b99jphn1qrr8h6rrqcpc
Database Name*/

/*export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Olakase72279",
  port: 3306,
  database: "customersdb",
});
*/