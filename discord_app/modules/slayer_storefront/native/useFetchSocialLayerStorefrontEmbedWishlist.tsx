// discord_app/modules/slayer_storefront/native/useFetchSocialLayerStorefrontEmbedWishlist.tsx
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import WishlistFetchSource from "../../wishlists/WishlistFetchSource.tsx";
import WishlistActionCreatorsDefault from "../../wishlists/WishlistActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_8 = {
  user: "a",
  profile: "flexDirection",
  wishlistId: "count",
  wishlist: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
  updatedAt: null,
  storedUpdatedAt: null,
  fetching: -45,
  error: null,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/useFetchSocialLayerStorefrontEmbedWishlist.tsx",
);

export function useFetchSocialLayerStorefrontEmbedWishlist(arg0) {
  _require = arg0;
  items = [AuthenticationStore, UserStore, UserProfileStore, WishlistStore];
  const items1 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => {
      if (closure_0) {
        const id = AuthenticationStore.getId();
        let firstWishlistId = null;
        if (null != id) {
          firstWishlistId = UserProfileStore.getFirstWishlistId(id);
        }
        const obj = {
          user: UserStore.getUser(id),
          profile: null,
          wishlistId: null,
          wishlist: null,
          updatedAt: null,
          storedUpdatedAt: null,
          fetching: null,
          error: null,
        };
        let userProfile = null;
        if (null != id) {
          userProfile = UserProfileStore.getUserProfile(id);
        }
        obj.profile = userProfile;
        obj.wishlistId = firstWishlistId;
        let wishlist = null;
        if (null != firstWishlistId) {
          wishlist = WishlistStore.getWishlist(firstWishlistId);
        }
        obj.wishlist = wishlist;
        let tmp12;
        if (null != id) {
          if (null != firstWishlistId) {
            const wishlistSettings = UserProfileStore.getWishlistSettings(id, firstWishlistId);
            let updated_at;
            if (wishlistSettings != null) {
              updated_at = wishlistSettings.updated_at;
            }
            tmp12 = updated_at;
          }
        }
        obj.updatedAt = tmp12;
        let updatedAt;
        if (null != firstWishlistId) {
          updatedAt = WishlistStore.getUpdatedAt(firstWishlistId);
        }
        obj.storedUpdatedAt = updatedAt;
        let isFetchingResult = null != firstWishlistId;
        if (isFetchingResult) {
          isFetchingResult = WishlistStore.isFetching(firstWishlistId);
        }
        obj.fetching = isFetchingResult;
        let error;
        if (null != firstWishlistId) {
          error = WishlistStore.getError(firstWishlistId);
        }
        obj.error = error;
        return obj;
      } else {
        return closure_8;
      }
    },
    items1,
  );
  const items2 = [arg0, ,];
  ({ user: arr3[1], profile: arr3[2] } = stateFromStoresObject);
  const effect = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = null != stateFromStoresObject.user;
    }
    if (tmp) {
      tmp = null == stateFromStoresObject.profile;
    }
    if (tmp) {
      const user = stateFromStoresObject.user;
      maybeFetchUserProfileDefault(stateFromStoresObject.user.id, user.getAvatarURL(null, 80));
    }
  }, items2);
  const items3 = [arg0, stateFromStoresObject];
  const effect1 = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = null != stateFromStoresObject.wishlistId;
    }
    if (tmp) {
      tmp = !stateFromStoresObject.fetching;
    }
    if (tmp) {
      tmp = null == stateFromStoresObject.error;
    }
    if (tmp) {
      let tmp9 = null == stateFromStoresObject.wishlist;
      if (!tmp9) {
        tmp9 =
          null != stateFromStoresObject.updatedAt &&
          stateFromStoresObject.storedUpdatedAt !== stateFromStoresObject.updatedAt;
        const tmp10 =
          null != stateFromStoresObject.updatedAt &&
          stateFromStoresObject.storedUpdatedAt !== stateFromStoresObject.updatedAt;
      }
      tmp = tmp9;
    }
    if (tmp) {
      ({ wishlistId, updatedAt } = stateFromStoresObject);
      const wishlist = WishlistActionCreatorsDefault.fetchWishlist(
        wishlistId,
        updatedAt,
        WishlistFetchSource.WishlistFetchSource.USER_PROFILE,
      );
    }
  }, items3);
}
