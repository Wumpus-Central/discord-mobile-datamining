// === Module 13159: apexExperiment ===

// Module 13159 (apexExperiment)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4294 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;
import createExperiment from "createExperiment" /* 4291 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-content-inventory-memberlist-and-ranker", defaultConfig: { enabled: true, impressionCappingEnabled: true }, variations: { 0: { enabled: false, impressionCappingEnabled: false } } });
let obj = { kind: "user", id: "2025-09_hotwheels_nvidia_boost", label: "Next iteration of the activity feed ranking model.", commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN, defaultConfig: {}, treatments: items };
items = [{ id: 16, label: "ML model V3 - Nvidia small boost", config: {} }, { id: 17, label: "ML model V3 - Nvidia big boost", config: {} }];
const experiment = createExperiment.createExperiment(obj);
obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment({ name: "2026-07-hotwheels-clickable-game-icon", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryExperiments.tsx");

export const MemberlistRankerExperiment = apexExperiment;
export const HotwheelsActivityFeedNvidiaExperiment = experiment;
export const HotwheelsClickableGameIconExperiment = apexExperiment1;
export const useIsHotwheelsClickableGameIconEnabled = function useIsHotwheelsClickableGameIconEnabled(location) {
  return apexExperiment1.useConfig({ location }).enabled;
};
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