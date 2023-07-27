import express from "express";
import createApolloGraphqlServer from "./graphql";
import { expressMiddleware } from "@apollo/server/express4";
import multer from "multer"
import path from 'path'
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const extension = path.extname(file.originalname);
      const filename = `${file.fieldname}-${Date.now()}${extension}`;
      cb(null, filename);
    },
  });
  
const upload = multer({ storage });

async function init(){
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.use( express.json());
    app.use((req, res, next) => {
        req.upload = upload;
        next();
      });
      
    app.get("/",(req, res) => {
        res.json({ message: "Server is up and runing"});
    });
    app.use("/graphql", expressMiddleware(await createApolloGraphqlServer()));
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`) )
}
init()