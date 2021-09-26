"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = require("winston");
function expandErrors(logger) {
    const oldLogFunc = logger.log.bind(logger);
    const newLogFunc = function (levelOrEntry, message, ...meta) {
        if (message && message instanceof Error) {
            message = message.stack || message.message;
            return oldLogFunc(levelOrEntry, message, ...meta);
        }
        return oldLogFunc(levelOrEntry, message, ...meta);
    };
    logger.log = newLogFunc;
    return logger;
}
function annotateDebugLines(logger) {
    const debug = logger.debug.bind(logger);
    const newDebug = function (message, ...meta) {
        if (typeof message === "string") {
            message = `[${new Date().toISOString()}] ${message || ""}`;
        }
        return debug(message, ...meta);
    };
    logger.debug = newDebug;
    return logger;
}
const rawLogger = winston.createLogger();
rawLogger.add(new winston.transports.Console({ silent: true }));
rawLogger.exitOnError = false;
exports.logger = annotateDebugLines(expandErrors(rawLogger));
