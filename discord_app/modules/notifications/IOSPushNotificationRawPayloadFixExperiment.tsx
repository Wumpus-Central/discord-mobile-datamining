// === Module 4999: isIOSPushNotificationRawPayloadFixExperimentEnabled ===

// Module 4999 (isIOSPushNotificationRawPayloadFixExperimentEnabled)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-01-ios-push-notif-json-fix", kind: "user", defaultConfig: { enabled: false }, variations: obj });
let c1 = null;
const result = obj132.fileFinishedImporting("modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx");

export const isIOSPushNotificationRawPayloadFixExperimentEnabled = function isIOSPushNotificationRawPayloadFixExperimentEnabled() {
  if (null == enabled) {
    enabled = config.getConfig({ location: "isIOSPushNotificationRawPayloadFixExperiment" }).enabled;
  }
  return enabled;
};