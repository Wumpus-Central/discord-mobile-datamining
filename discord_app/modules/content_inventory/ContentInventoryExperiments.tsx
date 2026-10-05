// discord_app/modules/content_inventory/ContentInventoryExperiments.tsx
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import ICYMIExperiment from "../icymi/ICYMIExperiment.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let obj = {
  kind: "user",
  name: "2026-03-content-inventory-memberlist-and-ranker",
  defaultConfig: { enabled: true, impressionCappingEnabled: true },
  variations: { 0: { enabled: false, impressionCappingEnabled: false } },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let obj2 = {
  kind: "user",
  id: "2025-09_hotwheels_nvidia_boost",
  label: "Next iteration of the activity feed ranking model.",
  commonTriggerPoint: CommonTriggerPoints.CONNECTION_OPEN,
  defaultConfig: {},
  treatments: items,
};
items = [
  { id: 16, label: "ML model V3 - Nvidia small boost", config: {} },
  { id: 17, label: "ML model V3 - Nvidia big boost", config: {} },
];
const experiment = createExperiment.createExperiment(obj2);
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryExperiments.tsx");

export const MemberlistRankerExperiment = apexExperiment;
export const HotwheelsActivityFeedNvidiaExperiment = experiment;
export const isEligibleForContentInventoryV1 = function isEligibleForContentInventoryV1(ContentInventoryManager) {
  const obj = { location: ContentInventoryManager };
  let enabled = apexExperiment.getConfig(obj).enabled;
  const obj2 = ICYMIExperiment;
  if (!enabled) {
    enabled = obj2.getICYMIEnabled(ContentInventoryManager);
  }
  return enabled;
};
export const isEligibleForImpressionCapping = function isEligibleForImpressionCapping(location) {
  const obj = { location };
  const config = apexExperiment.getConfig(obj);
  const enabled = config.enabled && true === tmp2;
  return enabled;
};
