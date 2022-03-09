"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTopic = exports.updateTopic = exports.getTopic = exports.createTopic = void 0;
const apiv2_1 = require("../apiv2");
const api_1 = require("../api");
const proto = require("./proto");
const API_VERSION = "v1";
const client = new apiv2_1.Client({
    urlPrefix: api_1.pubsubOrigin,
    auth: true,
    apiVersion: API_VERSION,
});
async function createTopic(topic) {
    const result = await client.put(topic.name, topic);
    return result.body;
}
exports.createTopic = createTopic;
async function getTopic(name) {
    const result = await client.get(name);
    return result.body;
}
exports.getTopic = getTopic;
async function updateTopic(topic) {
    const queryParams = {
        updateMask: proto.fieldMasks(topic).join(","),
    };
    const result = await client.patch(topic.name, topic, { queryParams });
    return result.body;
}
exports.updateTopic = updateTopic;
async function deleteTopic(name) {
    await client.delete(name);
}
exports.deleteTopic = deleteTopic;
