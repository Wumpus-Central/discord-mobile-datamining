// discord_app/modules/premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { name: "2026-06-macaron", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx",
);

export default apexExperiment;
export const useMobileNitroManageSubscriptionsSettingsExperiment =
  function useMobileNitroManageSubscriptionsSettingsExperiment(location) {
    return apexExperiment.useConfig({ location: location.location }).enabled;
  };
export const getMobileNitroManageSubscriptionsSettingsExperiment =
  function getMobileNitroManageSubscriptionsSettingsExperiment(location) {
    return apexExperiment.getConfig({ location: location.location }).enabled;
  };
