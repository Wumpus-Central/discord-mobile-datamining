// discord_app/modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-04-upcoming-server-event",
  defaultConfig: { showSettingsToggle: false },
  variations: null,
};
let obj2 = { 1: null, 2: { showSettingsToggle: true }, 3: { showSettingsToggle: true } };
obj2[3] = { showSettingsToggle: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx",
);

export default apexExperiment;
export const useUpcomingServerEventExperiment = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUpcomingServerEventExperiment(location) {
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
  : function useUpcomingServerEventExperiment(location) {
      return apexExperiment.useConfig({ location });
    };
export const isEligibleForUpcomingServerEventNotifications = function isEligibleForUpcomingServerEventNotifications(
  location,
) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
