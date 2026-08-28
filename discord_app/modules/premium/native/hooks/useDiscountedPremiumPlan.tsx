// === Module 8185: useDiscountedPremiumPlan ===

// Module 8185 (useDiscountedPremiumPlan)
import closure_2 from "noop" /* 19 */;
import closure_3 from "updateProduct" /* 6049 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumPlan.tsx");

export const useDiscountedPremiumPlan = function useDiscountedPremiumPlan(premiumDiscountOffer, items3) {
  const _require = premiumDiscountOffer;
  dependencyMap = items3;
  const items = [premiumDiscountOffer, items3];
  memo = memo.useMemo(() => {
    if (null == planIds) {
      return null;
    } else {
      const discount = tmp.discount;
      planIds = undefined;
      if (discount != null) {
        planIds = discount.planIds;
      }
      if (planIds == null) {
        planIds = [];
      }
      return items3.find((basePlanId) => planIds.includes(basePlanId.basePlanId));
    }
  }, items);
  let obj = _require(589);
  const items1 = [closure_3];
  const items2 = [memo];
  obj = {
    discountedPlan: memo,
    discountedProduct: obj.useStateFromStores(items1, () => {
      let product = null;
      if (null != memo) {
        product = closure_1_3.getProduct(tmp.productId);
      }
      return product;
    }, items2)
  };
  return obj;
};