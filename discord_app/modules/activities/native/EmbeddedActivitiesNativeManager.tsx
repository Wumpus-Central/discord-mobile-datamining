// === Module 9024: EmbeddedActivitiesNativeManager ===

// Module 9024 (EmbeddedActivitiesNativeManager)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import AssetRegistryDefault from "AssetRegistry" /* 4811 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import react_nativeDefault from "react-native" /* 9012 */;
import ThermalUtilsDefault from "ThermalUtils" /* 9017 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9026 */;
import createWebViewControllerDefault from "createWebViewController" /* 9054 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 9014 */;
import size from "module_2" /* 2 */;

let basicChannel, connectedActivityLocation, currentEmbeddedActivity, rawThermalState;

const NativeEventEmitter = react_native.NativeEventEmitter;
const AnalyticEvents = Constants.AnalyticEvents;
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  let self = this;
  const self2 = this;
  nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
}
class EmbeddedActivitiesNativeManager extends EmbeddedActivitiesManager {
  _initialize() {
    let mediaSessionId;
    const self = this;
    super._initialize();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
    let addListenerResult;
    if (nativeEventEmitter != null) {
      addListenerResult = nativeEventEmitter.addListener("onHostDestroy", () => {
        currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        if (null != currentEmbeddedActivity) {
          const obj = { location: null, applicationId: null };
          ({ location: obj.location, applicationId: obj.applicationId } = currentEmbeddedActivity);
          self.leaveActivity(obj);
        }
      });
    }
    self.lifecycleSubscription = addListenerResult;
    const thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      thermalStateSubscription.remove();
    }
    const obj2 = ThermalUtilsDefault;
    self.thermalStateSubscription = obj2.addListener((rawThermalState) => {
      let guild_id;
      rawThermalState = rawThermalState.rawThermalState;
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let _location;
      const getEmbeddedActivityLocationChannelId = self(dependencyMap[9]).getEmbeddedActivityLocationChannelId;
      self(dependencyMap[9]);
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
      basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      const obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, thermal_state: rawThermalState, guild_id, media_session_id: mediaSessionId.getMediaSessionId() };
      guild_id = undefined;
      const track = AnalyticsUtilsDefault.track;
      const ACTIVITY_DEVICE_THERMAL_STATE_CHANGED = constants.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED;
      AnalyticsUtilsDefault;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      track(ACTIVITY_DEVICE_THERMAL_STATE_CHANGED, obj);
      const tmp10Result = DispatcherDefault;
      tmp10Result.dispatch({ type: "THERMAL_STATE_CHANGE", applicationId });
      let tmp16 = null != compositeInstanceId;
      const tmp2Result = self(dependencyMap[12]);
      const thermalState = tmp2Result.getThermalState();
      if (tmp16) {
        tmp16 = null != applicationId;
      }
      if (tmp16) {
        tmp16 = thermalState >= self(dependencyMap[12]).ThermalStates.SERIOUS;
      }
      if (tmp16) {
        const tmp2Result2 = self(dependencyMap[13]);
        const respondToSeriousThermalState = tmp2Result2.requestRespondToSeriousThermalState();
      }
    });
  }
  _terminate() {
    const self = this;
    super._terminate();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
    const thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      thermalStateSubscription.remove();
    }
    self.releaseWebView();
  }
  showErrorModal(reason) {
    let code;
    let intl;
    let message;
    ({ code, message } = reason);
    const obj = { title: intl.formatToPlainString(intl3.t.hbiAO6, { code }), body: message };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl3.intl;
    show(obj);
  }
  showLaunchErrorModal(message) {
    let intl;
    const obj = { title: intl.string(intl3.t.PtobXW), body: message };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl3.intl;
    show(obj);
  }
  showDevShelfOverrideEnabled() {
    let intl;
    const obj = { key: "EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED", content: intl.string(intl3.t.JfA7IK), icon: AssetRegistryDefault, iconColor: "status-positive" };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl3.intl;
    open(obj);
  }
  leaveActivity(arg0) {
    let _location;
    let applicationId;
    let showFeedback;
    const self = this;
    ({ location: _location, applicationId, showFeedback } = arg0);
    let isNotNullishResult = null != _location;
    const releaseWebViewResult = this.releaseWebView();
    if (isNotNullishResult) {
      const obj = GlobalUtils;
      isNotNullishResult = obj.isNotNullish(applicationId);
    }
    if (isNotNullishResult) {
      let tmp5 = null != releaseWebViewResult;
      const clearEmbeddedActivityState = self.clearEmbeddedActivityState;
      if (tmp5) {
        tmp5 = showFeedback;
      }
      const result = clearEmbeddedActivityState(_location, applicationId, tmp5);
    }
  }
  hidePIPEmbed(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    }
  }
  clearEmbeddedActivityState(_location, applicationId, showFeedback) {
    const obj = EmbeddedActivitiesActionCreators;
    const obj2 = { location: _location, applicationId, showFeedback };
    obj.stopEmbeddedActivity(obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId, lockState: null, pictureInPictureLockState: null, gridLockState: null };
    obj3.dispatch(obj4);
  }
  getOrCreateWebViewController() {
    const self = this;
    if (null != this.controller) {
      return self.controller.iframeId;
    } else {
      let obj = self(1266);
      const v4Result = obj.v4();
      let obj2 = {
        getOrigin() {
            const obj = connectedActivityLocation;
            connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
            let tmp2;
            if (null != connectedActivityLocation) {
              const selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
              let url;
              if (selfEmbeddedActivityForLocation != null) {
                url = selfEmbeddedActivityForLocation.url;
              }
              tmp2 = url;
            }
            return tmp2;
          },
        onDisallowedNavigation() {
            let intl;
            let intl2;
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
            const tmp5 = null != connectedActivityLocation && null != tmp2;
            if (tmp5) {
              const obj2 = { location: connectedActivityLocation, applicationId: tmp2, showFeedback: false };
              self.leaveActivity(obj2);
              const obj3 = { body: intl.string(intl3.t.tYBBWz), confirmText: intl2.string(intl3.t.BddRzS) };
              const show = actions_AlertActionCreatorsDefault.show;
              actions_AlertActionCreatorsDefault;
              intl = intl3.intl;
              intl2 = intl3.intl;
              show(obj3);
            }
          }
      };
      self.controller = createWebViewControllerDefault(v4Result, obj2);
      return v4Result;
    }
  }
  hasWebView() {
    return null != this.controller;
  }
  releaseWebView() {
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
  }
}
let closure_8 = EmbeddedActivitiesNativeManager.prototype;
const embeddedActivitiesNativeManager = new EmbeddedActivitiesNativeManager();
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;