// discord_app/modules/wishlists/hooks/useWishlistHooks.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { useEffect } from "noop";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import fetchFingerprint from "fetchFingerprint";
import mergeGuildAvatar from "mergeGuildAvatar";
import get from "get";
import { getWishlistSkuIds } from "fromServer";

const require = arg1;
function getUserWishlistKey(arg0, arg1) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + arg0 + ":" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + ":default";
  }
  return combined;
}
function useFetchWishlist(wishlistId) {
  let importDefault;
  let source;
  wishlistId = wishlistId.wishlistId;
  ({ userId: importDefault, source } = wishlistId);
  if (source === undefined) {
    source = obj.USER_PROFILE;
  }
  let first;
  let React;
  let useEffect;
  let stateFromStores;
  obj = wishlistId(source[7]);
  let items = [get];
  const tmp2 = first(obj.useStateFromStoresArray(items, () => {
    if (null == wishlistId) {
      const items = [null, "success", undefined, undefined];
      let items1 = items;
    } else {
      items1 = [outer1_9.getWishlist(tmp), outer1_9.getStatus(tmp), outer1_9.getError(tmp), outer1_9.getUpdatedAt(tmp)];
    }
    return items1;
  }), 4);
  first = tmp2[0];
  React = tmp5;
  useEffect = tmp6;
  let items1 = [first];
  const memo = React.useMemo(() => {
    if (null == first) {
      let items = [];
    } else {
      items = wishlistId(source[9]).uniq(outer1_10(tmp));
      const obj = wishlistId(source[9]);
    }
    return items;
  }, items1);
  const getOrFetchStorefrontPricesForSkuIds = wishlistId(source[10]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo });
  const obj2 = wishlistId(source[10]);
  const items2 = [stateFromStores];
  stateFromStores = wishlistId(source[7]).useStateFromStores(items2, () => {
    if (null != wishlistId) {
      if (null != closure_1) {
        const wishlistSettings = stateFromStores.getWishlistSettings(tmp2, tmp);
        let updated_at;
        if (wishlistSettings != null) {
          updated_at = wishlistSettings.updated_at;
        }
        return updated_at;
      }
    }
  });
  const items3 = [wishlistId, source, first, stateFromStores, tmp2[3], tmp2[2]];
  useEffect(() => {
    let isFetchingResult = null == wishlistId;
    if (!isFetchingResult) {
      isFetchingResult = outer1_9.isFetching(tmp);
    }
    if (!isFetchingResult) {
      isFetchingResult = null != c4;
    }
    if (!isFetchingResult) {
      let tmp6 = null == first;
      if (!tmp6) {
        let tmp8 = null != stateFromStores;
        if (tmp8) {
          tmp8 = c5 !== tmp7;
        }
        tmp6 = tmp8;
      }
      if (tmp6) {
        const wishlist = outer1_1(source[8]).fetchWishlist(tmp, stateFromStores, source);
        const obj = outer1_1(source[8]);
      }
    }
  }, items3);
  obj = { wishlist: first, isFetching: "fetching" === tmp4, wasFetched: null, error: null };
  let tmp11 = "success" === tmp4;
  if (!tmp11) {
    tmp11 = "error" === tmp4;
  }
  obj[2] = tmp11;
  obj[3] = tmp2[2];
  return obj;
}
let obj = { USER_PROFILE: "user_profile" };
const result = require("createUserWidgetFromServer").fileFinishedImporting("modules/wishlists/hooks/useWishlistHooks.tsx");

export const WISHLIST_IN_DM_LENGTH = 5;
export const WISHLIST_IN_DM_LENGTH_MOBILE = 6;
export const WISHLIST_TOOLTIP_DELAY_MS = 350;
export const WishlistItemSource = { WISHLIST: "wishlist", POPULAR: "popular" };
export const WishlistFetchSource = obj;
export const useFetchWishlists = function useFetchWishlists(wishlistIdsAndUsers) {
  wishlistIdsAndUsers = wishlistIdsAndUsers.wishlistIdsAndUsers;
  let USER_PROFILE = wishlistIdsAndUsers.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = obj.USER_PROFILE;
  }
  let stateFromStoresArray2;
  let memo;
  obj = wishlistIdsAndUsers(stateFromStoresArray2[7]);
  const items = [get];
  const items1 = [wishlistIdsAndUsers];
  const wishlists = obj.useStateFromStoresArray(items, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = wishlist.getWishlist(wishlistId);
    }
    return wishlist;
  }), items1);
  const items2 = [get];
  const items3 = [wishlistIdsAndUsers];
  const isFetching = wishlistIdsAndUsers(stateFromStoresArray2[7]).useStateFromStores(items2, () => wishlistIdsAndUsers.some((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let isFetchingResult = null != wishlistId;
    if (isFetchingResult) {
      isFetchingResult = fetching.isFetching(wishlistId);
    }
    return isFetchingResult;
  }), items3);
  let obj2 = wishlistIdsAndUsers(stateFromStoresArray2[7]);
  const items4 = [get];
  const items5 = [wishlistIdsAndUsers];
  const errors = wishlistIdsAndUsers(stateFromStoresArray2[7]).useStateFromStoresArray(items4, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let error;
    if (null != wishlistId) {
      error = error.getError(wishlistId);
    }
    return error;
  }), items5);
  const obj3 = wishlistIdsAndUsers(stateFromStoresArray2[7]);
  const items6 = [createUserWidgetFromServer];
  stateFromStoresArray2 = wishlistIdsAndUsers(stateFromStoresArray2[7]).useStateFromStoresArray(items6, () => wishlistIdsAndUsers.map((wishlistId) => {
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
  }));
  const items7 = [wishlistIdsAndUsers, stateFromStoresArray2];
  memo = React.useMemo(() => {
    const obj = {};
    const item = obj.forEach((arg0, arg1) => {
      let userId;
      let wishlistId;
      ({ userId, wishlistId } = arg0);
      let tmp = outer1_2;
      if (arg1 < outer1_2.length) {
        if (null != wishlistId) {
          const _HermesInternal2 = HermesInternal;
          let combined = "" + userId + ":" + wishlistId;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "" + userId + ":default";
        }
        tmp = tmp[arg1];
        obj[combined] = tmp;
        const tmp2 = obj;
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
        let obj2 = outer1_9;
        let tmp23 = wishlistId;
        if (!outer1_9.isFetching(tmp3)) {
          let tmp4 = wishlistId;
          if (null == obj2.getError(tmp3)) {
            let tmp5 = wishlistId;
            let wishlist = obj2.getWishlist(tmp3);
            let updatedAt = obj2.getUpdatedAt(tmp3);
            let tmp8 = memo;
            let tmp9 = outer1_12;
            let tmp10 = userId;
            let tmp11 = memo[outer1_12(0, userId, tmp3)];
            let tmp12 = null == wishlist;
            if (!tmp12) {
              let tmp13 = tmp11;
              let tmp14 = null != tmp11;
              if (tmp14) {
                let tmp15 = updatedAt;
                let tmp16 = tmp11;
                tmp14 = updatedAt !== tmp11;
              }
              tmp12 = tmp14;
            }
            if (tmp12) {
              let tmp17 = USER_PROFILE;
              let tmp18 = stateFromStoresArray2;
              let obj = USER_PROFILE(stateFromStoresArray2[8]);
              let tmp19 = wishlistId;
              let tmp20 = tmp11;
              let tmp21 = USER_PROFILE;
              let wishlist1 = obj.fetchWishlist(tmp3, tmp11, USER_PROFILE);
            }
          }
        }
      }
      continue;
    }
  }, items8);
  return { wishlists, isFetching, errors };
};
export { useFetchWishlist };
export const useIsSkuInWishlist = function useIsSkuInWishlist(stateFromStores, skuId) {
  const _require = stateFromStores;
  let closure_1 = skuId;
  const items = [get];
  return _require(589).useStateFromStores(items, () => {
    let hasSkuIdResult = null != closure_0;
    if (hasSkuIdResult) {
      hasSkuIdResult = outer1_9.hasSkuId(tmp, closure_1);
    }
    return hasSkuIdResult;
  });
};
export const useShouldShowWishlistInDMGifting = function useShouldShowWishlistInDMGifting(isGift) {
  isGift = isGift.isGift;
  const giftRecipient = isGift.giftRecipient;
  let flag = isGift.isSocialLayerStorefrontEnabled;
  if (flag === undefined) {
    flag = true;
  }
  let c3;
  let wishlistGiftableItems;
  let obj = wishlistGiftableItems;
  let id;
  if (giftRecipient != null) {
    id = giftRecipient.id;
  }
  const items = [id];
  const effect = wishlistGiftableItems.useEffect(() => {
    let id;
    if (giftRecipient != null) {
      id = tmp.id;
    }
    if (null != id) {
      giftRecipient(flag[11])(tmp.id);
    }
  }, items);
  let id1;
  if (giftRecipient != null) {
    id1 = giftRecipient.id;
  }
  const tmp4Result = giftRecipient(flag[12])({ userId: id1 });
  c3 = tmp4Result;
  const tmp4 = giftRecipient(flag[12]);
  const tmp7 = isGift;
  const items1 = [createUserWidgetFromServer];
  const stateFromStores = isGift(flag[7]).useStateFromStores(items1, () => {
    let id;
    if (giftRecipient != null) {
      id = tmp.id;
    }
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = outer1_6.getFirstWishlistId(tmp.id);
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
  obj = { wishlistId: tmp10, userId: null };
  let id2;
  if (giftRecipient != null) {
    id2 = giftRecipient.id;
  }
  obj[1] = id2;
  const obj2 = isGift(flag[7]);
  const tmp9 = useFetchWishlist;
  wishlistGiftableItems = tmp7(flag[13]).useWishlistGiftableItems(tmp9(obj).wishlist);
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
          tmp6 = _undefined.length > 0;
        }
        tmp5 = tmp6;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items2);
};
export const useCurrentUserWishlist = function useCurrentUserWishlist() {
  let obj = stateFromStores(userProfile[7]);
  const items = [fetchFingerprint];
  stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let stateFromStores1;
  userProfile = undefined;
  const items1 = [mergeGuildAvatar];
  stateFromStores1 = stateFromStores(userProfile[7]).useStateFromStores(items1, () => outer1_8.getUser(stateFromStores));
  const obj2 = stateFromStores(userProfile[7]);
  const items2 = [createUserWidgetFromServer];
  const items3 = [stateFromStores];
  const stateFromStoresObject = stateFromStores(userProfile[7]).useStateFromStoresObject(items2, () => {
    let userProfile = null;
    if (null != stateFromStores) {
      userProfile = outer1_6.getUserProfile(tmp);
    }
    const obj = { userProfile, wishlistId: null };
    let firstWishlistId = null;
    if (null != stateFromStores) {
      firstWishlistId = outer1_6.getFirstWishlistId(tmp);
    }
    obj[1] = firstWishlistId;
    return obj;
  }, items3);
  userProfile = stateFromStoresObject.userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items4 = [stateFromStores1, stateFromStores, userProfile];
  const effect = React.useEffect(() => {
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
      stateFromStores1(userProfile[11])(stateFromStores1.id, stateFromStores1.getAvatarURL(null, 80));
      const tmp7 = stateFromStores1(userProfile[11]);
    }
  }, items4);
  obj = {};
  const merged = Object.assign(useFetchWishlist({ wishlistId, userId: stateFromStores }));
  obj.wishlistId = wishlistId;
  obj.userProfile = userProfile;
  return obj;
};
export const useFetchWishlistAndProfileInfoForUser = function useFetchWishlistAndProfileInfoForUser(recipientUserId) {
  const _require = recipientUserId;
  let obj = _require(userProfile[7]);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getUser(stateFromStores));
  const items1 = [createUserWidgetFromServer];
  const items2 = [recipientUserId];
  const stateFromStoresObject = _require(userProfile[7]).useStateFromStoresObject(items1, () => {
    let userProfile = null;
    if (null != stateFromStores) {
      userProfile = outer1_6.getUserProfile(tmp);
    }
    const obj = { userProfile, wishlistId: null };
    let firstWishlistId = null;
    if (null != stateFromStores) {
      firstWishlistId = outer1_6.getFirstWishlistId(tmp);
    }
    obj[1] = firstWishlistId;
    return obj;
  }, items2);
  userProfile = stateFromStoresObject.userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items3 = [stateFromStores, recipientUserId, userProfile];
  const effect = React.useEffect(() => {
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
      stateFromStores1(userProfile[11])(stateFromStores1.id, stateFromStores1.getAvatarURL(null, 80));
      const tmp7 = stateFromStores1(userProfile[11]);
    }
  }, items3);
  obj = {};
  obj = { wishlistId, userId: recipientUserId };
  const merged = Object.assign(useFetchWishlist(obj));
  obj.wishlistId = wishlistId;
  obj.userProfile = userProfile;
  return obj;
};