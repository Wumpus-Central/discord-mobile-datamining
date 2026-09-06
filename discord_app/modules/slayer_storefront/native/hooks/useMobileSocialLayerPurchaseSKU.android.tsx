// discord_app/modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx
import GPlayActionCreators from "../../../../actions/native/GPlayActionCreators.tsx";
import useMobilePurchaseSKUDefault from "../../../billing/native/hooks/useMobilePurchaseSKU.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const constants = fn(1074).PriceSetAssignmentPurchaseTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx",
);

export default function useMobileSocialLayerPurchaseSKU(sku) {
  sku = sku.sku;
  const merged = Object.assign(sku, Object.assign({ sku: 0 }));
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
    const effect = noop.useEffect(() => {
      if (null != c0) {
        const items = [tmp];
        const inAppSkus = GPlayActionCreators.loadInAppSkus(items);
      }
    }, items);
    let obj = {};
    const merged1 = Object.assign(merged);
    obj.platformSkuId = tmp4;
    obj.isFreeForStaffSelfPurchase = false;
    return useMobilePurchaseSKUDefault(obj);
  }
  DEFAULT = constants.DEFAULT;
}
