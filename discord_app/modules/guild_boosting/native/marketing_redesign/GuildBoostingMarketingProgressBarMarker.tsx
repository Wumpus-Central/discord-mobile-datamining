// === Module 15714: GuildBoostingMarketingProgressBarMarker ===

// Module 15714 (GuildBoostingMarketingProgressBarMarker)
import nativeDefault from "native" /* 575 */;
import useThemeDefault from "useTheme" /* 5379 */;
import spring_spring from "spring/spring" /* 5773 */;
import _modDef15715 from "module_15715" /* 15715 */;
import _modDef15716 from "module_15716" /* 15716 */;
import _modDef15717 from "module_15717" /* 15717 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function ProgressBarMarkerInnerContent(arg0) {
  ({ tier, isTierUnlocked } = arg0);
  let _require;
  importDefault = undefined;
  ({ isTierAnimated, isCurrentTier, useReducedMotion, isDisabled } = arg0);
  const tmp = closure_10();
  let BoostGemSlashIcon = _require;
  const tmp4 = useThemeDefault();
  let num = 1;
  const sharedValue = require("module_1652").useSharedValue(1);
  _require = sharedValue;
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  importDefault = isTierUnlocked;
  if (isTierUnlocked) {
    let PREMIUM_PERK_PINK = tmp2(575).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const BoostGemSlashIconResult = BoostGemSlashIcon(5140);
    if (BoostGemSlashIconResult1.isThemeDark(tmp4)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = BoostGemSlashIconResult.hexWithOpacity(tmp2(575).unsafe_rawColors.WHITE, num);
    BoostGemSlashIconResult1 = BoostGemSlashIcon(5150);
  }
  items = [isTierUnlocked, sharedValue];
  const effect = noop.useEffect(() => {
    if (c1) {
      const result = backgroundColor.set(0);
      const result1 = backgroundColor.set(spring_spring.withSpring(1, closure_11));
    }
  }, items);
  BoostGemSlashIcon(1652);
  const items1 = [closure_12, PREMIUM_PERK_PINK, useReducedMotion, isTierUnlocked, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12] = items1;
  class GuildBoostingMarketingProgressBarMarkerTsx1 {
    constructor() {
      obj = { backgroundColor: closure_0, transform: null };
      num = 1;
      if (!closure_1) {
        tmp = closure_2;
        num = 1;
        if (closure_2) {
          tmp2 = closure_3;
          num = closure_3.get();
        }
      }
      items = [];
      items[0] = { scale: num };
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp9, tmp10, tmp11, tmp12];
  GuildBoostingMarketingProgressBarMarkerTsx1.__closure = items2;
  GuildBoostingMarketingProgressBarMarkerTsx1.__workletHash = 6190229582867;
  GuildBoostingMarketingProgressBarMarkerTsx1.__initData = tmp8;
  if (tier === BoostedGuildTiers.NONE) {
    if (!isCurrentTier) {
      obj2 = { style: tmp.progressBarMarkerInnerCircle, children: null };
      const obj3 = { style: null };
      const items3 = [tmp.progressBarMarkerInnerCircleBackground, tmp13];
      obj3.style = items3;
      const items4 = [closure_6(tmp2(1652).View, obj3), null];
      obj2.children = items4;
      let tmp18 = closure_7(View, obj2);
    } else {
      tmp18 = null;
    }
    return tmp18;
  } else if (isDisabled) {
    BoostGemSlashIcon = BoostGemSlashIcon(14389).BoostGemSlashIcon;
    let tmp22Result = closure_6(BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
  } else {
    const obj4 = { source: obj2[tier], style: null };
    const items5 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
    const unsafe_rawColors = tmp2(575).unsafe_rawColors;
    const obj5 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
    items5[1] = obj5;
    obj4.style = items5;
    tmp22Result = closure_6(tmp2(5854), obj4);
    const tmp2Result = tmp2(5854);
  }
  let obj = require("module_1652");
}
const View = fn(17).View;
const BoostedGuildTiers = fn(1072).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const TierMarkerPositions = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
let obj2 = { [TIER_1]: _modDef15715, [TIER_2]: _modDef15716, [TIER_3]: _modDef15717 };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
let createStyles = fn(5143);
let obj4 = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 }, progressBarMarkerInnerCircleIconUnlocked: null };
let size = { width: "95%", height: "95%", tintColor: nativeDefault.colors.WHITE };
obj4.progressBarMarkerInnerCircleIconUnlocked = size;
let closure_10 = createStyles.createStyles(obj4);
let closure_11 = { stiffness: 50, damping: 5 };
let closure_12 = { code: "(function GuildBoostingMarketingProgressBarMarkerTsx1(){let[backgroundColor,useReducedMotion,shouldAnimate,scale]=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};})" };
createStyles = fn(5143);
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
let closure_14 = createStyles.createStyles(obj5);
let closure_15 = { code: "(function GuildBoostingMarketingProgressBarMarkerTsx2(){let[backgroundColor,useReducedMotion,scale]=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default function ProgressBarMarker(arg0) {
  ({ guild, tier, useReducedMotion } = arg0);
  let _require;
  dependencyMap = undefined;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = closure_14();
  let obj = require("module_1652");
  const sharedValue = obj.useSharedValue(1);
  _require = sharedValue;
  importDefault = tmp7;
  let tmp25Result = tmp9;
  if (guild.premiumTier >= tier) {
    tmp25Result = tmp8;
  }
  dependencyMap = tmp25Result;
  if (tier === guild.premiumTier) {
    if (tmp25Result) {
      let PREMIUM_PERK_PINK = tmp2(575).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    items = [tmp25Result, sharedValue, tmp7];
    const effect = noop.useEffect(() => {
      let tmp = c2;
      if (c2) {
        tmp = c1;
      }
      if (tmp) {
        const result = backgroundColor.set(0);
        const result1 = backgroundColor.set(spring_spring.withSpring(1, closure_11));
      }
    }, items);
    const items1 = [closure_15, PREMIUM_PERK_PINK, useReducedMotion, sharedValue];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    [tmp17, tmp18, tmp19, tmp20] = items1;
    class GuildBoostingMarketingProgressBarMarkerTsx2 {
      constructor() {
        obj = { backgroundColor: closure_0, transform: null };
        num = 1;
        if (!closure_1) {
          tmp = closure_2;
          num = closure_2.get();
        }
        items = [];
        items[0] = { scale: num };
        obj.transform = items;
        return obj;
      }
    }
    const items2 = [tmp18, tmp19, tmp20];
    GuildBoostingMarketingProgressBarMarkerTsx2.__closure = items2;
    GuildBoostingMarketingProgressBarMarkerTsx2.__workletHash = 12397163114717;
    GuildBoostingMarketingProgressBarMarkerTsx2.__initData = tmp17;
    obj2 = { style: null, children: null };
    const items3 = [tmp.progressBarMarker, ];
    const obj3 = { left: `${100 * obj[tier]}%` };
    items3[1] = obj3;
    obj2.style = items3;
    const animatedStyle = tmp5(1652).useAnimatedStyle(GuildBoostingMarketingProgressBarMarkerTsx2);
    const obj4 = { style: null };
    const items4 = [tmp.progressBarMarkerBackground, animatedStyle];
    obj4.style = items4;
    const items5 = [closure_6(tmp2(1652).View, obj4), , ];
    const obj5 = { tier, isDisabled, isTierUnlocked: tmp9, isTierAnimated: tmp8, isCurrentTier: tmp7, useReducedMotion };
    items5[1] = closure_6(ProgressBarMarkerInnerContent, obj5);
    const items6 = [tmp.progressBarMarkerLabel, , ];
    let progressBarMarkerLabelLocked = !tmp25Result;
    if (!tmp25Result) {
      progressBarMarkerLabelLocked = tmp.progressBarMarkerLabelLocked;
    }
    items6[1] = progressBarMarkerLabelLocked;
    let progressBarMarkerLabelWithIcon = tmp25Result;
    if (tmp25Result) {
      progressBarMarkerLabelWithIcon = tier !== BoostedGuildTiers.NONE;
    }
    if (progressBarMarkerLabelWithIcon) {
      progressBarMarkerLabelWithIcon = tmp.progressBarMarkerLabelWithIcon;
    }
    const obj6 = { style: null, children: null };
    items6[2] = progressBarMarkerLabelWithIcon;
    obj6.style = items6;
    if (tmp25Result) {
      tmp25Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp25Result) {
      const obj7 = { source: tmp2(11793), style: tmp.progressBarMarkerUnlockedIcon };
      tmp25Result = closure_6(tmp2(5854), obj7);
      const tmp2Result = tmp2(5854);
    }
    const items7 = [tmp25Result, ];
    const obj8 = { variant: "body-xs/medium", children: null };
    const tmp5Result = tmp5(1652);
    obj8.children = tmp5(8609).getTierName(tier, { useLevels: false });
    items7[1] = closure_6(tmp5(5763).Text, obj8);
    obj6.children = items7;
    items5[2] = closure_7(View, obj6);
    obj2.children = items5;
    return closure_7(View, obj2);
  }
  const tmp4 = useThemeDefault();
  const tmp5Result5 = require("shared");
  const isThemeDarkResult = require("shared").isThemeDark(tmp4);
  const hexWithOpacity = require("ColorUtils").hexWithOpacity;
  const unsafe_rawColors = tmp2(575).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
  const tmp5Result6 = require("ColorUtils");
};
export const MARKER_DIMENSIONS = 28;
export { TierMarkerPositions };