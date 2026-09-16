// === Module 9770: AnimatedEffectEmoji ===

// Module 9770 (AnimatedEffectEmoji)
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1091 */;
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4374 */;
import timing from "timing" /* 4639 */;
import FastImageDefault from "FastImage" /* 5673 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;

require = fn;
function Emoji(url) {
  url = url.url;
  const tmp = closure_9();
  if ("" !== url) {
    const obj2 = { resizeMode: "contain", style: null, source: null };
    const items = [tmp.imageEmoji];
    obj2.style = items;
    const obj3 = { uri: url };
    obj2.source = obj3;
    let tmp5 = jsx(FastImageDefault, { resizeMode: "contain", style: null, source: null });
  } else {
    const obj = { style: null, allowFontScaling: false, children: null };
    const items1 = [tmp.textEmoji];
    obj.style = items1;
    obj.children = url.surrogates;
    tmp5 = jsx(native.LegacyText, { style: null, allowFontScaling: false, children: null });
  }
  return tmp5;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_7 = 6 * DurationsDefault.Millis.SECOND;
let closure_8 = 2 * DurationsDefault.Millis.SECOND;
const createStyles = fn(4638);
let obj2 = { voiceChannelEffectEmojiContainer: null, voiceChannelEffectEmojiContainerTileNotch: null, voiceChannelEffectEmoji: null, textEmoji: null, imageEmoji: null };
const rect = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, position: "absolute", right: 16, top: 16 };
obj2.voiceChannelEffectEmojiContainer = rect;
obj2.voiceChannelEffectEmojiContainerTileNotch = { right: "auto", left: 16 };
obj2.voiceChannelEffectEmoji = { padding: 12 };
obj2.textEmoji = { fontSize: 32, lineHeight: 38, alignContent: "center", justifyContent: "center", display: "flex", width: 32, height: 32 };
obj2.imageEmoji = { width: 32, height: 32 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function AnimatedEffectEmojiTsx1(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming('0deg',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx");

export default function AnimatedEffectEmoji(onComplete) {
  ({ voiceChannelEffect, hasNotch } = onComplete);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  onComplete = onComplete.onComplete;
  sentAt = undefined;
  let stateFromStores;
  const tmp = closure_9();
  ({ emoji, sentAt } = voiceChannelEffect);
  let items = [AccessibilityStore];
  stateFromStores = onComplete(stateFromStores[9]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [sentAt, onComplete.userId, onComplete];
  const effect = noop.useEffect(() => {
    if (Date.now() - sentAt >= closure_1_8) {
      if (timeout != null) {
        tmp2();
      }
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        if (closure_0 != null) {
          tmp();
        }
      }, closure_1_7);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
    };
  }, items1);
  onComplete(stateFromStores[10]);
  class N {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[10]);
      obj2 = closure_0(closure_2[11]);
      withTimingResult = obj2.withTiming("-120deg", { duration: 0 });
      obj3 = closure_0(closure_2[10]);
      obj4 = closure_0(closure_2[11]);
      num = 300;
      num2 = 300;
      tmp4 = closure_2;
      if (closure_2) {
        num2 = 0;
      }
      obj1 = { duration: num2, easing: tmp(tmp2[8]).STANDARD_EASING };
      withSequenceResult = obj.withSequence(withTimingResult, obj3.withDelay(100, obj4.withTiming("0deg", obj1)));
      tmpResult = tmp(tmp2[10]);
      tmpResult1 = tmp(tmp2[11]);
      withTimingResult1 = tmpResult1.withTiming(0, { duration: 0 });
      tmpResult2 = tmp(tmp2[10]);
      tmpResult3 = tmp(tmp2[11]);
      if (tmp4) {
        num = 0;
      }
      obj13 = { transform: null };
      obj14 = { scale: null };
      obj15 = { duration: num, easing: tmp(tmp2[8]).STANDARD_EASING };
      obj14.scale = tmpResult.withSequence(withTimingResult1, tmpResult2.withDelay(100, tmpResult3.withTiming(1, obj15)));
      items = [, ];
      items[0] = obj14;
      items[1] = { rotate: withSequenceResult };
      obj13.transform = items;
      return obj13;
    }
  }
  let obj = onComplete(stateFromStores[9]);
  N.__closure = { withSequence: onComplete(stateFromStores[10]).withSequence, withTiming: onComplete(stateFromStores[11]).withTiming, ANIMATION_ROTATION_DEG: -120, withDelay: onComplete(stateFromStores[10]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: onComplete(stateFromStores[8]).STANDARD_EASING };
  N.__workletHash = 75069010226;
  N.__initData = __initData;
  let tmp9Result = null;
  if (null != emoji) {
    const items2 = [tmp.voiceChannelEffectEmojiContainer, tmp2(tmp3[8]).generateBoxShadowStyle(tmp2(tmp3[8]).EIGHT_DP_ELEVATION_SHADOW_PARAMS), tmp7, ];
    if (hasNotch) {
      hasNotch = tmp.voiceChannelEffectEmojiContainerTileNotch;
    }
    let obj3 = { style: null, children: null };
    items2[3] = hasNotch;
    obj3.style = items2;
    let obj4 = { style: tmp.voiceChannelEffectEmoji, children: null };
    let obj5 = { url: null, surrogates: null };
    const tmp2Result = tmp2(tmp3[8]);
    obj5.url = tmp2(tmp3[12]).getEffectUrl(emoji);
    obj5.surrogates = emoji.name;
    obj4.children = <Emoji url={null} surrogates={null} />;
    obj3.children = <View style={tmp.voiceChannelEffectEmoji}>{null}</View>;
    tmp9Result = jsx(sentAt(tmp3[10]).View, { style: null, children: null });
    const tmp2Result2 = tmp2(tmp3[12]);
  }
  return tmp9Result;
};