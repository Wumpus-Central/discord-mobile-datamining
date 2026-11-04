// === Module 19569: VoicePanelPIPPushToTalkOverlay ===

// Module 19569 (VoicePanelPIPPushToTalkOverlay)
import nativeDefault from "native" /* 575 */;
import _mod1705 from "module_1705" /* 1705 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import NativeViewDefault from "NativeView" /* 7101 */;
import MediaEngineActionCreators from "MediaEngineActionCreators" /* 11399 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import module_1652_mod from "module_1652" /* 1652 */;

const require = globalThis.__r;

const _modDef19570 = tmp9(19570);
require = fn;
const PUSH_TO_TALK_PIP_PHYSICS = fn(11411).PUSH_TO_TALK_PIP_PHYSICS;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let module_1652 = module_1652_mod;
const NativeView = module_1652.createAnimatedComponent(NativeViewDefault);
let module_1652 = module_1652_mod;
let closure_11 = module_1652.createAnimatedComponent(fn(1187).Icon);
const hitSlop = { top: 6, bottom: 6, left: 6, right: 6 };
const createStyles = fn(5141);
let obj = { iconContainer: null, overlay: null };
let size = { position: "absolute", width: 32, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
obj.iconContainer = size;
let obj2 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj2.backgroundColor = nativeDefault.colors.BLACK;
obj.overlay = obj2;
let closure_13 = createStyles.createStyles(obj);
let closure_14 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx1(){let[isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white]=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};})" };
let closure_15 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx2(){let[withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS]=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};})" };
let closure_16 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx3(){let[withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_17 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx4(event,success){let[scheduleOnRN,handlePushToTalk]=this.__closure;if(!success){return;}scheduleOnRN(handlePushToTalk,false);})" };
let closure_18 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx5(){let[scheduleOnRN,handlePushToTalk]=this.__closure;scheduleOnRN(handlePushToTalk,true);})" };
let closure_19 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx6(){let[scheduleOnRN,handlePushToTalk]=this.__closure;scheduleOnRN(handlePushToTalk,false);})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default function VoicePanelPIPPushToTalkOverlay() {
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  const tmp4 = closure_13();
  let obj = require("VoicePanelPIPStateContext");
  const sharedValue = require("module_1652").useSharedValue(false);
  closure_129_0 = sharedValue;
  closure_129_1 = noop.useRef(false);
  items = [sharedValue];
  let items1 = [
    sharedValue,
    noop.useCallback((current) => {
      if (current !== _undefined2.current) {
        _undefined2.current = current;
        MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), current);
        const result = _undefined.set(current);
      }
    }, items)
  ];
  const obj2 = require("module_1652");
  const obj3 = noop;
  [tmp7, tmp8] = items1;
  _require = tmp8;
  const WHITE = nativeDefault.unsafe_rawColors.WHITE;
  const tmp6 = _slicedToArray(items1, 2);
  let items2 = [closure_14, tmp7, 48, 32, require("spring/spring").withSpring, PUSH_TO_TALK_PIP_PHYSICS, WHITE];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class VoicePanelPIPPushToTalkOverlayTsx1 {
    constructor() {
      obj = closure_0;
      num = 8;
      if (closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        num = 8 * closure_1 / closure_2 + 8;
      }
      rect = { right: closure_3(num, closure_4), bottom: closure_3(num, closure_4), transform: null, backgroundColor: null };
      tmp3 = closure_3;
      tmp4 = closure_4;
      num2 = 1;
      if (obj.get()) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        num2 = closure_1 / closure_2;
      }
      obj1 = { scale: tmp3(num2, tmp4) };
      items = [];
      items[0] = obj1;
      rect.transform = items;
      str = "rgba(0, 0, 0, 0.54)";
      if (obj.get()) {
        str = closure_5;
      }
      rect.backgroundColor = tmp3(str, tmp4);
      return rect;
    }
  }
  let items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  VoicePanelPIPPushToTalkOverlayTsx1.__closure = items3;
  VoicePanelPIPPushToTalkOverlayTsx1.__workletHash = 2861747547438;
  VoicePanelPIPPushToTalkOverlayTsx1.__initData = tmp11;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelPIPPushToTalkOverlayTsx1);
  const obj4 = require("module_1652");
  let items4 = [closure_15, require("spring/spring").withSpring, tmp7, nativeDefault.unsafe_rawColors.BLACK, WHITE, PUSH_TO_TALK_PIP_PHYSICS];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items4;
  class VoicePanelPIPPushToTalkOverlayTsx2 {
    constructor() {
      tmp = closure_0;
      obj = { tintColor: tmp(closure_1.get() ? closure_2 : closure_3, closure_4) };
      return obj;
    }
  }
  let items5 = [tmp20, tmp21, tmp22, tmp23, tmp24];
  VoicePanelPIPPushToTalkOverlayTsx2.__closure = items5;
  VoicePanelPIPPushToTalkOverlayTsx2.__workletHash = 7041857478120;
  VoicePanelPIPPushToTalkOverlayTsx2.__initData = tmp19;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(VoicePanelPIPPushToTalkOverlayTsx2);
  const tmpResult = require("module_1652");
  const items6 = [closure_16, require("spring/spring").withSpring, tmp7, PUSH_TO_TALK_PIP_PHYSICS, require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius, pIPState];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items6;
  class VoicePanelPIPPushToTalkOverlayTsx3 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 0.5;
      }
      obj = { opacity: tmp(num, closure_2), borderRadius: closure_3(closure_4.width, closure_4.height) };
      return obj;
    }
  }
  const items7 = [tmp27, tmp28, tmp29, tmp30, tmp31];
  VoicePanelPIPPushToTalkOverlayTsx3.__closure = items7;
  VoicePanelPIPPushToTalkOverlayTsx3.__workletHash = 1560933977;
  VoicePanelPIPPushToTalkOverlayTsx3.__initData = tmp26;
  const items8 = [tmp8];
  const animatedStyle2 = require("module_1652").useAnimatedStyle(VoicePanelPIPPushToTalkOverlayTsx3);
  const obj5 = { children: null };
  const obj6 = { pointerEvents: "none", style: null };
  const items9 = [tmp4.overlay, animatedStyle2];
  obj6.style = items9;
  const memo = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    items = [closure_17, _mod1705.scheduleOnRN, c0];
    c0 = undefined;
    c1 = undefined;
    [tmp4, tmp5, tmp6] = items;
    class VoicePanelPIPPushToTalkOverlayTsx4 {
      constructor(arg0, arg1) {
        if (arg1) {
          tmp = closure_0;
          tmp2 = closure_1;
          flag = false;
          tmp3 = closure_0(closure_1, false);
        }
        return;
      }
    }
    const items1 = [tmp5, tmp6];
    VoicePanelPIPPushToTalkOverlayTsx4.__closure = items1;
    VoicePanelPIPPushToTalkOverlayTsx4.__workletHash = 8199148800599;
    VoicePanelPIPPushToTalkOverlayTsx4.__initData = tmp4;
    const maxDistanceResult = Gesture2.Tap().maxDistance(30);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onEndResult = Gesture2.Tap().maxDistance(30).onEnd(VoicePanelPIPPushToTalkOverlayTsx4);
    const PanResult = Gesture3.Pan();
    const result = Gesture3.Pan().maxPointers(1).shouldCancelWhenOutside(false);
    const items2 = [closure_18, _mod1705.scheduleOnRN, c0];
    c0 = undefined;
    c1 = undefined;
    [tmp8, tmp9, tmp10] = items2;
    class VoicePanelPIPPushToTalkOverlayTsx5 {
      constructor() {
        tmp = closure_0(closure_1, true);
        return;
      }
    }
    const items3 = [tmp9, tmp10];
    VoicePanelPIPPushToTalkOverlayTsx5.__closure = items3;
    VoicePanelPIPPushToTalkOverlayTsx5.__workletHash = 1980257520389;
    VoicePanelPIPPushToTalkOverlayTsx5.__initData = tmp8;
    const maxPointersResult = Gesture3.Pan().maxPointers(1);
    const items4 = [closure_19, _mod1705.scheduleOnRN, c0];
    c0 = undefined;
    c1 = undefined;
    [tmp11, tmp12, tmp13] = items4;
    class VoicePanelPIPPushToTalkOverlayTsx6 {
      constructor() {
        tmp = closure_0(closure_1, false);
        return;
      }
    }
    const items5 = [tmp12, tmp13];
    VoicePanelPIPPushToTalkOverlayTsx6.__closure = items5;
    VoicePanelPIPPushToTalkOverlayTsx6.__workletHash = 12119923250285;
    VoicePanelPIPPushToTalkOverlayTsx6.__initData = tmp11;
    return Gesture.Exclusive(onEndResult, result.onBegin(VoicePanelPIPPushToTalkOverlayTsx5).onFinalize(VoicePanelPIPPushToTalkOverlayTsx6));
  }, items8);
  const items10 = [closure_7(NativeView, obj6), ];
  const obj7 = { gesture: memo, children: null };
  const obj8 = { style: null, hitSlop, children: null };
  const items11 = [tmp4.iconContainer, animatedStyle];
  obj8.style = items11;
  const tmpResult2 = require("module_1652");
  obj8.children = closure_7(closure_11, { style: animatedStyle1, size: require("native").Icon.Sizes.SMALL_20, source: _modDef19570, disableColor: true });
  obj7.children = closure_7(NativeView, obj8);
  items10[1] = closure_7(require("LegacyBaseButton").GestureDetector, obj7);
  obj5.children = items10;
  return closure_9(closure_8, obj5);
};