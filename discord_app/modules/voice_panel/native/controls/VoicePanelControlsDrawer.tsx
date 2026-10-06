// === Module 17379: VoicePanelControlsDrawer ===

// Module 17379 (VoicePanelControlsDrawer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import react3 from "react" /* 5745 */;
import useRefValueDefault from "useRefValue" /* 5980 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9110 */;
import VoicePanelChatViewDefault from "VoicePanelChatView" /* 11913 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 11923 */;
import VoicePanelVoiceControlsDefault from "VoicePanelVoiceControls" /* 17380 */;
import VoicePanelControlsAppLauncherDefault from "VoicePanelControlsAppLauncher" /* 17391 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let gestureSpecs;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function renderChat(shown) {
  let obj2;
  const obj = { collapsable: false, style: hasOwnProperty.absoluteFill, children: React4(VoicePanelChatViewDefault, obj2) };
  obj2 = { shown };
  return React4(metroRequire, obj);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ MODE_CHANGE_PHYSICS: metroImportDefault, VoicePanelModes: metroImportAll } = VoicePanelConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = 200;
let obj = { drawer: obj2 };
obj2 = { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_12 = createStyles.createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
const __initData2 = { code: "function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
const __initData3 = { code: "function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[isDrawer,mode_0]=props;if(previous!=null&&isDrawer===previous[0]&&mode_0===previous[1]){return;}if(mode_0!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
const __initData4 = { code: "function VoicePanelControlsDrawerTsx4(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
const __initData5 = { code: "function VoicePanelControlsDrawerTsx5(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
const __initData6 = { code: "function VoicePanelControlsDrawerTsx6(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode_0]=props;if(previous!=null&&isDrawer===previous[0]&&mode_0===previous[1]){return;}if(mode_0!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((shown) => {
  let renderContentResult;
  let tmp13;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
  shown = shown.shown;
  const renderContent = shown.renderContent;
  [tmp5, tmp6] = react.useState(!shown);
  let closure_1 = tmp6;
  _slicedToArray(react.useState(!shown), 2);
  const tmp7 = shown && tmp5;
  if (tmp7) {
    tmp6(false);
  }
  const ref = react.useRef(shown);
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
  const effect = react.useEffect(S);
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
    tmp13 = items;
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
  const effect1 = react.useEffect(tmp14, tmp13);
  if (cResult[5] === renderContent) {
    let tmp18;
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
      tmp18 = React4(react3.Freeze, obj3);
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
}) : ((shown) => {
  let tmp11;
  let tmp2;
  let tmp3;
  shown = shown.shown;
  const renderContent = shown.renderContent;
  let ref;
  [tmp2, tmp3] = react.useState(!shown);
  let c2 = tmp3;
  _slicedToArray(react.useState(!shown), 2);
  const tmp4 = shown && tmp2;
  if (tmp4) {
    tmp3(false);
  }
  ref = react.useRef(shown);
  const effect = react.useEffect(() => {
    const current = ref.current || shown;
    ref.current = current;
  });
  const items = [shown];
  const effect1 = react.useEffect(() => {
    if (!shown) {
      _undefined(true);
    }
  }, items);
  const items1 = [renderContent, shown];
  const memo = react.useMemo(() => renderContent(shown), items1);
  if (useRefValueDefault(ref)) {
    const obj2 = { freeze: tmp2, children: memo };
    tmp11 = React4(react3.Freeze, obj2);
  } else {
    tmp11 = null;
  }
  return tmp11;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((gestureSpecs) => {
  let items;
  let openTab;
  let sharedTab;
  let tab;
  let tmp14;
  let tmp8;
  let tmp9;
  let windowDimensions;
  let wrapperSpecs;
  const tmp2 = openTab;
  let obj = wrapperSpecs(openTab[8]);
  const cResult = obj.c(20);
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  gestureSpecs = gestureSpecs.gestureSpecs;
  openTab = gestureSpecs.openTab;
  let tmp4 = gestureSpecs;
  const context = windowDimensions.useContext(gestureSpecs(openTab[12]));
  const mode = context.mode;
  windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  const tmp6 = closure_12();
  const tmp7 = mode(windowDimensions.useState(null == tab), 2);
  [tmp8, tmp9] = tmp7;
  let closure_6 = tmp9;
  const tmp10 = tab !== sharedTab.get() && tmp8;
  if (tmp10) {
    tmp9(false);
  }
  let tmpResult = wrapperSpecs(tmp2[13]);
  class V {
    constructor() {
      let getControlsDrawerOpenWidth;
      let num;
      let width;
      let withSpring;
      const obj = { width: getControlsDrawerOpenWidth(width, safeArea.get().left, safeArea.get().right), opacity: withSpring(num, metroImportDefault) };
      getControlsDrawerOpenWidth = VoicePanelControlsUtils.getControlsDrawerOpenWidth;
      VoicePanelControlsUtils;
      width = windowDimensions.get().width;
      withSpring = spring.withSpring;
      num = 0;
      spring;
      if (wrapperSpecs.get().height >= c11) {
        num = 1;
      }
      return obj;
    }
  }
  V.__closure = { getControlsDrawerOpenWidth: wrapperSpecs(tmp2[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(tmp2[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS };
  V.__workletHash = 8777106499672;
  V.__initData = __initData;
  ({ getControlsDrawerOpenWidth: wrapperSpecs(tmp2[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(tmp2[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS });
  const animatedStyle = tmpResult.useAnimatedStyle(V);
  let tmpResult2 = wrapperSpecs(tmp2[13]);
  const fn = function x() {
    const items = [wrapperSpecs.get().drawerMode, mode.get()];
    return items;
  };
  fn.__closure = { wrapperSpecs, mode };
  fn.__workletHash = 16802013961309;
  fn.__initData = __initData2;
  const fn2 = function b(arg0, arg1) {
    let tmp7;
    let tmp8;
    const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
    cheapWorkletShallowEqual;
    const tmp4 = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
      [tmp7, tmp8] = arg0;
      _slicedToArray(arg0, 2);
      const tmp9 = null != arg1 && tmp7 === arg1[0] && tmp8 === arg1[1];
      if (!tmp9) {
        if (tmp8 === metroImportAll.PANEL) {
          if (tmp7) {
            const tmpResult = ReanimatedRexport;
            tmpResult.runOnJS(closure_6)(false);
          }
        }
        const tmpResult2 = ReanimatedRexport;
        tmpResult2.runOnJS(closure_6)(true);
      }
    }
  };
  fn2.__closure = { cheapWorkletArrayShallowEqual: wrapperSpecs(tmp2[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(tmp2[13]).runOnJS, setFreeze: tmp9 };
  fn2.__workletHash = 780328698487;
  fn2.__initData = __initData3;
  ({ cheapWorkletArrayShallowEqual: wrapperSpecs(tmp2[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(tmp2[13]).runOnJS, setFreeze: tmp9 });
  const animatedReaction = tmpResult2.useAnimatedReaction(fn, fn2);
  if (cResult[0] !== openTab) {
    const fn3 = function z(isVisible) {
      const obj = { isVisible, openTab };
      return React4(VoicePanelVoiceControlsDefault, obj);
    };
    let num = 0;
    cResult[0] = openTab;
    cResult[1] = fn3;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[1];
  }
  if (cResult[2] !== gestureSpecs) {
    class J {
      constructor() {
        const obj = { gestureSpecs };
        return React4(VoicePanelControlsAppLauncherDefault, obj);
      }
    }
    cResult[2] = gestureSpecs;
    cResult[3] = J;
  } else {
    class J {
      constructor() {
        const obj = { gestureSpecs };
        return React4(VoicePanelControlsAppLauncherDefault, obj);
      }
    }
  }
  if (cResult[4] === animatedStyle) {
    class J {
      constructor() {
        const obj = { gestureSpecs };
        return React4(VoicePanelControlsAppLauncherDefault, obj);
      }
    }
    let tmp17 = !tmp8;
    if (tmp17) {
      class J {
        constructor() {
          const obj = { gestureSpecs };
          return React4(VoicePanelControlsAppLauncherDefault, obj);
        }
      }
      tmp17 = "chat" === tab;
    }
    if (cResult[7] !== tmp17) {
      class J {
        constructor() {
          const obj = { gestureSpecs };
          return React4(VoicePanelControlsAppLauncherDefault, obj);
        }
      }
      const obj4 = { shown: tmp17, renderContent: renderChat };
      cResult[7] = tmp17;
      cResult[8] = closure_9(closure_13, obj4);
      const tmp21 = closure_9(closure_13, obj4);
    } else {
      class J {
        constructor() {
          const obj = { gestureSpecs };
          return React4(VoicePanelControlsAppLauncherDefault, obj);
        }
      }
    }
    let tmp22 = !tmp8;
    if (tmp22) {
      class J {
        constructor() {
          const obj = { gestureSpecs };
          return React4(VoicePanelControlsAppLauncherDefault, obj);
        }
      }
      tmp22 = "settings" === tab;
    }
    if (cResult[9] === tmp14) {
      class J {
        constructor() {
          const obj = { gestureSpecs };
          return React4(VoicePanelControlsAppLauncherDefault, obj);
        }
      }
      let tmp27 = !tmp8;
      if (tmp27) {
        class J {
          constructor() {
            const obj = { gestureSpecs };
            return React4(VoicePanelControlsAppLauncherDefault, obj);
          }
        }
        tmp27 = "app_launcher" === tab;
      }
      if (cResult[12] === J) {
        class J {
          constructor() {
            const obj = { gestureSpecs };
            return React4(VoicePanelControlsAppLauncherDefault, obj);
          }
        }
        if (cResult[15] === tmp16) {
          class J {
            constructor() {
              const obj = { gestureSpecs };
              return React4(VoicePanelControlsAppLauncherDefault, obj);
            }
          }
        }
        const obj5 = { style: tmp16, children: items };
        items = [tmp18, tmp23, tmp28];
        cResult[15] = tmp16;
        cResult[16] = tmp18;
        cResult[17] = tmp23;
        cResult[18] = tmp28;
        cResult[19] = closure_10(tmp4(tmp2[13]).View, obj5);
        const tmp34 = closure_10(tmp4(tmp2[13]).View, obj5);
      }
      const obj6 = { shown: tmp27, renderContent: J };
      cResult[12] = J;
      cResult[13] = tmp27;
      cResult[14] = closure_9(closure_13, obj6);
      const tmp31 = closure_9(closure_13, obj6);
    }
    const obj7 = { shown: tmp22, renderContent: tmp14 };
    cResult[9] = tmp14;
    cResult[10] = tmp22;
    cResult[11] = closure_9(closure_13, obj7);
    const tmp26 = closure_9(closure_13, obj7);
  }
  const items1 = [tmp6.drawer, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp6.drawer;
  cResult[6] = items1;
}) : ((gestureSpecs) => {
  let items2;
  let items3;
  let sharedTab;
  let tab;
  let tmp6;
  let tmp7;
  let wrapperSpecs;
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  gestureSpecs = gestureSpecs.gestureSpecs;
  const openTab = gestureSpecs.openTab;
  let windowDimensions;
  let obj = windowDimensions;
  const tmp2 = openTab;
  const tmp = gestureSpecs;
  const context = windowDimensions.useContext(gestureSpecs(openTab[12]));
  const mode = context.mode;
  windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  let tmp4 = closure_12();
  [tmp6, tmp7] = mode(windowDimensions.useState(null == tab), 2);
  let c6 = tmp7;
  mode(windowDimensions.useState(null == tab), 2);
  const tmp8 = tab !== sharedTab.get() && tmp6;
  if (tmp8) {
    tmp7(false);
  }
  const obj2 = wrapperSpecs(tmp2[13]);
  class M {
    constructor() {
      let getControlsDrawerOpenWidth;
      let num;
      let width;
      let withSpring;
      const obj = { width: getControlsDrawerOpenWidth(width, safeArea.get().left, safeArea.get().right), opacity: withSpring(num, metroImportDefault) };
      getControlsDrawerOpenWidth = VoicePanelControlsUtils.getControlsDrawerOpenWidth;
      VoicePanelControlsUtils;
      width = windowDimensions.get().width;
      withSpring = spring.withSpring;
      num = 0;
      spring;
      if (wrapperSpecs.get().height >= c11) {
        num = 1;
      }
      return obj;
    }
  }
  M.__closure = { getControlsDrawerOpenWidth: wrapperSpecs(tmp2[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(tmp2[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS };
  M.__workletHash = 6369444097885;
  M.__initData = __initData4;
  ({ getControlsDrawerOpenWidth: wrapperSpecs(tmp2[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(tmp2[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS });
  const animatedStyle = obj2.useAnimatedStyle(M);
  const obj4 = wrapperSpecs(tmp2[13]);
  class V {
    constructor() {
      const items = [wrapperSpecs.get().drawerMode, mode.get()];
      return items;
    }
  }
  V.__closure = { wrapperSpecs, mode };
  V.__workletHash = 4655374582618;
  V.__initData = __initData5;
  const fn = function k(arg0, arg1) {
    let tmp7;
    let tmp8;
    const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
    cheapWorkletShallowEqual;
    const tmp4 = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
      [tmp7, tmp8] = arg0;
      _slicedToArray(arg0, 2);
      const tmp9 = null != arg1 && tmp7 === arg1[0] && tmp8 === arg1[1];
      if (!tmp9) {
        if (tmp8 === metroImportAll.PANEL) {
          if (tmp7) {
            const tmpResult = ReanimatedRexport;
            tmpResult.runOnJS(c6)(false);
          }
        }
        const tmpResult2 = ReanimatedRexport;
        tmpResult2.runOnJS(c6)(true);
      }
    }
  };
  fn.__closure = { cheapWorkletArrayShallowEqual: wrapperSpecs(tmp2[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(tmp2[13]).runOnJS, setFreeze: tmp7 };
  fn.__workletHash = 11690468048980;
  fn.__initData = __initData6;
  ({ cheapWorkletArrayShallowEqual: wrapperSpecs(tmp2[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(tmp2[13]).runOnJS, setFreeze: tmp7 });
  const animatedReaction = obj4.useAnimatedReaction(V, fn);
  let items = [openTab];
  const items1 = [gestureSpecs];
  const callback = obj.useCallback((isVisible) => {
    const obj = { isVisible, openTab };
    return React4(VoicePanelVoiceControlsDefault, obj);
  }, items);
  const callback1 = obj.useCallback(() => {
    const obj = { gestureSpecs };
    return React4(VoicePanelControlsAppLauncherDefault, obj);
  }, items1);
  const obj6 = { style: items2, children: items3 };
  items2 = [tmp4.drawer, animatedStyle];
  let tmp17 = !tmp6;
  const View = tmp(tmp2[13]).View;
  if (!tmp6) {
    tmp17 = "chat" === tab;
  }
  items3 = [, , ];
  const obj7 = { shown: tmp17, renderContent: renderChat };
  items3[0] = closure_9(closure_13, obj7);
  const tmp18 = !tmp6 && "settings" === tab;
  items3[1] = closure_9(closure_13, { shown: tmp18, renderContent: callback });
  const tmp19 = !tmp6 && "app_launcher" === tab;
  items3[2] = closure_9(closure_13, { shown: tmp19, renderContent: callback1 });
  return closure_10(View, obj6);
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default memoResult1;
export const LazyContentFreezer = memoResult;