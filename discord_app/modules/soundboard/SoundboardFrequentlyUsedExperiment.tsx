// === Module 16288: apexExperiment ===

// Module 16288 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-soundboard-frequently-used", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/soundboard/SoundboardFrequentlyUsedExperiment.tsx");

export default apexExperiment;