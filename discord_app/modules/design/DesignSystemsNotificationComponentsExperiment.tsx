// discord_app/modules/design/DesignSystemsNotificationComponentsExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2026-09-design-systems-notification-components",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
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
      return apexExperiment.useConfig(tmp2).enabled;
    }
  : (location) => {
      const obj = { location };
      return apexExperiment.useConfig(obj).enabled;
    };
const result = size.fileFinishedImporting("modules/design/DesignSystemsNotificationComponentsExperiment.tsx");

export default apexExperiment;
export const useDesignSystemsNotificationComponents = tmp3;
export const getDesignSystemsNotificationComponents = function getDesignSystemsNotificationComponents(
  DevToolsInAppNotificationTestingScreen,
) {
  const obj = { location: DevToolsInAppNotificationTestingScreen };
  return apexExperiment.getConfig(obj).enabled;
};
