// === Module 10936: apexExperiment ===

// Module 10936 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { audioOutputPresent: false, nonContextualStreamOutputPresent: false, showTileVolumeIndicator: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-mobile-volume-output-slider-removal", kind: "user", defaultConfig: { audioOutputPresent: true, nonContextualStreamOutputPresent: true, showTileVolumeIndicator: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/MobileAudioOutputExperiment.tsx");

export default apexExperiment;