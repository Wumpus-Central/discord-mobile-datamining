// discord_app/modules/voice_panel/native/dock/VoicePanelDockPTTButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05535_LegacyBaseButton.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import MediaEngineActionCreators from "../../../media_engine/MediaEngineActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const View = fn(17).View;
const VoicePanelDockConstants = fn(11942);
({ DOCK_ROW_HEIGHT, DOCK_TILE_SIZE } = VoicePanelDockConstants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { mass: 0.4, damping: 18, stiffness: 300 };
let items = [
  {
    code: "(function getDockPTTIndicatorDrag_VoicePanelDockPTTButtonTsx1(dx,dy){let[DOCK_PTT_INDICATOR_MAX_DRAG_DISTANCE]=this.__closure;const distance=Math.hypot(dx,dy);if(distance===0){return{x:0,y:0};}const limited=DOCK_PTT_INDICATOR_MAX_DRAG_DISTANCE*(1-Math.exp(-distance/DOCK_PTT_INDICATOR_MAX_DRAG_DISTANCE));return{x:dx/distance*limited,y:dy/distance*limited};})",
  },
];
let result = (DOCK_ROW_HEIGHT - DOCK_TILE_SIZE) / 2;
items[1] = nativeDefault.space.PX_32;
let closure_129_0;
[tmp5, tmp6] = items;
function getDockPTTIndicatorDrag(sum, dy) {
  const hypotResult = Math.hypot(sum, dy);
  if (0 === hypotResult) {
    return { x: 0, y: 0 };
  } else {
    const _Math = Math;
    const result = require * (1 - Math.exp(-hypotResult / require));
    const point = { x: (sum / hypotResult) * result, y: (dy / hypotResult) * result };
    return point;
  }
}
let items1 = [tmp6];
getDockPTTIndicatorDrag.__closure = items1;
getDockPTTIndicatorDrag.__workletHash = 14207531924828;
getDockPTTIndicatorDrag.__initData = tmp5;
const diff = result - 1;
const createStyles = fn(5243);
let obj = {
  ring: {
    padding: diff,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_NORMAL,
    borderRadius: nativeDefault.radii.md,
  },
  buttonShadow: null,
};
let obj3 = {
  padding: diff,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  borderRadius: nativeDefault.radii.md,
};
obj.buttonShadow = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = {
  code: "(function VoicePanelDockPTTButtonTsx2(){let[scheduleOnRN,handleGestureStart]=this.__closure;scheduleOnRN(handleGestureStart);})",
};
let closure_14 = {
  code: "(function VoicePanelDockPTTButtonTsx3(event){let[touchOrigin,dragX,dragY]=this.__closure;const touch=event.allTouches[0];if(touch==null||event.numberOfTouches>1)return;touchOrigin.set({x:touch.absoluteX,y:touch.absoluteY});dragX.set(0);dragY.set(0);})",
};
let closure_15 = {
  code: "(function VoicePanelDockPTTButtonTsx4(event,manager){let[touchOrigin,getDockPTTIndicatorDrag,dragX,dragY,State]=this.__closure;const touch=event.allTouches[0];if(touch!=null){const origin=touchOrigin.get();const drag=getDockPTTIndicatorDrag(touch.absoluteX-origin.x,touch.absoluteY-origin.y);dragX.set(drag.x);dragY.set(drag.y);}if(event.state!==State.BEGAN)return;manager.activate();})",
};
let closure_16 = {
  code: "(function VoicePanelDockPTTButtonTsx5(){let[scheduleOnRN,handleGestureEnd]=this.__closure;scheduleOnRN(handleGestureEnd);})",
};
let obj4 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
let size = fn(2);
let result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPTTButton.tsx");

export default noop.memo(function VoicePanelDockPTTButton(measureGlowOffset) {
  let useReducedMotion;
  let dockPTTMeasureHostRef;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let callback;
  let isScreenReaderEnabled;
  closure_13 = undefined;
  closure_14 = undefined;
  const tmp = isScreenReaderEnabled();
  const context = sharedValue.useContext(useReducedMotion(dockPTTMeasureHostRef[8]));
  const channelId = context.channelId;
  useReducedMotion = context.useReducedMotion;
  dockPTTMeasureHostRef = context.dockPTTMeasureHostRef;
  sharedValue = channelId(dockPTTMeasureHostRef[9]).useSharedValue(0);
  let obj2 = channelId(dockPTTMeasureHostRef[9]);
  const sharedValue1 = channelId(dockPTTMeasureHostRef[9]).useSharedValue(null);
  const obj3 = channelId(dockPTTMeasureHostRef[9]);
  const tmp8 = useReducedMotion(dockPTTMeasureHostRef[10]);
  let ref = sharedValue.useRef(null);
  const tmp8Result = useReducedMotion(dockPTTMeasureHostRef[10])(channelId(dockPTTMeasureHostRef[6]).Shadow.SHADOW_LOW);
  items = [ref];
  let items1 = [channelId];
  const stateFromStores = channelId(dockPTTMeasureHostRef[11]).useStateFromStores(
    items,
    () => ChannelStore.getChannel(channelId),
    items1,
  );
  const obj4 = channelId(dockPTTMeasureHostRef[11]);
  const obj5 = channelId(dockPTTMeasureHostRef[12]);
  ({ mute, onPress } = channelId(dockPTTMeasureHostRef[12]).createMuteHandler(
    useReducedMotion(dockPTTMeasureHostRef[13])(stateFromStores),
  ));
  const muteHandler = channelId(dockPTTMeasureHostRef[12]).createMuteHandler(
    useReducedMotion(dockPTTMeasureHostRef[13])(stateFromStores),
  );
  const deafHandler = channelId(dockPTTMeasureHostRef[12]).createDeafHandler(
    useReducedMotion(dockPTTMeasureHostRef[14])(stateFromStores),
  );
  let onPress2 = deafHandler.onPress;
  if (!deafHandler.deaf) {
    let tmp14;
    if (mute) {
      tmp14 = onPress;
    }
    onPress2 = tmp14;
  }
  ref = obj.useRef(false);
  const obj6 = channelId(dockPTTMeasureHostRef[12]);
  sharedValue2 = channelId(dockPTTMeasureHostRef[9]).useSharedValue({ x: 0, y: 0 });
  const tmp5Result = channelId(dockPTTMeasureHostRef[9]);
  sharedValue3 = channelId(dockPTTMeasureHostRef[9]).useSharedValue(0);
  const tmp5Result3 = channelId(dockPTTMeasureHostRef[9]);
  sharedValue4 = channelId(dockPTTMeasureHostRef[9]).useSharedValue(0);
  let items2 = [sharedValue, sharedValue3, sharedValue4, useReducedMotion];
  callback = obj.useCallback((c0) => {
    if (useReducedMotion.get()) {
      let withTimingResult = timing_timing.withTiming(c0, { duration: 150 });
      const tmp2Result = timing_timing;
    } else {
      withTimingResult = spring_spring.withSpring(c0, closure_10);
      const tmp2Result2 = spring_spring;
    }
    const result = sharedValue.set(withTimingResult);
    if (0 === c0) {
      if (useReducedMotion.get()) {
        let withTimingResult1 = timing_timing.withTiming(0, { duration: 150 });
        const tmp16Result = timing_timing;
      } else {
        withTimingResult1 = spring_spring.withSpring(0, closure_10);
        const tmp16Result2 = spring_spring;
      }
      const result1 = sharedValue3.set(withTimingResult1);
      let withTiming = require;
      let obj2 = dependencyMap;
      if (useReducedMotion.get()) {
        withTiming = withTiming(5485).withTiming;
        obj2 = { duration: 150 };
        let withTimingResult3 = withTiming(0, obj2);
        const withTimingResult2 = withTiming(5485);
      } else {
        withTimingResult3 = withTiming(5876).withSpring(0, closure_10);
        const withTimingResult4 = withTiming(5876);
      }
      const result2 = sharedValue4.set(withTimingResult3);
    }
  }, items2);
  let items3 = [onPress2, dockPTTMeasureHostRef, sharedValue1, callback];
  let items4 = [callback];
  const callback1 = obj.useCallback(() => {
    const current = ref.current;
    if (!ref.current) {
      if (null != current) {
        tmp.current = true;
        if (onPress2 != null) {
          tmp11();
        }
        let result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), true);
        const current2 = dockPTTMeasureHostRef.current;
        if (null != current2) {
          current.measureLayout(current2, (x, y, width, height) => {
            if (ref.current) {
              const size = { x, y, width, height };
              const result = sharedValue1.set(size);
              callback(1);
            }
          });
        }
      }
    }
  }, items3);
  const callback2 = obj.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      MediaEngineActionCreators.setPushToTalkState(MediaEngineStore.getMediaEngine(), false);
      callback(0);
    }
  }, items4);
  const tmp21 = useReducedMotion(dockPTTMeasureHostRef[19])(channelId, callback1, callback2);
  isScreenReaderEnabled = tmp21.isScreenReaderEnabled;
  ({ accessibilityProps, startGesture, endGesture } = tmp21);
  const tmp22 = useReducedMotion(dockPTTMeasureHostRef[20])(startGesture);
  closure_13 = tmp22;
  const tmp23 = useReducedMotion(dockPTTMeasureHostRef[20])(endGesture);
  closure_14 = tmp23;
  let items5 = [isScreenReaderEnabled, tmp22, tmp23, sharedValue2, sharedValue3, sharedValue4];
  const obj7 = { children: null };
  const obj8 = { style: tmp.ring, children: null };
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!isScreenReaderEnabled);
    let result = Gesture.Pan().enabled(!isScreenReaderEnabled).manualActivation(true).shouldCancelWhenOutside(false);
    items = [closure_13, _mod1705.scheduleOnRN, closure_13];
    c0 = undefined;
    c1 = undefined;
    [tmp3, tmp4, tmp5] = items;
    class VoicePanelDockPTTButtonTsx2 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items1 = [tmp4, tmp5];
    VoicePanelDockPTTButtonTsx2.__closure = items1;
    VoicePanelDockPTTButtonTsx2.__workletHash = 7241275246329;
    VoicePanelDockPTTButtonTsx2.__initData = tmp3;
    const manualActivationResult = Gesture.Pan().enabled(!isScreenReaderEnabled).manualActivation(true);
    const items2 = [closure_14, sharedValue2, sharedValue3, sharedValue4];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp9, tmp10, tmp11, tmp12] = items2;
    class VoicePanelDockPTTButtonTsx3 {
      constructor(arg0) {
        first = arg0.allTouches[0];
        tmp2 = null == first;
        if (!tmp2) {
          num = 1;
          tmp2 = arg0.numberOfTouches > 1;
        }
        if (!tmp2) {
          tmp3 = closure_0;
          point = { x: null, y: null };
          ({ absoluteX: obj.x, absoluteY: obj.y } = first);
          result = closure_0.set(point);
          tmp5 = closure_1;
          num2 = 0;
          result1 = closure_1.set(0);
          tmp7 = closure_2;
          result2 = closure_2.set(0);
        }
        return;
      }
    }
    const items3 = [tmp10, tmp11, tmp12];
    VoicePanelDockPTTButtonTsx3.__closure = items3;
    VoicePanelDockPTTButtonTsx3.__workletHash = 2699216124171;
    VoicePanelDockPTTButtonTsx3.__initData = tmp9;
    const onBeginResult = result.onBegin(VoicePanelDockPTTButtonTsx2);
    const items4 = [
      closure_15,
      sharedValue2,
      getDockPTTIndicatorDrag,
      sharedValue3,
      sharedValue4,
      LegacyBaseButton.State,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items4;
    class VoicePanelDockPTTButtonTsx4 {
      constructor(arg0, arg1) {
        first = arg0.allTouches[0];
        if (null != first) {
          tmp2 = closure_0;
          point = closure_0.get();
          tmp3 = closure_1;
          point2 = closure_1(first.absoluteX - point.x, first.absoluteY - point.y);
          tmp4 = closure_2;
          result = closure_2.set(point2.x);
          tmp6 = closure_3;
          result1 = closure_3.set(point2.y);
        }
        if (arg0.state === closure_4.BEGAN) {
          tmp8 = arg1;
          activateResult = arg1.activate();
        }
        return;
      }
    }
    const items5 = [tmp14, tmp15, tmp16, tmp17, tmp18];
    VoicePanelDockPTTButtonTsx4.__closure = items5;
    VoicePanelDockPTTButtonTsx4.__workletHash = 2024555727413;
    VoicePanelDockPTTButtonTsx4.__initData = tmp13;
    const onTouchesDownResult = result.onBegin(VoicePanelDockPTTButtonTsx2).onTouchesDown(VoicePanelDockPTTButtonTsx3);
    const items6 = [closure_16, _mod1705.scheduleOnRN, closure_14];
    c0 = undefined;
    c1 = undefined;
    [tmp19, tmp20, tmp21] = items6;
    class VoicePanelDockPTTButtonTsx5 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items7 = [tmp20, tmp21];
    VoicePanelDockPTTButtonTsx5.__closure = items7;
    VoicePanelDockPTTButtonTsx5.__workletHash = 11336528841662;
    VoicePanelDockPTTButtonTsx5.__initData = tmp19;
    return result
      .onBegin(VoicePanelDockPTTButtonTsx2)
      .onTouchesDown(VoicePanelDockPTTButtonTsx3)
      .onTouchesMove(VoicePanelDockPTTButtonTsx4)
      .onFinalize(VoicePanelDockPTTButtonTsx5);
  }, items5);
  const obj9 = { measureGlowOffset: measureGlowOffset.measureGlowOffset, style: null, children: null };
  let items6 = [tmp.buttonShadow, { boxShadow: tmp8Result }];
  obj9.style = items6;
  const tmp5Result4 = channelId(dockPTTMeasureHostRef[9]);
  const obj10 = { gesture: memo, children: null };
  const obj11 = { ref, accessibilityLabel: null, variant: "secondary", size: "sm", icon: null };
  const intl = tmp5(tmp3[25]).intl;
  obj11.accessibilityLabel = intl.string(channelId(dockPTTMeasureHostRef[25]).t.Q8gkVL);
  obj11.icon = useReducedMotion(dockPTTMeasureHostRef[26]);
  const merged = Object.assign(accessibilityProps);
  obj10.children = ref(channelId(dockPTTMeasureHostRef[24]).IconButton, obj11);
  obj9.children = ref(channelId(dockPTTMeasureHostRef[21]).GestureDetector, obj10);
  obj8.children = ref(useReducedMotion(dockPTTMeasureHostRef[23]), obj9);
  let items7 = [ref(sharedValue1, obj8)];
  let tmp2Result = useReducedMotion(dockPTTMeasureHostRef[23]);
  items7[1] = ref(channelId(dockPTTMeasureHostRef[27]).Portal, {
    hostName: context.dockPTTPortalHostName,
    children: ref(useReducedMotion(dockPTTMeasureHostRef[28]), {
      progress: sharedValue,
      anchor: sharedValue1,
      dragX: sharedValue3,
      dragY: sharedValue4,
    }),
  });
  obj7.children = items7;
  return sharedValue3(sharedValue2, obj7);
});
