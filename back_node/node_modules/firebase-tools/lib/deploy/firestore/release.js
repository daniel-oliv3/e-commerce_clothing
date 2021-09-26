"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const rulesDeploy_1 = require("../../rulesDeploy");
const error_1 = require("../../error");
async function default_1(context, options) {
    var _a;
    const rulesDeploy = _.get(context, "firestore.rulesDeploy");
    if (!context.firestoreRules || !rulesDeploy) {
        return;
    }
    const rulesFile = (_a = options.config.src.firestore) === null || _a === void 0 ? void 0 : _a.rules;
    if (!rulesFile) {
        throw new error_1.FirebaseError(`Invalid firestore config: ${JSON.stringify(options.config.src.firestore)}`);
    }
    await rulesDeploy.release(rulesFile, rulesDeploy_1.RulesetServiceType.CLOUD_FIRESTORE);
}
exports.default = default_1;
