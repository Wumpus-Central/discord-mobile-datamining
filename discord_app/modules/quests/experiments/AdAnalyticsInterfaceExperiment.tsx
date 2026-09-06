// discord_app/modules/quests/experiments/AdAnalyticsInterfaceExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  STEP_1_LOADED: 0,
  [0]: "STEP_1_LOADED",
  STEP_2_CLICKED_INTERNAL: 1,
  [1]: "STEP_2_CLICKED_INTERNAL",
  STEP_3_CLICKED_EXTERNAL: 2,
  [2]: "STEP_3_CLICKED_EXTERNAL",
  STEP_4_VIEWED_NON_IMPRESSION: 3,
  [3]: "STEP_4_VIEWED_NON_IMPRESSION",
  STEP_5_VIEWED_IMPRESSION: 4,
  [4]: "STEP_5_VIEWED_IMPRESSION",
};
obj = {
  name: "2026-05-use-ad-analytics-interface",
  kind: "user",
  defaultConfig: { enabled: false, maxStep: -1 },
  variations: null,
};
obj = {
  0: { enabled: false, maxStep: -1 },
  1: { enabled: true, maxStep: obj.STEP_1_LOADED },
  2: { enabled: true, maxStep: obj.STEP_2_CLICKED_INTERNAL },
  3: { enabled: true, maxStep: obj.STEP_3_CLICKED_EXTERNAL },
  4: { enabled: true, maxStep: obj.STEP_4_VIEWED_NON_IMPRESSION },
  5: { enabled: true, maxStep: obj.STEP_5_VIEWED_IMPRESSION },
};
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/AdAnalyticsInterfaceExperiment.tsx");

export const AdAnalyticsInterfaceExperimentStep = obj;
export const AdAnalyticsInterfaceExperiment = apexExperiment;
export const shouldMigrateToAdAnalyticsInterface = function shouldMigrateToAdAnalyticsInterface(
  STEP_2_CLICKED_INTERNAL,
  quest_bottom_sheet_console_connect,
) {
  const config = apexExperiment.getConfig({ location: quest_bottom_sheet_console_connect });
  let enabled = config.enabled;
  if (enabled) {
    enabled = STEP_2_CLICKED_INTERNAL <= config.maxStep;
  }
  return enabled;
};
