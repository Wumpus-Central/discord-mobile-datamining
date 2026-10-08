// === Module 15616: SummaryReminderNotificationExperiment ===

// Module 15616 (SummaryReminderNotificationExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-10-summary-reminder-notif-re-revival", defaultConfig: { showSettingsToggle: false }, variations: null };
let obj2 = { 1: null, 2: { showSettingsToggle: true } };
obj2[2] = { showSettingsToggle: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationExperiment.tsx");

export default apexExperiment;
export const useSummaryReminderNotificationExperiment = ReactCompilerGating.isReactCompilerEnabled() ? (function useSummaryReminderNotificationExperiment(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2);
}) : (function useSummaryReminderNotificationExperiment(location) {
  return apexExperiment.useConfig({ location });
});