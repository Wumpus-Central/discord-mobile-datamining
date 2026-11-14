// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import BoostingActionCreators from "../../../../actions/native/BoostingActionCreators.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import utils_openGiftModal from "../../../premium/native/utils/openGiftModal.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildBoostSlotStore from "../../../../stores/billing/GuildBoostSlotStore.tsx";

require = fn;
function useBoostCountAnimatedStyles(arg0) {
  items = [closure_16, timing_timing.withTiming, arg0];
  c0 = undefined;
  c1 = undefined;
  [tmp, tmp2, tmp3] = items;
  class GuildBoostingMarketingCtaBarTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, { duration: 250 }) };
      return obj;
    }
  }
  const items1 = [tmp2, tmp3];
  GuildBoostingMarketingCtaBarTsx1.__closure = items1;
  GuildBoostingMarketingCtaBarTsx1.__workletHash = 9651184930840;
  GuildBoostingMarketingCtaBarTsx1.__initData = tmp;
  return _mod1655.useAnimatedStyle(GuildBoostingMarketingCtaBarTsx1);
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: closure_10 } = Constants);
const FractionalPremiumStates = fn(1390).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = 10 * DurationsDefault.Millis.SECOND;
const createStyles = fn(5306);
let obj2 = {
  heading: { alignSelf: "center", marginBottom: 24, maxWidth: 395, paddingHorizontal: 16, textAlign: "center" },
  headerContent: { paddingHorizontal: 16, paddingTop: 32, position: "relative", zIndex: 2 },
  guildIcon: null,
  guildIconText: null,
  guildName: null,
  guildBoostCountWrapper: null,
  totalBoostCountWrapper: null,
  guildBoostCountIcon: null,
  guildBoostCount: null,
  guildBoostCurrentUserCountWrapper: null,
  guildBoostCurrentUserCount: null,
  cta: null,
  ctaPrimary: null,
  ctaSecondary: null,
  giftIcon: null,
  gradient: null,
  headerWave: null,
  headerStars: null,
  boostingUnavailablePill: null,
};
let size = {
  alignSelf: "center",
  borderRadius: 24,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginBottom: 10,
  height: 48,
  width: 48,
};
obj2.guildIcon = size;
obj2.guildIconText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.guildName = { alignSelf: "center", maxWidth: "50%", textAlign: "center" };
obj2.guildBoostCountWrapper = { position: "relative" };
obj2.totalBoostCountWrapper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: 16,
  paddingBottom: 16,
  paddingTop: 3,
  position: "relative",
};
obj2.guildBoostCountIcon = { flexGrow: 0, flexShrink: 0, marginRight: 3 };
obj2.guildBoostCount = { flexGrow: 0, flexShrink: 1, opacity: 0.6 };
obj2.guildBoostCurrentUserCountWrapper = { position: "absolute", top: 3, width: "100%" };
obj2.guildBoostCurrentUserCount = { alignSelf: "center" };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.cta = { alignSelf: "center", borderRadius: nativeDefault.radii.xl, maxWidth: 300, width: "90%" };
const native = fn(1187);
const merged = Object.assign(native.generateBoxShadowStyle(fn(1187).EIGHT_DP_ELEVATION_SHADOW_PARAMS));
obj2.ctaPrimary = {};
obj2.ctaSecondary = { marginTop: 10 };
obj2.giftIcon = { marginRight: 8 };
obj2.gradient = { overflow: "visible" };
obj2.headerWave = { bottom: -1, left: "-20%", position: "absolute", height: 125, width: "150%", zIndex: 1 };
obj2.headerStars = { height: "75%", left: "5%", opacity: 0.9, position: "absolute", top: 0, width: "90%", zIndex: 1 };
obj2.boostingUnavailablePill = { marginTop: -13, marginBottom: 23 };
let closure_15 = createStyles.createStyles(obj2);
let closure_16 = {
  code: "(function GuildBoostingMarketingCtaBarTsx1(){let[withTiming,isVisible]=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};})",
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx",
);

export default function GuildBoostingMarketingCtaBar(premiumGroupRole) {
  const tmp = closure_15();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  let tmp2 = analyticsLocations(stateFromStores1.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  analyticsLocations = first(7918)(first(7937).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  const tmp6 = first(7918);
  items = [ref];
  const stateFromStores = guild(563).useStateFromStores(items, () => ref.getCurrentUser());
  let obj = guild(563);
  const items1 = [GuildBoostSlotStore];
  stateFromStores1 = guild(563).useStateFromStores(items1, () => boostSlots.boostSlots);
  const items2 = [stateFromStores1, guild.id];
  const memo = stateFromStores1.useMemo(() => {
    const keys = Object.keys(stateFromStores1);
    return keys.filter((item) => {
      let tmp2 = null != tmp.premiumGuildSubscription;
      if (tmp2) {
        tmp2 = tmp.premiumGuildSubscription.guildId === id.id;
      }
      return tmp2;
    }).length;
  }, items2);
  const obj2 = guild(563);
  const tmp11 = useBoostCountAnimatedStyles(first);
  const tmp12 = useBoostCountAnimatedStyles(!first);
  const tmp13 = first(15328);
  const tmp13Result = first(15328)(fractionalPremiumInfo.endsAt, guild(15328).CountDownMessageTypes.LONG_TIME_LEFT);
  const isInReverseTrial = guild(9317).useIsInReverseTrial();
  let obj3 = guild(9317);
  const items3 = [first, memo];
  const effect = stateFromStores1.useEffect(() => {
    if (tmp) {
      const _window = window;
      ref.current = window.setTimeout(() => {
        closure_1_2((arg0) => !arg0);
      }, closure_14);
    }
    return () => {
      window.clearTimeout(ref.current);
    };
  }, items3);
  ref = stateFromStores1.useRef(-1);
  const obj4 = first(2174);
  if (premiumGroupRole === guild(1401).PremiumSubscriptionGroupRole.MEMBER) {
    const obj5 = { style: tmp.boostingUnavailablePill };
    let tmp19 = closure_12(tmp4(15388), obj5);
  } else {
    tmp19 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      const obj6 = { fpDurationText: tmp13Result, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp19 = closure_12(tmp4(15390), obj6);
    }
  }
  const obj7 = {
    onLayout,
    angle: 160,
    angleCenter: { x: 0.5, y: 0.5 },
    colors: null,
    locations: null,
    useAngle: true,
    style: null,
    children: null,
  };
  const isPremiumResult = first(2174).isPremium(stateFromStores);
  const items4 = [
    first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1,
    first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2,
    first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3,
    first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4,
    first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5,
  ];
  obj7.colors = items4;
  obj7.locations = [0, 0.3221, 0.429, 0.7606, 1];
  obj7.style = tmp.gradient;
  const obj8 = {
    angle: 0,
    angleCenter: { x: 0.5, y: 0.5 },
    colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"],
    locations: [0.12, 0.5],
    useAngle: true,
    style: tmp.gradient,
    children: null,
  };
  const tmp4Result = first(5893);
  const items5 = [closure_12(first(16001), { guild }), , ,];
  const obj9 = { style: tmp.headerContent, children: null };
  const obj10 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm", children: null };
  const intl = guild(1113).intl;
  obj10.children = intl.string(guild(1113).t["AF+Tyh"]);
  const items6 = [closure_12(guild(5929).Heading, obj10), , , ,];
  const obj11 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const tmp4Result3 = first(5893);
  obj11.size = guild(7720).GuildIconSizes.LARGE;
  items6[1] = closure_12(first(7720), obj11);
  const obj12 = {
    onPress: function handleBoostCountPress() {
      window.clearTimeout(ref.current);
      closure_2((arg0) => !arg0);
    },
    children: null,
  };
  const items7 = [
    closure_12(guild(5929).Text, {
      style: tmp.guildName,
      color: "text-overlay-light",
      variant: "body-md/semibold",
      children: guild.name,
    }),
  ];
  const obj14 = { style: tmp.guildBoostCountWrapper, children: null };
  const obj15 = { style: null, children: null };
  const items8 = [tmp12, tmp.totalBoostCountWrapper];
  obj15.style = items8;
  const obj13 = {
    style: tmp.guildName,
    color: "text-overlay-light",
    variant: "body-md/semibold",
    children: guild.name,
  };
  const tmp4Result4 = first(7720);
  const items9 = [
    closure_12(guild(1187).Icon, {
      style: tmp.guildBoostCountIcon,
      source: first(15375),
      color: first(575).unsafe_rawColors.GUILD_BOOSTING_PINK,
      size: guild(1187).Icon.Sizes.SMALL,
    }),
  ];
  const obj17 = {
    style: tmp.guildBoostCount,
    accessibilityRole: "header",
    variant: "body-sm/semibold",
    color: "text-overlay-light",
    children: null,
  };
  const intl2 = guild(1113).intl;
  obj17.children = intl2.format(guild(1113).t["pob/cL"], {
    subscriptions: first(9241)(premiumGroupRole.guild.id).total,
  });
  items9[1] = closure_12(guild(5929).Text, obj17);
  obj15.children = items9;
  const items10 = [closure_13(first(1655).View, obj15)];
  const obj18 = { style: null, children: null };
  const items11 = [tmp11, tmp.guildBoostCurrentUserCountWrapper];
  obj18.style = items11;
  const obj19 = { style: null, variant: "body-sm/semibold", color: "text-overlay-light", children: null };
  const items12 = [,];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  obj19.style = items12;
  const intl3 = guild(1113).intl;
  obj19.children = intl3.format(guild(1113).t.xXb78j, { numSubscriptions: memo });
  obj18.children = closure_12(guild(5929).Text, obj19);
  items10[1] = closure_12(first(1655).View, obj18);
  obj14.children = items10;
  items7[1] = closure_13(memo, obj14);
  obj12.children = items7;
  items6[2] = closure_13(guild(7428).PressableOpacity, obj12);
  items6[3] = tmp19;
  const obj20 = {
    styles: null,
    guild,
    previousGuildSubscriptionSlot,
    analyticsSection: constants3.HEADER,
    fractionalPremiumState: fractionalPremiumInfo.fractionalState,
    premiumGroupRole,
    intent,
    onResult,
  };
  const items13 = [,];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  obj20.styles = items13;
  items6[4] = closure_12(first(10799), obj20);
  obj9.children = items6;
  items5[1] = closure_13(memo, obj9);
  items5[2] = closure_12(first(16004), { style: tmp.headerStars });
  items5[3] = closure_12(first(16005), { style: tmp.headerWave });
  obj8.children = items5;
  obj7.children = closure_13(tmp4Result3, obj8);
  const items14 = [closure_12(tmp4Result, obj7)];
  const obj23 = { style: null, children: null };
  const items15 = [,];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  obj23.style = items15;
  if (isPremiumResult) {
    const obj24 = { variant: "secondary", text: null, onPress: null, icon: null, grow: true };
    const intl5 = guild(1113).intl;
    obj24.text = intl5.string(guild(1113).t["8MYSQw"]);
    obj24.onPress = function handleGiftPress() {
      BoostingActionCreators.closeApplyBoostModal();
      const obj3 = {
        analyticsLocation: {
          page: constants2.PREMIUM_GUILD_USER_MODAL,
          section: constants3.HEADER,
          object: constants.BUTTON_CTA,
        },
        analyticsLocations,
      };
      utils_openGiftModal.openGiftModal(obj3);
    };
    const obj25 = { size: guild(1187).Icon.Sizes.SMALL, source: tmp4(16006), style: tmp.giftIcon };
    obj24.icon = closure_12(guild(1187).Icon, obj25);
    let obj26 = obj24;
  } else {
    obj26 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl4 = guild(1113).intl;
    obj26.text = intl4.string(guild(1113).t.pj0XBN);
    obj26.onPress = function handleNavigateToPremium() {
      const obj = {
        analyticsLocation: {
          page: constants2.PREMIUM_GUILD_USER_MODAL,
          section: constants3.HEADER,
          object: constants.BUTTON_CTA,
        },
        analyticsLocations,
      };
      openPremiumModalDefault(obj);
    };
  }
  const obj27 = { children: null };
  obj23.children = closure_12(guild(5936).Button, obj26);
  items14[1] = closure_12(memo, obj23);
  obj27.children = items14;
  return closure_13(memo, obj27);
}
