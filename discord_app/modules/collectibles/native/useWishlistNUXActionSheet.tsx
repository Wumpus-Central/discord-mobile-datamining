// === Module 8424: useWishlistNUXActionSheet ===

// Module 8424 (useWishlistNUXActionSheet)
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(576).c(8);
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
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const fn2 = function c() {
      return UserProfileStore.getFirstWishlistId(stateFromStores);
    };
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = stateFromStores(504);
  const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp8, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserProfileStore];
    cResult[5] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== stateFromStores) {
    const fn3 = function h() {
      const userProfile = UserProfileStore.getUserProfile(stateFromStores);
      let tmp2 = null != userProfile;
      if (tmp2) {
        tmp2 = userProfile.fetchEndedAt > 0;
      }
      return tmp2;
    };
    cResult[6] = stateFromStores;
    cResult[7] = fn3;
    let tmp14 = fn3;
  } else {
    tmp14 = cResult[7];
  }
  const tmpResult3 = stateFromStores(504);
  let stateFromStores2 = stateFromStores(504).useStateFromStores(tmp12, tmp14);
  if (stateFromStores2) {
    stateFromStores2 = null == stateFromStores1;
  }
  return stateFromStores2;
}) : (() => {
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
});
let closure_7 = tmp2;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useWishlistNUXActionSheet.tsx");

export default function useWishlistNUXActionSheet() {
  let tmp = closure_7();
  if (tmp) {
    tmp = !obj.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
  }
  obj = DismissibleContentUnsafeUtils;
  return {
    shouldShowWishlistNUXActionSheet: tmp,
    showWishlistNUXActionSheet: noop.useCallback((product) => {
      const result = require("DismissibleContentUtils").trackDismissibleContentShown(require("dismissible_content").DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
      const obj = require("DismissibleContentUtils");
      require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[11], paths.paths), "WishlistNUXAddedItemActionSheet", { product }, "stack");
      const obj2 = require("ActionSheetActionCreators");
      const obj3 = { product };
      const result1 = require("DismissibleContentUnsafeUtils").UNSAFE_markDismissibleContentAsDismissed(require("dismissible_content").DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET, { dismissAction: constants.USER_DISMISS, forceTrack: true });
    }, [])
  };
};
export const useHasNeverWishlisted = tmp2;