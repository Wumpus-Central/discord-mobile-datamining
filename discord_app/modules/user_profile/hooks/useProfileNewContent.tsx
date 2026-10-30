// === Module 14937: useProfileNewContent ===

// Module 14937 (useProfileNewContent)
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 7776 */;
import WishlistStore from "WishlistStore" /* 9449 */;
import UserStore from "UserStore" /* 1384 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;

const require = globalThis.__r;

require = fn;
const ProfileReadStateSection = fn(7777).ProfileReadStateSection;
let closure_7 = { hasNewWishlistItems: false, newWishlistItemCount: 0, shouldLogExposure: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileNewContent.tsx");

export default function useProfileNewContent(id) {
  _require = id;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const isItemShown = obj.isItemShown;
  let profileReadStateConfigPeek;
  profileReadStateConfigPeek = require("ProfileReadStateExperiment").useProfileReadStateConfigPeek();
  const tmp2 = isItemShown(profileReadStateConfigPeek[5])(id);
  let wishlist = tmp2;
  let obj2 = require("ProfileReadStateExperiment");
  let items = [UserProfileStore, UserStore];
  let items1 = [id, profileReadStateConfigPeek];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != profileReadStateConfigPeek) {
      currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (id.id !== id) {
        const firstWishlistId = UserProfileStore.getFirstWishlistId(tmp9.id);
        if (null == firstWishlistId) {
          return null;
        } else {
          const wishlistSettings = UserProfileStore.getWishlistSettings(tmp9.id, firstWishlistId);
          profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(tmp9.id, ProfileReadStateSection.WISHLIST);
          let tmp8 = null;
          if (obj2.hasWishlistBeenUpdatedSinceAcked(wishlistSettings, profileReadStateSectionAckedAt)) {
            tmp8 = firstWishlistId;
          }
          return tmp8;
        }
      }
    }
    return null;
  }, items1);
  const obj3 = require("initialize");
  const fetchWishlist = require("useWishlistHooks").useFetchWishlist({ wishlistId: stateFromStores, userId: id.id });
  const obj4 = require("useWishlistHooks");
  const obj5 = { wishlistId: stateFromStores, userId: id.id };
  const items2 = [UserProfileStore, UserStore, wishlist];
  const items3 = [id, profileReadStateConfigPeek, tmp2, isItemShown];
  return require("initialize").useStateFromStoresObject(items2, () => {
    if (null != profileReadStateConfigPeek) {
      currentUser = currentUser.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (profileReadStateSectionAckedAt.id !== id) {
        profileReadStateSectionAckedAt = profileReadStateSectionAckedAt.getProfileReadStateSectionAckedAt(tmp7.id, constants.WISHLIST);
        if (null == profileReadStateSectionAckedAt) {
          return closure_1_7;
        } else {
          let firstWishlistId = null;
          if (wishlist) {
            firstWishlistId = obj2.getFirstWishlistId(tmp7.id);
          }
          if (null != firstWishlistId) {
            wishlist = wishlist.getWishlist(firstWishlistId);
            let items;
            if (wishlist != null) {
              items = wishlist.items;
            }
            if (items == null) {
              items = [];
            }
            let items1 = items;
          } else {
            items1 = [];
          }
          const length = items1.filter((addedAt) => {
            let flag;
            if (isItemShown != null) {
              flag = isItemShown(addedAt);
            }
            if (flag == null) {
              flag = true;
            }
            if (flag) {
              flag = ProfileReadStateUtils.isWishlistItemNew(addedAt.addedAt, profileReadStateSectionAckedAt);
            }
            return flag;
          }).length;
          let enabled = tmp.enabled;
          if (enabled) {
            enabled = length > 0;
          }
          let obj = { hasNewWishlistItems: enabled, newWishlistItemCount: length, shouldLogExposure: length > 0 };
          return obj;
        }
        obj2 = profileReadStateSectionAckedAt;
      }
    }
    return closure_1_7;
  }, items3);
};