// === Module 13113: apexExperiment ===

// Module 13113 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-disable-hook-frame-pacer", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/DisableHookFramePacerExperiment.tsx");

export const DisableHookFramePacerExperiment = apexExperiment;