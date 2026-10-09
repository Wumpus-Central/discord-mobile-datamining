// === Module 17397: IncomingRequestRowActions ===

// Module 17397 (IncomingRequestRowActions)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 16389 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row" } });
let closure_8 = { code: "function IncomingRequestRowActionsTsx1(){const{animate,pressed,withTiming}=this.__closure;return{position:\"absolute\",right:0,flexDirection:\"row\",opacity:!animate?!pressed.get()?1:0:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?\"auto\":\"none\"};}" };
let closure_9 = { code: "function IncomingRequestRowActionsTsx2(){const{buttonWidth,buttonOffsetX,pressed,animate,withTiming}=this.__closure;const width=buttonWidth.get();const offset=buttonOffsetX.get();const scaleX=!pressed.get()?0.5:1;const translateX=!pressed.get()?width-offset:0;return{transform:[{translateX:!animate?translateX:withTiming(translateX)},{scaleX:!animate?scaleX:withTiming(scaleX)}],opacity:!animate?!pressed.get()?0:1:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?\"none\":\"auto\"};}" };
const __initData = { code: "function IncomingRequestRowActionsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}" };
const __initData2 = { code: "function IncomingRequestRowActionsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?\"8deg\":\"-2deg\",{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}" };
const __initData3 = { code: "function IncomingRequestRowActionsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?\"none\":\"none\"};}" };
const __initData4 = { code: "function IncomingRequestRowActionsTsx6(){const{animate,pressed,withTiming}=this.__closure;return{position:'absolute',right:0,flexDirection:'row',opacity:!animate?!pressed.get()?1:0:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}" };
const __initData5 = { code: "function IncomingRequestRowActionsTsx7(){const{buttonWidth,buttonOffsetX,pressed,animate,withTiming}=this.__closure;const width=buttonWidth.get();const offset=buttonOffsetX.get();const scaleX=!pressed.get()?0.5:1;const translateX=!pressed.get()?width-offset:0;return{transform:[{translateX:!animate?translateX:withTiming(translateX)},{scaleX:!animate?scaleX:withTiming(scaleX)}],opacity:!animate?!pressed.get()?0:1:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}" };
const __initData6 = { code: "function IncomingRequestRowActionsTsx8(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}" };
const __initData7 = { code: "function IncomingRequestRowActionsTsx9(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}" };
const __initData8 = { code: "function IncomingRequestRowActionsTsx10(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx");

export const IncomingRequestRowActions = ReactCompilerGating.isReactCompilerEnabled() ? (function IncomingRequestRowActions(user) {
  const cResult = user(pressed[5]).c(51);
  user = user.user;
  const applicationId = user.applicationId;
  pressed = user.pressed;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const animate = user.animate;
  ({ acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel } = user);
  sharedValue1();
  let obj = user(pressed[5]);
  const sharedValue = user(pressed[6]).useSharedValue(0);
  let obj2 = user(pressed[6]);
  sharedValue1 = user(pressed[6]).useSharedValue(-1);
  let obj3 = user(pressed[6]);
  const sharedValue2 = user(pressed[6]).useSharedValue(-1);
  let obj4 = user(pressed[6]);
  const sharedValue3 = user(pressed[6]).useSharedValue(-1);
  let obj5 = user(pressed[6]);
  const fn = function s() {
    if (animate) {
      let num2 = 1;
      if (pressed.get()) {
        num2 = 0;
      }
      let num = timing.withTiming(num2, { duration: 150 });
      let obj = pressed;
    } else {
      obj = pressed;
      num = 1;
      if (pressed.get()) {
        num = 0;
      }
    }
    const obj3 = { position: "absolute", right: 0, flexDirection: "row", opacity: num, pointerEvents: null };
    let str = "auto";
    if (obj.get()) {
      str = "none";
    }
    obj3.pointerEvents = str;
    return obj3;
  };
  let obj6 = user(pressed[6]);
  fn.__closure = { animate, pressed, withTiming: user(pressed[7]).withTiming };
  fn.__workletHash = 11673769575857;
  fn.__initData = sharedValue2;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  let obj7 = { animate, pressed, withTiming: user(pressed[7]).withTiming };
  const fn2 = function v() {
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
  const obj8 = user(pressed[6]);
  fn2.__closure = { buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[7]).withTiming };
  fn2.__workletHash = 3044151965103;
  fn2.__initData = sharedValue3;
  const animatedStyle1 = obj8.useAnimatedStyle(fn2);
  const obj9 = { buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[7]).withTiming };
  const fn3 = function y() {
    const obj = { transform: null };
    const items = [{ translateX: sharedValue2.get() / 2 }, ];
    const obj2 = { translateX: sharedValue2.get() / 2 };
    items[1] = { translateY: sharedValue3.get() / 2 };
    obj.transform = items;
    return obj;
  };
  fn3.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
  fn3.__workletHash = 4308223742756;
  fn3.__initData = __initData;
  const animatedStyle2 = user(pressed[6]).useAnimatedStyle(fn3);
  const obj10 = user(pressed[6]);
  const fn4 = function f() {
    const obj = ReanimatedRexport;
    const obj2 = ReanimatedRexport;
    let str = "-2deg";
    if (pressed.get()) {
      str = "8deg";
    }
    const obj4 = { transform: null };
    const obj5 = { rotateZ: null };
    const obj6 = { duration: 150, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj6.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
    obj5.rotateZ = obj.withDelay(450, obj2.withRepeat(timing.withTiming(str, obj6), 4, true));
    const items = [obj5, , ];
    items[1] = { translateX: -sharedValue2.get() / 2 };
    const obj7 = { translateX: -sharedValue2.get() / 2 };
    items[2] = { translateY: -sharedValue3.get() / 2 };
    obj4.transform = items;
    return obj4;
  };
  const obj11 = user(pressed[6]);
  fn4.__closure = { withDelay: user(pressed[6]).withDelay, withRepeat: user(pressed[6]).withRepeat, withTiming: user(pressed[7]).withTiming, pressed, Easing: user(pressed[6]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
  fn4.__workletHash = 1636951272316;
  fn4.__initData = __initData2;
  const animatedStyle3 = obj11.useAnimatedStyle(fn4);
  if (cResult[0] !== sharedValue) {
    function handleIconButtonsLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    }
    cResult[0] = sharedValue;
    cResult[1] = handleIconButtonsLayout;
  }
  if (cResult[2] !== sharedValue1) {
    function handleButtonsLayout(nativeEvent) {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    }
    cResult[2] = sharedValue1;
    cResult[3] = handleButtonsLayout;
  }
  if (cResult[4] === sharedValue3) {
    class C {
      constructor() {
        value = pressed.get();
        return { pointerEvents: "none" };
      }
    }
    const obj13 = { pressed };
    C.__closure = obj13;
    C.__workletHash = 10432347200848;
    C.__initData = __initData3;
    const animatedProps = tmp(tmp2[6]).useAnimatedProps(C);
    if (cResult[7] === applicationId) {
      if (cResult[8] === onAcceptIncomingRequest) {
        if (cResult[9] === pressed) {
          if (cResult[12] === applicationId) {
            if (cResult[13] === onDeclineIncomingRequest) {
              if (cResult[14] === user.id) {
                let tmp19 = cResult[15];
              }
              if (cResult[16] !== user.id) {
                class K {
                  constructor() {
                    obj = closure_0(closure_2[8]);
                    sendWaveResult = obj.sendWave(user.id, true, "Incoming Friend Request");
                    return;
                  }
                }
                class G {
                  constructor() {
                    tmp = onDeclineIncomingRequest(user.id, applicationId);
                    obj = closure_0(closure_2[8]);
                    obj1 = { userId: user.id, applicationId };
                    result = obj.dismissIncomingRequest(obj1);
                    return;
                  }
                }
                cResult[17] = K;
              } else {
                class K {
                  constructor() {
                    obj = closure_0(closure_2[8]);
                    sendWaveResult = obj.sendWave(user.id, true, "Incoming Friend Request");
                    return;
                  }
                }
              }
              class G {
                constructor() {
                  tmp = onDeclineIncomingRequest(user.id, applicationId);
                  obj = closure_0(closure_2[8]);
                  obj1 = { userId: user.id, applicationId };
                  result = obj.dismissIncomingRequest(obj1);
                  return;
                }
              }
              const obj14 = { size: "sm", variant: "tertiary", icon: applicationId(tmp2[10]), onPress: tmp19, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
              const tmp24 = animate(tmp(tmp2[9]).IconButton, obj14);
              class Z {
                constructor() {
                  result = pressed.set(true);
                  obj = closure_0(closure_2[8]);
                  obj1 = { userId: user.id, applicationId };
                  result1 = obj.acceptIncomingRequest(obj1);
                  tmp3 = onAcceptIncomingRequest(user.id, applicationId);
                  return;
                }
              }
              cResult[19] = ignoreRequestAccessibilityLabel;
              cResult[20] = tmp24;
            }
          }
          class G {
            constructor() {
              tmp = onDeclineIncomingRequest(user.id, applicationId);
              obj = closure_0(closure_2[8]);
              obj1 = { userId: user.id, applicationId };
              result = obj.dismissIncomingRequest(obj1);
              return;
            }
          }
          cResult[12] = applicationId;
          cResult[13] = onDeclineIncomingRequest;
          cResult[14] = user.id;
          cResult[15] = G;
          tmp19 = G;
        }
      }
    }
    class Z {
      constructor() {
        result = pressed.set(true);
        obj = closure_0(closure_2[8]);
        obj1 = { userId: user.id, applicationId };
        result1 = obj.acceptIncomingRequest(obj1);
        tmp3 = onAcceptIncomingRequest(user.id, applicationId);
        return;
      }
    }
    cResult[7] = applicationId;
    cResult[8] = onAcceptIncomingRequest;
    cResult[9] = pressed;
    cResult[10] = user.id;
    cResult[11] = Z;
    const tmpResult = tmp(tmp2[6]);
  }
  function handleWaveLayout(nativeEvent) {
    const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
    const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
  }
  cResult[4] = sharedValue3;
  cResult[5] = sharedValue2;
  cResult[6] = handleWaveLayout;
  const obj12 = { withDelay: user(pressed[6]).withDelay, withRepeat: user(pressed[6]).withRepeat, withTiming: user(pressed[7]).withTiming, pressed, Easing: user(pressed[6]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
}) : (function IncomingRequestRowActions(user) {
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
  const sharedValue = user(pressed[6]).useSharedValue(0);
  let obj = user(pressed[6]);
  sharedValue1 = user(pressed[6]).useSharedValue(-1);
  let obj2 = user(pressed[6]);
  const sharedValue2 = user(pressed[6]).useSharedValue(-1);
  let obj3 = user(pressed[6]);
  const sharedValue3 = user(pressed[6]).useSharedValue(-1);
  let obj4 = user(pressed[6]);
  class E {
    constructor() {
      if (animate) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[7]);
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
  let obj5 = user(pressed[6]);
  E.__closure = { animate, pressed, withTiming: user(pressed[7]).withTiming };
  E.__workletHash = 5108795838134;
  E.__initData = __initData4;
  const animatedStyle = obj5.useAnimatedStyle(E);
  let obj6 = { animate, pressed, withTiming: user(pressed[7]).withTiming };
  class X {
    constructor() {
      value = closure_7.get();
      obj = pressed;
      value1 = closure_6.get();
      num = 0.5;
      if (pressed.get()) {
        num = 1;
      }
      num2 = 0;
      if (!obj.get()) {
        num2 = value - value1;
      }
      tmp3 = animate;
      withTimingResult = num2;
      if (animate) {
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj2 = closure_0(closure_2[7]);
        withTimingResult = obj2.withTiming(num2);
      }
      items = [, ];
      items[0] = { translateX: withTimingResult };
      withTimingResult1 = num;
      if (tmp3) {
        tmp8 = closure_0;
        tmp9 = closure_2;
        obj3 = closure_0(closure_2[7]);
        withTimingResult1 = obj3.withTiming(num);
      }
      obj1 = { transform: items, opacity: null, pointerEvents: null };
      items[1] = { scaleX: withTimingResult1 };
      if (tmp3) {
        tmp10 = closure_0;
        tmp11 = closure_2;
        obj5 = closure_0(closure_2[7]);
        num4 = 0;
        if (obj.get()) {
          num4 = 1;
        }
        num3 = obj5.withTiming(num4);
      } else {
        num3 = 0;
        if (obj.get()) {
          num3 = 1;
        }
      }
      obj1.opacity = num3;
      str = "none";
      if (obj.get()) {
        str = "auto";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  let obj7 = user(pressed[6]);
  X.__closure = { buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[7]).withTiming };
  X.__workletHash = 4700023686986;
  X.__initData = __initData5;
  const animatedStyle1 = obj7.useAnimatedStyle(X);
  const obj8 = { buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[7]).withTiming };
  const fn = function x() {
    const obj = { transform: null };
    const items = [{ translateX: sharedValue2.get() / 2 }, ];
    const obj2 = { translateX: sharedValue2.get() / 2 };
    items[1] = { translateY: sharedValue3.get() / 2 };
    obj.transform = items;
    return obj;
  };
  fn.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
  fn.__workletHash = 9813791597903;
  fn.__initData = __initData6;
  const animatedStyle2 = user(pressed[6]).useAnimatedStyle(fn);
  const obj9 = user(pressed[6]);
  const fn2 = function q() {
    const obj = ReanimatedRexport;
    const obj2 = ReanimatedRexport;
    let str = "-2deg";
    if (pressed.get()) {
      str = "8deg";
    }
    const obj4 = { transform: null };
    const obj5 = { rotateZ: null };
    const obj6 = { duration: 150, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj6.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
    obj5.rotateZ = obj.withDelay(450, obj2.withRepeat(timing.withTiming(str, obj6), 4, true));
    const items = [obj5, , ];
    items[1] = { translateX: -sharedValue2.get() / 2 };
    const obj7 = { translateX: -sharedValue2.get() / 2 };
    items[2] = { translateY: -sharedValue3.get() / 2 };
    obj4.transform = items;
    return obj4;
  };
  const obj10 = user(pressed[6]);
  fn2.__closure = { withDelay: user(pressed[6]).withDelay, withRepeat: user(pressed[6]).withRepeat, withTiming: user(pressed[7]).withTiming, pressed, Easing: user(pressed[6]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
  fn2.__workletHash = 5224606110321;
  fn2.__initData = __initData7;
  const animatedStyle3 = obj10.useAnimatedStyle(fn2);
  const obj11 = { withDelay: user(pressed[6]).withDelay, withRepeat: user(pressed[6]).withRepeat, withTiming: user(pressed[7]).withTiming, pressed, Easing: user(pressed[6]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
  class A {
    constructor() {
      value = pressed.get();
      return { pointerEvents: "none" };
    }
  }
  A.__closure = { pressed };
  A.__workletHash = 10124672248676;
  A.__initData = __initData8;
  const animatedProps = user(pressed[6]).useAnimatedProps(A);
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
    onLayout: function handleIconButtonsLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    },
    style: animatedStyle,
    children: null
  };
  const obj15 = { direction: "horizontal", spacing: 8, children: null };
  const obj12 = user(pressed[6]);
  const tmp16 = sharedValue;
  const tmp17 = onDeclineIncomingRequest;
  const tmp19 = applicationId;
  const items3 = [animate(user(pressed[9]).IconButton, { size: "sm", variant: "tertiary", icon: applicationId(pressed[10]), onPress: callback1, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 }), ];
  const obj16 = { size: "sm", variant: "tertiary", icon: applicationId(pressed[10]), onPress: callback1, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  items3[1] = animate(user(pressed[9]).IconButton, { size: "sm", variant: "active", icon: applicationId(pressed[11]), onPress: callback, accessibilityLabel: acceptRequestAccessibilityLabel, maxFontSizeMultiplier: 2 });
  obj15.children = items3;
  obj14.children = sharedValue(user(pressed[12]).Stack, obj15);
  const items4 = [animate(applicationId(pressed[6]).View, obj14), ];
  const obj18 = {
    style: animatedStyle1,
    onLayout: function handleButtonsLayout(nativeEvent) {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  const merged = Object.assign(animatedProps);
  const obj19 = { size: "sm", variant: "secondary", text: null, icon: null, onPress: null };
  const intl = user(pressed[13]).intl;
  obj19.text = intl.string(user(pressed[13]).t.n8nU4W);
  let tmp21 = null;
  if (animate) {
    tmp21 = animatedStyle2;
  }
  const obj20 = { style: tmp21, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  let tmp22 = null;
  if (animate) {
    tmp22 = animatedStyle3;
  }
  const obj17 = { size: "sm", variant: "active", icon: applicationId(pressed[11]), onPress: callback, accessibilityLabel: acceptRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  obj20.children = animate(tmp19(pressed[6]).View, {
    style: tmp22,
    onLayout: function handleWaveLayout(nativeEvent) {
      const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
      const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
    },
    children: animate(tmp2(pressed[14]).Text, { maxFontSizeMultiplier: 2, variant: "text-sm/normal", children: "\u{1F44B}" })
  });
  obj19.icon = animate(applicationId(pressed[6]).View, obj20);
  obj19.onPress = callback2;
  obj18.children = animate(user(pressed[15]).Button, obj19);
  items4[1] = animate(applicationId(pressed[6]).View, obj18);
  obj13.children = items4;
  return tmp16(tmp17, obj13);
});