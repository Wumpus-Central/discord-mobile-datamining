// === Module 9179: useWishlistNUXActionSheet ===

// Module 9179 (useWishlistNUXActionSheet)
import closure_3 from "noop" /* 19 */;
import closure_4 from "createUserWidgetFromServer" /* 5365 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/collectibles/native/useWishlistNUXActionSheet.tsx");

export default function useWishlistNUXActionSheet() {
  let obj = _require(589);
  const items = [closure_5];
  _require = obj.useStateFromStores(items, () => id.getId());
  const items1 = [closure_4];
  const stateFromStores = _require(589).useStateFromStores(items1, () => closure_1_4.getFirstWishlistId(closure_0));
  let obj2 = _require(589);
  const items2 = [closure_4];
  let stateFromStores1 = _require(589).useStateFromStores(items2, () => {
    const userProfile = closure_1_4.getUserProfile(closure_0);
    let tmp2 = null != userProfile;
    if (tmp2) {
      tmp2 = userProfile.fetchEndedAt > 0;
    }
    return tmp2;
  });
  if (stateFromStores1) {
    stateFromStores1 = null == stateFromStores;
  }
  const obj3 = _require(589);
  if (stateFromStores1) {
    stateFromStores1 = !tmpResult.useIsDismissibleContentDismissed_UNSAFE(tmp(1377).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
  }
  obj = {
    shouldShowWishlistNUXActionSheet: stateFromStores1,
    showWishlistNUXActionSheet: React.useCallback((product) => {
      let obj = callback(paths[7]);
      const result = obj.trackDismissibleContentShown(callback(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
      obj = { product };
      callback2(paths[8]).openLazy(callback(paths[10])(paths[9], paths.paths), "WishlistNUXAddedItemActionSheet", obj, "stack");
      const obj2 = callback2(paths[8]);
      obj = { dismissAction: constants.USER_DISMISS, forceTrack: true };
      const result1 = callback(paths[5]).UNSAFE_markDismissibleContentAsDismissed(callback(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET, obj);
    }, [])
  };
  return obj;
};
export const useHasNeverWishlisted = function useHasNeverWishlisted() {
  const items = [closure_5];
  _require = _require(589).useStateFromStores(items, () => id.getId());
  const obj = _require(589);
  const items1 = [closure_4];
  const stateFromStores = _require(589).useStateFromStores(items1, () => closure_1_4.getFirstWishlistId(closure_0));
  const obj2 = _require(589);
  const items2 = [closure_4];
  let stateFromStores1 = _require(589).useStateFromStores(items2, () => {
    const userProfile = closure_1_4.getUserProfile(closure_0);
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