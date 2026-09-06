// discord_app/modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import MediaEngineActionCreators from "../../../media_engine/MediaEngineActionCreators.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const PUSH_TO_TALK_PIP_PHYSICS = fn(12273).PUSH_TO_TALK_PIP_PHYSICS;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const NativeView = ReanimatedRexport.createAnimatedComponent(NativeViewDefault);
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(1178).Icon);
const hitSlop = { top: 6, bottom: 6, left: 6, right: 6 };
const createStyles = fn(4560);
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
obj = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj.backgroundColor = nativeDefault.colors.BLACK;
obj.overlay = obj;
let closure_12 = createStyles.createStyles(obj);
const __initData = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx1(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};}",
};
const __initData2 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx2(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}",
};
const __initData3 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx3(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}",
};
let closure_16 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx4(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}",
};
let closure_17 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx5(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}",
};
let closure_18 = {
  code: "function VoicePanelPIPPushToTalkOverlayTsx6(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default function VoicePanelPIPPushToTalkOverlay() {
  let obj = pIPState(17092);
  pIPState = obj.usePIPState();
  const tmp2 = closure_12();
  let obj1 = pIPState(4296);
  const sharedValue = obj1.useSharedValue(false);
  closure_129_0 = sharedValue;
  closure_129_1 = BLACK.useRef(false);
  let items = [sharedValue];
  const items1 = [
    sharedValue,
    BLACK.useCallback((current) => {
      if (current !== first.current) {
        first.current = current;
        MediaEngineActionCreators.setPushToTalkState(current);
        const result = pIPState.set(current);
      }
    }, items),
  ];
  const tmp4 = WHITE(items1, 2);
  const isPushingToTalk = tmp4[0];
  dependencyMap = tmp6;
  WHITE = isPushingToTalk(576).unsafe_rawColors.WHITE;
  BLACK = isPushingToTalk(576).unsafe_rawColors.BLACK;
  let obj2 = pIPState(4296);
  let fn = function o() {
    let obj = first;
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
    if (obj.get()) {
      num2 = 1.5;
    }
    obj = { scale: spring.withSpring(num2, tmp3) };
    const items = [obj];
    rect.transform = items;
    let str = "rgba(0, 0, 0, 0.54)";
    if (obj.get()) {
      str = WHITE;
    }
    rect.backgroundColor = spring.withSpring(str, PUSH_TO_TALK_PIP_PHYSICS);
    return rect;
  };
  obj = {
    isPushingToTalk,
    EXPANDED_ICON_SIZE: 48,
    BASE_ICON_SIZE: 32,
    withSpring: pIPState(4974).withSpring,
    PUSH_TO_TALK_PIP_PHYSICS,
    white: WHITE,
  };
  fn.__closure = obj;
  fn.__workletHash = 3936373516983;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = pIPState(4296);
  class P {
    constructor() {
      obj = closure_0(closure_2[12]);
      obj = { tintColor: obj.withSpring(closure_1.get() ? BLACK : WHITE, PUSH_TO_TALK_PIP_PHYSICS) };
      return obj;
    }
  }
  obj = {
    withSpring: pIPState(4974).withSpring,
    isPushingToTalk,
    black: BLACK,
    white: WHITE,
    PUSH_TO_TALK_PIP_PHYSICS,
  };
  P.__closure = obj;
  P.__workletHash = 11469896791985;
  P.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(P);
  let obj6 = pIPState(4296);
  class H {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[12]);
      num = 0;
      if (closure_1.get()) {
        num = 0.5;
      }
      obj = { opacity: obj.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), borderRadius: null };
      tmpResult = tmp(tmp2[13]);
      obj.borderRadius = tmpResult.getVoicePanelPIPBorderRadius(closure_0.width, closure_0.height);
      return obj;
    }
  }
  obj1 = {
    withSpring: pIPState(4974).withSpring,
    isPushingToTalk,
    PUSH_TO_TALK_PIP_PHYSICS,
    getVoicePanelPIPBorderRadius: pIPState(17087).getVoicePanelPIPBorderRadius,
    pipState: pIPState,
  };
  H.__closure = obj1;
  H.__workletHash = 450590017248;
  H.__initData = __initData3;
  const items2 = [tmp4[1]];
  const animatedStyle2 = obj6.useAnimatedStyle(H);
  obj2 = { children: null };
  let obj3 = { pointerEvents: "none", style: null };
  const items3 = [tmp2.overlay, animatedStyle2];
  obj3.style = items3;
  const memo = BLACK.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const fn = function o(arg0, arg1) {
      if (arg1) {
        pIPState(4296).runOnJS(dependencyMap)(false);
        const obj = pIPState(4296);
      }
    };
    let obj = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn.__closure = obj;
    fn.__workletHash = 13736796804739;
    fn.__initData = __initData;
    const maxDistanceResult = Gesture2.Tap().maxDistance(30);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onEndResult = Gesture2.Tap().maxDistance(30).onEnd(fn);
    const PanResult = Gesture3.Pan();
    const result = Gesture3.Pan().maxPointers(1).shouldCancelWhenOutside(false);
    const fn2 = function t() {
      pIPState(4296).runOnJS(dependencyMap)(true);
    };
    obj = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn2.__closure = obj;
    fn2.__workletHash = 246779667986;
    fn2.__initData = __initData3;
    const maxPointersResult = Gesture3.Pan().maxPointers(1);
    const fn3 = function n() {
      pIPState(4296).runOnJS(dependencyMap)(false);
    };
    const onBeginResult = result.onBegin(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn3.__workletHash = 12223608557562;
    fn3.__initData = __initData2;
    return Gesture.Exclusive(onEndResult, onBeginResult.onFinalize(fn3));
  }, items2);
  const items4 = [closure_6(NativeView, obj3)];
  obj4 = { gesture: memo, children: null };
  let obj5 = { style: null, hitSlop, children: null };
  const items5 = [tmp2.iconContainer, animatedStyle];
  obj5.style = items5;
  obj6 = {
    style: animatedStyle1,
    size: pIPState(1178).Icon.Sizes.SMALL_20,
    source: isPushingToTalk(17168),
    disableColor: true,
  };
  obj5.children = closure_6(closure_10, obj6);
  obj4.children = closure_6(NativeView, obj5);
  items4[1] = closure_6(pIPState(6655).GestureDetector, obj4);
  obj2.children = items4;
  return closure_8(closure_7, obj2);
}
