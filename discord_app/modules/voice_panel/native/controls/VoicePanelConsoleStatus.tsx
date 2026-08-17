// discord_app/modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { EDGE_GUTTER } from "CARD_SIZE" /* 11443 */;
import { CONTROLS_HEIGHT } from "VoicePanelControlsModes" /* 11438 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
class VoicePanelConsoleStatus {
  constructor(arg0) {
    state = global.state;
    cleanUp = global.cleanUp;
    windowDimensions = undefined;
    color = undefined;
    closure_4 = undefined;
    ({ wrapperSpecs, accessoryHeights } = global);
    tmp = closure_8();
    tmp3 = windowDimensions;
    tmp2 = cleanUp;
    context = color.useContext(require("dismissPanel"));
    windowDimensions = context.windowDimensions;
    ({ channelId, mode } = context);
    tmp5 = require("useConsoleConnectingInfo")(channelId);
    color = tmp5.color;
    tmp6 = state;
    ({ icon, text, displayCancel } = tmp5);
    obj = require("module_4115");
    sharedValue = obj.useSharedValue(false);
    closure_4 = sharedValue;
    items = [, ];
    items[0] = sharedValue;
    items[1] = state;
    effect = color.useEffect(() => {
      const result = sharedValue.set(state !== state(windowDimensions[10]).TransitionStates.YEETED);
    }, items);
    tmp9 = require("useControlsTranslation")(mode, wrapperSpecs, accessoryHeights);
    obj2 = require("module_4115");
    fn = function v() {
      let obj = { backgroundColor: color, width: windowDimensions.get().width - 2 * sharedValue, height: closure_1_5 + 36, borderRadius: 32, transform: null };
      let num = 100;
      if (sharedValue.get()) {
        num = 0;
      }
      obj = { translateY: null };
      const fn = function n(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = !closure_4.get();
        }
        if (tmp) {
          closure_1_0(closure_1_2[9]).runOnJS(closure_1)();
          const obj = closure_1_0(closure_1_2[9]);
        }
      };
      obj = { shouldShow: sharedValue, runOnJS: state(windowDimensions[9]).runOnJS, cleanUp };
      fn.__closure = obj;
      fn.__workletHash = 9820708059867;
      fn.__initData = closure_1_11;
      obj[0] = state(windowDimensions[12]).withSpring(num, closure_1_9, "respect-motion-settings", fn);
      const items = [obj];
      obj[4] = items;
      return obj;
    };
    obj = { color, windowDimensions, EDGE_GUTTER: closure_4, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT: 36, withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: closure_9, runOnJS: require("module_4115").runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 14156265059426;
    fn.__initData = closure_10;
    animatedStyle = obj2.useAnimatedStyle(fn);
    obj4 = require("module_4115");
    class V {
      constructor() {
        obj = { width: windowDimensions.get().width - 2 * closure_4 };
        return obj;
      }
    }
    V.__closure = { windowDimensions, EDGE_GUTTER: closure_4 };
    V.__workletHash = 2418678233810;
    V.__initData = closure_12;
    tmp12 = jsxs;
    animatedStyle1 = obj4.useAnimatedStyle(V);
    obj1 = { style: items1, children: null };
    items1 = [, ];
    items1[0] = tmp.consoleParentContainer;
    items1[1] = tmp9;
    tmp13 = jsx;
    obj2 = { style: items2, children: null };
    items2 = [];
    items2[0] = tmp.consoleContainer;
    tmp14 = require("set");
    obj3 = { style: animatedStyle, children: null };
    obj4 = { style: tmp.consoleItemContainer, children: null };
    tmp15 = require("set");
    obj5 = { source: icon, color: require("Themes").unsafe_rawColors.WHITE, size: require("Button").IconSizes.SMALL };
    items3 = [, , ];
    items3[0] = jsx(require("Button").Icon, obj5);
    obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.consoleText, children: text };
    items3[1] = jsx(require("Text").Text, obj6);
    tmp13Result = null;
    if (displayCancel) {
      obj7 = { hitSlop: 4, onPress: null, children: null };
      obj7[1] = require("disconnectRemote").disconnectRemote;
      obj8 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
      intl = require("getSystemLocale").intl;
      obj8[2] = intl.string(require("getSystemLocale").t["ETE/oC"]);
      obj7[2] = tmp13(require("Text").Text, obj8);
      tmp13Result = tmp13(require("PressableBase").PressableOpacity, obj7);
    }
    items3[2] = tmp13Result;
    obj4[1] = items3;
    obj3[1] = tmp12(tmp15, obj4);
    obj2[1] = tmp13(require("module_4115").View, obj3);
    items4 = [, ];
    items4[0] = tmp13(tmp14, obj2);
    obj9 = { style: items5, children: tmp13(require("VoicePanelVisualEffectView").VoicePanelVisualEffectView, {}) };
    items5 = [, ];
    items5[0] = tmp.blockingControlCover;
    items5[1] = animatedStyle1;
    items4[1] = tmp13(require("module_4115").View, obj9);
    obj1[1] = items4;
    return tmp12(require("module_4115").View, obj1);
  }
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { consoleParentContainer: { zIndex: 1, position: "absolute", bottom: 0, overflow: "hidden", left: -0.5, right: 0, alignItems: "center" }, consoleContainer: null, consoleItemContainer: null, consoleText: null, blockingControlCover: null };
createCacheKey = { borderRadius: ThemesDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", alignItems: "center", height: 36, marginHorizontal: 18 };
createCacheKey[3] = { textAlign: "left", marginStart: 4, flex: 1 };
createCacheKey[4] = { position: "absolute", bottom: 0, borderRadius: ThemesDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, flex: 1, height: CONTROLS_HEIGHT, overflow: "hidden" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = {};
let merged = Object.assign(require("VoicePanelModes").MODE_CHANGE_PHYSICS);
obj2.overshootClamping = true;
let closure_10 = { code: "function VoicePanelConsoleStatusTsx1(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}" };
let closure_11 = { code: "function VoicePanelConsoleStatusTsx2(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}" };
let closure_12 = { code: "function VoicePanelConsoleStatusTsx3(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}" };
let obj1 = { position: "absolute", bottom: 0, borderRadius: ThemesDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, flex: 1, height: CONTROLS_HEIGHT, overflow: "hidden" };
let result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default VoicePanelConsoleStatus;
export const CONSOLE_STATUS_HEIGHT = 36;
export const renderVoicePanelConsoleStatus = function renderVoicePanelConsoleStatus(arg0, arg1, state, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.state = state;
  obj.cleanUp = cleanUp;
  return callback(VoicePanelConsoleStatus, obj, arg0);
};