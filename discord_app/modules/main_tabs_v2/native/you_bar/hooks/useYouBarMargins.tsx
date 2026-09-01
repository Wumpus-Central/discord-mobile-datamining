// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import map from "../../../../../design/tokens/native/useToken.tsx";
import CONNECTION_BANNER_HEIGHT from "../YouBarConstants.tsx";

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
  return Math.max(
    map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM),
    useSafeAreaInsetsDefault().bottom,
  );
};
