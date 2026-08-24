// === Module 15990: IncomingRequestRowActions ===

// Module 15990 (IncomingRequestRowActions)
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row" } });
let closure_8 = { code: "function IncomingRequestRowActionsTsx1(){const{animate,pressed,withTiming}=this.__closure;return{position:'absolute',right:0,flexDirection:'row',opacity:!animate?!pressed.get()?1:0:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}" };
let closure_9 = { code: "function IncomingRequestRowActionsTsx2(){const{buttonWidth,buttonOffsetX,pressed,animate,withTiming}=this.__closure;const width=buttonWidth.get();const offset=buttonOffsetX.get();const scaleX=!pressed.get()?0.5:1;const translateX=!pressed.get()?width-offset:0;return{transform:[{translateX:!animate?translateX:withTiming(translateX)},{scaleX:!animate?scaleX:withTiming(scaleX)}],opacity:!animate?!pressed.get()?0:1:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}" };
let closure_10 = { code: "function IncomingRequestRowActionsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}" };
let closure_11 = { code: "function IncomingRequestRowActionsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}" };
let closure_12 = { code: "function IncomingRequestRowActionsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx");

export const IncomingRequestRowActions = function IncomingRequestRowActions(user) {
  user = user.user;
  const applicationId = user.applicationId;
  const pressed = user.pressed;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const animate = user.animate;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  ({ acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel } = user);
  let obj = user(pressed[4]);
  sharedValue = obj.useSharedValue(0);
  obj1 = user(pressed[4]);
  sharedValue1 = obj1.useSharedValue(-1);
  let obj2 = user(pressed[4]);
  sharedValue2 = obj2.useSharedValue(-1);
  let obj3 = user(pressed[4]);
  sharedValue3 = obj3.useSharedValue(-1);
  let obj4 = user(pressed[4]);
  class E {
    constructor() {
      if (animate) {
        tmp = user;
        tmp2 = pressed;
        obj2 = user(pressed[5]);
        tmp3 = pressed;
        num2 = 1;
        if (pressed.get()) {
          num2 = 0;
        }
        num = obj2.withTiming(num2, { duration: 150 });
        obj = tmp3;
      } else {
        obj = pressed;
        num = 1;
        if (pressed.get()) {
          num = 0;
        }
      }
      obj = { position: "absolute", right: 0, flexDirection: "row", opacity: num, pointerEvents: null };
      str = "auto";
      if (obj.get()) {
        str = "none";
      }
      obj[4] = str;
      return obj;
    }
  }
  obj = { animate, pressed, withTiming: user(pressed[5]).withTiming };
  E.__closure = obj;
  E.__workletHash = 1291516991185;
  E.__initData = sharedValue2;
  const animatedStyle = obj4.useAnimatedStyle(E);
  let obj6 = user(pressed[4]);
  const fn = function q() {
    let value = sharedValue1.get();
    let obj = pressed;
    value = sharedValue.get();
    let num = 0.5;
    if (pressed.get()) {
      num = 1;
    }
    let num2 = 0;
    if (!obj.get()) {
      num2 = value - value;
    }
    let withTimingResult = num2;
    if (animate) {
      withTimingResult = user(pressed[5]).withTiming(num2);
      const obj2 = user(pressed[5]);
    }
    const items = [{ translateX: withTimingResult }, ];
    let withTimingResult1 = num;
    if (animate) {
      withTimingResult1 = user(pressed[5]).withTiming(num);
      const obj3 = user(pressed[5]);
    }
    obj = { transform: items, opacity: null, pointerEvents: null };
    items[1] = { scaleX: withTimingResult1 };
    if (animate) {
      let num4 = 0;
      if (obj.get()) {
        num4 = 1;
      }
      let num3 = user(pressed[5]).withTiming(num4);
      const obj5 = user(pressed[5]);
    } else {
      num3 = 0;
      if (obj.get()) {
        num3 = 1;
      }
    }
    obj[1] = num3;
    let str = "none";
    if (obj.get()) {
      str = "auto";
    }
    obj[2] = str;
    return obj;
  };
  obj = { buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[5]).withTiming };
  fn.__closure = obj;
  fn.__workletHash = 2207673076655;
  fn.__initData = sharedValue3;
  const animatedStyle1 = obj6.useAnimatedStyle(fn);
  let obj8 = user(pressed[4]);
  const fn2 = function x() {
    let obj = { transform: null };
    obj = { translateX: sharedValue2.get() / 2 };
    const items = [obj, ];
    obj = { translateY: sharedValue3.get() / 2 };
    items[1] = obj;
    obj[0] = items;
    return obj;
  };
  fn2.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
  fn2.__workletHash = 4308223742756;
  fn2.__initData = closure_10;
  const animatedStyle2 = obj8.useAnimatedStyle(fn2);
  let obj9 = user(pressed[4]);
  class A {
    constructor() {
      tmp = user;
      tmp2 = pressed;
      obj = user(pressed[4]);
      obj2 = user(pressed[4]);
      obj3 = user(pressed[5]);
      str = "-2deg";
      if (pressed.get()) {
        str = "8deg";
      }
      obj = { transform: null };
      obj1 = { rotateZ: null };
      obj2 = { duration: 150, easing: null };
      Easing = tmp(tmp2[4]).Easing;
      obj2[1] = Easing.inOut(tmp(tmp2[4]).Easing.quad);
      obj1[0] = obj.withDelay(450, obj2.withRepeat(obj3.withTiming(str, obj2), 4, true));
      items = [, , ];
      items[0] = obj1;
      obj3 = { translateX: -closure_8.get() / 2 };
      items[1] = obj3;
      obj4 = { translateY: -closure_9.get() / 2 };
      items[2] = obj4;
      obj[0] = items;
      return obj;
    }
  }
  obj1 = { withDelay: user(pressed[4]).withDelay, withRepeat: user(pressed[4]).withRepeat, withTiming: user(pressed[5]).withTiming, pressed, Easing: user(pressed[4]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
  A.__closure = obj1;
  A.__workletHash = 6870822621980;
  A.__initData = closure_11;
  const animatedStyle3 = obj9.useAnimatedStyle(A);
  const tmp = sharedValue1();
  const tmp2 = user;
  class X {
    constructor() {
      value = pressed.get();
      return { pointerEvents: "none" };
    }
  }
  X.__closure = { pressed };
  X.__workletHash = 5804402563280;
  X.__initData = closure_12;
  const animatedProps = user(pressed[4]).useAnimatedProps(X);
  let items = [applicationId, onAcceptIncomingRequest, pressed, user];
  const items1 = [applicationId, onDeclineIncomingRequest, user];
  const callback = onAcceptIncomingRequest.useCallback(() => {
    const result = pressed.set(true);
    let obj = user(pressed[6]);
    obj = { userId: user.id, applicationId };
    const result1 = obj.acceptIncomingRequest(obj);
    onAcceptIncomingRequest(user.id, applicationId);
  }, items);
  const items2 = [user];
  const callback1 = onAcceptIncomingRequest.useCallback(() => {
    onDeclineIncomingRequest(user.id, applicationId);
    let obj = user(pressed[6]);
    obj = { userId: user.id, applicationId };
    const result = obj.dismissIncomingRequest(obj);
  }, items1);
  obj2 = { style: tmp.container, children: null };
  const callback2 = onAcceptIncomingRequest.useCallback(() => {
    user(pressed[6]).sendWave(user.id, true, "Incoming Friend Request");
  }, items2);
  obj3 = {
    onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    },
    style: animatedStyle,
    children: null
  };
  obj4 = { direction: "horizontal", spacing: 8, children: null };
  const obj12 = user(pressed[4]);
  const tmp16 = sharedValue;
  const tmp17 = onDeclineIncomingRequest;
  const tmp19 = applicationId;
  const items3 = [animate(user(pressed[8]).IconButton, { size: "sm", variant: "tertiary", icon: applicationId(pressed[9]), onPress: callback1, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 }), ];
  obj6 = { size: "sm", variant: "active", icon: applicationId(pressed[10]), onPress: callback, accessibilityLabel: acceptRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  items3[1] = animate(user(pressed[8]).IconButton, obj6);
  obj4[2] = items3;
  obj3[2] = sharedValue(user(pressed[7]).Stack, obj4);
  const items4 = [animate(applicationId(pressed[4]).View, obj3), ];
  const obj7 = {
    style: animatedStyle1,
    onLayout(nativeEvent) {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  const merged = Object.assign(animatedProps);
  obj8 = { size: "sm", variant: "secondary", text: null, icon: null, onPress: null };
  const intl = user(pressed[12]).intl;
  obj8[2] = intl.string(user(pressed[12]).t.n8nU4W);
  let tmp21 = null;
  if (animate) {
    tmp21 = animatedStyle2;
  }
  obj9 = { style: tmp21, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  let tmp22 = null;
  if (animate) {
    tmp22 = animatedStyle3;
  }
  let obj5 = { size: "sm", variant: "tertiary", icon: applicationId(pressed[9]), onPress: callback1, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  obj9[3] = animate(tmp19(pressed[4]).View, {
    style: tmp22,
    onLayout(nativeEvent) {
      const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
      const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
    },
    children: animate(tmp2(pressed[13]).Text, { maxFontSizeMultiplier: 2, variant: "text-sm/normal", children: "\u{1F44B}" })
  });
  obj8[3] = animate(applicationId(pressed[4]).View, obj9);
  obj8[4] = callback2;
  obj7.children = animate(user(pressed[11]).Button, obj8);
  items4[1] = animate(applicationId(pressed[4]).View, obj7);
  obj2[1] = items4;
  return tmp16(tmp17, obj2);
};