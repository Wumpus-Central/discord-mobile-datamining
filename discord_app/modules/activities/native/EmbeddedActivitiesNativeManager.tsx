// discord_app/modules/activities/native/EmbeddedActivitiesNativeManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import ThermalUtilsDefault from "../../device/ThermalUtils.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import EmbeddedActivitiesActionCreators from "../EmbeddedActivitiesActionCreators.tsx";
import activityWebViewController from "activityWebViewController.tsx";
import NativeAppLifecycleModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";
import EmbeddedActivitiesManager from "../EmbeddedActivitiesManager.tsx";

require = fn;
const Constants = fn(1087);
({ AnalyticEvents: metroRequire, ComponentActions: closure_7 } = Constants);
const PlatformUtils = fn(1384);
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  nativeEventEmitter = new fn(17).NativeEventEmitter(NativeAppLifecycleModuleDefault);
}
class EmbeddedActivitiesNativeManager extends tmp6 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handleOpenEmbeddedActivity = function handleOpenEmbeddedActivity() {
      ChatInputUtils.dismissKeyboard();
    };
    return applyArgumentsResult;
  }
  _initialize() {
    self = this;
    self = this;
    _initializeResult = super._initialize();
    tmp2 = closure_2;
    ComponentDispatch = self(closure_2[8]).ComponentDispatch;
    subscription = ComponentDispatch.subscribe(
      ComponentActions.OPEN_EMBEDDED_ACTIVITY,
      this.handleOpenEmbeddedActivity,
    );
    lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      removeResult = lifecycleSubscription.remove();
    }
    obj = closure_8;
    addListenerResult = undefined;
    if (closure_8 != null) {
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
    obj2 = closure_1(tmp2[9]);
    self.thermalStateSubscription = obj2.addListener((rawThermalState) => {
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const embeddedActivityLocationChannelId = self(dependencyMap[10]).getEmbeddedActivityLocationChannelId(_location);
      basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      const obj = self(dependencyMap[10]);
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
      const thermalState = self(dependencyMap[13]).getThermalState();
      if (tmp14) {
        tmp14 = null != applicationId;
      }
      if (tmp14) {
        tmp14 = thermalState >= self(dependencyMap[13]).ThermalStates.SERIOUS;
      }
      if (tmp14) {
        const respondToSeriousThermalState = self(dependencyMap[14]).requestRespondToSeriousThermalState();
        const tmp2Result2 = self(dependencyMap[14]);
      }
      const tmp2Result = self(dependencyMap[13]);
    });
    return;
  }
  _terminate() {
    self = this;
    _terminateResult = super._terminate();
    ComponentDispatch = closure_0(closure_2[8]).ComponentDispatch;
    unsubscribeResult = ComponentDispatch.unsubscribe(
      ComponentActions.OPEN_EMBEDDED_ACTIVITY,
      this.handleOpenEmbeddedActivity,
    );
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
  DispatcherDefault.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
    applicationId,
    lockState: null,
    pictureInPictureLockState: null,
    gridLockState: null,
  });
};
prototype["releaseWebView"] = function releaseWebView() {
  return activityWebViewController.releaseActivityWebView();
};
const embeddedActivitiesNativeManager = new EmbeddedActivitiesNativeManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;
