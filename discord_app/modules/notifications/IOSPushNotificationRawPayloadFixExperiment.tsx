// discord_app/modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-01-ios-push-notif-json-fix",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj,
});
let c1 = null;
const result = set.fileFinishedImporting("modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx");

export const isIOSPushNotificationRawPayloadFixExperimentEnabled =
  function isIOSPushNotificationRawPayloadFixExperimentEnabled() {
    if (null == enabled) {
      enabled = config.getConfig({ location: "isIOSPushNotificationRawPayloadFixExperiment" }).enabled;
    }
    return enabled;
  };
