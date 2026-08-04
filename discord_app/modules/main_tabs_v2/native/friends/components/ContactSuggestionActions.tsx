import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { Easing } from "module_4146";
import { Easing as Easing2 } from "module_4146";
import { Easing as Easing3 } from "module_4146";
import { Easing as Easing4 } from "module_4146";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { duration: 200, easing: null };
obj[1] = Easing.in(require("module_4146").Easing.quad);
obj = { duration: 250, easing: null };
obj[1] = Easing2.in(require("module_4146").Easing.quad);
obj = { duration: 250, easing: null };
obj[1] = Easing3.in(require("module_4146").Easing.quad);
let obj1 = { duration: 250, easing: null };
obj1[1] = Easing4.out(require("module_4146").Easing.quad);
let closure_11 = { mass: 1, stiffness: 172, damping: 17.3 };
let obj2 = { icon: null };
obj2[0] = { position: "absolute", top: 4, zIndex: 2, color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, opacity: 0 };
let closure_12 = createCacheKey.createStyles(obj2);
let closure_13 = { code: "function ContactSuggestionActionsTsx1(){const{right,opacity,scale}=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let closure_14 = { code: "function ContactSuggestionActionsTsx2(){const{buttonOpacity}=this.__closure;return{opacity:buttonOpacity.get()};}" };
let closure_15 = { code: "function ContactSuggestionActionsTsx3(){const{added}=this.__closure;return added.get();}" };
let closure_16 = { code: "function ContactSuggestionActionsTsx4(added){const{animate,runOnJS,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG}=this.__closure;if(!animate){runOnJS(finishAnimationCallback)();return;}if(added){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,'respect-motion-settings',function(finished){if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}}" };
let closure_17 = { code: "function ContactSuggestionActionsTsx5(finished){const{opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,runOnJS,finishAnimationCallback}=this.__closure;if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}" };
let closure_18 = { code: "function ContactSuggestionActionsTsx6(finished){const{runOnJS,finishAnimationCallback}=this.__closure;if(finished)runOnJS(finishAnimationCallback)();}" };
let obj3 = { position: "absolute", top: 4, zIndex: 2, color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, opacity: 0 };
let result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx");

export const ContactSuggestionActions = function ContactSuggestionActions(user) {
  user = user.user;
  const added = user.added;
  const onAddSuggestion = user.onAddSuggestion;
  const onFinishAnimation = user.onFinishAnimation;
  let str = user.size;
  if (str === undefined) {
    str = "sm";
  }
  const animate = user.animate;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let callback;
  const tmp = callback();
  let obj = user(onAddSuggestion[3]);
  sharedValue = obj.useSharedValue(30);
  let obj1 = user(onAddSuggestion[3]);
  sharedValue1 = obj1.useSharedValue(0.5);
  let obj2 = user(onAddSuggestion[3]);
  sharedValue2 = obj2.useSharedValue(0);
  let obj3 = user(onAddSuggestion[3]);
  sharedValue3 = obj3.useSharedValue(1);
  let items = [onFinishAnimation, user];
  callback = onFinishAnimation.useCallback(() => {
    if (null != onFinishAnimation) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        callback(closure_0);
      }, 1000);
    }
  }, items);
  let obj4 = user(onAddSuggestion[3]);
  let fn = function b() {
    let obj = { right: sharedValue.get(), opacity: sharedValue2.get(), transform: null };
    obj = { scale: sharedValue1.get() };
    const items = [obj];
    obj[2] = items;
    return obj;
  };
  fn.__closure = { right: sharedValue, opacity: sharedValue2, scale: sharedValue1 };
  fn.__workletHash = 13774422449074;
  fn.__initData = closure_13;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  class E {
    constructor() {
      obj = { opacity: c8.get() };
      return obj;
    }
  }
  E.__closure = { buttonOpacity: sharedValue3 };
  E.__workletHash = 4378005846847;
  E.__initData = closure_14;
  const items1 = [onAddSuggestion, user, added, animate, sharedValue, sharedValue2, sharedValue1, sharedValue3];
  const animatedStyle1 = user(onAddSuggestion[3]).useAnimatedStyle(E);
  const callback1 = onFinishAnimation.useCallback(() => {
    user(onAddSuggestion[6]).addContactSuggestion(user);
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
  fn2.__workletHash = 15816115253403;
  fn2.__initData = closure_15;
  class D {
    constructor(arg0) {
      if (animate) {
        tmp5 = user;
        if (user) {
          tmp14 = c6;
          tmp15 = user;
          tmp16 = onAddSuggestion;
          obj2 = user(onAddSuggestion[7]);
          tmp17 = c9;
          num5 = 1;
          result = c6.set(obj2.withTiming(1, c9));
          tmp19 = c7;
          tmp20 = user;
          tmp21 = onAddSuggestion;
          obj3 = user(onAddSuggestion[7]);
          tmp22 = c7;
          result1 = c7.set(obj3.withTiming(1, c7));
          tmp24 = c8;
          tmp25 = user;
          tmp26 = onAddSuggestion;
          obj4 = user(onAddSuggestion[7]);
          num6 = 0;
          result2 = c8.set(obj4.withTiming(0, c7));
          tmp28 = c5;
          tmp29 = user;
          tmp30 = onAddSuggestion;
          obj5 = user(onAddSuggestion[8]);
          tmp31 = outer1_11;
          fn = function n(arg0) {
            if (arg0) {
              let obj = outer1_0(outer1_2[3]);
              const result = closure_7.set(obj.withDelay(1000, outer1_0(outer1_2[7]).withTiming(0, outer1_8)));
              const obj2 = outer1_0(outer1_2[7]);
              const obj3 = outer1_0(outer1_2[3]);
              const result1 = closure_6.set(obj3.withDelay(1000, outer1_0(outer1_2[7]).withTiming(0.5, outer1_9)));
              const obj4 = outer1_0(outer1_2[7]);
              const obj6 = outer1_0(outer1_2[7]);
              const fn = function n(arg0) {
                if (arg0) {
                  outer1_0(outer1_2[3]).runOnJS(closure_9)();
                  const obj = outer1_0(outer1_2[3]);
                }
              };
              obj = { runOnJS: null, finishAnimationCallback: null };
              obj[0] = outer1_0(outer1_2[3]).runOnJS;
              obj[1] = closure_9;
              fn.__closure = obj;
              fn.__workletHash = 5242616772399;
              fn.__initData = outer1_18;
              const result2 = closure_5.set(outer1_0(outer1_2[3]).withDelay(1000, obj6.withTiming(-8, outer1_10, "respect-motion-settings", fn)));
              const obj5 = outer1_0(outer1_2[3]);
            }
          };
          obj = { opacity: null, withDelay: null, withTiming: null, OPACITY_OUT_CONFIG: null, scale: null, SCALE_CONFIG: null, right: null, TRANSLATE_OUT_CONFIG: null, runOnJS: null, finishAnimationCallback: null };
          obj[0] = c7;
          tmp32 = user;
          tmp33 = onAddSuggestion;
          obj[1] = user(onAddSuggestion[3]).withDelay;
          tmp34 = user;
          tmp35 = onAddSuggestion;
          obj[2] = user(onAddSuggestion[7]).withTiming;
          tmp36 = c8;
          obj[3] = c8;
          obj[4] = c6;
          obj[5] = c9;
          obj[6] = c5;
          tmp37 = outer1_10;
          obj[7] = outer1_10;
          tmp38 = user;
          tmp39 = onAddSuggestion;
          obj[8] = user(onAddSuggestion[3]).runOnJS;
          tmp40 = c9;
          obj[9] = c9;
          fn.__closure = obj;
          num7 = 9570116008915;
          fn.__workletHash = 9570116008915;
          tmp41 = outer1_17;
          fn.__initData = outer1_17;
          str = "respect-motion-settings";
          num8 = 12;
          tmp42 = obj5;
          tmp43 = fn;
          result3 = c5.set(obj5.withSpring(12, outer1_11, "respect-motion-settings", fn));
        } else {
          tmp6 = c8;
          num = 1;
          result4 = c8.set(1);
          tmp8 = c6;
          num2 = 0.5;
          result5 = c6.set(0.5);
          tmp10 = c7;
          num3 = 0;
          result6 = c7.set(0);
          tmp12 = c5;
          num4 = 30;
          result7 = c5.set(30);
        }
      } else {
        tmp = user;
        tmp2 = onAddSuggestion;
        obj = user(onAddSuggestion[3]);
        tmp3 = c9;
        tmp4 = obj.runOnJS(c9)();
      }
      return;
    }
  }
  obj = { animate, runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback: callback, scale: sharedValue1, withTiming: user(onAddSuggestion[7]).withTiming, SCALE_CONFIG: callback, opacity: sharedValue2, OPACITY_CONFIG: sharedValue2, buttonOpacity: sharedValue3, right: sharedValue, withSpring: user(onAddSuggestion[8]).withSpring, SPRING_CONFIG: closure_11, withDelay: user(onAddSuggestion[3]).withDelay, OPACITY_OUT_CONFIG: sharedValue3, TRANSLATE_OUT_CONFIG: obj1 };
  D.__closure = obj;
  D.__workletHash = 6602847520399;
  D.__initData = closure_16;
  const animatedReaction = user(onAddSuggestion[3]).useAnimatedReaction(fn2, D);
  obj = { children: null };
  obj1 = { pointerEvents: "none", style: items2, children: null };
  items2 = [tmp.icon, animatedStyle];
  obj2 = { source: null, color: null };
  obj2[0] = added(onAddSuggestion[10]);
  obj2[1] = tmp.icon.color;
  obj1[2] = sharedValue(user(onAddSuggestion[9]).Icon, obj2);
  const items3 = [sharedValue(added(onAddSuggestion[3]).View, obj1), ];
  obj3 = { style: animatedStyle1, children: null };
  obj4 = { variant: "secondary", size: str, grow: false, text: null, onPress: null };
  const intl = user(onAddSuggestion[12]).intl;
  obj4[3] = intl.string(user(onAddSuggestion[12]).t.OYkgVk);
  obj4[4] = callback1;
  obj3[1] = sharedValue(user(onAddSuggestion[11]).Button, obj4);
  items3[1] = sharedValue(added(onAddSuggestion[3]).View, obj3);
  obj[0] = items3;
  return sharedValue1(animate, obj);
};