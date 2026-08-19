// === Module 14429: useBadBundleFilter ===

// Module 14429 (useBadBundleFilter)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import map from "map" /* 5324 */;

noop.useCallback;
let result = obj132.fileFinishedImporting("modules/collectibles/hooks/useBadBundleFilter.tsx");

export const useBadBundleFilter = function useBadBundleFilter() {
  const items = [closure_4];
  const stateFromStores = defaultAreStatesEqual.useStateFromStores(items, () => currentUser.getCurrentUser());
  const canUseShopDiscountsResult = getPremiumPlanItemDefault.canUseShopDiscounts(stateFromStores);
  require = canUseShopDiscountsResult;
  const items1 = [canUseShopDiscountsResult];
  return useCallback((arr) => {
    let found = arr;
    if (null != arr) {
      found = arr;
      if (0 !== arr.length) {
        found = arr.filter((item, index) => {
          let obj = closure_1_0(closure_1_2[5]);
          if (obj2.isBundleProduct(item)) {
            let tmpResult = closure_1_0(closure_1_2[6]);
            if (!tmpResult.isFreeCollectiblesProduct(item)) {
              if (!obj.getProductPurchaseState(closure_1_5, item).isPurchased) {
                tmpResult = closure_1_0(closure_1_2[7]);
                if (tmpResult.isOrbsExclusiveProduct(item)) {
                  obj = { product: null, hasShopDiscount: null };
                  obj[0] = item;
                  obj[1] = defaultPriceSetAssignmentPurchaseType;
                  return null != closure_1_0(closure_1_2[7]).getProductOrbPrice(obj);
                } else {
                  defaultPriceSetAssignmentPurchaseType = closure_1_0(closure_1_2[6]).getDefaultPriceSetAssignmentPurchaseType(defaultPriceSetAssignmentPurchaseType);
                  const tmpResult2 = closure_1_0(closure_1_2[6]);
                  let result = closure_1_0(closure_1_2[6]).extractPriceByPurchaseTypes(item, defaultPriceSetAssignmentPurchaseType);
                  if (null != result) {
                    if (0 !== result.amount) {
                      let num2 = 0;
                      if (null != item.bundledProducts) {
                        const bundledProducts = item.bundledProducts;
                        num2 = bundledProducts.reduce((acc, item, index) => {
                          const result = defaultPriceSetAssignmentPurchaseType(closure_1_2[6]).extractPriceByPurchaseTypes(item, defaultPriceSetAssignmentPurchaseType);
                          let num;
                          if (result != null) {
                            num = result.amount;
                          }
                          if (num == null) {
                            num = 0;
                          }
                          return acc + num;
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