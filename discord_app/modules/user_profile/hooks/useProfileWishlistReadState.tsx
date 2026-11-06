// === Module 15223: useProfileWishlistReadState ===

// Module 15223 (useProfileWishlistReadState)
import ProfileReadStateSection from "ProfileReadStateSection" /* 7883 */;
import ProfileReadStateActionCreators from "ProfileReadStateActionCreators" /* 15224 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WishlistStore from "WishlistStore" /* 9573 */;
import UserProfileStore from "UserProfileStore" /* 7871 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileWishlistReadState.tsx");

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
  const stateFromStores = ownerId(wishlistId[5]).useStateFromStores(items, () => {
    let profileReadStateSectionAckedAt = null;
    if (null != ownerId) {
      profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(tmp, ProfileReadStateSection.ProfileReadStateSection.WISHLIST);
    }
    return profileReadStateSectionAckedAt;
  }, items1);
  const obj2 = ownerId(wishlistId[5]);
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
  stateFromStores1 = tmp(tmp2[5]).useStateFromStores(items2, () => {
    let result = null != ownerId;
    if (result) {
      result = ProfileReadStateActionCreators.canAckProfileWishlist(tmp, wishlistId);
    }
    return result;
  }, items3);
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
};