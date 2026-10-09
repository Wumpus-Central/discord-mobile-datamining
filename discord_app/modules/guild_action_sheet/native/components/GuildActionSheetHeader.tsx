// === Module 14123: GuildActionSheetHeader ===

// Module 14123 (GuildActionSheetHeader)
import nativeDefault from "native" /* 587 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2078 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import _modDef8852 from "module_8852" /* 8852 */;
import _modDef8855 from "module_8855" /* 8855 */;
import GuildPopoutActionCreators from "GuildPopoutActionCreators" /* 14125 */;
import noop from "module_19" /* 19 */;
import GuildPopoutStore from "GuildPopoutStore" /* 14124 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildSubscriptionsStore from "GuildSubscriptionsStore" /* 6973 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { content: { padding: 16 }, avatar: { borderRadius: 14.117647058823529, height: 60, width: 60 }, headerContainer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, avatarBackground: null, description: null, memberInfo: null, nameRow: null, communityPill: null, communityPillIcon: null, communityPillText: null, guildBanner: null };
let size = { height: 68, width: 68, marginBottom: 12, marginLeft: -4, padding: 4, borderRadius: 16, alignContent: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.avatarBackground = size;
obj2.description = { marginTop: 8 };
obj2.memberInfo = { marginTop: 16, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 16 };
obj2.nameRow = { flexDirection: "row", alignItems: "center", marginTop: 8 };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.communityPill = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, paddingTop: 4, paddingRight: 8, paddingBottom: 4, paddingLeft: 6, borderRadius: nativeDefault.radii.round };
obj2.communityPillIcon = { width: 16, height: 16, marginRight: 6 };
const PlatformUtils = fn(1383);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj2.communityPillText = { lineHeight: num };
obj2.guildBanner = { position: "absolute", left: "50%", top: 0 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function CommunityPill(guildVisibility) {
  const cResult = require("c").c(18);
  guildVisibility = guildVisibility.guildVisibility;
  const tmp4 = closure_11();
  if (cResult[0] !== guildVisibility) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.TME4LJ);
    importDefault = stringResult;
    let tmp9Result = _modDef8852;
    let tmp11 = stringResult;
    let tmp12;
    if (guildVisibility === tmp(8848).GuildVisibility.PUBLIC) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.op2cJ6);
      importDefault = stringResult1;
      const GlobeEarthIcon = tmp(9083).GlobeEarthIcon;
      _require = GlobeEarthIcon;
      tmp9Result = tmp9(8855);
      tmp11 = stringResult1;
      tmp12 = GlobeEarthIcon;
    }
    cResult[0] = guildVisibility;
    cResult[1] = tmp9Result;
    cResult[2] = tmp12;
    cResult[3] = tmp11;
    let tmp5 = tmp9Result;
    tmp9 = importDefault;
  } else {
    tmp5 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
  }
  if (cResult[4] === tmp6) {
    if (cResult[5] === tmp7) {
      let tmp15 = cResult[6];
    }
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp4.communityPillIcon) {
        let tmp16 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(tmp(1126).t.K7iRig);
        cResult[10] = stringResult2;
        let tmp20 = stringResult2;
      } else {
        tmp20 = cResult[10];
      }
      if (cResult[11] !== tmp4.communityPillText) {
        const obj2 = { variant: "text-xs/medium", color: "text-default", style: tmp4.communityPillText, children: tmp20 };
        const tmp24 = closure_9(tmp(5087).Text, obj2);
        cResult[11] = tmp4.communityPillText;
        cResult[12] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[12];
      }
      if (cResult[13] === tmp4.communityPill) {
        if (cResult[14] === tmp15) {
          if (cResult[15] === tmp16) {
            if (cResult[16] === tmp22) {
              let tmp25 = cResult[17];
            }
            return tmp25;
          }
        }
      }
      const obj3 = { style: tmp14, accessibilityRole: "button", onPress: tmp15, children: null };
      const items = [tmp16, tmp22];
      obj3.children = items;
      const tmp27 = closure_10(tmp(6191).PressableOpacity, obj3);
      cResult[13] = tmp4.communityPill;
      cResult[14] = tmp15;
      cResult[15] = tmp16;
      cResult[16] = tmp22;
      cResult[17] = tmp27;
      tmp25 = tmp27;
    }
    const obj4 = { style: tmp4.communityPillIcon, source: tmp5, disableColor: true };
    const tmp18 = closure_9(tmp(1200).Icon, obj4);
    cResult[7] = tmp5;
    cResult[8] = tmp4.communityPillIcon;
    cResult[9] = tmp18;
    tmp16 = tmp18;
  }
  const fn = function b() {
    ToastActionCreatorsDefault.open({ key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content, IconComponent });
  };
  cResult[4] = tmp6;
  cResult[5] = tmp7;
  cResult[6] = fn;
  tmp15 = fn;
  const obj = require("c");
}) : (function CommunityPill(guildVisibility) {
  let GlobeEarthIcon;
  const tmp = closure_11();
  const intl = GlobeEarthIcon(1126).intl;
  importDefault = intl.string(GlobeEarthIcon(1126).t.TME4LJ);
  let tmp4Result = _modDef8852;
  if (guildVisibility.guildVisibility === GlobeEarthIcon(8848).GuildVisibility.PUBLIC) {
    const intl2 = tmp2(1126).intl;
    importDefault = intl2.string(tmp2(1126).t.op2cJ6);
    GlobeEarthIcon = tmp2(9083).GlobeEarthIcon;
    tmp4Result = _modDef8855;
  }
  const obj = {
    style: tmp.communityPill,
    accessibilityRole: "button",
    onPress() {
      ToastActionCreatorsDefault.open({ key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content, IconComponent: GlobeEarthIcon });
    },
    children: null
  };
  const items = [closure_9(GlobeEarthIcon(1200).Icon, { style: tmp.communityPillIcon, source: tmp4Result, disableColor: true }), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", style: tmp.communityPillText, children: null };
  const intl3 = tmp2(1126).intl;
  obj3.children = intl3.string(GlobeEarthIcon(1126).t.K7iRig);
  items[1] = closure_9(GlobeEarthIcon(5087).Text, obj3);
  obj.children = items;
  return closure_10(GlobeEarthIcon(6191).PressableOpacity, obj);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx");

export default function GuildActionSheetHeader(guild) {
  guild = guild.guild;
  let stateFromStores;
  let width;
  c4 = undefined;
  const tmp = closure_11();
  importDefault = tmp;
  const tmp4 = require("useIsWindowLarge")();
  const items = [GuildSubscriptionsStore];
  stateFromStores = guild(stateFromStores[22]).useStateFromStores(items, () => GuildSubscriptionsStore.isSubscribedToAnyGuildChannel(guild.id));
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
  let obj = guild(stateFromStores[22]);
  let obj2 = width;
  const items2 = [GuildStore];
  let stateFromStores1 = guild(stateFromStores[22]).useStateFromStores(items2, () => GuildStore.getGuild(guild.id));
  const obj3 = guild(stateFromStores[22]);
  const items3 = [GuildPopoutStore];
  const stateFromStores2 = guild(stateFromStores[22]).useStateFromStores(items3, () => GuildPopoutStore.getGuild(guild.id));
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores2;
  }
  if (stateFromStores1 == null) {
    stateFromStores1 = guild;
  }
  const obj4 = guild(stateFromStores[22]);
  const guildHeaderCounts = guild(stateFromStores[25]).useGuildHeaderCounts(stateFromStores1.id);
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
  width = tmp2(tmp3[26])().width;
  const tmp5Result = guild(stateFromStores[25]);
  if (tmp5Result6.isGuildRecord(stateFromStores1)) {
    const features = stateFromStores1.features;
    const obj5 = { style: tmp.avatarBackground, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", children: null };
    const hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    const obj6 = { style: tmp.avatar, guild: stateFromStores1, size: tmp5(tmp3[27]).GuildIconSizes.XLARGE, animate: true };
    obj5.children = closure_9(tmp2(tmp3[27]), obj6);
    let guildBannerSource = null;
    const tmp2Result = tmp2(tmp3[27]);
    if (null != stateFromStores1.banner) {
      guildBannerSource = null;
      if (!tmp4) {
        ({ id: obj16.id, banner: obj16.banner } = stateFromStores1);
        guildBannerSource = tmp2(tmp3[28]).getGuildBannerSource({ id: null, banner: null }, hasItem);
        const obj7 = { id: null, banner: null };
        const tmp2Result4 = tmp2(tmp3[28]);
      }
    }
    let guildSplashSource = guildBannerSource;
    let tmp17 = closure_9(c4, obj5);
    let tmp18 = closure_9;
    const tmp24 = closure_9(c4, obj5);
  } else {
    ({ id: obj8.id, icon: obj8.icon } = stateFromStores1);
    const guildIconSource = tmp2(tmp3[28]).getGuildIconSource({ id: null, icon: null, canAnimate: true, size: 68 });
    const obj10 = { style: tmp.avatar, source: guildIconSource };
    guildSplashSource = null;
    const obj9 = { id: null, icon: null, canAnimate: true, size: 68 };
    const tmp2Result5 = tmp2(tmp3[28]);
    if (null != stateFromStores1.splash) {
      guildSplashSource = null;
      if (!tmp4) {
        const obj12 = { id: null, splash: null, size: null };
        ({ id: obj11.id, splash: obj11.splash } = stateFromStores1);
        const tmp2Result6 = tmp2(tmp3[28]);
        obj12.size = width * tmp5(tmp3[30]).getDevicePixelRatio();
        guildSplashSource = tmp2Result6.getGuildSplashSource(obj12);
        const tmp5Result7 = tmp5(tmp3[30]);
      }
    }
    tmp17 = closure_9(tmp2(tmp3[29]), obj10);
    tmp18 = closure_9;
    const tmp15 = closure_9(tmp2(tmp3[29]), obj10);
  }
  ({ description, name } = stateFromStores1);
  tmp5Result6 = guild(stateFromStores[23]);
  const guildTraits = guild(stateFromStores[14]).getGuildTraits(stateFromStores1);
  const tmp5Result8 = guild(stateFromStores[14]);
  const result = 0.56 * width;
  c4 = result;
  const items4 = [tmp.guildBanner, width, result];
  const clientThemesOverride = guild(stateFromStores[31]).useClientThemesOverride();
  const memo = obj2.useMemo(() => {
    const obj = {};
    const merged = Object.assign(guildBanner.guildBanner);
    obj.width = width;
    obj.height = height;
    obj.marginLeft = -width / 2;
    return obj;
  }, items4);
  const tmp5Result9 = guild(stateFromStores[31]);
  const obj13 = { style: null, children: null };
  const items5 = [tmp.headerContainer, clientThemesOverride];
  obj13.style = items5;
  let tmp18Result = null != guildSplashSource;
  const token = guild(stateFromStores[32]).useToken(tmp2(tmp3[8]).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  if (tmp18Result) {
    const obj14 = { style: memo, source: guildSplashSource };
    tmp18Result = tmp18(tmp2(tmp3[29]), obj14);
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
  const items9 = [tmp18(require("GuildBadgeV2"), { guild: stateFromStores1 }), tmp18(guild(stateFromStores[19]).Text, { lineClamp: 2, accessibilityRole: "header", variant: token, color: "mobile-text-heading-primary", children: name })];
  obj17.children = items9;
  items8[1] = closure_10(c4, obj17);
  let tmp18Result5 = null;
  if (null != description) {
    const obj18 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp18Result5 = tmp18(tmp5(tmp3[19]).Text, obj18);
  }
  items8[2] = tmp18Result5;
  const obj19 = { style: tmp.memberInfo, children: null };
  let tmp18Result6 = null;
  if (guildTraits.community) {
    const obj20 = { guildVisibility: guildTraits.visibility };
    tmp18Result6 = tmp18(closure_12, obj20);
  }
  const items10 = [tmp18Result6, ];
  const obj21 = { style: { gap: 15, flexDirection: "row" }, children: null };
  let tmp18Result7 = null != tmp12;
  if (tmp18Result7) {
    const obj22 = { type: "online", count: tmp12 };
    tmp18Result7 = tmp18(tmp2(tmp3[34]), obj22);
  }
  const items11 = [tmp18Result7, ];
  let tmp18Result8 = null != tmp11;
  if (tmp18Result8) {
    const obj23 = { type: "total", count: tmp11 };
    tmp18Result8 = tmp18(tmp2(tmp3[34]), obj23);
  }
  items11[1] = tmp18Result8;
  obj21.children = items11;
  items10[1] = closure_10(c4, obj21);
  obj19.children = items10;
  items8[3] = closure_10(c4, obj19);
  obj15.children = items8;
  items6[1] = closure_10(c4, obj15);
  obj13.children = items6;
  return closure_10(c4, obj13);
};