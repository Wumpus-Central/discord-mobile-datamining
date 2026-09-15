// === Module 16922: IncomingRequestRowActions ===

// Module 16922 (IncomingRequestRowActions)
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import timing from "timing" /* 4640 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 16154 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row" } });
let closure_8 = { code: "function IncomingRequestRowActionsTsx1(){const{animate,pressed,withTiming}=this.__closure;return{position:'absolute',right:0,flexDirection:'row',opacity:!animate?!pressed.get()?1:0:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}" };
let closure_9 = { code: "function IncomingRequestRowActionsTsx2(){const{buttonWidth,buttonOffsetX,pressed,animate,withTiming}=this.__closure;const width=buttonWidth.get();const offset=buttonOffsetX.get();const scaleX=!pressed.get()?0.5:1;const translateX=!pressed.get()?width-offset:0;return{transform:[{translateX:!animate?translateX:withTiming(translateX)},{scaleX:!animate?scaleX:withTiming(scaleX)}],opacity:!animate?!pressed.get()?0:1:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}" };
const __initData = { code: "function IncomingRequestRowActionsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}" };
const __initData2 = { code: "function IncomingRequestRowActionsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}" };
const __initData3 = { code: "function IncomingRequestRowActionsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx");

export const IncomingRequestRowActions = function IncomingRequestRowActions(user) {
  user = user.user;
  const applicationId = user.applicationId;
  const pressed = user.pressed;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const animate = user.animate;
  let sharedValue1;
  ({ acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel } = user);
  const tmp = sharedValue1();
  const tmp2 = user;
  const sharedValue = user(pressed[4]).useSharedValue(0);
  let obj = user(pressed[4]);
  sharedValue1 = user(pressed[4]).useSharedValue(-1);
  let obj2 = user(pressed[4]);
  const sharedValue2 = user(pressed[4]).useSharedValue(-1);
  let obj3 = user(pressed[4]);
  const sharedValue3 = user(pressed[4]).useSharedValue(-1);
  let obj4 = user(pressed[4]);
  class E {
    constructor() {
      if (animate) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[5]);
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
      obj1 = { position: "absolute", right: 0, flexDirection: "row", opacity: num, pointerEvents: null };
      str = "auto";
      if (obj.get()) {
        str = "none";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  let obj5 = user(pressed[4]);
  E.__closure = { animate, pressed, withTiming: user(pressed[5]).withTiming };
  E.__workletHash = 1291516991185;
  E.__initData = sharedValue2;
  const animatedStyle = obj5.useAnimatedStyle(E);
  let obj6 = { animate, pressed, withTiming: user(pressed[5]).withTiming };
  const fn = function q() {
    value = sharedValue1.get();
    value2 = sharedValue.get();
    let num = 0.5;
    if (pressed.get()) {
      num = 1;
    }
    let num2 = 0;
    if (!pressed.get()) {
      num2 = value - value2;
    }
    let withTimingResult = num2;
    if (animate) {
      withTimingResult = timing.withTiming(num2);
    }
    const items = [{ translateX: withTimingResult }, ];
    let withTimingResult1 = num;
    if (animate) {
      withTimingResult1 = timing.withTiming(num);
    }
    const obj4 = { transform: items, opacity: null, pointerEvents: null };
    items[1] = { scaleX: withTimingResult1 };
    if (animate) {
      let num4 = 0;
      if (pressed.get()) {
        num4 = 1;
      }
      let num3 = timing.withTiming(num4);
    } else {
      num3 = 0;
      if (pressed.get()) {
        num3 = 1;
      }
    }
    obj4.opacity = num3;
    let str = "none";
    if (pressed.get()) {
      str = "auto";
    }
    obj4.pointerEvents = str;
    return obj4;
  };
  let obj7 = user(pressed[4]);
  fn.__closure = { buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[5]).withTiming };
  fn.__workletHash = 2207673076655;
  fn.__initData = sharedValue3;
  const animatedStyle1 = obj7.useAnimatedStyle(fn);
  const obj8 = { buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[5]).withTiming };
  const fn2 = function x() {
    const obj = { transform: null };
    const items = [{ translateX: sharedValue2.get() / 2 }, ];
    const obj2 = { translateX: sharedValue2.get() / 2 };
    items[1] = { translateY: sharedValue3.get() / 2 };
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
  fn2.__workletHash = 4308223742756;
  fn2.__initData = __initData;
  const animatedStyle2 = user(pressed[4]).useAnimatedStyle(fn2);
  const obj9 = user(pressed[4]);
  class A {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[4]);
      obj2 = closure_0(closure_2[4]);
      obj3 = closure_0(closure_2[5]);
      str = "-2deg";
      if (pressed.get()) {
        str = "8deg";
      }
      obj1 = { transform: null };
      obj9 = { rotateZ: null };
      obj10 = { duration: 150, easing: null };
      Easing = tmp(tmp2[4]).Easing;
      obj10.easing = Easing.inOut(tmp(tmp2[4]).Easing.quad);
      obj9.rotateZ = obj.withDelay(450, obj2.withRepeat(obj3.withTiming(str, obj10), 4, true));
      items = [, , ];
      items[0] = obj9;
      obj11 = { translateX: -closure_8.get() / 2 };
      items[1] = obj11;
      obj12 = { translateY: -closure_9.get() / 2 };
      items[2] = obj12;
      obj1.transform = items;
      return obj1;
    }
  }
  const obj10 = user(pressed[4]);
  A.__closure = { withDelay: user(pressed[4]).withDelay, withRepeat: user(pressed[4]).withRepeat, withTiming: user(pressed[5]).withTiming, pressed, Easing: user(pressed[4]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
  A.__workletHash = 6870822621980;
  A.__initData = __initData2;
  const animatedStyle3 = obj10.useAnimatedStyle(A);
  const obj11 = { withDelay: user(pressed[4]).withDelay, withRepeat: user(pressed[4]).withRepeat, withTiming: user(pressed[5]).withTiming, pressed, Easing: user(pressed[4]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
  class X {
    constructor() {
      value = pressed.get();
      return { pointerEvents: "none" };
    }
  }
  X.__closure = { pressed };
  X.__workletHash = 5804402563280;
  X.__initData = __initData3;
  const animatedProps = user(pressed[4]).useAnimatedProps(X);
  let items = [applicationId, onAcceptIncomingRequest, pressed, user];
  const items1 = [applicationId, onDeclineIncomingRequest, user];
  const callback = onAcceptIncomingRequest.useCallback(() => {
    const result = pressed.set(true);
    const result1 = AddFriendsScreenUtils.acceptIncomingRequest({ userId: user.id, applicationId });
    onAcceptIncomingRequest(user.id, applicationId);
  }, items);
  const items2 = [user];
  const callback1 = onAcceptIncomingRequest.useCallback(() => {
    onDeclineIncomingRequest(user.id, applicationId);
    const result = AddFriendsScreenUtils.dismissIncomingRequest({ userId: user.id, applicationId });
  }, items1);
  const obj13 = { style: tmp.container, children: null };
  const callback2 = onAcceptIncomingRequest.useCallback(() => {
    AddFriendsScreenUtils.sendWave(user.id, true, "Incoming Friend Request");
  }, items2);
  const obj14 = {
    onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    },
    style: animatedStyle,
    children: null
  };
  const obj15 = { direction: "horizontal", spacing: 8, children: null };
  const obj12 = user(pressed[4]);
  const tmp16 = sharedValue;
  const tmp17 = onDeclineIncomingRequest;
  const tmp19 = applicationId;
  const items3 = [animate(user(pressed[8]).IconButton, { size: "sm", variant: "tertiary", icon: applicationId(pressed[9]), onPress: callback1, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 }), ];
  const obj16 = { size: "sm", variant: "tertiary", icon: applicationId(pressed[9]), onPress: callback1, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  items3[1] = animate(user(pressed[8]).IconButton, { size: "sm", variant: "active", icon: applicationId(pressed[10]), onPress: callback, accessibilityLabel: acceptRequestAccessibilityLabel, maxFontSizeMultiplier: 2 });
  obj15.children = items3;
  obj14.children = sharedValue(user(pressed[7]).Stack, obj15);
  const items4 = [animate(applicationId(pressed[4]).View, obj14), ];
  const obj18 = {
    style: animatedStyle1,
    onLayout(nativeEvent) {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  const merged = Object.assign(animatedProps);
  const obj19 = { size: "sm", variant: "secondary", text: null, icon: null, onPress: null };
  const intl = user(pressed[12]).intl;
  obj19.text = intl.string(user(pressed[12]).t.n8nU4W);
  let tmp21 = null;
  if (animate) {
    tmp21 = animatedStyle2;
  }
  const obj20 = { style: tmp21, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  let tmp22 = null;
  if (animate) {
    tmp22 = animatedStyle3;
  }
  const obj17 = { size: "sm", variant: "active", icon: applicationId(pressed[10]), onPress: callback, accessibilityLabel: acceptRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  obj20.children = animate(tmp19(pressed[4]).View, {
    style: tmp22,
    onLayout(nativeEvent) {
      const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
      const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
    },
    children: animate(tmp2(pressed[13]).Text, { maxFontSizeMultiplier: 2, variant: "text-sm/normal", children: "\u{1F44B}" })
  });
  obj19.icon = animate(applicationId(pressed[4]).View, obj20);
  obj19.onPress = callback2;
  obj18.children = animate(user(pressed[11]).Button, obj19);
  items4[1] = animate(applicationId(pressed[4]).View, obj18);
  obj13.children = items4;
  return tmp16(tmp17, obj13);
};