// discord_app/modules/user_profile/hooks/useProfileWishlistReadState.tsx
import ProfileReadStateActionCreators from "../ProfileReadStateActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

require = fn;
const ProfileReadStateSection = fn(7777).ProfileReadStateSection;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileWishlistReadState.tsx");

export default function useProfileWishlistReadState(ownerId) {
  ownerId = ownerId.ownerId;
  const wishlistId = ownerId.wishlistId;
  let flag = ownerId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  _slicedToArray = undefined;
  let stateFromStores1;
  closure_5 = undefined;
  const profileReadStateConfigPeek = ownerId(flag[5]).useProfileReadStateConfigPeek();
  let obj = ownerId(flag[5]);
  let tmp = ownerId;
  const items = [UserProfileStore];
  const items1 = [ownerId];
  const stateFromStores = ownerId(flag[6]).useStateFromStores(
    items,
    () => {
      let profileReadStateSectionAckedAt = null;
      if (null != ownerId) {
        profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(
          tmp,
          ProfileReadStateSection.WISHLIST,
        );
      }
      return profileReadStateSectionAckedAt;
    },
    items1,
  );
  const tmp6 = _slicedToArray(stateFromStores1.useState(undefined), 2);
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
  const tmp13 = wishlistId(flag[7])(ownerId);
  _slicedToArray = tmp13;
  const obj2 = ownerId(flag[6]);
  const obj3 = stateFromStores1;
  const items2 = [closure_5, UserProfileStore];
  const items3 = [ownerId, wishlistId];
  stateFromStores1 = tmp(flag[6]).useStateFromStores(
    items2,
    () => {
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
                return null == updated_at || WishlistStore.getUpdatedAt(wishlistId) === updated_at;
              }
            }
          }
        }
      }
      return false;
    },
    items3,
  );
  closure_5 = tmp15;
  const items4 = [flag, undefined !== first, tmp13, stateFromStores1, ownerId];
  const effect = obj3.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = closure_5;
    }
    if (tmp) {
      tmp = closure_3;
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
}
