// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import YouBarConstants from "../YouBarConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
  return Math.max(
    useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM),
    useSafeAreaInsetsDefault().bottom,
  );
};
