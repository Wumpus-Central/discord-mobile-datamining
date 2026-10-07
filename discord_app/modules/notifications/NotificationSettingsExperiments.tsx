// discord_app/modules/notifications/NotificationSettingsExperiments.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = { "2026-05-noisier-notif-settings-defaults": null };
const obj2 = {
  name: "2026-05-noisier-notif-settings-defaults",
  kind: "user",
  defaultConfig: { variation: 0 },
  variations: null,
};
const obj3 = { 1: null, 2: { variation: 1 }, 3: { variation: 2 }, 4: { variation: 3 }, 5: { variation: 4 } };
obj3[5] = { variation: 5 };
obj2.variations = obj3;
obj["2026-05-noisier-notif-settings-defaults"] = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/notifications/NotificationSettingsExperiments.tsx");

export const knownExperimentConfigs = obj;
