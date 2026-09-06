// === Module 15075: useBadBundleFilter ===

// Module 15075 (useBadBundleFilter)
import _mod19 from "module_19" /* 19 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import UserStore from "UserStore" /* 1371 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
let result = size.fileFinishedImporting("modules/collectibles/hooks/useBadBundleFilter.tsx");

export const useBadBundleFilter = function useBadBundleFilter() {
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(stateFromStores);
  require = canUseShopDiscountsResult;
  const items1 = [canUseShopDiscountsResult];
  return useCallback((arr) => {
    let found = arr;
    if (null != arr) {
      found = arr;
      if (0 !== arr.length) {
        found = arr.filter((product) => {
          let obj = canUseShopDiscountsResult(8842);
          if (obj2.isBundleProduct(product)) {
            let tmpResult = tmp(7554);
            if (!tmpResult.isFreeCollectiblesProduct(product)) {
              if (!obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased) {
                tmpResult = tmp(7553);
                if (tmpResult.isOrbsExclusiveProduct(product)) {
                  obj = { product, hasShopDiscount };
                  return null != tmp(7553).getProductOrbPrice(obj);
                } else {
                  const defaultPriceSetAssignmentPurchaseType = tmp(7554).getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                  const tmpResult2 = tmp(7554);
                  let result = tmp(7554).extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
                  if (null != result) {
                    if (0 !== result.amount) {
                      let num2 = 0;
                      if (null != product.bundledProducts) {
                        const bundledProducts = product.bundledProducts;
                        num2 = bundledProducts.reduce((acc, item) => {
                          const result = hasShopDiscount(dependencyMap[6]).extractPriceByPurchaseTypes(item, defaultPriceSetAssignmentPurchaseType);
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