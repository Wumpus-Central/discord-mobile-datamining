// discord_app/modules/user_profile/hooks/useProfileTheme.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../a11y/AccessibilityStore.tsx";
import { useEffectiveThemeOverride } from "useProfileThemeOverrideStore.tsx";
import { ThemeTypes } from "../../../Constants.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

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
  let tmp4Result = tmp4(711);
  const result = tmp4Result.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  tmp4Result = tmp4(8390);
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
      first = tmp4(688).hex2int(tmp10);
      const tmp4Result1 = tmp4(688);
    }
    let hex2intResult;
    if (previewThemeColors != null) {
      hex2intResult = previewThemeColors[1];
    }
    if (hex2intResult == null) {
      hex2intResult = tmp4(688).hex2int(tmp11);
      const tmp4Result2 = tmp4(688);
    }
    let tmp16 = tmp2;
    if (!stateFromStores) {
      tmp16 = tmp2;
      if (!forceUserTheme) {
        let profileTheme = tmp4(8468).getProfileTheme(first);
        if (profileTheme == null) {
          profileTheme = tmp2;
        }
        tmp16 = profileTheme;
        const tmp4Result3 = tmp4(8468);
      }
    }
    if (tmp16 !== ThemeTypes.DARK) {
      let isThemeLightResult = tmp16 === tmp18.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = tmp4(1363).isThemeLight(tmp2);
        const tmp4Result4 = tmp4(1363);
      }
      let DARKER = tmp16;
      if (isThemeLightResult) {
        DARKER = tmp18.DARKER;
      }
    } else {
      DARKER = tmp2;
      const tmp4Result5 = tmp4(1363);
    }
    obj = { theme: null, primaryColor: null, secondaryColor: null };
    obj[0] = DARKER;
    obj[1] = first;
    obj[2] = hex2intResult;
    return obj;
  }
};