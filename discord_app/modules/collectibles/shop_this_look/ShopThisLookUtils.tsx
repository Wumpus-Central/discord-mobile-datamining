// === Module 13112: ShopThisLookUtils ===

// Module 13112 (ShopThisLookUtils)
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import CollectiblesSKUSourceType from "CollectiblesSKUSourceType" /* 13113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  type = stateFromStores;
  if (null == stateFromStores) {
    return tmp;
  } else if (typeof type.isAvailable !== "function") {
    let obj = { extra: null };
    obj = { skuId: null, skuType: null };
    ({ id: obj3.skuId, type } = type);
    obj.skuType = type;
    obj.extra = obj;
    obj.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", obj);
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