// discord_app/modules/quests/experiments/BountiesShopCarouselExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-06-bounties-shop-carousel",
  kind: "user",
  defaultConfig: { placement: "none", sortType: "popularity", buttonVariant: "default", clickable: false },
  variations: null,
};
obj = {
  1: null,
  2: { placement: "outside", sortType: "popularity", buttonVariant: "default", clickable: false },
  3: { placement: "inside", sortType: "popularity", buttonVariant: "default", clickable: false },
  4: { placement: "inside", sortType: "recency", buttonVariant: "default", clickable: false },
  5: { placement: "replace_media", sortType: "popularity", buttonVariant: "default", clickable: false },
  6: { placement: "none", sortType: "popularity", buttonVariant: "blurple", clickable: false },
};
obj[6] = { placement: "outside", sortType: "popularity", buttonVariant: "default", clickable: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesShopCarouselExperiment.tsx");

export const BountiesShopCarouselExperiment = apexExperiment;
export function getBountiesEntryPointButtonVariant(shopCarouselButtonVariant) {
  let str = "primary-overlay";
  if ("blurple" === shopCarouselButtonVariant) {
    str = "primary";
  }
  return str;
}
