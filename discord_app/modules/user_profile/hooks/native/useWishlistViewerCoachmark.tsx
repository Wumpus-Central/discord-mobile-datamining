// === Module 12302: useWishlistViewerCoachmark ===

// Module 12302 (useWishlistViewerCoachmark)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx");

export const useWishlistViewerCoachmark = function useWishlistViewerCoachmark(isCurrentUser) {
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
  isCurrentUser(shouldShowWishlistTab[3]);
  const obj = { isVisible: tmp3 === isCurrentUser(shouldShowWishlistTab[2]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK, markAsDismissed: tmp4 };
  [tmp3, tmp4] = callback(obj.useSelectedDismissibleContent(memo), 2);
  return obj;
};