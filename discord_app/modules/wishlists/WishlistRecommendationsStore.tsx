// === Module 10490: handleUserSettingsStoreUpdate ===

// Module 10490 (handleUserSettingsStoreUpdate)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "_getSystemLocale" /* 1996 */;

function handleUserSettingsStoreUpdate() {
  if (locale === closure_0.locale) {
    return false;
  } else {
    closure_2 = {};
    locale = tmp.locale;
  }
}
let closure_2 = {};
const Store = initializeDefault.Store;
class WishlistRecommendationsStore extends Store {
}
const prototype = WishlistRecommendationsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
  const items = [closure_0];
  this.syncWith(items, handleUserSettingsStoreUpdate);
  const locale = closure_0.locale;
};
prototype["getRecommendations"] = function getRecommendations(applicationIds, memo3) {
  if (0 !== applicationIds.length) {
    if (0 !== memo3.length) {
      if (0 === applicationIds.length) {
        const _Error = Error;
        error = new Error("No user IDs provided");
        throw error;
      } else {
        const items = [];
        HermesBuiltin.arraySpread(memo3, HermesBuiltin.arraySpread(applicationIds, 0));
        return tmp2[items.join(items, ",")];
      }
    }
  }
};
const wishlistRecommendationsStore = new WishlistRecommendationsStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    closure_2 = {};
  },
  WISHLIST_RECOMMENDATIONS_FETCH_START: function handleFetchStart(arg0) {
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(applicationIds, HermesBuiltin.arraySpread(userIds, 0));
          const obj = {};
          const joined = items.join(",");
          const merged = Object.assign(obj);
          obj[joined] = { state: "loading" };
        }
      }
    }
    return false;
  },
  WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(applicationIds, HermesBuiltin.arraySpread(userIds, 0));
          let obj = {};
          const joined = items.join(",");
          const merged = Object.assign(obj);
          obj = { state: "success", data: null, fetchedAt: null };
          obj[1] = tmp;
          const _Date = Date;
          obj[2] = Date.now();
          obj[joined] = obj;
        }
      }
    }
    return false;
  },
  WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function handleFetchFailure(arg0) {
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(applicationIds, HermesBuiltin.arraySpread(userIds, 0));
          const joined = items.join(",");
          let state;
          if (obj[joined] != null) {
            state = tmp18.state;
          }
          if ("success" === state) {
            return false;
          } else {
            obj = {};
            const merged = Object.assign(obj);
            obj = { state: "error", fetchedAt: null };
            const _Date = Date;
            obj[1] = Date.now();
            obj[joined] = obj;
          }
        }
      }
    }
    return false;
  }
});
const result = require("set").fileFinishedImporting("modules/wishlists/WishlistRecommendationsStore.tsx");

export default wishlistRecommendationsStore;