// === Module 9399: GuildProfileView ===

// Module 9399 (GuildProfileView)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import useToken from "useToken" /* 4580 */;
import themes from "themes" /* 4587 */;
import native from "native" /* 4589 */;
import useThemeDefault from "useTheme" /* 4791 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 9400 */;
import guild_profile_GuildProfileUtils from "guild_profile/GuildProfileUtils" /* 9401 */;
import GuildProfileHeaderDefault from "GuildProfileHeader" /* 9402 */;
import GuildProfileGamesDefault from "GuildProfileGames" /* 9404 */;
import GuildProfileTraitsDefault from "GuildProfileTraits" /* 9411 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let guildProfile;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let size;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, colorBanner: { height: 140, width: "100%" }, imageBanner: { height: 140, width: "100%", objectFit: "cover" }, body: { marginTop: 12, paddingHorizontal: 16, gap: 16 }, error: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, buttonContainer: { marginTop: 160 }, header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 }, avatarBackground: size, restrictedAcronym: { fontSize: 24 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
size = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
const styles = createStyles(obj);
const frozen = Object.freeze({ START: { x: 0, y: 1 }, END: { x: 1.5, y: 0 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildProfile) => {
  let first;
  let tmp11;
  let tmp6;
  let obj = guildProfile(576);
  const cResult = obj.c(12);
  const tmp = guildProfile;
  guildProfile = guildProfile.guildProfile;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildProfile) {
    const fn = function l() {
      let guild = GuildStore.getGuild(guildProfile.id);
      if (guild == null) {
        const obj = GuildRecordUtils;
        guild = obj.fromGuildProfile(guildProfile);
      }
      const features = guild.features;
      return features.has(GuildFeatures.DISCOVERABLE);
    };
    cResult[1] = guildProfile;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const width = useWindowDimensionsDefault().width;
  const tmp9 = styles();
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      if (cResult[3] === guildProfile.customBanner) {
        if (cResult[4] === guildProfile.id) {
          let tmp15;
          if (cResult[5] === width) {
            tmp15 = cResult[6];
          }
          if (cResult[7] === tmp15) {
            let tmp18;
            if (cResult[8] === tmp9.imageBanner) {
              tmp18 = cResult[9];
            }
            return tmp18;
          }
          const obj2 = { style: tmp9.imageBanner, source: tmp15 };
          const tmp21 = closure_8(closure_5, obj2);
          cResult[7] = tmp15;
          cResult[8] = tmp9.imageBanner;
          cResult[9] = tmp21;
          tmp18 = tmp21;
        }
      }
      ({ id: obj4.id, customBanner: obj4.splash } = guildProfile);
      const obj3 = { id: null, splash: null, size: getDevicePixelRatioDefault() * width };
      const getGuildDiscoverySplashSource = AvatarUtilsDefault.getGuildDiscoverySplashSource;
      AvatarUtilsDefault;
      const guildDiscoverySplashSource = getGuildDiscoverySplashSource(obj3);
      cResult[3] = guildProfile.customBanner;
      cResult[4] = guildProfile.id;
      cResult[5] = width;
      cResult[6] = guildDiscoverySplashSource;
      tmp15 = guildDiscoverySplashSource;
    }
  }
  if (cResult[10] !== guildProfile) {
    const obj5 = { guildProfile };
    const tmp14 = closure_8(closure_13, obj5);
    cResult[10] = guildProfile;
    cResult[11] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[11];
  }
  return tmp11;
}) : ((guildProfile) => {
  guildProfile = guildProfile.guildProfile;
  let obj = guildProfile(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = GuildStore.getGuild(guildProfile.id);
    if (guild == null) {
      const obj = GuildRecordUtils;
      guild = obj.fromGuildProfile(guildProfile);
    }
    const features = guild.features;
    return features.has(GuildFeatures.DISCOVERABLE);
  });
  const width = useWindowDimensionsDefault().width;
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      ({ id: obj2.id, customBanner: obj2.splash } = guildProfile);
      const obj3 = { id: null, splash: null, size: getDevicePixelRatioDefault() * width };
      const getGuildDiscoverySplashSource = AvatarUtilsDefault.getGuildDiscoverySplashSource;
      AvatarUtilsDefault;
      const obj5 = { style: tmp4.imageBanner, source: getGuildDiscoverySplashSource(obj3) };
      return closure_8(closure_5, obj5);
    }
  }
  return closure_8(closure_13, { guildProfile });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildProfile) => {
  let brightenColorResult;
  const obj = react2;
  const cResult = obj.c(6);
  guildProfile = guildProfile.guildProfile;
  const tmp4 = styles();
  const tmp6 = useThemeDefault();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj3 = guild_profile_GuildProfileUtils;
  const profilePrimaryColor = obj3.useProfilePrimaryColor(guildProfile, token);
  if (cResult[0] === profilePrimaryColor) {
    let tmp10;
    if (cResult[1] === tmp6) {
      tmp10 = cResult[2];
    }
    if (cResult[3] === tmp4.colorBanner) {
      let tmp13;
      if (cResult[4] === tmp10) {
        tmp13 = cResult[5];
      }
      return tmp13;
    }
    const obj4 = { style: tmp9, start: null, end: null, colors: tmp10 };
    ({ START: obj6.start, END: obj6.end } = frozen);
    const tmp16 = metroImportAll(LinearGradientDefault, obj4);
    cResult[3] = tmp4.colorBanner;
    cResult[4] = tmp10;
    cResult[5] = tmp16;
    tmp13 = tmp16;
  }
  const items = [profilePrimaryColor, ];
  const tmpResult = themes;
  const isThemeDarkResult = tmpResult.isThemeDark(tmp6);
  const tmpResult2 = native;
  if (isThemeDarkResult) {
    brightenColorResult = tmpResult2.brightenColor(profilePrimaryColor, 0.8);
  } else {
    brightenColorResult = tmpResult2.darkenColor(profilePrimaryColor, 0.8);
  }
  items[1] = brightenColorResult;
  cResult[0] = profilePrimaryColor;
  cResult[1] = tmp6;
  cResult[2] = items;
  tmp10 = items;
}) : ((guildProfile) => {
  let brightenColorResult;
  let items;
  guildProfile = guildProfile.guildProfile;
  const tmp = styles();
  const tmp2 = useThemeDefault();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj2 = guild_profile_GuildProfileUtils;
  const profilePrimaryColor = obj2.useProfilePrimaryColor(guildProfile, token);
  const obj3 = { style: tmp.colorBanner, start: frozen.START, end: frozen.END, colors: items };
  items = [profilePrimaryColor, ];
  const tmp6 = LinearGradientDefault;
  const obj4 = themes;
  const isThemeDarkResult = obj4.isThemeDark(tmp2);
  const obj5 = native;
  if (isThemeDarkResult) {
    brightenColorResult = obj5.brightenColor(profilePrimaryColor, 0.8);
  } else {
    brightenColorResult = obj5.darkenColor(profilePrimaryColor, 0.8);
  }
  items[1] = brightenColorResult;
  return metroImportAll(tmp6, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
function getBackgroundForProfile(theme, token) {
  let brightenColorResult;
  const items = [token, ];
  const obj = themes;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const obj2 = native;
  if (isThemeDarkResult) {
    brightenColorResult = obj2.brightenColor(token, 0.8);
  } else {
    brightenColorResult = obj2.darkenColor(token, 0.8);
  }
  items[1] = brightenColorResult;
  return items;
}
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildProfile) => {
  let items;
  let items1;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(23);
  guildProfile = guildProfile.guildProfile;
  const tmp4 = styles();
  let tmp5 = null;
  if (null != guildProfile) {
    if (cResult[0] === guildProfile.icon) {
      let tmp6;
      if (cResult[1] === guildProfile.id) {
        tmp6 = cResult[2];
      }
      let uri = null;
      if (typeof tmp6 !== "number") {
        uri = tmp6.uri;
      }
      tmp5 = uri;
    }
    const obj4 = { id: null, icon: null, size: 96, canAnimate: true };
    ({ id: obj3.id, icon: obj3.icon } = guildProfile);
    const obj2 = AvatarUtilsDefault;
    const guildIconSource = obj2.getGuildIconSource(obj4);
    cResult[0] = guildProfile.icon;
    cResult[1] = guildProfile.id;
    cResult[2] = guildIconSource;
    tmp6 = guildIconSource;
  }
  if (cResult[3] !== guildProfile) {
    const obj5 = { guildProfile };
    const tmp13 = metroImportAll(closure_12, obj5);
    cResult[3] = guildProfile;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp5) {
    let tmp14;
    let tmp16;
    let tmp20;
    let tmp19;
    if (cResult[6] === guildProfile) {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== guildProfile.description) {
      let tmp17 = null != guildProfile.description && guildProfile.description.length > 0;
      if (tmp17) {
        const obj6 = { variant: "text-md/medium", color: "text-subtle", children: guildProfile.description };
        tmp17 = metroImportAll(Text_Text.Text, obj6);
      }
      cResult[8] = guildProfile.description;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] !== guildProfile) {
      const obj7 = { profile: guildProfile };
      const tmp23 = metroImportAll(GuildProfileGamesDefault, obj7);
      const obj8 = { profile: guildProfile };
      const tmp24 = metroImportAll(GuildProfileTraitsDefault, obj8);
      cResult[10] = guildProfile;
      cResult[11] = tmp23;
      cResult[12] = tmp24;
      tmp20 = tmp24;
      tmp19 = tmp23;
    } else {
      tmp19 = cResult[11];
      tmp20 = cResult[12];
    }
    if (cResult[13] === tmp4.body) {
      if (cResult[14] === tmp16) {
        if (cResult[15] === tmp19) {
          let tmp25;
          if (cResult[16] === tmp20) {
            tmp25 = cResult[17];
          }
          if (cResult[18] === tmp4.container) {
            if (cResult[19] === tmp10) {
              if (cResult[20] === tmp14) {
                let tmp29;
                if (cResult[21] === tmp25) {
                  tmp29 = cResult[22];
                }
                return tmp29;
              }
            }
          }
          const obj9 = { style: tmp4.container, children: items };
          items = [tmp10, tmp14, tmp25];
          const tmp32 = React4(React3, obj9);
          cResult[18] = tmp4.container;
          cResult[19] = tmp10;
          cResult[20] = tmp14;
          cResult[21] = tmp25;
          cResult[22] = tmp32;
          tmp29 = tmp32;
        }
      }
    }
    const obj16 = { style: tmp4.body, children: items1 };
    items1 = [tmp16, tmp19, tmp20];
    const tmp28 = React4(React3, obj16);
    cResult[13] = tmp4.body;
    cResult[14] = tmp16;
    cResult[15] = tmp19;
    cResult[16] = tmp20;
    cResult[17] = tmp28;
    tmp25 = tmp28;
  }
  const tmp15 = metroImportAll(GuildProfileHeaderDefault, { profile: guildProfile, guildIconSource: tmp5 });
  cResult[5] = tmp5;
  cResult[6] = guildProfile;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : ((guildProfile) => {
  let items1;
  let items2;
  guildProfile = guildProfile.guildProfile;
  const tmp = styles();
  const items = [guildProfile];
  let obj = { style: tmp.container, children: items1 };
  const memo = react.useMemo(() => {
    if (null == guildProfile) {
      return null;
    } else {
      const obj3 = { id: null, icon: null, size: 96, canAnimate: true };
      ({ id: obj2.id, icon: obj2.icon } = guildProfile);
      const obj = AvatarUtilsDefault;
      const guildIconSource = obj.getGuildIconSource(obj3);
      let uri = null;
      if (typeof guildIconSource !== "number") {
        uri = guildIconSource.uri;
      }
      return uri;
    }
  }, items);
  items1 = [closure_8(closure_12, { guildProfile }), closure_8(GuildProfileHeaderDefault, { profile: guildProfile, guildIconSource: memo }), ];
  const obj2 = { style: tmp.body, children: items2 };
  let tmp5Result = null != guildProfile.description && guildProfile.description.length > 0;
  if (tmp5Result) {
    let obj3 = { variant: "text-md/medium", color: "text-subtle", children: guildProfile.description };
    tmp5Result = closure_8(guildProfile(4886).Text, obj3);
  }
  items2 = [tmp5Result, closure_8(GuildProfileGamesDefault, { profile: guildProfile }), closure_8(GuildProfileTraitsDefault, { profile: guildProfile })];
  items1[2] = closure_9(closure_4, obj2);
  return closure_9(closure_4, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default tmp7;
export { getBackgroundForProfile };
export const useStyles = styles;
export const DiagonalGradient = frozen;