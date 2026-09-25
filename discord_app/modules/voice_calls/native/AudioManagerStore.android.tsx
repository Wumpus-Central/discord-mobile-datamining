// === Module 9090: AudioManagerStore ===

// Module 9090 (AudioManagerStore)
import _modDef12 from "module_12" /* 12 */;
import _mod17 from "module_17" /* 17 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import Constants2 from "Constants" /* 4854 */;
import NativeAudioManagerModuleDefault from "NativeAudioManagerModule" /* 9091 */;
import size from "module_2" /* 2 */;

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
class AudioManagerStore extends Store {
}
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
  }
});
let result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;