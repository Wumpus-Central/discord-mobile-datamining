// discord_app/modules/notifications/native/NotifSettingsExperiments.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enabled: true, clearDeclarative: false } };
obj[2] = { enabled: false, clearDeclarative: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-declarative-notif-settings", kind: "user", defaultConfig: { enabled: false, clearDeclarative: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/notifications/native/NotifSettingsExperiments.tsx");

export const declarativeNotifSettingsExperiment = apexExperiment;