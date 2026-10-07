// === Module 7922: useUserProfileGradientColors ===

// Module 7922 (useUserProfileGradientColors)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import native from "native" /* 4595 */;
import useProfileThemeValues from "useProfileThemeValues" /* 6690 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 7912 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileGradientColors.tsx");

export const useUserProfileGradientColors = ReactCompilerGating.isReactCompilerEnabled() ? ((secondaryColor, secondaryColor, arg2) => {
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return AccessibilityStore.syncProfileThemeWithUserTheme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  const tmpResult = initialize;
  const tmpResult6 = native;
  const profileThemeValues = useProfileThemeValues.useProfileThemeValues(tmpResult6.useThemeContext().theme);
  if (stateFromStores) {
    let prop;
    if (!tmp9) {
      prop = profileThemeValues.overlaySyncedWithUserTheme;
    }
    let overlay = prop;
  } else if (!tmp9) {
    overlay = profileThemeValues.overlay;
  }
  if (cResult[2] === arg2) {
    if (cResult[3] === secondaryColor) {
      if (cResult[4] === secondaryColor) {
        if (cResult[5] === overlay) {
          let tmp11 = cResult[6];
        }
        return tmp11;
      }
    }
  }
  let result = null;
  if (null != secondaryColor) {
    result = null;
    if (null != overlay) {
      result = UserProfileGradientUtils.calculateOverlayedColor(secondaryColor, overlay);
      const tmpResult8 = UserProfileGradientUtils;
    }
  }
  let result1 = null;
  if (null != secondaryColor) {
    result1 = null;
    if (null != overlay) {
      result1 = UserProfileGradientUtils.calculateOverlayedColor(secondaryColor, overlay);
      const tmpResult9 = UserProfileGradientUtils;
    }
  }
  const tmpResult7 = useProfileThemeValues;
  const userProfileGradientContainerColors = UserProfileGradientUtils.getUserProfileGradientContainerColors(result, result1, arg2);
  cResult[2] = arg2;
  cResult[3] = secondaryColor;
  cResult[4] = secondaryColor;
  cResult[5] = overlay;
  cResult[6] = userProfileGradientContainerColors;
  tmp11 = userProfileGradientContainerColors;
  const tmpResult10 = UserProfileGradientUtils;
}) : ((arg0, arg1, arg2) => {
  _require = arg0;
  dependencyMap = arg1;
  noop = arg2;
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
  const items1 = [arg2, arg0, arg1, overlay];
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
});