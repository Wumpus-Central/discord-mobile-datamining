// === Module 14078: DisableCameraSimulcastExperiment ===

// Module 14078 (DisableCameraSimulcastExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-05-disable-camera-simulcast", kind: "user", defaultConfig: { enableSimulcast: true }, variations: null };
obj = { 1: null };
obj[1] = { enableSimulcast: false };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;