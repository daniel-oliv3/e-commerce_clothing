"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Distribution = exports.DistributionFileType = void 0;
const fs = require("fs-extra");
const error_1 = require("../error");
const logger_1 = require("../logger");
const pathUtil = require("path");
var DistributionFileType;
(function (DistributionFileType) {
    DistributionFileType["IPA"] = "ipa";
    DistributionFileType["APK"] = "apk";
    DistributionFileType["AAB"] = "aab";
})(DistributionFileType = exports.DistributionFileType || (exports.DistributionFileType = {}));
class Distribution {
    constructor(path) {
        this.path = path;
        if (!path) {
            throw new error_1.FirebaseError("must specify a release binary file");
        }
        const distributionType = path.split(".").pop();
        if (distributionType !== DistributionFileType.IPA &&
            distributionType !== DistributionFileType.APK &&
            distributionType !== DistributionFileType.AAB) {
            throw new error_1.FirebaseError("Unsupported file format, should be .ipa, .apk or .aab");
        }
        let stat;
        try {
            stat = fs.statSync(path);
        }
        catch (err) {
            logger_1.logger.info(err);
            throw new error_1.FirebaseError(`File ${path} does not exist: verify that file points to a binary`);
        }
        if (!stat.isFile()) {
            throw new error_1.FirebaseError(`${path} is not a file. Verify that it points to a binary.`);
        }
        this.path = path;
        this.fileType = distributionType;
        this.fileName = pathUtil.basename(path);
    }
    distributionFileType() {
        return this.fileType;
    }
    readStream() {
        return fs.createReadStream(this.path);
    }
    getFileName() {
        return this.fileName;
    }
}
exports.Distribution = Distribution;
