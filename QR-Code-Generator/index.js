import inquirer from "inquirer";
import qrimage from "qr-image";
import fs, { createWriteStream } from "fs";

inquirer
  .prompt([{ message: "Paste the link i here: ", name: "url", type: "string" }])
  .then((answers) => {
    const url = answers.url;
    var image = qrimage.image(url);
    image.pipe(fs.createWriteStream("link.png"));
  });
