// discord_app/modules/notifications/native/NotifSettingsExperiments.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const obj = { 1: null, 2: { enabled: true, clearDeclarative: false } };
obj[2] = { enabled: false, clearDeclarative: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-declarative-notif-settings", kind: "user", defaultConfig: { enabled: false, clearDeclarative: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/notifications/native/NotifSettingsExperiments.tsx");

export const declarativeNotifSettingsExperiment = apexExperiment;