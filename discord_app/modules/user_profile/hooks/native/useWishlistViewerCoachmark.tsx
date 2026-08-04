// discord_app/modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("DismissibleContent").fileFinishedImporting("modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx");

export const useWishlistViewerCoachmark = function useWishlistViewerCoachmark(isCurrentUser) {
  let tmp3;
  let tmp4;
  isCurrentUser = isCurrentUser.isCurrentUser;
  const shouldShowWishlistTab = isCurrentUser.shouldShowWishlistTab;
  let items = [isCurrentUser, shouldShowWishlistTab];
  const memo = React.useMemo(() => {
    if (!isCurrentUser) {
      if (shouldShowWishlistTab) {
        let items = [isCurrentUser(shouldShowWishlistTab[2]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK];
      }
      return items;
    }
    items = [];
  }, items);
  let obj = isCurrentUser(shouldShowWishlistTab[3]);
  obj = { isVisible: tmp3 === isCurrentUser(shouldShowWishlistTab[2]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK, markAsDismissed: tmp4 };
  [tmp3, tmp4] = callback(obj.useSelectedDismissibleContent(memo), 2);
  return obj;
};