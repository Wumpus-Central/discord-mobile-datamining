// discord_app/modules/experiments/apex/ApexExperiment.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import FingerprintUtils from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import discord_common_apex_ApexExperimentDefault from "../../../../discord_common/js/packages/apex/ApexExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ApexExperimentStore from "ApexExperimentStore.tsx";

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
  _slicedToArray(
    initialize.useStateFromStoresArray(items, () => {
      const items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
      return items;
    }),
    2,
  );
  if ("guild" === type) {
    return guildId.guildId;
  } else if ("user" === type) {
    return tmp4;
  } else if ("installation" === type) {
    let tmpResult = FingerprintUtils;
    let str3 = tmpResult.maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    tmpResult = GlobalUtils;
    tmpResult.assertNever(type);
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(ApexExperiment) {
  return discord_common_apex_ApexExperimentDefault(ApexExperiment, ApexExperimentStore, getUnitId, useUnitId);
}
export const ApexExperiment = fn(1435).ApexExperiment;
export { getUnitId };
