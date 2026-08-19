// === Module 6700: apexExperiment ===

// Module 6700 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-family-center-connection-prereq", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/parent_tools/FamilyCenterConnectionPrereqExperiment.tsx");

export const FamilyCenterConnectionPrereqExperiment = apexExperiment;