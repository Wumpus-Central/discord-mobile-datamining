// === Module 13575: GuildBoostingMarketingCtaBar ===

// Module 13575 (GuildBoostingMarketingCtaBar)
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1090 */;
import timing from "timing" /* 4561 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5434 */;
import openPremiumModalDefault from "openPremiumModal" /* 9392 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10661 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4455 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: c10 } = Constants);
const FractionalPremiumStates = fn(1373).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = 10 * DurationsDefault.Millis.SECOND;
fn(4560);
let createStyles = { heading: { alignSelf: "center", marginBottom: 24, maxWidth: 395, paddingHorizontal: 16, textAlign: "center" }, headerContent: { paddingHorizontal: 16, paddingTop: 32, position: "relative", zIndex: 2 }, guildIcon: null, guildIconText: null, guildName: null, guildBoostCountWrapper: null, totalBoostCountWrapper: null, guildBoostCountIcon: null, guildBoostCount: null, guildBoostCurrentUserCountWrapper: null, guildBoostCurrentUserCount: null, cta: null, ctaPrimary: null, ctaSecondary: null, giftIcon: null, gradient: null, headerWave: null, headerStars: null, boostingUnavailablePill: null };
let size = { alignSelf: "center", borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 10, height: 48, width: 48 };
createStyles.guildIcon = size;
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.guildIconText = createStyles;
createStyles.guildName = { alignSelf: "center", maxWidth: "50%", textAlign: "center" };
createStyles.guildBoostCountWrapper = { position: "relative" };
createStyles.totalBoostCountWrapper = { display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 16, paddingBottom: 16, paddingTop: 3, position: "relative" };
createStyles.guildBoostCountIcon = { flexGrow: 0, flexShrink: 0, marginRight: 3 };
createStyles.guildBoostCount = { flexGrow: 0, flexShrink: 1, opacity: 0.6 };
createStyles.guildBoostCurrentUserCountWrapper = { position: "absolute", top: 3, width: "100%" };
createStyles.guildBoostCurrentUserCount = { alignSelf: "center" };
createStyles.cta = { alignSelf: "center", borderRadius: nativeDefault.radii.xl, maxWidth: 300, width: "90%" };
const native = fn(1178);
const merged = Object.assign(native.generateBoxShadowStyle(fn(1178).EIGHT_DP_ELEVATION_SHADOW_PARAMS));
createStyles.ctaPrimary = {};
createStyles.ctaSecondary = { marginTop: 10 };
createStyles.giftIcon = { marginRight: 8 };
createStyles.gradient = { overflow: "visible" };
createStyles.headerWave = { bottom: -1, left: "-20%", position: "absolute", height: 125, width: "150%", zIndex: 1 };
createStyles.headerStars = { height: "75%", left: "5%", opacity: 0.9, position: "absolute", top: 0, width: "90%", zIndex: 1 };
createStyles.boostingUnavailablePill = { marginTop: -13, marginBottom: 23 };
let closure_15 = createStyles.createStyles(createStyles);
const __initData = { code: "function GuildBoostingMarketingCtaBarTsx1(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx");

export default function GuildBoostingMarketingCtaBar(premiumGroupRole) {
  const tmp = closure_15();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  let tmp2 = analyticsLocations(stateFromStores1.useState(false), 2);
  const isVisible = tmp2[0];
  dependencyMap = tmp2[1];
  analyticsLocations = isVisible(7162)(isVisible(7182).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  let obj = guild(563);
  const items = [ref];
  const stateFromStores = obj.useStateFromStores(items, () => ref.getCurrentUser());
  let obj1 = guild(563);
  const items1 = [GuildBoostSlotStore];
  stateFromStores1 = obj1.useStateFromStores(items1, () => boostSlots.boostSlots);
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
  let obj2 = guild(4296);
  const fn = function o() {
    let obj = timing;
    let num = 0;
    if (guild) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, { duration: 250 }) };
    return obj;
  };
  obj = { withTiming: guild(4561).withTiming, isVisible };
  fn.__closure = obj;
  fn.__workletHash = 6895237370657;
  fn.__initData = __initData;
  closure_130_0 = tmp12;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = guild(4296);
  const fn2 = function o() {
    let obj = timing;
    let num = 0;
    if (guild) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, { duration: 250 }) };
    return obj;
  };
  obj = { withTiming: guild(4561).withTiming, isVisible: tmp12 };
  fn2.__closure = obj;
  fn2.__workletHash = 6895237370657;
  fn2.__initData = __initData;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  const tmp6 = isVisible(7162);
  const tmp14 = isVisible(13461);
  let obj6 = guild(8065);
  const isInReverseTrial = obj6.useIsInReverseTrial();
  const tmp14Result = isVisible(13461)(fractionalPremiumInfo.endsAt, guild(13461).CountDownMessageTypes.LONG_TIME_LEFT);
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
  let obj7 = isVisible(4218);
  ref = stateFromStores1.useRef(-1);
  if (premiumGroupRole === guild(1379).PremiumSubscriptionGroupRole.MEMBER) {
    obj1 = { style: tmp.boostingUnavailablePill };
    let tmp20 = closure_12(tmp4(13515), obj1);
  } else {
    tmp20 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      obj2 = { fpDurationText: tmp14Result, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp20 = closure_12(tmp4(13517), obj2);
    }
  }
  const obj3 = { onLayout, angle: 160, angleCenter: { x: 0.5, y: 0.5 }, colors: null, locations: null, useAngle: true, style: null, children: null };
  tmp4(4987);
  const items4 = [isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1, isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2, isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3, isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4, isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5];
  obj3.colors = items4;
  obj3.locations = [0, 0.3221, 0.429, 0.7606, 1];
  obj3.style = tmp.gradient;
  obj4 = { angle: 0, angleCenter: { x: 0.5, y: 0.5 }, colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"], locations: [0.12, 0.5], useAngle: true, style: tmp.gradient, children: null };
  const tmp4Result = tmp4(4987);
  const items5 = [closure_12(isVisible(13576), { guild }), , , ];
  const obj5 = { style: tmp.headerContent, children: null };
  obj6 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm", children: null };
  const intl = tmp7(1114).intl;
  obj6.children = intl.string(guild(1114).t["AF+Tyh"]);
  const items6 = [closure_12(guild(4556).Heading, obj6), , , , ];
  obj7 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const isPremiumResult = obj7.isPremium(stateFromStores);
  const tmp23 = closure_13;
  obj7.size = guild(5584).GuildIconSizes.LARGE;
  items6[1] = closure_12(isVisible(5584), obj7);
  const obj8 = {
    onPress() {
      window.clearTimeout(ref.current);
      closure_2((arg0) => !arg0);
    },
    children: null
  };
  const items7 = [closure_12(guild(4556).Text, { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name }), ];
  const obj10 = { style: tmp.guildBoostCountWrapper, children: null };
  const obj11 = { style: null, children: null };
  const items8 = [animatedStyle1, tmp.totalBoostCountWrapper];
  obj11.style = items8;
  const obj9 = { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name };
  const tmp4Result1 = isVisible(5584);
  const items9 = [closure_12(guild(1178).Icon, { style: tmp.guildBoostCountIcon, source: isVisible(13502), color: isVisible(576).unsafe_rawColors.GUILD_BOOSTING_PINK, size: guild(1178).Icon.Sizes.SMALL }), ];
  const obj13 = { style: tmp.guildBoostCount, accessibilityRole: "header", variant: "text-sm/bold", color: "text-overlay-light", children: null };
  const intl2 = tmp7(1114).intl;
  obj13.children = intl2.format(guild(1114).t["pob/cL"], { subscriptions: isVisible(4469)(premiumGroupRole.guild.id).total });
  items9[1] = closure_12(guild(4556).Text, obj13);
  obj11.children = items9;
  const items10 = [closure_13(isVisible(4296).View, obj11), ];
  const obj14 = { style: null, children: null };
  const items11 = [animatedStyle, tmp.guildBoostCurrentUserCountWrapper];
  obj14.style = items11;
  const obj15 = { style: null, variant: "text-sm/bold", color: "text-overlay-light", children: null };
  const items12 = [, ];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  obj15.style = items12;
  const intl3 = tmp7(1114).intl;
  obj15.children = intl3.format(guild(1114).t.xXb78j, { numSubscriptions: memo });
  obj14.children = closure_12(guild(4556).Text, obj15);
  items10[1] = closure_12(isVisible(4296).View, obj14);
  obj10.children = items10;
  items7[1] = closure_13(memo, obj10);
  obj8.children = items7;
  items6[2] = closure_13(guild(5123).PressableOpacity, obj8);
  items6[3] = tmp20;
  const obj16 = { styles: null, guild, previousGuildSubscriptionSlot, analyticsSection: constants3.HEADER, fractionalPremiumState: fractionalPremiumInfo.fractionalState, premiumGroupRole, intent, onResult };
  const items13 = [, ];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  obj16.styles = items13;
  items6[4] = closure_12(isVisible(7402), obj16);
  obj5.children = items6;
  items5[1] = closure_13(memo, obj5);
  items5[2] = closure_12(isVisible(13579), { style: tmp.headerStars });
  items5[3] = closure_12(isVisible(13580), { style: tmp.headerWave });
  obj4.children = items5;
  obj3.children = closure_13(tmp4Result, obj4);
  const items14 = [closure_12(tmp4Result, obj3), ];
  const obj19 = { style: null, children: null };
  const items15 = [, ];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  obj19.style = items15;
  if (isPremiumResult) {
    const obj20 = { variant: "secondary", text: null, onPress: null, icon: null, grow: true };
    const intl5 = tmp7(1114).intl;
    obj20.text = intl5.string(tmp7(1114).t["8MYSQw"]);
    obj20.onPress = function onPress() {
      let obj = actions_BoostingActionCreators;
      obj.closeApplyBoostModal();
      obj = { analyticsLocation: null, analyticsLocations };
      obj = { page: constants2.PREMIUM_GUILD_USER_MODAL, section: constants3.HEADER, object: constants.BUTTON_CTA };
      obj.analyticsLocation = obj;
      utils_openGiftModal.openGiftModal(obj);
    };
    const obj21 = { size: tmp7(1178).Icon.Sizes.SMALL, source: tmp4(13581), style: tmp.giftIcon };
    obj20.icon = tmp25(tmp7(1178).Icon, obj21);
    let obj22 = obj20;
  } else {
    obj22 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl4 = tmp7(1114).intl;
    obj22.text = intl4.string(tmp7(1114).t.pj0XBN);
    obj22.onPress = function onPress() {
      let obj = { analyticsLocation: null, analyticsLocations };
      obj = { page: constants2.PREMIUM_GUILD_USER_MODAL, section: constants3.HEADER, object: constants.BUTTON_CTA };
      obj.analyticsLocation = obj;
      openPremiumModalDefault(obj);
    };
  }
  const obj23 = { children: null };
  obj19.children = closure_12(guild(4975).Button, obj22);
  items14[1] = closure_12(memo, obj19);
  obj23.children = items14;
  return tmp23(memo, obj23);
};