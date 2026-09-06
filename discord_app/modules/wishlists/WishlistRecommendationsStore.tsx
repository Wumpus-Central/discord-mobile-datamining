// discord_app/modules/wishlists/WishlistRecommendationsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";

function handleUserSettingsStoreUpdate() {
  if (locale === LocaleStore.locale) {
    return false;
  } else {
    locale = tmp.locale;
  }
}
let obj = {};
const Store = initializeDefault.Store;
class WishlistRecommendationsStore extends Store {}
const prototype = WishlistRecommendationsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(LocaleStore);
  const items = [LocaleStore];
  this.syncWith(items, handleUserSettingsStoreUpdate);
  locale = LocaleStore.locale;
};
prototype["getRecommendations"] = function getRecommendations(userIdsAndWishlistIds, memo3) {
  if (0 !== userIdsAndWishlistIds.length) {
    if (0 !== memo3.length) {
      if (0 === userIdsAndWishlistIds.length) {
        const _Error = Error;
        const error = new Error("No user IDs provided");
        throw error;
      } else {
        const items = [];
        HermesBuiltin.arraySpread(memo3, HermesBuiltin.arraySpread(userIdsAndWishlistIds, 0));
        return tmp2[items.join(items, ",")];
      }
    }
  }
};
obj = {
  LOGOUT: function handleLogout() {},
  WISHLIST_RECOMMENDATIONS_FETCH_START: function handleFetchStart(arg0) {
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
          obj = {};
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
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(applicationIds, HermesBuiltin.arraySpread(userIds, 0));
          obj = {};
          const joined = items.join(",");
          const merged = Object.assign(obj);
          obj = { state: "success", data: tmp, fetchedAt: null };
          const _Date = Date;
          obj.fetchedAt = Date.now();
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
            obj.fetchedAt = Date.now();
            obj[joined] = obj;
          }
        }
      }
    }
    return false;
  },
};
const wishlistRecommendationsStore = new WishlistRecommendationsStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/WishlistRecommendationsStore.tsx");

export default wishlistRecommendationsStore;
