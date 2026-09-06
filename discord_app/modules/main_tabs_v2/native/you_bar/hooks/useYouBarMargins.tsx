// === Module 15097: useYouBarMargins ===

// Module 15097 (useYouBarMargins)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useToken from "useToken" /* 4262 */;
import YouBarConstants from "YouBarConstants" /* 15098 */;
import size from "module_2" /* 2 */;

({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = function useYouBarHorizontalMargin() {
  if (useSafeAreaInsetsDefault().bottom > 0) {
    if (obj.isIOS()) {
      let tmp3 = React3;
    }
    return tmp3;
  }
  tmp3 = React4;
};
export const useYouBarBottomMargin = function useYouBarBottomMargin() {
  return Math.max(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom);
};