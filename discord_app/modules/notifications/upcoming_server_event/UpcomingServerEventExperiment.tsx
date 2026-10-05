// discord_app/modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  kind: "user",
  name: "2026-04-upcoming-server-event",
  defaultConfig: { showSettingsToggle: false },
  variations: obj2,
};
obj2 = { 1: null, 2: { showSettingsToggle: true }, 3: { showSettingsToggle: true } };
obj2[3] = { showSettingsToggle: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment.useConfig(tmp2);
    }
  : (location) => {
      const obj = { location };
      return apexExperiment.useConfig(obj);
    };
const result = size.fileFinishedImporting(
  "modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx",
);

export default apexExperiment;
export const useUpcomingServerEventExperiment = tmp3;
export const isEligibleForUpcomingServerEventNotifications = function isEligibleForUpcomingServerEventNotifications(
  location,
) {
  const obj = { location };
  return apexExperiment.getConfig(obj).showSettingsToggle;
};
