// === Module 17497: SummaryReminderNotificationExperiment ===

// Module 17497 (SummaryReminderNotificationExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-10-summary-reminder-notif-re-revival", defaultConfig: { showSettingsToggle: false }, variations: null };
const obj2 = { 1: null, 2: { showSettingsToggle: true } };
obj2[2] = { showSettingsToggle: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationExperiment.tsx");

export default apexExperiment;
export function useSummaryReminderNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
}