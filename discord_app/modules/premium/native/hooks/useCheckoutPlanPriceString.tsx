// === Module 13143: useCheckoutPlanPriceString ===

// Module 13143 (useCheckoutPlanPriceString)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

const PlatformUtils = obj(1369);
const PremiumBundledPlansUtils = obj(6915);
require = fn;
const useNativeCheckoutStore = fn(6930).useNativeCheckoutStore;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((productId) => {
  let obj = require;
  let availablePlanForItems = dependencyMap;
  const cResult = c.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(orderRequired) {
      return orderRequired.orderRequired;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = useNativeCheckoutStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(getCheckoutContextRecord) {
      return getCheckoutContextRecord.getCheckoutContextRecord();
    };
    cResult[1] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmp4Result = useNativeCheckoutStore(tmp6);
  if (cResult[2] !== tmp5) {
    const tmp8 = PlatformUtils.isIOS() && tmp5;
    cResult[2] = tmp5;
    cResult[3] = tmp8;
    let tmp7 = tmp8;
    const objResult = PlatformUtils;
  } else {
    tmp7 = cResult[3];
  }
  let tmp9 = null;
  if (tmp7) {
    tmp9 = null;
    if (null != tmp4Result) {
      tmp9 = null;
      if (null != productId) {
        if (cResult[4] === tmp4Result) {
        }
        obj = PremiumBundledPlansUtils;
        availablePlanForItems = tmp4Result.getAvailablePlanForItems(obj.getSubscriptionItemsForProduct(productId));
        cResult[4] = tmp4Result;
        cResult[5] = productId;
        cResult[6] = availablePlanForItems;
      }
    }
  }
  if (cResult[7] === tmp9) {
    if (cResult[8] === tmp7) {
      let tmp13 = cResult[9];
    }
    return tmp13;
  }
  const obj3 = { plan: tmp9, useOrderPricing: tmp7 };
  cResult[7] = tmp9;
  cResult[8] = tmp7;
  cResult[9] = obj3;
  tmp13 = obj3;
}) : ((arg0) => {
  _require = arg0;
  const tmp2 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  dependencyMap = tmp2;
  const tmp = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  const tmp3 = require("PlatformUtils").isIOS() && tmp;
  noop = tmp3;
  let obj2 = { plan: null, useOrderPricing: tmp3 };
  const items = [tmp2, arg0, tmp3];
  obj2.plan = noop.useMemo(() => {
    availablePlanForItems = null;
    if (closure_2) {
      availablePlanForItems = null;
      if (null != availablePlanForItems) {
        availablePlanForItems = null;
        if (null != closure_0) {
          availablePlanForItems = availablePlanForItems.getAvailablePlanForItems(PremiumBundledPlansUtils.getSubscriptionItemsForProduct(tmp2));
        }
      }
    }
    return availablePlanForItems;
  }, items);
  return obj2;
});
let closure_4 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(10);
  const tmp2 = closure_4(arg0);
  const plan = tmp2.plan;
  ({ discountedPriceString, regularPriceString } = arg1);
  if (tmp2.useOrderPricing) {
    let tmp3 = null;
    if (null != plan) {
      if (cResult[0] !== plan) {
        const discountedPriceString1 = plan.getDiscountedPriceString();
        cResult[0] = plan;
        cResult[1] = discountedPriceString1;
        let tmp5 = discountedPriceString1;
      } else {
        tmp5 = cResult[1];
      }
      tmp3 = null;
      if (null != tmp5) {
        if (cResult[2] !== plan) {
          const regularPriceString1 = plan.getRegularPriceString();
          cResult[2] = plan;
          cResult[3] = regularPriceString1;
          let tmp7 = regularPriceString1;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp5) {
        }
        const obj2 = { discountedPrice: tmp5, regularPrice: tmp7 };
        cResult[4] = tmp5;
        cResult[5] = tmp7;
        cResult[6] = obj2;
      }
    }
  } else {
    tmp3 = null;
    if (null != discountedPriceString) {
      tmp3 = null;
      if (null != regularPriceString) {
        if (cResult[7] === discountedPriceString) {
          if (cResult[8] === regularPriceString) {
            let tmp4 = cResult[9];
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
  return noop.useMemo(() => {
    if (useOrderPricing) {
      if (null == plan) {
        return null;
      } else {
        discountedPriceString = plan.getDiscountedPriceString();
        let tmp7 = null;
        if (null != discountedPriceString) {
          const obj3 = { discountedPrice: discountedPriceString, regularPrice: plan.getRegularPriceString() };
          tmp7 = obj3;
        }
        return tmp7;
      }
    } else {
      let tmp3 = null;
      if (null != discountedPriceString) {
        tmp3 = null;
        if (null != regularPriceString) {
          const obj = { discountedPrice: tmp, regularPrice: tmp4 };
          tmp3 = obj;
        }
      }
      return tmp3;
    }
  }, items);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

export const useCheckoutPlan = tmp2;
export const useCheckoutPlanDiscountPrices = tmp3;
export const useCheckoutPlanPriceString = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, priceString) => {
  const cResult = c.c(2);
  priceString = undefined;
  if (priceString != null) {
    priceString = priceString.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  const tmp3 = closure_4(arg0);
  const plan = tmp3.plan;
  if (!tmp3.useOrderPricing) {
    return priceString;
  } else if (cResult[0] !== plan) {
    let priceString1;
    if (plan != null) {
      priceString1 = plan.getPriceString();
    }
    if (priceString1 == null) {
      priceString1 = null;
    }
    cResult[0] = plan;
    cResult[1] = priceString1;
  }
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