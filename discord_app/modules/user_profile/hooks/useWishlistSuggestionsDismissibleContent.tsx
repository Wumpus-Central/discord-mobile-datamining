// === Module 12963: useWishlistSuggestionsDismissibleContent ===

// Module 12963 (useWishlistSuggestionsDismissibleContent)
import DurationsDefault from "Durations" /* 1102 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7124 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp3, userId;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const cooldownDurationMs = 90 * DurationsDefault.Millis.DAY;
let closure_7 = 90 * DurationsDefault.Millis.DAY;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let closure_2;
  let closure_3;
  let first;
  let tmp7;
  let tmp8;
  let wishlist;
  const tmp = userId;
  const obj = userId(wishlist[6]);
  const cResult = obj.c(13);
  userId = userId.userId;
  wishlist = userId.wishlist;
  let hasFetchedWishlist = userId.hasFetchedWishlist;
  let num;
  if (wishlist != null) {
    num = wishlist.items.length;
  }
  if (num == null) {
    num = 0;
  }
  [tmp7, tmp8] = _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray;
  const tmp6 = _slicedToArray(react.useState(false), 2);
  _slicedToArray = tmp8;
  let tmp9 = !hasFetchedWishlist;
  if (hasFetchedWishlist) {
    tmp9 = tmp4;
  }
  if (!tmp9) {
    tmp9 = tmp7;
  }
  if (!tmp9) {
    tmp8(true);
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    let num2 = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === userId) {
    let tmp13;
    let tmp14;
    let tmp17;
    if (cResult[2] === wishlist) {
      tmp13 = cResult[3];
      tmp14 = cResult[4];
    }
    const tmpResult = tmp(wishlist[7]);
    const sum = tmpResult.useStateFromStores(first, tmp13, tmp14) + closure_7;
    if (cResult[5] !== sum) {
      const obj2 = { showAfterTimestamp: sum, cooldownDurationMs };
      cResult[5] = sum;
      cResult[6] = obj2;
      tmp17 = obj2;
    } else {
      tmp17 = cResult[6];
    }
    const tmpResult2 = tmp(wishlist[8]);
    const tmp5Result = tmp5(tmpResult2.useSelectedTimeRecurringDismissibleContent(tmp(wishlist[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, tmp17, undefined, true), 2);
    react = tmp23;
    const first1 = tmp5Result[0];
    if (hasFetchedWishlist) {
      hasFetchedWishlist = first1 === tmp(tmp2[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp7 || num < 3;
      first1 === tmp(wishlist[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp7 || num < 3;
    }
    if (cResult[7] !== tmp5Result[1]) {
      class A {
        constructor() {
          tmp = closure_2(false);
          tmp2 = closure_3(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[7] = tmp5Result[1];
      cResult[8] = A;
    } else {
      class A {
        constructor() {
          tmp = closure_2(false);
          tmp2 = closure_3(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[9] === num >= 3) {
      class A {
        constructor() {
          tmp = closure_2(false);
          tmp2 = closure_3(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const obj3 = { isVisible: hasFetchedWishlist, isDismissible: num >= 3, markAsDismissed: A };
    cResult[9] = num >= 3;
    cResult[10] = hasFetchedWishlist;
    cResult[11] = A;
    cResult[12] = obj3;
  }
  class I {
    constructor() {
      num = 0;
      if (null != wishlist) {
        tmp2 = globalThis;
        tmp3 = closure_4;
        tmp4 = userId;
        _Date = Date;
        wishlistSettings = closure_4.getWishlistSettings(userId, tmp.id);
        num2 = undefined;
        if (wishlistSettings != null) {
          num2 = wishlistSettings.updated_at;
        }
        if (num2 == null) {
          num2 = 0;
        }
        self = this;
        self2 = this;
        tmp6 = num2;
        _Date1 = new _Date(num2);
        tmp7 = _Date1;
        num = _Date1.valueOf();
      }
      return num;
    }
  }
  const items1 = [wishlist, userId];
  cResult[1] = userId;
  cResult[2] = wishlist;
  cResult[3] = I;
  cResult[4] = items1;
  tmp14 = items1;
  tmp13 = I;
}) : ((userId) => {
  let _undefined;
  let closure_3;
  let items2;
  let tmp4;
  let tmp5;
  userId = userId.userId;
  const wishlist = userId.wishlist;
  let hasFetchedWishlist = userId.hasFetchedWishlist;
  _slicedToArray = undefined;
  react = undefined;
  let num;
  if (wishlist != null) {
    num = wishlist.items.length;
  }
  if (num == null) {
    num = 0;
  }
  const tmp = num >= 3;
  [tmp4, tmp5] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray;
  _slicedToArray = tmp5;
  let tmp6 = !hasFetchedWishlist;
  const obj = react;
  if (hasFetchedWishlist) {
    tmp6 = tmp;
  }
  if (!tmp6) {
    tmp6 = tmp4;
  }
  if (!tmp6) {
    tmp5(true);
  }
  const items = [UserProfileStore];
  const items1 = [wishlist, userId];
  const obj2 = userId(wishlist[7]);
  const stateFromStores = obj2.useStateFromStores(items, function() {
    let num = 0;
    if (null != wishlist) {
      const _Date = Date;
      const wishlistSettings = UserProfileStore.getWishlistSettings(userId, tmp.id);
      let num2;
      if (wishlistSettings != null) {
        num2 = wishlistSettings.updated_at;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const self = this;
      const self2 = this;
      const _Date1 = new _Date(num2);
      num = _Date1.valueOf();
    }
    return num;
  }, items1);
  const obj3 = userId(wishlist[8]);
  const obj4 = { showAfterTimestamp: stateFromStores + closure_7, cooldownDurationMs };
  const tmp2Result = tmp2(obj3.useSelectedTimeRecurringDismissibleContent(userId(wishlist[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, obj4, undefined, true), 2);
  react = tmp11;
  const first = tmp2Result[0];
  if (hasFetchedWishlist) {
    hasFetchedWishlist = first === userId(wishlist[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
    first === userId(wishlist[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
  }
  const obj5 = {
    isVisible: hasFetchedWishlist,
    isDismissible: tmp,
    markAsDismissed: obj.useCallback(() => {
      _undefined(false);
      closure_3(ContentDismissActionType.USER_DISMISS);
    }, items2)
  };
  items2 = [tmp2Result[1]];
  return obj5;
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx");

export default tmp2;