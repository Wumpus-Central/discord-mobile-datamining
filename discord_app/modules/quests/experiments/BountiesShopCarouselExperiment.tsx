// discord_app/modules/quests/experiments/BountiesShopCarouselExperiment.tsx
import ApexExperiment from "ApexExperiment";

let obj = { BASE: 0, [0]: "BASE", POPULARITY: 1, [1]: "POPULARITY", RECENCY: 2, [2]: "RECENCY" };
obj = { enabled: false, variation: obj.BASE };
obj = { 1: null, 2: obj1 };
obj[2] = { enabled: true, variation: obj.RECENCY };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-bounties-shop-carousel", kind: "user", defaultConfig: obj, variations: obj });
const result = require("set").fileFinishedImporting("modules/quests/experiments/BountiesShopCarouselExperiment.tsx");

export const BountiesShopCarouselExperimentVariation = obj;
export const BountiesShopCarouselExperiment = apexExperiment;