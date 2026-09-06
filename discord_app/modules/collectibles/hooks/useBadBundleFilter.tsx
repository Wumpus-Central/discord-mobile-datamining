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
          let obj = canUseShopDiscountsResult(8842);
          if (obj2.isBundleProduct(product)) {
            let tmpResult = canUseShopDiscountsResult(7554);
            if (!tmpResult.isFreeCollectiblesProduct(product)) {
              if (!obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased) {
                tmpResult = canUseShopDiscountsResult(7553);
                if (tmpResult.isOrbsExclusiveProduct(product)) {
                  obj = { product, hasShopDiscount };
                  return null != canUseShopDiscountsResult(7553).getProductOrbPrice(obj);
                } else {
                  const defaultPriceSetAssignmentPurchaseType =
                    canUseShopDiscountsResult(7554).getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                  const tmpResult2 = canUseShopDiscountsResult(7554);
                  let result = canUseShopDiscountsResult(7554).extractPriceByPurchaseTypes(
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
