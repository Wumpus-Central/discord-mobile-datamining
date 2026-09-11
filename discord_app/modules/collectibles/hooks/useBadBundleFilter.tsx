// === Module 15133: useBadBundleFilter ===

// Module 15133 (useBadBundleFilter)
import _mod19 from "module_19" /* 19 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4264 */;
import UserStore from "UserStore" /* 1371 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7630 */;
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
          let obj = canUseShopDiscountsResult(8932);
          if (obj2.isBundleProduct(product)) {
            let tmpResult = canUseShopDiscountsResult(7627);
            if (!tmpResult.isFreeCollectiblesProduct(product)) {
              if (!obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased) {
                tmpResult = canUseShopDiscountsResult(7626);
                if (tmpResult.isOrbsExclusiveProduct(product)) {
                  obj = { product, hasShopDiscount };
                  return null != canUseShopDiscountsResult(7626).getProductOrbPrice(obj);
                } else {
                  const defaultPriceSetAssignmentPurchaseType = canUseShopDiscountsResult(7627).getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                  const tmpResult2 = canUseShopDiscountsResult(7627);
                  let result = canUseShopDiscountsResult(7627).extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
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