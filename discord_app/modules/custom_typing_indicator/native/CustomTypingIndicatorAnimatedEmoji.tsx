// === Module 11596: CustomTypingIndicatorAnimatedEmoji ===

// Module 11596 (CustomTypingIndicatorAnimatedEmoji)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import user from "user" /* 1385 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let emojiCount, num2, num3, num4, num5, num6, obj1, obj14, obj15, obj16, obj17, obj18, set, set2, set2Result, set3, set3Result, tmp10, tmp14, tmp19, tmp28, tmp3, tmp32, tmp5, tmp8, tmp9, tmp9Result, tmp9Result1, tmp9Result10, tmp9Result11, tmp9Result12, tmp9Result13, tmp9Result14, tmp9Result2, tmp9Result3, tmp9Result4, tmp9Result5, tmp9Result6, tmp9Result7, tmp9Result8, tmp9Result9;

const AppStates = Constants.AppStates;
const jsx = Fragment.jsx;
let c8 = 320;
let c9 = 0.0625;
let closure_10 = createStyles.createStyles((fontSize) => ({ textEmoji: { fontSize }, imageEmoji: { width: fontSize, height: fontSize } }));
let closure_11 = { code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}" };
const __initData = { code: "function CustomTypingIndicatorAnimatedEmojiTsx2(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((emojiCount) => {
  let animation;
  let duration;
  let emoji;
  let enabled;
  let index;
  let tmp11;
  let tmp12;
  let obj = index(animation[7]);
  const cResult = obj.c(31);
  ({ emoji, index } = emojiCount);
  emojiCount = emojiCount.emojiCount;
  ({ size, animation } = emojiCount);
  let num = 16;
  if (undefined !== size) {
    num = size;
  }
  closure_10(num);
  let obj2 = enabled;
  enabled = enabled.useContext(index(animation[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  [r10033, AppStates] = num(obj2.useState(null), 2);
  num(obj2.useState(null), 2);
  if (cResult[0] !== name) {
    class A {
      constructor() {
        tmp = closure_6(name);
        return;
      }
    }
    cResult[0] = name;
    cResult[1] = A;
  } else {
    class A {
      constructor() {
        tmp = closure_6(name);
        return;
      }
    }
  }
  const AnimateEmoji = index(animation[9]).AnimateEmoji;
  AnimateEmoji.useSetting() && !enabled;
  const tmpResult = index(animation[10]);
  const sharedValue = tmpResult.useSharedValue(1);
  const tmpResult4 = index(animation[10]);
  const sharedValue1 = tmpResult4.useSharedValue(0);
  const tmpResult5 = index(animation[10]);
  const sharedValue2 = tmpResult5.useSharedValue(0);
  closure_10 = num * sharedValue2;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        tmp = closure_6(name);
        return;
      }
    }
    let items = [name];
    class Y {
      constructor() {
        return name.getState() === closure_6.ACTIVE;
      }
    }
    cResult[2] = items;
    cResult[3] = Y;
    tmp12 = Y;
    tmp11 = items;
  } else {
    class A {
      constructor() {
        tmp = closure_6(name);
        return;
      }
    }
    tmp12 = cResult[3];
  }
  const tmpResult6 = index(animation[11]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp11, tmp12);
  if (cResult[4] === sharedValue1) {
    class A {
      constructor() {
        tmp = closure_6(name);
        return;
      }
    }
  }
  class L {
    constructor() {
      tmp = closure_7;
      result = closure_7.set(1);
      tmp3 = closure_8;
      result1 = closure_8.set(0);
      tmp5 = closure_9;
      result2 = closure_9.set(0);
      tmp7 = enabled;
      if (!tmp7) {
        tmp8 = animation;
        tmp9 = closure_0;
        tmp10 = closure_2;
        if (animation !== closure_0(closure_2[12]).TypingIndicatorAnimation.UNSPECIFIED) {
          tmp28 = closure_11;
          if (tmp28) {
            tmp11 = index;
            tmp12 = c8;
            result3 = index * c8;
            tmp14 = emojiCount;
            result4 = c8 * (emojiCount - 1);
            if (tmp9(tmp10[12]).TypingIndicatorAnimation.PULSE === tmp8) {
              set2 = tmp.set;
              tmp9Result = tmp9(tmp10[10]);
              withDelay2 = tmp9Result.withDelay;
              tmp9Result1 = tmp9(tmp10[10]);
              withRepeat2 = tmp9Result1.withRepeat;
              tmp9Result2 = tmp9(tmp10[10]);
              withSequence = tmp9Result2.withSequence;
              tmp9Result3 = tmp9(tmp10[13]);
              obj1 = { duration: null };
              obj1.duration = tmp12;
              num3 = 1.16;
              withTimingResult = tmp9Result3.withTiming(1.16, obj1);
              tmp9Result4 = tmp9(tmp10[13]);
              obj14 = { duration: null };
              obj14.duration = tmp12;
              withTimingResult1 = tmp9Result4.withTiming(1, obj14);
              tmp9Result5 = tmp9(tmp10[13]);
              obj15 = { duration: null };
              obj15.duration = result4;
              num4 = -1;
              set2Result = set2(withDelay2(result3, withRepeat2(withSequence(withTimingResult, withTimingResult1, tmp9Result5.withTiming(1, obj15)), -1)));
            } else if (tmp9(tmp10[12]).TypingIndicatorAnimation.RING === tmp8) {
              set = tmp3.set;
              tmp9Result6 = tmp9(tmp10[10]);
              withDelay = tmp9Result6.withDelay;
              tmp9Result7 = tmp9(tmp10[10]);
              withRepeat = tmp9Result7.withRepeat;
              tmp9Result8 = tmp9(tmp10[13]);
              tmp19 = globalThis;
              _Math = Math;
              num = 2;
              obj = { duration: 1600, easing: null };
              withTiming = tmp9Result8.withTiming;
              result5 = 2 * Math.PI;
              obj.easing = tmp9(tmp10[10]).Easing.linear;
              num2 = -1;
              result6 = set(withDelay(result3, withRepeat(withTiming(result5, obj), -1)));
            } else if (tmp9(tmp10[12]).TypingIndicatorAnimation.WAVE === tmp8) {
              set3 = tmp5.set;
              tmp9Result9 = tmp9(tmp10[10]);
              withDelay3 = tmp9Result9.withDelay;
              tmp9Result10 = tmp9(tmp10[10]);
              withRepeat3 = tmp9Result10.withRepeat;
              tmp9Result11 = tmp9(tmp10[10]);
              withSequence2 = tmp9Result11.withSequence;
              tmp9Result12 = tmp9(tmp10[13]);
              tmp32 = size;
              num5 = -0.12;
              obj16 = { duration: null };
              obj16.duration = tmp12;
              withTimingResult2 = tmp9Result12.withTiming(-0.12 * size, obj16);
              tmp9Result13 = tmp9(tmp10[13]);
              obj17 = { duration: null };
              obj17.duration = tmp12;
              withTimingResult3 = tmp9Result13.withTiming(0, obj17);
              tmp9Result14 = tmp9(tmp10[13]);
              obj18 = { duration: null };
              obj18.duration = result4;
              num6 = -1;
              set3Result = set3(withDelay3(result3, withRepeat3(withSequence2(withTimingResult2, withTimingResult3, tmp9Result14.withTiming(0, obj18)), -1)));
            }
            return () => { /* body not rendered: F141516 */ };
          }
        }
      }
      return;
    }
  }
  const items1 = [animation, index, emojiCount, enabled, stateFromStores, sharedValue1, sharedValue, sharedValue2, num];
  cResult[4] = sharedValue1;
  cResult[5] = animation;
  cResult[6] = emojiCount;
  cResult[7] = index;
  cResult[8] = stateFromStores;
  cResult[9] = enabled;
  cResult[10] = sharedValue;
  cResult[11] = num;
  cResult[12] = sharedValue2;
  cResult[13] = L;
  cResult[14] = items1;
}) : ((emojiCount) => {
  let animated;
  let duration;
  let emoji;
  let emojiURL;
  let index;
  let obj3;
  let tmp18;
  ({ emoji, index } = emojiCount);
  emojiCount = emojiCount.emojiCount;
  let num = emojiCount.size;
  if (num === undefined) {
    num = 16;
  }
  const animation = emojiCount.animation;
  let enabled;
  let closure_6;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let c10;
  let stateFromStores;
  let obj = enabled;
  const tmp = c10(num);
  enabled = enabled.useContext(index(num[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  const tmp4 = animation(obj.useState(null), 2);
  closure_6 = tmp4[1];
  let items = [name];
  const first = tmp4[0];
  const callback = obj.useCallback(() => {
    closure_6(name);
  }, items);
  const AnimateEmoji = tmp2(tmp3[9]).AnimateEmoji;
  const tmp7 = AnimateEmoji.useSetting() && !enabled;
  const tmp2Result = index(num[10]);
  sharedValue = tmp2Result.useSharedValue(1);
  const tmp2Result5 = index(num[10]);
  sharedValue1 = tmp2Result5.useSharedValue(0);
  const tmp2Result6 = index(num[10]);
  sharedValue2 = tmp2Result6.useSharedValue(0);
  let result = num * sharedValue2;
  c10 = result;
  const items1 = [name];
  const tmp2Result7 = index(num[11]);
  stateFromStores = tmp2Result7.useStateFromStores(items1, () => name.getState() === closure_6.ACTIVE);
  const items2 = [animation, index, emojiCount, enabled, stateFromStores, sharedValue1, sharedValue, sharedValue2, num];
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue1.set(0);
    const result2 = sharedValue2.set(0);
    if (!enabled) {
      if (animation !== user.TypingIndicatorAnimation.UNSPECIFIED) {
        if (stateFromStores) {
          const result3 = index * duration;
          const result4 = duration * (emojiCount - 1);
          if (user.TypingIndicatorAnimation.PULSE === animation) {
            set2 = sharedValue.set;
            const withDelay2 = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const withRepeat2 = ReanimatedRexport.withRepeat;
            ReanimatedRexport;
            const withSequence = ReanimatedRexport.withSequence;
            ReanimatedRexport;
            let obj2 = { duration };
            const tmp9Result17 = timing;
            let obj3 = { duration };
            const withTimingResult = tmp9Result17.withTiming(1.16, obj2);
            const tmp9Result18 = timing;
            const obj4 = { duration: result4 };
            const withTimingResult1 = tmp9Result18.withTiming(1, obj3);
            const tmp9Result19 = timing;
            set2(withDelay2(result3, withRepeat2(withSequence(withTimingResult, withTimingResult1, tmp9Result19.withTiming(1, obj4)), -1)));
          } else if (user.TypingIndicatorAnimation.RING === animation) {
            set = sharedValue1.set;
            const withDelay = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const withRepeat = ReanimatedRexport.withRepeat;
            ReanimatedRexport;
            const _Math = Math;
            num = 2;
            let obj = { duration: 1600, easing: ReanimatedRexport.Easing.linear };
            const withTiming = timing.withTiming;
            const result5 = 2 * Math.PI;
            timing;
            const result6 = set(withDelay(result3, withRepeat(withTiming(result5, obj), -1)));
          } else if (user.TypingIndicatorAnimation.WAVE === animation) {
            set3 = sharedValue2.set;
            const withDelay3 = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const withRepeat3 = ReanimatedRexport.withRepeat;
            ReanimatedRexport;
            const withSequence2 = ReanimatedRexport.withSequence;
            ReanimatedRexport;
            const obj5 = { duration };
            const tmp9Result26 = timing;
            const obj6 = { duration };
            const withTimingResult2 = tmp9Result26.withTiming(-0.12 * num, obj5);
            const tmp9Result27 = timing;
            const obj7 = { duration: result4 };
            const withTimingResult3 = tmp9Result27.withTiming(0, obj6);
            const tmp9Result28 = timing;
            set3(withDelay3(result3, withRepeat3(withSequence2(withTimingResult2, withTimingResult3, tmp9Result28.withTiming(0, obj7)), -1)));
          }
          return () => {
            const obj = index(num[10]);
            obj.cancelAnimation(sharedValue);
            const obj2 = index(num[10]);
            obj2.cancelAnimation(sharedValue1);
            const obj3 = index(num[10]);
            obj3.cancelAnimation(sharedValue2);
          };
        }
      }
    }
  }, items2);
  const fn = function k() {
    let items;
    let value2;
    const value = sharedValue1.get();
    const obj = { transform: items };
    items = [{ scale: sharedValue.get() }, , ];
    ({ scale: sharedValue.get() });
    items[1] = { translateX: -c10 * Math.sin(value) };
    const obj4 = { translateY: value2 + c10 * (Math.cos(value) - 1) };
    ({ translateX: -c10 * Math.sin(value) });
    value2 = sharedValue2.get();
    items[2] = obj4;
    return obj;
  };
  fn.__closure = { angle: sharedValue1, scale: sharedValue, ringRadius: result, translateY: sharedValue2 };
  fn.__workletHash = 1424307486721;
  fn.__initData = __initData;
  const tmp2Result8 = index(num[10]);
  const animatedStyle = tmp2Result8.useAnimatedStyle(fn);
  let obj2 = { style: animatedStyle, children: sharedValue(tmp18, obj3, name) };
  const View = emojiCount(tmp3[10]).View;
  let str = "\u{1F615}";
  tmp18 = emojiCount(num[15]);
  if (first !== name) {
    let str2 = "";
    if (null == emoji.id) {
      str2 = emoji.name;
    }
    str = str2;
  }
  obj3 = { name: str, src: emojiURL, fastImageStyle: null, textEmojiStyle: null, onError: callback };
  emojiURL = undefined;
  if (first !== name) {
    if (null != emoji.id) {
      let obj4 = { id: null, animated, size: num };
      ({ id: obj9.id, animated } = emoji);
      const getEmojiURL = tmp17(num[14]).getEmojiURL;
      emojiCount(num[14]);
      if (animated == null) {
        animated = false;
      }
      if (animated) {
        animated = tmp7;
      }
      emojiURL = getEmojiURL(obj4);
    }
  }
  ({ imageEmoji: obj8.fastImageStyle, textEmoji: obj8.textEmojiStyle } = tmp);
  return sharedValue(View, obj2);
});
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx");

export default tmp2;