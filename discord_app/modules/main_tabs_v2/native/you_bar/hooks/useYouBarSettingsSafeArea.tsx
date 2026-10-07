// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx
import c from "../../../../../../_runtime/00576_c.js";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp4 = useIsWindowLargeDefault();
      if (cResult[0] !== tmp4) {
        const tmp6 = utils_PlatformUtils.isIOS() || tmp4;
        cResult[0] = tmp4;
        cResult[1] = tmp6;
        let tmp5 = tmp6;
        const tmpResult = utils_PlatformUtils;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const tmp = useIsWindowLargeDefault();
      return utils_PlatformUtils.isIOS() || tmp;
    };
let closure_3 = tmp3;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let num = 16;
      if (!closure_3()) {
        num = useSafeAreaInsetsDefault().top;
      }
      return num;
    }
  : () => {
      let num = 16;
      if (!closure_3()) {
        num = useSafeAreaInsetsDefault().top;
      }
      return num;
    };
export const useYouBarSettingsOutsideSafeAreaTop = tmp3;
