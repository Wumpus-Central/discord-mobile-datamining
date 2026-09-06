// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
