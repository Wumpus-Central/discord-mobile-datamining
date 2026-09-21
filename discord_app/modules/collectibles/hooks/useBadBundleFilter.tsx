// === Module 15343: useBadBundleFilter ===

// Module 15343 (useBadBundleFilter)
import _mod19 from "module_19" /* 19 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4414 */;
import UserStore from "UserStore" /* 1372 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7799 */;
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
          const obj = canUseShopDiscountsResult(9121);
          if (obj2.isBundleProduct(product)) {
            if (!tmpResult.isFreeCollectiblesProduct(product)) {
              if (!obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased) {
                if (tmpResult5.isOrbsExclusiveProduct(product)) {
                  const obj3 = { product, hasShopDiscount };
                  return null != canUseShopDiscountsResult(7795).getProductOrbPrice(obj3);
                } else {
                  const defaultPriceSetAssignmentPurchaseType = canUseShopDiscountsResult(7796).getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                  const tmpResult7 = canUseShopDiscountsResult(7796);
                  let result = canUseShopDiscountsResult(7796).extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
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
                tmpResult5 = canUseShopDiscountsResult(7795);
              }
            }
            tmpResult = canUseShopDiscountsResult(7796);
          }
          return true;
        });
      }
    }
    return found;
  }, items1);
};