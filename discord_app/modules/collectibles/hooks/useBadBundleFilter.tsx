// discord_app/modules/collectibles/hooks/useBadBundleFilter.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

_mod19.useCallback;
let result = size.fileFinishedImporting("modules/collectibles/hooks/useBadBundleFilter.tsx");

export const useBadBundleFilter = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = canUseShopDiscountsResult;
    let tmp8 = canUseShopDiscountsResult;
  } else {
    tmp8 = cResult[3];
  }
  _require = tmp8;
  if (cResult[4] !== tmp8) {
    class P {
      constructor(arg0) {
        found = arg0;
        if (null != arg0) {
          num = 0;
          found = arg0;
          if (0 !== arg0.length) {
            found = arg0.filter((product) => {
              const obj = hasShopDiscount(8529);
              if (obj2.isBundleProduct(product)) {
                if (!tmpResult.isFreeCollectiblesProduct(product)) {
                  if (!obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased) {
                    if (tmpResult5.isOrbsExclusiveProduct(product)) {
                      const obj3 = { product, hasShopDiscount };
                      return null != hasShopDiscount(7077).getProductOrbPrice(obj3);
                    } else {
                      const defaultPriceSetAssignmentPurchaseType = hasShopDiscount(7078).getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                      const tmpResult7 = hasShopDiscount(7078);
                      let result = hasShopDiscount(7078).extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
                      if (null != result) {
                        if (0 !== result.amount) {
                          let num2 = 0;
                          if (null != product.bundledProducts) {
                            const bundledProducts = product.bundledProducts;
                            num2 = bundledProducts.reduce(() => { ... }, 0);
                          }
                          return result.amount < num2;
                        }
                      }
                      return true;
                    }
                    tmpResult5 = hasShopDiscount(7077);
                  }
                }
                tmpResult = hasShopDiscount(7078);
              }
              return true;
            });
          }
        }
        return found;
      }
    }
    cResult[4] = tmp8;
    cResult[5] = P;
  } else {
    class P {
      constructor(arg0) {
        found = arg0;
        if (null != arg0) {
          num = 0;
          found = arg0;
          if (0 !== arg0.length) {
            found = arg0.filter((product) => {
              const obj = hasShopDiscount(8529);
              if (obj2.isBundleProduct(product)) {
                if (!tmpResult.isFreeCollectiblesProduct(product)) {
                  if (!obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased) {
                    if (tmpResult5.isOrbsExclusiveProduct(product)) {
                      const obj3 = { product, hasShopDiscount };
                      return null != hasShopDiscount(7077).getProductOrbPrice(obj3);
                    } else {
                      const defaultPriceSetAssignmentPurchaseType = hasShopDiscount(7078).getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                      const tmpResult7 = hasShopDiscount(7078);
                      let result = hasShopDiscount(7078).extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
                      if (null != result) {
                        if (0 !== result.amount) {
                          let num2 = 0;
                          if (null != product.bundledProducts) {
                            const bundledProducts = product.bundledProducts;
                            num2 = bundledProducts.reduce(() => { ... }, 0);
                          }
                          return result.amount < num2;
                        }
                      }
                      return true;
                    }
                    tmpResult5 = hasShopDiscount(7077);
                  }
                }
                tmpResult = hasShopDiscount(7078);
              }
              return true;
            });
          }
        }
        return found;
      }
    }
  }
  return P;
}) : (() => {
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(stateFromStores);
  const require = canUseShopDiscountsResult;
  const items1 = [canUseShopDiscountsResult];
  return useCallback((arr) => {
    let found = arr;
    if (null != arr) {
      found = arr;
      if (0 !== arr.length) {
        found = arr.filter((product) => {
          const obj = canUseShopDiscountsResult(8529);
          if (obj2.isBundleProduct(product)) {
            if (!tmpResult.isFreeCollectiblesProduct(product)) {
              if (!obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased) {
                if (tmpResult5.isOrbsExclusiveProduct(product)) {
                  const obj3 = { product, hasShopDiscount };
                  return null != canUseShopDiscountsResult(7077).getProductOrbPrice(obj3);
                } else {
                  const defaultPriceSetAssignmentPurchaseType = canUseShopDiscountsResult(7078).getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                  const tmpResult7 = canUseShopDiscountsResult(7078);
                  let result = canUseShopDiscountsResult(7078).extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
                  if (null != result) {
                    if (0 !== result.amount) {
                      let num2 = 0;
                      if (null != product.bundledProducts) {
                        const bundledProducts = product.bundledProducts;
                        num2 = bundledProducts.reduce((acc, item) => {
                          const result = hasShopDiscount(dependencyMap[8]).extractPriceByPurchaseTypes(item, defaultPriceSetAssignmentPurchaseType);
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
                tmpResult5 = canUseShopDiscountsResult(7077);
              }
            }
            tmpResult = canUseShopDiscountsResult(7078);
          }
          return true;
        });
      }
    }
    return found;
  }, items1);
});