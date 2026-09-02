// === Module 16882: apexExperiment ===

// Module 16882 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let obj = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj[2] = { enabled: true, topSoundsFirst: false };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-top-soundboard-sounds", defaultConfig: { enabled: false, topSoundsFirst: false }, variations: obj });
obj = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj[2] = { enabled: true, topSoundsFirst: false };
const apexExperiment1 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-top-soundboard-sounds-mobile", defaultConfig: { enabled: false, topSoundsFirst: false }, variations: obj });
const result = set.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsExperiment.tsx");

export default apexExperiment;
export const TopSoundboardSoundsExperiment = apexExperiment;
export const TopSoundboardSoundsMobileExperiment = apexExperiment1;