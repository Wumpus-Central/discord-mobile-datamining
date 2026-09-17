// === Module 8926: useWishlistNUXActionSheet ===

// Module 8926 (useWishlistNUXActionSheet)
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7735 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

const require = fn;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useWishlistNUXActionSheet.tsx");

export default function useWishlistNUXActionSheet() {
  const items = [AuthenticationStore];
  _require = require("initialize").useStateFromStores(items, () => id.getId());
  let obj = require("initialize");
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
  let obj3 = require("initialize");
  if (stateFromStores1) {
    stateFromStores1 = !tmpResult.useIsDismissibleContentDismissed_UNSAFE(tmp(1944).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
  }
  tmpResult = require("DismissibleContentUnsafeUtils");
  return {
    shouldShowWishlistNUXActionSheet: stateFromStores1,
    showWishlistNUXActionSheet: noop.useCallback((product) => {
      const result = closure_0(paths[7]).trackDismissibleContentShown(closure_0(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
      const obj = closure_0(paths[7]);
      require("ActionSheetActionCreators").openLazy(closure_0(paths[10])(paths[9], paths.paths), "WishlistNUXAddedItemActionSheet", { product }, "stack");
      const obj2 = require("ActionSheetActionCreators");
      const obj3 = { product };
      const result1 = closure_0(paths[5]).UNSAFE_markDismissibleContentAsDismissed(closure_0(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET, { dismissAction: constants.USER_DISMISS, forceTrack: true });
    }, [])
  };
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