// === Module 15955: MobileNitroUpsellInShopFeedExperiment ===

// Module 15955 (MobileNitroUpsellInShopFeedExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileNitroUpsellInShopFeedExperiment.tsx");

export default apex_ApexExperimentDefault({ kind: "user", name: "2026-09-mobile-nitro-upsell-in-shop-feed", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });