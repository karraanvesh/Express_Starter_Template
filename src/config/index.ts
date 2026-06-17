import dotenv from 'dotenv';

type ServerConfig = {
    PORT : number,
};

type DBConfig = {
    DB_NAME : string,
    DB_USER : string,
    DB_HOST : string,
    DB_PASSWORD : string
}

function loadenv() {
    dotenv.config({debug : true});
    console.log("environment variables loaded");
}

loadenv();
console.log("PORT is : " , process.env.PORT);

export const serverConfig : ServerConfig = {
    PORT : (Number(process.env.PORT) || 3001)
};

export const dbConfig : DBConfig = {
    DB_NAME : process.env.DB_NAME || 'test_db',
    DB_USER : process.env.DB_USER || 'root',
    DB_HOST : process.env.DB_HOST || 'localhost',
    DB_PASSWORD : process.env.DB_PASSWORD || 'root'
};