// discord_app/modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2025-10-clear-channel-notifications-on-app-foreground-ios",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx",
);

export const shouldClearChannelNotificationsOnAppForeground = function shouldClearChannelNotificationsOnAppForeground(
  location,
) {
  const obj = { location: location.location };
  return config.getConfig(obj).enabled;
};
