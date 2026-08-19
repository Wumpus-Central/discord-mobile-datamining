// === Module 13823: apexExperiment ===

// Module 13823 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { enabled: true, clearDeclarative: false } };
obj[2] = { enabled: false, clearDeclarative: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-declarative-notif-settings", kind: "user", defaultConfig: { enabled: false, clearDeclarative: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/notifications/native/NotifSettingsExperiments.tsx");

export const declarativeNotifSettingsExperiment = apexExperiment;