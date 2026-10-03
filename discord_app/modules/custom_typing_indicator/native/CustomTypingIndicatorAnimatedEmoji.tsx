// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
const AppStates = fn(1085).AppStates;
const jsx = fn(21).jsx;
let c8 = 320;
let c9 = 0.0625;
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles((fontSize) => ({ textEmoji: { fontSize }, imageEmoji: { width: fontSize, height: fontSize } }));
let closure_11 = { code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}" };
const __initData = { code: "function CustomTypingIndicatorAnimatedEmojiTsx2(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((emojiCount) => {
  const cResult = index(animation[7]).c(31);
  ({ emoji, index } = emojiCount);
  emojiCount = emojiCount.emojiCount;
  ({ size, animation } = emojiCount);
  let num = 16;
  if (undefined !== size) {
    num = size;
  }
  closure_10(num);
  enabled = enabled.useContext(index(animation[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  let obj = index(animation[7]);
  [r10033, AppStates] = num(enabled.useState(null), 2);
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
  const tmp5 = num(enabled.useState(null), 2);
  const sharedValue = index(animation[10]).useSharedValue(1);
  const tmpResult = index(animation[10]);
  const sharedValue1 = index(animation[10]).useSharedValue(0);
  const tmpResult4 = index(animation[10]);
  const sharedValue2 = index(animation[10]).useSharedValue(0);
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
    let tmp12 = Y;
    const tmp11 = items;
  } else {
    class A {
      constructor() {
        tmp = closure_6(name);
        return;
      }
    }
    tmp12 = cResult[3];
  }
  const tmpResult5 = index(animation[10]);
  const stateFromStores = index(animation[11]).useStateFromStores(tmp11, tmp12);
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
      obj = closure_7;
      result = closure_7.set(1);
      obj2 = closure_8;
      result1 = closure_8.set(0);
      obj3 = closure_9;
      result2 = closure_9.set(0);
      if (!enabled) {
        tmp4 = animation;
        tmp5 = closure_0;
        tmp6 = closure_2;
        if (animation !== closure_0(closure_2[12]).TypingIndicatorAnimation.UNSPECIFIED) {
          tmp18 = closure_11;
          if (closure_11) {
            tmp7 = index;
            tmp8 = c8;
            result3 = index * c8;
            tmp10 = emojiCount;
            result4 = c8 * (emojiCount - 1);
            if (tmp5(tmp6[12]).TypingIndicatorAnimation.PULSE === tmp4) {
              tmp5Result = tmp5(tmp6[10]);
              tmp5Result1 = tmp5(tmp6[10]);
              tmp5Result2 = tmp5(tmp6[10]);
              tmp5Result3 = tmp5(tmp6[13]);
              obj1 = { duration: null };
              obj1.duration = tmp8;
              num3 = 1.16;
              withTimingResult = tmp5Result3.withTiming(1.16, obj1);
              tmp5Result4 = tmp5(tmp6[13]);
              obj26 = { duration: null };
              obj26.duration = tmp8;
              withTimingResult1 = tmp5Result4.withTiming(1, obj26);
              tmp5Result5 = tmp5(tmp6[13]);
              obj27 = { duration: null };
              obj27.duration = result4;
              num4 = -1;
              result5 = obj.set(tmp5Result.withDelay(result3, tmp5Result1.withRepeat(tmp5Result2.withSequence(withTimingResult, withTimingResult1, tmp5Result5.withTiming(1, obj27)), -1)));
            } else if (tmp5(tmp6[12]).TypingIndicatorAnimation.RING === tmp4) {
              tmp5Result6 = tmp5(tmp6[10]);
              tmp5Result7 = tmp5(tmp6[10]);
              tmp5Result8 = tmp5(tmp6[13]);
              tmp12 = globalThis;
              _Math = Math;
              num = 2;
              obj28 = { duration: 1600, easing: null };
              result6 = 2 * Math.PI;
              obj28.easing = tmp5(tmp6[10]).Easing.linear;
              num2 = -1;
              result7 = obj2.set(tmp5Result6.withDelay(result3, tmp5Result7.withRepeat(tmp5Result8.withTiming(result6, obj28), -1)));
            } else if (tmp5(tmp6[12]).TypingIndicatorAnimation.WAVE === tmp4) {
              tmp5Result9 = tmp5(tmp6[10]);
              tmp5Result10 = tmp5(tmp6[10]);
              tmp5Result11 = tmp5(tmp6[10]);
              tmp5Result12 = tmp5(tmp6[13]);
              tmp19 = size;
              num5 = -0.12;
              obj29 = { duration: null };
              obj29.duration = tmp8;
              withTimingResult2 = tmp5Result12.withTiming(-0.12 * size, obj29);
              tmp5Result13 = tmp5(tmp6[13]);
              obj30 = { duration: null };
              obj30.duration = tmp8;
              withTimingResult3 = tmp5Result13.withTiming(0, obj30);
              tmp5Result14 = tmp5(tmp6[13]);
              obj31 = { duration: null };
              obj31.duration = result4;
              num6 = -1;
              result8 = obj3.set(tmp5Result9.withDelay(result3, tmp5Result10.withRepeat(tmp5Result11.withSequence(withTimingResult2, withTimingResult3, tmp5Result14.withTiming(0, obj31)), -1)));
            }
            return () => { ... };
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
  const tmpResult6 = index(animation[11]);
}) : ((emojiCount) => {
  ({ emoji, index } = emojiCount);
  emojiCount = emojiCount.emojiCount;
  let num = emojiCount.size;
  if (num === undefined) {
    num = 16;
  }
  const animation = emojiCount.animation;
  let enabled;
  closure_6 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  c10 = undefined;
  let stateFromStores;
  enabled = enabled.useContext(index(num[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  const tmp4 = animation(enabled.useState(null), 2);
  closure_6 = tmp4[1];
  let items = [name];
  const callback = obj.useCallback(() => {
    closure_6(name);
  }, items);
  const AnimateEmoji = tmp2(tmp3[9]).AnimateEmoji;
  const tmp = c10(num);
  const tmp6 = AnimateEmoji.useSetting() && !enabled;
  sharedValue = index(num[10]).useSharedValue(1);
  const tmp2Result = index(num[10]);
  sharedValue1 = index(num[10]).useSharedValue(0);
  const tmp2Result5 = index(num[10]);
  sharedValue2 = index(num[10]).useSharedValue(0);
  let result = num * sharedValue2;
  c10 = result;
  const tmp2Result6 = index(num[10]);
  const items1 = [name];
  stateFromStores = index(num[11]).useStateFromStores(items1, () => name.getState() === closure_6.ACTIVE);
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
            const tmp5Result = ReanimatedRexport;
            const tmp5Result15 = ReanimatedRexport;
            const tmp5Result16 = ReanimatedRexport;
            const obj4 = { duration };
            const tmp5Result17 = timing;
            const withTimingResult = timing.withTiming(1.16, obj4);
            const obj5 = { duration };
            const tmp5Result18 = timing;
            const withTimingResult1 = timing.withTiming(1, obj5);
            const obj6 = { duration: result4 };
            const result5 = sharedValue.set(tmp5Result.withDelay(result3, tmp5Result15.withRepeat(tmp5Result16.withSequence(withTimingResult, withTimingResult1, timing.withTiming(1, obj6)), -1)));
            const tmp5Result19 = timing;
          } else if (user.TypingIndicatorAnimation.RING === animation) {
            const tmp5Result20 = ReanimatedRexport;
            const tmp5Result21 = ReanimatedRexport;
            const _Math = Math;
            const obj7 = { duration: 1600, easing: null };
            const result6 = 2 * Math.PI;
            obj7.easing = ReanimatedRexport.Easing.linear;
            const result7 = sharedValue1.set(tmp5Result20.withDelay(result3, tmp5Result21.withRepeat(timing.withTiming(result6, obj7), -1)));
            const tmp5Result22 = timing;
          } else if (user.TypingIndicatorAnimation.WAVE === animation) {
            const tmp5Result23 = ReanimatedRexport;
            const tmp5Result24 = ReanimatedRexport;
            const tmp5Result25 = ReanimatedRexport;
            const obj8 = { duration };
            const tmp5Result26 = timing;
            const withTimingResult2 = timing.withTiming(-0.12 * num, obj8);
            const obj9 = { duration };
            const tmp5Result27 = timing;
            const withTimingResult3 = timing.withTiming(0, obj9);
            const obj10 = { duration: result4 };
            const result8 = sharedValue2.set(tmp5Result23.withDelay(result3, tmp5Result24.withRepeat(tmp5Result25.withSequence(withTimingResult2, withTimingResult3, timing.withTiming(0, obj10)), -1)));
            const tmp5Result28 = timing;
          }
          return () => {
            index(num[10]).cancelAnimation(sharedValue);
            const obj = index(num[10]);
            index(num[10]).cancelAnimation(sharedValue1);
            const obj2 = index(num[10]);
            index(num[10]).cancelAnimation(sharedValue2);
          };
        }
      }
    }
  }, items2);
  const tmp2Result7 = index(num[11]);
  const fn = function k() {
    value = sharedValue1.get();
    const obj = { transform: null };
    const items = [{ scale: sharedValue.get() }, , ];
    const obj2 = { scale: sharedValue.get() };
    items[1] = { translateX: -c10 * Math.sin(value) };
    const obj4 = { translateY: null };
    value2 = sharedValue2.get();
    obj4.translateY = value2 + c10 * (Math.cos(value) - 1);
    items[2] = obj4;
    obj.transform = items;
    return obj;
  };
  fn.__closure = { angle: sharedValue1, scale: sharedValue, ringRadius: result, translateY: sharedValue2 };
  fn.__workletHash = 1424307486721;
  fn.__initData = __initData;
  const animatedStyle = index(num[10]).useAnimatedStyle(fn);
  let obj2 = { style: animatedStyle, children: null };
  let str = "\u{1F615}";
  const tmp16 = emojiCount;
  const tmp2Result8 = index(num[10]);
  if (tmp4[0] !== name) {
    let str2 = "";
    if (null == emoji.id) {
      str2 = emoji.name;
    }
    str = str2;
  }
  const obj3 = { name: str, src: null, fastImageStyle: null, textEmojiStyle: null, onError: null };
  let emojiURL;
  if (tmp4[0] !== name) {
    if (null != emoji.id) {
      let obj4 = { id: null, animated: null, size: null };
      ({ id: obj10.id, animated } = emoji);
      if (animated == null) {
        animated = false;
      }
      if (animated) {
        animated = tmp6;
      }
      obj4.animated = animated;
      obj4.size = num;
      emojiURL = tmp16(tmp3[14]).getEmojiURL(obj4);
      const tmp16Result = tmp16(tmp3[14]);
    }
  }
  obj3.src = emojiURL;
  ({ imageEmoji: obj8.fastImageStyle, textEmoji: obj8.textEmojiStyle } = tmp);
  obj3.onError = callback;
  obj2.children = sharedValue(emojiCount(num[15]), obj3, name);
  return sharedValue(emojiCount(num[10]).View, obj2);
});