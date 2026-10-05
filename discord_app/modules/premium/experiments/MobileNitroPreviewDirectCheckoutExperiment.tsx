// discord_app/modules/premium/experiments/MobileNitroPreviewDirectCheckoutExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-mobile-nitro-preview-direct-checkout",
  kind: "user",
  defaultConfig: false,
  variations: { 0: false, 1: true },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "native.GetNitroCard" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      return apexExperiment.useConfig(first);
    }
  : () => apexExperiment.useConfig({ location: "native.GetNitroCard" });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileNitroPreviewDirectCheckoutExperiment.tsx");

export const MobileNitroPreviewDirectCheckoutExperiment = apexExperiment;
export const useMobileNitroPreviewDirectCheckoutEnabled = tmp3;
