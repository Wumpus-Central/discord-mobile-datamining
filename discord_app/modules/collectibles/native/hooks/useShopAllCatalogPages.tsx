// === Module 17820: useShopAllCatalogPages ===

// Module 17820 (useShopAllCatalogPages)
import initializeDefault from "initialize" /* 504 */;
import StorefrontCollectionActionCreators from "StorefrontCollectionActionCreators" /* 9583 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 9581 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7721 */;

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
let closure_7 = fn(1072).COLLECTIBLES_APPLICATION_ID;
const weakMap = new WeakMap();
const weakSet = new WeakSet();
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useShopAllCatalogPages.tsx");

export default function useShopAllCatalogPages(pageSize) {
  pageSize = pageSize.pageSize;
  const includeUnpublished = pageSize.includeUnpublished;
  const noCache = pageSize.noCache;
  let enabled = pageSize.enabled;
  let first;
  let current;
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
  const memo = first.useMemo(() => Array.from({ length: rounded }, (arg0, arg1) => ({ applicationId: memo, offset: arg1 * limit, limit, useShopOrdering: true, includeUnpublishedProducts: includeUnpublishedCollections, includeUnpublishedCollections, ignoreCache })), items);
  let items1 = [memo];
  const memo1 = first.useMemo(() => memo.map(StorefrontCollectionActionCreators.getCollectionPageKey), items1);
  const collectionListKey = pageSize(noCache[5]).getCollectionListKey(memo[0]);
  const obj3 = pageSize(noCache[5]);
  const items2 = [closure_5];
  const items3 = [memo1];
  const stateFromStoresObject = pageSize(noCache[6]).useStateFromStoresObject(items2, () => {
    const obj = {};
    for (const item10006 of memo1) {
      obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
      continue;
    }
    return obj;
  }, items3);
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
  const obj4 = pageSize(noCache[6]);
  const items4 = [closure_5];
  const items5 = [tmp13, collectionListKey];
  const stateFromStoresObject1 = pageSize(noCache[6]).useStateFromStoresObject(items4, () => {
    let collectionPageFetchState;
    if (null != closure_12) {
      collectionPageFetchState = StorefrontCollectionStore.getCollectionPageFetchState(tmp);
    }
    return { nextPageFetchState: collectionPageFetchState, total: StorefrontCollectionStore.getCollectionListTotal(collectionListKey) };
  }, items5);
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
  memo2 = obj.useMemo(() => new includeUnpublished(noCache[7])(1000, 30000), []);
  first.useRef(tmp12);
  callback = obj.useCallback(() => {
    if (null != ref.current) {
      const result = StorefrontCollectionActionCreators.maybeFetchCollectionsForApplicationPage(tmp.current, { retryAfterError: true });
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
  const tmp5Result = pageSize(noCache[6]);
  const items9 = [closure_5];
  const items10 = [memo3];
  stateFromStoresObject2 = pageSize(noCache[6]).useStateFromStoresObject(items9, () => {
    const obj = {};
    for (const item10006 of memo3) {
      obj[item10006] = StorefrontCollectionStore.getCollection(item10006);
      continue;
    }
    return obj;
  }, items10);
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
          let item = products.forEach(pageSize(noCache[8]).seedCollectiblesProductFromStandaloneLoad);
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