// discord_app/modules/activities/native/EmbeddedActivitiesNativeManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import _modDef4805 from "../../../../_runtime/metro/04805__.js";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import NativeAppLifecycleModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx";
import ThermalUtilsDefault from "../../device/ThermalUtils.native.tsx";
import EmbeddedActivitiesActionCreators from "../EmbeddedActivitiesActionCreators.tsx";
import createWebViewControllerDefault from "../../embedded_apps/native/utils/createWebViewController.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";
import EmbeddedActivitiesManager from "../EmbeddedActivitiesManager.tsx";

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const PlatformUtils = fn(1369);
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
      const obj3 = {
        channel_id: embeddedActivityLocationChannelId,
        application_id: applicationId,
        activity_session_id: compositeInstanceId,
        thermal_state: rawThermalState.rawThermalState,
        guild_id: null,
        media_session_id: null,
      };
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
  const obj2 = {
    key: "EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED",
    content: null,
    icon: null,
    iconColor: "status-positive",
  };
  const intl = util.intl;
  obj2.content = intl.string(util.t.JfA7IK);
  obj2.icon = _modDef4805;
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
  DispatcherDefault.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
    applicationId,
    lockState: null,
    pictureInPictureLockState: null,
    gridLockState: null,
  });
};
prototype["getOrCreateWebViewController"] = function getOrCreateWebViewController() {
  const self = this;
  if (null != this.controller) {
    return self.controller.iframeId;
  } else {
    const v4Result = self(1266).v4();
    let obj2 = {
      getOrigin() {
        connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
        let tmp2;
        if (null != connectedActivityLocation) {
          const selfEmbeddedActivityForLocation =
            connectedActivityLocation.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          let url;
          if (selfEmbeddedActivityForLocation != null) {
            url = selfEmbeddedActivityForLocation.url;
          }
          tmp2 = url;
        }
        return tmp2;
      },
      onDisallowedNavigation() {
        connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
        let tmp2;
        if (null != connectedActivityLocation) {
          const selfEmbeddedActivityForLocation =
            EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
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
      },
    };
    self.controller = createWebViewControllerDefault(v4Result, obj2);
    return v4Result;
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
