// === Module 17205: ActivityPanelFocusedView ===

// Module 17205 (ActivityPanelFocusedView)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Constants2 from "Constants" /* 2011 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import spring from "spring" /* 5604 */;
import EmbeddedActivityViewDefault from "EmbeddedActivityView" /* 9169 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 17197 */;
import ActivityPanelHeaderDefault from "ActivityPanelHeader" /* 17206 */;
import react from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4885 */;
import ChannelStore_mod from "ChannelStore" /* 2051 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9001 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 17200 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let c9;
let closure_12;
let closure_16;
let closure_17;
let map1;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
let AccessibilityStore = AccessibilityStore_mod;
let ChannelStore = ChannelStore_mod;
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
({ ACTIVITY_LAYOUT_PHYSICS_GESTURE: metroImportAll, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: c9, ActivityPanelModes: c10 } = ActivityPanelConstants);
({ DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG: unpackModuleId, DEFAULT_PORTRAIT_LETTERBOX_CONFIG: closure_12, DEFAULT_LANDSCAPE_PILLERBOX_CONFIG: map1 } = ActivityPanelNativeConstants);
const ThemeTypes = Constants.ThemeTypes;
const IS_IOS = VoicePanelConstants.IS_IOS;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
const REDUCED_MOTION_TIMING = { duration: 300 };
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, shade: obj3 };
obj2 = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BLACK };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  let obj3;
  let obj4;
  const obj = react2;
  const cResult = obj.c(6);
  context = context.context;
  const tmp2 = useSafeAreaInsetsDefault();
  const wrapperDimensions = react.useContext(context).wrapperDimensions;
  const tmp5 = wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_12 : unpackModuleId;
  if (cResult[0] === tmp2.right) {
    let tmp6;
    if (cResult[1] === (!wrapperDimensions.isLandscape && wrapperDimensions.isWindowLandscape)) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp6) {
      let tmp8;
      if (cResult[4] === tmp5) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
    const obj2 = { portraitSafeAreasConfig: tmp5, landscapeSafeAreasConfig: tmp6 };
    cResult[3] = tmp6;
    cResult[4] = tmp5;
    cResult[5] = obj2;
    tmp8 = obj2;
  }
  if (!wrapperDimensions.isLandscape && wrapperDimensions.isWindowLandscape) {
    obj3 = map1;
  } else {
    obj3 = { right: obj4 };
    const _Math = Math;
    obj4 = { disable: false, override: Math.max(64, tmp2.right) };
  }
  cResult[0] = tmp2.right;
  cResult[1] = !wrapperDimensions.isLandscape && wrapperDimensions.isWindowLandscape;
  cResult[2] = obj3;
  tmp6 = obj3;
}) : ((context) => {
  let closure_1;
  let items;
  context = context.context;
  const tmp = useSafeAreaInsetsDefault();
  const right = tmp;
  const wrapperDimensions = react.useContext(context).wrapperDimensions;
  importDefault = tmp3;
  const tmp2 = wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape;
  let obj2 = {
    portraitSafeAreasConfig: tmp2 ? closure_12 : closure_11,
    landscapeSafeAreasConfig: react.useMemo(() => {
      let obj;
      let obj2;
      if (closure_1) {
        obj = map1;
      } else {
        obj = { right: obj2 };
        const _Math = Math;
        obj2 = { disable: false, override: Math.max(64, right.right) };
      }
      return obj;
    }, items)
  };
  items = [tmp.right, !wrapperDimensions.isLandscape && wrapperDimensions.isWindowLandscape];
  return obj2;
});
let closure_20 = tmp8;
const __initData = { code: "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;const transitionComplete=function transitionComplete(t4){const finished=t4===undefined?false:t4;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?\"animate-never\":\"animate-always\",transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,\"animate-always\",transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}" };
let closure_22 = { code: "function transitionComplete_ActivityPanelFocusedViewTsx2(t4){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;var finished=t4===undefined?false:t4;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
const __initData2 = { code: "function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}" };
const __initData3 = { code: "function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight_0=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight_0};}" };
const __initData4 = { code: "function ActivityPanelFocusedViewTsx5(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}" };
let closure_26 = { code: "function transitionComplete_ActivityPanelFocusedViewTsx6(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
const __initData5 = { code: "function ActivityPanelFocusedViewTsx7(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}" };
const __initData6 = { code: "function ActivityPanelFocusedViewTsx8(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight_0=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight_0};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((transitionCleanUp) => {
  let children;
  let closure_9;
  let hasActivity;
  let header;
  let items1;
  let items2;
  let styles;
  let tmp4;
  let tmp5;
  let transitionState;
  let updateActivityPanelModeToPIP;
  let obj = transitionState(updateActivityPanelModeToPIP[14]);
  const cResult = obj.c(24);
  ({ header, transitionState } = transitionCleanUp);
  transitionCleanUp = transitionCleanUp.transitionCleanUp;
  updateActivityPanelModeToPIP = transitionCleanUp.updateActivityPanelModeToPIP;
  const context = transitionCleanUp.context;
  ({ children, hasActivity } = transitionCleanUp);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function c() {
      return styles.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = transitionState(updateActivityPanelModeToPIP[16]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = closure_19();
  const tmp10 = transitionCleanUp(updateActivityPanelModeToPIP[17])();
  AccessibilityStore = tmp10;
  const tmp11 = transitionCleanUp(updateActivityPanelModeToPIP[15])();
  let closure_5 = tmp11;
  const context1 = stateFromStores.useContext(context);
  const wrapperDimensions = context1.wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  if (cResult[2] === context) {
    let tmp13;
    if (cResult[3] === transitionState) {
      tmp13 = cResult[4];
    }
    const tmpResult5 = transitionState(updateActivityPanelModeToPIP[18]);
    const lockedWebView = tmpResult5.useLockedWebView(tmp13);
    const shown = lockedWebView.shown;
    const renderWebView = lockedWebView.renderWebView;
    const tmp15 = transitionCleanUp(updateActivityPanelModeToPIP[19])();
    ACTIVITY_LAYOUT_PHYSICS_DEFAULT = tmp15;
    const lg = tmp9(tmp2[12]).radii.lg;
    const fn2 = function k() {
      let height;
      let items;
      let num8;
      let num = 0;
      if (!wrapperDimensions.isWindowLandscape) {
        num = lg;
      }
      let num2 = 0;
      if (IS_IOS) {
        num2 = closure_9.get();
      }
      let num3 = 0;
      const width = styles.width;
      const diff = styles.height - num2;
      if (!wrapperDimensions.isWindowLandscape) {
        num3 = closure_5.top;
      }
      const diff1 = diff - num3;
      if (shown.get()) {
        height = wrapperOffset.get().y;
      } else {
        height = styles.height;
      }
      function transitionComplete(arg0) {
        const tmp = undefined !== arg0 && arg0 && closure_1_0 === transitionState(updateActivityPanelModeToPIP[21]).TransitionStates.YEETED;
        if (tmp) {
          const obj = transitionState(updateActivityPanelModeToPIP[20]);
          obj.runOnJS(transitionCleanUp)();
        }
      }
      transitionComplete.__closure = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp };
      transitionComplete.__workletHash = 12136158465037;
      transitionComplete.__initData = __initData;
      let num4 = 0;
      ({ transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp });
      if (stateFromStores) {
        num4 = 0;
        if (shown.get()) {
          num4 = 1 - wrapperOffset.get().y / styles.height;
        }
      }
      let num6 = 1;
      if (stateFromStores) {
        const withTiming = timing.withTiming;
        let str2 = "animate-always";
        const tmp9Result = timing;
        if (shown.get()) {
          str2 = "animate-always";
          if (wrapperOffset.get().gestureActive) {
            str2 = "animate-never";
          }
        }
        num6 = withTiming(num4, REDUCED_MOTION_TIMING, str2, transitionComplete);
      }
      size = { opacity: num6, transform: items, top: num8, width, height: diff1, borderTopStartRadius: num, borderTopEndRadius: num };
      let num7 = 0;
      if (!stateFromStores) {
        const withSpring = spring.withSpring;
        const tmp9Result2 = spring;
        if (wrapperOffset.get().gestureActive) {
          let tmp23;
          if (transitionState !== native.TransitionStates.YEETED) {
            tmp23 = metroImportAll;
          }
          num7 = withSpring(height, tmp23, "animate-always", transitionComplete);
        }
        tmp23 = c9;
      }
      items = [{ translateY: num7 }];
      num8 = 0;
      if (!wrapperDimensions.isWindowLandscape) {
        num8 = closure_5.top;
      }
      return size;
    };
    let obj2 = { wrapperDimensions, lg, IS_IOS, animatedKeyboardHeight: tmp15, windowDimensions: tmp10, safeArea: tmp11, shown, wrapperOffset, transitionState, TransitionStates: transitionState(updateActivityPanelModeToPIP[21]).TransitionStates, runOnJS: transitionState(updateActivityPanelModeToPIP[20]).runOnJS, transitionCleanUp, reduceMotion: stateFromStores, withTiming: transitionState(updateActivityPanelModeToPIP[22]).withTiming, REDUCED_MOTION_TIMING, withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: shown, ACTIVITY_LAYOUT_PHYSICS_DEFAULT };
    const useAnimatedStyle = transitionState(updateActivityPanelModeToPIP[20]).useAnimatedStyle;
    transitionState(updateActivityPanelModeToPIP[20]);
    fn2.__closure = obj2;
    let num3 = 16601040175668;
    fn2.__workletHash = 16601040175668;
    fn2.__initData = __initData;
    const animatedStyle = useAnimatedStyle(fn2);
    const tmpResult7 = transitionState(updateActivityPanelModeToPIP[20]);
    class W {
      constructor() {
        let num;
        let obj3;
        if (wrapperOffset.get().gestureActive) {
          num = 1 - wrapperOffset.get().y / styles.height;
        } else {
          num = 0;
          if (shown.get()) {
            num = 1;
          }
        }
        const obj2 = { opacity: obj3.withSpring(num, c9) };
        obj3 = spring;
        return obj2;
      }
    }
    let obj3 = { wrapperOffset, shown, windowDimensions: tmp10, withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring, ACTIVITY_LAYOUT_PHYSICS_DEFAULT };
    const useAnimatedStyle2 = tmpResult7.useAnimatedStyle;
    W.__closure = obj3;
    let num4 = 8351375063373;
    W.__workletHash = 8351375063373;
    W.__initData = __initData2;
    const animatedStyle2 = useAnimatedStyle2(W);
    if (cResult[5] === tmp8.wrapper) {
      let tmp26;
      if (cResult[6] === animatedStyle) {
        tmp26 = cResult[7];
      }
      const fn3 = function z() {
        let num = 0;
        if (IS_IOS) {
          num = closure_9.get();
        }
        size = { width: wrapperDimensions.width, height: wrapperDimensions.height - num };
        return size;
      };
      const obj4 = { IS_IOS, animatedKeyboardHeight: tmp15, wrapperDimensions };
      fn3.__closure = obj4;
      let num8 = 2605726008295;
      fn3.__workletHash = 2605726008295;
      fn3.__initData = __initData3;
      const tmpResult8 = transitionState(updateActivityPanelModeToPIP[20]);
      const animatedStyle1 = tmpResult8.useAnimatedStyle(fn3);
      if (cResult[8] !== updateActivityPanelModeToPIP) {
        class Q {
          constructor() {
            updateActivityPanelModeToPIP();
          }
        }
        cResult[8] = updateActivityPanelModeToPIP;
        cResult[9] = Q;
      } else {
        class Q {
          constructor() {
            updateActivityPanelModeToPIP();
          }
        }
      }
      if (cResult[10] === animatedStyle2) {
        class Q {
          constructor() {
            updateActivityPanelModeToPIP();
          }
        }
        if (renderWebView) {
          class Q {
            constructor() {
              updateActivityPanelModeToPIP();
            }
          }
          if (hasActivity) {
            class Q {
              constructor() {
                updateActivityPanelModeToPIP();
              }
            }
          }
        }
        if (cResult[13] === animatedStyle1) {
          class Q {
            constructor() {
              updateActivityPanelModeToPIP();
            }
          }
          if (cResult[16] === Q) {
            class Q {
              constructor() {
                updateActivityPanelModeToPIP();
              }
            }
          }
          const obj5 = { style: tmp26, nativeID: "activity-panel-focused-view", accessibilityViewIsModal: true, onAccessibilityEscape: Q, children: items1 };
          items1 = [tmp34, header];
          cResult[16] = Q;
          cResult[17] = header;
          cResult[18] = tmp34;
          cResult[19] = tmp26;
          cResult[20] = closure_17(transitionState(updateActivityPanelModeToPIP[24]).AccessibilityViewAnimated, obj5);
          const tmp39 = closure_17(transitionState(updateActivityPanelModeToPIP[24]).AccessibilityViewAnimated, obj5);
        }
        const obj6 = { style: animatedStyle1, children: null };
        cResult[13] = animatedStyle1;
        cResult[14] = null;
        cResult[15] = closure_16(transitionCleanUp(updateActivityPanelModeToPIP[20]).View, obj6);
        const tmp36 = closure_16(transitionCleanUp(updateActivityPanelModeToPIP[20]).View, obj6);
      }
      const obj7 = { style: items2, pointerEvents: "none" };
      items2 = [tmp8.shade, animatedStyle2];
      cResult[10] = animatedStyle2;
      cResult[11] = tmp8.shade;
      cResult[12] = closure_16(transitionCleanUp(updateActivityPanelModeToPIP[20]).View, obj7);
      const tmp32 = closure_16(transitionCleanUp(updateActivityPanelModeToPIP[20]).View, obj7);
    }
    const items3 = [tmp8.wrapper, animatedStyle];
    cResult[5] = tmp8.wrapper;
    let num6 = 6;
    cResult[6] = animatedStyle;
    let num7 = 7;
    cResult[7] = items3;
    tmp26 = items3;
  }
  const obj8 = { transitionState, context };
  cResult[3] = transitionState;
  cResult[4] = obj8;
  tmp13 = obj8;
}) : ((transitionState) => {
  let children;
  let hasActivity;
  let header;
  let items3;
  let items4;
  let items5;
  let styles;
  let tmp15;
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const updateActivityPanelModeToPIP = transitionState.updateActivityPanelModeToPIP;
  const context = transitionState.context;
  let closure_4;
  ({ children, header, hasActivity } = transitionState);
  let obj = transitionState(updateActivityPanelModeToPIP[16]);
  let items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_4.useReducedMotion);
  const tmp2 = closure_19();
  closure_4 = tmp2;
  const tmp3 = transitionCleanUp(updateActivityPanelModeToPIP[17])();
  ChannelStore = tmp3;
  const tmp4 = transitionCleanUp(updateActivityPanelModeToPIP[15])();
  let closure_6 = tmp4;
  const context1 = stateFromStores.useContext(context);
  const wrapperDimensions = context1.wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  let obj2 = transitionState(updateActivityPanelModeToPIP[18]);
  const lockedWebView = obj2.useLockedWebView({ transitionState, context });
  const shown = lockedWebView.shown;
  const renderWebView = lockedWebView.renderWebView;
  const tmp7 = transitionCleanUp(updateActivityPanelModeToPIP[19])();
  let closure_10 = tmp7;
  const lg = transitionCleanUp(updateActivityPanelModeToPIP[12]).radii.lg;
  let obj3 = transitionState(updateActivityPanelModeToPIP[20]);
  const fn = function _() {
    let height;
    let items;
    let num8;
    let num = 0;
    if (!wrapperDimensions.isWindowLandscape) {
      num = lg;
    }
    let num2 = 0;
    if (IS_IOS) {
      num2 = closure_10.get();
    }
    let num3 = 0;
    const width = styles.width;
    const diff = styles.height - num2;
    if (!wrapperDimensions.isWindowLandscape) {
      num3 = closure_6.top;
    }
    const diff1 = diff - num3;
    if (shown.get()) {
      height = wrapperOffset.get().y;
    } else {
      height = styles.height;
    }
    function transitionComplete() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (flag) {
        flag = closure_1_0 === transitionState(updateActivityPanelModeToPIP[21]).TransitionStates.YEETED;
      }
      if (flag) {
        const obj = transitionState(updateActivityPanelModeToPIP[20]);
        obj.runOnJS(transitionCleanUp)();
      }
    }
    transitionComplete.__closure = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp };
    transitionComplete.__workletHash = 17017534232725;
    transitionComplete.__initData = __initData;
    let num4 = 0;
    ({ transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp });
    if (stateFromStores) {
      num4 = 0;
      if (shown.get()) {
        num4 = 1 - wrapperOffset.get().y / styles.height;
      }
    }
    let num6 = 1;
    if (stateFromStores) {
      const withTiming = timing.withTiming;
      let str2 = "animate-always";
      const tmp9Result = timing;
      if (shown.get()) {
        str2 = "animate-always";
        if (wrapperOffset.get().gestureActive) {
          str2 = "animate-never";
        }
      }
      num6 = withTiming(num4, REDUCED_MOTION_TIMING, str2, transitionComplete);
    }
    size = { opacity: num6, transform: items, top: num8, width, height: diff1, borderTopStartRadius: num, borderTopEndRadius: num };
    let num7 = 0;
    if (!stateFromStores) {
      const withSpring = spring.withSpring;
      const tmp9Result2 = spring;
      if (wrapperOffset.get().gestureActive) {
        let tmp23;
        if (transitionState !== native.TransitionStates.YEETED) {
          tmp23 = metroImportAll;
        }
        num7 = withSpring(height, tmp23, "animate-always", transitionComplete);
      }
      tmp23 = c9;
    }
    items = [{ translateY: num7 }];
    num8 = 0;
    if (!wrapperDimensions.isWindowLandscape) {
      num8 = closure_6.top;
    }
    return size;
  };
  fn.__closure = { wrapperDimensions, lg, IS_IOS, animatedKeyboardHeight: tmp7, windowDimensions: tmp3, safeArea: tmp4, shown, wrapperOffset, transitionState, TransitionStates: transitionState(updateActivityPanelModeToPIP[21]).TransitionStates, runOnJS: transitionState(updateActivityPanelModeToPIP[20]).runOnJS, transitionCleanUp, reduceMotion: stateFromStores, withTiming: transitionState(updateActivityPanelModeToPIP[22]).withTiming, REDUCED_MOTION_TIMING, withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: wrapperOffset, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown };
  fn.__workletHash = 14810177926953;
  fn.__initData = __initData4;
  ({ wrapperDimensions, lg, IS_IOS, animatedKeyboardHeight: tmp7, windowDimensions: tmp3, safeArea: tmp4, shown, wrapperOffset, transitionState, TransitionStates: transitionState(updateActivityPanelModeToPIP[21]).TransitionStates, runOnJS: transitionState(updateActivityPanelModeToPIP[20]).runOnJS, transitionCleanUp, reduceMotion: stateFromStores, withTiming: transitionState(updateActivityPanelModeToPIP[22]).withTiming, REDUCED_MOTION_TIMING, withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: wrapperOffset, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj5 = transitionState(updateActivityPanelModeToPIP[20]);
  class T {
    constructor() {
      let num;
      let obj3;
      if (wrapperOffset.get().gestureActive) {
        num = 1 - wrapperOffset.get().y / styles.height;
      } else {
        num = 0;
        if (shown.get()) {
          num = 1;
        }
      }
      const obj2 = { opacity: obj3.withSpring(num, c9) };
      obj3 = spring;
      return obj2;
    }
  }
  T.__closure = { wrapperOffset, shown, windowDimensions: tmp3, withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown };
  T.__workletHash = 1926919297609;
  T.__initData = __initData5;
  const items1 = [animatedStyle, tmp2.wrapper];
  ({ wrapperOffset, shown, windowDimensions: tmp3, withSpring: transitionState(updateActivityPanelModeToPIP[23]).withSpring, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown });
  const animatedStyle1 = obj5.useAnimatedStyle(T);
  const memo = stateFromStores.useMemo(() => {
    const items = [closure_4.wrapper, animatedStyle];
    return items;
  }, items1);
  const fn2 = function f() {
    let num = 0;
    if (IS_IOS) {
      num = closure_10.get();
    }
    size = { width: wrapperDimensions.width, height: wrapperDimensions.height - num };
    return size;
  };
  fn2.__closure = { IS_IOS, animatedKeyboardHeight: tmp7, wrapperDimensions };
  fn2.__workletHash = 762235971819;
  fn2.__initData = __initData6;
  const items2 = [updateActivityPanelModeToPIP];
  const obj7 = transitionState(updateActivityPanelModeToPIP[20]);
  const animatedStyle2 = obj7.useAnimatedStyle(fn2);
  const callback = stateFromStores.useCallback(() => {
    updateActivityPanelModeToPIP();
  }, items2);
  const obj8 = { theme: ThemeTypes.DARK, children: items4 };
  const ThemeContextProvider = transitionState(updateActivityPanelModeToPIP[21]).ThemeContextProvider;
  const obj9 = { style: items3, pointerEvents: "none" };
  items3 = [tmp2.shade, animatedStyle1];
  items4 = [closure_16(transitionCleanUp(updateActivityPanelModeToPIP[20]).View, obj9), ];
  const obj10 = { style: memo, nativeID: "activity-panel-focused-view", accessibilityViewIsModal: true, onAccessibilityEscape: callback, children: items5 };
  const AccessibilityViewAnimated = transitionState(updateActivityPanelModeToPIP[24]).AccessibilityViewAnimated;
  const obj11 = { style: animatedStyle2, children: tmp15 };
  tmp15 = null;
  const View = transitionCleanUp(updateActivityPanelModeToPIP[20]).View;
  if (renderWebView) {
    tmp15 = null;
    if (hasActivity) {
      tmp15 = children;
    }
  }
  items5 = [closure_16(View, obj11), header];
  items4[1] = closure_17(AccessibilityViewAnimated, obj10);
  return closure_17(ThemeContextProvider, obj8);
});
let closure_29 = tmp9;
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let hasActivity;
  let landscapeSafeAreasConfig;
  let portraitSafeAreasConfig;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let transitionCleanUp;
  let transitionState;
  let obj = react2;
  const cResult = obj.c(15);
  ({ transitionState, transitionCleanUp } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, ChannelStore];
    const fn = function s() {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
      const obj = require("embeddedActivityLocationUtils");
      const obj2 = { channel: channel.getChannel(obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation)), hasActivity: null != selfEmbeddedActivityForLocation };
      return obj2;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5, tmp6);
  ({ channel, hasActivity } = stateFromStoresObject);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { context: ActivityPanelStateContextDefault };
    cResult[3] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = closure_20(tmp10));
  closure_20(tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[4] = authStore3(ActivityPanelHeaderDefault, {});
    const tmp16 = authStore3(ActivityPanelHeaderDefault, {});
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        const obj = require("EmbeddedActivitiesActionCreators");
        const result = obj.updateActivityPanelMode(constants.PIP);
      }
    }
    cResult[5] = D;
  } else {
    class D {
      constructor() {
        const obj = require("EmbeddedActivitiesActionCreators");
        const result = obj.updateActivityPanelMode(constants.PIP);
      }
    }
  }
  if (cResult[6] === channel) {
    class D {
      constructor() {
        const obj = require("EmbeddedActivitiesActionCreators");
        const result = obj.updateActivityPanelMode(constants.PIP);
      }
    }
  }
  const obj3 = { channel, layoutMode: ActivityLayoutMode.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
  cResult[6] = channel;
  cResult[7] = landscapeSafeAreasConfig;
  cResult[8] = portraitSafeAreasConfig;
  cResult[9] = authStore3(EmbeddedActivityViewDefault, obj3);
  authStore3(EmbeddedActivityViewDefault, obj3);
}) : ((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let channel;
  let landscapeSafeAreasConfig;
  let memo;
  let obj = transitionState(channel[16]);
  const items = [memo, landscapeSafeAreasConfig];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const connectedActivityLocation = memo.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = memo.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    const obj = transitionState(channel[25]);
    const obj2 = { channel: landscapeSafeAreasConfig.getChannel(obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation)), hasActivity: null != selfEmbeddedActivityForLocation };
    return obj2;
  }, []);
  channel = stateFromStoresObject.channel;
  const hasActivity = stateFromStoresObject.hasActivity;
  let obj2 = { context: transitionCleanUp(channel[26]) };
  const tmp2 = closure_20(obj2);
  const portraitSafeAreasConfig = tmp2.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = tmp2.landscapeSafeAreasConfig;
  memo = hasActivity.useMemo(() => closure_1_16(transitionCleanUp(channel[27]), {}), []);
  const updateActivityPanelModeToPIP = hasActivity.useCallback(() => {
    const obj = transitionState(channel[28]);
    const result = obj.updateActivityPanelMode(constants.PIP);
  }, []);
  const items1 = [transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity, memo, channel, portraitSafeAreasConfig, landscapeSafeAreasConfig];
  return hasActivity.useMemo(() => {
    let obj2;
    const obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity, context: ActivityPanelStateContextDefault, header: memo, children: authStore3(EmbeddedActivityViewDefault, obj2) };
    obj2 = { channel, layoutMode: ActivityLayoutMode.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    return authStore3(closure_29, obj);
  }, items1);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelFocusedView.tsx");

export default memoResult;
export const useBaseActivityPanelFocusedView = tmp8;
export const BaseActivityPanelFocusedView = tmp9;