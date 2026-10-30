// === Module 8779: ShopThisLookMobileExperiment ===

// Module 8779 (ShopThisLookMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-shop-this-look-mobile", kind: "user", defaultConfig: { shopThisLookMobileEnabled: false }, variations: { 0: { shopThisLookMobileEnabled: false }, 1: { shopThisLookMobileEnabled: true } } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx");

export default apexExperiment;
export function useIsShopThisLookMobileEnabled(UserProfileActionSheet) {
  return apexExperiment.useConfig({ location: UserProfileActionSheet }).shopThisLookMobileEnabled;
}