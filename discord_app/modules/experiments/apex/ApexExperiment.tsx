// === Module 1368: getUnitId ===

// Module 1368 (getUnitId)
import extractId from "extractId" /* 513 */;
import initialize from "initialize" /* 589 */;
import loggerDefault from "logger" /* 1369 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

require = fn;
function getUnitId(arg0, guildId) {
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return store.getId();
  } else if ("installation" === arg0) {
    let str2 = extractId.maybeExtractId(store.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    isDiscordFrontendDevelopment.assertNever(arg0);
  }
}
function useUnitId(arg0, guildId) {
  let items = [closure_4];
  callback(initialize.useStateFromStoresArray(items, () => {
    const items = [store.getId(), store.getInstallationForTracking()];
    return items;
  }), 2);
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return tmp4;
  } else if ("installation" === arg0) {
    let tmpResult = extractId;
    let str3 = tmpResult.maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    tmpResult = isDiscordFrontendDevelopment;
    tmpResult.assertNever(arg0);
  }
}
const result = require("obj132").fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(ApexExperiment) {
  return loggerDefault(ApexExperiment, closure_5, getUnitId, useUnitId);
};
export const ApexExperiment = require("logger").ApexExperiment;
export { getUnitId };