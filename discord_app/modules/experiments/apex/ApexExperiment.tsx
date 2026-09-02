// === Module 1468: getUnitId ===

// Module 1468 (getUnitId)
import extractId from "extractId" /* 510 */;
import initialize from "initialize" /* 586 */;
import loggerDefault from "logger" /* 1469 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1470 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import closure_5 from "initialize" /* 1209 */;

require = arg1;
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
    let tmpResult = tmp(510);
    let str3 = tmpResult.maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    tmpResult = tmp(1470);
    tmpResult.assertNever(arg0);
  }
  const obj = initialize;
}
const result = require("set").fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(ApexExperiment) {
  return loggerDefault(ApexExperiment, closure_5, getUnitId, useUnitId);
};
export const ApexExperiment = require("logger").ApexExperiment;
export { getUnitId };