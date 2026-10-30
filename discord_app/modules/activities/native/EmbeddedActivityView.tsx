// discord_app/modules/activities/native/EmbeddedActivityView.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import leaveEmbeddedActivity from "../leaveEmbeddedActivity.tsx";
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState.tsx";
import activityWebViewController from "activityWebViewController.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";

require = fn;
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
    obj = { style: closure_15().loadingContainer, children: jsx(ActivityIndicator, { size: "large" }) };
    return jsx(View, obj);
  }
}
class BaseActivityView {
  constructor(arg0) {
    if (global.showLoadingIndicator) {
      tmp4 = jsx;
      tmp5 = ActivityViewLoadingIndicator;
      tmp3 = jsx(ActivityViewLoadingIndicator, {});
    } else {
      tmp3 = null;
      if (!tmp2) {
        tmp3 = tmp;
      }
    }
    return tmp3;
  }
}
function EmbeddedActivityWebView(applicationId) {
  applicationId = applicationId.applicationId;
  const merged = Object.assign(applicationId, Object.assign({ deepLinkQueryParams: 0, applicationId: 0 }));
  ({ iframeId, shellBridgeSecret } = _slicedToArray(
    noop.useState(() => activityWebViewController.getOrCreateActivityWebViewController(applicationId)),
    1,
  )[0]);
  const merged1 = Object.assign(merged);
  return closure_13(applicationId(11783).BaseEmbeddedAppWebView, {
    iframeId,
    shellBridgeSecret,
    deepLinkQueryParams: applicationId.deepLinkQueryParams,
    applicationId,
  });
}
let closure_3 = ["ui_density"];
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(2019);
({ ActivityLayoutMode: c10, ActivityScreenOrientation: closure_11 } = Constants);
fn(1361).OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5009);
const __initData = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const memoResult = noop.memo(function EmbeddedActivityViewInner(channel) {
  channel = channel.channel;
  const layoutMode = channel.layoutMode;
  let landscapeSafeAreasConfig = channel.portraitSafeAreasConfig;
  let id1;
  let setIsResetting;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = layoutMode(currentEmbeddedActivity[16])();
  let id = tmp4;
  const items = [EmbeddedActivitiesStore];
  const items1 = [tmp4];
  const stateFromStores = channel(currentEmbeddedActivity[17]).useStateFromStores(
    items,
    () => {
      let orientationLockStateForApp;
      if (null != closure_3) {
        orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp.id);
      }
      return orientationLockStateForApp;
    },
    items1,
  );
  let obj = channel(currentEmbeddedActivity[17]);
  [tmp8, tmp9] = setIsResetting(noop.useState(true), 2);
  if (null == currentEmbeddedActivity) {
    let obj3 = { instance_id: "" };
  } else {
    const discordEnvQueryParams = tmp5(tmp3[13]).getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    const tmp39 = id1(discordEnvQueryParams, id);
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    const obj4 = { instance_id: launchId, location_id: null, launch_id: null };
    let _location = currentEmbeddedActivity.location;
    id = undefined;
    if (_location != null) {
      id = _location.id;
    }
    obj4.location_id = id;
    obj4.launch_id = currentEmbeddedActivity.launchId;
    const merged = Object.assign(tmp39);
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
    const tmp5Result = tmp5(tmp3[13]);
  }
  layoutMode(currentEmbeddedActivity[18])({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      const obj2 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
      DispatcherDefault.dispatch(obj2);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  id1 = undefined;
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
    const result = leaveEmbeddedActivity.leaveEmbeddedActivity(obj2);
  }, items3);
  if (tmp4 != null) {
    id1 = tmp4.id;
  }
  let tmp23 = null == currentEmbeddedActivity;
  if (!tmp23) {
    let launchId1;
    if (currentEmbeddedActivity != null) {
      launchId1 = currentEmbeddedActivity.launchId;
    }
    tmp23 = null == launchId1;
  }
  if (!tmp23) {
    tmp23 = tmp8;
  }
  if (!tmp23) {
    tmp23 = null == id1;
  }
  if (!tmp23) {
    tmp23 = null == tmp4;
  }
  const tmp7 = setIsResetting(noop.useState(true), 2);
  const obj5 = {
    orientationLockState: stateFromStores,
    showLoadingIndicator: tmp23,
    setShowLoadingStateForLockingOrientation: tmp9,
    application: tmp4,
    setOrientationLockState: channel(currentEmbeddedActivity[9]).setOrientationLockState,
  };
  setIsResetting = useBaseActivityView({
    orientationLockState: stateFromStores,
    showLoadingIndicator: tmp23,
    setShowLoadingStateForLockingOrientation: tmp9,
    application: tmp4,
    setOrientationLockState: channel(currentEmbeddedActivity[9]).setOrientationLockState,
  }).setIsResetting;
  if (null != currentEmbeddedActivity) {
    if (null != id1) {
      const obj6 = {};
      if (null != currentEmbeddedActivity.customId) {
        obj6.custom_id = currentEmbeddedActivity.customId;
      }
      if (null != currentEmbeddedActivity.referrerId) {
        obj6.referrer_id = currentEmbeddedActivity.referrerId;
      }
      const obj7 = { showLoadingIndicator: tmp23, isResetting: tmp26, children: null };
      const items4 = [closure_13(tmp2(tmp3[20]), { wakeLockKey: "EmbeddedActivities" })];
      const obj8 = {
        deepLinkQueryParams: obj6,
        onInvalidUrl() {
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          if (null != id) {
            const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
          }
          const result = leaveEmbeddedActivity.leaveEmbeddedActivity({
            location: currentEmbeddedActivity.location,
            applicationId: id1,
            showFeedback: false,
          });
          const obj3 = { location: currentEmbeddedActivity.location, applicationId: id1, showFeedback: false };
        },
        onActivityCrash() {
          const result = activityWebViewController.releaseActivityWebView();
          setIsResetting(true);
          const timerId = setTimeout(() => setIsResetting(false), 0);
        },
        applicationId: id1,
        channelId: null,
        guildId: null,
        activityUrl: null,
        activitySessionId: null,
        queryParams: null,
        onLoadError: null,
        allowPopups: null,
        referrerPolicy: "origin",
        isPipOrGridMode: null,
        safeAreasConfig: null,
        ignoreSilentHardwareSwitch: null,
      };
      let id2;
      if (channel != null) {
        id2 = channel.id;
      }
      obj8.channelId = id2;
      let guild_id3;
      if (channel != null) {
        guild_id3 = channel.guild_id;
      }
      obj8.guildId = guild_id3;
      obj8.activityUrl = currentEmbeddedActivity.url;
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj8.activitySessionId = compositeInstanceId;
      obj8.queryParams = obj3;
      obj8.onLoadError = callback;
      obj8.allowPopups = tmp5(tmp3[22]).allowPopups(tmp4);
      obj8.isPipOrGridMode = layoutMode === constants.PIP || layoutMode === constants.GRID;
      if (tmp27) {
        landscapeSafeAreasConfig = channel.landscapeSafeAreasConfig;
      }
      obj8.safeAreasConfig = landscapeSafeAreasConfig;
      obj8.ignoreSilentHardwareSwitch = !set.has(id1);
      items4[1] = closure_13(EmbeddedActivityWebView, obj8);
      obj7.children = items4;
      return closure_14(BaseActivityView, obj7);
    }
  }
  return null;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export { useBaseActivityView };
export { ActivityViewLoadingIndicator };
export { BaseActivityView };
export const EmbeddedActivityView = memoResult;
