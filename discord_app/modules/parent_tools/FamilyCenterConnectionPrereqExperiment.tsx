// === Module 11927: FamilyCenterConnectionPrereqExperiment ===

// Module 11927 (FamilyCenterConnectionPrereqExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-06-family-center-connection-prereq", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterConnectionPrereqExperiment.tsx");

export const FamilyCenterConnectionPrereqExperiment = apexExperiment;