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
const Easing = fn(4296).Easing;
obj.easing = Easing.in(fn(4296).Easing.quad);
obj = { duration: 250, easing: null };
const Easing2 = fn(4296).Easing;
obj.easing = Easing2.in(fn(4296).Easing.quad);
obj = { duration: 250, easing: null };
const Easing3 = fn(4296).Easing;
obj.easing = Easing3.in(fn(4296).Easing.quad);
let obj1 = { duration: 250, easing: null };
const Easing4 = fn(4296).Easing;
obj1.easing = Easing4.out(fn(4296).Easing.quad);
const SPRING_CONFIG = { mass: 1, stiffness: 172, damping: 17.3 };
const createStyles = fn(4560);
let obj2 = {
  icon: { position: "absolute", top: 4, zIndex: 2, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, opacity: 0 },
};
let closure_12 = createStyles.createStyles(obj2);
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
  code: "function ContactSuggestionActionsTsx4(added){const{animate,runOnJS,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG}=this.__closure;if(!animate){runOnJS(finishAnimationCallback)();return;}if(added){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,'respect-motion-settings',function(finished){if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}}",
};
const __initData5 = {
  code: "function ContactSuggestionActionsTsx5(finished){const{opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,runOnJS,finishAnimationCallback}=this.__closure;if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}",
};
let closure_18 = {
  code: "function ContactSuggestionActionsTsx6(finished){const{runOnJS,finishAnimationCallback}=this.__closure;if(finished)runOnJS(finishAnimationCallback)();}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx");

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
  const tmp = closure_12();
  let __closure = user(onAddSuggestion[3]);
  const sharedValue = __closure.useSharedValue(30);
  let obj1 = user(onAddSuggestion[3]);
  const sharedValue1 = obj1.useSharedValue(0.5);
  let obj2 = user(onAddSuggestion[3]);
  const sharedValue2 = obj2.useSharedValue(0);
  let obj3 = user(onAddSuggestion[3]);
  const sharedValue3 = obj3.useSharedValue(1);
  let items = [onFinishAnimation, user];
  const SCALE_CONFIG = onFinishAnimation.useCallback(() => {
    if (null != onFinishAnimation) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        onFinishAnimation(user);
      }, 1000);
    }
  }, items);
  let obj4 = user(onAddSuggestion[3]);
  let fn = function b() {
    obj = { right: sharedValue.get(), opacity: sharedValue2.get(), transform: null };
    obj = { scale: sharedValue1.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { right: sharedValue, opacity: sharedValue2, scale: sharedValue1 };
  fn.__workletHash = 13774422449074;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  class E {
    constructor() {
      obj = { opacity: closure_8.get() };
      return obj;
    }
  }
  E.__closure = { buttonOpacity: sharedValue3 };
  E.__workletHash = 4378005846847;
  E.__initData = __initData2;
  const items1 = [onAddSuggestion, user, added, animate, sharedValue, sharedValue2, sharedValue1, sharedValue3];
  const animatedStyle1 = user(onAddSuggestion[3]).useAnimatedStyle(E);
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
  fn2.__workletHash = 15816115253403;
  fn2.__initData = __initData3;
  class D {
    constructor(arg0) {
      if (animate) {
        tmp5 = user;
        if (user) {
          tmp14 = closure_6;
          tmp15 = closure_0;
          tmp16 = closure_2;
          obj2 = closure_0(closure_2[7]);
          tmp17 = closure_9;
          num5 = 1;
          result = closure_6.set(obj2.withTiming(1, closure_9));
          tmp19 = closure_7;
          tmp20 = closure_0;
          tmp21 = closure_2;
          obj3 = closure_0(closure_2[7]);
          tmp22 = closure_7;
          result1 = closure_7.set(obj3.withTiming(1, closure_7));
          tmp24 = closure_8;
          tmp25 = closure_0;
          tmp26 = closure_2;
          obj4 = closure_0(closure_2[7]);
          num6 = 0;
          result2 = closure_8.set(obj4.withTiming(0, closure_7));
          tmp28 = closure_5;
          tmp29 = closure_0;
          tmp30 = closure_2;
          obj5 = closure_0(closure_2[8]);
          tmp31 = closure_11;
          fn = function n(arg0) {
            if (arg0) {
              let __closure = user(onAddSuggestion[3]);
              const result = sharedValue2.set(
                __closure.withDelay(1000, user(onAddSuggestion[7]).withTiming(0, sharedValue3)),
              );
              const obj2 = user(onAddSuggestion[7]);
              const obj3 = user(onAddSuggestion[3]);
              const result1 = sharedValue1.set(
                obj3.withDelay(1000, user(onAddSuggestion[7]).withTiming(0.5, callback)),
              );
              const obj4 = user(onAddSuggestion[7]);
              const obj6 = user(onAddSuggestion[7]);
              const fn = function n(arg0) {
                if (arg0) {
                  user(onAddSuggestion[3]).runOnJS(finishAnimationCallback)();
                  obj = user(onAddSuggestion[3]);
                }
              };
              __closure = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
              fn.__closure = __closure;
              fn.__workletHash = 5242616772399;
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
          obj = {
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
          obj.opacity = closure_7;
          tmp32 = closure_0;
          tmp33 = closure_2;
          obj.withDelay = closure_0(closure_2[3]).withDelay;
          tmp34 = closure_0;
          tmp35 = closure_2;
          obj.withTiming = closure_0(closure_2[7]).withTiming;
          tmp36 = closure_8;
          obj.OPACITY_OUT_CONFIG = closure_8;
          obj.scale = closure_6;
          obj.SCALE_CONFIG = closure_9;
          obj.right = closure_5;
          tmp37 = closure_10;
          obj.TRANSLATE_OUT_CONFIG = closure_10;
          tmp38 = closure_0;
          tmp39 = closure_2;
          obj.runOnJS = closure_0(closure_2[3]).runOnJS;
          tmp40 = closure_9;
          obj.finishAnimationCallback = closure_9;
          fn.__closure = obj;
          num7 = 9570116008915;
          fn.__workletHash = 9570116008915;
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
        tmp3 = closure_9;
        tmp4 = obj.runOnJS(closure_9)();
      }
      return;
    }
  }
  __closure = {
    animate,
    runOnJS: user(onAddSuggestion[3]).runOnJS,
    finishAnimationCallback: SCALE_CONFIG,
    scale: sharedValue1,
    withTiming: user(onAddSuggestion[7]).withTiming,
    SCALE_CONFIG,
    opacity: sharedValue2,
    OPACITY_CONFIG: sharedValue2,
    buttonOpacity: sharedValue3,
    right: sharedValue,
    withSpring: user(onAddSuggestion[8]).withSpring,
    SPRING_CONFIG,
    withDelay: user(onAddSuggestion[3]).withDelay,
    OPACITY_OUT_CONFIG: sharedValue3,
    TRANSLATE_OUT_CONFIG: obj1,
  };
  D.__closure = __closure;
  D.__workletHash = 6602847520399;
  D.__initData = __initData4;
  const animatedReaction = user(onAddSuggestion[3]).useAnimatedReaction(fn2, D);
  __closure = { children: null };
  obj1 = { pointerEvents: "none", style: null, children: null };
  const items2 = [tmp.icon, animatedStyle];
  obj1.style = items2;
  obj2 = { source: added(onAddSuggestion[10]), color: tmp.icon.color };
  obj1.children = sharedValue(user(onAddSuggestion[9]).Icon, obj2);
  const items3 = [sharedValue(added(onAddSuggestion[3]).View, obj1)];
  obj3 = { style: animatedStyle1, children: null };
  obj4 = { variant: "secondary", size: str, grow: false, text: null, onPress: null };
  const intl = user(onAddSuggestion[12]).intl;
  obj4.text = intl.string(user(onAddSuggestion[12]).t.OYkgVk);
  obj4.onPress = callback1;
  obj3.children = sharedValue(user(onAddSuggestion[11]).Button, obj4);
  items3[1] = sharedValue(added(onAddSuggestion[3]).View, obj3);
  __closure.children = items3;
  return sharedValue1(animate, __closure);
};
