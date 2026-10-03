// === Module 17327: VoicePanelControlsDrawer ===

// Module 17327 (VoicePanelControlsDrawer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import Suspender from "Suspender" /* 5738 */;
import useRefValueDefault from "useRefValue" /* 5973 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9074 */;
import VoicePanelChatViewDefault from "VoicePanelChatView" /* 11899 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 11909 */;
import VoicePanelVoiceControlsDefault from "VoicePanelVoiceControls" /* 17328 */;
import VoicePanelControlsAppLauncherDefault from "VoicePanelControlsAppLauncher" /* 17338 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderChat(shown) {
  const obj = { collapsable: false, style: absoluteFill.absoluteFill, children: options(VoicePanelChatViewDefault, { shown }) };
  return options(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VoicePanelConstants = fn(11902);
({ MODE_CHANGE_PHYSICS: closure_7, VoicePanelModes: closure_8 } = VoicePanelConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 200;
const createStyles = fn(4890);
let obj = { drawer: { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((shown) => {
  const cResult = c.c(8);
  shown = shown.shown;
  const renderContent = shown.renderContent;
  [tmp5, tmp6] = noop.useState(!shown);
  importDefault = tmp6;
  let tmp7 = shown;
  if (shown) {
    tmp7 = tmp5;
  }
  if (tmp7) {
    tmp6(false);
  }
  const tmp4 = _slicedToArray(noop.useState(!shown), 2);
  if (cResult[0] !== shown) {
    class S {
      constructor() {
        current = closure_2.current;
        tmp = closure_2;
        if (!current) {
          current = shown;
        }
        tmp.current = current;
        return;
      }
    }
    cResult[0] = shown;
    cResult[1] = S;
  } else {
    class S {
      constructor() {
        current = closure_2.current;
        tmp = closure_2;
        if (!current) {
          current = shown;
        }
        tmp.current = current;
        return;
      }
    }
  }
  const effect = noop.useEffect(S);
  if (cResult[2] !== shown) {
    class S {
      constructor() {
        current = closure_2.current;
        tmp = closure_2;
        if (!current) {
          current = shown;
        }
        tmp.current = current;
        return;
      }
    }
    const items = [shown];
    cResult[2] = shown;
    cResult[3] = tmp14;
    cResult[4] = items;
    let tmp13 = items;
  } else {
    class S {
      constructor() {
        current = closure_2.current;
        tmp = closure_2;
        if (!current) {
          current = shown;
        }
        tmp.current = current;
        return;
      }
    }
    tmp13 = cResult[4];
  }
  const effect1 = noop.useEffect(tmp14, tmp13);
  if (cResult[5] === renderContent) {
    class S {
      constructor() {
        current = closure_2.current;
        tmp = closure_2;
        if (!current) {
          current = shown;
        }
        tmp.current = current;
        return;
      }
    }
    if (useRefValueDefault(ref)) {
      class S {
        constructor() {
          current = closure_2.current;
          tmp = closure_2;
          if (!current) {
            current = shown;
          }
          tmp.current = current;
          return;
        }
      }
      const obj3 = { freeze: tmp5, children: renderContentResult };
      const tmp18 = options(Suspender.Freeze, obj3);
    } else {
      class S {
        constructor() {
          current = closure_2.current;
          tmp = closure_2;
          if (!current) {
            current = shown;
          }
          tmp.current = current;
          return;
        }
      }
    }
    return tmp18;
  }
  renderContentResult = renderContent(shown);
  cResult[5] = renderContent;
  cResult[6] = shown;
  cResult[7] = renderContentResult;
  ref = noop.useRef(shown);
}) : ((shown) => {
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
    let tmp11 = options(Suspender.Freeze, obj2);
  } else {
    tmp11 = null;
  }
  return tmp11;
}));
const __initData = { code: "function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
const __initData2 = { code: "function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
const __initData3 = { code: "function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[isDrawer,mode_0]=props;if(previous!=null&&isDrawer===previous[0]&&mode_0===previous[1]){return;}if(mode_0!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
const __initData4 = { code: "function VoicePanelControlsDrawerTsx4(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
const __initData5 = { code: "function VoicePanelControlsDrawerTsx5(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
const __initData6 = { code: "function VoicePanelControlsDrawerTsx6(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode_0]=props;if(previous!=null&&isDrawer===previous[0]&&mode_0===previous[1]){return;}if(mode_0!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((gestureSpecs) => {
  const cResult = wrapperSpecs(openTab[8]).c(20);
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  gestureSpecs = gestureSpecs.gestureSpecs;
  openTab = gestureSpecs.openTab;
  const context = windowDimensions.useContext(gestureSpecs(openTab[12]));
  const mode = context.mode;
  windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  const tmp6 = closure_12();
  let obj = wrapperSpecs(openTab[8]);
  const tmp4 = gestureSpecs;
  [tmp8, tmp9] = mode(windowDimensions.useState(null == tab), 2);
  closure_6 = tmp9;
  const tmp7 = mode(windowDimensions.useState(null == tab), 2);
  if (tmp10) {
    tmp9(false);
  }
  tmp10 = tab !== sharedTab.get() && tmp8;
  class V {
    constructor() {
      obj = { width: null, opacity: null };
      obj2 = closure_0(closure_2[14]);
      obj.width = obj2.getControlsDrawerOpenWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
      obj3 = closure_0(closure_2[15]);
      num = 0;
      if (wrapperSpecs.get().height >= c11) {
        num = 1;
      }
      obj.opacity = obj3.withSpring(num, MODE_CHANGE_PHYSICS);
      return obj;
    }
  }
  let tmpResult = wrapperSpecs(openTab[13]);
  V.__closure = { getControlsDrawerOpenWidth: wrapperSpecs(openTab[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(openTab[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS };
  V.__workletHash = 8777106499672;
  V.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(V);
  let obj2 = { getControlsDrawerOpenWidth: wrapperSpecs(openTab[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(openTab[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS };
  const fn = function x() {
    const items = [wrapperSpecs.get().drawerMode, mode.get()];
    return items;
  };
  fn.__closure = { wrapperSpecs, mode };
  fn.__workletHash = 16802013961309;
  fn.__initData = __initData2;
  const fn2 = function b(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
      [tmp6, tmp7] = arg0;
      if (!tmp8) {
        if (tmp7 === VoicePanelModes.PANEL) {
          if (tmp6) {
            ReanimatedRexport.runOnJS(closure_6)(false);
            const tmpResult = ReanimatedRexport;
          }
        }
        ReanimatedRexport.runOnJS(closure_6)(true);
        const tmpResult2 = ReanimatedRexport;
      }
      const tmp5 = _slicedToArray(arg0, 2);
      tmp8 = null != arg1 && tmp6 === arg1[0] && tmp7 === arg1[1];
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = arg1;
  };
  let tmpResult2 = wrapperSpecs(openTab[13]);
  fn2.__closure = { cheapWorkletArrayShallowEqual: wrapperSpecs(openTab[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(openTab[13]).runOnJS, setFreeze: tmp9 };
  fn2.__workletHash = 780328698487;
  fn2.__initData = __initData3;
  const animatedReaction = tmpResult2.useAnimatedReaction(fn, fn2);
  if (cResult[0] !== openTab) {
    const fn3 = function z(isVisible) {
      return options(VoicePanelVoiceControlsDefault, { isVisible, openTab });
    };
    cResult[0] = openTab;
    cResult[1] = fn3;
    let tmp14 = fn3;
  } else {
    tmp14 = cResult[1];
  }
  if (cResult[2] !== gestureSpecs) {
    class J {
      constructor() {
        obj = { gestureSpecs };
        return jsx(closure_1(closure_2[18]), obj);
      }
    }
    cResult[2] = gestureSpecs;
    cResult[3] = J;
  } else {
    class J {
      constructor() {
        obj = { gestureSpecs };
        return jsx(closure_1(closure_2[18]), obj);
      }
    }
  }
  if (cResult[4] === animatedStyle) {
    class J {
      constructor() {
        obj = { gestureSpecs };
        return jsx(closure_1(closure_2[18]), obj);
      }
    }
    let tmp17 = !tmp8;
    if (!tmp8) {
      class J {
        constructor() {
          obj = { gestureSpecs };
          return jsx(closure_1(closure_2[18]), obj);
        }
      }
      tmp17 = "chat" === tab;
    }
    if (cResult[7] !== tmp17) {
      class J {
        constructor() {
          obj = { gestureSpecs };
          return jsx(closure_1(closure_2[18]), obj);
        }
      }
      const obj4 = { shown: tmp17, renderContent: renderChat };
      const tmp21 = closure_9(closure_13, obj4);
      cResult[7] = tmp17;
      cResult[8] = tmp21;
    } else {
      class J {
        constructor() {
          obj = { gestureSpecs };
          return jsx(closure_1(closure_2[18]), obj);
        }
      }
    }
    let tmp22 = !tmp8;
    if (!tmp8) {
      class J {
        constructor() {
          obj = { gestureSpecs };
          return jsx(closure_1(closure_2[18]), obj);
        }
      }
      tmp22 = "settings" === tab;
    }
    if (cResult[9] === tmp14) {
      class J {
        constructor() {
          obj = { gestureSpecs };
          return jsx(closure_1(closure_2[18]), obj);
        }
      }
      let tmp27 = !tmp8;
      if (!tmp8) {
        class J {
          constructor() {
            obj = { gestureSpecs };
            return jsx(closure_1(closure_2[18]), obj);
          }
        }
        tmp27 = "app_launcher" === tab;
      }
      if (cResult[12] === J) {
        class J {
          constructor() {
            obj = { gestureSpecs };
            return jsx(closure_1(closure_2[18]), obj);
          }
        }
        if (cResult[15] === tmp16) {
          class J {
            constructor() {
              obj = { gestureSpecs };
              return jsx(closure_1(closure_2[18]), obj);
            }
          }
        }
        const obj5 = { style: tmp16, children: null };
        let items = [tmp18, tmp23, tmp28];
        obj5.children = items;
        const tmp34 = closure_10(tmp4(tmp2[13]).View, obj5);
        cResult[15] = tmp16;
        cResult[16] = tmp18;
        cResult[17] = tmp23;
        cResult[18] = tmp28;
        cResult[19] = tmp34;
      }
      const obj6 = { shown: tmp27, renderContent: J };
      const tmp31 = closure_9(closure_13, obj6);
      cResult[12] = J;
      cResult[13] = tmp27;
      cResult[14] = tmp31;
    }
    const obj7 = { shown: tmp22, renderContent: tmp14 };
    const tmp26 = closure_9(closure_13, obj7);
    cResult[9] = tmp14;
    cResult[10] = tmp22;
    cResult[11] = tmp26;
  }
  const items1 = [tmp6.drawer, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp6.drawer;
  cResult[6] = items1;
  const obj3 = { cheapWorkletArrayShallowEqual: wrapperSpecs(openTab[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(openTab[13]).runOnJS, setFreeze: tmp9 };
}) : ((gestureSpecs) => {
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  gestureSpecs = gestureSpecs.gestureSpecs;
  const openTab = gestureSpecs.openTab;
  let windowDimensions;
  const context = windowDimensions.useContext(gestureSpecs(openTab[12]));
  const mode = context.mode;
  windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  const tmp = gestureSpecs;
  const tmp4 = closure_12();
  [tmp6, tmp7] = mode(windowDimensions.useState(null == tab), 2);
  c6 = tmp7;
  let tmp5 = mode(windowDimensions.useState(null == tab), 2);
  if (tmp8) {
    tmp7(false);
  }
  tmp8 = tab !== sharedTab.get() && tmp6;
  class M {
    constructor() {
      obj = { width: null, opacity: null };
      obj2 = closure_0(closure_2[14]);
      obj.width = obj2.getControlsDrawerOpenWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
      obj3 = closure_0(closure_2[15]);
      num = 0;
      if (wrapperSpecs.get().height >= c11) {
        num = 1;
      }
      obj.opacity = obj3.withSpring(num, MODE_CHANGE_PHYSICS);
      return obj;
    }
  }
  let obj2 = wrapperSpecs(openTab[13]);
  M.__closure = { getControlsDrawerOpenWidth: wrapperSpecs(openTab[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(openTab[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS };
  M.__workletHash = 6369444097885;
  M.__initData = __initData4;
  const animatedStyle = obj2.useAnimatedStyle(M);
  const obj3 = { getControlsDrawerOpenWidth: wrapperSpecs(openTab[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(openTab[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS };
  class V {
    constructor() {
      items = [, ];
      items[0] = wrapperSpecs.get().drawerMode;
      items[1] = mode.get();
      return items;
    }
  }
  V.__closure = { wrapperSpecs, mode };
  V.__workletHash = 4655374582618;
  V.__initData = __initData5;
  const fn = function k(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
      [tmp6, tmp7] = arg0;
      if (!tmp8) {
        if (tmp7 === VoicePanelModes.PANEL) {
          if (tmp6) {
            ReanimatedRexport.runOnJS(c6)(false);
            const tmpResult = ReanimatedRexport;
          }
        }
        ReanimatedRexport.runOnJS(c6)(true);
        const tmpResult2 = ReanimatedRexport;
      }
      const tmp5 = _slicedToArray(arg0, 2);
      tmp8 = null != arg1 && tmp6 === arg1[0] && tmp7 === arg1[1];
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = arg1;
  };
  const obj4 = wrapperSpecs(openTab[13]);
  fn.__closure = { cheapWorkletArrayShallowEqual: wrapperSpecs(openTab[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(openTab[13]).runOnJS, setFreeze: tmp7 };
  fn.__workletHash = 11690468048980;
  fn.__initData = __initData6;
  const animatedReaction = obj4.useAnimatedReaction(V, fn);
  let items = [openTab];
  const items1 = [gestureSpecs];
  const callback = obj.useCallback((isVisible) => options(VoicePanelVoiceControlsDefault, { isVisible, openTab }), items);
  const callback1 = obj.useCallback(() => options(VoicePanelControlsAppLauncherDefault, { gestureSpecs }), items1);
  const obj6 = { style: null, children: null };
  const items2 = [tmp4.drawer, animatedStyle];
  obj6.style = items2;
  let tmp17 = !tmp6;
  if (!tmp6) {
    tmp17 = "chat" === tab;
  }
  const items3 = [closure_9(closure_13, { shown: tmp17, renderContent: renderChat }), , ];
  let tmp18 = !tmp6;
  if (!tmp6) {
    tmp18 = "settings" === tab;
  }
  items3[1] = closure_9(closure_13, { shown: tmp18, renderContent: callback });
  let tmp19 = !tmp6;
  if (!tmp6) {
    tmp19 = "app_launcher" === tab;
  }
  items3[2] = closure_9(closure_13, { shown: tmp19, renderContent: callback1 });
  obj6.children = items3;
  return closure_10(tmp(openTab[13]).View, obj6);
}));
export const LazyContentFreezer = memoResult;