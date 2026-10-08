// === Module 10623: EmbeddedActivitiesNativeManager ===

// Module 10623 (EmbeddedActivitiesNativeManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import _modDef5005 from "module_5005" /* 5005 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5294 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import NativeAppLifecycleModuleDefault from "NativeAppLifecycleModule" /* 10624 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10635 */;
import makeIframeIdDefault from "makeIframeId" /* 11128 */;
import createWebViewControllerDefault from "createWebViewController" /* 11129 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 10625 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const PlatformUtils = fn(1381);
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  nativeEventEmitter = new fn(17).NativeEventEmitter(NativeAppLifecycleModuleDefault);
}
class EmbeddedActivitiesNativeManager extends tmp5 {
  _initialize() {
    self = this;
    self = this;
    _initializeResult = super._initialize();
    lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      removeResult = lifecycleSubscription.remove();
    }
    obj = closure_7;
    addListenerResult = undefined;
    if (closure_7 != null) {
      str = "onHostDestroy";
      addListenerResult = obj.addListener("onHostDestroy", () => {
        currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        if (null != currentEmbeddedActivity) {
          const obj = { location: null, applicationId: null };
          ({ location: obj.location, applicationId: obj.applicationId } = currentEmbeddedActivity);
          self.leaveActivity(obj);
        }
      });
    }
    self.lifecycleSubscription = addListenerResult;
    thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      removeResult1 = thermalStateSubscription.remove();
    }
    obj2 = closure_1(closure_2[8]);
    self.thermalStateSubscription = obj2.addListener((rawThermalState) => {
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const embeddedActivityLocationChannelId = self(dependencyMap[9]).getEmbeddedActivityLocationChannelId(_location);
      basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      const obj = self(dependencyMap[9]);
      const obj3 = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, thermal_state: rawThermalState.rawThermalState, guild_id: null, media_session_id: null };
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      obj3.guild_id = guild_id;
      obj3.media_session_id = mediaSessionId.getMediaSessionId();
      AnalyticsUtilsDefault.track(constants.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED, obj3);
      DispatcherDefault.dispatch({ type: "THERMAL_STATE_CHANGE", applicationId });
      const tmp9Result = DispatcherDefault;
      let tmp14 = null != compositeInstanceId;
      const thermalState = self(dependencyMap[12]).getThermalState();
      if (tmp14) {
        tmp14 = null != applicationId;
      }
      if (tmp14) {
        tmp14 = thermalState >= self(dependencyMap[12]).ThermalStates.SERIOUS;
      }
      if (tmp14) {
        const respondToSeriousThermalState = self(dependencyMap[13]).requestRespondToSeriousThermalState();
        const tmp2Result2 = self(dependencyMap[13]);
      }
      const tmp2Result = self(dependencyMap[12]);
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
    thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      removeResult1 = thermalStateSubscription.remove();
    }
    releaseWebViewResult = self.releaseWebView();
    return;
  }
}
const prototype = EmbeddedActivitiesNativeManager.prototype;
prototype["showErrorModal"] = function showErrorModal(reason) {
  ({ code, message } = reason);
  const obj2 = { title: null, body: null };
  const intl = util.intl;
  obj2.title = intl.formatToPlainString(util.t.hbiAO6, { code });
  obj2.body = message;
  actions_AlertActionCreatorsDefault.show(obj2);
};
prototype["showLaunchErrorModal"] = function showLaunchErrorModal(message) {
  const obj2 = { title: null, body: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.PtobXW);
  obj2.body = message;
  actions_AlertActionCreatorsDefault.show(obj2);
};
prototype["showDevShelfOverrideEnabled"] = function showDevShelfOverrideEnabled() {
  const obj2 = { key: "EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED", content: null, icon: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.JfA7IK);
  obj2.icon = _modDef5005;
  ToastActionCreatorsDefault.open(obj2);
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
  EmbeddedActivitiesActionCreators.stopEmbeddedActivity({ location: _location, applicationId, showFeedback });
  const obj2 = { location: _location, applicationId, showFeedback };
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId, lockState: null, pictureInPictureLockState: null, gridLockState: null });
};
prototype["getOrCreateWebViewController"] = function getOrCreateWebViewController(applicationId) {
  const self = this;
  if (null != this.controller) {
    return self.controller.iframeId;
  } else {
    const tmp4 = makeIframeIdDefault();
    const obj = { contextSource: null, getOrigin: null, onDisallowedNavigation: null };
    let obj2 = { type: self(10615).EmbeddedContextSourceType.ACTIVITY, applicationId };
    obj.contextSource = obj2;
    obj.getOrigin = function getOrigin() {
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      let tmp2;
      if (null != connectedActivityLocation) {
        const selfEmbeddedActivityForLocation = connectedActivityLocation.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        let url;
        if (selfEmbeddedActivityForLocation != null) {
          url = selfEmbeddedActivityForLocation.url;
        }
        tmp2 = url;
      }
      return tmp2;
    };
    obj.onDisallowedNavigation = function onDisallowedNavigation() {
      connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      let tmp2;
      if (null != connectedActivityLocation) {
        const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        let applicationId;
        if (selfEmbeddedActivityForLocation != null) {
          applicationId = selfEmbeddedActivityForLocation.applicationId;
        }
        tmp2 = applicationId;
      }
      if (tmp5) {
        const obj2 = { location: connectedActivityLocation, applicationId: tmp2, showFeedback: false };
        self.leaveActivity(obj2);
        const obj4 = { body: null, confirmText: null };
        const intl = util.intl;
        obj4.body = intl.string(util.t.tYBBWz);
        const intl2 = util.intl;
        obj4.confirmText = intl2.string(util.t.BddRzS);
        actions_AlertActionCreatorsDefault.show(obj4);
      }
      tmp5 = null != connectedActivityLocation && null != tmp2;
    };
    self.controller = createWebViewControllerDefault(tmp4, obj);
    return tmp4;
  }
};
prototype["hasWebView"] = function hasWebView() {
  return null != this.controller;
};
prototype["releaseWebView"] = function releaseWebView() {
  const self = this;
  const controller = this.controller;
  let iframeId;
  if (controller != null) {
    iframeId = controller.iframeId;
  }
  const controller2 = self.controller;
  if (controller2 != null) {
    controller2.release();
  }
  self.controller = undefined;
  return iframeId;
};
const embeddedActivitiesNativeManager = new EmbeddedActivitiesNativeManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;