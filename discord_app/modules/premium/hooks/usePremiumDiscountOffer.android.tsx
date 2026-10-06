// === Module 7742: usePremiumDiscountOffer ===

// Module 7742 (usePremiumDiscountOffer)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react from "react" /* 576 */;
import ProductIds from "ProductIds" /* 6926 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 7743 */;
import IAPStore from "IAPStore" /* 6931 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_4, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: hasOwnProperty } = PremiumConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0 = arg1;
  const obj = react;
  const cResult = obj.c(4);
  const tmp4 = useDiscountOfferDefault(arg0);
  if (cResult[0] === tmp4) {
    if (cResult[1] === arg0) {
      let tmp5;
      if (cResult[2] === arg1) {
        tmp5 = cResult[3];
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
}) : ((arg0, arg1) => {
  let closure_0 = arg1;
  const tmp = useDiscountOfferDefault(arg0);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    const fn = function c() {
      const obj = { isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  const offerIds = tmpResult.useStateFromStoresObject(tmp4, tmp5).offerIds;
  let tmp7 = closure_6(React3, offerIds);
  if (tmp7 == null) {
    tmp7 = closure_6(hasOwnProperty, offerIds);
  }
  return tmp7;
}) : (() => {
  let obj = useStateFromStores;
  const items = [IAPStore];
  const offerIds = obj.useStateFromStoresObject(items, () => {
    const obj = { isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() };
    return obj;
  }).offerIds;
  let tmp = closure_6(React3, offerIds);
  if (tmp == null) {
    tmp = closure_6(hasOwnProperty, offerIds);
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/premium/hooks/usePremiumDiscountOffer.android.tsx");

export const usePremiumDiscountOffer = tmp3;
export function usePremiumGroupDiscountOffer() {
  return null;
}