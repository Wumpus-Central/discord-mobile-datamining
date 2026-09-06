// === Module 15081: apexExperiment ===

// Module 15081 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null, 2: { placement: "outside", sortType: "popularity", buttonVariant: "default", clickable: false }, 3: { placement: "inside", sortType: "popularity", buttonVariant: "default", clickable: false }, 4: { placement: "inside", sortType: "recency", buttonVariant: "default", clickable: false }, 5: { placement: "replace_media", sortType: "popularity", buttonVariant: "default", clickable: false }, 6: { placement: "none", sortType: "popularity", buttonVariant: "blurple", clickable: false } };
obj[6] = { placement: "outside", sortType: "popularity", buttonVariant: "default", clickable: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-bounties-shop-carousel", kind: "user", defaultConfig: { placement: "none", sortType: "popularity", buttonVariant: "default", clickable: false }, variations: obj });
const result = set.fileFinishedImporting("modules/quests/experiments/BountiesShopCarouselExperiment.tsx");

export const BountiesShopCarouselExperiment = apexExperiment;
export function getBountiesEntryPointButtonVariant(shopCarouselButtonVariant) {
  let str = "primary-overlay";
  if ("blurple" === shopCarouselButtonVariant) {
    str = "primary";
  }
  return str;
}