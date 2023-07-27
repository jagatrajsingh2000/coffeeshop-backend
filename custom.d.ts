// custom.d.ts

declare namespace Express {
    interface Request {
      upload: import("multer").Multer;
    }
  }
  