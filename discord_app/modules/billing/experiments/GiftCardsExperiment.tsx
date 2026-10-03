// discord_app/modules/billing/experiments/GiftCardsExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { name: "2026-02-gift-cards", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = ReactCompilerGating.isReactCompilerEnabled()
  ? (cResult) => {
      cResult = c.c(2);
      const config = apexExperiment.useConfig(cResult);
      if (cResult[0] !== config.enabled) {
        const obj2 = { enabled: config.enabled };
        cResult[0] = config.enabled;
        cResult[1] = obj2;
        let tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : (cResult) => ({ enabled: apexExperiment.useConfig(cResult).enabled });
