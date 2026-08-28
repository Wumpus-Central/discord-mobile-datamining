// discord_app/modules/activities/native/EmbeddedActivityView.tsx
import WakeLockDefault from "../../device/native/WakeLock.tsx";
import closure_4 from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../EmbeddedActivitiesStore.tsx";
import items3 from "../Constants.tsx";
import { OBEY_SILENT_HARDWARE_SWITCH_APP_IDS as closure_12 } from "../../applications/ApplicationConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
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
  defaultOrientationLockState = orientationLockState(setShowLoadingStateForLockingOrientation[9]).getDefaultOrientationLockState(application);
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
    showLoadingIndicator(setShowLoadingStateForLockingOrientation[11]).dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: isLandscape ? closure_1_11.LANDSCAPE : closure_1_11.PORTRAIT });
  }, items);
  const items1 = [id];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    callback(false);
  }, items1);
  const items2 = [defaultOrientationLockState, application, orientationLockState, isLandscape, first1, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (!first1) {
      if (null == orientationLockState) {
        if (!showLoadingIndicator(setShowLoadingStateForLockingOrientation[12])(isLandscape, defaultOrientationLockState)) {
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
    if (showLoadingIndicator(setShowLoadingStateForLockingOrientation[12])(isLandscape, orientationLockState)) {
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
      callback(true);
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
        obj[0] = tmp2;
        items = [, ];
        items[0] = jsx(require("WakeLock"), obj);
        items[1] = tmp;
        obj[0] = items;
        tmp4 = jsxs(Fragment, obj);
      }
    }
    return tmp4;
  }
}
let closure_3 = ["ui_density"];
({ ActivityIndicator: error, View: closure_8 } = get_ActivityIndicator);
({ ActivityLayoutMode: c10, ActivityScreenOrientation: unpackModuleId } = items3);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const memoResult = importAllResult.memo(function EmbeddedActivityViewInner(portraitSafeAreasConfig) {
  ({ channel, layoutMode } = portraitSafeAreasConfig);
  let landscapeSafeAreasConfig = portraitSafeAreasConfig.portraitSafeAreasConfig;
  let currentEmbeddedActivity;
  dependencyMap = undefined;
  let setIsResetting;
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  const tmp4 = currentEmbeddedActivity(9540)();
  dependencyMap = tmp4;
  let obj = layoutMode(589);
  const items = [currentEmbeddedActivity];
  const items1 = [tmp4];
  obj1 = importAllResult;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let orientationLockStateForApp;
    if (null != closure_2) {
      orientationLockStateForApp = closure_1_9.getOrientationLockStateForApp(tmp.id);
    }
    return orientationLockStateForApp;
  }, items1);
  [tmp8, tmp9] = callback2(importAllResult.useState(true), 2);
  if (null == currentEmbeddedActivity) {
    obj = { instance_id: "" };
  } else {
    let tmp5Result = tmp5(9545);
    const discordEnvQueryParams = tmp5Result.getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    const tmp38 = callback(discordEnvQueryParams, setIsResetting);
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    obj = { instance_id: null, location_id: null, launch_id: null };
    obj[0] = launchId;
    let _location = currentEmbeddedActivity.location;
    let id;
    if (_location != null) {
      id = _location.id;
    }
    obj[1] = id;
    obj[2] = currentEmbeddedActivity.launchId;
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
  currentEmbeddedActivity(9549)({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = obj1.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      let obj = currentEmbeddedActivity(id[11]);
      obj = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
      obj[1] = layoutMode;
      obj[2] = tmp.applicationId;
      obj.dispatch(obj);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  callback = obj1.useCallback(() => {
    let obj = currentEmbeddedActivity(id[18]);
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    obj = { location: _location, applicationId: null };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    obj[1] = id;
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
  obj1 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp22, setShowLoadingStateForLockingOrientation: tmp9, application: tmp4, setOrientationLockState: tmp5(9542).setOrientationLockState };
  const tmp7 = callback2(importAllResult.useState(true), 2);
  setIsResetting = useBaseActivityView(obj1).setIsResetting;
  let tmp28Result = null;
  if (null != currentEmbeddedActivity) {
    tmp28Result = null;
    if (null != id) {
      const obj2 = { wakeLockKey: "EmbeddedActivities", showLoadingIndicator: null, isResetting: null, children: null };
      obj2[1] = tmp22;
      obj2[2] = tmp25;
      const obj3 = { onActivityCrash: null, applicationId: null, channelId: null, guildId: null, activityUrl: null, currentEmbeddedActivity: null, activitySessionId: null, queryParams: null, onLoadError: null, allowPopups: null, referrerPolicy: "origin", isPipOrGridMode: null, webViewKey: null, safeAreasConfig: null, ignoreSilentHardwareSwitch: null };
      obj3[0] = function onActivityCrash() {
        setIsResetting(true);
        const timerId = setTimeout(() => callback(false), 0);
      };
      obj3[1] = id;
      let id1;
      if (channel != null) {
        id1 = channel.id;
      }
      obj3[2] = id1;
      let guild_id3;
      if (channel != null) {
        guild_id3 = channel.guild_id;
      }
      obj3[3] = guild_id3;
      obj3[4] = currentEmbeddedActivity.url;
      obj3[5] = currentEmbeddedActivity;
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj3[6] = compositeInstanceId;
      obj3[7] = obj;
      obj3[8] = callback;
      tmp5Result = tmp5(9558);
      obj3[9] = tmp5Result.allowPopups(tmp4);
      obj3[11] = layoutMode === constants.PIP || layoutMode === constants.GRID;
      obj3[12] = tmp5(9392).EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
      if (tmp26) {
        landscapeSafeAreasConfig = portraitSafeAreasConfig.landscapeSafeAreasConfig;
      }
      obj3[13] = landscapeSafeAreasConfig;
      obj3[14] = !set.has(id);
      obj2[3] = closure_13(tmp2(9550), obj3);
      tmp28Result = tmp28(BaseActivityView, obj2);
      const tmp29 = BaseActivityView;
      const tmp2Result = tmp2(9550);
    }
  }
  return tmp28Result;
});
const result = require("set").fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export { useBaseActivityView };
export { ActivityViewLoadingIndicator };
export { BaseActivityView };
export const EmbeddedActivityView = memoResult;