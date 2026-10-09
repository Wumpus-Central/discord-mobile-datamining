// === Module 8071: usePremiumDiscountOffer ===

// Module 8071 (usePremiumDiscountOffer)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import ProductIds from "ProductIds" /* 7120 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 8072 */;
import IAPStore from "IAPStore" /* 7125 */;

require = fn;
const PremiumConstants = fn(1392);
({ PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_4, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: hasOwnProperty } = PremiumConstants);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetDiscountOffer(arg0, arg1) {
  const cResult = c.c(4);
  const tmp4 = useDiscountOfferDefault(arg0);
  if (cResult[0] === tmp4) {
    if (cResult[1] === arg0) {
      if (cResult[2] === arg1) {
        let tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (tmp5 !== Symbol.for("react.early_return_sentinel")) {
        return tmp5;
      }
    }
  }
  Symbol.for("react.early_return_sentinel");
  const values = Object.values(ProductIds.DiscountIdToProductOfferId[arg0]);
  let tmp7 = null;
  if (0 !== values.length) {
    let tmp8 = null;
    if (values.every((item) => set.has(item))) {
      tmp8 = tmp4;
    }
    tmp7 = tmp8;
  }
  cResult[0] = tmp4;
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = tmp7;
  tmp5 = tmp7;
}) : (function useGetDiscountOffer(arg0, arg1) {
  const values = Object.values(ProductIds.DiscountIdToProductOfferId[arg0]);
  let tmp2 = null;
  if (0 !== values.length) {
    let tmp3 = null;
    if (values.every((item) => set.has(item))) {
      tmp3 = tmp;
    }
    tmp2 = tmp3;
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/usePremiumDiscountOffer.android.tsx");

export const usePremiumDiscountOffer = ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumDiscountOffer() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    const fn = function f() {
      return { isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const offerIds = useStateFromStores.useStateFromStoresObject(tmp4, tmp5).offerIds;
  let tmp7 = closure_6(React4, offerIds);
  if (tmp7 == null) {
    tmp7 = closure_6(hasOwnProperty, offerIds);
  }
  return tmp7;
}) : (function usePremiumDiscountOffer() {
  const items = [IAPStore];
  const offerIds = useStateFromStores.useStateFromStoresObject(items, () => ({ isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() })).offerIds;
  let tmp = closure_6(React4, offerIds);
  if (tmp == null) {
    tmp = closure_6(hasOwnProperty, offerIds);
  }
  return tmp;
});
export function usePremiumGroupDiscountOffer() {
  return null;
}