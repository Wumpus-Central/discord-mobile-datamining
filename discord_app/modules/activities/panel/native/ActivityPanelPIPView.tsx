// discord_app/modules/activities/panel/native/ActivityPanelPIPView.tsx
import importAllResult from "u";
import { View } from "useWindowDimensions";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import SafeAreaDisabledStore from "../../../panels/morphable/native/SafeAreaDisabledStore.tsx";
import ensureGuildLoaded from "ensureGuildLoaded";
import participantFromServer from "participantFromServer";
import { ActivityLayoutMode } from "items3";
import ActivityPanelModes from "ActivityPanelModes";
import { DEFAULT_PORTRAIT_LETTERBOX_CONFIG as closure_15 } from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG";
import { ThemeTypes } from "ME";
import { PIP_WINDOW_OFFSET } from "MIN_PAN_GESTURE_MOVE";
import { jsx } from "MIN_PIP_TOSS_VELOCITY";
import Button from "Button";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
let require = arg1;
class BaseActivityPanelPIPView {
  constructor(arg0) {
    transitionState = global.transitionState;
    transitionCleanUp = global.transitionCleanUp;
    context = global.context;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    wrapperOffset = undefined;
    setMode = undefined;
    pipState = undefined;
    pipAvoidanceSpecs = undefined;
    shown = undefined;
    c10 = undefined;
    width = undefined;
    height = undefined;
    ({ children, pipOrientationLockState, hasActivity } = global);
    tmp = jsx();
    obj = require("initialize");
    items = [];
    items[0] = wrapperOffset;
    stateFromStores = obj.useStateFromStores(items, () => wrapperOffset.useReducedMotion);
    c2 = stateFromStores;
    tmp3 = require("useWindowDimensions")();
    c3 = tmp3;
    tmp4 = require("useSafeAreaInsets")();
    c4 = tmp4;
    context = c3.useContext(context);
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
    effect = c3.useEffect(() => {
      transitionCleanUp(stateFromStores[19])(wrapperOffset, { gestureActive: false });
    }, items1);
    tmp8 = setMode((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    c10 = tmp8;
    obj3 = require("module_4146");
    class J {
      constructor() {
        point = pipState.get();
        x = point.x;
        tmp = transitionState;
        tmp2 = c2;
        obj = require("MIN_PIP_TOSS_VELOCITY");
        obj = { pipX: x, pipY: point.y, width: c10.width, height: c10.height, windowDimensions: c3, safeArea: c4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
        width = c10;
        sum1 = c4;
        tmp3 = c3;
        obj3 = wrapperOffset;
        value = undefined;
        if (wrapperOffset.get().gestureActive) {
          value = obj3.get();
        }
        obj[8] = value;
        obj[9] = c10;
        point2 = obj.getClampedPIPPosition(obj);
        x2 = point2.x;
        obj4 = shown;
        tmp6 = shown.get() || c2;
        if (tmp6) {
          transitionComplete = function transitionComplete() {
            let flag = arg0;
            if (arg0 === undefined) {
              flag = false;
            }
            if (flag) {
              flag = closure_0 === outer1_0(outer1_2[22]).TransitionStates.YEETED;
            }
            if (flag) {
              outer1_0(outer1_2[20]).runOnJS(closure_1)();
              const obj = outer1_0(outer1_2[20]);
            }
          };
          obj1 = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
          tmp13 = transitionState;
          obj1[0] = transitionState;
          obj1[1] = require("wrapChildrenDefault").TransitionStates;
          obj1[2] = require("module_4146").runOnJS;
          tmp14 = transitionCleanUp;
          obj1[3] = transitionCleanUp;
          transitionComplete.__closure = obj1;
          num3 = 7625774548373;
          transitionComplete.__workletHash = 7625774548373;
          tmp15 = outer1_22;
          transitionComplete.__initData = outer1_22;
          num4 = 1;
          num5 = 1;
          tmp16 = c2;
          if (c2) {
            tmpResult = require("CONFIG_NEVER_ANIMATE_TIMING");
            num6 = 0;
            if (obj4.get()) {
              num6 = 1;
            }
            tmp17 = outer1_19;
            str = "animate-always";
            tmp18 = tmpResult;
            tmp19 = num6;
            tmp20 = transitionComplete;
            num5 = tmpResult.withTiming(num6, outer1_19, "animate-always", transitionComplete);
          }
          obj2 = { opacity: null, transform: null };
          obj2[0] = num5;
          tmpResult1 = require("CONFIG_NEVER_ANIMATE");
          obj3 = { translateY: null };
          str2 = "animate-always";
          obj3[0] = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? height : outer1_13, "animate-always");
          items = [, ];
          items[0] = obj3;
          tmpResult2 = require("CONFIG_NEVER_ANIMATE");
          tmp21 = obj3.get().gestureActive ? height : outer1_13;
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
            tmp8 = outer1_17;
            sum = tmp3.width + Math.max(sum1.right, outer1_17);
            tmp12 = sum;
          } else {
            num2 = 0;
          }
          width = width.width;
          tmp10 = globalThis;
          _Math2 = Math;
          tmp11 = outer1_17;
          sum1 = width + Math.max(sum1.right, outer1_17);
          sum = -sum1;
        }
        return;
      }
    }
    obj = { pipState, getClampedPIPPosition: require("MIN_PIP_TOSS_VELOCITY").getClampedPIPPosition, ACTIVITY_PIP_SIZE: c10, windowDimensions: tmp3, safeArea: tmp4, pipAvoidanceSpecs, wrapperOffset, disableHorizontalSafeAreas: tmp8, shown, reduceMotion: stateFromStores, PIP_WINDOW_OFFSET, transitionState, TransitionStates: require("wrapChildrenDefault").TransitionStates, runOnJS: require("module_4146").runOnJS, transitionCleanUp, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, REDUCED_MOTION_TIMING: jsx, withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: height, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: ActivityPanelModes };
    J.__closure = obj;
    J.__workletHash = 14326479117867;
    J.__initData = jsx;
    animatedStyle = obj3.useAnimatedStyle(J);
    obj1 = { pipWidth: c10.width, pipHeight: c10.height, pipOrientationLockState, isLandscape: context.wrapperDimensions.isLandscape };
    size = require("OrientationLockState")(obj1);
    width = size.width;
    height = size.height;
    items2 = [, ];
    items2[0] = width;
    items2[1] = height;
    class W {
      constructor() {
        obj = require("module_4146");
        tmp = obj.runOnJS(setMode)(width.PANEL);
        return;
      }
    }
    obj2 = { runOnJS: null, setMode: null, ActivityPanelModes: null };
    memo = c3.useMemo(() => ({ width, height, pointerEvents: "none" }), items2);
    obj2[0] = require("module_4146").runOnJS;
    obj2[1] = setMode;
    obj2[2] = width;
    W.__closure = obj2;
    W.__workletHash = 2951177166574;
    W.__initData = jsx;
    items3 = [];
    items3[0] = setMode;
    callback = c3.useCallback(W, items3);
    obj3 = { panGestureEnabled: true, onTapGestureStart: callback, mode: null, pipState: null, wrapperOffset: null, disableHorizontalSafeAreas: false };
    tmp12 = require("MorphablePanelModes");
    obj3[2] = require("MorphablePanelModes").MorphablePanelModes.PIP;
    obj3[3] = pipState;
    obj3[4] = wrapperOffset;
    items4 = [];
    items4[0] = setMode;
    tmp12Result = tmp12(obj3);
    tmp15 = jsx;
    memo1 = c3.useMemo(() => {
      const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
      const intl = transitionState(stateFromStores[27]).intl;
      obj[1] = intl.string(transitionState(stateFromStores[27]).t["3ejJer"]);
      const items = [{ name: "activate" }];
      obj[3] = items;
      obj[4] = function onAccessibilityAction() {
        callback(outer1_11.PANEL);
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
    tmp17 = c4;
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
    obj5.children = tmp15(require("Directions").GestureDetector, obj6);
    obj4[1] = tmp15(require("module_4146").View, obj5);
    return tmp15(require("ManaContext").ThemeContextProvider, obj4);
  }
}
let c3 = importAllResult;
let ACTIVITY_PIP_SIZE = ActivityPanelModes.ACTIVITY_PIP_SIZE;
({ ActivityPanelModes: unpackModuleId, ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_12, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: map1, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_14 } = ActivityPanelModes);
let closure_19 = { duration: 300 };
const boxShadowStyle = Button.generateBoxShadowStyle(require("Button").EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS);
let obj = { wrapper: null, mask: null };
obj = { borderRadius: require("Themes").radii.lg };
let merged = Object.assign(ACTIVITY_PIP_SIZE);
const merged1 = Object.assign(boxShadowStyle);
obj[0] = obj;
Button = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const merged2 = Object.assign(ACTIVITY_PIP_SIZE);
obj[1] = Button;
let closure_20 = createCacheKey.createStyles(obj);
let closure_21 = { code: "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}" };
let closure_22 = { code: "function transitionComplete_ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
let closure_23 = { code: "function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}" };
const memoResult = importAllResult.memo((transitionState) => {
  let activity;
  let c2;
  transitionState = transitionState.transitionState;
  let _require = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let dependencyMap;
  activity = undefined;
  let applicationId;
  let stateFromStores;
  let stateFromStores1;
  let memo;
  const items = [participantFromServer];
  const stateFromStoresObject = _require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
    const connectedActivityLocation = store.getConnectedActivityLocation();
    const obj = { channelId: null, activity: null };
    obj[0] = _undefined(_undefined2[30]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    obj[1] = store.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    return obj;
  });
  ({ channelId: c2, activity } = stateFromStoresObject);
  applicationId = undefined;
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  let tmpResult = tmp(589);
  const items1 = [participantFromServer];
  stateFromStores = tmpResult.useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = outer1_8.getPipOrientationLockStateForApp(tmp);
    }
    return pipOrientationLockStateForApp;
  });
  tmpResult = tmp(589);
  const items2 = [memo];
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => memo.getChannel(c2));
  _require = undefined;
  const tmp8 = transitionCleanUp(1581)();
  _require = tmp8;
  const items3 = [tmp8.right];
  memo = activity.useMemo(() => {
    let num;
    if (_undefined != null) {
      num = _undefined.right;
    }
    if (num == null) {
      num = 0;
    }
    let obj = { right: null };
    obj = { disable: false, override: Math.max(outer1_14, num) };
    obj[0] = obj;
    return obj;
  }, items3);
  const items4 = [activity, stateFromStores1, memo, stateFromStores, transitionCleanUp, transitionState];
  return activity.useMemo(() => {
    obj = { transitionState: c0, transitionCleanUp, pipOrientationLockState: stateFromStores, hasActivity: null != activity, context: transitionCleanUp(_undefined2[31]), children: outer1_18(transitionCleanUp(_undefined2[32]), obj) };
    obj = { channel: stateFromStores1, layoutMode: outer1_9.PIP, portraitSafeAreasConfig: outer1_15, landscapeSafeAreasConfig: memo };
    return outer1_18(outer1_24, obj);
  }, items4);
});
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default memoResult;
export const useBaseActivityPanelPIPView = function useBaseActivityPanelPIPView() {
  const tmp = require("../../../safe_area/useSafeAreaInsets.native.tsx")();
  const require = tmp;
  const items = [tmp.right];
  return {
    landscapeSafeAreasConfig: importAllResult.useMemo(() => {
      let num;
      if (_undefined != null) {
        num = _undefined.right;
      }
      if (num == null) {
        num = 0;
      }
      let obj = { right: null };
      obj = { disable: false, override: Math.max(outer1_14, num) };
      obj[0] = obj;
      return obj;
    }, items)
  };
};
export { BaseActivityPanelPIPView };