// discord_app/modules/collectibles/hooks/useBadBundleFilter.tsx
import set from "../../../../_runtime/00002_set.js";
import noop from "../../../../_runtime/00019_noop.js";
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import closure_4 from "../../../stores/UserStore.tsx";
import closure_5 from "../CollectiblesPurchaseStore.tsx";

noop.useCallback;
let result = set.fileFinishedImporting("modules/collectibles/hooks/useBadBundleFilter.tsx");

export const useBadBundleFilter = function useBadBundleFilter() {
  const items = [closure_4];
  const stateFromStores = defaultAreStatesEqual.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = defaultAreStatesEqual;
  const canUseShopDiscountsResult = getPremiumPlanItemDefault.canUseShopDiscounts(stateFromStores);
  require = canUseShopDiscountsResult;
  const items1 = [canUseShopDiscountsResult];
  return useCallback((arr) => {
    let found = arr;
    if (null != arr) {
      found = arr;
      if (0 !== arr.length) {
        found = arr.filter((bundledProducts) => {
          let obj = closure_1_0(closure_1_2[5]);
          if (obj2.isBundleProduct(bundledProducts)) {
            let tmpResult = tmp(tmp2[6]);
            if (!tmpResult.isFreeCollectiblesProduct(bundledProducts)) {
              if (!obj.getProductPurchaseState(closure_1_5, bundledProducts).isPurchased) {
                tmpResult = tmp(tmp2[7]);
                if (tmpResult.isOrbsExclusiveProduct(bundledProducts)) {
                  obj = { product: null, hasShopDiscount: null };
                  obj[0] = bundledProducts;
                  obj[1] = defaultPriceSetAssignmentPurchaseType;
                  return null != tmp(tmp2[7]).getProductOrbPrice(obj);
                } else {
                  defaultPriceSetAssignmentPurchaseType = tmp(tmp2[6]).getDefaultPriceSetAssignmentPurchaseType(defaultPriceSetAssignmentPurchaseType);
                  const tmpResult2 = tmp(tmp2[6]);
                  let result = tmp(tmp2[6]).extractPriceByPurchaseTypes(bundledProducts, defaultPriceSetAssignmentPurchaseType);
                  if (null != result) {
                    if (0 !== result.amount) {
                      let num2 = 0;
                      if (null != bundledProducts.bundledProducts) {
                        bundledProducts = bundledProducts.bundledProducts;
                        num2 = bundledProducts.reduce((arg0, arg1) => {
                          const result = defaultPriceSetAssignmentPurchaseType(closure_1_2[6]).extractPriceByPurchaseTypes(arg1, defaultPriceSetAssignmentPurchaseType);
                          let num;
                          if (result != null) {
                            num = result.amount;
                          }
                          if (num == null) {
                            num = 0;
                          }
                          return arg0 + num;
                        }, 0);
                      }
                      return result.amount < num2;
                    }
                  }
                  return true;
                }
              }
            }
          }
          return true;
        });
      }
    }
    return found;
  }, items1);
};