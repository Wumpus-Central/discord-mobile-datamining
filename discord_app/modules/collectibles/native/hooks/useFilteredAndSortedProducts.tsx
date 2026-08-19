// === Module 14428: useFilteredAndSortedProducts ===

// Module 14428 (useFilteredAndSortedProducts)
import noop from "noop" /* 19 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { CollectiblesMobileShopScreen as closure_5 } from "items" /* 678 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx");

export const useFilteredAndSortedProducts = function useFilteredAndSortedProducts(products) {
  products = products.products;
  let _require = products;
  const maxProducts = products.maxProducts;
  const bypassAndroidUnsyncedFilter = products.bypassAndroidUnsyncedFilter;
  let callback;
  const badBundleFilter = _require(bypassAndroidUnsyncedFilter[3]).useBadBundleFilter();
  let obj = _require(bypassAndroidUnsyncedFilter[3]);
  const androidUnsyncedFilter = _require(bypassAndroidUnsyncedFilter[4]).useAndroidUnsyncedFilter();
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
      found = arr.filter((item, index) => {
        closure_1_0(bypassAndroidUnsyncedFilter[8]);
        const obj = { product: item, hasShopDiscount: closure_1 };
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
    return items.reduce((acc, item, index) => item(acc), closure_0);
  }, items2);
  const obj4 = importDefault(bypassAndroidUnsyncedFilter[7]);
  const purchasedProductsSort = _require(bypassAndroidUnsyncedFilter[5]).usePurchasedProductsSort(memo);
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