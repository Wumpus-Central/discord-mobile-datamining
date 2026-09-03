// discord_app/modules/media_engine/StreamZeroVadLeadingExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-stream-zero-vad-leading",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/media_engine/StreamZeroVadLeadingExperiment.tsx");

export const StreamZeroVadLeadingExperiment = apexExperiment;
