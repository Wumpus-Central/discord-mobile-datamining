// discord_app/modules/cache/NotificationLoadMessagesExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null, 2: { enabled: true, limit: 1, cooldownMs: 60000, debounceMs: 3000 }, 3: { enabled: true, limit: 25, cooldownMs: 60000, debounceMs: 3000 }, 4: { enabled: true, limit: 10, cooldownMs: 60000, debounceMs: 3000 }, 5: { enabled: true, limit: 25, cooldownMs: 0, debounceMs: 3000 }, 6: { enabled: true, limit: 10, cooldownMs: 0, debounceMs: 3000 }, 7: { enabled: true, limit: 25, cooldownMs: 0, debounceMs: 0 } };
obj[7] = { enabled: true, limit: 10, cooldownMs: 0, debounceMs: 0 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-notification-load-messages", kind: "user", defaultConfig: { enabled: false, limit: 1, cooldownMs: 0, debounceMs: 0 }, variations: obj });
const result = set.fileFinishedImporting("modules/cache/NotificationLoadMessagesExperiment.tsx");

export default apexExperiment;