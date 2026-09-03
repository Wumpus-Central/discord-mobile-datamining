// === Module 7340: getMarketingBySurface ===

// Module 7340 (getMarketingBySurface)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;

let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let closure_1 = {};
let NOT_FETCHED = obj.NOT_FETCHED;
const Store = initializeDefault.Store;
class CollectiblesMarketingsStore extends Store {
}
const prototype = CollectiblesMarketingsStore.prototype;
prototype["getMarketingBySurface"] = function getMarketingBySurface(MOBILE_SHOP_BUTTON) {
  return table[MOBILE_SHOP_BUTTON];
};
Object.defineProperty(prototype, "fetchState", {
  get: function fetchState() {
    return NOT_FETCHED;
  },
  set: undefined
});
CollectiblesMarketingsStore.displayName = "CollectiblesMarketingsStore";
obj = {
  COLLECTIBLES_MARKETING_FETCH: function handleFetchMarketing() {
    const FETCHING = obj.FETCHING;
  },
  COLLECTIBLES_MARKETING_FETCH_SUCCESS: function handleFetchMarketingSuccess(marketings) {
    const marketingsBySurfaces = marketings.marketings.marketingsBySurfaces;
    const FETCHED = obj.FETCHED;
  },
  LOGOUT: function reset() {
    closure_1 = {};
    NOT_FETCHED = obj.NOT_FETCHED;
  }
};
const collectiblesMarketingsStore = new CollectiblesMarketingsStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/collectibles/CollectiblesMarketingsStore.tsx");

export default collectiblesMarketingsStore;
export const FetchState = obj;