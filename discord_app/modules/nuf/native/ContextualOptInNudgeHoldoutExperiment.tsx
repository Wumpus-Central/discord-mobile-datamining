// discord_app/modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-06-contextual-opt-in-nudge-holdout",
  kind: "user",
  defaultConfig: { inHoldout: false },
  variations: { 0: { inHoldout: false }, 1: { inHoldout: true } },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
