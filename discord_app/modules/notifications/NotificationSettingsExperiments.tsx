// discord_app/modules/notifications/NotificationSettingsExperiments.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { "2026-05-noisier-notif-settings-defaults": null };
obj = {
  name: "2026-05-noisier-notif-settings-defaults",
  kind: "user",
  defaultConfig: { variation: 0 },
  variations: null,
};
obj = { 1: null, 2: { variation: 1 }, 3: { variation: 2 }, 4: { variation: 3 }, 5: { variation: 4 } };
obj[5] = { variation: 5 };
obj.variations = obj;
obj["2026-05-noisier-notif-settings-defaults"] = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/NotificationSettingsExperiments.tsx");

export const knownExperimentConfigs = obj;
