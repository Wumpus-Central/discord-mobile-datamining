// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import actions_BoostingActionCreators from "../../../../actions/native/BoostingActionCreators.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import utils_openGiftModal from "../../../premium/native/utils/openGiftModal.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildBoostSlotStore from "../../../../stores/billing/GuildBoostSlotStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: c10 } = Constants);
const FractionalPremiumStates = fn(1374).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = 10 * DurationsDefault.Millis.SECOND;
const createStyles = fn(4639);
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
const native = fn(1177);
const merged = Object.assign(native.generateBoxShadowStyle(fn(1177).EIGHT_DP_ELEVATION_SHADOW_PARAMS));
obj2.ctaPrimary = {};
obj2.ctaSecondary = { marginTop: 10 };
obj2.giftIcon = { marginRight: 8 };
obj2.gradient = { overflow: "visible" };
obj2.headerWave = { bottom: -1, left: "-20%", position: "absolute", height: 125, width: "150%", zIndex: 1 };
obj2.headerStars = { height: "75%", left: "5%", opacity: 0.9, position: "absolute", top: 0, width: "90%", zIndex: 1 };
obj2.boostingUnavailablePill = { marginTop: -13, marginBottom: 23 };
let closure_15 = createStyles.createStyles(obj2);
const __initData = {
  code: "function GuildBoostingMarketingCtaBarTsx1(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}",
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
  const isVisible = tmp2[0];
  dependencyMap = tmp2[1];
  analyticsLocations = isVisible(7269)(isVisible(7289).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  const tmp6 = isVisible(7269);
  const items = [ref];
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
  closure_129_0 = isVisible;
  const obj2 = guild(563);
  const fn = function o() {
    let num = 0;
    if (guild) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, { duration: 250 }) };
  };
  let obj3 = guild(4376);
  fn.__closure = { withTiming: guild(4640).withTiming, isVisible };
  fn.__workletHash = 6895237370657;
  fn.__initData = __initData;
  closure_130_0 = tmp12;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj4 = { withTiming: guild(4640).withTiming, isVisible };
  const fn2 = function o() {
    let num = 0;
    if (guild) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, { duration: 250 }) };
  };
  const obj5 = guild(4376);
  fn2.__closure = { withTiming: guild(4640).withTiming, isVisible: !isVisible };
  fn2.__workletHash = 6895237370657;
  fn2.__initData = __initData;
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const obj6 = { withTiming: guild(4640).withTiming, isVisible: !isVisible };
  const tmp14 = isVisible(13548);
  const tmp14Result = isVisible(13548)(fractionalPremiumInfo.endsAt, guild(13548).CountDownMessageTypes.LONG_TIME_LEFT);
  const isInReverseTrial = guild(8173).useIsInReverseTrial();
  const obj7 = guild(8173);
  const items3 = [isVisible, memo];
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
  const obj8 = isVisible(4297);
  if (premiumGroupRole === guild(1380).PremiumSubscriptionGroupRole.MEMBER) {
    const obj9 = { style: tmp.boostingUnavailablePill };
    let tmp20 = closure_12(tmp4(13607), obj9);
  } else {
    tmp20 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      const obj10 = { fpDurationText: tmp14Result, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp20 = closure_12(tmp4(13609), obj10);
    }
  }
  const obj11 = {
    onLayout,
    angle: 160,
    angleCenter: { x: 0.5, y: 0.5 },
    colors: null,
    locations: null,
    useAngle: true,
    style: null,
    children: null,
  };
  const isPremiumResult = isVisible(4297).isPremium(stateFromStores);
  const items4 = [
    isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1,
    isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2,
    isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3,
    isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4,
    isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5,
  ];
  obj11.colors = items4;
  obj11.locations = [0, 0.3221, 0.429, 0.7606, 1];
  obj11.style = tmp.gradient;
  const obj12 = {
    angle: 0,
    angleCenter: { x: 0.5, y: 0.5 },
    colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"],
    locations: [0.12, 0.5],
    useAngle: true,
    style: tmp.gradient,
    children: null,
  };
  const tmp4Result = isVisible(5071);
  const items5 = [closure_12(isVisible(13669), { guild }), , ,];
  const obj13 = { style: tmp.headerContent, children: null };
  const obj14 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm", children: null };
  const intl = guild(1115).intl;
  obj14.children = intl.string(guild(1115).t["AF+Tyh"]);
  const items6 = [closure_12(guild(4635).Heading, obj14), , , ,];
  const obj15 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const tmp4Result3 = isVisible(5071);
  obj15.size = guild(5669).GuildIconSizes.LARGE;
  items6[1] = closure_12(isVisible(5669), obj15);
  const obj16 = {
    onPress() {
      window.clearTimeout(ref.current);
      closure_2((arg0) => !arg0);
    },
    children: null,
  };
  const items7 = [
    closure_12(guild(4635).Text, {
      style: tmp.guildName,
      color: "text-overlay-light",
      variant: "text-md/bold",
      children: guild.name,
    }),
  ];
  const obj18 = { style: tmp.guildBoostCountWrapper, children: null };
  const obj19 = { style: null, children: null };
  const items8 = [animatedStyle1, tmp.totalBoostCountWrapper];
  obj19.style = items8;
  const obj17 = { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name };
  const tmp4Result4 = isVisible(5669);
  const items9 = [
    closure_12(guild(1177).Icon, {
      style: tmp.guildBoostCountIcon,
      source: isVisible(13594),
      color: isVisible(576).unsafe_rawColors.GUILD_BOOSTING_PINK,
      size: guild(1177).Icon.Sizes.SMALL,
    }),
  ];
  const obj21 = {
    style: tmp.guildBoostCount,
    accessibilityRole: "header",
    variant: "text-sm/bold",
    color: "text-overlay-light",
    children: null,
  };
  const intl2 = guild(1115).intl;
  obj21.children = intl2.format(guild(1115).t["pob/cL"], {
    subscriptions: isVisible(4548)(premiumGroupRole.guild.id).total,
  });
  items9[1] = closure_12(guild(4635).Text, obj21);
  obj19.children = items9;
  const items10 = [closure_13(isVisible(4376).View, obj19)];
  const obj22 = { style: null, children: null };
  const items11 = [animatedStyle, tmp.guildBoostCurrentUserCountWrapper];
  obj22.style = items11;
  const obj23 = { style: null, variant: "text-sm/bold", color: "text-overlay-light", children: null };
  const items12 = [,];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  obj23.style = items12;
  const intl3 = guild(1115).intl;
  obj23.children = intl3.format(guild(1115).t.xXb78j, { numSubscriptions: memo });
  obj22.children = closure_12(guild(4635).Text, obj23);
  items10[1] = closure_12(isVisible(4376).View, obj22);
  obj18.children = items10;
  items7[1] = closure_13(memo, obj18);
  obj16.children = items7;
  items6[2] = closure_13(guild(5207).PressableOpacity, obj16);
  items6[3] = tmp20;
  const obj24 = {
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
  obj24.styles = items13;
  items6[4] = closure_12(isVisible(7509), obj24);
  obj13.children = items6;
  items5[1] = closure_13(memo, obj13);
  items5[2] = closure_12(isVisible(13672), { style: tmp.headerStars });
  items5[3] = closure_12(isVisible(13673), { style: tmp.headerWave });
  obj12.children = items5;
  obj11.children = closure_13(tmp4Result3, obj12);
  const items14 = [closure_12(tmp4Result, obj11)];
  const obj27 = { style: null, children: null };
  const items15 = [,];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  obj27.style = items15;
  if (isPremiumResult) {
    const obj28 = { variant: "secondary", text: null, onPress: null, icon: null, grow: true };
    const intl5 = guild(1115).intl;
    obj28.text = intl5.string(guild(1115).t["8MYSQw"]);
    obj28.onPress = function onPress() {
      actions_BoostingActionCreators.closeApplyBoostModal();
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
    const obj29 = { size: guild(1177).Icon.Sizes.SMALL, source: tmp4(13674), style: tmp.giftIcon };
    obj28.icon = closure_12(guild(1177).Icon, obj29);
    let obj30 = obj28;
  } else {
    obj30 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl4 = guild(1115).intl;
    obj30.text = intl4.string(guild(1115).t.pj0XBN);
    obj30.onPress = function onPress() {
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
  const obj31 = { children: null };
  obj27.children = closure_12(guild(5059).Button, obj30);
  items14[1] = closure_12(memo, obj27);
  obj31.children = items14;
  return closure_13(memo, obj31);
}
