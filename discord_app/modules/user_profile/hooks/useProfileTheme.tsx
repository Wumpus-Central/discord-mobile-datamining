// === Module 8227: useProfileTheme ===

// Module 8227 (useProfileTheme)
import initialize from "initialize" /* 504 */;
import shims from "shims" /* 575 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import shared from "shared" /* 4411 */;
import useThemeDefault from "useTheme" /* 4495 */;
import useAvatarColor from "useAvatarColor" /* 8132 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 8229 */;
import _slicedToArray from "module_32" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const useEffectiveThemeOverride = fn(8228).useEffectiveThemeOverride;
const ThemeTypes = fn(1074).ThemeTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

export default function useProfileTheme(arg0) {
  ({ user, displayProfile, pendingAvatarSrc } = arg0);
  ({ pendingThemeColors, isPreview, forceUserTheme } = arg0);
  const tmp2 = useThemeDefault();
  const tmp3 = useEffectiveThemeOverride();
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  if (pendingAvatarSrc == null) {
    let avatarURL;
    if (user != null) {
      let guildId;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      avatarURL = user.getAvatarURL(guildId, 80);
    }
    pendingAvatarSrc = avatarURL;
  }
  let tmp4Result = shims;
  const result = tmp4Result.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  tmp4Result = useAvatarColor;
  _slicedToArray(tmp4Result.useAvatarColors(pendingAvatarSrc, result, false), 2);
  if (null != tmp3) {
    return tmp3;
  } else {
    let canEditThemes;
    if (displayProfile != null) {
      canEditThemes = displayProfile.canEditThemes;
    }
    if (!canEditThemes) {
      if (!isPreview) {
        obj = { theme: tmp2, primaryColor: null, secondaryColor: null };
        return obj;
      }
    }
    let previewThemeColors;
    if (displayProfile != null) {
      previewThemeColors = displayProfile.getPreviewThemeColors(pendingThemeColors);
    }
    let first;
    if (previewThemeColors != null) {
      first = previewThemeColors[0];
    }
    if (first == null) {
      first = utils_ColorUtils.hex2int(tmp10);
      const tmp4Result1 = utils_ColorUtils;
    }
    let hex2intResult;
    if (previewThemeColors != null) {
      hex2intResult = previewThemeColors[1];
    }
    if (hex2intResult == null) {
      hex2intResult = utils_ColorUtils.hex2int(tmp11);
      const tmp4Result2 = utils_ColorUtils;
    }
    let tmp16 = tmp2;
    if (!stateFromStores) {
      tmp16 = tmp2;
      if (!forceUserTheme) {
        let profileTheme = UserProfileGradientUtils.getProfileTheme(first);
        if (profileTheme == null) {
          profileTheme = tmp2;
        }
        tmp16 = profileTheme;
        const tmp4Result3 = UserProfileGradientUtils;
      }
    }
    if (tmp16 !== ThemeTypes.DARK) {
      let isThemeLightResult = tmp16 === ThemeTypes.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = shared.isThemeLight(tmp2);
        const tmp4Result4 = shared;
      }
      let DARKER = tmp16;
      if (isThemeLightResult) {
        DARKER = ThemeTypes.DARKER;
      }
    } else {
      shared;
      DARKER = tmp2;
    }
    obj = { theme: DARKER, primaryColor: first, secondaryColor: hex2intResult };
    return obj;
  }
};