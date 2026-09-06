// discord_app/modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2025-10-clear-channel-notifications-on-app-foreground-ios",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx",
);

export const shouldClearChannelNotificationsOnAppForeground = function shouldClearChannelNotificationsOnAppForeground(
  location,
) {
  return config.getConfig({ location: location.location }).enabled;
};
