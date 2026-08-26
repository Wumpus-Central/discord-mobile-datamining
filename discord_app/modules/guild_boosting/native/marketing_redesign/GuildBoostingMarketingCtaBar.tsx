// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx
import setDefault from "../../../../utils/Durations.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/UserStore.tsx";
import closure_7 from "../../../../stores/billing/GuildBoostSlotStore.tsx";
import ME from "../../../../Constants.tsx";
import { FractionalPremiumStates } from "../../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import Button from "../../../../design/void/native.tsx";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { useIsInReverseTrial } from "../../../premium/ReverseTrialUtils.native.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
({ AnalyticsObjects: closure_8, AnalyticsPages: c9, AnalyticsSections: c10 } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = 10 * setDefault.Millis.SECOND;
createCacheKey = { heading: { alignSelf: "center", marginBottom: 24, maxWidth: 395, paddingHorizontal: 16, textAlign: "center" }, headerContent: { paddingHorizontal: 16, paddingTop: 32, position: "relative", zIndex: 2 }, guildIcon: null, guildIconText: null, guildName: null, guildBoostCountWrapper: null, totalBoostCountWrapper: null, guildBoostCountIcon: null, guildBoostCount: null, guildBoostCurrentUserCountWrapper: null, guildBoostCurrentUserCount: null, cta: null, ctaPrimary: null, ctaSecondary: null, giftIcon: null, gradient: null, headerWave: null, headerStars: null, boostingUnavailablePill: null };
createCacheKey = { alignSelf: "center", borderRadius: 24, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 10, height: 48, width: 48 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[4] = { alignSelf: "center", maxWidth: "50%", textAlign: "center" };
createCacheKey[5] = { position: "relative" };
createCacheKey[6] = { display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 16, paddingBottom: 16, paddingTop: 3, position: "relative" };
createCacheKey[7] = { flexGrow: 0, flexShrink: 0, marginRight: 3 };
createCacheKey[8] = { flexGrow: 0, flexShrink: 1, opacity: 0.6 };
createCacheKey[9] = { position: "absolute", top: 3, width: "100%" };
createCacheKey[10] = { alignSelf: "center" };
let obj1 = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
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
let obj2 = { alignSelf: "center", borderRadius: ThemesDefault.radii.xl, maxWidth: 300, width: "90%" };
let obj3 = {};
const result = require("set").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx");

export default function GuildBoostingMarketingCtaBar(premiumGroupRole) {
  const tmp = callback3();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  let _require = guild;
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  let tmp2 = analyticsLocations(stateFromStores1.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  analyticsLocations = first(5900)(first(5920).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  let obj = defaultAreStatesEqual;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => ref.getCurrentUser());
  obj1 = defaultAreStatesEqual;
  const items1 = [closure_7];
  stateFromStores1 = obj1.useStateFromStores(items1, () => boostSlots.boostSlots);
  const items2 = [stateFromStores1, guild.id];
  const memo = stateFromStores1.useMemo(() => {
    const keys = Object.keys(stateFromStores1);
    return keys.filter((arg0) => {
      let tmp2 = null != tmp.premiumGuildSubscription;
      if (tmp2) {
        tmp2 = tmp.premiumGuildSubscription.guildId === id.id;
      }
      return tmp2;
    }).length;
  }, items2);
  _require = first;
  let obj2 = ReanimatedRexport;
  const fn = function o() {
    let obj = callback(4445);
    let num = 0;
    if (callback) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, { duration: 250 }) };
    return obj;
  };
  obj = { withTiming: require("../../../../design/animation/reanimated/timing/timing.tsx").withTiming, isVisible: first };
  fn.__closure = obj;
  fn.__workletHash = 6895237370657;
  fn.__initData = closure_16;
  _require = tmp12;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = ReanimatedRexport;
  const fn2 = function o() {
    let obj = callback(4445);
    let num = 0;
    if (callback) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, { duration: 250 }) };
    return obj;
  };
  obj = { withTiming: require("../../../../design/animation/reanimated/timing/timing.tsx").withTiming, isVisible: tmp12 };
  fn2.__closure = obj;
  fn2.__workletHash = 6895237370657;
  fn2.__initData = closure_16;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  const tmp6 = first(5900);
  const tmp14 = first(13009);
  let obj6 = useIsInReverseTrial;
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
  let obj7 = first(4107);
  const tmp14Result = first(13009)(fractionalPremiumInfo.endsAt, require("../../../billing/hooks/useFPDurationLeft.tsx").CountDownMessageTypes.LONG_TIME_LEFT);
  if (premiumGroupRole === require("../../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx").PremiumSubscriptionGroupRole.MEMBER) {
    obj1 = { style: null };
    obj1[0] = tmp.boostingUnavailablePill;
    let tmp20 = callback(tmp4(13063), obj1);
  } else {
    tmp20 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      obj2 = { fpDurationText: null, isInReverseTrial: null, style: null };
      obj2[0] = tmp14Result;
      obj2[1] = isInReverseTrial;
      obj2[2] = tmp.boostingUnavailablePill;
      tmp20 = callback(tmp4(13065), obj2);
    }
  }
  const obj3 = { onLayout, angle: 160, angleCenter: { x: 0.5, y: 0.5 }, colors: null, locations: null, useAngle: true, style: null, children: null };
  let tmp4Result = tmp4(4891);
  const items4 = [first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1, first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2, first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3, first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4, first(712).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5];
  obj3[3] = items4;
  obj3[4] = [0, 0.3221, 0.429, 0.7606, 1];
  obj3[6] = tmp.gradient;
  obj4 = { angle: 0, angleCenter: { x: 0.5, y: 0.5 }, colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"], locations: [0.12, 0.5], useAngle: true, style: tmp.gradient, children: null };
  tmp4Result = tmp4(4891);
  const items5 = [callback(first(13125), { guild }), , , ];
  const obj5 = { style: tmp.headerContent, children: null };
  obj6 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm", children: null };
  const intl = tmp7(1236).intl;
  obj6[3] = intl.string(require("../../../../intl/index.native.tsx").t["AF+Tyh"]);
  const items6 = [callback(require("../../../../design/components/Text/native/Text.tsx").Heading, obj6), , , , ];
  obj7 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const isPremiumResult = obj7.isPremium(stateFromStores);
  const tmp23 = callback2;
  obj7[3] = require("../../../guild/native/GuildIcon.tsx").GuildIconSizes.LARGE;
  items6[1] = callback(first(5951), obj7);
  const obj8 = {
    onPress() {
      window.clearTimeout(ref.current);
      dependencyMap((arg0) => !arg0);
    },
    children: null
  };
  const items7 = [callback(require("../../../../design/components/Text/native/Text.tsx").Text, { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name }), ];
  const obj10 = { style: tmp.guildBoostCountWrapper, children: null };
  const obj11 = { style: items8, children: null };
  items8 = [animatedStyle1, tmp.totalBoostCountWrapper];
  const obj9 = { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name };
  const tmp4Result1 = first(5951);
  const items9 = [callback(require("../../../../design/void/native.tsx").Icon, { style: tmp.guildBoostCountIcon, source: first(13050), color: first(712).unsafe_rawColors.GUILD_BOOSTING_PINK, size: require("../../../../design/void/native.tsx").Icon.Sizes.SMALL }), ];
  const obj13 = { style: tmp.guildBoostCount, accessibilityRole: "header", variant: "text-sm/bold", color: "text-overlay-light", children: null };
  const intl2 = tmp7(1236).intl;
  obj13[4] = intl2.format(require("../../../../intl/index.native.tsx").t["pob/cL"], { subscriptions: first(4350)(premiumGroupRole.guild.id).total });
  items9[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj13);
  obj11[1] = items9;
  const items10 = [callback2(first(4184).View, obj11), ];
  const obj14 = { style: items11, children: null };
  items11 = [animatedStyle, tmp.guildBoostCurrentUserCountWrapper];
  const obj15 = { style: items12, variant: "text-sm/bold", color: "text-overlay-light", children: null };
  items12 = [, ];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  const intl3 = tmp7(1236).intl;
  obj15[3] = intl3.format(require("../../../../intl/index.native.tsx").t.xXb78j, { numSubscriptions: memo });
  obj14[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj15);
  items10[1] = callback(first(4184).View, obj14);
  obj10[1] = items10;
  items7[1] = callback2(memo, obj10);
  obj8[1] = items7;
  items6[2] = callback2(require("../../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, obj8);
  items6[3] = tmp20;
  const items13 = [, ];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  items6[4] = callback(first(7073), { styles: items13, guild, previousGuildSubscriptionSlot, analyticsSection: constants.HEADER, fractionalPremiumState: fractionalPremiumInfo.fractionalState, premiumGroupRole, intent, onResult });
  obj5[1] = items6;
  items5[1] = callback2(memo, obj5);
  items5[2] = callback(first(13128), { style: tmp.headerStars });
  items5[3] = callback(first(13129), { style: tmp.headerWave });
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
      let obj = callback(5324);
      obj.closeApplyBoostModal();
      obj = { analyticsLocation: obj, analyticsLocations };
      obj = { page: closure_1_9.PREMIUM_GUILD_USER_MODAL, section: closure_1_10.HEADER, object: closure_1_8.BUTTON_CTA };
      callback(10252).openGiftModal(obj);
    };
    const obj21 = { size: null, source: null, style: null };
    obj21[0] = tmp7(1297).Icon.Sizes.SMALL;
    obj21[1] = tmp4(13130);
    obj21[2] = tmp.giftIcon;
    obj20[3] = tmp25(tmp7(1297).Icon, obj21);
    let obj22 = obj20;
  } else {
    obj22 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl4 = tmp7(1236).intl;
    obj22[1] = intl4.string(tmp7(1236).t.pj0XBN);
    obj22[2] = function onPress() {
      obj = { analyticsLocation: obj, analyticsLocations };
      obj = { page: closure_1_9.PREMIUM_GUILD_USER_MODAL, section: closure_1_10.HEADER, object: closure_1_8.BUTTON_CTA };
      first(8837)(obj);
    };
  }
  const obj23 = { children: null };
  obj19[1] = callback(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj22);
  items14[1] = callback(memo, obj19);
  obj23[0] = items14;
  return tmp23(memo, obj23);
};