// discord_app/modules/activities/native/EmbeddedActivityView.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager.tsx";
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState.tsx";
import WakeLockDefault from "../../device/native/WakeLock.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";

const require = fn;
function useBaseActivityView(orientationLockState) {
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  const setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  let isResetting;
  let defaultOrientationLockState;
  let first1;
  closure_8 = undefined;
  let isLandscape;
  const setIsResetting = isResetting(defaultOrientationLockState.useState(false), 2);
  isResetting = setIsResetting[0];
  defaultOrientationLockState = orientationLockState(
    setShowLoadingStateForLockingOrientation[9],
  ).getDefaultOrientationLockState(application);
  let id;
  if (application != null) {
    id = application.id;
  }
  const tmpResult = isResetting(defaultOrientationLockState.useState(false), 2);
  first1 = tmpResult[0];
  closure_8 = tmpResult[1];
  const size = showLoadingIndicator(setShowLoadingStateForLockingOrientation[10])();
  isLandscape = size.width > size.height;
  const items = [isLandscape];
  const layoutEffect = obj.useLayoutEffect(() => {
    DispatcherDefault.dispatch({
      type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE",
      screenOrientation: isLandscape ? constants.LANDSCAPE : constants.PORTRAIT,
    });
  }, items);
  const items1 = [id];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    closure_8(false);
  }, items1);
  const items2 = [
    defaultOrientationLockState,
    application,
    orientationLockState,
    isLandscape,
    first1,
    setShowLoadingStateForLockingOrientation,
    setOrientationLockState,
  ];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (!first1) {
      if (null == orientationLockState) {
        if (!doesOrientationMatchLockStateDefault(isLandscape, defaultOrientationLockState)) {
          setShowLoadingStateForLockingOrientation(true);
        }
        if (null != application) {
          setOrientationLockState(tmp10, orientationLockState);
        }
      }
    }
    setShowLoadingStateForLockingOrientation(false);
  }, items2);
  const items3 = [orientationLockState, isLandscape, setShowLoadingStateForLockingOrientation];
  const layoutEffect3 = obj.useLayoutEffect(() => {
    if (doesOrientationMatchLockStateDefault(isLandscape, orientationLockState)) {
      setShowLoadingStateForLockingOrientation(false);
    }
  }, items3);
  const items4 = [showLoadingIndicator, isResetting];
  const layoutEffect4 = obj.useLayoutEffect(() => {
    let tmp = showLoadingIndicator;
    if (!showLoadingIndicator) {
      tmp = isResetting;
    }
    if (!tmp) {
      closure_8(true);
    }
  }, items4);
  return { isResetting, setIsResetting: setIsResetting[1], isLandscape };
}
class ActivityViewLoadingIndicator {
  constructor() {
    obj = { style: closure_16().loadingContainer, children: jsx(ActivityIndicator, { size: "large" }) };
    return jsx(View, obj);
  }
}
class BaseActivityView {
  constructor(arg0) {
    if (global.showLoadingIndicator) {
      tmp10 = jsx;
      tmp11 = ActivityViewLoadingIndicator;
      tmp4 = jsx(ActivityViewLoadingIndicator, {});
    } else {
      tmp4 = null;
      if (!tmp3) {
        tmp5 = jsxs;
        tmp6 = Fragment;
        obj = { children: null };
        tmp7 = jsx;
        tmp8 = closure_1;
        tmp9 = closure_2;
        obj = { wakeLockKey: null };
        obj.wakeLockKey = tmp2;
        items = [,];
        items[0] = jsx(closure_1(closure_2[14]), obj);
        items[1] = tmp;
        obj.children = items;
        tmp4 = jsxs(Fragment, obj);
      }
    }
    return tmp4;
  }
}
let closure_3 = ["ui_density"];
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1920);
({ ActivityLayoutMode: c10, ActivityScreenOrientation: closure_11 } = Constants);
fn(1350).OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4560);
const value = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const memoResult = noop.memo(function EmbeddedActivityViewInner(portraitSafeAreasConfig) {
  ({ channel, layoutMode } = portraitSafeAreasConfig);
  let landscapeSafeAreasConfig = portraitSafeAreasConfig.portraitSafeAreasConfig;
  let setIsResetting;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = currentEmbeddedActivity(9632)();
  dependencyMap = tmp4;
  let obj = layoutMode(504);
  const items = [EmbeddedActivitiesStore];
  const items1 = [tmp4];
  let obj1 = noop;
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let orientationLockStateForApp;
      if (null != closure_2) {
        orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp.id);
      }
      return orientationLockStateForApp;
    },
    items1,
  );
  [tmp8, tmp9] = _slicedToArray(noop.useState(true), 2);
  if (null == currentEmbeddedActivity) {
    obj = { instance_id: "" };
  } else {
    let tmp5Result = tmp5(9637);
    const discordEnvQueryParams = tmp5Result.getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    const tmp38 = _objectWithoutProperties(discordEnvQueryParams, setIsResetting);
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    obj = { instance_id: launchId, location_id: null, launch_id: null };
    let _location = currentEmbeddedActivity.location;
    let id;
    if (_location != null) {
      id = _location.id;
    }
    obj.location_id = id;
    obj.launch_id = currentEmbeddedActivity.launchId;
    const merged = Object.assign(tmp38);
    if (null != currentEmbeddedActivity.proxyTicket) {
      obj.discord_proxy_ticket = currentEmbeddedActivity.proxyTicket;
    }
    let tmp14 = null != channel && null != channel.id;
    if (tmp14) {
      tmp14 = "" !== channel.id;
    }
    if (tmp14) {
      obj.channel_id = channel.id;
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let tmp16 = null != guild_id;
    if (tmp16) {
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      tmp16 = "" !== guild_id1;
    }
    if (tmp16) {
      let guild_id2;
      if (channel != null) {
        guild_id2 = channel.guild_id;
      }
      obj.guild_id = guild_id2;
    }
  }
  currentEmbeddedActivity(9641)({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = obj1.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      const obj = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
      obj.dispatch(obj);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  const callback = obj1.useCallback(() => {
    let obj = EmbeddedActivitiesNativeManagerDefault;
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    obj = { location: _location, applicationId: null };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    obj.applicationId = id;
    obj.leaveActivity(obj);
  }, items3);
  if (tmp4 != null) {
    id = tmp4.id;
  }
  let tmp22 = null == currentEmbeddedActivity;
  if (!tmp22) {
    launchId = undefined;
    if (currentEmbeddedActivity != null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    tmp22 = null == launchId;
  }
  if (!tmp22) {
    tmp22 = tmp8;
  }
  if (!tmp22) {
    tmp22 = null == id;
  }
  if (!tmp22) {
    tmp22 = null == tmp4;
  }
  obj1 = {
    orientationLockState: stateFromStores,
    showLoadingIndicator: tmp22,
    setShowLoadingStateForLockingOrientation: tmp9,
    application: tmp4,
    setOrientationLockState: tmp5(9634).setOrientationLockState,
  };
  const tmp7 = _slicedToArray(noop.useState(true), 2);
  setIsResetting = useBaseActivityView(obj1).setIsResetting;
  let tmp28Result = null;
  if (null != currentEmbeddedActivity) {
    tmp28Result = null;
    if (null != id) {
      const obj2 = {
        wakeLockKey: "EmbeddedActivities",
        showLoadingIndicator: tmp22,
        isResetting: tmp25,
        children: null,
      };
      const obj3 = {
        onActivityCrash() {
          setIsResetting(true);
          const timerId = setTimeout(() => setIsResetting(false), 0);
        },
        applicationId: id,
        channelId: null,
        guildId: null,
        activityUrl: null,
        currentEmbeddedActivity: null,
        activitySessionId: null,
        queryParams: null,
        onLoadError: null,
        allowPopups: null,
        referrerPolicy: "origin",
        isPipOrGridMode: null,
        webViewKey: null,
        safeAreasConfig: null,
        ignoreSilentHardwareSwitch: null,
      };
      let id1;
      if (channel != null) {
        id1 = channel.id;
      }
      obj3.channelId = id1;
      let guild_id3;
      if (channel != null) {
        guild_id3 = channel.guild_id;
      }
      obj3.guildId = guild_id3;
      obj3.activityUrl = currentEmbeddedActivity.url;
      obj3.currentEmbeddedActivity = currentEmbeddedActivity;
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj3.activitySessionId = compositeInstanceId;
      obj3.queryParams = obj;
      obj3.onLoadError = callback;
      tmp5Result = tmp5(9650);
      obj3.allowPopups = tmp5Result.allowPopups(tmp4);
      obj3.isPipOrGridMode = layoutMode === constants.PIP || layoutMode === constants.GRID;
      obj3.webViewKey = tmp5(9515).EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
      if (tmp26) {
        landscapeSafeAreasConfig = portraitSafeAreasConfig.landscapeSafeAreasConfig;
      }
      obj3.safeAreasConfig = landscapeSafeAreasConfig;
      obj3.ignoreSilentHardwareSwitch = !set.has(id);
      obj2.children = closure_13(tmp2(9642), obj3);
      tmp28Result = tmp28(BaseActivityView, obj2);
      const tmp2Result = tmp2(9642);
    }
  }
  return tmp28Result;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export { useBaseActivityView };
export { ActivityViewLoadingIndicator };
export { BaseActivityView };
export const EmbeddedActivityView = memoResult;
