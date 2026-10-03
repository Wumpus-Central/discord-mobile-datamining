// discord_app/modules/collectibles/experiments/ShopStandalonePdpMobileExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-08-shop-standalone-pdp-mobile",
  kind: "user",
  defaultConfig: { standalonePdpEnabled: false },
  variations: { 0: { standalonePdpEnabled: false }, 1: { standalonePdpEnabled: true } },
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopStandalonePdpMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopStandalonePdpMobileEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment.useConfig(tmp2).standalonePdpEnabled;
    }
  : (location) => apexExperiment.useConfig({ location }).standalonePdpEnabled;
