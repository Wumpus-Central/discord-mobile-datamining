// === Module 15074: useFilteredAndSortedProducts ===

// Module 15074 (useFilteredAndSortedProducts)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
let closure_5 = fn(1076).CollectiblesMobileShopScreen;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx");

export const useFilteredAndSortedProducts = function useFilteredAndSortedProducts(products) {
  products = products.products;
  const maxProducts = products.maxProducts;
  const bypassAndroidUnsyncedFilter = products.bypassAndroidUnsyncedFilter;
  let callback;
  const badBundleFilter = products(bypassAndroidUnsyncedFilter[3]).useBadBundleFilter();
  let obj = products(bypassAndroidUnsyncedFilter[3]);
  const androidUnsyncedFilter = products(bypassAndroidUnsyncedFilter[4]).useAndroidUnsyncedFilter();
  closure_129_0 = tmp3;
  const obj2 = products(bypassAndroidUnsyncedFilter[4]);
  let items = [androidUnsyncedFilter];
  const stateFromStores = products(bypassAndroidUnsyncedFilter[6]).useStateFromStores(items, () => androidUnsyncedFilter.getCurrentUser());
  const obj3 = products(bypassAndroidUnsyncedFilter[6]);
  const canUseShopDiscountsResult = maxProducts(bypassAndroidUnsyncedFilter[7]).canUseShopDiscounts(stateFromStores);
  closure_129_1 = canUseShopDiscountsResult;
  const items1 = [products.screen === callback.ORBS, canUseShopDiscountsResult];
  callback = badBundleFilter.useCallback((arr) => {
    let found = arr;
    if (products) {
      found = arr.filter((product) => {
        products(bypassAndroidUnsyncedFilter[8]);
        const obj = { product, hasShopDiscount };
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
    return items.reduce((acc, fn) => fn(acc), products);
  }, items2);
  const obj4 = maxProducts(bypassAndroidUnsyncedFilter[7]);
  const purchasedProductsSort = products(bypassAndroidUnsyncedFilter[5]).usePurchasedProductsSort(memo);
  const items3 = [purchasedProductsSort, maxProducts];
  return badBundleFilter.useMemo(() => {
    if (null != maxProducts) {
      let substr = purchasedProductsSort.slice(0, tmp);
    } else {
      substr = purchasedProductsSort;
    }
    return substr;
  }, items3);
};