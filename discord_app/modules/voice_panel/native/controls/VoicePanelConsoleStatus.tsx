// === Module 17179: VoicePanelConsoleStatus ===

// Module 17179 (VoicePanelConsoleStatus)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;

require = fn;
class VoicePanelConsoleStatus {
  constructor(arg0) {
    ({ wrapperSpecs, state } = global);
    cleanUp = global.cleanUp;
    windowDimensions = undefined;
    color = undefined;
    closure_4 = undefined;
    tmp = closure_8();
    tmp3 = windowDimensions;
    tmp2 = cleanUp;
    context = color.useContext(cleanUp(windowDimensions[7]));
    windowDimensions = context.windowDimensions;
    ({ mode, channelId } = context);
    tmp5 = cleanUp(windowDimensions[8])(channelId);
    color = tmp5.color;
    tmp6 = state;
    ({ icon, text, displayCancel } = tmp5);
    obj = state(windowDimensions[9]);
    sharedValue = obj.useSharedValue(false);
    closure_4 = sharedValue;
    items = [, ];
    items[0] = sharedValue;
    items[1] = state;
    effect = color.useEffect(() => {
      const result = sharedValue.set(state !== native.TransitionStates.YEETED);
    }, items);
    tmp9 = cleanUp(windowDimensions[11])(mode, wrapperSpecs, global.accessoryHeights);
    tmp10 = cleanUp(windowDimensions[12])(mode, wrapperSpecs);
    ({ hiddenProps, hiddenStyles } = tmp10);
    obj2 = state(windowDimensions[9]);
    fn = function v() {
      const size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + 36, borderRadius: 32, transform: null };
      obj2 = spring;
      let num = 100;
      if (sharedValue.get()) {
        num = 0;
      }
      let obj = { translateY: null };
      const fn = function n(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = !sharedValue.get();
        }
        if (tmp) {
          state(windowDimensions[9]).runOnJS(cleanUp)();
          const obj = state(windowDimensions[9]);
        }
      };
      obj = { shouldShow: sharedValue, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__closure = obj;
      fn.__workletHash = 9820708059867;
      fn.__initData = __initData;
      obj.translateY = obj2.withSpring(num, obj2, "respect-motion-settings", fn);
      const items = [obj];
      size.transform = items;
      return size;
    };
    obj = { color, windowDimensions, EDGE_GUTTER: closure_4, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT: 36, withSpring: state(windowDimensions[13]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: closure_9, runOnJS: state(windowDimensions[9]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 14156265059426;
    fn.__initData = closure_10;
    animatedStyle = obj2.useAnimatedStyle(fn);
    obj4 = state(windowDimensions[9]);
    class V {
      constructor() {
        obj = { width: windowDimensions.get().width - 2 * EDGE_GUTTER };
        return obj;
      }
    }
    V.__closure = { windowDimensions, EDGE_GUTTER: closure_4 };
    V.__workletHash = 2418678233810;
    V.__initData = closure_12;
    tmp13 = jsxs;
    animatedStyle1 = obj4.useAnimatedStyle(V);
    obj1 = { style: null, animatedProps: hiddenProps, children: null };
    items1 = [, , ];
    items1[0] = tmp.consoleParentContainer;
    items1[1] = tmp9;
    items1[2] = hiddenStyles;
    obj1.style = items1;
    tmp14 = jsx;
    obj2 = { style: null, children: null };
    items2 = [];
    items2[0] = tmp.consoleContainer;
    obj2.style = items2;
    tmp15 = cleanUp(windowDimensions[14]);
    obj3 = { style: animatedStyle, children: null };
    obj4 = { style: tmp.consoleItemContainer, children: null };
    tmp16 = cleanUp(windowDimensions[14]);
    obj5 = { source: icon, color: cleanUp(windowDimensions[6]).unsafe_rawColors.WHITE, size: state(windowDimensions[15]).IconSizes.SMALL };
    items3 = [, , ];
    items3[0] = jsx(state(windowDimensions[15]).Icon, obj5);
    obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.consoleText, children: text };
    items3[1] = jsx(state(windowDimensions[16]).Text, obj6);
    tmp14Result = null;
    if (displayCancel) {
      obj7 = { hitSlop: 4, onPress: null, children: null };
      obj7.onPress = tmp6(tmp3[18]).disconnectRemote;
      obj8 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
      intl = tmp6(tmp3[19]).intl;
      obj8.children = intl.string(tmp6(tmp3[19]).t["ETE/oC"]);
      obj7.children = tmp14(tmp6(tmp3[16]).Text, obj8);
      tmp14Result = tmp14(tmp6(tmp3[17]).PressableOpacity, obj7);
    }
    items3[2] = tmp14Result;
    obj4.children = items3;
    obj3.children = tmp13(tmp16, obj4);
    obj2.children = tmp14(cleanUp(windowDimensions[9]).View, obj3);
    items4 = [, ];
    items4[0] = tmp14(tmp15, obj2);
    obj9 = { style: null, children: tmp14(tmp6(tmp3[20]).VoicePanelVisualEffectView, {}) };
    items5 = [, ];
    items5[0] = tmp.blockingControlCover;
    items5[1] = animatedStyle1;
    obj9.style = items5;
    items4[1] = tmp14(tmp2(tmp3[9]).View, obj9);
    obj1.children = items4;
    return tmp13(cleanUp(windowDimensions[9]).View, obj1);
  }
}
const EDGE_GUTTER = fn(12276).EDGE_GUTTER;
const CONTROLS_HEIGHT = fn(12271).CONTROLS_HEIGHT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { consoleParentContainer: { zIndex: 1, position: "absolute", bottom: 0, overflow: "hidden", left: -0.5, right: 0, alignItems: "center" }, consoleContainer: null, consoleItemContainer: null, consoleText: null, blockingControlCover: null };
createStyles = { borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
createStyles.consoleContainer = createStyles;
createStyles.consoleItemContainer = { flexDirection: "row", alignItems: "center", height: 36, marginHorizontal: 18 };
createStyles.consoleText = { textAlign: "left", marginStart: 4, flex: 1 };
createStyles.blockingControlCover = { position: "absolute", bottom: 0, borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, flex: 1, height: CONTROLS_HEIGHT, overflow: "hidden" };
const React6 = createStyles.createStyles(createStyles);
let obj2 = {};
let merged = Object.assign(fn(12273).MODE_CHANGE_PHYSICS);
obj2.overshootClamping = true;
const __initData = { code: "function VoicePanelConsoleStatusTsx1(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}" };
let closure_11 = { code: "function VoicePanelConsoleStatusTsx2(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function VoicePanelConsoleStatusTsx3(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default VoicePanelConsoleStatus;
export const CONSOLE_STATUS_HEIGHT = 36;
export const renderVoicePanelConsoleStatus = function renderVoicePanelConsoleStatus(arg0, arg1, state, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.state = state;
  obj.cleanUp = cleanUp;
  return timestampProducer(VoicePanelConsoleStatus, obj, arg0);
};