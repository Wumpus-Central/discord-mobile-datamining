// discord_app/modules/collectibles/experiments/ImprovedMobileShopLoadingExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ApexExperiment = fn(1453);
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-improved-mobile-shop-loading",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
fn(558);
const context = noop.createContext(false);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/experiments/ImprovedMobileShopLoadingExperiment.tsx");

export default apexExperiment;
export const useIsImprovedMobileShopLoadingEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsImprovedMobileShopLoadingEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment.useConfig(tmp2).enabled;
    }
  : function useIsImprovedMobileShopLoadingEnabled(location) {
      return apexExperiment.useConfig({ location }).enabled;
    };
export const ImprovedMobileShopLoadingProvider = context.Provider;
export const useIsInImprovedMobileShopLoading = function useIsInImprovedMobileShopLoading() {
  return noop.useContext(context);
};
