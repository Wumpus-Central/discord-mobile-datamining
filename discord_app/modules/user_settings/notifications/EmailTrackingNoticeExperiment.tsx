// === Module 17765: EmailTrackingNoticeExperiment ===

// Module 17765 (EmailTrackingNoticeExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-09-update-email-settings-copy-subtext", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailTrackingNoticeExperiment.tsx");

export default apexExperiment;