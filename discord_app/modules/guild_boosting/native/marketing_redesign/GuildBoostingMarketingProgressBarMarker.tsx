// === Module 13124: GuildBoostingMarketingProgressBarMarker ===

// Module 13124 (GuildBoostingMarketingProgressBarMarker)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import _modDef13125 from "module_13125" /* 13125 */;
import _modDef13126 from "module_13126" /* 13126 */;
import _modDef13127 from "module_13127" /* 13127 */;
import noop from "module_19" /* 19 */;

require = fn;
function ProgressBarMarkerInnerContent(arg0) {
  ({ tier, isTierUnlocked, useReducedMotion } = arg0);
  let sharedValue;
  isTierUnlocked = undefined;
  let PREMIUM_PERK_PINK;
  ({ isTierAnimated, isCurrentTier, isDisabled } = arg0);
  const tmp = closure_11();
  let BoostGemSlashIcon = useReducedMotion;
  const tmp4 = sharedValue(isTierUnlocked[9])();
  let num = 1;
  sharedValue = useReducedMotion(isTierUnlocked[10]).useSharedValue(1);
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
      const result1 = sharedValue.set(spring.withSpring(1, closure_12));
    }
  }, items);
  BoostGemSlashIcon(isTierUnlocked[10]);
  const fn = function x() {
    const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
    let num = 1;
    if (!useReducedMotion) {
      num = 1;
      if (isTierUnlocked) {
        num = sharedValue.get();
      }
    }
    const items = [{ scale: num }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, shouldAnimate: isTierUnlocked, scale: sharedValue };
  fn.__workletHash = 15398057099178;
  fn.__initData = __initData;
  if (tier === BoostedGuildTiers.NONE) {
    if (!isCurrentTier) {
      obj2 = { style: null, children: null };
      const items1 = [tmp.progressBarMarkerInnerCircle];
      obj2.style = items1;
      const obj3 = { style: null };
      const items2 = [tmp.progressBarMarkerInnerCircleBackground, tmp8];
      obj3.style = items2;
      const items3 = [closure_7(tmp2(tmp3[10]).View, obj3), null];
      obj2.children = items3;
      let tmp13 = closure_8(closure_4, obj2);
    } else {
      tmp13 = null;
    }
    return tmp13;
  } else if (isDisabled) {
    BoostGemSlashIcon = BoostGemSlashIcon(tmp3[14]).BoostGemSlashIcon;
    let tmp17Result = closure_7(BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
  } else {
    const obj4 = { source: obj2[tier], style: null };
    const items4 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
    const unsafe_rawColors = tmp2(tmp3[8]).unsafe_rawColors;
    const obj5 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
    items4[1] = obj5;
    obj4.style = items4;
    tmp17Result = closure_7(closure_5, obj4);
  }
  let obj = useReducedMotion(isTierUnlocked[10]);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const BoostedGuildTiers = fn(1074).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const TierMarkerPositions = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
let obj2 = { [TIER_1]: _modDef13125, [TIER_2]: _modDef13126, [TIER_3]: _modDef13127 };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
let createStyles = fn(4836);
let obj4 = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 }, progressBarMarkerInnerCircleIconUnlocked: null };
let size = { width: "95%", height: "95%", tintColor: nativeDefault.colors.WHITE };
obj4.progressBarMarkerInnerCircleIconUnlocked = size;
let closure_11 = createStyles.createStyles(obj4);
let closure_12 = { stiffness: 50, damping: 5 };
const __initData = { code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}" };
createStyles = fn(4836);
let obj5 = { progressBarMarker: null, progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 }, progressBarMarkerLabel: { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" }, progressBarMarkerLabelWithIcon: null, progressBarMarkerLabelLocked: { opacity: 0.4 }, progressBarMarkerUnlockedIcon: null };
const size1 = { height: 28, width: 28, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: null, zIndex: 1 };
let items = [{ translateX: -14 }];
size1.transform = items;
obj5.progressBarMarker = size1;
let obj8 = { transform: null };
let items1 = [{ translateX: -7 }];
obj8.transform = items1;
obj5.progressBarMarkerLabelWithIcon = obj8;
const size2 = { height: 12, width: 12, marginRight: 2, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj5.progressBarMarkerUnlockedIcon = size2;
let closure_15 = createStyles.createStyles(obj5);
const __initData2 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default function ProgressBarMarker(arg0) {
  ({ guild, tier, useReducedMotion } = arg0);
  noop = undefined;
  let PREMIUM_PERK_PINK;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = closure_15();
  let obj = useReducedMotion(4566);
  const sharedValue = obj.useSharedValue(1);
  dependencyMap = tmp7;
  let tmp20Result = tmp9;
  if (guild.premiumTier >= tier) {
    tmp20Result = tmp8;
  }
  noop = tmp20Result;
  if (tier === guild.premiumTier) {
    if (tmp20Result) {
      PREMIUM_PERK_PINK = tmp2(576).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    let items = [tmp20Result, sharedValue, tmp7];
    const effect = noop.useEffect(() => {
      let tmp = closure_3;
      if (closure_3) {
        tmp = closure_2;
      }
      if (tmp) {
        const result = sharedValue.set(0);
        const result1 = sharedValue.set(spring.withSpring(1, closure_12));
      }
    }, items);
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
        obj.transform = items;
        return obj;
      }
    }
    obj2 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, scale: sharedValue };
    P.__closure = obj2;
    P.__workletHash = 9850302957604;
    P.__initData = __initData2;
    const obj3 = { style: null, children: null };
    const items1 = [tmp.progressBarMarker, ];
    const obj4 = { left: `${100 * obj[tier]}%` };
    items1[1] = obj4;
    obj3.style = items1;
    const animatedStyle = useReducedMotion(4566).useAnimatedStyle(P);
    const obj5 = { style: null };
    const items2 = [tmp.progressBarMarkerBackground, animatedStyle];
    obj5.style = items2;
    const items3 = [closure_7(tmp2(4566).View, obj5), , ];
    const obj6 = { tier, isDisabled, isTierUnlocked: tmp9, isTierAnimated: tmp8, isCurrentTier: tmp7, useReducedMotion };
    items3[1] = closure_7(ProgressBarMarkerInnerContent, obj6);
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
    const obj7 = { style: null, children: null };
    items4[2] = progressBarMarkerLabelWithIcon;
    obj7.style = items4;
    if (tmp20Result) {
      tmp20Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp20Result) {
      const obj8 = { source: tmp2(11059), style: tmp.progressBarMarkerUnlockedIcon };
      tmp20Result = closure_7(closure_5, obj8);
    }
    const items5 = [tmp20Result, ];
    const obj9 = { variant: "text-xs/medium", children: null };
    const tmp5Result = useReducedMotion(4566);
    obj9.children = useReducedMotion(4728).getTierName(tier, { useLevels: false });
    items5[1] = closure_7(useReducedMotion(4832).Text, obj9);
    obj7.children = items5;
    items3[2] = closure_8(PREMIUM_PERK_PINK, obj7);
    obj3.children = items3;
    return closure_8(PREMIUM_PERK_PINK, obj3);
  }
  const tmp4 = sharedValue(4767)();
  const tmp5Result5 = useReducedMotion(4685);
  const isThemeDarkResult = useReducedMotion(4685).isThemeDark(tmp4);
  const hexWithOpacity = useReducedMotion(4683).hexWithOpacity;
  const unsafe_rawColors = tmp2(576).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
  const tmp5Result6 = useReducedMotion(4683);
};
export const MARKER_DIMENSIONS = 28;
export { TierMarkerPositions };