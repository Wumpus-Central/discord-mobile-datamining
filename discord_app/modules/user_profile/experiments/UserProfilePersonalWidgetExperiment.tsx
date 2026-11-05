// discord_app/modules/user_profile/experiments/UserProfilePersonalWidgetExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-07-personal-widget",
  kind: "user",
  defaultConfig: { enabled: false, showCreateEntrypoint: false },
  variations: {
    0: { enabled: false, showCreateEntrypoint: false },
    1: { enabled: true, showCreateEntrypoint: false },
    2: { enabled: true, showCreateEntrypoint: true },
  },
});
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePersonalWidgetExperiment.tsx");

export default apexExperiment;
