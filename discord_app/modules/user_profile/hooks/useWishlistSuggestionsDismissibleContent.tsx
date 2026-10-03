// === Module 12942: useWishlistSuggestionsDismissibleContent ===

// Module 12942 (useWishlistSuggestionsDismissibleContent)
import DurationsDefault from "Durations" /* 1102 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;

const require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const cooldownDurationMs = 90 * DurationsDefault.Millis.DAY;
let closure_7 = 90 * DurationsDefault.Millis.DAY;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(wishlist[6]).c(13);
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
  const obj = userId(wishlist[6]);
  const tmp5 = _slicedToArray;
  [tmp7, tmp8] = noop.useState(false);
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
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === userId) {
    if (cResult[2] === wishlist) {
      let tmp13 = cResult[3];
      let tmp14 = cResult[4];
    }
    const sum = tmp(tmp2[7]).useStateFromStores(first, tmp13, tmp14) + closure_7;
    if (cResult[5] !== sum) {
      const obj2 = { showAfterTimestamp: sum, cooldownDurationMs };
      cResult[5] = sum;
      cResult[6] = obj2;
      let tmp17 = obj2;
    } else {
      tmp17 = cResult[6];
    }
    const tmpResult2 = tmp(tmp2[8]);
    const tmp5Result = tmp5(tmpResult2.useSelectedTimeRecurringDismissibleContent(tmp(tmp2[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, tmp17, undefined, true), 2);
    noop = tmp22;
    if (hasFetchedWishlist) {
      hasFetchedWishlist = tmp5Result[0] === tmp(tmp2[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp7 || !tmp4;
      const tmp23 = tmp5Result[0] === tmp(tmp2[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp7 || !tmp4;
    }
    if (cResult[7] !== tmp5Result[1]) {
      class A {
        constructor() {
          tmp = closure_2(false);
          tmp2 = closure_3(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[7] = tmp22;
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
    if (cResult[9] === tmp4) {
      class A {
        constructor() {
          tmp = closure_2(false);
          tmp2 = closure_3(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const obj3 = { isVisible: hasFetchedWishlist, isDismissible: tmp4, markAsDismissed: A };
    cResult[9] = tmp4;
    cResult[10] = hasFetchedWishlist;
    cResult[11] = A;
    cResult[12] = obj3;
    const tmpResult = tmp(tmp2[7]);
  }
  class I {
    constructor() {
      num = 0;
      if (null != wishlist) {
        tmp2 = globalThis;
        tmp3 = closure_4;
        tmp4 = userId;
        wishlistSettings = closure_4.getWishlistSettings(userId, tmp.id);
        num2 = undefined;
        if (wishlistSettings != null) {
          num2 = wishlistSettings.updated_at;
        }
        if (num2 == null) {
          num2 = 0;
        }
        tmp6 = new.target;
        tmp7 = new.target;
        tmp8 = num2;
        date = new Date(num2);
        tmp9 = date;
        num = date.valueOf();
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
  const tmp6 = _slicedToArray(noop.useState(false), 2);
}) : ((userId) => {
  userId = userId.userId;
  const wishlist = userId.wishlist;
  let hasFetchedWishlist = userId.hasFetchedWishlist;
  _slicedToArray = undefined;
  noop = undefined;
  let num;
  if (wishlist != null) {
    num = wishlist.items.length;
  }
  if (num == null) {
    num = 0;
  }
  [tmp4, tmp5] = noop.useState(false);
  _slicedToArray = tmp5;
  let tmp6 = !hasFetchedWishlist;
  if (hasFetchedWishlist) {
    tmp6 = tmp;
  }
  if (!tmp6) {
    tmp6 = tmp4;
  }
  if (!tmp6) {
    tmp5(true);
  }
  const obj = noop;
  const tmp2 = _slicedToArray;
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  const items = [UserProfileStore];
  const items1 = [wishlist, userId];
  const stateFromStores = userId(wishlist[7]).useStateFromStores(items, () => {
    let num = 0;
    if (null != wishlist) {
      const wishlistSettings = UserProfileStore.getWishlistSettings(userId, tmp.id);
      let num2;
      if (wishlistSettings != null) {
        num2 = wishlistSettings.updated_at;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const date = new Date(num2);
      num = date.valueOf();
    }
    return num;
  }, items1);
  const obj2 = userId(wishlist[7]);
  const tmp2Result = tmp2(userId(wishlist[8]).useSelectedTimeRecurringDismissibleContent(userId(wishlist[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, { showAfterTimestamp: stateFromStores + closure_7, cooldownDurationMs }, undefined, true), 2);
  noop = tmp10;
  if (hasFetchedWishlist) {
    hasFetchedWishlist = tmp2Result[0] === userId(wishlist[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
    const tmp11 = tmp2Result[0] === userId(wishlist[9]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
  }
  const obj5 = { isVisible: hasFetchedWishlist, isDismissible: num >= 3, markAsDismissed: null };
  const items2 = [tmp2Result[1]];
  obj5.markAsDismissed = obj.useCallback(() => {
    _undefined(false);
    closure_3(ContentDismissActionType.USER_DISMISS);
  }, items2);
  return obj5;
});