// === Module 10758: postMessageToWebView ===

// Module 10758 (postMessageToWebView)
import v1 from "v1" /* 514 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import dispatcherDefault2 from "dispatcher" /* 4162 */;
import _modDef4809 from "module_4809" /* 4809 */;
import registerAssetDefault from "registerAsset" /* 10095 */;
import enforcingDefault from "enforcing" /* 10759 */;
import getShelfItemTrackingPropertiesDefault from "getShelfItemTrackingProperties" /* 10761 */;
import NativeModulesDefault from "NativeModules" /* 10765 */;
import _runPrimaryAppCommandOrJoinEmbeddedActivity from "_runPrimaryAppCommandOrJoinEmbeddedActivity" /* 10771 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "createRTCConnection" /* 4518 */;
import closure_6 from "participantFromServer" /* 1390 */;
import { DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY as closure_7 } from "items3" /* 4472 */;
import ME from "ME" /* 676 */;
import { TransportTypes } from "RPC_SCOPE_CONFIG" /* 4346 */;
import WebView from "WebView" /* 8022 */;
import set from "set" /* 500 */;

require = arg1;
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
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      const table = tmp3;
      c4 = 1;
      yield closure_1_11.injectJavaScript(closure_1_1(closure_1_2[11])(closure_0));
      if (1 === tmp7) {
        c4 = 0;
        closure_0 = closure_3;
        obj1 = callback(table[12]);
        obj1.captureException(closure_0);
        c6 = 3;
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
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_8, ComponentActions: c9 } = ME);
const webViewProxy = WebView.getWebViewProxy("EMBEDDED_ACTIVITY_WEB_VIEW_KEY");
let nativeEventEmitter = null;
if (set.isAndroid()) {
  nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(enforcingDefault);
}
getShelfItemTrackingPropertiesDefault;
class EmbeddedActivitiesNativeManager extends tmp6 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(reason) {
      const application = reason.application;
      let id;
      const connectedActivityLocation = closure_1_6.getConnectedActivityLocation();
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
        let obj = closure_1_6;
        const connectedActivityLocation = closure_1_6.getConnectedActivityLocation();
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
    self.scriptMessageSubscription = closure_11.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        const connectedActivityLocation = closure_1_6.getConnectedActivityLocation();
        let selfEmbeddedActivityForLocation = null;
        if (null != connectedActivityLocation) {
          selfEmbeddedActivityForLocation = closure_1_6.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
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
          let obj = closure_1_1(closure_1_2[14]);
          obj = { type: null, origin: null, iframeId: null };
          obj[0] = closure_1_10.POST_MESSAGE;
          obj[1] = url;
          obj[2] = iframeId;
          obj.handleMessage(parsed, obj, closure_1_13);
        }
      } catch (tmp22) {
        const _SyntaxError = SyntaxError;
        if (tmp22 instanceof SyntaxError) {
          if (tmp2.data === closure_1_7) {
            const connectedActivityLocation1 = closure_1_6.getConnectedActivityLocation();
            if (null != connectedActivityLocation1) {
              const selfEmbeddedActivityForLocation1 = closure_1_6.getSelfEmbeddedActivityForLocation(connectedActivityLocation1);
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
              obj = { location: null, applicationId: null, showFeedback: false };
              obj[0] = connectedActivityLocation1;
              obj[1] = tmp28;
              self.leaveActivity(obj);
              obj1 = { body: null, confirmText: null };
              const intl = self(closure_1_2[16]).intl;
              obj1[0] = intl.string(self(closure_1_2[16]).t.tYBBWz);
              const intl2 = self(closure_1_2[16]).intl;
              obj1[1] = intl2.string(self(closure_1_2[16]).t.BddRzS);
              closure_1_1(closure_1_2[15]).show(obj1);
              const obj4 = closure_1_1(closure_1_2[15]);
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
    obj2 = require("NativeModules");
    self.thermalStateSubscription = obj2.addListener((rawThermalState) => {
      let obj = connectedActivityLocation;
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      let selfEmbeddedActivityForLocation = null;
      if (null != connectedActivityLocation) {
        selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
      }
      const embeddedActivityLocationChannelId = self(table[18]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
      let compositeInstanceId;
      if (selfEmbeddedActivityForLocation != null) {
        compositeInstanceId = selfEmbeddedActivityForLocation.compositeInstanceId;
      }
      let applicationId;
      if (selfEmbeddedActivityForLocation != null) {
        applicationId = selfEmbeddedActivityForLocation.applicationId;
      }
      const obj2 = self(table[18]);
      const tmp9 = callback;
      obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, thermal_state: rawThermalState.rawThermalState, guild_id: null, media_session_id: null };
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      obj[4] = guild_id;
      obj[5] = mediaSessionId.getMediaSessionId();
      callback(table[19]).track(constants.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED, obj);
      const obj3 = callback(table[19]);
      tmp9(table[20]).dispatch({ type: "THERMAL_STATE_CHANGE", applicationId });
      let tmp3Result = tmp3(tmp4[21]);
      let tmp14 = null != compositeInstanceId;
      const thermalState = tmp3Result.getThermalState();
      if (tmp14) {
        tmp14 = null != applicationId;
      }
      if (tmp14) {
        tmp14 = thermalState >= tmp3(tmp4[21]).ThermalStates.SERIOUS;
      }
      if (tmp14) {
        tmp3Result = tmp3(tmp4[22]);
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
  ({ code, message } = reason);
  let obj = _modDef4809;
  obj = { title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.formatToPlainString(getSystemLocale.t.hbiAO6, { code });
  obj[1] = message;
  obj.show(obj);
};
prototype["showLaunchErrorModal"] = function showLaunchErrorModal(message) {
  let obj = _modDef4809;
  obj = { title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.PtobXW);
  obj[1] = message;
  obj.show(obj);
};
prototype["showDevShelfOverrideEnabled"] = function showDevShelfOverrideEnabled() {
  let obj = dispatcherDefault2;
  obj = { key: "EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED", content: null, icon: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.JfA7IK);
  obj[2] = registerAssetDefault;
  obj.open(obj);
};
prototype["releaseWebView"] = function releaseWebView() {
  const releaseIframeIdResult = this.releaseIframeId();
  if (null != releaseIframeIdResult) {
    const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
    const obj = { id: null };
    obj[0] = releaseIframeIdResult;
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
    isNotNullishResult = isDiscordFrontendDevelopment.isNotNullish(applicationId);
    const obj = isDiscordFrontendDevelopment;
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
  let obj = _runPrimaryAppCommandOrJoinEmbeddedActivity;
  obj = { location: _location, applicationId, showFeedback };
  obj.stopEmbeddedActivity(obj);
  obj = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId, lockState: null, pictureInPictureLockState: null };
  dispatcherDefault.dispatch(obj);
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
let result = set.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;
export const EMBEDDED_ACTIVITY_WEB_VIEW_KEY = "EMBEDDED_ACTIVITY_WEB_VIEW_KEY";