// === Module 14650: apexExperiment ===

// Module 14650 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null, 2: { placement: "outside", sortType: "popularity", buttonVariant: "default" }, 3: { placement: "inside", sortType: "popularity", buttonVariant: "default" }, 4: { placement: "inside", sortType: "recency", buttonVariant: "default" }, 5: { placement: "replace_media", sortType: "popularity", buttonVariant: "default" } };
obj[5] = { placement: "none", sortType: "popularity", buttonVariant: "blurple" };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-bounties-shop-carousel", kind: "user", defaultConfig: { placement: "none", sortType: "popularity", buttonVariant: "default" }, variations: obj });
const result = set.fileFinishedImporting("modules/quests/experiments/BountiesShopCarouselExperiment.tsx");

export const BountiesShopCarouselExperiment = apexExperiment;
export function getBountiesEntryPointButtonVariant(shopCarouselButtonVariant) {
  let str = "primary-overlay";
  if ("blurple" === shopCarouselButtonVariant) {
    str = "primary";
  }
  return str;
}