// === Module 19498: ActivityPanelController ===

// Module 19498 (ActivityPanelController)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2143 */;
import ChatInputUtils from "ChatInputUtils" /* 5323 */;
import transitionToChannel from "transitionToChannel" /* 5885 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6761 */;
import DeviceOrientation from "DeviceOrientation" /* 8977 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 11889 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 11958 */;
import applyActivityOrientationLockDefault from "applyActivityOrientationLock" /* 19499 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import AppFreezeStore from "AppFreezeStore" /* 8938 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 12011 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;

require = fn;
class BaseActivityPanelController {
  constructor(arg0) {
    ({ orientationLockStateForApp, mode } = global);
    closure_0 = mode;
    ({ hasConnectedActivity, connectedActivityAppId } = global);
    closure_1 = connectedActivityAppId;
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
    tmp = closure_1;
    tmp3 = closure_1(closure_3[17])();
    tmp4 = closure_1(closure_3[18])();
    tmp5 = closure_0;
    obj = closure_0(closure_3[13]);
    sharedValue = obj.useSharedValue({ x: -1, y: -1 });
    closure_3 = sharedValue;
    tmp7 = closure_1(closure_3[19])(tmp3);
    closure_4 = tmp7;
    obj2 = closure_0(closure_3[13]);
    sharedValue1 = obj2.useSharedValue(closure_14);
    closure_5 = sharedValue1;
    obj3 = closure_5;
    closure_6 = closure_5.useRef(mode);
    tmp9 = closure_1(closure_3[20])();
    closure_7 = tmp9;
    tmp10 = !closure_1(closure_3[21])();
    closure_8 = tmp10;
    defaultOrientationLockState = orientationLockStateForApp;
    if (orientationLockStateForApp == null) {
      tmp5Result = tmp5(tmp2[22]);
      defaultOrientationLockState = tmp5Result.getDefaultOrientationLockState(currentApp);
    }
    closure_9 = defaultOrientationLockState;
    tmp12 = closure_15(tmp4, tmp3.top, defaultOrientationLockState, tmp10);
    closure_10 = tmp12;
    closure_11 = obj3.useRef(connectedActivityAppId);
    tmp5Result1 = tmp5(tmp2[23]);
    isVoicePanelFullscreen = tmp5Result1.useIsVoicePanelFullscreen();
    tmp14 = tmp(tmp2[24])();
    tmp5Result2 = tmp5(tmp2[25]);
    navigatorBackPressHandler = tmp5Result2.useNavigatorBackPressHandler(() => {
      let flag = c0 === ActivityPanelModes.PANEL;
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
      if (null != current2) {
        if (null == ref2.current) {
          if (!doesOrientationMatchLockStateDefault(wrapperDimensions.isWindowLandscape, defaultOrientationLockState)) {
            if (!closure_8) {
              updateActivityPanelMode(ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE);
            }
          }
          updateActivityPanelMode(ActivityPanelModes.PANEL);
        }
        ref2.current = current2;
      }
      if (null == current2) {
        if (null != ref2.current) {
          updateActivityPanelMode(ActivityPanelModes.DISCONNECTED);
        }
      }
      let tmp4 = c0 === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE;
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
      let tmp3 = current === ActivityPanelModes.PANEL;
      if (tmp3) {
        tmp3 = ref.current !== tmp2.PANEL;
      }
      if (tmp3) {
        ChatInputUtils.dismissKeyboard();
        const result = sharedValue1.set(closure_14);
      }
      ref.current = current;
    }, items1);
    closure_129_0 = hasConnectedActivity;
    closure_129_1 = mode;
    closure_129_2 = isVoicePanelFullscreen;
    closure_129_3 = undefined;
    if (orientationLockStateForApp == null) {
      orientationLockStateForApp = tmp5(tmp2[11]).EmbeddedActivityOrientationLockState.UNLOCKED;
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
        if (c1 === ActivityPanelModes.PANEL) {
          if (c0) {
            applyActivityOrientationLockDefault(sharedValue);
          }
        }
        const result = DeviceOrientation.restoreDefaultOrientation();
      }
    }, items2);
    layoutEffect1 = obj3.useLayoutEffect(() => () => mode(sharedValue[15]).restoreDefaultOrientation(), []);
    tmp20 = hasConnectedActivity;
    if (hasConnectedActivity) {
      tmp21 = ActivityPanelModes;
      tmp20 = mode === ActivityPanelModes.PANEL;
    }
    closure_130_0 = hasConnectedActivity;
    closure_130_1 = tmp20;
    closure_130_2 = isVoicePanelFullscreen;
    id = obj3.useId();
    closure_130_3 = id;
    items3 = [, , , ];
    items3[0] = id;
    items3[1] = hasConnectedActivity;
    items3[2] = tmp20;
    items3[3] = isVoicePanelFullscreen;
    layoutEffect2 = obj3.useLayoutEffect(() => {
      if (!updateActivityPanelMode) {
        let fn;
        if (c0) {
          state = SafeAreaDisabledStore.getState();
          const obj = { key: sharedValue, lockEnabled };
          let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
          fn = () => {
            state = state.getState();
            const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
          };
        }
        return fn;
      }
    }, items3);
    closure_131_0 = undefined;
    closure_131_1 = undefined;
    closure_131_2 = undefined;
    tmp5Result3 = tmp5(tmp2[12]);
    isActivityPanelFullscreen = tmp5Result3.useIsActivityPanelFullscreen();
    closure_131_0 = isActivityPanelFullscreen;
    tmp25 = closure_4(obj3.useState(false), 2);
    first = tmp25[0];
    closure_131_1 = first;
    id1 = obj3.useId();
    closure_131_2 = id1;
    tmp5Result4 = tmp5(tmp2[13]);
    items4 = [, ];
    items4[0] = closure_16;
    items4[1] = sharedValue1;
    closure_0 = undefined;
    [tmp28, tmp29] = items4;
    class ActivityPanelControllerTsx1 {
      constructor() {
        return closure_0.get().gestureActive;
      }
    }
    items5 = [];
    items5[0] = tmp29;
    ActivityPanelControllerTsx1.__closure = items5;
    ActivityPanelControllerTsx1.__workletHash = 5081102168611;
    ActivityPanelControllerTsx1.__initData = tmp28;
    items6 = [, , ];
    items6[0] = closure_17;
    items6[1] = tmp5(tmp2[14]).scheduleOnRN;
    items6[2] = tmp25[1];
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp30, tmp31, tmp32] = items6;
    class ActivityPanelControllerTsx2 {
      constructor(arg0, arg1) {
        if (global !== fn) {
          tmp = closure_0;
          tmp2 = closure_1;
          tmp3 = closure_0(closure_1, global);
        }
        return;
      }
    }
    items7 = [, ];
    items7[0] = tmp31;
    items7[1] = tmp32;
    ActivityPanelControllerTsx2.__closure = items7;
    ActivityPanelControllerTsx2.__workletHash = 5317338371282;
    ActivityPanelControllerTsx2.__initData = tmp30;
    animatedReaction = tmp5Result4.useAnimatedReaction(ActivityPanelControllerTsx1, ActivityPanelControllerTsx2);
    items8 = [, , ];
    items8[0] = isActivityPanelFullscreen;
    items8[1] = first;
    items8[2] = id1;
    effect2 = obj3.useEffect(() => {
      state = AppFreezeStore.getState();
      let tmp = c0;
      if (c0) {
        tmp = c1;
      }
      let freezeLock = state.requestFreezeLock({ lockEnabled: tmp, key: updateActivityPanelMode });
      return () => {
        state = state.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key });
      };
    }, items8);
    items9 = [, , , , , , ];
    items9[0] = mode;
    items9[1] = tmp7;
    items9[2] = sharedValue;
    items9[3] = updateActivityPanelMode;
    items9[4] = tmp9;
    items9[5] = tmp12;
    items9[6] = sharedValue1;
    obj1 = { value: obj3.useMemo(() => ({ mode, setMode: updateActivityPanelMode, wrapperDimensions, pipState: sharedValue, pipAvoidanceSpecs, wrapperOffset: sharedValue1, useActivityWebViewLock }), items9), children };
    return jsx(context.Provider, obj1);
  }
}
let closure_11 = fn(2142).ACTIVITY_LOCKED_ASPECT_RATIO;
const ActivityPanelModes = fn(5781).ActivityPanelModes;
const jsx = fn(21).jsx;
let closure_14 = { x: 0, y: 0, gestureActive: false };
const FunctionUtils = fn(2158);
const value = FunctionUtils.cachedFunction((arg0, arg1, arg2, arg3) => {
  ({ width, height } = arg0);
  if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === arg2) {
    if (arg3) {
      if (!tmp) {
        let size = { width, height: width * closure_11 - arg1, isLandscape: true, isWindowLandscape: tmp };
      }
      return size;
    }
    const size1 = { width: null, height: null, isLandscape: true, isWindowLandscape: true };
    const _Math3 = Math;
    size1.width = Math.max(width, height);
    const _Math4 = Math;
    size1.height = Math.min(height, width);
    size = size1;
  } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === arg2) {
    if (arg3) {
      if (tmp) {
        const size2 = { width: height * closure_11, height, isLandscape: false, isWindowLandscape: tmp };
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
    const UNLOCKED = EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED;
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
let closure_16 = { code: "(function ActivityPanelControllerTsx1(){let[wrapperOffset]=this.__closure;return wrapperOffset.get().gestureActive;})" };
let closure_17 = { code: "(function ActivityPanelControllerTsx2(gestureActive,previous){let[scheduleOnRN,setWrapperGestureInProgress]=this.__closure;if(gestureActive===previous)return;scheduleOnRN(setWrapperGestureInProgress,gestureActive);})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelController.tsx");

export default function ActivityPanelController(children) {
  let mode;
  items = [EmbeddedActivitiesStore, ApplicationStore];
  const stateFromStoresObject = mode(504).useStateFromStoresObject(items, () => {
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
    const embeddedActivityLocationChannelId = mode(dependencyMap[29]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    const obj3 = { mode: activityPanelMode, connectedActivityInTextChannelId: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, orientationLockStateForApp: null };
    let tmp9;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(dependencyMap[30])(embeddedActivityLocationChannelId)) {
        tmp9 = embeddedActivityLocationChannelId;
      }
    }
    obj3.connectedActivityInTextChannelId = tmp9;
    obj3.hasConnectedActivity = null != selfEmbeddedActivityForLocation;
    obj3.connectedActivityAppId = applicationId;
    obj3.currentApp = application;
    let orientationLockStateForApp;
    if (null != applicationId) {
      orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId);
    }
    obj3.orientationLockStateForApp = orientationLockStateForApp;
    return obj3;
  }, []);
  mode = stateFromStoresObject.mode;
  const connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
  const items1 = [mode, connectedActivityInTextChannelId];
  ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const effect = noop.useEffect(() => {
    if (mode === ActivityPanelModes.PANEL) {
      const channel = ChannelStore.getChannel(connectedActivityInTextChannelId);
      if (undefined !== channel) {
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
        const channel1 = SelectedChannelActionCreatorsDefault.selectChannel({ guildId: null, channelId: null });
        const obj4 = { guildId: null, channelId: null };
        transitionToChannel.transitionToChannel(channel.id);
      }
    }
  }, items1);
  let obj = mode(504);
  return <BaseActivityPanelController context={connectedActivityInTextChannelId(19502)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode}>{children.children}</BaseActivityPanelController>;
};
export { BaseActivityPanelController };