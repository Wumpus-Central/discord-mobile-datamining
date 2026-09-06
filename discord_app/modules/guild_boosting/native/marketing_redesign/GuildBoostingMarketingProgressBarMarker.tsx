// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import _modDef13584 from "../../../../../_runtime/metro/13584__.js";
import _modDef13585 from "../../../../../_runtime/metro/13585__.js";
import _modDef13586 from "../../../../../_runtime/metro/13586__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ProgressBarMarkerInnerContent(arg0) {
  ({ tier, isTierUnlocked, useReducedMotion } = arg0);
  isTierUnlocked = undefined;
  let PREMIUM_PERK_PINK;
  ({ isTierAnimated, isCurrentTier, isDisabled } = arg0);
  const tmp = closure_11();
  let BoostGemSlashIcon = useReducedMotion;
  obj = useReducedMotion(isTierUnlocked[10]);
  let num = 1;
  const sharedValue = obj.useSharedValue(1);
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
    obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
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
  fn.__closure = {
    backgroundColor: PREMIUM_PERK_PINK,
    useReducedMotion,
    shouldAnimate: isTierUnlocked,
    scale: sharedValue,
  };
  fn.__workletHash = 15398057099178;
  fn.__initData = __initData;
  if (tier === BoostedGuildTiers.NONE) {
    if (!isCurrentTier) {
      obj = { style: null, children: null };
      const items1 = [tmp.progressBarMarkerInnerCircle];
      obj.style = items1;
      obj = { style: null };
      const items2 = [tmp.progressBarMarkerInnerCircleBackground, tmp8];
      obj.style = items2;
      const items3 = [closure_7(tmp2(tmp3[10]).View, obj), null];
      obj.children = items3;
      let tmp13 = closure_8(closure_4, obj);
    } else {
      tmp13 = null;
    }
    return tmp13;
  } else if (isDisabled) {
    BoostGemSlashIcon = BoostGemSlashIcon(tmp3[14]).BoostGemSlashIcon;
    let tmp17Result = closure_7(BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
  } else {
    const obj1 = { source: obj[tier], style: null };
    const items4 = [
      isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon,
    ];
    const unsafe_rawColors = tmp2(tmp3[8]).unsafe_rawColors;
    const obj2 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
    items4[1] = obj2;
    obj1.style = items4;
    tmp17Result = closure_7(closure_5, obj1);
  }
  tmp4 = sharedValue(isTierUnlocked[9])();
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const BoostedGuildTiers = fn(1074).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {
  [BoostedGuildTiers.NONE]: 0,
  [BoostedGuildTiers.TIER_1]: 0.3333333333333333,
  [BoostedGuildTiers.TIER_2]: 0.6666666666666666,
  [BoostedGuildTiers.TIER_3]: 1,
};
obj = { [TIER_1]: _modDef13584, [TIER_2]: _modDef13585, [TIER_3]: _modDef13586 };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
let createStyles = fn(4560);
obj = {
  progressBarMarkerInnerCircle: {
    width: 17.5,
    height: 17.5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" },
  progressBarMarkerInnerCircleIcon: { width: 16, height: 16 },
  progressBarMarkerInnerCircleIconUnlocked: null,
};
let size = { width: "95%", height: "95%", tintColor: nativeDefault.colors.WHITE };
obj.progressBarMarkerInnerCircleIconUnlocked = size;
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { stiffness: 50, damping: 5 };
const __initData = {
  code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}",
};
fn(4560);
let obj1 = {
  progressBarMarker: null,
  progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 },
  progressBarMarkerLabel: null,
  progressBarMarkerLabelWithIcon: null,
  progressBarMarkerLabelLocked: null,
  progressBarMarkerUnlockedIcon: null,
};
const size1 = {
  height: 28,
  width: 28,
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transform: null,
  zIndex: 1,
};
let items = [{ translateX: -14 }];
size1.transform = items;
obj1.progressBarMarker = size1;
createStyles = {
  width: 75,
  position: "absolute",
  top: "100%",
  paddingTop: 8,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
};
obj1.progressBarMarkerLabel = createStyles;
let obj3 = { transform: null };
let items1 = [{ translateX: -7 }];
obj3.transform = items1;
obj1.progressBarMarkerLabelWithIcon = obj3;
obj1.progressBarMarkerLabelLocked = { opacity: 0.4 };
const size2 = { height: 12, width: 12, marginRight: 2, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj1.progressBarMarkerUnlockedIcon = size2;
let closure_15 = createStyles.createStyles(obj1);
const __initData2 = {
  code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx",
);

export default function ProgressBarMarker(arg0) {
  ({ guild, tier, useReducedMotion } = arg0);
  noop = undefined;
  let PREMIUM_PERK_PINK;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = closure_15();
  obj = useReducedMotion(4296);
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
    let tmp5Result = useReducedMotion(4296);
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
    obj = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, scale: sharedValue };
    P.__closure = obj;
    P.__workletHash = 9850302957604;
    P.__initData = __initData2;
    obj = { style: null, children: null };
    const items1 = [tmp.progressBarMarker];
    const obj1 = { left: `${100 * obj[tier]}%` };
    items1[1] = obj1;
    obj.style = items1;
    const animatedStyle = tmp5Result.useAnimatedStyle(P);
    const obj2 = { style: null };
    const items2 = [tmp.progressBarMarkerBackground, animatedStyle];
    obj2.style = items2;
    const items3 = [closure_7(tmp2(4296).View, obj2), ,];
    const obj3 = {
      tier,
      isDisabled,
      isTierUnlocked: tmp9,
      isTierAnimated: tmp8,
      isCurrentTier: tmp7,
      useReducedMotion,
    };
    items3[1] = closure_7(ProgressBarMarkerInnerContent, obj3);
    const items4 = [tmp.progressBarMarkerLabel, ,];
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
    obj4.style = items4;
    if (tmp20Result) {
      tmp20Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp20Result) {
      const obj5 = { source: tmp2(11564), style: tmp.progressBarMarkerUnlockedIcon };
      tmp20Result = closure_7(closure_5, obj5);
    }
    const items5 = [tmp20Result];
    const obj6 = { variant: "text-xs/medium", children: null };
    tmp5Result = useReducedMotion(4454);
    obj6.children = tmp5Result.getTierName(tier, { useLevels: false });
    items5[1] = closure_7(useReducedMotion(4556).Text, obj6);
    obj4.children = items5;
    items3[2] = closure_8(PREMIUM_PERK_PINK, obj4);
    obj.children = items3;
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
  const tmp5Result2 = useReducedMotion(4409);
}
export const MARKER_DIMENSIONS = 28;
export const TierMarkerPositions = obj;
