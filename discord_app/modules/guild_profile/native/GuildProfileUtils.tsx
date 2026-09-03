// discord_app/modules/guild_profile/native/GuildProfileUtils.tsx
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import hasFetchedColors from "../../avatar/useAvatarColor.tsx";
import hasFetchedColorsDefault from "../../avatar/useAvatarColor.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../a11y/AccessibilityStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_profile/native/GuildProfileUtils.tsx");

export const useProfilePrimaryColor = function useProfilePrimaryColor(guildProfile, token) {
  let guildIconURL = null;
  if (null != guildProfile) {
    guildIconURL = null;
    if (null == guildProfile.brandColorPrimary) {
      let obj = getAvatarURLDefault;
      obj = { id: null, icon: null, size: 64 };
      ({ id: obj2[0], icon: obj2[1] } = guildProfile);
      guildIconURL = obj.getGuildIconURL(obj);
    }
  }
  let brandColorPrimary = hasFetchedColorsDefault(guildIconURL, token);
  brandColorPrimary = undefined;
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
        const obj2 = tmp8(7307)(obj);
        let num2 = 1;
        ({ h, s, l } = tmp8(7307)(obj).toHsl());
        if (closure_4.desaturateUserColors) {
          num2 = closure_4.saturation;
        }
        obj = { h: null, s: null, l: null };
        obj[0] = h;
        obj[1] = s * num2;
        obj[2] = l;
        const toHslResult = tmp8(7307)(obj).toHsl();
        return tmp8(7307)(obj).toHexString();
      } else {
        return null;
      }
      const obj7 = hasFetchedColors;
    }
    const obj5 = getAvatarURLDefault;
  }
};
