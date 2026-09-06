// discord_app/modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx");

export const useWishlistViewerCoachmark = function useWishlistViewerCoachmark(isCurrentUser) {
  isCurrentUser = isCurrentUser.isCurrentUser;
  const shouldShowWishlistTab = isCurrentUser.shouldShowWishlistTab;
  let items = [isCurrentUser, shouldShowWishlistTab];
  const memo = noop.useMemo(() => {
    if (!isCurrentUser) {
      if (shouldShowWishlistTab) {
        let items = [dismissible_content.DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK];
      }
      return items;
    }
    items = [];
  }, items);
  isCurrentUser(shouldShowWishlistTab[3]);
  const obj = {
    isVisible: tmp3 === isCurrentUser(shouldShowWishlistTab[2]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK,
    markAsDismissed: tmp4,
  };
  [tmp3, tmp4] = _slicedToArray(obj.useSelectedDismissibleContent(memo), 2);
  return obj;
};
