// discord_app/modules/guild_profile/native/components/GuildProfileView.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import themes from "../../../../design/utils/shared/themes.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import utils_getDevicePixelRatioDefault from "../../../../utils/getDevicePixelRatio.web.tsx";
import guild_profile_GuildProfileUtils from "../GuildProfileUtils.tsx";
import GuildProfileHeaderDefault from "GuildProfileHeader.tsx";
import GuildProfileGamesDefault from "GuildProfileGames.tsx";
import GuildProfileTraitsDefault from "GuildProfileTraits.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  colorBanner: { height: 140, width: "100%" },
  imageBanner: { height: 140, width: "100%", objectFit: "cover" },
  body: { marginTop: 12, paddingHorizontal: 16, gap: 16 },
  error: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 },
  buttonContainer: { marginTop: 160 },
  header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 },
  avatarBackground: null,
  restrictedAcronym: null,
};
let size = {
  width: 86,
  height: 86,
  borderRadius: 28.666666666666668,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
obj2.avatarBackground = size;
obj2.restrictedAcronym = { fontSize: 24 };
const styles = createStyles.createStyles(obj2);
const frozen = Object.freeze({ START: { x: 0, y: 1 }, END: { x: 1.5, y: 0 } });
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildProfile) => {
      const cResult = guildProfile(576).c(12);
      guildProfile = guildProfile.guildProfile;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildProfile) {
        const fn = function l() {
          guild = GuildStore.getGuild(guildProfile.id);
          if (guild == null) {
            guild = GuildRecordUtils.fromGuildProfile(guildProfile);
          }
          const features = guild.features;
          return features.has(GuildFeatures.DISCOVERABLE);
        };
        cResult[1] = guildProfile;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = guildProfile(576);
      const stateFromStores = guildProfile(504).useStateFromStores(first, tmp6);
      const width = useWindowDimensionsDefault().width;
      const tmp9 = styles();
      if (stateFromStores) {
        if (null != guildProfile.customBanner) {
          if (cResult[3] === guildProfile.customBanner) {
            if (cResult[4] === guildProfile.id) {
              if (cResult[5] === width) {
                let tmp15 = cResult[6];
              }
              if (cResult[7] === tmp15) {
                if (cResult[8] === tmp9.imageBanner) {
                  let tmp17 = cResult[9];
                }
                return tmp17;
              }
              const obj2 = { style: tmp9.imageBanner, source: tmp15 };
              const tmp20 = closure_8(closure_5, obj2);
              cResult[7] = tmp15;
              cResult[8] = tmp9.imageBanner;
              cResult[9] = tmp20;
              tmp17 = tmp20;
            }
          }
          const obj3 = { id: null, splash: null, size: null };
          ({ id: obj5.id, customBanner: obj5.splash } = guildProfile);
          obj3.size = utils_getDevicePixelRatioDefault() * width;
          const guildDiscoverySplashSource = AvatarUtilsDefault.getGuildDiscoverySplashSource(obj3);
          cResult[3] = guildProfile.customBanner;
          cResult[4] = guildProfile.id;
          cResult[5] = width;
          cResult[6] = guildDiscoverySplashSource;
          tmp15 = guildDiscoverySplashSource;
          const tmp8Result = AvatarUtilsDefault;
        }
      }
      if (cResult[10] !== guildProfile) {
        const obj4 = { guildProfile };
        const tmp14 = closure_8(closure_13, obj4);
        cResult[10] = guildProfile;
        cResult[11] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[11];
      }
      return tmp11;
    }
  : (guildProfile) => {
      guildProfile = guildProfile.guildProfile;
      const items = [GuildStore];
      const stateFromStores = guildProfile(504).useStateFromStores(items, () => {
        guild = GuildStore.getGuild(guildProfile.id);
        if (guild == null) {
          guild = GuildRecordUtils.fromGuildProfile(guildProfile);
        }
        const features = guild.features;
        return features.has(GuildFeatures.DISCOVERABLE);
      });
      if (stateFromStores) {
        if (null != guildProfile.customBanner) {
          const obj2 = { id: null, splash: null, size: null };
          ({ id: obj3.id, customBanner: obj3.splash } = guildProfile);
          obj2.size = utils_getDevicePixelRatioDefault() * useWindowDimensionsDefault().width;
          const obj4 = { style: tmp4.imageBanner, source: AvatarUtilsDefault.getGuildDiscoverySplashSource(obj2) };
          return closure_8(closure_5, obj4);
        }
      }
      return closure_8(closure_13, { guildProfile });
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildProfile) => {
      const cResult = c.c(6);
      const tmp4 = styles();
      const tmp6 = useThemeDefault();
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
      const profilePrimaryColor = guild_profile_GuildProfileUtils.useProfilePrimaryColor(
        guildProfile.guildProfile,
        token,
      );
      if (cResult[0] === profilePrimaryColor) {
        if (cResult[1] === tmp6) {
          if (cResult[3] === tmp4.colorBanner) {
            if (cResult[4] === tmp10) {
              let tmp13 = cResult[5];
            }
            return tmp13;
          }
          const obj4 = { style: tmp9, start: null, end: null, colors: null };
          ({ START: obj6.start, END: obj6.end } = frozen);
          obj4.colors = cResult[2];
          const tmp16 = closure_1_8(LinearGradientDefault, obj4);
          cResult[3] = tmp4.colorBanner;
          cResult[4] = cResult[2];
          cResult[5] = tmp16;
          tmp13 = tmp16;
        }
      }
      const items = [profilePrimaryColor];
      const tmpResult = themes;
      const tmpResult2 = native;
      if (isThemeDarkResult) {
        let brightenColorResult = tmpResult2.brightenColor(profilePrimaryColor, 0.8);
      } else {
        brightenColorResult = tmpResult2.darkenColor(profilePrimaryColor, 0.8);
      }
      items[1] = brightenColorResult;
      cResult[0] = profilePrimaryColor;
      cResult[1] = tmp6;
      cResult[2] = items;
      isThemeDarkResult = themes.isThemeDark(tmp6);
    }
  : (guildProfile) => {
      const tmp = styles();
      const tmp2 = useThemeDefault();
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
      const profilePrimaryColor = guild_profile_GuildProfileUtils.useProfilePrimaryColor(
        guildProfile.guildProfile,
        token,
      );
      const obj3 = { style: tmp.colorBanner, start: frozen.START, end: frozen.END, colors: null };
      const items = [profilePrimaryColor];
      const tmp6 = LinearGradientDefault;
      const obj5 = native;
      if (isThemeDarkResult) {
        let brightenColorResult = obj5.brightenColor(profilePrimaryColor, 0.8);
      } else {
        brightenColorResult = obj5.darkenColor(profilePrimaryColor, 0.8);
      }
      items[1] = brightenColorResult;
      obj3.colors = items;
      return closure_1_8(tmp6, obj3);
    };
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
function getBackgroundForProfile(theme, token) {
  const items = [token];
  const obj2 = native;
  if (isThemeDarkResult) {
    let brightenColorResult = obj2.brightenColor(token, 0.8);
  } else {
    brightenColorResult = obj2.darkenColor(token, 0.8);
  }
  items[1] = brightenColorResult;
  return items;
}
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildProfile) => {
      const cResult = c.c(23);
      guildProfile = guildProfile.guildProfile;
      const tmp4 = styles();
      let tmp5 = null;
      if (null != guildProfile) {
        if (cResult[0] === guildProfile.icon) {
          if (cResult[1] === guildProfile.id) {
            let tmp6 = cResult[2];
          }
          let uri = null;
          if (typeof tmp6 !== "number") {
            uri = tmp6.uri;
          }
          tmp5 = uri;
        }
        ({ id: obj3.id, icon: obj3.icon } = guildProfile);
        const guildIconSource = AvatarUtilsDefault.getGuildIconSource({
          id: null,
          icon: null,
          size: 96,
          canAnimate: true,
        });
        cResult[0] = guildProfile.icon;
        cResult[1] = guildProfile.id;
        cResult[2] = guildIconSource;
        tmp6 = guildIconSource;
        const obj4 = { id: null, icon: null, size: 96, canAnimate: true };
      }
      if (cResult[3] !== guildProfile) {
        const obj5 = { guildProfile };
        const tmp13 = closure_1_8(closure_12, obj5);
        cResult[3] = guildProfile;
        cResult[4] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        if (cResult[6] === guildProfile) {
          let tmp14 = cResult[7];
        }
        if (cResult[8] !== guildProfile.description) {
          let tmp17 = null != guildProfile.description;
          if (tmp17) {
            tmp17 = guildProfile.description.length > 0;
          }
          if (tmp17) {
            const obj6 = { variant: "text-md/medium", color: "text-subtle", children: guildProfile.description };
            tmp17 = closure_1_8(Text_Text.Text, obj6);
          }
          cResult[8] = guildProfile.description;
          cResult[9] = tmp17;
          let tmp16 = tmp17;
        } else {
          tmp16 = cResult[9];
        }
        if (cResult[10] !== guildProfile) {
          const obj7 = { profile: guildProfile };
          const tmp23 = closure_1_8(GuildProfileGamesDefault, obj7);
          const obj8 = { profile: guildProfile };
          const tmp24 = closure_1_8(GuildProfileTraitsDefault, obj8);
          cResult[10] = guildProfile;
          cResult[11] = tmp23;
          cResult[12] = tmp24;
          let tmp20 = tmp24;
          let tmp19 = tmp23;
        } else {
          tmp19 = cResult[11];
          tmp20 = cResult[12];
        }
        if (cResult[13] === tmp4.body) {
          if (cResult[14] === tmp16) {
            if (cResult[15] === tmp19) {
              if (cResult[16] === tmp20) {
                let tmp25 = cResult[17];
              }
              if (cResult[18] === tmp4.container) {
                if (cResult[19] === tmp10) {
                  if (cResult[20] === tmp14) {
                    if (cResult[21] === tmp25) {
                      let tmp29 = cResult[22];
                    }
                    return tmp29;
                  }
                }
              }
              const obj9 = { style: tmp4.container, children: null };
              const items = [tmp10, tmp14, tmp25];
              obj9.children = items;
              const tmp32 = options(React4, obj9);
              cResult[18] = tmp4.container;
              cResult[19] = tmp10;
              cResult[20] = tmp14;
              cResult[21] = tmp25;
              cResult[22] = tmp32;
              tmp29 = tmp32;
            }
          }
        }
        const obj16 = { style: tmp4.body, children: null };
        const items1 = [tmp16, tmp19, tmp20];
        obj16.children = items1;
        const tmp28 = options(React4, obj16);
        cResult[13] = tmp4.body;
        cResult[14] = tmp16;
        cResult[15] = tmp19;
        cResult[16] = tmp20;
        cResult[17] = tmp28;
        tmp25 = tmp28;
      }
      const tmp15 = closure_1_8(GuildProfileHeaderDefault, { profile: guildProfile, guildIconSource: tmp5 });
      cResult[5] = tmp5;
      cResult[6] = guildProfile;
      cResult[7] = tmp15;
      tmp14 = tmp15;
    }
  : (guildProfile) => {
      guildProfile = guildProfile.guildProfile;
      const tmp = styles();
      const items = [guildProfile];
      const obj = { style: tmp.container, children: null };
      const memo = noop.useMemo(() => {
        if (null == guildProfile) {
          return null;
        } else {
          ({ id: obj2.id, icon: obj2.icon } = guildProfile);
          const guildIconSource = AvatarUtilsDefault.getGuildIconSource({
            id: null,
            icon: null,
            size: 96,
            canAnimate: true,
          });
          let uri = null;
          if (typeof guildIconSource !== "number") {
            uri = guildIconSource.uri;
          }
          return uri;
        }
      }, items);
      const items1 = [
        closure_8(closure_12, { guildProfile }),
        closure_8(GuildProfileHeaderDefault, { profile: guildProfile, guildIconSource: memo }),
      ];
      const obj2 = { style: tmp.body, children: null };
      let tmp5Result = null != guildProfile.description;
      if (tmp5Result) {
        tmp5Result = guildProfile.description.length > 0;
      }
      if (tmp5Result) {
        const obj3 = { variant: "text-md/medium", color: "text-subtle", children: guildProfile.description };
        tmp5Result = closure_8(guildProfile(4892).Text, obj3);
      }
      const items2 = [
        tmp5Result,
        closure_8(GuildProfileGamesDefault, { profile: guildProfile }),
        closure_8(GuildProfileTraitsDefault, { profile: guildProfile }),
      ];
      obj2.children = items2;
      items1[2] = closure_9(closure_4, obj2);
      obj.children = items1;
      return closure_9(closure_4, obj);
    };
export { getBackgroundForProfile };
export const useStyles = styles;
export const DiagonalGradient = frozen;
