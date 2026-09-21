// === Module 13419: ShopThisLookUtils ===

// Module 13419 (ShopThisLookUtils)
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import CollectiblesSKUSourceType from "CollectiblesSKUSourceType" /* 13420 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  type = stateFromStores;
  if (null == stateFromStores) {
    return tmp;
  } else if (typeof type.isAvailable !== "function") {
    const obj2 = { extra: null };
    const obj5 = { skuId: null, skuType: null };
    ({ id: obj3.skuId, type } = type);
    obj5.skuType = type;
    obj2.extra = obj5;
    SentryUtilsDefault.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", obj2);
    let flag = false;
  } else {
    flag = type.isAvailable();
    if (flag) {
      const tenantMetadata = type.tenantMetadata;
      let sourceType;
      if (tenantMetadata != null) {
        const collectibles = tenantMetadata.collectibles;
        if (collectibles != null) {
          sourceType = collectibles.sourceType;
        }
      }
      flag = sourceType === CollectiblesSKUSourceType.CollectiblesSKUSourceType.SHOP;
    }
  }
};