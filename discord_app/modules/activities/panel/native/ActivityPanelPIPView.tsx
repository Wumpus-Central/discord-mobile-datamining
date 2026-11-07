// === Module 19491: ActivityPanelPIPView ===

// Module 19491 (ActivityPanelPIPView)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11367 */;
import EmbeddedActivityViewDefault from "EmbeddedActivityView" /* 11957 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 19489 */;
import useMorphablePanelGestureDefault from "useMorphablePanelGesture" /* 19494 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 12011 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;

require = fn;
class BaseActivityPanelPIPView {
  constructor(arg0) {
    ({ transitionState, hasActivity, context } = global);
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    height = undefined;
    ({ children, transitionCleanUp, pipOrientationLockState } = global);
    tmp = closure_20();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[16]);
    items = [];
    items[0] = closure_5;
    tmp5 = closure_1;
    stateFromStores = obj.useStateFromStores(items, () => _undefined2.useReducedMotion);
    tmp6 = closure_1(closure_2[17])();
    obj2 = height;
    tmp7 = closure_1(closure_2[15])();
    context1 = height.useContext(context);
    wrapperOffset = context1.wrapperOffset;
    closure_0 = wrapperOffset;
    setMode = context1.setMode;
    closure_1 = setMode;
    ({ pipState, pipAvoidanceSpecs, wrapperDimensions } = context1);
    obj3 = closure_0(closure_2[18]);
    lockedWebView = obj3.useLockedWebView({ transitionState, hasActivity, context });
    renderWebView = lockedWebView.renderWebView;
    items1 = [];
    items1[0] = wrapperOffset;
    effect = height.useEffect(() => {
      updateSharedValueIfChangedDefault(c0, { gestureActive: false });
    }, items1);
    tmp11 = closure_6((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    obj4 = closure_0(closure_2[20]);
    items2 = [, , , , , , , , , , , , , , , , , , , , , ];
    items2[0] = closure_22;
    items2[1] = pipState;
    items2[2] = closure_0(closure_2[21]).getClampedPIPPosition;
    size = closure_9;
    items2[3] = closure_9;
    items2[4] = tmp6;
    items2[5] = tmp7;
    items2[6] = pipAvoidanceSpecs;
    items2[7] = wrapperOffset;
    items2[8] = tmp11;
    items2[9] = lockedWebView.shown;
    items2[10] = stateFromStores;
    items2[11] = closure_16;
    items2[12] = closure_21;
    items2[13] = transitionState;
    items2[14] = closure_0(closure_2[22]).TransitionStates;
    items2[15] = closure_0(closure_2[23]).scheduleOnRN;
    items2[16] = transitionCleanUp;
    items2[17] = closure_0(closure_2[24]).withTiming;
    items2[18] = closure_19;
    items2[19] = closure_0(closure_2[25]).withSpring;
    items2[20] = closure_11;
    items2[21] = closure_12;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    height = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = undefined;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items2;
    class ActivityPanelPIPViewTsx2 {
      constructor() {
        point = closure_0.get();
        x = point.x;
        size = { pipX: x, pipY: point.y, width: closure_2.width, height: closure_2.height, windowDimensions: height, safeArea: closure_4, bottomAvoidanceRegion: closure_5.get().bottom, topAvoidanceRegion: closure_5.get().top, positionOffset: null, disableHorizontalSafeAreas: null };
        width = closure_2;
        sum1 = closure_4;
        tmp = closure_1;
        tmp2 = height;
        obj2 = closure_6;
        value = undefined;
        if (closure_6.get().gestureActive) {
          value = obj2.get();
        }
        size.positionOffset = value;
        size.disableHorizontalSafeAreas = closure_7;
        point2 = tmp(size);
        x2 = point2.x;
        obj3 = closure_8;
        tmp5 = closure_8.get() || closure_9;
        if (tmp5) {
          tmp12 = closure_11;
          items = [, , , , ];
          items[0] = closure_11;
          tmp13 = closure_12;
          items[1] = closure_12;
          tmp14 = closure_13;
          items[2] = closure_13;
          tmp15 = closure_14;
          items[3] = closure_14;
          tmp16 = closure_15;
          items[4] = closure_15;
          tmp17 = items;
          [tmp18, tmp19, tmp20, tmp21, tmp22] = items;
          transitionComplete = function transitionComplete() {
            let flag = arg0;
            if (arg0 === undefined) {
              flag = false;
            }
            if (flag) {
              flag = _undefined === constants.YEETED;
            }
            if (flag) {
              width(height);
            }
          };
          items1 = [, , , ];
          items1[0] = tmp19;
          items1[1] = tmp20;
          items1[2] = tmp21;
          items1[3] = tmp22;
          transitionComplete.__closure = items1;
          num3 = 17198390609646;
          transitionComplete.__workletHash = 17198390609646;
          transitionComplete.__initData = tmp18;
          num4 = 1;
          num5 = 1;
          tmp23 = closure_9;
          if (closure_9) {
            tmp24 = closure_16;
            num6 = 0;
            if (obj3.get()) {
              num6 = 1;
            }
            tmp25 = closure_17;
            str = "animate-always";
            tmp26 = num6;
            tmp27 = transitionComplete;
            num5 = tmp24(num6, closure_17, "animate-always", transitionComplete);
          }
          obj1 = { opacity: null, transform: null };
          obj1.opacity = num5;
          tmp28 = closure_18;
          obj7 = { translateY: null };
          str2 = "animate-always";
          obj7.translateY = tmp28(point2.y, obj2.get().gestureActive ? closure_19 : closure_20, "animate-always");
          items2 = [, ];
          items2[0] = obj7;
          tmp29 = obj2.get().gestureActive ? closure_19 : closure_20;
          tmp30 = undefined;
          if (!tmp23) {
            tmp30 = transitionComplete;
          }
          obj8 = { translateX: null };
          tmp31 = x2;
          tmp32 = tmp29;
          str3 = "animate-always";
          tmp33 = tmp30;
          obj8.translateX = tmp28(x2, tmp29, "animate-always", tmp30);
          items2[1] = obj8;
          obj1.transform = items2;
          return obj1;
        } else {
          num = 0.5;
          if (x >= 0.5) {
            tmp6 = globalThis;
            _Math = Math;
            tmp7 = closure_10;
            sum = tmp2.width + Math.max(sum1.right, closure_10);
            tmp11 = sum;
          } else {
            num2 = 0;
          }
          width = width.width;
          tmp9 = globalThis;
          _Math2 = Math;
          tmp10 = closure_10;
          sum1 = width + Math.max(sum1.right, closure_10);
          sum = -sum1;
        }
        return;
      }
    }
    items3 = [, , , , , , , , , , , , , , , , , , , , ];
    items3[0] = tmp13;
    items3[1] = tmp14;
    items3[2] = tmp15;
    items3[3] = tmp16;
    items3[4] = tmp17;
    items3[5] = tmp18;
    items3[6] = tmp19;
    items3[7] = tmp20;
    items3[8] = tmp21;
    items3[9] = tmp22;
    items3[10] = tmp23;
    items3[11] = tmp24;
    items3[12] = tmp25;
    items3[13] = tmp26;
    items3[14] = tmp27;
    items3[15] = tmp28;
    items3[16] = tmp29;
    items3[17] = tmp30;
    items3[18] = tmp31;
    items3[19] = tmp32;
    items3[20] = tmp33;
    ActivityPanelPIPViewTsx2.__closure = items3;
    ActivityPanelPIPViewTsx2.__workletHash = 9482530480999;
    ActivityPanelPIPViewTsx2.__initData = tmp12;
    animatedStyle = obj4.useAnimatedStyle(ActivityPanelPIPViewTsx2);
    obj1 = { pipWidth: size.width, pipHeight: size.height, pipOrientationLockState, isLandscape: wrapperDimensions.isLandscape };
    size2 = tmp5(tmp3[26])(obj1);
    width = size2.width;
    closure_2 = width;
    height = size2.height;
    items4 = [, ];
    items4[0] = width;
    items4[1] = height;
    items5 = [, , , ];
    items5[0] = closure_23;
    memo = obj2.useMemo(() => {
      const size = { width, height, pointerEvents: "none" };
      return size;
    }, items4);
    items5[1] = tmp2(tmp3[23]).scheduleOnRN;
    items5[2] = setMode;
    items5[3] = closure_10;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    [tmp36, tmp37, tmp38, tmp39] = items5;
    class ActivityPanelPIPViewTsx3 {
      constructor() {
        tmp = closure_0(closure_1, closure_2.PANEL);
        return;
      }
    }
    items6 = [, , ];
    items6[0] = tmp37;
    items6[1] = tmp38;
    items6[2] = tmp39;
    ActivityPanelPIPViewTsx3.__closure = items6;
    ActivityPanelPIPViewTsx3.__workletHash = 10897460805018;
    ActivityPanelPIPViewTsx3.__initData = tmp36;
    items7 = [];
    items7[0] = setMode;
    callback = obj2.useCallback(ActivityPanelPIPViewTsx3, items7);
    obj12 = { panGestureEnabled: true, onTapGestureStart: callback, mode: null, pipState: null, wrapperOffset: null, disableHorizontalSafeAreas: false };
    tmp5Result = tmp5(tmp3[27]);
    obj12.mode = tmp2(tmp3[27]).MorphablePanelModes.PIP;
    obj12.pipState = pipState;
    obj12.wrapperOffset = wrapperOffset;
    items8 = [];
    items8[0] = setMode;
    tmp41Result = tmp5Result(obj12);
    tmp44 = closure_18;
    memo1 = obj2.useMemo(() => {
      const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
      items = [{ name: "activate" }];
      obj.accessibilityActions = items;
      obj.onAccessibilityAction = function onAccessibilityAction() {
        _undefined(constants.PANEL);
      };
      return obj;
    }, items8);
    obj13 = { theme: closure_15.DARK, children: null };
    obj14 = { style: null };
    items9 = [, ];
    items9[0] = tmp.wrapper;
    items9[1] = animatedStyle;
    obj14.style = items9;
    merged = Object.assign(memo1);
    obj15 = { gesture: tmp41Result, children: null };
    tmp46 = closure_4;
    obj16 = { style: tmp.mask, children: null };
    tmp47 = !renderWebView;
    if (renderWebView) {
      tmp47 = !hasActivity;
    }
    tmp44Result = !tmp47;
    if (!tmp47) {
      obj17 = { style: null, children: null };
      obj17.style = memo;
      obj17.children = children;
      tmp44Result = tmp44(tmp46, obj17);
    }
    obj16.children = tmp44Result;
    obj15.children = tmp44(tmp46, obj16);
    obj14.children = tmp44(tmp2(tmp3[29]).GestureDetector, obj15);
    obj13.children = tmp44(tmp5(tmp3[20]).View, obj14);
    return tmp44(tmp2(tmp3[22]).ThemeContextProvider, obj13);
  }
}
const View = fn(17).View;
const ActivityPanelConstants = fn(5781);
const ACTIVITY_PIP_SIZE = ActivityPanelConstants.ACTIVITY_PIP_SIZE;
({ ActivityPanelModes: closure_10, ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_11, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_12, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: map1 } = ActivityPanelConstants);
let closure_14 = fn(19357).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
let ThemeTypes = fn(1072).ThemeTypes;
const PIP_WINDOW_OFFSET = fn(11364).PIP_WINDOW_OFFSET;
const ActivityLayoutMode = fn(11855).ActivityLayoutMode;
let jsx = fn(21).jsx;
let closure_19 = { duration: 300 };
const native = fn(1187);
const boxShadowStyle = native.generateBoxShadowStyle(fn(1187).EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS);
const createStyles = fn(5140);
let obj = { wrapper: null, mask: null };
let merged = Object.assign(ACTIVITY_PIP_SIZE);
const merged1 = Object.assign(boxShadowStyle);
obj.wrapper = { borderRadius: nativeDefault.radii.lg };
let obj4 = { borderRadius: nativeDefault.radii.lg };
const merged2 = Object.assign(ACTIVITY_PIP_SIZE);
obj.mask = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let dependencyMap = createStyles.createStyles(obj);
let closure_21 = { code: "(function transitionComplete_ActivityPanelPIPViewTsx1(finished=false){let[transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(transitionCleanUp);}})" };
let closure_22 = { code: "(function ActivityPanelPIPViewTsx2(){let[pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,_worklet_17198390609646_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT]=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}const transitionComplete=function transitionComplete_ActivityPanelPIPViewTsx1Factory([_worklet_17198390609646_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]){const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(transitionCleanUp);}};transitionComplete.__closure=[transitionState,TransitionStates,scheduleOnRN,transitionCleanUp];transitionComplete.__workletHash=17198390609646;transitionComplete.__initData=_worklet_17198390609646_init_data;return transitionComplete;}([_worklet_17198390609646_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]);return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};})" };
let closure_23 = { code: "(function ActivityPanelPIPViewTsx3(){let[scheduleOnRN,setMode,ActivityPanelModes]=this.__closure;scheduleOnRN(setMode,ActivityPanelModes.PANEL);})" };
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default noop.memo(function ActivityPanelPIPView(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  dependencyMap = undefined;
  activity = undefined;
  let stateFromStores;
  let stateFromStores1;
  let memo;
  items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = transitionState(504).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const obj = { channelId: transitionState(_undefined[30]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), activity: EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation) };
    return obj;
  });
  ({ channelId: c2, activity } = stateFromStoresObject);
  let applicationId;
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  let obj = transitionState(504);
  const items1 = [EmbeddedActivitiesStore];
  stateFromStores = transitionState(504).useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(tmp);
    }
    return pipOrientationLockStateForApp;
  });
  const tmpResult = transitionState(504);
  const items2 = [memo];
  stateFromStores1 = transitionState(504).useStateFromStores(items2, () => ChannelStore.getChannel(c2));
  const tmp8 = transitionCleanUp(1627)();
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
    const obj = { right: { disable: false, override: Math.max(state, num) } };
    return obj;
  }, items3);
  const items4 = [activity, stateFromStores1, memo, stateFromStores, transitionCleanUp, transitionState];
  return activity.useMemo(() => {
    const obj = { transitionState, transitionCleanUp, pipOrientationLockState: stateFromStores, hasActivity: null != activity, context: ActivityPanelStateContextDefault, children: jsx(EmbeddedActivityViewDefault, { channel: stateFromStores1, layoutMode: ActivityLayoutMode.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig: memo }) };
    return <BaseActivityPanelPIPView transitionState={transitionState} transitionCleanUp={transitionCleanUp} pipOrientationLockState={stateFromStores} hasActivity={null != activity} context={ActivityPanelStateContextDefault}>{jsx(EmbeddedActivityViewDefault, { channel: stateFromStores1, layoutMode: ActivityLayoutMode.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig: memo })}</BaseActivityPanelPIPView>;
  }, items4);
});
export function useBaseActivityPanelPIPView() {
  const tmp = useSafeAreaInsetsDefault();
  closure_0 = tmp;
  const obj = { landscapeSafeAreasConfig: null };
  items = [tmp.right];
  obj.landscapeSafeAreasConfig = noop.useMemo(() => {
    let num;
    if (transitionState != null) {
      num = transitionState.right;
    }
    if (num == null) {
      num = 0;
    }
    const obj = { right: { disable: false, override: Math.max(state, num) } };
    return obj;
  }, items);
  return obj;
}
export { BaseActivityPanelPIPView };