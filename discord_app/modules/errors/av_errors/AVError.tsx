// === Module 9253: AVError ===

// Module 9253 (AVError)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

let closure_2 = ["type"];
const logger = new LoggerDefault("AVError");
const obj = { STREAM_FAILED_TO_START: "stream-failed-to-start", NO_INPUT_DEVICES: "no-input-devices", NO_AUDIO_INPUT_DETECTED: "no-audio-input-detected", DEBUG_LOG_UPLOAD_FAILED: "debug-log-upload-failed", STREAM_VIEW_LOW_FPS: "stream-view-low-fps", STREAM_VIEW_HIGH_PACKET_LOSS: "stream-view-high-packet-loss", STREAM_SEND_LOW_FPS: "stream-send-low-encode-fps", STREAM_SEND_HIGH_PACKET_LOSS: "stream-send-high-packet-loss", STREAM_BAD_NETWORK_QUALITY: "stream-send-network-quality", STREAM_SOUNDSHARE_FAILED: "stream-soundshare-failed", NOISE_CANCELLER_ERROR: "noise-canceller-error", SCREENSHARE_OS_NOT_SUPPORTED: "screenshare-min-os-requirement", STREAM_RECONNECTING: "stream-reconnecting", VIDEO_DECODE_ERROR: "video-decode-error", VIDEO_ENCODE_ERROR: "video-encode-error", STREAM_FULL: "stream-full", AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH: "audio-capture-sample-rate-mismatch", VIDEO_STREAM_SENDER_READY_TIMEOUT: "video-stream-sender-ready-timeout", VIDEO_STREAM_RECEIVER_READY_TIMEOUT: "video-stream-receiver-ready-timeout", VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM: "video-stream-sender-ready-timeout-no-stream", VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM: "video-stream-receiver-ready-timeout-no-stream", CAMERA_SEND_LOW_FPS: "camera-send-low-encode-fps", SCREENSHARE_OS_ERROR: "screenshare-os-error", VIDEO_BACKGROUND_UNAVAILABLE: "video-background-unavailable" };
const obj2 = { Audio: "audio", Video: "video", Devices: "devices", Debug: "debug" };
const obj3 = { Critical: "critical", Warning: "warning", Info: "info" };
const obj4 = { [obj.STREAM_SOUNDSHARE_FAILED]: obj5, [obj.NOISE_CANCELLER_ERROR]: obj6, [obj.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH]: obj7, [obj.STREAM_FAILED_TO_START]: obj8, [obj.STREAM_VIEW_LOW_FPS]: obj9, [obj.STREAM_VIEW_HIGH_PACKET_LOSS]: obj10, [obj.STREAM_SEND_HIGH_PACKET_LOSS]: obj11, [obj.STREAM_SEND_LOW_FPS]: obj12, [obj.STREAM_BAD_NETWORK_QUALITY]: obj13, [obj.STREAM_RECONNECTING]: obj14, [obj.VIDEO_DECODE_ERROR]: obj15, [obj.VIDEO_ENCODE_ERROR]: obj16, [obj.STREAM_FULL]: obj17, [obj.VIDEO_STREAM_SENDER_READY_TIMEOUT]: obj18, [obj.VIDEO_STREAM_RECEIVER_READY_TIMEOUT]: obj19, [obj.CAMERA_SEND_LOW_FPS]: obj20, [obj.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM]: obj21, [obj.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM]: obj22, [obj.VIDEO_BACKGROUND_UNAVAILABLE]: obj23, [obj.NO_INPUT_DEVICES]: obj24, [obj.NO_AUDIO_INPUT_DETECTED]: obj25, [obj.SCREENSHARE_OS_NOT_SUPPORTED]: obj26, [obj.SCREENSHARE_OS_ERROR]: obj27, [obj.DEBUG_LOG_UPLOAD_FAILED]: obj28 };
let closure_129_1;
const values = Object.values(obj4);
const mapped = values.map((errorCode) => errorCode.errorCode);
let closure_129_0 = mapped;
obj10 = { errorCode: 2003, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: false };
obj11 = { errorCode: 2004, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: true };
obj12 = { errorCode: 2005, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: true };
obj13 = { errorCode: 2006, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: true };
obj14 = { errorCode: 2007, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: false };
obj15 = { errorCode: 2008, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: false };
obj16 = { errorCode: 2009, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: true };
obj17 = { errorCode: 2010, severity: obj3.Critical, category: obj2.Video, isErrorOutbound: false };
obj18 = { errorCode: 2011, severity: obj3.Critical, category: obj2.Video, isErrorOutbound: true };
obj19 = { errorCode: 2012, severity: obj3.Critical, category: obj2.Video, isErrorOutbound: false };
obj20 = { errorCode: 2013, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: true };
obj21 = { errorCode: 2014, severity: obj3.Critical, category: obj2.Video, isErrorOutbound: true };
obj22 = { errorCode: 2015, severity: obj3.Critical, category: obj2.Video, isErrorOutbound: false };
obj23 = { errorCode: 2016, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: true };
obj24 = { errorCode: 3001, severity: obj3.Critical, category: obj2.Devices, isErrorOutbound: true };
obj25 = { errorCode: 3002, severity: obj3.Critical, category: obj2.Devices, isErrorOutbound: true };
obj26 = { errorCode: 3003, severity: obj3.Critical, category: obj2.Devices, isErrorOutbound: true };
obj27 = { errorCode: 3004, severity: obj3.Critical, category: obj2.Devices, isErrorOutbound: true };
obj28 = { errorCode: 4001, severity: obj3.Info, category: obj2.Debug, isErrorOutbound: true };
obj5 = { errorCode: 1001, severity: obj3.Warning, category: obj2.Audio, isErrorOutbound: true };
obj6 = { errorCode: 1002, severity: obj3.Warning, category: obj2.Audio, isErrorOutbound: true };
obj7 = { errorCode: 1003, severity: obj3.Warning, category: obj2.Audio, isErrorOutbound: true };
obj8 = { errorCode: 2001, severity: obj3.Critical, category: obj2.Video, isErrorOutbound: true };
obj9 = { errorCode: 2002, severity: obj3.Warning, category: obj2.Video, isErrorOutbound: false };
const tmp2 = new LoggerDefault("AVError");
if (mapped.length !== set.size) {
  closure_129_1 = mapped.filter((item, index) => importDefault.indexOf(item) !== index);
  const _Object = Object;
  const entries = Object.entries(obj4);
  const found = entries.filter((item) => {
    [, tmp] = item;
    return dependencyMap.includes(tmp.errorCode);
  });
  const mapped1 = found.map((item) => {
    [tmp, tmp2] = item;
    return "" + tmp + ": " + tmp2.errorCode;
  });
  const _Error = Error;
  const _HermesInternal = HermesInternal;
  const error = new Error("Duplicate AV error codes found:\n" + mapped1.join("\n"));
  throw error;
} else {
  const result = fn(2).fileFinishedImporting("modules/errors/av_errors/AVError.tsx");
  exports.AVError = obj;
  exports.AVErrorCategory = obj2;
  exports.AVErrorSeverity = obj3;
  exports.AVUnderlyingError = { Unknown: "Unknown", UploadErrorGeneral: "UploadErrorCodes.GENERAL", UploadErrorNoFile: "UploadErrorCodes.NO_FILE", UploadErrorProgress: "UploadErrorCodes.PROGRESS", UploadErrorUpload: "UploadErrorCodes.UPLOAD", UploadErrorRead: "UploadErrorCodes.READ", KrispCpuOveruse: "NoiseCancellerError.CPU_OVERUSE", KrispFailed: "NoiseCancellerError.FAILED", KrispVadCpuOveruse: "NoiseCancellerError.VAD_CPU_OVERUSE", KrispInitError: "NoiseCancellerError.INIT_ERROR", KrispInitErrorNative: "NoiseCancellerError.INIT_ERROR_NATIVE", KrispInitErrorSse4NotSupported: "NoiseCancellerError.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED", KrispInitErrorAvx2NotSupported: "NoiseCancellerError.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED", KrispInitErrorUnsigned: "NoiseCancellerError.KRISP_INIT_ERROR_UNSIGNED", KrispInitErrorGlobalInit: "NoiseCancellerError.KRISP_INIT_ERROR_GLOBAL_INIT", KrispInitErrorWeight8k: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_8K", KrispInitErrorWeight16k: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_16K", KrispInitErrorWeight32k: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_32K", KrispInitErrorWeightVad: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_VAD", VideoBackgroundUnsupported: "VideoBackgroundError.UNSUPPORTED", VideoBackgroundInitFailed: "VideoBackgroundError.INIT_FAILED" };
  exports.reportAVError = function reportAVError(context) {
    const type = context.type;
    logger.error("AV error reported: " + type + " " + JSON.stringify(_objectWithoutProperties(context, closure_2)));
    DispatcherDefault.dispatch({ type: "REPORT_AV_ERROR", error: type, errorCode: obj4[type].errorCode, severity: obj4[type].severity, category: obj4[type].category, context });
  };
  exports.getErrorInfo = function getErrorInfo(avError) {
    return obj4[avError];
  };
}
set = new Set(mapped);