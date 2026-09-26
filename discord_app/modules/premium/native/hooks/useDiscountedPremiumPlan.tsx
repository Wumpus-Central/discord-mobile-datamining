// === Module 8683: useDiscountedPremiumPlan ===

// Module 8683 (useDiscountedPremiumPlan)
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 6658 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumPlan.tsx");

export const useDiscountedPremiumPlan = function useDiscountedPremiumPlan(premiumDiscountOffer, items3) {
  _require = premiumDiscountOffer;
  dependencyMap = items3;
  const items = [premiumDiscountOffer, items3];
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
      return items3.find((basePlanId) => planIds.includes(basePlanId.basePlanId));
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
};