// === Module 8998: apexExperiment ===

// Module 8998 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

let obj = { STEP_1_LOADED: 0, [0]: "STEP_1_LOADED", STEP_2_CLICKED_INTERNAL: 1, [1]: "STEP_2_CLICKED_INTERNAL", STEP_3_CLICKED_EXTERNAL: 2, [2]: "STEP_3_CLICKED_EXTERNAL", STEP_4_VIEWED_NON_IMPRESSION: 3, [3]: "STEP_4_VIEWED_NON_IMPRESSION", STEP_5_VIEWED_IMPRESSION: 4, [4]: "STEP_5_VIEWED_IMPRESSION" };
obj = { enabled: true, maxStep: obj.STEP_1_LOADED };
obj = { enabled: true, maxStep: obj.STEP_2_CLICKED_INTERNAL };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-use-ad-analytics-interface", kind: "user", defaultConfig: { enabled: false, maxStep: -1 }, variations: { 0: { enabled: false, maxStep: -1 }, 1: obj, 2: obj, 3: { enabled: true, maxStep: obj.STEP_3_CLICKED_EXTERNAL }, 4: { enabled: true, maxStep: obj.STEP_4_VIEWED_NON_IMPRESSION }, 5: { enabled: true, maxStep: obj.STEP_5_VIEWED_IMPRESSION } } });
const result = set.fileFinishedImporting("modules/quests/experiments/AdAnalyticsInterfaceExperiment.tsx");

export const AdAnalyticsInterfaceExperimentStep = obj;
export const AdAnalyticsInterfaceExperiment = apexExperiment;
export const shouldMigrateToAdAnalyticsInterface = function shouldMigrateToAdAnalyticsInterface(STEP_2_CLICKED_INTERNAL, quest_bottom_sheet_console_connect) {
  const config = apexExperiment.getConfig({ location: quest_bottom_sheet_console_connect });
  let enabled = config.enabled;
  if (enabled) {
    enabled = STEP_2_CLICKED_INTERNAL <= config.maxStep;
  }
  return enabled;
};