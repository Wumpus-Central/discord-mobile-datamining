// discord_app/modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-06-contextual-opt-in-nudge-holdout",
  kind: "user",
  defaultConfig: { inHoldout: false },
  variations: { 0: { inHoldout: false }, 1: { inHoldout: true } },
});
const result = set.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
