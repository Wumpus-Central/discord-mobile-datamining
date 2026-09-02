// === Module 8917: apexExperiment ===

// Module 8917 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-shop-this-look-mobile", kind: "user", defaultConfig: { shopThisLookMobileEnabled: false }, variations: { 0: { shopThisLookMobileEnabled: false }, 1: { shopThisLookMobileEnabled: true } } });
const result = set.fileFinishedImporting("modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopThisLookMobileEnabled = function useIsShopThisLookMobileEnabled(UserProfileActionSheet) {
  return apexExperiment.useConfig({ location: UserProfileActionSheet }).shopThisLookMobileEnabled;
};