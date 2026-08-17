// discord_app/modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx
import initialize from "initialize" /* 589 */;
import hasAtLeastOneGPlaySynced from "hasAtLeastOneGPlaySynced" /* 9249 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10357 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  const merged = Object.assign(product, Object.create(null));
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = hasAtLeastOneGPlaySynced.getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const obj2 = hasAtLeastOneGPlaySynced;
  const merged1 = Object.assign(merged);
  obj.skuId = product.skuId;
  obj.platformSkuId = collectibleGoogleSkuId;
  obj.isFreeForStaffSelfPurchase = true;
  return useMobilePurchaseSKUDefault(obj);
};