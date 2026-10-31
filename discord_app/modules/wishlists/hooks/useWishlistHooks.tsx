// discord_app/modules/wishlists/hooks/useWishlistHooks.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import WishlistActionCreatorsDefault from "../WishlistActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import WishlistStore from "../WishlistStore.tsx";

const require = globalThis.__r;

require = fn;
function getUserWishlistKey(userId, arg1) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + userId + ":" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + userId + ":default";
  }
  return combined;
}
function useFetchWishlist(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  ({ userId: importDefault, source } = wishlistId);
  if (source === undefined) {
    source = wishlistId(source[7]).WishlistFetchSource.USER_PROFILE;
  }
  let wishlist;
  let stateFromStores;
  let items = [WishlistStore];
  const tmp3 = wishlist(
    wishlistId(source[8]).useStateFromStoresArray(items, () => {
      if (null == wishlistId) {
        const items = [null, "success", undefined, undefined];
        let items1 = items;
      } else {
        items1 = [
          WishlistStore.getWishlist(wishlistId),
          WishlistStore.getStatus(wishlistId),
          WishlistStore.getError(wishlistId),
          WishlistStore.getUpdatedAt(wishlistId),
        ];
      }
      return items1;
    }),
    4,
  );
  wishlist = tmp3[0];
  noop = tmp6;
  useEffect = tmp7;
  let items1 = [wishlist];
  const memo = noop.useMemo(() => {
    if (null == first) {
      let items = [];
    } else {
      items = _mod12.uniq(getWishlistSkuIds(tmp));
    }
    return items;
  }, items1);
  let obj = wishlistId(source[8]);
  const getOrFetchStorefrontPricesForSkuIds = wishlistId(source[11]).useGetOrFetchStorefrontPricesForSkuIds({
    skuIds: memo,
  });
  const obj2 = wishlistId(source[11]);
  const items2 = [stateFromStores];
  stateFromStores = wishlistId(source[8]).useStateFromStores(items2, () => {
    if (null != wishlistId) {
      if (null != importDefault) {
        const wishlistSettings = UserProfileStore.getWishlistSettings(tmp2, tmp);
        let updated_at;
        if (wishlistSettings != null) {
          updated_at = wishlistSettings.updated_at;
        }
        return updated_at;
      }
    }
  });
  const items3 = [wishlistId, source, wishlist, stateFromStores, tmp3[3], tmp3[2]];
  useEffect(() => {
    let isFetchingResult = null == wishlistId;
    if (!isFetchingResult) {
      isFetchingResult = WishlistStore.isFetching(wishlistId);
    }
    if (!isFetchingResult) {
      isFetchingResult = null != closure_4;
    }
    if (!isFetchingResult) {
      let tmp6 = null == first;
      if (!tmp6) {
        let tmp8 = null != stateFromStores;
        if (tmp8) {
          tmp8 = closure_5 !== tmp7;
        }
        tmp6 = tmp8;
      }
      if (tmp6) {
        wishlist = WishlistActionCreatorsDefault.fetchWishlist(wishlistId, stateFromStores, source);
      }
    }
  }, items3);
  const obj4 = { wishlist, isFetching: "fetching" === tmp3[1], wasFetched: null, error: null };
  let tmp12 = "success" === tmp5;
  if (!tmp12) {
    tmp12 = "error" === tmp5;
  }
  obj4.wasFetched = tmp12;
  obj4.error = tmp3[2];
  return obj4;
}
let useEffect = fn(19).useEffect;
const getWishlistSkuIds = fn(9472).getWishlistSkuIds;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistHooks.tsx");

export const WISHLIST_IN_DM_LENGTH = 5;
export const WISHLIST_IN_DM_LENGTH_MOBILE = 6;
export const WISHLIST_TOOLTIP_DELAY_MS = 350;
export const WishlistItemSource = { WISHLIST: "wishlist", POPULAR: "popular" };
export function useFetchWishlists(wishlistIdsAndUsers) {
  wishlistIdsAndUsers = wishlistIdsAndUsers.wishlistIdsAndUsers;
  let USER_PROFILE = wishlistIdsAndUsers.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = wishlistIdsAndUsers(stateFromStoresArray2[7]).WishlistFetchSource.USER_PROFILE;
  }
  stateFromStoresArray2 = undefined;
  const items = [WishlistStore];
  const items1 = [wishlistIdsAndUsers];
  const wishlists = wishlistIdsAndUsers(stateFromStoresArray2[8]).useStateFromStoresArray(
    items,
    () =>
      wishlistIdsAndUsers.map((wishlistId) => {
        wishlistId = wishlistId.wishlistId;
        wishlist = null;
        if (null != wishlistId) {
          wishlist = wishlist.getWishlist(wishlistId);
        }
        return wishlist;
      }),
    items1,
  );
  let obj = wishlistIdsAndUsers(stateFromStoresArray2[8]);
  const items2 = [WishlistStore];
  const items3 = [wishlistIdsAndUsers];
  const isFetching = wishlistIdsAndUsers(stateFromStoresArray2[8]).useStateFromStores(
    items2,
    () =>
      wishlistIdsAndUsers.some((wishlistId) => {
        wishlistId = wishlistId.wishlistId;
        let isFetchingResult = null != wishlistId;
        if (isFetchingResult) {
          isFetchingResult = fetching.isFetching(wishlistId);
        }
        return isFetchingResult;
      }),
    items3,
  );
  const obj2 = wishlistIdsAndUsers(stateFromStoresArray2[8]);
  const items4 = [WishlistStore];
  const items5 = [wishlistIdsAndUsers];
  const errors = wishlistIdsAndUsers(stateFromStoresArray2[8]).useStateFromStoresArray(
    items4,
    () =>
      wishlistIdsAndUsers.map((wishlistId) => {
        wishlistId = wishlistId.wishlistId;
        error = undefined;
        if (null != wishlistId) {
          error = error.getError(wishlistId);
        }
        return error;
      }),
    items5,
  );
  const obj3 = wishlistIdsAndUsers(stateFromStoresArray2[8]);
  const items6 = [UserProfileStore];
  stateFromStoresArray2 = wishlistIdsAndUsers(stateFromStoresArray2[8]).useStateFromStoresArray(items6, () =>
    wishlistIdsAndUsers.map((wishlistId) => {
      wishlistId = wishlistId.wishlistId;
      let tmp2;
      if (null != wishlistId) {
        wishlistSettings = wishlistSettings.getWishlistSettings(tmp, wishlistId);
        let updated_at;
        if (wishlistSettings != null) {
          updated_at = wishlistSettings.updated_at;
        }
        tmp2 = updated_at;
      }
      return tmp2;
    }),
  );
  const items7 = [wishlistIdsAndUsers, stateFromStoresArray2];
  const memo = noop.useMemo(() => {
    const obj = {};
    const item = obj.forEach((item, index) => {
      ({ userId, wishlistId } = item);
      let tmp = stateFromStoresArray2;
      if (index < stateFromStoresArray2.length) {
        if (null != wishlistId) {
          const _HermesInternal2 = HermesInternal;
          let combined = "" + userId + ":" + wishlistId;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "" + userId + ":default";
        }
        tmp = tmp[index];
        obj[combined] = tmp;
      }
    });
    return obj;
  }, items7);
  const items8 = [wishlistIdsAndUsers, USER_PROFILE, memo];
  useEffect(() => {
    const iter = wishlistIdsAndUsers[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let wishlistId = nextResult.wishlistId;
      let tmp3 = wishlistId;
      let userId = nextResult.userId;
      if (null != wishlistId) {
        if (!WishlistStore.isFetching(tmp3)) {
          if (null == WishlistStore.getError(tmp3)) {
            let wishlist = WishlistStore.getWishlist(tmp3);
            let updatedAt = WishlistStore.getUpdatedAt(tmp3);
            let tmp11 = memo[getUserWishlistKey(0, userId, tmp3)];
            let tmp12 = null == wishlist;
            if (!tmp12) {
              let tmp14 = null != tmp11;
              if (tmp14) {
                tmp14 = updatedAt !== tmp11;
              }
              tmp12 = tmp14;
            }
            if (tmp12) {
              let obj = WishlistActionCreatorsDefault;
              let wishlist1 = obj.fetchWishlist(tmp3, tmp11, USER_PROFILE);
            }
          }
        }
      }
      continue;
    }
  }, items8);
  return { wishlists, isFetching, errors };
}
export { useFetchWishlist };
export function useIsSkuInWishlist(stateFromStores, skuId) {
  _require = stateFromStores;
  closure_1 = skuId;
  const items = [WishlistStore];
  return require("initialize").useStateFromStores(items, () => {
    let hasSkuIdResult = null != closure_0;
    if (hasSkuIdResult) {
      hasSkuIdResult = WishlistStore.hasSkuId(tmp, closure_1);
    }
    return hasSkuIdResult;
  });
}
export function useShouldShowWishlistInDMGifting(isGift) {
  isGift = isGift.isGift;
  const giftRecipient = isGift.giftRecipient;
  let flag = isGift.isSocialLayerStorefrontEnabled;
  if (flag === undefined) {
    flag = true;
  }
  let wishlistGiftableItems;
  let id;
  if (giftRecipient != null) {
    id = giftRecipient.id;
  }
  const items = [id];
  const effect = wishlistGiftableItems.useEffect(() => {
    let id;
    if (giftRecipient != null) {
      id = giftRecipient.id;
    }
    if (null != id) {
      maybeFetchUserProfileDefault(giftRecipient.id);
    }
  }, items);
  let id1;
  if (giftRecipient != null) {
    id1 = giftRecipient.id;
  }
  const tmp4Result = giftRecipient(flag[13])({ userId: id1 });
  const obj = wishlistGiftableItems;
  const tmp4 = giftRecipient(flag[13]);
  const tmp7 = isGift;
  const items1 = [UserProfileStore];
  const stateFromStores = isGift(flag[8]).useStateFromStores(items1, () => {
    let id;
    if (giftRecipient != null) {
      id = giftRecipient.id;
    }
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(giftRecipient.id);
    }
    return firstWishlistId;
  });
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (isGift) {
      tmp10 = null;
      if (null != giftRecipient) {
        tmp10 = stateFromStores;
      }
    }
  }
  const obj3 = { wishlistId: tmp10, userId: null };
  let id2;
  if (giftRecipient != null) {
    id2 = giftRecipient.id;
  }
  obj3.userId = id2;
  const obj2 = isGift(flag[8]);
  wishlistGiftableItems = tmp7(flag[14]).useWishlistGiftableItems(useFetchWishlist(obj3).wishlist);
  const items2 = [isGift, giftRecipient, wishlistGiftableItems, tmp4Result, flag];
  return obj.useMemo(() => {
    let tmp = true === isGift;
    if (tmp) {
      tmp = null != giftRecipient;
    }
    if (tmp) {
      let tmp5 = wishlistGiftableItems.length > 0;
      if (!tmp5) {
        let tmp6 = flag;
        if (flag) {
          tmp6 = length.length > 0;
        }
        tmp5 = tmp6;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items2);
}
export function useCurrentUserWishlist() {
  const items = [AuthenticationStore];
  stateFromStores = stateFromStores(userProfile[8]).useStateFromStores(items, () => id.getId());
  userProfile = undefined;
  let obj = stateFromStores(userProfile[8]);
  const items1 = [UserStore];
  const stateFromStores1 = stateFromStores(userProfile[8]).useStateFromStores(items1, () =>
    UserStore.getUser(stateFromStores),
  );
  const obj2 = stateFromStores(userProfile[8]);
  const items2 = [UserProfileStore];
  const items3 = [stateFromStores];
  const stateFromStoresObject = stateFromStores(userProfile[8]).useStateFromStoresObject(
    items2,
    () => {
      userProfile = null;
      if (null != stateFromStores) {
        userProfile = UserProfileStore.getUserProfile(stateFromStores);
      }
      const obj = { userProfile, wishlistId: null };
      let firstWishlistId = null;
      if (null != stateFromStores) {
        firstWishlistId = UserProfileStore.getFirstWishlistId(stateFromStores);
      }
      obj.wishlistId = firstWishlistId;
      return obj;
    },
    items3,
  );
  userProfile = stateFromStoresObject.userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items4 = [stateFromStores1, stateFromStores, userProfile];
  const effect = noop.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null == userProfile;
    }
    if (tmp) {
      tmp = null != stateFromStores1;
    }
    if (tmp) {
      tmp = null == userProfile;
    }
    if (tmp) {
      maybeFetchUserProfileDefault(stateFromStores1.id, stateFromStores1.getAvatarURL(null, 80));
    }
  }, items4);
  const obj4 = {};
  const merged = Object.assign(useFetchWishlist({ wishlistId, userId: stateFromStores }));
  obj4.wishlistId = wishlistId;
  obj4.userProfile = userProfile;
  return obj4;
}
export function useFetchWishlistAndProfileInfoForUser(recipientUserId) {
  _require = recipientUserId;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(stateFromStores));
  const obj = require("initialize");
  const items1 = [UserProfileStore];
  const items2 = [recipientUserId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items1,
    () => {
      userProfile = null;
      if (null != stateFromStores) {
        userProfile = UserProfileStore.getUserProfile(stateFromStores);
      }
      const obj = { userProfile, wishlistId: null };
      let firstWishlistId = null;
      if (null != stateFromStores) {
        firstWishlistId = UserProfileStore.getFirstWishlistId(stateFromStores);
      }
      obj.wishlistId = firstWishlistId;
      return obj;
    },
    items2,
  );
  userProfile = stateFromStoresObject.userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items3 = [stateFromStores, recipientUserId, userProfile];
  const effect = noop.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null == userProfile;
    }
    if (tmp) {
      tmp = null != stateFromStores1;
    }
    if (tmp) {
      tmp = null == userProfile;
    }
    if (tmp) {
      maybeFetchUserProfileDefault(stateFromStores1.id, stateFromStores1.getAvatarURL(null, 80));
    }
  }, items3);
  const obj3 = {};
  const merged = Object.assign(useFetchWishlist({ wishlistId, userId: recipientUserId }));
  obj3.wishlistId = wishlistId;
  obj3.userProfile = userProfile;
  return obj3;
}
