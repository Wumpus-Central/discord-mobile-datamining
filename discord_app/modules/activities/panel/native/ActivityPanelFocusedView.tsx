// === Module 16604: BaseActivityPanelFocusedView ===

// Module 16604 (BaseActivityPanelFocusedView)
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "participantFromServer" /* 1386 */;
import { ActivityLayoutMode } from "items3" /* 4506 */;
import ActivityPanelModes from "ActivityPanelModes" /* 9466 */;
import DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG" /* 16599 */;
import { ThemeTypes } from "ME" /* 676 */;
import { IS_IOS } from "VoicePanelModes" /* 11840 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
class BaseActivityPanelFocusedView {
  constructor(arg0) {
    transitionState = global.transitionState;
    transitionCleanUp = global.transitionCleanUp;
    updateActivityPanelModeToPIP = global.updateActivityPanelModeToPIP;
    closure_2 = updateActivityPanelModeToPIP;
    context = global.context;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    wrapperDimensions = undefined;
    wrapperOffset = undefined;
    shown = undefined;
    closure_10 = undefined;
    lg = undefined;
    closure_12 = undefined;
    ({ children, header, hasActivity } = global);
    obj = require("initialize");
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => closure_4.useReducedMotion);
    closure_3 = stateFromStores;
    tmp2 = closure_19();
    closure_4 = tmp2;
    tmp3 = require("useWindowDimensions")();
    closure_5 = tmp3;
    tmp4 = require("useSafeAreaInsets")();
    closure_6 = tmp4;
    context = closure_3.useContext(context);
    wrapperDimensions = context.wrapperDimensions;
    wrapperOffset = context.wrapperOffset;
    obj2 = require("useActivityWebViewLockManager");
    lockedWebView = obj2.useLockedWebView({ transitionState, context });
    shown = lockedWebView.shown;
    tmp7 = require("useAnimatedKeyboardHeight")();
    closure_10 = tmp7;
    lg = require("Themes").radii.lg;
    obj3 = require("module_4217");
    fn = function _() {
      let num = 0;
      if (!wrapperDimensions.isWindowLandscape) {
        num = lg;
      }
      let num2 = 0;
      if (closure_1_15) {
        num2 = store.get();
      }
      let num3 = 0;
      const diff = styles.height - num2;
      if (!wrapperDimensions.isWindowLandscape) {
        num3 = closure_6.top;
      }
      let obj = shown;
      const diff1 = diff - num3;
      if (shown.get()) {
        let height = wrapperOffset.get().y;
      } else {
        height = tmp3.height;
      }
      function transitionComplete() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        if (flag) {
          flag = closure_0 === closure_1_0(closure_1_2[19]).TransitionStates.YEETED;
        }
        if (flag) {
          closure_1_0(closure_1_2[18]).runOnJS(closure_1)();
          const obj = closure_1_0(closure_1_2[18]);
        }
      }
      obj = { transitionState, TransitionStates: transitionState(updateActivityPanelModeToPIP[19]).TransitionStates, runOnJS: transitionState(updateActivityPanelModeToPIP[18]).runOnJS, transitionCleanUp };
      transitionComplete.__closure = obj;
      transitionComplete.__workletHash = 16073739070225;
      transitionComplete.__initData = closure_1_21;
      let num4 = 0;
      if (stateFromStores) {
        num4 = 0;
        if (obj.get()) {
          num4 = 1 - wrapperOffset.get().y / tmp3.height;
        }
      }
      let num6 = 1;
      if (stateFromStores) {
        let tmp9Result = tmp9(tmp10[20]);
        let str2 = "animate-always";
        if (obj.get()) {
          str2 = "animate-always";
          if (wrapperOffset.get().gestureActive) {
            str2 = "animate-never";
          }
        }
        num6 = tmp9Result.withTiming(num4, tmp13, str2, transitionComplete);
      }
      obj = { opacity: num6, transform: null, top: null, width: null, height: null, borderTopStartRadius: null, borderTopEndRadius: null };
      if (stateFromStores) {
        obj1 = { translateY: null };
        obj1[0] = 0;
        const items = [obj1];
        obj[1] = items;
        let num7 = 0;
        if (!tmp.isWindowLandscape) {
          num7 = closure_6.top;
        }
        obj[2] = num7;
        obj[3] = styles.width;
        obj[4] = diff1;
        obj[5] = num;
        obj[6] = num;
        return obj;
      } else {
        tmp9Result = tmp9(tmp10[21]);
        if (!wrapperOffset.get().gestureActive) {
          let tmp21 = shown;
          tmp9Result.withSpring(height, tmp21, "animate-always", transitionComplete);
        }
        tmp21 = wrapperOffset;
      }
    };
    obj = { wrapperDimensions, lg, IS_IOS, animatedKeyboardHeight: tmp7, windowDimensions: tmp3, safeArea: tmp4, shown, wrapperOffset, transitionState, TransitionStates: require("ManaContext").TransitionStates, runOnJS: require("module_4217").runOnJS, transitionCleanUp, reduceMotion: stateFromStores, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, REDUCED_MOTION_TIMING: closure_18, withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: wrapperOffset, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown };
    fn.__closure = obj;
    fn.__workletHash = 3642447648301;
    fn.__initData = closure_20;
    animatedStyle = obj3.useAnimatedStyle(fn);
    closure_12 = animatedStyle;
    obj5 = require("module_4217");
    class T {
      constructor() {
        obj = wrapperOffset;
        if (wrapperOffset.get().gestureActive) {
          tmp2 = closure_5;
          num2 = 1;
          num = 1 - obj.get().y / closure_5.height;
        } else {
          tmp = shown;
          num = 0;
          if (shown.get()) {
            num = 1;
          }
        }
        obj = { opacity: null };
        obj3 = require("CONFIG_NEVER_ANIMATE");
        obj[0] = obj3.withSpring(num, shown);
        return obj;
      }
    }
    obj1 = { wrapperOffset, shown, windowDimensions: tmp3, withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown };
    T.__closure = obj1;
    T.__workletHash = 8351375063373;
    T.__initData = closure_22;
    items1 = [, ];
    items1[0] = animatedStyle;
    items1[1] = tmp2.wrapper;
    animatedStyle1 = obj5.useAnimatedStyle(T);
    memo = closure_3.useMemo(() => {
      const items = [closure_4.wrapper, animatedStyle];
      return items;
    }, items1);
    obj7 = require("module_4217");
    class A {
      constructor() {
        num = 0;
        if (closure_1_15) {
          tmp = closure_10;
          num = closure_10.get();
        }
        obj = { width: wrapperDimensions.width, height: wrapperDimensions.height - num };
        return obj;
      }
    }
    A.__closure = { IS_IOS, animatedKeyboardHeight: tmp7, wrapperDimensions };
    A.__workletHash = 10029372697959;
    A.__initData = closure_23;
    items2 = [];
    items2[0] = updateActivityPanelModeToPIP;
    animatedStyle2 = obj7.useAnimatedStyle(A);
    tmp13 = jsxs;
    callback = closure_3.useCallback(() => {
      updateActivityPanelModeToPIP();
    }, items2);
    obj2 = { theme: ThemeTypes.DARK, children: null };
    tmp14 = jsx;
    items3 = [, ];
    items3[0] = tmp2.shade;
    items3[1] = animatedStyle1;
    items4 = [, ];
    items4[0] = jsx(require("module_4217").View, { style: items3, pointerEvents: "none" });
    obj3 = { style: memo, nativeID: "activity-panel-focused-view", accessibilityViewIsModal: true, onAccessibilityEscape: callback, children: null };
    obj4 = { style: animatedStyle2, children: null };
    tmp15 = null;
    if (lockedWebView.renderWebView) {
      tmp15 = null;
      if (hasActivity) {
        tmp15 = children;
      }
    }
    obj4[1] = tmp15;
    items5 = [, ];
    items5[0] = tmp14(require("module_4217").View, obj4);
    items5[1] = header;
    obj3[4] = items5;
    items4[1] = tmp13(require("AccessibilityView").AccessibilityViewAnimated, obj3);
    obj2[1] = items4;
    return tmp13(require("ManaContext").ThemeContextProvider, obj2);
  }
}
let c3 = importAllResult;
({ ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_8, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: c9, ActivityPanelModes: c10 } = ActivityPanelModes);
({ DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG: unpackModuleId, DEFAULT_PORTRAIT_LETTERBOX_CONFIG: closure_12, DEFAULT_LANDSCAPE_PILLERBOX_CONFIG: map1 } = DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = { duration: 300 };
let obj = { wrapper: null, shade: null };
obj = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
createCacheKey = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = ThemesDefault.colors.BLACK;
obj[1] = createCacheKey;
let closure_19 = createCacheKey.createStyles(obj);
let closure_20 = { code: "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}" };
let closure_21 = { code: "function transitionComplete_ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
let closure_22 = { code: "function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}" };
let closure_23 = { code: "function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}" };
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  let _require = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let isWindowLandscape = transitionCleanUp;
  let channel;
  let hasActivity;
  closure_4 = undefined;
  let memo;
  let memo1;
  let callback;
  const items = [memo1, memo];
  const stateFromStoresObject = _require(channel[14]).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = memo1.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = memo1.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let obj = lib(channel[23]);
    obj = { channel: memo.getChannel(obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation)), hasActivity: null != selfEmbeddedActivityForLocation };
    return obj;
  }, []);
  channel = stateFromStoresObject.channel;
  hasActivity = stateFromStoresObject.hasActivity;
  _require = undefined;
  isWindowLandscape = undefined;
  let obj = _require(channel[14]);
  const tmp3 = isWindowLandscape(channel[13])();
  _require = tmp3;
  const wrapperDimensions = hasActivity.useContext(isWindowLandscape(channel[24])).wrapperDimensions;
  const isLandscape = wrapperDimensions.isLandscape;
  isWindowLandscape = !isLandscape;
  if (!isLandscape) {
    isWindowLandscape = wrapperDimensions.isWindowLandscape;
  }
  const tmp5 = wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_12 : closure_11;
  const items1 = [tmp3.right, isWindowLandscape];
  memo = obj2.useMemo(() => {
    if (isWindowLandscape) {
      let obj = closure_1_13;
    } else {
      obj = { right: null };
      obj = { disable: false, override: null };
      const _Math = Math;
      obj[1] = Math.max(64, lib.right);
      obj[0] = obj;
    }
    return obj;
  }, items1);
  closure_4 = tmp5;
  memo1 = obj2.useMemo(() => callback(isWindowLandscape(channel[25]), {}), []);
  callback = obj2.useCallback(() => {
    const result = lib(channel[26]).updateActivityPanelMode(constants.PIP);
  }, []);
  const items2 = [transitionState, transitionCleanUp, callback, hasActivity, memo1, channel, tmp5, memo];
  return hasActivity.useMemo(() => {
    obj = { transitionState: closure_0, transitionCleanUp: isWindowLandscape, updateActivityPanelModeToPIP: callback, hasActivity, context: isWindowLandscape(channel[24]), header: memo1, children: closure_1_16(isWindowLandscape(channel[27]), obj) };
    obj = { channel, layoutMode: callback.FOCUSED, portraitSafeAreasConfig: closure_4, landscapeSafeAreasConfig: memo };
    return closure_1_16(closure_1_24, obj);
  }, items2);
});
let result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityPanelFocusedView.tsx");

export default memoResult;
export const useBaseActivityPanelFocusedView = function useBaseActivityPanelFocusedView(context) {
  closure_0 = undefined;
  let isWindowLandscape;
  const tmp = isWindowLandscape(1628)();
  closure_0 = tmp;
  let obj = importAllResult;
  const wrapperDimensions = importAllResult.useContext(context.context).wrapperDimensions;
  const isLandscape = wrapperDimensions.isLandscape;
  isWindowLandscape = !isLandscape;
  if (!isLandscape) {
    isWindowLandscape = wrapperDimensions.isWindowLandscape;
  }
  obj = {
    portraitSafeAreasConfig: wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_12 : closure_11,
    landscapeSafeAreasConfig: obj.useMemo(() => {
      if (isWindowLandscape) {
        let obj = closure_1_13;
      } else {
        obj = { right: null };
        obj = { disable: false, override: null };
        const _Math = Math;
        obj[1] = Math.max(64, lib.right);
        obj[0] = obj;
      }
      return obj;
    }, items)
  };
  items = [tmp.right, isWindowLandscape];
  return obj;
};
export { BaseActivityPanelFocusedView };