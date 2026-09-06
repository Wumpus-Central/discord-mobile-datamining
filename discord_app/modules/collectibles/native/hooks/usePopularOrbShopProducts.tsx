// === Module 15069: usePopularOrbShopProducts ===

// Module 15069 (usePopularOrbShopProducts)
import DurationsDefault from "Durations" /* 1090 */;
import StorefrontProductActionCreators from "StorefrontProductActionCreators" /* 8219 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8220 */;
import UserStore from "UserStore" /* 1371 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 7544 */;

require = fn;
let constants = fn(1076).CollectiblesMobileShopScreen;
let closure_11 = 10 * DurationsDefault.Millis.SECOND;
let closure_12 = 10 * DurationsDefault.Millis.SECOND;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx");

export const MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL = 3;
export const usePopularOrbShopProducts = function usePopularOrbShopProducts(enabled) {
  enabled = enabled.enabled;
  _slicedToArray = undefined;
  noop = undefined;
  let POPULARITY;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  constants = undefined;
  let memo;
  let filteredAndSortedProducts;
  let obj = noop;
  let tmp = _slicedToArray(noop.useState([]), 2);
  const skuIds = tmp[0];
  dependencyMap = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const first1 = tmp2[0];
  _slicedToArray = tmp2[1];
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  noop = tmp4[1];
  const items = [POPULARITY];
  const stateFromStores = enabled(504).useStateFromStores(items, () => POPULARITY.getCurrentUser());
  let obj2 = enabled(504);
  let tmp8 = skuIds;
  const canUseShopDiscountsResult = skuIds(4218).canUseShopDiscounts(stateFromStores);
  c6 = canUseShopDiscountsResult;
  if ("recency" === enabled.sortType) {
    POPULARITY = tmp5(1079).CollectibleSearchSortType.RECENCY;
  } else {
    POPULARITY = tmp5(1079).CollectibleSearchSortType.POPULARITY;
  }
  const items1 = [enabled, POPULARITY];
  const effect = obj.useEffect(() => {
    closure_1 = async function _fetchSearchResults() {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp8;
              closure_129_0 = undefined;
              let v0 = 2;
              const obj1 = { item_types: [], colors: [], themes: [], orbs_eligible: true, currency: enabled(15071).CollectibleSearchCurrencyFilter.ORBS, offset: 0, limit: 10, sort_type, sort_direction: enabled(1080).CollectibleSearchSortDirection.DESC };
              const obj2 = { timeout };
              c5 = 3;
              c6 = 1;
              const obj3 = { value: enabled(15070).search(obj1, obj2), done: false };
              return obj3;
            }
          } else if (1 === tmp8) {
            v0 = 0;
            if (!closure_130_0) {
              v0(true);
            }
            throw closure_3;
          } else {
            if (2 === tmp8) {
              v0 = 1;
              if (!closure_130_0) {
                tmp4([]);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              if (!closure_130_0) {
                v0(true);
              }
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_0 = value;
              if (!closure_130_0) {
                const skus = closure_129_0.skus;
                closure_0 = skus;
                if (skus == null) {
                  closure_0 = [];
                }
                tmp4(closure_0);
              }
              v0 = 1;
            }
            v0 = 0;
            if (!closure_130_0) {
              v0(true);
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp34) {
          closure_3 = tmp34;
          if (tmp5 === v0) {
            c6 = tmp3;
            throw tmp34;
          } else if (tmp2 === tmp36) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    };
    if (c0) {
      c0 = false;
      closure_4(false);
      (function fetchSearchResults() {
        const self = this;
        const apply = closure_1.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return () => {
        c0 = true;
      };
    } else {
      closure_2([]);
      closure_4(false);
    }
  }, items1);
  const items2 = [enabled, first1, skuIds];
  const effect1 = obj.useEffect(() => {
    if (timeout) {
      if (first1) {
        closure_5(false);
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_5(true), filteredAndSortedProducts);
        return () => clearTimeout(closure_0);
      }
    }
    closure_5(false);
  }, items2);
  let tmp5Result = tmp5(8873);
  let fetchCollectiblesProducts = tmp5Result.useFetchCollectiblesProducts(skuIds);
  const items3 = [skuIds];
  const effect2 = obj.useEffect(() => {
    if (0 !== first.length) {
      const obj = { skuIds: tmp };
      const result = obj.maybeFetchProductsBySkuIds(obj);
    }
  }, items3);
  tmp5Result = tmp5(8784);
  const getOrFetchStorefrontPricesForSkuIds = tmp5Result.useGetOrFetchStorefrontPricesForSkuIds({ skuIds });
  let obj3 = skuIds(4218);
  const items4 = [c6];
  stateFromStoresArray = enabled(504).useStateFromStoresArray(items4, () => first.map((item) => productsForSku.getProductsForSku(item)));
  const tmp5Result1 = enabled(504);
  const items5 = [c6];
  stateFromStoresArray1 = enabled(504).useStateFromStoresArray(items5, () => first.map((item) => fetchStateForSku.getFetchStateForSku(item)));
  const tmp17 = tmp8(15072)();
  constants = tmp17;
  const items6 = [tmp17, skuIds, stateFromStoresArray, canUseShopDiscountsResult];
  memo = obj.useMemo(() => closure_10(first).map((product, index) => {
    let obj1 = enabled(closure_2[9]);
    let obj = { product, hasShopDiscount };
    let tmp = product;
    if (null == obj1.getProductOrbPrice(obj)) {
      const tmp13 = (function getStorefrontPricesForSkuId(skuId, arg1) {
        closure_0 = skuId;
        if (null == arg1) {
          return null;
        } else {
          const iter = arg1[Symbol.iterator]();
          while (iter !== undefined) {
            let skus = iter.next().skus;
            let found = skus.find((id) => id.id === closure_0);
            if (null != found) {
              let _Object = Object;
              if (Object.keys(tmp6.prices).length > 0) {
                iter.return();
                return found.prices;
              }
            }
            continue;
          }
          return null;
        }
      })(product.skuId, obj);
      tmp = product;
      if (null != tmp13) {
        let found;
        if (obj != null) {
          found = obj.flatMap((skus) => skus.skus).find((id) => id.id === product.skuId);
          const flatMapResult = obj.flatMap((skus) => skus.skus);
        }
        obj = { storeListingId: null, skuId: null, name: null, summary: null, styles: null, type: null, premiumType: null, items: null, categorySkuId: null, isCategoryReward: null, prices: null, bundledProducts: null, previewAssets: null, googleSkuIds: null, variants: null, eligibleOffers: null, badgeOverride: null, hideBadge: null };
        ({ storeListingId: obj4.storeListingId, skuId: obj4.skuId, name: obj4.name, summary: obj4.summary, styles: obj4.styles, type: obj4.type, premiumType: obj4.premiumType, items: obj4.items, categorySkuId: obj4.categorySkuId, isCategoryReward: obj4.isCategoryReward } = product);
        obj1 = {};
        const merged = Object.assign(product.prices);
        const merged1 = Object.assign(tmp13);
        obj.prices = obj1;
        ({ bundledProducts: obj4.bundledProducts, previewAssets: obj4.previewAssets } = product);
        let googleSkuIds;
        if (found != null) {
          googleSkuIds = found.googleSkuIds;
        }
        if (googleSkuIds == null) {
          googleSkuIds = product.googleSkuIds;
        }
        obj.googleSkuIds = googleSkuIds;
        ({ variants: obj4.variants, eligibleOffers: obj4.eligibleOffers, badgeOverride: obj4.badgeOverride, hideBadge: obj4.hideBadge } = product);
        tmp = new stateFromStoresArray1(obj);
      }
    }
    return tmp;
  }), items6);
  const items7 = [skuIds, stateFromStoresArray1, canUseShopDiscountsResult];
  const items8 = [memo, canUseShopDiscountsResult];
  const memo1 = obj.useMemo(() => 0 !== first.length && first.some((item, index) => {
    const product = stateFromStoresArray.getProduct(item);
    if (null != product) {
      enabled(closure_2[9]);
      const obj = { product, hasShopDiscount };
      if (null != obj.getProductOrbPrice(obj)) {
        return false;
      }
    }
    return "loading" === stateFromStoresArray1[index] || null == stateFromStoresArray1[index];
  }), items7);
  const memo2 = obj.useMemo(() => memo.filter((product) => {
    enabled(closure_2[9]);
    const obj = { product, hasShopDiscount };
    return null != obj.getProductOrbPrice(obj);
  }), items8);
  const tmp5Result2 = enabled(504);
  obj = { products: memo2, screen: constants.ORBS, bypassAndroidUnsyncedFilter: true };
  filteredAndSortedProducts = enabled(15074).useFilteredAndSortedProducts(obj);
  const items9 = [filteredAndSortedProducts];
  const memo3 = obj.useMemo(() => filteredAndSortedProducts.slice(0, 10), items9);
  if (!fetchCollectiblesProducts) {
    fetchCollectiblesProducts = memo1;
  }
  let tmp22 = first1;
  if (first1) {
    tmp22 = skuIds.length >= 3;
  }
  obj = { products: memo3, isSearchingSkuIds: null, isLoadingProducts: null, showPlaceholderCarousel: null };
  let tmp24 = enabled;
  if (enabled) {
    tmp24 = !first1;
  }
  obj.isSearchingSkuIds = tmp24;
  obj.isLoadingProducts = fetchCollectiblesProducts;
  if (enabled) {
    enabled = tmp22;
  }
  if (enabled) {
    enabled = !tmp23;
  }
  if (enabled) {
    enabled = fetchCollectiblesProducts;
  }
  if (enabled) {
    enabled = !tmp4[0];
  }
  obj.showPlaceholderCarousel = enabled;
  return obj;
};