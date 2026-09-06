// discord_app/modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-06-contextual-opt-in-nudge-holdout",
  kind: "user",
  defaultConfig: { inHoldout: false },
  variations: { 0: { inHoldout: false }, 1: { inHoldout: true } },
});
const result = size.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
