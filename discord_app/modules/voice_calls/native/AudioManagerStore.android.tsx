// discord_app/modules/voice_calls/native/AudioManagerStore.android.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import applyDefault from "../../../../_runtime/00012_apply.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import ME from "../../../Constants.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import _modDef1208 from "../../../utils/SentryUtils.native.tsx";
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
  audioDevices.then((result) => {
    closure_6 = result;
    self.emitChange();
    nativeEventEmitter.addListener("android-audio-devices-updated", (devices) => {
      devices = devices.devices;
      closure_0.emitChange();
    });
  });
  const activeAudioDevice = enforcingDefault.getActiveAudioDevice();
  activeAudioDevice.then((result) => {
    closure_7 = result;
    self.emitChange();
    nativeEventEmitter.addListener("android-active-audio-device-changed", (device) => {
      device = device.device;
      closure_0.emitChange();
    });
  });
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
          let tmp4Result = applyDefault;
          if (tmp4Result.isString(simpleDeviceType)) {
            tmp4Result = _modDef1208;
            let obj = { deviceString: null };
            obj[0] = simpleDeviceType;
            obj[0] = obj;
            tmp4Result.captureMessage("AudioManagerStore received a string for an android audio device", obj);
          } else {
            enforcingDefault.setActiveAudioDevice(simpleDeviceType);
            const tmp4Result1 = enforcingDefault;
          }
        }
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
        let tmpResult = _modDef1208;
        obj = { deviceString: null };
        obj[0] = device;
        obj[0] = obj;
        tmpResult.captureMessage("AudioManagerStore received a string for an android audio device", obj);
      } else {
        tmpResult = enforcingDefault;
        tmpResult.setActiveAudioDevice(device);
      }
    }
  }
});
let result = obj132.fileFinishedImporting("modules/voice_calls/native/AudioManagerStore.android.tsx");

export default audioManagerStore;