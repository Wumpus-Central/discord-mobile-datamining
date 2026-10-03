// === Module 17338: VoicePanelControlsAppLauncher ===

// Module 17338 (VoicePanelControlsAppLauncher)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const VoicePanelControlsConstants = fn(11900);
({ VoicePanelControlsModes: hasOwnProperty, CONTROLS_DRAWER_HEADER_SIZE } = VoicePanelControlsConstants);
const ComponentActions = fn(1085).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles({ container: { width: "100%", paddingTop: CONTROLS_DRAWER_HEADER_SIZE } });
const __initData = { code: "function VoicePanelControlsAppLauncherTsx1(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}" };
const __initData2 = { code: "function VoicePanelControlsAppLauncherTsx2(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().isDrawer;}" };
const __initData3 = { code: "function VoicePanelControlsAppLauncherTsx3(){const{isGestureActive,isGestureDrawerMode,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:\"100%\";return{height:height};}" };
const __initData4 = { code: "function VoicePanelControlsAppLauncherTsx4(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}" };
const __initData5 = { code: "function VoicePanelControlsAppLauncherTsx5(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().isDrawer;}" };
const __initData6 = { code: "function VoicePanelControlsAppLauncherTsx6(){const{isGestureActive,isGestureDrawerMode,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((gestureSpecs) => {
  const cResult = gestureSpecs(channelId[7]).c(27);
  gestureSpecs = gestureSpecs.gestureSpecs;
  const tmp4 = closure_10();
  const obj = gestureSpecs(channelId[7]);
  const gradientTop = gestureSpecs(channelId[8]).useGradientTop();
  const context = noop.useContext(setControlsMode(channelId[9]));
  setControlsMode = context.setControlsMode;
  channelId = context.channelId;
  ({ safeArea, windowDimensions } = context);
  const tmp8 = setControlsMode(channelId[10])(windowDimensions);
  noop = tmp8;
  const rect = setControlsMode(channelId[10])(safeArea);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [rect];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  const obj2 = gestureSpecs(channelId[8]);
  const tmp6 = setControlsMode;
  const stateFromStores = gestureSpecs(channelId[11]).useStateFromStores(first, tmp11);
  tmp6(channelId[12])(null != stateFromStores, "channel should not be null");
  if (cResult[3] === rect.left) {
    if (cResult[4] === rect.right) {
      if (cResult[7] !== setControlsMode) {
        class P {
          constructor() {
            ComponentDispatch = closure_0(closure_2[14]).ComponentDispatch;
            dispatchResult = ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            obj = { mode: VoicePanelControlsModes.HIDDEN };
            tmp2 = setControlsMode(obj);
            return;
          }
        }
        cResult[7] = setControlsMode;
        cResult[8] = P;
      } else {
        class P {
          constructor() {
            ComponentDispatch = closure_0(closure_2[14]).ComponentDispatch;
            dispatchResult = ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            obj = { mode: VoicePanelControlsModes.HIDDEN };
            tmp2 = setControlsMode(obj);
            return;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            ComponentDispatch = closure_0(closure_2[14]).ComponentDispatch;
            dispatchResult = ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            obj = { mode: VoicePanelControlsModes.HIDDEN };
            tmp2 = setControlsMode(obj);
            return;
          }
        }
        cResult[9] = tmp18;
      } else {
        class P {
          constructor() {
            ComponentDispatch = closure_0(closure_2[14]).ComponentDispatch;
            dispatchResult = ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            obj = { mode: VoicePanelControlsModes.HIDDEN };
            tmp2 = setControlsMode(obj);
            return;
          }
        }
      }
      const appLauncherChatInputRefDummy = tmp(tmp2[15]).useAppLauncherChatInputRefDummy(tmp18);
      const VOICE = tmp(tmp2[16]).AppLauncherEntrypoint.VOICE;
      obj3.useRef(tmp(tmp2[15]).AppLauncherKeyboardCloseReason.DISMISSED);
      obj3.useRef(undefined);
      const tmpResult7 = tmp(tmp2[15]);
      const sharedValue = tmp(tmp2[17]).useSharedValue(0);
      const tmpResult8 = tmp(tmp2[17]);
      const sharedValue1 = tmp(tmp2[17]).useSharedValue(0);
      const tmpResult9 = tmp(tmp2[17]);
      class O {
        constructor() {
          return gestureSpecs.get().active;
        }
      }
      const obj4 = { gestureSpecs };
      O.__closure = obj4;
      O.__workletHash = 1130089519653;
      O.__initData = __initData;
      const derivedValue = tmp(tmp2[17]).useDerivedValue(O);
      const tmpResult10 = tmp(tmp2[17]);
      class N {
        constructor() {
          return gestureSpecs.get().isDrawer;
        }
      }
      const obj6 = { gestureSpecs };
      N.__closure = obj6;
      N.__workletHash = 13970291088135;
      N.__initData = __initData2;
      const derivedValue1 = tmp(tmp2[17]).useDerivedValue(N);
      const tmpResult11 = tmp(tmp2[17]);
      class F {
        constructor() {
          if (closure_5.get()) {
            tmp2 = closure_3;
            tmp3 = closure_4;
            height = closure_3.height - closure_4.top;
          } else {
            tmp = closure_6;
            height = "100%";
          }
          return { height };
        }
      }
      const obj7 = { isGestureActive: derivedValue, isGestureDrawerMode: derivedValue1, windowDimensions: tmp8, safeArea: rect };
      F.__closure = obj7;
      F.__workletHash = 14526970665433;
      F.__initData = __initData3;
      const animatedStyle = tmp(tmp2[17]).useAnimatedStyle(F);
      if (cResult[10] === animatedStyle) {
        class P {
          constructor() {
            ComponentDispatch = closure_0(closure_2[14]).ComponentDispatch;
            dispatchResult = ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            obj = { mode: VoicePanelControlsModes.HIDDEN };
            tmp2 = setControlsMode(obj);
            return;
          }
        }
      }
      const items1 = [tmp4.container, gradientTop, animatedStyle];
      cResult[10] = animatedStyle;
      cResult[11] = gradientTop;
      cResult[12] = tmp4.container;
      cResult[13] = items1;
      const tmpResult12 = tmp(tmp2[17]);
    }
  }
  const controlsDrawerOpenWidth = obj5.getControlsDrawerOpenWidth(tmp8.width, rect.left, rect.right);
  cResult[3] = rect.left;
  cResult[4] = rect.right;
  cResult[5] = tmp8.width;
  cResult[6] = controlsDrawerOpenWidth;
  const tmpResult = gestureSpecs(channelId[11]);
}) : ((gestureSpecs) => {
  gestureSpecs = gestureSpecs.gestureSpecs;
  let setControlsMode;
  dependencyMap = undefined;
  noop = undefined;
  let derivedValue1;
  const tmp = closure_10();
  const gradientTop = gestureSpecs(7507).useGradientTop();
  const context = noop.useContext(setControlsMode(11901));
  setControlsMode = context.setControlsMode;
  ({ channelId: c2, safeArea, windowDimensions } = context);
  const tmp4 = setControlsMode(7941)(windowDimensions);
  noop = tmp4;
  const rect = setControlsMode(7941)(safeArea);
  const obj = gestureSpecs(7507);
  const items = [rect];
  const stateFromStores = gestureSpecs(504).useStateFromStores(items, () => ChannelStore.getChannel(c2));
  setControlsMode(38)(null != stateFromStores, "channel should not be null");
  const obj2 = gestureSpecs(504);
  const items1 = [setControlsMode];
  const controlsDrawerOpenWidth = gestureSpecs(11909).getControlsDrawerOpenWidth(tmp4.width, rect.left, rect.right);
  const callback = noop.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
    setControlsMode({ mode: hasOwnProperty.HIDDEN });
  }, items1);
  const obj3 = gestureSpecs(11909);
  const appLauncherChatInputRefDummy = gestureSpecs(10994).useAppLauncherChatInputRefDummy({ noop: true });
  const obj4 = gestureSpecs(10994);
  const ref = noop.useRef(gestureSpecs(10994).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = noop.useRef(undefined);
  const sharedValue = gestureSpecs(4612).useSharedValue(0);
  const obj5 = gestureSpecs(4612);
  const sharedValue1 = gestureSpecs(4612).useSharedValue(0);
  const obj6 = gestureSpecs(4612);
  const fn = function x() {
    return gestureSpecs.get().active;
  };
  fn.__closure = { gestureSpecs };
  fn.__workletHash = 5978423252544;
  fn.__initData = __initData4;
  const derivedValue = gestureSpecs(4612).useDerivedValue(fn);
  const obj7 = gestureSpecs(4612);
  class E {
    constructor() {
      return gestureSpecs.get().isDrawer;
    }
  }
  E.__closure = { gestureSpecs };
  E.__workletHash = 1602221389280;
  E.__initData = __initData5;
  derivedValue1 = gestureSpecs(4612).useDerivedValue(E);
  const obj8 = gestureSpecs(4612);
  class L {
    constructor() {
      if (closure_5.get()) {
        tmp2 = closure_3;
        tmp3 = closure_4;
        height = closure_3.height - closure_4.top;
      } else {
        tmp = closure_6;
        height = "100%";
      }
      return { height };
    }
  }
  L.__closure = { isGestureActive: derivedValue, isGestureDrawerMode: derivedValue1, windowDimensions: tmp4, safeArea: rect };
  L.__workletHash = 14640910836060;
  L.__initData = __initData6;
  const obj10 = { children: null };
  const animatedStyle = gestureSpecs(4612).useAnimatedStyle(L);
  const obj11 = { style: null, children: null };
  const items2 = [tmp.container, gradientTop, animatedStyle];
  obj11.style = items2;
  const obj9 = gestureSpecs(4612);
  const items3 = [closure_7(setControlsMode(11693), { bottomSheetIndex: sharedValue1, bottomSheetPosition: sharedValue, bottomSheetExpandReasonRef: ref1, context: { type: "channel", channel: stateFromStores }, chatInputRef: appLauncherChatInputRefDummy, entrypoint: gestureSpecs(8932).AppLauncherEntrypoint.VOICE, keyboardCloseReasonRef: ref, onActivityItemSelected: callback, width: controlsDrawerOpenWidth }), ];
  const obj13 = { title: null, disablePill: true };
  const obj12 = { bottomSheetIndex: sharedValue1, bottomSheetPosition: sharedValue, bottomSheetExpandReasonRef: ref1, context: { type: "channel", channel: stateFromStores }, chatInputRef: appLauncherChatInputRefDummy, entrypoint: gestureSpecs(8932).AppLauncherEntrypoint.VOICE, keyboardCloseReasonRef: ref, onActivityItemSelected: callback, width: controlsDrawerOpenWidth };
  const intl = gestureSpecs(1126).intl;
  obj13.title = intl.string(gestureSpecs(1126).t.shUONg);
  items3[1] = closure_7(setControlsMode(11910), obj13);
  obj11.children = items3;
  obj10.children = closure_8(setControlsMode(4612).View, obj11);
  return closure_7(closure_9, obj10);
}));