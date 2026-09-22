// === Module 13462: MobileNitroUpsellInShopPdpExperiment ===

// Module 13462 (MobileNitroUpsellInShopPdpExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-mobile-nitro-upsell-in-shop-pdp", kind: "user", defaultConfig: { enabled: false, showActionSheet: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, showActionSheet: false } };
obj2[2] = { enabled: true, showActionSheet: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileNitroUpsellInShopPdpExperiment.tsx");

export default apexExperiment;
export const MOBILE_NITRO_UPSELL_IN_SHOP_PDP_EXPERIMENT = "2026-09-mobile-nitro-upsell-in-shop-pdp";