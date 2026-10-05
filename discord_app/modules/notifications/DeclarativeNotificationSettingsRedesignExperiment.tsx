// discord_app/modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-09-declarative-notification-settings-redesign",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
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
      return closure_2.useConfig(tmp2).enabled;
    }
  : (location) => {
      const obj = { location };
      return closure_2.useConfig(obj).enabled;
    };
const result = size.fileFinishedImporting(
  "modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx",
);

export const isDeclarativeNotificationSettingsRedesignEnabled =
  function isDeclarativeNotificationSettingsRedesignEnabled(getAssignedNotifSettingsAndMappings) {
    const obj = { location: getAssignedNotifSettingsAndMappings };
    return closure_2.getConfig(obj).enabled;
  };
export const useIsDeclarativeNotificationSettingsRedesignEnabled = tmp2;
