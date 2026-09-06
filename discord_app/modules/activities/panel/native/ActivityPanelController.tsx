// === Module 17007: ActivityPanelController ===

// Module 17007 (ActivityPanelController)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import DeviceOrientation from "DeviceOrientation" /* 8332 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 9504 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 9636 */;
import applyActivityOrientationLockDefault from "applyActivityOrientationLock" /* 17009 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import AppFreezeStore from "AppFreezeStore" /* 8290 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 9658 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
class BaseActivityPanelController {
  constructor(arg0) {
    ({ orientationLockStateForApp, mode } = global);
    ({ hasConnectedActivity, connectedActivityAppId } = global);
    updateActivityPanelMode = global.updateActivityPanelMode;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    tmp2 = closure_3;
    ({ children, context, currentApp } = global);
    tmp = connectedActivityAppId;
    tmp3 = connectedActivityAppId(closure_3[15])();
    tmp4 = connectedActivityAppId(closure_3[16])();
    tmp5 = mode;
    obj = mode(closure_3[12]);
    sharedValue = obj.useSharedValue({ x: -1, y: -1 });
    closure_3 = sharedValue;
    tmp7 = connectedActivityAppId(closure_3[17])(tmp3);
    closure_4 = tmp7;
    obj2 = mode(closure_3[12]);
    sharedValue1 = obj2.useSharedValue(closure_16);
    closure_5 = sharedValue1;
    obj3 = closure_5;
    closure_6 = closure_5.useRef(mode);
    tmp9 = connectedActivityAppId(closure_3[18])();
    closure_7 = tmp9;
    tmp10 = !connectedActivityAppId(closure_3[19])();
    closure_8 = tmp10;
    defaultOrientationLockState = orientationLockStateForApp;
    if (orientationLockStateForApp == null) {
      tmp5Result = tmp5(tmp2[20]);
      defaultOrientationLockState = tmp5Result.getDefaultOrientationLockState(currentApp);
    }
    closure_9 = defaultOrientationLockState;
    tmp12 = closure_17(tmp4, tmp3.top, defaultOrientationLockState, tmp10);
    closure_10 = tmp12;
    closure_11 = obj3.useRef(connectedActivityAppId);
    tmp5Result1 = tmp5(tmp2[21]);
    isVoicePanelFullscreen = tmp5Result1.useIsVoicePanelFullscreen();
    tmp14 = tmp(tmp2[22])();
    tmp5Result2 = tmp5(tmp2[23]);
    navigatorBackPressHandler = tmp5Result2.useNavigatorBackPressHandler(() => {
      let flag = mode === ActivityPanelModes.PANEL;
      if (flag) {
        updateActivityPanelMode(tmp.PIP);
        flag = true;
      }
      return flag;
    });
    items = [, , , , , ];
    items[0] = connectedActivityAppId;
    items[1] = defaultOrientationLockState;
    items[2] = mode;
    items[3] = tmp12.isWindowLandscape;
    items[4] = tmp10;
    items[5] = updateActivityPanelMode;
    effect = obj3.useEffect(() => {
      if (null != connectedActivityAppId) {
        if (null == ref2.current) {
          if (!doesOrientationMatchLockStateDefault(wrapperDimensions.isWindowLandscape, defaultOrientationLockState)) {
            if (!closure_8) {
              updateActivityPanelMode(ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE);
            }
          }
          updateActivityPanelMode(ActivityPanelModes.PANEL);
        }
        ref2.current = connectedActivityAppId;
      }
      if (null == connectedActivityAppId) {
        if (null != ref2.current) {
          updateActivityPanelMode(ActivityPanelModes.DISCONNECTED);
        }
      }
      let tmp4 = mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE;
      if (tmp4) {
        tmp4 = doesOrientationMatchLockStateDefault(wrapperDimensions.isWindowLandscape, defaultOrientationLockState);
      }
      if (tmp4) {
        updateActivityPanelMode(ActivityPanelModes.PANEL);
      }
    }, items);
    items1 = [, ];
    items1[0] = mode;
    items1[1] = sharedValue1;
    effect1 = obj3.useEffect(() => {
      let tmp3 = mode === ActivityPanelModes.PANEL;
      if (tmp3) {
        tmp3 = ref.current !== tmp2.PANEL;
      }
      if (tmp3) {
        ChatInputUtils.dismissKeyboard();
        const result = sharedValue1.set(closure_16);
      }
      ref.current = mode;
    }, items1);
    closure_129_0 = hasConnectedActivity;
    closure_129_1 = mode;
    closure_129_2 = isVoicePanelFullscreen;
    closure_129_3 = undefined;
    if (orientationLockStateForApp == null) {
      tmp18 = closure_11;
      orientationLockStateForApp = closure_11.UNLOCKED;
    }
    closure_129_3 = orientationLockStateForApp;
    items2 = [, , , , ];
    items2[0] = connectedActivityAppId;
    items2[1] = hasConnectedActivity;
    items2[2] = mode;
    items2[3] = orientationLockStateForApp;
    items2[4] = isVoicePanelFullscreen;
    layoutEffect = obj3.useLayoutEffect(() => {
      if (!updateActivityPanelMode) {
        if (connectedActivityAppId === ActivityPanelModes.PANEL) {
          if (mode) {
            applyActivityOrientationLockDefault(sharedValue);
          }
        }
        const result = DeviceOrientation.restoreDefaultOrientation();
      }
    }, items2);
    layoutEffect1 = obj3.useLayoutEffect(() => () => mode(sharedValue[13]).restoreDefaultOrientation(), []);
    tmp21 = hasConnectedActivity;
    if (hasConnectedActivity) {
      tmp22 = ActivityPanelModes;
      tmp21 = mode === ActivityPanelModes.PANEL;
    }
    closure_130_0 = hasConnectedActivity;
    closure_130_1 = tmp21;
    closure_130_2 = isVoicePanelFullscreen;
    id = obj3.useId();
    closure_130_3 = id;
    items3 = [, , , ];
    items3[0] = id;
    items3[1] = hasConnectedActivity;
    items3[2] = tmp21;
    items3[3] = isVoicePanelFullscreen;
    layoutEffect2 = obj3.useLayoutEffect(() => {
      if (!updateActivityPanelMode) {
        let fn;
        if (mode) {
          let state = SafeAreaDisabledStore.getState();
          const obj = { key: sharedValue, lockEnabled: connectedActivityAppId };
          let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
          fn = () => {
            state = state.getState();
            const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
          };
        }
        return fn;
      }
    }, items3);
    closure_131_0 = sharedValue1;
    closure_131_1 = undefined;
    closure_131_2 = undefined;
    closure_131_3 = undefined;
    closure_131_4 = undefined;
    tmp5Result3 = tmp5(tmp2[11]);
    isActivityPanelFullscreen = tmp5Result3.useIsActivityPanelFullscreen();
    closure_131_1 = isActivityPanelFullscreen;
    tmp26 = closure_4(obj3.useState(false), 2);
    first = tmp26[0];
    closure_131_2 = first;
    tmp28 = tmp26[1];
    closure_131_3 = tmp28;
    id1 = obj3.useId();
    closure_131_4 = id1;
    tmp5Result4 = tmp5(tmp2[12]);
    fn = function l() {
      return mode.get().gestureActive;
    };
    fn.__closure = { wrapperOffset: sharedValue1 };
    fn.__workletHash = 5299695936442;
    fn.__initData = closure_18;
    fn2 = function s(arg0, arg1) {
      if (arg0 !== arg1) {
        ReanimatedRexport.runOnJS(sharedValue)(arg0);
      }
    };
    obj = { runOnJS: tmp5(tmp2[12]).runOnJS, setWrapperGestureInProgress: tmp28 };
    fn2.__closure = obj;
    fn2.__workletHash = 5831467313798;
    fn2.__initData = closure_19;
    animatedReaction = tmp5Result4.useAnimatedReaction(fn, fn2);
    items4 = [, , ];
    items4[0] = isActivityPanelFullscreen;
    items4[1] = first;
    items4[2] = id1;
    effect2 = obj3.useEffect(() => {
      let state = AppFreezeStore.getState();
      let tmp = connectedActivityAppId;
      if (connectedActivityAppId) {
        tmp = updateActivityPanelMode;
      }
      let freezeLock = state.requestFreezeLock({ lockEnabled: tmp, key });
      return () => {
        state = state.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key });
      };
    }, items4);
    items5 = [, , , , , , ];
    items5[0] = mode;
    items5[1] = tmp7;
    items5[2] = sharedValue;
    items5[3] = updateActivityPanelMode;
    items5[4] = tmp9;
    items5[5] = tmp12;
    items5[6] = sharedValue1;
    obj1 = { value: obj3.useMemo(() => ({ mode, setMode: updateActivityPanelMode, wrapperDimensions, pipState: sharedValue, pipAvoidanceSpecs, wrapperOffset: sharedValue1, useActivityWebViewLock }), items5), children };
    return jsx(context.Provider, obj1);
  }
}
const Constants = fn(1920);
({ OrientationLockState: closure_11, ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ACTIVITY_LANDSCAPE_ASPECT_RATIO: map1 } = Constants);
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const jsx = fn(21).jsx;
let closure_16 = { x: 0, y: 0, gestureActive: false };
const FunctionUtils = fn(1933);
let closure_17 = FunctionUtils.cachedFunction((arg0, arg1, arg2, arg3) => {
  ({ width, height } = arg0);
  if (constants.LANDSCAPE === arg2) {
    if (arg3) {
      if (!tmp) {
        let size = { width, height: width * map1 - arg1, isLandscape: true, isWindowLandscape: tmp };
      }
      return size;
    }
    const size1 = { width: null, height: null, isLandscape: true, isWindowLandscape: true };
    const _Math3 = Math;
    size1.width = Math.max(width, height);
    const _Math4 = Math;
    size1.height = Math.min(height, width);
    size = size1;
  } else if (constants.PORTRAIT === arg2) {
    if (arg3) {
      if (tmp) {
        const size2 = { width: height * closure_1_12, height, isLandscape: false, isWindowLandscape: tmp };
        let size3 = size2;
      }
      return size3;
    }
    size3 = { width: null, height: null, isLandscape: false, isWindowLandscape: false };
    const _Math = Math;
    size3.width = Math.min(width, height);
    const _Math2 = Math;
    size3.height = Math.max(height, width) - arg1;
  } else {
    const UNLOCKED = constants.UNLOCKED;
    const size4 = { width, height: null, isLandscape: null, isWindowLandscape: null };
    let diff = height;
    if (!tmp) {
      diff = height - arg1;
    }
    size4.height = diff;
    size4.isLandscape = tmp;
    size4.isWindowLandscape = tmp;
    return size4;
  }
});
const collapsedCategories = { code: "function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}" };
const __initData2 = { code: "function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelController.tsx");

export default function ActivityPanelController(children) {
  let mode;
  let obj = mode(504);
  const items = [EmbeddedActivitiesStore, ApplicationStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = EmbeddedActivitiesStore;
    const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (selfEmbeddedActivityForLocation != null) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    application = undefined;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    const embeddedActivityLocationChannelId = mode(dependencyMap[27]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    obj = { mode: activityPanelMode, connectedActivityInTextChannelId: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, orientationLockStateForApp: null };
    let tmp9;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(dependencyMap[28])(embeddedActivityLocationChannelId)) {
        tmp9 = embeddedActivityLocationChannelId;
      }
    }
    obj.connectedActivityInTextChannelId = tmp9;
    obj.hasConnectedActivity = null != selfEmbeddedActivityForLocation;
    obj.connectedActivityAppId = applicationId;
    obj.currentApp = application;
    let orientationLockStateForApp;
    if (null != applicationId) {
      orientationLockStateForApp = obj.getOrientationLockStateForApp(applicationId);
    }
    obj.orientationLockStateForApp = orientationLockStateForApp;
    return obj;
  }, []);
  mode = stateFromStoresObject.mode;
  const connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
  const items1 = [mode, connectedActivityInTextChannelId];
  ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const effect = noop.useEffect(() => {
    if (mode === ActivityPanelModes.PANEL) {
      const channel = ChannelStore.getChannel(connectedActivityInTextChannelId);
      if (undefined !== channel) {
        const obj = { guildId: null, channelId: null };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
        const channel1 = obj.selectChannel(obj);
        transitionToChannel.transitionToChannel(channel.id);
      }
    }
  }, items1);
  obj = { context: connectedActivityInTextChannelId(17015), orientationLockStateForApp, mode, hasConnectedActivity, connectedActivityAppId, currentApp, updateActivityPanelMode: EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode, children: children.children };
  return <BaseActivityPanelController context={connectedActivityInTextChannelId(17015)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode}>{children.children}</BaseActivityPanelController>;
};
export { BaseActivityPanelController };