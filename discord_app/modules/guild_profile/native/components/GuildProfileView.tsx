// === Module 9014: GuildProfileBackground ===

// Module 9014 (GuildProfileBackground)
import ThemesDefault from "Themes" /* 712 */;
import isThemeLight from "isThemeLight" /* 1364 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import map from "map" /* 4197 */;
import ManaContext from "ManaContext" /* 4204 */;
import useThemeDefault from "useTheme" /* 4413 */;
import LinearGradientDefault from "LinearGradient" /* 4940 */;
import useProfilePrimaryColor from "useProfilePrimaryColor" /* 9016 */;
import stylesDefault from "styles" /* 9017 */;
import ClickableGameIconDefault from "ClickableGameIcon" /* 9019 */;
import TraitEmojiDefault from "TraitEmoji" /* 9026 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "createGuildRecordFromRust" /* 1909 */;
import { GuildFeatures } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function GuildProfileBackground(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let obj = guildProfile(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = closure_1_6.getGuild(guildProfile.id);
    if (guild == null) {
      guild = guildProfile(closure_1_2[10]).fromGuildProfile(guildProfile);
      const obj = guildProfile(closure_1_2[10]);
    }
    const features = guild.features;
    return features.has(closure_1_7.DISCOVERABLE);
  });
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      obj = { id: null, splash: null, size: null };
      ({ id: obj3[0], customBanner: obj3[1] } = guildProfile);
      obj[2] = tmp3(9015)() * useWindowDimensionsDefault().width;
      obj = { style: null, source: null };
      obj[0] = tmp4.imageBanner;
      obj[1] = tmp3(1431).getGuildDiscoverySplashSource(obj);
      return callback(closure_5, obj);
    }
  }
  return callback(GuildProfileGradient, { guildProfile });
}
function GuildProfileGradient(guildProfile) {
  const tmp = createCacheKey();
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOWEST);
  const tmp2 = useThemeDefault();
  const profilePrimaryColor = useProfilePrimaryColor.useProfilePrimaryColor(guildProfile.guildProfile, token);
  obj = { style: tmp.colorBanner, start: frozen.START, end: frozen.END, colors: null };
  const items = [profilePrimaryColor, ];
  const obj2 = useProfilePrimaryColor;
  const tmp5 = closure_8;
  const tmp6 = LinearGradientDefault;
  const obj4 = isThemeLight;
  const obj5 = ManaContext;
  if (isThemeDarkResult) {
    let brightenColorResult = obj5.brightenColor(profilePrimaryColor, 0.8);
  } else {
    brightenColorResult = obj5.darkenColor(profilePrimaryColor, 0.8);
  }
  items[1] = brightenColorResult;
  obj[3] = items;
  return tmp5(tmp6, obj);
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, colorBanner: null, imageBanner: null, body: null, error: null, buttonContainer: null, header: null, avatarBackground: null, restrictedAcronym: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 140, width: "100%" };
createCacheKey[2] = { height: 140, width: "100%", objectFit: "cover" };
createCacheKey[3] = { marginTop: 12, paddingHorizontal: 16, gap: 16 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
createCacheKey[5] = { marginTop: 160 };
createCacheKey[6] = { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 };
createCacheKey[7] = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
createCacheKey[8] = { fontSize: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const frozen = Object.freeze({ START: { x: 0, y: 1 }, END: { x: 1.5, y: 0 } });
const obj1 = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
const result = require("set").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default function GuildProfileView(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let tmp = createCacheKey();
  const items = [guildProfile];
  let obj = { style: tmp.container, children: null };
  const memo = React.useMemo(() => {
    if (null == guildProfile) {
      return null;
    } else {
      let obj = closure_1_1(closure_1_2[12]);
      obj = { id: null, icon: null, size: 96, canAnimate: true };
      ({ id: obj2[0], icon: obj2[1] } = tmp);
      const guildIconSource = obj.getGuildIconSource(obj);
      let uri = null;
      if (typeof guildIconSource !== "number") {
        uri = guildIconSource.uri;
      }
      return uri;
    }
    tmp = guildProfile;
  }, items);
  const items1 = [callback(GuildProfileBackground, { guildProfile }), callback(stylesDefault, { profile: guildProfile, guildIconSource: memo }), ];
  obj = { style: tmp.body, children: null };
  let tmp5Result = null != guildProfile.description;
  if (tmp5Result) {
    tmp5Result = guildProfile.description.length > 0;
  }
  if (tmp5Result) {
    obj = { variant: "text-md/medium", color: "text-subtle", children: null };
    obj[2] = guildProfile.description;
    tmp5Result = tmp5(guildProfile(4474).Text, obj);
  }
  const items2 = [tmp5Result, callback(ClickableGameIconDefault, { profile: guildProfile }), callback(TraitEmojiDefault, { profile: guildProfile })];
  obj[1] = items2;
  items1[2] = closure_9(closure_4, obj);
  obj[1] = items1;
  return closure_9(closure_4, obj);
};
export const getBackgroundForProfile = function getBackgroundForProfile(closure_2, token) {
  const items = [token, ];
  const obj = isThemeLight;
  const obj2 = ManaContext;
  if (isThemeDarkResult) {
    let brightenColorResult = obj2.brightenColor(token, 0.8);
  } else {
    brightenColorResult = obj2.darkenColor(token, 0.8);
  }
  items[1] = brightenColorResult;
  return items;
};
export const useStyles = createCacheKey;
export const DiagonalGradient = frozen;