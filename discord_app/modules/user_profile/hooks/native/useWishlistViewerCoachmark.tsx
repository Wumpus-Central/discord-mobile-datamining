// discord_app/modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx
import c from "../../../../../_runtime/00576_c.js";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx");

export const useWishlistViewerCoachmark = ReactCompilerGating.isReactCompilerEnabled()
  ? function useWishlistViewerCoachmark(arg0) {
      const cResult = c.c(6);
      ({ isCurrentUser, shouldShowWishlistTab } = arg0);
      if (cResult[0] === isCurrentUser) {
        if (cResult[1] === shouldShowWishlistTab) {
          const tmpResult = useSelectedDismissibleContent;
          [tmp7, tmp8] = useSelectedDismissibleContent.useSelectedDismissibleContent(cResult[2]);
          const tmp9 = tmp7 === dismissible_content.DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK;
          if (cResult[3] === tmp9) {
            if (cResult[4] === tmp8) {
              let tmp10 = cResult[5];
            }
            return tmp10;
          }
          const obj2 = { isVisible: tmp9, markAsDismissed: tmp8 };
          cResult[3] = tmp9;
          cResult[4] = tmp8;
          cResult[5] = obj2;
          tmp10 = obj2;
          const tmp6 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(cResult[2]), 2);
        }
      }
      if (!isCurrentUser) {
        if (shouldShowWishlistTab) {
          let items = [dismissible_content.DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK];
        }
        cResult[0] = isCurrentUser;
        cResult[1] = shouldShowWishlistTab;
        cResult[2] = items;
      }
      items = [];
    }
  : function useWishlistViewerCoachmark(isCurrentUser) {
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
      const obj = isCurrentUser(shouldShowWishlistTab[5]);
      const tmp2 = _slicedToArray(isCurrentUser(shouldShowWishlistTab[5]).useSelectedDismissibleContent(memo), 2);
      [tmp3, tmp4] = tmp2;
      return {
        isVisible: tmp3 === isCurrentUser(shouldShowWishlistTab[4]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK,
        markAsDismissed: tmp4,
      };
    };
