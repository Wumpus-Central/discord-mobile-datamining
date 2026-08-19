// discord_app/modules/collectibles/shop_this_look/ShopThisLookUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import _modDef1208 from "../../../utils/SentryUtils.native.tsx";
import CollectiblesSKUSourceType from "../../../../discord_common/js/shared/shared-constants/CollectiblesSKUSourceType.tsx";

const result = obj132.fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  type = stateFromStores;
  if (null == stateFromStores) {
    return tmp;
  } else if (typeof type.isAvailable !== "function") {
    const obj = { skuId: null, skuType: null };
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