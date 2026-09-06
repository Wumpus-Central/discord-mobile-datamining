// === Module 13583: ProgressBarMarkerInnerContent ===

// Module 13583 (ProgressBarMarkerInnerContent)
import ThemesDefault from "Themes" /* 576 */;
import registerAssetDefault from "registerAsset" /* 13584 */;
import registerAssetDefault2 from "registerAsset" /* 13585 */;
import registerAssetDefault3 from "registerAsset" /* 13586 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { BoostedGuildTiers } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function ProgressBarMarkerInnerContent(arg0) {
  ({ tier, isTierUnlocked, useReducedMotion } = arg0);
  let sharedValue;
  isTierUnlocked = undefined;
  let PREMIUM_PERK_PINK;
  ({ isTierAnimated, isCurrentTier, isDisabled } = arg0);
  const tmp = callback3();
  let BoostGemSlashIcon = useReducedMotion;
  obj = useReducedMotion(isTierUnlocked[10]);
  let num = 1;
  sharedValue = obj.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  if (isTierUnlocked) {
    PREMIUM_PERK_PINK = tmp2(tmp3[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const BoostGemSlashIconResult = BoostGemSlashIcon(tmp3[11]);
    if (BoostGemSlashIconResult1.isThemeDark(tmp4)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = BoostGemSlashIconResult.hexWithOpacity(tmp2(tmp3[8]).unsafe_rawColors.WHITE, num);
    BoostGemSlashIconResult1 = BoostGemSlashIcon(tmp3[12]);
  }
  let items = [isTierUnlocked, sharedValue];
  const effect = PREMIUM_PERK_PINK.useEffect(() => {
    if (isTierUnlocked) {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(useReducedMotion(isTierUnlocked[13]).withSpring(1, closure_1_12));
      obj = useReducedMotion(isTierUnlocked[13]);
    }
  }, items);
  BoostGemSlashIcon(isTierUnlocked[10]);
  const fn = function x() {
    obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
    let num = 1;
    if (!useReducedMotion) {
      num = 1;
      if (isTierUnlocked) {
        num = sharedValue.get();
      }
    }
    const items = [{ scale: num }];
    obj[1] = items;
    return obj;
  };
  fn.__closure = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, shouldAnimate: isTierUnlocked, scale: sharedValue };
  fn.__workletHash = 15398057099178;
  fn.__initData = closure_13;
  if (tier === BoostedGuildTiers.NONE) {
    if (!isCurrentTier) {
      obj = { style: null, children: null };
      const items1 = [tmp.progressBarMarkerInnerCircle];
      obj[0] = items1;
      obj = { style: null };
      const items2 = [tmp.progressBarMarkerInnerCircleBackground, tmp8];
      obj[0] = items2;
      const items3 = [callback(tmp2(tmp3[10]).View, obj), null];
      obj[1] = items3;
      let tmp13 = callback2(closure_4, obj);
    } else {
      tmp13 = null;
    }
    return tmp13;
  } else if (isDisabled) {
    BoostGemSlashIcon = BoostGemSlashIcon(tmp3[14]).BoostGemSlashIcon;
    let tmp17Result = tmp17(BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
  } else {
    obj1 = { source: null, style: null };
    obj1[0] = obj[tier];
    const items4 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
    const unsafe_rawColors = tmp2(tmp3[8]).unsafe_rawColors;
    const obj2 = { tintColor: null };
    obj2[0] = isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK;
    items4[1] = obj2;
    obj1[1] = items4;
    tmp17Result = tmp17(closure_5, obj1);
    const tmp9 = closure_5;
  }
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
obj = { [TIER_1]: registerAssetDefault, [TIER_2]: registerAssetDefault2, [TIER_3]: registerAssetDefault3 };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
obj = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 }, progressBarMarkerInnerCircleIconUnlocked: { width: "95%", height: "95%", tintColor: ThemesDefault.colors.WHITE } };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { stiffness: 50, damping: 5 };
let closure_13 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}" };
createCacheKey = { progressBarMarker: { height: 28, width: 28, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: items, zIndex: 1 }, progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 }, progressBarMarkerLabel: null, progressBarMarkerLabelWithIcon: null, progressBarMarkerLabelLocked: null, progressBarMarkerUnlockedIcon: null };
items = [{ translateX: -14 }];
let obj1 = { width: "95%", height: "95%", tintColor: ThemesDefault.colors.WHITE };
createCacheKey[2] = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
let items1 = [{ translateX: -7 }];
createCacheKey[3] = { transform: items1 };
createCacheKey[4] = { opacity: 0.4 };
let obj3 = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
createCacheKey[5] = { height: 12, width: 12, marginRight: 2, tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let closure_16 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}" };
let obj4 = { height: 12, width: 12, marginRight: 2, tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let result = require("set").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default function ProgressBarMarker(arg0) {
  ({ guild, tier, useReducedMotion } = arg0);
  let sharedValue;
  dependencyMap = undefined;
  let React;
  let PREMIUM_PERK_PINK;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = callback4();
  obj = useReducedMotion(4296);
  sharedValue = obj.useSharedValue(1);
  dependencyMap = tmp7;
  let tmp20Result = tmp9;
  if (guild.premiumTier >= tier) {
    tmp20Result = tmp8;
  }
  React = tmp20Result;
  if (tier === guild.premiumTier) {
    if (tmp20Result) {
      PREMIUM_PERK_PINK = tmp2(576).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    let items = [tmp20Result, sharedValue, tmp7];
    const effect = React.useEffect(() => {
      let tmp = closure_3;
      if (closure_3) {
        tmp = table;
      }
      if (tmp) {
        const result = sharedValue.set(0);
        const result1 = sharedValue.set(useReducedMotion(table[13]).withSpring(1, closure_1_12));
        obj = useReducedMotion(table[13]);
      }
    }, items);
    let tmp5Result = tmp5(4296);
    class P {
      constructor() {
        obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
        num = 1;
        if (!useReducedMotion) {
          tmp = closure_1;
          num = closure_1.get();
        }
        items = [];
        items[0] = { scale: num };
        obj[1] = items;
        return obj;
      }
    }
    obj = { backgroundColor: null, useReducedMotion: null, scale: null };
    obj[0] = PREMIUM_PERK_PINK;
    obj[1] = useReducedMotion;
    obj[2] = sharedValue;
    P.__closure = obj;
    P.__workletHash = 9850302957604;
    P.__initData = closure_16;
    obj = { style: null, children: null };
    const items1 = [tmp.progressBarMarker, ];
    obj1 = { left: null };
    obj1[0] = `${100 * obj[tier]}%`;
    items1[1] = obj1;
    obj[0] = items1;
    const animatedStyle = tmp5Result.useAnimatedStyle(P);
    const obj2 = { style: null };
    const items2 = [tmp.progressBarMarkerBackground, animatedStyle];
    obj2[0] = items2;
    const items3 = [callback(tmp2(4296).View, obj2), , ];
    const obj3 = { tier: null, isDisabled: null, isTierUnlocked: null, isTierAnimated: null, isCurrentTier: null, useReducedMotion: null };
    obj3[0] = tier;
    obj3[1] = isDisabled;
    obj3[2] = tmp9;
    obj3[3] = tmp8;
    obj3[4] = tmp7;
    obj3[5] = useReducedMotion;
    items3[1] = callback(ProgressBarMarkerInnerContent, obj3);
    const items4 = [tmp.progressBarMarkerLabel, , ];
    let progressBarMarkerLabelLocked = !tmp20Result;
    if (!tmp20Result) {
      progressBarMarkerLabelLocked = tmp.progressBarMarkerLabelLocked;
    }
    items4[1] = progressBarMarkerLabelLocked;
    let progressBarMarkerLabelWithIcon = tmp20Result;
    if (tmp20Result) {
      progressBarMarkerLabelWithIcon = tier !== BoostedGuildTiers.NONE;
    }
    if (progressBarMarkerLabelWithIcon) {
      progressBarMarkerLabelWithIcon = tmp.progressBarMarkerLabelWithIcon;
    }
    const obj4 = { style: null, children: null };
    items4[2] = progressBarMarkerLabelWithIcon;
    obj4[0] = items4;
    if (tmp20Result) {
      tmp20Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp20Result) {
      const obj5 = { source: null, style: null };
      obj5[0] = tmp2(11564);
      obj5[1] = tmp.progressBarMarkerUnlockedIcon;
      tmp20Result = tmp20(closure_5, obj5);
    }
    const items5 = [tmp20Result, ];
    const obj6 = { variant: "text-xs/medium", children: null };
    tmp5Result = tmp5(4454);
    obj6[1] = tmp5Result.getTierName(tier, { useLevels: false });
    items5[1] = callback(tmp5(4556).Text, obj6);
    obj4[1] = items5;
    items3[2] = closure_8(PREMIUM_PERK_PINK, obj4);
    obj[1] = items3;
    return closure_8(PREMIUM_PERK_PINK, obj);
  }
  const tmp4 = sharedValue(4495)();
  const tmp5Result1 = useReducedMotion(4411);
  const isThemeDarkResult = useReducedMotion(4411).isThemeDark(tmp4);
  const hexWithOpacity = useReducedMotion(4409).hexWithOpacity;
  const unsafe_rawColors = tmp2(576).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
};
export const MARKER_DIMENSIONS = 28;
export const TierMarkerPositions = obj;