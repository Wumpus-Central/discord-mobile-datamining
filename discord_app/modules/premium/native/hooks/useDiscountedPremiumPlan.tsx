// === Module 9385: useDiscountedPremiumPlan ===

// Module 9385 (useDiscountedPremiumPlan)
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7125 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumPlan.tsx");

export const useDiscountedPremiumPlan = ReactCompilerGating.isReactCompilerEnabled() ? (function useDiscountedPremiumPlan(discount, arr) {
  const cResult = require("c").c(14);
  if (null == discount) {
    dependencyMap = null;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [IAPStore];
      cResult[7] = items;
      let tmp13 = items;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== null) {
      const fn = function v() {
        let product = null;
        if (null != c1) {
          product = IAPStore.getProduct(tmp.productId);
        }
        return product;
      };
      const items1 = [null];
      cResult[8] = null;
      cResult[9] = fn;
      cResult[10] = items1;
      let tmp16 = items1;
      let tmp15 = fn;
    } else {
      tmp15 = cResult[9];
      tmp16 = cResult[10];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp13, tmp15, tmp16);
    if (cResult[11] === null) {
      if (cResult[12] === stateFromStores) {
        let tmp18 = cResult[13];
      }
      return tmp18;
    }
    const obj2 = { discountedPlan: null, discountedProduct: stateFromStores };
    cResult[11] = null;
    cResult[12] = stateFromStores;
    cResult[13] = obj2;
    tmp18 = obj2;
    const tmpResult = tmp(504);
  } else {
    discount = discount.discount;
    let planIds;
    if (discount != null) {
      planIds = discount.planIds;
    }
    if (cResult[0] !== planIds) {
      const discount2 = discount.discount;
      let planIds1;
      if (discount2 != null) {
        planIds1 = discount2.planIds;
      }
      if (planIds1 == null) {
        planIds1 = [];
      }
      const discount3 = discount.discount;
      let planIds2;
      if (discount3 != null) {
        planIds2 = discount3.planIds;
      }
      cResult[0] = planIds2;
      cResult[1] = planIds1;
      let tmp5 = planIds1;
    } else {
      tmp5 = cResult[1];
    }
    _require = tmp5;
    if (cResult[5] !== tmp5) {
      class P {
        constructor(arg0) {
          return closure_0.includes(discount.basePlanId);
        }
      }
      cResult[5] = tmp5;
      cResult[6] = P;
    } else {
      class P {
        constructor(arg0) {
          return closure_0.includes(discount.basePlanId);
        }
      }
    }
    const found = arr.find(P);
    cResult[2] = tmp5;
    cResult[3] = arr;
    cResult[4] = found;
  }
  const obj = require("c");
  tmp = _require;
}) : (function useDiscountedPremiumPlan(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [arg0, arg1];
  memo = memo.useMemo(() => {
    if (null == closure_0) {
      return null;
    } else {
      const discount = tmp.discount;
      let planIds;
      if (discount != null) {
        planIds = discount.planIds;
      }
      if (planIds == null) {
        planIds = [];
      }
      return closure_1.find((basePlanId) => planIds.includes(basePlanId.basePlanId));
    }
  }, items);
  const items1 = [IAPStore];
  const items2 = [memo];
  const obj = require("initialize");
  return {
    discountedPlan: memo,
    discountedProduct: require("initialize").useStateFromStores(items1, () => {
      let product = null;
      if (null != memo) {
        product = IAPStore.getProduct(tmp.productId);
      }
      return product;
    }, items2)
  };
});