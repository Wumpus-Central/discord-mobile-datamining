// discord_app/modules/collectibles/native/MobileNitroUpsellInShopPdpExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-09-mobile-nitro-upsell-in-shop-pdp",
  kind: "user",
  defaultConfig: { enabled: false, showActionSheet: false },
  variations: null,
};
const obj2 = { 1: null, 2: { enabled: true, showActionSheet: false } };
obj2[2] = { enabled: true, showActionSheet: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileNitroUpsellInShopPdpExperiment.tsx");

export default apexExperiment;
export const MOBILE_NITRO_UPSELL_IN_SHOP_PDP_EXPERIMENT = "2026-09-mobile-nitro-upsell-in-shop-pdp";
