// === Module 5821: WebScreenShareAudioExperiment ===

// Module 5821 (WebScreenShareAudioExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-web-screen-share-audio", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WebScreenShareAudioExperiment.tsx");

export const WebScreenShareAudioExperiment = apexExperiment;