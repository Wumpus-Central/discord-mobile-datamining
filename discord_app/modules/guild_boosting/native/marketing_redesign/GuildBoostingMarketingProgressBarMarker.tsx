// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx
import noop from "noop";
import get_ActivityIndicator from "getGuildTierFromGuild";
import { BoostedGuildTiers } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { useTheme } from "../../../../hooks/useTheme.tsx";

let TIER_1;
let TIER_2;
let TIER_3;
let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
function ProgressBarMarkerInnerContent(arg0) {
  let isCurrentTier;
  let isDisabled;
  let isTierAnimated;
  let isTierUnlocked;
  let tier;
  let useReducedMotion;
  ({ tier, isTierUnlocked, useReducedMotion } = arg0);
  let sharedValue;
  isTierUnlocked = undefined;
  ({ isTierAnimated, isCurrentTier, isDisabled } = arg0);
  const tmp = callback();
  let obj = isTierUnlocked;
  let items3 = dependencyMap;
  let obj1 = sharedValue(4116);
  let num = 1;
  sharedValue = obj1.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  let items = [isTierUnlocked, sharedValue];
  const effect = React.useEffect(() => {
    if (isTierUnlocked) {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(sharedValue(outer1_2[11]).withSpring(1, outer1_12));
      const obj = sharedValue(outer1_2[11]);
    }
  }, items);
  let tmp3Result = tmp3(4116);
  const fn = function y() {
    let obj = { transform: null };
    obj = { scale: sharedValue.get() };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { scale: sharedValue };
  fn.__workletHash = 7240908357686;
  fn.__initData = closure_13;
  if (tier === BoostedGuildTiers.NONE) {
    if (isCurrentTier) {
      if (isTierUnlocked) {
        return null;
      }
    }
    obj = { style: null, children: null };
    const items1 = [tmp.progressBarMarkerInnerCircle];
    obj[0] = items1;
    let View = obj(4116).View;
    const items2 = [tmp.progressBarMarkerInnerCircleBackground, , ];
    let tmp16 = !useReducedMotion;
    if (!useReducedMotion) {
      tmp16 = isTierUnlocked;
    }
    if (tmp16) {
      tmp16 = tmp7;
    }
    items2[1] = tmp16;
    if (isTierUnlocked) {
      let PREMIUM_PERK_PINK = obj(712).unsafe_rawColors.PREMIUM_PERK_PINK;
    } else {
      tmp3Result = tmp3(4099);
      if (tmp3Result1.isThemeDark(tmp2)) {
        num = 0.5;
      }
      PREMIUM_PERK_PINK = tmp3Result.hexWithOpacity(obj(712).unsafe_rawColors.WHITE, num);
      tmp3Result1 = tmp3(4101);
    }
    obj = { style: null };
    obj = { backgroundColor: null };
    obj[0] = PREMIUM_PERK_PINK;
    items2[2] = obj;
    obj[0] = items2;
    View = closure_7(View, obj);
    items3 = [View, null];
    obj[1] = items3;
    closure_8(closure_4, obj);
    const tmp13 = closure_8;
    const tmp14 = closure_4;
    const tmp15 = closure_7;
  } else if (isDisabled) {
    let tmp18Result = tmp18(tmp3(11827).BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
  } else {
    obj1 = { source: null, style: null };
    obj1[0] = obj[tier];
    const items4 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
    const unsafe_rawColors = obj(712).unsafe_rawColors;
    const obj2 = { tintColor: null };
    obj2[0] = isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK;
    items4[1] = obj2;
    obj1[1] = items4;
    tmp18Result = tmp18(closure_5, obj1);
    const tmp8 = closure_5;
  }
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
obj = { [TIER_1]: require("registerAsset"), [TIER_2]: require("registerAsset"), [TIER_3]: require("registerAsset") };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
obj = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 }, progressBarMarkerInnerCircleIconUnlocked: null };
obj[3] = { width: "95%", height: "95%", tintColor: require("Themes").colors.WHITE };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { stiffness: 50, damping: 5 };
let closure_13 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
createCacheKey = { progressBarMarker: { height: 28, width: 28, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: items, zIndex: 1 }, progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 }, progressBarMarkerLabel: null, progressBarMarkerLabelWithIcon: null, progressBarMarkerLabelLocked: null, progressBarMarkerUnlockedIcon: null };
items = [{ translateX: -14 }];
let obj1 = { width: "95%", height: "95%", tintColor: require("Themes").colors.WHITE };
createCacheKey[2] = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
let items1 = [{ translateX: -7 }];
createCacheKey[3] = { transform: items1 };
createCacheKey[4] = { opacity: 0.4 };
let obj3 = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
createCacheKey[5] = { height: 12, width: 12, marginRight: 2, tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_16 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
let obj4 = { height: 12, width: 12, marginRight: 2, tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
let result = require("ME").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default function ProgressBarMarker(arg0) {
  let guild;
  let isDisabled;
  let revealedTier;
  let tier;
  let useReducedMotion;
  ({ guild, tier, useReducedMotion } = arg0);
  let sharedValue;
  let importDefault;
  let dependencyMap;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = createCacheKey();
  let obj = sharedValue(4116);
  sharedValue = obj.useSharedValue(1);
  importDefault = tmp7;
  let tmp15Result = tmp9;
  if (guild.premiumTier >= tier) {
    tmp15Result = tmp8;
  }
  dependencyMap = tmp15Result;
  let items = [tmp15Result, sharedValue, tier === guild.premiumTier];
  const effect = React.useEffect(() => {
    let tmp = _undefined;
    if (_undefined) {
      tmp = c1;
    }
    if (tmp) {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(sharedValue(_undefined[11]).withSpring(1, outer1_12));
      const obj = sharedValue(_undefined[11]);
    }
  }, items);
  let tmp5Result = tmp5(4116);
  class P {
    constructor() {
      obj = { transform: null };
      obj = { scale: c0.get() };
      items = [];
      items[0] = obj;
      obj[0] = items;
      return obj;
    }
  }
  P.__closure = { scale: sharedValue };
  P.__workletHash = 6884434326805;
  P.__initData = closure_16;
  obj = { style: items1, children: null };
  items1 = [tmp.progressBarMarker, ];
  obj = { left: `${100 * obj[tier]}%` };
  items1[1] = obj;
  const animatedStyle = tmp5Result.useAnimatedStyle(P);
  const items2 = [tmp.progressBarMarkerBackground, , ];
  let tmp16 = !useReducedMotion;
  if (!useReducedMotion) {
    tmp16 = animatedStyle;
  }
  items2[1] = tmp16;
  if (tier === guild.premiumTier) {
    if (tmp15Result) {
      let PREMIUM_PERK_PINK = tmp2(712).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    const obj1 = { style: null };
    const obj2 = { backgroundColor: null };
    obj2[0] = PREMIUM_PERK_PINK;
    items2[2] = obj2;
    obj1[0] = items2;
    const items3 = [tmp15(tmp2(4116).View, obj1), , ];
    const obj3 = { tier: null, isDisabled: null, isTierUnlocked: null, isTierAnimated: null, isCurrentTier: null, useReducedMotion: null };
    obj3[0] = tier;
    obj3[1] = isDisabled;
    obj3[2] = tmp9;
    obj3[3] = tmp8;
    obj3[4] = tmp7;
    obj3[5] = useReducedMotion;
    items3[1] = tmp15(ProgressBarMarkerInnerContent, obj3);
    const items4 = [tmp.progressBarMarkerLabel, , ];
    let progressBarMarkerLabelLocked = !tmp15Result;
    if (!tmp15Result) {
      progressBarMarkerLabelLocked = tmp.progressBarMarkerLabelLocked;
    }
    items4[1] = progressBarMarkerLabelLocked;
    let progressBarMarkerLabelWithIcon = tmp15Result;
    if (tmp15Result) {
      progressBarMarkerLabelWithIcon = tier !== BoostedGuildTiers.NONE;
    }
    if (progressBarMarkerLabelWithIcon) {
      progressBarMarkerLabelWithIcon = tmp.progressBarMarkerLabelWithIcon;
    }
    const obj4 = { style: null, children: null };
    items4[2] = progressBarMarkerLabelWithIcon;
    obj4[0] = items4;
    if (tmp15Result) {
      tmp15Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp15Result) {
      const obj5 = { source: null, style: null };
      obj5[0] = tmp2(10923);
      obj5[1] = tmp.progressBarMarkerUnlockedIcon;
      tmp15Result = tmp15(closure_5, obj5);
    }
    const items5 = [tmp15Result, ];
    const obj6 = { variant: "text-xs/medium", children: null };
    class P {
      constructor() {
        obj = { transform: null };
        obj = { scale: c0.get() };
        items = [];
        items[0] = obj;
        obj[0] = items;
        return obj;
      }
    }
    obj6[1] = obj12.getTierName(tier, { useLevels: false });
    items5[1] = tmp15(tmp5(4251).Text, obj6);
    obj4[1] = items5;
    items3[2] = tmp13(tmp14, obj4);
    obj[1] = items3;
    return tmp13(tmp14, obj);
  }
  tmp5Result = tmp5(4101);
  const tmp4 = useTheme();
  const isThemeDarkResult = tmp5Result.isThemeDark(useTheme());
  const hexWithOpacity = sharedValue(4099).hexWithOpacity;
  const unsafe_rawColors = tmp2(712).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
};
export const MARKER_DIMENSIONS = 28;
export const TierMarkerPositions = obj;