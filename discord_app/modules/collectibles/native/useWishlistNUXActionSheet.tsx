// discord_app/modules/collectibles/native/useWishlistNUXActionSheet.tsx
import noop from "noop";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import fetchFingerprint from "fetchFingerprint";
import { ContentDismissActionType } from "ContentDismissActionType";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let result = require("fetchFingerprint").fileFinishedImporting("modules/collectibles/native/useWishlistNUXActionSheet.tsx");

export default function useWishlistNUXActionSheet() {
  let obj = _initialize;
  const items = [fetchFingerprint];
  _require = obj.useStateFromStores(items, () => id.getId());
  const items1 = [createUserWidgetFromServer];
  const stateFromStores = _initialize.useStateFromStores(items1, () => outer1_4.getFirstWishlistId(closure_0));
  let obj2 = _initialize;
  const items2 = [createUserWidgetFromServer];
  let stateFromStores1 = _initialize.useStateFromStores(items2, () => {
    const userProfile = outer1_4.getUserProfile(closure_0);
    let tmp2 = null != userProfile;
    if (tmp2) {
      tmp2 = userProfile.fetchEndedAt > 0;
    }
    return tmp2;
  });
  if (stateFromStores1) {
    stateFromStores1 = null == stateFromStores;
  }
  const obj3 = _initialize;
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
  const items = [fetchFingerprint];
  _require = _initialize.useStateFromStores(items, () => id.getId());
  const obj = _initialize;
  const items1 = [createUserWidgetFromServer];
  const stateFromStores = _initialize.useStateFromStores(items1, () => outer1_4.getFirstWishlistId(closure_0));
  const obj2 = _initialize;
  const items2 = [createUserWidgetFromServer];
  let stateFromStores1 = _initialize.useStateFromStores(items2, () => {
    const userProfile = outer1_4.getUserProfile(closure_0);
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