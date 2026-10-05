// discord_app/modules/guild_profile/native/GuildProfileUtils.tsx
import react from "../../../../_runtime/00576_react.js";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import _modDef7063 from "../../../../_runtime/metro/07063__.js";
import useAvatarColor from "../../avatar/useAvatarColor.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useAvatarColorDefault = useAvatarColor;
let brandColorPrimary;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (brandColorPrimary, arg1) => {
      let tmp3;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== brandColorPrimary) {
        let guildIconURL = null;
        if (null != brandColorPrimary) {
          guildIconURL = null;
          if (null == brandColorPrimary.brandColorPrimary) {
            const obj4 = { id: null, icon: null, size: 64 };
            ({ id: obj3.id, icon: obj3.icon } = brandColorPrimary);
            const obj2 = AvatarUtilsDefault;
            guildIconURL = obj2.getGuildIconURL(obj4);
          }
        }
        cResult[0] = brandColorPrimary;
        cResult[1] = guildIconURL;
        tmp3 = guildIconURL;
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
  : (brandColorPrimary, arg1) => {
      let guildIconURL = null;
      if (null != brandColorPrimary) {
        guildIconURL = null;
        if (null == brandColorPrimary.brandColorPrimary) {
          const obj3 = { id: null, icon: null, size: 64 };
          ({ id: obj2.id, icon: obj2.icon } = brandColorPrimary);
          const obj = AvatarUtilsDefault;
          guildIconURL = obj.getGuildIconURL(obj3);
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
const result = size.fileFinishedImporting("modules/guild_profile/native/GuildProfileUtils.tsx");

export const useProfilePrimaryColor = tmp2;
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
    const obj3 = { id: null, icon: null, size: 64 };
    ({ id: obj6.id, icon: obj6.icon } = guildProfileFromInvite);
    const obj5 = AvatarUtilsDefault;
    const guildIconURL = obj5.getGuildIconURL(obj3);
    if (null == guildIconURL) {
      return null;
    } else {
      const obj7 = useAvatarColor;
      obj7.maybeFetchColors(guildIconURL);
      const useColorStore = useAvatarColor.useColorStore;
      const tmp13 = useColorStore.getState().palette[guildIconURL];
      let first;
      if (tmp13 != null) {
        first = tmp13[0];
      }
      if (null != first) {
        [tmp4, tmp5, tmp6] = first;
        const obj = { r: tmp4, g: tmp5, b: tmp6 };
        _slicedToArray(first, 3);
        const obj2 = _modDef7063(obj);
        let num2 = 1;
        ({ h, s, l } = obj2.toHsl());
        obj2.toHsl();
        if (AccessibilityStore.desaturateUserColors) {
          num2 = AccessibilityStore.saturation;
        }
        const obj9 = { h, s: s * num2, l };
        const obj4 = _modDef7063(obj9);
        return obj4.toHexString();
      } else {
        return null;
      }
    }
  }
};
