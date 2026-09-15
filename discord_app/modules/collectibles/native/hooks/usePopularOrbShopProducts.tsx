// discord_app/modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import StorefrontProductActionCreators from "../../../storefront/StorefrontProductActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import StorefrontProductStore from "../../../storefront/StorefrontProductStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import CollectiblesCategoryStore from "../../CollectiblesCategoryStore.tsx";
import CollectiblesProductRecord from "../../records/CollectiblesProductRecord.tsx";

require = fn;
let constants = fn(1076).CollectiblesMobileShopScreen;
let closure_11 = 10 * DurationsDefault.Millis.SECOND;
let closure_12 = 10 * DurationsDefault.Millis.SECOND;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx");

export const MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL = 3;
export const usePopularOrbShopProducts = function usePopularOrbShopProducts(enabled) {
  enabled = enabled.enabled;
  skuIds = undefined;
  dependencyMap = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let POPULARITY;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  constants = undefined;
  let memo;
  let filteredAndSortedProducts;
  [skuIds, dependencyMap] = noop.useState([]);
  [first1, _slicedToArray] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  noop = tmp4[1];
  let items = [POPULARITY];
  const stateFromStores = enabled(504).useStateFromStores(items, () => POPULARITY.getCurrentUser());
  let obj2 = enabled(504);
  let tmp8 = skuIds;
  const canUseShopDiscountsResult = skuIds(4297).canUseShopDiscounts(stateFromStores);
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp8;
              closure_129_0 = undefined;
              let v0 = 2;
              const obj4 = {
                item_types: null,
                colors: null,
                themes: null,
                orbs_eligible: true,
                currency: null,
                offset: 0,
                limit: 10,
                sort_type: null,
                sort_direction: null,
              };
              const items = [
                enabled(1078).CollectibleSearchItemType.AVATAR_DECORATION,
                enabled(1078).CollectibleSearchItemType.NAMEPLATE,
                enabled(1078).CollectibleSearchItemType.PROFILE_EFFECT,
                enabled(1078).CollectibleSearchItemType.PROFILE_FRAME,
              ];
              obj4.item_types = items;
              obj4.colors = [];
              obj4.themes = [];
              obj4.currency = enabled(15162).CollectibleSearchCurrencyFilter.ORBS;
              obj4.sort_type = sort_type;
              obj4.sort_direction = enabled(1080).CollectibleSearchSortDirection.DESC;
              const obj6 = { timeout };
              c5 = 3;
              c6 = 1;
              const obj7 = { value: enabled(15161).search(obj4, obj6), done: false };
              return obj7;
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
              const obj = { value, done: true };
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
  let obj3 = skuIds(4297);
  let fetchCollectiblesProducts = enabled(15163).useFetchCollectiblesProducts(skuIds);
  const items3 = [skuIds];
  const effect2 = obj.useEffect(() => {
    if (0 !== first.length) {
      const obj2 = { skuIds: tmp };
      const result = StorefrontProductActionCreators.maybeFetchProductsBySkuIds(obj2);
    }
  }, items3);
  const tmp5Result = enabled(15163);
  const getOrFetchStorefrontPricesForSkuIds = enabled(8913).useGetOrFetchStorefrontPricesForSkuIds({ skuIds });
  const tmp5Result5 = enabled(8913);
  const items4 = [c6];
  stateFromStoresArray = enabled(504).useStateFromStoresArray(items4, () =>
    first.map((item) => productsForSku.getProductsForSku(item)),
  );
  const tmp5Result6 = enabled(504);
  const items5 = [c6];
  stateFromStoresArray1 = enabled(504).useStateFromStoresArray(items5, () =>
    first.map((item) => fetchStateForSku.getFetchStateForSku(item)),
  );
  const tmp17 = tmp8(15164)();
  constants = tmp17;
  const items6 = [tmp17, skuIds, stateFromStoresArray, canUseShopDiscountsResult];
  memo = obj.useMemo(
    () =>
      closure_10(first).map((product, index) => {
        let tmp = product;
        if (null == obj2.getProductOrbPrice(obj3)) {
          const tmp13 = (function getStorefrontPricesForSkuId(skuId, stateFromStoresArray) {
            closure_0 = skuId;
            if (null == stateFromStoresArray) {
              return null;
            } else {
              const iter = stateFromStoresArray[Symbol.iterator]();
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
            const obj5 = {
              storeListingId: null,
              skuId: null,
              name: null,
              summary: null,
              styles: null,
              type: null,
              premiumType: null,
              items: null,
              categorySkuId: null,
              isCategoryReward: null,
              prices: null,
              bundledProducts: null,
              previewAssets: null,
              googleSkuIds: null,
              variants: null,
              eligibleOffers: null,
              badgeOverride: null,
              hideBadge: null,
            };
            ({
              storeListingId: obj4.storeListingId,
              skuId: obj4.skuId,
              name: obj4.name,
              summary: obj4.summary,
              styles: obj4.styles,
              type: obj4.type,
              premiumType: obj4.premiumType,
              items: obj4.items,
              categorySkuId: obj4.categorySkuId,
              isCategoryReward: obj4.isCategoryReward,
            } = product);
            const obj8 = {};
            const merged = Object.assign(product.prices);
            const merged1 = Object.assign(tmp13);
            obj5.prices = obj8;
            ({ bundledProducts: obj4.bundledProducts, previewAssets: obj4.previewAssets } = product);
            let googleSkuIds;
            if (found != null) {
              googleSkuIds = found.googleSkuIds;
            }
            if (googleSkuIds == null) {
              googleSkuIds = product.googleSkuIds;
            }
            obj5.googleSkuIds = googleSkuIds;
            ({
              variants: obj4.variants,
              eligibleOffers: obj4.eligibleOffers,
              badgeOverride: obj4.badgeOverride,
              hideBadge: obj4.hideBadge,
            } = product);
            tmp = new stateFromStoresArray1(obj5);
          }
        }
        return tmp;
      }),
    items6,
  );
  const items7 = [skuIds, stateFromStoresArray1, canUseShopDiscountsResult];
  const items8 = [memo, canUseShopDiscountsResult];
  const memo1 = obj.useMemo(
    () =>
      0 !== first.length &&
      first.some((item, index) => {
        const product = stateFromStoresArray.getProduct(item);
        if (null != product) {
          const obj2 = { product, hasShopDiscount };
          if (null != obj.getProductOrbPrice(obj2)) {
            return false;
          }
          obj = enabled(closure_2[9]);
        }
        return "loading" === stateFromStoresArray1[index] || null == stateFromStoresArray1[index];
      }),
    items7,
  );
  const memo2 = obj.useMemo(
    () => memo.filter((product) => null != enabled(closure_2[9]).getProductOrbPrice({ product, hasShopDiscount })),
    items8,
  );
  const tmp5Result7 = enabled(504);
  filteredAndSortedProducts = enabled(15166).useFilteredAndSortedProducts({
    products: memo2,
    screen: constants.ORBS,
    bypassAndroidUnsyncedFilter: true,
  });
  const items9 = [filteredAndSortedProducts];
  const memo3 = obj.useMemo(() => filteredAndSortedProducts.slice(0, 10), items9);
  if (!fetchCollectiblesProducts) {
    fetchCollectiblesProducts = memo1;
  }
  let tmp22 = first1;
  if (first1) {
    tmp22 = skuIds.length >= 3;
  }
  let obj5 = { products: memo3, isSearchingSkuIds: null, isLoadingProducts: null, showPlaceholderCarousel: null };
  let tmp24 = enabled;
  if (enabled) {
    tmp24 = !first1;
  }
  obj5.isSearchingSkuIds = tmp24;
  obj5.isLoadingProducts = fetchCollectiblesProducts;
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
  obj5.showPlaceholderCarousel = enabled;
  return obj5;
};
