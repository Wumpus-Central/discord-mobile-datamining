// === Module 7107: CollectiblesMarketingsStore ===

// Module 7107 (CollectiblesMarketingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_1;

const FetchState = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let NOT_FETCHED = FetchState.NOT_FETCHED;
const Store = get_initializedDefault.Store;
class CollectiblesMarketingsStore extends Store {
  getMarketingBySurface(MOBILE_SHOP_BUTTON) {
    return closure_1[MOBILE_SHOP_BUTTON];
  }
}
Object.defineProperty(CollectiblesMarketingsStore.prototype, "fetchState", {
  get: function fetchState() {
    return NOT_FETCHED;
  },
  set: undefined
});
CollectiblesMarketingsStore.displayName = "CollectiblesMarketingsStore";
const obj2 = {
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
};
const collectiblesMarketingsStore = new CollectiblesMarketingsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingsStore.tsx");

export default collectiblesMarketingsStore;
export { FetchState };