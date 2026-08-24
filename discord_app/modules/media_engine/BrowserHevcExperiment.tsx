// discord_app/modules/media_engine/BrowserHevcExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-08-browser-hevc", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/BrowserHevcExperiment.tsx");

export default apexExperiment;