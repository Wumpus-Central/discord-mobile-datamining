// discord_app/modules/soundboard/top_sounds/TopSoundboardSoundsExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const obj = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj[2] = { enabled: true, topSoundsFirst: false };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-top-soundboard-sounds", defaultConfig: { enabled: false, topSoundsFirst: false }, variations: obj });
const result = set.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsExperiment.tsx");

export default apexExperiment;