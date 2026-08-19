// discord_app/modules/experiments/apex/ApexExperiment.tsx
import extractId from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import loggerDefault from "../../../../discord_common/js/packages/apex/ApexExperiment.tsx";
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";

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