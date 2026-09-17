// === Module 14081: GuildActionSheetHeader ===

// Module 14081 (GuildActionSheetHeader)
import nativeDefault from "native" /* 576 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1972 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import _modDef8900 from "module_8900" /* 8900 */;
import _modDef8903 from "module_8903" /* 8903 */;
import GuildPopoutActionCreators from "GuildPopoutActionCreators" /* 14083 */;
import noop from "module_19" /* 19 */;
import GuildPopoutStore from "GuildPopoutStore" /* 14082 */;
import GuildStore from "GuildStore" /* 1980 */;
import GuildSubscriptionsStore from "GuildSubscriptionsStore" /* 7392 */;

const require = globalThis.__r;

require = fn;
function CommunityPill(guildVisibility) {
  let GlobeEarthIcon;
  const tmp = closure_12();
  const intl = GlobeEarthIcon(1115).intl;
  importDefault = intl.string(GlobeEarthIcon(1115).t.TME4LJ);
  let tmp4Result = _modDef8900;
  if (guildVisibility.guildVisibility === GlobeEarthIcon(8899).GuildVisibility.PUBLIC) {
    const intl2 = tmp2(1115).intl;
    importDefault = intl2.string(tmp2(1115).t.op2cJ6);
    GlobeEarthIcon = tmp2(9044).GlobeEarthIcon;
    tmp4Result = _modDef8903;
  }
  const obj = {
    style: tmp.communityPill,
    accessibilityRole: "button",
    onPress() {
      ToastActionCreatorsDefault.open({ key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content, IconComponent: GlobeEarthIcon });
    },
    children: null
  };
  const items = [closure_10(GlobeEarthIcon(1177).Icon, { style: tmp.communityPillIcon, source: tmp4Result, disableColor: true }), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", style: tmp.communityPillText, children: null };
  const intl3 = tmp2(1115).intl;
  obj3.children = intl3.string(GlobeEarthIcon(1115).t.K7iRig);
  items[1] = closure_10(GlobeEarthIcon(4636).Text, obj3);
  obj.children = items;
  return closure_11(GlobeEarthIcon(5210).PressableOpacity, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { content: { padding: 16 }, avatar: { borderRadius: 14.117647058823529, height: 60, width: 60 }, headerContainer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, avatarBackground: null, description: null, memberInfo: null, nameRow: null, communityPill: null, communityPillIcon: null, communityPillText: null, guildBanner: null };
let size = { height: 68, width: 68, marginBottom: 12, marginLeft: -4, padding: 4, borderRadius: 16, alignContent: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.avatarBackground = size;
obj2.description = { marginTop: 8 };
obj2.memberInfo = { marginTop: 16, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 16 };
obj2.nameRow = { flexDirection: "row", alignItems: "center", marginTop: 8 };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.communityPill = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, paddingTop: 4, paddingRight: 8, paddingBottom: 4, paddingLeft: 6, borderRadius: nativeDefault.radii.round };
obj2.communityPillIcon = { width: 16, height: 16, marginRight: 6 };
const PlatformUtils = fn(1365);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj2.communityPillText = { lineHeight: num };
obj2.guildBanner = { position: "absolute", left: "50%", top: 0 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx");

export default function GuildActionSheetHeader(guild) {
  guild = guild.guild;
  let stateFromStores;
  let width;
  c4 = undefined;
  const tmp = closure_12();
  importDefault = tmp;
  const tmp4 = require("useIsWindowLarge")();
  const items = [GuildSubscriptionsStore];
  stateFromStores = guild(stateFromStores[20]).useStateFromStores(items, () => GuildSubscriptionsStore.isSubscribedToAnyGuildChannel(guild.id));
  const items1 = [guild, stateFromStores];
  const effect = width.useEffect(() => {
    let isGuildRecordResult = !stateFromStores;
    if (!stateFromStores) {
      isGuildRecordResult = GuildRecordUtils.isGuildRecord(guild);
    }
    if (isGuildRecordResult) {
      const guildForPopout = GuildPopoutActionCreators.fetchGuildForPopout(guild.id);
    }
  }, items1);
  let obj = guild(stateFromStores[20]);
  let obj2 = width;
  const items2 = [GuildStore];
  let stateFromStores1 = guild(stateFromStores[20]).useStateFromStores(items2, () => GuildStore.getGuild(guild.id));
  const obj3 = guild(stateFromStores[20]);
  const items3 = [GuildPopoutStore];
  const stateFromStores2 = guild(stateFromStores[20]).useStateFromStores(items3, () => GuildPopoutStore.getGuild(guild.id));
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores2;
  }
  if (stateFromStores1 == null) {
    stateFromStores1 = guild;
  }
  const obj4 = guild(stateFromStores[20]);
  const guildHeaderCounts = guild(stateFromStores[23]).useGuildHeaderCounts(stateFromStores1.id);
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
  const tmp5Result = guild(stateFromStores[23]);
  if (tmp5Result6.isGuildRecord(stateFromStores1)) {
    const features = stateFromStores1.features;
    const obj5 = { style: tmp.avatarBackground, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", children: null };
    const hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    const obj6 = { style: tmp.avatar, guild: stateFromStores1, size: tmp5(tmp3[25]).GuildIconSizes.XLARGE, animate: true };
    obj5.children = closure_10(tmp2(tmp3[25]), obj6);
    let guildBannerSource = null;
    const tmp2Result = tmp2(tmp3[25]);
    if (null != stateFromStores1.banner) {
      guildBannerSource = null;
      if (!tmp4) {
        ({ id: obj16.id, banner: obj16.banner } = stateFromStores1);
        guildBannerSource = tmp2(tmp3[26]).getGuildBannerSource({ id: null, banner: null }, hasItem);
        const obj7 = { id: null, banner: null };
        const tmp2Result4 = tmp2(tmp3[26]);
      }
    }
    let guildSplashSource = guildBannerSource;
    let tmp17 = closure_10(c4, obj5);
    let tmp18 = closure_10;
    const tmp24 = closure_10(c4, obj5);
  } else {
    ({ id: obj8.id, icon: obj8.icon } = stateFromStores1);
    const obj10 = { style: tmp.avatar, source: tmp2(tmp3[26]).getGuildIconSource({ id: null, icon: null, canAnimate: true, size: 68 }) };
    guildSplashSource = null;
    const obj9 = { id: null, icon: null, canAnimate: true, size: 68 };
    const tmp2Result5 = tmp2(tmp3[26]);
    if (null != stateFromStores1.splash) {
      guildSplashSource = null;
      if (!tmp4) {
        const obj12 = { id: null, splash: null, size: null };
        ({ id: obj11.id, splash: obj11.splash } = stateFromStores1);
        const tmp2Result6 = tmp2(tmp3[26]);
        obj12.size = width * tmp5(tmp3[27]).getDevicePixelRatio();
        guildSplashSource = tmp2Result6.getGuildSplashSource(obj12);
        const tmp5Result7 = tmp5(tmp3[27]);
      }
    }
    tmp17 = closure_10(closure_5, obj10);
    tmp18 = closure_10;
    const tmp15 = closure_10(closure_5, obj10);
  }
  ({ description, name } = stateFromStores1);
  tmp5Result6 = guild(stateFromStores[21]);
  const guildTraits = guild(stateFromStores[12]).getGuildTraits(stateFromStores1);
  const tmp5Result8 = guild(stateFromStores[12]);
  const result = 0.56 * width;
  c4 = result;
  const items4 = [tmp.guildBanner, width, result];
  const clientThemesOverride = guild(stateFromStores[28]).useClientThemesOverride();
  const memo = obj2.useMemo(() => {
    const obj = {};
    const merged = Object.assign(guildBanner.guildBanner);
    obj.width = width;
    obj.height = height;
    obj.marginLeft = -width / 2;
    return obj;
  }, items4);
  const tmp5Result9 = guild(stateFromStores[28]);
  const obj13 = { style: null, children: null };
  const items5 = [tmp.headerContainer, clientThemesOverride];
  obj13.style = items5;
  let tmp18Result = null != guildSplashSource;
  const token = guild(stateFromStores[29]).useToken(tmp2(tmp3[8]).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  if (tmp18Result) {
    const obj14 = { style: memo, source: guildSplashSource };
    tmp18Result = tmp18(tmp2(tmp3[30]), obj14);
  }
  const items6 = [tmp18Result, ];
  const items7 = [tmp.content, ];
  let num = 0;
  if (null != guildSplashSource) {
    num = result - 48;
  }
  const obj15 = { style: items7, children: null };
  items7[1] = { marginTop: num };
  const items8 = [tmp17, , , ];
  const obj17 = { style: tmp.nameRow, children: null };
  const items9 = [tmp18(require("GuildBadgeV2"), { guild: stateFromStores1 }), tmp18(guild(stateFromStores[18]).Text, { lineClamp: 2, accessibilityRole: "header", variant: token, color: "mobile-text-heading-primary", children: name })];
  obj17.children = items9;
  items8[1] = closure_11(c4, obj17);
  let tmp18Result5 = null;
  if (null != description) {
    const obj18 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp18Result5 = tmp18(tmp5(tmp3[18]).Text, obj18);
  }
  items8[2] = tmp18Result5;
  const obj19 = { style: tmp.memberInfo, children: null };
  let tmp18Result6 = null;
  if (guildTraits.community) {
    const obj20 = { guildVisibility: guildTraits.visibility };
    tmp18Result6 = tmp18(CommunityPill, obj20);
  }
  const items10 = [tmp18Result6, ];
  const obj21 = { style: { gap: 15, flexDirection: "row" }, children: null };
  let tmp18Result7 = null != tmp12;
  if (tmp18Result7) {
    const obj22 = { type: "online", count: tmp12 };
    tmp18Result7 = tmp18(tmp2(tmp3[32]), obj22);
  }
  const items11 = [tmp18Result7, ];
  let tmp18Result8 = null != tmp11;
  if (tmp18Result8) {
    const obj23 = { type: "total", count: tmp11 };
    tmp18Result8 = tmp18(tmp2(tmp3[32]), obj23);
  }
  items11[1] = tmp18Result8;
  obj21.children = items11;
  items10[1] = closure_11(c4, obj21);
  obj19.children = items10;
  items8[3] = closure_11(c4, obj19);
  obj15.children = items8;
  items6[1] = closure_11(c4, obj15);
  obj13.children = items6;
  return closure_11(c4, obj13);
};