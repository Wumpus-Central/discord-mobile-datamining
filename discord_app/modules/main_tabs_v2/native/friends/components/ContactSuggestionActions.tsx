// discord_app/modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import AddFriendsScreenUtils from "AddFriendsScreenUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { duration: 200, easing: null };
const Easing = fn(4811).Easing;
obj.easing = Easing.in(fn(4811).Easing.quad);
let obj2 = { duration: 250, easing: null };
const Easing2 = fn(4811).Easing;
obj2.easing = Easing2.in(fn(4811).Easing.quad);
let obj3 = { duration: 250, easing: null };
const Easing3 = fn(4811).Easing;
obj3.easing = Easing3.in(fn(4811).Easing.quad);
let obj4 = { duration: 250, easing: null };
const Easing4 = fn(4811).Easing;
obj4.easing = Easing4.out(fn(4811).Easing.quad);
const SPRING_CONFIG = { mass: 1, stiffness: 172, damping: 17.3 };
const createStyles = fn(5091);
let obj6 = {
  icon: { position: "absolute", top: 4, zIndex: 2, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, opacity: 0 },
};
let closure_12 = createStyles.createStyles(obj6);
const __initData = {
  code: "function ContactSuggestionActionsTsx1(){const{right,opacity,scale}=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};}",
};
const __initData2 = {
  code: "function ContactSuggestionActionsTsx2(){const{buttonOpacity}=this.__closure;return{opacity:buttonOpacity.get()};}",
};
const __initData3 = {
  code: "function ContactSuggestionActionsTsx3(){const{added}=this.__closure;return added.get();}",
};
const __initData4 = {
  code: 'function ContactSuggestionActionsTsx4(added_0){const{animate,runOnJS,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG}=this.__closure;if(!animate){runOnJS(finishAnimationCallback)();return;}if(added_0){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,"respect-motion-settings",function(finished){if(!finished){return;}opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,"respect-motion-settings",function(finished_0){if(finished_0){runOnJS(finishAnimationCallback)();}})));}));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}}',
};
const __initData5 = {
  code: 'function ContactSuggestionActionsTsx5(finished){const{opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,runOnJS,finishAnimationCallback}=this.__closure;if(!finished){return;}opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,"respect-motion-settings",function(finished_0){if(finished_0){runOnJS(finishAnimationCallback)();}})));}',
};
let closure_18 = {
  code: "function ContactSuggestionActionsTsx6(finished_0){const{runOnJS,finishAnimationCallback}=this.__closure;if(finished_0){runOnJS(finishAnimationCallback)();}}",
};
const __initData6 = {
  code: "function ContactSuggestionActionsTsx7(){const{right,opacity,scale}=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};}",
};
const __initData7 = {
  code: "function ContactSuggestionActionsTsx8(){const{buttonOpacity}=this.__closure;return{opacity:buttonOpacity.get()};}",
};
const __initData8 = {
  code: "function ContactSuggestionActionsTsx9(){const{added}=this.__closure;return added.get();}",
};
const __initData9 = {
  code: "function ContactSuggestionActionsTsx10(added_0){const{animate,runOnJS,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG}=this.__closure;if(!animate){runOnJS(finishAnimationCallback)();return;}if(added_0){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,'respect-motion-settings',function(finished){if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished_0){if(finished_0)runOnJS(finishAnimationCallback)();})));}));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}}",
};
const __initData10 = {
  code: "function ContactSuggestionActionsTsx11(finished){const{opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,runOnJS,finishAnimationCallback}=this.__closure;if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished_0){if(finished_0)runOnJS(finishAnimationCallback)();})));}",
};
let closure_24 = {
  code: "function ContactSuggestionActionsTsx12(finished_0){const{runOnJS,finishAnimationCallback}=this.__closure;if(finished_0)runOnJS(finishAnimationCallback)();}",
};
const ReactCompilerGating = fn(558);
let obj7 = {
  position: "absolute",
  top: 4,
  zIndex: 2,
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  opacity: 0,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx");

export const ContactSuggestionActions = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContactSuggestionActions(user) {
      const cResult = user(onAddSuggestion[7]).c(27);
      user = user.user;
      const added = user.added;
      onAddSuggestion = user.onAddSuggestion;
      ({ onFinishAnimation: noop, size, animate } = user);
      const tmp5 = closure_12();
      let obj = user(onAddSuggestion[7]);
      const sharedValue = user(onAddSuggestion[3]).useSharedValue(30);
      const tmpResult = user(onAddSuggestion[3]);
      const sharedValue1 = user(onAddSuggestion[3]).useSharedValue(0.5);
      const tmpResult7 = user(onAddSuggestion[3]);
      const sharedValue2 = user(onAddSuggestion[3]).useSharedValue(0);
      const tmpResult8 = user(onAddSuggestion[3]);
      const sharedValue3 = user(onAddSuggestion[3]).useSharedValue(1);
      function finishAnimationCallback() {
        if (null != noop) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            closure_1_3(user);
          }, 1000);
        }
      }
      const tmpResult9 = user(onAddSuggestion[3]);
      let fn = function s() {
        const obj = { right: sharedValue.get(), opacity: sharedValue2.get(), transform: null };
        const items = [{ scale: sharedValue1.get() }];
        obj.transform = items;
        return obj;
      };
      fn.__closure = { right: sharedValue, opacity: sharedValue2, scale: sharedValue1 };
      fn.__workletHash = 13774422449074;
      fn.__initData = __initData;
      const animatedStyle = user(onAddSuggestion[3]).useAnimatedStyle(fn);
      const tmpResult10 = user(onAddSuggestion[3]);
      class I {
        constructor() {
          obj = { opacity: closure_8.get() };
          return obj;
        }
      }
      I.__closure = { buttonOpacity: sharedValue3 };
      I.__workletHash = 4378005846847;
      I.__initData = __initData2;
      const animatedStyle1 = user(onAddSuggestion[3]).useAnimatedStyle(I);
      if (cResult[0] === added) {
        if (cResult[1] === animate) {
          if (cResult[2] === sharedValue3) {
            if (cResult[3] === onAddSuggestion) {
              if (cResult[4] === sharedValue2) {
                if (cResult[5] === sharedValue) {
                  if (cResult[6] === sharedValue1) {
                    class H {
                      constructor() {
                        return added.get();
                      }
                    }
                    let obj2 = { added };
                    H.__closure = obj2;
                    H.__workletHash = 15816115253403;
                    H.__initData = __initData3;
                    class V {
                      constructor(arg0) {
                        if (animate) {
                          tmp5 = user;
                          if (user) {
                            tmp14 = closure_6;
                            tmp15 = closure_0;
                            tmp16 = closure_2;
                            obj2 = closure_0(closure_2[9]);
                            tmp17 = closure_9;
                            num5 = 1;
                            result = closure_6.set(obj2.withTiming(1, closure_9));
                            tmp19 = closure_7;
                            tmp20 = closure_0;
                            tmp21 = closure_2;
                            obj3 = closure_0(closure_2[9]);
                            tmp22 = closure_7;
                            result1 = closure_7.set(obj3.withTiming(1, closure_7));
                            tmp24 = closure_8;
                            tmp25 = closure_0;
                            tmp26 = closure_2;
                            obj4 = closure_0(closure_2[9]);
                            num6 = 0;
                            result2 = closure_8.set(obj4.withTiming(0, closure_7));
                            tmp28 = closure_5;
                            tmp29 = closure_0;
                            tmp30 = closure_2;
                            obj5 = closure_0(closure_2[10]);
                            tmp31 = closure_11;
                            fn = function n(arg0) {
                              if (arg0) {
                                let obj = user(onAddSuggestion[3]);
                                const result = sharedValue2.set(
                                  obj.withDelay(1000, user(onAddSuggestion[9]).withTiming(0, sharedValue3)),
                                );
                                const obj2 = user(onAddSuggestion[9]);
                                obj3 = user(onAddSuggestion[3]);
                                const result1 = sharedValue1.set(
                                  obj3.withDelay(
                                    1000,
                                    user(onAddSuggestion[9]).withTiming(0.5, finishAnimationCallback),
                                  ),
                                );
                                const obj4 = user(onAddSuggestion[9]);
                                const obj6 = user(onAddSuggestion[9]);
                                const fn = function n(arg0) {
                                  if (arg0) {
                                    user(onAddSuggestion[3]).runOnJS(finishAnimationCallback)();
                                    const obj = user(onAddSuggestion[3]);
                                  }
                                };
                                const obj7 = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                                fn.__closure = obj7;
                                fn.__workletHash = 4969511126665;
                                fn.__initData = __initData2;
                                const result2 = sharedValue.set(
                                  user(onAddSuggestion[3]).withDelay(
                                    1000,
                                    obj6.withTiming(-8, TRANSLATE_OUT_CONFIG, "respect-motion-settings", fn),
                                  ),
                                );
                                const obj5 = user(onAddSuggestion[3]);
                              }
                            };
                            obj1 = {
                              opacity: null,
                              withDelay: null,
                              withTiming: null,
                              OPACITY_OUT_CONFIG: null,
                              scale: null,
                              SCALE_CONFIG: null,
                              right: null,
                              TRANSLATE_OUT_CONFIG: null,
                              runOnJS: null,
                              finishAnimationCallback: null,
                            };
                            obj1.opacity = closure_7;
                            tmp32 = closure_0;
                            tmp33 = closure_2;
                            obj1.withDelay = closure_0(closure_2[3]).withDelay;
                            tmp34 = closure_0;
                            tmp35 = closure_2;
                            obj1.withTiming = closure_0(closure_2[9]).withTiming;
                            tmp36 = closure_8;
                            obj1.OPACITY_OUT_CONFIG = closure_8;
                            obj1.scale = closure_6;
                            obj1.SCALE_CONFIG = closure_9;
                            obj1.right = closure_5;
                            tmp37 = closure_10;
                            obj1.TRANSLATE_OUT_CONFIG = closure_10;
                            tmp38 = closure_0;
                            tmp39 = closure_2;
                            obj1.runOnJS = closure_0(closure_2[3]).runOnJS;
                            tmp40 = finishAnimationCallback;
                            obj1.finishAnimationCallback = finishAnimationCallback;
                            fn.__closure = obj1;
                            num7 = 6173976864339;
                            fn.__workletHash = 6173976864339;
                            tmp41 = closure_17;
                            fn.__initData = closure_17;
                            str = "respect-motion-settings";
                            num8 = 12;
                            tmp42 = obj5;
                            tmp43 = fn;
                            result3 = closure_5.set(obj5.withSpring(12, closure_11, "respect-motion-settings", fn));
                          } else {
                            tmp6 = closure_8;
                            num = 1;
                            result4 = closure_8.set(1);
                            tmp8 = closure_6;
                            num2 = 0.5;
                            result5 = closure_6.set(0.5);
                            tmp10 = closure_7;
                            num3 = 0;
                            result6 = closure_7.set(0);
                            tmp12 = closure_5;
                            num4 = 30;
                            result7 = closure_5.set(30);
                          }
                        } else {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[3]);
                          tmp3 = finishAnimationCallback;
                          tmp4 = obj.runOnJS(finishAnimationCallback)();
                        }
                        return;
                      }
                    }
                    obj3 = {
                      animate,
                      runOnJS: tmp(tmp2[3]).runOnJS,
                      finishAnimationCallback,
                      scale: sharedValue1,
                      withTiming: tmp(tmp2[9]).withTiming,
                      SCALE_CONFIG: finishAnimationCallback,
                      opacity: sharedValue2,
                      OPACITY_CONFIG: sharedValue2,
                      buttonOpacity: sharedValue3,
                      right: sharedValue,
                      withSpring: tmp(tmp2[10]).withSpring,
                      SPRING_CONFIG,
                      withDelay: tmp(tmp2[3]).withDelay,
                      OPACITY_OUT_CONFIG: sharedValue3,
                      TRANSLATE_OUT_CONFIG: obj4,
                    };
                    V.__closure = obj3;
                    V.__workletHash = 13821702626895;
                    V.__initData = __initData4;
                    const animatedReaction = tmp(tmp2[3]).useAnimatedReaction(H, V);
                    if (cResult[9] === animatedStyle) {
                      if (cResult[10] === tmp5.icon) {
                        let tmp21 = cResult[11];
                      }
                      if (cResult[12] !== tmp5.icon.color) {
                        obj4 = { source: null, color: null };
                        class H {
                          constructor() {
                            return added.get();
                          }
                        }
                        obj4.source = added(tmp2[12]);
                        obj4.color = tmp5.icon.color;
                        cResult[12] = tmp5.icon.color;
                        class V {
                          constructor(arg0) {
                            if (animate) {
                              tmp5 = user;
                              if (user) {
                                tmp14 = closure_6;
                                tmp15 = closure_0;
                                tmp16 = closure_2;
                                obj2 = closure_0(closure_2[9]);
                                tmp17 = closure_9;
                                num5 = 1;
                                result = closure_6.set(obj2.withTiming(1, closure_9));
                                tmp19 = closure_7;
                                tmp20 = closure_0;
                                tmp21 = closure_2;
                                obj3 = closure_0(closure_2[9]);
                                tmp22 = closure_7;
                                result1 = closure_7.set(obj3.withTiming(1, closure_7));
                                tmp24 = closure_8;
                                tmp25 = closure_0;
                                tmp26 = closure_2;
                                obj4 = closure_0(closure_2[9]);
                                num6 = 0;
                                result2 = closure_8.set(obj4.withTiming(0, closure_7));
                                tmp28 = closure_5;
                                tmp29 = closure_0;
                                tmp30 = closure_2;
                                obj5 = closure_0(closure_2[10]);
                                tmp31 = closure_11;
                                fn = function n(arg0) {
                                  if (arg0) {
                                    let obj = user(onAddSuggestion[3]);
                                    const result = sharedValue2.set(
                                      obj.withDelay(1000, user(onAddSuggestion[9]).withTiming(0, sharedValue3)),
                                    );
                                    const obj2 = user(onAddSuggestion[9]);
                                    obj3 = user(onAddSuggestion[3]);
                                    const result1 = sharedValue1.set(
                                      obj3.withDelay(
                                        1000,
                                        user(onAddSuggestion[9]).withTiming(0.5, finishAnimationCallback),
                                      ),
                                    );
                                    const obj4 = user(onAddSuggestion[9]);
                                    const obj6 = user(onAddSuggestion[9]);
                                    const fn = function n(arg0) {
                                      if (arg0) {
                                        user(onAddSuggestion[3]).runOnJS(finishAnimationCallback)();
                                        const obj = user(onAddSuggestion[3]);
                                      }
                                    };
                                    const obj7 = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                                    fn.__closure = obj7;
                                    fn.__workletHash = 4969511126665;
                                    fn.__initData = __initData2;
                                    const result2 = sharedValue.set(
                                      user(onAddSuggestion[3]).withDelay(
                                        1000,
                                        obj6.withTiming(-8, TRANSLATE_OUT_CONFIG, "respect-motion-settings", fn),
                                      ),
                                    );
                                    const obj5 = user(onAddSuggestion[3]);
                                  }
                                };
                                obj1 = {
                                  opacity: null,
                                  withDelay: null,
                                  withTiming: null,
                                  OPACITY_OUT_CONFIG: null,
                                  scale: null,
                                  SCALE_CONFIG: null,
                                  right: null,
                                  TRANSLATE_OUT_CONFIG: null,
                                  runOnJS: null,
                                  finishAnimationCallback: null,
                                };
                                obj1.opacity = closure_7;
                                tmp32 = closure_0;
                                tmp33 = closure_2;
                                obj1.withDelay = closure_0(closure_2[3]).withDelay;
                                tmp34 = closure_0;
                                tmp35 = closure_2;
                                obj1.withTiming = closure_0(closure_2[9]).withTiming;
                                tmp36 = closure_8;
                                obj1.OPACITY_OUT_CONFIG = closure_8;
                                obj1.scale = closure_6;
                                obj1.SCALE_CONFIG = closure_9;
                                obj1.right = closure_5;
                                tmp37 = closure_10;
                                obj1.TRANSLATE_OUT_CONFIG = closure_10;
                                tmp38 = closure_0;
                                tmp39 = closure_2;
                                obj1.runOnJS = closure_0(closure_2[3]).runOnJS;
                                tmp40 = finishAnimationCallback;
                                obj1.finishAnimationCallback = finishAnimationCallback;
                                fn.__closure = obj1;
                                num7 = 6173976864339;
                                fn.__workletHash = 6173976864339;
                                tmp41 = closure_17;
                                fn.__initData = closure_17;
                                str = "respect-motion-settings";
                                num8 = 12;
                                tmp42 = obj5;
                                tmp43 = fn;
                                result3 = closure_5.set(obj5.withSpring(12, closure_11, "respect-motion-settings", fn));
                              } else {
                                tmp6 = closure_8;
                                num = 1;
                                result4 = closure_8.set(1);
                                tmp8 = closure_6;
                                num2 = 0.5;
                                result5 = closure_6.set(0.5);
                                tmp10 = closure_7;
                                num3 = 0;
                                result6 = closure_7.set(0);
                                tmp12 = closure_5;
                                num4 = 30;
                                result7 = closure_5.set(30);
                              }
                            } else {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj = closure_0(closure_2[3]);
                              tmp3 = finishAnimationCallback;
                              tmp4 = obj.runOnJS(finishAnimationCallback)();
                            }
                            return;
                          }
                        }
                        let tmp22 = sharedValue(tmp(tmp2[11]).Icon, obj4);
                        const tmp24 = sharedValue(tmp(tmp2[11]).Icon, obj4);
                      } else {
                        tmp22 = cResult[13];
                      }
                      class H {
                        constructor() {
                          return added.get();
                        }
                      }
                      let obj5 = { pointerEvents: "none", style: tmp21, children: tmp22 };
                      const tmp28 = sharedValue(added(tmp2[3]).View, obj5);
                      class V {
                        constructor(arg0) {
                          if (animate) {
                            tmp5 = user;
                            if (user) {
                              tmp14 = closure_6;
                              tmp15 = closure_0;
                              tmp16 = closure_2;
                              obj2 = closure_0(closure_2[9]);
                              tmp17 = closure_9;
                              num5 = 1;
                              result = closure_6.set(obj2.withTiming(1, closure_9));
                              tmp19 = closure_7;
                              tmp20 = closure_0;
                              tmp21 = closure_2;
                              obj3 = closure_0(closure_2[9]);
                              tmp22 = closure_7;
                              result1 = closure_7.set(obj3.withTiming(1, closure_7));
                              tmp24 = closure_8;
                              tmp25 = closure_0;
                              tmp26 = closure_2;
                              obj4 = closure_0(closure_2[9]);
                              num6 = 0;
                              result2 = closure_8.set(obj4.withTiming(0, closure_7));
                              tmp28 = closure_5;
                              tmp29 = closure_0;
                              tmp30 = closure_2;
                              obj5 = closure_0(closure_2[10]);
                              tmp31 = closure_11;
                              fn = function n(arg0) {
                                if (arg0) {
                                  let obj = user(onAddSuggestion[3]);
                                  const result = sharedValue2.set(
                                    obj.withDelay(1000, user(onAddSuggestion[9]).withTiming(0, sharedValue3)),
                                  );
                                  const obj2 = user(onAddSuggestion[9]);
                                  obj3 = user(onAddSuggestion[3]);
                                  const result1 = sharedValue1.set(
                                    obj3.withDelay(
                                      1000,
                                      user(onAddSuggestion[9]).withTiming(0.5, finishAnimationCallback),
                                    ),
                                  );
                                  const obj4 = user(onAddSuggestion[9]);
                                  const obj6 = user(onAddSuggestion[9]);
                                  const fn = function n(arg0) {
                                    if (arg0) {
                                      user(onAddSuggestion[3]).runOnJS(finishAnimationCallback)();
                                      const obj = user(onAddSuggestion[3]);
                                    }
                                  };
                                  const obj7 = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                                  fn.__closure = obj7;
                                  fn.__workletHash = 4969511126665;
                                  fn.__initData = __initData2;
                                  const result2 = sharedValue.set(
                                    user(onAddSuggestion[3]).withDelay(
                                      1000,
                                      obj6.withTiming(-8, TRANSLATE_OUT_CONFIG, "respect-motion-settings", fn),
                                    ),
                                  );
                                  const obj5 = user(onAddSuggestion[3]);
                                }
                              };
                              obj1 = {
                                opacity: null,
                                withDelay: null,
                                withTiming: null,
                                OPACITY_OUT_CONFIG: null,
                                scale: null,
                                SCALE_CONFIG: null,
                                right: null,
                                TRANSLATE_OUT_CONFIG: null,
                                runOnJS: null,
                                finishAnimationCallback: null,
                              };
                              obj1.opacity = closure_7;
                              tmp32 = closure_0;
                              tmp33 = closure_2;
                              obj1.withDelay = closure_0(closure_2[3]).withDelay;
                              tmp34 = closure_0;
                              tmp35 = closure_2;
                              obj1.withTiming = closure_0(closure_2[9]).withTiming;
                              tmp36 = closure_8;
                              obj1.OPACITY_OUT_CONFIG = closure_8;
                              obj1.scale = closure_6;
                              obj1.SCALE_CONFIG = closure_9;
                              obj1.right = closure_5;
                              tmp37 = closure_10;
                              obj1.TRANSLATE_OUT_CONFIG = closure_10;
                              tmp38 = closure_0;
                              tmp39 = closure_2;
                              obj1.runOnJS = closure_0(closure_2[3]).runOnJS;
                              tmp40 = finishAnimationCallback;
                              obj1.finishAnimationCallback = finishAnimationCallback;
                              fn.__closure = obj1;
                              num7 = 6173976864339;
                              fn.__workletHash = 6173976864339;
                              tmp41 = closure_17;
                              fn.__initData = closure_17;
                              str = "respect-motion-settings";
                              num8 = 12;
                              tmp42 = obj5;
                              tmp43 = fn;
                              result3 = closure_5.set(obj5.withSpring(12, closure_11, "respect-motion-settings", fn));
                            } else {
                              tmp6 = closure_8;
                              num = 1;
                              result4 = closure_8.set(1);
                              tmp8 = closure_6;
                              num2 = 0.5;
                              result5 = closure_6.set(0.5);
                              tmp10 = closure_7;
                              num3 = 0;
                              result6 = closure_7.set(0);
                              tmp12 = closure_5;
                              num4 = 30;
                              result7 = closure_5.set(30);
                            }
                          } else {
                            tmp = closure_0;
                            tmp2 = closure_2;
                            obj = closure_0(closure_2[3]);
                            tmp3 = finishAnimationCallback;
                            tmp4 = obj.runOnJS(finishAnimationCallback)();
                          }
                          return;
                        }
                      }
                      cResult[15] = tmp22;
                      cResult[16] = tmp28;
                    }
                    let items = [tmp5.icon, animatedStyle];
                    cResult[9] = animatedStyle;
                    cResult[10] = tmp5.icon;
                    cResult[11] = items;
                    tmp21 = items;
                    const tmpResult12 = tmp(tmp2[3]);
                  }
                }
              }
            }
          }
        }
      }
      const fn2 = function p() {
        AddFriendsScreenUtils.addContactSuggestion(user);
        onAddSuggestion(user);
        const result = added.set(true);
        if (!animate) {
          const result1 = sharedValue.set(12);
          const result2 = sharedValue2.set(1);
          const result3 = sharedValue1.set(1);
          const result4 = sharedValue3.set(0);
        }
      };
      cResult[0] = added;
      cResult[1] = animate;
      cResult[2] = sharedValue3;
      cResult[3] = onAddSuggestion;
      cResult[4] = sharedValue2;
      cResult[5] = sharedValue;
      cResult[6] = sharedValue1;
      cResult[7] = user;
      cResult[8] = fn2;
      const tmpResult11 = user(onAddSuggestion[3]);
    }
  : function ContactSuggestionActions(user) {
      user = user.user;
      const added = user.added;
      const onAddSuggestion = user.onAddSuggestion;
      const onFinishAnimation = user.onFinishAnimation;
      let str = user.size;
      if (str === undefined) {
        str = "sm";
      }
      const animate = user.animate;
      const tmp = closure_12();
      const sharedValue = user(onAddSuggestion[3]).useSharedValue(30);
      let obj = user(onAddSuggestion[3]);
      const sharedValue1 = user(onAddSuggestion[3]).useSharedValue(0.5);
      let obj2 = user(onAddSuggestion[3]);
      const sharedValue2 = user(onAddSuggestion[3]).useSharedValue(0);
      let obj4 = user(onAddSuggestion[3]);
      const sharedValue3 = obj4.useSharedValue(1);
      let items = [onFinishAnimation, user];
      const SCALE_CONFIG = onFinishAnimation.useCallback(() => {
        if (null != onFinishAnimation) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            onFinishAnimation(user);
          }, 1000);
        }
      }, items);
      obj3 = user(onAddSuggestion[3]);
      let fn = function y() {
        const obj = { right: sharedValue.get(), opacity: sharedValue2.get(), transform: null };
        const items = [{ scale: sharedValue1.get() }];
        obj.transform = items;
        return obj;
      };
      fn.__closure = { right: sharedValue, opacity: sharedValue2, scale: sharedValue1 };
      fn.__workletHash = 11275663195444;
      fn.__initData = __initData6;
      const animatedStyle = user(onAddSuggestion[3]).useAnimatedStyle(fn);
      let obj5 = user(onAddSuggestion[3]);
      class D {
        constructor() {
          obj = { opacity: closure_8.get() };
          return obj;
        }
      }
      D.__closure = { buttonOpacity: sharedValue3 };
      D.__workletHash = 427197739189;
      D.__initData = __initData7;
      const items1 = [onAddSuggestion, user, added, animate, sharedValue, sharedValue2, sharedValue1, sharedValue3];
      const animatedStyle1 = user(onAddSuggestion[3]).useAnimatedStyle(D);
      const callback1 = onFinishAnimation.useCallback(() => {
        AddFriendsScreenUtils.addContactSuggestion(user);
        onAddSuggestion(user);
        const result = added.set(true);
        if (!animate) {
          const result1 = sharedValue.set(12);
          const result2 = sharedValue2.set(1);
          const result3 = sharedValue1.set(1);
          const result4 = sharedValue3.set(0);
        }
      }, items1);
      let obj6 = user(onAddSuggestion[3]);
      const fn2 = function k() {
        return added.get();
      };
      fn2.__closure = { added };
      fn2.__workletHash = 5002046489873;
      fn2.__initData = __initData8;
      class E {
        constructor(arg0) {
          if (animate) {
            tmp5 = user;
            if (user) {
              tmp14 = closure_6;
              tmp15 = closure_0;
              tmp16 = closure_2;
              obj2 = closure_0(closure_2[9]);
              tmp17 = closure_9;
              num5 = 1;
              result = closure_6.set(obj2.withTiming(1, closure_9));
              tmp19 = closure_7;
              tmp20 = closure_0;
              tmp21 = closure_2;
              obj3 = closure_0(closure_2[9]);
              tmp22 = closure_7;
              result1 = closure_7.set(obj3.withTiming(1, closure_7));
              tmp24 = closure_8;
              tmp25 = closure_0;
              tmp26 = closure_2;
              obj4 = closure_0(closure_2[9]);
              num6 = 0;
              result2 = closure_8.set(obj4.withTiming(0, closure_7));
              tmp28 = closure_5;
              tmp29 = closure_0;
              tmp30 = closure_2;
              obj5 = closure_0(closure_2[10]);
              tmp31 = closure_11;
              fn = function n(arg0) {
                if (arg0) {
                  let obj = user(onAddSuggestion[3]);
                  const result = sharedValue2.set(
                    obj.withDelay(1000, user(onAddSuggestion[9]).withTiming(0, sharedValue3)),
                  );
                  const obj2 = user(onAddSuggestion[9]);
                  obj3 = user(onAddSuggestion[3]);
                  const result1 = sharedValue1.set(
                    obj3.withDelay(1000, user(onAddSuggestion[9]).withTiming(0.5, callback)),
                  );
                  const obj4 = user(onAddSuggestion[9]);
                  const obj6 = user(onAddSuggestion[9]);
                  const fn = function n(arg0) {
                    if (arg0) {
                      user(onAddSuggestion[3]).runOnJS(finishAnimationCallback)();
                      const obj = user(onAddSuggestion[3]);
                    }
                  };
                  const obj7 = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                  fn.__closure = obj7;
                  fn.__workletHash = 2476934467738;
                  fn.__initData = __initData2;
                  const result2 = sharedValue.set(
                    user(onAddSuggestion[3]).withDelay(
                      1000,
                      obj6.withTiming(-8, TRANSLATE_OUT_CONFIG, "respect-motion-settings", fn),
                    ),
                  );
                  const obj5 = user(onAddSuggestion[3]);
                }
              };
              obj1 = {
                opacity: null,
                withDelay: null,
                withTiming: null,
                OPACITY_OUT_CONFIG: null,
                scale: null,
                SCALE_CONFIG: null,
                right: null,
                TRANSLATE_OUT_CONFIG: null,
                runOnJS: null,
                finishAnimationCallback: null,
              };
              obj1.opacity = closure_7;
              tmp32 = closure_0;
              tmp33 = closure_2;
              obj1.withDelay = closure_0(closure_2[3]).withDelay;
              tmp34 = closure_0;
              tmp35 = closure_2;
              obj1.withTiming = closure_0(closure_2[9]).withTiming;
              tmp36 = closure_8;
              obj1.OPACITY_OUT_CONFIG = closure_8;
              obj1.scale = closure_6;
              obj1.SCALE_CONFIG = closure_9;
              obj1.right = closure_5;
              tmp37 = closure_10;
              obj1.TRANSLATE_OUT_CONFIG = closure_10;
              tmp38 = closure_0;
              tmp39 = closure_2;
              obj1.runOnJS = closure_0(closure_2[3]).runOnJS;
              tmp40 = closure_9;
              obj1.finishAnimationCallback = closure_9;
              fn.__closure = obj1;
              num7 = 4349521713062;
              fn.__workletHash = 4349521713062;
              tmp41 = closure_23;
              fn.__initData = closure_23;
              str = "respect-motion-settings";
              num8 = 12;
              tmp42 = obj5;
              tmp43 = fn;
              result3 = closure_5.set(obj5.withSpring(12, closure_11, "respect-motion-settings", fn));
            } else {
              tmp6 = closure_8;
              num = 1;
              result4 = closure_8.set(1);
              tmp8 = closure_6;
              num2 = 0.5;
              result5 = closure_6.set(0.5);
              tmp10 = closure_7;
              num3 = 0;
              result6 = closure_7.set(0);
              tmp12 = closure_5;
              num4 = 30;
              result7 = closure_5.set(30);
            }
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[3]);
            tmp3 = closure_9;
            tmp4 = obj.runOnJS(closure_9)();
          }
          return;
        }
      }
      let obj7 = user(onAddSuggestion[3]);
      E.__closure = {
        animate,
        runOnJS: user(onAddSuggestion[3]).runOnJS,
        finishAnimationCallback: SCALE_CONFIG,
        scale: sharedValue1,
        withTiming: user(onAddSuggestion[9]).withTiming,
        SCALE_CONFIG,
        opacity: sharedValue2,
        OPACITY_CONFIG: sharedValue2,
        buttonOpacity: sharedValue3,
        right: sharedValue,
        withSpring: user(onAddSuggestion[10]).withSpring,
        SPRING_CONFIG,
        withDelay: user(onAddSuggestion[3]).withDelay,
        OPACITY_OUT_CONFIG: sharedValue3,
        TRANSLATE_OUT_CONFIG: obj4,
      };
      E.__workletHash = 8449864556026;
      E.__initData = __initData9;
      const animatedReaction = obj7.useAnimatedReaction(fn2, E);
      const obj9 = { children: null };
      const obj10 = { pointerEvents: "none", style: null, children: null };
      const items2 = [tmp.icon, animatedStyle];
      obj10.style = items2;
      const obj8 = {
        animate,
        runOnJS: user(onAddSuggestion[3]).runOnJS,
        finishAnimationCallback: SCALE_CONFIG,
        scale: sharedValue1,
        withTiming: user(onAddSuggestion[9]).withTiming,
        SCALE_CONFIG,
        opacity: sharedValue2,
        OPACITY_CONFIG: sharedValue2,
        buttonOpacity: sharedValue3,
        right: sharedValue,
        withSpring: user(onAddSuggestion[10]).withSpring,
        SPRING_CONFIG,
        withDelay: user(onAddSuggestion[3]).withDelay,
        OPACITY_OUT_CONFIG: sharedValue3,
        TRANSLATE_OUT_CONFIG: obj4,
      };
      obj10.children = sharedValue(user(onAddSuggestion[11]).Icon, {
        source: added(onAddSuggestion[12]),
        color: tmp.icon.color,
      });
      const items3 = [sharedValue(added(onAddSuggestion[3]).View, obj10)];
      const obj12 = { style: animatedStyle1, children: null };
      const obj13 = { variant: "secondary", size: str, grow: false, text: null, onPress: null };
      const intl = user(onAddSuggestion[13]).intl;
      obj13.text = intl.string(user(onAddSuggestion[13]).t.OYkgVk);
      obj13.onPress = callback1;
      obj12.children = sharedValue(user(onAddSuggestion[14]).Button, obj13);
      items3[1] = sharedValue(added(onAddSuggestion[3]).View, obj12);
      obj9.children = items3;
      return sharedValue1(animate, obj9);
    };
