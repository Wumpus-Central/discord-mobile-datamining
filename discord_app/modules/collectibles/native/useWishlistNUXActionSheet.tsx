// === Module 8770: useWishlistNUXActionSheet ===

// Module 8770 (useWishlistNUXActionSheet)
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useWishlistNUXActionSheet.tsx");

export default function useWishlistNUXActionSheet() {
  let obj = require("initialize");
  const items = [AuthenticationStore];
  _require = obj.useStateFromStores(items, () => id.getId());
  const items1 = [UserProfileStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => UserProfileStore.getFirstWishlistId(closure_0));
  let obj2 = require("initialize");
  const items2 = [UserProfileStore];
  let stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const userProfile = UserProfileStore.getUserProfile(closure_0);
    let tmp2 = null != userProfile;
    if (tmp2) {
      tmp2 = userProfile.fetchEndedAt > 0;
    }
    return tmp2;
  });
  if (stateFromStores1) {
    stateFromStores1 = null == stateFromStores;
  }
  const obj3 = require("initialize");
  if (stateFromStores1) {
    stateFromStores1 = !tmpResult.useIsDismissibleContentDismissed_UNSAFE(tmp(1943).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
  }
  obj = {
    shouldShowWishlistNUXActionSheet: stateFromStores1,
    showWishlistNUXActionSheet: noop.useCallback((product) => {
      let obj = closure_0(paths[7]);
      const result = obj.trackDismissibleContentShown(closure_0(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
      obj = { product };
      require("ActionSheetActionCreators").openLazy(closure_0(paths[10])(paths[9], paths.paths), "WishlistNUXAddedItemActionSheet", obj, "stack");
      const obj2 = require("ActionSheetActionCreators");
      obj = { dismissAction: constants.USER_DISMISS, forceTrack: true };
      const result1 = closure_0(paths[5]).UNSAFE_markDismissibleContentAsDismissed(closure_0(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET, obj);
    }, [])
  };
  return obj;
};
export const useHasNeverWishlisted = function useHasNeverWishlisted() {
  const items = [AuthenticationStore];
  _require = require("initialize").useStateFromStores(items, () => id.getId());
  const obj = require("initialize");
  const items1 = [UserProfileStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => UserProfileStore.getFirstWishlistId(closure_0));
  const obj2 = require("initialize");
  const items2 = [UserProfileStore];
  let stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const userProfile = UserProfileStore.getUserProfile(closure_0);
    let tmp2 = null != userProfile;
    if (tmp2) {
      tmp2 = userProfile.fetchEndedAt > 0;
    }
    return tmp2;
  });
  if (stateFromStores1) {
    stateFromStores1 = null == stateFromStores;
  }
  return stateFromStores1;
};