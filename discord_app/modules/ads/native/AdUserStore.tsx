// === Module 7482: adUser ===

// Module 7482 (adUser)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c1 = false;
let c2 = false;
let c3 = null;
let c4 = null;
const Store = initializeDefault.Store;
class AdUserStore extends Store {
}
const prototype = AdUserStore.prototype;
Object.defineProperty(prototype, "adUser", {
  get: function adUser() {
    return closure_0;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetching", {
  get: function isFetching() {
    return c1;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchFailed", {
  get: function hasFetchFailed() {
    return c2;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchPromise", {
  get: function fetchPromise() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedAt", {
  get: function lastFetchedAt() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchedRecently", {
  get: function hasFetchedRecently() {
    let tmp = null != c4;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() - c4 < 21600000;
    }
    return tmp;
  },
  set: undefined
});
prototype["setFetchPromise"] = function setFetchPromise(arg0) {
  closure_3 = arg0;
};
AdUserStore.displayName = "AdUserStore";
const adUserStore = new AdUserStore(dispatcherDefault, {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {

  },
  FETCH_AD_USER_START: function handleFetchAdUserStart() {
    c1 = true;
    closure_4 = Date.now();
  },
  FETCH_AD_USER_SUCCESS: function handleFetchAdUserSuccess(advertisingId) {
    c1 = false;
    c3 = null;
    closure_0 = { advertisingId: advertisingId.advertisingId, isLimitAdTrackingEnabled: advertisingId.isLimitAdTrackingEnabled };
    c2 = false;
  },
  FETCH_AD_USER_FAILURE: function handleFetchAdUserFailure() {
    c1 = false;
    c2 = true;
    c3 = null;
  }
});
const result = require("set").fileFinishedImporting("modules/ads/native/AdUserStore.tsx");

export default adUserStore;