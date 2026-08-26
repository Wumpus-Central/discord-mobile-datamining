// === Module 7851: useYouBarSettingsCustomHeaderPaddingTop ===

// Module 7851 (useYouBarSettingsCustomHeaderPaddingTop)
import set from "set" /* 2 */;
import PlatformTypes from "PlatformTypes" /* 501 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7852 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  const tmp = useIsWindowLargeDefault();
  const obj = PlatformTypes;
  let num = 16;
  if (!tmp2) {
    num = useSafeAreaInsetsDefault().top;
  }
  return num;
};
export const useYouBarSettingsOutsideSafeAreaTop = function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = useIsWindowLargeDefault();
  const obj = PlatformTypes;
  return PlatformTypes.isIOS() || tmp;
};