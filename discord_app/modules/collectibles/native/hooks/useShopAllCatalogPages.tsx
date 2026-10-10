// discord_app/modules/collectibles/native/hooks/useShopAllCatalogPages.tsx
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import StorefrontCollectionActionCreators from "../../../storefront/StorefrontCollectionActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import StorefrontCollectionStore from "../../../storefront/StorefrontCollectionStore.tsx";
import CollectiblesCategoryRecord from "../../records/CollectiblesCategoryRecord.tsx";

require = fn;
function getCategoryForCollection(id) {
  value = weakMap.get(id);
  if (null == value) {
    const result = CollectiblesCategoryRecord.fromStorefrontCollectionRecord(id);
    const result1 = weakMap.set(id, result);
    value = result;
  }
  return value;
}
let closure_7 = fn(1085).COLLECTIBLES_APPLICATION_ID;
const weakMap = new WeakMap();
const weakSet = new WeakSet();
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useShopAllCatalogPages.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useShopAllCatalogPages(pageSize) {
      const cResult = pageSize(noCache[6]).c(53);
      pageSize = pageSize.pageSize;
      const includeUnpublished = pageSize.includeUnpublished;
      noCache = pageSize.noCache;
      const enabled = pageSize.enabled;
      const tmp4 = enabled(first.useState(3 * pageSize), 2);
      first = tmp4[0];
      StorefrontCollectionStore = tmp4[1];
      const rounded = Math.ceil(first / pageSize);
      if (cResult[0] === includeUnpublished) {
        if (cResult[1] === noCache) {
          if (cResult[2] === pageSize) {
            if (cResult[3] === rounded) {
              if (cResult[9] !== cResult[4]) {
                const mapped = arr.map(tmp(tmp2[7]).getCollectionPageKey);
                cResult[9] = arr;
                cResult[10] = mapped;
                let obj3 = mapped;
              } else {
                obj3 = cResult[10];
              }
              if (cResult[11] !== cResult[4][0]) {
                const collectionListKey = tmp(tmp2[7]).getCollectionListKey(arr[0]);
                cResult[11] = arr[0];
                cResult[12] = collectionListKey;
                let tmp8 = collectionListKey;
                const tmpResult = tmp(tmp2[7]);
              } else {
                tmp8 = cResult[12];
              }
              const applicationId = tmp8;
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const items = [StorefrontCollectionStore];
                cResult[13] = items;
                let tmp10 = items;
              } else {
                tmp10 = cResult[13];
              }
              if (cResult[14] !== obj3) {
                class O {
                  constructor() {
                    obj = {};
                    for (const item10006 of closure_6) {
                      tmp = closure_5;
                      obj[item10006] = closure_5.getCollectionPageIds(item10006);
                      continue;
                    }
                    return obj;
                  }
                }
                const items1 = [obj3];
                cResult[14] = obj3;
                cResult[15] = O;
                cResult[16] = items1;
                let tmp13 = items1;
              } else {
                class O {
                  constructor() {
                    obj = {};
                    for (const item10006 of closure_6) {
                      tmp = closure_5;
                      obj[item10006] = closure_5.getCollectionPageIds(item10006);
                      continue;
                    }
                    return obj;
                  }
                }
                tmp13 = cResult[16];
              }
              const stateFromStoresObject = tmp(tmp2[8]).useStateFromStoresObject(tmp10, O, tmp13);
              const findIndexResult = obj3.findIndex((item) => null == stateFromStoresObject[item]);
              if (-1 !== findIndexResult) {
                class O {
                  constructor() {
                    obj = {};
                    for (const item10006 of closure_6) {
                      tmp = closure_5;
                      obj[item10006] = closure_5.getCollectionPageIds(item10006);
                      continue;
                    }
                    return obj;
                  }
                }
              }
              c9 = tmp17;
              if (-1 !== findIndexResult) {
                class O {
                  constructor() {
                    obj = {};
                    for (const item10006 of closure_6) {
                      tmp = closure_5;
                      obj[item10006] = closure_5.getCollectionPageIds(item10006);
                      continue;
                    }
                    return obj;
                  }
                }
              }
              c10 = tmp18;
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class O {
                  constructor() {
                    obj = {};
                    for (const item10006 of closure_6) {
                      tmp = closure_5;
                      obj[item10006] = closure_5.getCollectionPageIds(item10006);
                      continue;
                    }
                    return obj;
                  }
                }
                const items2 = [StorefrontCollectionStore];
                cResult[17] = items2;
                const tmp19 = items2;
              } else {
                class O {
                  constructor() {
                    obj = {};
                    for (const item10006 of closure_6) {
                      tmp = closure_5;
                      obj[item10006] = closure_5.getCollectionPageIds(item10006);
                      continue;
                    }
                    return obj;
                  }
                }
              }
              if (cResult[18] === tmp8) {
                class O {
                  constructor() {
                    obj = {};
                    for (const item10006 of closure_6) {
                      tmp = closure_5;
                      obj[item10006] = closure_5.getCollectionPageIds(item10006);
                      continue;
                    }
                    return obj;
                  }
                }
                const stateFromStoresObject1 = tmp(tmp2[8]).useStateFromStoresObject(tmp19, T, tmp22);
                const nextPageFetchState = stateFromStoresObject1.nextPageFetchState;
                const total = stateFromStoresObject1.total;
                let tmp25 = null == total;
                if (!tmp25) {
                  class O {
                    constructor() {
                      obj = {};
                      for (const item10006 of closure_6) {
                        tmp = closure_5;
                        obj[item10006] = closure_5.getCollectionPageIds(item10006);
                        continue;
                      }
                      return obj;
                    }
                  }
                  tmp25 = findIndexResult * pageSize < total;
                }
                closure_12 = tmp25;
                if (enabled) {
                  class O {
                    constructor() {
                      obj = {};
                      for (const item10006 of closure_6) {
                        tmp = closure_5;
                        obj[item10006] = closure_5.getCollectionPageIds(item10006);
                        continue;
                      }
                      return obj;
                    }
                  }
                }
                if (tmp26) {
                  class O {
                    constructor() {
                      obj = {};
                      for (const item10006 of closure_6) {
                        tmp = closure_5;
                        obj[item10006] = closure_5.getCollectionPageIds(item10006);
                        continue;
                      }
                      return obj;
                    }
                  }
                }
                const _Symbol3 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  class O {
                    constructor() {
                      obj = {};
                      for (const item10006 of closure_6) {
                        tmp = closure_5;
                        obj[item10006] = closure_5.getCollectionPageIds(item10006);
                        continue;
                      }
                      return obj;
                    }
                  }
                  const tmp30 = new includeUnpublished(tmp2[9])(1000, 30000);
                  cResult[22] = tmp30;
                } else {
                  class O {
                    constructor() {
                      obj = {};
                      for (const item10006 of closure_6) {
                        tmp = closure_5;
                        obj[item10006] = closure_5.getCollectionPageIds(item10006);
                        continue;
                      }
                      return obj;
                    }
                  }
                }
                closure_13 = tmp27;
                obj2.useRef(tmp17);
                const _Symbol4 = Symbol;
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  class H {
                    constructor() {
                      if (null != closure_14.current) {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[7]);
                        result = obj.maybeFetchCollectionsForApplicationPage(tmp.current, { retryAfterError: true });
                      }
                      return;
                    }
                  }
                  cResult[23] = H;
                } else {
                  class H {
                    constructor() {
                      if (null != closure_14.current) {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[7]);
                        result = obj.maybeFetchCollectionsForApplicationPage(tmp.current, { retryAfterError: true });
                      }
                      return;
                    }
                  }
                }
                closure_15 = H;
                const _Symbol5 = Symbol;
                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                  class V {
                    constructor() {
                      return () => closure_1_13.cancel();
                    }
                  }
                  const items3 = [tmp27];
                  cResult[24] = V;
                  cResult[25] = items3;
                  let tmp34 = items3;
                } else {
                  class V {
                    constructor() {
                      return () => closure_1_13.cancel();
                    }
                  }
                  tmp34 = cResult[25];
                }
                const effect = obj2.useEffect(V, tmp34);
                class T {
                  constructor() {
                    collectionPageFetchState = undefined;
                    if (null != closure_10) {
                      tmp3 = closure_5;
                      collectionPageFetchState = closure_5.getCollectionPageFetchState(tmp);
                    }
                    obj = {
                      nextPageFetchState: collectionPageFetchState,
                      total: closure_5.getCollectionListTotal(closure_7),
                    };
                    return obj;
                  }
                }
                class Y {
                  constructor() {
                    tmp = closure_9;
                    closure_14.current = closure_9;
                    tmp2 = enabled;
                    if (enabled) {
                      tmp3 = null;
                      tmp2 = null != tmp;
                    }
                    if (tmp2) {
                      tmp2 = closure_12;
                    }
                    if (tmp2) {
                      str = "error";
                      if ("error" === nextPageFetchState) {
                        obj2 = closure_13;
                        if (!closure_13.pending) {
                          tmp11 = closure_15;
                          failResult = obj2.fail(closure_15);
                        }
                      } else {
                        tmp5 = null;
                        if (null == tmp4) {
                          tmp6 = closure_13;
                          succeedResult = closure_13.succeed();
                          tmp8 = closure_0;
                          tmp9 = closure_2;
                          obj = closure_0(closure_2[7]);
                          result = obj.maybeFetchCollectionsForApplicationPage(tmp);
                        }
                      }
                    }
                    return;
                  }
                }
                const items4 = [enabled, tmp17, tmp25, nextPageFetchState, tmp27, H];
                cResult[26] = enabled;
                cResult[27] = tmp25;
                cResult[28] = tmp17;
                cResult[29] = nextPageFetchState;
                cResult[30] = Y;
                cResult[31] = items4;
                tmp26 = enabled;
                const tmpResult4 = tmp(tmp2[8]);
              }
              class T {
                constructor() {
                  collectionPageFetchState = undefined;
                  if (null != closure_10) {
                    tmp3 = closure_5;
                    collectionPageFetchState = closure_5.getCollectionPageFetchState(tmp);
                  }
                  obj = {
                    nextPageFetchState: collectionPageFetchState,
                    total: closure_5.getCollectionListTotal(closure_7),
                  };
                  return obj;
                }
              }
              tmp22[0] = undefined;
              tmp22[1] = tmp8;
              cResult[18] = tmp8;
              cResult[19] = undefined;
              cResult[20] = T;
              cResult[21] = tmp22;
              const tmpResult3 = tmp(tmp2[8]);
            }
          }
        }
      }
      if (cResult[5] === includeUnpublished) {
        class V {
          constructor() {
            return () => closure_1_13.cancel();
          }
        }
      }
      const fn = function f(arg0, arg1) {
        return {
          applicationId,
          offset: arg1 * pageSize,
          limit: pageSize,
          useShopOrdering: true,
          includeUnpublishedProducts: includeUnpublished,
          includeUnpublishedCollections: includeUnpublished,
          ignoreCache: noCache,
        };
      };
      cResult[5] = includeUnpublished;
      cResult[6] = noCache;
      cResult[7] = pageSize;
      cResult[8] = fn;
      let obj = pageSize(noCache[6]);
    }
  : function useShopAllCatalogPages(pageSize) {
      pageSize = pageSize.pageSize;
      const includeUnpublished = pageSize.includeUnpublished;
      const noCache = pageSize.noCache;
      let enabled = pageSize.enabled;
      let first;
      current = undefined;
      closure_12 = undefined;
      let nextPageFetchState;
      closure_14 = undefined;
      let memo2;
      let callback;
      let memo3;
      let stateFromStoresObject2;
      let memo4;
      const tmp = enabled(first.useState(3 * pageSize), 2);
      first = tmp[0];
      closure_5 = tmp[1];
      const rounded = Math.ceil(first / pageSize);
      let items = [rounded, pageSize, includeUnpublished, noCache];
      const memo = first.useMemo(
        () =>
          Array.from({ length: rounded }, (arg0, arg1) => ({
            applicationId: memo,
            offset: arg1 * limit,
            limit,
            useShopOrdering: true,
            includeUnpublishedProducts: includeUnpublishedCollections,
            includeUnpublishedCollections,
            ignoreCache,
          })),
        items,
      );
      let items1 = [memo];
      const memo1 = first.useMemo(() => memo.map(StorefrontCollectionActionCreators.getCollectionPageKey), items1);
      const collectionListKey = pageSize(noCache[7]).getCollectionListKey(memo[0]);
      const obj3 = pageSize(noCache[7]);
      const items2 = [closure_5];
      const items3 = [memo1];
      const stateFromStoresObject = pageSize(noCache[8]).useStateFromStoresObject(
        items2,
        () => {
          const obj = {};
          for (const item10006 of memo1) {
            obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
            continue;
          }
          return obj;
        },
        items3,
      );
      let findIndexResult = memo1.findIndex((item) => null == stateFromStoresObject[item]);
      let tmp12;
      if (-1 !== findIndexResult) {
        tmp12 = memo[findIndexResult];
      }
      current = tmp12;
      let tmp13;
      if (-1 !== findIndexResult) {
        tmp13 = memo1[findIndexResult];
      }
      closure_12 = tmp13;
      const obj4 = pageSize(noCache[8]);
      const items4 = [closure_5];
      const items5 = [tmp13, collectionListKey];
      const stateFromStoresObject1 = pageSize(noCache[8]).useStateFromStoresObject(
        items4,
        () => {
          let collectionPageFetchState;
          if (null != closure_12) {
            collectionPageFetchState = StorefrontCollectionStore.getCollectionPageFetchState(tmp);
          }
          return {
            nextPageFetchState: collectionPageFetchState,
            total: StorefrontCollectionStore.getCollectionListTotal(collectionListKey),
          };
        },
        items5,
      );
      nextPageFetchState = stateFromStoresObject1.nextPageFetchState;
      const total = stateFromStoresObject1.total;
      let tmp15 = null == total;
      if (!tmp15) {
        if (tmp11) {
          findIndexResult = rounded;
        }
        tmp15 = findIndexResult * pageSize < total;
      }
      closure_14 = tmp15;
      memo2 = obj.useMemo(() => new includeUnpublished(noCache[9])(1000, 30000), []);
      first.useRef(tmp12);
      callback = obj.useCallback(() => {
        if (null != ref.current) {
          const result = StorefrontCollectionActionCreators.maybeFetchCollectionsForApplicationPage(tmp.current, {
            retryAfterError: true,
          });
        }
      }, []);
      const items6 = [memo2];
      const effect = obj.useEffect(() => () => memo2.cancel(), items6);
      const items7 = [enabled, tmp12, tmp15, nextPageFetchState, memo2, callback];
      const effect1 = obj.useEffect(() => {
        closure_16.current = current;
        let tmp2 = enabled;
        if (enabled) {
          tmp2 = null != current;
        }
        if (tmp2) {
          tmp2 = closure_14;
        }
        if (tmp2) {
          if ("error" === nextPageFetchState) {
            if (!memo2.pending) {
              memo2.fail(callback);
            }
          } else if (null == tmp4) {
            memo2.succeed();
            const result = StorefrontCollectionActionCreators.maybeFetchCollectionsForApplicationPage(current);
          }
        }
      }, items7);
      const items8 = [memo1, stateFromStoresObject];
      memo3 = obj.useMemo(() => {
        const items = [];
        const obj = memo1[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp4 = stateFromStoresObject[tmp2];
          if (null == tmp4) {
            obj.return();
            break;
          } else {
            let push = items.push;
            let items1 = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(tmp5, 0);
            let applyResult = HermesBuiltin.apply(items1, items);
            continue;
          }
          return items;
        }
      }, items8);
      const tmp5Result = pageSize(noCache[8]);
      const items9 = [closure_5];
      const items10 = [memo3];
      stateFromStoresObject2 = pageSize(noCache[8]).useStateFromStoresObject(
        items9,
        () => {
          const obj = {};
          for (const item10006 of memo3) {
            obj[item10006] = StorefrontCollectionStore.getCollection(item10006);
            continue;
          }
          return obj;
        },
        items10,
      );
      const items11 = [memo3, stateFromStoresObject2];
      memo4 = obj.useMemo(() => {
        const mapped = memo3.map((item) => stateFromStoresObject2[item]);
        const found = mapped.filter((item) => null != item);
        return found.map(getCategoryForCollection);
      }, items11);
      const items12 = [memo4];
      const effect2 = obj.useEffect(() => {
        const found = memo4.filter((item) => !set.has(item));
        if (0 !== found.length) {
          const Emitter = initializeDefault.Emitter;
          Emitter.batched(() => {
            for (const item10005 of found) {
              let addResult = collectionListKey.add(item10005);
              let products = item10005.products;
              let item = products.forEach(pageSize(noCache[10]).seedCollectiblesProductFromStandaloneLoad);
              continue;
            }
          });
        }
      }, items12);
      const items13 = [pageSize, first];
      const obj2 = { categories: memo4, isLoading: null, hasMore: null, prefetchThrough: null };
      const callback1 = obj.useCallback((arg0) => {
        const sum = arg0 + 2 * pageSize;
        if (sum > first) {
          closure_5(sum);
        }
      }, items13);
      if (enabled) {
        enabled = null != tmp12;
      }
      if (enabled) {
        enabled = tmp15;
      }
      obj2.isLoading = enabled;
      obj2.hasMore = tmp15;
      obj2.prefetchThrough = callback1;
      return obj2;
    };
