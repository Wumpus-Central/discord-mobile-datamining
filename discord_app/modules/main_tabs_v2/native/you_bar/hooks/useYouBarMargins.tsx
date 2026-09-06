// === Module 15097: useYouBarHorizontalMargin ===

// Module 15097 (useYouBarHorizontalMargin)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import map from "map" /* 4262 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 15098 */;

({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: c4 } = CONNECTION_BANNER_HEIGHT);
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = function useYouBarHorizontalMargin() {
  if (useSafeAreaInsetsDefault().bottom > 0) {
    if (obj.isIOS()) {
      let tmp3 = closure_3;
    }
    return tmp3;
  }
  tmp3 = closure_4;
};
export const useYouBarBottomMargin = function useYouBarBottomMargin() {
  return Math.max(map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), useSafeAreaInsetsDefault().bottom);
};