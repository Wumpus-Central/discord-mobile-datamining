// === Module 14423: BountiesShopCarouselExperimentVariation ===

// Module 14423 (BountiesShopCarouselExperimentVariation)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { BASE: 0, [0]: "BASE", POPULARITY: 1, [1]: "POPULARITY", RECENCY: 2, [2]: "RECENCY" };
obj = { 1: null, 2: obj1 };
obj[2] = { enabled: true, variation: obj.RECENCY };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-bounties-shop-carousel", kind: "user", defaultConfig: obj, variations: obj });
const result = obj132.fileFinishedImporting("modules/quests/experiments/BountiesShopCarouselExperiment.tsx");

export const BountiesShopCarouselExperimentVariation = obj;
export const BountiesShopCarouselExperiment = apexExperiment;