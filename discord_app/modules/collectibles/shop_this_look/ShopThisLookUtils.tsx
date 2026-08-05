// discord_app/modules/collectibles/shop_this_look/ShopThisLookUtils.tsx
import { CollectiblesSKUSourceType } from "../../../../discord_common/js/shared/shared-constants/CollectiblesSKUSourceType.tsx";
const result = require("set").fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  let tmp = null != stateFromStores && stateFromStores.isAvailable();
  if (tmp) {
    const tenantMetadata = stateFromStores.tenantMetadata;
    let sourceType;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        sourceType = collectibles.sourceType;
      }
    }
    tmp = sourceType === CollectiblesSKUSourceType.CollectiblesSKUSourceType.SHOP;
  }
  return tmp;
};