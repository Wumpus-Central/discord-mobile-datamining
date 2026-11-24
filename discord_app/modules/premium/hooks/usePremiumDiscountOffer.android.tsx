// === Module 9018: hooks/usePremiumDiscountOffer ===

// Module 9018 (hooks/usePremiumDiscountOffer)
import useStateFromStores from "useStateFromStores" /* 563 */;
import premium_ProductIds from "premium/ProductIds" /* 8972 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 9019 */;
import IAPStore from "IAPStore" /* 8963 */;

require = fn;
const PremiumConstants = fn(1388);
({ PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_4, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: hasOwnProperty } = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/usePremiumDiscountOffer.android.tsx");

export function usePremiumDiscountOffer() {
  items = [IAPStore];
  const offerIds = useStateFromStores.useStateFromStoresObject(items, () => ({ isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() })).offerIds;
  const values = Object.values(premium_ProductIds.DiscountIdToProductOfferId[React4]);
  let tmp5 = null;
  if (0 !== values.length) {
    let tmp6 = null;
    if (values.every((item) => offerIds.has(item))) {
      tmp6 = tmp4;
    }
    tmp5 = tmp6;
  }
  tmp4 = useDiscountOfferDefault(React4);
  const values2 = Object.values(premium_ProductIds.DiscountIdToProductOfferId[hasOwnProperty]);
  let tmp8 = null;
  if (0 !== values2.length) {
    let tmp9 = null;
    if (values2.every((item) => offerIds.has(item))) {
      tmp9 = tmp7;
    }
    tmp8 = tmp9;
  }
  if (tmp5 == null) {
    tmp5 = tmp8;
  }
  return tmp5;
}