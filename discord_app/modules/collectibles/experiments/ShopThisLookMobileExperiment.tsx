// discord_app/modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-07-shop-this-look-mobile",
  kind: "user",
  defaultConfig: { shopThisLookMobileEnabled: false },
  variations: { 0: { shopThisLookMobileEnabled: false }, 1: { shopThisLookMobileEnabled: true } },
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopThisLookMobileEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsShopThisLookMobileEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment.useConfig(tmp2).shopThisLookMobileEnabled;
    }
  : function useIsShopThisLookMobileEnabled(location) {
      return apexExperiment.useConfig({ location }).shopThisLookMobileEnabled;
    };
