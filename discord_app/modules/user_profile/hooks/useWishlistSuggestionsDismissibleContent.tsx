// === Module 12212: useWishlistSuggestionsDismissibleContent ===

// Module 12212 (useWishlistSuggestionsDismissibleContent)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import { ContentDismissActionType } from "ContentDismissActionType";
import ApexExperiment from "ApexExperiment";

const require = arg1;
let closure_6 = 90 * require("set").Millis.DAY;
let closure_7 = 90 * require("set").Millis.DAY;
let closure_8 = ApexExperiment.createApexExperiment({ name: "2026-07-smag-wishlist-recommendations-dismiss-threshold", kind: "user", defaultConfig: { minItemsToDismiss: 1 }, variations: { 0: { minItemsToDismiss: 1 }, 1: { minItemsToDismiss: 3 }, 2: { minItemsToDismiss: 10 } } });
const result = require("createUserWidgetFromServer").fileFinishedImporting("modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx");

export default function useWishlistSuggestionsDismissibleContent(userId) {
  let tmp4;
  let tmp5;
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
  const tmp = num >= closure_8.useConfig({ location: "user_profile_wishlist_suggestions_grid" }).minItemsToDismiss;
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
  const items = [createUserWidgetFromServer];
  const items1 = [wishlist, userId];
  const stateFromStores = userId(wishlist[6]).useStateFromStores(items, () => {
    let num = 0;
    if (null != wishlist) {
      const wishlistSettings = outer1_4.getWishlistSettings(userId, tmp.id);
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
  const obj2 = userId(wishlist[6]);
  obj = { showAfterTimestamp: stateFromStores + closure_7, cooldownDurationMs: closure_6 };
  const tmp2Result = tmp2(userId(wishlist[7]).useSelectedTimeRecurringDismissibleContent(userId(wishlist[8]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, obj, undefined, true), 2);
  React = tmp10;
  if (hasFetchedWishlist) {
    hasFetchedWishlist = tmp2Result[0] === userId(wishlist[8]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
    const tmp11 = tmp2Result[0] === userId(wishlist[8]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
  }
  obj = {
    isVisible: hasFetchedWishlist,
    isDismissible: tmp,
    markAsDismissed: obj.useCallback(() => {
      _undefined(false);
      _undefined2(outer1_5.USER_DISMISS);
    }, items2)
  };
  items2 = [tmp2Result[1]];
  return obj;
};