// discord_app/modules/guild_profile/native/GuildProfileUtils.tsx
import _slicedToArray from "_slicedToArray";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const require = arg1;
const result = require("getAvatarURL").fileFinishedImporting("modules/guild_profile/native/GuildProfileUtils.tsx");

export const useProfilePrimaryColor = function useProfilePrimaryColor(guildProfile, token) {
  let guildIconURL = null;
  if (null != guildProfile) {
    guildIconURL = null;
    if (null == guildProfile.brandColorPrimary) {
      let obj = require("../../../utils/AvatarUtils.tsx");
      obj = { id: null, icon: null, size: 64 };
      ({ id: obj2[0], icon: obj2[1] } = guildProfile);
      guildIconURL = obj.getGuildIconURL(obj);
    }
  }
  let brandColorPrimary = require("../../avatar/useAvatarColor.tsx")(guildIconURL, token);
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
  let h;
  let l;
  let s;
  let tmp4;
  let tmp5;
  let tmp6;
  if (null == guildProfileFromInvite) {
    return null;
  } else if (null != guildProfileFromInvite.brandColorPrimary) {
    return guildProfileFromInvite.brandColorPrimary;
  } else {
    let obj = { id: null, icon: null, size: 64 };
    ({ id: obj6[0], icon: obj6[1] } = guildProfileFromInvite);
    const guildIconURL = require("../../../utils/AvatarUtils.tsx").getGuildIconURL(obj);
    if (null == guildIconURL) {
      return null;
    } else {
      require("../../avatar/useAvatarColor.tsx") /* hasFetchedColors */.maybeFetchColors(guildIconURL);
      const useColorStore = require("../../avatar/useAvatarColor.tsx") /* hasFetchedColors */.useColorStore;
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
        const obj2 = tmp8(6920)(obj);
        let num2 = 1;
        ({ h, s, l } = tmp8(6920)(obj).toHsl());
        if (maybeApplyNoTextColorForLightCustomTheme.desaturateUserColors) {
          num2 = maybeApplyNoTextColorForLightCustomTheme.saturation;
        }
        obj = { h: null, s: null, l: null };
        obj[0] = h;
        obj[1] = s * num2;
        obj[2] = l;
        const toHslResult = tmp8(6920)(obj).toHsl();
        return tmp8(6920)(obj).toHexString();
      } else {
        return null;
      }
      const obj7 = require("../../avatar/useAvatarColor.tsx") /* hasFetchedColors */;
    }
    const obj5 = require("../../../utils/AvatarUtils.tsx");
  }
};