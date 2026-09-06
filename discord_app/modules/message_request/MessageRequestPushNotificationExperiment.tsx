// === Module 10097: MessageRequestPushNotificationExperiment ===

// Module 10097 (MessageRequestPushNotificationExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-message-request-push-notification", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null, 2: { enabled: true }, 3: { enabled: false } };
obj[3] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestPushNotificationExperiment.tsx");

export default apexExperiment;