// discord_app/modules/app_channels/AppChannelExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "guild",
  name: "2026-07-app-channels",
  defaultConfig: { enabled: false },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/app_channels/AppChannelExperiment.tsx");

export default apexExperiment;
