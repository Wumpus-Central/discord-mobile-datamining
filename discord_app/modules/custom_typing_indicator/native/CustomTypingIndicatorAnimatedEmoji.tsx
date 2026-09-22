// === Module 12239: CustomTypingIndicatorAnimatedEmoji ===

// Module 12239 (CustomTypingIndicatorAnimatedEmoji)
import user from "user" /* 1380 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import timing from "timing" /* 4758 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1979 */;

require = fn;
const AppStates = fn(1074).AppStates;
const jsx = fn(21).jsx;
let c8 = 320;
const createStyles = fn(4757);
let closure_9 = createStyles.createStyles((fontSize) => ({ textEmoji: { fontSize }, imageEmoji: { width: fontSize, height: fontSize } }));
let __initData = { code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx");

export default function CustomTypingIndicatorAnimatedEmoji(emojiCount) {
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
  __initData = undefined;
  let stateFromStores;
  enabled = enabled.useContext(index(num[6]).AccessibilityPreferencesContext).reducedMotion.enabled;
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
  const AnimateEmoji = tmp2(tmp3[7]).AnimateEmoji;
  const tmp = sharedValue2(num);
  const tmp6 = AnimateEmoji.useSetting() && !enabled;
  sharedValue = index(num[8]).useSharedValue(1);
  const tmp2Result = index(num[8]);
  sharedValue1 = index(num[8]).useSharedValue(0);
  const tmp2Result5 = index(num[8]);
  sharedValue2 = index(num[8]).useSharedValue(0);
  let result = 0.0625 * num;
  __initData = result;
  const tmp2Result6 = index(num[8]);
  const items1 = [name];
  stateFromStores = index(num[9]).useStateFromStores(items1, () => name.getState() === closure_6.ACTIVE);
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
            index(num[8]).cancelAnimation(sharedValue);
            const obj = index(num[8]);
            index(num[8]).cancelAnimation(sharedValue1);
            const obj2 = index(num[8]);
            index(num[8]).cancelAnimation(sharedValue2);
          };
        }
      }
    }
  }, items2);
  const tmp2Result7 = index(num[9]);
  class Y {
    constructor() {
      value = closure_8.get();
      obj = { transform: null };
      obj1 = { scale: closure_7.get() };
      items = [, , ];
      items[0] = obj1;
      obj5 = { translateX: -closure_10 * Math.sin(value) };
      items[1] = obj5;
      obj6 = { translateY: null };
      value1 = closure_9.get();
      obj6.translateY = value1 + closure_10 * (Math.cos(value) - 1);
      items[2] = obj6;
      obj.transform = items;
      return obj;
    }
  }
  Y.__closure = { angle: sharedValue1, scale: sharedValue, ringRadius: result, translateY: sharedValue2 };
  Y.__workletHash = 2311631571202;
  Y.__initData = __initData;
  const animatedStyle = index(num[8]).useAnimatedStyle(Y);
  let obj2 = { style: animatedStyle, children: null };
  let str = "\u{1F615}";
  const tmp16 = emojiCount;
  const tmp2Result8 = index(num[8]);
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
      emojiURL = tmp16(tmp3[13]).getEmojiURL(obj4);
      const tmp16Result = tmp16(tmp3[13]);
    }
  }
  obj3.src = emojiURL;
  ({ imageEmoji: obj8.fastImageStyle, textEmoji: obj8.textEmojiStyle } = tmp);
  obj3.onError = callback;
  obj2.children = sharedValue(emojiCount(num[12]), obj3, name);
  return sharedValue(emojiCount(num[8]).View, obj2);
};