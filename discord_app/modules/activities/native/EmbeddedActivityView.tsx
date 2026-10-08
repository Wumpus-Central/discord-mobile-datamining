// discord_app/modules/activities/native/EmbeddedActivityView.tsx
import c from "../../../../_runtime/00576_c.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager.tsx";
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState.tsx";
import DiscordEnvironment from "../DiscordEnvironment.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";

require = fn;
function useQueryParams(arg0) {
  ({ currentEmbeddedActivity, channel } = arg0);
  if (null == currentEmbeddedActivity) {
    return { instance_id: "" };
  } else {
    const discordEnvQueryParams = DiscordEnvironment.getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    const tmp15 = _objectWithoutProperties(discordEnvQueryParams, closure_3);
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    const obj = { instance_id: launchId, location_id: null, launch_id: null };
    const _location = currentEmbeddedActivity.location;
    let id;
    if (_location != null) {
      id = _location.id;
    }
    obj.location_id = id;
    obj.launch_id = currentEmbeddedActivity.launchId;
    const merged = Object.assign(tmp15);
    if (null != currentEmbeddedActivity.proxyTicket) {
      obj.discord_proxy_ticket = currentEmbeddedActivity.proxyTicket;
    }
    let tmp5 = null != channel && null != channel.id;
    if (tmp5) {
      tmp5 = "" !== channel.id;
    }
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
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_8, View: closure_9 } = get_ActivityIndicator);
const Constants = fn(2023);
({ ActivityLayoutMode: closure_11, ActivityScreenOrientation: closure_12 } = Constants);
fn(1372).OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5090);
let closure_16 = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const EmbeddedActivities = "EmbeddedActivities";
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBaseActivityView(orientationLockState) {
      const cResult = orientationLockState(setShowLoadingStateForLockingOrientation[10]).c(29);
      orientationLockState = orientationLockState.orientationLockState;
      const showLoadingIndicator = orientationLockState.showLoadingIndicator;
      setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
      const application = orientationLockState.application;
      const setOrientationLockState = orientationLockState.setOrientationLockState;
      let obj = orientationLockState(setShowLoadingStateForLockingOrientation[10]);
      let tmp = orientationLockState;
      const tmp4 = _slicedToArray;
      closure_5 = _slicedToArray(first.useState(false), 2)[0];
      if (cResult[0] !== application) {
        const defaultOrientationLockState = tmp(tmp2[11]).getDefaultOrientationLockState(application);
        cResult[0] = application;
        cResult[1] = defaultOrientationLockState;
        let tmp6 = defaultOrientationLockState;
        const tmpResult = tmp(tmp2[11]);
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
      closure_8 = tmp4Result[1];
      const size = showLoadingIndicator(tmp2[12])();
      closure_9 = tmp11;
      if (cResult[2] !== size.width > size.height) {
        const fn = function h() {
          DispatcherDefault.dispatch({
            type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE",
            screenOrientation: closure_9 ? __initData.LANDSCAPE : __initData.PORTRAIT,
          });
          const tmp2 = closure_9 ? __initData.LANDSCAPE : __initData.PORTRAIT;
        };
        const items = [tmp11];
        cResult[2] = tmp11;
        cResult[3] = fn;
        cResult[4] = items;
        let tmp13 = items;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[3];
        tmp13 = cResult[4];
      }
      const layoutEffect = obj2.useLayoutEffect(tmp12, tmp13);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            tmp = closure_8(false);
            return;
          }
        }
        cResult[5] = E;
      } else {
        class E {
          constructor() {
            tmp = closure_8(false);
            return;
          }
        }
      }
      if (cResult[6] !== id) {
        class E {
          constructor() {
            tmp = closure_8(false);
            return;
          }
        }
        tmp17[0] = id;
        cResult[6] = id;
        cResult[7] = tmp17;
      } else {
        class E {
          constructor() {
            tmp = closure_8(false);
            return;
          }
        }
      }
      const layoutEffect1 = obj2.useLayoutEffect(E, tmp17);
      if (cResult[8] === tmp6) {
        class E {
          constructor() {
            tmp = closure_8(false);
            return;
          }
        }
      }
      const fn2 = function b() {
        if (!first) {
          if (null == orientationLockState) {
            if (!doesOrientationMatchLockStateDefault(closure_9, closure_6)) {
              setShowLoadingStateForLockingOrientation(true);
            }
            if (null != application) {
              setOrientationLockState(tmp10, orientationLockState);
            }
          }
        }
        setShowLoadingStateForLockingOrientation(false);
      };
      const items1 = [
        tmp6,
        application,
        orientationLockState,
        size.width > size.height,
        first,
        setShowLoadingStateForLockingOrientation,
        setOrientationLockState,
      ];
      cResult[8] = tmp6;
      cResult[9] = application;
      cResult[10] = first;
      cResult[11] = size.width > size.height;
      cResult[12] = orientationLockState;
      cResult[13] = setOrientationLockState;
      cResult[14] = setShowLoadingStateForLockingOrientation;
      cResult[15] = fn2;
      cResult[16] = items1;
      const tmp5 = _slicedToArray(first.useState(false), 2);
    }
  : function useBaseActivityView(orientationLockState) {
      orientationLockState = orientationLockState.orientationLockState;
      const showLoadingIndicator = orientationLockState.showLoadingIndicator;
      const setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
      const application = orientationLockState.application;
      const setOrientationLockState = orientationLockState.setOrientationLockState;
      let defaultOrientationLockState;
      let first1;
      closure_8 = undefined;
      let isLandscape;
      const setIsResetting = defaultOrientationLockState(first1.useState(false), 2);
      const isResetting = setIsResetting[0];
      defaultOrientationLockState = orientationLockState(
        setShowLoadingStateForLockingOrientation[11],
      ).getDefaultOrientationLockState(application);
      let id;
      if (application != null) {
        id = application.id;
      }
      const tmpResult = defaultOrientationLockState(first1.useState(false), 2);
      first1 = tmpResult[0];
      closure_8 = tmpResult[1];
      const size = showLoadingIndicator(setShowLoadingStateForLockingOrientation[12])();
      isLandscape = size.width > size.height;
      const items = [isLandscape];
      const layoutEffect = obj.useLayoutEffect(() => {
        DispatcherDefault.dispatch({
          type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE",
          screenOrientation: isLandscape ? __initData.LANDSCAPE : __initData.PORTRAIT,
        });
        const tmp2 = isLandscape ? __initData.LANDSCAPE : __initData.PORTRAIT;
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
    };
let closure_18 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityViewLoadingIndicator() {
      const cResult = c.c(3);
      const tmp2 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = state(closure_1_8, { size: "large" });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp2.loadingContainer) {
        const obj2 = { style: tmp2.loadingContainer, children: first };
        const tmp10 = state(options, obj2);
        cResult[1] = tmp2.loadingContainer;
        cResult[2] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : function ActivityViewLoadingIndicator() {
      return state(options, { style: closure_16().loadingContainer, children: state(closure_1_8, { size: "large" }) });
    };
let closure_20 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseActivityView(showLoadingIndicator) {
      const cResult = c.c(1);
      if (showLoadingIndicator.showLoadingIndicator) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp9 = state(closure_20, {});
          cResult[0] = tmp9;
          let first = tmp9;
        } else {
          first = cResult[0];
        }
      } else {
        let tmp4 = null;
        if (!tmp3) {
          tmp4 = tmp2;
        }
        return tmp4;
      }
    }
  : function BaseActivityView(showLoadingIndicator) {
      if (showLoadingIndicator.showLoadingIndicator) {
        let tmp3 = state(closure_20, {});
      } else {
        tmp3 = null;
        if (!tmp2) {
          tmp3 = tmp;
        }
      }
      return tmp3;
    };
let closure_21 = tmp7;
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmbeddedActivityWebView(arg0) {
      const cResult = require("c").c(11);
      if (cResult[0] !== arg0) {
        ({ deepLinkQueryParams, applicationId } = arg0);
        _require = applicationId;
        const tmp9 = _objectWithoutProperties(arg0, closure_4);
        cResult[0] = arg0;
        cResult[1] = applicationId;
        cResult[2] = deepLinkQueryParams;
        cResult[3] = tmp9;
        let tmp6 = tmp9;
        let tmp5 = deepLinkQueryParams;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      if (cResult[4] !== applicationId) {
        const fn = function y() {
          return EmbeddedActivitiesNativeManagerDefault.getOrCreateWebViewController(closure_0);
        };
        cResult[4] = applicationId;
        cResult[5] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[5];
      }
      const first = _slicedToArray(noop.useState(tmp10), 1)[0];
      if (cResult[6] === applicationId) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === first) {
            if (cResult[9] === tmp6) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
        }
      }
      const merged = Object.assign(tmp6);
      const tmp14 = closure_14(require("BaseEmbeddedAppWebView").BaseEmbeddedAppWebView, {
        iframeId: first,
        deepLinkQueryParams: tmp5,
        applicationId,
      });
      cResult[6] = applicationId;
      cResult[7] = tmp5;
      cResult[8] = first;
      cResult[9] = tmp6;
      cResult[10] = tmp14;
      tmp12 = tmp14;
      const obj = require("c");
      const obj2 = { iframeId: first, deepLinkQueryParams: tmp5, applicationId };
    }
  : function EmbeddedActivityWebView(applicationId) {
      applicationId = applicationId.applicationId;
      const merged = Object.assign(applicationId, Object.assign({ deepLinkQueryParams: 0, applicationId: 0 }));
      const merged1 = Object.assign(merged);
      return closure_14(applicationId(10739).BaseEmbeddedAppWebView, {
        iframeId: _slicedToArray(
          noop.useState(() => EmbeddedActivitiesNativeManagerDefault.getOrCreateWebViewController(applicationId)),
          1,
        )[0],
        deepLinkQueryParams: applicationId.deepLinkQueryParams,
        applicationId,
      });
    };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function EmbeddedActivityViewInner(channel) {
        const cResult = channel(first[10]).c(45);
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
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [EmbeddedActivitiesStore];
          cResult[1] = items;
          let tmp9 = items;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== tmp8) {
          class A {
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
          cResult[3] = A;
          cResult[4] = items1;
          let tmp12 = items1;
        } else {
          class A {
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
        let obj = channel(first[10]);
        const tmp7 = layoutMode;
        const stateFromStores = channel(first[19]).useStateFromStores(tmp9, A, tmp12);
        const tmpResult = channel(first[19]);
        [r10055, tmp15] = noop.useState(true);
        if (cResult[5] !== channel) {
          class A {
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
          class A {
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
          class A {
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
          class A {
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
          let tmp23 = items2;
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
        const layoutEffect = noop.useLayoutEffect(M, tmp23);
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
        if (cResult[11] !== undefined) {
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
          class W {
            constructor() {
              obj = closure_1(closure_2[16]);
              _location = undefined;
              if (closure_2 != null) {
                _location = closure_2.location;
              }
              obj1 = { location: _location, applicationId: null };
              id = undefined;
              if (closure_3 != null) {
                id = closure_3.id;
              }
              obj1.applicationId = id;
              leaveActivityResult = obj.leaveActivity(obj1);
              return;
            }
          }
          cResult[11] = tmp26;
          cResult[12] = W;
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
        c4 = undefined;
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
          class W {
            constructor() {
              obj = closure_1(closure_2[16]);
              _location = undefined;
              if (closure_2 != null) {
                _location = closure_2.location;
              }
              obj1 = { location: _location, applicationId: null };
              id = undefined;
              if (closure_3 != null) {
                id = closure_3.id;
              }
              obj1.applicationId = id;
              leaveActivityResult = obj.leaveActivity(obj1);
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
        const tmp14 = _slicedToArray(noop.useState(true), 2);
        cResult[13] = tmp8;
        cResult[14] = stateFromStores;
        cResult[15] = null == first;
        cResult[16] = {
          orientationLockState: stateFromStores,
          showLoadingIndicator: null == first,
          setShowLoadingStateForLockingOrientation: tmp15,
          application: tmp8,
          setOrientationLockState: channel(first[11]).setOrientationLockState,
        };
        let obj2 = {
          orientationLockState: stateFromStores,
          showLoadingIndicator: null == first,
          setShowLoadingStateForLockingOrientation: tmp15,
          application: tmp8,
          setOrientationLockState: channel(first[11]).setOrientationLockState,
        };
      }
    : function EmbeddedActivityViewInner(channel) {
        channel = channel.channel;
        const layoutMode = channel.layoutMode;
        let landscapeSafeAreasConfig = channel.portraitSafeAreasConfig;
        let setIsResetting;
        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        const tmp4 = layoutMode(currentEmbeddedActivity[18])();
        const items = [EmbeddedActivitiesStore];
        const items1 = [tmp4];
        const stateFromStores = channel(currentEmbeddedActivity[19]).useStateFromStores(
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
        let obj = channel(currentEmbeddedActivity[19]);
        const tmp2 = layoutMode;
        [tmp8, tmp9] = noop.useState(true);
        const tmp7 = _slicedToArray(noop.useState(true), 2);
        layoutMode(currentEmbeddedActivity[20])({ connectedEmbeddedActivity: currentEmbeddedActivity });
        const items2 = [layoutMode, currentEmbeddedActivity];
        const layoutEffect = noop.useLayoutEffect(() => {
          if (null != currentEmbeddedActivity) {
            const obj2 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
            DispatcherDefault.dispatch(obj2);
          }
        }, items2);
        const items3 = [tmp4, currentEmbeddedActivity];
        let id;
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
        const tmp10 = useQueryParams({ currentEmbeddedActivity, channel });
        let obj2 = {
          orientationLockState: stateFromStores,
          showLoadingIndicator: tmp15,
          setShowLoadingStateForLockingOrientation: tmp9,
          application: tmp4,
          setOrientationLockState: channel(currentEmbeddedActivity[11]).setOrientationLockState,
        };
        setIsResetting = closure_18({
          orientationLockState: stateFromStores,
          showLoadingIndicator: tmp15,
          setShowLoadingStateForLockingOrientation: tmp9,
          application: tmp4,
          setOrientationLockState: channel(currentEmbeddedActivity[11]).setOrientationLockState,
        }).setIsResetting;
        if (null != currentEmbeddedActivity) {
          if (null != id) {
            let obj3 = {};
            if (null != currentEmbeddedActivity.customId) {
              obj3.custom_id = currentEmbeddedActivity.customId;
            }
            if (null != currentEmbeddedActivity.referrerId) {
              obj3.referrer_id = currentEmbeddedActivity.referrerId;
            }
            const obj4 = { showLoadingIndicator: tmp15, isResetting: tmp18, children: null };
            const obj5 = { wakeLockKey: EmbeddedActivities };
            const items4 = [closure_14(tmp2(tmp3[21]), obj5)];
            const obj6 = {
              deepLinkQueryParams: obj3,
              onInvalidUrl() {
                id = undefined;
                if (channel != null) {
                  id = channel.id;
                }
                if (null != id) {
                  const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
                }
                EmbeddedActivitiesNativeManagerDefault.leaveActivity({
                  location: currentEmbeddedActivity.location,
                  applicationId: id,
                  showFeedback: false,
                });
                const obj3 = { location: currentEmbeddedActivity.location, applicationId: id, showFeedback: false };
              },
              onActivityCrash() {
                EmbeddedActivitiesNativeManagerDefault.releaseWebView();
                setIsResetting(true);
                const timerId = setTimeout(() => setIsResetting(false), 0);
              },
              applicationId: id,
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
            let id1;
            if (channel != null) {
              id1 = channel.id;
            }
            obj6.channelId = id1;
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            obj6.guildId = guild_id;
            obj6.activityUrl = currentEmbeddedActivity.url;
            let compositeInstanceId;
            if (currentEmbeddedActivity != null) {
              compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
            }
            obj6.activitySessionId = compositeInstanceId;
            obj6.queryParams = tmp10;
            obj6.onLoadError = callback;
            obj6.allowPopups = tmp5(tmp3[23]).allowPopups(tmp4);
            obj6.isPipOrGridMode = layoutMode === constants.PIP || layoutMode === constants.GRID;
            if (tmp19) {
              landscapeSafeAreasConfig = channel.landscapeSafeAreasConfig;
            }
            obj6.safeAreasConfig = landscapeSafeAreasConfig;
            obj6.ignoreSilentHardwareSwitch = !set.has(id);
            items4[1] = closure_14(closure_22, obj6);
            obj4.children = items4;
            return closure_15(closure_21, obj4);
          }
        }
        return null;
      },
);
let size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export const useBaseActivityView = tmp5;
export const ActivityViewLoadingIndicator = tmp6;
export const BaseActivityView = tmp7;
export const EmbeddedActivityView = memoResult;
