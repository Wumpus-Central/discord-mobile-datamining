// === Module 9164: AnimatedEffectEmoji ===

// Module 9164 (AnimatedEffectEmoji)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1102 */;
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import FastImageDefault from "FastImage" /* 5981 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let c7 = -120;
let closure_8 = 6 * DurationsDefault.Millis.SECOND;
let closure_9 = 2 * DurationsDefault.Millis.SECOND;
const createStyles = fn(4896);
let obj2 = { voiceChannelEffectEmojiContainer: null, voiceChannelEffectEmojiContainerTileNotch: null, voiceChannelEffectEmoji: null, textEmoji: null, imageEmoji: null };
const rect = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, position: "absolute", right: 16, top: 16 };
obj2.voiceChannelEffectEmojiContainer = rect;
obj2.voiceChannelEffectEmojiContainerTileNotch = { right: "auto", left: 16 };
obj2.voiceChannelEffectEmoji = { padding: 12 };
obj2.textEmoji = { fontSize: 32, lineHeight: 38, alignContent: "center", justifyContent: "center", display: "flex", width: 32, height: 32 };
obj2.imageEmoji = { width: 32, height: 32 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let imageEmoji = dependencyMap;
  const cResult = c.c(5);
  ({ url, surrogates } = arg0);
  let textEmoji = closure_10();
  if (cResult[0] === textEmoji.imageEmoji) {
    if (cResult[1] === textEmoji.textEmoji) {
      if (cResult[2] === surrogates) {
        if (cResult[3] === url) {
          return cResult[4];
        }
      }
    }
  }
  if ("" !== url) {
    const obj2 = { resizeMode: "contain", style: null, source: null };
    const items = [textEmoji.imageEmoji];
    obj2.style = items;
    const obj3 = { uri: url };
    obj2.source = obj3;
    let tmp4 = jsx(FastImageDefault, { resizeMode: "contain", style: null, source: null });
  } else {
    const obj4 = { style: null, allowFontScaling: false, children: null };
    const items1 = [textEmoji.textEmoji];
    obj4.style = items1;
    obj4.children = surrogates;
    tmp4 = jsx(native.LegacyText, { style: null, allowFontScaling: false, children: null });
  }
  imageEmoji = textEmoji.imageEmoji;
  cResult[0] = imageEmoji;
  textEmoji = textEmoji.textEmoji;
  cResult[1] = textEmoji;
  cResult[2] = surrogates;
  cResult[3] = url;
  cResult[4] = tmp4;
}) : ((url) => {
  url = url.url;
  const tmp = closure_10();
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
});
const __initData = { code: "function AnimatedEffectEmojiTsx1(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming(\"0deg\",{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}" };
const __initData2 = { code: "function AnimatedEffectEmojiTsx2(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming('0deg',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}" };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onComplete(stateFromStores[8]).c(14);
  ({ userId, voiceChannelEffect, hasNotch, onComplete } = arg0);
  const tmp5 = closure_10();
  ({ emoji, sentAt } = voiceChannelEffect);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function w() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj = onComplete(stateFromStores[8]);
  stateFromStores = onComplete(stateFromStores[11]).useStateFromStores(tmp6, tmp7);
  if (cResult[2] === onComplete) {
    if (cResult[3] === sentAt) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] === onComplete) {
      if (cResult[6] === sentAt) {
        if (cResult[7] === userId) {
          let tmp11 = cResult[8];
        }
        const effect = noop.useEffect(tmp10, tmp11);
        class M {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[12]);
            obj2 = closure_0(closure_2[13]);
            withTimingResult = obj2.withTiming("-120deg", { duration: 0 });
            obj3 = closure_0(closure_2[12]);
            obj4 = closure_0(closure_2[13]);
            num = 300;
            num2 = 300;
            tmp4 = closure_2;
            if (closure_2) {
              num2 = 0;
            }
            obj1 = { duration: num2, easing: tmp(tmp2[10]).STANDARD_EASING };
            withSequenceResult = obj.withSequence(withTimingResult, obj3.withDelay(100, obj4.withTiming("0deg", obj1)));
            tmpResult = tmp(tmp2[12]);
            tmpResult1 = tmp(tmp2[13]);
            withTimingResult1 = tmpResult1.withTiming(0, { duration: 0 });
            tmpResult2 = tmp(tmp2[12]);
            tmpResult3 = tmp(tmp2[13]);
            if (tmp4) {
              num = 0;
            }
            obj13 = { transform: null };
            obj14 = { scale: null };
            obj15 = { duration: num, easing: tmp(tmp2[10]).STANDARD_EASING };
            obj14.scale = tmpResult.withSequence(withTimingResult1, tmpResult2.withDelay(100, tmpResult3.withTiming(1, obj15)));
            items = [, ];
            items[0] = obj14;
            items[1] = { rotate: withSequenceResult };
            obj13.transform = items;
            return obj13;
          }
        }
        let obj2 = { withSequence: onComplete(tmp2[12]).withSequence, withTiming: onComplete(tmp2[13]).withTiming, ANIMATION_ROTATION_DEG, withDelay: onComplete(tmp2[12]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: onComplete(tmp2[10]).STANDARD_EASING };
        M.__closure = obj2;
        M.__workletHash = 9499102126994;
        M.__initData = __initData;
        const animatedStyle = onComplete(tmp2[12]).useAnimatedStyle(M);
        if (cResult[9] === animatedStyle) {
          if (cResult[10] === emoji) {
            if (cResult[11] === tmp4) {
              if (cResult[12] === tmp5) {
                let tmp17 = cResult[13];
              }
              return tmp17;
            }
          }
        }
        let tmp19Result = null;
        if (null != emoji) {
          const items1 = [tmp5.voiceChannelEffectEmojiContainer, , , ];
          class M {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[12]);
              obj2 = closure_0(closure_2[13]);
              withTimingResult = obj2.withTiming("-120deg", { duration: 0 });
              obj3 = closure_0(closure_2[12]);
              obj4 = closure_0(closure_2[13]);
              num = 300;
              num2 = 300;
              tmp4 = closure_2;
              if (closure_2) {
                num2 = 0;
              }
              obj1 = { duration: num2, easing: tmp(tmp2[10]).STANDARD_EASING };
              withSequenceResult = obj.withSequence(withTimingResult, obj3.withDelay(100, obj4.withTiming("0deg", obj1)));
              tmpResult = tmp(tmp2[12]);
              tmpResult1 = tmp(tmp2[13]);
              withTimingResult1 = tmpResult1.withTiming(0, { duration: 0 });
              tmpResult2 = tmp(tmp2[12]);
              tmpResult3 = tmp(tmp2[13]);
              if (tmp4) {
                num = 0;
              }
              obj13 = { transform: null };
              obj14 = { scale: null };
              obj15 = { duration: num, easing: tmp(tmp2[10]).STANDARD_EASING };
              obj14.scale = tmpResult.withSequence(withTimingResult1, tmpResult2.withDelay(100, tmpResult3.withTiming(1, obj15)));
              items = [, ];
              items[0] = obj14;
              items[1] = { rotate: withSequenceResult };
              obj13.transform = items;
              return obj13;
            }
          }
          items1[1] = onComplete(tmp2[10]).generateBoxShadowStyle(onComplete(tmp2[10]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
          items1[2] = animatedStyle;
          let voiceChannelEffectEmojiContainerTileNotch = tmp4;
          if (tmp4) {
            voiceChannelEffectEmojiContainerTileNotch = tmp5.voiceChannelEffectEmojiContainerTileNotch;
          }
          let obj3 = { style: null, children: null };
          items1[3] = voiceChannelEffectEmojiContainerTileNotch;
          obj3.style = items1;
          let obj4 = { style: tmp5.voiceChannelEffectEmoji, children: null };
          let obj5 = { url: null, surrogates: null };
          let tmpResult5 = onComplete(tmp2[10]);
          obj5.url = onComplete(tmp2[14]).getEffectUrl(emoji);
          obj5.surrogates = emoji.name;
          obj4.children = <closure_11 url={null} surrogates={null} />;
          obj3.children = <View style={tmp5.voiceChannelEffectEmoji}>{null}</View>;
          tmp19Result = <tmp21 style={null}>{null}</tmp21>;
          let tmpResult6 = onComplete(tmp2[14]);
        }
        cResult[9] = animatedStyle;
        cResult[10] = emoji;
        cResult[11] = tmp4;
        cResult[12] = tmp5;
        cResult[13] = tmp19Result;
        tmp17 = tmp19Result;
        let tmpResult4 = onComplete(tmp2[12]);
      }
    }
    const items2 = [sentAt, , onComplete];
    cResult[5] = onComplete;
    cResult[6] = sentAt;
    cResult[7] = userId;
    cResult[8] = items2;
    tmp11 = items2;
  }
  const fn2 = function v() {
    if (Date.now() - sentAt >= closure_1_9) {
      if (timeout != null) {
        tmp2();
      }
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        if (closure_0 != null) {
          tmp();
        }
      }, closure_1_8);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
    };
  };
  cResult[2] = onComplete;
  cResult[3] = sentAt;
  cResult[4] = fn2;
  tmp10 = fn2;
  let tmpResult = onComplete(stateFromStores[11]);
}) : ((onComplete) => {
  ({ voiceChannelEffect, hasNotch } = onComplete);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  onComplete = onComplete.onComplete;
  sentAt = undefined;
  let stateFromStores;
  const tmp = closure_10();
  ({ emoji, sentAt } = voiceChannelEffect);
  let items = [AccessibilityStore];
  stateFromStores = onComplete(stateFromStores[11]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [sentAt, onComplete.userId, onComplete];
  const effect = noop.useEffect(() => {
    if (Date.now() - sentAt >= closure_1_9) {
      if (timeout != null) {
        tmp2();
      }
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        if (closure_0 != null) {
          tmp();
        }
      }, closure_1_8);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
    };
  }, items1);
  onComplete(stateFromStores[12]);
  class R {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[12]);
      obj2 = closure_0(closure_2[13]);
      withTimingResult = obj2.withTiming("-120deg", { duration: 0 });
      obj3 = closure_0(closure_2[12]);
      obj4 = closure_0(closure_2[13]);
      num = 300;
      num2 = 300;
      tmp4 = closure_2;
      if (closure_2) {
        num2 = 0;
      }
      obj1 = { duration: num2, easing: tmp(tmp2[10]).STANDARD_EASING };
      withSequenceResult = obj.withSequence(withTimingResult, obj3.withDelay(100, obj4.withTiming("0deg", obj1)));
      tmpResult = tmp(tmp2[12]);
      tmpResult1 = tmp(tmp2[13]);
      withTimingResult1 = tmpResult1.withTiming(0, { duration: 0 });
      tmpResult2 = tmp(tmp2[12]);
      tmpResult3 = tmp(tmp2[13]);
      if (tmp4) {
        num = 0;
      }
      obj13 = { transform: null };
      obj14 = { scale: null };
      obj15 = { duration: num, easing: tmp(tmp2[10]).STANDARD_EASING };
      obj14.scale = tmpResult.withSequence(withTimingResult1, tmpResult2.withDelay(100, tmpResult3.withTiming(1, obj15)));
      items = [, ];
      items[0] = obj14;
      items[1] = { rotate: withSequenceResult };
      obj13.transform = items;
      return obj13;
    }
  }
  let obj = onComplete(stateFromStores[11]);
  R.__closure = { withSequence: onComplete(stateFromStores[12]).withSequence, withTiming: onComplete(stateFromStores[13]).withTiming, ANIMATION_ROTATION_DEG, withDelay: onComplete(stateFromStores[12]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: onComplete(stateFromStores[10]).STANDARD_EASING };
  R.__workletHash = 2535359157649;
  R.__initData = __initData2;
  let tmp9Result = null;
  if (null != emoji) {
    const items2 = [tmp.voiceChannelEffectEmojiContainer, tmp2(tmp3[10]).generateBoxShadowStyle(tmp2(tmp3[10]).EIGHT_DP_ELEVATION_SHADOW_PARAMS), tmp7, ];
    if (hasNotch) {
      hasNotch = tmp.voiceChannelEffectEmojiContainerTileNotch;
    }
    let obj3 = { style: null, children: null };
    items2[3] = hasNotch;
    obj3.style = items2;
    let obj4 = { style: tmp.voiceChannelEffectEmoji, children: null };
    let obj5 = { url: null, surrogates: null };
    const tmp2Result = tmp2(tmp3[10]);
    obj5.url = tmp2(tmp3[14]).getEffectUrl(emoji);
    obj5.surrogates = emoji.name;
    obj4.children = <closure_11 url={null} surrogates={null} />;
    obj3.children = <View style={tmp.voiceChannelEffectEmoji}>{null}</View>;
    tmp9Result = jsx(sentAt(tmp3[12]).View, { style: null, children: null });
    const tmp2Result2 = tmp2(tmp3[14]);
  }
  return tmp9Result;
});