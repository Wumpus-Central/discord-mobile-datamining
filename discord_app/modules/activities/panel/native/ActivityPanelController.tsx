// === Module 16500: BaseActivityPanelController ===

// Module 16500 (BaseActivityPanelController)
import _runPrimaryAppCommandOrJoinEmbeddedActivityAll from "_runPrimaryAppCommandOrJoinEmbeddedActivity" /* 9390 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "addApplication" /* 4486 */;
import closure_7 from "module_8517" /* 8517 */;
import closure_8 from "module_9548" /* 9548 */;
import closure_9 from "ensureGuildLoaded" /* 1391 */;
import closure_10 from "participantFromServer" /* 1390 */;
import items3 from "items3" /* 4473 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9387 */;
import { jsx } from "jsxProd" /* 21 */;
import areArraysShallowlyEqual from "areArraysShallowlyEqual" /* 1991 */;

const require = arg1;
class BaseActivityPanelController {
  constructor(arg0) {
    ({ orientationLockStateForApp, mode } = global);
    closure_0 = mode;
    ({ hasConnectedActivity, connectedActivityAppId } = global);
    closure_1 = connectedActivityAppId;
    updateActivityPanelMode = global.updateActivityPanelMode;
    closure_2 = updateActivityPanelMode;
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
    tmp3 = require("useSafeAreaInsets")();
    tmp4 = require("useWindowDimensions")();
    tmp5 = closure_0;
    obj = require("module_4185");
    sharedValue = obj.useSharedValue({ x: -1, y: -1 });
    closure_3 = sharedValue;
    tmp7 = require("usePIPAvoidanceSpecs")(tmp3);
    closure_4 = tmp7;
    obj2 = require("module_4185");
    sharedValue1 = obj2.useSharedValue(closure_16);
    closure_5 = sharedValue1;
    obj3 = closure_5;
    closure_6 = closure_5.useRef(mode);
    tmp9 = require("useActivityWebViewLockManager")();
    closure_7 = tmp9;
    tmp10 = !require("isOrientationLockSupported")();
    closure_8 = tmp10;
    defaultOrientationLockState = orientationLockStateForApp;
    if (orientationLockStateForApp == null) {
      tmp5Result = require("getIsTabletActivitySurface");
      defaultOrientationLockState = tmp5Result.getDefaultOrientationLockState(currentApp);
    }
    closure_9 = defaultOrientationLockState;
    tmp12 = closure_17(tmp4, tmp3.top, defaultOrientationLockState, tmp10);
    closure_10 = tmp12;
    closure_11 = obj3.useRef(connectedActivityAppId);
    tmp5Result1 = require("isVoicePanelEnabled");
    isVoicePanelFullscreen = tmp5Result1.useIsVoicePanelFullscreen();
    tmp14 = require("useHandleOAuthNavigation")();
    tmp5Result2 = require("useNavigatorBackPressHandler");
    navigatorBackPressHandler = tmp5Result2.useNavigatorBackPressHandler(() => {
      let flag = sharedValue1 === closure_1_14.PANEL;
      if (flag) {
        first(tmp.PIP);
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
      if (null != isActivityPanelFullscreen) {
        if (null == ref2.current) {
          if (!isActivityPanelFullscreen(9526)(closure_10.isWindowLandscape, defaultOrientationLockState)) {
            if (!closure_8) {
              first(closure_1_14.LAUNCHING_WITH_ORIENTATION_CHANGE);
            }
          }
          first(closure_1_14.PANEL);
        }
        ref2.current = tmp;
      }
      if (null == isActivityPanelFullscreen) {
        if (null != ref2.current) {
          first(closure_1_14.DISCONNECTED);
        }
      }
      let tmp4 = sharedValue1 === closure_1_14.LAUNCHING_WITH_ORIENTATION_CHANGE;
      if (tmp4) {
        tmp4 = isActivityPanelFullscreen(9526)(closure_10.isWindowLandscape, defaultOrientationLockState);
      }
      if (tmp4) {
        first(closure_1_14.PANEL);
      }
    }, items);
    items1 = [, ];
    items1[0] = mode;
    items1[1] = sharedValue1;
    effect1 = obj3.useEffect(() => {
      let tmp3 = sharedValue1 === closure_1_14.PANEL;
      if (tmp3) {
        tmp3 = ref.current !== tmp2.PANEL;
      }
      if (tmp3) {
        sharedValue1(4307).dismissKeyboard();
        const result = sharedValue1.set(closure_1_16);
        const obj = sharedValue1(4307);
      }
      ref.current = sharedValue1;
    }, items1);
    closure_0 = hasConnectedActivity;
    closure_1 = mode;
    closure_2 = isVoicePanelFullscreen;
    closure_3 = undefined;
    if (orientationLockStateForApp == null) {
      tmp18 = closure_11;
      orientationLockStateForApp = closure_11.UNLOCKED;
    }
    closure_3 = orientationLockStateForApp;
    items2 = [, , , , ];
    items2[0] = connectedActivityAppId;
    items2[1] = hasConnectedActivity;
    items2[2] = mode;
    items2[3] = orientationLockStateForApp;
    items2[4] = isVoicePanelFullscreen;
    layoutEffect = obj3.useLayoutEffect(() => {
      if (!first) {
        if (isActivityPanelFullscreen === closure_1_14.PANEL) {
          if (sharedValue1) {
            isActivityPanelFullscreen(16502)(dependencyMap);
          }
        }
        const result = sharedValue1(8534).restoreDefaultOrientation();
        const obj = sharedValue1(8534);
      }
    }, items2);
    layoutEffect1 = obj3.useLayoutEffect(() => () => callback(table[13]).restoreDefaultOrientation(), []);
    tmp21 = hasConnectedActivity;
    if (hasConnectedActivity) {
      tmp22 = ActivityPanelModes;
      tmp21 = mode === ActivityPanelModes.PANEL;
    }
    closure_0 = hasConnectedActivity;
    closure_1 = tmp21;
    closure_2 = isVoicePanelFullscreen;
    id = obj3.useId();
    closure_3 = id;
    items3 = [, , , ];
    items3[0] = id;
    items3[1] = hasConnectedActivity;
    items3[2] = tmp21;
    items3[3] = isVoicePanelFullscreen;
    layoutEffect2 = obj3.useLayoutEffect(() => {
      if (!first) {
        let fn;
        if (sharedValue1) {
          let state = state2.getState();
          const obj = { key: null, lockEnabled: null };
          obj[0] = closure_3;
          obj[1] = isActivityPanelFullscreen;
          let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
          fn = () => {
            const state = closure_1_8.getState();
            const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: closure_3, lockEnabled: false });
          };
        }
        return fn;
      }
    }, items3);
    closure_0 = sharedValue1;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    tmp5Result3 = require("useIsActivityPanelFullscreen");
    isActivityPanelFullscreen = tmp5Result3.useIsActivityPanelFullscreen();
    closure_1 = isActivityPanelFullscreen;
    tmp26 = closure_4(obj3.useState(false), 2);
    first = tmp26[0];
    closure_2 = first;
    tmp28 = tmp26[1];
    closure_3 = tmp28;
    id1 = obj3.useId();
    closure_4 = id1;
    tmp5Result4 = require("module_4185");
    fn = function l() {
      return sharedValue1.get().gestureActive;
    };
    fn.__closure = { wrapperOffset: sharedValue1 };
    fn.__workletHash = 5299695936442;
    fn.__initData = closure_18;
    fn2 = function s(arg0, arg1) {
      if (arg0 !== arg1) {
        sharedValue1(4185).runOnJS(dependencyMap)(arg0);
        const obj = sharedValue1(4185);
      }
    };
    obj = { runOnJS: require("module_4185").runOnJS, setWrapperGestureInProgress: tmp28 };
    fn2.__closure = obj;
    fn2.__workletHash = 5831467313798;
    fn2.__initData = closure_19;
    animatedReaction = tmp5Result4.useAnimatedReaction(fn, fn2);
    items4 = [, , ];
    items4[0] = isActivityPanelFullscreen;
    items4[1] = first;
    items4[2] = id1;
    effect2 = obj3.useEffect(() => {
      state = state.getState();
      let tmp = isActivityPanelFullscreen;
      if (isActivityPanelFullscreen) {
        tmp = first;
      }
      let freezeLock = state.requestFreezeLock({ lockEnabled: tmp, key: id1 });
      return () => {
        const state = closure_1_7.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: closure_4 });
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
    obj1 = { value: obj3.useMemo(() => ({ mode: sharedValue1, setMode: first, wrapperDimensions: closure_10, pipState: closure_3, pipAvoidanceSpecs: id1, wrapperOffset: sharedValue1, useActivityWebViewLock: closure_7 }), items5), children };
    return jsx(context.Provider, obj1);
  }
}
({ OrientationLockState: unpackModuleId, ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ACTIVITY_LANDSCAPE_ASPECT_RATIO: map1 } = items3);
let closure_16 = { x: 0, y: 0, gestureActive: false };
let closure_17 = areArraysShallowlyEqual.cachedFunction((arg0, arg1, arg2, arg3) => {
  ({ width, height } = arg0);
  if (constants.LANDSCAPE === arg2) {
    if (arg3) {
      if (!tmp) {
        let obj = { width: null, height: null, isLandscape: true, isWindowLandscape: null };
        obj[0] = width;
        obj[1] = width * closure_13 - arg1;
        obj[3] = tmp;
      }
      return obj;
    }
    obj = { width: null, height: null, isLandscape: true, isWindowLandscape: true };
    const _Math3 = Math;
    obj[0] = Math.max(width, height);
    const _Math4 = Math;
    obj[1] = Math.min(height, width);
  } else if (tmp2.PORTRAIT === arg2) {
    if (arg3) {
      if (tmp) {
        obj1 = { width: null, height: null, isLandscape: false, isWindowLandscape: null };
        obj1[0] = height * closure_12;
        obj1[1] = height;
        obj1[3] = tmp;
        let obj2 = obj1;
      }
      return obj2;
    }
    obj2 = { width: null, height: null, isLandscape: false, isWindowLandscape: false };
    const _Math = Math;
    obj2[0] = Math.min(width, height);
    const _Math2 = Math;
    obj2[1] = Math.max(height, width) - arg1;
  } else {
    const UNLOCKED = tmp2.UNLOCKED;
    obj = { width: null, height: null, isLandscape: null, isWindowLandscape: null };
    obj[0] = width;
    let diff = height;
    if (!tmp) {
      diff = height - arg1;
    }
    obj[1] = diff;
    obj[2] = tmp;
    obj[3] = tmp;
    return obj;
  }
});
let closure_18 = { code: "function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}" };
let closure_19 = { code: "function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}" };
let result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityPanelController.tsx");

export default function ActivityPanelController(children) {
  let mode;
  let connectedActivityInTextChannelId;
  let obj = mode(589);
  const items = [closure_10, closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = store;
    const activityPanelMode = store.getActivityPanelMode();
    const connectedActivityLocation = store.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (selfEmbeddedActivityForLocation != null) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    let application;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    const embeddedActivityLocationChannelId = mode(table[27]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    obj = { mode: activityPanelMode, connectedActivityInTextChannelId: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, orientationLockStateForApp: null };
    let tmp9;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(table[28])(embeddedActivityLocationChannelId)) {
        tmp9 = embeddedActivityLocationChannelId;
      }
    }
    obj[1] = tmp9;
    obj[2] = null != selfEmbeddedActivityForLocation;
    obj[3] = applicationId;
    obj[4] = application;
    let orientationLockStateForApp;
    if (null != applicationId) {
      orientationLockStateForApp = obj.getOrientationLockStateForApp(applicationId);
    }
    obj[5] = orientationLockStateForApp;
    return obj;
  }, []);
  mode = stateFromStoresObject.mode;
  connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
  const items1 = [mode, connectedActivityInTextChannelId];
  ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const effect = React.useEffect(() => {
    if (mode === closure_1_14.PANEL) {
      const channel = closure_1_9.getChannel(connectedActivityInTextChannelId);
      if (undefined !== channel) {
        let obj = connectedActivityInTextChannelId(closure_1_3[29]);
        obj = { guildId: null, channelId: null };
        ({ guild_id: obj2[0], id: obj2[1] } = channel);
        const channel1 = obj.selectChannel(obj);
        mode(closure_1_3[30]).transitionToChannel(channel.id);
        const obj3 = mode(closure_1_3[30]);
      }
    }
  }, items1);
  obj = { context: connectedActivityInTextChannelId(16508), orientationLockStateForApp, mode, hasConnectedActivity, connectedActivityAppId, currentApp, updateActivityPanelMode: _runPrimaryAppCommandOrJoinEmbeddedActivityAll.updateActivityPanelMode, children: children.children };
  return <BaseActivityPanelController context={connectedActivityInTextChannelId(16508)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={_runPrimaryAppCommandOrJoinEmbeddedActivityAll.updateActivityPanelMode}>{arg0.children}</BaseActivityPanelController>;
};
export { BaseActivityPanelController };