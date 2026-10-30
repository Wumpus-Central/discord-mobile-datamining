// discord_app/modules/notifications/summary_reminder/SummaryReminderNotificationExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-10-summary-reminder-notif-re-revival",
  defaultConfig: { showSettingsToggle: false },
  variations: null,
};
const obj2 = { 1: null, 2: { showSettingsToggle: true } };
obj2[2] = { showSettingsToggle: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/notifications/summary_reminder/SummaryReminderNotificationExperiment.tsx",
);

export default apexExperiment;
export function useSummaryReminderNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
}
