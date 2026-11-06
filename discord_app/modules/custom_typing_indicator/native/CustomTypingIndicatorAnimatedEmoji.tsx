// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import useCanPlayAnimatedEmojiDefault from "useCanPlayAnimatedEmoji.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const AppStates = fn(1072).AppStates;
const jsx = fn(21).jsx;
let c8 = 320;
const createStyles = fn(5170);
let closure_9 = createStyles.createStyles((width) => {
  const obj = {
    emojiContainer: { width, height: width, alignItems: "center", justifyContent: "center" },
    textEmoji: null,
    imageEmoji: { width, height: width },
  };
  const size = {
    width: (18 * width) / 14,
    height: (18 * width) / 14,
    textAlign: "center",
    fontSize: (12 * width) / 14,
    lineHeight: (18 * width) / 14,
  };
  obj.textEmoji = size;
  return obj;
});
let closure_10 = {
  code: "(function CustomTypingIndicatorAnimatedEmojiTsx1(){let[angle,scale,ringRadius,translateY]=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};})",
};
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx",
);

export default function CustomTypingIndicatorAnimatedEmoji(emojiCount) {
  ({ emoji, index } = emojiCount);
  _require = index;
  emojiCount = emojiCount.emojiCount;
  importDefault = emojiCount;
  let num = emojiCount.size;
  if (num === undefined) {
    num = 16;
  }
  dependencyMap = num;
  const animation = emojiCount.animation;
  _slicedToArray = animation;
  let enabled;
  closure_6 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let stateFromStores;
  const tmp = sharedValue2(num);
  enabled = enabled.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext).reducedMotion
    .enabled;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  const tmp4 = _slicedToArray(enabled.useState(null), 2);
  closure_6 = tmp4[1];
  items = [name];
  const callback = obj.useCallback(() => {
    closure_6(name);
  }, items);
  const tmp7 = useCanPlayAnimatedEmojiDefault();
  sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(1);
  const tmp2Result = require("../../../../_runtime/metro/01652__.js");
  sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp2Result5 = require("../../../../_runtime/metro/01652__.js");
  sharedValue2 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp2Result6 = require("../../../../_runtime/metro/01652__.js");
  const items1 = [name];
  stateFromStores = require("initialize").useStateFromStores(items1, () => name.getState() === closure_6.ACTIVE);
  const items2 = [animation, index, emojiCount, enabled, stateFromStores, sharedValue1, sharedValue, sharedValue2, num];
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue1.set(0);
    const result2 = sharedValue2.set(0);
    if (!enabled) {
      if (c3 !== user.TypingIndicatorAnimation.UNSPECIFIED) {
        if (stateFromStores) {
          const result3 = c0 * duration;
          const result4 = duration * (c1 - 1);
          if (user.TypingIndicatorAnimation.PULSE === c3) {
            const tmp5Result = _mod1652;
            const tmp5Result15 = _mod1652;
            const tmp5Result16 = _mod1652;
            const obj4 = { duration };
            const tmp5Result17 = timing_timing;
            const withTimingResult = timing_timing.withTiming(1.16, obj4);
            const obj5 = { duration };
            const tmp5Result18 = timing_timing;
            const withTimingResult1 = timing_timing.withTiming(1, obj5);
            const obj6 = { duration: result4 };
            const result5 = sharedValue.set(
              tmp5Result.withDelay(
                result3,
                tmp5Result15.withRepeat(
                  tmp5Result16.withSequence(withTimingResult, withTimingResult1, timing_timing.withTiming(1, obj6)),
                  -1,
                ),
              ),
            );
            const tmp5Result19 = timing_timing;
          } else if (user.TypingIndicatorAnimation.RING === c3) {
            const tmp5Result20 = _mod1652;
            const tmp5Result21 = _mod1652;
            const _Math = Math;
            const obj7 = { duration: 1600, easing: null };
            const result6 = 2 * Math.PI;
            obj7.easing = _mod1652.Easing.linear;
            const result7 = sharedValue1.set(
              tmp5Result20.withDelay(result3, tmp5Result21.withRepeat(timing_timing.withTiming(result6, obj7), -1)),
            );
            const tmp5Result22 = timing_timing;
          } else if (user.TypingIndicatorAnimation.WAVE === c3) {
            const tmp5Result23 = _mod1652;
            const tmp5Result24 = _mod1652;
            const tmp5Result25 = _mod1652;
            const obj8 = { duration };
            const tmp5Result26 = timing_timing;
            const withTimingResult2 = timing_timing.withTiming(-0.12 * c2, obj8);
            const obj9 = { duration };
            const tmp5Result27 = timing_timing;
            const withTimingResult3 = timing_timing.withTiming(0, obj9);
            const obj10 = { duration: result4 };
            const result8 = sharedValue2.set(
              tmp5Result23.withDelay(
                result3,
                tmp5Result24.withRepeat(
                  tmp5Result25.withSequence(withTimingResult2, withTimingResult3, timing_timing.withTiming(0, obj10)),
                  -1,
                ),
              ),
            );
            const tmp5Result28 = timing_timing;
          }
          return () => {
            c0(1652).cancelAnimation(sharedValue);
            const obj = c0(1652);
            c0(1652).cancelAnimation(sharedValue1);
            const obj2 = c0(1652);
            c0(1652).cancelAnimation(sharedValue2);
          };
        }
      }
    }
  }, items2);
  const tmp2Result7 = require("initialize");
  const items3 = [stateFromStores, sharedValue1, sharedValue, 0.0625 * num, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17] = items3;
  class CustomTypingIndicatorAnimatedEmojiTsx1 {
    constructor() {
      value = closure_0.get();
      obj = { transform: null };
      obj1 = { scale: closure_1.get() };
      items = [, ,];
      items[0] = obj1;
      obj5 = { translateX: null };
      tmp2 = -closure_2;
      obj5.translateX = tmp2 * Math.sin(value);
      items[1] = obj5;
      obj6 = { translateY: null };
      value1 = closure_3.get();
      obj6.translateY = value1 + closure_2 * (Math.cos(value) - 1);
      items[2] = obj6;
      obj.transform = items;
      return obj;
    }
  }
  const items4 = [tmp14, tmp15, tmp16, tmp17];
  CustomTypingIndicatorAnimatedEmojiTsx1.__closure = items4;
  CustomTypingIndicatorAnimatedEmojiTsx1.__workletHash = 1185511828923;
  CustomTypingIndicatorAnimatedEmojiTsx1.__initData = tmp13;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    CustomTypingIndicatorAnimatedEmojiTsx1,
  );
  let obj2 = { style: animatedStyle, children: null };
  let obj3 = {
    style: tmp.emojiContainer,
    name: null,
    src: null,
    fastImageStyle: null,
    textEmojiStyle: null,
    onError: null,
  };
  let str = "\u{1F615}";
  const tmp2Result8 = require("../../../../_runtime/metro/01652__.js");
  if (tmp4[0] !== name) {
    let str2 = "";
    if (null == emoji.id) {
      str2 = emoji.name;
    }
    str = str2;
  }
  obj3.name = str;
  let emojiURL;
  if (tmp4[0] !== name) {
    if (null != emoji.id) {
      let obj4 = { id: null, animated: null, size: null };
      ({ id: obj10.id, animated } = emoji);
      if (animated == null) {
        animated = false;
      }
      if (animated) {
        animated = tmp7;
      }
      obj4.animated = animated;
      obj4.size = num;
      emojiURL = tmp6(1411).getEmojiURL(obj4);
      const tmp6Result2 = tmp6(1411);
    }
  }
  obj3.src = emojiURL;
  ({ imageEmoji: obj8.fastImageStyle, textEmoji: obj8.textEmojiStyle } = tmp);
  obj3.onError = callback;
  obj2.children = sharedValue(EmojiDefault, obj3, emojiCount.emojisKey);
  return sharedValue(_modDef1652.View, obj2);
}
