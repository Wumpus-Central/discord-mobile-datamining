// === Module 14000: StreamZeroVadLeadingExperiment ===

// Module 14000 (StreamZeroVadLeadingExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-stream-zero-vad-leading", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/StreamZeroVadLeadingExperiment.tsx");

export const StreamZeroVadLeadingExperiment = apexExperiment;