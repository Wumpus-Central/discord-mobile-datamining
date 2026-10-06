// === Module 17391: VoicePanelControlsAppLauncher ===

// Module 17391 (VoicePanelControlsAppLauncher)
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11914 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let CONTROLS_DRAWER_HEADER_SIZE;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let react = react_mod;
({ VoicePanelControlsModes: hasOwnProperty, CONTROLS_DRAWER_HEADER_SIZE } = VoicePanelControlsConstants);
const ComponentActions = Constants.ComponentActions;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { container: { width: "100%", paddingTop: CONTROLS_DRAWER_HEADER_SIZE } };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function VoicePanelControlsAppLauncherTsx1(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}" };
const __initData2 = { code: "function VoicePanelControlsAppLauncherTsx2(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().isDrawer;}" };
const __initData3 = { code: "function VoicePanelControlsAppLauncherTsx3(){const{isGestureActive,isGestureDrawerMode,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:\"100%\";return{height:height};}" };
const __initData4 = { code: "function VoicePanelControlsAppLauncherTsx4(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}" };
const __initData5 = { code: "function VoicePanelControlsAppLauncherTsx5(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().isDrawer;}" };
const __initData6 = { code: "function VoicePanelControlsAppLauncherTsx6(){const{isGestureActive,isGestureDrawerMode,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((gestureSpecs) => {
  let channelId;
  let first;
  let safeArea;
  let setControlsMode;
  let styles;
  let tmp11;
  let windowDimensions;
  let obj = gestureSpecs(channelId[7]);
  const cResult = obj.c(27);
  gestureSpecs = gestureSpecs.gestureSpecs;
  const tmp4 = closure_10();
  const obj2 = gestureSpecs(channelId[8]);
  const gradientTop = obj2.useGradientTop();
  const context = react.useContext(setControlsMode(channelId[9]));
  const tmp6 = setControlsMode;
  setControlsMode = context.setControlsMode;
  channelId = context.channelId;
  ({ safeArea, windowDimensions } = context);
  const tmp8 = setControlsMode(channelId[10])(windowDimensions);
  react = tmp8;
  const rect = setControlsMode(channelId[10])(safeArea);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [rect];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  const tmpResult = gestureSpecs(channelId[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
  tmp6(channelId[12])(null != stateFromStores, "channel should not be null");
  if (cResult[3] === rect.left) {
    if (cResult[4] === rect.right) {
      if (cResult[7] !== setControlsMode) {
        class P {
          constructor() {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            const obj = { mode: hasOwnProperty.HIDDEN };
            setControlsMode(obj);
          }
        }
        cResult[7] = setControlsMode;
        cResult[8] = P;
      } else {
        class P {
          constructor() {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            const obj = { mode: hasOwnProperty.HIDDEN };
            setControlsMode(obj);
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            const obj = { mode: hasOwnProperty.HIDDEN };
            setControlsMode(obj);
          }
        }
        cResult[9] = tmp18;
      } else {
        class P {
          constructor() {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            const obj = { mode: hasOwnProperty.HIDDEN };
            setControlsMode(obj);
          }
        }
      }
      const tmpResult7 = gestureSpecs(channelId[15]);
      const appLauncherChatInputRefDummy = tmpResult7.useAppLauncherChatInputRefDummy(tmp18);
      const VOICE = tmp(tmp2[16]).AppLauncherEntrypoint.VOICE;
      react.useRef(gestureSpecs(channelId[15]).AppLauncherKeyboardCloseReason.DISMISSED);
      react.useRef(undefined);
      const tmpResult8 = gestureSpecs(channelId[17]);
      const sharedValue = tmpResult8.useSharedValue(0);
      const tmpResult9 = gestureSpecs(channelId[17]);
      const sharedValue1 = tmpResult9.useSharedValue(0);
      const tmpResult10 = gestureSpecs(channelId[17]);
      class O {
        constructor() {
          return gestureSpecs.get().active;
        }
      }
      const obj4 = { gestureSpecs };
      O.__closure = obj4;
      O.__workletHash = 1130089519653;
      O.__initData = __initData;
      const derivedValue = tmpResult10.useDerivedValue(O);
      const tmpResult11 = gestureSpecs(channelId[17]);
      class N {
        constructor() {
          return gestureSpecs.get().isDrawer;
        }
      }
      const obj6 = { gestureSpecs };
      N.__closure = obj6;
      N.__workletHash = 13970291088135;
      N.__initData = __initData2;
      const derivedValue1 = tmpResult11.useDerivedValue(N);
      const tmpResult12 = gestureSpecs(channelId[17]);
      class F {
        constructor() {
          let height;
          if (derivedValue.get()) {
            height = styles.height - rect.top;
          } else {
            height = "100%";
          }
          return { height };
        }
      }
      const obj7 = { isGestureActive: derivedValue, isGestureDrawerMode: derivedValue1, windowDimensions: tmp8, safeArea: rect };
      F.__closure = obj7;
      F.__workletHash = 14526970665433;
      F.__initData = __initData3;
      const animatedStyle = tmpResult12.useAnimatedStyle(F);
      if (cResult[10] === animatedStyle) {
        class P {
          constructor() {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
            const obj = { mode: hasOwnProperty.HIDDEN };
            setControlsMode(obj);
          }
        }
      }
      const items1 = [tmp4.container, gradientTop, animatedStyle];
      cResult[10] = animatedStyle;
      cResult[11] = gradientTop;
      cResult[12] = tmp4.container;
      cResult[13] = items1;
    }
  }
  const controlsDrawerOpenWidth = obj5.getControlsDrawerOpenWidth(tmp8.width, rect.left, rect.right);
  cResult[3] = rect.left;
  cResult[4] = rect.right;
  cResult[5] = tmp8.width;
  cResult[6] = controlsDrawerOpenWidth;
}) : ((gestureSpecs) => {
  let View;
  let c2;
  let intl;
  let items2;
  let items3;
  let obj11;
  let safeArea;
  let styles;
  let windowDimensions;
  gestureSpecs = gestureSpecs.gestureSpecs;
  let setControlsMode;
  dependencyMap = undefined;
  react = undefined;
  let derivedValue1;
  const tmp = closure_10();
  let obj = gestureSpecs(7518);
  const gradientTop = obj.useGradientTop();
  const context = react.useContext(setControlsMode(11915));
  setControlsMode = context.setControlsMode;
  ({ channelId: c2, safeArea, windowDimensions } = context);
  const tmp4 = setControlsMode(7952)(windowDimensions);
  react = tmp4;
  const rect = setControlsMode(7952)(safeArea);
  const items = [rect];
  const obj2 = gestureSpecs(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(c2));
  setControlsMode(38)(null != stateFromStores, "channel should not be null");
  const items1 = [setControlsMode];
  const obj3 = gestureSpecs(11923);
  const controlsDrawerOpenWidth = obj3.getControlsDrawerOpenWidth(tmp4.width, rect.left, rect.right);
  const callback = react.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
    const obj = { mode: hasOwnProperty.HIDDEN };
    setControlsMode(obj);
  }, items1);
  const obj4 = gestureSpecs(11007);
  const appLauncherChatInputRefDummy = obj4.useAppLauncherChatInputRefDummy({ noop: true });
  const VOICE = gestureSpecs(8961).AppLauncherEntrypoint.VOICE;
  const ref = react.useRef(gestureSpecs(11007).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = react.useRef(undefined);
  const obj5 = gestureSpecs(4618);
  const sharedValue = obj5.useSharedValue(0);
  const obj6 = gestureSpecs(4618);
  const sharedValue1 = obj6.useSharedValue(0);
  const fn = function x() {
    return gestureSpecs.get().active;
  };
  fn.__closure = { gestureSpecs };
  fn.__workletHash = 5978423252544;
  fn.__initData = __initData4;
  const obj7 = gestureSpecs(4618);
  const derivedValue = obj7.useDerivedValue(fn);
  const obj8 = gestureSpecs(4618);
  class E {
    constructor() {
      return gestureSpecs.get().isDrawer;
    }
  }
  E.__closure = { gestureSpecs };
  E.__workletHash = 1602221389280;
  E.__initData = __initData5;
  derivedValue1 = obj8.useDerivedValue(E);
  const obj9 = gestureSpecs(4618);
  class L {
    constructor() {
      let height;
      if (derivedValue.get()) {
        height = styles.height - rect.top;
      } else {
        height = "100%";
      }
      return { height };
    }
  }
  L.__closure = { isGestureActive: derivedValue, isGestureDrawerMode: derivedValue1, windowDimensions: tmp4, safeArea: rect };
  L.__workletHash = 14640910836060;
  L.__initData = __initData6;
  const obj10 = { children: closure_8(View, obj11) };
  const animatedStyle = obj9.useAnimatedStyle(L);
  obj11 = { style: items2, children: items3 };
  items2 = [tmp.container, gradientTop, animatedStyle];
  View = setControlsMode(4618).View;
  items3 = [, ];
  const obj12 = { bottomSheetIndex: sharedValue1, bottomSheetPosition: sharedValue, bottomSheetExpandReasonRef: ref1, context: { type: "channel", channel: stateFromStores }, chatInputRef: appLauncherChatInputRefDummy, entrypoint: VOICE, keyboardCloseReasonRef: ref, onActivityItemSelected: callback, width: controlsDrawerOpenWidth };
  items3[0] = closure_7(setControlsMode(11707), obj12);
  const obj13 = { title: intl.string(gestureSpecs(1126).t.shUONg), disablePill: true };
  const tmp17 = setControlsMode(11924);
  intl = gestureSpecs(1126).intl;
  items3[1] = closure_7(tmp17, obj13);
  return closure_7(closure_9, obj10);
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx");

export default memoResult;