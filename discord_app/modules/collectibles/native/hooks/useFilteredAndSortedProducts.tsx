// === Module 14876: useFilteredAndSortedProducts ===

// Module 14876 (useFilteredAndSortedProducts)
import react2 from "react" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import useBadBundleFilter from "useBadBundleFilter" /* 14877 */;
import useAndroidUnsyncedFilter from "useAndroidUnsyncedFilter" /* 14878 */;
import usePurchasedProductsSort from "usePurchasedProductsSort" /* 14879 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bypassAndroidUnsyncedFilter;
  let maxProducts;
  let products;
  let screen;
  const obj = react2;
  const cResult = obj.c(12);
  ({ products, maxProducts, bypassAndroidUnsyncedFilter, screen } = arg0);
  const obj2 = useBadBundleFilter;
  const badBundleFilter = obj2.useBadBundleFilter();
  const obj3 = useAndroidUnsyncedFilter;
  const androidUnsyncedFilter = obj3.useAndroidUnsyncedFilter();
  const tmp6 = closure_6(screen);
  if (cResult[0] === androidUnsyncedFilter) {
    let tmp7;
    let tmp10;
    if (cResult[1] === bypassAndroidUnsyncedFilter) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === badBundleFilter) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === products) {
          let tmp8;
          if (cResult[6] === tmp7) {
            tmp8 = cResult[7];
          }
          const tmpResult = usePurchasedProductsSort;
          const purchasedProductsSort = tmpResult.usePurchasedProductsSort(tmp8);
          let tmp13 = purchasedProductsSort;
          if (null != maxProducts) {
            if (cResult[9] === maxProducts) {
              let tmp14;
              if (cResult[10] === purchasedProductsSort) {
                tmp14 = cResult[11];
              }
              tmp13 = tmp14;
            }
            const substr = purchasedProductsSort.slice(0, maxProducts);
            cResult[9] = maxProducts;
            cResult[10] = purchasedProductsSort;
            cResult[11] = substr;
            tmp14 = substr;
          }
          return tmp13;
        }
      }
    }
    const items = [tmp7, badBundleFilter, tmp6];
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function f(arg0, fn) {
        return fn(arg0);
      };
      cResult[8] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[8];
    }
    const reduced = items.reduce(tmp10, products);
    cResult[3] = badBundleFilter;
    cResult[4] = tmp6;
    cResult[5] = products;
    cResult[6] = tmp7;
    cResult[7] = reduced;
    tmp8 = reduced;
  }
  let fn = androidUnsyncedFilter;
  if (bypassAndroidUnsyncedFilter) {
    fn = (arg0) => arg0;
  }
  cResult[0] = androidUnsyncedFilter;
  cResult[1] = bypassAndroidUnsyncedFilter;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((products) => {
  products = products.products;
  const maxProducts = products.maxProducts;
  const bypassAndroidUnsyncedFilter = products.bypassAndroidUnsyncedFilter;
  const screen = products.screen;
  const obj = useBadBundleFilter;
  const badBundleFilter = obj.useBadBundleFilter();
  const obj2 = useAndroidUnsyncedFilter;
  const androidUnsyncedFilter = obj2.useAndroidUnsyncedFilter();
  const tmp3 = closure_6(screen);
  let closure_5 = tmp3;
  let items = [badBundleFilter, androidUnsyncedFilter, products, bypassAndroidUnsyncedFilter, tmp3];
  const memo = react.useMemo(() => {
    let fn;
    if (bypassAndroidUnsyncedFilter) {
      fn = (arg0) => arg0;
    } else {
      fn = androidUnsyncedFilter;
    }
    const items = [fn, badBundleFilter, closure_5];
    return items.reduce((acc, fn) => fn(acc), products);
  }, items);
  const obj3 = usePurchasedProductsSort;
  const purchasedProductsSort = obj3.usePurchasedProductsSort(memo);
  const items1 = [purchasedProductsSort, maxProducts];
  return react.useMemo(() => {
    let substr;
    if (null != maxProducts) {
      substr = purchasedProductsSort.slice(0, tmp);
    } else {
      substr = purchasedProductsSort;
    }
    return substr;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let currentUser;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const obj3 = PremiumUtilsDefault;
    const canUseShopDiscountsResult = obj3.canUseShopDiscounts(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = canUseShopDiscountsResult;
    tmp9 = canUseShopDiscountsResult;
  } else {
    tmp9 = cResult[3];
  }
  importDefault = tmp9;
  if (cResult[4] === tmp9) {
    let tmp12;
    if (cResult[5] === arg0 === constants.ORBS) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const fn2 = function b(arr) {
    let hasShopDiscount;
    let found = arr;
    if (closure_0) {
      found = arr.filter((product) => {
        const obj = closure_0(dependencyMap[10]);
        const obj2 = { product, hasShopDiscount };
        return null != obj.getProductOrbPrice(obj2);
      });
    }
    return found;
  };
  cResult[4] = tmp9;
  cResult[5] = arg0 === constants.ORBS;
  cResult[6] = fn2;
  tmp12 = fn2;
}) : ((arg0) => {
  let closure_0;
  let currentUser;
  _require = tmp;
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj2.canUseShopDiscounts(stateFromStores);
  importDefault = canUseShopDiscountsResult;
  const items1 = [arg0 === constants.ORBS, canUseShopDiscountsResult];
  return react.useCallback((arr) => {
    let hasShopDiscount;
    let found = arr;
    if (closure_0) {
      found = arr.filter((product) => {
        const obj = closure_0(dependencyMap[10]);
        const obj2 = { product, hasShopDiscount };
        return null != obj.getProductOrbPrice(obj2);
      });
    }
    return found;
  }, items1);
});
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx");

export const useFilteredAndSortedProducts = tmp2;