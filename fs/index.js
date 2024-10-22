import fs from "fs";

console.log("File System");

// console.log('examples');

// fs.readFile("http/index.js", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(data);
// });

// fs.writeFile("fs/test.txt", "Hello World!", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log("File created");
// });

// fs.appendFile("http/index.js", "\nHello World!", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log("File updated");
// });

// fs.unlink("fs/test.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log("File deleted");
// });

// lee un archivo a la vez
// fs.readFileSync("http/index.js",'utf8')

// Es recomendable usar readFile (async) para ejecutar mas codigo mientras se lee el archivo

console.log("Exercise");

fs.writeFile("fs/data.txt", "Hello my name is tomas korzusehec", (err) => {
  if (err) {
    console.log(err);
    errorLog(err);
  }
  console.log("File created");
  readFile("fs/data.txt");
});

function readFile(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      errorLog(err);
    }
    console.log(`The data of the file ${file} is: ${data}`);
    appendFile("fs/data.txt", "Do you like football?");
  });
}

function appendFile(file, text) {
  fs.appendFile(file, `\n${text}`, (err) => {
    if (err) {
      console.log(err);
      errorLog(err);
    }
    console.log(`Line appended ${text}`);
    deleteFile(file);
  });
}

function deleteFile(file) {
  fs.unlink(file, (err) => {
    if (err) {
      console.log(err);
      errorLog(err);
    }
    console.log("File deleted");
  });
}

function errorLog(err) {
  fs.appendFile("fs/logs.txt", `${err}\n`, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Error log created");
  });
}
