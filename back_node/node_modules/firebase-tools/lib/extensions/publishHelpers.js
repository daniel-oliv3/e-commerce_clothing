"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleInstallLink = void 0;
const api_1 = require("../api");
function consoleInstallLink(extVersionRef) {
    return `${api_1.consoleOrigin}/project/_/extensions/install?ref=${extVersionRef}`;
}
exports.consoleInstallLink = consoleInstallLink;
