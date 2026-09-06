// === Module 9086: AudioManagerStore ===

// Module 9086 (AudioManagerStore)
import _modDef12 from "module_12" /* 12 */;
import _mod17 from "module_17" /* 17 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 4585 */;
import NativeAudioManagerModuleDefault from "NativeAudioManagerModule" /* 9087 */;
import size from "module_2" /* 2 */;

const NativeAudioManagerModule = NativeAudioManagerModuleDefault;

const RTCConnectionStates = Constants.RTCConnectionStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
const nativeEventEmitter = new _mod17.NativeEventEmitter(NativeAudioManagerModuleDefault);
let global = [];
global = NativeAudioManagerModule.getInvalidAndroidDevice();
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
          let tmp4Result = tmp4(12);
          if (tmp4Result.isString(device)) {
            tmp4Result = tmp4(1232);
            let obj = { extra: null };
            obj = { deviceString: tmp10 };
            obj.extra = obj;
            tmp4Result.captureMessage("AudioManagerStore received a string for an android audio device", obj);
          } else {
            tmp4(9087).setActiveAudioDevice(tmp10);
            const tmp4Result1 = tmp4(9087);
          }
        }
      } else if (tmp13.DISCONNECTED === state) {
        if (!context.willReconnect) {
          c9 = false;
          obj = NativeAudioManagerModuleDefault;
          const result1 = obj.setCommunicationModeOn(false);
        }
      }
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    device = device.device;
    if (c9) {
      let obj = _modDef12;
      if (obj.isString(device)) {
        let tmpResult = tmp(1232);
        obj = { extra: null };
        obj = { deviceString: device };
        obj.extra = obj;
        tmpResult.captureMessage("AudioManagerStore received a string for an android audio device", obj);
      } else {
        tmpResult = tmp(9087);
        tmpResult.setActiveAudioDevice(device);
      }
    }
  }
});
let result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;