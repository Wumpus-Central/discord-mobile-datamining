// === Module 17023: ActivityPanelFocusedView ===

// Module 17023 (ActivityPanelFocusedView)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import spring from "spring" /* 4974 */;
import EmbeddedActivityViewDefault from "EmbeddedActivityView" /* 9635 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 17015 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
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
    obj = transitionState(closure_2[14]);
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => closure_4.useReducedMotion);
    closure_3 = stateFromStores;
    tmp2 = closure_19();
    closure_4 = tmp2;
    tmp3 = transitionCleanUp(closure_2[15])();
    closure_5 = tmp3;
    tmp4 = transitionCleanUp(closure_2[13])();
    closure_6 = tmp4;
    context = closure_3.useContext(context);
    wrapperDimensions = context.wrapperDimensions;
    wrapperOffset = context.wrapperOffset;
    obj2 = transitionState(closure_2[16]);
    lockedWebView = obj2.useLockedWebView({ transitionState, context });
    shown = lockedWebView.shown;
    tmp7 = transitionCleanUp(closure_2[17])();
    closure_10 = tmp7;
    lg = transitionCleanUp(closure_2[12]).radii.lg;
    obj3 = transitionState(closure_2[18]);
    fn = function _() {
      let num = 0;
      if (!wrapperDimensions.isWindowLandscape) {
        num = lg;
      }
      let num2 = 0;
      if (IS_IOS) {
        num2 = closure_10.get();
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
        height = styles.height;
      }
      function transitionComplete() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        if (flag) {
          flag = closure_1_0 === transitionState(updateActivityPanelModeToPIP[19]).TransitionStates.YEETED;
        }
        if (flag) {
          transitionState(updateActivityPanelModeToPIP[18]).runOnJS(transitionCleanUp)();
          const obj = transitionState(updateActivityPanelModeToPIP[18]);
        }
      }
      obj = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp };
      transitionComplete.__closure = obj;
      transitionComplete.__workletHash = 16073739070225;
      transitionComplete.__initData = __initData;
      let num4 = 0;
      if (stateFromStores) {
        num4 = 0;
        if (obj.get()) {
          num4 = 1 - wrapperOffset.get().y / styles.height;
        }
      }
      let num6 = 1;
      if (stateFromStores) {
        let tmp9Result = timing;
        let str2 = "animate-always";
        if (obj.get()) {
          str2 = "animate-always";
          if (wrapperOffset.get().gestureActive) {
            str2 = "animate-never";
          }
        }
        num6 = tmp9Result.withTiming(num4, closure_18, str2, transitionComplete);
      }
      const size = { opacity: num6, transform: null, top: null, width: null, height: null, borderTopStartRadius: null, borderTopEndRadius: null };
      if (stateFromStores) {
        obj = { translateY: 0 };
        const items = [obj];
        size.transform = items;
        let num7 = 0;
        if (!wrapperDimensions.isWindowLandscape) {
          num7 = closure_6.top;
        }
        size.top = num7;
        size.width = styles.width;
        size.height = diff1;
        size.borderTopStartRadius = num;
        size.borderTopEndRadius = num;
        return size;
      } else {
        tmp9Result = spring;
        if (!wrapperOffset.get().gestureActive) {
          let tmp21 = React7;
          tmp9Result.withSpring(height, tmp21, "animate-always", transitionComplete);
        }
        tmp21 = React6;
      }
    };
    obj = { wrapperDimensions, lg, IS_IOS, animatedKeyboardHeight: tmp7, windowDimensions: tmp3, safeArea: tmp4, shown, wrapperOffset, transitionState, TransitionStates: transitionState(closure_2[19]).TransitionStates, runOnJS: transitionState(closure_2[18]).runOnJS, transitionCleanUp, reduceMotion: stateFromStores, withTiming: transitionState(closure_2[20]).withTiming, REDUCED_MOTION_TIMING: closure_18, withSpring: transitionState(closure_2[21]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: wrapperOffset, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown };
    fn.__closure = obj;
    fn.__workletHash = 3642447648301;
    fn.__initData = closure_20;
    animatedStyle = obj3.useAnimatedStyle(fn);
    closure_12 = animatedStyle;
    obj5 = transitionState(closure_2[18]);
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
        obj3 = closure_0(closure_2[21]);
        obj.opacity = obj3.withSpring(num, closure_9);
        return obj;
      }
    }
    obj1 = { wrapperOffset, shown, windowDimensions: tmp3, withSpring: transitionState(closure_2[21]).withSpring, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown };
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
    obj7 = transitionState(closure_2[18]);
    class A {
      constructor() {
        num = 0;
        if (IS_IOS) {
          tmp = closure_10;
          num = closure_10.get();
        }
        size = { width: wrapperDimensions.width, height: wrapperDimensions.height - num };
        return size;
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
    obj3 = { style: null, pointerEvents: "none" };
    items3 = [, ];
    items3[0] = tmp2.shade;
    items3[1] = animatedStyle1;
    obj3.style = items3;
    items4 = [, ];
    items4[0] = jsx(transitionCleanUp(closure_2[18]).View, obj3);
    obj4 = { style: memo, nativeID: "activity-panel-focused-view", accessibilityViewIsModal: true, onAccessibilityEscape: callback, children: null };
    obj5 = { style: animatedStyle2, children: null };
    tmp15 = null;
    if (lockedWebView.renderWebView) {
      tmp15 = null;
      if (hasActivity) {
        tmp15 = children;
      }
    }
    obj5.children = tmp15;
    items5 = [, ];
    items5[0] = tmp14(transitionCleanUp(closure_2[18]).View, obj5);
    items5[1] = header;
    obj4.children = items5;
    items4[1] = tmp13(transitionState(closure_2[22]).AccessibilityViewAnimated, obj4);
    obj2.children = items4;
    return tmp13(transitionState(closure_2[19]).ThemeContextProvider, obj2);
  }
}
const ActivityLayoutMode = fn(1920).ActivityLayoutMode;
const ActivityPanelConstants = fn(9505);
({ ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_8, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_9, ActivityPanelModes: c10 } = ActivityPanelConstants);
const ActivityPanelNativeConstants = fn(17018);
({ DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG: closure_11, DEFAULT_PORTRAIT_LETTERBOX_CONFIG: closure_12, DEFAULT_LANDSCAPE_PILLERBOX_CONFIG: map1 } = ActivityPanelNativeConstants);
const ThemeTypes = fn(1074).ThemeTypes;
const IS_IOS = fn(12273).IS_IOS;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const collapsedCategories = { duration: 300 };
fn(4560);
let obj = { wrapper: null, shade: null };
obj = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.wrapper = obj;
const createStyles = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
createStyles.backgroundColor = nativeDefault.colors.BLACK;
obj.shade = createStyles;
let closure_19 = createStyles.createStyles(obj);
const __initData = { code: "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}" };
let closure_21 = { code: "function transitionComplete_ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
const __initData2 = { code: "function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}" };
const __initData3 = { code: "function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelFocusedView.tsx");

export default noop.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let channel;
  let portraitSafeAreasConfig;
  let memo;
  let memo1;
  let updateActivityPanelModeToPIP;
  const items = [memo1, memo];
  const stateFromStoresObject = transitionState(channel[14]).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = memo1.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = memo1.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let obj = transitionState(channel[23]);
    obj = { channel: memo.getChannel(obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation)), hasActivity: null != selfEmbeddedActivityForLocation };
    return obj;
  }, []);
  channel = stateFromStoresObject.channel;
  const hasActivity = stateFromStoresObject.hasActivity;
  closure_129_1 = undefined;
  let obj = transitionState(channel[14]);
  const tmp3 = transitionCleanUp(channel[13])();
  closure_129_0 = tmp3;
  const wrapperDimensions = hasActivity.useContext(transitionCleanUp(channel[24])).wrapperDimensions;
  const isLandscape = wrapperDimensions.isLandscape;
  let isWindowLandscape = !isLandscape;
  if (!isLandscape) {
    isWindowLandscape = wrapperDimensions.isWindowLandscape;
  }
  closure_129_1 = isWindowLandscape;
  const tmp5 = wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_12 : closure_11;
  const items1 = [tmp3.right, isWindowLandscape];
  memo = obj2.useMemo(() => {
    if (transitionCleanUp) {
      let obj = map1;
    } else {
      obj = { right: null };
      obj = { disable: false, override: null };
      const _Math = Math;
      obj.override = Math.max(64, transitionState.right);
      obj.right = obj;
    }
    return obj;
  }, items1);
  portraitSafeAreasConfig = tmp5;
  memo1 = obj2.useMemo(() => closure_1_16(transitionCleanUp(channel[25]), {}), []);
  updateActivityPanelModeToPIP = obj2.useCallback(() => {
    const result = transitionState(channel[26]).updateActivityPanelMode(constants.PIP);
  }, []);
  const items2 = [transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity, memo1, channel, tmp5, memo];
  return hasActivity.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity, context: ActivityPanelStateContextDefault, header: memo1, children: null };
    obj = { channel, layoutMode: ActivityLayoutMode.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig: memo };
    obj.children = value2(EmbeddedActivityViewDefault, obj);
    return value2(BaseActivityPanelFocusedView, obj);
  }, items2);
});
export const useBaseActivityPanelFocusedView = function useBaseActivityPanelFocusedView(context) {
  let isWindowLandscape;
  const tmp = isWindowLandscape(1611)();
  closure_0 = tmp;
  let obj = noop;
  const wrapperDimensions = noop.useContext(context.context).wrapperDimensions;
  const isLandscape = wrapperDimensions.isLandscape;
  isWindowLandscape = !isLandscape;
  if (!isLandscape) {
    isWindowLandscape = wrapperDimensions.isWindowLandscape;
  }
  obj = { portraitSafeAreasConfig: wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_12 : closure_11, landscapeSafeAreasConfig: null };
  const items = [tmp.right, isWindowLandscape];
  obj.landscapeSafeAreasConfig = obj.useMemo(() => {
    if (transitionCleanUp) {
      let obj = map1;
    } else {
      obj = { right: null };
      obj = { disable: false, override: null };
      const _Math = Math;
      obj.override = Math.max(64, transitionState.right);
      obj.right = obj;
    }
    return obj;
  }, items);
  return obj;
};
export { BaseActivityPanelFocusedView };