// discord_app/modules/voice_calls/native/AudioManagerStore.android.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import _mod17 from "../../../../_runtime/metro/00017__.js";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import Constants2 from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import NativeAudioManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeAudioManagerModule_mod = NativeAudioManagerModuleDefault;

const RTCConnectionStates = Constants.RTCConnectionStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
const nativeEventEmitter = new _mod17.NativeEventEmitter(NativeAudioManagerModuleDefault);
let global = [];
let NativeAudioManagerModule = NativeAudioManagerModule_mod;
global = NativeAudioManagerModule.getInvalidAndroidDevice();
let NativeAudioManagerModule = NativeAudioManagerModule_mod;
let device = NativeAudioManagerModule.getInvalidAndroidDevice();
let c9 = false;
const Store = initializeDefault.Store;
class AudioManagerStore extends Store {}
const prototype = AudioManagerStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  const audioDevices = NativeAudioManagerModuleDefault.getAudioDevices();
  audioDevices.then((result) => {
    global = result;
    self.emitChange();
    nativeEventEmitter.addListener("android-audio-devices-updated", (devices) => {
      devices = devices.devices;
      self.emitChange();
    });
  });
  const activeAudioDevice = NativeAudioManagerModuleDefault.getActiveAudioDevice();
  activeAudioDevice.then((result) => {
    global = result;
    self.emitChange();
    nativeEventEmitter.addListener("android-active-audio-device-changed", (device) => {
      device = device.device;
      self.emitChange();
    });
  });
  NativeAudioManagerModuleDefault.setSCORetryCount(4);
};
prototype["getAudioDevices"] = function getAudioDevices() {
  return global;
};
prototype["getActiveAudioDevice"] = function getActiveAudioDevice() {
  return global;
};
prototype["getRequestedActiveAudioDevice"] = function getRequestedActiveAudioDevice() {
  return device;
};
AudioManagerStore.displayName = "AudioManagerStore";
const audioManagerStore = new AudioManagerStore(DispatcherDefault, {
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      const state = context.state;
      if (RTCConnectionStates.CONNECTING === state) {
        c9 = true;
        const result = NativeAudioManagerModuleDefault.setCommunicationModeOn(true);
        let tmp8 = global !== device;
        if (tmp8) {
          tmp8 = device.simpleDeviceType !== NativeAudioManagerModule.AudioDeviceType.INVALID;
        }
        if (tmp8) {
          if (tmp4Result.isString(device)) {
            const obj3 = { extra: null };
            const obj4 = { deviceString: device };
            obj3.extra = obj4;
            SentryUtilsDefault.captureMessage("AudioManagerStore received a string for an android audio device", obj3);
            const tmp4Result3 = SentryUtilsDefault;
          } else {
            NativeAudioManagerModuleDefault.setActiveAudioDevice(device);
            const tmp4Result4 = NativeAudioManagerModuleDefault;
          }
          tmp4Result = _modDef12;
        }
      } else if (tmp13.DISCONNECTED === state) {
        if (!context.willReconnect) {
          c9 = false;
          const result1 = NativeAudioManagerModuleDefault.setCommunicationModeOn(false);
        }
      }
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    device = device.device;
    if (c9) {
      if (obj.isString(device)) {
        const obj2 = { extra: null };
        const obj3 = { deviceString: device };
        obj2.extra = obj3;
        SentryUtilsDefault.captureMessage("AudioManagerStore received a string for an android audio device", obj2);
        const tmpResult = SentryUtilsDefault;
      } else {
        NativeAudioManagerModuleDefault.setActiveAudioDevice(device);
        const tmpResult2 = NativeAudioManagerModuleDefault;
      }
      obj = _modDef12;
    }
  },
});
let result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;
