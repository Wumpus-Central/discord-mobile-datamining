// discord_app/modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import native from "../../../design/void/native.tsx";
import _modDef1652 from "../../../../_runtime/metro/01652__.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
function Emoji(url) {
  url = url.url;
  const tmp = closure_9();
  if ("" !== url) {
    const obj2 = { resizeMode: "contain", style: tmp.imageEmoji, source: null };
    const obj3 = { uri: url };
    obj2.source = obj3;
    let tmp5 = jsx(FastImageDefault, { resizeMode: "contain", style: tmp.imageEmoji, source: null });
  } else {
    const obj = { style: tmp.textEmoji, allowFontScaling: false, children: url.surrogates };
    tmp5 = jsx(native.LegacyText, { style: tmp.textEmoji, allowFontScaling: false, children: url.surrogates });
  }
  return tmp5;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_7 = 6 * DurationsDefault.Millis.SECOND;
let closure_8 = 2 * DurationsDefault.Millis.SECOND;
const createStyles = fn(5141);
let obj2 = {
  voiceChannelEffectEmojiContainer: null,
  voiceChannelEffectEmojiContainerTileNotch: null,
  voiceChannelEffectEmoji: null,
  textEmoji: null,
  imageEmoji: null,
};
const rect = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
  position: "absolute",
  right: 16,
  top: 16,
};
obj2.voiceChannelEffectEmojiContainer = rect;
obj2.voiceChannelEffectEmojiContainerTileNotch = { right: "auto", left: 16 };
obj2.voiceChannelEffectEmoji = { padding: 12 };
obj2.textEmoji = {
  fontSize: 32,
  lineHeight: 38,
  alignContent: "center",
  justifyContent: "center",
  display: "flex",
  width: 32,
  height: 32,
};
obj2.imageEmoji = { width: 32, height: 32 };
let closure_9 = createStyles.createStyles(obj2);
let closure_11 = {
  code: "(function AnimatedEffectEmojiTsx1(){let[withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING]=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+\"deg\",{duration:0}),withDelay(100,withTiming('0deg',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx");

export default function AnimatedEffectEmoji(onComplete) {
  ({ voiceChannelEffect, hasNotch } = onComplete);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  onComplete = onComplete.onComplete;
  _require = onComplete;
  const tmp = closure_9();
  ({ emoji, sentAt } = voiceChannelEffect);
  items = [c5];
  const items1 = [sentAt, onComplete.userId, onComplete];
  const stateFromStores = require("initialize").useStateFromStores(items, () => easing.useReducedMotion);
  const effect = noop.useEffect(() => {
    if (Date.now() - c1 >= closure_1_8) {
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
  require("../../../../_runtime/metro/01652__.js");
  const items2 = [
    closure_11,
    require("../../../../_runtime/metro/01652__.js").withSequence,
    require("timing/timing").withTiming,
    -120,
    require("../../../../_runtime/metro/01652__.js").withDelay,
    stateFromStores,
    require("native").STANDARD_EASING,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items2;
  class AnimatedEffectEmojiTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      tmp4 = closure_3;
      num = 300;
      num2 = 300;
      tmp3 = closure_1("" + closure_2 + "deg", { duration: 0 });
      tmp5 = closure_4;
      if (closure_4) {
        num2 = 0;
      }
      obj = { duration: num2, easing: closure_5 };
      tmp6 = closure_5;
      tmpResult = tmp(tmp3, tmp4(100, tmp2("0deg", obj)));
      tmp2Result = tmp2(0, { duration: 0 });
      if (tmp5) {
        num = 0;
      }
      obj1 = { transform: null };
      obj4 = { scale: tmp(tmp2Result, tmp4(100, tmp2(1, { duration: num, easing: tmp6 }))) };
      items = [,];
      items[0] = obj4;
      items[1] = { rotate: tmpResult };
      obj1.transform = items;
      return obj1;
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  AnimatedEffectEmojiTsx1.__closure = items3;
  AnimatedEffectEmojiTsx1.__workletHash = 13165317266923;
  AnimatedEffectEmojiTsx1.__initData = tmp7;
  let tmp16Result = null;
  if (null != emoji) {
    const items4 = [
      tmp.voiceChannelEffectEmojiContainer,
      tmp2(1187).generateBoxShadowStyle(tmp2(1187).EIGHT_DP_ELEVATION_SHADOW_PARAMS),
      tmp14,
    ];
    if (hasNotch) {
      hasNotch = tmp.voiceChannelEffectEmojiContainerTileNotch;
    }
    let obj2 = { style: null, children: null };
    items4[3] = hasNotch;
    obj2.style = items4;
    const obj3 = { style: tmp.voiceChannelEffectEmoji, children: null };
    const obj4 = { url: null, surrogates: null };
    let tmp2Result = tmp2(1187);
    obj4.url = tmp2(7670).getEffectUrl(emoji);
    obj4.surrogates = emoji.name;
    obj3.children = <Emoji url={null} surrogates={null} />;
    obj2.children = <c4 style={tmp.voiceChannelEffectEmoji}>{null}</c4>;
    tmp16Result = jsx(_modDef1652.View, { style: null, children: null });
    const tmp2Result2 = tmp2(7670);
  }
  return tmp16Result;
}
