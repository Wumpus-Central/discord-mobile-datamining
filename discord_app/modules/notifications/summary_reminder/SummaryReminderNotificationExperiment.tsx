// discord_app/modules/notifications/summary_reminder/SummaryReminderNotificationExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-10-summary-reminder-notif-re-revival",
  defaultConfig: { showSettingsToggle: false },
  variations: null,
};
let obj2 = { 1: null, 2: { showSettingsToggle: true } };
obj2[2] = { showSettingsToggle: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/notifications/summary_reminder/SummaryReminderNotificationExperiment.tsx",
);

export default apexExperiment;
export const useSummaryReminderNotificationExperiment = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSummaryReminderNotificationExperiment(location) {
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
    }
  : function useSummaryReminderNotificationExperiment(location) {
      return apexExperiment.useConfig({ location });
    };
