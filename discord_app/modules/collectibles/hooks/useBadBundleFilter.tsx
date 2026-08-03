import mergeGuildAvatar from "mergeGuildAvatar";
import map from "map";

require("noop").useCallback;
let result = require("map").fileFinishedImporting("modules/collectibles/hooks/useBadBundleFilter.tsx");

export const useBadBundleFilter = function useBadBundleFilter() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(647) /* defaultAreStatesEqual */.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require(647) /* defaultAreStatesEqual */;
  const canUseShopDiscountsResult = importDefault(3839).canUseShopDiscounts(stateFromStores);
  require = canUseShopDiscountsResult;
  const items1 = [canUseShopDiscountsResult];
  return useCallback((arr) => {
    let found = arr;
    if (null != arr) {
      found = arr;
      if (0 !== arr.length) {
        found = arr.filter((bundledProducts) => {
          let obj = outer1_0(outer1_2[5]);
          if (obj2.isBundleProduct(bundledProducts)) {
            let tmpResult = tmp(tmp2[6]);
            if (!tmpResult.isFreeCollectiblesProduct(bundledProducts)) {
              if (!obj.getProductPurchaseState(outer1_5, bundledProducts).isPurchased) {
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
                          const result = defaultPriceSetAssignmentPurchaseType(outer1_2[6]).extractPriceByPurchaseTypes(arg1, defaultPriceSetAssignmentPurchaseType);
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