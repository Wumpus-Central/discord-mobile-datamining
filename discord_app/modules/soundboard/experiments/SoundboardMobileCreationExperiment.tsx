// === Module 19922: SoundboardMobileCreationExperiment ===

// Module 19922 (SoundboardMobileCreationExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", name: "2026-11-mobile-soundboard-sound-creation", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardMobileCreationExperiment.tsx");

export default apexExperiment;