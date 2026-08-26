// discord_app/modules/content_inventory/ContentInventoryExperiments.tsx
import set from "../../../_runtime/00002_set.js";
import ExperimentBuckets from "../experiments/ExperimentConstants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import createExperiment from "../experiments/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-content-inventory-memberlist-and-ranker", defaultConfig: { enabled: true, impressionCappingEnabled: true }, variations: { 0: { enabled: false, impressionCappingEnabled: false } } });
const items = [{ id: 16, label: "ML model V3 - Nvidia small boost", config: {} }, { id: 17, label: "ML model V3 - Nvidia big boost", config: {} }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2025-09_hotwheels_nvidia_boost", label: "Next iteration of the activity feed ranking model.", commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN, defaultConfig: {}, treatments: items });
const obj = { kind: "user", id: "2025-09_hotwheels_nvidia_boost", label: "Next iteration of the activity feed ranking model.", commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN, defaultConfig: {}, treatments: items };
const result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryExperiments.tsx");

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