// === Module 16113: renderChat ===

// Module 16113 (renderChat)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "set";
import VoicePanelModes from "VoicePanelModes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function renderChat(shown) {
  obj = { collapsable: false, style: absoluteFill.absoluteFill, children: callback(importDefault(11556), obj) };
  obj = { shown };
  return callback(closure_6, obj);
}
let c4 = importAllResult;
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ MODE_CHANGE_PHYSICS: error, VoicePanelModes: metroImportAll } = VoicePanelModes);
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { drawer: null };
obj = { flex: 1, zIndex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((shown) => {
  let tmp2;
  let tmp3;
  shown = shown.shown;
  const renderContent = shown.renderContent;
  let dependencyMap;
  let ref;
  let obj = importAllResult;
  [tmp2, tmp3] = ref(importAllResult.useState(!shown), 2);
  dependencyMap = tmp3;
  let tmp4 = shown;
  if (shown) {
    tmp4 = tmp2;
  }
  if (tmp4) {
    tmp3(false);
  }
  ref = obj.useRef(shown);
  const effect = obj.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = shown;
    }
    ref.current = current;
  });
  const items = [shown];
  const effect1 = obj.useEffect(() => {
    if (!shown) {
      _undefined(true);
    }
  }, items);
  const items1 = [renderContent, shown];
  const memo = obj.useMemo(() => renderContent(shown), items1);
  if (renderContent(5244)(ref)) {
    obj = { freeze: null, children: null };
    obj[0] = tmp2;
    obj[1] = memo;
    let tmp11 = callback(shown(4613).Freeze, obj);
  } else {
    tmp11 = null;
  }
  return tmp11;
});
let closure_14 = { code: "function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
let closure_15 = { code: "function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
let closure_16 = { code: "function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
const memoResult1 = importAllResult.memo(function VoicePanelControlsDrawer(gestureSpecs) {
  let sharedTab;
  let tab;
  let tmp6;
  let tmp7;
  let wrapperSpecs;
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  gestureSpecs = gestureSpecs.gestureSpecs;
  const openTab = gestureSpecs.openTab;
  let mode;
  let windowDimensions;
  let safeArea;
  let c6;
  let obj = windowDimensions;
  const context = windowDimensions.useContext(gestureSpecs(openTab[10]));
  mode = context.mode;
  windowDimensions = context.windowDimensions;
  safeArea = context.safeArea;
  const tmp = gestureSpecs;
  const tmp4 = callback2();
  [tmp6, tmp7] = mode(windowDimensions.useState(null == tab), 2);
  c6 = tmp7;
  let tmp5 = mode(windowDimensions.useState(null == tab), 2);
  if (tmp8) {
    tmp7(false);
  }
  let obj1 = wrapperSpecs(tmp2[11]);
  const fn = function b() {
    const obj = { width: null, opacity: null };
    obj[0] = wrapperSpecs(openTab[12]).getControlsDrawerOpenWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
    const obj2 = wrapperSpecs(openTab[12]);
    let num = 0;
    if (wrapperSpecs.get().height >= 200) {
      num = 1;
    }
    obj[1] = wrapperSpecs(openTab[13]).withSpring(num, outer1_7);
    return obj;
  };
  obj = { getControlsDrawerOpenWidth: wrapperSpecs(tmp2[12]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(tmp2[13]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT: 200, MODE_CHANGE_PHYSICS: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 8777106499672;
  fn.__initData = closure_14;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  tmp8 = tab !== sharedTab.get() && tmp6;
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
  V.__initData = closure_15;
  class M {
    constructor(arg0, arg1) {
      tmp = wrapperSpecs;
      tmp2 = openTab;
      obj = wrapperSpecs(openTab[14]);
      tmp3 = arg1;
      if (!obj.cheapWorkletArrayShallowEqual(gestureSpecs, tmp3)) {
        tmp4 = mode;
        num = 2;
        tmp5 = mode(gestureSpecs, 2);
        [tmp6, tmp7] = tmp5;
        tmp8 = null != arg1 && tmp6 === arg1[0] && tmp7 === arg1[1];
        if (!tmp8) {
          tmp9 = outer1_8;
          if (tmp7 === outer1_8.PANEL) {
            if (tmp6) {
              tmpResult = tmp(tmp2[11]);
              tmp12 = c6;
              flag2 = false;
              tmp13 = tmpResult.runOnJS(c6)(false);
            }
          }
          tmpResult1 = tmp(tmp2[11]);
          tmp10 = c6;
          flag = true;
          tmp11 = tmpResult1.runOnJS(c6)(true);
        }
      }
      return;
    }
  }
  obj = { cheapWorkletArrayShallowEqual: wrapperSpecs(tmp2[14]).cheapWorkletArrayShallowEqual, VoicePanelModes: closure_8, runOnJS: wrapperSpecs(tmp2[11]).runOnJS, setFreeze: tmp7 };
  M.__closure = obj;
  M.__workletHash = 10375596551326;
  M.__initData = closure_16;
  const animatedReaction = wrapperSpecs(openTab[11]).useAnimatedReaction(V, M);
  let items = [openTab];
  const items1 = [gestureSpecs];
  const callback = obj.useCallback((isVisible) => outer1_9(gestureSpecs(openTab[15]), { isVisible, openTab }), items);
  const callback1 = obj.useCallback(() => outer1_9(gestureSpecs(openTab[16]), { gestureSpecs }), items1);
  obj1 = { style: items2, children: null };
  items2 = [tmp4.drawer, animatedStyle];
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
  obj1[1] = items3;
  return closure_10(tmp(openTab[11]).View, obj1);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default memoResult1;
export const LazyContentFreezer = memoResult;