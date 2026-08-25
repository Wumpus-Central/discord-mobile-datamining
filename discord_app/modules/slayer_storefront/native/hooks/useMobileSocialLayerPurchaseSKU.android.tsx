// === Module 10246: useMobileSocialLayerPurchaseSKU ===

// Module 10246 (useMobileSocialLayerPurchaseSKU)
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10247 */;
import closure_3 from "noop" /* 19 */;
import { PriceSetAssignmentPurchaseTypes as closure_4 } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx");

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
        const inAppSkus = _null(closure_1_2[2]).loadInAppSkus(items);
        const obj = _null(closure_1_2[2]);
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