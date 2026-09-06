// discord_app/modules/notifications/native/NotifSettingsExperiments.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-04-declarative-notif-settings",
  kind: "user",
  defaultConfig: { enabled: false, clearDeclarative: false },
  variations: null,
};
obj = { 1: null, 2: { enabled: true, clearDeclarative: false } };
obj[2] = { enabled: false, clearDeclarative: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/native/NotifSettingsExperiments.tsx");

export const declarativeNotifSettingsExperiment = apexExperiment;
