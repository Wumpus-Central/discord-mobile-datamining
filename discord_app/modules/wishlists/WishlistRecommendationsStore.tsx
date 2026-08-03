// === Module 9764: handleUserSettingsStoreUpdate ===

// Module 9764 (handleUserSettingsStoreUpdate)
import _getSystemLocale from "_getSystemLocale";
import { Store } from "initialize";

function handleUserSettingsStoreUpdate() {
  if (locale === _getSystemLocale.locale) {
    return false;
  } else {
    let closure_2 = {};
    locale = tmp.locale;
  }
}
let closure_2 = {};
class WishlistRecommendationsStore extends Store {
}
const prototype = WishlistRecommendationsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(_getSystemLocale);
  const items = [_getSystemLocale];
  this.syncWith(items, handleUserSettingsStoreUpdate);
  const locale = _getSystemLocale.locale;
};
prototype["getRecommendations"] = function getRecommendations(memo, memo3) {
  if (0 !== memo.length) {
    if (0 !== memo3.length) {
      if (0 === memo.length) {
        const _Error = Error;
        const error = new Error("No user IDs provided");
        throw error;
      } else {
        const items = [];
        HermesBuiltin.arraySpread(memo3, HermesBuiltin.arraySpread(memo, 0));
        return tmp2[items.join(items, ",")];
      }
    }
  }
};
const wishlistRecommendationsStore = new WishlistRecommendationsStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let closure_2 = {};
  },
  WISHLIST_RECOMMENDATIONS_FETCH_START: function handleFetchStart(arg0) {
    let applicationIds;
    let userIds;
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const error = new Error("No user IDs provided");
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
    let applicationIds;
    let userIds;
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const error = new Error("No user IDs provided");
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
    let applicationIds;
    let userIds;
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const error = new Error("No user IDs provided");
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
const result = require("dispatcher").fileFinishedImporting("modules/wishlists/WishlistRecommendationsStore.tsx");

export default wishlistRecommendationsStore;