// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import GuildBoostingUtils from "../../../../utils/GuildBoostingUtils.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import GuildBoostingMarketingProgressBarMarker from "GuildBoostingMarketingProgressBarMarker.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const GuildBoostingMarketingProgressBarMarkerDefault = GuildBoostingMarketingProgressBarMarker;

require = fn;
const View = fn(17).View;
const BoostedGuildTiers = fn(1074).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  progressBarContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: 40,
    paddingHorizontal: fn(13840).MARKER_DIMENSIONS / 2 + 34,
  },
  progressBar: { height: 54, maxWidth: 660, width: "100%" },
  progressBarScrubber: null,
  progressBarTrack: null,
  progressBarFill: null,
  progressBarGradientFill: null,
};
let obj3 = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginTop: 40,
  paddingHorizontal: fn(13840).MARKER_DIMENSIONS / 2 + 34,
};
obj2.progressBarScrubber = {
  height: 8,
  top: fn(13840).MARKER_DIMENSIONS / 2 - 4,
  marginHorizontal: fn(13840).MARKER_DIMENSIONS / 2 + 2,
};
let size = {
  borderRadius: 8,
  height: "100%",
  width: "100%",
  position: "absolute",
  zIndex: 0,
  backgroundColor: nativeDefault.colors.SPINE_DEFAULT,
};
obj2.progressBarTrack = size;
obj2.progressBarFill = { borderRadius: 8, position: "absolute", height: "100%", left: 0, zIndex: 1 };
obj2.progressBarGradientFill = { height: "100%", width: "100%", borderRadius: 8 };
let closure_10 = createStyles.createStyles(obj2);
let items = [, , ,];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
let closure_12 = { stiffness: 27, damping: 10 };
const __initData = {
  code: 'function GuildBoostingMarketingProgressBarTsx1(){const{width}=this.__closure;return{width:width.get()+"%"};}',
};
const __initData2 = {
  code: "function GuildBoostingMarketingProgressBarTsx2(){const{width}=this.__closure;return width.get();}",
};
const __initData3 = {
  code: "function GuildBoostingMarketingProgressBarTsx3(width){const{BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,runOnJS,setRevealedTier}=this.__closure;let tier=BoostedGuildTiers.NONE;if(width>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)runOnJS(setRevealedTier)(tier);}",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx",
);

export default function ProgressBar(guild) {
  guild = guild.guild;
  let stateFromStores;
  let sharedValue;
  let revealedTier;
  noop = undefined;
  let fillFactor;
  const tmp = closure_10();
  const tmp2 = stateFromStores;
  const tmp3 = sharedValue;
  let tmp4 = stateFromStores(sharedValue[9])();
  items = [AccessibilityStore];
  stateFromStores = guild(sharedValue[10]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = guild(sharedValue[10]);
  sharedValue = guild(sharedValue[11]).useSharedValue(0);
  const tmp7 = revealedTier(noop.useState(BoostedGuildTiers.NONE), 2);
  revealedTier = tmp7[0];
  noop = tmp9;
  const obj2 = guild(sharedValue[11]);
  class I {
    constructor() {
      obj = { width: "" + closure_2.get() + "%" };
      return obj;
    }
  }
  I.__closure = { width: sharedValue };
  I.__workletHash = 8013193810386;
  I.__initData = __initData;
  const animatedStyle = guild(sharedValue[11]).useAnimatedStyle(I);
  const obj3 = guild(sharedValue[11]);
  const fn = function p() {
    return sharedValue.get();
  };
  fn.__closure = { width: sharedValue };
  fn.__workletHash = 5482324713221;
  fn.__initData = __initData2;
  const fn2 = function w(arg0) {
    let TIER_3 = BoostedGuildTiers.NONE;
    if (arg0 >= 28.33) {
      TIER_3 = BoostedGuildTiers.TIER_1;
    }
    if (arg0 >= 61.67) {
      TIER_3 = BoostedGuildTiers.TIER_2;
    }
    if (arg0 >= 95) {
      TIER_3 = BoostedGuildTiers.TIER_3;
    }
    if (TIER_3 !== first) {
      ReanimatedRexport.runOnJS(closure_4)(TIER_3);
    }
  };
  const obj4 = guild(sharedValue[11]);
  fn2.__closure = {
    BoostedGuildTiers,
    TIER_REACHED_OFFSET: 5,
    revealedTier,
    runOnJS: guild(sharedValue[11]).runOnJS,
    setRevealedTier: tmp7[1],
  };
  fn2.__workletHash = 4844648302516;
  fn2.__initData = __initData3;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const items1 = [guild];
  fillFactor = noop.useMemo(() => GuildBoostingUtils.getGuildBoostingProgressBarFillFactor(guild), items1).fillFactor;
  const items2 = [fillFactor, sharedValue, stateFromStores];
  const effect = noop.useEffect(() => {
    let result = 100 * fillFactor;
    guild = result;
    let timeout = -1;
    if (timeout) {
      const result1 = sharedValue.set(result);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        result = sharedValue.set(spring.withSpring(result, closure_12));
      }, 750);
    }
    return () => {
      window.clearTimeout(closure_1);
    };
  }, items2);
  const obj6 = { style: tmp.progressBarContainer, children: null };
  const obj7 = { style: tmp.progressBar, children: null };
  const obj8 = { style: tmp.progressBarScrubber, children: null };
  const obj9 = { style: null, children: null };
  const items3 = [tmp.progressBarFill, animatedStyle];
  obj9.style = items3;
  const obj5 = {
    BoostedGuildTiers,
    TIER_REACHED_OFFSET: 5,
    revealedTier,
    runOnJS: guild(sharedValue[11]).runOnJS,
    setRevealedTier: tmp7[1],
  };
  const tmp16 = stateFromStores(sharedValue[14]);
  let str = "#515359";
  if (!obj10.isThemeDark(tmp4)) {
    str = tmp2(tmp3[8]).unsafe_rawColors.PRIMARY_160;
  }
  const obj11 = {
    useAngle: true,
    angle: 90,
    colors: null,
    locations: [0.1577, 0.9905],
    style: tmp.progressBarGradientFill,
  };
  const items4 = [str, "#AB77F2"];
  obj11.colors = items4;
  obj9.children = closure_8(tmp16, obj11);
  const items5 = [
    closure_8(stateFromStores(sharedValue[11]).View, obj9),
    closure_8(fillFactor, { style: tmp.progressBarTrack }),
  ];
  obj8.children = items5;
  const items6 = [
    closure_9(fillFactor, obj8),
    items.map((tier) => {
      const obj = { guild, tier, revealedTier, useReducedMotion: stateFromStores, isDisabled: null };
      let tmp4 = guild.premiumTier <= tier;
      if (tmp4) {
        tmp4 = fillFactor > GuildBoostingMarketingProgressBarMarker.TierMarkerPositions[tier];
      }
      obj.isDisabled = tmp4;
      return React6(GuildBoostingMarketingProgressBarMarkerDefault, obj, tier);
    }),
  ];
  obj7.children = items6;
  obj6.children = closure_9(fillFactor, obj7);
  return closure_8(fillFactor, obj6);
}
export const PROGRESS_BAR_SPACING = 40;
