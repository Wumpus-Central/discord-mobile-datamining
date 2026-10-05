// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import YouBarConstants from "../YouBarConstants.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: closure_4 } = YouBarConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => {
  if (useSafeAreaInsetsDefault().bottom > 0) {
    let tmp3;
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      tmp3 = _false;
    }
    return tmp3;
  }
  tmp3 = React3;
};
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const bottom = useSafeAreaInsetsDefault().bottom;
      const obj = useToken;
      return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
    }
  : () => {
      const bottom = useSafeAreaInsetsDefault().bottom;
      const obj = useToken;
      return Math.max(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM), bottom);
    };
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = fn;
export const useYouBarBottomMargin = tmp4;
