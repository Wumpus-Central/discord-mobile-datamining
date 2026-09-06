// discord_app/modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../UserProfileStore.tsx";

const require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const cooldownDurationMs = 90 * DurationsDefault.Millis.DAY;
let closure_7 = 90 * DurationsDefault.Millis.DAY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx");

export default function useWishlistSuggestionsDismissibleContent(userId) {
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
  let obj = noop;
  [tmp4, tmp5] = _slicedToArray(noop.useState(false), 2);
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
  const tmp2 = _slicedToArray;
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  const items = [UserProfileStore];
  const items1 = [wishlist, userId];
  const stateFromStores = userId(wishlist[5]).useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
  const obj2 = userId(wishlist[5]);
  obj = { showAfterTimestamp: stateFromStores + closure_7, cooldownDurationMs };
  const tmp2Result = tmp2(
    userId(wishlist[6]).useSelectedTimeRecurringDismissibleContent(
      userId(wishlist[7]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
      obj,
      undefined,
      true,
    ),
    2,
  );
  noop = tmp10;
  if (hasFetchedWishlist) {
    hasFetchedWishlist =
      tmp2Result[0] === userId(wishlist[7]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
    const tmp11 =
      tmp2Result[0] === userId(wishlist[7]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
  }
  obj = { isVisible: hasFetchedWishlist, isDismissible: tmp, markAsDismissed: null };
  const items2 = [tmp2Result[1]];
  obj.markAsDismissed = obj.useCallback(() => {
    _undefined(false);
    closure_3(ContentDismissActionType.USER_DISMISS);
  }, items2);
  return obj;
}
