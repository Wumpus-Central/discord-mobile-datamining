// === Module 7219: AdUserStore ===

// Module 7219 (AdUserStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0;

let c1 = false;
let c2 = false;
let c3 = null;
let closure_4 = null;
const Store = get_initializedDefault.Store;
class AdUserStore extends Store {
  setFetchPromise(arg0) {
    c3 = arg0;
  }
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
    return closure_4;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchedRecently", {
  get: function hasFetchedRecently() {
    let tmp = null != closure_4;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() - closure_4 < 21600000;
    }
    return tmp;
  },
  set: undefined
});
AdUserStore.displayName = "AdUserStore";
const obj = {
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
};
const adUserStore = new AdUserStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/ads/native/AdUserStore.tsx");

export default adUserStore;