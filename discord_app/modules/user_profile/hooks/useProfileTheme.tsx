// discord_app/modules/user_profile/hooks/useProfileTheme.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

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
  let tmp4Result = tmp4(575);
  const result = tmp4Result.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  tmp4Result = tmp4(8132);
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
      first = tmp4(1091).hex2int(tmp10);
      const tmp4Result1 = tmp4(1091);
    }
    let hex2intResult;
    if (previewThemeColors != null) {
      hex2intResult = previewThemeColors[1];
    }
    if (hex2intResult == null) {
      hex2intResult = tmp4(1091).hex2int(tmp11);
      const tmp4Result2 = tmp4(1091);
    }
    let tmp16 = tmp2;
    if (!stateFromStores) {
      tmp16 = tmp2;
      if (!forceUserTheme) {
        let profileTheme = tmp4(8229).getProfileTheme(first);
        if (profileTheme == null) {
          profileTheme = tmp2;
        }
        tmp16 = profileTheme;
        const tmp4Result3 = tmp4(8229);
      }
    }
    if (tmp16 !== ThemeTypes.DARK) {
      let isThemeLightResult = tmp16 === tmp18.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = tmp4(4411).isThemeLight(tmp2);
        const tmp4Result4 = tmp4(4411);
      }
      let DARKER = tmp16;
      if (isThemeLightResult) {
        DARKER = tmp18.DARKER;
      }
    } else {
      DARKER = tmp2;
      const tmp4Result5 = tmp4(4411);
    }
    obj = { theme: DARKER, primaryColor: first, secondaryColor: hex2intResult };
    return obj;
  }
}
