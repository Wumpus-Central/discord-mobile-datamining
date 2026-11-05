// discord_app/modules/user_profile/hooks/useProfileWishlistReadState.tsx
import ProfileReadStateUtils from "../ProfileReadStateUtils.tsx";
import ProfileReadStateSection from "../../../../discord_common/js/shared/shared-constants/ProfileReadStateSection.tsx";
import ProfileReadStateActionCreators from "../ProfileReadStateActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

require = fn;
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
  const profileReadStateConfigPeek = ownerId(wishlistId[4]).useProfileReadStateConfigPeek();
  let obj = ownerId(wishlistId[4]);
  let tmp = ownerId;
  const tmp2 = wishlistId;
  items = [UserProfileStore];
  const items1 = [ownerId];
  const stateFromStores = ownerId(wishlistId[5]).useStateFromStores(
    items,
    () => {
      let profileReadStateSectionAckedAt = null;
      if (null != ownerId) {
        profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(
          tmp,
          ProfileReadStateSection.ProfileReadStateSection.WISHLIST,
        );
      }
      return profileReadStateSectionAckedAt;
    },
    items1,
  );
  let obj2 = ownerId(wishlistId[5]);
  const obj3 = stateFromStores1;
  [tmp7, tmp8] = flag(stateFromStores1.useState(undefined), 2);
  let tmp9 = flag;
  if (!flag) {
    tmp9 = undefined === tmp7;
  }
  if (!tmp9) {
    tmp8(undefined);
  }
  let tmp11 = flag;
  if (flag) {
    tmp11 = null != ownerId;
  }
  if (tmp11) {
    tmp11 = null != profileReadStateConfigPeek;
  }
  if (tmp11) {
    tmp11 = undefined === tmp7;
  }
  if (tmp11) {
    let tmp14 = null;
    if (profileReadStateConfigPeek.enabled) {
      tmp14 = stateFromStores;
    }
    tmp8(tmp14);
  }
  const tmp6 = flag(stateFromStores1.useState(undefined), 2);
  const items2 = [closure_4, UserProfileStore];
  const items3 = [ownerId, wishlistId];
  stateFromStores1 = tmp(tmp2[5]).useStateFromStores(
    items2,
    () => {
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
                let shouldAckWishlistResult =
                  null == updated_at || WishlistStore.getUpdatedAt(wishlistId) === updated_at;
                if (shouldAckWishlistResult) {
                  shouldAckWishlistResult = ProfileReadStateUtils.shouldAckWishlist(
                    wishlistSettings,
                    UserProfileStore.getProfileReadState(ownerId),
                  );
                }
                return shouldAckWishlistResult;
              }
            }
          }
        }
      }
      return false;
    },
    items3,
  );
  closure_4 = tmp17;
  const items4 = [flag, undefined !== tmp7, stateFromStores1, ownerId];
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
  return tmp7;
}
