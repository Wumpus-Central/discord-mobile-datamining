// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c6 = 320;
let closure_7 = createCacheKey.createStyles((fontSize, lineHeight) => {
  const textEmoji = { fontSize, lineHeight };
  const imageEmoji = { width: fontSize, height: fontSize };
  return { textEmoji, imageEmoji };
});
let closure_8 = { code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}" };
let result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx");

export default function CustomTypingIndicatorAnimatedEmoji(size) {
  ({ emoji, index } = size);
  let num = size.size;
  if (num === undefined) {
    num = 16;
  }
  const animation = size.animation;
  const bypassReducedMotionCheck = size.bypassReducedMotionCheck;
  let enabled;
  let name;
  closure_6 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  c10 = undefined;
  let obj = enabled;
  enabled = enabled.useContext(index(animation[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  const tmp4 = bypassReducedMotionCheck(obj.useState(null), 2);
  closure_6 = tmp4[1];
  let items = [name];
  const callback = obj.useCallback(() => {
    callback(name);
  }, items);
  let tmp2Result = tmp2(tmp3[5]);
  sharedValue = tmp2Result.useSharedValue(1);
  tmp2Result = tmp2(tmp3[5]);
  sharedValue1 = tmp2Result.useSharedValue(0);
  const tmp = sharedValue(num, size.textEmojiLineHeight);
  sharedValue2 = index(animation[5]).useSharedValue(0);
  let result = 0.0625 * num;
  c10 = result;
  const items1 = [animation, index, enabled, bypassReducedMotionCheck, sharedValue1, sharedValue, sharedValue2, num];
  const effect = obj.useEffect(() => {
    let obj = sharedValue;
    const result = sharedValue.set(1);
    obj1 = sharedValue1;
    const result1 = sharedValue1.set(0);
    let obj2 = sharedValue2;
    const result2 = sharedValue2.set(0);
    if (!enabled) {
      if (animation !== index(animation[6]).TypingIndicatorAnimation.UNSPECIFIED) {
        let str = "respect-motion-settings";
        if (bypassReducedMotionCheck) {
          str = "animate-always";
        }
        const result3 = index * closure_6;
        const result4 = closure_6 * (tmp6(tmp7[7]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT - 1);
        if (tmp6(tmp7[6]).TypingIndicatorAnimation.PULSE === tmp5) {
          let tmp6Result = tmp6(tmp7[5]);
          tmp6Result = tmp6(tmp7[5]);
          const tmp6Result1 = tmp6(tmp7[5]);
          obj = { duration: null };
          obj[0] = tmp10;
          const tmp6Result2 = tmp6(tmp7[8]);
          const withTimingResult = tmp6(tmp7[8]).withTiming(1.16, obj, str);
          obj = { duration: null };
          obj[0] = tmp10;
          const tmp6Result3 = tmp6(tmp7[8]);
          const withTimingResult1 = tmp6(tmp7[8]).withTiming(1, obj, str);
          obj1 = { duration: null };
          obj1[0] = result4;
          const result5 = obj.set(tmp6Result.withDelay(result3, tmp6Result.withRepeat(tmp6Result1.withSequence(withTimingResult, withTimingResult1, tmp6(tmp7[8]).withTiming(1, obj1, str)), -1)));
          const tmp6Result4 = tmp6(tmp7[8]);
        } else if (tmp6(tmp7[6]).TypingIndicatorAnimation.RING === tmp5) {
          const tmp6Result5 = tmp6(tmp7[5]);
          const tmp6Result6 = tmp6(tmp7[5]);
          const _Math = Math;
          obj2 = { duration: 1600, easing: null };
          const result6 = 2 * Math.PI;
          obj2[1] = tmp6(tmp7[5]).Easing.linear;
          const result7 = obj1.set(tmp6Result5.withDelay(result3, tmp6Result6.withRepeat(tmp6(tmp7[8]).withTiming(result6, obj2, str), -1)));
          const tmp6Result7 = tmp6(tmp7[8]);
        } else if (tmp6(tmp7[6]).TypingIndicatorAnimation.WAVE === tmp5) {
          const tmp6Result8 = tmp6(tmp7[5]);
          const tmp6Result9 = tmp6(tmp7[5]);
          const tmp6Result10 = tmp6(tmp7[5]);
          const obj3 = { duration: null };
          obj3[0] = tmp10;
          const tmp6Result11 = tmp6(tmp7[8]);
          const withTimingResult2 = tmp6(tmp7[8]).withTiming(-0.12 * num, obj3, str);
          const obj4 = { duration: null };
          obj4[0] = tmp10;
          const tmp6Result12 = tmp6(tmp7[8]);
          const withTimingResult3 = tmp6(tmp7[8]).withTiming(0, obj4, str);
          const obj5 = { duration: null };
          obj5[0] = result4;
          const result8 = obj2.set(tmp6Result8.withDelay(result3, tmp6Result9.withRepeat(tmp6Result10.withSequence(withTimingResult2, withTimingResult3, tmp6(tmp7[8]).withTiming(0, obj5, str)), -1)));
          const tmp6Result13 = tmp6(tmp7[8]);
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
  const tmp2Result1 = index(animation[5]);
  class D {
    constructor() {
      value = closure_8.get();
      obj = { transform: null };
      obj = { scale: closure_7.get() };
      items = [, , ];
      items[0] = obj;
      obj1 = { translateX: -closure_10 * Math.sin(value) };
      items[1] = obj1;
      obj2 = { translateY: null };
      value1 = closure_9.get();
      obj2[0] = value1 + closure_10 * (Math.cos(value) - 1);
      items[2] = obj2;
      obj[0] = items;
      return obj;
    }
  }
  D.__closure = { angle: sharedValue1, scale: sharedValue, ringRadius: result, translateY: sharedValue2 };
  D.__workletHash = 2311631571202;
  D.__initData = sharedValue1;
  const animatedStyle = index(animation[5]).useAnimatedStyle(D);
  obj = { style: animatedStyle, children: null };
  let str = "\u{1F615}";
  const tmp14 = num;
  const tmp2Result2 = index(animation[5]);
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
      emojiURL = tmp14(tmp3[10]).getEmojiURL(obj1);
      const tmp14Result = tmp14(tmp3[10]);
    }
  }
  obj[1] = emojiURL;
  ({ imageEmoji: obj7[2], textEmoji: obj7[3] } = tmp);
  obj[4] = callback;
  obj[1] = name(num(animation[9]), obj, name);
  return name(num(animation[5]).View, obj);
};