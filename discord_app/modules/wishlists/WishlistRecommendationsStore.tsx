// discord_app/modules/wishlists/WishlistRecommendationsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let locale;

function handleUserSettingsStoreUpdate() {
  if (locale === LocaleStore.locale) {
    return false;
  } else {
    locale = tmp.locale;
  }
}
let obj = {};
const Store = get_initializedDefault.Store;
class WishlistRecommendationsStore extends Store {
  initialize() {
    this.waitFor(LocaleStore);
    const items = [LocaleStore];
    this.syncWith(items, handleUserSettingsStoreUpdate);
    locale = LocaleStore.locale;
  }
  getRecommendations(arg0, arg1) {
    if (0 !== arg0.length) {
      if (0 !== arg1.length) {
        if (0 === arg0.length) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(items, arg1, HermesBuiltin.arraySpread(items, arg0, 0));
          return tmp3[items.join(items, ",")];
        }
      }
    }
  }
}
const prototype = WishlistRecommendationsStore.prototype;
obj = {
  LOGOUT: function handleLogout() {},
  WISHLIST_RECOMMENDATIONS_FETCH_START: function handleFetchStart(arg0) {
    let applicationIds;
    let userIds;
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(items, applicationIds, HermesBuiltin.arraySpread(items, userIds, 0));
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
    let applicationIds;
    let userIds;
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(items, applicationIds, HermesBuiltin.arraySpread(items, userIds, 0));
          obj = {};
          const joined = items.join(",");
          const merged = Object.assign(obj);
          const _Date = Date;
          obj[joined] = { state: "success", data: tmp2, fetchedAt: Date.now() };
          const obj2 = { state: "success", data: tmp2, fetchedAt: Date.now() };
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
          const self = this;
          const self2 = this;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(items, applicationIds, HermesBuiltin.arraySpread(items, userIds, 0));
          const joined = items.join(",");
          let state;
          if (obj[joined] != null) {
            state = tmp17.state;
          }
          if ("success" === state) {
            return false;
          } else {
            obj = {};
            const merged = Object.assign(obj);
            const _Date = Date;
            obj[joined] = { state: "error", fetchedAt: Date.now() };
            const obj2 = { state: "error", fetchedAt: Date.now() };
          }
        }
      }
    }
    return false;
  },
};
const wishlistRecommendationsStore = new WishlistRecommendationsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/wishlists/WishlistRecommendationsStore.tsx");

export default wishlistRecommendationsStore;
