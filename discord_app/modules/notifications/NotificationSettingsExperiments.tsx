// === Module 13535: knownExperimentConfigs ===

// Module 13535 (knownExperimentConfigs)
import ApexExperiment from "ApexExperiment";

let obj = { "2026-05-noisier-notif-settings-defaults": null };
obj = { 1: null, 2: { variation: 1 }, 3: { variation: 2 }, 4: { variation: 3 }, 5: { variation: 4 } };
obj[5] = { variation: 5 };
obj[0] = ApexExperiment.createApexExperiment({ name: "2026-05-noisier-notif-settings-defaults", kind: "user", defaultConfig: { variation: 0 }, variations: obj });
const result = require("set").fileFinishedImporting("modules/notifications/NotificationSettingsExperiments.tsx");

export const knownExperimentConfigs = obj;