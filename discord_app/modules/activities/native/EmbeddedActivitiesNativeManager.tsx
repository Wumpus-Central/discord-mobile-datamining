// === Module 9515: EmbeddedActivitiesNativeManager ===

// Module 9515 (EmbeddedActivitiesNativeManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import v1 from "v1" /* 1256 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9504 */;
import NativeAppLifecycleModuleDefault from "NativeAppLifecycleModule" /* 9516 */;
import getPostMessageJavaScriptDefault from "getPostMessageJavaScript" /* 9517 */;
import ThermalUtilsDefault from "ThermalUtils" /* 9521 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9550 */;
import _modDef9566 from "module_9566" /* 9566 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 9518 */;

require = fn;
function postMessageToWebView() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _postMessageToWebView(arg0) {
  closure_2 = tmp3;
  await closure_2_11.injectJavaScript(getPostMessageJavaScriptDefault(closure_0));
  if (1 === tmp7) {
    c4 = 0;
    closure_129_0 = closure_3;
    closure_130_1(closure_130_2[12]).captureException(closure_129_0);
    c6 = 3;
    closure_130_1(closure_130_2[12]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
let closure_7 = fn(1920).DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, ComponentActions: closure_9 } = Constants);
const TransportTypes = fn(4465).TransportTypes;
const WebView = fn(8298);
const webViewProxy = WebView.getWebViewProxy("EMBEDDED_ACTIVITY_WEB_VIEW_KEY");
const PlatformUtils = fn(1115);
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  nativeEventEmitter = new fn(17).NativeEventEmitter(NativeAppLifecycleModuleDefault);
}
class EmbeddedActivitiesNativeManager extends tmp6 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(reason) {
      const application = reason.application;
      let id;
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      if (application != null) {
        id = application.id;
      }
      applyArgumentsResult.leaveActivity({ location: connectedActivityLocation, applicationId: id });
      const result = applyArgumentsResult.superHandleRPCDisconnect({ reason: reason.reason, application });
    };
    return applyArgumentsResult;
  }
  _initialize() {
    self = this;
    self = this;
    _initializeResult = super._initialize();
    lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      removeResult = lifecycleSubscription.remove();
    }
    obj = closure_12;
    addListenerResult = undefined;
    if (closure_12 != null) {
      str = "onHostDestroy";
      addListenerResult = obj.addListener("onHostDestroy", () => {
        let obj = EmbeddedActivitiesStore;
        connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
        let selfEmbeddedActivityForLocation = null;
        if (null != connectedActivityLocation) {
          selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        }
        if (tmp3) {
          obj = { location: connectedActivityLocation, applicationId: selfEmbeddedActivityForLocation.applicationId };
          self.leaveActivity(obj);
        }
        tmp3 = null != selfEmbeddedActivityForLocation && null != connectedActivityLocation;
      });
    }
    self.lifecycleSubscription = addListenerResult;
    scriptMessageSubscription = self.scriptMessageSubscription;
    if (scriptMessageSubscription != null) {
      removeResult1 = scriptMessageSubscription.remove();
    }
    self.scriptMessageSubscription = closure_11.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
        let selfEmbeddedActivityForLocation = null;
        if (null != connectedActivityLocation) {
          selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        }
        if (selfEmbeddedActivityForLocation != null) {
          const url = selfEmbeddedActivityForLocation.url;
        }
        const iframeId = self.iframeId;
        let tmp14 = typeof parsed === "object";
        if (typeof parsed === "object") {
          tmp14 = null != tmp11;
        }
        if (tmp14) {
          tmp14 = null != iframeId;
        }
        if (tmp14) {
          let obj = WebViewPostMessageTransportDefault;
          obj = { type: TransportTypes.POST_MESSAGE, origin: url, iframeId };
          obj.handleMessage(parsed, obj, postMessageToWebView);
        }
      } catch (tmp22) {
        const _SyntaxError = SyntaxError;
        if (tmp22 instanceof SyntaxError) {
          if (tmp2.data === closure_7) {
            const connectedActivityLocation1 = EmbeddedActivitiesStore.getConnectedActivityLocation();
            if (null != connectedActivityLocation1) {
              const selfEmbeddedActivityForLocation1 = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation1);
              let applicationId;
              if (selfEmbeddedActivityForLocation1 != null) {
                applicationId = selfEmbeddedActivityForLocation1.applicationId;
              }
            }
            let tmp29 = null != connectedActivityLocation1;
            if (tmp29) {
              tmp29 = null != tmp28;
            }
            if (tmp29) {
              obj = { location: connectedActivityLocation1, applicationId: tmp28, showFeedback: false };
              self.leaveActivity(obj);
              const obj1 = { body: null, confirmText: null };
              const intl = util.intl;
              obj1.body = intl.string(util.t.tYBBWz);
              const intl2 = util.intl;
              obj1.confirmText = intl2.string(util.t.BddRzS);
              actions_AlertActionCreatorsDefault.show(obj1);
            }
          }
        } else {
          throw tmp22;
        }
      }
    });
    thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      removeResult2 = thermalStateSubscription.remove();
    }
    obj2 = closure_1(closure_2[17]);
    self.thermalStateSubscription = obj2.addListener((rawThermalState) => {
      let obj = connectedActivityLocation;
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      let selfEmbeddedActivityForLocation = null;
      if (null != connectedActivityLocation) {
        selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
      }
      const embeddedActivityLocationChannelId = self(dependencyMap[18]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
      let compositeInstanceId;
      if (selfEmbeddedActivityForLocation != null) {
        compositeInstanceId = selfEmbeddedActivityForLocation.compositeInstanceId;
      }
      let applicationId;
      if (selfEmbeddedActivityForLocation != null) {
        applicationId = selfEmbeddedActivityForLocation.applicationId;
      }
      const obj2 = self(dependencyMap[18]);
      obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, thermal_state: rawThermalState.rawThermalState, guild_id: null, media_session_id: null };
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      obj.guild_id = guild_id;
      obj.media_session_id = mediaSessionId.getMediaSessionId();
      AnalyticsUtilsDefault.track(constants.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED, obj);
      DispatcherDefault.dispatch({ type: "THERMAL_STATE_CHANGE", applicationId });
      let tmp3Result = self(dependencyMap[21]);
      let tmp14 = null != compositeInstanceId;
      const thermalState = tmp3Result.getThermalState();
      if (tmp14) {
        tmp14 = null != applicationId;
      }
      if (tmp14) {
        tmp14 = thermalState >= self(dependencyMap[21]).ThermalStates.SERIOUS;
      }
      if (tmp14) {
        tmp3Result = self(dependencyMap[22]);
        const respondToSeriousThermalState = tmp3Result.requestRespondToSeriousThermalState();
      }
      const tmp9Result = DispatcherDefault;
    });
    return;
  }
  _terminate() {
    self = this;
    _terminateResult = super._terminate();
    lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      removeResult = lifecycleSubscription.remove();
    }
    scriptMessageSubscription = self.scriptMessageSubscription;
    if (scriptMessageSubscription != null) {
      removeResult1 = scriptMessageSubscription.remove();
    }
    thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      removeResult2 = thermalStateSubscription.remove();
    }
    return;
  }
}
const prototype = EmbeddedActivitiesNativeManager.prototype;
prototype["showErrorModal"] = function showErrorModal(reason) {
  ({ code, message } = reason);
  const obj = { title: null, body: null };
  const intl = util.intl;
  obj.title = intl.formatToPlainString(util.t.hbiAO6, { code });
  obj.body = message;
  obj.show(obj);
};
prototype["showLaunchErrorModal"] = function showLaunchErrorModal(message) {
  const obj = { title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.PtobXW);
  obj.body = message;
  obj.show(obj);
};
prototype["showDevShelfOverrideEnabled"] = function showDevShelfOverrideEnabled() {
  const obj = { key: "EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED", content: null, icon: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj.content = intl.string(util.t.JfA7IK);
  obj.icon = _modDef9566;
  obj.open(obj);
};
prototype["releaseWebView"] = function releaseWebView() {
  const releaseIframeIdResult = this.releaseIframeId();
  if (null != releaseIframeIdResult) {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const obj = { id: releaseIframeIdResult };
    ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, obj);
    closure_11.releaseWebView();
  }
  return releaseIframeIdResult;
};
prototype["leaveActivity"] = function leaveActivity(arg0) {
  const self = this;
  ({ location: _location, applicationId, showFeedback } = arg0);
  let isNotNullishResult = null != _location;
  if (isNotNullishResult) {
    isNotNullishResult = GlobalUtils.isNotNullish(applicationId);
  }
  if (isNotNullishResult) {
    let tmp5 = null != releaseWebViewResult;
    if (tmp5) {
      tmp5 = showFeedback;
    }
    const result = self.clearEmbeddedActivityState(_location, applicationId, tmp5);
  }
  releaseWebViewResult = this.releaseWebView();
};
prototype["hidePIPEmbed"] = function hidePIPEmbed(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  }
};
prototype["clearEmbeddedActivityState"] = function clearEmbeddedActivityState(_location, applicationId, showFeedback) {
  let obj = { location: _location, applicationId, showFeedback };
  obj.stopEmbeddedActivity(obj);
  obj = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId, lockState: null, pictureInPictureLockState: null };
  DispatcherDefault.dispatch(obj);
};
prototype["releaseIframeId"] = function releaseIframeId() {
  this.iframeId = undefined;
  return this.iframeId;
};
prototype["hasIframeId"] = function hasIframeId() {
  return null != this.iframeId;
};
prototype["getOrCreateIframeId"] = function getOrCreateIframeId() {
  const iframeId = this.iframeId;
  if (null != iframeId) {
    return iframeId;
  } else {
    const v4Result = v1.v4();
    tmp.iframeId = v4Result;
    return v4Result;
  }
};
const embeddedActivitiesNativeManager = new EmbeddedActivitiesNativeManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;
export const EMBEDDED_ACTIVITY_WEB_VIEW_KEY = "EMBEDDED_ACTIVITY_WEB_VIEW_KEY";