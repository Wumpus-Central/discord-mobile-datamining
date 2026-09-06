// discord_app/modules/app_analytics/clickstream/ClickstreamExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { name: "2026-06-clickstream-analytics", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/app_analytics/clickstream/ClickstreamExperiment.tsx");

export const clickstreamExperimentEnabled = function clickstreamExperimentEnabled() {
  return config.getConfig({ location: "clickstream" }).enabled;
};
