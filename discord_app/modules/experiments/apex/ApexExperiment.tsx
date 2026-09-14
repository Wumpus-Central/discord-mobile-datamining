// === Module 1434: apex/ApexExperiment ===

// Module 1434 (apex/ApexExperiment)
import initialize from "initialize" /* 504 */;
import FingerprintUtils from "FingerprintUtils" /* 1253 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import discord_common_apex_ApexExperimentDefault from "discord_common/apex/ApexExperiment" /* 1435 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1234 */;

require = fn;
function getUnitId(type, guildId) {
  if ("guild" === type) {
    return guildId.guildId;
  } else if ("user" === type) {
    return AuthenticationStore.getId();
  } else if ("installation" === type) {
    let str2 = FingerprintUtils.maybeExtractId(AuthenticationStore.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    GlobalUtils.assertNever(type);
  }
}
function useUnitId(type, guildId) {
  let items = [AuthenticationStore];
  _slicedToArray(initialize.useStateFromStoresArray(items, () => {
    const items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
    return items;
  }), 2);
  if ("guild" === type) {
    return guildId.guildId;
  } else if ("user" === type) {
    return tmp4;
  } else if ("installation" === type) {
    let str3 = FingerprintUtils.maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    GlobalUtils.assertNever(type);
    const tmpResult2 = GlobalUtils;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(arg0) {
  return discord_common_apex_ApexExperimentDefault(arg0, ApexExperimentStore, getUnitId, useUnitId);
};
export const ApexExperiment = fn(1435).ApexExperiment;
export { getUnitId };