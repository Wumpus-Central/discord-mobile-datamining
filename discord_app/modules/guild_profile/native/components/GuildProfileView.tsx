// === Module 9190: GuildProfileView ===

// Module 9190 (GuildProfileView)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import useToken from "useToken" /* 4262 */;
import themes from "themes" /* 4269 */;
import native from "native" /* 4271 */;
import useThemeDefault from "useTheme" /* 4495 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import utils_getDevicePixelRatioDefault from "utils/getDevicePixelRatio" /* 9191 */;
import guild_profile_GuildProfileUtils from "guild_profile/GuildProfileUtils" /* 9192 */;
import GuildProfileHeaderDefault from "GuildProfileHeader" /* 9193 */;
import GuildProfileGamesDefault from "GuildProfileGames" /* 9195 */;
import GuildProfileTraitsDefault from "GuildProfileTraits" /* 9202 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function GuildProfileBackground(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let obj = guildProfile(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = GuildStore.getGuild(guildProfile.id);
    if (guild == null) {
      guild = GuildRecordUtils.fromGuildProfile(guildProfile);
    }
    const features = guild.features;
    return features.has(GuildFeatures.DISCOVERABLE);
  });
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      obj = { id: null, splash: null, size: null };
      ({ id: obj3.id, customBanner: obj3.splash } = guildProfile);
      obj.size = utils_getDevicePixelRatioDefault() * useWindowDimensionsDefault().width;
      obj = { style: tmp4.imageBanner, source: null };
      obj.source = AvatarUtilsDefault.getGuildDiscoverySplashSource(obj);
      return closure_8(closure_5, obj);
    }
  }
  return closure_8(GuildProfileGradient, { guildProfile });
}
function GuildProfileGradient(guildProfile) {
  const tmp = createStyles();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const tmp2 = useThemeDefault();
  const profilePrimaryColor = guild_profile_GuildProfileUtils.useProfilePrimaryColor(guildProfile.guildProfile, token);
  obj = { style: tmp.colorBanner, start: frozen.START, end: frozen.END, colors: null };
  const items = [profilePrimaryColor, ];
  const tmp6 = LinearGradientDefault;
  const obj5 = native;
  if (isThemeDarkResult) {
    let brightenColorResult = obj5.brightenColor(profilePrimaryColor, 0.8);
  } else {
    brightenColorResult = obj5.darkenColor(profilePrimaryColor, 0.8);
  }
  items[1] = brightenColorResult;
  obj.colors = items;
  return React6(tmp6, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, colorBanner: null, imageBanner: null, body: null, error: null, buttonContainer: null, header: null, avatarBackground: null, restrictedAcronym: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.colorBanner = { height: 140, width: "100%" };
createStyles.imageBanner = { height: 140, width: "100%", objectFit: "cover" };
createStyles.body = { marginTop: 12, paddingHorizontal: 16, gap: 16 };
createStyles.error = { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
createStyles.buttonContainer = { marginTop: 160 };
createStyles.header = { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 };
let size = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles.avatarBackground = size;
createStyles.restrictedAcronym = { fontSize: 24 };
createStyles = createStyles.createStyles(createStyles);
const frozen = Object.freeze({ START: { x: 0, y: 1 }, END: { x: 1.5, y: 0 } });
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default function GuildProfileView(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  const tmp = createStyles();
  const items = [guildProfile];
  let obj = { style: tmp.container, children: null };
  const memo = noop.useMemo(() => {
    if (null == guildProfile) {
      return null;
    } else {
      const obj = { id: null, icon: null, size: 96, canAnimate: true };
      ({ id: obj2.id, icon: obj2.icon } = guildProfile);
      const guildIconSource = obj.getGuildIconSource(obj);
      let uri = null;
      if (typeof guildIconSource !== "number") {
        uri = guildIconSource.uri;
      }
      return uri;
    }
  }, items);
  const items1 = [closure_8(GuildProfileBackground, { guildProfile }), closure_8(GuildProfileHeaderDefault, { profile: guildProfile, guildIconSource: memo }), ];
  obj = { style: tmp.body, children: null };
  let tmp5Result = null != guildProfile.description;
  if (tmp5Result) {
    tmp5Result = guildProfile.description.length > 0;
  }
  if (tmp5Result) {
    obj = { variant: "text-md/medium", color: "text-subtle", children: guildProfile.description };
    tmp5Result = closure_8(guildProfile(4556).Text, obj);
  }
  const items2 = [tmp5Result, closure_8(GuildProfileGamesDefault, { profile: guildProfile }), closure_8(GuildProfileTraitsDefault, { profile: guildProfile })];
  obj.children = items2;
  items1[2] = closure_9(closure_4, obj);
  obj.children = items1;
  return closure_9(closure_4, obj);
};
export const getBackgroundForProfile = function getBackgroundForProfile(theme, token) {
  const items = [token, ];
  const obj2 = native;
  if (isThemeDarkResult) {
    let brightenColorResult = obj2.brightenColor(token, 0.8);
  } else {
    brightenColorResult = obj2.darkenColor(token, 0.8);
  }
  items[1] = brightenColorResult;
  return items;
};
export const useStyles = createStyles;
export const DiagonalGradient = frozen;