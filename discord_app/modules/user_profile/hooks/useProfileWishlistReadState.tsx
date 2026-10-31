// === Module 14995: useProfileWishlistReadState ===

// Module 14995 (useProfileWishlistReadState)
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 7783 */;
import ProfileReadStateActionCreators from "ProfileReadStateActionCreators" /* 14996 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WishlistStore from "WishlistStore" /* 9471 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;

require = fn;
const ProfileReadStateSection = fn(7784).ProfileReadStateSection;
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
  closure_5 = undefined;
  const profileReadStateConfigPeek = ownerId(wishlistId[5]).useProfileReadStateConfigPeek();
  let obj = ownerId(wishlistId[5]);
  let tmp = ownerId;
  const tmp2 = wishlistId;
  const items = [closure_5];
  const items1 = [ownerId];
  const stateFromStores = ownerId(wishlistId[6]).useStateFromStores(items, () => {
    let profileReadStateSectionAckedAt = null;
    if (null != ownerId) {
      profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(tmp, ProfileReadStateSection.WISHLIST);
    }
    return profileReadStateSectionAckedAt;
  }, items1);
  const tmp6 = flag(stateFromStores.useState(undefined), 2);
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
  const obj2 = ownerId(wishlistId[6]);
  const obj3 = stateFromStores;
  const tmp4 = closure_5;
  const items2 = [stateFromStores1, tmp4];
  const items3 = [ownerId, wishlistId, stateFromStores];
  stateFromStores1 = tmp(tmp2[6]).useStateFromStores(items2, () => {
    if (null != ownerId) {
      if (null != wishlistId) {
        if (null != WishlistStore.getWishlist(wishlistId)) {
          if (!WishlistStore.isFetching(wishlistId)) {
            if (null == WishlistStore.getError(wishlistId)) {
              const wishlistSettings = UserProfileStore.getWishlistSettings(tmp, wishlistId);
              let updated_at;
              if (wishlistSettings != null) {
                updated_at = wishlistSettings.updated_at;
              }
              let shouldAckWishlistResult = null == updated_at || WishlistStore.getUpdatedAt(wishlistId) === updated_at;
              if (shouldAckWishlistResult) {
                shouldAckWishlistResult = ProfileReadStateUtils.shouldAckWishlist(wishlistSettings, stateFromStores);
              }
              return shouldAckWishlistResult;
            }
          }
        }
      }
    }
    return false;
  }, items3);
  closure_5 = tmp14;
  const items4 = [flag, undefined !== first, stateFromStores1, ownerId];
  const effect = obj3.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = closure_5;
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