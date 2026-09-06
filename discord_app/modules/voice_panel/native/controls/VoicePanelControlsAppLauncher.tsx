// discord_app/modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const VoicePanelControlsConstants = fn(12271);
({ VoicePanelControlsModes: hasOwnProperty, CONTROLS_DRAWER_HEADER_SIZE } = VoicePanelControlsConstants);
const ComponentActions = fn(1074).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { width: "100%", paddingTop: CONTROLS_DRAWER_HEADER_SIZE } });
const __initData = {
  code: "function VoicePanelControlsAppLauncherTsx1(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}",
};
const __initData2 = {
  code: "function VoicePanelControlsAppLauncherTsx2(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().isDrawer;}",
};
const __initData3 = {
  code: "function VoicePanelControlsAppLauncherTsx3(){const{isGestureActive,isGestureDrawerMode,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx");

export default noop.memo(function VoicePanelControlsAppLauncher(gestureSpecs) {
  gestureSpecs = gestureSpecs.gestureSpecs;
  let setControlsMode;
  dependencyMap = undefined;
  noop = undefined;
  let derivedValue1;
  let obj = gestureSpecs(7872);
  const gradientTop = obj.useGradientTop();
  const context = noop.useContext(setControlsMode(12272));
  setControlsMode = context.setControlsMode;
  ({ channelId: c2, safeArea, windowDimensions } = context);
  const tmp4 = setControlsMode(8265)(windowDimensions);
  noop = tmp4;
  const rect = setControlsMode(8265)(safeArea);
  let obj1 = gestureSpecs(504);
  const items = [rect];
  const stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(c2));
  setControlsMode(38)(null != stateFromStores, "channel should not be null");
  let obj2 = gestureSpecs(12279);
  const items1 = [setControlsMode];
  const controlsDrawerOpenWidth = obj2.getControlsDrawerOpenWidth(tmp4.width, rect.left, rect.right);
  const callback = noop.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
    setControlsMode({ mode: hasOwnProperty.HIDDEN });
  }, items1);
  const tmp = closure_10();
  const appLauncherChatInputRefDummy = gestureSpecs(11215).useAppLauncherChatInputRefDummy({ noop: true });
  const obj4 = gestureSpecs(11215);
  const ref = noop.useRef(gestureSpecs(11215).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = noop.useRef(undefined);
  const sharedValue = gestureSpecs(4296).useSharedValue(0);
  const obj5 = gestureSpecs(4296);
  const sharedValue1 = gestureSpecs(4296).useSharedValue(0);
  const obj6 = gestureSpecs(4296);
  const fn = function y() {
    return gestureSpecs.get().active;
  };
  fn.__closure = { gestureSpecs };
  fn.__workletHash = 1130089519653;
  fn.__initData = __initData;
  const derivedValue = gestureSpecs(4296).useDerivedValue(fn);
  const obj7 = gestureSpecs(4296);
  class E {
    constructor() {
      return gestureSpecs.get().isDrawer;
    }
  }
  E.__closure = { gestureSpecs };
  E.__workletHash = 13970291088135;
  E.__initData = __initData2;
  derivedValue1 = gestureSpecs(4296).useDerivedValue(E);
  const obj8 = gestureSpecs(4296);
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
  L.__closure = {
    isGestureActive: derivedValue,
    isGestureDrawerMode: derivedValue1,
    windowDimensions: tmp4,
    safeArea: rect,
  };
  L.__workletHash = 3671157204025;
  L.__initData = __initData3;
  obj = { children: null };
  const animatedStyle = gestureSpecs(4296).useAnimatedStyle(L);
  obj = { style: null, children: null };
  const items2 = [tmp.container, gradientTop, animatedStyle];
  obj.style = items2;
  obj1 = {
    bottomSheetIndex: sharedValue1,
    bottomSheetPosition: sharedValue,
    bottomSheetExpandReasonRef: ref1,
    context: { type: "channel", channel: stateFromStores },
    chatInputRef: appLauncherChatInputRefDummy,
    entrypoint: gestureSpecs(9409).AppLauncherEntrypoint.VOICE,
    keyboardCloseReasonRef: ref,
    onActivityItemSelected: callback,
    width: controlsDrawerOpenWidth,
  };
  const items3 = [closure_7(setControlsMode(12082), obj1)];
  obj2 = { title: null, disablePill: true };
  const obj9 = gestureSpecs(4296);
  const intl = gestureSpecs(1114).intl;
  obj2.title = intl.string(gestureSpecs(1114).t.shUONg);
  items3[1] = closure_7(setControlsMode(12280), obj2);
  obj.children = items3;
  obj.children = closure_8(setControlsMode(4296).View, obj);
  return closure_7(closure_9, obj);
});
