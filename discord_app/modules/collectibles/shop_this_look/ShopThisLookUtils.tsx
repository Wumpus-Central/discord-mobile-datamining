// === Module 12533: isShoppableCollectibleSku ===

// Module 12533 (isShoppableCollectibleSku)
import set from "set" /* 2 */;
import _modDef1208 from "module_1208" /* 1208 */;
import CollectiblesSKUSourceType from "CollectiblesSKUSourceType" /* 12534 */;

const result = set.fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  type = stateFromStores;
  if (null == stateFromStores) {
    return tmp;
  } else if (typeof type.isAvailable !== "function") {
    let obj = _modDef1208;
    obj = { extra: null };
    obj = { skuId: null, skuType: null };
    ({ id: obj3[0], type } = type);
    obj[1] = type;
    obj[0] = obj;
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