// === Module 12802: ShopThisLookUtils ===

// Module 12802 (ShopThisLookUtils)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import CollectiblesSKUSourceType from "CollectiblesSKUSourceType" /* 12803 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  let obj5;
  let tmp = null != stateFromStores;
  if (tmp) {
    let flag;
    if (typeof stateFromStores.isAvailable !== "function") {
      const obj2 = { extra: obj5 };
      obj5 = { skuId: null, skuType: null };
      ({ id: obj3.skuId, type: obj3.skuType } = stateFromStores);
      const obj = SentryUtilsDefault;
      obj.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", obj2);
      flag = false;
    } else {
      flag = stateFromStores.isAvailable();
      if (flag) {
        const tenantMetadata = stateFromStores.tenantMetadata;
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
    tmp = flag;
  }
  return tmp;
};