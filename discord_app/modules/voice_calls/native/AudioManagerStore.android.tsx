import { RTCConnectionStates } from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import enforcing from "enforcing";
import enforcing from "enforcing";
import { Store } from "initialize";

const nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(require("enforcing"));
let closure_6 = [];
enforcing = enforcing.getInvalidAndroidDevice();
enforcing = enforcing.getInvalidAndroidDevice();
let c9 = false;
class AudioManagerStore extends Store {
}
const prototype = AudioManagerStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  const audioDevices = importDefault(8845).getAudioDevices();
  audioDevices.then((arg0) => {
    let outer1_6 = arg0;
    self.emitChange();
    outer1_5.addListener("android-audio-devices-updated", (devices) => {
      const outer1_6 = devices.devices;
      closure_0.emitChange();
    });
  });
  const obj = importDefault(8845);
  const activeAudioDevice = importDefault(8845).getActiveAudioDevice();
  activeAudioDevice.then((arg0) => {
    let outer1_7 = arg0;
    self.emitChange();
    outer1_5.addListener("android-active-audio-device-changed", (device) => {
      const outer1_7 = device.device;
      closure_0.emitChange();
    });
  });
  const obj2 = importDefault(8845);
  importDefault(8845).setSCORetryCount(4);
};
prototype["getAudioDevices"] = function getAudioDevices() {
  return closure_6;
};
prototype["getActiveAudioDevice"] = function getActiveAudioDevice() {
  return enforcing;
};
prototype["getRequestedActiveAudioDevice"] = function getRequestedActiveAudioDevice() {
  return enforcing;
};
AudioManagerStore.displayName = "AudioManagerStore";
const audioManagerStore = new AudioManagerStore(require("dispatcher"), {
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      const state = context.state;
      if (RTCConnectionStates.CONNECTING === state) {
        let c9 = true;
        const result = importDefault(8845).setCommunicationModeOn(true);
        let tmp8 = enforcing !== enforcing;
        if (tmp8) {
          tmp8 = enforcing.simpleDeviceType !== require(8845) /* enforcing */.AudioDeviceType.INVALID;
        }
        if (tmp8) {
          let tmp4Result = tmp4(12);
          if (tmp4Result.isString(enforcing)) {
            tmp4Result = tmp4(1208);
            let obj = { extra: null };
            obj = { deviceString: null };
            obj[0] = tmp10;
            obj[0] = obj;
            tmp4Result.captureMessage("AudioManagerStore received a string for an android audio device", obj);
          } else {
            tmp4(8845).setActiveAudioDevice(tmp10);
            const tmp4Result1 = tmp4(8845);
          }
        }
        const obj2 = importDefault(8845);
      } else if (tmp13.DISCONNECTED === state) {
        if (!context.willReconnect) {
          c9 = false;
          obj = importDefault(8845);
          const result1 = obj.setCommunicationModeOn(false);
        }
      }
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    device = device.device;
    if (c9) {
      let obj = importDefault(12);
      if (obj.isString(device)) {
        let tmpResult = tmp(1208);
        obj = { extra: null };
        obj = { deviceString: null };
        obj[0] = device;
        obj[0] = obj;
        tmpResult.captureMessage("AudioManagerStore received a string for an android audio device", obj);
      } else {
        tmpResult = tmp(8845);
        tmpResult.setActiveAudioDevice(device);
      }
    }
  }
});
let result = require("DesktopSources").fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;