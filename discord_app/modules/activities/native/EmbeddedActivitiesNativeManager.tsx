// discord_app/modules/activities/native/EmbeddedActivitiesNativeManager.tsx
import items3 from "items3";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import participantFromServer from "participantFromServer";
import { DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY as closure_7 } from "items3";
import ME from "ME";
import WebView from "WebView";
import set from "set";
import "getShelfItemTrackingProperties";
import set from "ensureGuildLoaded";
import { v1 } from "../../../../_runtime/00514_v1.js";
import { registerAsset } from "../../../../_runtime/09793_registerAsset.js";
import { AlertActionCreators } from "../../../actions/native/AlertActionCreators.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ComponentDispatcher } from "../../../utils/ComponentDispatchUtils.tsx";
import { isDiscordFrontendDevelopment } from "../../../utils/GlobalUtils.tsx";
import { dispatcher } from "../../toast/native/ToastActionCreators.tsx";
import { _runPrimaryAppCommandOrJoinEmbeddedActivity } from "../EmbeddedActivitiesActionCreators.tsx";

let c9;
let metroImportAll;
let require = arg1;
function postMessageToWebView() {
  const self = this;
  const apply = _postMessageToWebView.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _postMessageToWebView() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const table = tmp3;
      let c4 = 1;
      yield outer1_10.injectJavaScript(outer1_1(outer1_2[10])(closure_0));
      if (1 === tmp7) {
        c4 = 0;
        closure_0 = items3;
        const obj1 = callback(table[11]);
        obj1.captureException(closure_0);
        let c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  const _postMessageToWebView = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: metroImportAll, ComponentActions: c9 } = ME);
const webViewProxy = WebView.getWebViewProxy("EMBEDDED_ACTIVITY_WEB_VIEW_KEY");
let nativeEventEmitter = null;
if (set.isAndroid()) {
  nativeEventEmitter = new require("getEmbeddedActivityLocationChannelId").NativeEventEmitter(require("enforcing"));
}
class EmbeddedActivitiesNativeManager extends tmp6 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(reason) {
      const application = reason.application;
      let id;
      const connectedActivityLocation = outer1_6.getConnectedActivityLocation();
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
    obj = c11;
    addListenerResult = undefined;
    if (c11 != null) {
      str = "onHostDestroy";
      addListenerResult = obj.addListener("onHostDestroy", () => {
        let obj = outer1_6;
        const connectedActivityLocation = outer1_6.getConnectedActivityLocation();
        let selfEmbeddedActivityForLocation = null;
        if (null != connectedActivityLocation) {
          selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        }
        if (tmp3) {
          obj = { location: null, applicationId: null };
          obj[0] = connectedActivityLocation;
          obj[1] = selfEmbeddedActivityForLocation.applicationId;
          self.leaveActivity(obj);
        }
      });
    }
    self.lifecycleSubscription = addListenerResult;
    scriptMessageSubscription = self.scriptMessageSubscription;
    if (scriptMessageSubscription != null) {
      removeResult1 = scriptMessageSubscription.remove();
    }
    self.scriptMessageSubscription = getWebViewProxy.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        const connectedActivityLocation = outer1_6.getConnectedActivityLocation();
        let selfEmbeddedActivityForLocation = null;
        if (null != connectedActivityLocation) {
          selfEmbeddedActivityForLocation = outer1_6.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
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
          let obj = outer1_1(outer1_2[13]);
          obj = { origin: null, iframeId: null };
          obj[0] = url;
          obj[1] = iframeId;
          obj.handleMessage(parsed, obj, outer1_12);
        }
      } catch (tmp21) {
        const _SyntaxError = SyntaxError;
        if (tmp21 instanceof SyntaxError) {
          if (tmp2.data === outer1_7) {
            const connectedActivityLocation1 = outer1_6.getConnectedActivityLocation();
            if (null != connectedActivityLocation1) {
              const selfEmbeddedActivityForLocation1 = outer1_6.getSelfEmbeddedActivityForLocation(connectedActivityLocation1);
              let applicationId;
              if (selfEmbeddedActivityForLocation1 != null) {
                applicationId = selfEmbeddedActivityForLocation1.applicationId;
              }
            }
            let tmp28 = null != connectedActivityLocation1;
            if (tmp28) {
              tmp28 = null != tmp27;
            }
            if (tmp28) {
              obj = { location: null, applicationId: null, showFeedback: false };
              obj[0] = connectedActivityLocation1;
              obj[1] = tmp27;
              self.leaveActivity(obj);
              const obj1 = { body: null, confirmText: null };
              const intl = self(outer1_2[15]).intl;
              obj1[0] = intl.string(self(outer1_2[15]).t.tYBBWz);
              const intl2 = self(outer1_2[15]).intl;
              obj1[1] = intl2.string(self(outer1_2[15]).t.BddRzS);
              outer1_1(outer1_2[14]).show(obj1);
              const obj4 = outer1_1(outer1_2[14]);
            }
          }
        } else {
          throw tmp21;
        }
      }
    });
    thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      removeResult2 = thermalStateSubscription.remove();
    }
    obj2 = require("NativeModules");
    self.thermalStateSubscription = obj2.addListener((rawThermalState) => {
      let obj = connectedActivityLocation;
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      let selfEmbeddedActivityForLocation = null;
      if (null != connectedActivityLocation) {
        selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
      }
      const embeddedActivityLocationChannelId = self(table[17]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
      let compositeInstanceId;
      if (selfEmbeddedActivityForLocation != null) {
        compositeInstanceId = selfEmbeddedActivityForLocation.compositeInstanceId;
      }
      let applicationId;
      if (selfEmbeddedActivityForLocation != null) {
        applicationId = selfEmbeddedActivityForLocation.applicationId;
      }
      const obj2 = self(table[17]);
      const tmp9 = callback;
      obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, thermal_state: rawThermalState.rawThermalState, guild_id: null, media_session_id: null };
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      obj[4] = guild_id;
      obj[5] = mediaSessionId.getMediaSessionId();
      callback(table[18]).track(constants.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED, obj);
      const obj3 = callback(table[18]);
      tmp9(table[19]).dispatch({ type: "THERMAL_STATE_CHANGE", applicationId });
      let tmp3Result = tmp3(tmp4[20]);
      let tmp14 = null != compositeInstanceId;
      const thermalState = tmp3Result.getThermalState();
      if (tmp14) {
        tmp14 = null != applicationId;
      }
      if (tmp14) {
        tmp14 = thermalState >= tmp3(tmp4[20]).ThermalStates.SERIOUS;
      }
      if (tmp14) {
        tmp3Result = tmp3(tmp4[21]);
        const respondToSeriousThermalState = tmp3Result.requestRespondToSeriousThermalState();
      }
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
prototype["showErrorModal"] = function showErrorModal(reason, id) {
  let code;
  let message;
  ({ code, message } = reason);
  let obj = AlertActionCreators;
  obj = { title: null, body: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.hbiAO6, { code });
  obj[1] = message;
  obj.show(obj);
};
prototype["showLaunchErrorModal"] = function showLaunchErrorModal(message) {
  let obj = AlertActionCreators;
  obj = { title: null, body: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.PtobXW);
  obj[1] = message;
  obj.show(obj);
};
prototype["showDevShelfOverrideEnabled"] = function showDevShelfOverrideEnabled() {
  let obj = dispatcher;
  obj = { key: "EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED", content: null, icon: null, iconColor: "status-positive" };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t.JfA7IK);
  obj[2] = registerAsset;
  obj.open(obj);
};
prototype["releaseWebView"] = function releaseWebView() {
  const releaseIframeIdResult = this.releaseIframeId();
  if (null != releaseIframeIdResult) {
    const ComponentDispatch = ComponentDispatcher /* ComponentDispatcher */.ComponentDispatch;
    const obj = { id: null };
    obj[0] = releaseIframeIdResult;
    ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, obj);
    closure_10.releaseWebView();
  }
  return releaseIframeIdResult;
};
prototype["leaveActivity"] = function leaveActivity(arg0) {
  let _location;
  let applicationId;
  let showFeedback;
  const self = this;
  ({ location: _location, applicationId, showFeedback } = arg0);
  let isNotNullishResult = null != _location;
  if (isNotNullishResult) {
    isNotNullishResult = isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */.isNotNullish(applicationId);
    const obj = isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */;
  }
  if (isNotNullishResult) {
    let tmp5 = null != releaseWebViewResult;
    if (tmp5) {
      tmp5 = showFeedback;
    }
    const result = self.clearEmbeddedActivityState(_location, applicationId, tmp5);
  }
};
prototype["hidePIPEmbed"] = function hidePIPEmbed(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  }
};
prototype["clearEmbeddedActivityState"] = function clearEmbeddedActivityState(_location, applicationId, showFeedback) {
  let obj = _runPrimaryAppCommandOrJoinEmbeddedActivity /* _runPrimaryAppCommandOrJoinEmbeddedActivity */;
  obj = { location: _location, applicationId, showFeedback };
  obj.stopEmbeddedActivity(obj);
  obj = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId, lockState: null, pictureInPictureLockState: null };
  dispatcher.dispatch(obj);
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
    const v4Result = v1 /* v1 */.v4();
    tmp.iframeId = v4Result;
    return v4Result;
  }
};
const embeddedActivitiesNativeManager = new EmbeddedActivitiesNativeManager();
let result = set.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;
export const EMBEDDED_ACTIVITY_WEB_VIEW_KEY = "EMBEDDED_ACTIVITY_WEB_VIEW_KEY";