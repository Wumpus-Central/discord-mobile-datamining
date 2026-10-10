// discord_app/modules/notification_center/native/ForYouItemActionButtons.tsx
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import parseURLDefault from "../../../utils/native/parseURL.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import NotificationCenterItemsTypes from "../NotificationCenterItemsTypes.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import PeopleUtilsDefault from "../../people/PeopleUtils.tsx";
import handleSupportedURLDefault from "../../links/native/handleSupportedURL.tsx";
import AddFriendsScreenUtils from "../../main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function focusChatInput(channelId) {
  let tmp;
  if (null != channelId) {
    let obj = { channelId };
    tmp = obj;
  }
  obj = tmp;
  const timerId = setTimeout(() => {
    const ComponentDispatch = other_user(1121).ComponentDispatch;
    return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
  }, 0);
}
let closure_3 = ["item", "rowIndex", "onSoftAckItem", "actionButtons", "actionsNode", "compactMode"];
let closure_4 = ["id"];
const View = fn(17).View;
const Constants = fn(1085);
({
  AnalyticEvents: closure_11,
  ComponentActions: closure_12,
  EMPTY_STRING_SNOWFLAKE_ID: map1,
  MessageTypes: closure_14,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5092);
let closure_17 = createStyles.createStyles({
  buttonsContainer: { flexDirection: "row", marginTop: 8 },
  actionButtonsContainer: { flexDirection: "row", position: "absolute", left: 0 },
});
const constants3 = { ACCEPT: "accept", IGNORE: "ignore", WAVE: "wave", ACTION: "action" };
const __initData = {
  code: 'function ForYouItemActionButtonsTsx1(){const{withTiming,pressed}=this.__closure;return{opacity:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?"auto":"none"};}',
};
const __initData2 = {
  code: 'function ForYouItemActionButtonsTsx2(){const{pressed,acceptButtonWidth,buttonWidth,withTiming}=this.__closure;const scaleX=!pressed.get()?acceptButtonWidth.get()/buttonWidth.get():1;const scaledWidth=buttonWidth.get()-buttonWidth.get()*scaleX;const translateX=!pressed.get()?-scaledWidth/2:0;return{transform:[{scaleX:withTiming(scaleX)},{translateX:withTiming(translateX)}],opacity:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?"none":"auto"};}',
};
const __initData3 = {
  code: "function ForYouItemActionButtonsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}",
};
const __initData4 = {
  code: 'function ForYouItemActionButtonsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?"8deg":"-2deg",{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}',
};
const __initData5 = {
  code: 'function ForYouItemActionButtonsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?"none":"none"};}',
};
const __initData6 = {
  code: "function ForYouItemActionButtonsTsx6(){const{withTiming,pressed}=this.__closure;return{opacity:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}",
};
const __initData7 = {
  code: "function ForYouItemActionButtonsTsx7(){const{pressed,acceptButtonWidth,buttonWidth,withTiming}=this.__closure;const scaleX=!pressed.get()?acceptButtonWidth.get()/buttonWidth.get():1;const scaledWidth=buttonWidth.get()-buttonWidth.get()*scaleX;const translateX=!pressed.get()?-scaledWidth/2:0;return{transform:[{scaleX:withTiming(scaleX)},{translateX:withTiming(translateX)}],opacity:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}",
};
const __initData8 = {
  code: "function ForYouItemActionButtonsTsx8(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}",
};
const __initData9 = {
  code: "function ForYouItemActionButtonsTsx9(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}",
};
const __initData10 = {
  code: "function ForYouItemActionButtonsTsx10(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}",
};
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function IncomingFriendRequestActions(compactMode) {
      const cResult = pressed(sharedValue1[11]).c(47);
      ({ onAccept, onIgnore, onWavePress, pressed } = compactMode);
      compactMode = compactMode.compactMode;
      const tmp4 = closure_17();
      let obj = pressed(sharedValue1[11]);
      const sharedValue = pressed(sharedValue1[12]).useSharedValue(0);
      let obj2 = pressed(sharedValue1[12]);
      sharedValue1 = pressed(sharedValue1[12]).useSharedValue(-1);
      let obj3 = pressed(sharedValue1[12]);
      const sharedValue2 = pressed(sharedValue1[12]).useSharedValue(-1);
      let obj4 = pressed(sharedValue1[12]);
      const sharedValue3 = pressed(sharedValue1[12]).useSharedValue(-1);
      let obj5 = pressed(sharedValue1[12]);
      const fn = function n() {
        let num = 1;
        if (pressed.get()) {
          num = 0;
        }
        const obj3 = { opacity: timing.withTiming(num, { duration: 150 }), pointerEvents: null };
        let str = "auto";
        if (pressed.get()) {
          str = "none";
        }
        obj3.pointerEvents = str;
        return obj3;
      };
      let obj6 = pressed(sharedValue1[12]);
      fn.__closure = { withTiming: pressed(sharedValue1[13]).withTiming, pressed };
      fn.__workletHash = 4204274850517;
      fn.__initData = __initData;
      const animatedStyle = obj6.useAnimatedStyle(fn);
      let obj7 = { withTiming: pressed(sharedValue1[13]).withTiming, pressed };
      const fn2 = function s() {
        let num = 1;
        if (!pressed.get()) {
          value = sharedValue.get();
          num = value / sharedValue1.get();
        }
        value2 = sharedValue1.get();
        const diff = value2 - sharedValue1.get() * num;
        let num2 = 0;
        if (!pressed.get()) {
          num2 = -diff / 2;
        }
        const obj2 = { transform: null, opacity: null, pointerEvents: null };
        const obj3 = { scaleX: timing.withTiming(num) };
        const items = [obj3];
        const obj5 = { translateX: null };
        obj5.translateX = timing.withTiming(num2);
        items[1] = obj5;
        obj2.transform = items;
        let num4 = 0;
        if (pressed.get()) {
          num4 = 1;
        }
        obj2.opacity = timing.withTiming(num4);
        let str = "none";
        if (pressed.get()) {
          str = "auto";
        }
        obj2.pointerEvents = str;
        return obj2;
      };
      const obj8 = pressed(sharedValue1[12]);
      fn2.__closure = {
        pressed,
        acceptButtonWidth: sharedValue,
        buttonWidth: sharedValue1,
        withTiming: pressed(sharedValue1[13]).withTiming,
      };
      fn2.__workletHash = 4669733566168;
      fn2.__initData = __initData2;
      const animatedStyle1 = obj8.useAnimatedStyle(fn2);
      const obj9 = {
        pressed,
        acceptButtonWidth: sharedValue,
        buttonWidth: sharedValue1,
        withTiming: pressed(sharedValue1[13]).withTiming,
      };
      const fn3 = function o() {
        const obj = { transform: null };
        const items = [{ translateX: sharedValue2.get() / 2 }];
        const obj2 = { translateX: sharedValue2.get() / 2 };
        items[1] = { translateY: sharedValue3.get() / 2 };
        obj.transform = items;
        return obj;
      };
      fn3.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
      fn3.__workletHash = 667441788226;
      fn3.__initData = __initData3;
      const animatedStyle2 = pressed(sharedValue1[12]).useAnimatedStyle(fn3);
      const obj10 = pressed(sharedValue1[12]);
      const fn4 = function c() {
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
        const items = [obj5, ,];
        items[1] = { translateX: -sharedValue2.get() / 2 };
        const obj7 = { translateX: -sharedValue2.get() / 2 };
        items[2] = { translateY: -sharedValue3.get() / 2 };
        obj4.transform = items;
        return obj4;
      };
      const obj11 = pressed(sharedValue1[12]);
      fn4.__closure = {
        withDelay: pressed(sharedValue1[12]).withDelay,
        withRepeat: pressed(sharedValue1[12]).withRepeat,
        withTiming: pressed(sharedValue1[13]).withTiming,
        pressed,
        Easing: pressed(sharedValue1[12]).Easing,
        waveWidth: sharedValue2,
        waveHeight: sharedValue3,
      };
      fn4.__workletHash = 15571162659994;
      fn4.__initData = __initData4;
      const animatedStyle3 = obj11.useAnimatedStyle(fn4);
      if (cResult[0] !== sharedValue) {
        function handleAcceptButtonLayout(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
        }
        cResult[0] = sharedValue;
        cResult[1] = handleAcceptButtonLayout;
        let tmp13 = handleAcceptButtonLayout;
      } else {
        tmp13 = cResult[1];
      }
      if (cResult[2] !== sharedValue1) {
        function handleButtonsLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
        }
        cResult[2] = sharedValue1;
        cResult[3] = handleButtonsLayout;
        let tmp14 = handleButtonsLayout;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === sharedValue3) {
        if (cResult[5] === sharedValue2) {
          let tmp15 = cResult[6];
        }
        const fn5 = function k() {
          value = pressed.get();
          return { pointerEvents: "none" };
        };
        const obj13 = { pressed };
        fn5.__closure = obj13;
        fn5.__workletHash = 3478270246710;
        fn5.__initData = __initData5;
        const animatedProps = pressed(tmp2[12]).useAnimatedProps(fn5);
        if (cResult[7] === animatedStyle) {
          if (cResult[8] === tmp4.actionButtonsContainer) {
            let tmp18 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = pressed(tmp2[14]).intl;
            const stringResult = intl.string(pressed(tmp2[14]).t.zf5jU5);
            cResult[10] = stringResult;
            let tmp20 = stringResult;
          } else {
            tmp20 = cResult[10];
          }
          let str2 = "md";
          let str3 = "md";
          if (compactMode) {
            str3 = "sm";
          }
          if (cResult[11] === onAccept) {
            if (cResult[12] === str3) {
              let tmp22 = cResult[13];
            }
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp22) {
                let tmp25 = cResult[16];
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = pressed(tmp2[14]).intl;
                const stringResult1 = intl2.string(pressed(tmp2[14]).t.EBN847);
                cResult[17] = stringResult1;
                let tmp29 = stringResult1;
              } else {
                tmp29 = cResult[17];
              }
              let str5 = str2;
              if (compactMode) {
                str5 = "sm";
              }
              if (cResult[18] === onIgnore) {
                if (cResult[19] === str5) {
                  let tmp31 = cResult[20];
                }
                if (cResult[21] === tmp31) {
                  if (cResult[22] === tmp25) {
                    let tmp34 = cResult[23];
                  }
                  if (cResult[24] === tmp34) {
                    if (cResult[25] === tmp18) {
                      let tmp37 = cResult[26];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl3 = pressed(tmp2[14]).intl;
                      const stringResult2 = intl3.string(pressed(tmp2[14]).t.n8nU4W);
                      cResult[27] = stringResult2;
                      let tmp41 = stringResult2;
                    } else {
                      tmp41 = cResult[27];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp45 = closure_15(pressed(tmp2[17]).Text, {
                        maxFontSizeMultiplier: 2,
                        variant: "text-sm/normal",
                        children: "\u{1F44B}",
                      });
                      cResult[28] = tmp45;
                      let tmp43 = tmp45;
                    } else {
                      tmp43 = cResult[28];
                    }
                    if (cResult[29] === tmp15) {
                      if (cResult[30] === animatedStyle3) {
                        let tmp46 = cResult[31];
                      }
                      if (cResult[32] === tmp46) {
                        if (cResult[33] === animatedStyle2) {
                          let tmp50 = cResult[34];
                        }
                        if (compactMode) {
                          str2 = "sm";
                        }
                        if (cResult[35] === onWavePress) {
                          if (cResult[36] === tmp50) {
                            if (cResult[37] === str2) {
                              let tmp54 = cResult[38];
                            }
                            if (cResult[39] === animatedProps) {
                              if (cResult[40] === animatedStyle1) {
                                if (cResult[41] === tmp14) {
                                  if (cResult[42] === tmp54) {
                                    let tmp57 = cResult[43];
                                  }
                                  if (cResult[44] === tmp37) {
                                    if (cResult[45] === tmp57) {
                                      let tmp64 = cResult[46];
                                    }
                                    return tmp64;
                                  }
                                  const obj14 = { children: null };
                                  let items = [tmp37, tmp57];
                                  obj14.children = items;
                                  const tmp67 = closure_16(View, obj14);
                                  cResult[44] = tmp37;
                                  cResult[45] = tmp57;
                                  cResult[46] = tmp67;
                                  tmp64 = tmp67;
                                }
                              }
                            }
                            const obj15 = { style: animatedStyle1, onLayout: tmp14 };
                            const merged = Object.assign(animatedProps);
                            obj15.children = tmp54;
                            const tmp63 = closure_15(sharedValue(tmp2[12]).View, obj15);
                            cResult[39] = animatedProps;
                            cResult[40] = animatedStyle1;
                            cResult[41] = tmp14;
                            cResult[42] = tmp54;
                            cResult[43] = tmp63;
                            tmp57 = tmp63;
                          }
                        }
                        const obj16 = {
                          variant: "secondary",
                          text: tmp41,
                          icon: tmp50,
                          size: str2,
                          onPress: onWavePress,
                        };
                        const tmp56 = closure_15(pressed(tmp2[15]).Button, obj16);
                        cResult[35] = onWavePress;
                        cResult[36] = tmp50;
                        cResult[37] = str2;
                        cResult[38] = tmp56;
                        tmp54 = tmp56;
                      }
                      const obj17 = {
                        style: animatedStyle2,
                        accessibilityElementsHidden: true,
                        importantForAccessibility: "no-hide-descendants",
                        children: tmp46,
                      };
                      const tmp53 = closure_15(sharedValue(tmp2[12]).View, obj17);
                      cResult[32] = tmp46;
                      cResult[33] = animatedStyle2;
                      cResult[34] = tmp53;
                      tmp50 = tmp53;
                    }
                    const obj18 = { style: animatedStyle3, onLayout: tmp15, children: tmp43 };
                    const tmp49 = closure_15(sharedValue(tmp2[12]).View, obj18);
                    cResult[29] = tmp15;
                    cResult[30] = animatedStyle3;
                    cResult[31] = tmp49;
                    tmp46 = tmp49;
                  }
                  const obj19 = { style: tmp18, children: tmp34 };
                  const tmp40 = closure_15(sharedValue(tmp2[12]).View, obj19);
                  cResult[24] = tmp34;
                  cResult[25] = tmp18;
                  cResult[26] = tmp40;
                  tmp37 = tmp40;
                }
                const obj20 = { direction: "horizontal", spacing: 8, children: null };
                const items1 = [tmp25, tmp31];
                obj20.children = items1;
                const tmp36 = closure_16(pressed(tmp2[16]).Stack, obj20);
                cResult[21] = tmp31;
                cResult[22] = tmp25;
                cResult[23] = tmp36;
                tmp34 = tmp36;
              }
              const obj21 = { text: tmp29, variant: "secondary", size: str5, onPress: onIgnore };
              const tmp33 = closure_15(pressed(tmp2[15]).Button, obj21, "ignore_friend_request");
              cResult[18] = onIgnore;
              cResult[19] = str5;
              cResult[20] = tmp33;
              tmp31 = tmp33;
            }
            const obj22 = { onLayout: tmp13, children: tmp22 };
            const tmp28 = closure_15(View, obj22);
            cResult[14] = tmp13;
            cResult[15] = tmp22;
            cResult[16] = tmp28;
            tmp25 = tmp28;
          }
          const obj23 = { text: tmp20, variant: "primary", size: str3, onPress: onAccept };
          const tmp24 = closure_15(pressed(tmp2[15]).Button, obj23, "accept_friend_request");
          cResult[11] = onAccept;
          cResult[12] = str3;
          cResult[13] = tmp24;
          tmp22 = tmp24;
        }
        const items2 = [tmp4.actionButtonsContainer, animatedStyle];
        cResult[7] = animatedStyle;
        cResult[8] = tmp4.actionButtonsContainer;
        cResult[9] = items2;
        tmp18 = items2;
        const tmpResult = pressed(tmp2[12]);
      }
      function handleWaveLayout(nativeEvent) {
        const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
        const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
      }
      cResult[4] = sharedValue3;
      cResult[5] = sharedValue2;
      cResult[6] = handleWaveLayout;
      tmp15 = handleWaveLayout;
      const obj12 = {
        withDelay: pressed(sharedValue1[12]).withDelay,
        withRepeat: pressed(sharedValue1[12]).withRepeat,
        withTiming: pressed(sharedValue1[13]).withTiming,
        pressed,
        Easing: pressed(sharedValue1[12]).Easing,
        waveWidth: sharedValue2,
        waveHeight: sharedValue3,
      };
    }
  : function IncomingFriendRequestActions(pressed) {
      pressed = pressed.pressed;
      const compactMode = pressed.compactMode;
      let sharedValue1;
      ({ onAccept, onIgnore, onWavePress } = pressed);
      const tmp = closure_17();
      const sharedValue = pressed(sharedValue1[12]).useSharedValue(0);
      let obj = pressed(sharedValue1[12]);
      sharedValue1 = pressed(sharedValue1[12]).useSharedValue(-1);
      let obj2 = pressed(sharedValue1[12]);
      const sharedValue2 = pressed(sharedValue1[12]).useSharedValue(-1);
      let obj3 = pressed(sharedValue1[12]);
      const sharedValue3 = pressed(sharedValue1[12]).useSharedValue(-1);
      let obj4 = pressed(sharedValue1[12]);
      const fn = function u() {
        let num = 1;
        if (pressed.get()) {
          num = 0;
        }
        const obj3 = { opacity: timing.withTiming(num, { duration: 150 }), pointerEvents: null };
        let str = "auto";
        if (pressed.get()) {
          str = "none";
        }
        obj3.pointerEvents = str;
        return obj3;
      };
      let obj5 = pressed(sharedValue1[12]);
      fn.__closure = { withTiming: pressed(sharedValue1[13]).withTiming, pressed };
      fn.__workletHash = 16537906859890;
      fn.__initData = __initData6;
      const animatedStyle = obj5.useAnimatedStyle(fn);
      let obj6 = { withTiming: pressed(sharedValue1[13]).withTiming, pressed };
      const fn2 = function _() {
        let num = 1;
        if (!pressed.get()) {
          value = sharedValue.get();
          num = value / sharedValue1.get();
        }
        value2 = sharedValue1.get();
        const diff = value2 - sharedValue1.get() * num;
        let num2 = 0;
        if (!pressed.get()) {
          num2 = -diff / 2;
        }
        const obj2 = { transform: null, opacity: null, pointerEvents: null };
        const obj3 = { scaleX: timing.withTiming(num) };
        const items = [obj3];
        const obj5 = { translateX: null };
        obj5.translateX = timing.withTiming(num2);
        items[1] = obj5;
        obj2.transform = items;
        let num4 = 0;
        if (pressed.get()) {
          num4 = 1;
        }
        obj2.opacity = timing.withTiming(num4);
        let str = "none";
        if (pressed.get()) {
          str = "auto";
        }
        obj2.pointerEvents = str;
        return obj2;
      };
      let obj7 = pressed(sharedValue1[12]);
      fn2.__closure = {
        pressed,
        acceptButtonWidth: sharedValue,
        buttonWidth: sharedValue1,
        withTiming: pressed(sharedValue1[13]).withTiming,
      };
      fn2.__workletHash = 5611882536509;
      fn2.__initData = __initData7;
      const animatedStyle1 = obj7.useAnimatedStyle(fn2);
      const obj8 = {
        pressed,
        acceptButtonWidth: sharedValue,
        buttonWidth: sharedValue1,
        withTiming: pressed(sharedValue1[13]).withTiming,
      };
      const fn3 = function h() {
        const obj = { transform: null };
        const items = [{ translateX: sharedValue2.get() / 2 }];
        const obj2 = { translateX: sharedValue2.get() / 2 };
        items[1] = { translateY: sharedValue3.get() / 2 };
        obj.transform = items;
        return obj;
      };
      fn3.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
      fn3.__workletHash = 12233800916841;
      fn3.__initData = __initData8;
      const animatedStyle2 = pressed(sharedValue1[12]).useAnimatedStyle(fn3);
      const obj9 = pressed(sharedValue1[12]);
      class E {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[12]);
          obj2 = closure_0(closure_2[12]);
          obj3 = closure_0(closure_2[13]);
          str = "-2deg";
          if (pressed.get()) {
            str = "8deg";
          }
          obj1 = { transform: null };
          obj9 = { rotateZ: null };
          obj10 = { duration: 150, easing: null };
          Easing = tmp(tmp2[12]).Easing;
          obj10.easing = Easing.inOut(tmp(tmp2[12]).Easing.quad);
          obj9.rotateZ = obj.withDelay(450, obj2.withRepeat(obj3.withTiming(str, obj10), 4, true));
          items = [, ,];
          items[0] = obj9;
          obj11 = { translateX: -closure_3.get() / 2 };
          items[1] = obj11;
          obj12 = { translateY: -closure_4.get() / 2 };
          items[2] = obj12;
          obj1.transform = items;
          return obj1;
        }
      }
      const obj10 = pressed(sharedValue1[12]);
      E.__closure = {
        withDelay: pressed(sharedValue1[12]).withDelay,
        withRepeat: pressed(sharedValue1[12]).withRepeat,
        withTiming: pressed(sharedValue1[13]).withTiming,
        pressed,
        Easing: pressed(sharedValue1[12]).Easing,
        waveWidth: sharedValue2,
        waveHeight: sharedValue3,
      };
      E.__workletHash = 6610428602327;
      E.__initData = __initData9;
      const animatedStyle3 = obj10.useAnimatedStyle(E);
      const obj11 = {
        withDelay: pressed(sharedValue1[12]).withDelay,
        withRepeat: pressed(sharedValue1[12]).withRepeat,
        withTiming: pressed(sharedValue1[13]).withTiming,
        pressed,
        Easing: pressed(sharedValue1[12]).Easing,
        waveWidth: sharedValue2,
        waveHeight: sharedValue3,
      };
      const fn4 = function p() {
        value = pressed.get();
        return { pointerEvents: "none" };
      };
      fn4.__closure = { pressed };
      fn4.__workletHash = 12386905499778;
      fn4.__initData = __initData10;
      const animatedProps = pressed(sharedValue1[12]).useAnimatedProps(fn4);
      const obj13 = { style: null, children: null };
      let items = [tmp.actionButtonsContainer, animatedStyle];
      obj13.style = items;
      const obj14 = {
        onLayout: function handleAcceptButtonLayout(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
        },
        children: null,
      };
      const obj15 = { text: null, variant: "primary", size: null, onPress: null };
      const intl = pressed(sharedValue1[14]).intl;
      obj15.text = intl.string(pressed(sharedValue1[14]).t.zf5jU5);
      let str = "md";
      let str2 = "md";
      if (compactMode) {
        str2 = "sm";
      }
      obj15.size = str2;
      obj15.onPress = onAccept;
      obj14.children = closure_15(pressed(sharedValue1[15]).Button, obj15, "accept_friend_request");
      const items1 = [closure_15(View, obj14)];
      const obj16 = { text: null, variant: "secondary", size: null, onPress: null };
      const intl2 = tmp2(tmp3[14]).intl;
      obj16.text = intl2.string(pressed(sharedValue1[14]).t.EBN847);
      let str3 = str;
      if (compactMode) {
        str3 = "sm";
      }
      const obj17 = { direction: "horizontal", spacing: 8, children: null };
      obj16.size = str3;
      obj16.onPress = onIgnore;
      items1[1] = closure_15(pressed(sharedValue1[15]).Button, obj16, "ignore_friend_request");
      obj17.children = items1;
      obj13.children = closure_16(pressed(sharedValue1[16]).Stack, obj17);
      const items2 = [closure_15(sharedValue(sharedValue1[12]).View, obj13)];
      const obj18 = {
        style: animatedStyle1,
        onLayout: function handleButtonsLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
        },
      };
      const merged = Object.assign(animatedProps);
      const obj19 = { variant: "secondary", text: null, icon: null, size: null, onPress: null };
      const intl3 = tmp2(tmp3[14]).intl;
      obj19.text = intl3.string(pressed(sharedValue1[14]).t.n8nU4W);
      const obj20 = {
        style: animatedStyle2,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const obj12 = pressed(sharedValue1[12]);
      obj20.children = closure_15(sharedValue(sharedValue1[12]).View, {
        style: animatedStyle3,
        onLayout: function handleWaveLayout(nativeEvent) {
          const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
          const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
        },
        children: closure_15(pressed(sharedValue1[17]).Text, {
          maxFontSizeMultiplier: 2,
          variant: "text-sm/normal",
          children: "\u{1F44B}",
        }),
      });
      obj19.icon = closure_15(sharedValue(sharedValue1[12]).View, obj20);
      if (compactMode) {
        str = "sm";
      }
      const obj22 = { children: null };
      obj19.size = str;
      obj19.onPress = onWavePress;
      obj18.children = closure_15(pressed(sharedValue1[15]).Button, obj19);
      items2[1] = closure_15(sharedValue(sharedValue1[12]).View, obj18);
      obj22.children = items2;
      return closure_16(View, obj22);
    };
let closure_30 = tmp4;
fn(558);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useItemActionButtonPropsV2(other_user, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      _require = other_user;
      importDefault = arg1;
      dependencyMap = arg2;
      closure_3 = arg3;
      closure_4 = arg5;
      closure_5 = arg6;
      const cResult = require("c").c(114);
      other_user = other_user.other_user;
      let id;
      if (other_user != null) {
        id = other_user.id;
      }
      if (id == null) {
        id = closure_13;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [sharedValue];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      let message = tmp.message;
      let channel_id;
      if (message != null) {
        channel_id = message.channel_id;
      }
      if (cResult[1] !== channel_id) {
        const message2 = tmp.message;
        let channel_id1;
        if (message2 != null) {
          channel_id1 = message2.channel_id;
        }
        class T {
          constructor() {
            message = closure_0.message;
            channel_id = undefined;
            tmp = closure_9;
            if (message != null) {
              channel_id = message.channel_id;
            }
            return closure_9.getChannel(channel_id);
          }
        }
        cResult[1] = channel_id1;
        cResult[2] = T;
        let tmp9 = T;
      } else {
        tmp9 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp9);
      const tmp2Result = require("useStateFromStores");
      const message3 = tmp.message;
      const canReplyToMessage = require("canReplyToMessage").useCanReplyToMessage(stateFromStores, tmp.message);
      if (message3 != null) {
        const type = message3.type;
      }
      if (cResult[3] === other_user) {
        if (cResult[4] === arg5) {
          if (cResult[5] === id) {
            let tmp13 = cResult[6];
          }
          closure_8 = tmp13;
          class T {
            constructor() {
              message = closure_0.message;
              channel_id = undefined;
              tmp = closure_9;
              if (message != null) {
                channel_id = message.channel_id;
              }
              return closure_9.getChannel(channel_id);
            }
          }
          sharedValue = tmp2(4850).useSharedValue(false);
          if (cResult[7] === arg3) {
            if (cResult[8] === sharedValue) {
              if (cResult[9] === tmp) {
                if (cResult[10] === id) {
                  if (cResult[11] === arg6) {
                    let tmp15 = cResult[12];
                  }
                  closure_10 = tmp15;
                  if (cResult[13] === tmp.applicationId) {
                    if (cResult[14] === tmp.type) {
                      if (cResult[15] === id) {
                        let tmp16 = cResult[16];
                      }
                      closure_11 = tmp16;
                      if (cResult[17] !== arg2) {
                        class L {
                          constructor() {
                            obj = closure_2;
                            if (closure_2 != null) {
                              str = "friends";
                              navigateResult = obj.navigate("friends", { screen: "requests" });
                            }
                            return;
                          }
                        }
                        cResult[17] = arg2;
                        class O {
                          constructor() {
                            obj = closure_1(closure_2[23]);
                            obj1 = { userId: closure_6, applicationId: null, location: "notification_center_v2" };
                            tmp = closure_0;
                            applicationId = undefined;
                            if (
                              closure_0.type ===
                              closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                            ) {
                              applicationId = tmp.applicationId;
                            }
                            obj1.applicationId = applicationId;
                            cancelFriendRequestResult = obj.cancelFriendRequest(obj1);
                            return;
                          }
                        }
                        cResult[18] = L;
                      } else {
                        class L {
                          constructor() {
                            obj = closure_2;
                            if (closure_2 != null) {
                              str = "friends";
                              navigateResult = obj.navigate("friends", { screen: "requests" });
                            }
                            return;
                          }
                        }
                      }
                      class O {
                        constructor() {
                          obj = closure_1(closure_2[23]);
                          obj1 = { userId: closure_6, applicationId: null, location: "notification_center_v2" };
                          tmp = closure_0;
                          applicationId = undefined;
                          if (
                            closure_0.type ===
                            closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                          ) {
                            applicationId = tmp.applicationId;
                          }
                          obj1.applicationId = applicationId;
                          cancelFriendRequestResult = obj.cancelFriendRequest(obj1);
                          return;
                        }
                      }
                      if (cResult[21] !== id) {
                        class W {
                          constructor() {
                            obj = closure_1(closure_2[26]);
                            obj1 = { userId: closure_6, context: { location: "notification_center_v2" } };
                            addRelationshipResult = obj.addRelationship(obj1);
                            obj3 = closure_1(closure_2[27]);
                            obj5 = { text: null };
                            intl = closure_0(closure_2[14]).intl;
                            obj5.text = intl.string(closure_0(closure_2[14]).t["7MAxkR"]);
                            openResult = obj3.open("NOTIF_CENTER_V2_ADD_FRIEND_TOAST", obj5);
                            return;
                          }
                        }
                        cResult[21] = id;
                        class O {
                          constructor() {
                            obj = closure_1(closure_2[23]);
                            obj1 = { userId: closure_6, applicationId: null, location: "notification_center_v2" };
                            tmp = closure_0;
                            applicationId = undefined;
                            if (
                              closure_0.type ===
                              closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                            ) {
                              applicationId = tmp.applicationId;
                            }
                            obj1.applicationId = applicationId;
                            cancelFriendRequestResult = obj.cancelFriendRequest(obj1);
                            return;
                          }
                        }
                        cResult[22] = W;
                      } else {
                        class W {
                          constructor() {
                            obj = closure_1(closure_2[26]);
                            obj1 = { userId: closure_6, context: { location: "notification_center_v2" } };
                            addRelationshipResult = obj.addRelationship(obj1);
                            obj3 = closure_1(closure_2[27]);
                            obj5 = { text: null };
                            intl = closure_0(closure_2[14]).intl;
                            obj5.text = intl.string(closure_0(closure_2[14]).t["7MAxkR"]);
                            openResult = obj3.open("NOTIF_CENTER_V2_ADD_FRIEND_TOAST", obj5);
                            return;
                          }
                        }
                      }
                      if (cResult[23] === stateFromStores) {
                        class W {
                          constructor() {
                            obj = closure_1(closure_2[26]);
                            obj1 = { userId: closure_6, context: { location: "notification_center_v2" } };
                            addRelationshipResult = obj.addRelationship(obj1);
                            obj3 = closure_1(closure_2[27]);
                            obj5 = { text: null };
                            intl = closure_0(closure_2[14]).intl;
                            obj5.text = intl.string(closure_0(closure_2[14]).t["7MAxkR"]);
                            openResult = obj3.open("NOTIF_CENTER_V2_ADD_FRIEND_TOAST", obj5);
                            return;
                          }
                        }
                      }
                      class D {
                        constructor() {
                          obj = closure_1(closure_2[23]);
                          obj1 = {
                            userId: closure_6,
                            applicationId: null,
                            location: "notification_center_v2",
                            onConfirm: null,
                          };
                          tmp = closure_0;
                          applicationId = undefined;
                          if (
                            closure_0.type ===
                            closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                          ) {
                            applicationId = tmp.applicationId;
                          }
                          obj1.applicationId = applicationId;
                          obj1.onConfirm = function onConfirm() {
                            user = user.getUser(id);
                            if (null != user) {
                              const intl = closure_0(1126).intl;
                              let username = user.globalName;
                              if (username == null) {
                                username = user.username;
                              }
                              const obj = { username };
                              closure_1_5(intl.format(closure_0(1126).t["5Uzkdp"], obj));
                            }
                            const result = sharedValue.set(true);
                            other_user.enableBadge = false;
                            closure_1_3(other_user);
                          };
                          result = obj.maybeConfirmFriendRequestAccept(obj1);
                          return;
                        }
                      }
                      function t8() {
                        const self = this;
                        const apply = closure_0.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      }
                      cResult[23] = stateFromStores;
                      cResult[24] = arg1;
                      cResult[25] = tmp.message_channel_id;
                      cResult[26] = tmp.message_id;
                      cResult[27] = t8;
                    }
                  }
                  class O {
                    constructor() {
                      obj = closure_1(closure_2[23]);
                      obj1 = { userId: closure_6, applicationId: null, location: "notification_center_v2" };
                      tmp = closure_0;
                      applicationId = undefined;
                      if (
                        closure_0.type ===
                        closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                      ) {
                        applicationId = tmp.applicationId;
                      }
                      obj1.applicationId = applicationId;
                      cancelFriendRequestResult = obj.cancelFriendRequest(obj1);
                      return;
                    }
                  }
                  cResult[13] = tmp.applicationId;
                  class D {
                    constructor() {
                      obj = closure_1(closure_2[23]);
                      obj1 = {
                        userId: closure_6,
                        applicationId: null,
                        location: "notification_center_v2",
                        onConfirm: null,
                      };
                      tmp = closure_0;
                      applicationId = undefined;
                      if (
                        closure_0.type ===
                        closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                      ) {
                        applicationId = tmp.applicationId;
                      }
                      obj1.applicationId = applicationId;
                      obj1.onConfirm = function onConfirm() {
                        user = user.getUser(id);
                        if (null != user) {
                          const intl = closure_0(1126).intl;
                          let username = user.globalName;
                          if (username == null) {
                            username = user.username;
                          }
                          const obj = { username };
                          closure_1_5(intl.format(closure_0(1126).t["5Uzkdp"], obj));
                        }
                        const result = sharedValue.set(true);
                        other_user.enableBadge = false;
                        closure_1_3(other_user);
                      };
                      result = obj.maybeConfirmFriendRequestAccept(obj1);
                      return;
                    }
                  }
                  cResult[15] = id;
                  cResult[16] = O;
                  tmp16 = O;
                }
              }
            }
          }
          class D {
            constructor() {
              obj = closure_1(closure_2[23]);
              obj1 = { userId: closure_6, applicationId: null, location: "notification_center_v2", onConfirm: null };
              tmp = closure_0;
              applicationId = undefined;
              if (
                closure_0.type === closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
              ) {
                applicationId = tmp.applicationId;
              }
              obj1.applicationId = applicationId;
              obj1.onConfirm = function onConfirm() {
                user = user.getUser(id);
                if (null != user) {
                  const intl = closure_0(1126).intl;
                  let username = user.globalName;
                  if (username == null) {
                    username = user.username;
                  }
                  const obj = { username };
                  closure_1_5(intl.format(closure_0(1126).t["5Uzkdp"], obj));
                }
                const result = sharedValue.set(true);
                other_user.enableBadge = false;
                closure_1_3(other_user);
              };
              result = obj.maybeConfirmFriendRequestAccept(obj1);
              return;
            }
          }
          cResult[7] = arg3;
          cResult[8] = sharedValue;
          cResult[9] = tmp;
          cResult[10] = id;
          cResult[11] = arg6;
          cResult[12] = D;
          tmp15 = D;
          const tmp2Result4 = tmp2(4850);
        }
      }
      const fn = function b() {
        AddFriendsScreenUtils.sendWave(id, false, "You Tab");
        const dMFromUserId = ChannelStore.getDMFromUserId(id);
        if (null != dMFromUserId) {
          const _HermesInternal = HermesInternal;
          const obj2 = {
            payload: parseURLDefault("https://discord.com/channels/@me/" + dMFromUserId).payload,
            safe: true,
            navigationReplace: false,
          };
          handleSupportedURLDefault(obj2);
        }
        closure_4(closure_0);
      };
      cResult[3] = other_user;
      cResult[4] = arg5;
      cResult[5] = id;
      cResult[6] = fn;
      tmp13 = fn;
      const tmp2Result3 = require("canReplyToMessage");
    }
  : function useItemActionButtonPropsV2(other_user, onPress, arg2, arg3, fn, arg5, arg6, compactMode) {
      _require = other_user;
      dependencyMap = arg2;
      closure_3 = arg3;
      closure_4 = arg5;
      closure_5 = arg6;
      other_user = other_user.other_user;
      let id;
      if (other_user != null) {
        id = other_user.id;
      }
      if (id == null) {
        id = closure_13;
      }
      const notification_center_v2 = "notification_center_v2";
      let tmp2 = _require;
      const items = [onWavePress];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
        const message = other_user.message;
        let channel_id;
        if (message != null) {
          channel_id = message.channel_id;
        }
        return ChannelStore.getChannel(channel_id);
      });
      let obj = require("useStateFromStores");
      let message = other_user.message;
      const canReplyToMessage = require("canReplyToMessage").useCanReplyToMessage(stateFromStores, other_user.message);
      if (message != null) {
        const type = message.type;
      }
      const items1 = [id, arg5, other_user];
      onWavePress = notification_center_v2.useCallback(() => {
        AddFriendsScreenUtils.sendWave(id, false, "You Tab");
        const dMFromUserId = ChannelStore.getDMFromUserId(id);
        if (null != dMFromUserId) {
          const _HermesInternal = HermesInternal;
          const obj2 = {
            payload: parseURLDefault("https://discord.com/channels/@me/" + dMFromUserId).payload,
            safe: true,
            navigationReplace: false,
          };
          handleSupportedURLDefault(obj2);
        }
        closure_4(closure_0);
      }, items1);
      let obj2 = require("canReplyToMessage");
      const sharedValue = tmp2(4850).useSharedValue(false);
      const items2 = [arg3, sharedValue, other_user, id, arg6];
      const callback1 = notification_center_v2.useCallback(() => {
        const obj2 = { userId: id, applicationId: null, location: null, onConfirm: null };
        let applicationId;
        if (
          other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
        ) {
          applicationId = other_user.applicationId;
        }
        obj2.applicationId = applicationId;
        obj2.location = notification_center_v2;
        obj2.onConfirm = function onConfirm() {
          const user = sharedValue.getUser(id);
          if (null != user) {
            const intl = closure_0(1126).intl;
            let username = user.globalName;
            if (username == null) {
              username = user.username;
            }
            const obj = { username };
            closure_1_5(intl.format(closure_0(1126).t["5Uzkdp"], obj));
          }
          const result = closure_1_10.set(true);
          other_user.enableBadge = false;
          closure_1_3(other_user);
        };
        let result = PeopleUtilsDefault.maybeConfirmFriendRequestAccept(obj2);
      }, items2);
      const items3 = [, ,];
      ({ applicationId: arr4[0], type: arr4[1] } = other_user);
      items3[2] = id;
      const callback2 = notification_center_v2.useCallback(() => {
        const obj2 = { userId: id, applicationId: null, location: null };
        let applicationId;
        if (
          other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
        ) {
          applicationId = other_user.applicationId;
        }
        obj2.applicationId = applicationId;
        obj2.location = notification_center_v2;
        PeopleUtilsDefault.cancelFriendRequest(obj2);
      }, items3);
      const items4 = [arg2];
      const callback3 = notification_center_v2.useCallback(() => {
        if (navigation != null) {
          navigation.navigate("friends", { screen: "requests" });
        }
      }, items4);
      const items5 = [id];
      const callback4 = notification_center_v2.useCallback(() => {
        const dMChannel = ChannelActionCreatorsDefault.getDMChannel(id);
        dMChannel.then((channelId) => {
          closure_1(14049)({
            payload: closure_1(5069)("https://discord.com/channels/@me/" + channelId).payload,
            safe: true,
            navigationReplace: false,
          });
          let obj;
          let tmp3;
          if (null != channelId) {
            obj = { channelId };
            tmp3 = obj;
          }
          obj = tmp3;
          const timerId = setTimeout(() => {
            const ComponentDispatch = other_user(1121).ComponentDispatch;
            return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
          }, 0);
        });
      }, items5);
      const items6 = [id];
      const callback5 = notification_center_v2.useCallback(() => {
        const obj2 = { userId: id, context: { location: notification_center_v2 } };
        RelationshipActionCreatorsDefault.addRelationship(obj2);
        const obj3 = { location: notification_center_v2 };
        const obj5 = { text: null };
        const intl = util.intl;
        obj5.text = intl.string(util.t["7MAxkR"]);
        ToastActionCreatorsDefault.open("NOTIF_CENTER_V2_ADD_FRIEND_TOAST", obj5);
      }, items6);
      const items7 = [onPress, stateFromStores, ,];
      ({ message_id: arr8[2], message_channel_id: arr8[3] } = other_user);
      const callback6 = notification_center_v2.useCallback(
        id(function* () {
          if (navigation === 2) {
            navigation = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: "+51" };
            }
          } else {
            try {
              navigation = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  navigation = 3;
                  throw value;
                } else if (arg0 === 2) {
                  navigation = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let tmp7 = null != tmp2.message_id;
                  if (tmp7) {
                    tmp7 = null != stateFromStores;
                  }
                  if (tmp7) {
                    const obj5 = {
                      messageId: tmp2.message_id,
                      channel: stateFromStores,
                      shouldMention: true,
                      showMentionToggle: true,
                    };
                    c1 = 1;
                    navigation = 1;
                    const obj6 = { value: tmp2(navigation[28]).createShallowPendingReply(obj5), done: false };
                    return obj6;
                  }
                }
              } else if (arg0 === 1) {
                navigation = 3;
                throw value;
              } else if (arg0 === 2) {
                navigation = 3;
                const obj = { value, done: true };
                return obj;
              }
              closure_128_1();
              focusChatInput(closure_128_0.message_channel_id);
              navigation = 3;
              return { value: "IconComponent", done: "+51" };
            } catch (tmp18) {
              navigation = tmp;
              throw tmp18;
            }
          }
        }),
        items7,
      );
      const items8 = [onPress, other_user.message_channel_id];
      const callback7 = notification_center_v2.useCallback(() => {
        onPress();
        const message_channel_id = other_user.message_channel_id;
        let obj;
        let tmp2;
        if (null != message_channel_id) {
          obj = { channelId: message_channel_id };
          tmp2 = obj;
        }
        obj = tmp2;
        const timerId = setTimeout(() => {
          const ComponentDispatch = other_user(1121).ComponentDispatch;
          return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
        }, 0);
      }, items8);
      if (other_user.disable_action) {
        let obj3 = { actionButtons: [] };
        return obj3;
      } else {
        if (other_user.type !== tmp2(6058).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
          if (other_user.type !== tmp2(6058).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
            if (other_user.type !== tmp2(6058).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
              if (other_user.type === tmp2(6058).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
                let obj4 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                let obj5 = { id: "view_friend_requests", text: null, variant: "secondary", size: "md", onPress: null };
                const intl14 = tmp2(1126).intl;
                obj5.text = intl14.string(tmp2(1126).t["lMR96+"]);
                obj5.onPress = callback3;
                const items9 = [obj5];
                obj4.actionButtons = items9;
                let obj6 = { name: constants3.ACTION, label: null };
                const intl15 = tmp2(1126).intl;
                obj6.label = intl15.string(tmp2(1126).t["lMR96+"]);
                const items10 = [obj6];
                obj4.accessibilityActions = items10;
                obj4.onAccessibilityAction = callback3;
                return obj4;
              } else if (other_user.type === tmp2(6058).NotificationCenterItems.GO_LIVE_PUSH) {
                const obj7 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                const obj8 = { id: "join_stream", text: null, variant: "secondary", size: "md", onPress: null };
                const intl12 = tmp2(1126).intl;
                obj8.text = intl12.string(tmp2(1126).t["Pqj7h+"]);
                obj8.onPress = onPress;
                const items11 = [obj8];
                obj7.actionButtons = items11;
                const obj9 = { name: constants3.ACTION, label: null };
                const intl13 = tmp2(1126).intl;
                obj9.label = intl13.string(tmp2(1126).t["Pqj7h+"]);
                const items12 = [obj9];
                obj7.accessibilityActions = items12;
                obj7.onAccessibilityAction = onPress;
                return obj7;
              } else {
                if (other_user.type !== tmp2(6058).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
                  if (other_user.type !== tmp2(6058).NotificationCenterItems.DM_FRIEND_NUDGE) {
                    if (other_user.type !== tmp2(6058).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED) {
                      if (other_user.type !== tmp2(6058).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED) {
                        if (other_user.type === tmp2(6058).NotificationCenterItems.FRIEND_SUGGESTION_CREATED) {
                          const obj10 = {
                            actionButtons: null,
                            accessibilityActions: null,
                            onAccessibilityAction: null,
                          };
                          const obj11 = {
                            id: "add_friend",
                            text: null,
                            variant: "secondary",
                            size: "md",
                            onPress: null,
                          };
                          const intl8 = tmp2(1126).intl;
                          obj11.text = intl8.string(tmp2(1126).t["boL/YX"]);
                          obj11.onPress = callback5;
                          const items13 = [obj11];
                          obj10.actionButtons = items13;
                          const obj12 = { name: constants3.ACTION, label: null };
                          const intl9 = tmp2(1126).intl;
                          obj12.label = intl9.string(tmp2(1126).t["boL/YX"]);
                          const items14 = [obj12];
                          obj10.accessibilityActions = items14;
                          obj10.onAccessibilityAction = callback5;
                          return obj10;
                        } else if (
                          other_user.type === tmp2(6058).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED
                        ) {
                          const obj13 = {
                            actionButtons: null,
                            accessibilityActions: null,
                            onAccessibilityAction: null,
                          };
                          const obj14 = {
                            id: "join_event",
                            text: null,
                            variant: "secondary",
                            size: "md",
                            onPress: null,
                          };
                          const intl6 = tmp2(1126).intl;
                          obj14.text = intl6.string(tmp2(1126).t.hRKdcn);
                          obj14.onPress = onPress;
                          const items15 = [obj14];
                          obj13.actionButtons = items15;
                          const obj15 = { name: constants3.ACTION, label: null };
                          const intl7 = tmp2(1126).intl;
                          obj15.label = intl7.string(tmp2(1126).t.hRKdcn);
                          const items16 = [obj15];
                          obj13.accessibilityActions = items16;
                          obj13.onAccessibilityAction = onPress;
                          return obj13;
                        } else if (other_user.type === tmp2(6058).NotificationCenterItems.LIFECYCLE_ITEM) {
                          const item_enum = other_user.item_enum;
                          if (tmp2(6058).ItemEnum.UPDATE_PROFILE === item_enum) {
                            const intl5 = tmp2(1126).intl;
                            let stringResult = intl5.string(tmp2(1126).t.zMRcWL);
                            let str = "update_profile";
                          } else if (tmp2(6058).ItemEnum.FIND_FRIENDS === item_enum) {
                            const intl4 = tmp2(1126).intl;
                            stringResult = intl4.string(tmp2(1126).t["vwL/4s"]);
                            str = "find_friends";
                          } else if (tmp2(6058).ItemEnum.ADD_FRIEND === item_enum) {
                            const intl3 = tmp2(1126).intl;
                            stringResult = intl3.string(tmp2(1126).t["boL/YX"]);
                            str = "add_friend";
                          } else {
                            str = null;
                            stringResult = null;
                            if (tmp2(6058).ItemEnum.FIRST_MESSAGE === item_enum) {
                              const intl19 = tmp2(1126).intl;
                              stringResult = intl19.string(tmp2(1126).t["GuUH7/"]);
                              str = "send_message";
                            }
                          }
                          if (null != stringResult) {
                            if (null != str) {
                              let obj16 = {
                                actionButtons: null,
                                accessibilityActions: null,
                                onAccessibilityAction: null,
                              };
                              const obj17 = { id: str, text: stringResult, variant: "secondary", size: "md", onPress };
                              const items17 = [obj17];
                              obj16.actionButtons = items17;
                              const obj18 = { name: constants3.ACTION, label: stringResult };
                              const items18 = [obj18];
                              obj16.accessibilityActions = items18;
                              obj16.onAccessibilityAction = onPress;
                            }
                            return obj16;
                          }
                          const obj19 = { actionButtons: [] };
                          obj16 = obj19;
                        } else {
                          if (other_user.type !== tmp2(6058).NotificationCenterItems.RECENT_MENTION) {
                            if (other_user.type !== tmp2(6058).NotificationCenterItems.REPLY_MENTION) {
                              if (other_user.type === tmp2(6058).NotificationCenterItems.TRENDING_CONTENT) {
                                const obj20 = {
                                  actionButtons: null,
                                  accessibilityActions: null,
                                  onAccessibilityAction: null,
                                };
                                const obj21 = {
                                  id: "read_summary",
                                  text: null,
                                  variant: "secondary",
                                  size: "md",
                                  onPress: null,
                                };
                                let intl = tmp2(1126).intl;
                                obj21.text = intl.string(tmp2(1126).t.k0Q31F);
                                obj21.onPress = callback7;
                                const items19 = [obj21];
                                obj20.actionButtons = items19;
                                const obj22 = { name: constants3.ACTION, label: null };
                                const intl2 = tmp2(1126).intl;
                                obj22.label = intl2.string(tmp2(1126).t.k0Q31F);
                                const items20 = [obj22];
                                obj20.accessibilityActions = items20;
                                obj20.onAccessibilityAction = callback7;
                                let obj23 = obj20;
                              } else {
                                obj23 = { actionButtons: [] };
                              }
                              return obj23;
                            }
                          }
                          if (canReplyToMessage) {
                            if (type !== constants2.POLL_RESULT) {
                              let obj24 = {
                                actionButtons: null,
                                accessibilityActions: null,
                                onAccessibilityAction: null,
                              };
                              const obj25 = {
                                id: "send_reply",
                                text: null,
                                variant: "secondary",
                                size: "md",
                                onPress: null,
                              };
                              const intl17 = tmp2(1126).intl;
                              obj25.text = intl17.string(tmp2(1126).t.vBq3iT);
                              obj25.onPress = callback6;
                              const items21 = [obj25];
                              obj24.actionButtons = items21;
                              const obj26 = { name: constants3.ACTION, label: null };
                              const intl18 = tmp2(1126).intl;
                              obj26.label = intl18.string(tmp2(1126).t.vBq3iT);
                              const items22 = [obj26];
                              obj24.accessibilityActions = items22;
                              obj24.onAccessibilityAction = callback6;
                            }
                          }
                          const obj27 = { actionButtons: [] };
                          obj24 = obj27;
                        }
                      }
                    }
                  }
                }
                const obj28 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                const obj29 = { id: "send_message", text: null, variant: "secondary", size: "md", onPress: null };
                const intl10 = tmp2(1126).intl;
                obj29.text = intl10.string(tmp2(1126).t["GuUH7/"]);
                obj29.onPress = callback4;
                const items23 = [obj29];
                obj28.actionButtons = items23;
                const obj30 = { name: constants3.ACTION, label: null };
                const intl11 = tmp2(1126).intl;
                obj30.label = intl11.string(tmp2(1126).t["GuUH7/"]);
                const items24 = [obj30];
                obj28.accessibilityActions = items24;
                obj28.onAccessibilityAction = callback4;
                return obj28;
              }
            }
          }
        }
        const obj31 = { actionsNode: null, accessibilityActions: null, onAccessibilityAction: null };
        const obj32 = { onWavePress, onAccept: callback1, onIgnore: callback2, pressed: sharedValue, compactMode };
        obj31.actionsNode = closure_15(closure_30, obj32);
        if (other_user.type === tmp2(6058).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
          const obj33 = { name: constants3.WAVE, label: null };
          const intl16 = tmp2(1126).intl;
          obj33.label = intl16.string(tmp2(1126).t.n8nU4W);
          const items25 = [obj33];
          let items26 = items25;
        } else {
          const obj34 = { name: constants3.ACCEPT, label: null };
          const intl20 = tmp2(1126).intl;
          obj34.label = intl20.string(tmp2(1126).t.zf5jU5);
          items26 = [obj34];
          const obj35 = { name: constants3.IGNORE, label: null };
          const intl21 = tmp2(1126).intl;
          obj35.label = intl21.string(tmp2(1126).t.EBN847);
          items26[1] = obj35;
        }
        obj31.accessibilityActions = items26;
        obj31.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if (constants.WAVE === actionName) {
            callback();
          } else if (constants.ACCEPT === actionName) {
            callback1();
          } else if (constants.IGNORE === actionName) {
            callback2();
          }
        };
        return obj31;
      }
      const tmp2Result = tmp2(4850);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemActionButtons.tsx");

export const IncomingFriendRequestActions = tmp4;
export const useItemActionButtonPropsV2 = tmp5;
export const ForYouItemActionButtons = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForYouItemActionButtons(item) {
      const cResult = require("c").c(19);
      if (cResult[0] !== item) {
        item = item.item;
        _require = item;
        const rowIndex = item.rowIndex;
        dependencyMap = rowIndex;
        const onSoftAckItem = item.onSoftAckItem;
        closure_1 = onSoftAckItem;
        ({ actionButtons, actionsNode, compactMode } = item);
        const tmp10 = _objectWithoutProperties(item, closure_3);
        cResult[0] = item;
        cResult[1] = actionButtons;
        cResult[2] = actionsNode;
        cResult[3] = compactMode;
        cResult[4] = item;
        cResult[5] = onSoftAckItem;
        cResult[6] = tmp10;
        cResult[7] = rowIndex;
        let tmp6 = tmp10;
        let tmp3 = compactMode;
        let tmp2 = actionsNode;
        let arr = actionButtons;
      } else {
        arr = cResult[1];
        tmp2 = cResult[2];
        tmp3 = cResult[3];
        _require = cResult[4];
        closure_1 = cResult[5];
        tmp6 = cResult[6];
        dependencyMap = cResult[7];
      }
      const tmp11 = closure_17();
      let tmp12 = !tmp3;
      if (!tmp3) {
        tmp12 = null != arr;
      }
      if (!tmp12) {
        if (!tmp14) {
          return null;
        }
      }
      if (cResult[8] === arr) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp7) {
              if (cResult[12] === tmp12) {
                let tmp15 = cResult[13];
              }
              let tmp17 = null;
              if (tmp14) {
                tmp17 = tmp2;
              }
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp11.buttonsContainer) {
                  if (cResult[16] === tmp15) {
                    if (cResult[17] === tmp17) {
                      let tmp18 = cResult[18];
                    }
                    return tmp18;
                  }
                }
              }
              const obj2 = { style: tmp11.buttonsContainer };
              let merged = Object.assign(tmp6);
              const items = [tmp15, tmp17];
              obj2.children = items;
              const tmp24 = closure_16(View, obj2);
              cResult[14] = tmp6;
              cResult[15] = tmp11.buttonsContainer;
              cResult[16] = tmp15;
              cResult[17] = tmp17;
              cResult[18] = tmp24;
              tmp18 = tmp24;
            }
          }
        }
      }
      let mapped = tmp12;
      if (tmp12) {
        mapped = arr.map((id, index) => {
          id = id.id;
          const tmp = _objectWithoutProperties(id, closure_1_4);
          closure_1 = tmp;
          let obj = {};
          const merged = Object.assign(tmp);
          obj.onPress = function onPress(arg0) {
            const onPress = closure_1.onPress;
            if (onPress != null) {
              onPress(arg0);
            }
            closure_1(id);
            const obj = AnalyticsUtilsDefault;
            obj.track(constants.NOTIFICATION_CENTER_ACTION, {
              action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.ACTION_BUTTON,
              notification_center_id: id.id,
              item_type: id.type,
              acked: false,
              item_index,
              deeplink: id.deeplink,
              action_button_id: id,
            });
          };
          if (id == null) {
            id = index;
          }
          return closure_1_15(id(item_index[15]).Button, obj, id);
        });
      }
      cResult[8] = arr;
      cResult[9] = tmp4;
      cResult[10] = tmp5;
      cResult[11] = tmp7;
      cResult[12] = tmp12;
      cResult[13] = mapped;
      tmp15 = mapped;
      let obj = require("c");
    }
  : function ForYouItemActionButtons(arg0) {
      ({
        item: require,
        rowIndex: importDefault,
        onSoftAckItem: dependencyMap,
        actionButtons,
        actionsNode,
        compactMode,
      } = arg0);
      let merged = Object.assign(
        arg0,
        Object.assign({ item: 0, rowIndex: 0, onSoftAckItem: 0, actionButtons: 0, actionsNode: 0, compactMode: 0 }),
      );
      let mapped = !compactMode;
      if (!compactMode) {
        mapped = null != actionButtons;
      }
      if (mapped) {
        let obj = { style: tmp2.buttonsContainer };
        let merged1 = Object.assign(merged);
        if (mapped) {
          mapped = actionButtons.map((id, index) => {
            id = id.id;
            const merged = Object.assign(id, Object.assign({ id: 0 }));
            let obj = {};
            const merged1 = Object.assign(merged);
            obj.onPress = function onPress(arg0) {
              const onPress = merged.onPress;
              if (onPress != null) {
                onPress(arg0);
              }
              dependencyMap(_require);
              const obj = AnalyticsUtilsDefault;
              obj.track(constants.NOTIFICATION_CENTER_ACTION, {
                action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.ACTION_BUTTON,
                notification_center_id: _require.id,
                item_type: _require.type,
                acked: false,
                item_index,
                deeplink: _require.deeplink,
                action_button_id: id,
              });
            };
            if (id == null) {
              id = index;
            }
            return closure_1_15(require("components/Button/Button").Button, obj, id);
          });
        }
        const items = [mapped];
        let tmp11 = null;
        if (tmp4) {
          tmp11 = actionsNode;
        }
        items[1] = tmp11;
        obj.children = items;
        let tmp6Result = closure_16(View, obj);
      } else {
        tmp6Result = null;
      }
      return tmp6Result;
    };
