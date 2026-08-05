// discord_app/modules/experiments/apex/ApexExperiment.tsx
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";
import initialize from "initialize";

const require = arg1;
function getUnitId(arg0, guildId) {
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return store.getId();
  } else if ("installation" === arg0) {
    let str2 = require("../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx") /* extractId */.maybeExtractId(store.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    require("../../../utils/GlobalUtils.tsx") /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
}
function useUnitId(arg0, guildId) {
  let items = [fetchFingerprint];
  callback(require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStoresArray(items, () => {
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
    tmpResult = tmp(1351);
    tmpResult.assertNever(arg0);
  }
  const obj = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
}
const result = require("initialize").fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(arg0) {
  return require("../../../../discord_common/js/packages/apex/ApexExperiment.tsx")(arg0, initialize, getUnitId, useUnitId);
};
export const ApexExperiment = require("logger").ApexExperiment;
export { getUnitId };