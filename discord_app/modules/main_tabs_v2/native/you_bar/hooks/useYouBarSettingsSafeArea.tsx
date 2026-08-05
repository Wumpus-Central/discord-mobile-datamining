// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx
import { PlatformTypes } from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import { useSafeAreaInsets } from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import { useIsWindowLarge } from "../../../../screen/native/useIsWindowLarge.tsx";
const result = require("PlatformTypes").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  const tmp = useIsWindowLarge();
  const obj = PlatformTypes;
  let num = 16;
  if (!tmp2) {
    num = useSafeAreaInsets().top;
  }
  return num;
};
export const useYouBarSettingsOutsideSafeAreaTop = function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = useIsWindowLarge();
  const obj = PlatformTypes;
  return PlatformTypes.isIOS() || tmp;
};