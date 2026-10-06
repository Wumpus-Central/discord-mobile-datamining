// === Module 13162: useCheckoutPlanPriceString ===

// Module 13162 (useCheckoutPlanPriceString)
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 6925 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6943 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((productId) => {
  let first;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(orderRequired) {
      return orderRequired.orderRequired;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useNativeCheckoutStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(getCheckoutContextRecord) {
      return getCheckoutContextRecord.getCheckoutContextRecord();
    };
    cResult[1] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
  }
  const tmp5Result = useNativeCheckoutStore(tmp7);
  if (cResult[2] !== tmp6) {
    const tmpResult = PlatformUtils;
    const tmp10 = tmpResult.isIOS() && tmp6;
    cResult[2] = tmp6;
    cResult[3] = tmp10;
    tmp9 = tmp10;
  } else {
    tmp9 = cResult[3];
  }
  let tmp11 = null;
  if (tmp9) {
    tmp11 = null;
    if (null != tmp5Result) {
      tmp11 = null;
      if (null != productId) {
        if (cResult[4] === tmp5Result) {
          let tmp13;
          if (cResult[5] === productId) {
            tmp13 = cResult[6];
          }
          tmp11 = tmp13;
        }
        const getAvailablePlanForItems = tmp5Result.getAvailablePlanForItems;
        const tmpResult2 = PremiumBundledPlansUtils;
        const availablePlanForItems = getAvailablePlanForItems(tmpResult2.getSubscriptionItemsForProduct(productId));
        cResult[4] = tmp5Result;
        cResult[5] = productId;
        cResult[6] = availablePlanForItems;
        tmp13 = availablePlanForItems;
      }
    }
  }
  if (cResult[7] === tmp11) {
    let tmp15;
    if (cResult[8] === tmp9) {
      tmp15 = cResult[9];
    }
    return tmp15;
  }
  const obj2 = { plan: tmp11, useOrderPricing: tmp9 };
  cResult[7] = tmp11;
  cResult[8] = tmp9;
  cResult[9] = obj2;
  tmp15 = obj2;
}) : ((arg0) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let items;
  _require = arg0;
  const tmp = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  const tmp2 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  dependencyMap = tmp2;
  let obj = require("PlatformUtils");
  const tmp3 = obj.isIOS() && tmp;
  react = tmp3;
  const obj2 = {
    plan: react.useMemo(() => {
      let availablePlanForItems = null;
      if (closure_2) {
        availablePlanForItems = null;
        if (null != closure_1) {
          availablePlanForItems = null;
          if (null != closure_0) {
            const getAvailablePlanForItems = closure_1.getAvailablePlanForItems;
            const obj = PremiumBundledPlansUtils;
            availablePlanForItems = getAvailablePlanForItems(obj.getSubscriptionItemsForProduct(tmp3));
          }
        }
      }
      return availablePlanForItems;
    }, items),
    useOrderPricing: tmp3
  };
  items = [tmp2, arg0, tmp3];
  return obj2;
});
let closure_4 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let discountedPriceString;
  let regularPriceString;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp2 = closure_4(arg0);
  const plan = tmp2.plan;
  ({ discountedPriceString, regularPriceString } = arg1);
  if (tmp2.useOrderPricing) {
    tmp3 = null;
    if (null != plan) {
      let tmp5;
      if (cResult[0] !== plan) {
        const discountedPriceString1 = plan.getDiscountedPriceString();
        cResult[0] = plan;
        cResult[1] = discountedPriceString1;
        tmp5 = discountedPriceString1;
      } else {
        tmp5 = cResult[1];
      }
      tmp3 = null;
      if (null != tmp5) {
        let tmp7;
        if (cResult[2] !== plan) {
          const regularPriceString1 = plan.getRegularPriceString();
          cResult[2] = plan;
          cResult[3] = regularPriceString1;
          tmp7 = regularPriceString1;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp5) {
          let tmp9;
          if (cResult[5] === tmp7) {
            tmp9 = cResult[6];
          }
          tmp3 = tmp9;
        }
        const obj2 = { discountedPrice: tmp5, regularPrice: tmp7 };
        cResult[4] = tmp5;
        cResult[5] = tmp7;
        cResult[6] = obj2;
        tmp9 = obj2;
      }
    }
  } else {
    tmp3 = null;
    if (null != discountedPriceString) {
      tmp3 = null;
      if (null != regularPriceString) {
        if (cResult[7] === discountedPriceString) {
          let tmp4;
          if (cResult[8] === regularPriceString) {
            tmp4 = cResult[9];
          }
          tmp3 = tmp4;
        }
        const obj3 = { discountedPrice: discountedPriceString, regularPrice: regularPriceString };
        cResult[7] = discountedPriceString;
        cResult[8] = regularPriceString;
        cResult[9] = obj3;
        tmp4 = obj3;
      }
    }
  }
  return tmp3;
}) : ((arg0, discountedPriceString) => {
  const tmp = closure_4(arg0);
  const plan = tmp.plan;
  const useOrderPricing = tmp.useOrderPricing;
  discountedPriceString = discountedPriceString.discountedPriceString;
  const regularPriceString = discountedPriceString.regularPriceString;
  const items = [discountedPriceString, plan, regularPriceString, useOrderPricing];
  return react.useMemo(() => {
    if (useOrderPricing) {
      if (null == plan) {
        return null;
      } else {
        discountedPriceString = plan.getDiscountedPriceString();
        let tmp8 = null;
        if (null != discountedPriceString) {
          tmp8 = { discountedPrice: discountedPriceString, regularPrice: plan.getRegularPriceString() };
          const obj3 = { discountedPrice: discountedPriceString, regularPrice: plan.getRegularPriceString() };
        }
        return tmp8;
      }
    } else {
      let tmp4 = null;
      if (null != discountedPriceString) {
        tmp4 = null;
        if (null != regularPriceString) {
          tmp4 = { discountedPrice: tmp2, regularPrice: tmp5 };
          const obj = { discountedPrice: tmp2, regularPrice: tmp5 };
        }
      }
      return tmp4;
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, priceString) => {
  const obj = react2;
  const cResult = obj.c(2);
  priceString = undefined;
  if (priceString != null) {
    priceString = priceString.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  const tmp3 = closure_4(arg0);
  const plan = tmp3.plan;
  if (tmp3.useOrderPricing) {
    let tmp4;
    if (cResult[0] !== plan) {
      let priceString1;
      if (plan != null) {
        priceString1 = plan.getPriceString();
      }
      if (priceString1 == null) {
        priceString1 = null;
      }
      cResult[0] = plan;
      cResult[1] = priceString1;
      tmp4 = priceString1;
    } else {
      tmp4 = cResult[1];
    }
    priceString = tmp4;
  }
  return priceString;
}) : ((arg0, priceString) => {
  priceString = undefined;
  if (priceString != null) {
    priceString = priceString.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  const tmp2 = closure_4(arg0);
  const plan = tmp2.plan;
  if (tmp2.useOrderPricing) {
    let priceString1;
    if (plan != null) {
      priceString1 = plan.getPriceString();
    }
    if (priceString1 == null) {
      priceString1 = null;
    }
    priceString = priceString1;
  }
  return priceString;
});
const result = size.fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

export const useCheckoutPlan = tmp2;
export const useCheckoutPlanDiscountPrices = tmp3;
export const useCheckoutPlanPriceString = tmp4;