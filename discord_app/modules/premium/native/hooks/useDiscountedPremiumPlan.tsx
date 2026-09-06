// discord_app/modules/premium/native/hooks/useDiscountedPremiumPlan.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";

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
  let obj = require("initialize");
  const items1 = [IAPStore];
  const items2 = [memo];
  obj = {
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
  return obj;
};
