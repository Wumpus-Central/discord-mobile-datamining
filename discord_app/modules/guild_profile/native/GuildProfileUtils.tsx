// === Module 9515: useProfilePrimaryColor ===

// Module 9515 (useProfilePrimaryColor)
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import tinycolorDefault from "tinycolor" /* 5311 */;
import hasFetchedColors from "hasFetchedColors" /* 8345 */;
import hasFetchedColorsDefault from "hasFetchedColors" /* 8345 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_profile/native/GuildProfileUtils.tsx");

export const useProfilePrimaryColor = function useProfilePrimaryColor(guildProfile, token) {
  let guildIconURL = null;
  if (null != guildProfile) {
    guildIconURL = null;
    if (null == guildProfile.brandColorPrimary) {
      const obj = { id: null, icon: null, size: 64 };
      ({ id: obj2[0], icon: obj2[1] } = guildProfile);
      guildIconURL = obj.getGuildIconURL(obj);
    }
  }
  hasFetchedColorsDefault(guildIconURL, token);
  let brandColorPrimary;
  if (guildProfile != null) {
    brandColorPrimary = guildProfile.brandColorPrimary;
  }
  if (null != brandColorPrimary) {
    brandColorPrimary = guildProfile.brandColorPrimary;
  }
  return brandColorPrimary;
};
export const getProfilePrimaryColor = function getProfilePrimaryColor(guildProfileFromInvite) {
  if (null == guildProfileFromInvite) {
    return null;
  } else if (null != guildProfileFromInvite.brandColorPrimary) {
    return guildProfileFromInvite.brandColorPrimary;
  } else {
    let obj = { id: null, icon: null, size: 64 };
    ({ id: obj6[0], icon: obj6[1] } = guildProfileFromInvite);
    const guildIconURL = getAvatarURLDefault.getGuildIconURL(obj);
    if (null == guildIconURL) {
      return null;
    } else {
      hasFetchedColors.maybeFetchColors(guildIconURL);
      const useColorStore = hasFetchedColors.useColorStore;
      const tmp13 = useColorStore.getState().palette[guildIconURL];
      let first;
      if (tmp13 != null) {
        first = tmp13[0];
      }
      if (null != first) {
        [tmp4, tmp5, tmp6] = callback(first, 3);
        obj = { r: null, g: null, b: null };
        obj[0] = tmp4;
        obj[1] = tmp5;
        obj[2] = tmp6;
        const tmp3 = callback(first, 3);
        const obj2 = tinycolorDefault(obj);
        let num2 = 1;
        ({ h, s, l } = tinycolorDefault(obj).toHsl());
        if (closure_4.desaturateUserColors) {
          num2 = closure_4.saturation;
        }
        obj = { h: null, s: null, l: null };
        obj[0] = h;
        obj[1] = s * num2;
        obj[2] = l;
        const toHslResult = tinycolorDefault(obj).toHsl();
        return tinycolorDefault(obj).toHexString();
      } else {
        return null;
      }
    }
  }
};