// discord_app/modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx
import c from "../../../../../_runtime/00576_c.js";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import useBadBundleFilter from "../../hooks/useBadBundleFilter.tsx";
import useAndroidUnsyncedFilter from "../useAndroidUnsyncedFilter.tsx";
import usePurchasedProductsSort from "../../hooks/usePurchasedProductsSort.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const constants = fn(1087).CollectiblesMobileShopScreen;
fn(558);
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(7);
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
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = canUseShopDiscountsResult;
        let tmp9 = canUseShopDiscountsResult;
      } else {
        tmp9 = cResult[3];
      }
      importDefault = tmp9;
      if (cResult[4] === tmp9) {
        if (cResult[5] === tmp4) {
          let tmp12 = cResult[6];
        }
        return tmp12;
      }
      const fn2 = function b(arr) {
        let found = arr;
        if (closure_0) {
          found = arr.filter(
            (product) => null != closure_0(dependencyMap[10]).getProductOrbPrice({ product, hasShopDiscount }),
          );
        }
        return found;
      };
      cResult[4] = tmp9;
      cResult[5] = arg0 === constants.ORBS;
      cResult[6] = fn2;
      tmp12 = fn2;
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      _require = tmp;
      const items = [UserStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj = require("initialize");
      const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(stateFromStores);
      importDefault = canUseShopDiscountsResult;
      const items1 = [arg0 === constants.ORBS, canUseShopDiscountsResult];
      return noop.useCallback((arr) => {
        let found = arr;
        if (closure_0) {
          found = arr.filter(
            (product) => null != closure_0(dependencyMap[10]).getProductOrbPrice({ product, hasShopDiscount }),
          );
        }
        return found;
      }, items1);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx");

export const useFilteredAndSortedProducts = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(12);
      ({ products, maxProducts, bypassAndroidUnsyncedFilter, screen } = arg0);
      const badBundleFilter = useBadBundleFilter.useBadBundleFilter();
      const androidUnsyncedFilter = useAndroidUnsyncedFilter.useAndroidUnsyncedFilter();
      const tmp6 = closure_6(screen);
      if (cResult[0] === androidUnsyncedFilter) {
        if (cResult[1] === bypassAndroidUnsyncedFilter) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === badBundleFilter) {
          if (cResult[4] === tmp6) {
            if (cResult[5] === products) {
              if (cResult[6] === tmp7) {
                const purchasedProductsSort = usePurchasedProductsSort.usePurchasedProductsSort(cResult[7]);
                if (null == maxProducts) {
                  return purchasedProductsSort;
                } else {
                  if (cResult[9] === maxProducts) {
                  }
                  const substr = purchasedProductsSort.slice(0, maxProducts);
                  cResult[9] = maxProducts;
                  cResult[10] = purchasedProductsSort;
                  cResult[11] = substr;
                }
                const tmpResult = usePurchasedProductsSort;
              }
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
          let tmp9 = fn2;
        } else {
          tmp9 = cResult[8];
        }
        const reduced = items.reduce(tmp9, products);
        cResult[3] = badBundleFilter;
        cResult[4] = tmp6;
        cResult[5] = products;
        cResult[6] = tmp7;
        cResult[7] = reduced;
      }
      let fn = androidUnsyncedFilter;
      if (bypassAndroidUnsyncedFilter) {
        fn = (arg0) => arg0;
      }
      cResult[0] = androidUnsyncedFilter;
      cResult[1] = bypassAndroidUnsyncedFilter;
      cResult[2] = fn;
      tmp7 = fn;
    }
  : (products) => {
      products = products.products;
      const maxProducts = products.maxProducts;
      const bypassAndroidUnsyncedFilter = products.bypassAndroidUnsyncedFilter;
      const badBundleFilter = useBadBundleFilter.useBadBundleFilter();
      const androidUnsyncedFilter = useAndroidUnsyncedFilter.useAndroidUnsyncedFilter();
      const tmp3 = closure_6(products.screen);
      closure_5 = tmp3;
      let items = [badBundleFilter, androidUnsyncedFilter, products, bypassAndroidUnsyncedFilter, tmp3];
      const memo = noop.useMemo(() => {
        if (bypassAndroidUnsyncedFilter) {
          let fn = (arg0) => arg0;
        } else {
          fn = androidUnsyncedFilter;
        }
        const items = [fn, badBundleFilter, closure_5];
        return items.reduce((acc, fn) => fn(acc), products);
      }, items);
      const purchasedProductsSort = usePurchasedProductsSort.usePurchasedProductsSort(memo);
      const items1 = [purchasedProductsSort, maxProducts];
      return noop.useMemo(() => {
        if (null != maxProducts) {
          let substr = purchasedProductsSort.slice(0, tmp);
        } else {
          substr = purchasedProductsSort;
        }
        return substr;
      }, items1);
    };
