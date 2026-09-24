// === Module 17632: TopSoundboardSoundsExperiment ===

// Module 17632 (TopSoundboardSoundsExperiment)
import ApexExperiment_mod from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
const obj = { kind: "user", name: "2026-08-top-soundboard-sounds", defaultConfig: { enabled: false, topSoundsFirst: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj2[2] = { enabled: true, topSoundsFirst: false };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
const obj3 = { kind: "user", name: "2026-08-top-soundboard-sounds-mobile", defaultConfig: { enabled: false, topSoundsFirst: false }, variations: null };
const obj4 = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj4[2] = { enabled: true, topSoundsFirst: false };
obj3.variations = obj4;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsExperiment.tsx");

export default apexExperiment;
export const TopSoundboardSoundsExperiment = apexExperiment;
export const TopSoundboardSoundsMobileExperiment = apexExperiment1;