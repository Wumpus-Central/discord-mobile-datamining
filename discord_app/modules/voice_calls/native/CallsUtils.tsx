import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { trackDeviceChanged } from "../../../actions/AudioActionCreators.tsx";
import { AlertActionCreators } from "../../../actions/native/AlertActionCreators.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { openChannelCallModal } from "../../../utils/native/PrivateChannelCallUtils.tsx";
import { mapped } from "../../errors/av_errors/AVError.tsx";
import { NativePermissionsRequestOptions } from "../../native_permissions/NativePermissionUtils.tsx";
import { useIsVideoMode } from "../../video_calls/native/useIsVideoMode.tsx";
import { RouteTypes } from "../VoiceCallTypes.tsx";
// discord_app/modules/voice_calls/native/CallsUtils.tsx
import _slicedToArray from "_slicedToArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import openChannelCallModal from "openChannelCallModal";
import { NativeModules } from "mapped";
import reset from "reset";
import closure_9 from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import handleConnectionOpen from "handleConnectionOpen";
import updateVoiceState from "updateVoiceState";
import handleAudioRouteChanged from "handleAudioRouteChanged";
import nativeEventEmitter from "nativeEventEmitter";
import { NativePermissionTypes } from "NativePermissionStatus";
import importDefaultResult from "useChannelVideoLimit";
import set from "set";
import importDefaultResult1 from "useChannelVideoLimit";
import set from "noop";

let require = arg1;
function _handleToggleVideo() {
  const self = this;
  const tmp = callback2((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let channelVideoLimit = 0;
      let closure_2 = tmp2;
      if (flag3 === undefined) {
        flag3 = true;
      }
      yield "ct";
      if (1 === tmp5) {
        if (arg0 === 1) {
          let limit = 3;
          throw arg1;
        } else if (arg0 === 2) {
          limit = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          closure_2 = videoEnabled.isVideoEnabled();
          channelVideoLimit = callback(channelVideoLimit[12]).getChannelVideoLimit(callback);
          let reachedLimit = channelVideoLimit.reachedLimit;
          limit = channelVideoLimit.limit;
          if (reachedLimit) {
            if (flag3) {
              const obj5 = flag3(channelVideoLimit[13]);
              const obj2 = { title: null, body: null };
              const intl = callback(channelVideoLimit[14]).intl;
              obj2[0] = intl.string(callback(channelVideoLimit[14]).t["3ffmE+"]);
              const intl2 = callback(channelVideoLimit[14]).intl;
              const obj3 = { limit: null };
              obj3[0] = limit.toString();
              obj2[1] = intl2.formatToPlainString(callback(channelVideoLimit[14]).t.x9mtl4, obj3);
              obj5.show(obj2);
            }
          } else if (closure_2) {
            let tmp12Result = tmp12(tmp13[16]);
            tmp12Result.setVideoEnabled(false);
          } else {
            tmp12Result = tmp12(tmp13[15]);
            reachedLimit = 2;
            limit = 1;
            const obj4 = { value: null, done: false };
            obj4[0] = tmp12Result.requestPermission(constants.CAMERA);
            return obj4;
          }
          limit = 3;
          const obj12 = callback(channelVideoLimit[12]);
        }
      } else if (arg0 === 1) {
        limit = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        if (arg1) {
          const obj = flag3(channelVideoLimit[16]);
          obj.setVideoEnabled(true);
        }
      }
      return arg1;
    })();
    iter.next();
    return iter;
  });
  const _handleToggleVideo = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = require("useChannelVideoLimit").debounce((arg0) => {
  const AudioRoutePicker = NativeModules.AudioRoutePicker;
  if (AudioRoutePicker != null) {
    AudioRoutePicker.handleAudioRoute(arg0);
  }
}, 250);
let closure_18 = require("useChannelVideoLimit").debounce((arg0) => {
  arg0();
}, 1);
let obj = { EARPIECE: require("registerAsset"), BLUETOOTH_HEADSET: require("registerAsset"), WIRED_HEADSET: require("registerAsset"), SPEAKERPHONE: require("registerAsset"), INVALID: require("registerAsset") };
let closure_20 = { TYPE_UNKNOWN: 0, [0]: "TYPE_UNKNOWN", TYPE_BUILTIN_EARPIECE: 1, [1]: "TYPE_BUILTIN_EARPIECE", TYPE_BUILTIN_SPEAKER: 2, [2]: "TYPE_BUILTIN_SPEAKER", TYPE_WIRED_HEADSET: 3, [3]: "TYPE_WIRED_HEADSET", TYPE_WIRED_HEADPHONES: 4, [4]: "TYPE_WIRED_HEADPHONES", TYPE_LINE_ANALOG: 5, [5]: "TYPE_LINE_ANALOG", TYPE_LINE_DIGITAL: 6, [6]: "TYPE_LINE_DIGITAL", TYPE_BLUETOOTH_SCO: 7, [7]: "TYPE_BLUETOOTH_SCO", TYPE_BLUETOOTH_A2DP: 8, [8]: "TYPE_BLUETOOTH_A2DP", TYPE_HDMI: 9, [9]: "TYPE_HDMI", TYPE_HDMI_ARC: 10, [10]: "TYPE_HDMI_ARC", TYPE_USB_DEVICE: 11, [11]: "TYPE_USB_DEVICE", TYPE_USB_ACCESSORY: 12, [12]: "TYPE_USB_ACCESSORY", TYPE_DOCK: 13, [13]: "TYPE_DOCK", TYPE_FM: 14, [14]: "TYPE_FM", TYPE_BUILTIN_MIC: 15, [15]: "TYPE_BUILTIN_MIC", TYPE_FM_TUNER: 16, [16]: "TYPE_FM_TUNER", TYPE_TV_TUNER: 17, [17]: "TYPE_TV_TUNER", TYPE_TELEPHONY: 18, [18]: "TYPE_TELEPHONY", TYPE_AUX_LINE: 19, [19]: "TYPE_AUX_LINE", TYPE_IP: 20, [20]: "TYPE_IP", TYPE_BUS: 21, [21]: "TYPE_BUS", TYPE_USB_HEADSET: 22, [22]: "TYPE_USB_HEADSET", TYPE_HEARING_AID: 23, [23]: "TYPE_HEARING_AID", TYPE_BUILTIN_SPEAKER_SAFE: 24, [24]: "TYPE_BUILTIN_SPEAKER_SAFE", TYPE_REMOTE_SUBMIX: 25, [25]: "TYPE_REMOTE_SUBMIX", TYPE_BLE_HEADSET: 26, [26]: "TYPE_BLE_HEADSET", TYPE_BLE_SPEAKER: 27, [27]: "TYPE_BLE_SPEAKER", TYPE_ECHO_REFERENCE: 28, [28]: "TYPE_ECHO_REFERENCE", TYPE_HDMI_EARC: 29, [29]: "TYPE_HDMI_EARC", TYPE_BLE_BROADCAST: 30, [30]: "TYPE_BLE_BROADCAST", TYPE_DOCK_ANALOG: 31, [31]: "TYPE_DOCK_ANALOG" };
let result = set.fileFinishedImporting("modules/voice_calls/native/CallsUtils.tsx");

export const handleToggleVideo = function handleToggleVideo(channel) {
  const self = this;
  const apply = _handleToggleVideo.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleToggleSelfDeaf = function handleToggleSelfDeaf() {
  trackDeviceChanged.toggleSelfDeaf();
};
export const handleToggleSelfMute = function handleToggleSelfMute() {
  const permission = NativePermissionsRequestOptions.requestPermission(NativePermissionTypes.AUDIO, { showAuthorizationError: true });
  const obj = NativePermissionsRequestOptions;
  trackDeviceChanged.toggleSelfMute();
};
export const showSuppressedAlert = function showSuppressedAlert() {
  let obj = AlertActionCreators;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.FJSZVM);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.etJjgW);
  obj.show(obj);
};
export const showServerMuteAlert = function showServerMuteAlert() {
  let obj = AlertActionCreators;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["+JQCa/"]);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.hsNm7d);
  obj.show(obj);
};
export const showServerDeafenAlert = function showServerDeafenAlert() {
  let obj = AlertActionCreators;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.QZ7WSS);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.Tl9JpL);
  obj.show(obj);
};
export const showCameraDisabledAlert = function showCameraDisabledAlert() {
  let obj = AlertActionCreators;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.OYzPcW);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.oBH7Y2);
  obj.show(obj);
};
export const showScreenshareDisabledAlert = function showScreenshareDisabledAlert() {
  let obj = AlertActionCreators;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["/x4knx"]);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.PpfzUE);
  obj.show(obj);
};
export const showMinOSScreenshareRequirementAlert = function showMinOSScreenshareRequirementAlert() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  let obj = mapped /* mapped */;
  const errorInfo = obj.getErrorInfo(mapped /* mapped */.AVError.SCREENSHARE_OS_NOT_SUPPORTED);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.ejOT95, { errorCode });
  obj = { title: null, body: null, hideActionSheet: false };
  const intl2 = tmp(1236).intl;
  obj[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.oblMYa);
  const intl3 = tmp(1236).intl;
  obj[1] = "" + intl3.string(getSystemLocale /* getSystemLocale */.t.Wnhd3q) + "\n\n" + formatToPlainStringResult;
  AlertActionCreators.show(obj);
};
export const showTabletRequirementAlert = function showTabletRequirementAlert() {
  let obj = AlertActionCreators;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["1N0dxa"]);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.qqDFVb);
  obj.show(obj);
};
export const handleDisconnect = function handleDisconnect(channel) {
  const result = importAll(1844).dismissGlobalKeyboard();
  const obj = importAll(1844);
  const result1 = openChannelCallModal /* openChannelCallModal */.dismissVoiceChannelScreens(channel, () => {
    const voiceChannel = callback(table[20]).selectVoiceChannel(null);
  });
};
export const audioDeviceToIconMap = obj;
export const getAudioDeviceToDisplayText = function getAudioDeviceToDisplayText(deviceType) {
  const obj = { EARPIECE: null, BLUETOOTH_HEADSET: null, WIRED_HEADSET: null, SPEAKERPHONE: null, INVALID: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.Ouoi6E);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.i6eV3z);
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl3.string(getSystemLocale /* getSystemLocale */.t.Dluojr);
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj[3] = intl4.string(getSystemLocale /* getSystemLocale */.t.snEhlu);
  const intl5 = getSystemLocale /* getSystemLocale */.intl;
  obj[4] = intl5.string(getSystemLocale /* getSystemLocale */.t.kCBL6t);
  if (deviceType.deviceType === constants.TYPE_BLE_HEADSET) {
    const intl6 = tmp(1236).intl;
    let stringResult = intl6.string(tmp(1236).t.BtXSp9);
  } else {
    stringResult = obj[deviceType.simpleDeviceType];
  }
  return stringResult;
};
export const useMaskedSpeakerStates = set.isAndroid() ? (() => {
  const items = [nativeEventEmitter];
  return initialize /* initialize */.useStateFromStoresObject(items, () => {
    activeAudioDevice = activeAudioDevice.getActiveAudioDevice();
    const obj = { isAudioRouteEnabled: true, toggleAudio: callback(table[27]).showAudioOutputSelector, routeSource: null };
    let simpleDeviceType;
    if (activeAudioDevice != null) {
      simpleDeviceType = activeAudioDevice.simpleDeviceType;
    }
    if (simpleDeviceType == null) {
      simpleDeviceType = callback(table[28]).AudioDeviceType.INVALID;
    }
    obj[2] = closure_19[simpleDeviceType];
    return obj;
  }, []);
}) : (() => {
  let obj = isEnabled(589);
  const items = [closure_9, handleConnectionOpen, reset, updateVoiceState, _detectH265HardwareDecode, handleAudioRouteChanged];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const isVideoMode = isEnabled(10738).isVideoMode(closure_9, handleConnectionOpen, reset, updateVoiceState, _detectH265HardwareDecode);
    currentRouteType = currentRouteType.getCurrentRouteType();
    isEnabled = currentRouteType === isEnabled(9072).RouteTypes.SPEAKER;
    const isBluetoothRoute = currentRouteType === isEnabled(9072).RouteTypes.BLUETOOTH;
    if (!isEnabled) {
      isEnabled = isBluetoothRoute;
    }
    if (!isEnabled) {
      isEnabled = isVideoMode;
    }
    return { isEnabled, isVideoMode, isBluetoothRoute };
  });
  isEnabled = stateFromStoresObject.isEnabled;
  let isVideoMode = stateFromStoresObject.isVideoMode;
  const tmp3 = callback(React.useState(isEnabled), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  const items1 = [first, isVideoMode];
  const items2 = [isEnabled, isVideoMode];
  callback = React.useCallback(() => {
    if (!outer1_13.getMultipleRoutesAvailable()) {
      outer1_18.cancel();
      if (!isVideoMode) {
        dependencyMap(!first);
      }
    }
    outer1_17(!first);
  }, items1);
  const effect = React.useEffect(() => {
    if (!outer1_13.getMultipleRoutesAvailable()) {
      if (!isVideoMode) {
        outer1_18(() => callback(closure_0));
      }
    }
    dependencyMap(isEnabled);
  }, items2);
  obj = { isAudioRouteEnabled: first, toggleAudio: callback, routeSource: isVideoMode(stateFromStoresObject.isBluetoothRoute ? 9093 : 9094) };
  return obj;
});
export const useImmediateMaskedSpeakerStates = () => {
  let obj = initialize /* initialize */;
  const items = [handleAudioRouteChanged];
  const stateFromStores = obj.useStateFromStores(items, () => currentRouteType.getCurrentRouteType());
  const tmp4 = useIsVideoMode();
  require = tmp4;
  let tmp5 = stateFromStores === RouteTypes /* RouteTypes */.RouteTypes.SPEAKER;
  const tmp6 = stateFromStores === RouteTypes /* RouteTypes */.RouteTypes.BLUETOOTH;
  if (!tmp5) {
    tmp5 = tmp6;
  }
  if (!tmp5) {
    tmp5 = tmp4;
  }
  importDefault = tmp5;
  const tmp7 = callback(React.useState(tmp5), 2);
  const first = tmp7[0];
  const dependencyMap = tmp7[1];
  const items1 = [first, tmp4];
  const items2 = [tmp5, tmp4];
  callback = React.useCallback(() => {
    if (!outer1_13.getMultipleRoutesAvailable()) {
      outer1_18.cancel();
      if (!closure_0) {
        callback(!first);
      }
    }
    outer1_17(!first);
  }, items1);
  const effect = React.useEffect(() => {
    callback(closure_1);
  }, items2);
  obj = { isAudioRouteEnabled: first, toggleAudio: callback, routeSource: importDefault(tmp6 ? 9093 : 9094) };
  return obj;
};