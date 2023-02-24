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
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get('/ms1', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let ms2_res = {};
    try {
        const { data } = yield axios_1.default.get(process.env.MS2_URL || '');
        ms2_res = data;
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).json(Object.assign({ fizz: 'buzz' }, (Object.keys(ms2_res).length && ms2_res)));
}));
app.listen(process.env.PORT, () => {
    console.log(`MS1 listening at http://localhost:${process.env.PORT}`);
});
