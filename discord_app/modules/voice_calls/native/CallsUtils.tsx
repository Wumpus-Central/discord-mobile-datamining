// === Module 9695: _handleToggleVideo ===

// Module 9695 (_handleToggleVideo)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dismissGlobalKeyboardAll from "dismissGlobalKeyboard" /* 1892 */;
import openChannelCallModal from "openChannelCallModal" /* 4680 */;
import _modDef4810 from "module_4810" /* 4810 */;
import mapped from "mapped" /* 9486 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9702 */;
import registerAssetDefault from "registerAsset" /* 9721 */;
import registerAssetDefault2 from "registerAsset" /* 9722 */;
import registerAssetDefault3 from "registerAsset" /* 9723 */;
import useIsVideoModeDefault from "useIsVideoMode" /* 9814 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_8 from "reset" /* 4467 */;
import closure_9 from "ensureGuildLoaded" /* 1391 */;
import closure_10 from "_detectH265HardwareDecode" /* 4496 */;
import closure_11 from "handleConnectionOpen" /* 1981 */;
import closure_12 from "updateVoiceState" /* 4464 */;
import closure_13 from "handleAudioRouteChanged" /* 9696 */;
import closure_14 from "nativeEventEmitter" /* 9699 */;
import { NativePermissionTypes } from "NativePermissionStatus" /* 4683 */;
import importDefaultResult from "apply" /* 12 */;
import set from "set" /* 500 */;

require = arg1;
function _handleToggleVideo() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (limit === 2) {
        limit = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          limit = 2;
          if (0 === reachedLimit) {
            if (arg0 === 1) {
              limit = 3;
              throw arg1;
            } else if (arg0 === 2) {
              limit = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let channelVideoLimit = 0;
              closure_2 = tmp2;
              let flag3;
              if (flag3 === undefined) {
                flag3 = true;
              }
              closure_2 = undefined;
              channelVideoLimit = undefined;
              reachedLimit = undefined;
              limit = undefined;
              reachedLimit = 1;
              limit = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                limit = 3;
                throw arg1;
              } else if (arg0 === 2) {
                limit = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                closure_2 = videoEnabled.isVideoEnabled();
                channelVideoLimit = callback(channelVideoLimit[12]).getChannelVideoLimit(callback);
                reachedLimit = channelVideoLimit.reachedLimit;
                limit = channelVideoLimit.limit;
                if (reachedLimit) {
                  if (flag3) {
                    let obj5 = flag3(channelVideoLimit[13]);
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
                obj = flag3(channelVideoLimit[16]);
                obj.setVideoEnabled(true);
              }
            }
            limit = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
        } catch (tmp31) {
          limit = tmp;
          throw tmp31;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = importDefaultResult.debounce((arg0) => {
  const AudioRoutePicker = NativeModules.AudioRoutePicker;
  if (AudioRoutePicker != null) {
    AudioRoutePicker.handleAudioRoute(arg0);
  }
}, 250);
let closure_18 = importDefaultResult.debounce((arg0) => {
  arg0();
}, 1);
let obj = { EARPIECE: registerAssetDefault, BLUETOOTH_HEADSET: registerAssetDefault2, WIRED_HEADSET: registerAssetDefault3, SPEAKERPHONE: registerAssetDefault3, INVALID: registerAssetDefault3 };
let closure_20 = { TYPE_UNKNOWN: 0, [0]: "TYPE_UNKNOWN", TYPE_BUILTIN_EARPIECE: 1, [1]: "TYPE_BUILTIN_EARPIECE", TYPE_BUILTIN_SPEAKER: 2, [2]: "TYPE_BUILTIN_SPEAKER", TYPE_WIRED_HEADSET: 3, [3]: "TYPE_WIRED_HEADSET", TYPE_WIRED_HEADPHONES: 4, [4]: "TYPE_WIRED_HEADPHONES", TYPE_LINE_ANALOG: 5, [5]: "TYPE_LINE_ANALOG", TYPE_LINE_DIGITAL: 6, [6]: "TYPE_LINE_DIGITAL", TYPE_BLUETOOTH_SCO: 7, [7]: "TYPE_BLUETOOTH_SCO", TYPE_BLUETOOTH_A2DP: 8, [8]: "TYPE_BLUETOOTH_A2DP", TYPE_HDMI: 9, [9]: "TYPE_HDMI", TYPE_HDMI_ARC: 10, [10]: "TYPE_HDMI_ARC", TYPE_USB_DEVICE: 11, [11]: "TYPE_USB_DEVICE", TYPE_USB_ACCESSORY: 12, [12]: "TYPE_USB_ACCESSORY", TYPE_DOCK: 13, [13]: "TYPE_DOCK", TYPE_FM: 14, [14]: "TYPE_FM", TYPE_BUILTIN_MIC: 15, [15]: "TYPE_BUILTIN_MIC", TYPE_FM_TUNER: 16, [16]: "TYPE_FM_TUNER", TYPE_TV_TUNER: 17, [17]: "TYPE_TV_TUNER", TYPE_TELEPHONY: 18, [18]: "TYPE_TELEPHONY", TYPE_AUX_LINE: 19, [19]: "TYPE_AUX_LINE", TYPE_IP: 20, [20]: "TYPE_IP", TYPE_BUS: 21, [21]: "TYPE_BUS", TYPE_USB_HEADSET: 22, [22]: "TYPE_USB_HEADSET", TYPE_HEARING_AID: 23, [23]: "TYPE_HEARING_AID", TYPE_BUILTIN_SPEAKER_SAFE: 24, [24]: "TYPE_BUILTIN_SPEAKER_SAFE", TYPE_REMOTE_SUBMIX: 25, [25]: "TYPE_REMOTE_SUBMIX", TYPE_BLE_HEADSET: 26, [26]: "TYPE_BLE_HEADSET", TYPE_BLE_SPEAKER: 27, [27]: "TYPE_BLE_SPEAKER", TYPE_ECHO_REFERENCE: 28, [28]: "TYPE_ECHO_REFERENCE", TYPE_HDMI_EARC: 29, [29]: "TYPE_HDMI_EARC", TYPE_BLE_BROADCAST: 30, [30]: "TYPE_BLE_BROADCAST", TYPE_DOCK_ANALOG: 31, [31]: "TYPE_DOCK_ANALOG" };
const importDefaultResult1 = importDefaultResult;
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
  trackDeviceChangedDefault.toggleSelfDeaf();
};
export const handleToggleSelfMute = function handleToggleSelfMute() {
  trackDeviceChangedDefault.toggleSelfMute();
};
export const showSuppressedAlert = function showSuppressedAlert() {
  obj = _modDef4810;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.FJSZVM);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.etJjgW);
  obj.show(obj);
};
export const showServerMuteAlert = function showServerMuteAlert() {
  obj = _modDef4810;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["+JQCa/"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.hsNm7d);
  obj.show(obj);
};
export const showServerDeafenAlert = function showServerDeafenAlert() {
  obj = _modDef4810;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.QZ7WSS);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.Tl9JpL);
  obj.show(obj);
};
export const showCameraDisabledAlert = function showCameraDisabledAlert() {
  obj = _modDef4810;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.OYzPcW);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.oBH7Y2);
  obj.show(obj);
};
export const showScreenshareDisabledAlert = function showScreenshareDisabledAlert() {
  obj = _modDef4810;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["/x4knx"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.PpfzUE);
  obj.show(obj);
};
export const showMinOSScreenshareRequirementAlert = function showMinOSScreenshareRequirementAlert() {
  const intl = getSystemLocale.intl;
  obj = mapped;
  const errorInfo = obj.getErrorInfo(mapped.AVError.SCREENSHARE_OS_NOT_SUPPORTED);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.ejOT95, { errorCode });
  obj = { title: null, body: null, hideActionSheet: false };
  const intl2 = tmp(1236).intl;
  obj[0] = intl2.string(getSystemLocale.t.oblMYa);
  const intl3 = tmp(1236).intl;
  obj[1] = "" + intl3.string(getSystemLocale.t.Wnhd3q) + "\n\n" + formatToPlainStringResult;
  _modDef4810.show(obj);
};
export const showTabletRequirementAlert = function showTabletRequirementAlert() {
  obj = _modDef4810;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["1N0dxa"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.qqDFVb);
  obj.show(obj);
};
export const handleDisconnect = function handleDisconnect(channel) {
  const result = dismissGlobalKeyboardAll.dismissGlobalKeyboard();
  obj = dismissGlobalKeyboardAll;
  const result1 = openChannelCallModal.dismissVoiceChannelScreens(channel, () => {
    const voiceChannel = callback(table[20]).selectVoiceChannel(null);
  });
};
export const audioDeviceToIconMap = obj;
export const getAudioDeviceToDisplayText = function getAudioDeviceToDisplayText(deviceType) {
  obj = { EARPIECE: null, BLUETOOTH_HEADSET: null, WIRED_HEADSET: null, SPEAKERPHONE: null, INVALID: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Ouoi6E);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.i6eV3z);
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t.Dluojr);
  const intl4 = getSystemLocale.intl;
  obj[3] = intl4.string(getSystemLocale.t.snEhlu);
  const intl5 = getSystemLocale.intl;
  obj[4] = intl5.string(getSystemLocale.t.kCBL6t);
  if (deviceType.deviceType === constants.TYPE_BLE_HEADSET) {
    const intl6 = tmp(1236).intl;
    let stringResult = intl6.string(tmp(1236).t.BtXSp9);
  } else {
    stringResult = obj[deviceType.simpleDeviceType];
  }
  return stringResult;
};
export const useMaskedSpeakerStates = set.isAndroid() ? (() => {
  const items = [closure_14];
  return initialize.useStateFromStoresObject(items, () => {
    activeAudioDevice = activeAudioDevice.getActiveAudioDevice();
    obj = { isAudioRouteEnabled: true, toggleAudio: callback(table[27]).showAudioOutputSelector, routeSource: null };
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
  obj = isEnabled(589);
  const items = [closure_9, closure_11, closure_8, closure_12, closure_10, closure_13];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    isVideoMode = isEnabled(9814).isVideoMode(closure_9, closure_11, closure_8, closure_12, closure_10);
    currentRouteType = currentRouteType.getCurrentRouteType();
    isEnabled = currentRouteType === isEnabled(9697).RouteTypes.SPEAKER;
    const isBluetoothRoute = currentRouteType === isEnabled(9697).RouteTypes.BLUETOOTH;
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
  dependencyMap = tmp3[1];
  const items1 = [first, isVideoMode];
  const items2 = [isEnabled, isVideoMode];
  callback = React.useCallback(() => {
    if (!closure_1_13.getMultipleRoutesAvailable()) {
      closure_1_18.cancel();
      if (!isVideoMode) {
        dependencyMap(!first);
      }
    }
    closure_1_17(!first);
  }, items1);
  const effect = React.useEffect(() => {
    if (!closure_1_13.getMultipleRoutesAvailable()) {
      if (!isVideoMode) {
        closure_1_18(() => callback(closure_0));
      }
    }
    dependencyMap(isEnabled);
  }, items2);
  obj = { isAudioRouteEnabled: first, toggleAudio: callback, routeSource: isVideoMode(stateFromStoresObject.isBluetoothRoute ? 9722 : 9723) };
  return obj;
});
export const useImmediateMaskedSpeakerStates = () => {
  obj = _require(589);
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => currentRouteType.getCurrentRouteType());
  const tmp4 = useIsVideoModeDefault();
  _require = tmp4;
  let tmp5 = stateFromStores === _require(9697).RouteTypes.SPEAKER;
  const tmp6 = stateFromStores === _require(9697).RouteTypes.BLUETOOTH;
  if (!tmp5) {
    tmp5 = tmp6;
  }
  if (!tmp5) {
    tmp5 = tmp4;
  }
  importDefault = tmp5;
  const tmp7 = callback(React.useState(tmp5), 2);
  const first = tmp7[0];
  dependencyMap = tmp7[1];
  const items1 = [first, tmp4];
  const items2 = [tmp5, tmp4];
  callback = React.useCallback(() => {
    if (!closure_1_13.getMultipleRoutesAvailable()) {
      closure_1_18.cancel();
      if (!closure_0) {
        callback(!first);
      }
    }
    closure_1_17(!first);
  }, items1);
  const effect = React.useEffect(() => {
    callback(closure_1);
  }, items2);
  obj = { isAudioRouteEnabled: first, toggleAudio: callback, routeSource: importDefault(tmp6 ? 9722 : 9723) };
  return obj;
};