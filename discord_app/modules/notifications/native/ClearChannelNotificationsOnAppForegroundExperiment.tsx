// === Module 17027: shouldClearChannelNotificationsOnAppForeground ===

// Module 17027 (shouldClearChannelNotificationsOnAppForeground)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-10-clear-channel-notifications-on-app-foreground-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx");

export const shouldClearChannelNotificationsOnAppForeground = function shouldClearChannelNotificationsOnAppForeground(location) {
  return config.getConfig({ location: location.location }).enabled;
};