// discord_app/modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let constants = fn(1076).CollectiblesMobileShopScreen;
let closure_6 = 10 * DurationsDefault.Millis.SECOND;
let closure_7 = 10 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx");

export const MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL = 3;
export const usePopularOrbShopProducts = function usePopularOrbShopProducts(enabled) {
  enabled = enabled.enabled;
  let first1;
  noop = undefined;
  let POPULARITY;
  let collectiblesShopProducts;
  let filteredAndSortedProducts;
  let tmp = first1(noop.useState([]), 2);
  const first = tmp[0];
  closure_2 = tmp[1];
  const tmp2 = first1(noop.useState(false), 2);
  first1 = tmp2[0];
  noop = tmp2[1];
  const tmp4 = first1(noop.useState(false), 2);
  constants = tmp4[1];
  if ("recency" === enabled.sortType) {
    POPULARITY = enabled(first[5]).CollectibleSearchSortType.RECENCY;
    let tmp6 = first;
    let tmp5 = enabled;
  } else {
    tmp5 = enabled;
    tmp6 = first;
    POPULARITY = enabled(first[5]).CollectibleSearchSortType.POPULARITY;
  }
  const items = [enabled, POPULARITY];
  const effect = obj.useEffect(() => {
    closure_1 = function _fetchSearchResults() {
      const self = this;
      const tmp = asyncGeneratorStep(async () => {
        if (sort_type === 2) {
          sort_type = 3;
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
            sort_type = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                sort_type = 3;
                throw value;
              } else if (arg0 === 2) {
                sort_type = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp8;
                closure_129_0 = undefined;
                let v0 = 2;
                const obj4 = {
                  item_types: [],
                  colors: [],
                  themes: [],
                  orbs_eligible: true,
                  currency: _true(15401).CollectibleSearchCurrencyFilter.ORBS,
                  offset: 0,
                  limit: 10,
                  sort_type,
                  sort_direction: _true(1080).CollectibleSearchSortDirection.DESC,
                };
                const obj6 = { timeout };
                c5 = 3;
                sort_type = 1;
                const obj7 = { value: _true(15400).search(obj4, obj6), done: false };
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
                sort_type = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                if (!closure_130_0) {
                  v0(true);
                }
                sort_type = 3;
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
              sort_type = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp34) {
            closure_3 = tmp34;
            if (tmp5 === v0) {
              sort_type = tmp3;
              throw tmp34;
            } else if (tmp2 === tmp36) {
              c5 = tmp2;
            } else {
              c5 = tmp;
            }
          }
        }
      });
      dependencyMap = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
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
  }, items);
  const items1 = [enabled, first1, first];
  const effect1 = obj.useEffect(() => {
    if (timeout) {
      if (first1) {
        closure_5(false);
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_5(true), collectiblesShopProducts);
        return () => clearTimeout(closure_0);
      }
    }
    closure_5(false);
  }, items1);
  collectiblesShopProducts = tmp5(tmp6[9]).useCollectiblesShopProducts(first, {
    needsCategory: false,
    flattenVariants: true,
  });
  const items2 = [first, collectiblesShopProducts];
  const memo = obj.useMemo(() => {
    const mapped = first.map((item) => {
      let product;
      if (collectiblesShopProducts[item] != null) {
        product = tmp.product;
      }
      return product;
    });
    return mapped.filter((item) => null != item);
  }, items2);
  const someResult = first.some((item) => {
    let state;
    if (collectiblesShopProducts[item] != null) {
      state = tmp.state;
    }
    return "loading" === state;
  });
  const tmp5Result = tmp5(tmp6[9]);
  filteredAndSortedProducts = tmp5(tmp6[10]).useFilteredAndSortedProducts({
    products: memo,
    screen: constants.ORBS,
    bypassAndroidUnsyncedFilter: true,
  });
  const items3 = [filteredAndSortedProducts];
  const memo1 = obj.useMemo(() => filteredAndSortedProducts.slice(0, 10), items3);
  let tmp15 = first1;
  if (first1) {
    tmp15 = first.length >= 3;
  }
  let obj3 = { products: memo1, isSearchingSkuIds: null, isLoadingProducts: null, showPlaceholderCarousel: null };
  let tmp17 = enabled;
  if (enabled) {
    tmp17 = !first1;
  }
  obj3.isSearchingSkuIds = tmp17;
  obj3.isLoadingProducts = someResult;
  if (enabled) {
    enabled = tmp15;
  }
  if (enabled) {
    enabled = !tmp16;
  }
  if (enabled) {
    enabled = someResult;
  }
  if (enabled) {
    enabled = !tmp4[0];
  }
  obj3.showPlaceholderCarousel = enabled;
  return obj3;
};
