// discord_app/modules/media_engine/VideoStutterMitigationExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-03-video-stutter-mitigation",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/media_engine/VideoStutterMitigationExperiment.tsx");

export default apexExperiment;
