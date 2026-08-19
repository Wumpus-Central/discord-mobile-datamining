// === Module 13827: knownExperimentConfigs ===

// Module 13827 (knownExperimentConfigs)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { variation: 1 }, 3: { variation: 2 }, 4: { variation: 3 }, 5: { variation: 4 } };
obj[5] = { variation: 5 };
obj[0] = ApexExperiment.createApexExperiment({ name: "2026-05-noisier-notif-settings-defaults", kind: "user", defaultConfig: { variation: 0 }, variations: obj });
const result = obj132.fileFinishedImporting("modules/notifications/NotificationSettingsExperiments.tsx");

export const knownExperimentConfigs = obj;