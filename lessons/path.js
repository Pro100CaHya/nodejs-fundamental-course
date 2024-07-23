import path from "path";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("Склеить участки пути", path.join(__dirname, "..", ".."));

console.log("Получить абсолютный путь", path.resolve( "first", "second"));

const fullpath = path.resolve( "first", "second", "third.js");

console.log("Парсинг пути", path.parse(fullpath));

console.log("Название файла", path.basename(fullpath));

console.log("Расширение файла", path.extname(fullpath));

// -------------------------------------------------

const siteURL = "http://localhost:8080/users?id=5123";

const url = new URL(siteURL);

console.log(url);