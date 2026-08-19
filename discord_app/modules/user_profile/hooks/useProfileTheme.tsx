// discord_app/modules/user_profile/hooks/useProfileTheme.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import int2hslRaw from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import unsafe_getRawColor from "../../../../discord_common/js/packages/tokens/shims.native.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import hasFetchedColors from "../../avatar/useAvatarColor.tsx";
import getProfileTheme from "../UserProfileGradientUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import { useEffectiveThemeOverride } from "useProfileThemeOverrideStore.tsx";
import { ThemeTypes } from "../../../Constants.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

export default function useProfileTheme(arg0) {
  ({ user, displayProfile, pendingAvatarSrc } = arg0);
  ({ pendingThemeColors, isPreview, forceUserTheme } = arg0);
  const tmp2 = useThemeDefault();
  const tmp3 = useEffectiveThemeOverride();
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
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
  let tmp4Result = unsafe_getRawColor;
  const result = tmp4Result.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  tmp4Result = hasFetchedColors;
  callback(tmp4Result.useAvatarColors(pendingAvatarSrc, result, false), 2);
  if (null != tmp3) {
    return tmp3;
  } else {
    let canEditThemes;
    if (displayProfile != null) {
      canEditThemes = displayProfile.canEditThemes;
    }
    if (!canEditThemes) {
      if (!isPreview) {
        obj = { theme: null, primaryColor: null, secondaryColor: null };
        obj[0] = tmp2;
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
      first = int2hslRaw.hex2int(tmp10);
      const tmp4Result1 = int2hslRaw;
    }
    let hex2intResult;
    if (previewThemeColors != null) {
      hex2intResult = previewThemeColors[1];
    }
    if (hex2intResult == null) {
      hex2intResult = int2hslRaw.hex2int(tmp11);
      const tmp4Result2 = int2hslRaw;
    }
    let tmp16 = tmp2;
    if (!stateFromStores) {
      tmp16 = tmp2;
      if (!forceUserTheme) {
        let profileTheme = getProfileTheme.getProfileTheme(first);
        if (profileTheme == null) {
          profileTheme = tmp2;
        }
        tmp16 = profileTheme;
        const tmp4Result3 = getProfileTheme;
      }
    }
    if (tmp16 !== ThemeTypes.DARK) {
      let isThemeLightResult = tmp16 === ThemeTypes.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = AccessibilityAnnouncer.isThemeLight(tmp2);
        const tmp4Result4 = AccessibilityAnnouncer;
      }
      let DARKER = tmp16;
      if (isThemeLightResult) {
        DARKER = ThemeTypes.DARKER;
      }
    } else {
      AccessibilityAnnouncer;
      DARKER = tmp2;
    }
    obj = { theme: null, primaryColor: null, secondaryColor: null };
    obj[0] = DARKER;
    obj[1] = first;
    obj[2] = hex2intResult;
    return obj;
  }
};