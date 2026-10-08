// === Module 16206: RegistrationEmailOptInCopyExperiment ===

// Module 16206 (RegistrationEmailOptInCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { kind: "installation", name: "2026-09-registration-email-opt-in-copy", defaultConfig: { trackingCopy: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { trackingCopy: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/auth/RegistrationEmailOptInCopyExperiment.tsx");

export default apexExperiment;