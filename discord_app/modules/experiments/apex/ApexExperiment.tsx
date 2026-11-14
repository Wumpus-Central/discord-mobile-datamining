// discord_app/modules/experiments/apex/ApexExperiment.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ApexUnitUtils from "ApexUnitUtils.tsx";
import FingerprintUtils from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import discord_common_apex_ApexExperimentDefault from "../../../../discord_common/js/packages/apex/ApexExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ApexExperimentStore from "ApexExperimentStore.tsx";

require = fn;
function useUnitId(type, guildId) {
  items = [AuthenticationStore];
  _slicedToArray(
    initialize.useStateFromStoresArray(items, () => {
      items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
      return items;
    }),
    2,
  );
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
}
export const ApexExperiment = fn(1454).ApexExperiment;
export const getUnitId = fn(1253).getUnitId;
