// discord_app/modules/activities/native/EmbeddedActivityView.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import get_ActivityIndicator from "getSafeArea";
import participantFromServer from "participantFromServer";
import items3 from "items3";
import { OBEY_SILENT_HARDWARE_SWITCH_APP_IDS as closure_10 } from "ApplicationTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_12;
let closure_6;
let map1;
let metroImportAll;
let unpackModuleId;
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
  let closure_8;
  let isLandscape;
  const setIsResetting = application(setOrientationLockState.useState(false), 2);
  isResetting = setIsResetting[0];
  defaultOrientationLockState = orientationLockState(setShowLoadingStateForLockingOrientation[8]).getDefaultOrientationLockState(application);
  let id;
  if (application != null) {
    id = application.id;
  }
  const tmpResult = application(setOrientationLockState.useState(false), 2);
  first1 = tmpResult[0];
  closure_8 = tmpResult[1];
  const size = showLoadingIndicator(setShowLoadingStateForLockingOrientation[9])();
  isLandscape = size.width > size.height;
  const items = [isLandscape];
  const layoutEffect = obj.useLayoutEffect(() => {
    showLoadingIndicator(setShowLoadingStateForLockingOrientation[10]).dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: isLandscape ? isLandscape.LANDSCAPE : isLandscape.PORTRAIT });
  }, items);
  const items1 = [id];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    callback(false);
  }, items1);
  const items2 = [defaultOrientationLockState, application, orientationLockState, isLandscape, first1, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (!first1) {
      if (null == orientationLockState) {
        if (!showLoadingIndicator(setShowLoadingStateForLockingOrientation[11])(isLandscape, defaultOrientationLockState)) {
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
    if (showLoadingIndicator(setShowLoadingStateForLockingOrientation[11])(isLandscape, orientationLockState)) {
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
    obj = { style: jsxs().loadingContainer, children: jsx(ActivityIndicator, { size: "large" }) };
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
let c4 = importAllResult;
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ ActivityLayoutMode: metroImportAll, ActivityScreenOrientation: c9 } = items3);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const memoResult = importAllResult.memo(function EmbeddedActivityViewInner(portraitSafeAreasConfig) {
  let channel;
  let layoutMode;
  let tmp8;
  let tmp9;
  ({ channel, layoutMode } = portraitSafeAreasConfig);
  let landscapeSafeAreasConfig = portraitSafeAreasConfig.portraitSafeAreasConfig;
  let currentEmbeddedActivity;
  let dependencyMap;
  let setIsResetting;
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  const tmp4 = currentEmbeddedActivity(10627)();
  dependencyMap = tmp4;
  let obj = layoutMode(589);
  const items = [currentEmbeddedActivity];
  const items1 = [tmp4];
  let obj1 = importAllResult;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let orientationLockStateForApp;
    if (null != c2) {
      orientationLockStateForApp = outer1_7.getOrientationLockStateForApp(tmp.id);
    }
    return orientationLockStateForApp;
  }, items1);
  [tmp8, tmp9] = setIsResetting(importAllResult.useState(true), 2);
  if (null == currentEmbeddedActivity) {
    obj = { instance_id: "" };
  } else {
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
    if (null != currentEmbeddedActivity.proxyTicket) {
      obj.discord_proxy_ticket = currentEmbeddedActivity.proxyTicket;
    }
    let tmp11 = null != channel && null != channel.id;
    if (tmp11) {
      tmp11 = "" !== channel.id;
    }
    if (tmp11) {
      obj.channel_id = channel.id;
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let tmp13 = null != guild_id;
    if (tmp13) {
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      tmp13 = "" !== guild_id1;
    }
    if (tmp13) {
      let guild_id2;
      if (channel != null) {
        guild_id2 = channel.guild_id;
      }
      obj.guild_id = guild_id2;
    }
  }
  currentEmbeddedActivity(10634)({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = obj1.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      let obj = currentEmbeddedActivity(_undefined[10]);
      obj = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
      obj[1] = layoutMode;
      obj[2] = tmp.applicationId;
      obj.dispatch(obj);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  const callback = obj1.useCallback(() => {
    let obj = currentEmbeddedActivity(_undefined[16]);
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    obj = { location: _location, applicationId: null };
    let id;
    if (_undefined != null) {
      id = _undefined.id;
    }
    obj[1] = id;
    obj.leaveActivity(obj);
  }, items3);
  if (tmp4 != null) {
    id = tmp4.id;
  }
  let tmp19 = null == currentEmbeddedActivity;
  if (!tmp19) {
    launchId = undefined;
    if (currentEmbeddedActivity != null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    tmp19 = null == launchId;
  }
  if (!tmp19) {
    tmp19 = tmp8;
  }
  if (!tmp19) {
    tmp19 = null == id;
  }
  if (!tmp19) {
    tmp19 = null == tmp4;
  }
  obj1 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp19, setShowLoadingStateForLockingOrientation: tmp9, application: tmp4, setOrientationLockState: tmp5(10629).setOrientationLockState };
  const tmp7 = setIsResetting(importAllResult.useState(true), 2);
  setIsResetting = useBaseActivityView(obj1).setIsResetting;
  let tmp25Result = null;
  if (null != currentEmbeddedActivity) {
    tmp25Result = null;
    if (null != id) {
      const obj2 = { wakeLockKey: "EmbeddedActivities", showLoadingIndicator: null, isResetting: null, children: null };
      obj2[1] = tmp19;
      obj2[2] = tmp22;
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
      const tmp26 = BaseActivityView;
      const tmp2Result = tmp2(10635);
      obj3[9] = tmp5(10641).allowPopups(tmp4);
      obj3[11] = layoutMode === constants.PIP || layoutMode === constants.GRID;
      obj3[12] = tmp5(10538).EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
      if (tmp23) {
        landscapeSafeAreasConfig = portraitSafeAreasConfig.landscapeSafeAreasConfig;
      }
      obj3[13] = landscapeSafeAreasConfig;
      obj3[14] = !set.has(id);
      obj2[3] = closure_11(tmp2Result, obj3);
      tmp25Result = tmp25(tmp26, obj2);
      const tmp5Result = tmp5(10641);
    }
  }
  return tmp25Result;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export { useBaseActivityView };
export { ActivityViewLoadingIndicator };
export { BaseActivityView };
export const EmbeddedActivityView = memoResult;