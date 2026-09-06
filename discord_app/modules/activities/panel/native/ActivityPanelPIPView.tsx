// === Module 17017: ActivityPanelPIPView ===

// Module 17017 (ActivityPanelPIPView)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import native2 from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import spring from "spring" /* 4974 */;
import EmbeddedActivityViewDefault from "EmbeddedActivityView" /* 9635 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11354 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 17015 */;
import MorphablePanelUtils from "MorphablePanelUtils" /* 17019 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 9658 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
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
    obj = transitionState(closure_2[16]);
    items = [];
    items[0] = wrapperOffset;
    stateFromStores = obj.useStateFromStores(items, () => wrapperOffset.useReducedMotion);
    closure_2 = stateFromStores;
    tmp3 = transitionCleanUp(closure_2[17])();
    closure_3 = tmp3;
    tmp4 = transitionCleanUp(closure_2[15])();
    closure_4 = tmp4;
    context = closure_3.useContext(context);
    wrapperOffset = context.wrapperOffset;
    setMode = context.setMode;
    pipState = context.pipState;
    pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    obj2 = transitionState(closure_2[18]);
    lockedWebView = obj2.useLockedWebView({ transitionState, context });
    shown = lockedWebView.shown;
    renderWebView = lockedWebView.renderWebView;
    items1 = [];
    items1[0] = wrapperOffset;
    effect = closure_3.useEffect(() => {
      updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
    }, items1);
    tmp8 = setMode((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    closure_10 = tmp8;
    obj3 = transitionState(closure_2[20]);
    class J {
      constructor() {
        point = pipState.get();
        x = point.x;
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[21]);
        size = { pipX: x, pipY: point.y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
        width = ACTIVITY_PIP_SIZE;
        sum1 = closure_4;
        tmp3 = closure_3;
        obj3 = wrapperOffset;
        value = undefined;
        if (wrapperOffset.get().gestureActive) {
          value = obj3.get();
        }
        size.positionOffset = value;
        size.disableHorizontalSafeAreas = closure_10;
        point2 = obj.getClampedPIPPosition(size);
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
              flag = closure_1_0 === transitionState(stateFromStores[22]).TransitionStates.YEETED;
            }
            if (flag) {
              transitionState(stateFromStores[20]).runOnJS(transitionCleanUp)();
              const obj = transitionState(stateFromStores[20]);
            }
          };
          obj = { transitionState: null, TransitionStates: null, runOnJS: null, transitionCleanUp: null };
          tmp13 = transitionState;
          obj.transitionState = transitionState;
          obj.TransitionStates = tmp(tmp2[22]).TransitionStates;
          obj.runOnJS = tmp(tmp2[20]).runOnJS;
          tmp14 = transitionCleanUp;
          obj.transitionCleanUp = transitionCleanUp;
          transitionComplete.__closure = obj;
          num3 = 7625774548373;
          transitionComplete.__workletHash = 7625774548373;
          tmp15 = closure_22;
          transitionComplete.__initData = closure_22;
          num4 = 1;
          num5 = 1;
          tmp16 = closure_2;
          if (closure_2) {
            tmpResult = tmp(tmp2[23]);
            num6 = 0;
            if (obj4.get()) {
              num6 = 1;
            }
            tmp17 = closure_19;
            str = "animate-always";
            tmp18 = tmpResult;
            tmp19 = num6;
            tmp20 = transitionComplete;
            num5 = tmpResult.withTiming(num6, closure_19, "animate-always", transitionComplete);
          }
          obj1 = { opacity: null, transform: null };
          obj1.opacity = num5;
          tmpResult1 = tmp(tmp2[24]);
          obj2 = { translateY: null };
          str2 = "animate-always";
          obj2.translateY = tmpResult1.withSpring(point2.y, obj3.get().gestureActive ? closure_12 : closure_13, "animate-always");
          items = [, ];
          items[0] = obj2;
          tmpResult2 = tmp(tmp2[24]);
          tmp21 = obj3.get().gestureActive ? closure_12 : closure_13;
          tmp22 = undefined;
          if (!tmp16) {
            tmp22 = transitionComplete;
          }
          obj3 = { translateX: null };
          tmp23 = tmpResult2;
          tmp24 = x2;
          tmp25 = tmp21;
          str3 = "animate-always";
          tmp26 = tmp22;
          obj3.translateX = tmpResult2.withSpring(x2, tmp21, "animate-always", tmp22);
          items[1] = obj3;
          obj1.transform = items;
          return obj1;
        } else {
          num = 0.5;
          if (x >= 0.5) {
            tmp7 = globalThis;
            _Math = Math;
            tmp8 = PIP_WINDOW_OFFSET;
            sum = tmp3.width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
            tmp12 = sum;
          } else {
            num2 = 0;
          }
          width = width.width;
          tmp10 = globalThis;
          _Math2 = Math;
          tmp11 = PIP_WINDOW_OFFSET;
          sum1 = width + Math.max(sum1.right, PIP_WINDOW_OFFSET);
          sum = -sum1;
        }
        return;
      }
    }
    obj = { pipState, getClampedPIPPosition: transitionState(closure_2[21]).getClampedPIPPosition, ACTIVITY_PIP_SIZE: closure_10, windowDimensions: tmp3, safeArea: tmp4, pipAvoidanceSpecs, wrapperOffset, disableHorizontalSafeAreas: tmp8, shown, reduceMotion: stateFromStores, PIP_WINDOW_OFFSET, transitionState, TransitionStates: transitionState(closure_2[22]).TransitionStates, runOnJS: transitionState(closure_2[20]).runOnJS, transitionCleanUp, withTiming: transitionState(closure_2[23]).withTiming, REDUCED_MOTION_TIMING: closure_19, withSpring: transitionState(closure_2[24]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: height, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_13 };
    J.__closure = obj;
    J.__workletHash = 14326479117867;
    J.__initData = closure_21;
    animatedStyle = obj3.useAnimatedStyle(J);
    obj1 = { pipWidth: closure_10.width, pipHeight: closure_10.height, pipOrientationLockState, isLandscape: context.wrapperDimensions.isLandscape };
    size = transitionCleanUp(closure_2[25])(obj1);
    width = size.width;
    height = size.height;
    items2 = [, ];
    items2[0] = width;
    items2[1] = height;
    class W {
      constructor() {
        obj = closure_0(closure_2[20]);
        tmp = obj.runOnJS(setMode)(ActivityPanelModes.PANEL);
        return;
      }
    }
    obj2 = { runOnJS: null, setMode: null, ActivityPanelModes: null };
    memo = closure_3.useMemo(() => {
      const size = { width, height, pointerEvents: "none" };
      return size;
    }, items2);
    obj2.runOnJS = transitionState(closure_2[20]).runOnJS;
    obj2.setMode = setMode;
    obj2.ActivityPanelModes = width;
    W.__closure = obj2;
    W.__workletHash = 2951177166574;
    W.__initData = closure_23;
    items3 = [];
    items3[0] = setMode;
    callback = closure_3.useCallback(W, items3);
    obj3 = { panGestureEnabled: true, onTapGestureStart: callback, mode: null, pipState: null, wrapperOffset: null, disableHorizontalSafeAreas: false };
    tmp12 = transitionCleanUp(closure_2[26]);
    obj3.mode = transitionState(closure_2[26]).MorphablePanelModes.PIP;
    obj3.pipState = pipState;
    obj3.wrapperOffset = wrapperOffset;
    items4 = [];
    items4[0] = setMode;
    tmp12Result = tmp12(obj3);
    tmp15 = jsx;
    memo1 = closure_3.useMemo(() => {
      const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
      const items = [{ name: "activate" }];
      obj.accessibilityActions = items;
      obj.onAccessibilityAction = function onAccessibilityAction() {
        setMode(width.PANEL);
      };
      return obj;
    }, items4);
    obj4 = { theme: ThemeTypes.DARK, children: null };
    obj5 = { style: null };
    items5 = [, ];
    items5[0] = tmp.wrapper;
    items5[1] = animatedStyle;
    obj5.style = items5;
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
      obj8.style = memo;
      obj8.children = children;
      tmp15Result = tmp15(tmp17, obj8);
    }
    obj7.children = tmp15Result;
    obj6.children = tmp15(tmp17, obj7);
    obj5.children = tmp15(transitionState(closure_2[28]).GestureDetector, obj6);
    obj4.children = tmp15(transitionCleanUp(closure_2[20]).View, obj5);
    return tmp15(transitionState(closure_2[22]).ThemeContextProvider, obj4);
  }
}
const View = fn(17).View;
const ActivityLayoutMode = fn(1920).ActivityLayoutMode;
const ActivityPanelConstants = fn(9505);
let ACTIVITY_PIP_SIZE = ActivityPanelConstants.ACTIVITY_PIP_SIZE;
({ ActivityPanelModes: closure_11, ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_12, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: map1, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_14 } = ActivityPanelConstants);
let closure_15 = fn(17018).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const ThemeTypes = fn(1074).ThemeTypes;
const PIP_WINDOW_OFFSET = fn(12274).PIP_WINDOW_OFFSET;
const jsx = fn(21).jsx;
const REDUCED_MOTION_TIMING = { duration: 300 };
let native = fn(1178);
const boxShadowStyle = native.generateBoxShadowStyle(fn(1178).EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS);
const createStyles = fn(4560);
let obj = { wrapper: null, mask: null };
obj = { borderRadius: nativeDefault.radii.lg };
let merged = Object.assign(ACTIVITY_PIP_SIZE);
const merged1 = Object.assign(boxShadowStyle);
obj.wrapper = obj;
native = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged2 = Object.assign(ACTIVITY_PIP_SIZE);
obj.mask = native;
let closure_20 = createStyles.createStyles(obj);
const __initData = { code: "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}" };
const __initData2 = { code: "function transitionComplete_ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
const __initData3 = { code: "function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default noop.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  dependencyMap = undefined;
  activity = undefined;
  let stateFromStores;
  let stateFromStores1;
  let memo;
  const items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = transitionState(504).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const obj = { channelId: transitionState(_undefined[29]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), activity: EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation) };
    return obj;
  });
  ({ channelId: c2, activity } = stateFromStoresObject);
  let applicationId;
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  let tmpResult = tmp(504);
  const items1 = [EmbeddedActivitiesStore];
  stateFromStores = tmpResult.useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(tmp);
    }
    return pipOrientationLockStateForApp;
  });
  tmpResult = tmp(504);
  const items2 = [memo];
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => ChannelStore.getChannel(c2));
  const tmp8 = transitionCleanUp(1611)();
  closure_129_0 = tmp8;
  const items3 = [tmp8.right];
  memo = activity.useMemo(() => {
    let num;
    if (transitionState != null) {
      num = transitionState.right;
    }
    if (num == null) {
      num = 0;
    }
    let obj = { right: null };
    obj = { disable: false, override: Math.max(closure_2_14, num) };
    obj.right = obj;
    return obj;
  }, items3);
  const items4 = [activity, stateFromStores1, memo, stateFromStores, transitionCleanUp, transitionState];
  return activity.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, pipOrientationLockState: stateFromStores, hasActivity: null != activity, context: ActivityPanelStateContextDefault, children: null };
    obj = { channel: stateFromStores1, layoutMode: ActivityLayoutMode.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig: memo };
    obj.children = jsx(EmbeddedActivityViewDefault, { channel: stateFromStores1, layoutMode: ActivityLayoutMode.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig: memo });
    return <BaseActivityPanelPIPView channel={stateFromStores1} layoutMode={ActivityLayoutMode.PIP} portraitSafeAreasConfig={portraitSafeAreasConfig} landscapeSafeAreasConfig={memo} />;
  }, items4);
});
export const useBaseActivityPanelPIPView = function useBaseActivityPanelPIPView() {
  const tmp = useSafeAreaInsetsDefault();
  closure_0 = tmp;
  const obj = { landscapeSafeAreasConfig: null };
  const items = [tmp.right];
  obj.landscapeSafeAreasConfig = noop.useMemo(() => {
    let num;
    if (transitionState != null) {
      num = transitionState.right;
    }
    if (num == null) {
      num = 0;
    }
    let obj = { right: null };
    obj = { disable: false, override: Math.max(closure_2_14, num) };
    obj.right = obj;
    return obj;
  }, items);
  return obj;
};
export { BaseActivityPanelPIPView };