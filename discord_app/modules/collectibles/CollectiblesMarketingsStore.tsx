// discord_app/modules/collectibles/CollectiblesMarketingsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

const FetchState = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
const obj2 = { marketingsBySurfaces: null, fetchedAt: null };
let closure_2 = {};
let NOT_FETCHED = FetchState.NOT_FETCHED;
let closure_4 = obj2;
const PersistedStore = initializeDefault.PersistedStore;
class CollectiblesMarketingsStore extends PersistedStore {}
const prototype = CollectiblesMarketingsStore.prototype;
prototype["initialize"] = function initialize(marketingsBySurfaces) {
  marketingsBySurfaces = undefined;
  if (marketingsBySurfaces != null) {
    marketingsBySurfaces = marketingsBySurfaces.marketingsBySurfaces;
  }
  if (marketingsBySurfaces == null) {
    marketingsBySurfaces = null;
  }
  const obj = { marketingsBySurfaces, fetchedAt: null };
  let fetchedAt;
  if (marketingsBySurfaces != null) {
    fetchedAt = marketingsBySurfaces.fetchedAt;
  }
  if (fetchedAt == null) {
    fetchedAt = null;
  }
  obj.fetchedAt = fetchedAt;
  closure_4 = obj;
};
prototype["getState"] = function getState() {
  return closure_4;
};
prototype["getMarketingBySurface"] = function getMarketingBySurface(MOBILE_SHOP_BUTTON) {
  return closure_2[MOBILE_SHOP_BUTTON];
};
Object.defineProperty(prototype, "fetchState", {
  get: function fetchState() {
    return NOT_FETCHED;
  },
  set: undefined,
});
prototype["getCachedMarketingsBySurfaces"] = function getCachedMarketingsBySurfaces(ttlMs) {
  ({ marketingsBySurfaces, fetchedAt } = closure_4);
  if (null != marketingsBySurfaces) {
    if (null != fetchedAt) {
      const _Date = Date;
      const diff = Date.now() - fetchedAt;
      let tmp3 = null;
      if (diff >= 0) {
        tmp3 = null;
        if (diff < ttlMs) {
          tmp3 = marketingsBySurfaces;
        }
      }
      return tmp3;
    }
  }
  return null;
};
CollectiblesMarketingsStore.displayName = "CollectiblesMarketingsStore";
CollectiblesMarketingsStore.persistKey = "CollectiblesMarketingsStore";
const collectiblesMarketingsStore = new CollectiblesMarketingsStore(DispatcherDefault, {
  COLLECTIBLES_MARKETING_FETCH: function handleFetchMarketing() {
    NOT_FETCHED = obj.FETCHING;
  },
  COLLECTIBLES_MARKETING_FETCH_SUCCESS: function handleFetchMarketingSuccess(marketings) {
    const marketingsBySurfaces = marketings.marketings.marketingsBySurfaces;
    NOT_FETCHED = obj.FETCHED;
    obj = { marketingsBySurfaces: marketings.marketings.marketingsBySurfaces, fetchedAt: Date.now() };
    closure_4 = obj;
  },
  COLLECTIBLES_MARKETING_CACHE_RESTORED: function handleCacheRestored(marketings) {
    const marketingsBySurfaces = marketings.marketings.marketingsBySurfaces;
    NOT_FETCHED = obj.FETCHED;
  },
  LOGOUT: function reset() {
    closure_2 = {};
    NOT_FETCHED = obj.NOT_FETCHED;
    closure_4 = obj2;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingsStore.tsx");

export default collectiblesMarketingsStore;
export { FetchState };
