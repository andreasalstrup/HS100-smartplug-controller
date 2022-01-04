"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HS100CLI = void 0;
const readline_1 = __importDefault(require("readline"));
const SocketHandler_1 = require("./SocketHandler");
const config = __importStar(require("./config.json"));
class HS100CLI {
    constructor() {
        this.rl = readline_1.default.createInterface(process.stdin, process.stdout);
        this.dict = {
            on: [{ payload: '{"system":{"set_relay_state":{"state":1}}}' }, { callback: () => { console.log("Status: Device on!"); } }],
            off: [{ payload: '{"system":{"set_relay_state":{"state":0}}}' }, { callback: () => { console.log("Status: Device off!"); } }],
            info: [{ payload: '{"system":{"get_sysinfo":null}}' }, { callback: () => { console.log("Status: Device info!"); } }]
        };
    }
    displayActions() {
        console.log(`Device running on '${config.address}:${config.port}' options:`);
        Object.keys(this.dict).forEach(key => {
            console.log(`'${key}'`);
        });
    }
    choosePayload() {
        console.clear();
        this.displayActions();
        try {
            this.rl.question('Type an action - ', (action) => {
                var _a, _b;
                const payload = (_a = this.dict[`${action}`][0]) === null || _a === void 0 ? void 0 : _a.payload;
                const callback = (_b = this.dict[action][1]) === null || _b === void 0 ? void 0 : _b.callback;
                console.log(payload + " asdasdasdasdasdasdadads");
                if (payload === undefined)
                    this.choosePayload();
                new SocketHandler_1.SocketHandler().writeToSocket(payload, callback);
                this.choosePayload();
            });
        }
        catch (e) {
            if (e instanceof TypeError) {
                console.log("ASDADADADASDADADSDASDASD");
            }
        }
    }
}
exports.HS100CLI = HS100CLI;
//# sourceMappingURL=HS100CLI.js.map