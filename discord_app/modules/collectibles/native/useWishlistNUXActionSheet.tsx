// === Module 8457: useWishlistNUXActionSheet ===

// Module 8457 (useWishlistNUXActionSheet)
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4704 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7124 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let id;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = stateFromStores(576);
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function n() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[2] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const fn2 = function c() {
      return UserProfileStore.getFirstWishlistId(stateFromStores);
    };
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult3 = stateFromStores(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserProfileStore];
    cResult[5] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== stateFromStores) {
    const fn3 = function h() {
      const userProfile = UserProfileStore.getUserProfile(stateFromStores);
      return null != userProfile && userProfile.fetchEndedAt > 0;
    };
    cResult[6] = stateFromStores;
    cResult[7] = fn3;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[7];
  }
  const tmpResult4 = stateFromStores(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp12, tmp14) && null == stateFromStores1;
  return stateFromStores2;
}) : (() => {
  let closure_0;
  let id;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  _require = obj.useStateFromStores(items, () => id.getId());
  const items1 = [UserProfileStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items1, () => UserProfileStore.getFirstWishlistId(closure_0));
  const items2 = [UserProfileStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    const userProfile = UserProfileStore.getUserProfile(closure_0);
    return null != userProfile && userProfile.fetchEndedAt > 0;
  }) && null == stateFromStores;
  return stateFromStores1;
});
let closure_7 = tmp2;
let result = size.fileFinishedImporting("modules/collectibles/native/useWishlistNUXActionSheet.tsx");

export default function useWishlistNUXActionSheet() {
  let paths;
  let tmp = closure_7();
  const useIsDismissibleContentDismissed_UNSAFE = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE;
  DismissibleContentUnsafeUtils;
  if (tmp) {
    tmp = !useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
  }
  let obj = {
    shouldShowWishlistNUXActionSheet: tmp,
    showWishlistNUXActionSheet: react.useCallback((product) => {
      const obj = require("DismissibleContentUtils");
      const result = obj.trackDismissibleContentShown(require("dismissible_content").DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
      const obj2 = require("ActionSheetActionCreators");
      const obj3 = { product };
      obj2.openLazy(require("asyncRequire")(paths[11], paths.paths), "WishlistNUXAddedItemActionSheet", obj3, "stack");
      const obj4 = require("DismissibleContentUnsafeUtils");
      const obj5 = { dismissAction: constants.USER_DISMISS, forceTrack: true };
      const result1 = obj4.UNSAFE_markDismissibleContentAsDismissed(require("dismissible_content").DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET, obj5);
    }, [])
  };
  return obj;
};
export const useHasNeverWishlisted = tmp2;