// === Module 14775: EmbeddedActivitiesNativeManager ===

// Module 14775 (EmbeddedActivitiesNativeManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5296 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10853 */;
import activityWebViewController from "activityWebViewController" /* 10928 */;
import NativeAppLifecycleModuleDefault from "NativeAppLifecycleModule" /* 14776 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 14777 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const PlatformUtils = fn(1382);
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
prototype["showDevShelfOverrideEnabled"] = function showDevShelfOverrideEnabled() {
  const obj2 = { text: null, variant: "success" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.JfA7IK);
  ToastActionCreatorsDefault.open("EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED", obj2);
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
prototype["releaseWebView"] = function releaseWebView() {
  return activityWebViewController.releaseActivityWebView();
};
const embeddedActivitiesNativeManager = new EmbeddedActivitiesNativeManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;