// === Module 17040: apexExperiment ===

// Module 17040 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-video-stutter-mitigation", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = obj132.fileFinishedImporting("modules/media_engine/VideoStutterMitigationExperiment.tsx");

export default apexExperiment;