// discord_app/modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import PremiumGroupExperimentDefault from "../../premium/experiments/PremiumGroupExperiment.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-04-one-day-fractional-nitro",
  kind: "user",
  defaultConfig: false,
  variations: { 1: true },
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp3;
      let tmp5;
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      const tmp4 = PremiumGroupExperimentDefault(tmp3);
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        tmp5 = obj3;
      } else {
        tmp5 = cResult[3];
      }
      const tmp6 = apexExperiment.useConfig(tmp5) && !tmp4;
      return tmp6;
    }
  : (location) => {
      const obj = { location };
      const obj2 = { location };
      const tmp = PremiumGroupExperimentDefault(obj);
      const tmp2 = apexExperiment.useConfig(obj2) && !tmp;
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = tmp3;
