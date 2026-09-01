// discord_app/modules/experiments/apex/ApexExperiment.tsx
import extractId from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import loggerDefault from "../../../../discord_common/js/packages/apex/ApexExperiment.tsx";
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../stores/AuthenticationStore.tsx";
import closure_5 from "ApexExperimentStore.tsx";

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
  callback(
    initialize.useStateFromStoresArray(items, () => {
      const items = [store.getId(), store.getInstallationForTracking()];
      return items;
    }),
    2,
  );
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
    tmpResult = tmp(1471);
    tmpResult.assertNever(arg0);
  }
  const obj = initialize;
}
const result = require("set").fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(ApexExperiment) {
  return loggerDefault(ApexExperiment, closure_5, getUnitId, useUnitId);
}
export const ApexExperiment = require("logger").ApexExperiment;
export { getUnitId };
