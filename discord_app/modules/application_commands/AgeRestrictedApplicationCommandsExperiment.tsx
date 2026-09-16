// === Module 9550: AgeRestrictedApplicationCommandsExperiment ===

// Module 9550 (AgeRestrictedApplicationCommandsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const obj = { kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default apex_ApexExperimentDefault(obj);