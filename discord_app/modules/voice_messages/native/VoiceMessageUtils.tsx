// discord_app/modules/voice_messages/native/VoiceMessageUtils.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import byteLengthDefault from "../../../../_runtime/00206_byteLength.js";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import BaseConnectionEvent from "../../../../discord_common/js/packages/media-engine/index.tsx";
import downsampleWaveformDefault from "../downsampleWaveform.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import VoiceMessagesUIStore from "VoiceMessagesUIStore.tsx";
import VoiceMessageConstants from "../VoiceMessageConstants.tsx";
import 00012__ from "../../../../_runtime/metro/00012__.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c2, c3, c5, c6, closure_3, initialize_secs, state;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
const f109596 = (item) => Math.min(item, closure_1_13);
let obj = function _startAudioRecording() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj5;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_2;
        let closure_1;
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
            closure_2 = tmp;
            c19 = null;
            React4(constants.REQUESTED);
            metroImportAll(closure_0);
            const mediaEngine = MediaEngineStore.getMediaEngine();
            mediaEngine.on(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, closure_2_21);
            c4 = 1;
            const _performance2 = performance;
            closure_1 = performance.now();
            const mediaEngine1 = MediaEngineStore.getMediaEngine();
            const obj4 = { echoCancellation: MediaEngineStore.getEchoCancellation(), echoCancellationPreEcho: false, noiseSuppression: MediaEngineStore.getNoiseSuppression(), automaticGainControlConfig: obj5, noiseCancellation: MediaEngineStore.getNoiseCancellation() };
            const startLocalAudioRecording = mediaEngine1.startLocalAudioRecording;
            obj5 = { enabled: MediaEngineStore.getAutomaticGainControl() };
            c5 = 2;
            c6 = 1;
            const obj6 = { value: startLocalAudioRecording(obj4), done: false };
            return obj6;
          }
        } else {
          let recordingId;
          if (1 === tmp4) {
            c4 = 0;
            closure_2 = closure_3;
            recordingId = closure_130_24();
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const _performance = performance;
            let closure_19 = performance.now() - closure_1;
            logger.log("Voice message audio startup latency:", closure_19);
            recordingId = state.getState().recordingId;
            if (recordingId !== closure_0) {
              c4 = 0;
              c6 = 3;
              return { value: "IconComponent", done: null };
            } else {
              closure_130_9(constants.STARTED);
              recordingId = closure_130_10;
              const _Date = Date;
              closure_130_10(Date.now());
              c4 = 0;
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        }
      } catch (tmp16) {
        closure_3 = tmp16;
        if (0 === c4) {
          c6 = 3;
          throw tmp16;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function removeVoiceActivityListener() {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.removeListener(BaseConnectionEvent.MediaEngineEvent.VoiceActivity, closure_21);
}
function resetAudioRecording() {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.removeListener(BaseConnectionEvent.MediaEngineEvent.VoiceActivity, closure_21);
  metroRequire();
}
function stopAndGetAudioRecording() {
  let closure_0;
  const tmp = closure_8(null);
  closure_9(null);
  let mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.removeListener(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, closure_21);
  let waveform = state.getState().waveform;
  const mapped = waveform.map((item) => {
    let tmp;
    [tmp] = item;
    return tmp;
  });
  let arr3 = mapped;
  if (mapped.length > closure_16) {
    arr3 = downsampleWaveformDefault(mapped, tmp5);
  }
  const mapped1 = arr3.map(f109596);
  const fromByteArray = byteLengthDefault.fromByteArray;
  byteLengthDefault;
  const uint8Array = new Uint8Array(mapped1);
  _require = fromByteArray(uint8Array);
  const promise = new Promise((waveform) => {
    mediaEngine = mediaEngine.getMediaEngine();
    const result = mediaEngine.stopLocalAudioRecording((filename, arg1) => {
      obj = { filename, durationSecs: arg1 / 1000, waveform };
      waveform(obj);
    });
  });
  return promise;
}
obj = function _endAudioRecording() {
  obj = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let startTimeMillis;
        let data;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            startTimeMillis = undefined;
            state = state.getState();
            data = state.savedVoiceMessageUploadData;
            const tmp8 = null == data && state.recordingStatus === constants.REQUESTED;
            if (tmp8) {
              stopAndGetAudioRecording();
              data = { filename: "", durationSecs: 0, waveform: "" };
            }
            if (null == data) {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: stopAndGetAudioRecording(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          data = value;
        }
        startTimeMillis = closure_129_11.getState().startTimeMillis;
        closure_129_24();
        const obj5 = { data, startTimeMillis };
        c3 = 3;
        const obj6 = { value: obj5, done: true };
        return obj6;
      } catch (tmp20) {
        c3 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
function stopAndCacheAudioRecording() {
  return obj(...arguments);
}
obj = function _stopAndCacheAudioRecording() {
  obj = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: stopAndGetAudioRecording(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          closure_129_23();
          closure_129_7(closure_0);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
({ addVoiceMessageWave: hasOwnProperty, resetVoiceMessageState: metroRequire, setSavedVoiceMessageUploadData: metroImportDefault, setVoiceMessageRecordingId: metroImportAll, setVoiceMessageRecordingState: c9, setVoiceMessageStartTimeMillis: c10, useVoiceMessagesUIStore: unpackModuleId, VoiceMessageRecordingStatus: closure_12 } = VoiceMessagesUIStore);
({ WAVEFORM_WAVE_MAX_VALUE: map1, VOICE_RECORDING_MIN_DB: closure_14, VOICE_RECORDING_MAX_DB: closure_15, WAVEFORM_MAX_SAMPLES: closure_16, VOICE_RECORDING_MAX_DURATION_MILLIS: closure_17 } = VoiceMessageConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let c19 = null;
const tmp4 = new LoggerDefault("VoiceMessages");
let closure_20 = tmp4;
let closure_21 = module_12.throttle((arg0) => {
  state = unpackModuleId.getState();
  if (null != state.startTimeMillis) {
    hasOwnProperty(map1 * ((arg0 - authStore2) / (closure_15 - authStore2)));
    let tmp8 = null == state.savedVoiceMessageUploadData;
    if (tmp8) {
      const _performance = performance;
      tmp8 = performance.now() - state.startTimeMillis >= closure_17;
    }
    if (tmp8) {
      stopAndCacheAudioRecording();
    }
  }
}, 100);
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessageUtils.tsx");

export const generateBase64EncodedWaveform = function generateBase64EncodedWaveform(arg0) {
  let arr = arg0;
  if (arg0.length > authStore3) {
    arr = downsampleWaveformDefault(arg0, tmp);
  }
  const mapped = arr.map(f109596);
  const fromByteArray = byteLengthDefault.fromByteArray;
  byteLengthDefault;
  const uint8Array = new Uint8Array(mapped);
  return fromByteArray(uint8Array);
};
export const startAudioRecording = function startAudioRecording() {
  return obj(...arguments);
};
export const endAudioRecording = function endAudioRecording() {
  return obj(...arguments);
};
export { stopAndCacheAudioRecording };
export const emitVoiceMessageRecorded = function emitVoiceMessageRecorded(CANCELLED_DURATION, durationSecs, startTimeMillis) {
  if (null != startTimeMillis) {
    const _Date = Date;
    obj = { recording_start_timestamp: startTimeMillis, recording_stop_timestamp: Date.now(), duration_secs: durationSecs, result: CANCELLED_DURATION, initialize_secs };
    const track = AnalyticsUtilsDefault.track;
    const VOICE_MESSAGE_RECORDED = AnalyticEvents.VOICE_MESSAGE_RECORDED;
    AnalyticsUtilsDefault;
    track(VOICE_MESSAGE_RECORDED, obj);
    initialize_secs = null;
  }
};
export const triggerHaptic = function triggerHaptic() {
  const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
  HapticUtils;
  obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  const HapticFeedbackTypes = HapticUtils.HapticFeedbackTypes;
  const result = triggerHapticFeedback(isAndroidResult ? HapticFeedbackTypes.IMPACT_LIGHT : HapticFeedbackTypes.IMPACT_MEDIUM);
};