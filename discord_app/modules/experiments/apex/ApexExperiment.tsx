// discord_app/modules/experiments/apex/ApexExperiment.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import FingerprintUtils from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import discord_common_apex_ApexExperimentDefault from "../../../../discord_common/js/packages/apex/ApexExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ApexExperimentStore from "ApexExperimentStore.tsx";

require = fn;
function getUnitId(arg0, guildId) {
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return AuthenticationStore.getId();
  } else if ("installation" === arg0) {
    let str2 = FingerprintUtils.maybeExtractId(AuthenticationStore.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    GlobalUtils.assertNever(arg0);
  }
}
function useUnitId(arg0, guildId) {
  let items = [AuthenticationStore];
  _slicedToArray(
    initialize.useStateFromStoresArray(items, () => {
      const items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
      return items;
    }),
    2,
  );
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return tmp4;
  } else if ("installation" === arg0) {
    let tmpResult = tmp(1255);
    let str3 = tmpResult.maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    tmpResult = tmp(1369);
    tmpResult.assertNever(arg0);
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(ApexExperiment) {
  return discord_common_apex_ApexExperimentDefault(ApexExperiment, ApexExperimentStore, getUnitId, useUnitId);
}
export const ApexExperiment = fn(1435).ApexExperiment;
export { getUnitId };
