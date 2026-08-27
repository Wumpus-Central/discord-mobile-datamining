// discord_app/modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import setDefault from "../../../core/native/NativeView.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { PUSH_TO_TALK_PIP_PHYSICS } from "../../VoicePanelConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../reanimated/ReanimatedRexport.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let closure_9 = importDefaultResult.createAnimatedComponent(setDefault);
let closure_10 = importDefaultResult.createAnimatedComponent(require("Button").Icon);
let closure_11 = { top: 6, bottom: 6, left: 6, right: 6 };
let obj = { iconContainer: null, overlay: null };
obj = { position: "absolute", width: 32, height: 32, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round };
obj[0] = obj;
let obj1 = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj1.backgroundColor = ThemesDefault.colors.BLACK;
obj[1] = obj1;
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function VoicePanelPIPPushToTalkOverlayTsx1(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};}" };
let closure_14 = { code: "function VoicePanelPIPPushToTalkOverlayTsx2(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}" };
let closure_15 = { code: "function VoicePanelPIPPushToTalkOverlayTsx3(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_16 = { code: "function VoicePanelPIPPushToTalkOverlayTsx4(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}" };
let closure_17 = { code: "function VoicePanelPIPPushToTalkOverlayTsx5(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}" };
let closure_18 = { code: "function VoicePanelPIPPushToTalkOverlayTsx6(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}" };
const importDefaultResult1 = importDefaultResult;
let result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default function VoicePanelPIPPushToTalkOverlay() {
  let obj = sharedValue(16586);
  const pIPState = obj.usePIPState();
  sharedValue = pIPState;
  const tmp2 = callback3();
  sharedValue = undefined;
  let first;
  obj1 = sharedValue(4185);
  sharedValue = obj1.useSharedValue(false);
  first = BLACK.useRef(false);
  let items = [sharedValue];
  const items1 = [
    sharedValue,
    BLACK.useCallback((current) => {
      if (current !== first.current) {
        first.current = current;
        sharedValue(9587).setPushToTalkState(current);
        const result = sharedValue.set(current);
        const obj = sharedValue(9587);
      }
    }, items)
  ];
  const tmp4 = WHITE(items1, 2);
  first = tmp4[0];
  dependencyMap = tmp6;
  WHITE = first(712).unsafe_rawColors.WHITE;
  BLACK = first(712).unsafe_rawColors.BLACK;
  let obj2 = sharedValue(4185);
  let fn = function o() {
    let obj = first;
    let num = 8;
    if (first.get()) {
      num = 20;
    }
    obj = { right: sharedValue(4879).withSpring(num, closure_1_5), bottom: null, transform: null, backgroundColor: null };
    const obj3 = sharedValue(4879);
    const tmp = sharedValue;
    obj[1] = sharedValue(4879).withSpring(num, closure_1_5);
    const obj4 = sharedValue(4879);
    let num2 = 1;
    if (obj.get()) {
      num2 = 1.5;
    }
    obj = { scale: sharedValue(4879).withSpring(num2, tmp3) };
    const items = [obj];
    obj[2] = items;
    const obj5 = sharedValue(4879);
    let str = "rgba(0, 0, 0, 0.54)";
    if (obj.get()) {
      str = WHITE;
    }
    obj[3] = tmp(4879).withSpring(str, closure_1_5);
    return obj;
  };
  obj = { isPushingToTalk: first, EXPANDED_ICON_SIZE: 48, BASE_ICON_SIZE: 32, withSpring: sharedValue(4879).withSpring, PUSH_TO_TALK_PIP_PHYSICS, white: WHITE };
  fn.__closure = obj;
  fn.__workletHash = 3936373516983;
  fn.__initData = closure_13;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = sharedValue(4185);
  class P {
    constructor() {
      obj = closure_0(closure_2[12]);
      obj = { tintColor: obj.withSpring(closure_1.get() ? BLACK : WHITE, closure_1_5) };
      return obj;
    }
  }
  obj = { withSpring: sharedValue(4879).withSpring, isPushingToTalk: first, black: BLACK, white: WHITE, PUSH_TO_TALK_PIP_PHYSICS };
  P.__closure = obj;
  P.__workletHash = 11469896791985;
  P.__initData = closure_14;
  const animatedStyle1 = obj4.useAnimatedStyle(P);
  class H {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[12]);
      num = 0;
      if (closure_1.get()) {
        num = 0.5;
      }
      obj = { opacity: obj.withSpring(num, closure_1_5), borderRadius: null };
      tmpResult = tmp(tmp2[13]);
      obj[1] = tmpResult.getVoicePanelPIPBorderRadius(closure_0.width, closure_0.height);
      return obj;
    }
  }
  obj1 = { withSpring: sharedValue(4879).withSpring, isPushingToTalk: first, PUSH_TO_TALK_PIP_PHYSICS, getVoicePanelPIPBorderRadius: sharedValue(16581).getVoicePanelPIPBorderRadius, pipState: pIPState };
  H.__closure = obj1;
  H.__workletHash = 450590017248;
  H.__initData = closure_15;
  const items2 = [tmp4[1]];
  const animatedStyle2 = sharedValue(4185).useAnimatedStyle(H);
  obj2 = { children: null };
  const items3 = [tmp2.overlay, animatedStyle2];
  const memo = BLACK.useMemo(() => {
    const Gesture = sharedValue(5604).Gesture;
    const Gesture2 = sharedValue(5604).Gesture;
    const TapResult = Gesture2.Tap();
    const fn = function o(arg0, arg1) {
      if (arg1) {
        closure_1_0(closure_1_2[5]).runOnJS(closure_2)(false);
        const obj = closure_1_0(closure_1_2[5]);
      }
    };
    let obj = { runOnJS: sharedValue(4185).runOnJS, handlePushToTalk: dependencyMap };
    fn.__closure = obj;
    fn.__workletHash = 13736796804739;
    fn.__initData = closure_1_16;
    const maxDistanceResult = Gesture2.Tap().maxDistance(30);
    const Gesture3 = sharedValue(5604).Gesture;
    const onEndResult = Gesture2.Tap().maxDistance(30).onEnd(fn);
    const PanResult = Gesture3.Pan();
    const result = Gesture3.Pan().maxPointers(1).shouldCancelWhenOutside(false);
    const fn2 = function t() {
      closure_1_0(closure_1_2[5]).runOnJS(closure_2)(true);
    };
    obj = { runOnJS: sharedValue(4185).runOnJS, handlePushToTalk: dependencyMap };
    fn2.__closure = obj;
    fn2.__workletHash = 246779667986;
    fn2.__initData = closure_1_18;
    const maxPointersResult = Gesture3.Pan().maxPointers(1);
    const fn3 = function n() {
      closure_1_0(closure_1_2[5]).runOnJS(closure_2)(false);
    };
    const onBeginResult = result.onBegin(fn2);
    fn3.__closure = { runOnJS: sharedValue(4185).runOnJS, handlePushToTalk: dependencyMap };
    fn3.__workletHash = 12223608557562;
    fn3.__initData = closure_1_17;
    return Gesture.Exclusive(onEndResult, onBeginResult.onFinalize(fn3));
  }, items2);
  const items4 = [callback(closure_9, { pointerEvents: "none", style: items3 }), ];
  let obj3 = { gesture: memo, children: null };
  obj4 = { style: items5, hitSlop: closure_11, children: null };
  items5 = [tmp2.iconContainer, animatedStyle];
  const obj7 = sharedValue(4185);
  obj4[2] = callback(closure_10, { style: animatedStyle1, size: sharedValue(1297).Icon.Sizes.SMALL_20, source: first(16662), disableColor: true });
  obj3[1] = callback(closure_9, obj4);
  items4[1] = callback(sharedValue(5604).GestureDetector, obj3);
  obj2[0] = items4;
  return callback2(closure_7, obj2);
};