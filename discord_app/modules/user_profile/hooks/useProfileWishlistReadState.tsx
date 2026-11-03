// === Module 15135: useProfileWishlistReadState ===

// Module 15135 (useProfileWishlistReadState)
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 7907 */;
import ProfileReadStateActionCreators from "ProfileReadStateActionCreators" /* 15136 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WishlistStore from "WishlistStore" /* 9599 */;
import UserProfileStore from "UserProfileStore" /* 7896 */;

require = fn;
const ProfileReadStateSection = fn(7908).ProfileReadStateSection;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileWishlistReadState.tsx");

export default function useProfileWishlistReadState(ownerId) {
  ownerId = ownerId.ownerId;
  const wishlistId = ownerId.wishlistId;
  let flag = ownerId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores1;
  closure_4 = undefined;
  const profileReadStateConfigPeek = ownerId(wishlistId[5]).useProfileReadStateConfigPeek();
  let obj = ownerId(wishlistId[5]);
  let tmp = ownerId;
  const tmp2 = wishlistId;
  items = [UserProfileStore];
  const items1 = [ownerId];
  const stateFromStores = ownerId(wishlistId[6]).useStateFromStores(items, () => {
    let profileReadStateSectionAckedAt = null;
    if (null != ownerId) {
      profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(tmp, ProfileReadStateSection.WISHLIST);
    }
    return profileReadStateSectionAckedAt;
  }, items1);
  const tmp6 = flag(stateFromStores1.useState(undefined), 2);
  const first = tmp6[0];
  let tmp8 = flag;
  if (flag) {
    tmp8 = null != ownerId;
  }
  if (tmp8) {
    tmp8 = null != profileReadStateConfigPeek;
  }
  if (tmp8) {
    tmp8 = undefined === first;
  }
  if (tmp8) {
    let tmp11 = null;
    if (profileReadStateConfigPeek.enabled) {
      tmp11 = stateFromStores;
    }
    tmp6[1](tmp11);
  }
  let obj2 = ownerId(wishlistId[6]);
  const obj3 = stateFromStores1;
  const items2 = [closure_4, UserProfileStore];
  const items3 = [ownerId, wishlistId];
  stateFromStores1 = tmp(tmp2[6]).useStateFromStores(items2, () => {
    if (null != ownerId) {
      if (null != wishlistId) {
        if (null != WishlistStore.getWishlist(wishlistId)) {
          if (!WishlistStore.isFetching(wishlistId)) {
            if (null == WishlistStore.getError(wishlistId)) {
              const wishlistSettings = UserProfileStore.getWishlistSettings(ownerId, wishlistId);
              let updated_at;
              if (wishlistSettings != null) {
                updated_at = wishlistSettings.updated_at;
              }
              let shouldAckWishlistResult = null == updated_at || WishlistStore.getUpdatedAt(wishlistId) === updated_at;
              if (shouldAckWishlistResult) {
                shouldAckWishlistResult = ProfileReadStateUtils.shouldAckWishlist(wishlistSettings, UserProfileStore.getProfileReadState(ownerId));
              }
              return shouldAckWishlistResult;
            }
          }
        }
      }
    }
    return false;
  }, items3);
  closure_4 = tmp14;
  const items4 = [flag, undefined !== first, stateFromStores1, ownerId];
  const effect = obj3.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = closure_4;
    }
    if (tmp) {
      tmp = stateFromStores1;
    }
    if (tmp) {
      tmp = null != ownerId;
    }
    if (tmp) {
      ProfileReadStateActionCreators.ackProfileWishlist(ownerId);
    }
  }, items4);
  return first;
};