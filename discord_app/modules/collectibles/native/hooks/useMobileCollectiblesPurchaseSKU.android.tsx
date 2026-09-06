// === Module 11014: useMobileCollectiblesPurchaseSKU ===

// Module 11014 (useMobileCollectiblesPurchaseSKU)
import initialize from "initialize" /* 504 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8848 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10815 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = collectibles_CollectiblesUtils.getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.skuId = product.skuId;
  obj.platformSkuId = collectibleGoogleSkuId;
  obj.isFreeForStaffSelfPurchase = true;
  return useMobilePurchaseSKUDefault(obj);
};