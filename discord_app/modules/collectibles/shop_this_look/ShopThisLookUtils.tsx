// discord_app/modules/collectibles/shop_this_look/ShopThisLookUtils.tsx
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import CollectiblesSKUSourceType from "../../../../discord_common/js/shared/shared-constants/CollectiblesSKUSourceType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
