// === Module 9338: AudioManagerStore ===

// Module 9338 (AudioManagerStore)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import Constants2 from "Constants" /* 4921 */;
import NativeAudioManagerModuleDefault from "NativeAudioManagerModule" /* 9339 */;
import size from "module_2" /* 2 */;

const NativeAudioManagerModule_mod = NativeAudioManagerModuleDefault;
let closure_7, devices;

const NativeEventEmitter = react_native.NativeEventEmitter;
const RTCConnectionStates = Constants.RTCConnectionStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
const nativeEventEmitter = new NativeEventEmitter(NativeAudioManagerModuleDefault);
let closure_6 = [];
let NativeAudioManagerModule = NativeAudioManagerModule_mod;
const invalidAndroidDevice = NativeAudioManagerModule.getInvalidAndroidDevice();
NativeAudioManagerModule = NativeAudioManagerModule_mod;
let device = NativeAudioManagerModule.getInvalidAndroidDevice();
let c9 = false;
const Store = get_initializedDefault.Store;
class AudioManagerStore extends Store {
  initialize() {
    const self = this;
    const obj = NativeAudioManagerModuleDefault;
    const audioDevices = obj.getAudioDevices();
    audioDevices.then((result) => {
      closure_6 = result;
      self.emitChange();
      nativeEventEmitter.addListener("android-audio-devices-updated", (devices) => {
        devices = devices.devices;
        self.emitChange();
      });
    });
    const obj2 = NativeAudioManagerModuleDefault;
    const activeAudioDevice = obj2.getActiveAudioDevice();
    activeAudioDevice.then((result) => {
      closure_7 = result;
      self.emitChange();
      nativeEventEmitter.addListener("android-active-audio-device-changed", (device) => {
        device = device.device;
        self.emitChange();
      });
    });
    const obj3 = NativeAudioManagerModuleDefault;
    obj3.setSCORetryCount(4);
  }
  getAudioDevices() {
    return closure_6;
  }
  getActiveAudioDevice() {
    return closure_7;
  }
  getRequestedActiveAudioDevice() {
    return device;
  }
}
const prototype = AudioManagerStore.prototype;
AudioManagerStore.displayName = "AudioManagerStore";
let obj = {
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(context) {
    let obj4;
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      const state = context.state;
      if (RTCConnectionStates.CONNECTING === state) {
        c9 = true;
        const obj2 = NativeAudioManagerModuleDefault;
        const result = obj2.setCommunicationModeOn(true);
        const tmp8 = closure_7 !== device && device.simpleDeviceType !== NativeAudioManagerModule.AudioDeviceType.INVALID;
        if (tmp8) {
          const tmp4Result = _modDef12;
          if (tmp4Result.isString(device)) {
            const obj3 = { extra: obj4 };
            obj4 = { deviceString: device };
            const tmp4Result3 = SentryUtilsDefault;
            tmp4Result3.captureMessage("AudioManagerStore received a string for an android audio device", obj3);
          } else {
            const tmp4Result4 = NativeAudioManagerModuleDefault;
            tmp4Result4.setActiveAudioDevice(device);
          }
        }
      } else if (tmp13.DISCONNECTED === state) {
        if (!context.willReconnect) {
          c9 = false;
          const obj = NativeAudioManagerModuleDefault;
          const result1 = obj.setCommunicationModeOn(false);
        }
      }
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    let obj3;
    device = device.device;
    if (c9) {
      const obj = _modDef12;
      if (obj.isString(device)) {
        const obj2 = { extra: obj3 };
        obj3 = { deviceString: device };
        const tmp2Result = SentryUtilsDefault;
        tmp2Result.captureMessage("AudioManagerStore received a string for an android audio device", obj2);
      } else {
        const tmp2Result2 = NativeAudioManagerModuleDefault;
        tmp2Result2.setActiveAudioDevice(device);
      }
    }
  }
};
const audioManagerStore = new AudioManagerStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;