// discord_app/modules/premium/native/hooks/useDiscountedPremiumPlan.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../stores/native/IAPStore.android.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

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
  let obj = initialize;
  const items1 = [closure_3];
  const items2 = [memo];
  obj = {
    discountedPlan: memo,
    discountedProduct: obj.useStateFromStores(
      items1,
      () => {
        let product = null;
        if (null != memo) {
          product = closure_1_3.getProduct(tmp.productId);
        }
        return product;
      },
      items2,
    ),
  };
  return obj;
};
