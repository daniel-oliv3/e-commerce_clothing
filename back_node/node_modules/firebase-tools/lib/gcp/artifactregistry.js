"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePackage = exports.API_VERSION = void 0;
const apiv2_1 = require("../apiv2");
const api_1 = require("../api");
exports.API_VERSION = "v1beta2";
const client = new apiv2_1.Client({
    urlPrefix: api_1.artifactRegistryDomain,
    auth: true,
    apiVersion: exports.API_VERSION,
});
async function deletePackage(name) {
    const res = await client.delete(name);
    return res.body;
}
exports.deletePackage = deletePackage;
