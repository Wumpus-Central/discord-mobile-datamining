// === Module 11971: useMobileCollectiblesPurchaseSKU ===

// Module 11971 (useMobileCollectiblesPurchaseSKU)
import initialize from "initialize" /* 589 */;
import hasAtLeastOneGPlaySynced from "hasAtLeastOneGPlaySynced" /* 9249 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10357 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  const merged = Object.assign(product, Object.create(null));
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = hasAtLeastOneGPlaySynced.getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.skuId = product.skuId;
  obj.platformSkuId = collectibleGoogleSkuId;
  obj.isFreeForStaffSelfPurchase = true;
  return useMobilePurchaseSKUDefault(obj);
};