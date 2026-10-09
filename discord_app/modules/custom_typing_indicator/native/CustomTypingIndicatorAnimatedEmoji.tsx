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
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles((fontSize) => ({
  textEmoji: { fontSize },
  imageEmoji: { width: fontSize, height: fontSize },
}));
let closure_11 = {
  code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}",
};
const __initData = {
  code: "function CustomTypingIndicatorAnimatedEmojiTsx2(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomTypingIndicatorAnimatedEmoji(emojiCount) {
      const cResult = index(animation[7]).c(31);
      ({ emoji, emojisKey, index } = emojiCount);
      emojiCount = emojiCount.emojiCount;
      ({ size, animation } = emojiCount);
      let num = 16;
      if (undefined !== size) {
        num = size;
      }
      const tmp4 = closure_10(num);
      enabled = enabled.useContext(tmp(tmp2[8]).AccessibilityPreferencesContext).reducedMotion.enabled;
      let name = emoji.id;
      if (name == null) {
        name = emoji.name;
      }
      let obj = index(animation[7]);
      [tmp6, AppStates] = num(enabled.useState(null), 2);
      if (cResult[0] !== name) {
        const fn = function y() {
          AppStates(name);
        };
        cResult[0] = name;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const tmp9 = emojiCount(animation[9])();
      const tmp5 = num(enabled.useState(null), 2);
      const sharedValue = index(animation[10]).useSharedValue(1);
      const tmpResult = index(animation[10]);
      const sharedValue1 = index(animation[10]).useSharedValue(0);
      const tmpResult4 = index(animation[10]);
      const sharedValue2 = index(animation[10]).useSharedValue(0);
      let result = num * sharedValue2;
      closure_10 = result;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [name];
        class P {
          constructor() {
            return name.getState() === closure_6.ACTIVE;
          }
        }
        cResult[2] = items;
        cResult[3] = P;
        let tmp15 = P;
        let tmp14 = items;
      } else {
        tmp14 = cResult[2];
        tmp15 = cResult[3];
      }
      const tmpResult5 = index(animation[10]);
      const stateFromStores = index(animation[11]).useStateFromStores(tmp14, tmp15);
      if (cResult[4] === sharedValue1) {
        if (cResult[5] === animation) {
          if (cResult[6] === emojiCount) {
            if (cResult[7] === index) {
              if (cResult[8] === stateFromStores) {
                if (cResult[9] === enabled) {
                  if (cResult[10] === sharedValue) {
                    if (cResult[11] === num) {
                      if (cResult[12] === sharedValue2) {
                        let tmp18 = cResult[13];
                        let tmp19 = cResult[14];
                      }
                      const effect = obj2.useEffect(tmp18, tmp19);
                      class P {
                        constructor() {
                          return name.getState() === closure_6.ACTIVE;
                        }
                      }
                      class H {
                        constructor() {
                          value = closure_8.get();
                          obj = { transform: null };
                          obj1 = { scale: closure_7.get() };
                          items = [, ,];
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
                      const obj3 = {
                        angle: sharedValue1,
                        scale: sharedValue,
                        ringRadius: result,
                        translateY: sharedValue2,
                      };
                      H.__closure = obj3;
                      H.__workletHash = 2311631571202;
                      H.__initData = stateFromStores;
                      const animatedStyle = obj7.useAnimatedStyle(H);
                      let str = "\u{1F615}";
                      if (tmp6 !== name) {
                        let str2 = "";
                        if (null == emoji.id) {
                          str2 = emoji.name;
                        }
                        str = str2;
                      }
                      if (cResult[15] === tmp9) {
                        if (cResult[16] === emoji.animated) {
                          if (cResult[17] === emoji.id) {
                            if (cResult[18] === tmp20) {
                              if (cResult[19] === num) {
                                let tmp24 = cResult[20];
                              }
                              if (cResult[21] === emojisKey) {
                                if (cResult[22] === tmp7) {
                                  if (cResult[23] === tmp4.imageEmoji) {
                                    if (cResult[24] === tmp4.textEmoji) {
                                      if (cResult[25] === str) {
                                        if (cResult[26] === tmp24) {
                                          let tmp28 = cResult[27];
                                        }
                                        if (cResult[28] === animatedStyle) {
                                          if (cResult[29] === tmp28) {
                                            let tmp32 = cResult[30];
                                          }
                                          return tmp32;
                                        }
                                        class P {
                                          constructor() {
                                            return name.getState() === closure_6.ACTIVE;
                                          }
                                        }
                                        class H {
                                          constructor() {
                                            value = closure_8.get();
                                            obj = { transform: null };
                                            obj1 = { scale: closure_7.get() };
                                            items = [, ,];
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
                                        tmp34[1] = tmp28;
                                        const tmp35 = sharedValue(tmp8(tmp2[10]).View, tmp34);
                                        cResult[28] = animatedStyle;
                                        cResult[29] = tmp28;
                                        cResult[30] = tmp35;
                                        tmp32 = tmp35;
                                      }
                                    }
                                  }
                                }
                              }
                              class P {
                                constructor() {
                                  return name.getState() === closure_6.ACTIVE;
                                }
                              }
                              class H {
                                constructor() {
                                  value = closure_8.get();
                                  obj = { transform: null };
                                  obj1 = { scale: closure_7.get() };
                                  items = [, ,];
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
                              tmp30[1] = tmp24;
                              ({ imageEmoji: tmp30[2], textEmoji: tmp30[3] } = tmp4);
                              tmp30[4] = tmp7;
                              const tmp31 = sharedValue(tmp8(tmp2[15]), tmp30, emojisKey);
                              cResult[21] = emojisKey;
                              cResult[22] = tmp7;
                              cResult[23] = tmp4.imageEmoji;
                              cResult[24] = tmp4.textEmoji;
                              cResult[25] = str;
                              cResult[26] = tmp24;
                              cResult[27] = tmp31;
                              tmp28 = tmp31;
                            }
                          }
                        }
                      }
                      let tmp27Result;
                      if (tmp6 !== name) {
                        if (null != emoji.id) {
                          tmp8(tmp2[14]);
                          let obj4 = { id: emoji.id, animated: null, size: null };
                          class P {
                            constructor() {
                              return name.getState() === closure_6.ACTIVE;
                            }
                          }
                          class H {
                            constructor() {
                              value = closure_8.get();
                              obj = { transform: null };
                              obj1 = { scale: closure_7.get() };
                              items = [, ,];
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
                          if (flag == null) {
                            flag = false;
                          }
                          if (flag) {
                            flag = tmp9;
                          }
                          obj4.animated = flag;
                          obj4.size = num;
                          tmp27Result = tmp27(obj4);
                        }
                      }
                      cResult[15] = tmp9;
                      cResult[16] = emoji.animated;
                      cResult[17] = emoji.id;
                      cResult[18] = tmp6 === name;
                      cResult[19] = num;
                      cResult[20] = tmp27Result;
                      tmp24 = tmp27Result;
                    }
                  }
                }
              }
            }
          }
        }
      }
      class N {
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
                  result5 = obj.set(
                    tmp5Result.withDelay(
                      result3,
                      tmp5Result1.withRepeat(
                        tmp5Result2.withSequence(withTimingResult, withTimingResult1, tmp5Result5.withTiming(1, obj27)),
                        -1,
                      ),
                    ),
                  );
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
                  result7 = obj2.set(
                    tmp5Result6.withDelay(result3, tmp5Result7.withRepeat(tmp5Result8.withTiming(result6, obj28), -1)),
                  );
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
                  result8 = obj3.set(
                    tmp5Result9.withDelay(
                      result3,
                      tmp5Result10.withRepeat(
                        tmp5Result11.withSequence(
                          withTimingResult2,
                          withTimingResult3,
                          tmp5Result14.withTiming(0, obj31),
                        ),
                        -1,
                      ),
                    ),
                  );
                }
                return () => {
                  index(animation[10]).cancelAnimation(sharedValue);
                  const obj = index(animation[10]);
                  index(animation[10]).cancelAnimation(sharedValue1);
                  const obj2 = index(animation[10]);
                  index(animation[10]).cancelAnimation(sharedValue2);
                };
              }
            }
          }
          return;
        }
      }
      const items1 = [
        animation,
        index,
        emojiCount,
        enabled,
        stateFromStores,
        sharedValue1,
        sharedValue,
        sharedValue2,
        num,
      ];
      cResult[4] = sharedValue1;
      cResult[5] = animation;
      cResult[6] = emojiCount;
      cResult[7] = index;
      cResult[8] = stateFromStores;
      cResult[9] = enabled;
      cResult[10] = sharedValue;
      cResult[11] = num;
      cResult[12] = sharedValue2;
      cResult[13] = N;
      cResult[14] = items1;
      tmp19 = items1;
      tmp18 = N;
    }
  : function CustomTypingIndicatorAnimatedEmoji(emojiCount) {
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
      const tmp = c10(num);
      const tmp7 = emojiCount;
      const tmp8 = emojiCount(num[9])();
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
      const items2 = [
        animation,
        index,
        emojiCount,
        enabled,
        stateFromStores,
        sharedValue1,
        sharedValue,
        sharedValue2,
        num,
      ];
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
                const result5 = sharedValue.set(
                  tmp5Result.withDelay(
                    result3,
                    tmp5Result15.withRepeat(
                      tmp5Result16.withSequence(withTimingResult, withTimingResult1, timing.withTiming(1, obj6)),
                      -1,
                    ),
                  ),
                );
                const tmp5Result19 = timing;
              } else if (user.TypingIndicatorAnimation.RING === animation) {
                const tmp5Result20 = ReanimatedRexport;
                const tmp5Result21 = ReanimatedRexport;
                const _Math = Math;
                const obj7 = { duration: 1600, easing: null };
                const result6 = 2 * Math.PI;
                obj7.easing = ReanimatedRexport.Easing.linear;
                const result7 = sharedValue1.set(
                  tmp5Result20.withDelay(result3, tmp5Result21.withRepeat(timing.withTiming(result6, obj7), -1)),
                );
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
                const result8 = sharedValue2.set(
                  tmp5Result23.withDelay(
                    result3,
                    tmp5Result24.withRepeat(
                      tmp5Result25.withSequence(withTimingResult2, withTimingResult3, timing.withTiming(0, obj10)),
                      -1,
                    ),
                  ),
                );
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
      class U {
        constructor() {
          value = closure_8.get();
          obj = { transform: null };
          obj1 = { scale: closure_7.get() };
          items = [, ,];
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
      U.__closure = { angle: sharedValue1, scale: sharedValue, ringRadius: result, translateY: sharedValue2 };
      U.__workletHash = 1424307486721;
      U.__initData = __initData;
      const animatedStyle = index(num[10]).useAnimatedStyle(U);
      let obj2 = { style: animatedStyle, children: null };
      let str = "\u{1F615}";
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
            animated = tmp8;
          }
          obj4.animated = animated;
          obj4.size = num;
          emojiURL = tmp7(tmp3[14]).getEmojiURL(obj4);
          const tmp7Result = tmp7(tmp3[14]);
        }
      }
      obj3.src = emojiURL;
      ({ imageEmoji: obj8.fastImageStyle, textEmoji: obj8.textEmojiStyle } = tmp);
      obj3.onError = callback;
      obj2.children = sharedValue(emojiCount(num[15]), obj3, emojiCount.emojisKey);
      return sharedValue(emojiCount(num[10]).View, obj2);
    };
