// === Module 16219: MobileNitroUpsellInShopFeedExperiment ===

// Module 16219 (MobileNitroUpsellInShopFeedExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const obj = { GET_NITRO: "getNitro", LEARN_MORE: "learnMore" };
const obj2 = { kind: "user", name: "2026-09-mobile-nitro-upsell-in-shop-feed", defaultConfig: { enabled: false, buttonVariant: obj.GET_NITRO }, variations: { 0: { enabled: false, buttonVariant: obj.GET_NITRO }, 1: { enabled: true, buttonVariant: obj.GET_NITRO }, 2: { enabled: true, buttonVariant: obj.LEARN_MORE } } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileNitroUpsellInShopFeedExperiment.tsx");

export default apex_ApexExperimentDefault(obj2);
export const NitroUpsellBannerButtonVariant = obj;