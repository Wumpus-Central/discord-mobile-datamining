// discord_app/modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/UserStore.tsx";
import { CollectiblesMobileShopScreen as closure_5 } from "../../CollectiblesShopConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx");

export const useFilteredAndSortedProducts = function useFilteredAndSortedProducts(products) {
  products = products.products;
  let _require = products;
  const maxProducts = products.maxProducts;
  importDefault = maxProducts;
  const bypassAndroidUnsyncedFilter = products.bypassAndroidUnsyncedFilter;
  let badBundleFilter;
  let androidUnsyncedFilter;
  let callback;
  let purchasedProductsSort;
  badBundleFilter = _require(bypassAndroidUnsyncedFilter[3]).useBadBundleFilter();
  let obj = _require(bypassAndroidUnsyncedFilter[3]);
  androidUnsyncedFilter = _require(bypassAndroidUnsyncedFilter[4]).useAndroidUnsyncedFilter();
  _require = undefined;
  importDefault = undefined;
  _require = tmp3;
  const obj2 = _require(bypassAndroidUnsyncedFilter[4]);
  let items = [androidUnsyncedFilter];
  const stateFromStores = _require(bypassAndroidUnsyncedFilter[6]).useStateFromStores(items, () => androidUnsyncedFilter.getCurrentUser());
  const obj3 = _require(bypassAndroidUnsyncedFilter[6]);
  const canUseShopDiscountsResult = importDefault(bypassAndroidUnsyncedFilter[7]).canUseShopDiscounts(stateFromStores);
  importDefault = canUseShopDiscountsResult;
  const items1 = [products.screen === callback.ORBS, canUseShopDiscountsResult];
  callback = badBundleFilter.useCallback((arr) => {
    let found = arr;
    if (closure_0) {
      found = arr.filter((product) => {
        let obj = closure_1_0(closure_1_2[8]);
        obj = { product, hasShopDiscount: closure_1 };
        return null != obj.getProductOrbPrice(obj);
      });
    }
    return found;
  }, items1);
  const items2 = [badBundleFilter, androidUnsyncedFilter, products, bypassAndroidUnsyncedFilter, callback];
  const memo = badBundleFilter.useMemo(() => {
    if (bypassAndroidUnsyncedFilter) {
      let fn = (arg0) => arg0;
    } else {
      fn = androidUnsyncedFilter;
    }
    const items = [fn, badBundleFilter, callback];
    return items.reduce((arg0, arg1) => arg1(arg0), closure_0);
  }, items2);
  const obj4 = importDefault(bypassAndroidUnsyncedFilter[7]);
  purchasedProductsSort = _require(bypassAndroidUnsyncedFilter[5]).usePurchasedProductsSort(memo);
  const items3 = [purchasedProductsSort, maxProducts];
  return badBundleFilter.useMemo(() => {
    if (null != c1) {
      let substr = purchasedProductsSort.slice(0, tmp);
    } else {
      substr = purchasedProductsSort;
    }
    return substr;
  }, items3);
};