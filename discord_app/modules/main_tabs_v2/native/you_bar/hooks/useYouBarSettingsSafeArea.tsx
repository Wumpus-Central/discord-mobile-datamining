// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx
const result = require("PlatformTypes").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  const tmp = require("../../../../screen/native/useIsWindowLarge.tsx")();
  const obj = require("../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
  let num = 16;
  if (!tmp2) {
    num = require("../../../../safe_area/useSafeAreaInsets.native.tsx")().top;
  }
  return num;
};
export const useYouBarSettingsOutsideSafeAreaTop = function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = require("../../../../screen/native/useIsWindowLarge.tsx")();
  const obj = require("../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
  return require("../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */.isIOS() || tmp;
};