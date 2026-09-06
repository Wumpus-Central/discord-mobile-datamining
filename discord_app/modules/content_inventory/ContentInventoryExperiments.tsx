// discord_app/modules/content_inventory/ContentInventoryExperiments.tsx
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-03-content-inventory-memberlist-and-ranker",
  defaultConfig: { enabled: true, impressionCappingEnabled: true },
  variations: { 0: { enabled: false, impressionCappingEnabled: false } },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
obj = {
  kind: "user",
  id: "2025-09_hotwheels_nvidia_boost",
  label: "Next iteration of the activity feed ranking model.",
  commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN,
  defaultConfig: {},
  treatments: null,
};
const items = [
  { id: 16, label: "ML model V3 - Nvidia small boost", config: {} },
  { id: 17, label: "ML model V3 - Nvidia big boost", config: {} },
];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryExperiments.tsx");

export const MemberlistRankerExperiment = apexExperiment;
export const HotwheelsActivityFeedNvidiaExperiment = experiment;
export const isEligibleForContentInventoryV1 = function isEligibleForContentInventoryV1(ContentInventoryManager) {
  let enabled = apexExperiment.getConfig({ location: ContentInventoryManager }).enabled;
  if (!enabled) {
    enabled = obj2.getICYMIEnabled(ContentInventoryManager);
  }
  return enabled;
};
export const isEligibleForImpressionCapping = function isEligibleForImpressionCapping(location) {
  const config = apexExperiment.getConfig({ location });
  let enabled = config.enabled;
  if (enabled) {
    enabled = true === tmp2;
  }
  return enabled;
};
