// === Module 9569: ImprovedMobileShopLoadingExperiment ===

// Module 9569 (ImprovedMobileShopLoadingExperiment)
import noop from "module_19" /* 19 */;

const ApexExperiment = fn(1447);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-improved-mobile-shop-loading", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const context = noop.createContext(false);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/experiments/ImprovedMobileShopLoadingExperiment.tsx");

export default apexExperiment;
export function useIsImprovedMobileShopLoadingEnabled(collectibles_shop_v2) {
  return apexExperiment.useConfig({ location: collectibles_shop_v2 }).enabled;
}
export const ImprovedMobileShopLoadingProvider = context.Provider;
export function useIsInImprovedMobileShopLoading() {
  return noop.useContext(context);
}