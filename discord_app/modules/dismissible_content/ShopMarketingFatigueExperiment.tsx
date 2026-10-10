// === Module 2054: ShopMarketingFatigueExperiment ===

// Module 2054 (ShopMarketingFatigueExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-shop-marketing-fatigue", kind: "user", defaultConfig: { enforceFatigue: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enforceFatigue: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dismissible_content/ShopMarketingFatigueExperiment.tsx");

export const getShopMarketingEnforcesFatigue = function getShopMarketingEnforcesFatigue() {
  return config.getConfig({ location: "getShopMarketingEnforcesFatigue" }).enforceFatigue;
};