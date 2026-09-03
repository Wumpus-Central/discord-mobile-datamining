// discord_app/modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/ChannelStore.tsx";
import VoicePanelControlsModes from "VoicePanelControlsConstants.tsx";
import { ComponentActions } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ VoicePanelControlsModes: c5, CONTROLS_DRAWER_HEADER_SIZE } = VoicePanelControlsModes);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { width: "100%", paddingTop: CONTROLS_DRAWER_HEADER_SIZE } });
let closure_11 = {
  code: "function VoicePanelControlsAppLauncherTsx1(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}",
};
let closure_12 = {
  code: "function VoicePanelControlsAppLauncherTsx2(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().isDrawer;}",
};
let closure_13 = {
  code: "function VoicePanelControlsAppLauncherTsx3(){const{isGestureActive,isGestureDrawerMode,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};}",
};
const memoResult = importAllResult.memo(function VoicePanelControlsAppLauncher(gestureSpecs) {
  gestureSpecs = gestureSpecs.gestureSpecs;
  let setControlsMode;
  dependencyMap = undefined;
  importAllResult = undefined;
  let rect;
  let derivedValue;
  let derivedValue1;
  let obj = gestureSpecs(7627);
  const gradientTop = obj.useGradientTop();
  const context = importAllResult.useContext(setControlsMode(12068));
  setControlsMode = context.setControlsMode;
  ({ channelId: c2, safeArea, windowDimensions } = context);
  const tmp4 = setControlsMode(8588)(windowDimensions);
  importAllResult = tmp4;
  rect = setControlsMode(8588)(safeArea);
  obj1 = gestureSpecs(586);
  const items = [rect];
  const stateFromStores = obj1.useStateFromStores(items, () => rect.getChannel(c2));
  setControlsMode(38)(null != stateFromStores, "channel should not be null");
  const tmp = callback3();
  const items1 = [setControlsMode];
  const controlsDrawerOpenWidth = gestureSpecs(12075).getControlsDrawerOpenWidth(tmp4.width, rect.left, rect.right);
  const callback = importAllResult.useCallback(() => {
    const ComponentDispatch = gestureSpecs(_undefined[12]).ComponentDispatch;
    ComponentDispatch.dispatch(derivedValue1.SELECT_ACTIVITY);
    setControlsMode({ mode: derivedValue.HIDDEN });
  }, items1);
  const obj3 = gestureSpecs(12075);
  const appLauncherChatInputRefDummy = gestureSpecs(9067).useAppLauncherChatInputRefDummy({ noop: true });
  const obj4 = gestureSpecs(9067);
  const ref = importAllResult.useRef(gestureSpecs(9067).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = importAllResult.useRef(undefined);
  const sharedValue = gestureSpecs(4217).useSharedValue(0);
  const obj5 = gestureSpecs(4217);
  const sharedValue1 = gestureSpecs(4217).useSharedValue(0);
  const obj6 = gestureSpecs(4217);
  const fn = function y() {
    return gestureSpecs.get().active;
  };
  fn.__closure = { gestureSpecs };
  fn.__workletHash = 1130089519653;
  fn.__initData = closure_11;
  derivedValue = gestureSpecs(4217).useDerivedValue(fn);
  const obj7 = gestureSpecs(4217);
  class E {
    constructor() {
      return gestureSpecs.get().isDrawer;
    }
  }
  E.__closure = { gestureSpecs };
  E.__workletHash = 13970291088135;
  E.__initData = closure_12;
  derivedValue1 = gestureSpecs(4217).useDerivedValue(E);
  const obj8 = gestureSpecs(4217);
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
  L.__initData = closure_13;
  obj = { children: null };
  const animatedStyle = gestureSpecs(4217).useAnimatedStyle(L);
  obj = { style: items2, children: null };
  items2 = [tmp.container, gradientTop, animatedStyle];
  const items3 = [
    callback(setControlsMode(11883), {
      bottomSheetIndex: sharedValue1,
      bottomSheetPosition: sharedValue,
      bottomSheetExpandReasonRef: ref1,
      context: { type: "channel", channel: stateFromStores },
      chatInputRef: appLauncherChatInputRefDummy,
      entrypoint: gestureSpecs(8448).AppLauncherEntrypoint.VOICE,
      keyboardCloseReasonRef: ref,
      onActivityItemSelected: callback,
      width: controlsDrawerOpenWidth,
    }),
  ];
  obj1 = { title: null, disablePill: true };
  const obj9 = gestureSpecs(4217);
  const intl = gestureSpecs(1233).intl;
  obj1[0] = intl.string(gestureSpecs(1233).t.shUONg);
  items3[1] = callback(setControlsMode(12076), obj1);
  obj[1] = items3;
  obj[0] = callback2(setControlsMode(4217).View, obj);
  return callback(closure_9, obj);
});
const result = require("set").fileFinishedImporting(
  "modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx",
);

export default memoResult;
