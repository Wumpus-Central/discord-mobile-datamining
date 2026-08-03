import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileGradientColors.tsx");

export const useUserProfileGradientColors = function useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground) {
  const _require = primaryColor;
  const dependencyMap = secondaryColor;
  const React = fallbackBackground;
  const items = [overlay];
  const stateFromStores = _require(589).useStateFromStores(items, () => overlay.syncProfileThemeWithUserTheme);
  let obj = _require(589);
  let obj2 = _require(3905);
  const profileThemeValues = _require(5541).useProfileThemeValues(obj2.useThemeContext().theme);
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
    return primaryColor(secondaryColor[5]).getUserProfileGradientContainerColors(result, result1, noop);
  }, items1);
};