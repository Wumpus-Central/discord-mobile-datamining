// === Module 8239: useUserProfileGradientColors ===

// Module 8239 (useUserProfileGradientColors)
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 8229 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileGradientColors.tsx");

export const useUserProfileGradientColors = function useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground) {
  _require = primaryColor;
  dependencyMap = secondaryColor;
  noop = fallbackBackground;
  const items = [overlay];
  const stateFromStores = require("initialize").useStateFromStores(items, () => overlay.syncProfileThemeWithUserTheme);
  let obj = require("initialize");
  let obj2 = require("native");
  const profileThemeValues = require("useProfileThemeValues").useProfileThemeValues(obj2.useThemeContext().theme);
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
  return noop.useMemo(() => {
    let result = null;
    if (null != closure_0) {
      result = null;
      if (null != overlay) {
        result = UserProfileGradientUtils.calculateOverlayedColor(tmp, tmp3);
      }
    }
    let result1 = null;
    if (null != closure_1) {
      result1 = null;
      if (null != overlay) {
        result1 = UserProfileGradientUtils.calculateOverlayedColor(tmp6, tmp8);
      }
    }
    return UserProfileGradientUtils.getUserProfileGradientContainerColors(result, result1, closure_2);
  }, items1);
};