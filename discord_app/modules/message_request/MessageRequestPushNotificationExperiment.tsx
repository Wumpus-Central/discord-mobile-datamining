// discord_app/modules/message_request/MessageRequestPushNotificationExperiment.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enabled: true }, 3: { enabled: false } };
obj[3] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-message-request-push-notification", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/message_request/MessageRequestPushNotificationExperiment.tsx");

export default apexExperiment;