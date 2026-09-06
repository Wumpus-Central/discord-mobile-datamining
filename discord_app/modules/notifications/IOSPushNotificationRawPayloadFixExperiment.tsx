// discord_app/modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-01-ios-push-notif-json-fix",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
let enabled = null;
const result = size.fileFinishedImporting("modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx");

export const isIOSPushNotificationRawPayloadFixExperimentEnabled =
  function isIOSPushNotificationRawPayloadFixExperimentEnabled() {
    if (null == enabled) {
      enabled = config.getConfig({ location: "isIOSPushNotificationRawPayloadFixExperiment" }).enabled;
    }
    return enabled;
  };
