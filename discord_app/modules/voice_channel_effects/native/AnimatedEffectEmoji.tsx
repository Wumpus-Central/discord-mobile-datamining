import noop from "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function Emoji(url) {
  url = url.url;
  const tmp = createCacheKey();
  if ("" !== url) {
    let obj = { resizeMode: "contain", style: null, source: null };
    const items = [tmp.imageEmoji];
    obj[1] = items;
    obj = { uri: null };
    obj[0] = url;
    obj[2] = obj;
    let tmp5 = jsx(importDefault(5207), { uri: null });
  } else {
    obj = { style: null, allowFontScaling: false, children: null };
    const items1 = [tmp.textEmoji];
    obj[0] = items1;
    obj[2] = url.surrogates;
    tmp5 = jsx(require(1297) /* Button */.LegacyText, { style: null, allowFontScaling: false, children: null });
  }
  return tmp5;
}
let closure_7 = 6 * require("set").Millis.SECOND;
let closure_8 = 2 * require("set").Millis.SECOND;
createCacheKey = { voiceChannelEffectEmojiContainer: null, voiceChannelEffectEmojiContainerTileNotch: null, voiceChannelEffectEmoji: null, textEmoji: null, imageEmoji: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.round, position: "absolute", right: 16, top: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { right: "auto", left: 16 };
createCacheKey[2] = { padding: 12 };
createCacheKey[3] = { fontSize: 32, lineHeight: 38, alignContent: "center", justifyContent: "center", display: "flex", width: 32, height: 32 };
createCacheKey[4] = { width: 32, height: 32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_11 = { code: "function AnimatedEffectEmojiTsx1(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming('0deg',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}" };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx");

export default function AnimatedEffectEmoji(onComplete) {
  let emoji;
  let hasNotch;
  let sentAt;
  let voiceChannelEffect;
  ({ voiceChannelEffect, hasNotch } = onComplete);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  onComplete = onComplete.onComplete;
  sentAt = undefined;
  let stateFromStores;
  const tmp = createCacheKey();
  ({ emoji, sentAt } = voiceChannelEffect);
  let obj = onComplete(stateFromStores[9]);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [sentAt, onComplete.userId, onComplete];
  const effect = React.useEffect(() => {
    if (Date.now() - sentAt >= outer1_8) {
      if (timeout != null) {
        tmp2();
      }
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        if (closure_0 != null) {
          tmp();
        }
      }, outer1_7);
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
      tmp = onComplete;
      tmp2 = useStateFromStores;
      obj = onComplete(useStateFromStores[10]);
      obj2 = onComplete(useStateFromStores[11]);
      withTimingResult = obj2.withTiming("-120deg", { duration: 0 });
      obj3 = onComplete(useStateFromStores[10]);
      obj4 = onComplete(useStateFromStores[11]);
      num = 300;
      num2 = 300;
      tmp4 = useStateFromStores;
      if (useStateFromStores) {
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
      obj2[0] = tmpResult.withSequence(withTimingResult1, tmpResult2.withDelay(100, tmpResult3.withTiming(1, obj3)));
      items = [, ];
      items[0] = obj2;
      items[1] = { rotate: withSequenceResult };
      obj1[0] = items;
      return obj1;
    }
  }
  obj = { withSequence: onComplete(stateFromStores[10]).withSequence, withTiming: onComplete(stateFromStores[11]).withTiming, ANIMATION_ROTATION_DEG: -120, withDelay: onComplete(stateFromStores[10]).withDelay, useReducedMotion: stateFromStores, STANDARD_EASING: onComplete(stateFromStores[8]).STANDARD_EASING };
  N.__closure = obj;
  N.__workletHash = 75069010226;
  N.__initData = closure_11;
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
    obj[0] = items2;
    let obj1 = { style: null, children: null };
    obj1[0] = tmp.voiceChannelEffectEmoji;
    let obj2 = { url: null, surrogates: null };
    tmp2Result = tmp2(tmp3[12]);
    obj2[0] = tmp2Result.getEffectUrl(emoji);
    obj2[1] = emoji.name;
    obj1[1] = <Emoji url={null} surrogates={null} />;
    obj[1] = <View style={null}>{null}</View>;
    tmp9Result = tmp9(sentAt(tmp3[10]).View, obj);
  }
  return tmp9Result;
};