// discord_app/modules/user_profile/experiments/ClipsOnProfileSetterExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-07-clips-on-profile-setter",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/user_profile/experiments/ClipsOnProfileSetterExperiment.tsx");

export default apexExperiment;
