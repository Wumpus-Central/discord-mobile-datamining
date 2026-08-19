// discord_app/modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx
import useMobilePurchaseSKUDefault from "../../../billing/native/hooks/useMobilePurchaseSKU.android.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { PriceSetAssignmentPurchaseTypes as closure_4 } from "../../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx");

export default function useMobileSocialLayerPurchaseSKU(sku) {
  sku = sku.sku;
  const merged = Object.assign(sku, Object.create(null));
  c0 = undefined;
  const giftParams = merged.giftParams;
  let isGift;
  if (giftParams != null) {
    isGift = giftParams.isGift;
  }
  if (isGift != null) {
    if (isGift) {
      let DEFAULT = constants.GIFT;
    }
    let googleSkuIds;
    if (sku != null) {
      googleSkuIds = sku.googleSkuIds;
    }
    if (googleSkuIds == null) {
      googleSkuIds = {};
    }
    let tmp4 = googleSkuIds[DEFAULT];
    if (tmp4 == null) {
      tmp4 = null;
    }
    c0 = tmp4;
    let items = [tmp4];
    const effect = React.useEffect(() => {
      if (null != _null) {
        const items = [tmp];
        const inAppSkus = _null(dependencyMap[2]).loadInAppSkus(items);
        const obj = _null(dependencyMap[2]);
      }
    }, items);
    let obj = {};
    const merged1 = Object.assign(merged);
    obj.platformSkuId = tmp4;
    obj.isFreeForStaffSelfPurchase = false;
    return useMobilePurchaseSKUDefault(obj);
  }
  DEFAULT = constants.DEFAULT;
};