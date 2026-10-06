// discord_app/modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import LegacyBaseButton from "../../../../../_runtime/06147_LegacyBaseButton.js";
import MediaEngineActionCreators from "../../../media_engine/MediaEngineActionCreators.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const ReanimatedRexport_mod = ReanimatedRexport2;
let dependencyMap;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
const StyleSheet = react_native.StyleSheet;
const PUSH_TO_TALK_PIP_PHYSICS = VoicePanelConstants.PUSH_TO_TALK_PIP_PHYSICS;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
const NativeView = ReanimatedRexport.createAnimatedComponent(NativeViewDefault);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_10 = ReanimatedRexport.createAnimatedComponent(native.Icon);
const hitSlop = { top: 6, bottom: 6, left: 6, right: 6 };
let createStyles = createStyles_mod;
let obj = { iconContainer: size, overlay: obj2 };
size = {
  position: "absolute",
  width: 32,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
};
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BLACK };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let sharedValue;
      let tmp3;
      let obj = sharedValue(576);
      const cResult = obj.c(5);
      const obj2 = sharedValue(4618);
      sharedValue = obj2.useSharedValue(false);
      const ref = react.useRef(false);
      if (cResult[0] !== sharedValue) {
        const fn = function n(current) {
          if (current !== ref.current) {
            ref.current = current;
            const obj = MediaEngineActionCreators;
            obj.setPushToTalkState(current);
            const result = sharedValue.set(current);
          }
        };
        cResult[0] = sharedValue;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp3) {
        let tmp4;
        if (cResult[3] === sharedValue) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
      const items = [sharedValue, tmp3];
      cResult[2] = tmp3;
      cResult[3] = sharedValue;
      cResult[4] = items;
      tmp4 = items;
    }
  : () => {
      let sharedValue;
      let obj = sharedValue(4618);
      sharedValue = obj.useSharedValue(false);
      const ref = react.useRef(false);
      const items = [sharedValue];
      const items1 = [
        sharedValue,
        react.useCallback((current) => {
          if (current !== ref.current) {
            ref.current = current;
            const obj = MediaEngineActionCreators;
            obj.setPushToTalkState(current);
            const result = sharedValue.set(current);
          }
        }, items),
      ];
      return items1;
    };
const __initData = {
  code: 'function VoicePanelPIPPushToTalkOverlayTsx1(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:"rgba(0, 0, 0, 0.54)",PUSH_TO_TALK_PIP_PHYSICS)};}',
};
const __initData2 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx2(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}",
};
const __initData3 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx3(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}",
};
const __initData4 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx4(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}",
};
const __initData5 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx5(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}",
};
const __initData6 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx6(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}",
};
const __initData7 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx7(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};}",
};
const __initData8 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx8(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}",
};
const __initData9 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx9(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}",
};
let closure_23 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx10(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}",
};
let closure_24 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx11(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}",
};
let closure_25 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx12(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let WHITE;
      let closure_2;
      let items;
      let items2;
      let pIPState;
      let tmp13;
      let tmp = pIPState;
      let obj = pIPState(576);
      const cResult = obj.c(19);
      let obj2 = pIPState(17236);
      pIPState = obj2.usePIPState();
      const tmp5 = closure_12();
      const tmp6 = WHITE(closure_13(), 2);
      const isPushingToTalk = tmp6[0];
      dependencyMap = tmp8;
      WHITE = isPushingToTalk(587).unsafe_rawColors.WHITE;
      const BLACK = isPushingToTalk(587).unsafe_rawColors.BLACK;
      let obj3 = pIPState(4618);
      const fn = function t() {
        let items;
        let obj3;
        let obj4;
        let str;
        let withSpring2;
        let num = 8;
        if (first.get()) {
          num = 20;
        }
        const rect = {
          right: obj3.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS),
          bottom: obj4.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS),
          transform: items,
          backgroundColor: withSpring2(str, PUSH_TO_TALK_PIP_PHYSICS),
        };
        obj3 = spring;
        obj4 = spring;
        const withSpring = spring.withSpring;
        let num2 = 1;
        spring;
        if (first.get()) {
          num2 = 1.5;
        }
        items = [{ scale: withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) }];
        ({ scale: withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) });
        withSpring2 = spring.withSpring;
        str = "rgba(0, 0, 0, 0.54)";
        spring;
        if (first.get()) {
          str = WHITE;
        }
        return rect;
      };
      let obj4 = {
        isPushingToTalk,
        EXPANDED_ICON_SIZE: 48,
        BASE_ICON_SIZE: 32,
        withSpring: pIPState(5604).withSpring,
        PUSH_TO_TALK_PIP_PHYSICS,
        white: WHITE,
      };
      fn.__closure = obj4;
      fn.__workletHash = 16468415120439;
      fn.__initData = __initData;
      const animatedStyle = obj3.useAnimatedStyle(fn);
      const fn2 = function o() {
        const obj = spring;
        const obj2 = { tintColor: obj.withSpring(first.get() ? BLACK : WHITE, PUSH_TO_TALK_PIP_PHYSICS) };
        return obj2;
      };
      const obj5 = pIPState(4618);
      fn2.__closure = {
        withSpring: pIPState(5604).withSpring,
        isPushingToTalk,
        black: BLACK,
        white: WHITE,
        PUSH_TO_TALK_PIP_PHYSICS,
      };
      fn2.__workletHash = 11469896791985;
      fn2.__initData = __initData2;
      ({
        withSpring: pIPState(5604).withSpring,
        isPushingToTalk,
        black: BLACK,
        white: WHITE,
        PUSH_TO_TALK_PIP_PHYSICS,
      });
      const animatedStyle1 = obj5.useAnimatedStyle(fn2);
      const obj7 = pIPState(4618);
      const tmp9 = isPushingToTalk;
      class P {
        constructor() {
          let tmpResult;
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (first.get()) {
            num = 0.5;
          }
          const obj = {
            opacity: withSpring(num, PUSH_TO_TALK_PIP_PHYSICS),
            borderRadius: tmpResult.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height),
          };
          tmpResult = VoicePanelPIPUtils;
          return obj;
        }
      }
      P.__closure = {
        withSpring: pIPState(5604).withSpring,
        isPushingToTalk,
        PUSH_TO_TALK_PIP_PHYSICS,
        getVoicePanelPIPBorderRadius: pIPState(17234).getVoicePanelPIPBorderRadius,
        pipState: pIPState,
      };
      P.__workletHash = 450590017248;
      P.__initData = __initData3;
      ({
        withSpring: pIPState(5604).withSpring,
        isPushingToTalk,
        PUSH_TO_TALK_PIP_PHYSICS,
        getVoicePanelPIPBorderRadius: pIPState(17234).getVoicePanelPIPBorderRadius,
        pipState: pIPState,
      });
      const animatedStyle2 = obj7.useAnimatedStyle(P);
      if (cResult[0] !== tmp6[1]) {
        const Gesture = tmp(6147).Gesture;
        const Exclusive = Gesture.Exclusive;
        const Gesture2 = tmp(6147).Gesture;
        let num = 30;
        const TapResult = Gesture2.Tap();
        const fn3 = function b(arg0, arg1) {
          const tmp = arg1;
          if (tmp) {
            const obj = ReanimatedRexport2;
            obj.runOnJS(closure_2)(false);
          }
        };
        const obj9 = { runOnJS: tmp(4618).runOnJS, handlePushToTalk: tmp6[1] };
        const onEnd = TapResult.maxDistance(30).onEnd;
        TapResult.maxDistance(30);
        fn3.__closure = obj9;
        let num2 = 13736796804739;
        fn3.__workletHash = 13736796804739;
        fn3.__initData = __initData4;
        const onEndResult = onEnd(fn3);
        const Gesture3 = tmp(6147).Gesture;
        const PanResult = Gesture3.Pan();
        const maxPointersResult = PanResult.maxPointers(1);
        const result = maxPointersResult.shouldCancelWhenOutside(false);
        class E {
          constructor() {
            const obj = ReanimatedRexport2;
            obj.runOnJS(closure_2)(true);
          }
        }
        const onBegin = result.onBegin;
        E.__closure = { runOnJS: tmp(4618).runOnJS, handlePushToTalk: tmp6[1] };
        E.__workletHash = 246779667986;
        E.__initData = __initData6;
        const fn4 = function f() {
          const obj = ReanimatedRexport2;
          obj.runOnJS(closure_2)(false);
        };
        const obj10 = { runOnJS: tmp(4618).runOnJS, handlePushToTalk: tmp6[1] };
        const obj11 = { runOnJS: tmp(4618).runOnJS, handlePushToTalk: tmp6[1] };
        const onFinalize = onBegin(E).onFinalize;
        onBegin(E);
        fn4.__closure = obj11;
        fn4.__workletHash = 12223608557562;
        fn4.__initData = __initData5;
        const ExclusiveResult = Exclusive(onEndResult, onFinalize(fn4));
        cResult[0] = tmp6[1];
        cResult[1] = ExclusiveResult;
        tmp13 = ExclusiveResult;
      } else {
        tmp13 = cResult[1];
      }
      if (cResult[2] === animatedStyle2) {
        let tmp22;
        if (cResult[3] === tmp5.overlay) {
          tmp22 = cResult[4];
        }
        if (cResult[5] === animatedStyle) {
          let tmp24;
          let tmp25;
          if (cResult[6] === tmp5.iconContainer) {
            tmp24 = cResult[7];
          }
          if (cResult[8] !== animatedStyle1) {
            const obj12 = {
              style: animatedStyle1,
              size: tmp(1188).Icon.Sizes.SMALL_20,
              source: tmp9(17339),
              disableColor: true,
            };
            const tmp28 = closure_6(closure_10, obj12);
            cResult[8] = animatedStyle1;
            cResult[9] = tmp28;
            tmp25 = tmp28;
          } else {
            tmp25 = cResult[9];
          }
          if (cResult[10] === tmp24) {
            let tmp29;
            if (cResult[11] === tmp25) {
              tmp29 = cResult[12];
            }
            if (cResult[13] === tmp13) {
              let tmp34;
              if (cResult[14] === tmp29) {
                tmp34 = cResult[15];
              }
              if (cResult[16] === tmp22) {
                let tmp37;
                if (cResult[17] === tmp34) {
                  tmp37 = cResult[18];
                }
                return tmp37;
              }
              const obj13 = { children: items };
              items = [tmp22, tmp34];
              const tmp40 = closure_8(closure_7, obj13);
              cResult[16] = tmp22;
              cResult[17] = tmp34;
              cResult[18] = tmp40;
              tmp37 = tmp40;
            }
            const obj14 = { gesture: tmp13, children: tmp29 };
            const tmp36 = closure_6(tmp(6147).GestureDetector, obj14);
            cResult[13] = tmp13;
            cResult[14] = tmp29;
            cResult[15] = tmp36;
            tmp34 = tmp36;
          }
          const obj15 = { style: tmp24, hitSlop, children: tmp25 };
          const tmp33 = closure_6(NativeView, obj15);
          cResult[10] = tmp24;
          cResult[11] = tmp25;
          cResult[12] = tmp33;
          tmp29 = tmp33;
        }
        const items1 = [tmp5.iconContainer, animatedStyle];
        cResult[5] = animatedStyle;
        cResult[6] = tmp5.iconContainer;
        cResult[7] = items1;
        tmp24 = items1;
      }
      const obj16 = { pointerEvents: "none", style: items2 };
      items2 = [tmp5.overlay, animatedStyle2];
      const tmp23 = closure_6(NativeView, obj16);
      cResult[2] = animatedStyle2;
      cResult[3] = tmp5.overlay;
      cResult[4] = tmp23;
      tmp22 = tmp23;
    }
  : () => {
      let WHITE;
      let handlePushToTalk;
      let items1;
      let items2;
      let items3;
      let obj11;
      let obj12;
      let pIPState;
      let obj = pIPState(17236);
      pIPState = obj.usePIPState();
      const tmp2 = closure_12();
      const tmp3 = WHITE(closure_13(), 2);
      const isPushingToTalk = tmp3[0];
      dependencyMap = tmp5;
      WHITE = isPushingToTalk(587).unsafe_rawColors.WHITE;
      const BLACK = isPushingToTalk(587).unsafe_rawColors.BLACK;
      let obj2 = pIPState(4618);
      let fn = function o() {
        let items;
        let obj3;
        let obj4;
        let str;
        let withSpring2;
        let num = 8;
        if (first.get()) {
          num = 20;
        }
        const rect = {
          right: obj3.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS),
          bottom: obj4.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS),
          transform: items,
          backgroundColor: withSpring2(str, PUSH_TO_TALK_PIP_PHYSICS),
        };
        obj3 = spring;
        obj4 = spring;
        const withSpring = spring.withSpring;
        let num2 = 1;
        spring;
        if (first.get()) {
          num2 = 1.5;
        }
        items = [{ scale: withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) }];
        ({ scale: withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) });
        withSpring2 = spring.withSpring;
        str = "rgba(0, 0, 0, 0.54)";
        spring;
        if (first.get()) {
          str = WHITE;
        }
        return rect;
      };
      let obj3 = {
        isPushingToTalk,
        EXPANDED_ICON_SIZE: 48,
        BASE_ICON_SIZE: 32,
        withSpring: pIPState(5604).withSpring,
        PUSH_TO_TALK_PIP_PHYSICS,
        white: WHITE,
      };
      fn.__closure = obj3;
      fn.__workletHash = 9965349487665;
      fn.__initData = __initData7;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let obj4 = pIPState(4618);
      class P {
        constructor() {
          const obj = spring;
          const obj2 = { tintColor: obj.withSpring(first.get() ? BLACK : WHITE, PUSH_TO_TALK_PIP_PHYSICS) };
          return obj2;
        }
      }
      P.__closure = {
        withSpring: pIPState(5604).withSpring,
        isPushingToTalk,
        black: BLACK,
        white: WHITE,
        PUSH_TO_TALK_PIP_PHYSICS,
      };
      P.__workletHash = 17504109449275;
      P.__initData = __initData8;
      ({
        withSpring: pIPState(5604).withSpring,
        isPushingToTalk,
        black: BLACK,
        white: WHITE,
        PUSH_TO_TALK_PIP_PHYSICS,
      });
      const animatedStyle1 = obj4.useAnimatedStyle(P);
      const obj6 = pIPState(4618);
      class O {
        constructor() {
          let tmpResult;
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (first.get()) {
            num = 0.5;
          }
          const obj = {
            opacity: withSpring(num, PUSH_TO_TALK_PIP_PHYSICS),
            borderRadius: tmpResult.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height),
          };
          tmpResult = VoicePanelPIPUtils;
          return obj;
        }
      }
      O.__closure = {
        withSpring: pIPState(5604).withSpring,
        isPushingToTalk,
        PUSH_TO_TALK_PIP_PHYSICS,
        getVoicePanelPIPBorderRadius: pIPState(17234).getVoicePanelPIPBorderRadius,
        pipState: pIPState,
      };
      O.__workletHash = 10396812460138;
      O.__initData = __initData9;
      let items = [tmp5];
      ({
        withSpring: pIPState(5604).withSpring,
        isPushingToTalk,
        PUSH_TO_TALK_PIP_PHYSICS,
        getVoicePanelPIPBorderRadius: pIPState(17234).getVoicePanelPIPBorderRadius,
        pipState: pIPState,
      });
      const animatedStyle2 = obj6.useAnimatedStyle(O);
      const obj9 = { pointerEvents: "none", style: items1 };
      items1 = [tmp2.overlay, animatedStyle2];
      const obj8 = { children: items2 };
      const memo = BLACK.useMemo(() => {
        const Gesture = LegacyBaseButton.Gesture;
        const Exclusive = Gesture.Exclusive;
        const Gesture2 = LegacyBaseButton.Gesture;
        const fn = function o(arg0, arg1) {
          const tmp = arg1;
          if (tmp) {
            const obj = pIPState(closure_2[5]);
            obj.runOnJS(closure_1_2)(false);
          }
        };
        const TapResult = Gesture2.Tap();
        const maxDistanceResult = TapResult.maxDistance(30);
        let obj = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
        fn.__closure = obj;
        fn.__workletHash = 15809880589174;
        fn.__initData = __initData;
        const onEndResult = maxDistanceResult.onEnd(fn);
        const Gesture3 = LegacyBaseButton.Gesture;
        const PanResult = Gesture3.Pan();
        const maxPointersResult = PanResult.maxPointers(1);
        const result = maxPointersResult.shouldCancelWhenOutside(false);
        const fn2 = function t() {
          const obj = pIPState(closure_2[5]);
          obj.runOnJS(closure_1_2)(true);
        };
        fn2.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
        fn2.__workletHash = 809072220615;
        fn2.__initData = __initData3;
        ({ runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk });
        const fn3 = function n() {
          const obj = pIPState(closure_2[5]);
          obj.runOnJS(closure_1_2)(false);
        };
        const onBeginResult = result.onBegin(fn2);
        fn3.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
        fn3.__workletHash = 3037455583599;
        fn3.__initData = __initData2;
        ({ runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk });
        return Exclusive(onEndResult, onBeginResult.onFinalize(fn3));
      }, items);
      items2 = [closure_6(NativeView, obj9)];
      const obj10 = { gesture: memo, children: closure_6(NativeView, obj11) };
      obj11 = { style: items3, hitSlop, children: closure_6(closure_10, obj12) };
      items3 = [tmp2.iconContainer, animatedStyle];
      obj12 = {
        style: animatedStyle1,
        size: pIPState(1188).Icon.Sizes.SMALL_20,
        source: isPushingToTalk(17339),
        disableColor: true,
      };
      const GestureDetector = pIPState(6147).GestureDetector;
      items2[1] = closure_6(GestureDetector, obj10);
      return closure_8(closure_7, obj8);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default tmp5;
