// discord_app/modules/collectibles/hooks/useBadBundleFilter.tsx
import react from "../../../../_runtime/00019_react.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import useProductPurchaseState from "useProductPurchaseState.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let _require;

const useCallback = react.useCallback;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let currentUser;
      let tmp4;
      let tmp5;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(6);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function c() {
          return currentUser.getCurrentUser();
        };
        let num = 0;
        cResult[0] = items;
        let num2 = 1;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        let obj3 = PremiumUtilsDefault;
        const canUseShopDiscountsResult = obj3.canUseShopDiscounts(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = canUseShopDiscountsResult;
        tmp8 = canUseShopDiscountsResult;
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
                  let obj = hasShopDiscount(dependencyMap[7]);
                  const isPurchased = obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased;
                  const obj2 = hasShopDiscount(dependencyMap[8]);
                  if (obj2.isBundleProduct(product)) {
                    const tmpResult = hasShopDiscount(dependencyMap[8]);
                    if (!tmpResult.isFreeCollectiblesProduct(product)) {
                      if (!isPurchased) {
                        const tmpResult5 = hasShopDiscount(dependencyMap[9]);
                        if (tmpResult5.isOrbsExclusiveProduct(product)) {
                          const obj3 = { product, hasShopDiscount };
                          const tmpResult6 = hasShopDiscount(dependencyMap[9]);
                          return null != tmpResult6.getProductOrbPrice(obj3);
                        } else {
                          const tmpResult7 = hasShopDiscount(dependencyMap[8]);
                          const defaultPriceSetAssignmentPurchaseType =
                            tmpResult7.getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                          const tmpResult8 = hasShopDiscount(dependencyMap[8]);
                          let result = tmpResult8.extractPriceByPurchaseTypes(
                            product,
                            defaultPriceSetAssignmentPurchaseType,
                          );
                          if (null != result) {
                            let num = 0;
                            if (0 !== result.amount) {
                              let num2 = 0;
                              if (null != product.bundledProducts) {
                                const bundledProducts = product.bundledProducts;
                                num2 = bundledProducts.reduce(() => {
                                  /* body not rendered: F153055 */
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
                  let obj = hasShopDiscount(dependencyMap[7]);
                  const isPurchased = obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased;
                  const obj2 = hasShopDiscount(dependencyMap[8]);
                  if (obj2.isBundleProduct(product)) {
                    const tmpResult = hasShopDiscount(dependencyMap[8]);
                    if (!tmpResult.isFreeCollectiblesProduct(product)) {
                      if (!isPurchased) {
                        const tmpResult5 = hasShopDiscount(dependencyMap[9]);
                        if (tmpResult5.isOrbsExclusiveProduct(product)) {
                          const obj3 = { product, hasShopDiscount };
                          const tmpResult6 = hasShopDiscount(dependencyMap[9]);
                          return null != tmpResult6.getProductOrbPrice(obj3);
                        } else {
                          const tmpResult7 = hasShopDiscount(dependencyMap[8]);
                          const defaultPriceSetAssignmentPurchaseType =
                            tmpResult7.getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                          const tmpResult8 = hasShopDiscount(dependencyMap[8]);
                          let result = tmpResult8.extractPriceByPurchaseTypes(
                            product,
                            defaultPriceSetAssignmentPurchaseType,
                          );
                          if (null != result) {
                            let num = 0;
                            if (0 !== result.amount) {
                              let num2 = 0;
                              if (null != product.bundledProducts) {
                                const bundledProducts = product.bundledProducts;
                                num2 = bundledProducts.reduce(() => {
                                  /* body not rendered: F153055 */
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
          }
        }
      }
      return P;
    }
  : () => {
      let currentUser;
      let obj = useStateFromStores;
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj2 = PremiumUtilsDefault;
      const canUseShopDiscountsResult = obj2.canUseShopDiscounts(stateFromStores);
      const require = canUseShopDiscountsResult;
      const items1 = [canUseShopDiscountsResult];
      return useCallback((arr) => {
        let hasShopDiscount;
        let found = arr;
        if (null != arr) {
          let num = 0;
          found = arr;
          if (0 !== arr.length) {
            found = arr.filter((product) => {
              let obj = useProductPurchaseState;
              const isPurchased = obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased;
              const obj2 = CollectiblesUtils;
              if (obj2.isBundleProduct(product)) {
                const tmpResult = CollectiblesUtils;
                if (!tmpResult.isFreeCollectiblesProduct(product)) {
                  if (!isPurchased) {
                    const tmpResult5 = CollectiblesProductUtils;
                    if (tmpResult5.isOrbsExclusiveProduct(product)) {
                      const obj3 = { product, hasShopDiscount };
                      const tmpResult6 = CollectiblesProductUtils;
                      return null != tmpResult6.getProductOrbPrice(obj3);
                    } else {
                      const tmpResult7 = CollectiblesUtils;
                      const defaultPriceSetAssignmentPurchaseType =
                        tmpResult7.getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                      const tmpResult8 = CollectiblesUtils;
                      let result = tmpResult8.extractPriceByPurchaseTypes(
                        product,
                        defaultPriceSetAssignmentPurchaseType,
                      );
                      if (null != result) {
                        let num = 0;
                        if (0 !== result.amount) {
                          let num2 = 0;
                          if (null != product.bundledProducts) {
                            const bundledProducts = product.bundledProducts;
                            num2 = bundledProducts.reduce((acc, item) => {
                              const obj = hasShopDiscount(closure_2_2[8]);
                              const result = obj.extractPriceByPurchaseTypes(
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
let result = size.fileFinishedImporting("modules/collectibles/hooks/useBadBundleFilter.tsx");

export const useBadBundleFilter = tmp2;
