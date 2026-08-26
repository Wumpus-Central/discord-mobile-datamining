// === Module 16496: apexExperiment ===

// Module 16496 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj[2] = { enabled: true, topSoundsFirst: false };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-top-soundboard-sounds", defaultConfig: { enabled: false, topSoundsFirst: false }, variations: obj });
const result = set.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsExperiment.tsx");

export default apexExperiment;