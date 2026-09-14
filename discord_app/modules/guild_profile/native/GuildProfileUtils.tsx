// === Module 9321: guild_profile/GuildProfileUtils ===

// Module 9321 (guild_profile/GuildProfileUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import tinycolorDefault from "tinycolor" /* 7655 */;
import useAvatarColor from "useAvatarColor" /* 8249 */;
import _slicedToArray from "module_32" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

const useAvatarColorDefault = useAvatarColor;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/GuildProfileUtils.tsx");

export const useProfilePrimaryColor = function useProfilePrimaryColor(guildProfile, token) {
  let guildIconURL = null;
  if (null != guildProfile) {
    guildIconURL = null;
    if (null == guildProfile.brandColorPrimary) {
      ({ id: obj2.id, icon: obj2.icon } = guildProfile);
      guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 64 });
      const obj3 = { id: null, icon: null, size: 64 };
    }
  }
  let brandColorPrimary = useAvatarColorDefault(guildIconURL, token);
  let brandColorPrimary1;
  if (guildProfile != null) {
    brandColorPrimary1 = guildProfile.brandColorPrimary;
  }
  if (null != brandColorPrimary1) {
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
    ({ id: obj6.id, icon: obj6.icon } = guildProfileFromInvite);
    const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 64 });
    if (null == guildIconURL) {
      return null;
    } else {
      useAvatarColor.maybeFetchColors(guildIconURL);
      const useColorStore = useAvatarColor.useColorStore;
      const tmp13 = useColorStore.getState().palette[guildIconURL];
      let first;
      if (tmp13 != null) {
        first = tmp13[0];
      }
      if (null != first) {
        [tmp4, tmp5, tmp6] = first;
        const obj = { r: tmp4, g: tmp5, b: tmp6 };
        const tmp3 = _slicedToArray(first, 3);
        const obj2 = tinycolorDefault(obj);
        let num2 = 1;
        ({ h, s, l } = tinycolorDefault(obj).toHsl());
        if (AccessibilityStore.desaturateUserColors) {
          num2 = AccessibilityStore.saturation;
        }
        const obj9 = { h, s: s * num2, l };
        const toHslResult = tinycolorDefault(obj).toHsl();
        return tinycolorDefault(obj9).toHexString();
      } else {
        return null;
      }
    }
    const obj3 = { id: null, icon: null, size: 64 };
  }
};