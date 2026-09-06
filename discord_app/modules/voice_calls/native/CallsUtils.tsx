// === Module 9082: CallsUtils ===

// Module 9082 (CallsUtils)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4767 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import AVError from "AVError" /* 9110 */;
import _modDef9111 from "module_9111" /* 9111 */;
import _modDef9112 from "module_9112" /* 9112 */;
import _modDef9113 from "module_9113" /* 9113 */;
import useIsVideoModeDefault from "useIsVideoMode" /* 9465 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import AudioRouteStore from "AudioRouteStore" /* 9083 */;
import AudioManagerStore from "AudioManagerStore" /* 9086 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_16 = async function _handleToggleVideo(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let flag3 = closure_1;
          if (closure_1 === undefined) {
            flag3 = true;
          }
          closure_130_1 = flag3;
          closure_130_2 = undefined;
          let channelVideoLimit;
          let reachedLimit;
          let limit;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_130_2 = closure_131_10.isVideoEnabled();
            channelVideoLimit = closure_131_0(closure_131_3[12]).getChannelVideoLimit(closure_130_0);
            reachedLimit = channelVideoLimit.reachedLimit;
            limit = channelVideoLimit.limit;
            if (reachedLimit) {
              if (closure_130_1) {
                let obj5 = closure_131_1(closure_131_3[13]);
                const obj2 = { title: null, body: null };
                const intl = closure_131_0(closure_131_3[14]).intl;
                obj2.title = intl.string(closure_131_0(closure_131_3[14]).t["3ffmE+"]);
                const intl2 = closure_131_0(closure_131_3[14]).intl;
                const obj3 = { limit: limit.toString() };
                obj2.body = intl2.formatToPlainString(closure_131_0(closure_131_3[14]).t.x9mtl4, obj3);
                obj5.show(obj2);
              }
            } else if (closure_130_2) {
              let tmp12Result = tmp12(tmp13[16]);
              tmp12Result.setVideoEnabled(false);
            } else {
              tmp12Result = tmp12(tmp13[15]);
              c4 = 2;
              c5 = 1;
              const obj4 = { value: tmp12Result.requestPermission(closure_131_15.CAMERA), done: false };
              return obj4;
            }
            c5 = 3;
            const obj12 = closure_131_0(closure_131_3[12]);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            obj = closure_131_1(closure_131_3[16]);
            obj.setVideoEnabled(true);
          }
        }
        c5 = 3;
        obj5 = { value, done: true };
        return obj5;
      }
    } catch (tmp31) {
      c5 = tmp;
      throw tmp31;
    }
  }
};
const NativeModules = fn(17).NativeModules;
const NativePermissionTypes = fn(4770).NativePermissionTypes;
let closure_17 = apply.debounce((arg0) => {
  const AudioRoutePicker = NativeModules.AudioRoutePicker;
  if (AudioRoutePicker != null) {
    AudioRoutePicker.handleAudioRoute(arg0);
  }
}, 250);
let closure_18 = apply.debounce((fn) => {
  fn();
}, 1);
const audioDeviceToIconMap = { EARPIECE: _modDef9111, BLUETOOTH_HEADSET: _modDef9112, WIRED_HEADSET: _modDef9113, SPEAKERPHONE: _modDef9113, INVALID: _modDef9113 };
const constants = { TYPE_UNKNOWN: 0, [0]: "TYPE_UNKNOWN", TYPE_BUILTIN_EARPIECE: 1, [1]: "TYPE_BUILTIN_EARPIECE", TYPE_BUILTIN_SPEAKER: 2, [2]: "TYPE_BUILTIN_SPEAKER", TYPE_WIRED_HEADSET: 3, [3]: "TYPE_WIRED_HEADSET", TYPE_WIRED_HEADPHONES: 4, [4]: "TYPE_WIRED_HEADPHONES", TYPE_LINE_ANALOG: 5, [5]: "TYPE_LINE_ANALOG", TYPE_LINE_DIGITAL: 6, [6]: "TYPE_LINE_DIGITAL", TYPE_BLUETOOTH_SCO: 7, [7]: "TYPE_BLUETOOTH_SCO", TYPE_BLUETOOTH_A2DP: 8, [8]: "TYPE_BLUETOOTH_A2DP", TYPE_HDMI: 9, [9]: "TYPE_HDMI", TYPE_HDMI_ARC: 10, [10]: "TYPE_HDMI_ARC", TYPE_USB_DEVICE: 11, [11]: "TYPE_USB_DEVICE", TYPE_USB_ACCESSORY: 12, [12]: "TYPE_USB_ACCESSORY", TYPE_DOCK: 13, [13]: "TYPE_DOCK", TYPE_FM: 14, [14]: "TYPE_FM", TYPE_BUILTIN_MIC: 15, [15]: "TYPE_BUILTIN_MIC", TYPE_FM_TUNER: 16, [16]: "TYPE_FM_TUNER", TYPE_TV_TUNER: 17, [17]: "TYPE_TV_TUNER", TYPE_TELEPHONY: 18, [18]: "TYPE_TELEPHONY", TYPE_AUX_LINE: 19, [19]: "TYPE_AUX_LINE", TYPE_IP: 20, [20]: "TYPE_IP", TYPE_BUS: 21, [21]: "TYPE_BUS", TYPE_USB_HEADSET: 22, [22]: "TYPE_USB_HEADSET", TYPE_HEARING_AID: 23, [23]: "TYPE_HEARING_AID", TYPE_BUILTIN_SPEAKER_SAFE: 24, [24]: "TYPE_BUILTIN_SPEAKER_SAFE", TYPE_REMOTE_SUBMIX: 25, [25]: "TYPE_REMOTE_SUBMIX", TYPE_BLE_HEADSET: 26, [26]: "TYPE_BLE_HEADSET", TYPE_BLE_SPEAKER: 27, [27]: "TYPE_BLE_SPEAKER", TYPE_ECHO_REFERENCE: 28, [28]: "TYPE_ECHO_REFERENCE", TYPE_HDMI_EARC: 29, [29]: "TYPE_HDMI_EARC", TYPE_BLE_BROADCAST: 30, [30]: "TYPE_BLE_BROADCAST", TYPE_DOCK_ANALOG: 31, [31]: "TYPE_DOCK_ANALOG" };
const PlatformUtils = fn(1115);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/CallsUtils.tsx");

export const handleToggleVideo = function handleToggleVideo() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleToggleSelfDeaf = function handleToggleSelfDeaf() {
  AudioActionCreatorsDefault.toggleSelfDeaf();
};
export const handleToggleSelfMute = function handleToggleSelfMute() {
  AudioActionCreatorsDefault.toggleSelfMute();
};
export const showSuppressedAlert = function showSuppressedAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj.title = intl.string(util.t.FJSZVM);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.etJjgW);
  obj.show(obj);
};
export const showServerMuteAlert = function showServerMuteAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj.title = intl.string(util.t["+JQCa/"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.hsNm7d);
  obj.show(obj);
};
export const showServerDeafenAlert = function showServerDeafenAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj.title = intl.string(util.t.QZ7WSS);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.Tl9JpL);
  obj.show(obj);
};
export const showCameraDisabledAlert = function showCameraDisabledAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj.title = intl.string(util.t.OYzPcW);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.oBH7Y2);
  obj.show(obj);
};
export const showScreenshareDisabledAlert = function showScreenshareDisabledAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj.title = intl.string(util.t["/x4knx"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.PpfzUE);
  obj.show(obj);
};
export const showMinOSScreenshareRequirementAlert = function showMinOSScreenshareRequirementAlert() {
  const intl = util.intl;
  let obj = AVError;
  const errorInfo = obj.getErrorInfo(AVError.AVError.SCREENSHARE_OS_NOT_SUPPORTED);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const formatToPlainStringResult = intl.formatToPlainString(util.t.ejOT95, { errorCode });
  obj = { title: null, body: null, hideActionSheet: false };
  const intl2 = tmp(1114).intl;
  obj.title = intl2.string(util.t.oblMYa);
  const intl3 = tmp(1114).intl;
  obj.body = "" + intl3.string(util.t.Wnhd3q) + "\n\n" + formatToPlainStringResult;
  actions_AlertActionCreatorsDefault.show(obj);
};
export const showTabletRequirementAlert = function showTabletRequirementAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj.title = intl.string(util.t["1N0dxa"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.qqDFVb);
  obj.show(obj);
};
export const handleDisconnect = function handleDisconnect(channel) {
  const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
  const result1 = PrivateChannelCallUtils.dismissVoiceChannelScreens(channel, () => {
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(null);
  });
};
export { audioDeviceToIconMap };
export const getAudioDeviceToDisplayText = function getAudioDeviceToDisplayText(deviceType) {
  const obj = { EARPIECE: null, BLUETOOTH_HEADSET: null, WIRED_HEADSET: null, SPEAKERPHONE: null, INVALID: null };
  const intl = util.intl;
  obj.EARPIECE = intl.string(util.t.Ouoi6E);
  const intl2 = util.intl;
  obj.BLUETOOTH_HEADSET = intl2.string(util.t.i6eV3z);
  const intl3 = util.intl;
  obj.WIRED_HEADSET = intl3.string(util.t.Dluojr);
  const intl4 = util.intl;
  obj.SPEAKERPHONE = intl4.string(util.t.snEhlu);
  const intl5 = util.intl;
  obj.INVALID = intl5.string(util.t.kCBL6t);
  if (deviceType.deviceType === constants.TYPE_BLE_HEADSET) {
    const intl6 = tmp(1114).intl;
    let stringResult = intl6.string(tmp(1114).t.BtXSp9);
  } else {
    stringResult = obj[deviceType.simpleDeviceType];
  }
  return stringResult;
};
export const useMaskedSpeakerStates = PlatformUtils.isAndroid() ? (() => {
  const items = [AudioManagerStore];
  return initialize.useStateFromStoresObject(items, () => {
    activeAudioDevice = activeAudioDevice.getActiveAudioDevice();
    const obj = { isAudioRouteEnabled: true, toggleAudio: require("showAudioOutputSelector").showAudioOutputSelector, routeSource: null };
    let simpleDeviceType;
    if (activeAudioDevice != null) {
      simpleDeviceType = activeAudioDevice.simpleDeviceType;
    }
    if (simpleDeviceType == null) {
      simpleDeviceType = require("NativeAudioManagerModule").AudioDeviceType.INVALID;
    }
    obj.routeSource = audioDeviceToIconMap[simpleDeviceType];
    return obj;
  }, []);
}) : (() => {
  let obj = isEnabled(504);
  const items = [ChannelStore, SelectedChannelStore, ApplicationStreamingStore, VoiceStateStore, MediaEngineStore, AudioRouteStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    isVideoMode = isEnabled(9465).isVideoMode(ChannelStore, SelectedChannelStore, ApplicationStreamingStore, VoiceStateStore, MediaEngineStore);
    currentRouteType = currentRouteType.getCurrentRouteType();
    isEnabled = currentRouteType === isEnabled(9084).RouteTypes.SPEAKER;
    const isBluetoothRoute = currentRouteType === isEnabled(9084).RouteTypes.BLUETOOTH;
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
  const tmp3 = _slicedToArray(noop.useState(isEnabled), 2);
  const isAudioRouteEnabled = tmp3[0];
  dependencyMap = tmp3[1];
  const items1 = [isAudioRouteEnabled, isVideoMode];
  const items2 = [isEnabled, isVideoMode];
  const callback = noop.useCallback(() => {
    if (!AudioRouteStore.getMultipleRoutesAvailable()) {
      closure_18.cancel();
      if (!isVideoMode) {
        dependencyMap(!first);
      }
    }
    closure_17(!first);
  }, items1);
  const effect = noop.useEffect(() => {
    if (!AudioRouteStore.getMultipleRoutesAvailable()) {
      if (!isVideoMode) {
        closure_18(() => dependencyMap(isEnabled));
      }
    }
    dependencyMap(isEnabled);
  }, items2);
  obj = { isAudioRouteEnabled, toggleAudio: callback, routeSource: isVideoMode(stateFromStoresObject.isBluetoothRoute ? 9112 : 9113) };
  return obj;
});
export const useImmediateMaskedSpeakerStates = () => {
  let obj = require("initialize");
  const items = [AudioRouteStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentRouteType.getCurrentRouteType());
  const tmp4 = useIsVideoModeDefault();
  _require = tmp4;
  let tmp5 = stateFromStores === require("VoiceCallTypes").RouteTypes.SPEAKER;
  const tmp6 = stateFromStores === require("VoiceCallTypes").RouteTypes.BLUETOOTH;
  if (!tmp5) {
    tmp5 = tmp6;
  }
  if (!tmp5) {
    tmp5 = tmp4;
  }
  importDefault = tmp5;
  const tmp7 = _slicedToArray(noop.useState(tmp5), 2);
  const isAudioRouteEnabled = tmp7[0];
  dependencyMap = tmp7[1];
  const items1 = [isAudioRouteEnabled, tmp4];
  const items2 = [tmp5, tmp4];
  const callback = noop.useCallback(() => {
    if (!AudioRouteStore.getMultipleRoutesAvailable()) {
      closure_18.cancel();
      if (!closure_0) {
        closure_3(!first);
      }
    }
    closure_17(!first);
  }, items1);
  const effect = noop.useEffect(() => {
    closure_3(closure_1);
  }, items2);
  obj = { isAudioRouteEnabled, toggleAudio: callback, routeSource: importDefault(tmp6 ? 9112 : 9113) };
  return obj;
};