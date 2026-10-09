// discord_app/modules/guild_profile/native/GuildProfileUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import tinycolorDefault from "../../../../_runtime/07267_tinycolor.js";
import useAvatarColor from "../../avatar/useAvatarColor.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const useAvatarColorDefault = useAvatarColor;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/GuildProfileUtils.tsx");

export const useProfilePrimaryColor = ReactCompilerGating.isReactCompilerEnabled()
  ? function useProfilePrimaryColor(brandColorPrimary, arg1) {
      const cResult = c.c(2);
      if (cResult[0] !== brandColorPrimary) {
        let guildIconURL = null;
        if (null != brandColorPrimary) {
          guildIconURL = null;
          if (null == brandColorPrimary.brandColorPrimary) {
            ({ id: obj3.id, icon: obj3.icon } = brandColorPrimary);
            guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 64 });
            const obj4 = { id: null, icon: null, size: 64 };
          }
        }
        cResult[0] = brandColorPrimary;
        cResult[1] = guildIconURL;
        let tmp3 = guildIconURL;
      } else {
        tmp3 = cResult[1];
      }
      brandColorPrimary = useAvatarColorDefault(tmp3, arg1);
      let brandColorPrimary1;
      if (brandColorPrimary != null) {
        brandColorPrimary1 = brandColorPrimary.brandColorPrimary;
      }
      if (null != brandColorPrimary1) {
        brandColorPrimary = brandColorPrimary.brandColorPrimary;
      }
      return brandColorPrimary;
    }
  : function useProfilePrimaryColor(brandColorPrimary, arg1) {
      let guildIconURL = null;
      if (null != brandColorPrimary) {
        guildIconURL = null;
        if (null == brandColorPrimary.brandColorPrimary) {
          ({ id: obj2.id, icon: obj2.icon } = brandColorPrimary);
          guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 64 });
          const obj3 = { id: null, icon: null, size: 64 };
        }
      }
      brandColorPrimary = useAvatarColorDefault(guildIconURL, arg1);
      let brandColorPrimary1;
      if (brandColorPrimary != null) {
        brandColorPrimary1 = brandColorPrimary.brandColorPrimary;
      }
      if (null != brandColorPrimary1) {
        brandColorPrimary = brandColorPrimary.brandColorPrimary;
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
