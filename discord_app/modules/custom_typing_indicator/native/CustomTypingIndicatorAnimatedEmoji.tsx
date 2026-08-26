// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c6 = 320;
let closure_7 = createCacheKey.createStyles((fontSize) => {
  const textEmoji = { fontSize };
  const imageEmoji = { width: fontSize, height: fontSize };
  return { textEmoji, imageEmoji };
});
let closure_8 = { code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}" };
let result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx");

export default function CustomTypingIndicatorAnimatedEmoji(emojiCount) {
  ({ emoji, index } = emojiCount);
  emojiCount = emojiCount.emojiCount;
  let num = emojiCount.size;
  if (num === undefined) {
    num = 16;
  }
  const animation = emojiCount.animation;
  let enabled;
  let name;
  closure_6 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  c10 = undefined;
  let obj = enabled;
  enabled = enabled.useContext(index(num[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  const tmp4 = animation(obj.useState(null), 2);
  closure_6 = tmp4[1];
  let items = [name];
  const callback = obj.useCallback(() => {
    callback(name);
  }, items);
  let tmp2Result = tmp2(tmp3[5]);
  sharedValue = tmp2Result.useSharedValue(1);
  tmp2Result = tmp2(tmp3[5]);
  sharedValue1 = tmp2Result.useSharedValue(0);
  const tmp = sharedValue(num);
  sharedValue2 = index(num[5]).useSharedValue(0);
  let result = 0.0625 * num;
  c10 = result;
  const items1 = [animation, index, emojiCount, enabled, sharedValue1, sharedValue, sharedValue2, num];
  const effect = obj.useEffect(() => {
    let obj = sharedValue;
    const result = sharedValue.set(1);
    obj1 = sharedValue1;
    const result1 = sharedValue1.set(0);
    let obj2 = sharedValue2;
    const result2 = sharedValue2.set(0);
    if (!enabled) {
      if (animation !== index(num[6]).TypingIndicatorAnimation.UNSPECIFIED) {
        const result3 = index * closure_6;
        const result4 = closure_6 * (emojiCount - 1);
        if (tmp5(tmp6[6]).TypingIndicatorAnimation.PULSE === tmp4) {
          let tmp5Result = tmp5(tmp6[5]);
          tmp5Result = tmp5(tmp6[5]);
          const tmp5Result1 = tmp5(tmp6[5]);
          obj = { duration: null };
          obj[0] = tmp14;
          const tmp5Result2 = tmp5(tmp6[7]);
          const withTimingResult = tmp5(tmp6[7]).withTiming(1.16, obj);
          obj = { duration: null };
          obj[0] = tmp14;
          const tmp5Result3 = tmp5(tmp6[7]);
          const withTimingResult1 = tmp5(tmp6[7]).withTiming(1, obj);
          obj1 = { duration: null };
          obj1[0] = result4;
          const result5 = obj.set(tmp5Result.withDelay(result3, tmp5Result.withRepeat(tmp5Result1.withSequence(withTimingResult, withTimingResult1, tmp5(tmp6[7]).withTiming(1, obj1)), -1)));
          const tmp5Result4 = tmp5(tmp6[7]);
        } else if (tmp5(tmp6[6]).TypingIndicatorAnimation.RING === tmp4) {
          const tmp5Result5 = tmp5(tmp6[5]);
          const tmp5Result6 = tmp5(tmp6[5]);
          const _Math = Math;
          obj2 = { duration: 1600, easing: null };
          const result6 = 2 * Math.PI;
          obj2[1] = tmp5(tmp6[5]).Easing.linear;
          const result7 = obj1.set(tmp5Result5.withDelay(result3, tmp5Result6.withRepeat(tmp5(tmp6[7]).withTiming(result6, obj2), -1)));
          const tmp5Result7 = tmp5(tmp6[7]);
        } else if (tmp5(tmp6[6]).TypingIndicatorAnimation.WAVE === tmp4) {
          const tmp5Result8 = tmp5(tmp6[5]);
          const tmp5Result9 = tmp5(tmp6[5]);
          const tmp5Result10 = tmp5(tmp6[5]);
          const obj3 = { duration: null };
          obj3[0] = tmp14;
          const tmp5Result11 = tmp5(tmp6[7]);
          const withTimingResult2 = tmp5(tmp6[7]).withTiming(-0.12 * num, obj3);
          const obj4 = { duration: null };
          obj4[0] = tmp14;
          const tmp5Result12 = tmp5(tmp6[7]);
          const withTimingResult3 = tmp5(tmp6[7]).withTiming(0, obj4);
          const obj5 = { duration: null };
          obj5[0] = result4;
          const result8 = obj2.set(tmp5Result8.withDelay(result3, tmp5Result9.withRepeat(tmp5Result10.withSequence(withTimingResult2, withTimingResult3, tmp5(tmp6[7]).withTiming(0, obj5)), -1)));
          const tmp5Result13 = tmp5(tmp6[7]);
        }
        return () => {
          closure_1_0(closure_1_2[5]).cancelAnimation(closure_7);
          const obj = closure_1_0(closure_1_2[5]);
          closure_1_0(closure_1_2[5]).cancelAnimation(closure_8);
          const obj2 = closure_1_0(closure_1_2[5]);
          closure_1_0(closure_1_2[5]).cancelAnimation(closure_9);
        };
      }
    }
  }, items1);
  const tmp2Result1 = index(num[5]);
  const fn = function b() {
    let value = sharedValue1.get();
    let obj = { transform: null };
    obj = { scale: sharedValue.get() };
    const items = [obj, , ];
    obj = { translateX: -c10 * Math.sin(value) };
    items[1] = obj;
    obj1 = { translateY: null };
    value = sharedValue2.get();
    obj1[0] = value + c10 * (Math.cos(value) - 1);
    items[2] = obj1;
    obj[0] = items;
    return obj;
  };
  fn.__closure = { angle: sharedValue1, scale: sharedValue, ringRadius: result, translateY: sharedValue2 };
  fn.__workletHash = 2311631571202;
  fn.__initData = sharedValue1;
  const animatedStyle = index(num[5]).useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: null };
  let str = "\u{1F615}";
  const tmp14 = emojiCount;
  const tmp2Result2 = index(num[5]);
  if (tmp4[0] !== name) {
    let str2 = "";
    if (null == emoji.id) {
      str2 = emoji.name;
    }
    str = str2;
  }
  obj = { name: str, src: null, fastImageStyle: null, textEmojiStyle: null, onError: null };
  let emojiURL;
  if (tmp4[0] !== name) {
    if (null != emoji.id) {
      obj1 = { id: null, animated: null, size: null };
      ({ id: obj9[0], animated } = emoji);
      if (animated == null) {
        animated = false;
      }
      obj1[1] = animated;
      obj1[2] = num;
      emojiURL = tmp14(tmp3[9]).getEmojiURL(obj1);
      const tmp14Result = tmp14(tmp3[9]);
    }
  }
  obj[1] = emojiURL;
  ({ imageEmoji: obj7[2], textEmoji: obj7[3] } = tmp);
  obj[4] = callback;
  obj[1] = name(emojiCount(num[8]), obj, name);
  return name(emojiCount(num[5]).View, obj);
};