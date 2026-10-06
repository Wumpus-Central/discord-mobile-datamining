// === Module 7922: useUserProfileGradientColors ===

// Module 7922 (useUserProfileGradientColors)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import native from "native" /* 4595 */;
import useProfileThemeValues from "useProfileThemeValues" /* 6690 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 7912 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((secondaryColor, secondaryColor2, arg2) => {
  let overlay;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(7);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult6 = native;
  const theme = tmpResult6.useThemeContext().theme;
  const tmpResult7 = useProfileThemeValues;
  const profileThemeValues = tmpResult7.useProfileThemeValues(theme);
  if (stateFromStores) {
    let prop;
    if (profileThemeValues != null) {
      prop = profileThemeValues.overlaySyncedWithUserTheme;
    }
    overlay = prop;
  } else if (profileThemeValues != null) {
    overlay = profileThemeValues.overlay;
  }
  if (cResult[2] === arg2) {
    if (cResult[3] === secondaryColor) {
      if (cResult[4] === secondaryColor) {
        let tmp11;
        if (cResult[5] === overlay) {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
    }
  }
  let result = null;
  if (null != secondaryColor) {
    result = null;
    if (null != overlay) {
      const tmpResult8 = UserProfileGradientUtils;
      result = tmpResult8.calculateOverlayedColor(secondaryColor, overlay);
    }
  }
  let result1 = null;
  if (null != secondaryColor) {
    result1 = null;
    if (null != overlay) {
      const tmpResult9 = UserProfileGradientUtils;
      result1 = tmpResult9.calculateOverlayedColor(secondaryColor, overlay);
    }
  }
  const tmpResult10 = UserProfileGradientUtils;
  const userProfileGradientContainerColors = tmpResult10.getUserProfileGradientContainerColors(result, result1, arg2);
  cResult[2] = arg2;
  cResult[3] = secondaryColor;
  cResult[4] = secondaryColor;
  cResult[5] = overlay;
  cResult[6] = userProfileGradientContainerColors;
  tmp11 = userProfileGradientContainerColors;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let overlay;
  _require = arg0;
  dependencyMap = arg1;
  react = arg2;
  let obj = require("get initialized");
  const items = [overlay];
  const stateFromStores = obj.useStateFromStores(items, () => overlay.syncProfileThemeWithUserTheme);
  let obj2 = require("native");
  const theme = obj2.useThemeContext().theme;
  let obj3 = require("useProfileThemeValues");
  const profileThemeValues = obj3.useProfileThemeValues(theme);
  const tmp3 = profileThemeValues == null;
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
  return react.useMemo(() => {
    let result = null;
    if (null != closure_0) {
      result = null;
      if (null != overlay) {
        const obj = UserProfileGradientUtils;
        result = obj.calculateOverlayedColor(tmp, tmp3);
      }
    }
    let result1 = null;
    if (null != closure_1) {
      result1 = null;
      if (null != overlay) {
        const obj2 = UserProfileGradientUtils;
        result1 = obj2.calculateOverlayedColor(tmp6, tmp8);
      }
    }
    const obj3 = UserProfileGradientUtils;
    return obj3.getUserProfileGradientContainerColors(result, result1, closure_2);
  }, items1);
});
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileGradientColors.tsx");

export const useUserProfileGradientColors = tmp2;