// === Module 13585: useYouBarSettingsSafeArea ===

// Module 13585 (useYouBarSettingsSafeArea)
import c from "c" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6618 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarSettingsOutsideSafeAreaTop() {
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
}) : (function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = useIsWindowLargeDefault();
  return utils_PlatformUtils.isIOS() || tmp;
});
let closure_3 = tmp3;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarSettingsCustomHeaderPaddingTop() {
  let num = 16;
  if (!closure_3()) {
    num = useSafeAreaInsetsDefault().top;
  }
  return num;
}) : (function useYouBarSettingsCustomHeaderPaddingTop() {
  let num = 16;
  if (!closure_3()) {
    num = useSafeAreaInsetsDefault().top;
  }
  return num;
});
export const useYouBarSettingsOutsideSafeAreaTop = tmp3;