// discord_app/modules/experiments/apex/ApexExperiment.tsx
import extractId from "extractId" /* 513 */;
import initialize from "initialize" /* 589 */;
import loggerDefault from "logger" /* 1369 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "initialize" /* 1212 */;

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
    let tmpResult = tmp(513);
    let str3 = tmpResult.maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    tmpResult = tmp(1370);
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