// discord_app/modules/message_request/MessageRequestPushNotificationExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-07-message-request-push-notification",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null, 2: { enabled: true }, 3: { enabled: false } };
obj[3] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestPushNotificationExperiment.tsx");

export default apexExperiment;
