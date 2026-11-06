// === Module 9320: AudioManagerStore ===

// Module 9320 (AudioManagerStore)
import LoggerDefault from "Logger" /* 3 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import NativeAudioManagerModule2 from "NativeAudioManagerModule" /* 9321 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const NativeAudioManagerModuleDefault = NativeAudioManagerModule2;

require = fn;
function setCommunicationModeOn() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _setCommunicationModeOn(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  await NativeAudioManagerModuleDefault.setCommunicationModeOn(closure_0);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_1 = closure_3;
    let str = "off";
    if (closure_129_0) {
      str = "on";
    }
    closure_130_7.error("Failed to turn communication mode " + str, closure_129_1);
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
function setActiveAudioDevice() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _setActiveAudioDevice() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = deviceString;
            if (obj9.isString(deviceString)) {
              const obj4 = { extra: null };
              const obj5 = { deviceString };
              obj4.extra = obj5;
              SentryUtilsDefault.captureMessage("AudioManagerStore received a string for an android audio device", obj4);
              const tmp33Result = SentryUtilsDefault;
            } else {
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: NativeAudioManagerModuleDefault.setActiveAudioDevice(deviceString), done: false };
              return obj6;
            }
            obj9 = applyDefault;
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            closure_129_1 = closure_3;
            const _HermesInternal2 = HermesInternal;
            closure_130_7.error("Failed to set audio device " + closure_129_0.deviceId + " (" + closure_129_0.simpleDeviceType + ")", closure_129_1);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (!value) {
              const _HermesInternal = HermesInternal;
              closure_130_7.warn("Audio device " + closure_129_0.deviceId + " (" + closure_129_0.simpleDeviceType + ") was not applied");
            }
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c6 = 3;
      } catch (tmp24) {
        closure_3 = tmp24;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp24;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const RTCConnectionStates = fn(1072).RTCConnectionStates;
const MediaEngineContextTypes = fn(5924).MediaEngineContextTypes;
const nativeEventEmitter = new fn(17).NativeEventEmitter(NativeAudioManagerModuleDefault);
let closure_7 = new LoggerDefault("AudioManagerStore");
let global = [];
let NativeAudioManagerModule = fn(9321);
global = NativeAudioManagerModule.getInvalidAndroidDevice();
NativeAudioManagerModule = fn(9321);
let device = NativeAudioManagerModule.getInvalidAndroidDevice();
let c11 = false;
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
      state = context.state;
      if (RTCConnectionStates.CONNECTING === state) {
        c11 = true;
        setCommunicationModeOn(true);
        let tmp6 = global !== device;
        if (tmp6) {
          tmp6 = device.simpleDeviceType !== NativeAudioManagerModule2.AudioDeviceType.INVALID;
        }
        if (tmp6) {
          setActiveAudioDevice(device);
        }
      } else if (tmp12.DISCONNECTED === state) {
        if (!context.willReconnect) {
          c11 = false;
          setCommunicationModeOn(false);
        }
      }
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    device = device.device;
    if (c11) {
      setActiveAudioDevice(device);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;