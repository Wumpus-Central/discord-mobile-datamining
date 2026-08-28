// === Module 16528: BaseActivityPanelPIPView ===

// Module 16528 (BaseActivityPanelPIPView)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import closure_6 from "module_9566" /* 9566 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "participantFromServer" /* 1390 */;
import { ActivityLayoutMode } from "items3" /* 4474 */;
import ActivityPanelModes from "ActivityPanelModes" /* 9405 */;
import { DEFAULT_PORTRAIT_LETTERBOX_CONFIG as closure_15 } from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG" /* 16529 */;
import { ThemeTypes } from "ME" /* 676 */;
import { PIP_WINDOW_OFFSET } from "MIN_PAN_GESTURE_MOVE" /* 11777 */;
import { jsx } from "jsxProd" /* 21 */;
import Button from "Button" /* 1297 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
class BaseActivityPanelPIPView {
  constructor(arg0) {
    transitionState = global.transitionState;
    transitionCleanUp = global.transitionCleanUp;
    context = global.context;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    wrapperOffset = undefined;
    setMode = undefined;
    pipState = undefined;
    pipAvoidanceSpecs = undefined;
    shown = undefined;
    closure_10 = undefined;
    width = undefined;
    height = undefined;
    ({ children, pipOrientationLockState, hasActivity } = global);
    tmp = closure_20();
    obj = require("initialize");
    items = [];
    items[0] = wrapperOffset;
    stateFromStores = obj.useStateFromStores(items, () => wrapperOffset.useReducedMotion);
    closure_2 = stateFromStores;
    tmp3 = require("useWindowDimensions")();
    closure_3 = tmp3;
    tmp4 = require("useSafeAreaInsets")();
    closure_4 = tmp4;
    context = closure_3.useContext(context);
    wrapperOffset = context.wrapperOffset;
    setMode = context.setMode;
    pipState = context.pipState;
    pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    obj2 = require("useActivityWebViewLockManager");
    lockedWebView = obj2.useLockedWebView({ transitionState, context });
    shown = lockedWebView.shown;
    renderWebView = lockedWebView.renderWebView;
    items1 = [];
    items1[0] = wrapperOffset;
    effect = closure_3.useEffect(() => {
      transitionCleanUp(stateFromStores[19])(wrapperOffset, { gestureActive: false });
    }, items1);
    tmp8 = setMode((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    closure_10 = tmp8;
    obj3 = require("module_4186");
    class J {
      constructor() {
        point = pipState.get();
        x = point.x;
        tmp = transitionState;
        tmp2 = closure_2;
        obj = require("MIN_PIP_TOSS_VELOCITY");
        obj = { pipX: x, pipY: point.y, width: closure_10.width, height: closure_10.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
        width = closure_10;
        sum1 = closure_4;
        tmp3 = closure_3;
        obj3 = wrapperOffset;
        value = undefined;
        if (wrapperOffset.get().gestureActive) {
          value = obj3.get();
        }
        obj[8] = value;
        obj[9] = closure_10;
        point2 = obj.getClampedPIPPosition(obj);
        x2 = point2.x;
        obj4 = shown;
        tmp6 = shown.get() || closure_2;
        if (tmp6) {
          transitionComplete = function transitionComplete() {
            let flag = arg0;
            if (arg0 === undefined) {
              flag = false;
            }
            if (flag) {
              flag = closure_0 === closure_1_0(closure_1_2[22]).TransitionStates.YEETED;
            }
            if (flag) {
              closure_1_0(closure_1_2[20]).runOnJS(closure_1)();
              const obj = closure_1_0(closure_1_2[20]);
            }
          };
          obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
          tmp13 = transitionState;
          obj1[0] = transitionState;
          obj1[1] = require("ManaContext").TransitionStates;
          obj1[2] = require("module_4186").runOnJS;
          tmp14 = transitionCleanUp;
          obj1[3] = transitionCleanUp;
          transitionComplete.__closure = obj1;
          num3 = 7625774548373;
          transitionComplete.__workletHash = 7625774548373;
          tmp15 = closure_1_22;
          transitionComplete.__initData = closure_1_22;
          num4 = 1;
          num5 = 1;
          tmp16 = closure_2;
          if (closure_2) {
            tmpResult = require("CONFIG_NEVER_ANIMATE_TIMING");
            num6 = 0;
            if (obj4.get()) {
              num6 = 1;
            }
            tmp17 = closure_1_19;
            str = "animate-always";
            tmp18 = tmpResult;
            tmp19 = num6;
            tmp20 = transitionComplete;
            num5 = tmpResult.withTiming(num6, closure_1_19, "animate-always", transitionComplete);
          }
          obj2 = { opacity: null, transform: null };
          obj2[0] = num5;
          tmpResult1 = require("CONFIG_NEVER_ANIMATE");
          obj3 = { translateY: null };
          str2 = "animate-always";
          obj3[0] = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? height : closure_1_13, "animate-always");
          items = [, ];
          items[0] = obj3;
          tmpResult2 = require("CONFIG_NEVER_ANIMATE");
          tmp21 = obj3.get().gestureActive ? height : closure_1_13;
          tmp22 = undefined;
          if (!tmp16) {
            tmp22 = transitionComplete;
          }
          obj4 = { translateX: null };
          tmp23 = tmpResult2;
          tmp24 = x2;
          tmp25 = tmp21;
          str3 = "animate-always";
          tmp26 = tmp22;
          obj4[0] = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
          items[1] = obj4;
          obj2[1] = items;
          return obj2;
        } else {
          num = 0.5;
          if (x >= 0.5) {
            tmp7 = globalThis;
            _Math = Math;
            tmp8 = closure_1_17;
            sum = tmp3.width + Math.max(sum1.right, closure_1_17);
            tmp12 = sum;
          } else {
            num2 = 0;
          }
          width = width.width;
          tmp10 = globalThis;
          _Math2 = Math;
          tmp11 = closure_1_17;
          sum1 = width + Math.max(sum1.right, closure_1_17);
          sum = -sum1;
        }
        return;
      }
    }
    obj = { pipState, getClampedPIPPosition: require("MIN_PIP_TOSS_VELOCITY").getClampedPIPPosition, ACTIVITY_PIP_SIZE: closure_10, windowDimensions: tmp3, safeArea: tmp4, pipAvoidanceSpecs, wrapperOffset, disableHorizontalSafeAreas: tmp8, shown, reduceMotion: stateFromStores, PIP_WINDOW_OFFSET, transitionState, TransitionStates: require("ManaContext").TransitionStates, runOnJS: require("module_4186").runOnJS, transitionCleanUp, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, REDUCED_MOTION_TIMING: closure_19, withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: height, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_13 };
    J.__closure = obj;
    J.__workletHash = 14326479117867;
    J.__initData = closure_21;
    animatedStyle = obj3.useAnimatedStyle(J);
    obj1 = { pipWidth: closure_10.width, pipHeight: closure_10.height, pipOrientationLockState, isLandscape: context.wrapperDimensions.isLandscape };
    size = require("OrientationLockState")(obj1);
    width = size.width;
    height = size.height;
    items2 = [, ];
    items2[0] = width;
    items2[1] = height;
    class W {
      constructor() {
        obj = require("module_4186");
        tmp = obj.runOnJS(setMode)(width.PANEL);
        return;
      }
    }
    obj2 = { runOnJS: null, setMode: null, ActivityPanelModes: null };
    memo = closure_3.useMemo(() => ({ width, height, pointerEvents: "none" }), items2);
    obj2[0] = require("module_4186").runOnJS;
    obj2[1] = setMode;
    obj2[2] = width;
    W.__closure = obj2;
    W.__workletHash = 2951177166574;
    W.__initData = closure_23;
    items3 = [];
    items3[0] = setMode;
    callback = closure_3.useCallback(W, items3);
    obj3 = { panGestureEnabled: true, onTapGestureStart: callback, mode: null, pipState: null, wrapperOffset: null, disableHorizontalSafeAreas: false };
    tmp12 = require("MorphablePanelModes");
    obj3[2] = require("MorphablePanelModes").MorphablePanelModes.PIP;
    obj3[3] = pipState;
    obj3[4] = wrapperOffset;
    items4 = [];
    items4[0] = setMode;
    tmp12Result = tmp12(obj3);
    tmp15 = jsx;
    memo1 = closure_3.useMemo(() => {
      const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
      const intl = transitionState(stateFromStores[27]).intl;
      obj[1] = intl.string(transitionState(stateFromStores[27]).t["3ejJer"]);
      const items = [{ name: "activate" }];
      obj[3] = items;
      obj[4] = function onAccessibilityAction() {
        callback(closure_1_11.PANEL);
      };
      return obj;
    }, items4);
    obj4 = { theme: ThemeTypes.DARK, children: null };
    obj5 = { style: items5 };
    items5 = [, ];
    items5[0] = tmp.wrapper;
    items5[1] = animatedStyle;
    merged = Object.assign(memo1);
    obj6 = { gesture: tmp12Result, children: null };
    tmp17 = closure_4;
    obj7 = { style: tmp.mask, children: null };
    tmp18 = !renderWebView;
    if (renderWebView) {
      tmp18 = !hasActivity;
    }
    tmp15Result = !tmp18;
    if (!tmp18) {
      obj8 = { style: null, children: null };
      obj8[0] = memo;
      obj8[1] = children;
      tmp15Result = tmp15(tmp17, obj8);
    }
    obj7[1] = tmp15Result;
    obj6[1] = tmp15(tmp17, obj7);
    obj5.children = tmp15(require("LegacyBaseButton").GestureDetector, obj6);
    obj4[1] = tmp15(require("module_4186").View, obj5);
    return tmp15(require("ManaContext").ThemeContextProvider, obj4);
  }
}
let c3 = importAllResult;
let ACTIVITY_PIP_SIZE = ActivityPanelModes.ACTIVITY_PIP_SIZE;
({ ActivityPanelModes: unpackModuleId, ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_12, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: map1, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_14 } = ActivityPanelModes);
let closure_19 = { duration: 300 };
const boxShadowStyle = Button.generateBoxShadowStyle(require("Button").EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS);
let obj = { wrapper: null, mask: null };
obj = { borderRadius: ThemesDefault.radii.lg };
let merged = Object.assign(ACTIVITY_PIP_SIZE);
const merged1 = Object.assign(boxShadowStyle);
obj[0] = obj;
Button = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const merged2 = Object.assign(ACTIVITY_PIP_SIZE);
obj[1] = Button;
let closure_20 = createCacheKey.createStyles(obj);
let closure_21 = { code: "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}" };
let closure_22 = { code: "function transitionComplete_ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
let closure_23 = { code: "function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}" };
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  let _require = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  dependencyMap = undefined;
  activity = undefined;
  let applicationId;
  let stateFromStores;
  let stateFromStores1;
  let memo;
  const items = [closure_8];
  const stateFromStoresObject = _require(589).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = store.getConnectedActivityLocation();
    const obj = { channelId: lib(_undefined[29]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), activity: store.getSelfEmbeddedActivityForLocation(connectedActivityLocation) };
    return obj;
  });
  ({ channelId: c2, activity } = stateFromStoresObject);
  applicationId = undefined;
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  let tmpResult = tmp(589);
  const items1 = [closure_8];
  stateFromStores = tmpResult.useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = closure_1_8.getPipOrientationLockStateForApp(tmp);
    }
    return pipOrientationLockStateForApp;
  });
  tmpResult = tmp(589);
  const items2 = [memo];
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => memo.getChannel(c2));
  _require = undefined;
  const tmp8 = transitionCleanUp(1629)();
  _require = tmp8;
  const items3 = [tmp8.right];
  memo = activity.useMemo(() => {
    let num;
    if (lib != null) {
      num = lib.right;
    }
    if (num == null) {
      num = 0;
    }
    let obj = { right: null };
    obj = { disable: false, override: Math.max(closure_1_14, num) };
    obj[0] = obj;
    return obj;
  }, items3);
  const items4 = [activity, stateFromStores1, memo, stateFromStores, transitionCleanUp, transitionState];
  return activity.useMemo(() => {
    obj = { transitionState: closure_0, transitionCleanUp, pipOrientationLockState: stateFromStores, hasActivity: null != activity, context: transitionCleanUp(_undefined[30]), children: closure_1_18(transitionCleanUp(_undefined[31]), obj) };
    obj = { channel: stateFromStores1, layoutMode: closure_1_9.PIP, portraitSafeAreasConfig: closure_1_15, landscapeSafeAreasConfig: memo };
    return closure_1_18(closure_1_24, obj);
  }, items4);
});
const result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default memoResult;
export const useBaseActivityPanelPIPView = function useBaseActivityPanelPIPView() {
  const tmp = useSafeAreaInsetsDefault();
  closure_0 = tmp;
  const items = [tmp.right];
  return {
    landscapeSafeAreasConfig: importAllResult.useMemo(() => {
      let num;
      if (lib != null) {
        num = lib.right;
      }
      if (num == null) {
        num = 0;
      }
      let obj = { right: null };
      obj = { disable: false, override: Math.max(closure_1_14, num) };
      obj[0] = obj;
      return obj;
    }, items)
  };
};
export { BaseActivityPanelPIPView };