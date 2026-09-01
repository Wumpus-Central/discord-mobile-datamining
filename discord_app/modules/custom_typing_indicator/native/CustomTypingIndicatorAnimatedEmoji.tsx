// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../../stores/native/AppStateStore.tsx";
import { AppStates } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c8 = 320;
let closure_9 = createCacheKey.createStyles((fontSize) => {
  const textEmoji = { fontSize };
  const imageEmoji = { width: fontSize, height: fontSize };
  return { textEmoji, imageEmoji };
});
let closure_10 = {
  code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}",
};
let result = require("set").fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx",
);

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
  let stateFromStores;
  let obj = enabled;
  enabled = enabled.useContext(index(num[6]).AccessibilityPreferencesContext).reducedMotion.enabled;
  name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  const tmp4 = animation(obj.useState(null), 2);
  closure_6 = tmp4[1];
  let items = [name];
  const callback = obj.useCallback(() => {
    lib(name);
  }, items);
  const AnimateEmoji = tmp2(tmp3[7]).AnimateEmoji;
  const tmp = sharedValue2(num);
  let tmp2Result = tmp2(tmp3[8]);
  sharedValue = tmp2Result.useSharedValue(1);
  tmp2Result = tmp2(tmp3[8]);
  sharedValue1 = tmp2Result.useSharedValue(0);
  const tmp6 = AnimateEmoji.useSetting() && !enabled;
  sharedValue2 = index(num[8]).useSharedValue(0);
  let result = 0.0625 * num;
  c10 = result;
  const tmp2Result1 = index(num[8]);
  const items1 = [name];
  stateFromStores = index(num[9]).useStateFromStores(items1, () => name.getState() === lib.ACTIVE);
  const items2 = [animation, index, emojiCount, enabled, stateFromStores, sharedValue1, sharedValue, sharedValue2, num];
  const effect = obj.useEffect(() => {
    let obj = sharedValue;
    const result = sharedValue.set(1);
    obj1 = sharedValue1;
    const result1 = sharedValue1.set(0);
    let obj2 = sharedValue2;
    const result2 = sharedValue2.set(0);
    if (!enabled) {
      if (animation !== index(num[10]).TypingIndicatorAnimation.UNSPECIFIED) {
        if (stateFromStores) {
          const result3 = index * sharedValue1;
          const result4 = sharedValue1 * (emojiCount - 1);
          if (tmp5(tmp6[10]).TypingIndicatorAnimation.PULSE === tmp4) {
            let tmp5Result = tmp5(tmp6[8]);
            tmp5Result = tmp5(tmp6[8]);
            const tmp5Result1 = tmp5(tmp6[8]);
            obj = { duration: null };
            obj[0] = tmp8;
            const tmp5Result2 = tmp5(tmp6[11]);
            const withTimingResult = tmp5(tmp6[11]).withTiming(1.16, obj);
            obj = { duration: null };
            obj[0] = tmp8;
            const tmp5Result3 = tmp5(tmp6[11]);
            const withTimingResult1 = tmp5(tmp6[11]).withTiming(1, obj);
            obj1 = { duration: null };
            obj1[0] = result4;
            const result5 = obj.set(
              tmp5Result.withDelay(
                result3,
                tmp5Result.withRepeat(
                  tmp5Result1.withSequence(withTimingResult, withTimingResult1, tmp5(tmp6[11]).withTiming(1, obj1)),
                  -1,
                ),
              ),
            );
            const tmp5Result4 = tmp5(tmp6[11]);
          } else if (tmp5(tmp6[10]).TypingIndicatorAnimation.RING === tmp4) {
            const tmp5Result5 = tmp5(tmp6[8]);
            const tmp5Result6 = tmp5(tmp6[8]);
            const _Math = Math;
            obj2 = { duration: 1600, easing: null };
            const result6 = 2 * Math.PI;
            obj2[1] = tmp5(tmp6[8]).Easing.linear;
            const result7 = obj1.set(
              tmp5Result5.withDelay(result3, tmp5Result6.withRepeat(tmp5(tmp6[11]).withTiming(result6, obj2), -1)),
            );
            const tmp5Result7 = tmp5(tmp6[11]);
          } else if (tmp5(tmp6[10]).TypingIndicatorAnimation.WAVE === tmp4) {
            const tmp5Result8 = tmp5(tmp6[8]);
            const tmp5Result9 = tmp5(tmp6[8]);
            const tmp5Result10 = tmp5(tmp6[8]);
            const obj3 = { duration: null };
            obj3[0] = tmp8;
            const tmp5Result11 = tmp5(tmp6[11]);
            const withTimingResult2 = tmp5(tmp6[11]).withTiming(-0.12 * num, obj3);
            const obj4 = { duration: null };
            obj4[0] = tmp8;
            const tmp5Result12 = tmp5(tmp6[11]);
            const withTimingResult3 = tmp5(tmp6[11]).withTiming(0, obj4);
            const obj5 = { duration: null };
            obj5[0] = result4;
            const result8 = obj2.set(
              tmp5Result8.withDelay(
                result3,
                tmp5Result9.withRepeat(
                  tmp5Result10.withSequence(withTimingResult2, withTimingResult3, tmp5(tmp6[11]).withTiming(0, obj5)),
                  -1,
                ),
              ),
            );
            const tmp5Result13 = tmp5(tmp6[11]);
          }
          return () => {
            closure_1_0(closure_1_2[8]).cancelAnimation(closure_7);
            const obj = closure_1_0(closure_1_2[8]);
            closure_1_0(closure_1_2[8]).cancelAnimation(closure_8);
            const obj2 = closure_1_0(closure_1_2[8]);
            closure_1_0(closure_1_2[8]).cancelAnimation(closure_9);
          };
        }
      }
    }
  }, items2);
  const tmp2Result2 = index(num[9]);
  class Y {
    constructor() {
      value = closure_8.get();
      obj = { transform: null };
      obj = { scale: closure_7.get() };
      items = [, ,];
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
  Y.__closure = { angle: sharedValue1, scale: sharedValue, ringRadius: result, translateY: sharedValue2 };
  Y.__workletHash = 2311631571202;
  Y.__initData = c10;
  const animatedStyle = index(num[8]).useAnimatedStyle(Y);
  obj = { style: animatedStyle, children: null };
  let str = "\u{1F615}";
  const tmp16 = emojiCount;
  const tmp2Result3 = index(num[8]);
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
      ({ id: obj10[0], animated } = emoji);
      if (animated == null) {
        animated = false;
      }
      if (animated) {
        animated = tmp6;
      }
      obj1[1] = animated;
      obj1[2] = num;
      emojiURL = tmp16(tmp3[13]).getEmojiURL(obj1);
      const tmp16Result = tmp16(tmp3[13]);
    }
  }
  obj[1] = emojiURL;
  ({ imageEmoji: obj8[2], textEmoji: obj8[3] } = tmp);
  obj[4] = callback;
  obj[1] = sharedValue(emojiCount(num[12]), obj, name);
  return sharedValue(emojiCount(num[8]).View, obj);
}
