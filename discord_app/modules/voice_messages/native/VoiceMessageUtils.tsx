// === Module 12256: VoiceMessageUtils ===

// Module 12256 (VoiceMessageUtils)
import LoggerDefault from "Logger" /* 3 */;
import byteLengthDefault from "byteLength" /* 206 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;
import downsampleWaveformDefault from "downsampleWaveform" /* 12257 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_22 = async function _startAudioRecording(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c19 = null;
          React7(constants.REQUESTED);
          React6(closure_0);
          const mediaEngine = MediaEngineStore.getMediaEngine();
          mediaEngine.on(BaseConnectionEvent.MediaEngineEvent.VoiceActivity, __initData2);
          c4 = 1;
          const _performance2 = performance;
          closure_129_1 = performance.now();
          const mediaEngine1 = MediaEngineStore.getMediaEngine();
          const obj1 = { echoCancellation: MediaEngineStore.getEchoCancellation(), echoCancellationPreEcho: false, noiseSuppression: MediaEngineStore.getNoiseSuppression(), automaticGainControlConfig: null, noiseCancellation: null };
          const obj2 = { enabled: MediaEngineStore.getAutomaticGainControl() };
          obj1.automaticGainControlConfig = obj2;
          obj1.noiseCancellation = MediaEngineStore.getNoiseCancellation();
          c5 = 2;
          c6 = 1;
          const obj3 = { value: mediaEngine1.startLocalAudioRecording(obj1), done: false };
          return obj3;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_129_2 = closure_3;
        closure_130_23();
        throw closure_129_2;
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
        closure_130_19 = performance.now() - closure_129_1;
        closure_130_20.log("Voice message audio startup latency:", closure_130_19);
        if (closure_130_11.getState().recordingId !== closure_129_0) {
          c4 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          closure_130_9(closure_130_12.STARTED);
          const _Date = Date;
          closure_130_10(Date.now());
          c4 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      }
    } catch (tmp22) {
      closure_3 = tmp22;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp22;
      } else {
        c5 = tmp;
      }
    }
  }
};
function resetAudioRecording() {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.removeListener(BaseConnectionEvent.MediaEngineEvent.VoiceActivity, closure_21);
  timestampProducer();
}
function stopAndGetAudioRecording() {
  closure_8(null);
  closure_9(null);
  let waveform = closure_11.getState().waveform;
  const mapped = waveform.map((item) => {
    [tmp] = item;
    return tmp;
  });
  let arr3 = mapped;
  if (mapped.length > closure_16) {
    arr3 = downsampleWaveformDefault(mapped, tmp3);
  }
  const mapped1 = arr3.map((item) => Math.min(item, closure_1_13));
  const uint8Array = new Uint8Array(mapped1);
  closure_0 = byteLengthDefault.fromByteArray(uint8Array);
  return new Promise((waveform) => {
    mediaEngine = mediaEngine.getMediaEngine();
    const result = mediaEngine.stopLocalAudioRecording((filename, arg1) => {
      waveform({ filename, durationSecs: arg1 / 1000, waveform });
    });
  });
}
let closure_25 = async function _endAudioRecording(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp3;
          closure_128_0 = undefined;
          let startTimeMillis;
          state = state.getState();
          closure_128_0 = state.savedVoiceMessageUploadData;
          let tmp9 = null == closure_128_0;
          if (tmp9) {
            tmp9 = state.recordingStatus === constants.REQUESTED;
          }
          if (tmp9) {
            stopAndGetAudioRecording();
            closure_128_0 = { filename: "", durationSecs: 0, waveform: "" };
          }
          if (null == closure_128_0) {
            c2 = 1;
            c3 = 1;
            const obj1 = { value: stopAndGetAudioRecording(), done: false };
            return obj1;
          } else {
            startTimeMillis = closure_129_11.getState().startTimeMillis;
            closure_129_23();
            const obj2 = { data: closure_128_0, startTimeMillis };
            c3 = 3;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
      }
      c3 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp21) {
      c3 = tmp;
      throw tmp21;
    }
  }
};
function stopAndCacheAudioRecording() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_27 = async function _stopAndCacheAudioRecording(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp3;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: stopAndGetAudioRecording(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_128_0 = value;
        const mediaEngine = closure_129_4.getMediaEngine();
        mediaEngine.removeListener(closure_129_0(closure_129_2[9]).MediaEngineEvent.VoiceActivity, closure_129_21);
        closure_129_7(closure_128_0);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp18) {
      c3 = tmp;
      throw tmp18;
    }
  }
};
const VoiceMessagesUIStore = fn(11960);
({ addVoiceMessageWave: hasOwnProperty, resetVoiceMessageState: metroRequire, setSavedVoiceMessageUploadData: closure_7, setVoiceMessageRecordingId: closure_8, setVoiceMessageRecordingState: closure_9, setVoiceMessageStartTimeMillis: c10, useVoiceMessagesUIStore: closure_11, VoiceMessageRecordingStatus: closure_12 } = VoiceMessagesUIStore);
const VoiceMessageConstants = fn(11961);
({ WAVEFORM_WAVE_MAX_VALUE: map1, VOICE_RECORDING_MIN_DB: closure_14, VOICE_RECORDING_MAX_DB: closure_15, WAVEFORM_MAX_SAMPLES: closure_16, VOICE_RECORDING_MAX_DURATION_MILLIS: closure_17 } = VoiceMessageConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
let c19 = null;
let closure_20 = new LoggerDefault("VoiceMessages");
let closure_21 = apply.throttle((arg0) => {
  const state = closure_1_11.getState();
  if (null != state.startTimeMillis) {
    hasOwnProperty(map1 * ((arg0 - closure_1_14) / (__initData - closure_1_14)));
    let tmp8 = null == state.savedVoiceMessageUploadData;
    if (tmp8) {
      const _performance = performance;
      tmp8 = performance.now() - state.startTimeMillis >= closure_1_17;
    }
    if (tmp8) {
      stopAndCacheAudioRecording();
    }
  }
}, 100);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessageUtils.tsx");

export const generateBase64EncodedWaveform = function generateBase64EncodedWaveform(arg0) {
  let arr = arg0;
  if (arg0.length > value2) {
    arr = downsampleWaveformDefault(arg0, tmp);
  }
  const mapped = arr.map((item) => Math.min(item, closure_1_13));
  const uint8Array = new Uint8Array(mapped);
  return byteLengthDefault.fromByteArray(uint8Array);
};
export const startAudioRecording = function startAudioRecording() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endAudioRecording = function endAudioRecording() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { stopAndCacheAudioRecording };
export const emitVoiceMessageRecorded = function emitVoiceMessageRecorded(CANCELLED_DURATION, durationSecs, startTimeMillis) {
  if (null != startTimeMillis) {
    const obj = { recording_start_timestamp: startTimeMillis, recording_stop_timestamp: null, duration_secs: null, result: null, initialize_secs: null };
    const _Date = Date;
    obj.recording_stop_timestamp = Date.now();
    obj.duration_secs = durationSecs;
    obj.result = CANCELLED_DURATION;
    obj.initialize_secs = initialize_secs;
    obj.track(AnalyticEvents.VOICE_MESSAGE_RECORDED, obj);
    initialize_secs = null;
  }
};
export const triggerHaptic = function triggerHaptic() {
  const obj = HapticUtils;
  const HapticFeedbackTypes = HapticUtils.HapticFeedbackTypes;
  const result = obj.triggerHapticFeedback(PlatformUtils.isAndroid() ? HapticFeedbackTypes.IMPACT_LIGHT : HapticFeedbackTypes.IMPACT_MEDIUM);
};