"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_1 = __importDefault(require("./graphql"));
const express4_1 = require("@apollo/server/express4");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        const extension = path_1.default.extname(file.originalname);
        const filename = `${file.fieldname}-${Date.now()}${extension}`;
        cb(null, filename);
    },
});
const upload = (0, multer_1.default)({ storage });
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const PORT = Number(process.env.PORT) || 8000;
        app.use(express_1.default.json());
        app.use((req, res, next) => {
            req.upload = upload;
            next();
        });
        app.get("/", (req, res) => {
            res.json({ message: "Server is up and runing" });
        });
        app.use("/graphql", (0, express4_1.expressMiddleware)(yield (0, graphql_1.default)()));
        app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
    });
}
init();
