import path from "path";
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "uploads/");
  },
  filename: function (req: any, file: any, cb: any) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

let upload = multer({
  storage: storage,
  fileFilter: function (req: any, file: any, cb: any) {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      console.log("Only jpg and png files are supported");
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = upload;
