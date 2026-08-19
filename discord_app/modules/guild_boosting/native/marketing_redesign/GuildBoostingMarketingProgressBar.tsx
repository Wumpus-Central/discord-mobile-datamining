// === Module 13015: BoostedGuildTiers ===

// Module 13015 (BoostedGuildTiers)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { BoostedGuildTiers } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { display: "flex", alignItems: "center", width: "100%", marginTop: 40, paddingHorizontal: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 + 34 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 54, maxWidth: 660, width: "100%" };
createCacheKey[2] = { height: 8, top: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 - 4, marginHorizontal: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 + 2 };
let obj1 = { height: 8, top: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 - 4, marginHorizontal: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 + 2 };
createCacheKey[3] = { borderRadius: 8, height: "100%", width: "100%", position: "absolute", zIndex: 0, backgroundColor: ThemesDefault.colors.SPINE_DEFAULT };
createCacheKey[4] = { borderRadius: 8, position: "absolute", height: "100%", left: 0, zIndex: 1 };
createCacheKey[5] = { height: "100%", width: "100%", borderRadius: 8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
let closure_12 = { stiffness: 27, damping: 10 };
let closure_13 = { code: "function GuildBoostingMarketingProgressBarTsx1(){const{width}=this.__closure;return{width:width.get()+\"%\"};}" };
let closure_14 = { code: "function GuildBoostingMarketingProgressBarTsx2(){const{width}=this.__closure;return width.get();}" };
let closure_15 = { code: "function GuildBoostingMarketingProgressBarTsx3(width){const{BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,runOnJS,setRevealedTier}=this.__closure;let tier=BoostedGuildTiers.NONE;if(width>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)runOnJS(setRevealedTier)(tier);}" };
let result = require("obj132").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx");

export default function ProgressBar(guild) {
  guild = guild.guild;
  let sharedValue;
  let first;
  let React;
  let fillFactor;
  const tmp = callback();
  let obj = guild(sharedValue[10]);
  items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = guild(sharedValue[11]);
  sharedValue = obj1.useSharedValue(0);
  const tmp7 = first(React.useState(BoostedGuildTiers.NONE), 2);
  first = tmp7[0];
  React = tmp9;
  let obj2 = guild(sharedValue[11]);
  class I {
    constructor() {
      obj = { width: "" + closure_2.get() + "%" };
      return obj;
    }
  }
  I.__closure = { width: sharedValue };
  I.__workletHash = 8013193810386;
  I.__initData = closure_13;
  const animatedStyle = obj2.useAnimatedStyle(I);
  let obj3 = guild(sharedValue[11]);
  const fn = function p() {
    return sharedValue.get();
  };
  fn.__closure = { width: sharedValue };
  fn.__workletHash = 5482324713221;
  fn.__initData = closure_14;
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
      guild(sharedValue[11]).runOnJS(closure_4)(TIER_3);
      const obj = guild(sharedValue[11]);
    }
  };
  obj = { BoostedGuildTiers, TIER_REACHED_OFFSET: 5, revealedTier: first, runOnJS: guild(sharedValue[11]).runOnJS, setRevealedTier: tmp9 };
  fn2.__closure = obj;
  fn2.__workletHash = 4844648302516;
  fn2.__initData = closure_15;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const items1 = [guild];
  fillFactor = React.useMemo(() => guild(sharedValue[12]).getGuildBoostingProgressBarFillFactor(guild), items1).fillFactor;
  const items2 = [fillFactor, sharedValue, stateFromStores];
  const effect = React.useEffect(() => {
    let result = 100 * fillFactor;
    guild = result;
    let timeout = -1;
    if (timeout) {
      const result1 = sharedValue.set(result);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        result = closure_1_2.set(guild(sharedValue[13]).withSpring(closure_0, closure_2_12));
      }, 750);
    }
    return () => {
      window.clearTimeout(closure_1);
    };
  }, items2);
  obj = { style: tmp.progressBarContainer, children: null };
  obj1 = { style: tmp.progressBar, children: null };
  obj2 = { style: tmp.progressBarScrubber, children: null };
  obj3 = { style: items3, children: null };
  items3 = [tmp.progressBarFill, animatedStyle];
  const tmp2 = stateFromStores;
  const tmp3 = sharedValue;
  let tmp4 = stateFromStores(sharedValue[9])();
  const tmp16 = stateFromStores(sharedValue[14]);
  let str = "#515359";
  if (!obj10.isThemeDark(tmp4)) {
    str = tmp2(tmp3[8]).unsafe_rawColors.PRIMARY_160;
  }
  const items4 = [str, "#AB77F2"];
  obj3[1] = callback(tmp16, { useAngle: true, angle: 90, colors: items4, locations: [0.1577, 0.9905], style: tmp.progressBarGradientFill });
  const items5 = [callback(stateFromStores(sharedValue[11]).View, obj3), callback(fillFactor, { style: tmp.progressBarTrack })];
  obj2[1] = items5;
  const items6 = [
    callback2(fillFactor, obj2),
    items.map((item, index) => {
      const obj = { guild, tier: item, revealedTier: first, useReducedMotion: stateFromStores, isDisabled: null };
      let tmp4 = guild.premiumTier <= item;
      if (tmp4) {
        tmp4 = fillFactor > guild(sharedValue[7]).TierMarkerPositions[item];
      }
      obj[4] = tmp4;
      return closure_1_8(stateFromStores(sharedValue[7]), obj, item);
    })
  ];
  obj1[1] = items6;
  obj[1] = callback2(fillFactor, obj1);
  return callback(fillFactor, obj);
};
export const PROGRESS_BAR_SPACING = 40;