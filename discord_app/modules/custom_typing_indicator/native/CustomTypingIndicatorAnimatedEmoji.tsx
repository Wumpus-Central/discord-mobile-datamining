// === Module 14712: CustomTypingIndicatorAnimatedEmoji ===

// Module 14712 (CustomTypingIndicatorAnimatedEmoji)
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let closure_5 = { code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,RING_RADIUS,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-RING_RADIUS*Math.sin(currentAngle)},{translateY:translateY.get()+RING_RADIUS*(Math.cos(currentAngle)-1)}]};}" };
let result = require("obj132").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx");

export default function CustomTypingIndicatorAnimatedEmoji(size) {
  ({ emoji, index } = size);
  let num = size.size;
  if (num === undefined) {
    num = 54;
  }
  const animation = size.animation;
  let enabled;
  let sharedValue;
  enabled = sharedValue.useContext(index(enabled[2]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj = index(enabled[3]);
  sharedValue = obj.useSharedValue(1);
  obj1 = index(enabled[3]);
  const sharedValue1 = obj1.useSharedValue(0);
  const sharedValue2 = index(enabled[3]).useSharedValue(0);
  let items = [animation, index, enabled, sharedValue1, sharedValue, sharedValue2];
  const effect = sharedValue.useEffect(() => {
    let obj = sharedValue;
    const result = sharedValue.set(1);
    const result1 = sharedValue1.set(0);
    const result2 = sharedValue2.set(0);
    if (!enabled) {
      if (null != animation) {
        const result3 = 200 * index;
        if (index(enabled[4]).CustomTypingIndicatorAnimation.PULSE === animation) {
          index(enabled[3]);
          const tmp13Result = index(enabled[3]);
          const tmp13Result1 = index(enabled[3]);
          const tmp13Result2 = index(enabled[5]);
          const withTimingResult = index(enabled[5]).withTiming(1.18, { duration: 360 });
          const result4 = obj.set(tmp13Result.withDelay(result3, tmp13Result.withRepeat(tmp13Result1.withSequence(withTimingResult, index(enabled[5]).withTiming(1, { duration: 360 })), -1)));
          const tmp13Result3 = index(enabled[5]);
        } else if (index(enabled[4]).CustomTypingIndicatorAnimation.RING === animation) {
          const tmp13Result4 = index(enabled[3]);
          const tmp13Result5 = index(enabled[3]);
          const _Math = Math;
          obj = { duration: 1400, easing: null };
          const result5 = 2 * Math.PI;
          obj[1] = index(enabled[3]).Easing.linear;
          const result6 = sharedValue1.set(tmp13Result4.withDelay(result3, tmp13Result5.withRepeat(index(enabled[5]).withTiming(result5, obj), -1)));
          const tmp13Result6 = index(enabled[5]);
        } else if (index(enabled[4]).CustomTypingIndicatorAnimation.WAVE === animation) {
          const tmp13Result7 = index(enabled[3]);
          const tmp13Result8 = index(enabled[3]);
          const tmp13Result9 = index(enabled[3]);
          const tmp13Result10 = index(enabled[5]);
          const withTimingResult1 = index(enabled[5]).withTiming(-6, { duration: 260 });
          const tmp13Result11 = index(enabled[5]);
          const withTimingResult2 = index(enabled[5]).withTiming(0, { duration: 260 });
          const result7 = sharedValue2.set(tmp13Result7.withDelay(result3, tmp13Result8.withRepeat(tmp13Result9.withSequence(withTimingResult1, withTimingResult2, index(enabled[5]).withTiming(0, { duration: 380 })), -1)));
          const tmp13Result12 = index(enabled[5]);
        }
        return () => {
          index(enabled[3]).cancelAnimation(closure_3);
          const obj = index(enabled[3]);
          index(enabled[3]).cancelAnimation(closure_4);
          const obj2 = index(enabled[3]);
          index(enabled[3]).cancelAnimation(closure_5);
        };
      }
    }
  }, items);
  const obj3 = index(enabled[3]);
  const tmp = enabled;
  const fn = function _() {
    let value = sharedValue1.get();
    let obj = { scale: sharedValue.get() };
    const items = [obj, , ];
    obj = { translateX: -5 * Math.sin(value) };
    items[1] = obj;
    obj1 = { translateY: null };
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