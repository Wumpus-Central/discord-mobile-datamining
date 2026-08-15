// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = { code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,RING_RADIUS,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-RING_RADIUS*Math.sin(currentAngle)},{translateY:translateY.get()+RING_RADIUS*(Math.cos(currentAngle)-1)}]};}" };
let result = require("context").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx");

export default function CustomTypingIndicatorAnimatedEmoji(size) {
  let emoji;
  let index;
  ({ emoji, index } = size);
  let num = size.size;
  if (num === undefined) {
    num = 54;
  }
  const animation = size.animation;
  let enabled;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  enabled = sharedValue.useContext(index(enabled[2]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj = index(enabled[3]);
  sharedValue = obj.useSharedValue(1);
  let obj1 = index(enabled[3]);
  sharedValue1 = obj1.useSharedValue(0);
  sharedValue2 = index(enabled[3]).useSharedValue(0);
  let items = [animation, index, enabled, sharedValue1, sharedValue, sharedValue2];
  const effect = sharedValue.useEffect(() => {
    let obj = sharedValue;
    const result = sharedValue.set(1);
    const result1 = sharedValue1.set(0);
    const result2 = sharedValue2.set(0);
    if (!enabled) {
      if (null != animation) {
        const result3 = 200 * index;
        if (index(enabled[4]).CustomTypingIndicatorAnimation.PULSE === tmp4) {
          let tmp13Result = tmp13(tmp14[3]);
          tmp13Result = tmp13(tmp14[3]);
          const tmp13Result1 = tmp13(tmp14[3]);
          const tmp13Result2 = tmp13(tmp14[5]);
          const withTimingResult = tmp13(tmp14[5]).withTiming(1.18, { duration: 360 });
          const result4 = obj.set(tmp13Result.withDelay(result3, tmp13Result.withRepeat(tmp13Result1.withSequence(withTimingResult, tmp13(tmp14[5]).withTiming(1, { duration: 360 })), -1)));
          const tmp13Result3 = tmp13(tmp14[5]);
        } else if (tmp13(tmp14[4]).CustomTypingIndicatorAnimation.RING === tmp4) {
          const tmp13Result4 = tmp13(tmp14[3]);
          const tmp13Result5 = tmp13(tmp14[3]);
          const _Math = Math;
          obj = { duration: 1400, easing: null };
          const result5 = 2 * Math.PI;
          obj[1] = tmp13(tmp14[3]).Easing.linear;
          const result6 = sharedValue1.set(tmp13Result4.withDelay(result3, tmp13Result5.withRepeat(tmp13(tmp14[5]).withTiming(result5, obj), -1)));
          const tmp13Result6 = tmp13(tmp14[5]);
        } else if (tmp13(tmp14[4]).CustomTypingIndicatorAnimation.WAVE === tmp4) {
          const tmp13Result7 = tmp13(tmp14[3]);
          const tmp13Result8 = tmp13(tmp14[3]);
          const tmp13Result9 = tmp13(tmp14[3]);
          const tmp13Result10 = tmp13(tmp14[5]);
          const withTimingResult1 = tmp13(tmp14[5]).withTiming(-6, { duration: 260 });
          const tmp13Result11 = tmp13(tmp14[5]);
          const withTimingResult2 = tmp13(tmp14[5]).withTiming(0, { duration: 260 });
          const result7 = sharedValue2.set(tmp13Result7.withDelay(result3, tmp13Result8.withRepeat(tmp13Result9.withSequence(withTimingResult1, withTimingResult2, tmp13(tmp14[5]).withTiming(0, { duration: 380 })), -1)));
          const tmp13Result12 = tmp13(tmp14[5]);
        }
        return () => {
          outer1_0(outer1_2[3]).cancelAnimation(noop);
          const obj = outer1_0(outer1_2[3]);
          outer1_0(outer1_2[3]).cancelAnimation(closure_4);
          const obj2 = outer1_0(outer1_2[3]);
          outer1_0(outer1_2[3]).cancelAnimation(closure_5);
        };
      }
    }
  }, items);
  const obj3 = index(enabled[3]);
  const tmp = enabled;
  const fn = function _() {
    let value = sharedValue1.get();
    let obj = { transform: null };
    obj = { scale: sharedValue.get() };
    const items = [obj, , ];
    obj = { translateX: -5 * Math.sin(value) };
    items[1] = obj;
    const obj1 = { translateY: null };
    value = sharedValue2.get();
    obj1[0] = value + 5 * (Math.cos(value) - 1);
    items[2] = obj1;
    obj[0] = items;
    return obj;
  };
  fn.__closure = { angle: sharedValue1, scale: sharedValue, RING_RADIUS: 5, translateY: sharedValue2 };
  fn.__workletHash = 5950955699805;
  fn.__initData = sharedValue2;
  const animatedStyle = index(enabled[3]).useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: null };
  obj = { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null };
  let emojiURL;
  const obj4 = index(enabled[3]);
  const tmp8 = animation;
  if (null != emoji.id) {
    obj1 = { id: null, animated: false, size: null };
    obj1[0] = emoji.id;
    obj1[2] = num;
    emojiURL = tmp8(tmp[7]).getEmojiURL(obj1);
    const tmp8Result = tmp8(tmp[7]);
  }
  obj[1] = emojiURL;
  obj[2] = { width: num, height: num };
  obj[3] = { fontSize: num };
  obj[1] = sharedValue1(animation(enabled[6]), obj);
  return sharedValue1(animation(enabled[3]).View, obj);
};