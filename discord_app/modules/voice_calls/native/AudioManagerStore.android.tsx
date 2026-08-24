// discord_app/modules/voice_calls/native/AudioManagerStore.android.tsx
import set from "../../../../_runtime/00002_set.js";
import applyDefault from "../../../../_runtime/00012_apply.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import ME from "../../../Constants.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import DesktopSources from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx";
import enforcing from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx";

const RTCConnectionStates = ME.RTCConnectionStates;
const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(enforcingDefault);
let closure_6 = [];
const invalidAndroidDevice = enforcing.getInvalidAndroidDevice();
const invalidAndroidDevice2 = enforcing.getInvalidAndroidDevice();
let c9 = false;
const Store = initializeDefault.Store;
class AudioManagerStore extends Store {
}
const prototype = AudioManagerStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  const audioDevices = enforcingDefault.getAudioDevices();
  audioDevices.then((arg0) => {
    closure_6 = arg0;
    self.emitChange();
    closure_1_5.addListener("android-audio-devices-updated", (devices) => {
      devices = devices.devices;
      closure_0.emitChange();
    });
  });
  const obj = enforcingDefault;
  const activeAudioDevice = enforcingDefault.getActiveAudioDevice();
  activeAudioDevice.then((arg0) => {
    closure_7 = arg0;
    self.emitChange();
    closure_1_5.addListener("android-active-audio-device-changed", (device) => {
      device = device.device;
      closure_0.emitChange();
    });
  });
  const obj2 = enforcingDefault;
  enforcingDefault.setSCORetryCount(4);
};
prototype["getAudioDevices"] = function getAudioDevices() {
  return closure_6;
};
prototype["getActiveAudioDevice"] = function getActiveAudioDevice() {
  return closure_7;
};
prototype["getRequestedActiveAudioDevice"] = function getRequestedActiveAudioDevice() {
  return closure_8;
};
AudioManagerStore.displayName = "AudioManagerStore";
const audioManagerStore = new AudioManagerStore(dispatcherDefault, {
  RTC_CONNECTION_STATE: function handleRTCConnectionStateUpdate(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      const state = context.state;
      if (RTCConnectionStates.CONNECTING === state) {
        c9 = true;
        const result = enforcingDefault.setCommunicationModeOn(true);
        let tmp8 = closure_7 !== simpleDeviceType;
        if (tmp8) {
          tmp8 = simpleDeviceType.simpleDeviceType !== enforcing.AudioDeviceType.INVALID;
        }
        if (tmp8) {
          let tmp4Result = tmp4(12);
          if (tmp4Result.isString(simpleDeviceType)) {
            tmp4Result = tmp4(1208);
            let obj = { extra: null };
            obj = { deviceString: null };
            obj[0] = tmp10;
            obj[0] = obj;
            tmp4Result.captureMessage("AudioManagerStore received a string for an android audio device", obj);
          } else {
            tmp4(9691).setActiveAudioDevice(tmp10);
            const tmp4Result1 = tmp4(9691);
          }
        }
        const obj2 = enforcingDefault;
      } else if (tmp13.DISCONNECTED === state) {
        if (!context.willReconnect) {
          c9 = false;
          obj = enforcingDefault;
          const result1 = obj.setCommunicationModeOn(false);
        }
      }
    }
  },
  NATIVE_AUDIO_SET_OUTPUT_DEVICE: function handleSetActiveAudioDevice(device) {
    device = device.device;
    if (c9) {
      let obj = applyDefault;
      if (obj.isString(device)) {
        let tmpResult = tmp(1208);
        obj = { extra: null };
        obj = { deviceString: null };
        obj[0] = device;
        obj[0] = obj;
        tmpResult.captureMessage("AudioManagerStore received a string for an android audio device", obj);
      } else {
        tmpResult = tmp(9691);
        tmpResult.setActiveAudioDevice(device);
      }
    }
  }
});
let result = set.fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;