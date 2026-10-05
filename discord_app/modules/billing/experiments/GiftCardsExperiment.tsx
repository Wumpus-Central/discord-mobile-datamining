// discord_app/modules/billing/experiments/GiftCardsExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let cResult;

let obj2;
let obj = { name: "2026-02-gift-cards", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (cResult) => {
      let tmp3;
      const obj = react;
      cResult = obj.c(2);
      const config = apexExperiment.useConfig(cResult);
      if (cResult[0] !== config.enabled) {
        const obj2 = { enabled: config.enabled };
        cResult[0] = config.enabled;
        cResult[1] = obj2;
        tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : (cResult) => {
      const obj = { enabled: apexExperiment.useConfig(cResult).enabled };
      return obj;
    };
const result = size.fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = tmp3;
