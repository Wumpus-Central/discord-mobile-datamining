// discord_app/modules/voice_messages/native/VoiceMessageUtils.tsx
import timestamp from "timestamp";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import VoiceMessageRecordingStatus from "VoiceMessageRecordingStatus";
import VoiceMessageAnimationState from "VoiceMessageAnimationState";
import { AnalyticEvents } from "ME";
import importDefaultResult from "set";
import { byteLength } from "../../../../_runtime/00206_byteLength.js";
import { BaseConnectionEvent } from "../../../../discord_common/js/packages/media-engine/index.tsx";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
import { HapticFeedbackTypes } from "../../haptics/HapticUtils.native.tsx";
import { downsampleWaveform } from "../downsampleWaveform.tsx";

let c10;
let c5;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function _startAudioRecording() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let closure_2 = tmp3;
              let closure_1 = tmp5;
              closure_1 = undefined;
              const outer1_19 = null;
              outer1_9(outer1_12.REQUESTED);
              outer1_8(callback);
              const mediaEngine = store.getMediaEngine();
              mediaEngine.on(callback(outer1_2[9]).MediaEngineEvent.VoiceActivity, outer1_21);
              store = 1;
              const _performance2 = performance;
              closure_1 = performance.now();
              const mediaEngine1 = store.getMediaEngine();
              const obj1 = { echoCancellation: null, echoCancellationPreEcho: false, noiseSuppression: null, automaticGainControlConfig: null, noiseCancellation: null };
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
            closure_2 = timestamp;
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
            let closure_19 = performance.now() - closure_1;
            logger.log("Voice message audio startup latency:", closure_19);
            if (state.getState().recordingId !== callback) {
              store = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              callback2(constants.STARTED);
              const _Date = Date;
              callback3(Date.now());
              store = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } catch (tmp22) {
          timestamp = tmp22;
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
  const _startAudioRecording = tmp;
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
    let tmp;
    [tmp] = arg0;
    return tmp;
  });
  let arr3 = mapped;
  if (mapped.length > closure_16) {
    arr3 = downsampleWaveform(mapped, tmp3);
  }
  const mapped1 = arr3.map((arg0) => Math.min(arg0, closure_13));
  const uint8Array = new Uint8Array(mapped1);
  let closure_0 = byteLength.fromByteArray(uint8Array);
  const obj = byteLength;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const mediaEngine = outer1_4.getMediaEngine();
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp3;
            closure_0 = undefined;
            startTimeMillis = undefined;
            const state = outer1_11.getState();
            closure_0 = state.savedVoiceMessageUploadData;
            let tmp9 = null == closure_0;
            if (tmp9) {
              tmp9 = state.recordingStatus === outer1_12.REQUESTED;
            }
            if (tmp9) {
              outer1_24();
              closure_0 = { filename: "", durationSecs: 0, waveform: "" };
            }
            if (null == closure_0) {
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_24();
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
  const _endAudioRecording = tmp;
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
        return { value: "HermesInternal", done: null };
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
            let closure_1 = tmp2;
            let callback = tmp3;
            callback = undefined;
            table = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_24();
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        c3 = tmp;
        throw tmp18;
      }
    }
  });
  const _stopAndCacheAudioRecording = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ addVoiceMessageWave: c5, resetVoiceMessageState: closure_6, setSavedVoiceMessageUploadData: error, setVoiceMessageRecordingId: metroImportAll, setVoiceMessageRecordingState: c9, setVoiceMessageStartTimeMillis: c10, useVoiceMessagesUIStore: unpackModuleId, VoiceMessageRecordingStatus: closure_12 } = VoiceMessageRecordingStatus);
({ WAVEFORM_WAVE_MAX_VALUE: map1, VOICE_RECORDING_MIN_DB: closure_14, VOICE_RECORDING_MAX_DB: closure_15, WAVEFORM_MAX_SAMPLES: closure_16, VOICE_RECORDING_MAX_DURATION_MILLIS: closure_17 } = VoiceMessageAnimationState);
let c19 = null;
let closure_20 = new require("VoiceMessageAnimationState")("VoiceMessages");
const tmp4 = new require("VoiceMessageAnimationState")("VoiceMessages");
let closure_21 = require("set").throttle((arg0) => {
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
let result = require("VoiceMessageRecordingStatus").fileFinishedImporting("modules/voice_messages/native/VoiceMessageUtils.tsx");

export const generateBase64EncodedWaveform = function generateBase64EncodedWaveform(arg0) {
  let arr = arg0;
  if (arg0.length > closure_16) {
    arr = downsampleWaveform(arg0, tmp);
  }
  const mapped = arr.map((arg0) => Math.min(arg0, closure_13));
  const uint8Array = new Uint8Array(mapped);
  return byteLength.fromByteArray(uint8Array);
};
export const startAudioRecording = function startAudioRecording(outer1_0) {
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
    let obj = expandEventProperties;
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
  const obj = HapticFeedbackTypes;
  const obj2 = set;
  const HapticFeedbackTypes = HapticFeedbackTypes.HapticFeedbackTypes;
  const result = obj.triggerHapticFeedback(set.isAndroid() ? HapticFeedbackTypes.IMPACT_LIGHT : HapticFeedbackTypes.IMPACT_MEDIUM);
};