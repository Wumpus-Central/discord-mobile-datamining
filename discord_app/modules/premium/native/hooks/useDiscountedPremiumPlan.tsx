// discord_app/modules/premium/native/hooks/useDiscountedPremiumPlan.tsx
import react from "../../../../../_runtime/00019_react.js";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (discount, arr) => {
      let closure_0;
      let closure_1;
      let obj2;
      let tmp13;
      let tmp15;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(14);
      let tmp4 = null;
      if (null != discount) {
        let tmp7;
        discount = discount.discount;
        let planIds;
        const first = cResult[0];
        if (discount != null) {
          planIds = discount.planIds;
        }
        if (first !== planIds) {
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
          tmp7 = planIds1;
        } else {
          tmp7 = cResult[1];
        }
        _require = tmp7;
        if (cResult[2] === tmp7) {
          let tmp10;
          if (cResult[3] === arr) {
            tmp10 = cResult[4];
          }
          tmp4 = tmp10;
        }
        if (cResult[5] !== tmp7) {
          class P {
            constructor(arg0) {
              return closure_0.includes(discount.basePlanId);
            }
          }
          cResult[5] = tmp7;
          cResult[6] = P;
        } else {
          class P {
            constructor(arg0) {
              return closure_0.includes(discount.basePlanId);
            }
          }
        }
        const found = arr.find(P);
        cResult[2] = tmp7;
        cResult[3] = arr;
        cResult[4] = found;
        tmp10 = found;
      }
      dependencyMap = tmp4;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0) {
            return closure_0.includes(discount.basePlanId);
          }
        }
        const items = [IAPStore];
        cResult[7] = items;
        tmp13 = items;
      } else {
        class P {
          constructor(arg0) {
            return closure_0.includes(discount.basePlanId);
          }
        }
      }
      if (cResult[8] !== tmp4) {
        class P {
          constructor(arg0) {
            return closure_0.includes(discount.basePlanId);
          }
        }
        const items1 = [tmp4];
        cResult[8] = tmp4;
        cResult[9] = tmp16;
        cResult[10] = items1;
        tmp15 = items1;
      } else {
        class P {
          constructor(arg0) {
            return closure_0.includes(discount.basePlanId);
          }
        }
        tmp15 = cResult[10];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp16, tmp15);
      if (cResult[11] === tmp4) {
        class P {
          constructor(arg0) {
            return closure_0.includes(discount.basePlanId);
          }
        }
        return obj2;
      }
      obj2 = { discountedPlan: tmp4, discountedProduct: stateFromStores };
      cResult[11] = tmp4;
      cResult[12] = stateFromStores;
      cResult[13] = obj2;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let memo;
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
      const obj = require("get initialized");
      const obj2 = {
        discountedPlan: memo,
        discountedProduct: obj.useStateFromStores(
          items1,
          () => {
            let product = null;
            if (null != memo) {
              product = IAPStore.getProduct(tmp.productId);
            }
            return product;
          },
          items2,
        ),
      };
      return obj2;
    };
const result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumPlan.tsx");

export const useDiscountedPremiumPlan = tmp2;
