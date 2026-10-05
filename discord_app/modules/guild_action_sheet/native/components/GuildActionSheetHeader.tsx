// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../../_runtime/08398_AssetRegistry.js";
import GuildPopoutActionCreators from "../../../guild_profile/GuildPopoutActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildPopoutStore from "../../../guild_profile/GuildPopoutStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildSubscriptionsStore from "../../../../stores/GuildSubscriptionsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, guildVisibility, importDefault;

let c10;
let closure_4;
let hasOwnProperty;
let num;
let obj2;
let obj3;
let size;
let tmp4;
let unpackModuleId;
const AssetRegistryDefault2 = tmp4(8401);
({ View: closure_4, Image: hasOwnProperty } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  content: { padding: 16 },
  avatar: { borderRadius: 14.117647058823529, height: 60, width: 60 },
  headerContainer: obj2,
  avatarBackground: size,
  description: { marginTop: 8 },
  memberInfo: { marginTop: 16, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 16 },
  nameRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  communityPill: obj3,
  communityPillIcon: { width: 16, height: 16, marginRight: 6 },
  communityPillText: { lineHeight: num },
  guildBanner: { position: "absolute", left: "50%", top: 0 },
};
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
size = {
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
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  paddingTop: 4,
  paddingRight: 8,
  paddingBottom: 4,
  paddingLeft: 6,
  borderRadius: nativeDefault.radii.round,
};
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let closure_12 = createStyles(obj);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildVisibility) => {
      let IconComponent;
      let content;
      let items;
      let tmp5;
      let obj = require("react");
      const cResult = obj.c(18);
      guildVisibility = guildVisibility.guildVisibility;
      const tmp4 = closure_12();
      if (cResult[0] !== guildVisibility) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(require("intl").t.TME4LJ);
        importDefault = stringResult;
        let tmp9Result = AssetRegistryDefault;
        let tmp11 = stringResult;
        let tmp12;
        const tmp9 = importDefault;
        if (guildVisibility === require("GuildTraits").GuildVisibility.PUBLIC) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(require("intl").t.op2cJ6);
          importDefault = stringResult1;
          const GlobeEarthIcon = tmp(8551).GlobeEarthIcon;
          _require = GlobeEarthIcon;
          tmp9Result = tmp9(8401);
          tmp11 = stringResult1;
          tmp12 = GlobeEarthIcon;
        }
        cResult[0] = guildVisibility;
        cResult[1] = tmp9Result;
        cResult[2] = tmp12;
        cResult[3] = tmp11;
        tmp5 = tmp9Result;
      } else {
        tmp5 = cResult[1];
        _require = cResult[2];
        importDefault = cResult[3];
      }
      if (cResult[4] === tmp6) {
        let tmp15;
        if (cResult[5] === tmp7) {
          tmp15 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          let tmp16;
          let tmp20;
          let tmp22;
          if (cResult[8] === tmp4.communityPillIcon) {
            tmp16 = cResult[9];
          }
          const _Symbol = Symbol;
          const communityPillText = tmp4.communityPillText;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(require("intl").t.K7iRig);
            cResult[10] = stringResult2;
            tmp20 = stringResult2;
          } else {
            tmp20 = cResult[10];
          }
          if (cResult[11] !== tmp4.communityPillText) {
            let obj2 = { variant: "text-xs/medium", color: "text-default", style: communityPillText, children: tmp20 };
            const tmp24 = closure_10(require("Text/Text").Text, obj2);
            cResult[11] = tmp4.communityPillText;
            cResult[12] = tmp24;
            tmp22 = tmp24;
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] === tmp4.communityPill) {
            if (cResult[14] === tmp15) {
              if (cResult[15] === tmp16) {
                let tmp25;
                if (cResult[16] === tmp22) {
                  tmp25 = cResult[17];
                }
                return tmp25;
              }
            }
          }
          const obj3 = { style: tmp14, accessibilityRole: "button", onPress: tmp15, children: items };
          items = [tmp16, tmp22];
          const tmp27 = closure_11(require("Pressables").PressableOpacity, obj3);
          cResult[13] = tmp4.communityPill;
          cResult[14] = tmp15;
          cResult[15] = tmp16;
          cResult[16] = tmp22;
          cResult[17] = tmp27;
          tmp25 = tmp27;
        }
        const obj4 = { style: tmp4.communityPillIcon, source: tmp5, disableColor: true };
        const tmp18 = closure_10(require("native").Icon, obj4);
        cResult[7] = tmp5;
        cResult[8] = tmp4.communityPillIcon;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      }
      const fn = function y() {
        const obj = ToastActionCreatorsDefault;
        const obj2 = { key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content, IconComponent };
        obj.open(obj2);
      };
      cResult[4] = tmp6;
      cResult[5] = tmp7;
      cResult[6] = fn;
      tmp15 = fn;
    }
  : (guildVisibility) => {
      let content;
      let intl3;
      let items;
      let GlobeEarthIcon;
      guildVisibility = guildVisibility.guildVisibility;
      const tmp = closure_12();
      const intl = GlobeEarthIcon(1126).intl;
      importDefault = intl.string(GlobeEarthIcon(1126).t.TME4LJ);
      let tmp4Result = AssetRegistryDefault;
      if (guildVisibility === GlobeEarthIcon(8397).GuildVisibility.PUBLIC) {
        const intl2 = tmp2(1126).intl;
        importDefault = intl2.string(tmp2(1126).t.op2cJ6);
        GlobeEarthIcon = tmp2(8551).GlobeEarthIcon;
        tmp4Result = AssetRegistryDefault2;
      }
      let obj = {
        style: tmp.communityPill,
        accessibilityRole: "button",
        onPress() {
          const obj = ToastActionCreatorsDefault;
          const obj2 = { key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content, IconComponent: GlobeEarthIcon };
          obj.open(obj2);
        },
        children: items,
      };
      const PressableOpacity = tmp2(5909).PressableOpacity;
      let obj2 = { style: tmp.communityPillIcon, source: tmp4Result, disableColor: true };
      items = [closure_10(GlobeEarthIcon(1188).Icon, obj2)];
      const obj3 = {
        variant: "text-xs/medium",
        color: "text-default",
        style: tmp.communityPillText,
        children: intl3.string(GlobeEarthIcon(1126).t.K7iRig),
      };
      const Text = tmp2(4886).Text;
      intl3 = tmp2(1126).intl;
      items[1] = closure_10(Text, obj3);
      return closure_11(PressableOpacity, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx");

export default function GuildActionSheetHeader(guild) {
  let description;
  let guildBanner;
  let guildSplashSource;
  let height;
  let items10;
  let items11;
  let items5;
  let items6;
  let items8;
  let items9;
  let memberCount;
  let name;
  let obj6;
  let onlineCount;
  let tmp18;
  let tmp19;
  let tmp2Result;
  let tmp2Result5;
  let tmp5Result7;
  guild = guild.guild;
  let stateFromStores;
  let width;
  let c4;
  const tmp = closure_12();
  importDefault = tmp;
  const tmp4 = require("useIsWindowLarge")();
  let obj = guild(stateFromStores[22]);
  const items = [GuildSubscriptionsStore];
  stateFromStores = obj.useStateFromStores(items, () =>
    GuildSubscriptionsStore.isSubscribedToAnyGuildChannel(guild.id),
  );
  let obj2 = width;
  const items1 = [guild, stateFromStores];
  const effect = width.useEffect(() => {
    let isGuildRecordResult = !stateFromStores;
    if (isGuildRecordResult) {
      const obj = GuildRecordUtils;
      isGuildRecordResult = obj.isGuildRecord(guild);
    }
    if (isGuildRecordResult) {
      const obj2 = GuildPopoutActionCreators;
      const guildForPopout = obj2.fetchGuildForPopout(guild.id);
    }
  }, items1);
  const items2 = [GuildStore];
  const obj3 = guild(stateFromStores[22]);
  let stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guild.id));
  const items3 = [GuildPopoutStore];
  const obj4 = guild(stateFromStores[22]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => GuildPopoutStore.getGuild(guild.id));
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores2;
  }
  if (stateFromStores1 == null) {
    stateFromStores1 = guild;
  }
  const tmp5Result = guild(stateFromStores[25]);
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
  width = tmp2(tmp3[26])().width;
  const tmp5Result6 = guild(stateFromStores[23]);
  if (tmp5Result6.isGuildRecord(stateFromStores1)) {
    const features = stateFromStores1.features;
    const obj5 = {
      style: tmp.avatarBackground,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      accessibilityRole: "none",
      children: closure_10(tmp2Result, obj6),
    };
    const hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    obj6 = {
      style: tmp.avatar,
      guild: stateFromStores1,
      size: guild(stateFromStores[27]).GuildIconSizes.XLARGE,
      animate: true,
    };
    let guildBannerSource = null;
    tmp2Result = require("GuildIcon");
    const tmp25 = closure_10(c4, obj5);
    if (null != stateFromStores1.banner) {
      guildBannerSource = null;
      if (!tmp4) {
        const obj7 = { id: null, banner: null };
        ({ id: obj15.id, banner: obj15.banner } = stateFromStores1);
        const tmp2Result4 = require("AvatarUtils");
        guildBannerSource = tmp2Result4.getGuildBannerSource(obj7, hasItem);
      }
    }
    guildSplashSource = guildBannerSource;
    tmp18 = tmp25;
    tmp19 = closure_10;
  } else {
    const obj9 = { id: null, icon: null, canAnimate: true, size: 68 };
    ({ id: obj8.id, icon: obj8.icon } = stateFromStores1);
    const obj11 = { style: tmp.avatar, source: tmp2Result5.getGuildIconSource(obj9) };
    guildSplashSource = null;
    tmp2Result5 = require("AvatarUtils");
    const tmp15 = closure_10(closure_5, obj11);
    if (null != stateFromStores1.splash) {
      guildSplashSource = null;
      if (!tmp4) {
        ({ id: obj10.id, splash: obj10.splash } = stateFromStores1);
        const obj12 = { id: null, splash: null, size: width * tmp5Result7.getDevicePixelRatio() };
        const getGuildSplashSource = require("AvatarUtils").getGuildSplashSource;
        require("AvatarUtils");
        tmp5Result7 = guild(stateFromStores[29]);
        guildSplashSource = getGuildSplashSource(obj12);
      }
    }
    tmp18 = tmp15;
    tmp19 = closure_10;
  }
  ({ description, name } = stateFromStores1);
  const tmp5Result8 = guild(stateFromStores[14]);
  const guildTraits = tmp5Result8.getGuildTraits(stateFromStores1);
  const result = 0.56 * width;
  c4 = result;
  const items4 = [tmp.guildBanner, width, result];
  const tmp5Result9 = guild(stateFromStores[30]);
  const clientThemesOverride = tmp5Result9.useClientThemesOverride();
  const memo = obj2.useMemo(() => {
    const obj = { width, height, marginLeft: -width / 2 };
    const merged = Object.assign(guildBanner.guildBanner);
    return obj;
  }, items4);
  const obj13 = { style: items5, children: items6 };
  items5 = [tmp.headerContainer, clientThemesOverride];
  let tmp19Result = null != guildSplashSource;
  const tmp5Result10 = guild(stateFromStores[31]);
  const token = tmp5Result10.useToken(tmp2(tmp3[8]).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  if (tmp19Result) {
    const obj14 = { style: memo, source: guildSplashSource };
    tmp19Result = tmp19(tmp2(tmp3[32]), obj14);
  }
  items6 = [tmp19Result];
  const items7 = [tmp.content];
  let num = 0;
  if (null != guildSplashSource) {
    num = result - 48;
  }
  const obj16 = { style: items7, children: items8 };
  items7[1] = { marginTop: num };
  items8 = [tmp18, , ,];
  const obj17 = { style: tmp.nameRow, children: items9 };
  items9 = [
    tmp19(require("GuildBadgeV2"), { guild: stateFromStores1 }),
    tmp19(guild(stateFromStores[19]).Text, {
      lineClamp: 2,
      accessibilityRole: "header",
      variant: token,
      color: "mobile-text-heading-primary",
      children: name,
    }),
  ];
  items8[1] = closure_11(c4, obj17);
  let tmp19Result5 = null;
  if (null != description) {
    const obj18 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp19Result5 = tmp19(tmp5(tmp3[19]).Text, obj18);
  }
  items8[2] = tmp19Result5;
  let tmp19Result6 = null;
  const obj19 = { style: tmp.memberInfo, children: items10 };
  if (guildTraits.community) {
    const obj20 = { guildVisibility: guildTraits.visibility };
    tmp19Result6 = tmp19(closure_13, obj20);
  }
  items10 = [tmp19Result6];
  let tmp19Result7 = null != tmp12;
  const obj21 = { style: { gap: 15, flexDirection: "row" }, children: items11 };
  if (tmp19Result7) {
    const obj22 = { type: "online", count: tmp12 };
    tmp19Result7 = tmp19(tmp2(tmp3[34]), obj22);
  }
  items11 = [tmp19Result7];
  let tmp19Result8 = null != tmp11;
  if (tmp19Result8) {
    const obj23 = { type: "total", count: tmp11 };
    tmp19Result8 = tmp19(tmp2(tmp3[34]), obj23);
  }
  items11[1] = tmp19Result8;
  items10[1] = closure_11(c4, obj21);
  items8[3] = closure_11(c4, obj19);
  items6[1] = closure_11(c4, obj16);
  return closure_11(c4, obj13);
}
