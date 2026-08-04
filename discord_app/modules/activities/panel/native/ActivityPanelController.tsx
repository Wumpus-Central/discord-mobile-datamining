import set from "set";
import getIsTabletActivitySurface from "getIsTabletActivitySurface";
import addApplication from "addApplication";
import module_8784 from "module_8784";
import module_10649 from "module_10649";
import ensureGuildLoaded from "ensureGuildLoaded";
import participantFromServer from "participantFromServer";
import items3 from "items3";
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "useHandleOAuthNavigation";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";

let closure_12;
let map1;
let unpackModuleId;
const require = arg1;
class BaseActivityPanelController {
  constructor(arg0) {
    ({ orientationLockStateForApp, mode } = global);
    hasConnectedActivity = mode;
    ({ hasConnectedActivity, connectedActivityAppId } = global);
    hasConnectedActivity = connectedActivityAppId;
    updateActivityPanelMode = global.updateActivityPanelMode;
    UNLOCKED = updateActivityPanelMode;
    currentApp = undefined;
    c4 = undefined;
    c5 = undefined;
    useRef = undefined;
    c7 = undefined;
    useRef = undefined;
    c9 = undefined;
    c10 = undefined;
    useRef = undefined;
    tmp2 = currentApp;
    ({ children, context, currentApp } = global);
    tmp = hasConnectedActivity;
    tmp3 = require("useSafeAreaInsets")();
    tmp4 = require("useWindowDimensions")();
    tmp5 = hasConnectedActivity;
    obj = require("module_4146");
    sharedValue = obj.useSharedValue({ x: -1, y: -1 });
    currentApp = sharedValue;
    tmp7 = require("usePIPAvoidanceSpecs")(tmp3);
    c4 = tmp7;
    obj2 = require("module_4146");
    sharedValue1 = obj2.useSharedValue(jsx);
    c5 = sharedValue1;
    obj3 = c5;
    useRef = c5.useRef(mode);
    tmp9 = require("useActivityWebViewLockManager")();
    c7 = tmp9;
    obj4 = require("getIsTabletActivitySurface");
    isTabletActivitySurface = obj4.getIsTabletActivitySurface();
    useRef = isTabletActivitySurface;
    defaultOrientationLockState = orientationLockStateForApp;
    if (orientationLockStateForApp == null) {
      tmp5Result = require("getIsTabletActivitySurface");
      defaultOrientationLockState = tmp5Result.getDefaultOrientationLockState(currentApp);
    }
    c9 = defaultOrientationLockState;
    tmp12 = f62806(tmp4, tmp3.top, defaultOrientationLockState, isTabletActivitySurface);
    c10 = tmp12;
    useRef = obj3.useRef(connectedActivityAppId);
    tmp5Result1 = require("isVoicePanelEnabled");
    isVoicePanelFullscreen = tmp5Result1.useIsVoicePanelFullscreen();
    tmp14 = require("useHandleOAuthNavigation")();
    tmp5Result2 = require("useNavigatorBackPressHandler");
    navigatorBackPressHandler = tmp5Result2.useNavigatorBackPressHandler(() => {
      let flag = sharedValue1 === outer1_14.PANEL;
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
    items[4] = isTabletActivitySurface;
    items[5] = updateActivityPanelMode;
    effect = obj3.useEffect(() => {
      if (null != isActivityPanelFullscreen) {
        if (null == ref2.current) {
          if (!isActivityPanelFullscreen(_undefined[23])(_undefined3.isWindowLandscape, defaultOrientationLockState)) {
            if (!isTabletActivitySurface) {
              first(outer1_14.LAUNCHING_WITH_ORIENTATION_CHANGE);
            }
          }
          first(outer1_14.PANEL);
        }
        ref2.current = tmp;
      }
      if (null == isActivityPanelFullscreen) {
        if (null != ref2.current) {
          first(outer1_14.DISCONNECTED);
        }
      }
      let tmp4 = sharedValue1 === outer1_14.LAUNCHING_WITH_ORIENTATION_CHANGE;
      if (tmp4) {
        tmp4 = isActivityPanelFullscreen(_undefined[23])(_undefined3.isWindowLandscape, defaultOrientationLockState);
      }
      if (tmp4) {
        first(outer1_14.PANEL);
      }
    }, items);
    items1 = [, ];
    items1[0] = mode;
    items1[1] = sharedValue1;
    effect1 = obj3.useEffect(() => {
      let tmp3 = sharedValue1 === outer1_14.PANEL;
      if (tmp3) {
        tmp3 = ref.current !== tmp2.PANEL;
      }
      if (tmp3) {
        sharedValue1(_undefined[24]).dismissKeyboard();
        const result = sharedValue1.set(outer1_16);
        const obj = sharedValue1(_undefined[24]);
      }
      ref.current = sharedValue1;
    }, items1);
    hasConnectedActivity = mode;
    UNLOCKED = isVoicePanelFullscreen;
    currentApp = undefined;
    if (orientationLockStateForApp == null) {
      tmp18 = useRef;
      orientationLockStateForApp = useRef.UNLOCKED;
    }
    currentApp = orientationLockStateForApp;
    items2 = [, , , , ];
    items2[0] = connectedActivityAppId;
    items2[1] = hasConnectedActivity;
    items2[2] = mode;
    items2[3] = orientationLockStateForApp;
    items2[4] = isVoicePanelFullscreen;
    layoutEffect = obj3.useLayoutEffect(() => {
      if (!first) {
        if (isActivityPanelFullscreen === outer1_14.PANEL) {
          if (sharedValue1) {
            isActivityPanelFullscreen(_undefined[14])(_undefined);
          }
        }
        const result = sharedValue1(_undefined[13]).restoreDefaultOrientation();
        const obj = sharedValue1(_undefined[13]);
      }
    }, items2);
    layoutEffect1 = obj3.useLayoutEffect(() => () => callback(table[13]).restoreDefaultOrientation(), []);
    tmp21 = hasConnectedActivity;
    if (hasConnectedActivity) {
      tmp22 = ActivityPanelModes;
      tmp21 = mode === ActivityPanelModes.PANEL;
    }
    hasConnectedActivity = tmp21;
    UNLOCKED = isVoicePanelFullscreen;
    id = obj3.useId();
    currentApp = id;
    items3 = [, , , ];
    items3[0] = id;
    items3[1] = hasConnectedActivity;
    items3[2] = tmp21;
    items3[3] = isVoicePanelFullscreen;
    layoutEffect2 = obj3.useLayoutEffect(() => {
      if (!first) {
        let fn;
        if (sharedValue1) {
          let state = isTabletActivitySurface.getState();
          const obj = { key: null, lockEnabled: null };
          obj[0] = c3;
          obj[1] = isActivityPanelFullscreen;
          let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
          fn = () => {
            const state = outer1_8.getState();
            const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: closure_3, lockEnabled: false });
          };
        }
        return fn;
      }
    }, items3);
    hasConnectedActivity = sharedValue1;
    hasConnectedActivity = undefined;
    UNLOCKED = undefined;
    currentApp = undefined;
    c4 = undefined;
    tmp5Result3 = require("useIsActivityPanelFullscreen");
    isActivityPanelFullscreen = tmp5Result3.useIsActivityPanelFullscreen();
    hasConnectedActivity = isActivityPanelFullscreen;
    tmp26 = c4(obj3.useState(false), 2);
    first = tmp26[0];
    UNLOCKED = first;
    tmp28 = tmp26[1];
    currentApp = tmp28;
    id1 = obj3.useId();
    c4 = id1;
    tmp5Result4 = require("module_4146");
    fn = function l() {
      return sharedValue1.get().gestureActive;
    };
    fn.__closure = { wrapperOffset: sharedValue1 };
    fn.__workletHash = 5299695936442;
    fn.__initData = f62806;
    fn2 = function s(arg0, arg1) {
      if (arg0 !== arg1) {
        sharedValue1(_undefined[12]).runOnJS(_undefined)(arg0);
        const obj = sharedValue1(_undefined[12]);
      }
    };
    obj = { runOnJS: require("module_4146").runOnJS, setWrapperGestureInProgress: tmp28 };
    fn2.__closure = obj;
    fn2.__workletHash = 5831467313798;
    fn2.__initData = f62806;
    animatedReaction = tmp5Result4.useAnimatedReaction(fn, fn2);
    items4 = [, , ];
    items4[0] = isActivityPanelFullscreen;
    items4[1] = first;
    items4[2] = id1;
    effect2 = obj3.useEffect(() => {
      let state = _undefined2.getState();
      let tmp = isActivityPanelFullscreen;
      if (isActivityPanelFullscreen) {
        tmp = first;
      }
      let freezeLock = state.requestFreezeLock({ lockEnabled: tmp, key: id1 });
      return () => {
        const state = outer1_7.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: set });
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
    obj1 = { value: obj3.useMemo(() => ({ mode: sharedValue1, setMode: first, wrapperDimensions: c10, pipState: c3, pipAvoidanceSpecs: id1, wrapperOffset: sharedValue1, useActivityWebViewLock: c7 }), items5), children };
    return jsx(context.Provider, obj1);
  }
}
({ OrientationLockState: unpackModuleId, ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ACTIVITY_LANDSCAPE_ASPECT_RATIO: map1 } = items3);
let closure_16 = { x: 0, y: 0, gestureActive: false };
let closure_17 = areArraysShallowlyEqual.cachedFunction((arg0, arg1, arg2, arg3) => {
  let height;
  let width;
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
        const obj1 = { width: null, height: null, isLandscape: false, isWindowLandscape: null };
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
let result = require("addApplication").fileFinishedImporting("modules/activities/panel/native/ActivityPanelController.tsx");

export default function ActivityPanelController(children) {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let orientationLockStateForApp;
  let mode;
  let connectedActivityInTextChannelId;
  let obj = mode(589);
  const items = [participantFromServer, addApplication];
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
    const embeddedActivityLocationChannelId = mode(table[26]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    obj = { mode: activityPanelMode, connectedActivityInTextChannelId: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, orientationLockStateForApp: null };
    let tmp9;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(table[27])(embeddedActivityLocationChannelId)) {
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
    if (mode === outer1_14.PANEL) {
      const channel = outer1_9.getChannel(connectedActivityInTextChannelId);
      if (undefined !== channel) {
        let obj = connectedActivityInTextChannelId(outer1_3[28]);
        obj = { guildId: null, channelId: null };
        ({ guild_id: obj2[0], id: obj2[1] } = channel);
        const channel1 = obj.selectChannel(obj);
        mode(outer1_3[29]).transitionToChannel(channel.id);
        const obj3 = mode(outer1_3[29]);
      }
    }
  }, items1);
  obj = { context: connectedActivityInTextChannelId(15960), orientationLockStateForApp, mode, hasConnectedActivity, connectedActivityAppId, currentApp, updateActivityPanelMode: importAll(10513).updateActivityPanelMode, children: children.children };
  return <BaseActivityPanelController context={connectedActivityInTextChannelId(15960)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={importAll(10513).updateActivityPanelMode}>{arg0.children}</BaseActivityPanelController>;
};
export { BaseActivityPanelController };