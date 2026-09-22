// === Module 18291: NotificationLoadMessagesExperiment ===

// Module 18291 (NotificationLoadMessagesExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-notification-load-messages", kind: "user", defaultConfig: { enabled: false, limit: 1, cooldownMs: 0, debounceMs: 0 }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, limit: 1, cooldownMs: 60000, debounceMs: 3000 }, 3: { enabled: true, limit: 25, cooldownMs: 60000, debounceMs: 3000 }, 4: { enabled: true, limit: 10, cooldownMs: 60000, debounceMs: 3000 }, 5: { enabled: true, limit: 25, cooldownMs: 0, debounceMs: 3000 }, 6: { enabled: true, limit: 10, cooldownMs: 0, debounceMs: 3000 }, 7: { enabled: true, limit: 25, cooldownMs: 0, debounceMs: 0 } };
obj2[7] = { enabled: true, limit: 10, cooldownMs: 0, debounceMs: 0 };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/cache/NotificationLoadMessagesExperiment.tsx");

export default apexExperiment;