// === Module 12819: useWishlistSuggestionsDismissibleContent ===

// Module 12819 (useWishlistSuggestionsDismissibleContent)
import setDefault from "set" /* 684 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "createUserWidgetFromServer" /* 7376 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;

const require = arg1;
let closure_6 = 90 * setDefault.Millis.DAY;
let closure_7 = 90 * setDefault.Millis.DAY;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx");

export default function useWishlistSuggestionsDismissibleContent(userId) {
  userId = userId.userId;
  const wishlist = userId.wishlist;
  let hasFetchedWishlist = userId.hasFetchedWishlist;
  let callback;
  let React;
  let num;
  if (wishlist != null) {
    num = wishlist.items.length;
  }
  if (num == null) {
    num = 0;
  }
  let obj = React;
  [tmp4, tmp5] = callback(React.useState(false), 2);
  callback = tmp5;
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
  const tmp2 = callback;
  const tmp3 = callback(React.useState(false), 2);
  const items = [closure_4];
  const items1 = [wishlist, userId];
  const stateFromStores = userId(wishlist[5]).useStateFromStores(items, () => {
    let num = 0;
    if (null != wishlist) {
      const wishlistSettings = closure_1_4.getWishlistSettings(userId, tmp.id);
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
  const obj2 = userId(wishlist[5]);
  obj = { showAfterTimestamp: stateFromStores + closure_7, cooldownDurationMs: closure_6 };
  const tmp2Result = tmp2(userId(wishlist[6]).useSelectedTimeRecurringDismissibleContent(userId(wishlist[7]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, obj, undefined, true), 2);
  React = tmp10;
  if (hasFetchedWishlist) {
    hasFetchedWishlist = tmp2Result[0] === userId(wishlist[7]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
    const tmp11 = tmp2Result[0] === userId(wishlist[7]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
  }
  obj = {
    isVisible: hasFetchedWishlist,
    isDismissible: tmp,
    markAsDismissed: obj.useCallback(() => {
      _undefined(false);
      callback(closure_1_5.USER_DISMISS);
    }, items2)
  };
  items2 = [tmp2Result[1]];
  return obj;
};