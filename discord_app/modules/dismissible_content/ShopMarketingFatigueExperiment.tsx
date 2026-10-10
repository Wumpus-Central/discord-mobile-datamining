// discord_app/modules/dismissible_content/ShopMarketingFatigueExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-shop-marketing-fatigue",
  kind: "user",
  defaultConfig: { enforceFatigue: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enforceFatigue: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dismissible_content/ShopMarketingFatigueExperiment.tsx");

export const getShopMarketingEnforcesFatigue = function getShopMarketingEnforcesFatigue() {
  return config.getConfig({ location: "getShopMarketingEnforcesFatigue" }).enforceFatigue;
};
