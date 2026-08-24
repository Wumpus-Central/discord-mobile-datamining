// discord_app/modules/user_profile/hooks/native/useUserProfileGradientColors.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../a11y/AccessibilityStore.tsx";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useProfileThemeValues } from "../../useProfileThemeValues.native.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileGradientColors.tsx");

export const useUserProfileGradientColors = function useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground) {
  const _require = primaryColor;
  dependencyMap = secondaryColor;
  const React = fallbackBackground;
  const items = [overlay];
  const stateFromStores = _initialize.useStateFromStores(items, () => overlay.syncProfileThemeWithUserTheme);
  let obj = _initialize;
  let obj2 = _ManaContext;
  const profileThemeValues = _useProfileThemeValues.useProfileThemeValues(obj2.useThemeContext().theme);
  if (stateFromStores) {
    let prop;
    if (!tmp3) {
      prop = profileThemeValues.overlaySyncedWithUserTheme;
    }
    overlay = prop;
  } else if (!tmp3) {
    overlay = profileThemeValues.overlay;
  }
  const items1 = [fallbackBackground, primaryColor, secondaryColor, overlay];
  return React.useMemo(() => {
    let result = null;
    if (null != primaryColor) {
      result = null;
      if (null != overlay) {
        result = primaryColor(secondaryColor[5]).calculateOverlayedColor(tmp, tmp3);
        const obj = primaryColor(secondaryColor[5]);
      }
    }
    let result1 = null;
    if (null != secondaryColor) {
      result1 = null;
      if (null != overlay) {
        result1 = primaryColor(secondaryColor[5]).calculateOverlayedColor(tmp6, tmp8);
        const obj2 = primaryColor(secondaryColor[5]);
      }
    }
    return primaryColor(secondaryColor[5]).getUserProfileGradientContainerColors(result, result1, closure_2);
  }, items1);
};