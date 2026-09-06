// === Module 13299: useCheckoutPlan ===

// Module 13299 (useCheckoutPlan)
import closure_2 from "noop" /* 19 */;
import { useNativeCheckoutStore } from "context" /* 7424 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

export const useCheckoutPlan = function useCheckoutPlan(arg0) {
  const _require = arg0;
  const tmp2 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  dependencyMap = tmp2;
  let obj = _require(1115);
  const tmp3 = obj.isIOS() && useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  const React = tmp3;
  obj = {
    plan: React.useMemo(() => {
      let availablePlanForItems = null;
      if (closure_2) {
        availablePlanForItems = null;
        if (null != table) {
          availablePlanForItems = null;
          if (null != productId) {
            availablePlanForItems = obj.getAvailablePlanForItems(productId(table[3]).getSubscriptionItemsForProduct(tmp2));
            const obj2 = productId(table[3]);
          }
        }
        obj = table;
      }
      return availablePlanForItems;
    }, items),
    useOrderPricing: tmp3
  };
  items = [tmp2, arg0, tmp3];
  return obj;
};
export const useCheckoutPlanDiscountPrices = function useCheckoutPlanDiscountPrices(productId, discountedPriceString) {
  let memo = productId;
  const tmp2 = regularPriceString((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  dependencyMap = tmp2;
  const tmp = regularPriceString((orderRequired) => orderRequired.orderRequired);
  let tmp3 = memo(1115).isIOS() && tmp;
  discountedPriceString = tmp3;
  const items = [tmp2, productId, tmp3];
  memo = discountedPriceString.useMemo(() => {
    let availablePlanForItems = null;
    if (closure_2) {
      availablePlanForItems = null;
      if (null != table) {
        availablePlanForItems = null;
        if (null != productId) {
          availablePlanForItems = obj.getAvailablePlanForItems(productId(table[3]).getSubscriptionItemsForProduct(tmp2));
          const obj2 = productId(table[3]);
        }
      }
      obj = table;
    }
    return availablePlanForItems;
  }, items);
  dependencyMap = tmp3;
  discountedPriceString = discountedPriceString.discountedPriceString;
  regularPriceString = discountedPriceString.regularPriceString;
  const items1 = [discountedPriceString, memo, regularPriceString, tmp3];
  return discountedPriceString.useMemo(() => {
    if (closure_1) {
      if (null == memo) {
        return null;
      } else {
        discountedPriceString = obj2.getDiscountedPriceString();
        let tmp7 = null;
        if (null != discountedPriceString) {
          let obj = { discountedPrice: null, regularPrice: null };
          obj[0] = discountedPriceString;
          obj[1] = obj2.getRegularPriceString();
          tmp7 = obj;
        }
        return tmp7;
      }
    } else {
      let tmp3 = null;
      if (null != discountedPriceString) {
        tmp3 = null;
        if (null != regularPriceString) {
          obj = { discountedPrice: null, regularPrice: null };
          obj[0] = tmp;
          obj[1] = tmp4;
          tmp3 = obj;
        }
      }
      return tmp3;
    }
  }, items1);
};
export const useCheckoutPlanPriceString = function useCheckoutPlanPriceString(productId, first) {
  let priceString;
  if (first != null) {
    priceString = first.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  const _require = productId;
  const tmp3 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  dependencyMap = tmp3;
  const tmp2 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  const tmp4 = _require(1115).isIOS() && tmp2;
  const React = tmp4;
  const items = [tmp3, productId, tmp4];
  const memo = React.useMemo(() => {
    let availablePlanForItems = null;
    if (closure_2) {
      availablePlanForItems = null;
      if (null != table) {
        availablePlanForItems = null;
        if (null != productId) {
          availablePlanForItems = obj.getAvailablePlanForItems(productId(table[3]).getSubscriptionItemsForProduct(tmp2));
          const obj2 = productId(table[3]);
        }
      }
      obj = table;
    }
    return availablePlanForItems;
  }, items);
  if (tmp4) {
    let priceString1;
    if (memo != null) {
      priceString1 = memo.getPriceString();
    }
    if (priceString1 == null) {
      priceString1 = null;
    }
    priceString = priceString1;
  }
  return priceString;
};