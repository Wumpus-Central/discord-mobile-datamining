// discord_app/modules/collectibles/hooks/useBadBundleFilter.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
          const obj = canUseShopDiscountsResult(9197);
          if (obj2.isBundleProduct(product)) {
            if (!tmpResult.isFreeCollectiblesProduct(product)) {
              if (!obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased) {
                if (tmpResult5.isOrbsExclusiveProduct(product)) {
                  const obj3 = { product, hasShopDiscount };
                  return null != canUseShopDiscountsResult(7881).getProductOrbPrice(obj3);
                } else {
                  const defaultPriceSetAssignmentPurchaseType =
                    canUseShopDiscountsResult(7882).getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                  const tmpResult7 = canUseShopDiscountsResult(7882);
                  let result = canUseShopDiscountsResult(7882).extractPriceByPurchaseTypes(
                    product,
                    defaultPriceSetAssignmentPurchaseType,
                  );
                  if (null != result) {
                    if (0 !== result.amount) {
                      let num2 = 0;
                      if (null != product.bundledProducts) {
                        const bundledProducts = product.bundledProducts;
                        num2 = bundledProducts.reduce((acc, item) => {
                          const result = hasShopDiscount(dependencyMap[6]).extractPriceByPurchaseTypes(
                            item,
                            defaultPriceSetAssignmentPurchaseType,
                          );
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
                tmpResult5 = canUseShopDiscountsResult(7881);
              }
            }
            tmpResult = canUseShopDiscountsResult(7882);
          }
          return true;
        });
      }
    }
    return found;
  }, items1);
};
