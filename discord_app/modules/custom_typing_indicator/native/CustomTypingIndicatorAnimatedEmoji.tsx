// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
const AppStates = fn(1074).AppStates;
const jsx = fn(21).jsx;
let c8 = 320;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles((fontSize) => ({
  textEmoji: { fontSize },
  imageEmoji: { width: fontSize, height: fontSize },
}));
let __initData = {
  code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
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
  closure_6 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  __initData = undefined;
  let stateFromStores;
  let obj = enabled;
  enabled = enabled.useContext(index(num[6]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  const tmp4 = animation(obj.useState(null), 2);
  closure_6 = tmp4[1];
  let items = [name];
  const callback = obj.useCallback(() => {
    closure_6(name);
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
  __initData = result;
  const tmp2Result1 = index(num[8]);
  const items1 = [name];
  stateFromStores = index(num[9]).useStateFromStores(items1, () => name.getState() === closure_6.ACTIVE);
  const items2 = [animation, index, emojiCount, enabled, stateFromStores, sharedValue1, sharedValue, sharedValue2, num];
  const effect = obj.useEffect(() => {
    let obj = sharedValue;
    const result = sharedValue.set(1);
    let obj1 = sharedValue1;
    const result1 = sharedValue1.set(0);
    let obj2 = sharedValue2;
    const result2 = sharedValue2.set(0);
    if (!enabled) {
      if (animation !== user.TypingIndicatorAnimation.UNSPECIFIED) {
        if (stateFromStores) {
          const result3 = index * duration;
          const result4 = duration * (emojiCount - 1);
          if (user.TypingIndicatorAnimation.PULSE === animation) {
            const tmp5Result = ReanimatedRexport;
            const tmp5Result1 = ReanimatedRexport;
            obj = { duration };
            const tmp5Result2 = timing;
            const withTimingResult = timing.withTiming(1.16, obj);
            obj = { duration };
            const tmp5Result3 = timing;
            const withTimingResult1 = timing.withTiming(1, obj);
            obj1 = { duration: result4 };
            const result5 = obj.set(
              tmp5Result.withDelay(
                result3,
                tmp5Result.withRepeat(
                  tmp5Result1.withSequence(withTimingResult, withTimingResult1, timing.withTiming(1, obj1)),
                  -1,
                ),
              ),
            );
            const tmp5Result4 = timing;
          } else if (user.TypingIndicatorAnimation.RING === animation) {
            const tmp5Result5 = ReanimatedRexport;
            const tmp5Result6 = ReanimatedRexport;
            const _Math = Math;
            obj2 = { duration: 1600, easing: null };
            const result6 = 2 * Math.PI;
            obj2.easing = ReanimatedRexport.Easing.linear;
            const result7 = obj1.set(
              tmp5Result5.withDelay(result3, tmp5Result6.withRepeat(timing.withTiming(result6, obj2), -1)),
            );
            const tmp5Result7 = timing;
          } else if (user.TypingIndicatorAnimation.WAVE === animation) {
            const tmp5Result8 = ReanimatedRexport;
            const tmp5Result9 = ReanimatedRexport;
            const tmp5Result10 = ReanimatedRexport;
            const obj3 = { duration };
            const tmp5Result11 = timing;
            const withTimingResult2 = timing.withTiming(-0.12 * num, obj3);
            const obj4 = { duration };
            const tmp5Result12 = timing;
            const withTimingResult3 = timing.withTiming(0, obj4);
            const obj5 = { duration: result4 };
            const result8 = obj2.set(
              tmp5Result8.withDelay(
                result3,
                tmp5Result9.withRepeat(
                  tmp5Result10.withSequence(withTimingResult2, withTimingResult3, timing.withTiming(0, obj5)),
                  -1,
                ),
              ),
            );
            const tmp5Result13 = timing;
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
      obj2.translateY = value1 + closure_10 * (Math.cos(value) - 1);
      items[2] = obj2;
      obj.transform = items;
      return obj;
    }
  }
  Y.__closure = { angle: sharedValue1, scale: sharedValue, ringRadius: result, translateY: sharedValue2 };
  Y.__workletHash = 2311631571202;
  Y.__initData = __initData;
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
      let obj1 = { id: null, animated: null, size: null };
      ({ id: obj10.id, animated } = emoji);
      if (animated == null) {
        animated = false;
      }
      if (animated) {
        animated = tmp6;
      }
      obj1.animated = animated;
      obj1.size = num;
      emojiURL = tmp16(tmp3[13]).getEmojiURL(obj1);
      const tmp16Result = tmp16(tmp3[13]);
    }
  }
  obj.src = emojiURL;
  ({ imageEmoji: obj8.fastImageStyle, textEmoji: obj8.textEmojiStyle } = tmp);
  obj.onError = callback;
  obj.children = sharedValue(emojiCount(num[12]), obj, name);
  return sharedValue(emojiCount(num[8]).View, obj);
}
