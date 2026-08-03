import Text from "Text";
import get_ActivityIndicator from "LinearGradient";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";
import jsxProd from "ServerPreviewPill";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
function GuildProfileBackground(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let obj = guildProfile(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = outer1_6.getGuild(guildProfile.id);
    if (guild == null) {
      guild = guildProfile(outer1_2[10]).fromGuildProfile(guildProfile);
      const obj = guildProfile(outer1_2[10]);
    }
    const features = guild.features;
    return features.has(outer1_7.DISCOVERABLE);
  });
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      obj = { id: null, splash: null, size: null };
      ({ id: obj3[0], customBanner: obj3[1] } = guildProfile);
      obj[2] = tmp3(8467)() * importDefault(1474)().width;
      obj = { style: null, source: null };
      obj[0] = tmp4.imageBanner;
      obj[1] = tmp3(1416).getGuildDiscoverySplashSource(obj);
      return callback(closure_5, obj);
    }
  }
  return callback(GuildProfileGradient, { guildProfile });
}
function GuildProfileGradient(guildProfile) {
  const tmp = createCacheKey();
  let obj = require(3897) /* map */;
  const token = obj.useToken(importDefault(712).colors.BACKGROUND_BASE_LOWEST);
  const tmp2 = importDefault(4129)();
  const profilePrimaryColor = require(8468) /* useProfilePrimaryColor */.useProfilePrimaryColor(guildProfile.guildProfile, token);
  obj = { style: tmp.colorBanner, start: frozen.START, end: frozen.END, colors: null };
  const items = [profilePrimaryColor, ];
  const obj2 = require(8468) /* useProfilePrimaryColor */;
  const tmp5 = closure_8;
  const tmp6 = importDefault(4615);
  const obj4 = require(3903) /* isThemeLight */;
  const obj5 = require(3905) /* ManaContext */;
  if (isThemeDarkResult) {
    let brightenColorResult = obj5.brightenColor(profilePrimaryColor, 0.8);
  } else {
    brightenColorResult = obj5.darkenColor(profilePrimaryColor, 0.8);
  }
  items[1] = brightenColorResult;
  obj[3] = items;
  return tmp5(tmp6, obj);
}
function JoinForFullAccessCard() {
  let obj = { variant: "secondary", border: "none", style: createCacheKey().joinForFullAccessCard, children: null };
  obj = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.us0bE8);
  const items = [callback(require(4189) /* Text */.Text, obj), ];
  obj = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.fTtTTp);
  items[1] = callback(require(4189) /* Text */.Text, obj);
  obj[3] = items;
  return callback2(require(5226) /* PressableCard */.Card, obj);
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = jsxProd);
createCacheKey = { container: null, colorBanner: null, imageBanner: null, body: null, error: null, buttonContainer: null, header: null, avatarBackground: null, restrictedAcronym: null, joinForFullAccessCard: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 140, width: "100%" };
createCacheKey[2] = { height: 140, width: "100%", objectFit: "cover" };
createCacheKey[3] = { marginTop: 12, paddingHorizontal: 16, gap: 16 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
createCacheKey[5] = { marginTop: 160 };
createCacheKey[6] = { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 };
createCacheKey[7] = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
createCacheKey[8] = { fontSize: 24 };
createCacheKey[9] = { gap: 4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const frozen = Object.freeze({ START: { x: 0, y: 1 }, END: { x: 1.5, y: 0 } });
let obj1 = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default function GuildProfileView(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let flag = guildProfile.isLurkerServerPreview;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = createCacheKey();
  const items = [guildProfile];
  let obj = { style: tmp.container, children: null };
  const memo = React.useMemo(() => {
    if (null == guildProfile) {
      return null;
    } else {
      let obj = outer1_1(outer1_2[12]);
      obj = { id: null, icon: null, size: 96, canAnimate: true };
      ({ id: obj2[0], icon: obj2[1] } = tmp);
      const guildIconSource = obj.getGuildIconSource(obj);
      let uri = null;
      if (typeof guildIconSource !== "Object") {
        uri = guildIconSource.uri;
      }
      return uri;
    }
    tmp = guildProfile;
  }, items);
  const items1 = [callback(GuildProfileBackground, { guildProfile }), , , ];
  let tmp5Result = flag;
  if (flag) {
    tmp5Result = tmp5(importDefault(8469), {});
  }
  items1[1] = tmp5Result;
  items1[2] = callback(importDefault(8470), { profile: guildProfile, guildIconSource: memo });
  obj = { style: tmp.body, children: null };
  tmp5Result = null != guildProfile.description;
  if (tmp5Result) {
    tmp5Result = guildProfile.description.length > 0;
  }
  if (tmp5Result) {
    obj = { variant: "text-md/medium", color: "text-subtle", children: null };
    obj[2] = guildProfile.description;
    tmp5Result = tmp5(guildProfile(4189).Text, obj);
  }
  const items2 = [tmp5Result, ];
  if (flag) {
    let tmp5Result1 = tmp5(JoinForFullAccessCard, {});
  } else {
    const obj1 = { children: null };
    const obj2 = { profile: null };
    obj2[0] = guildProfile;
    const items3 = [tmp5(tmp9(8484), obj2), ];
    const obj3 = { profile: null };
    obj3[0] = guildProfile;
    items3[1] = tmp5(tmp9(11966), obj3);
    obj1[0] = items3;
    tmp5Result1 = tmp3(closure_10, obj1);
  }
  items2[1] = tmp5Result1;
  obj[1] = items2;
  items1[3] = closure_9(closure_4, obj);
  obj[1] = items1;
  return closure_9(closure_4, obj);
};
export const getBackgroundForProfile = function getBackgroundForProfile(closure_2, token) {
  const items = [token, ];
  const obj = require(3903) /* isThemeLight */;
  const obj2 = require(3905) /* ManaContext */;
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