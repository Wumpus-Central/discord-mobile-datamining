// === Module 13008: GuildBoostingMarketingCtaBar ===

// Module 13008 (GuildBoostingMarketingCtaBar)
import obj132Default from "obj132" /* 687 */;
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleGuildBoostsUpdate from "handleGuildBoostsUpdate" /* 4267 */;
import ME from "ME" /* 676 */;
import { FractionalPremiumStates } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import Button from "Button" /* 1297 */;

const require = fn;
({ AnalyticsObjects: closure_8, AnalyticsPages: c9, AnalyticsSections: c10 } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = 10 * obj132Default.Millis.SECOND;
const createCacheKey = { alignSelf: "center", borderRadius: 24, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 10, height: 48, width: 48 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[4] = { alignSelf: "center", maxWidth: "50%", textAlign: "center" };
createCacheKey[5] = { position: "relative" };
createCacheKey[6] = { display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 16, paddingBottom: 16, paddingTop: 3, position: "relative" };
createCacheKey[7] = { flexGrow: 0, flexShrink: 0, marginRight: 3 };
createCacheKey[8] = { flexGrow: 0, flexShrink: 1, opacity: 0.6 };
createCacheKey[9] = { position: "absolute", top: 3, width: "100%" };
createCacheKey[10] = { alignSelf: "center" };
createCacheKey[11] = { alignSelf: "center", borderRadius: ThemesDefault.radii.xl, maxWidth: 300, width: "90%" };
const merged = Object.assign(Button.generateBoxShadowStyle(require("Button").EIGHT_DP_ELEVATION_SHADOW_PARAMS));
createCacheKey[12] = {};
createCacheKey[13] = { marginTop: 10 };
createCacheKey[14] = { marginRight: 8 };
createCacheKey[15] = { overflow: "visible" };
createCacheKey[16] = { bottom: -1, left: "-20%", position: "absolute", height: 125, width: "150%", zIndex: 1 };
createCacheKey[17] = { height: "75%", left: "5%", opacity: 0.9, position: "absolute", top: 0, width: "90%", zIndex: 1 };
createCacheKey[18] = { marginTop: -13, marginBottom: 23 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let closure_16 = { code: "function GuildBoostingMarketingCtaBarTsx1(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}" };
const result = require("obj132").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx");

export default function GuildBoostingMarketingCtaBar(premiumGroupRole) {
  const tmp = callback3();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  let _require = guild;
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  let tmp2 = analyticsLocations(stateFromStores1.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  analyticsLocations = first(7139)(first(7159).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  let obj = _require(647);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => ref.getCurrentUser());
  obj1 = _require(647);
  const items1 = [closure_7];
  stateFromStores1 = obj1.useStateFromStores(items1, () => boostSlots.boostSlots);
  const items2 = [stateFromStores1, guild.id];
  const memo = stateFromStores1.useMemo(() => {
    const keys = Object.keys(stateFromStores1);
    return keys.filter((item, index) => {
      let tmp2 = null != tmp.premiumGuildSubscription;
      if (tmp2) {
        tmp2 = tmp.premiumGuildSubscription.guildId === id.id;
      }
      return tmp2;
    }).length;
  }, items2);
  _require = first;
  let obj2 = _require(4115);
  const fn = function o() {
    let obj = callback(4664);
    let num = 0;
    if (callback) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, { duration: 250 }) };
    return obj;
  };
  obj = { withTiming: _require(4664).withTiming, isVisible: first };
  fn.__closure = obj;
  fn.__workletHash = 6895237370657;
  fn.__initData = closure_16;
  _require = tmp12;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = _require(4115);
  const fn2 = function o() {
    let obj = callback(4664);
    let num = 0;
    if (callback) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, { duration: 250 }) };
    return obj;
  };
  obj = { withTiming: _require(4664).withTiming, isVisible: tmp12 };
  fn2.__closure = obj;
  fn2.__workletHash = 6895237370657;
  fn2.__initData = closure_16;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  const tmp6 = first(7139);
  const tmp14 = first(12893);
  let obj6 = _require(8278);
  const isInReverseTrial = obj6.useIsInReverseTrial();
  closure_6 = stateFromStores1.useRef(-1);
  const items3 = [first, memo];
  const effect = stateFromStores1.useEffect(() => {
    if (tmp) {
      const _window = window;
      closure_6.current = window.setTimeout(() => {
        callback((arg0) => !arg0);
      }, closure_1_14);
    }
    return () => {
      window.clearTimeout(ref.current);
    };
  }, items3);
  let obj7 = first(4039);
  const tmp14Result = first(12893)(fractionalPremiumInfo.endsAt, _require(12893).CountDownMessageTypes.LONG_TIME_LEFT);
  if (premiumGroupRole === _require(1940).PremiumSubscriptionGroupRole.MEMBER) {
    obj1 = { style: null };
    obj1[0] = tmp.boostingUnavailablePill;
    let tmp20 = callback(tmp4(12946), obj1);
  } else {
    tmp20 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      obj2 = { fpDurationText: null, isInReverseTrial: null, style: null };
      obj2[0] = tmp14Result;
      obj2[1] = isInReverseTrial;
      obj2[2] = tmp.boostingUnavailablePill;
      tmp20 = callback(tmp4(12948), obj2);
    }
  }
  const obj3 = { onLayout, angle: 160, angleCenter: { x: 0.5, y: 0.5 }, colors: null, locations: null, useAngle: true, style: null, children: null };
  tmp4(4756);
  const items4 = [first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1, first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2, first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3, first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4, first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5];
  obj3[3] = items4;
  obj3[4] = [0, 0.3221, 0.429, 0.7606, 1];
  obj3[6] = tmp.gradient;
  obj4 = { angle: 0, angleCenter: { x: 0.5, y: 0.5 }, colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"], locations: [0.12, 0.5], useAngle: true, style: tmp.gradient, children: null };
  const tmp4Result = tmp4(4756);
  const items5 = [callback(first(13009), { guild }), , , ];
  const obj5 = { style: tmp.headerContent, children: null };
  obj6 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm", children: null };
  const intl = tmp7(1236).intl;
  obj6[3] = intl.string(_require(1236).t["AF+Tyh"]);
  const items6 = [callback(_require(4734).Heading, obj6), , , , ];
  obj7 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const isPremiumResult = obj7.isPremium(stateFromStores);
  obj7[3] = _require(7188).GuildIconSizes.LARGE;
  items6[1] = callback(first(7188), obj7);
  const obj8 = {
    onPress() {
      window.clearTimeout(ref.current);
      dependencyMap((arg0) => !arg0);
    },
    children: null
  };
  const items7 = [callback(_require(4734).Text, { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name }), ];
  const obj10 = { style: tmp.guildBoostCountWrapper, children: null };
  const obj11 = { style: items8, children: null };
  items8 = [animatedStyle1, tmp.totalBoostCountWrapper];
  const tmp4Result1 = first(7188);
  const items9 = [callback(_require(1297).Icon, { style: tmp.guildBoostCountIcon, source: first(12933), color: first(712).unsafe_rawColors.GUILD_BOOSTING_PINK, size: _require(1297).Icon.Sizes.SMALL }), ];
  const obj13 = { style: tmp.guildBoostCount, accessibilityRole: "header", variant: "text-sm/bold", color: "text-overlay-light", children: null };
  const intl2 = tmp7(1236).intl;
  obj13[4] = intl2.format(_require(1236).t["pob/cL"], { subscriptions: first(4281)(premiumGroupRole.guild.id).total });
  items9[1] = callback(_require(4734).Text, obj13);
  obj11[1] = items9;
  const items10 = [callback2(first(4115).View, obj11), ];
  const obj14 = { style: items11, children: null };
  items11 = [animatedStyle, tmp.guildBoostCurrentUserCountWrapper];
  const obj15 = { style: items12, variant: "text-sm/bold", color: "text-overlay-light", children: null };
  items12 = [, ];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  const intl3 = tmp7(1236).intl;
  obj15[3] = intl3.format(_require(1236).t.xXb78j, { numSubscriptions: memo });
  obj14[1] = callback(_require(4734).Text, obj15);
  items10[1] = callback(first(4115).View, obj14);
  obj10[1] = items10;
  items7[1] = callback2(memo, obj10);
  obj8[1] = items7;
  items6[2] = callback2(_require(5433).PressableOpacity, obj8);
  items6[3] = tmp20;
  const items13 = [, ];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  items6[4] = callback(first(7372), { styles: items13, guild, previousGuildSubscriptionSlot, analyticsSection: constants.HEADER, fractionalPremiumState: fractionalPremiumInfo.fractionalState, premiumGroupRole, intent, onResult });
  obj5[1] = items6;
  items5[1] = callback2(memo, obj5);
  items5[2] = callback(first(13012), { style: tmp.headerStars });
  items5[3] = callback(first(13013), { style: tmp.headerWave });
  obj4[6] = items5;
  obj3[7] = callback2(tmp4Result, obj4);
  const items14 = [callback(tmp4Result, obj3), ];
  const obj19 = { style: items15, children: null };
  items15 = [, ];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  if (isPremiumResult) {
    const obj20 = { variant: "secondary", text: null, onPress: null, icon: null, grow: true };
    const intl5 = tmp7(1236).intl;
    obj20[1] = intl5.string(tmp7(1236).t["8MYSQw"]);
    obj20[2] = function onPress() {
      let obj = callback(6710);
      obj.closeApplyBoostModal();
      obj = { page: closure_1_9.PREMIUM_GUILD_USER_MODAL, section: closure_1_10.HEADER, object: closure_1_8.BUTTON_CTA };
      callback(10295).openGiftModal(obj);
    };
    const obj21 = { size: null, source: null, style: null };
    obj21[0] = tmp7(1297).Icon.Sizes.SMALL;
    obj21[1] = tmp4(13014);
    obj21[2] = tmp.giftIcon;
    obj20[3] = callback(tmp7(1297).Icon, obj21);
    let obj22 = obj20;
  } else {
    obj22 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl4 = tmp7(1236).intl;
    obj22[1] = intl4.string(tmp7(1236).t.pj0XBN);
    obj22[2] = function onPress() {
      const obj = { page: closure_1_9.PREMIUM_GUILD_USER_MODAL, section: closure_1_10.HEADER, object: closure_1_8.BUTTON_CTA };
      first(9325)(obj);
    };
  }
  const obj23 = { children: null };
  obj19[1] = callback(_require(4745).Button, obj22);
  items14[1] = callback(memo, obj19);
  obj23[0] = items14;
  return callback2(memo, obj23);
};