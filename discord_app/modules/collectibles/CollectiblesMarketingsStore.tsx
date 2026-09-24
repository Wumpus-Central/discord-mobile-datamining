// === Module 7914: CollectiblesMarketingsStore ===

// Module 7914 (CollectiblesMarketingsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const FetchState = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let closure_1 = {};
let NOT_FETCHED = FetchState.NOT_FETCHED;
const Store = initializeDefault.Store;
class CollectiblesMarketingsStore extends Store {
}
const prototype = CollectiblesMarketingsStore.prototype;
prototype["getMarketingBySurface"] = function getMarketingBySurface(MOBILE_SHOP_BUTTON) {
  return closure_1[MOBILE_SHOP_BUTTON];
};
Object.defineProperty(prototype, "fetchState", {
  get: function fetchState() {
    return NOT_FETCHED;
  },
  set: undefined
});
CollectiblesMarketingsStore.displayName = "CollectiblesMarketingsStore";
const collectiblesMarketingsStore = new CollectiblesMarketingsStore(DispatcherDefault, {
  COLLECTIBLES_MARKETING_FETCH: function handleFetchMarketing() {
    NOT_FETCHED = obj.FETCHING;
  },
  COLLECTIBLES_MARKETING_FETCH_SUCCESS: function handleFetchMarketingSuccess(marketings) {
    const marketingsBySurfaces = marketings.marketings.marketingsBySurfaces;
    NOT_FETCHED = obj.FETCHED;
  },
  LOGOUT: function reset() {
    closure_1 = {};
    NOT_FETCHED = obj.NOT_FETCHED;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingsStore.tsx");

export default collectiblesMarketingsStore;
export { FetchState };