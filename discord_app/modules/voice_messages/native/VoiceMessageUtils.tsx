// === Module 11824: _startAudioRecording ===

// Module 11824 (_startAudioRecording)
import timestampDefault from "timestamp" /* 3 */;
import byteLengthDefault from "byteLength" /* 206 */;
import set from "set" /* 500 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import HapticFeedbackTypes2 from "HapticFeedbackTypes" /* 4348 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4479 */;
import downsampleWaveformDefault from "downsampleWaveform" /* 11825 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_detectH265HardwareDecode" /* 4431 */;
import VoiceMessageRecordingStatus from "VoiceMessageRecordingStatus" /* 11528 */;
import VoiceMessageAnimationState from "VoiceMessageAnimationState" /* 11529 */;
import { AnalyticEvents } from "ME" /* 676 */;
import importDefaultResult from "apply" /* 12 */;

require = arg1;
function _startAudioRecording() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp5;
              closure_1 = undefined;
              c19 = null;
              closure_1_9(closure_1_12.REQUESTED);
              closure_1_8(callback);
              const mediaEngine = store.getMediaEngine();
              mediaEngine.on(callback(closure_1_2[9]).MediaEngineEvent.VoiceActivity, closure_1_21);
              store = 1;
              const _performance2 = performance;
              closure_1 = performance.now();
              const mediaEngine1 = store.getMediaEngine();
              obj1 = { echoCancellation: null, echoCancellationPreEcho: false, noiseSuppression: null, automaticGainControlConfig: null, noiseCancellation: null };
              obj1[0] = store.getEchoCancellation();
              obj1[2] = store.getNoiseSuppression();
              const obj2 = { enabled: null };
              obj2[0] = store.getAutomaticGainControl();
              obj1[3] = obj2;
              obj1[4] = store.getNoiseCancellation();
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = mediaEngine1.startLocalAudioRecording(obj1);
              return obj3;
            }
          } else if (1 === tmp8) {
            store = 0;
            closure_2 = closure_3;
            callback4();
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            store = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const _performance = performance;
            closure_19 = performance.now() - closure_1;
            logger.log("Voice message audio startup latency:", closure_19);
            if (state.getState().recordingId !== callback) {
              store = 0;
              c6 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              callback2(constants.STARTED);
              const _Date = Date;
              callback3(Date.now());
              store = 0;
              c6 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
        } catch (tmp22) {
          closure_3 = tmp22;
          if (tmp4 === store) {
            c6 = tmp2;
            throw tmp22;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_22 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function resetAudioRecording() {
  mediaEngine = mediaEngine.getMediaEngine();
  mediaEngine.removeListener(BaseConnectionEvent.MediaEngineEvent.VoiceActivity, closure_21);
  callback3();
}
function stopAndGetAudioRecording() {
  callback4(null);
  callback5(null);
  const waveform = store.getState().waveform;
  const mapped = waveform.map((arg0) => {
    [tmp] = arg0;
    return tmp;
  });
  let arr3 = mapped;
  if (mapped.length > closure_16) {
    arr3 = downsampleWaveformDefault(mapped, tmp3);
  }
  const mapped1 = arr3.map((arg0) => Math.min(arg0, closure_13));
  const uint8Array = new Uint8Array(mapped1);
  closure_0 = byteLengthDefault.fromByteArray(uint8Array);
  const obj = byteLengthDefault;
  return new Promise((arg0) => {
    closure_0 = arg0;
    const mediaEngine = closure_1_4.getMediaEngine();
    const result = mediaEngine.stopLocalAudioRecording((filename) => {
      callback({ filename, durationSecs: arg1 / 1000, waveform: callback });
    });
  });
}
function _endAudioRecording() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let startTimeMillis = tmp2;
            closure_0 = tmp3;
            closure_0 = undefined;
            startTimeMillis = undefined;
            const state = closure_1_11.getState();
            closure_0 = state.savedVoiceMessageUploadData;
            let tmp9 = null == closure_0;
            if (tmp9) {
              tmp9 = state.recordingStatus === closure_1_12.REQUESTED;
            }
            if (tmp9) {
              closure_1_24();
              closure_0 = { filename: "", durationSecs: 0, waveform: "" };
            }
            if (null == closure_0) {
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_24();
              return obj1;
            } else {
              startTimeMillis = state.getState().startTimeMillis;
              callback();
              const obj2 = { data: null, startTimeMillis: null };
              obj2[0] = closure_0;
              obj2[1] = startTimeMillis;
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
        }
        c3 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp21) {
        c3 = tmp;
        throw tmp21;
      }
    }
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function stopAndCacheAudioRecording() {
  const self = this;
  const apply = _stopAndCacheAudioRecording.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _stopAndCacheAudioRecording() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp2;
            let callback = tmp3;
            callback = undefined;
            table = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_24();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          callback = arg1;
          mediaEngine = mediaEngine.getMediaEngine();
          mediaEngine.removeListener(callback(table[9]).MediaEngineEvent.VoiceActivity, closure_21);
          callback2(callback);
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp18) {
        c3 = tmp;
        throw tmp18;
      }
    }
  });
  closure_27 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ addVoiceMessageWave: c5, resetVoiceMessageState: closure_6, setSavedVoiceMessageUploadData: error, setVoiceMessageRecordingId: closure_8, setVoiceMessageRecordingState: c9, setVoiceMessageStartTimeMillis: c10, useVoiceMessagesUIStore: unpackModuleId, VoiceMessageRecordingStatus: closure_12 } = VoiceMessageRecordingStatus);
({ WAVEFORM_WAVE_MAX_VALUE: map1, VOICE_RECORDING_MIN_DB: closure_14, VOICE_RECORDING_MAX_DB: closure_15, WAVEFORM_MAX_SAMPLES: closure_16, VOICE_RECORDING_MAX_DURATION_MILLIS: closure_17 } = VoiceMessageAnimationState);
let c19 = null;
let closure_20 = new timestampDefault("VoiceMessages");
const tmp4 = new timestampDefault("VoiceMessages");
let closure_21 = importDefaultResult.throttle((arg0) => {
  const state = store.getState();
  if (null != state.startTimeMillis) {
    callback2(closure_13 * ((arg0 - closure_14) / (closure_15 - closure_14)));
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
let result = require("set").fileFinishedImporting("modules/voice_messages/native/VoiceMessageUtils.tsx");

export const generateBase64EncodedWaveform = function generateBase64EncodedWaveform(arg0) {
  let arr = arg0;
  if (arg0.length > closure_16) {
    arr = downsampleWaveformDefault(arg0, tmp);
  }
  const mapped = arr.map((arg0) => Math.min(arg0, closure_13));
  const uint8Array = new Uint8Array(mapped);
  return byteLengthDefault.fromByteArray(uint8Array);
};
export const startAudioRecording = function startAudioRecording(closure_1_0) {
  const self = this;
  const apply = _startAudioRecording.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endAudioRecording = function endAudioRecording() {
  const self = this;
  const apply = _endAudioRecording.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { stopAndCacheAudioRecording };
export const emitVoiceMessageRecorded = function emitVoiceMessageRecorded(CANCELLED_DURATION, durationSecs, first) {
  if (null != first) {
    let obj = expandEventPropertiesDefault;
    obj = { recording_start_timestamp: null, recording_stop_timestamp: null, duration_secs: null, result: null, initialize_secs: null };
    obj[0] = first;
    const _Date = Date;
    obj[1] = Date.now();
    obj[2] = durationSecs;
    obj[3] = CANCELLED_DURATION;
    obj[4] = c19;
    obj.track(AnalyticEvents.VOICE_MESSAGE_RECORDED, obj);
    c19 = null;
  }
};
export const triggerHaptic = function triggerHaptic() {
  const obj = HapticFeedbackTypes2;
  const obj2 = set;
  const HapticFeedbackTypes = HapticFeedbackTypes2.HapticFeedbackTypes;
  const result = obj.triggerHapticFeedback(set.isAndroid() ? HapticFeedbackTypes.IMPACT_LIGHT : HapticFeedbackTypes.IMPACT_MEDIUM);
};