// discord_app/modules/notification_center/native/ForYouItemActionButtons.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import intl22 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import parseURLDefault from "../../../utils/native/parseURL.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import NotificationCenterItemsTypes from "../NotificationCenterItemsTypes.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import PeopleUtilsDefault from "../../people/PeopleUtils.tsx";
import handleSupportedURLDefault from "../../links/native/handleSupportedURL.tsx";
import AddFriendsScreenUtils from "../../main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, dependencyMap, importDefault, item, navigation, other_user;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
function focusChatInput(channelId) {
  let tmp;
  if (null != channelId) {
    let obj = { channelId };
    tmp = obj;
  }
  obj = tmp;
  const timerId = setTimeout(() => {
    const ComponentDispatch = other_user(navigation[9]).ComponentDispatch;
    return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
  }, 0);
}
let closure_3 = ["item", "rowIndex", "onSoftAckItem", "actionButtons", "actionsNode", "compactMode"];
let closure_4 = ["id"];
let View = react_native.View;
({
  AnalyticEvents: unpackModuleId,
  ComponentActions: closure_12,
  EMPTY_STRING_SNOWFLAKE_ID: map1,
  MessageTypes: closure_14,
} = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (compactMode) => {
      let items;
      let onAccept;
      let onIgnore;
      let onWavePress;
      let pressed;
      let sharedValue1;
      let tmp13;
      let obj = pressed(sharedValue1[11]);
      const cResult = obj.c(47);
      ({ onAccept, onIgnore, onWavePress, pressed } = compactMode);
      compactMode = compactMode.compactMode;
      const tmp4 = closure_17();
      let obj2 = pressed(sharedValue1[12]);
      const sharedValue = obj2.useSharedValue(0);
      let obj3 = pressed(sharedValue1[12]);
      sharedValue1 = obj3.useSharedValue(-1);
      let obj4 = pressed(sharedValue1[12]);
      const sharedValue2 = obj4.useSharedValue(-1);
      let obj5 = pressed(sharedValue1[12]);
      const sharedValue3 = obj5.useSharedValue(-1);
      let obj6 = pressed(sharedValue1[12]);
      const fn = function n() {
        let str;
        const withTiming = timing.withTiming;
        let num = 1;
        timing;
        if (pressed.get()) {
          num = 0;
        }
        const obj2 = { opacity: withTiming(num, { duration: 150 }), pointerEvents: str };
        str = "auto";
        if (pressed.get()) {
          str = "none";
        }
        return obj2;
      };
      fn.__closure = { withTiming: pressed(sharedValue1[13]).withTiming, pressed };
      fn.__workletHash = 4204274850517;
      fn.__initData = __initData;
      ({ withTiming: pressed(sharedValue1[13]).withTiming, pressed });
      const animatedStyle = obj6.useAnimatedStyle(fn);
      const fn2 = function s() {
        let items;
        let num4;
        let obj4;
        let obj6;
        let str;
        let withTiming;
        let num = 1;
        if (!pressed.get()) {
          const value = sharedValue.get();
          num = value / sharedValue1.get();
        }
        const value2 = sharedValue1.get();
        const diff = value2 - sharedValue1.get() * num;
        let num2 = 0;
        if (!pressed.get()) {
          num2 = -diff / 2;
        }
        const obj2 = { transform: items, opacity: withTiming(num4), pointerEvents: str };
        const obj3 = { scaleX: obj4.withTiming(num) };
        items = [obj3];
        obj4 = timing;
        const obj5 = { translateX: obj6.withTiming(num2) };
        items[1] = obj5;
        obj6 = timing;
        withTiming = timing.withTiming;
        num4 = 0;
        timing;
        if (pressed.get()) {
          num4 = 1;
        }
        str = "none";
        if (pressed.get()) {
          str = "auto";
        }
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
      ({
        pressed,
        acceptButtonWidth: sharedValue,
        buttonWidth: sharedValue1,
        withTiming: pressed(sharedValue1[13]).withTiming,
      });
      const animatedStyle1 = obj8.useAnimatedStyle(fn2);
      const fn3 = function o() {
        let items;
        const obj = { transform: items };
        items = [{ translateX: sharedValue2.get() / 2 }];
        ({ translateX: sharedValue2.get() / 2 });
        items[1] = { translateY: sharedValue3.get() / 2 };
        ({ translateY: sharedValue3.get() / 2 });
        return obj;
      };
      fn3.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
      fn3.__workletHash = 667441788226;
      fn3.__initData = __initData3;
      const obj10 = pressed(sharedValue1[12]);
      const animatedStyle2 = obj10.useAnimatedStyle(fn3);
      const fn4 = function c() {
        let Easing;
        let items;
        let obj3;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const withTiming = timing.withTiming;
        let str = "-2deg";
        timing;
        if (pressed.get()) {
          str = "8deg";
        }
        const obj = { transform: items };
        const obj2 = { rotateZ: withDelay(450, withRepeat(withTiming(str, obj3), 4, true)) };
        obj3 = { duration: 150, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
        Easing = ReanimatedRexport.Easing;
        items = [obj2, { translateX: -sharedValue2.get() / 2 }];
        ({ translateX: -sharedValue2.get() / 2 });
        items[2] = { translateY: -sharedValue3.get() / 2 };
        ({ translateY: -sharedValue3.get() / 2 });
        return obj;
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
      ({
        withDelay: pressed(sharedValue1[12]).withDelay,
        withRepeat: pressed(sharedValue1[12]).withRepeat,
        withTiming: pressed(sharedValue1[13]).withTiming,
        pressed,
        Easing: pressed(sharedValue1[12]).Easing,
        waveWidth: sharedValue2,
        waveHeight: sharedValue3,
      });
      const animatedStyle3 = obj11.useAnimatedStyle(fn4);
      if (cResult[0] !== sharedValue) {
        const fn5 = function u(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = sharedValue;
        let num = 1;
        cResult[1] = fn5;
        tmp13 = fn5;
      } else {
        tmp13 = cResult[1];
      }
      if (cResult[2] !== sharedValue1) {
        const fn6 = function x(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
        };
        let num2 = 2;
        cResult[2] = sharedValue1;
        cResult[3] = fn6;
      }
      if (cResult[4] === sharedValue3) {
        let tmp15;
        if (cResult[5] === sharedValue2) {
          tmp15 = cResult[6];
        }
        const tmpResult = pressed(sharedValue1[12]);
        class W {
          constructor() {
            const value = pressed.get();
            return { pointerEvents: "none" };
          }
        }
        const obj13 = { pressed };
        W.__closure = obj13;
        let num4 = 3478270246710;
        W.__workletHash = 3478270246710;
        W.__initData = __initData5;
        const animatedProps = tmpResult.useAnimatedProps(W);
        if (cResult[7] === animatedStyle) {
          let tmp18;
          let tmp20;
          if (cResult[8] === tmp4.actionButtonsContainer) {
            tmp18 = cResult[9];
          }
          class W {
            constructor() {
              const value = pressed.get();
              return { pointerEvents: "none" };
            }
          }
          let str = "react.memo_cache_sentinel";
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const string = pressed(tmp2[14]).intl.string;
            class W {
              constructor() {
                const value = pressed.get();
                return { pointerEvents: "none" };
              }
            }
            cResult[10] = tmp21;
            tmp20 = tmp21;
          } else {
            tmp20 = cResult[10];
          }
          let str2 = "md";
          let str3 = "md";
          if (compactMode) {
            str3 = "sm";
          }
          if (cResult[11] === onAccept) {
            let tmp22;
            if (cResult[12] === str3) {
              tmp22 = cResult[13];
            }
            if (cResult[14] === tmp13) {
              let tmp25;
              let tmp29;
              if (cResult[15] === tmp22) {
                tmp25 = cResult[16];
              }
              const _Symbol = Symbol;
              class W {
                constructor() {
                  const value = pressed.get();
                  return { pointerEvents: "none" };
                }
              }
              if (tmp28 === Symbol.for("react.memo_cache_sentinel")) {
                const string2 = pressed(tmp2[14]).intl.string;
                class W {
                  constructor() {
                    const value = pressed.get();
                    return { pointerEvents: "none" };
                  }
                }
                cResult[17] = tmp30;
                tmp29 = tmp30;
              } else {
                tmp29 = cResult[17];
              }
              let str5 = str2;
              if (compactMode) {
                str5 = "sm";
              }
              if (cResult[18] === onIgnore) {
                let tmp31;
                if (cResult[19] === str5) {
                  tmp31 = cResult[20];
                }
                if (cResult[21] === tmp31) {
                  let tmp34;
                  if (cResult[22] === tmp25) {
                    tmp34 = cResult[23];
                  }
                  if (cResult[24] === tmp34) {
                    let tmp40;
                    let tmp42;
                    const _Symbol2 = Symbol;
                    class W {
                      constructor() {
                        const value = pressed.get();
                        return { pointerEvents: "none" };
                      }
                    }
                    if (tmp39 === Symbol.for("react.memo_cache_sentinel")) {
                      const string3 = pressed(tmp2[14]).intl.string;
                      class W {
                        constructor() {
                          const value = pressed.get();
                          return { pointerEvents: "none" };
                        }
                      }
                      cResult[27] = tmp41;
                      tmp40 = tmp41;
                    } else {
                      tmp40 = cResult[27];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp44 = closure_15(pressed(sharedValue1[17]).Text, {
                        maxFontSizeMultiplier: 2,
                        variant: "text-sm/normal",
                        children: "\u{1F44B}",
                      });
                      class W {
                        constructor() {
                          const value = pressed.get();
                          return { pointerEvents: "none" };
                        }
                      }
                      cResult[28] = tmp44;
                      tmp42 = tmp44;
                    } else {
                      tmp42 = cResult[28];
                    }
                    if (cResult[29] === tmp15) {
                      let tmp45;
                      if (cResult[30] === animatedStyle3) {
                        tmp45 = cResult[31];
                      }
                      if (cResult[32] === tmp45) {
                        let tmp49;
                        if (cResult[33] === animatedStyle2) {
                          tmp49 = cResult[34];
                        }
                        if (compactMode) {
                          str2 = "sm";
                        }
                        class W {
                          constructor() {
                            const value = pressed.get();
                            return { pointerEvents: "none" };
                          }
                        }
                        const obj14 = {
                          variant: "secondary",
                          text: tmp40,
                          icon: tmp49,
                          size: str2,
                          onPress: onWavePress,
                        };
                        cResult[35] = onWavePress;
                        cResult[36] = tmp49;
                        cResult[37] = str2;
                        cResult[38] = closure_15(pressed(sharedValue1[15]).Button, obj14);
                        const tmp54 = closure_15(pressed(sharedValue1[15]).Button, obj14);
                      }
                      class W {
                        constructor() {
                          const value = pressed.get();
                          return { pointerEvents: "none" };
                        }
                      }
                      const obj15 = {
                        style: animatedStyle2,
                        accessibilityElementsHidden: true,
                        importantForAccessibility: "no-hide-descendants",
                        children: tmp45,
                      };
                      const tmp51 = closure_15(sharedValue(sharedValue1[12]).View, obj15);
                      cResult[32] = tmp45;
                      cResult[33] = animatedStyle2;
                      cResult[34] = tmp51;
                      tmp49 = tmp51;
                    }
                    const obj16 = { style: animatedStyle3, onLayout: tmp15, children: tmp42 };
                    const tmp48 = closure_15(sharedValue(sharedValue1[12]).View, obj16);
                    cResult[29] = tmp15;
                    cResult[30] = animatedStyle3;
                    cResult[31] = tmp48;
                    tmp45 = tmp48;
                  }
                  class W {
                    constructor() {
                      const value = pressed.get();
                      return { pointerEvents: "none" };
                    }
                  }
                  const obj17 = { style: tmp18, children: tmp34 };
                  cResult[24] = tmp34;
                  cResult[25] = tmp18;
                  cResult[26] = closure_15(sharedValue(sharedValue1[12]).View, obj17);
                  const tmp38 = closure_15(sharedValue(sharedValue1[12]).View, obj17);
                }
                class W {
                  constructor() {
                    const value = pressed.get();
                    return { pointerEvents: "none" };
                  }
                }
                const obj18 = { direction: "horizontal", spacing: 8, children: items };
                items = [tmp25, tmp31];
                const tmp35 = closure_16(pressed(sharedValue1[16]).Stack, obj18);
                cResult[21] = tmp31;
                cResult[22] = tmp25;
                cResult[23] = tmp35;
                tmp34 = tmp35;
              }
              const obj19 = { text: tmp29, variant: "secondary", size: str5, onPress: onIgnore };
              const tmp33 = closure_15(pressed(sharedValue1[15]).Button, obj19, "ignore_friend_request");
              cResult[18] = onIgnore;
              cResult[19] = str5;
              cResult[20] = tmp33;
              tmp31 = tmp33;
            }
            class W {
              constructor() {
                const value = pressed.get();
                return { pointerEvents: "none" };
              }
            }
            const obj20 = { onLayout: tmp13, children: tmp22 };
            const tmp27 = closure_15(View, obj20);
            cResult[14] = tmp13;
            cResult[15] = tmp22;
            cResult[16] = tmp27;
            tmp25 = tmp27;
          }
          const obj21 = { text: tmp20, variant: "primary", size: str3, onPress: onAccept };
          const tmp24 = closure_15(pressed(sharedValue1[15]).Button, obj21, "accept_friend_request");
          cResult[11] = onAccept;
          cResult[12] = str3;
          cResult[13] = tmp24;
          tmp22 = tmp24;
        }
        const items1 = [tmp4.actionButtonsContainer, animatedStyle];
        cResult[7] = animatedStyle;
        cResult[8] = tmp4.actionButtonsContainer;
        cResult[9] = items1;
        tmp18 = items1;
      }
      class G {
        constructor(nativeEvent) {
          const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
          const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
        }
      }
      cResult[4] = sharedValue3;
      cResult[5] = sharedValue2;
      cResult[6] = G;
      tmp15 = G;
    }
  : (pressed) => {
      let Button;
      let Button3;
      let Stack;
      let View3;
      let View4;
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj15;
      let obj17;
      let obj19;
      let obj20;
      let obj21;
      let onAccept;
      let onIgnore;
      let onWavePress;
      let str2;
      let str3;
      pressed = pressed.pressed;
      const compactMode = pressed.compactMode;
      let sharedValue1;
      ({ onAccept, onIgnore, onWavePress } = pressed);
      const tmp3 = sharedValue1;
      const tmp = closure_17();
      let obj = pressed(sharedValue1[12]);
      const sharedValue = obj.useSharedValue(0);
      let obj2 = pressed(sharedValue1[12]);
      sharedValue1 = obj2.useSharedValue(-1);
      let obj3 = pressed(sharedValue1[12]);
      const sharedValue2 = obj3.useSharedValue(-1);
      let obj4 = pressed(sharedValue1[12]);
      const sharedValue3 = obj4.useSharedValue(-1);
      let obj5 = pressed(sharedValue1[12]);
      const fn = function u() {
        let str;
        const withTiming = timing.withTiming;
        let num = 1;
        timing;
        if (pressed.get()) {
          num = 0;
        }
        const obj2 = { opacity: withTiming(num, { duration: 150 }), pointerEvents: str };
        str = "auto";
        if (pressed.get()) {
          str = "none";
        }
        return obj2;
      };
      let obj6 = { withTiming: pressed(sharedValue1[13]).withTiming, pressed };
      fn.__closure = obj6;
      fn.__workletHash = 16537906859890;
      fn.__initData = __initData6;
      const animatedStyle = obj5.useAnimatedStyle(fn);
      const fn2 = function _() {
        let items;
        let num4;
        let obj4;
        let obj6;
        let str;
        let withTiming;
        let num = 1;
        if (!pressed.get()) {
          const value = sharedValue.get();
          num = value / sharedValue1.get();
        }
        const value2 = sharedValue1.get();
        const diff = value2 - sharedValue1.get() * num;
        let num2 = 0;
        if (!pressed.get()) {
          num2 = -diff / 2;
        }
        const obj2 = { transform: items, opacity: withTiming(num4), pointerEvents: str };
        const obj3 = { scaleX: obj4.withTiming(num) };
        items = [obj3];
        obj4 = timing;
        const obj5 = { translateX: obj6.withTiming(num2) };
        items[1] = obj5;
        obj6 = timing;
        withTiming = timing.withTiming;
        num4 = 0;
        timing;
        if (pressed.get()) {
          num4 = 1;
        }
        str = "none";
        if (pressed.get()) {
          str = "auto";
        }
        return obj2;
      };
      const obj7 = pressed(sharedValue1[12]);
      fn2.__closure = {
        pressed,
        acceptButtonWidth: sharedValue,
        buttonWidth: sharedValue1,
        withTiming: pressed(sharedValue1[13]).withTiming,
      };
      fn2.__workletHash = 5611882536509;
      fn2.__initData = __initData7;
      ({
        pressed,
        acceptButtonWidth: sharedValue,
        buttonWidth: sharedValue1,
        withTiming: pressed(sharedValue1[13]).withTiming,
      });
      const animatedStyle1 = obj7.useAnimatedStyle(fn2);
      const fn3 = function h() {
        let items;
        const obj = { transform: items };
        items = [{ translateX: sharedValue2.get() / 2 }];
        ({ translateX: sharedValue2.get() / 2 });
        items[1] = { translateY: sharedValue3.get() / 2 };
        ({ translateY: sharedValue3.get() / 2 });
        return obj;
      };
      fn3.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
      fn3.__workletHash = 12233800916841;
      fn3.__initData = __initData8;
      const obj9 = pressed(sharedValue1[12]);
      const animatedStyle2 = obj9.useAnimatedStyle(fn3);
      const obj10 = pressed(sharedValue1[12]);
      class E {
        constructor() {
          let Easing;
          let items;
          let obj3;
          const withDelay = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          const withTiming = timing.withTiming;
          let str = "-2deg";
          timing;
          if (pressed.get()) {
            str = "8deg";
          }
          const obj = { transform: items };
          const obj2 = { rotateZ: withDelay(450, withRepeat(withTiming(str, obj3), 4, true)) };
          obj3 = { duration: 150, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
          Easing = ReanimatedRexport.Easing;
          items = [obj2, { translateX: -sharedValue2.get() / 2 }];
          ({ translateX: -sharedValue2.get() / 2 });
          items[2] = { translateY: -sharedValue3.get() / 2 };
          ({ translateY: -sharedValue3.get() / 2 });
          return obj;
        }
      }
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
      ({
        withDelay: pressed(sharedValue1[12]).withDelay,
        withRepeat: pressed(sharedValue1[12]).withRepeat,
        withTiming: pressed(sharedValue1[13]).withTiming,
        pressed,
        Easing: pressed(sharedValue1[12]).Easing,
        waveWidth: sharedValue2,
        waveHeight: sharedValue3,
      });
      const animatedStyle3 = obj10.useAnimatedStyle(E);
      const fn4 = function p() {
        const value = pressed.get();
        return { pointerEvents: "none" };
      };
      fn4.__closure = { pressed };
      fn4.__workletHash = 12386905499778;
      fn4.__initData = __initData10;
      const obj12 = pressed(sharedValue1[12]);
      const animatedProps = obj12.useAnimatedProps(fn4);
      const obj13 = { style: items, children: closure_16(Stack, obj17) };
      items = [tmp.actionButtonsContainer, animatedStyle];
      View = sharedValue(sharedValue1[12]).View;
      const obj14 = {
        onLayout(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
        },
        children: closure_15(Button, obj15, "accept_friend_request"),
      };
      Stack = pressed(sharedValue1[16]).Stack;
      obj15 = {
        text: intl.string(pressed(sharedValue1[14]).t.zf5jU5),
        variant: "primary",
        size: str2,
        onPress: onAccept,
      };
      Button = pressed(sharedValue1[15]).Button;
      intl = pressed(sharedValue1[14]).intl;
      let str = "md";
      str2 = "md";
      if (compactMode) {
        str2 = "sm";
      }
      const items1 = [closure_15(View, obj14)];
      const obj16 = {
        text: intl2.string(pressed(tmp3[14]).t.EBN847),
        variant: "secondary",
        size: str3,
        onPress: onIgnore,
      };
      const Button2 = tmp2(tmp3[15]).Button;
      intl2 = tmp2(tmp3[14]).intl;
      str3 = str;
      if (compactMode) {
        str3 = "sm";
      }
      obj17 = { direction: "horizontal", spacing: 8, children: items1 };
      items1[1] = closure_15(Button2, obj16, "ignore_friend_request");
      const items2 = [closure_15(View, obj13)];
      const obj18 = {
        style: animatedStyle1,
        onLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
        },
        children: closure_15(Button3, obj19),
      };
      const View2 = tmp16(tmp3[12]).View;
      const merged = Object.assign(animatedProps);
      obj19 = {
        variant: "secondary",
        text: intl3.string(pressed(tmp3[14]).t.n8nU4W),
        icon: closure_15(View3, obj20),
        size: str,
        onPress: onWavePress,
      };
      Button3 = tmp2(tmp3[15]).Button;
      intl3 = tmp2(tmp3[14]).intl;
      obj20 = {
        style: animatedStyle2,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: closure_15(View4, obj21),
      };
      View3 = tmp16(tmp3[12]).View;
      obj21 = {
        style: animatedStyle3,
        onLayout(nativeEvent) {
          const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
          const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
        },
        children: closure_15(pressed(tmp3[17]).Text, {
          maxFontSizeMultiplier: 2,
          variant: "text-sm/normal",
          children: "\u{1F44B}",
        }),
      };
      View4 = tmp16(tmp3[12]).View;
      if (compactMode) {
        str = "sm";
      }
      const obj22 = { children: items2 };
      items2[1] = closure_15(View2, obj18);
      return closure_16(View, obj22);
    };
let closure_30 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (other_user, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      let closure_1;
      let first;
      let sharedValue;
      let tmp9;
      _require = other_user;
      importDefault = arg1;
      dependencyMap = arg2;
      closure_3 = arg3;
      closure_4 = arg5;
      let closure_5 = arg6;
      let tmp = _require;
      let tmp2 = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(114);
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
        first = items;
      } else {
        first = cResult[0];
      }
      let message = other_user.message;
      let channel_id;
      const tmp7 = cResult[1];
      if (message != null) {
        channel_id = message.channel_id;
      }
      if (tmp7 !== channel_id) {
        const message2 = other_user.message;
        let channel_id1;
        if (message2 != null) {
          channel_id1 = message2.channel_id;
        }
        class T {
          constructor() {
            const message = other_user.message;
            let channel_id;
            const getChannel = ChannelStore.getChannel;
            if (message != null) {
              channel_id = message.channel_id;
            }
            return getChannel(channel_id);
          }
        }
        cResult[1] = channel_id1;
        cResult[2] = T;
        tmp9 = T;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      const message3 = other_user.message;
      const tmpResult3 = tmp(7635);
      const canReplyToMessage = tmpResult3.useCanReplyToMessage(stateFromStores, other_user.message);
      if (message3 != null) {
        const type = message3.type;
      }
      if (cResult[3] === other_user) {
        if (cResult[4] === arg5) {
          let tmp13;
          if (cResult[5] === id) {
            tmp13 = cResult[6];
          }
          let closure_8 = tmp13;
          const tmpResult4 = tmp(4612);
          class T {
            constructor() {
              const message = other_user.message;
              let channel_id;
              const getChannel = ChannelStore.getChannel;
              if (message != null) {
                channel_id = message.channel_id;
              }
              return getChannel(channel_id);
            }
          }
          sharedValue = tmpResult4.useSharedValue(false);
          if (cResult[7] === arg3) {
            if (cResult[8] === sharedValue) {
              if (cResult[9] === other_user) {
                if (cResult[10] === id) {
                  let tmp15;
                  if (cResult[11] === arg6) {
                    tmp15 = cResult[12];
                  }
                  let closure_10 = tmp15;
                  if (cResult[13] === other_user.applicationId) {
                    if (cResult[14] === other_user.type) {
                      let tmp16;
                      if (cResult[15] === id) {
                        tmp16 = cResult[16];
                      }
                      let closure_11 = tmp16;
                      if (cResult[17] !== arg2) {
                        class U {
                          constructor() {
                            if (navigation != null) {
                              navigation.navigate("friends", { screen: "requests" });
                            }
                          }
                        }
                        cResult[17] = arg2;
                        class B {
                          constructor() {
                            let applicationId;
                            const obj = { userId: id, applicationId, location: "notification_center_v2" };
                            const cancelFriendRequest = PeopleUtilsDefault.cancelFriendRequest;
                            applicationId = undefined;
                            PeopleUtilsDefault;
                            if (
                              other_user.type ===
                              NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                            ) {
                              applicationId = other_user.applicationId;
                            }
                            cancelFriendRequest(obj);
                          }
                        }
                        cResult[18] = U;
                      } else {
                        class U {
                          constructor() {
                            if (navigation != null) {
                              navigation.navigate("friends", { screen: "requests" });
                            }
                          }
                        }
                      }
                      class B {
                        constructor() {
                          let applicationId;
                          const obj = { userId: id, applicationId, location: "notification_center_v2" };
                          const cancelFriendRequest = PeopleUtilsDefault.cancelFriendRequest;
                          applicationId = undefined;
                          PeopleUtilsDefault;
                          if (
                            other_user.type ===
                            NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                          ) {
                            applicationId = other_user.applicationId;
                          }
                          cancelFriendRequest(obj);
                        }
                      }
                      if (cResult[21] !== id) {
                        class U {
                          constructor() {
                            if (navigation != null) {
                              navigation.navigate("friends", { screen: "requests" });
                            }
                          }
                        }
                        cResult[21] = id;
                        class B {
                          constructor() {
                            let applicationId;
                            const obj = { userId: id, applicationId, location: "notification_center_v2" };
                            const cancelFriendRequest = PeopleUtilsDefault.cancelFriendRequest;
                            applicationId = undefined;
                            PeopleUtilsDefault;
                            if (
                              other_user.type ===
                              NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                            ) {
                              applicationId = other_user.applicationId;
                            }
                            cancelFriendRequest(obj);
                          }
                        }
                        cResult[22] = tmp19;
                      } else {
                        class U {
                          constructor() {
                            if (navigation != null) {
                              navigation.navigate("friends", { screen: "requests" });
                            }
                          }
                        }
                      }
                      if (cResult[23] === stateFromStores) {
                        class U {
                          constructor() {
                            if (navigation != null) {
                              navigation.navigate("friends", { screen: "requests" });
                            }
                          }
                        }
                      }
                      class D {
                        constructor() {
                          tmp = closure_1(closure_2[23]);
                          obj = {
                            userId: closure_6,
                            applicationId: null,
                            location: "notification_center_v2",
                            onConfirm: null,
                          };
                          maybeConfirmFriendRequestAccept = tmp.maybeConfirmFriendRequestAccept;
                          tmp2 = closure_0;
                          applicationId = undefined;
                          if (
                            closure_0.type ===
                            closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                          ) {
                            applicationId = tmp2.applicationId;
                          }
                          obj.applicationId = applicationId;
                          obj.onConfirm = function onConfirm() {
                            user = user.getUser(id);
                            if (null != user) {
                              const intl = closure_0(navigation[14]).intl;
                              const format = intl.format;
                              let username = user.globalName;
                              const v5Uzkdp = closure_0(navigation[14]).t["5Uzkdp"];
                              if (username == null) {
                                username = user.username;
                              }
                              const obj = { username };
                              closure_1_5(format(v5Uzkdp, obj));
                            }
                            const result = sharedValue.set(true);
                            closure_1_0.enableBadge = false;
                            closure_1_3(closure_1_0);
                          };
                          result = maybeConfirmFriendRequestAccept(obj);
                          return;
                        }
                      }
                      const fn2 = function () {
                        return other_user(...arguments);
                      };
                      cResult[23] = stateFromStores;
                      cResult[24] = arg1;
                      cResult[25] = other_user.message_channel_id;
                      cResult[26] = other_user.message_id;
                      cResult[27] = fn2;
                    }
                  }
                  class B {
                    constructor() {
                      let applicationId;
                      const obj = { userId: id, applicationId, location: "notification_center_v2" };
                      const cancelFriendRequest = PeopleUtilsDefault.cancelFriendRequest;
                      applicationId = undefined;
                      PeopleUtilsDefault;
                      if (
                        other_user.type ===
                        NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                      ) {
                        applicationId = other_user.applicationId;
                      }
                      cancelFriendRequest(obj);
                    }
                  }
                  cResult[13] = other_user.applicationId;
                  class D {
                    constructor() {
                      tmp = closure_1(closure_2[23]);
                      obj = {
                        userId: closure_6,
                        applicationId: null,
                        location: "notification_center_v2",
                        onConfirm: null,
                      };
                      maybeConfirmFriendRequestAccept = tmp.maybeConfirmFriendRequestAccept;
                      tmp2 = closure_0;
                      applicationId = undefined;
                      if (
                        closure_0.type ===
                        closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
                      ) {
                        applicationId = tmp2.applicationId;
                      }
                      obj.applicationId = applicationId;
                      obj.onConfirm = function onConfirm() {
                        user = user.getUser(id);
                        if (null != user) {
                          const intl = closure_0(navigation[14]).intl;
                          const format = intl.format;
                          let username = user.globalName;
                          const v5Uzkdp = closure_0(navigation[14]).t["5Uzkdp"];
                          if (username == null) {
                            username = user.username;
                          }
                          const obj = { username };
                          closure_1_5(format(v5Uzkdp, obj));
                        }
                        const result = sharedValue.set(true);
                        closure_1_0.enableBadge = false;
                        closure_1_3(closure_1_0);
                      };
                      result = maybeConfirmFriendRequestAccept(obj);
                      return;
                    }
                  }
                  cResult[15] = id;
                  cResult[16] = B;
                  tmp16 = B;
                }
              }
            }
          }
          class D {
            constructor() {
              tmp = closure_1(closure_2[23]);
              obj = { userId: closure_6, applicationId: null, location: "notification_center_v2", onConfirm: null };
              maybeConfirmFriendRequestAccept = tmp.maybeConfirmFriendRequestAccept;
              tmp2 = closure_0;
              applicationId = undefined;
              if (
                closure_0.type === closure_0(closure_2[24]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
              ) {
                applicationId = tmp2.applicationId;
              }
              obj.applicationId = applicationId;
              obj.onConfirm = function onConfirm() {
                user = user.getUser(id);
                if (null != user) {
                  const intl = closure_0(navigation[14]).intl;
                  const format = intl.format;
                  let username = user.globalName;
                  const v5Uzkdp = closure_0(navigation[14]).t["5Uzkdp"];
                  if (username == null) {
                    username = user.username;
                  }
                  const obj = { username };
                  closure_1_5(format(v5Uzkdp, obj));
                }
                const result = sharedValue.set(true);
                closure_1_0.enableBadge = false;
                closure_1_3(closure_1_0);
              };
              result = maybeConfirmFriendRequestAccept(obj);
              return;
            }
          }
          cResult[7] = arg3;
          cResult[8] = sharedValue;
          cResult[9] = other_user;
          cResult[10] = id;
          cResult[11] = arg6;
          cResult[12] = D;
          tmp15 = D;
        }
      }
      const fn = function b() {
        let tmp5;
        const obj = AddFriendsScreenUtils;
        obj.sendWave(id, false, "You Tab");
        const dMFromUserId = ChannelStore.getDMFromUserId(id);
        if (null != dMFromUserId) {
          const _HermesInternal = HermesInternal;
          const obj2 = {
            payload: tmp5("https://discord.com/channels/@me/" + dMFromUserId).payload,
            safe: true,
            navigationReplace: false,
          };
          tmp5 = parseURLDefault;
          handleSupportedURLDefault(obj2);
        }
        closure_4(other_user);
      };
      cResult[3] = other_user;
      cResult[4] = arg5;
      cResult[5] = id;
      cResult[6] = fn;
      tmp13 = fn;
    }
  : (other_user, onPress, arg2, arg3, fn, arg5, arg6, compactMode) => {
      let intl;
      let intl10;
      let intl11;
      let intl12;
      let intl13;
      let intl14;
      let intl15;
      let intl16;
      let intl17;
      let intl18;
      let intl2;
      let intl20;
      let intl21;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let items10;
      let items11;
      let items12;
      let items13;
      let items14;
      let items15;
      let items16;
      let items17;
      let items18;
      let items19;
      let items20;
      let items21;
      let items22;
      let items23;
      let items24;
      let items26;
      let items9;
      let obj32;
      let onWavePress;
      let type;
      _require = other_user;
      dependencyMap = arg2;
      closure_3 = arg3;
      closure_4 = arg5;
      let closure_5 = arg6;
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
      let tmp3 = dependencyMap;
      let obj = require("useStateFromStores");
      const items = [onWavePress];
      const stateFromStores = obj.useStateFromStores(items, () => {
        const message = other_user.message;
        let channel_id;
        const getChannel = ChannelStore.getChannel;
        if (message != null) {
          channel_id = message.channel_id;
        }
        return getChannel(channel_id);
      });
      let obj2 = require("canReplyToMessage");
      let message = other_user.message;
      const canReplyToMessage = obj2.useCanReplyToMessage(stateFromStores, other_user.message);
      if (message != null) {
        type = message.type;
      }
      const items1 = [id, arg5, other_user];
      const POLL_RESULT = constants2.POLL_RESULT;
      onWavePress = notification_center_v2.useCallback(() => {
        let tmp5;
        const obj = AddFriendsScreenUtils;
        obj.sendWave(id, false, "You Tab");
        const dMFromUserId = ChannelStore.getDMFromUserId(id);
        if (null != dMFromUserId) {
          const _HermesInternal = HermesInternal;
          const obj2 = {
            payload: tmp5("https://discord.com/channels/@me/" + dMFromUserId).payload,
            safe: true,
            navigationReplace: false,
          };
          tmp5 = parseURLDefault;
          handleSupportedURLDefault(obj2);
        }
        closure_4(other_user);
      }, items1);
      const tmp2Result = tmp2(4612);
      const sharedValue = tmp2Result.useSharedValue(false);
      const items2 = [arg3, sharedValue, other_user, id, arg6];
      const callback1 = notification_center_v2.useCallback(() => {
        let applicationId;
        let obj = {
          userId: id,
          applicationId,
          location: notification_center_v2,
          onConfirm() {
            const user = sharedValue.getUser(id);
            if (null != user) {
              const intl = closure_0(navigation[14]).intl;
              const format = intl.format;
              let username = user.globalName;
              const v5Uzkdp = closure_0(navigation[14]).t["5Uzkdp"];
              if (username == null) {
                username = user.username;
              }
              const obj = { username };
              closure_1_5(format(v5Uzkdp, obj));
            }
            const result = closure_1_10.set(true);
            closure_1_0.enableBadge = false;
            closure_1_3(closure_1_0);
          },
        };
        const maybeConfirmFriendRequestAccept = PeopleUtilsDefault.maybeConfirmFriendRequestAccept;
        applicationId = undefined;
        PeopleUtilsDefault;
        if (
          other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
        ) {
          applicationId = other_user.applicationId;
        }
        let result = maybeConfirmFriendRequestAccept(obj);
      }, items2);
      const items3 = [, ,];
      ({ applicationId: arr4[0], type: arr4[1] } = other_user);
      items3[2] = id;
      const callback2 = notification_center_v2.useCallback(() => {
        let applicationId;
        const obj = { userId: id, applicationId, location: notification_center_v2 };
        const cancelFriendRequest = PeopleUtilsDefault.cancelFriendRequest;
        applicationId = undefined;
        PeopleUtilsDefault;
        if (
          other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS
        ) {
          applicationId = other_user.applicationId;
        }
        cancelFriendRequest(obj);
      }, items3);
      const items4 = [arg2];
      const callback3 = notification_center_v2.useCallback(() => {
        if (navigation != null) {
          navigation.navigate("friends", { screen: "requests" });
        }
      }, items4);
      const items5 = [id];
      const callback4 = notification_center_v2.useCallback(() => {
        let obj = ChannelActionCreatorsDefault;
        const dMChannel = obj.getDMChannel(id);
        dMChannel.then((channelId) => {
          const tmp = closure_1(closure_2[21]);
          closure_1(closure_2[22])({
            payload: tmp("https://discord.com/channels/@me/" + channelId).payload,
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
            const ComponentDispatch = other_user(navigation[9]).ComponentDispatch;
            return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
          }, 0);
        });
      }, items5);
      const items6 = [id];
      const callback5 = notification_center_v2.useCallback(() => {
        let intl;
        let obj3;
        const obj2 = { userId: id, context: obj3 };
        obj3 = { location: notification_center_v2 };
        const obj = RelationshipActionCreatorsDefault;
        obj.addRelationship(obj2);
        const obj4 = { key: "NOTIF_CENTER_V2_ADD_FRIEND_TOAST", content: intl.string(intl22.t["7MAxkR"]) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl22.intl;
        open(obj4);
      }, items6);
      const items7 = [onPress, stateFromStores, ,];
      ({ message_id: arr8[2], message_channel_id: arr8[3] } = other_user);
      const callback6 = notification_center_v2.useCallback(
        id(function* () {
          let c2;
          let closure_0;
          if (navigation === 2) {
            navigation = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
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
                  const tmp6 = null != tmp.message_id && null != stateFromStores;
                  if (tmp6) {
                    const obj5 = {
                      messageId: tmp.message_id,
                      channel: stateFromStores,
                      shouldMention: true,
                      showMentionToggle: true,
                    };
                    c1 = 1;
                    const obj2 = tmp(navigation[28]);
                    navigation = 1;
                    const obj6 = { value: obj2.createShallowPendingReply(obj5), done: false };
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
              return { value: "IconComponent", done: null };
            } catch (tmp17) {
              navigation = 3;
              throw tmp17;
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
          const ComponentDispatch = other_user(navigation[9]).ComponentDispatch;
          return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
        }, 0);
      }, items8);
      if (other_user.disable_action) {
        let obj3 = { actionButtons: [] };
        return obj3;
      } else {
        if (other_user.type !== tmp2(7125).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
          if (other_user.type !== tmp2(7125).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
            if (other_user.type !== tmp2(7125).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
              if (other_user.type === tmp2(7125).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
                let obj4 = { actionButtons: items9, accessibilityActions: items10, onAccessibilityAction: callback3 };
                let obj5 = {
                  id: "view_friend_requests",
                  text: intl14.string(tmp2(1126).t["lMR96+"]),
                  variant: "secondary",
                  size: "md",
                  onPress: callback3,
                };
                intl14 = tmp2(1126).intl;
                items9 = [obj5];
                let obj6 = { name: constants3.ACTION, label: intl15.string(tmp2(1126).t["lMR96+"]) };
                intl15 = tmp2(1126).intl;
                items10 = [obj6];
                return obj4;
              } else if (other_user.type === tmp2(7125).NotificationCenterItems.GO_LIVE_PUSH) {
                const obj7 = { actionButtons: items11, accessibilityActions: items12, onAccessibilityAction: onPress };
                const obj8 = {
                  id: "join_stream",
                  text: intl12.string(tmp2(1126).t["Pqj7h+"]),
                  variant: "secondary",
                  size: "md",
                  onPress,
                };
                intl12 = tmp2(1126).intl;
                items11 = [obj8];
                const obj9 = { name: constants3.ACTION, label: intl13.string(tmp2(1126).t["Pqj7h+"]) };
                intl13 = tmp2(1126).intl;
                items12 = [obj9];
                return obj7;
              } else {
                if (other_user.type !== tmp2(7125).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
                  if (other_user.type !== tmp2(7125).NotificationCenterItems.DM_FRIEND_NUDGE) {
                    if (other_user.type !== tmp2(7125).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED) {
                      if (other_user.type !== tmp2(7125).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED) {
                        if (other_user.type === tmp2(7125).NotificationCenterItems.FRIEND_SUGGESTION_CREATED) {
                          const obj10 = {
                            actionButtons: items13,
                            accessibilityActions: items14,
                            onAccessibilityAction: callback5,
                          };
                          const obj11 = {
                            id: "add_friend",
                            text: intl8.string(tmp2(1126).t["boL/YX"]),
                            variant: "secondary",
                            size: "md",
                            onPress: callback5,
                          };
                          intl8 = tmp2(1126).intl;
                          items13 = [obj11];
                          const obj12 = { name: constants3.ACTION, label: intl9.string(tmp2(1126).t["boL/YX"]) };
                          intl9 = tmp2(1126).intl;
                          items14 = [obj12];
                          return obj10;
                        } else if (
                          other_user.type === tmp2(7125).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED
                        ) {
                          const obj13 = {
                            actionButtons: items15,
                            accessibilityActions: items16,
                            onAccessibilityAction: onPress,
                          };
                          const obj14 = {
                            id: "join_event",
                            text: intl6.string(tmp2(1126).t.hRKdcn),
                            variant: "secondary",
                            size: "md",
                            onPress,
                          };
                          intl6 = tmp2(1126).intl;
                          items15 = [obj14];
                          const obj15 = { name: constants3.ACTION, label: intl7.string(tmp2(1126).t.hRKdcn) };
                          intl7 = tmp2(1126).intl;
                          items16 = [obj15];
                          return obj13;
                        } else if (other_user.type === tmp2(7125).NotificationCenterItems.LIFECYCLE_ITEM) {
                          let stringResult;
                          let str;
                          const item_enum = other_user.item_enum;
                          if (tmp2(7125).ItemEnum.UPDATE_PROFILE === item_enum) {
                            const intl5 = tmp2(1126).intl;
                            stringResult = intl5.string(tmp2(1126).t.zMRcWL);
                            str = "update_profile";
                          } else if (tmp2(7125).ItemEnum.FIND_FRIENDS === item_enum) {
                            const intl4 = tmp2(1126).intl;
                            stringResult = intl4.string(tmp2(1126).t["vwL/4s"]);
                            str = "find_friends";
                          } else if (tmp2(7125).ItemEnum.ADD_FRIEND === item_enum) {
                            const intl3 = tmp2(1126).intl;
                            stringResult = intl3.string(tmp2(1126).t["boL/YX"]);
                            str = "add_friend";
                          } else {
                            str = null;
                            stringResult = null;
                            if (tmp2(7125).ItemEnum.FIRST_MESSAGE === item_enum) {
                              const intl19 = tmp2(1126).intl;
                              stringResult = intl19.string(tmp2(1126).t["GuUH7/"]);
                              str = "send_message";
                            }
                          }
                          if (null != stringResult) {
                            let obj16;
                            if (null != str) {
                              obj16 = {
                                actionButtons: items17,
                                accessibilityActions: items18,
                                onAccessibilityAction: onPress,
                              };
                              items17 = [{ id: str, text: stringResult, variant: "secondary", size: "md", onPress }];
                              items18 = [{ name: constants3.ACTION, label: stringResult }];
                              const obj17 = { id: str, text: stringResult, variant: "secondary", size: "md", onPress };
                              const obj18 = { name: constants3.ACTION, label: stringResult };
                            }
                            return obj16;
                          }
                          obj16 = { actionButtons: [] };
                          const obj19 = { actionButtons: [] };
                        } else {
                          let obj23;
                          if (other_user.type !== tmp2(7125).NotificationCenterItems.RECENT_MENTION) {
                            if (other_user.type !== tmp2(7125).NotificationCenterItems.REPLY_MENTION) {
                              if (other_user.type === tmp2(7125).NotificationCenterItems.TRENDING_CONTENT) {
                                const obj20 = {
                                  actionButtons: items19,
                                  accessibilityActions: items20,
                                  onAccessibilityAction: callback7,
                                };
                                const obj21 = {
                                  id: "read_summary",
                                  text: intl.string(tmp2(1126).t.k0Q31F),
                                  variant: "secondary",
                                  size: "md",
                                  onPress: callback7,
                                };
                                intl = tmp2(1126).intl;
                                items19 = [obj21];
                                const obj22 = { name: constants3.ACTION, label: intl2.string(tmp2(1126).t.k0Q31F) };
                                intl2 = tmp2(1126).intl;
                                items20 = [obj22];
                                obj23 = obj20;
                              } else {
                                obj23 = { actionButtons: [] };
                              }
                            }
                            return obj23;
                          }
                          if (canReplyToMessage) {
                            let obj24;
                            if (type !== POLL_RESULT) {
                              obj24 = {
                                actionButtons: items21,
                                accessibilityActions: items22,
                                onAccessibilityAction: callback6,
                              };
                              const obj25 = {
                                id: "send_reply",
                                text: intl17.string(tmp2(1126).t.vBq3iT),
                                variant: "secondary",
                                size: "md",
                                onPress: callback6,
                              };
                              intl17 = tmp2(1126).intl;
                              items21 = [obj25];
                              const obj26 = { name: constants3.ACTION, label: intl18.string(tmp2(1126).t.vBq3iT) };
                              intl18 = tmp2(1126).intl;
                              items22 = [obj26];
                            }
                            obj23 = obj24;
                          }
                          obj24 = { actionButtons: [] };
                          const obj27 = { actionButtons: [] };
                        }
                      }
                    }
                  }
                }
                const obj28 = {
                  actionButtons: items23,
                  accessibilityActions: items24,
                  onAccessibilityAction: callback4,
                };
                const obj29 = {
                  id: "send_message",
                  text: intl10.string(tmp2(1126).t["GuUH7/"]),
                  variant: "secondary",
                  size: "md",
                  onPress: callback4,
                };
                intl10 = tmp2(1126).intl;
                items23 = [obj29];
                const obj30 = { name: constants3.ACTION, label: intl11.string(tmp2(1126).t["GuUH7/"]) };
                intl11 = tmp2(1126).intl;
                items24 = [obj30];
                return obj28;
              }
            }
          }
        }
        const obj31 = {
          actionsNode: closure_15(closure_30, obj32),
          accessibilityActions: items26,
          onAccessibilityAction(nativeEvent) {
            const actionName = nativeEvent.nativeEvent.actionName;
            if (constants.WAVE === actionName) {
              callback();
            } else if (constants.ACCEPT === actionName) {
              callback1();
            } else if (constants.IGNORE === actionName) {
              callback2();
            }
          },
        };
        obj32 = { onWavePress, onAccept: callback1, onIgnore: callback2, pressed: sharedValue, compactMode };
        if (other_user.type === tmp2(7125).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
          const obj33 = { name: constants3.WAVE, label: intl16.string(tmp2(1126).t.n8nU4W) };
          intl16 = tmp2(1126).intl;
          const items25 = [obj33];
          items26 = items25;
        } else {
          const obj34 = { name: constants3.ACCEPT, label: intl20.string(tmp2(1126).t.zf5jU5) };
          intl20 = tmp2(1126).intl;
          items26 = [obj34];
          const obj35 = { name: constants3.IGNORE, label: intl21.string(tmp2(1126).t.EBN847) };
          intl21 = tmp2(1126).intl;
          items26[1] = obj35;
        }
        return obj31;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (item) => {
      let actionButtons;
      let actionsNode;
      let arr;
      let closure_0;
      let closure_2;
      let compactMode;
      let items;
      let tmp2;
      let tmp3;
      let tmp6;
      let obj = require("react");
      const cResult = obj.c(19);
      if (cResult[0] !== item) {
        item = item.item;
        _require = item;
        const rowIndex = item.rowIndex;
        dependencyMap = rowIndex;
        const onSoftAckItem = item.onSoftAckItem;
        let closure_1 = onSoftAckItem;
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
        tmp6 = tmp10;
        tmp3 = compactMode;
        tmp2 = actionsNode;
        arr = actionButtons;
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
      if (!(!tmp3 && null != arr)) {
        if (null == tmp2) {
          return null;
        }
      }
      if (cResult[8] === arr) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp7) {
              let tmp15;
              if (cResult[12] === (!tmp3 && null != arr)) {
                tmp15 = cResult[13];
              }
              let tmp17 = null;
              if (null != tmp2) {
                tmp17 = tmp2;
              }
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp11.buttonsContainer) {
                  if (cResult[16] === tmp15) {
                    let tmp18;
                    if (cResult[17] === tmp17) {
                      tmp18 = cResult[18];
                    }
                    return tmp18;
                  }
                }
              }
              let obj2 = { style: tmp11.buttonsContainer, children: items };
              let merged = Object.assign(tmp6);
              items = [tmp15, tmp17];
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
      const tmp16 =
        !tmp3 &&
        null != arr &&
        arr.map((id, index) => {
          id = id.id;
          const tmp = _objectWithoutProperties(id, closure_1_4);
          closure_1 = tmp;
          let obj = {
            onPress(arg0) {
              const onPress = closure_1.onPress;
              if (onPress != null) {
                onPress(arg0);
              }
              closure_1(id);
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.ACTION_BUTTON,
                notification_center_id: id.id,
                item_type: id.type,
                acked: false,
                item_index,
                deeplink: id.deeplink,
                action_button_id: id,
              };
              obj.track(unpackModuleId.NOTIFICATION_CENTER_ACTION, obj2);
            },
          };
          const Button = id(item_index[15]).Button;
          const merged = Object.assign(tmp);
          if (id == null) {
            id = index;
          }
          return closure_1_15(Button, obj, id);
        });
      cResult[8] = arr;
      cResult[9] = tmp4;
      cResult[10] = tmp5;
      cResult[11] = tmp7;
      cResult[12] = !tmp3 && null != arr;
      cResult[13] = tmp16;
      tmp15 = tmp16;
    }
  : (arg0) => {
      let actionButtons;
      let actionsNode;
      let compactMode;
      let item_index;
      let items;
      let require;
      let tmp6Result;
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
      const tmp2 = closure_17();
      if (!compactMode) {
        mapped = null != actionButtons;
      }
      const tmp4 = null != actionsNode;
      if (mapped) {
        let obj = { style: tmp2.buttonsContainer, children: items };
        let merged1 = Object.assign(merged);
        if (mapped) {
          mapped = actionButtons.map((id, index) => {
            id = id.id;
            const merged = Object.assign(id, Object.assign({ id: 0 }));
            let obj = {
              onPress(arg0) {
                const onPress = merged.onPress;
                if (onPress != null) {
                  onPress(arg0);
                }
                dependencyMap(_require);
                const obj = AnalyticsUtilsDefault;
                const obj2 = {
                  action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.ACTION_BUTTON,
                  notification_center_id: _require.id,
                  item_type: _require.type,
                  acked: false,
                  item_index: importDefault,
                  deeplink: _require.deeplink,
                  action_button_id: id,
                };
                obj.track(unpackModuleId.NOTIFICATION_CENTER_ACTION, obj2);
              },
            };
            const Button = require("components/Button/Button").Button;
            const merged1 = Object.assign(merged);
            if (id == null) {
              id = index;
            }
            return closure_1_15(Button, obj, id);
          });
        }
        items = [mapped];
        let tmp11 = null;
        if (tmp4) {
          tmp11 = actionsNode;
        }
        items[1] = tmp11;
        tmp6Result = closure_16(View, obj);
      } else {
        tmp6Result = null;
      }
      return tmp6Result;
    };
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemActionButtons.tsx");

export const IncomingFriendRequestActions = tmp4;
export const useItemActionButtonPropsV2 = tmp5;
export const ForYouItemActionButtons = tmp6;
