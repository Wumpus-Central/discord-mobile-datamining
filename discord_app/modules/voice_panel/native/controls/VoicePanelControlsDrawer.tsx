// === Module 17753: VoicePanelControlsDrawer ===

// Module 17753 (VoicePanelControlsDrawer)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4559 */;
import Suspender from "Suspender" /* 5224 */;
import spring from "spring" /* 5270 */;
import useRefValueDefault from "useRefValue" /* 5889 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9743 */;
import VoicePanelChatViewDefault from "VoicePanelChatView" /* 12603 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 12613 */;
import VoicePanelVoiceControlsDefault from "VoicePanelVoiceControls" /* 17754 */;
import VoicePanelControlsAppLauncherDefault from "VoicePanelControlsAppLauncher" /* 17764 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderChat(shown) {
  const obj = { collapsable: false, style: absoluteFill.absoluteFill, children: React7(VoicePanelChatViewDefault, { shown }) };
  return React7(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VoicePanelConstants = fn(12606);
({ MODE_CHANGE_PHYSICS: closure_7, VoicePanelModes: closure_8 } = VoicePanelConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4827);
let obj = { drawer: { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_11 = createStyles.createStyles(obj);
const memoResult = noop.memo((shown) => {
  shown = shown.shown;
  const renderContent = shown.renderContent;
  let ref;
  [tmp2, tmp3] = noop.useState(!shown);
  c2 = tmp3;
  let tmp4 = shown;
  if (shown) {
    tmp4 = tmp2;
  }
  if (tmp4) {
    tmp3(false);
  }
  ref = noop.useRef(shown);
  const effect = noop.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = shown;
    }
    ref.current = current;
  });
  const items = [shown];
  const effect1 = noop.useEffect(() => {
    if (!shown) {
      _undefined(true);
    }
  }, items);
  const items1 = [renderContent, shown];
  const memo = noop.useMemo(() => renderContent(shown), items1);
  if (useRefValueDefault(ref)) {
    const obj2 = { freeze: tmp2, children: memo };
    let tmp11 = React7(Suspender.Freeze, obj2);
  } else {
    tmp11 = null;
  }
  return tmp11;
});
const __initData = { code: "function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
const __initData2 = { code: "function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
const __initData3 = { code: "function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
let obj3 = { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default noop.memo(function VoicePanelControlsDrawer(gestureSpecs) {
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  gestureSpecs = gestureSpecs.gestureSpecs;
  const openTab = gestureSpecs.openTab;
  let windowDimensions;
  const context = windowDimensions.useContext(gestureSpecs(openTab[10]));
  const mode = context.mode;
  windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  const tmp = gestureSpecs;
  const tmp4 = closure_11();
  [tmp6, tmp7] = mode(windowDimensions.useState(null == tab), 2);
  c6 = tmp7;
  let tmp5 = mode(windowDimensions.useState(null == tab), 2);
  if (tmp8) {
    tmp7(false);
  }
  tmp8 = tab !== sharedTab.get() && tmp6;
  const fn = function b() {
    const obj = { width: VoicePanelControlsUtils.getControlsDrawerOpenWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right), opacity: null };
    let num = 0;
    if (wrapperSpecs.get().height >= 200) {
      num = 1;
    }
    obj.opacity = spring.withSpring(num, MODE_CHANGE_PHYSICS);
    return obj;
  };
  let obj2 = wrapperSpecs(openTab[11]);
  fn.__closure = { getControlsDrawerOpenWidth: wrapperSpecs(openTab[12]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(openTab[13]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT: 200, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 8777106499672;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { getControlsDrawerOpenWidth: wrapperSpecs(openTab[12]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(openTab[13]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT: 200, MODE_CHANGE_PHYSICS };
  class V {
    constructor() {
      items = [, ];
      items[0] = wrapperSpecs.get().drawerMode;
      items[1] = mode.get();
      return items;
    }
  }
  V.__closure = { wrapperSpecs, mode };
  V.__workletHash = 16802013961309;
  V.__initData = __initData2;
  class M {
    constructor(arg0, arg1) {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[14]);
      tmp3 = arg1;
      if (!obj.cheapWorkletArrayShallowEqual(gestureSpecs, tmp3)) {
        tmp4 = closure_3;
        num = 2;
        tmp5 = closure_3(gestureSpecs, 2);
        [tmp6, tmp7] = tmp5;
        tmp8 = null != arg1 && tmp6 === arg1[0] && tmp7 === arg1[1];
        if (!tmp8) {
          tmp9 = VoicePanelModes;
          if (tmp7 === VoicePanelModes.PANEL) {
            if (tmp6) {
              tmpResult = tmp(tmp2[11]);
              tmp12 = closure_6;
              flag2 = false;
              tmp13 = tmpResult.runOnJS(closure_6)(false);
            }
          }
          tmpResult1 = tmp(tmp2[11]);
          tmp10 = closure_6;
          flag = true;
          tmp11 = tmpResult1.runOnJS(closure_6)(true);
        }
      }
      return;
    }
  }
  const obj4 = wrapperSpecs(openTab[11]);
  M.__closure = { cheapWorkletArrayShallowEqual: wrapperSpecs(openTab[14]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(openTab[11]).runOnJS, setFreeze: tmp7 };
  M.__workletHash = 10375596551326;
  M.__initData = __initData3;
  const animatedReaction = obj4.useAnimatedReaction(V, M);
  let items = [openTab];
  const items1 = [gestureSpecs];
  const callback = obj.useCallback((isVisible) => React7(VoicePanelVoiceControlsDefault, { isVisible, openTab }), items);
  const callback1 = obj.useCallback(() => React7(VoicePanelControlsAppLauncherDefault, { gestureSpecs }), items1);
  const obj6 = { style: null, children: null };
  const items2 = [tmp4.drawer, animatedStyle];
  obj6.style = items2;
  let tmp17 = !tmp6;
  if (!tmp6) {
    tmp17 = "chat" === tab;
  }
  const items3 = [closure_9(closure_12, { shown: tmp17, renderContent: renderChat }), , ];
  let tmp18 = !tmp6;
  if (!tmp6) {
    tmp18 = "settings" === tab;
  }
  items3[1] = closure_9(closure_12, { shown: tmp18, renderContent: callback });
  let tmp19 = !tmp6;
  if (!tmp6) {
    tmp19 = "app_launcher" === tab;
  }
  items3[2] = closure_9(closure_12, { shown: tmp19, renderContent: callback1 });
  obj6.children = items3;
  return closure_10(tmp(openTab[11]).View, obj6);
});
export const LazyContentFreezer = memoResult;