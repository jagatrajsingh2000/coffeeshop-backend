import express from "express";
import { expressMiddleware } from "@apollo/server/express4";

async function init(){
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.use( express.json());
    app.get("/",(req, res) => {
        res.json({ message: "Server is up and runing"});
    });

    app.listen(PORT, () => console.log(`Server is running at ${PORT}`) )
}
init()