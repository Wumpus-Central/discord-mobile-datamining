// discord_app/modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx
import CollectiblesShopConstants from "../../CollectiblesShopConstants.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c5, closure_3;

let react = react_mod;
let constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let closure_6 = 10 * DurationsDefault.Millis.SECOND;
let closure_7 = 10 * DurationsDefault.Millis.SECOND;
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx");

export const MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL = 3;
export const usePopularOrbShopProducts = function usePopularOrbShopProducts(enabled) {
  let closure_4;
  let closure_5;
  let tmp18;
  let tmp6;
  let tmp7;
  enabled = enabled.enabled;
  let first1;
  react = undefined;
  let POPULARITY;
  let collectiblesShopProducts;
  let filteredAndSortedProducts;
  let obj = react;
  const sortType = enabled.sortType;
  let tmp = first1(react.useState([]), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  const tmp2 = first1(react.useState(false), 2);
  first1 = tmp2[0];
  react = tmp2[1];
  const tmp4 = first1(react.useState(false), 2);
  constants = tmp4[1];
  const first2 = tmp4[0];
  if ("recency" === sortType) {
    POPULARITY = enabled(first[5]).CollectibleSearchSortType.RECENCY;
    tmp7 = first;
    tmp6 = enabled;
  } else {
    tmp6 = enabled;
    tmp7 = first;
    POPULARITY = enabled(first[5]).CollectibleSearchSortType.POPULARITY;
  }
  const items = [enabled, POPULARITY];
  const effect = obj.useEffect(() => {
    let _true;
    function fetchSearchResults() {
      return obj(...arguments);
    }
    let obj = function _fetchSearchResults() {
      let timeout;
      obj = _asyncToGenerator(async () => {
        let sort_type;
        if (sort_type === 2) {
          sort_type = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let v0;
          try {
            let skus;
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
                let closure_1 = tmp4;
                skus = undefined;
                v0 = 2;
                const obj4 = {
                  item_types: [],
                  colors: [],
                  themes: [],
                  orbs_eligible: true,
                  currency: _true(closure_2_1[7]).CollectibleSearchCurrencyFilter.ORBS,
                  offset: 0,
                  limit: 10,
                  sort_type,
                  sort_direction: _true(closure_2_1[8]).CollectibleSearchSortDirection.DESC,
                };
                const search = _true(closure_2_1[6]).search;
                const tmp39 = _true(closure_2_1[6]);
                const obj5 = { timeout };
                c5 = 3;
                sort_type = 1;
                const obj6 = { value: search(obj4, obj5), done: false };
                return obj6;
              }
            } else if (1 === c5) {
              v0 = 0;
              const tmp25 = closure_3;
              if (!closure_130_0) {
                v0(true);
              }
              throw tmp25;
            } else {
              if (2 === c5) {
                v0 = 1;
                if (!closure_130_0) {
                  tmp([]);
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
                obj = { value, done: true };
                return obj;
              } else {
                skus = value;
                if (!closure_130_0) {
                  skus = skus.skus ?? [];
                  tmp(skus);
                }
                v0 = 1;
              }
              v0 = 0;
              if (!closure_130_0) {
                v0(true);
              }
              sort_type = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp30) {
            closure_3 = tmp30;
            if (0 === v0) {
              sort_type = 3;
              throw tmp30;
            } else if (1 === tmp32) {
              c5 = 1;
            } else {
              c5 = 2;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = c0;
    if (tmp) {
      c0 = false;
      closure_4(false);
      fetchSearchResults();
      return () => {
        let c0 = true;
      };
    } else {
      const tmp3 = closure_2([]);
      closure_4(false);
    }
  }, items);
  const items1 = [enabled, first1, first];
  const effect1 = obj.useEffect(() => {
    let closure_0;
    let timeout;
    const tmp = timeout;
    if (tmp) {
      if (first1) {
        closure_5(false);
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_5(true), collectiblesShopProducts);
        return () => clearTimeout(closure_0);
      }
    }
    closure_5(false);
  }, items1);
  const tmp6Result = tmp6(tmp7[9]);
  collectiblesShopProducts = tmp6Result.useCollectiblesShopProducts(first, {
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
  let obj2 = { products: memo, screen: constants.ORBS, bypassAndroidUnsyncedFilter: true };
  const tmp6Result2 = tmp6(tmp7[10]);
  filteredAndSortedProducts = tmp6Result2.useFilteredAndSortedProducts(obj2);
  const items3 = [filteredAndSortedProducts];
  const memo1 = obj.useMemo(() => filteredAndSortedProducts.slice(0, 10), items3);
  let tmp16 = first1;
  if (tmp16) {
    tmp16 = first.length >= 3;
  }
  let obj3 = {
    products: memo1,
    isSearchingSkuIds: tmp18,
    isLoadingProducts: someResult,
    showPlaceholderCarousel: enabled,
  };
  tmp18 = enabled;
  const tmp17 = memo1.length >= 3;
  if (enabled) {
    tmp18 = !first1;
  }
  if (enabled) {
    enabled = tmp16;
  }
  if (enabled) {
    enabled = !tmp17;
  }
  if (enabled) {
    enabled = someResult;
  }
  if (enabled) {
    enabled = !first2;
  }
  return obj3;
};
