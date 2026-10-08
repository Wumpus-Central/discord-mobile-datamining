// discord_app/modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import LegacyBaseButton from "../../../../../_runtime/06326_LegacyBaseButton.js";
import MediaEngineActionCreators from "../../../media_engine/MediaEngineActionCreators.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
const PUSH_TO_TALK_PIP_PHYSICS = fn(11989).PUSH_TO_TALK_PIP_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
const NativeView = ReanimatedRexport.createAnimatedComponent(NativeViewDefault);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_11 = ReanimatedRexport.createAnimatedComponent(fn(1200).Icon);
const hitSlop = { top: 6, bottom: 6, left: 6, right: 6 };
const createStyles = fn(5090);
let obj = { iconContainer: null, overlay: null };
let size = {
  position: "absolute",
  width: 32,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
};
obj.iconContainer = size;
let obj2 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj2.backgroundColor = nativeDefault.colors.BLACK;
obj.overlay = obj2;
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePushToTalk() {
      const cResult = sharedValue(576).c(5);
      let obj = sharedValue(576);
      sharedValue = sharedValue(4810).useSharedValue(false);
      noop.useRef(false);
      if (cResult[0] !== sharedValue) {
        const fn = function n(current) {
          if (current !== ref.current) {
            ref.current = current;
            MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), current);
            const result = sharedValue.set(current);
          }
        };
        cResult[0] = sharedValue;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp3) {
        if (cResult[3] === sharedValue) {
          let tmp4 = cResult[4];
        }
        return tmp4;
      }
      const items = [sharedValue, tmp3];
      cResult[2] = tmp3;
      cResult[3] = sharedValue;
      cResult[4] = items;
      tmp4 = items;
    }
  : function usePushToTalk() {
      sharedValue = sharedValue(4810).useSharedValue(false);
      noop.useRef(false);
      const items = [sharedValue];
      const items1 = [
        sharedValue,
        noop.useCallback((current) => {
          if (current !== ref.current) {
            ref.current = current;
            MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), current);
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
let closure_24 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx10(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}",
};
let closure_25 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx11(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}",
};
let closure_26 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx12(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}",
};
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VoicePanelPIPPushToTalkOverlay() {
      const cResult = pIPState(576).c(19);
      let obj = pIPState(576);
      pIPState = pIPState(17517).usePIPState();
      const tmp5 = closure_13();
      const tmp6 = WHITE(closure_14(), 2);
      const isPushingToTalk = tmp6[0];
      dependencyMap = tmp8;
      WHITE = isPushingToTalk(587).unsafe_rawColors.WHITE;
      const BLACK = isPushingToTalk(587).unsafe_rawColors.BLACK;
      let obj2 = pIPState(17517);
      const tmp9 = isPushingToTalk;
      const fn = function t() {
        let num = 8;
        if (first.get()) {
          num = 20;
        }
        const rect = {
          right: spring.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS),
          bottom: null,
          transform: null,
          backgroundColor: null,
        };
        rect.bottom = spring.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS);
        let num2 = 1;
        if (first.get()) {
          num2 = 1.5;
        }
        const items = [{ scale: spring.withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) }];
        rect.transform = items;
        const obj2 = { scale: spring.withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) };
        let str = "rgba(0, 0, 0, 0.54)";
        if (first.get()) {
          str = WHITE;
        }
        rect.backgroundColor = spring.withSpring(str, PUSH_TO_TALK_PIP_PHYSICS);
        return rect;
      };
      let obj3 = pIPState(4810);
      fn.__closure = {
        isPushingToTalk,
        EXPANDED_ICON_SIZE: 48,
        BASE_ICON_SIZE: 32,
        withSpring: pIPState(5374).withSpring,
        PUSH_TO_TALK_PIP_PHYSICS,
        white: WHITE,
      };
      fn.__workletHash = 16468415120439;
      fn.__initData = __initData;
      const animatedStyle = obj3.useAnimatedStyle(fn);
      let obj4 = {
        isPushingToTalk,
        EXPANDED_ICON_SIZE: 48,
        BASE_ICON_SIZE: 32,
        withSpring: pIPState(5374).withSpring,
        PUSH_TO_TALK_PIP_PHYSICS,
        white: WHITE,
      };
      const fn2 = function o() {
        return { tintColor: spring.withSpring(first.get() ? BLACK : WHITE, PUSH_TO_TALK_PIP_PHYSICS) };
      };
      let obj5 = pIPState(4810);
      fn2.__closure = {
        withSpring: pIPState(5374).withSpring,
        isPushingToTalk,
        black: BLACK,
        white: WHITE,
        PUSH_TO_TALK_PIP_PHYSICS,
      };
      fn2.__workletHash = 11469896791985;
      fn2.__initData = __initData2;
      const animatedStyle1 = obj5.useAnimatedStyle(fn2);
      const obj6 = {
        withSpring: pIPState(5374).withSpring,
        isPushingToTalk,
        black: BLACK,
        white: WHITE,
        PUSH_TO_TALK_PIP_PHYSICS,
      };
      const fn3 = function s() {
        let num = 0;
        if (first.get()) {
          num = 0.5;
        }
        const obj2 = { opacity: spring.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), borderRadius: null };
        obj2.borderRadius = VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height);
        return obj2;
      };
      const obj7 = pIPState(4810);
      fn3.__closure = {
        withSpring: pIPState(5374).withSpring,
        isPushingToTalk,
        PUSH_TO_TALK_PIP_PHYSICS,
        getVoicePanelPIPBorderRadius: pIPState(17515).getVoicePanelPIPBorderRadius,
        pipState: pIPState,
      };
      fn3.__workletHash = 450590017248;
      fn3.__initData = __initData3;
      const animatedStyle2 = obj7.useAnimatedStyle(fn3);
      if (cResult[0] !== tmp6[1]) {
        const Gesture = tmp(6326).Gesture;
        const Gesture2 = tmp(6326).Gesture;
        const TapResult = Gesture2.Tap();
        const fn4 = function b(arg0, arg1) {
          if (arg1) {
            ReanimatedRexport2.runOnJS(closure_2)(false);
          }
        };
        const obj9 = { runOnJS: tmp(4810).runOnJS, handlePushToTalk: tmp8 };
        fn4.__closure = obj9;
        fn4.__workletHash = 13736796804739;
        fn4.__initData = __initData4;
        const maxDistanceResult = Gesture2.Tap().maxDistance(30);
        const Gesture3 = tmp(6326).Gesture;
        const onEndResult = Gesture2.Tap().maxDistance(30).onEnd(fn4);
        const PanResult = Gesture3.Pan();
        const result = Gesture3.Pan().maxPointers(1).shouldCancelWhenOutside(false);
        class E {
          constructor() {
            obj = closure_0(closure_2[6]);
            tmp = obj.runOnJS(closure_2)(true);
            return;
          }
        }
        const obj10 = { runOnJS: tmp(4810).runOnJS, handlePushToTalk: tmp8 };
        E.__closure = obj10;
        E.__workletHash = 246779667986;
        E.__initData = __initData6;
        const maxPointersResult = Gesture3.Pan().maxPointers(1);
        const fn5 = function f() {
          ReanimatedRexport2.runOnJS(closure_2)(false);
        };
        const obj11 = { runOnJS: tmp(4810).runOnJS, handlePushToTalk: tmp8 };
        fn5.__closure = obj11;
        fn5.__workletHash = 12223608557562;
        fn5.__initData = __initData5;
        const ExclusiveResult = Gesture.Exclusive(onEndResult, result.onBegin(E).onFinalize(fn5));
        cResult[0] = tmp8;
        cResult[1] = ExclusiveResult;
        let tmp13 = ExclusiveResult;
        const onBeginResult = result.onBegin(E);
      } else {
        tmp13 = cResult[1];
      }
      if (cResult[2] === animatedStyle2) {
        if (cResult[3] === tmp5.overlay) {
          let tmp19 = cResult[4];
        }
        if (cResult[5] === animatedStyle) {
          if (cResult[6] === tmp5.iconContainer) {
            let tmp21 = cResult[7];
          }
          if (cResult[8] !== animatedStyle1) {
            const obj12 = {
              style: animatedStyle1,
              size: tmp(1200).Icon.Sizes.SMALL_20,
              source: tmp9(17620),
              disableColor: true,
            };
            const tmp25 = closure_7(closure_11, obj12);
            cResult[8] = animatedStyle1;
            cResult[9] = tmp25;
            let tmp22 = tmp25;
          } else {
            tmp22 = cResult[9];
          }
          if (cResult[10] === tmp21) {
            if (cResult[11] === tmp22) {
              let tmp26 = cResult[12];
            }
            if (cResult[13] === tmp13) {
              if (cResult[14] === tmp26) {
                let tmp31 = cResult[15];
              }
              if (cResult[16] === tmp19) {
                if (cResult[17] === tmp31) {
                  let tmp34 = cResult[18];
                }
                return tmp34;
              }
              const obj13 = { children: null };
              let items = [tmp19, tmp31];
              obj13.children = items;
              const tmp37 = closure_9(closure_8, obj13);
              cResult[16] = tmp19;
              cResult[17] = tmp31;
              cResult[18] = tmp37;
              tmp34 = tmp37;
            }
            const obj14 = { gesture: tmp13, children: tmp26 };
            const tmp33 = closure_7(tmp(6326).GestureDetector, obj14);
            cResult[13] = tmp13;
            cResult[14] = tmp26;
            cResult[15] = tmp33;
            tmp31 = tmp33;
          }
          const obj15 = { style: tmp21, hitSlop, children: tmp22 };
          const tmp30 = closure_7(NativeView, obj15);
          cResult[10] = tmp21;
          cResult[11] = tmp22;
          cResult[12] = tmp30;
          tmp26 = tmp30;
        }
        const items1 = [tmp5.iconContainer, animatedStyle];
        cResult[5] = animatedStyle;
        cResult[6] = tmp5.iconContainer;
        cResult[7] = items1;
        tmp21 = items1;
      }
      const obj16 = { pointerEvents: "none", style: null };
      const items2 = [tmp5.overlay, animatedStyle2];
      obj16.style = items2;
      const tmp20 = closure_7(NativeView, obj16);
      cResult[2] = animatedStyle2;
      cResult[3] = tmp5.overlay;
      cResult[4] = tmp20;
      tmp19 = tmp20;
      const obj8 = {
        withSpring: pIPState(5374).withSpring,
        isPushingToTalk,
        PUSH_TO_TALK_PIP_PHYSICS,
        getVoicePanelPIPBorderRadius: pIPState(17515).getVoicePanelPIPBorderRadius,
        pipState: pIPState,
      };
    }
  : function VoicePanelPIPPushToTalkOverlay() {
      pIPState = pIPState(17517).usePIPState();
      const tmp2 = closure_13();
      const tmp3 = WHITE(closure_14(), 2);
      const isPushingToTalk = tmp3[0];
      dependencyMap = tmp5;
      WHITE = isPushingToTalk(587).unsafe_rawColors.WHITE;
      const BLACK = isPushingToTalk(587).unsafe_rawColors.BLACK;
      let obj = pIPState(17517);
      let fn = function o() {
        let num = 8;
        if (first.get()) {
          num = 20;
        }
        const rect = {
          right: spring.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS),
          bottom: null,
          transform: null,
          backgroundColor: null,
        };
        rect.bottom = spring.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS);
        let num2 = 1;
        if (first.get()) {
          num2 = 1.5;
        }
        const items = [{ scale: spring.withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) }];
        rect.transform = items;
        const obj2 = { scale: spring.withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) };
        let str = "rgba(0, 0, 0, 0.54)";
        if (first.get()) {
          str = WHITE;
        }
        rect.backgroundColor = spring.withSpring(str, PUSH_TO_TALK_PIP_PHYSICS);
        return rect;
      };
      let obj2 = pIPState(4810);
      fn.__closure = {
        isPushingToTalk,
        EXPANDED_ICON_SIZE: 48,
        BASE_ICON_SIZE: 32,
        withSpring: pIPState(5374).withSpring,
        PUSH_TO_TALK_PIP_PHYSICS,
        white: WHITE,
      };
      fn.__workletHash = 9965349487665;
      fn.__initData = __initData7;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let obj3 = {
        isPushingToTalk,
        EXPANDED_ICON_SIZE: 48,
        BASE_ICON_SIZE: 32,
        withSpring: pIPState(5374).withSpring,
        PUSH_TO_TALK_PIP_PHYSICS,
        white: WHITE,
      };
      let fn2 = function s() {
        return { tintColor: spring.withSpring(first.get() ? BLACK : WHITE, PUSH_TO_TALK_PIP_PHYSICS) };
      };
      let obj4 = pIPState(4810);
      fn2.__closure = {
        withSpring: pIPState(5374).withSpring,
        isPushingToTalk,
        black: BLACK,
        white: WHITE,
        PUSH_TO_TALK_PIP_PHYSICS,
      };
      fn2.__workletHash = 17504109449275;
      fn2.__initData = __initData8;
      const animatedStyle1 = obj4.useAnimatedStyle(fn2);
      let obj5 = {
        withSpring: pIPState(5374).withSpring,
        isPushingToTalk,
        black: BLACK,
        white: WHITE,
        PUSH_TO_TALK_PIP_PHYSICS,
      };
      let fn3 = function l() {
        let num = 0;
        if (first.get()) {
          num = 0.5;
        }
        const obj2 = { opacity: spring.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), borderRadius: null };
        obj2.borderRadius = VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height);
        return obj2;
      };
      const obj6 = pIPState(4810);
      fn3.__closure = {
        withSpring: pIPState(5374).withSpring,
        isPushingToTalk,
        PUSH_TO_TALK_PIP_PHYSICS,
        getVoicePanelPIPBorderRadius: pIPState(17515).getVoicePanelPIPBorderRadius,
        pipState: pIPState,
      };
      fn3.__workletHash = 10396812460138;
      fn3.__initData = __initData9;
      let items = [tmp3[1]];
      const animatedStyle2 = obj6.useAnimatedStyle(fn3);
      const obj8 = { children: null };
      const obj9 = { pointerEvents: "none", style: null };
      const items1 = [tmp2.overlay, animatedStyle2];
      obj9.style = items1;
      const memo = BLACK.useMemo(() => {
        const Gesture = LegacyBaseButton.Gesture;
        const Gesture2 = LegacyBaseButton.Gesture;
        const TapResult = Gesture2.Tap();
        const fn = function o(arg0, arg1) {
          if (arg1) {
            pIPState(4810).runOnJS(dependencyMap)(false);
            const obj = pIPState(4810);
          }
        };
        const maxDistanceResult = Gesture2.Tap().maxDistance(30);
        fn.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
        fn.__workletHash = 15809880589174;
        fn.__initData = __initData;
        let obj = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
        const Gesture3 = LegacyBaseButton.Gesture;
        const onEndResult = maxDistanceResult.onEnd(fn);
        const PanResult = Gesture3.Pan();
        const result = Gesture3.Pan().maxPointers(1).shouldCancelWhenOutside(false);
        const fn2 = function t() {
          pIPState(4810).runOnJS(dependencyMap)(true);
        };
        const maxPointersResult = Gesture3.Pan().maxPointers(1);
        fn2.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
        fn2.__workletHash = 809072220615;
        fn2.__initData = __initData3;
        const obj2 = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
        const fn3 = function n() {
          pIPState(4810).runOnJS(dependencyMap)(false);
        };
        const onBeginResult = result.onBegin(fn2);
        fn3.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
        fn3.__workletHash = 3037455583599;
        fn3.__initData = __initData2;
        return Gesture.Exclusive(onEndResult, onBeginResult.onFinalize(fn3));
      }, items);
      const items2 = [closure_7(NativeView, obj9)];
      const obj10 = { gesture: memo, children: null };
      const obj11 = { style: null, hitSlop, children: null };
      const items3 = [tmp2.iconContainer, animatedStyle];
      obj11.style = items3;
      const obj7 = {
        withSpring: pIPState(5374).withSpring,
        isPushingToTalk,
        PUSH_TO_TALK_PIP_PHYSICS,
        getVoicePanelPIPBorderRadius: pIPState(17515).getVoicePanelPIPBorderRadius,
        pipState: pIPState,
      };
      obj11.children = closure_7(closure_11, {
        style: animatedStyle1,
        size: pIPState(1200).Icon.Sizes.SMALL_20,
        source: isPushingToTalk(17620),
        disableColor: true,
      });
      obj10.children = closure_7(NativeView, obj11);
      items2[1] = closure_7(pIPState(6326).GestureDetector, obj10);
      obj8.children = items2;
      return closure_9(closure_8, obj8);
    };
