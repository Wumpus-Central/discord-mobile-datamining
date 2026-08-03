// === Module 13125: CommunityPill ===

// Module 13125 (CommunityPill)
import useIsWindowLarge from "useIsWindowLarge";
import get_ActivityIndicator from "Button";
import initialize from "initialize";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpenOrResumed from "handleConnectionOpenOrResumed";
import { GuildFeatures } from "ME";
import jsxProd from "fromGuildPropertiesWithAdditionalFields";
import createCacheKey from "createCacheKey";
import PlatformTypes from "PlatformTypes";

let c10;
let c4;
let c5;
let unpackModuleId;
const require = arg1;
function CommunityPill(guildVisibility) {
  let GlobeEarthIcon;
  let importDefault;
  const tmp = createCacheKey();
  const intl = GlobeEarthIcon(1236).intl;
  importDefault = intl.string(GlobeEarthIcon(1236).t.TME4LJ);
  let tmp4Result = importDefault(8478);
  if (guildVisibility.guildVisibility === GlobeEarthIcon(8472).GuildVisibility.PUBLIC) {
    const intl2 = tmp2(1236).intl;
    importDefault = intl2.string(tmp2(1236).t.op2cJ6);
    GlobeEarthIcon = tmp2(9029).GlobeEarthIcon;
    tmp4Result = importDefault(8481);
  }
  let obj = {
    style: tmp.communityPill,
    accessibilityRole: "button",
    onPress() {
      let obj = callback(outer1_2[16]);
      obj = { key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content: callback, IconComponent: GlobeEarthIcon };
      obj.open(obj);
    },
    children: null
  };
  obj = { style: tmp.communityPillIcon, source: tmp4Result, disableColor: true };
  const items = [callback(GlobeEarthIcon(1297).Icon, obj), ];
  obj = { variant: "text-xs/medium", color: "text-default", style: tmp.communityPillText, children: null };
  const intl3 = tmp2(1236).intl;
  obj[3] = intl3.string(GlobeEarthIcon(1236).t.K7iRig);
  items[1] = callback(GlobeEarthIcon(4189).Text, obj);
  obj[3] = items;
  return callback2(GlobeEarthIcon(4721).PressableOpacity, obj);
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { content: { padding: 16 }, avatar: { borderRadius: 14.117647058823529, height: 60, width: 60 }, headerContainer: null, avatarBackground: null, description: null, memberInfo: null, nameRow: null, communityPill: null, communityPillIcon: null, communityPillText: null, guildBanner: null };
createCacheKey = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: 68, width: 68, marginBottom: 12, marginLeft: -4, padding: 4, borderRadius: 16, alignContent: "center", justifyContent: "center", backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[4] = { marginTop: 8 };
createCacheKey[5] = { marginTop: 16, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 16 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", marginTop: 8 };
let obj1 = { height: 68, width: 68, marginBottom: 12, marginLeft: -4, padding: 4, borderRadius: 16, alignContent: "center", justifyContent: "center", backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER, paddingTop: 4, paddingRight: 8, paddingBottom: 4, paddingLeft: 6, borderRadius: require("Themes").radii.round };
createCacheKey[8] = { width: 16, height: 16, marginRight: 6 };
let num;
if (PlatformTypes.isAndroid()) {
  num = 14;
}
createCacheKey[9] = { lineHeight: num };
createCacheKey[10] = { position: "absolute", left: "50%", top: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER, paddingTop: 4, paddingRight: 8, paddingBottom: 4, paddingLeft: 6, borderRadius: require("Themes").radii.round };
let result = require("initialize").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx");

export default function GuildActionSheetHeader(guild) {
  let description;
  let memberCount;
  let name;
  let onlineCount;
  guild = guild.guild;
  let importDefault;
  let stateFromStores;
  let width;
  let c4;
  const tmp = createCacheKey();
  importDefault = tmp;
  const tmp4 = importDefault(stateFromStores[19])();
  let obj = guild(stateFromStores[20]);
  const items = [handleConnectionOpenOrResumed];
  stateFromStores = obj.useStateFromStores(items, () => outer1_8.isSubscribedToAnyGuildChannel(guild.id));
  let obj1 = width;
  const items1 = [guild, stateFromStores];
  const effect = width.useEffect(() => {
    let isGuildRecordResult = !stateFromStores;
    if (!stateFromStores) {
      isGuildRecordResult = guild(stateFromStores[21]).isGuildRecord(guild);
      const obj = guild(stateFromStores[21]);
    }
    if (isGuildRecordResult) {
      const guildForPopout = guild(stateFromStores[22]).fetchGuildForPopout(guild.id);
      const obj2 = guild(stateFromStores[22]);
    }
  }, items1);
  let obj2 = guild(stateFromStores[20]);
  const items2 = [createGuildRecordFromRust];
  let stateFromStores1 = obj2.useStateFromStores(items2, () => outer1_7.getGuild(guild.id));
  let obj3 = guild(stateFromStores[20]);
  const items3 = [initialize];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => outer1_6.getGuild(guild.id));
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores2;
  }
  if (stateFromStores1 == null) {
    stateFromStores1 = guild;
  }
  let tmp5Result = tmp5(tmp3[23]);
  const guildHeaderCounts = tmp5Result.useGuildHeaderCounts(stateFromStores1.id);
  memberCount = undefined;
  onlineCount = undefined;
  if (stateFromStores) {
    ({ onlineCount, memberCount } = guildHeaderCounts);
  }
  let tmp11 = memberCount;
  let tmp12 = onlineCount;
  if (null != stateFromStores2) {
    let presenceCount = onlineCount;
    if (onlineCount == null) {
      presenceCount = stateFromStores2.presenceCount;
    }
    let memberCount2 = memberCount;
    if (memberCount == null) {
      memberCount2 = stateFromStores2.memberCount;
    }
    tmp11 = memberCount2;
    tmp12 = presenceCount;
  }
  width = tmp2(tmp3[24])().width;
  tmp5Result = tmp5(tmp3[21]);
  if (tmp5Result.isGuildRecord(stateFromStores1)) {
    const features = stateFromStores1.features;
    obj = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", children: null };
    obj[0] = tmp.avatarBackground;
    const hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    obj = { style: null, guild: null, size: null, animate: true };
    obj[0] = tmp.avatar;
    obj[1] = stateFromStores1;
    let tmp2Result = tmp2(tmp3[25]);
    obj[2] = tmp5(tmp3[25]).GuildIconSizes.XLARGE;
    obj[4] = callback(tmp2Result, obj);
    let guildBannerSource = null;
    if (null != stateFromStores1.banner) {
      guildBannerSource = null;
      if (!tmp4) {
        tmp2Result = tmp2(tmp3[26]);
        obj1 = { id: null, banner: null };
        ({ id: obj16[0], banner: obj16[1] } = stateFromStores1);
        guildBannerSource = tmp2Result.getGuildBannerSource(obj1, hasItem);
      }
    }
    let guildSplashSource = guildBannerSource;
    let tmp17 = callback(c4, obj);
    let tmp18 = callback;
    const tmp21 = callback;
    const tmp24 = callback(c4, obj);
  } else {
    obj2 = { id: null, icon: null, canAnimate: true, size: 68 };
    ({ id: obj8[0], icon: obj8[1] } = stateFromStores1);
    obj3 = { style: null, source: null };
    obj3[0] = tmp.avatar;
    obj3[1] = tmp2(tmp3[26]).getGuildIconSource(obj2);
    guildSplashSource = null;
    const tmp13 = callback;
    const tmp2Result1 = tmp2(tmp3[26]);
    if (null != stateFromStores1.splash) {
      guildSplashSource = null;
      if (!tmp4) {
        const obj4 = { id: null, splash: null, size: null };
        ({ id: obj11[0], splash: obj11[1] } = stateFromStores1);
        const tmp2Result2 = tmp2(tmp3[26]);
        obj4[2] = width * tmp5(tmp3[27]).getDevicePixelRatio();
        guildSplashSource = tmp2Result2.getGuildSplashSource(obj4);
        const tmp5Result1 = tmp5(tmp3[27]);
      }
    }
    tmp17 = callback(closure_5, obj3);
    tmp18 = tmp13;
    const tmp15 = callback(closure_5, obj3);
  }
  ({ description, name } = stateFromStores1);
  const guildTraits = guild(stateFromStores[12]).getGuildTraits(stateFromStores1);
  const tmp5Result2 = guild(stateFromStores[12]);
  const result = 0.56 * width;
  c4 = result;
  const items4 = [tmp.guildBanner, width, result];
  const clientThemesOverride = guild(stateFromStores[28]).useClientThemesOverride();
  const memo = obj1.useMemo(() => {
    const obj = {};
    const merged = Object.assign(_undefined.guildBanner);
    obj.width = width;
    obj.height = c4;
    obj.marginLeft = -width / 2;
    return obj;
  }, items4);
  const tmp5Result3 = guild(stateFromStores[28]);
  const obj5 = { style: items5, children: null };
  items5 = [tmp.headerContainer, clientThemesOverride];
  let tmp18Result = null != guildSplashSource;
  const token = guild(stateFromStores[29]).useToken(tmp2(tmp3[8]).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  if (tmp18Result) {
    const obj6 = { style: null, source: null };
    obj6[0] = memo;
    obj6[1] = guildSplashSource;
    tmp18Result = tmp18(tmp2(tmp3[30]), obj6);
  }
  const items6 = [tmp18Result, ];
  const items7 = [tmp.content, ];
  let num = 0;
  if (null != guildSplashSource) {
    num = result - 48;
  }
  const obj7 = { style: items7, children: null };
  items7[1] = { marginTop: num };
  const items8 = [tmp17, , , ];
  const obj8 = { style: tmp.nameRow, children: null };
  const items9 = [tmp18(importDefault(stateFromStores[31]), { guild: stateFromStores1 }), tmp18(guild(stateFromStores[18]).Text, { lineClamp: 2, accessibilityRole: "header", variant: token, color: "mobile-text-heading-primary", children: name })];
  obj8[1] = items9;
  items8[1] = closure_11(c4, obj8);
  tmp18Result = null;
  if (null != description) {
    const obj9 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj9[0] = tmp.description;
    obj9[3] = description;
    tmp18Result = tmp18(tmp5(tmp3[18]).Text, obj9);
  }
  items8[2] = tmp18Result;
  const obj10 = { style: tmp.memberInfo, children: null };
  let tmp18Result1 = null;
  if (guildTraits.community) {
    const obj11 = { guildVisibility: null };
    obj11[0] = guildTraits.visibility;
    tmp18Result1 = tmp18(CommunityPill, obj11);
  }
  const items10 = [tmp18Result1, ];
  const obj12 = { style: { gap: 15, flexDirection: "row" }, children: null };
  let tmp18Result2 = null != tmp12;
  if (tmp18Result2) {
    const obj13 = { type: "online", count: null };
    obj13[1] = tmp12;
    tmp18Result2 = tmp18(tmp2(tmp3[32]), obj13);
  }
  const items11 = [tmp18Result2, ];
  let tmp18Result3 = null != tmp11;
  if (tmp18Result3) {
    const obj14 = { type: "total", count: null };
    obj14[1] = tmp11;
    tmp18Result3 = tmp18(tmp2(tmp3[32]), obj14);
  }
  items11[1] = tmp18Result3;
  obj12[1] = items11;
  items10[1] = closure_11(c4, obj12);
  obj10[1] = items10;
  items8[3] = closure_11(c4, obj10);
  obj7[1] = items8;
  items6[1] = closure_11(c4, obj7);
  obj5[1] = items6;
  return closure_11(c4, obj5);
};