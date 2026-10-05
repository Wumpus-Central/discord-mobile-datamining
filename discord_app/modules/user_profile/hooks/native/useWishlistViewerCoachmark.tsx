// === Module 12928: useWishlistViewerCoachmark ===

// Module 12928 (useWishlistViewerCoachmark)
import react2 from "react" /* 576 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6891 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isCurrentUser;
  let shouldShowWishlistTab;
  let tmp4;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  ({ isCurrentUser, shouldShowWishlistTab } = arg0);
  if (cResult[0] === isCurrentUser) {
    if (cResult[1] === shouldShowWishlistTab) {
      tmp4 = cResult[2];
    }
    const tmpResult = useSelectedDismissibleContent;
    [tmp7, tmp8] = tmpResult.useSelectedDismissibleContent(tmp4);
    _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp4), 2);
    const tmp9 = tmp7 === dismissible_content.DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK;
    if (cResult[3] === tmp9) {
      let tmp10;
      if (cResult[4] === tmp8) {
        tmp10 = cResult[5];
      }
      return tmp10;
    }
    const obj2 = { isVisible: tmp9, markAsDismissed: tmp8 };
    cResult[3] = tmp9;
    cResult[4] = tmp8;
    cResult[5] = obj2;
    tmp10 = obj2;
  }
  if (!isCurrentUser) {
    let items;
    if (shouldShowWishlistTab) {
      items = [dismissible_content.DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK];
    }
    cResult[0] = isCurrentUser;
    cResult[1] = shouldShowWishlistTab;
    cResult[2] = items;
    tmp4 = items;
  }
  items = [];
}) : ((isCurrentUser) => {
  let tmp3;
  let tmp4;
  isCurrentUser = isCurrentUser.isCurrentUser;
  const shouldShowWishlistTab = isCurrentUser.shouldShowWishlistTab;
  let items = [isCurrentUser, shouldShowWishlistTab];
  const memo = react.useMemo(() => {
    if (!isCurrentUser) {
      let items;
      if (shouldShowWishlistTab) {
        items = [dismissible_content.DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK];
      }
      return items;
    }
    items = [];
  }, items);
  const obj = isCurrentUser(shouldShowWishlistTab[5]);
  const tmp2 = _slicedToArray(obj.useSelectedDismissibleContent(memo), 2);
  const obj2 = { isVisible: tmp3 === isCurrentUser(shouldShowWishlistTab[4]).DismissibleContent.WISHLIST_MOBILE_VIEWER_COACHMARK, markAsDismissed: tmp4 };
  [tmp3, tmp4] = tmp2;
  return obj2;
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx");

export const useWishlistViewerCoachmark = tmp2;