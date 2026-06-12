"use strict";
var __createBinding, __exportStar, __importDefault;
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const chalk = require("chalk");

// Header dengan ASCII Art
console.log(chalk.cyan.bold('❍=============================================❍'));
console.log(chalk.yellow.bold('        ♚𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐁𝐞𝐥𝐥𝐢𝐨𝐧 𝐒𝐩𝐚𝐜𝐞♛ '));
console.log(chalk.cyan.bold('❍=============================================❍'));

// ASCII Art Bellion Space
console.log(chalk.green(`
⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣖⦄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⡟⣉⣽⣿⢿⡿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⡗⠋⠙⡿⣷⢌⣿⣿⠀⠀⠀⠀⠀⠀⠀${chalk.white('♕ 𝚝𝚑𝚎 𝚜𝚔𝚢 𝚔𝚒𝚗𝚐 ♕')}
⣷⣄⣀⣿⣿⣿⣿⣷⣦⣤⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀ ${chalk.white('𝚋𝚎𝚕𝚕𝚒𝚘𝚗 𝚖𝚊𝚍𝚎 𝚋𝚢')}
⠈⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⢀⠀⠀⠀⠀${chalk.white('𝚝𝚎𝚕𝚎𝚐𝚛𝚊𝚖 @𝙼𝚊𝚛𝚟𝚎𝚕𝙽𝚘𝚟𝚊𝚇')}
⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠿⠿⠋⠀⠀⠀ 
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀${chalk.white('♖ 𝚝𝚑𝚊𝚗𝚔𝚜 𝚝𝚘 𝚞𝚜𝚒𝚗𝚐')}
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡄     ${chalk.white('𝚝𝚑𝚒𝚜 𝚜𝚌𝚛𝚒𝚙𝚝')}
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣷⣶⣴⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠋⠁⠀⠀⠀⠀
`));

console.log(chalk.cyan.bold('❍=============================================❍'));
console.log(chalk.magenta.bold('                𝚎𝚗𝚓𝚘𝚢 𝚐𝚞𝚢𝚜..... '));
console.log(chalk.cyan.bold('❍=============================================❍'));

// Divider
console.log(chalk.blue('─'.repeat(50)));

__createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
__exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
__importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
exports.default = Socket_1.default;
