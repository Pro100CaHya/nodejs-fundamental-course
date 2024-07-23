import fs from "fs";
import path from "path";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from "dotenv";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

// console.log("start");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Папки созданы")
//     }
// });

// console.log("end");

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Папка удалена");
//     }
// });

// fs.writeFile(path.resolve(__dirname, "test.txt"), "1qaz2wsx3edc", (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log("Файл создан");

//     fs.appendFile(path.resolve(__dirname, "test.txt"), " 4rfv", (err) => {
//         if (err) {
//             throw err;
//         }

//         console.log("Файл записан");
//     });
// });

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(err);
            }

            resolve("Файл создан");
        });
    });
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                reject(err);
            }

            resolve("В файл были добавлены данные");
        });
    });
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
            if (err) {
                reject(err);
            }

            resolve(data);
        });
    });
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if (err) {
                reject(err);
            }

            resolve("Файл был удален");
        })
    })
}

const main = async () => {
    await writeFileAsync(path.resolve(__dirname, "test.txt"), "12345");
    appendFileAsync(path.resolve(__dirname, "test.txt"), " 67890")
}
main();

writeFileAsync(path.resolve(__dirname, "test2.txt"), "qwerty")
    .then(() => appendFileAsync(path.resolve(__dirname, "test2.txt"), "\n123"))
    .then(() => appendFileAsync(path.resolve(__dirname, "test2.txt"), "\n456"))
    .then(() => readFileAsync(path.resolve(__dirname, "test2.txt")))
    .then((data) => console.log(data))
    .then(() => removeFileAsync(path.resolve(__dirname, "test2.txt")))
    .catch((err) => console.log(err));

const text = process.env.TEXT;

writeFileAsync(path.resolve(__dirname, "test3.txt"), text)
    .then(() => readFileAsync(path.resolve(__dirname, "test3.txt")))
    .then((data) => {
        const wordsCount = String(data.split(" ").length);

        return wordsCount;
    })
    .then((data) => {
        console.log(data);
        writeFileAsync(path.resolve(__dirname, "test4.txt"), data)
    })
    .then(() => removeFileAsync(path.resolve(__dirname, "test3.txt")))