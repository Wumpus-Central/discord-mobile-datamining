// === Module 14291: NotificationSettingsExperiments ===

// Module 14291 (NotificationSettingsExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let ApexExperiment;
let obj2;
let obj3;
const obj = { "2026-05-noisier-notif-settings-defaults": ApexExperiment.createApexExperiment(obj2) };
ApexExperiment = ApexExperiment_mod;
obj2 = { name: "2026-05-noisier-notif-settings-defaults", kind: "user", defaultConfig: { variation: 0 }, variations: obj3 };
obj3 = { 1: null, 2: { variation: 1 }, 3: { variation: 2 }, 4: { variation: 3 }, 5: { variation: 4 } };
obj3[5] = { variation: 5 };
const result = size.fileFinishedImporting("modules/notifications/NotificationSettingsExperiments.tsx");

export const knownExperimentConfigs = obj;