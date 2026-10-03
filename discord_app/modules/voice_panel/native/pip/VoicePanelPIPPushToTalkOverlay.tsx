// === Module 17286: VoicePanelPIPPushToTalkOverlay ===

// Module 17286 (VoicePanelPIPPushToTalkOverlay)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import MediaEngineActionCreators from "MediaEngineActionCreators" /* 9620 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17181 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
const PUSH_TO_TALK_PIP_PHYSICS = fn(11902).PUSH_TO_TALK_PIP_PHYSICS;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
const NativeView = ReanimatedRexport.createAnimatedComponent(NativeViewDefault);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(1188).Icon);
const hitSlop = { top: 6, bottom: 6, left: 6, right: 6 };
const createStyles = fn(4890);
let obj = { iconContainer: null, overlay: null };
let size = { position: "absolute", width: 32, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
obj.iconContainer = size;
let obj2 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj2.backgroundColor = nativeDefault.colors.BLACK;
obj.overlay = obj2;
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = sharedValue(576).c(5);
  let obj = sharedValue(576);
  sharedValue = sharedValue(4612).useSharedValue(false);
  noop.useRef(false);
  if (cResult[0] !== sharedValue) {
    const fn = function n(current) {
      if (current !== ref.current) {
        ref.current = current;
        MediaEngineActionCreators.setPushToTalkState(current);
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
}) : (() => {
  sharedValue = sharedValue(4612).useSharedValue(false);
  noop.useRef(false);
  const items = [sharedValue];
  const items1 = [
    sharedValue,
    noop.useCallback((current) => {
      if (current !== ref.current) {
        ref.current = current;
        MediaEngineActionCreators.setPushToTalkState(current);
        const result = sharedValue.set(current);
      }
    }, items)
  ];
  return items1;
});
const __initData = { code: "function VoicePanelPIPPushToTalkOverlayTsx1(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:\"rgba(0, 0, 0, 0.54)\",PUSH_TO_TALK_PIP_PHYSICS)};}" };
const __initData2 = { code: "function VoicePanelPIPPushToTalkOverlayTsx2(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}" };
const __initData3 = { code: "function VoicePanelPIPPushToTalkOverlayTsx3(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
const __initData4 = { code: "function VoicePanelPIPPushToTalkOverlayTsx4(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}" };
const __initData5 = { code: "function VoicePanelPIPPushToTalkOverlayTsx5(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}" };
const __initData6 = { code: "function VoicePanelPIPPushToTalkOverlayTsx6(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}" };
const __initData7 = { code: "function VoicePanelPIPPushToTalkOverlayTsx7(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};}" };
const __initData8 = { code: "function VoicePanelPIPPushToTalkOverlayTsx8(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}" };
const __initData9 = { code: "function VoicePanelPIPPushToTalkOverlayTsx9(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_23 = { code: "function VoicePanelPIPPushToTalkOverlayTsx10(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}" };
let closure_24 = { code: "function VoicePanelPIPPushToTalkOverlayTsx11(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}" };
let closure_25 = { code: "function VoicePanelPIPPushToTalkOverlayTsx12(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}" };
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = pIPState(576).c(19);
  let obj = pIPState(576);
  pIPState = pIPState(17183).usePIPState();
  const tmp5 = closure_12();
  const tmp6 = WHITE(closure_13(), 2);
  const isPushingToTalk = tmp6[0];
  dependencyMap = tmp8;
  WHITE = isPushingToTalk(587).unsafe_rawColors.WHITE;
  const BLACK = isPushingToTalk(587).unsafe_rawColors.BLACK;
  let obj2 = pIPState(17183);
  const tmp9 = isPushingToTalk;
  const fn = function t() {
    let num = 8;
    if (first.get()) {
      num = 20;
    }
    const rect = { right: spring.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), bottom: null, transform: null, backgroundColor: null };
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
  let obj3 = pIPState(4612);
  fn.__closure = { isPushingToTalk, EXPANDED_ICON_SIZE: 48, BASE_ICON_SIZE: 32, withSpring: pIPState(5597).withSpring, PUSH_TO_TALK_PIP_PHYSICS, white: WHITE };
  fn.__workletHash = 16468415120439;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj4 = { isPushingToTalk, EXPANDED_ICON_SIZE: 48, BASE_ICON_SIZE: 32, withSpring: pIPState(5597).withSpring, PUSH_TO_TALK_PIP_PHYSICS, white: WHITE };
  const fn2 = function o() {
    return { tintColor: spring.withSpring(first.get() ? BLACK : WHITE, PUSH_TO_TALK_PIP_PHYSICS) };
  };
  let obj5 = pIPState(4612);
  fn2.__closure = { withSpring: pIPState(5597).withSpring, isPushingToTalk, black: BLACK, white: WHITE, PUSH_TO_TALK_PIP_PHYSICS };
  fn2.__workletHash = 11469896791985;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const obj6 = { withSpring: pIPState(5597).withSpring, isPushingToTalk, black: BLACK, white: WHITE, PUSH_TO_TALK_PIP_PHYSICS };
  class P {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[14]);
      num = 0;
      if (closure_1.get()) {
        num = 0.5;
      }
      obj1 = { opacity: obj.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), borderRadius: null };
      tmpResult = tmp(tmp2[15]);
      obj1.borderRadius = tmpResult.getVoicePanelPIPBorderRadius(closure_0.width, closure_0.height);
      return obj1;
    }
  }
  const obj7 = pIPState(4612);
  P.__closure = { withSpring: pIPState(5597).withSpring, isPushingToTalk, PUSH_TO_TALK_PIP_PHYSICS, getVoicePanelPIPBorderRadius: pIPState(17181).getVoicePanelPIPBorderRadius, pipState: pIPState };
  P.__workletHash = 450590017248;
  P.__initData = __initData3;
  const animatedStyle2 = obj7.useAnimatedStyle(P);
  if (cResult[0] !== tmp6[1]) {
    const Gesture = tmp(6140).Gesture;
    const Gesture2 = tmp(6140).Gesture;
    const TapResult = Gesture2.Tap();
    const fn3 = function b(arg0, arg1) {
      if (arg1) {
        ReanimatedRexport2.runOnJS(closure_2)(false);
      }
    };
    const obj9 = { runOnJS: tmp(4612).runOnJS, handlePushToTalk: tmp8 };
    fn3.__closure = obj9;
    fn3.__workletHash = 13736796804739;
    fn3.__initData = __initData4;
    const maxDistanceResult = Gesture2.Tap().maxDistance(30);
    const Gesture3 = tmp(6140).Gesture;
    const onEndResult = Gesture2.Tap().maxDistance(30).onEnd(fn3);
    const PanResult = Gesture3.Pan();
    const result = Gesture3.Pan().maxPointers(1).shouldCancelWhenOutside(false);
    class E {
      constructor() {
        obj = closure_0(closure_2[5]);
        tmp = obj.runOnJS(closure_2)(true);
        return;
      }
    }
    const obj10 = { runOnJS: tmp(4612).runOnJS, handlePushToTalk: tmp8 };
    E.__closure = obj10;
    E.__workletHash = 246779667986;
    E.__initData = __initData6;
    const maxPointersResult = Gesture3.Pan().maxPointers(1);
    const fn4 = function f() {
      ReanimatedRexport2.runOnJS(closure_2)(false);
    };
    const obj11 = { runOnJS: tmp(4612).runOnJS, handlePushToTalk: tmp8 };
    fn4.__closure = obj11;
    fn4.__workletHash = 12223608557562;
    fn4.__initData = __initData5;
    const ExclusiveResult = Gesture.Exclusive(onEndResult, result.onBegin(E).onFinalize(fn4));
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
        const obj12 = { style: animatedStyle1, size: tmp(1188).Icon.Sizes.SMALL_20, source: tmp9(17287), disableColor: true };
        const tmp25 = closure_6(closure_10, obj12);
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
          const tmp37 = closure_8(closure_7, obj13);
          cResult[16] = tmp19;
          cResult[17] = tmp31;
          cResult[18] = tmp37;
          tmp34 = tmp37;
        }
        const obj14 = { gesture: tmp13, children: tmp26 };
        const tmp33 = closure_6(tmp(6140).GestureDetector, obj14);
        cResult[13] = tmp13;
        cResult[14] = tmp26;
        cResult[15] = tmp33;
        tmp31 = tmp33;
      }
      const obj15 = { style: tmp21, hitSlop, children: tmp22 };
      const tmp30 = closure_6(NativeView, obj15);
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
  const tmp20 = closure_6(NativeView, obj16);
  cResult[2] = animatedStyle2;
  cResult[3] = tmp5.overlay;
  cResult[4] = tmp20;
  tmp19 = tmp20;
  const obj8 = { withSpring: pIPState(5597).withSpring, isPushingToTalk, PUSH_TO_TALK_PIP_PHYSICS, getVoicePanelPIPBorderRadius: pIPState(17181).getVoicePanelPIPBorderRadius, pipState: pIPState };
}) : (() => {
  pIPState = pIPState(17183).usePIPState();
  const tmp2 = closure_12();
  const tmp3 = WHITE(closure_13(), 2);
  const isPushingToTalk = tmp3[0];
  dependencyMap = tmp5;
  WHITE = isPushingToTalk(587).unsafe_rawColors.WHITE;
  const BLACK = isPushingToTalk(587).unsafe_rawColors.BLACK;
  let obj = pIPState(17183);
  let fn = function o() {
    let num = 8;
    if (first.get()) {
      num = 20;
    }
    const rect = { right: spring.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), bottom: null, transform: null, backgroundColor: null };
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
  let obj2 = pIPState(4612);
  fn.__closure = { isPushingToTalk, EXPANDED_ICON_SIZE: 48, BASE_ICON_SIZE: 32, withSpring: pIPState(5597).withSpring, PUSH_TO_TALK_PIP_PHYSICS, white: WHITE };
  fn.__workletHash = 9965349487665;
  fn.__initData = __initData7;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = { isPushingToTalk, EXPANDED_ICON_SIZE: 48, BASE_ICON_SIZE: 32, withSpring: pIPState(5597).withSpring, PUSH_TO_TALK_PIP_PHYSICS, white: WHITE };
  class P {
    constructor() {
      obj = closure_0(closure_2[14]);
      obj1 = { tintColor: obj.withSpring(closure_1.get() ? BLACK : WHITE, PUSH_TO_TALK_PIP_PHYSICS) };
      return obj1;
    }
  }
  let obj4 = pIPState(4612);
  P.__closure = { withSpring: pIPState(5597).withSpring, isPushingToTalk, black: BLACK, white: WHITE, PUSH_TO_TALK_PIP_PHYSICS };
  P.__workletHash = 17504109449275;
  P.__initData = __initData8;
  const animatedStyle1 = obj4.useAnimatedStyle(P);
  let obj5 = { withSpring: pIPState(5597).withSpring, isPushingToTalk, black: BLACK, white: WHITE, PUSH_TO_TALK_PIP_PHYSICS };
  class O {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[14]);
      num = 0;
      if (closure_1.get()) {
        num = 0.5;
      }
      obj1 = { opacity: obj.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), borderRadius: null };
      tmpResult = tmp(tmp2[15]);
      obj1.borderRadius = tmpResult.getVoicePanelPIPBorderRadius(closure_0.width, closure_0.height);
      return obj1;
    }
  }
  const obj6 = pIPState(4612);
  O.__closure = { withSpring: pIPState(5597).withSpring, isPushingToTalk, PUSH_TO_TALK_PIP_PHYSICS, getVoicePanelPIPBorderRadius: pIPState(17181).getVoicePanelPIPBorderRadius, pipState: pIPState };
  O.__workletHash = 10396812460138;
  O.__initData = __initData9;
  let items = [tmp3[1]];
  const animatedStyle2 = obj6.useAnimatedStyle(O);
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
        pIPState(4612).runOnJS(dependencyMap)(false);
        const obj = pIPState(4612);
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
      pIPState(4612).runOnJS(dependencyMap)(true);
    };
    const maxPointersResult = Gesture3.Pan().maxPointers(1);
    fn2.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn2.__workletHash = 809072220615;
    fn2.__initData = __initData3;
    const obj2 = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    const fn3 = function n() {
      pIPState(4612).runOnJS(dependencyMap)(false);
    };
    const onBeginResult = result.onBegin(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn3.__workletHash = 3037455583599;
    fn3.__initData = __initData2;
    return Gesture.Exclusive(onEndResult, onBeginResult.onFinalize(fn3));
  }, items);
  const items2 = [closure_6(NativeView, obj9), ];
  const obj10 = { gesture: memo, children: null };
  const obj11 = { style: null, hitSlop, children: null };
  const items3 = [tmp2.iconContainer, animatedStyle];
  obj11.style = items3;
  const obj7 = { withSpring: pIPState(5597).withSpring, isPushingToTalk, PUSH_TO_TALK_PIP_PHYSICS, getVoicePanelPIPBorderRadius: pIPState(17181).getVoicePanelPIPBorderRadius, pipState: pIPState };
  obj11.children = closure_6(closure_10, { style: animatedStyle1, size: pIPState(1188).Icon.Sizes.SMALL_20, source: isPushingToTalk(17287), disableColor: true });
  obj10.children = closure_6(NativeView, obj11);
  items2[1] = closure_6(pIPState(6140).GestureDetector, obj10);
  obj8.children = items2;
  return closure_8(closure_7, obj8);
});