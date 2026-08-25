// === Module 14520: MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL ===

// Module 14520 (MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL)
import setDefault from "set" /* 687 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "getFetchState" /* 8963 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import closure_8 from "updateCategoriesAndProducts" /* 7148 */;
import closure_9 from "fromServer" /* 7150 */;
import { CollectiblesMobileShopScreen as closure_10 } from "items" /* 678 */;

const require = arg1;
let closure_11 = 10 * setDefault.Millis.SECOND;
let closure_12 = 10 * setDefault.Millis.SECOND;
let result = require("set").fileFinishedImporting("modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx");

export const MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL = 3;
export const usePopularOrbShopProducts = function usePopularOrbShopProducts(enabled) {
  enabled = enabled.enabled;
  const variation = enabled.variation;
  let first;
  dependencyMap = undefined;
  let first1;
  let callback;
  let React;
  c6 = undefined;
  let POPULARITY;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let constants;
  let memo;
  let filteredAndSortedProducts;
  let obj = React;
  let tmp = callback(React.useState([]), 2);
  first = tmp[0];
  dependencyMap = tmp[1];
  const tmp2 = callback(React.useState(false), 2);
  first1 = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  React = tmp4[1];
  const items = [POPULARITY];
  const stateFromStores = enabled(589).useStateFromStores(items, () => POPULARITY.getCurrentUser());
  let obj2 = enabled(589);
  let tmp8 = first;
  const canUseShopDiscountsResult = first(4043).canUseShopDiscounts(stateFromStores);
  c6 = canUseShopDiscountsResult;
  if (enabled(14521).BountiesShopCarouselExperimentVariation.POPULARITY === variation) {
    POPULARITY = tmp5(681).CollectibleSearchSortType.POPULARITY;
  } else if (tmp5(14521).BountiesShopCarouselExperimentVariation.RECENCY === variation) {
    POPULARITY = tmp5(681).CollectibleSearchSortType.RECENCY;
  } else {
    const BASE = tmp5(14521).BountiesShopCarouselExperimentVariation.BASE;
    POPULARITY = tmp5(681).CollectibleSearchSortType.POPULARITY;
  }
  const items1 = [enabled, POPULARITY];
  const effect = obj.useEffect(() => {
    function _fetchSearchResults() {
      const self = this;
      const tmp = first1(function*() {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp4;
                closure_1 = tmp8;
                let skus;
                let v0 = 2;
                obj1 = { item_types: null, colors: null, themes: null, orbs_eligible: true, currency: null, offset: 0, limit: 10, sort_type: null, sort_direction: null };
                obj1[0] = [];
                obj1[1] = [];
                obj1[2] = [];
                obj1[4] = closure_2_0(closure_2_2[15]).CollectibleSearchCurrencyFilter.ORBS;
                obj1[7] = closure_1_7;
                obj1[8] = closure_2_0(closure_2_2[16]).CollectibleSearchSortDirection.DESC;
                const obj2 = { timeout: null };
                obj2[0] = closure_2_11;
                c5 = 3;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = closure_2_0(closure_2_2[14]).search(obj1, obj2);
                return obj3;
              }
            } else if (1 === tmp8) {
              v0 = 0;
              if (!closure_1_0) {
                v0(true);
              }
              throw closure_3;
            } else {
              if (2 === tmp8) {
                v0 = 1;
                if (!closure_1_0) {
                  closure_1_2([]);
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                if (!skus) {
                  v0(true);
                }
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                skus = arg1;
                if (!skus) {
                  skus = skus.skus;
                  if (skus == null) {
                    skus = [];
                  }
                  closure_1_2(skus);
                  const tmp12 = closure_1_2;
                }
                v0 = 1;
              }
              v0 = 0;
              if (!closure_1_0) {
                v0(true);
              }
              c6 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (c0) {
      c0 = false;
      callback(false);
      (function fetchSearchResults() {
        const self = this;
        const apply = _fetchSearchResults.apply;
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
      dependencyMap([]);
      callback(false);
    }
  }, items1);
  const items2 = [enabled, first1, first];
  const effect1 = obj.useEffect(() => {
    if (timeout) {
      if (first1) {
        callback2(false);
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => callback(true), filteredAndSortedProducts);
        return () => clearTimeout(closure_0);
      }
    }
    callback2(false);
  }, items2);
  let tmp5Result = tmp5(12384);
  let fetchCollectiblesProducts = tmp5Result.useFetchCollectiblesProducts(first);
  const items3 = [first];
  const effect2 = obj.useEffect(() => {
    if (0 !== first.length) {
      let obj = enabled(8962);
      obj = { skuIds: null };
      obj[0] = tmp;
      const result = obj.maybeFetchProductsBySkuIds(obj);
    }
  }, items3);
  tmp5Result = tmp5(9511);
  const getOrFetchStorefrontPricesForSkuIds = tmp5Result.useGetOrFetchStorefrontPricesForSkuIds({ skuIds: first });
  let obj3 = first(4043);
  const items4 = [c6];
  stateFromStoresArray = enabled(589).useStateFromStoresArray(items4, () => first.map((closure_0) => productsForSku.getProductsForSku(closure_0)));
  const tmp5Result1 = enabled(589);
  const items5 = [c6];
  stateFromStoresArray1 = enabled(589).useStateFromStoresArray(items5, () => first.map((closure_0) => fetchStateForSku.getFetchStateForSku(closure_0)));
  const tmp17 = tmp8(14524)();
  constants = tmp17;
  const items6 = [tmp17, first, stateFromStoresArray, canUseShopDiscountsResult];
  memo = obj.useMemo(() => callback3(first).map((product) => {
    let obj = table[arg1];
    closure_0 = product;
    obj1 = closure_1_0(closure_1_2[9]);
    obj = { product, hasShopDiscount: closure_6 };
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
              let tmp7 = found;
              if (Object.keys(tmp6.prices).length > 0) {
                let tmp8 = iter;
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
        ({ storeListingId: obj4[0], skuId: obj4[1], name: obj4[2], summary: obj4[3], styles: obj4[4], type: obj4[5], premiumType: obj4[6], items: obj4[7], categorySkuId: obj4[8], isCategoryReward: obj4[9] } = product);
        obj1 = {};
        const merged = Object.assign(product.prices);
        const merged1 = Object.assign(tmp13);
        obj[10] = obj1;
        ({ bundledProducts: obj4[11], previewAssets: obj4[12] } = product);
        let googleSkuIds;
        if (found != null) {
          googleSkuIds = found.googleSkuIds;
        }
        if (googleSkuIds == null) {
          googleSkuIds = product.googleSkuIds;
        }
        obj[13] = googleSkuIds;
        ({ variants: obj4[14], eligibleOffers: obj4[15], badgeOverride: obj4[16], hideBadge: obj4[17] } = product);
        tmp = new closure_1_9(obj);
        const tmp3 = closure_1_9;
      }
    }
    return tmp;
  }), items6);
  const items7 = [first, stateFromStoresArray1, canUseShopDiscountsResult];
  const items8 = [memo, canUseShopDiscountsResult];
  const memo1 = obj.useMemo(() => 0 !== first.length && first.some((arg0, arg1) => {
    const product = closure_1_8.getProduct(arg0);
    if (null != product) {
      let obj = closure_1_0(closure_1_2[9]);
      obj = { product: null, hasShopDiscount: null };
      obj[0] = product;
      obj[1] = closure_6;
      if (null != obj.getProductOrbPrice(obj)) {
        return false;
      }
    }
    return "loading" === table[arg1] || null == table[arg1];
  }), items7);
  const memo2 = obj.useMemo(() => memo.filter((product) => {
    let obj = closure_1_0(closure_1_2[9]);
    obj = { product, hasShopDiscount: closure_6 };
    return null != obj.getProductOrbPrice(obj);
  }), items8);
  const tmp5Result2 = enabled(589);
  obj = { products: memo2, screen: constants.ORBS };
  filteredAndSortedProducts = enabled(14526).useFilteredAndSortedProducts(obj);
  const items9 = [filteredAndSortedProducts];
  const memo3 = obj.useMemo(() => filteredAndSortedProducts.slice(0, 10), items9);
  if (!fetchCollectiblesProducts) {
    fetchCollectiblesProducts = memo1;
  }
  let tmp22 = first1;
  if (first1) {
    tmp22 = first.length >= 3;
  }
  obj = { products: memo3, isSearchingSkuIds: null, isLoadingProducts: null, showPlaceholderCarousel: null };
  let tmp24 = enabled;
  if (enabled) {
    tmp24 = !first1;
  }
  obj[1] = tmp24;
  obj[2] = fetchCollectiblesProducts;
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
  obj[3] = enabled;
  return obj;
};