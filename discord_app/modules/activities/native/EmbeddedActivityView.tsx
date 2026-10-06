// === Module 9169: EmbeddedActivityView ===

// Module 9169 (EmbeddedActivityView)
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5097 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9024 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 9170 */;
import DiscordEnvironment from "DiscordEnvironment" /* 9171 */;
import BaseEmbeddedAppWebView2 from "BaseEmbeddedAppWebView" /* 9173 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import Constants from "Constants" /* 2011 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dispatchResult, leaveActivityResult, obj1, orientationLockState;

let c9;
let closure_12;
let closure_14;
let closure_15;
let metroImportAll;
let unpackModuleId;
function useQueryParams(arg0) {
  let channel;
  let currentEmbeddedActivity;
  let id;
  ({ currentEmbeddedActivity, channel } = arg0);
  if (null == currentEmbeddedActivity) {
    return { instance_id: "" };
  } else {
    const obj2 = DiscordEnvironment;
    const discordEnvQueryParams = obj2.getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    const tmp15 = _objectWithoutProperties(discordEnvQueryParams, user);
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    const obj = { instance_id: launchId, location_id: id, launch_id: currentEmbeddedActivity.launchId };
    const _location = currentEmbeddedActivity.location;
    id = undefined;
    if (_location != null) {
      id = _location.id;
    }
    const merged = Object.assign(tmp15);
    if (null != currentEmbeddedActivity.proxyTicket) {
      obj.discord_proxy_ticket = currentEmbeddedActivity.proxyTicket;
    }
    const tmp5 = null != channel && null != channel.id && "" !== channel.id;
    if (tmp5) {
      obj.channel_id = channel.id;
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let tmp7 = null != guild_id;
    if (tmp7) {
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      tmp7 = "" !== guild_id1;
    }
    if (tmp7) {
      let guild_id2;
      if (channel != null) {
        guild_id2 = channel.guild_id;
      }
      obj.guild_id = guild_id2;
    }
    return obj;
  }
}
let user = ["ui_density"];
let closure_4 = ["deepLinkQueryParams", "applicationId"];
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: metroImportAll, View: c9 } = react_native);
({ ActivityLayoutMode: unpackModuleId, ActivityScreenOrientation: closure_12 } = Constants);
const set = ApplicationConstants.OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const EmbeddedActivities = "EmbeddedActivities";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((orientationLockState) => {
  let closure_6;
  let first;
  let setShowLoadingStateForLockingOrientation;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp2 = setShowLoadingStateForLockingOrientation;
  let tmp = orientationLockState;
  let obj = orientationLockState(setShowLoadingStateForLockingOrientation[10]);
  const cResult = obj.c(29);
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  let closure_5 = _slicedToArray(first.useState(false), 2)[0];
  _slicedToArray(first.useState(false), 2);
  const tmp4 = _slicedToArray;
  if (cResult[0] !== application) {
    const tmpResult = tmp(tmp2[11]);
    const defaultOrientationLockState = tmpResult.getDefaultOrientationLockState(application);
    cResult[0] = application;
    cResult[1] = defaultOrientationLockState;
    tmp6 = defaultOrientationLockState;
  } else {
    tmp6 = cResult[1];
  }
  _slicedToArray = tmp6;
  let id;
  if (application != null) {
    id = application.id;
  }
  const tmp4Result = tmp4(first.useState(false), 2);
  first = tmp4Result[0];
  let closure_8 = tmp4Result[1];
  size = showLoadingIndicator(tmp2[12])();
  const tmp11 = size.width > size.height;
  let closure_9 = tmp11;
  if (cResult[2] !== tmp11) {
    const fn = function _() {
      const tmp2 = closure_9 ? constants.LANDSCAPE : constants.PORTRAIT;
      const obj = DispatcherDefault;
      obj.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: tmp2 });
    };
    const items = [tmp11];
    cResult[2] = tmp11;
    cResult[3] = fn;
    cResult[4] = items;
    tmp13 = items;
    tmp12 = fn;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp12, tmp13);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        closure_8(false);
      }
    }
    cResult[5] = E;
  } else {
    class E {
      constructor() {
        closure_8(false);
      }
    }
  }
  if (cResult[6] !== id) {
    class E {
      constructor() {
        closure_8(false);
      }
    }
    tmp17[0] = id;
    cResult[6] = id;
    cResult[7] = tmp17;
  } else {
    class E {
      constructor() {
        closure_8(false);
      }
    }
  }
  const layoutEffect1 = obj2.useLayoutEffect(E, tmp17);
  if (cResult[8] === tmp6) {
    class E {
      constructor() {
        closure_8(false);
      }
    }
  }
  class P {
    constructor() {
      if (!first) {
        if (null == orientationLockState) {
          if (!doesOrientationMatchLockStateDefault(closure_9, closure_6)) {
            setShowLoadingStateForLockingOrientation(true);
          }
          if (null != application) {
            setOrientationLockState(tmp11, orientationLockState);
          }
        }
      }
      setShowLoadingStateForLockingOrientation(false);
    }
  }
  const items1 = [tmp6, application, orientationLockState, tmp11, first, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  cResult[8] = tmp6;
  cResult[9] = application;
  cResult[10] = first;
  cResult[11] = tmp11;
  cResult[12] = orientationLockState;
  cResult[13] = setOrientationLockState;
  cResult[14] = setShowLoadingStateForLockingOrientation;
  cResult[15] = P;
  cResult[16] = items1;
}) : ((orientationLockState) => {
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  const setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  let defaultOrientationLockState;
  let first1;
  let closure_8;
  let isLandscape;
  let obj = first1;
  let tmp = defaultOrientationLockState;
  let tmp2 = defaultOrientationLockState(first1.useState(false), 2);
  const isResetting = tmp2[0];
  const setIsResetting = tmp2[1];
  const obj2 = orientationLockState(setShowLoadingStateForLockingOrientation[11]);
  defaultOrientationLockState = obj2.getDefaultOrientationLockState(application);
  let id;
  const tmp5 = setShowLoadingStateForLockingOrientation;
  if (application != null) {
    id = application.id;
  }
  const tmpResult = tmp(obj.useState(false), 2);
  first1 = tmpResult[0];
  closure_8 = tmpResult[1];
  size = showLoadingIndicator(tmp5[12])();
  isLandscape = size.width > size.height;
  const items = [isLandscape];
  const layoutEffect = obj.useLayoutEffect(() => {
    const tmp2 = isLandscape ? constants.LANDSCAPE : constants.PORTRAIT;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: tmp2 });
  }, items);
  const items1 = [id];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    closure_8(false);
  }, items1);
  const items2 = [defaultOrientationLockState, application, orientationLockState, isLandscape, first1, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (!first1) {
      if (null == orientationLockState) {
        if (!doesOrientationMatchLockStateDefault(isLandscape, defaultOrientationLockState)) {
          setShowLoadingStateForLockingOrientation(true);
        }
        if (null != application) {
          setOrientationLockState(tmp11, orientationLockState);
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
    const tmp = showLoadingIndicator || isResetting;
    if (!tmp) {
      closure_8(true);
    }
  }, items4);
  return { isResetting, setIsResetting, isLandscape };
});
let closure_18 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = authStore2(metroImportAll, { size: "large" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp2.loadingContainer) {
    const obj2 = { style: tmp2.loadingContainer, children: first };
    const tmp10 = authStore2(React4, obj2);
    cResult[1] = tmp2.loadingContainer;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (() => {
  const obj = { style: closure_16().loadingContainer, children: authStore2(metroImportAll, { size: "large" }) };
  return authStore2(React4, obj);
});
let closure_20 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((showLoadingIndicator) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(1);
  if (showLoadingIndicator.showLoadingIndicator) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp9 = authStore2(closure_20, {});
      cResult[0] = tmp9;
      first = tmp9;
    } else {
      first = cResult[0];
    }
    tmp4 = first;
  } else {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = tmp2;
    }
  }
  return tmp4;
}) : ((showLoadingIndicator) => {
  let tmp3;
  if (showLoadingIndicator.showLoadingIndicator) {
    tmp3 = authStore2(closure_20, {});
  } else {
    tmp3 = null;
    if (!tmp2) {
      tmp3 = tmp;
    }
  }
  return tmp3;
});
let closure_21 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let deepLinkQueryParams;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== arg0) {
    ({ deepLinkQueryParams, applicationId } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = applicationId;
    cResult[2] = deepLinkQueryParams;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp5 = deepLinkQueryParams;
    tmp4 = applicationId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function y() {
      const obj = EmbeddedActivitiesNativeManagerDefault;
      return obj.getOrCreateWebViewController();
    };
    cResult[4] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[4];
  }
  const first = _slicedToArray(react.useState(tmp10), 1)[0];
  if (cResult[5] === tmp4) {
    if (cResult[6] === tmp5) {
      if (cResult[7] === first) {
        let tmp12;
        if (cResult[8] === tmp6) {
          tmp12 = cResult[9];
        }
        return tmp12;
      }
    }
  }
  const obj2 = { iframeId: first, deepLinkQueryParams: tmp5, applicationId: tmp4 };
  const BaseEmbeddedAppWebView = BaseEmbeddedAppWebView2.BaseEmbeddedAppWebView;
  const merged = Object.assign(tmp6);
  const tmp14 = authStore2(BaseEmbeddedAppWebView, obj2);
  cResult[5] = tmp4;
  cResult[6] = tmp5;
  cResult[7] = first;
  cResult[8] = tmp6;
  cResult[9] = tmp14;
  tmp12 = tmp14;
}) : ((arg0) => {
  let applicationId;
  let deepLinkQueryParams;
  ({ deepLinkQueryParams, applicationId } = arg0);
  const merged = Object.assign(arg0, Object.assign({ deepLinkQueryParams: 0, applicationId: 0 }));
  let obj = {
    iframeId: _slicedToArray(react.useState(() => {
      const obj = EmbeddedActivitiesNativeManagerDefault;
      return obj.getOrCreateWebViewController();
    }), 1)[0],
    deepLinkQueryParams,
    applicationId
  };
  const BaseEmbeddedAppWebView = BaseEmbeddedAppWebView2.BaseEmbeddedAppWebView;
  const merged1 = Object.assign(merged);
  return authStore2(BaseEmbeddedAppWebView, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let applicationId;
  let first;
  let tmp12;
  let tmp15;
  let tmp23;
  let tmp9;
  const tmp = channel;
  let obj = channel(first[10]);
  const cResult = obj.c(45);
  channel = channel.channel;
  const layoutMode = channel.layoutMode;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    cResult[0] = currentEmbeddedActivity;
    first = currentEmbeddedActivity;
  } else {
    first = cResult[0];
  }
  const tmp8 = layoutMode(first[18])();
  user = tmp8;
  const tmp7 = layoutMode;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    cResult[1] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp8) {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    const items1 = [tmp8];
    cResult[2] = tmp8;
    cResult[3] = S;
    cResult[4] = items1;
    tmp12 = items1;
  } else {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    tmp12 = cResult[4];
  }
  const tmpResult = tmp(first[19]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, S, tmp12);
  [r10055, tmp15] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  if (cResult[5] !== channel) {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    tmp17[0] = first;
    tmp17[1] = channel;
    cResult[5] = channel;
    cResult[6] = tmp17;
  } else {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
  }
  useQueryParams(tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
    tmp20[0] = first;
    cResult[7] = tmp20;
  } else {
    class S {
      constructor() {
        orientationLockStateForApp = undefined;
        if (null != closure_3) {
          tmp3 = closure_10;
          orientationLockStateForApp = closure_10.getOrientationLockStateForApp(tmp.id);
        }
        return orientationLockStateForApp;
      }
    }
  }
  tmp7(first[20])(tmp20);
  if (cResult[8] !== layoutMode) {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
    const items2 = [layoutMode, first];
    cResult[8] = layoutMode;
    cResult[9] = M;
    cResult[10] = items2;
    tmp23 = items2;
  } else {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
    tmp23 = cResult[10];
  }
  const layoutEffect = react.useLayoutEffect(M, tmp23);
  const tmp25 = cResult[11];
  if (tmp8 != null) {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (tmp25 !== undefined) {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
    if (tmp8 != null) {
      class M {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
            tmp4 = layoutMode;
            obj1.layoutMode = layoutMode;
            obj1.applicationId = tmp.applicationId;
            dispatchResult = obj.dispatch(obj1);
          }
          return;
        }
      }
    }
    class N {
      constructor() {
        tmp = closure_1(closure_2[16]);
        _location = undefined;
        leaveActivity = tmp.leaveActivity;
        if (closure_2 != null) {
          _location = closure_2.location;
        }
        obj = { location: _location, applicationId: null };
        id = undefined;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        obj.applicationId = id;
        leaveActivityResult = leaveActivity(obj);
        return;
      }
    }
    cResult[11] = tmp27;
    cResult[12] = N;
  } else {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (tmp8 != null) {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  let c4;
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
    if (first != null) {
      class M {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[13]);
            obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
            tmp4 = layoutMode;
            obj1.layoutMode = layoutMode;
            obj1.applicationId = tmp.applicationId;
            dispatchResult = obj.dispatch(obj1);
          }
          return;
        }
      }
    }
    class N {
      constructor() {
        tmp = closure_1(closure_2[16]);
        _location = undefined;
        leaveActivity = tmp.leaveActivity;
        if (closure_2 != null) {
          _location = closure_2.location;
        }
        obj = { location: _location, applicationId: null };
        id = undefined;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        obj.applicationId = id;
        leaveActivityResult = leaveActivity(obj);
        return;
      }
    }
  }
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (null != first) {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  if (cResult[13] === tmp8) {
    class M {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          obj1 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: null, applicationId: null };
          tmp4 = layoutMode;
          obj1.layoutMode = layoutMode;
          obj1.applicationId = tmp.applicationId;
          dispatchResult = obj.dispatch(obj1);
        }
        return;
      }
    }
  }
  let obj2 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp28, setShowLoadingStateForLockingOrientation: tmp15, application: tmp8, setOrientationLockState: tmp(tmp2[11]).setOrientationLockState };
  cResult[13] = tmp8;
  cResult[14] = stateFromStores;
  cResult[15] = null == first;
  cResult[16] = obj2;
}) : ((channel) => {
  let compositeInstanceId;
  let guild_id;
  let id1;
  let items4;
  let tmp5Result;
  let tmp8;
  let tmp9;
  channel = channel.channel;
  const layoutMode = channel.layoutMode;
  let portraitSafeAreasConfig = channel.portraitSafeAreasConfig;
  let setIsResetting;
  const landscapeSafeAreasConfig = channel.landscapeSafeAreasConfig;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = layoutMode(currentEmbeddedActivity[18])();
  let obj = channel(currentEmbeddedActivity[19]);
  const items = [EmbeddedActivitiesStore];
  const items1 = [tmp4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let orientationLockStateForApp;
    if (null != id) {
      orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp.id);
    }
    return orientationLockStateForApp;
  }, items1);
  [tmp8, tmp9] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  const tmp10 = useQueryParams({ currentEmbeddedActivity, channel });
  layoutMode(currentEmbeddedActivity[20])({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = react.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      const obj2 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  let id;
  const callback = react.useCallback(() => {
    let _location;
    const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
    EmbeddedActivitiesNativeManagerDefault;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj = { location: _location, applicationId: id };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    leaveActivity(obj);
  }, items3);
  const tmp2 = layoutMode;
  if (tmp4 != null) {
    id = tmp4.id;
  }
  let tmp15 = null == currentEmbeddedActivity;
  if (!tmp15) {
    let launchId;
    if (currentEmbeddedActivity != null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    tmp15 = null == launchId;
  }
  if (!tmp15) {
    tmp15 = tmp8;
  }
  if (!tmp15) {
    tmp15 = null == id;
  }
  if (!tmp15) {
    tmp15 = null == tmp4;
  }
  let obj2 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp15, setShowLoadingStateForLockingOrientation: tmp9, application: tmp4, setOrientationLockState: tmp5(tmp3[11]).setOrientationLockState };
  setIsResetting = closure_18(obj2).setIsResetting;
  closure_18(obj2);
  if (null != currentEmbeddedActivity) {
    if (null != id) {
      let obj3 = {};
      if (null != currentEmbeddedActivity.customId) {
        obj3.custom_id = currentEmbeddedActivity.customId;
      }
      if (null != currentEmbeddedActivity.referrerId) {
        obj3.referrer_id = currentEmbeddedActivity.referrerId;
      }
      const obj4 = { showLoadingIndicator: tmp15, isResetting: tmp18, children: items4 };
      const obj5 = { wakeLockKey: EmbeddedActivities };
      items4 = [closure_14(tmp2(currentEmbeddedActivity[21]), obj5), ];
      const obj6 = {
        deepLinkQueryParams: obj3,
        onInvalidUrl() {
              id = undefined;
              if (channel != null) {
                id = channel.id;
              }
              if (null != id) {
                const obj = ChannelRTCActionCreatorsDefault;
                const participant = obj.selectParticipant(channel.id, null);
              }
              const obj2 = EmbeddedActivitiesNativeManagerDefault;
              const obj3 = { location: currentEmbeddedActivity.location, applicationId: id, showFeedback: false };
              obj2.leaveActivity(obj3);
            },
        onActivityCrash() {
              const obj = EmbeddedActivitiesNativeManagerDefault;
              obj.releaseWebView();
              setIsResetting(true);
              const timerId = setTimeout(() => setIsResetting(false), 0);
            },
        applicationId: id,
        channelId: id1,
        guildId: guild_id,
        activityUrl: currentEmbeddedActivity.url,
        activitySessionId: compositeInstanceId,
        queryParams: tmp10,
        onLoadError: callback,
        allowPopups: tmp5Result.allowPopups(tmp4),
        referrerPolicy: "origin",
        isPipOrGridMode: layoutMode === constants.PIP || layoutMode === constants.GRID,
        safeAreasConfig: portraitSafeAreasConfig,
        ignoreSilentHardwareSwitch: !set.has(id)
      };
      id1 = undefined;
      if (channel != null) {
        id1 = channel.id;
      }
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      compositeInstanceId = undefined;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp5Result = channel(currentEmbeddedActivity[23]);
      if (tmp19) {
        portraitSafeAreasConfig = landscapeSafeAreasConfig;
      }
      items4[1] = closure_14(closure_22, obj6);
      return closure_15(closure_21, obj4);
    }
  }
  return null;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export const useBaseActivityView = tmp5;
export const ActivityViewLoadingIndicator = tmp6;
export const BaseActivityView = tmp7;
export const EmbeddedActivityView = memoResult;