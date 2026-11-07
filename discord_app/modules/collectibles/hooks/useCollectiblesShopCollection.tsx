// discord_app/modules/collectibles/hooks/useCollectiblesShopCollection.tsx
import CollectiblesShopManager2 from "../CollectiblesShopManager.tsx";
import StorefrontCollectionActionCreators from "../../storefront/StorefrontCollectionActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import StorefrontCollectionStore from "../../storefront/StorefrontCollectionStore.tsx";
import CollectiblesCategoryRecord from "../records/CollectiblesCategoryRecord.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesShopCollection.tsx");

export default function useCollectiblesShopCollection(id) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.includeUnpublished;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.includePricing;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str;
  let collection;
  let fetchState;
  let fetchResolvedAbsent;
  let memo;
  if (id == null) {
    str = "";
  }
  items = [str, flag, flag2, flag(flag2[3]).useStorefrontPricingKey()];
  const effect = str.useEffect(() => {
    if ("" !== str) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      items = [tmp];
      const obj = { includeUnpublished: flag, includePricing: flag2 };
      const collections = CollectiblesShopManager.requestCollections(items, obj);
    }
  }, items);
  let obj2 = flag(flag2[3]);
  const items1 = [collection];
  const items2 = [str];
  const stateFromStoresObject = flag(flag2[5]).useStateFromStoresObject(
    items1,
    () => ({
      collection: StorefrontCollectionStore.getCollection(str),
      fetchState: StorefrontCollectionStore.getFetchState(str),
    }),
    items2,
  );
  collection = stateFromStoresObject.collection;
  fetchState = stateFromStoresObject.fetchState;
  const obj3 = flag(flag2[5]);
  fetchResolvedAbsent = flag(flag2[6]).useFetchResolvedAbsent(str, fetchState);
  const items3 = [collection];
  memo = str.useMemo(() => {
    let result = null;
    if (null != collection) {
      result = CollectiblesCategoryRecord.fromStorefrontCollectionRecord(tmp);
    }
    return result;
  }, items3);
  const items4 = [fetchState, fetchResolvedAbsent, memo];
  const items5 = [str, flag, flag2];
  const memo1 = str.useMemo(() => {
    str = "error";
    if ("error" !== fetchState) {
      str = "error";
      if (!fetchResolvedAbsent) {
        let str2 = "loading";
        if (null != memo) {
          str2 = "ready";
        }
        str = str2;
      }
    }
    return str;
  }, items4);
  const obj4 = flag(flag2[6]);
  return {
    category: memo,
    state: memo1,
    retry: str.useCallback(() => {
      if ("" !== str) {
        const obj2 = {
          collectionIds: null,
          includeUnpublishedCollections: null,
          includeUnpublishedProducts: null,
          includePricing: null,
          ignoreCache: true,
        };
        items = [tmp];
        obj2.collectionIds = items;
        obj2.includeUnpublishedCollections = flag;
        obj2.includeUnpublishedProducts = flag;
        obj2.includePricing = flag2;
        const result = StorefrontCollectionActionCreators.maybeFetchCollectionsWithProducts(obj2, {
          retryAfterError: true,
        });
      }
    }, items5),
  };
}
