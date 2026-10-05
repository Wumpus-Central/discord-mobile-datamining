// === Module 16383: ContactSuggestionActions ===

// Module 16383 (ContactSuggestionActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 15971 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let num, num2, num3, num4, num5, num6, num7, num8, obj1, set, set2, set2Result, set3, set3Result, set4, set4Result, tmp11, tmp13, tmp15, tmp16, tmp17, tmp18, tmp2, tmp20, tmp21, tmp26, tmp27, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp4, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp6, tmp7, tmp9, user;

let Easing;
let Easing2;
let Easing3;
let Easing4;
let hasOwnProperty;
let metroRequire;
let obj6;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { duration: 200, easing: Easing.in(ReanimatedRexport.Easing.quad) };
Easing = ReanimatedRexport.Easing;
let obj2 = { duration: 250, easing: Easing2.in(ReanimatedRexport.Easing.quad) };
Easing2 = ReanimatedRexport.Easing;
let obj3 = { duration: 250, easing: Easing3.in(ReanimatedRexport.Easing.quad) };
Easing3 = ReanimatedRexport.Easing;
let obj4 = { duration: 250, easing: Easing4.out(ReanimatedRexport.Easing.quad) };
Easing4 = ReanimatedRexport.Easing;
const SPRING_CONFIG = { mass: 1, stiffness: 172, damping: 17.3 };
let obj5 = { icon: obj6 };
obj6 = { position: "absolute", top: 4, zIndex: 2, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, opacity: 0 };
let closure_12 = createStyles.createStyles(obj5);
const __initData = { code: "function ContactSuggestionActionsTsx1(){const{right,opacity,scale}=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const __initData2 = { code: "function ContactSuggestionActionsTsx2(){const{buttonOpacity}=this.__closure;return{opacity:buttonOpacity.get()};}" };
const __initData3 = { code: "function ContactSuggestionActionsTsx3(){const{added}=this.__closure;return added.get();}" };
const __initData4 = { code: "function ContactSuggestionActionsTsx4(added_0){const{animate,runOnJS,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG}=this.__closure;if(!animate){runOnJS(finishAnimationCallback)();return;}if(added_0){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,\"respect-motion-settings\",function(finished){if(!finished){return;}opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,\"respect-motion-settings\",function(finished_0){if(finished_0){runOnJS(finishAnimationCallback)();}})));}));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}}" };
const __initData5 = { code: "function ContactSuggestionActionsTsx5(finished){const{opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,runOnJS,finishAnimationCallback}=this.__closure;if(!finished){return;}opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,\"respect-motion-settings\",function(finished_0){if(finished_0){runOnJS(finishAnimationCallback)();}})));}" };
let closure_18 = { code: "function ContactSuggestionActionsTsx6(finished_0){const{runOnJS,finishAnimationCallback}=this.__closure;if(finished_0){runOnJS(finishAnimationCallback)();}}" };
const __initData6 = { code: "function ContactSuggestionActionsTsx7(){const{right,opacity,scale}=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const __initData7 = { code: "function ContactSuggestionActionsTsx8(){const{buttonOpacity}=this.__closure;return{opacity:buttonOpacity.get()};}" };
const __initData8 = { code: "function ContactSuggestionActionsTsx9(){const{added}=this.__closure;return added.get();}" };
const __initData9 = { code: "function ContactSuggestionActionsTsx10(added_0){const{animate,runOnJS,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG}=this.__closure;if(!animate){runOnJS(finishAnimationCallback)();return;}if(added_0){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,'respect-motion-settings',function(finished){if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished_0){if(finished_0)runOnJS(finishAnimationCallback)();})));}));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}}" };
const __initData10 = { code: "function ContactSuggestionActionsTsx11(finished){const{opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,runOnJS,finishAnimationCallback}=this.__closure;if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished_0){if(finished_0)runOnJS(finishAnimationCallback)();})));}" };
let closure_24 = { code: "function ContactSuggestionActionsTsx12(finished_0){const{runOnJS,finishAnimationCallback}=this.__closure;if(finished_0)runOnJS(finishAnimationCallback)();}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let animate;
  let obj4;
  let onAddSuggestion;
  let tmp = user;
  let obj = user(onAddSuggestion[7]);
  const cResult = obj.c(27);
  user = user.user;
  const added = user.added;
  onAddSuggestion = user.onAddSuggestion;
  ({ onFinishAnimation: react, size, animate } = user);
  let tmp5 = closure_12();
  const tmpResult = tmp(onAddSuggestion[3]);
  const sharedValue = tmpResult.useSharedValue(30);
  const tmpResult7 = tmp(onAddSuggestion[3]);
  const sharedValue1 = tmpResult7.useSharedValue(0.5);
  const tmpResult8 = tmp(onAddSuggestion[3]);
  const sharedValue2 = tmpResult8.useSharedValue(0);
  const tmpResult9 = tmp(onAddSuggestion[3]);
  const sharedValue3 = tmpResult9.useSharedValue(1);
  function finishAnimationCallback() {
    if (null != react) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_1_3(user);
      }, 1000);
    }
  }
  let fn = function s() {
    let items;
    const obj = { right: sharedValue.get(), opacity: sharedValue2.get(), transform: items };
    items = [{ scale: sharedValue1.get() }];
    ({ scale: sharedValue1.get() });
    return obj;
  };
  fn.__closure = { right: sharedValue, opacity: sharedValue2, scale: sharedValue1 };
  fn.__workletHash = 13774422449074;
  fn.__initData = __initData;
  const tmpResult10 = tmp(onAddSuggestion[3]);
  const animatedStyle = tmpResult10.useAnimatedStyle(fn);
  const tmpResult11 = tmp(onAddSuggestion[3]);
  class I {
    constructor() {
      const obj = { opacity: sharedValue3.get() };
      return obj;
    }
  }
  I.__closure = { buttonOpacity: sharedValue3 };
  I.__workletHash = 4378005846847;
  I.__initData = __initData2;
  const animatedStyle1 = tmpResult11.useAnimatedStyle(I);
  if (cResult[0] === added) {
    if (cResult[1] === animate) {
      if (cResult[2] === sharedValue3) {
        if (cResult[3] === onAddSuggestion) {
          if (cResult[4] === sharedValue2) {
            if (cResult[5] === sharedValue) {
              if (cResult[6] === sharedValue1) {
                const tmpResult12 = tmp(onAddSuggestion[3]);
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
                    tmp = animate;
                    if (tmp) {
                      tmp6 = user;
                      if (tmp6) {
                        tmp15 = closure_6;
                        tmp16 = closure_0;
                        tmp17 = closure_2;
                        set = closure_6.set;
                        obj2 = closure_0(closure_2[9]);
                        tmp18 = closure_9;
                        num5 = 1;
                        result = set(obj2.withTiming(1, closure_9));
                        tmp20 = closure_7;
                        tmp21 = closure_0;
                        tmp22 = closure_2;
                        set2 = closure_7.set;
                        obj3 = closure_0(closure_2[9]);
                        tmp23 = closure_7;
                        set2Result = set2(obj3.withTiming(1, closure_7));
                        tmp25 = closure_8;
                        tmp26 = closure_0;
                        tmp27 = closure_2;
                        set3 = closure_8.set;
                        obj4 = closure_0(closure_2[9]);
                        num6 = 0;
                        set3Result = set3(obj4.withTiming(0, closure_7));
                        tmp29 = closure_5;
                        tmp30 = closure_0;
                        tmp31 = closure_2;
                        set4 = closure_5.set;
                        tmp32 = closure_0(closure_2[10]);
                        tmp33 = closure_11;
                        fn = function n(arg0) {
                          let tmp = arg0;
                          if (tmp) {
                            const withDelay = user(onAddSuggestion[3]).withDelay;
                            const tmp5 = user(onAddSuggestion[3]);
                            let obj = user(onAddSuggestion[9]);
                            const result = set(withDelay(1000, obj.withTiming(0, sharedValue3)));
                            const withDelay2 = user(onAddSuggestion[3]).withDelay;
                            user(onAddSuggestion[3]);
                            const obj2 = user(onAddSuggestion[9]);
                            set2.set(withDelay2(1000, obj2.withTiming(0.5, finishAnimationCallback)));
                            const withDelay3 = user(onAddSuggestion[3]).withDelay;
                            user(onAddSuggestion[3]);
                            const fn = function n(arg0) {
                              const tmp = arg0;
                              if (tmp) {
                                const obj = user(onAddSuggestion[3]);
                                obj.runOnJS(finishAnimationCallback)();
                              }
                            };
                            const tmp14 = user(onAddSuggestion[9]);
                            const withTiming = tmp14.withTiming;
                            fn.__closure = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                            fn.__workletHash = 4969511126665;
                            fn.__initData = __initData2;
                            obj3 = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                            set3.set.set(withDelay3(1000, withTiming(-8, TRANSLATE_OUT_CONFIG, "respect-motion-settings", fn)));
                          }
                        };
                        obj1 = { opacity: null, withDelay: null, withTiming: null, OPACITY_OUT_CONFIG: null, scale: null, SCALE_CONFIG: null, right: null, TRANSLATE_OUT_CONFIG: null, runOnJS: null, finishAnimationCallback: null };
                        obj1.opacity = closure_7;
                        tmp34 = closure_0;
                        tmp35 = closure_2;
                        withSpring = tmp32.withSpring;
                        obj1.withDelay = closure_0(closure_2[3]).withDelay;
                        tmp36 = closure_0;
                        tmp37 = closure_2;
                        obj1.withTiming = closure_0(closure_2[9]).withTiming;
                        tmp38 = closure_8;
                        obj1.OPACITY_OUT_CONFIG = closure_8;
                        obj1.scale = closure_6;
                        obj1.SCALE_CONFIG = closure_9;
                        obj1.right = closure_5;
                        tmp39 = closure_10;
                        obj1.TRANSLATE_OUT_CONFIG = closure_10;
                        tmp40 = closure_0;
                        tmp41 = closure_2;
                        obj1.runOnJS = closure_0(closure_2[3]).runOnJS;
                        tmp42 = finishAnimationCallback;
                        obj1.finishAnimationCallback = finishAnimationCallback;
                        fn.__closure = obj1;
                        num7 = 6173976864339;
                        fn.__workletHash = 6173976864339;
                        tmp43 = closure_17;
                        fn.__initData = closure_17;
                        str = "respect-motion-settings";
                        num8 = 12;
                        tmp44 = tmp32;
                        tmp45 = fn;
                        set4Result = set4(withSpring(12, closure_11, "respect-motion-settings", fn));
                      } else {
                        tmp7 = closure_8;
                        num = 1;
                        result1 = closure_8.set(1);
                        tmp9 = closure_6;
                        num2 = 0.5;
                        result2 = closure_6.set(0.5);
                        tmp11 = closure_7;
                        num3 = 0;
                        result3 = closure_7.set(0);
                        tmp13 = closure_5;
                        num4 = 30;
                        result4 = closure_5.set(30);
                      }
                    } else {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = closure_0(closure_2[3]);
                      tmp4 = finishAnimationCallback;
                      tmp5 = obj.runOnJS(finishAnimationCallback)();
                    }
                    return;
                  }
                }
                obj3 = { animate, runOnJS: tmp(tmp2[3]).runOnJS, finishAnimationCallback, scale: sharedValue1, withTiming: tmp(tmp2[9]).withTiming, SCALE_CONFIG: finishAnimationCallback, opacity: sharedValue2, OPACITY_CONFIG: sharedValue2, buttonOpacity: sharedValue3, right: sharedValue, withSpring: tmp(tmp2[10]).withSpring, SPRING_CONFIG, withDelay: tmp(tmp2[3]).withDelay, OPACITY_OUT_CONFIG: sharedValue3, TRANSLATE_OUT_CONFIG: obj4 };
                const useAnimatedReaction = tmpResult12.useAnimatedReaction;
                V.__closure = obj3;
                V.__workletHash = 13821702626895;
                V.__initData = __initData4;
                const animatedReaction = useAnimatedReaction(H, V);
                if (cResult[9] === animatedStyle) {
                  let tmp22;
                  let tmp23;
                  if (cResult[10] === tmp5.icon) {
                    tmp22 = cResult[11];
                  }
                  if (cResult[12] !== tmp5.icon.color) {
                    obj4 = { source: added(tmp2[12]), color: tmp5.icon.color };
                    class H {
                      constructor() {
                        return added.get();
                      }
                    }
                    const Icon = tmp(tmp2[11]).Icon;
                    cResult[12] = tmp5.icon.color;
                    const tmp25 = sharedValue(Icon, obj4);
                    class V {
                      constructor(arg0) {
                        tmp = animate;
                        if (tmp) {
                          tmp6 = user;
                          if (tmp6) {
                            tmp15 = closure_6;
                            tmp16 = closure_0;
                            tmp17 = closure_2;
                            set = closure_6.set;
                            obj2 = closure_0(closure_2[9]);
                            tmp18 = closure_9;
                            num5 = 1;
                            result = set(obj2.withTiming(1, closure_9));
                            tmp20 = closure_7;
                            tmp21 = closure_0;
                            tmp22 = closure_2;
                            set2 = closure_7.set;
                            obj3 = closure_0(closure_2[9]);
                            tmp23 = closure_7;
                            set2Result = set2(obj3.withTiming(1, closure_7));
                            tmp25 = closure_8;
                            tmp26 = closure_0;
                            tmp27 = closure_2;
                            set3 = closure_8.set;
                            obj4 = closure_0(closure_2[9]);
                            num6 = 0;
                            set3Result = set3(obj4.withTiming(0, closure_7));
                            tmp29 = closure_5;
                            tmp30 = closure_0;
                            tmp31 = closure_2;
                            set4 = closure_5.set;
                            tmp32 = closure_0(closure_2[10]);
                            tmp33 = closure_11;
                            fn = function n(arg0) {
                              let tmp = arg0;
                              if (tmp) {
                                const withDelay = user(onAddSuggestion[3]).withDelay;
                                const tmp5 = user(onAddSuggestion[3]);
                                let obj = user(onAddSuggestion[9]);
                                const result = set(withDelay(1000, obj.withTiming(0, sharedValue3)));
                                const withDelay2 = user(onAddSuggestion[3]).withDelay;
                                user(onAddSuggestion[3]);
                                const obj2 = user(onAddSuggestion[9]);
                                set2.set(withDelay2(1000, obj2.withTiming(0.5, finishAnimationCallback)));
                                const withDelay3 = user(onAddSuggestion[3]).withDelay;
                                user(onAddSuggestion[3]);
                                const fn = function n(arg0) {
                                  const tmp = arg0;
                                  if (tmp) {
                                    const obj = user(onAddSuggestion[3]);
                                    obj.runOnJS(finishAnimationCallback)();
                                  }
                                };
                                const tmp14 = user(onAddSuggestion[9]);
                                const withTiming = tmp14.withTiming;
                                fn.__closure = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                                fn.__workletHash = 4969511126665;
                                fn.__initData = __initData2;
                                obj3 = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                                set3.set.set(withDelay3(1000, withTiming(-8, TRANSLATE_OUT_CONFIG, "respect-motion-settings", fn)));
                              }
                            };
                            obj1 = { opacity: null, withDelay: null, withTiming: null, OPACITY_OUT_CONFIG: null, scale: null, SCALE_CONFIG: null, right: null, TRANSLATE_OUT_CONFIG: null, runOnJS: null, finishAnimationCallback: null };
                            obj1.opacity = closure_7;
                            tmp34 = closure_0;
                            tmp35 = closure_2;
                            withSpring = tmp32.withSpring;
                            obj1.withDelay = closure_0(closure_2[3]).withDelay;
                            tmp36 = closure_0;
                            tmp37 = closure_2;
                            obj1.withTiming = closure_0(closure_2[9]).withTiming;
                            tmp38 = closure_8;
                            obj1.OPACITY_OUT_CONFIG = closure_8;
                            obj1.scale = closure_6;
                            obj1.SCALE_CONFIG = closure_9;
                            obj1.right = closure_5;
                            tmp39 = closure_10;
                            obj1.TRANSLATE_OUT_CONFIG = closure_10;
                            tmp40 = closure_0;
                            tmp41 = closure_2;
                            obj1.runOnJS = closure_0(closure_2[3]).runOnJS;
                            tmp42 = finishAnimationCallback;
                            obj1.finishAnimationCallback = finishAnimationCallback;
                            fn.__closure = obj1;
                            num7 = 6173976864339;
                            fn.__workletHash = 6173976864339;
                            tmp43 = closure_17;
                            fn.__initData = closure_17;
                            str = "respect-motion-settings";
                            num8 = 12;
                            tmp44 = tmp32;
                            tmp45 = fn;
                            set4Result = set4(withSpring(12, closure_11, "respect-motion-settings", fn));
                          } else {
                            tmp7 = closure_8;
                            num = 1;
                            result1 = closure_8.set(1);
                            tmp9 = closure_6;
                            num2 = 0.5;
                            result2 = closure_6.set(0.5);
                            tmp11 = closure_7;
                            num3 = 0;
                            result3 = closure_7.set(0);
                            tmp13 = closure_5;
                            num4 = 30;
                            result4 = closure_5.set(30);
                          }
                        } else {
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          obj = closure_0(closure_2[3]);
                          tmp4 = finishAnimationCallback;
                          tmp5 = obj.runOnJS(finishAnimationCallback)();
                        }
                        return;
                      }
                    }
                    tmp23 = tmp25;
                  } else {
                    tmp23 = cResult[13];
                  }
                  class H {
                    constructor() {
                      return added.get();
                    }
                  }
                  let obj5 = { pointerEvents: "none", style: tmp22, children: tmp23 };
                  const tmp29 = sharedValue(added(onAddSuggestion[3]).View, obj5);
                  class V {
                    constructor(arg0) {
                      tmp = animate;
                      if (tmp) {
                        tmp6 = user;
                        if (tmp6) {
                          tmp15 = closure_6;
                          tmp16 = closure_0;
                          tmp17 = closure_2;
                          set = closure_6.set;
                          obj2 = closure_0(closure_2[9]);
                          tmp18 = closure_9;
                          num5 = 1;
                          result = set(obj2.withTiming(1, closure_9));
                          tmp20 = closure_7;
                          tmp21 = closure_0;
                          tmp22 = closure_2;
                          set2 = closure_7.set;
                          obj3 = closure_0(closure_2[9]);
                          tmp23 = closure_7;
                          set2Result = set2(obj3.withTiming(1, closure_7));
                          tmp25 = closure_8;
                          tmp26 = closure_0;
                          tmp27 = closure_2;
                          set3 = closure_8.set;
                          obj4 = closure_0(closure_2[9]);
                          num6 = 0;
                          set3Result = set3(obj4.withTiming(0, closure_7));
                          tmp29 = closure_5;
                          tmp30 = closure_0;
                          tmp31 = closure_2;
                          set4 = closure_5.set;
                          tmp32 = closure_0(closure_2[10]);
                          tmp33 = closure_11;
                          fn = function n(arg0) {
                            let tmp = arg0;
                            if (tmp) {
                              const withDelay = user(onAddSuggestion[3]).withDelay;
                              const tmp5 = user(onAddSuggestion[3]);
                              let obj = user(onAddSuggestion[9]);
                              const result = set(withDelay(1000, obj.withTiming(0, sharedValue3)));
                              const withDelay2 = user(onAddSuggestion[3]).withDelay;
                              user(onAddSuggestion[3]);
                              const obj2 = user(onAddSuggestion[9]);
                              set2.set(withDelay2(1000, obj2.withTiming(0.5, finishAnimationCallback)));
                              const withDelay3 = user(onAddSuggestion[3]).withDelay;
                              user(onAddSuggestion[3]);
                              const fn = function n(arg0) {
                                const tmp = arg0;
                                if (tmp) {
                                  const obj = user(onAddSuggestion[3]);
                                  obj.runOnJS(finishAnimationCallback)();
                                }
                              };
                              const tmp14 = user(onAddSuggestion[9]);
                              const withTiming = tmp14.withTiming;
                              fn.__closure = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                              fn.__workletHash = 4969511126665;
                              fn.__initData = __initData2;
                              obj3 = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
                              set3.set.set(withDelay3(1000, withTiming(-8, TRANSLATE_OUT_CONFIG, "respect-motion-settings", fn)));
                            }
                          };
                          obj1 = { opacity: null, withDelay: null, withTiming: null, OPACITY_OUT_CONFIG: null, scale: null, SCALE_CONFIG: null, right: null, TRANSLATE_OUT_CONFIG: null, runOnJS: null, finishAnimationCallback: null };
                          obj1.opacity = closure_7;
                          tmp34 = closure_0;
                          tmp35 = closure_2;
                          withSpring = tmp32.withSpring;
                          obj1.withDelay = closure_0(closure_2[3]).withDelay;
                          tmp36 = closure_0;
                          tmp37 = closure_2;
                          obj1.withTiming = closure_0(closure_2[9]).withTiming;
                          tmp38 = closure_8;
                          obj1.OPACITY_OUT_CONFIG = closure_8;
                          obj1.scale = closure_6;
                          obj1.SCALE_CONFIG = closure_9;
                          obj1.right = closure_5;
                          tmp39 = closure_10;
                          obj1.TRANSLATE_OUT_CONFIG = closure_10;
                          tmp40 = closure_0;
                          tmp41 = closure_2;
                          obj1.runOnJS = closure_0(closure_2[3]).runOnJS;
                          tmp42 = finishAnimationCallback;
                          obj1.finishAnimationCallback = finishAnimationCallback;
                          fn.__closure = obj1;
                          num7 = 6173976864339;
                          fn.__workletHash = 6173976864339;
                          tmp43 = closure_17;
                          fn.__initData = closure_17;
                          str = "respect-motion-settings";
                          num8 = 12;
                          tmp44 = tmp32;
                          tmp45 = fn;
                          set4Result = set4(withSpring(12, closure_11, "respect-motion-settings", fn));
                        } else {
                          tmp7 = closure_8;
                          num = 1;
                          result1 = closure_8.set(1);
                          tmp9 = closure_6;
                          num2 = 0.5;
                          result2 = closure_6.set(0.5);
                          tmp11 = closure_7;
                          num3 = 0;
                          result3 = closure_7.set(0);
                          tmp13 = closure_5;
                          num4 = 30;
                          result4 = closure_5.set(30);
                        }
                      } else {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[3]);
                        tmp4 = finishAnimationCallback;
                        tmp5 = obj.runOnJS(finishAnimationCallback)();
                      }
                      return;
                    }
                  }
                  cResult[15] = tmp23;
                  cResult[16] = tmp29;
                }
                let items = [tmp5.icon, animatedStyle];
                cResult[9] = animatedStyle;
                cResult[10] = tmp5.icon;
                cResult[11] = items;
                tmp22 = items;
              }
            }
          }
        }
      }
    }
  }
  const fn2 = function p() {
    const obj = AddFriendsScreenUtils;
    obj.addContactSuggestion(user);
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
}) : ((user) => {
  let Button;
  let Icon;
  let callback;
  let intl;
  let items2;
  let items3;
  let obj11;
  let obj13;
  user = user.user;
  const added = user.added;
  const onAddSuggestion = user.onAddSuggestion;
  const onFinishAnimation = user.onFinishAnimation;
  let str = user.size;
  if (str === undefined) {
    str = "sm";
  }
  const animate = user.animate;
  let tmp = closure_12();
  let obj = user(onAddSuggestion[3]);
  const sharedValue = obj.useSharedValue(30);
  let obj2 = user(onAddSuggestion[3]);
  const sharedValue1 = obj2.useSharedValue(0.5);
  obj3 = user(onAddSuggestion[3]);
  const sharedValue2 = obj3.useSharedValue(0);
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
  let obj5 = user(onAddSuggestion[3]);
  let fn = function y() {
    let items;
    const obj = { right: sharedValue.get(), opacity: sharedValue2.get(), transform: items };
    items = [{ scale: sharedValue1.get() }];
    ({ scale: sharedValue1.get() });
    return obj;
  };
  fn.__closure = { right: sharedValue, opacity: sharedValue2, scale: sharedValue1 };
  fn.__workletHash = 11275663195444;
  fn.__initData = __initData6;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = user(onAddSuggestion[3]);
  class D {
    constructor() {
      const obj = { opacity: sharedValue3.get() };
      return obj;
    }
  }
  D.__closure = { buttonOpacity: sharedValue3 };
  D.__workletHash = 427197739189;
  D.__initData = __initData7;
  const items1 = [onAddSuggestion, user, added, animate, sharedValue, sharedValue2, sharedValue1, sharedValue3];
  const animatedStyle1 = obj6.useAnimatedStyle(D);
  const callback1 = onFinishAnimation.useCallback(() => {
    const obj = AddFriendsScreenUtils;
    obj.addContactSuggestion(user);
    onAddSuggestion(user);
    const result = added.set(true);
    if (!animate) {
      const result1 = sharedValue.set(12);
      const result2 = sharedValue2.set(1);
      const result3 = sharedValue1.set(1);
      const result4 = sharedValue3.set(0);
    }
  }, items1);
  const fn2 = function k() {
    return added.get();
  };
  fn2.__closure = { added };
  fn2.__workletHash = 5002046489873;
  fn2.__initData = __initData8;
  const obj7 = user(onAddSuggestion[3]);
  class E {
    constructor(arg0) {
      tmp = animate;
      if (tmp) {
        tmp6 = user;
        if (tmp6) {
          tmp15 = closure_6;
          tmp16 = closure_0;
          tmp17 = closure_2;
          set = closure_6.set;
          obj2 = closure_0(closure_2[9]);
          tmp18 = closure_9;
          num5 = 1;
          result = set(obj2.withTiming(1, closure_9));
          tmp20 = closure_7;
          tmp21 = closure_0;
          tmp22 = closure_2;
          set2 = closure_7.set;
          obj3 = closure_0(closure_2[9]);
          tmp23 = closure_7;
          set2Result = set2(obj3.withTiming(1, closure_7));
          tmp25 = closure_8;
          tmp26 = closure_0;
          tmp27 = closure_2;
          set3 = closure_8.set;
          obj4 = closure_0(closure_2[9]);
          num6 = 0;
          set3Result = set3(obj4.withTiming(0, closure_7));
          tmp29 = closure_5;
          tmp30 = closure_0;
          tmp31 = closure_2;
          set4 = closure_5.set;
          tmp32 = closure_0(closure_2[10]);
          tmp33 = closure_11;
          fn = function n(arg0) {
            let tmp = arg0;
            if (tmp) {
              const withDelay = user(onAddSuggestion[3]).withDelay;
              const tmp5 = user(onAddSuggestion[3]);
              let obj = user(onAddSuggestion[9]);
              const result = set(withDelay(1000, obj.withTiming(0, sharedValue3)));
              const withDelay2 = user(onAddSuggestion[3]).withDelay;
              user(onAddSuggestion[3]);
              const obj2 = user(onAddSuggestion[9]);
              set2.set(withDelay2(1000, obj2.withTiming(0.5, callback)));
              const withDelay3 = user(onAddSuggestion[3]).withDelay;
              user(onAddSuggestion[3]);
              const fn = function n(arg0) {
                const tmp = arg0;
                if (tmp) {
                  const obj = user(onAddSuggestion[3]);
                  obj.runOnJS(finishAnimationCallback)();
                }
              };
              const tmp14 = user(onAddSuggestion[9]);
              const withTiming = tmp14.withTiming;
              fn.__closure = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
              fn.__workletHash = 2476934467738;
              fn.__initData = __initData2;
              obj3 = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
              set3.set.set(withDelay3(1000, withTiming(-8, TRANSLATE_OUT_CONFIG, "respect-motion-settings", fn)));
            }
          };
          obj1 = { opacity: null, withDelay: null, withTiming: null, OPACITY_OUT_CONFIG: null, scale: null, SCALE_CONFIG: null, right: null, TRANSLATE_OUT_CONFIG: null, runOnJS: null, finishAnimationCallback: null };
          obj1.opacity = closure_7;
          tmp34 = closure_0;
          tmp35 = closure_2;
          withSpring = tmp32.withSpring;
          obj1.withDelay = closure_0(closure_2[3]).withDelay;
          tmp36 = closure_0;
          tmp37 = closure_2;
          obj1.withTiming = closure_0(closure_2[9]).withTiming;
          tmp38 = closure_8;
          obj1.OPACITY_OUT_CONFIG = closure_8;
          obj1.scale = closure_6;
          obj1.SCALE_CONFIG = closure_9;
          obj1.right = closure_5;
          tmp39 = closure_10;
          obj1.TRANSLATE_OUT_CONFIG = closure_10;
          tmp40 = closure_0;
          tmp41 = closure_2;
          obj1.runOnJS = closure_0(closure_2[3]).runOnJS;
          tmp42 = closure_9;
          obj1.finishAnimationCallback = closure_9;
          fn.__closure = obj1;
          num7 = 4349521713062;
          fn.__workletHash = 4349521713062;
          tmp43 = closure_23;
          fn.__initData = closure_23;
          str = "respect-motion-settings";
          num8 = 12;
          tmp44 = tmp32;
          tmp45 = fn;
          set4Result = set4(withSpring(12, closure_11, "respect-motion-settings", fn));
        } else {
          tmp7 = closure_8;
          num = 1;
          result1 = closure_8.set(1);
          tmp9 = closure_6;
          num2 = 0.5;
          result2 = closure_6.set(0.5);
          tmp11 = closure_7;
          num3 = 0;
          result3 = closure_7.set(0);
          tmp13 = closure_5;
          num4 = 30;
          result4 = closure_5.set(30);
        }
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[3]);
        tmp4 = closure_9;
        tmp5 = obj.runOnJS(closure_9)();
      }
      return;
    }
  }
  E.__closure = { animate, runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback: SCALE_CONFIG, scale: sharedValue1, withTiming: user(onAddSuggestion[9]).withTiming, SCALE_CONFIG, opacity: sharedValue2, OPACITY_CONFIG: sharedValue2, buttonOpacity: sharedValue3, right: sharedValue, withSpring: user(onAddSuggestion[10]).withSpring, SPRING_CONFIG, withDelay: user(onAddSuggestion[3]).withDelay, OPACITY_OUT_CONFIG: sharedValue3, TRANSLATE_OUT_CONFIG: obj4 };
  E.__workletHash = 8449864556026;
  E.__initData = __initData9;
  ({ animate, runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback: SCALE_CONFIG, scale: sharedValue1, withTiming: user(onAddSuggestion[9]).withTiming, SCALE_CONFIG, opacity: sharedValue2, OPACITY_CONFIG: sharedValue2, buttonOpacity: sharedValue3, right: sharedValue, withSpring: user(onAddSuggestion[10]).withSpring, SPRING_CONFIG, withDelay: user(onAddSuggestion[3]).withDelay, OPACITY_OUT_CONFIG: sharedValue3, TRANSLATE_OUT_CONFIG: obj4 });
  const animatedReaction = obj7.useAnimatedReaction(fn2, E);
  const obj9 = { children: items3 };
  const obj10 = { pointerEvents: "none", style: items2, children: sharedValue(Icon, obj11) };
  items2 = [tmp.icon, animatedStyle];
  View = added(onAddSuggestion[3]).View;
  obj11 = { source: added(onAddSuggestion[12]), color: tmp.icon.color };
  Icon = user(onAddSuggestion[11]).Icon;
  items3 = [sharedValue(View, obj10), ];
  const obj12 = { style: animatedStyle1, children: sharedValue(Button, obj13) };
  const View2 = added(onAddSuggestion[3]).View;
  obj13 = { variant: "secondary", size: str, grow: false, text: intl.string(user(onAddSuggestion[13]).t.OYkgVk), onPress: callback1 };
  Button = user(onAddSuggestion[14]).Button;
  intl = user(onAddSuggestion[13]).intl;
  items3[1] = sharedValue(View2, obj12);
  return sharedValue1(animate, obj9);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx");

export const ContactSuggestionActions = tmp3;