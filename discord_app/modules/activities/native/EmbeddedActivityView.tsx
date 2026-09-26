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
    const tmp2 = isLandscape ? constants.LANDSCAPE : constants.PORTRAIT;
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
        obj1 = { wakeLockKey: null };
        obj1.wakeLockKey = tmp2;
        items = [,];
        items[0] = jsx(closure_1(closure_2[14]), obj1);
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
const Constants = fn(2005);
({ ActivityLayoutMode: c10, ActivityScreenOrientation: closure_11 } = Constants);
fn(1349).OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4836);
const value = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const memoResult = noop.memo(function EmbeddedActivityViewInner(portraitSafeAreasConfig) {
  ({ channel, layoutMode } = portraitSafeAreasConfig);
  let landscapeSafeAreasConfig = portraitSafeAreasConfig.portraitSafeAreasConfig;
  let setIsResetting;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = currentEmbeddedActivity(8912)();
  dependencyMap = tmp4;
  const items = [EmbeddedActivitiesStore];
  const items1 = [tmp4];
  const stateFromStores = layoutMode(504).useStateFromStores(
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
  let obj = layoutMode(504);
  [tmp8, tmp9] = noop.useState(true);
  if (null == currentEmbeddedActivity) {
    let obj3 = { instance_id: "" };
  } else {
    const discordEnvQueryParams = layoutMode(8917).getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    const tmp38 = _objectWithoutProperties(discordEnvQueryParams, setIsResetting);
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    const obj4 = { instance_id: launchId, location_id: null, launch_id: null };
    let _location = currentEmbeddedActivity.location;
    let id1;
    if (_location != null) {
      id1 = _location.id;
    }
    obj4.location_id = id1;
    obj4.launch_id = currentEmbeddedActivity.launchId;
    const merged = Object.assign(tmp38);
    if (null != currentEmbeddedActivity.proxyTicket) {
      obj4.discord_proxy_ticket = currentEmbeddedActivity.proxyTicket;
    }
    let tmp14 = null != channel && null != channel.id;
    if (tmp14) {
      tmp14 = "" !== channel.id;
    }
    if (tmp14) {
      obj4.channel_id = channel.id;
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
    obj3 = obj4;
    if (tmp16) {
      let guild_id2;
      if (channel != null) {
        guild_id2 = channel.guild_id;
      }
      obj4.guild_id = guild_id2;
      obj3 = obj4;
    }
    const tmp5Result = layoutMode(8917);
  }
  currentEmbeddedActivity(8921)({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      const obj2 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
      DispatcherDefault.dispatch(obj2);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  const callback = noop.useCallback(() => {
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj2 = { location: _location, applicationId: null };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    obj2.applicationId = id;
    EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
  }, items3);
  if (tmp4 != null) {
    let id = tmp4.id;
  }
  let tmp22 = null == currentEmbeddedActivity;
  if (!tmp22) {
    let launchId1;
    if (currentEmbeddedActivity != null) {
      launchId1 = currentEmbeddedActivity.launchId;
    }
    tmp22 = null == launchId1;
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
  const tmp7 = _slicedToArray(noop.useState(true), 2);
  const obj5 = {
    orientationLockState: stateFromStores,
    showLoadingIndicator: tmp22,
    setShowLoadingStateForLockingOrientation: tmp9,
    application: tmp4,
    setOrientationLockState: layoutMode(8914).setOrientationLockState,
  };
  setIsResetting = useBaseActivityView({
    orientationLockState: stateFromStores,
    showLoadingIndicator: tmp22,
    setShowLoadingStateForLockingOrientation: tmp9,
    application: tmp4,
    setOrientationLockState: layoutMode(8914).setOrientationLockState,
  }).setIsResetting;
  let tmp28Result = null;
  if (null != currentEmbeddedActivity) {
    tmp28Result = null;
    if (null != id) {
      const obj6 = {
        wakeLockKey: "EmbeddedActivities",
        showLoadingIndicator: tmp22,
        isResetting: tmp25,
        children: null,
      };
      const obj7 = {
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
      let id2;
      if (channel != null) {
        id2 = channel.id;
      }
      obj7.channelId = id2;
      let guild_id3;
      if (channel != null) {
        guild_id3 = channel.guild_id;
      }
      obj7.guildId = guild_id3;
      obj7.activityUrl = currentEmbeddedActivity.url;
      obj7.currentEmbeddedActivity = currentEmbeddedActivity;
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj7.activitySessionId = compositeInstanceId;
      obj7.queryParams = obj3;
      obj7.onLoadError = callback;
      const tmp2Result = tmp2(8922);
      obj7.allowPopups = layoutMode(8931).allowPopups(tmp4);
      obj7.isPipOrGridMode = layoutMode === constants.PIP || layoutMode === constants.GRID;
      obj7.webViewKey = layoutMode(8765).EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
      if (tmp26) {
        landscapeSafeAreasConfig = portraitSafeAreasConfig.landscapeSafeAreasConfig;
      }
      obj7.safeAreasConfig = landscapeSafeAreasConfig;
      obj7.ignoreSilentHardwareSwitch = !set.has(id);
      obj6.children = closure_13(tmp2Result, obj7);
      tmp28Result = closure_13(BaseActivityView, obj6);
      const tmp5Result2 = layoutMode(8931);
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
