// === Module 9630: AnimatedEffectEmoji ===

// Module 9630 (AnimatedEffectEmoji)
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1090 */;
import native from "native" /* 1178 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import FastImageDefault from "FastImage" /* 5587 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
function Emoji(url) {
  url = url.url;
  const tmp = closure_9();
  if ("" !== url) {
    let obj = { resizeMode: "contain", style: null, source: null };
    const items = [tmp.imageEmoji];
    obj.style = items;
    obj = { uri: url };
    obj.source = obj;
    let tmp5 = jsx(FastImageDefault, { uri: url });
  } else {
    obj = { style: null, allowFontScaling: false, children: null };
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
fn(4560);
const createStyles = { voiceChannelEffectEmojiContainer: null, voiceChannelEffectEmojiContainerTileNotch: null, voiceChannelEffectEmoji: null, textEmoji: null, imageEmoji: null };
const rect = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, position: "absolute", right: 16, top: 16 };
createStyles.voiceChannelEffectEmojiContainer = rect;
createStyles.voiceChannelEffectEmojiContainerTileNotch = { right: "auto", left: 16 };
createStyles.voiceChannelEffectEmoji = { padding: 12 };
createStyles.textEmoji = { fontSize: 32, lineHeight: 38, alignContent: "center", justifyContent: "center", display: "flex", width: 32, height: 32 };
createStyles.imageEmoji = { width: 32, height: 32 };
let closure_9 = createStyles.createStyles(createStyles);
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
  let obj = onComplete(stateFromStores[9]);
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
      obj = { duration: num2, easing: tmp(tmp2[8]).STANDARD_EASING };
      withSequenceResult = obj.withSequence(withTimingResult, obj3.withDelay(100, obj4.withTiming("0deg", obj)));
      tmpResult = tmp(tmp2[10]);
      tmpResult1 = tmp(tmp2[11]);
      withTimingResult1 = tmpResult1.withTiming(0, { duration: 0 });
      tmpResult2 = tmp(tmp2[10]);
      tmpResult3 = tmp(tmp2[11]);
      if (tmp4) {
        num = 0;
      }
      obj1 = { transform: null };
      obj2 = { scale: null };
      obj3 = { duration: num, easing: tmp(tmp2[8]).STANDARD_EASING };
      obj2.scale = tmpResult.withSequence(withTimingResult1, tmpResult2.withDelay(100, tmpResult3.withTiming(1, obj3)));
      items = [, ];
      items[0] = obj2;
      items[1] = { rotate: withSequenceResult };
      obj1.transform = items;
      return obj1;
    }
  }
  obj = { withSequence: onComplete(stateFromStores[10]).withSequence, withTiming: onComplete(stateFromStores[11]).withTiming, ANIMATION_ROTATION_DEG: -120, withDelay: onComplete(stateFromStores[10]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: onComplete(stateFromStores[8]).STANDARD_EASING };
  N.__closure = obj;
  N.__workletHash = 75069010226;
  N.__initData = __initData;
  let tmp9Result = null;
  if (null != emoji) {
    const items2 = [tmp.voiceChannelEffectEmojiContainer, , , ];
    let tmp2Result = tmp2(tmp3[8]);
    items2[1] = tmp2Result.generateBoxShadowStyle(tmp2(tmp3[8]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
    items2[2] = tmp7;
    if (hasNotch) {
      hasNotch = tmp.voiceChannelEffectEmojiContainerTileNotch;
    }
    obj = { style: null, children: null };
    items2[3] = hasNotch;
    obj.style = items2;
    let obj1 = { style: tmp.voiceChannelEffectEmoji, children: null };
    let obj2 = { url: null, surrogates: null };
    tmp2Result = tmp2(tmp3[12]);
    obj2.url = tmp2Result.getEffectUrl(emoji);
    obj2.surrogates = emoji.name;
    obj1.children = <Emoji url={null} surrogates={null} />;
    obj.children = <View style={tmp.voiceChannelEffectEmoji}>{null}</View>;
    tmp9Result = jsx(sentAt(tmp3[10]).View, { style: null, children: null });
  }
  return tmp9Result;
};