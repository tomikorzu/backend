import fs from "fs";

console.log("Streams");
console.log("Exercises");

const writeStream = fs.createWriteStream("streams/example.txt", "utf-8");

function writeData() {
  for (let i = 0; i < 1000; i++) {
    writeStream.write(" Hello World! ");
  }
  writeStream.end();
  readData("streams/example.txt");
}

function readData(file) {
  const readStream = fs.createReadStream(file);
  readStream.on("data", (chunk) => {
    console.log(chunk);
  });
  readStream.on("end", () => {
    console.log("finished reading data");
    copyFile("streams/example.txt", "streams/copy.txt");
  });
}

function copyFile(fileToCopy, newFile) {
  const readStream = fs.createReadStream(fileToCopy);
  const writeStream = fs.createWriteStream(newFile, "utf-8");

  readStream.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("file copied successfully");
    readWithError();
    writeWithError();
  });
}

function writeWithError() {
  const errorSteam = fs.createWriteStream("streams/error.txt", "utf-8");

  errorSteam.write("This is an error message in the writing process");

  errorSteam.on("error", (err) => {
    console.log("error writing the file", err);
  });

  errorSteam.end();
}

function readWithError() {
  const readStream = fs.createReadStream("streams/not-found.txt");
  readStream.on("error", (err) => {
    console.log("error reading the file", err);
  });

  readStream.on("data", (chunk) => {
    console.log(chunk);
  });
}

writeData();
