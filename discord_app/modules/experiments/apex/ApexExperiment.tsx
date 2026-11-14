// === Module 1453: apex/ApexExperiment ===

// Module 1453 (apex/ApexExperiment)
import initialize from "initialize" /* 504 */;
import ApexUnitUtils from "ApexUnitUtils" /* 1253 */;
import FingerprintUtils from "FingerprintUtils" /* 1254 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import discord_common_apex_ApexExperimentDefault from "discord_common/apex/ApexExperiment" /* 1454 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;

require = fn;
function useUnitId(type, guildId) {
  items = [AuthenticationStore];
  _slicedToArray(initialize.useStateFromStoresArray(items, () => {
    items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
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

export default function createApexExperiment(definition) {
  return discord_common_apex_ApexExperimentDefault(definition, ApexExperimentStore, ApexUnitUtils.getUnitId, useUnitId);
};
export const ApexExperiment = fn(1454).ApexExperiment;
export const getUnitId = fn(1253).getUnitId;