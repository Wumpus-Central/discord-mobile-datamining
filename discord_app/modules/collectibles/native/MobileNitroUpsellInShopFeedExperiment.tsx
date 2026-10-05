// discord_app/modules/collectibles/native/MobileNitroUpsellInShopFeedExperiment.tsx
import apex_ApexExperimentDefault from "../../experiments/apex/ApexExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj3;
const obj = { GET_NITRO: "getNitro", LEARN_MORE: "learnMore" };
const obj2 = {
  kind: "user",
  name: "2026-09-mobile-nitro-upsell-in-shop-feed",
  defaultConfig: { enabled: false, buttonVariant: obj.GET_NITRO },
  variations: obj3,
};
obj3 = {
  0: { enabled: false, buttonVariant: obj.GET_NITRO },
  1: { enabled: true, buttonVariant: obj.GET_NITRO },
  2: { enabled: true, buttonVariant: obj.LEARN_MORE },
};
const tmp2 = apex_ApexExperimentDefault(obj2);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileNitroUpsellInShopFeedExperiment.tsx");

export default tmp2;
export const NitroUpsellBannerButtonVariant = obj;
