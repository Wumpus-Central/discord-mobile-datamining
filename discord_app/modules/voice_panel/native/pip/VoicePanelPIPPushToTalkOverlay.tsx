// discord_app/modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import LegacyBaseButton from "../../../../../_runtime/05298_LegacyBaseButton.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import MediaEngineActionCreators from "../../../media_engine/MediaEngineActionCreators.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
const PUSH_TO_TALK_PIP_PHYSICS = fn(11204).PUSH_TO_TALK_PIP_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
const NativeView = ReanimatedRexport.createAnimatedComponent(NativeViewDefault);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_11 = ReanimatedRexport.createAnimatedComponent(fn(1188).Icon);
const hitSlop = { top: 6, bottom: 6, left: 6, right: 6 };
const createStyles = fn(5009);
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
const __initData = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx1(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};}",
};
const __initData2 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx2(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}",
};
const __initData3 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx3(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}",
};
let closure_17 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx4(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}",
};
let closure_18 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx5(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}",
};
let closure_19 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx6(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default function VoicePanelPIPPushToTalkOverlay() {
  pIPState = pIPState(19146).usePIPState();
  const tmp2 = closure_13();
  let obj = pIPState(19146);
  const sharedValue = pIPState(5090).useSharedValue(false);
  closure_129_0 = sharedValue;
  closure_129_1 = BLACK.useRef(false);
  let items = [sharedValue];
  const items1 = [
    sharedValue,
    BLACK.useCallback((current) => {
      if (current !== first.current) {
        first.current = current;
        MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), current);
        const result = pIPState.set(current);
      }
    }, items),
  ];
  const tmp4 = WHITE(items1, 2);
  const isPushingToTalk = tmp4[0];
  dependencyMap = tmp6;
  WHITE = isPushingToTalk(575).unsafe_rawColors.WHITE;
  BLACK = isPushingToTalk(575).unsafe_rawColors.BLACK;
  let obj2 = pIPState(5090);
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
  let obj3 = pIPState(5090);
  fn.__closure = {
    isPushingToTalk,
    EXPANDED_ICON_SIZE: 48,
    BASE_ICON_SIZE: 32,
    withSpring: pIPState(5632).withSpring,
    PUSH_TO_TALK_PIP_PHYSICS,
    white: WHITE,
  };
  fn.__workletHash = 3936373516983;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj4 = {
    isPushingToTalk,
    EXPANDED_ICON_SIZE: 48,
    BASE_ICON_SIZE: 32,
    withSpring: pIPState(5632).withSpring,
    PUSH_TO_TALK_PIP_PHYSICS,
    white: WHITE,
  };
  let fn2 = function l() {
    return { tintColor: spring.withSpring(first.get() ? BLACK : WHITE, PUSH_TO_TALK_PIP_PHYSICS) };
  };
  let obj5 = pIPState(5090);
  fn2.__closure = {
    withSpring: pIPState(5632).withSpring,
    isPushingToTalk,
    black: BLACK,
    white: WHITE,
    PUSH_TO_TALK_PIP_PHYSICS,
  };
  fn2.__workletHash = 11469896791985;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const obj6 = {
    withSpring: pIPState(5632).withSpring,
    isPushingToTalk,
    black: BLACK,
    white: WHITE,
    PUSH_TO_TALK_PIP_PHYSICS,
  };
  let fn3 = function f() {
    let num = 0;
    if (first.get()) {
      num = 0.5;
    }
    const obj2 = { opacity: spring.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), borderRadius: null };
    obj2.borderRadius = VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height);
    return obj2;
  };
  const obj7 = pIPState(5090);
  fn3.__closure = {
    withSpring: pIPState(5632).withSpring,
    isPushingToTalk,
    PUSH_TO_TALK_PIP_PHYSICS,
    getVoicePanelPIPBorderRadius: pIPState(19058).getVoicePanelPIPBorderRadius,
    pipState: pIPState,
  };
  fn3.__workletHash = 450590017248;
  fn3.__initData = __initData3;
  const items2 = [tmp4[1]];
  const animatedStyle2 = obj7.useAnimatedStyle(fn3);
  const obj9 = { children: null };
  const obj10 = { pointerEvents: "none", style: null };
  const items3 = [tmp2.overlay, animatedStyle2];
  obj10.style = items3;
  const memo = BLACK.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const fn = function o(arg0, arg1) {
      if (arg1) {
        pIPState(5090).runOnJS(dependencyMap)(false);
        const obj = pIPState(5090);
      }
    };
    const maxDistanceResult = Gesture2.Tap().maxDistance(30);
    fn.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn.__workletHash = 13736796804739;
    fn.__initData = __initData;
    let obj = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    const Gesture3 = LegacyBaseButton.Gesture;
    const onEndResult = maxDistanceResult.onEnd(fn);
    const PanResult = Gesture3.Pan();
    const result = Gesture3.Pan().maxPointers(1).shouldCancelWhenOutside(false);
    const fn2 = function t() {
      pIPState(5090).runOnJS(dependencyMap)(true);
    };
    const maxPointersResult = Gesture3.Pan().maxPointers(1);
    fn2.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn2.__workletHash = 246779667986;
    fn2.__initData = __initData3;
    const obj2 = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    const fn3 = function n() {
      pIPState(5090).runOnJS(dependencyMap)(false);
    };
    const onBeginResult = result.onBegin(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn3.__workletHash = 12223608557562;
    fn3.__initData = __initData2;
    return Gesture.Exclusive(onEndResult, onBeginResult.onFinalize(fn3));
  }, items2);
  const items4 = [closure_7(NativeView, obj10)];
  const obj11 = { gesture: memo, children: null };
  const obj12 = { style: null, hitSlop, children: null };
  const items5 = [tmp2.iconContainer, animatedStyle];
  obj12.style = items5;
  const obj8 = {
    withSpring: pIPState(5632).withSpring,
    isPushingToTalk,
    PUSH_TO_TALK_PIP_PHYSICS,
    getVoicePanelPIPBorderRadius: pIPState(19058).getVoicePanelPIPBorderRadius,
    pipState: pIPState,
  };
  obj12.children = closure_7(closure_11, {
    style: animatedStyle1,
    size: pIPState(1188).Icon.Sizes.SMALL_20,
    source: isPushingToTalk(19231),
    disableColor: true,
  });
  obj11.children = closure_7(NativeView, obj12);
  items4[1] = closure_7(pIPState(5298).GestureDetector, obj11);
  obj9.children = items4;
  return closure_9(closure_8, obj9);
}
