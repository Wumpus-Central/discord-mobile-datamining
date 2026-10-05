// === Module 6975: ClickstreamExperiment ===

// Module 6975 (ClickstreamExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-06-clickstream-analytics", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/app_analytics/clickstream/ClickstreamExperiment.tsx");

export const clickstreamExperimentEnabled = function clickstreamExperimentEnabled() {
  return config.getConfig({ location: "clickstream" }).enabled;
};