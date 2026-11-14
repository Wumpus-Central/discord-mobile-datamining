// === Module 18531: ShopTwelveDaysPromoExperiment ===

// Module 18531 (ShopTwelveDaysPromoExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { enabled: false };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-10-shop-twelve-days-promo", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopTwelveDaysPromoExperiment.tsx");

export function useShopTwelveDaysPromoConfig(TwelveDaysHomeNagbar, autoTrackExposure) {
  return closure_0.useConfig({ location: TwelveDaysHomeNagbar }, autoTrackExposure);
}