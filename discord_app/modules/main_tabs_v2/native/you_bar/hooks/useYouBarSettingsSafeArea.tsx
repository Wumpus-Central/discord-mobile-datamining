// === Module 13718: useYouBarSettingsSafeArea ===

// Module 13718 (useYouBarSettingsSafeArea)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7183 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  const tmp = useIsWindowLargeDefault();
  let num = 16;
  if (!tmp2) {
    num = useSafeAreaInsetsDefault().top;
  }
  return num;
};
export const useYouBarSettingsOutsideSafeAreaTop = function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = useIsWindowLargeDefault();
  return utils_PlatformUtils.isIOS() || tmp;
};