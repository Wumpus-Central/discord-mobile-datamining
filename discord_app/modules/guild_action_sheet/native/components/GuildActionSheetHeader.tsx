// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import _modDef8744 from "../../../../../_runtime/metro/08744__.js";
import _modDef8747 from "../../../../../_runtime/metro/08747__.js";
import GuildPopoutActionCreators from "../../../guild_profile/GuildPopoutActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildPopoutStore from "../../../guild_profile/GuildPopoutStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildSubscriptionsStore from "../../../../stores/GuildSubscriptionsStore.tsx";

require = fn;
function CommunityPill(guildVisibility) {
  let GlobeEarthIcon;
  const tmp = closure_12();
  const intl = GlobeEarthIcon(1114).intl;
  importDefault = intl.string(GlobeEarthIcon(1114).t.TME4LJ);
  let tmp4Result = _modDef8744;
  if (guildVisibility.guildVisibility === GlobeEarthIcon(8743).GuildVisibility.PUBLIC) {
    const intl2 = tmp2(1114).intl;
    importDefault = intl2.string(tmp2(1114).t.op2cJ6);
    GlobeEarthIcon = tmp2(8886).GlobeEarthIcon;
    tmp4Result = _modDef8747;
  }
  let obj = {
    style: tmp.communityPill,
    accessibilityRole: "button",
    onPress() {
      const obj = { key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content, IconComponent: GlobeEarthIcon };
      obj.open(obj);
    },
    children: null,
  };
  obj = { style: tmp.communityPillIcon, source: tmp4Result, disableColor: true };
  const items = [closure_10(GlobeEarthIcon(1178).Icon, obj)];
  obj = { variant: "text-xs/medium", color: "text-default", style: tmp.communityPillText, children: null };
  const intl3 = tmp2(1114).intl;
  obj.children = intl3.string(GlobeEarthIcon(1114).t.K7iRig);
  items[1] = closure_10(GlobeEarthIcon(4556).Text, obj);
  obj.children = items;
  return closure_11(GlobeEarthIcon(5123).PressableOpacity, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  content: { padding: 16 },
  avatar: { borderRadius: 14.117647058823529, height: 60, width: 60 },
  headerContainer: null,
  avatarBackground: null,
  description: null,
  memberInfo: null,
  nameRow: null,
  communityPill: null,
  communityPillIcon: null,
  communityPillText: null,
  guildBanner: null,
};
createStyles = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.headerContainer = createStyles;
let size = {
  height: 68,
  width: 68,
  marginBottom: 12,
  marginLeft: -4,
  padding: 4,
  borderRadius: 16,
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
createStyles.avatarBackground = size;
createStyles.description = { marginTop: 8 };
createStyles.memberInfo = { marginTop: 16, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 16 };
createStyles.nameRow = { flexDirection: "row", alignItems: "center", marginTop: 8 };
createStyles.communityPill = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  paddingTop: 4,
  paddingRight: 8,
  paddingBottom: 4,
  paddingLeft: 6,
  borderRadius: nativeDefault.radii.round,
};
createStyles.communityPillIcon = { width: 16, height: 16, marginRight: 6 };
const PlatformUtils = fn(1116);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
createStyles.communityPillText = { lineHeight: num };
createStyles.guildBanner = { position: "absolute", left: "50%", top: 0 };
let closure_12 = createStyles.createStyles(createStyles);
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
  let obj = guild(stateFromStores[20]);
  const items = [GuildSubscriptionsStore];
  stateFromStores = obj.useStateFromStores(items, () =>
    GuildSubscriptionsStore.isSubscribedToAnyGuildChannel(guild.id),
  );
  let obj1 = width;
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
  let obj2 = guild(stateFromStores[20]);
  const items2 = [GuildStore];
  let stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guild.id));
  let obj3 = guild(stateFromStores[20]);
  const items3 = [GuildPopoutStore];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => GuildPopoutStore.getGuild(guild.id));
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
    obj = {
      style: tmp.avatarBackground,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      accessibilityRole: "none",
      children: null,
    };
    const hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    obj = { style: tmp.avatar, guild: stateFromStores1, size: null, animate: true };
    let tmp2Result = tmp2(tmp3[25]);
    obj.size = tmp5(tmp3[25]).GuildIconSizes.XLARGE;
    obj.children = closure_10(tmp2Result, obj);
    let guildBannerSource = null;
    if (null != stateFromStores1.banner) {
      guildBannerSource = null;
      if (!tmp4) {
        tmp2Result = tmp2(tmp3[26]);
        obj1 = { id: null, banner: null };
        ({ id: obj16.id, banner: obj16.banner } = stateFromStores1);
        guildBannerSource = tmp2Result.getGuildBannerSource(obj1, hasItem);
      }
    }
    let guildSplashSource = guildBannerSource;
    let tmp17 = closure_10(c4, obj);
    let tmp18 = closure_10;
    const tmp24 = closure_10(c4, obj);
  } else {
    obj2 = { id: null, icon: null, canAnimate: true, size: 68 };
    ({ id: obj8.id, icon: obj8.icon } = stateFromStores1);
    obj3 = { style: tmp.avatar, source: tmp2(tmp3[26]).getGuildIconSource(obj2) };
    guildSplashSource = null;
    const tmp2Result1 = tmp2(tmp3[26]);
    if (null != stateFromStores1.splash) {
      guildSplashSource = null;
      if (!tmp4) {
        const obj4 = { id: null, splash: null, size: null };
        ({ id: obj11.id, splash: obj11.splash } = stateFromStores1);
        const tmp2Result2 = tmp2(tmp3[26]);
        obj4.size = width * tmp5(tmp3[27]).getDevicePixelRatio();
        guildSplashSource = tmp2Result2.getGuildSplashSource(obj4);
        const tmp5Result1 = tmp5(tmp3[27]);
      }
    }
    tmp17 = closure_10(closure_5, obj3);
    tmp18 = closure_10;
    const tmp15 = closure_10(closure_5, obj3);
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
    const merged = Object.assign(guildBanner.guildBanner);
    obj.width = width;
    obj.height = height;
    obj.marginLeft = -width / 2;
    return obj;
  }, items4);
  const tmp5Result3 = guild(stateFromStores[28]);
  const obj5 = { style: null, children: null };
  const items5 = [tmp.headerContainer, clientThemesOverride];
  obj5.style = items5;
  let tmp18Result = null != guildSplashSource;
  const token = guild(stateFromStores[29]).useToken(tmp2(tmp3[8]).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  if (tmp18Result) {
    const obj6 = { style: memo, source: guildSplashSource };
    tmp18Result = tmp18(tmp2(tmp3[30]), obj6);
  }
  const items6 = [tmp18Result];
  const items7 = [tmp.content];
  let num = 0;
  if (null != guildSplashSource) {
    num = result - 48;
  }
  const obj7 = { style: items7, children: null };
  items7[1] = { marginTop: num };
  const items8 = [tmp17, , ,];
  const obj8 = { style: tmp.nameRow, children: null };
  const items9 = [
    tmp18(require("GuildBadgeV2"), { guild: stateFromStores1 }),
    tmp18(guild(stateFromStores[18]).Text, {
      lineClamp: 2,
      accessibilityRole: "header",
      variant: token,
      color: "mobile-text-heading-primary",
      children: name,
    }),
  ];
  obj8.children = items9;
  items8[1] = closure_11(c4, obj8);
  tmp18Result = null;
  if (null != description) {
    const obj9 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp18Result = tmp18(tmp5(tmp3[18]).Text, obj9);
  }
  items8[2] = tmp18Result;
  const obj10 = { style: tmp.memberInfo, children: null };
  let tmp18Result1 = null;
  if (guildTraits.community) {
    const obj11 = { guildVisibility: guildTraits.visibility };
    tmp18Result1 = tmp18(CommunityPill, obj11);
  }
  const items10 = [tmp18Result1];
  const obj12 = { style: { gap: 15, flexDirection: "row" }, children: null };
  let tmp18Result2 = null != tmp12;
  if (tmp18Result2) {
    const obj13 = { type: "online", count: tmp12 };
    tmp18Result2 = tmp18(tmp2(tmp3[32]), obj13);
  }
  const items11 = [tmp18Result2];
  let tmp18Result3 = null != tmp11;
  if (tmp18Result3) {
    const obj14 = { type: "total", count: tmp11 };
    tmp18Result3 = tmp18(tmp2(tmp3[32]), obj14);
  }
  items11[1] = tmp18Result3;
  obj12.children = items11;
  items10[1] = closure_11(c4, obj12);
  obj10.children = items10;
  items8[3] = closure_11(c4, obj10);
  obj7.children = items8;
  items6[1] = closure_11(c4, obj7);
  obj5.children = items6;
  return closure_11(c4, obj5);
}
