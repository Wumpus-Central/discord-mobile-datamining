// === Module 19747: VoicePanelControlsAppLauncher ===

// Module 19747 (VoicePanelControlsAppLauncher)
import _modDef38 from "module_38" /* 38 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8915 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 12612 */;
import VoicePanelControlsDrawerTitleDefault from "VoicePanelControlsDrawerTitle" /* 14063 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;

const require = globalThis.__r;

require = fn;
const VoicePanelControlsConstants = fn(11361);
({ VoicePanelControlsModes: hasOwnProperty, CONTROLS_DRAWER_HEADER_SIZE } = VoicePanelControlsConstants);
const ComponentActions = fn(1072).ComponentActions;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5140);
let closure_10 = createStyles.createStyles({ container: { width: "100%", paddingTop: CONTROLS_DRAWER_HEADER_SIZE } });
let closure_11 = { code: "(function VoicePanelControlsAppLauncherTsx1(){let[gestureSpecs]=this.__closure;return gestureSpecs.get().active;})" };
let closure_12 = { code: "(function VoicePanelControlsAppLauncherTsx2(){let[gestureSpecs]=this.__closure;return gestureSpecs.get().isDrawer;})" };
let closure_13 = { code: "(function VoicePanelControlsAppLauncherTsx3(){let[isGestureActive,isGestureDrawerMode,windowDimensions,safeArea]=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx");

export default noop.memo(function VoicePanelControlsAppLauncher(gestureSpecs) {
  gestureSpecs = gestureSpecs.gestureSpecs;
  _require = undefined;
  importDefault = undefined;
  const tmp = closure_10();
  const gradientTop = require("ClientThemesOverrides").useGradientTop();
  const context = noop.useContext(VoicePanelStateContextDefault);
  const setControlsMode = context.setControlsMode;
  _require = setControlsMode;
  ({ channelId: c1, safeArea, windowDimensions } = context);
  const tmp7 = useStateFromSharedValueDefault(windowDimensions);
  const rect = useStateFromSharedValueDefault(safeArea);
  const obj = require("ClientThemesOverrides");
  items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(c1));
  _modDef38(null != stateFromStores, "channel should not be null");
  const obj2 = require("initialize");
  const items1 = [setControlsMode];
  const controlsDrawerOpenWidth = require("VoicePanelControlsUtils").getControlsDrawerOpenWidth(tmp7.width, rect.left, rect.right);
  const callback = noop.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
    _undefined({ mode: constants.HIDDEN });
  }, items1);
  const obj3 = require("VoicePanelControlsUtils");
  const appLauncherChatInputRefDummy = require("AppLauncherContext").useAppLauncherChatInputRefDummy({ noop: true });
  const obj4 = require("AppLauncherContext");
  const ref = noop.useRef(require("AppLauncherContext").AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = noop.useRef(undefined);
  const sharedValue = require("module_1652").useSharedValue(0);
  const obj5 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  const obj6 = require("module_1652");
  const items2 = [closure_11, gestureSpecs];
  _require = undefined;
  [tmp17, tmp18] = items2;
  class VoicePanelControlsAppLauncherTsx1 {
    constructor() {
      return closure_0.get().active;
    }
  }
  const items3 = [tmp18];
  VoicePanelControlsAppLauncherTsx1.__closure = items3;
  VoicePanelControlsAppLauncherTsx1.__workletHash = 16735872110268;
  VoicePanelControlsAppLauncherTsx1.__initData = tmp17;
  const derivedValue = require("module_1652").useDerivedValue(VoicePanelControlsAppLauncherTsx1);
  const obj7 = require("module_1652");
  const items4 = [closure_12, gestureSpecs];
  _require = undefined;
  [tmp20, tmp21] = items4;
  class VoicePanelControlsAppLauncherTsx2 {
    constructor() {
      return closure_0.get().isDrawer;
    }
  }
  const items5 = [tmp21];
  VoicePanelControlsAppLauncherTsx2.__closure = items5;
  VoicePanelControlsAppLauncherTsx2.__workletHash = 13454461717534;
  VoicePanelControlsAppLauncherTsx2.__initData = tmp20;
  const derivedValue1 = require("module_1652").useDerivedValue(VoicePanelControlsAppLauncherTsx2);
  const tmp2Result = require("module_1652");
  const items6 = [closure_13, derivedValue, derivedValue1, tmp7, rect];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27] = items6;
  class VoicePanelControlsAppLauncherTsx3 {
    constructor() {
      if (closure_0.get()) {
        tmp2 = closure_2;
        tmp3 = closure_3;
        height = closure_2.height - closure_3.top;
      } else {
        tmp = closure_1;
        height = "100%";
      }
      return { height };
    }
  }
  const items7 = [tmp24, tmp25, tmp26, tmp27];
  VoicePanelControlsAppLauncherTsx3.__closure = items7;
  VoicePanelControlsAppLauncherTsx3.__workletHash = 7444393630336;
  VoicePanelControlsAppLauncherTsx3.__initData = tmp23;
  const obj8 = { children: null };
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelControlsAppLauncherTsx3);
  const obj9 = { style: null, children: null };
  const items8 = [tmp.container, gradientTop, animatedStyle];
  obj9.style = items8;
  const tmp2Result2 = require("module_1652");
  const items9 = [closure_7(AppLauncherNavigatorDefault, { bottomSheetIndex: sharedValue1, bottomSheetPosition: sharedValue, bottomSheetExpandReasonRef: ref1, context: { type: "channel", channel: stateFromStores }, chatInputRef: appLauncherChatInputRefDummy, entrypoint: require("AppLauncherTypes").AppLauncherEntrypoint.VOICE, keyboardCloseReasonRef: ref, onActivityItemSelected: callback, width: controlsDrawerOpenWidth }), ];
  const obj11 = { title: null, disablePill: true };
  const obj10 = { bottomSheetIndex: sharedValue1, bottomSheetPosition: sharedValue, bottomSheetExpandReasonRef: ref1, context: { type: "channel", channel: stateFromStores }, chatInputRef: appLauncherChatInputRefDummy, entrypoint: require("AppLauncherTypes").AppLauncherEntrypoint.VOICE, keyboardCloseReasonRef: ref, onActivityItemSelected: callback, width: controlsDrawerOpenWidth };
  const intl = tmp2(1113).intl;
  obj11.title = intl.string(require("util").t.shUONg);
  items9[1] = closure_7(VoicePanelControlsDrawerTitleDefault, obj11);
  obj9.children = items9;
  obj8.children = closure_8(_modDef1652.View, obj9);
  return closure_7(closure_9, obj8);
});