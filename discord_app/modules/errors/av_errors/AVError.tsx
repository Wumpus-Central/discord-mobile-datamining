// discord_app/modules/errors/av_errors/AVError.tsx
import timestampDefault from "../../debug/Logger.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";

let closure_2 = ["type"];
let closure_4 = new timestampDefault("AVError");
let obj = { Critical: "critical", Warning: "warning", Info: "info" };
const obj1 = { [obj.STREAM_SOUNDSHARE_FAILED]: obj2, [obj.NOISE_CANCELLER_ERROR]: obj3, [obj.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH]: obj4, [obj.STREAM_FAILED_TO_START]: obj5, [obj.STREAM_VIEW_LOW_FPS]: obj6, [obj.STREAM_VIEW_HIGH_PACKET_LOSS]: obj7, [obj.STREAM_SEND_HIGH_PACKET_LOSS]: obj8, [obj.STREAM_SEND_LOW_FPS]: obj9, [obj.STREAM_BAD_NETWORK_QUALITY]: obj10, [obj.STREAM_RECONNECTING]: obj11, [obj.VIDEO_DECODE_ERROR]: obj12, [obj.VIDEO_ENCODE_ERROR]: obj13, [obj.STREAM_FULL]: obj14, [obj.VIDEO_STREAM_SENDER_READY_TIMEOUT]: obj15, [obj.VIDEO_STREAM_RECEIVER_READY_TIMEOUT]: obj16, [obj.CAMERA_SEND_LOW_FPS]: obj17, [obj.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM]: obj18, [obj.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM]: obj19, [obj.VIDEO_BACKGROUND_UNAVAILABLE]: obj20, [obj.NO_INPUT_DEVICES]: obj21, [obj.NO_AUDIO_INPUT_DETECTED]: obj22, [obj.SCREENSHARE_OS_NOT_SUPPORTED]: obj23, [obj.SCREENSHARE_OS_ERROR]: obj24, [obj.DEBUG_LOG_UPLOAD_FAILED]: obj25 };
let closure_1;
const values = Object.values(obj1);
const mapped = values.map((item, index) => item.errorCode);
obj10 = { errorCode: 2006, severity: obj.Warning, category: obj.Video, isErrorOutbound: true };
obj11 = { errorCode: 2007, severity: obj.Warning, category: obj.Video, isErrorOutbound: false };
obj12 = { errorCode: 2008, severity: obj.Warning, category: obj.Video, isErrorOutbound: false };
obj13 = { errorCode: 2009, severity: obj.Warning, category: obj.Video, isErrorOutbound: true };
obj14 = { errorCode: 2010, severity: obj.Critical, category: obj.Video, isErrorOutbound: false };
obj15 = { errorCode: 2011, severity: obj.Critical, category: obj.Video, isErrorOutbound: true };
obj16 = { errorCode: 2012, severity: obj.Critical, category: obj.Video, isErrorOutbound: false };
obj17 = { errorCode: 2013, severity: obj.Warning, category: obj.Video, isErrorOutbound: true };
obj18 = { errorCode: 2014, severity: obj.Critical, category: obj.Video, isErrorOutbound: true };
obj19 = { errorCode: 2015, severity: obj.Critical, category: obj.Video, isErrorOutbound: false };
obj2 = { errorCode: 1001, severity: obj.Warning, category: obj.Audio, isErrorOutbound: true };
obj20 = { errorCode: 2016, severity: obj.Warning, category: obj.Video, isErrorOutbound: true };
obj21 = { errorCode: 3001, severity: obj.Critical, category: obj.Devices, isErrorOutbound: true };
obj22 = { errorCode: 3002, severity: obj.Critical, category: obj.Devices, isErrorOutbound: true };
obj23 = { errorCode: 3003, severity: obj.Critical, category: obj.Devices, isErrorOutbound: true };
obj24 = { errorCode: 3004, severity: obj.Critical, category: obj.Devices, isErrorOutbound: true };
obj25 = { errorCode: 4001, severity: obj.Info, category: obj.Debug, isErrorOutbound: true };
obj3 = { errorCode: 1002, severity: obj.Warning, category: obj.Audio, isErrorOutbound: true };
obj4 = { errorCode: 1003, severity: obj.Warning, category: obj.Audio, isErrorOutbound: true };
obj5 = { errorCode: 2001, severity: obj.Critical, category: obj.Video, isErrorOutbound: true };
obj6 = { errorCode: 2002, severity: obj.Warning, category: obj.Video, isErrorOutbound: false };
obj7 = { errorCode: 2003, severity: obj.Warning, category: obj.Video, isErrorOutbound: false };
obj8 = { errorCode: 2004, severity: obj.Warning, category: obj.Video, isErrorOutbound: true };
obj9 = { errorCode: 2005, severity: obj.Warning, category: obj.Video, isErrorOutbound: true };
const tmp2 = new timestampDefault("AVError");
if (mapped.length !== set.size) {
  closure_1 = mapped.filter((item, index) => mapped.indexOf(item) !== index);
  const _Object = Object;
  const entries = Object.entries(obj1);
  const found = entries.filter((item, index) => {
    [, tmp] = item;
    return closure_1.includes(tmp.errorCode);
  });
  const mapped1 = found.map((item, index) => {
    [tmp, tmp2] = item;
    return "" + tmp + ": " + tmp2.errorCode;
  });
  const _Error = Error;
  const _HermesInternal = HermesInternal;
  const error = new Error("Duplicate AV error codes found:\n" + mapped1.join("\n"));
  throw error;
} else {
  const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/AVError.tsx");
  exports.AVError = obj;
  exports.AVErrorCategory = obj;
  exports.AVErrorSeverity = obj;
  exports.AVUnderlyingError = { Unknown: "Unknown", UploadErrorGeneral: "UploadErrorCodes.GENERAL", UploadErrorNoFile: "UploadErrorCodes.NO_FILE", UploadErrorProgress: "UploadErrorCodes.PROGRESS", UploadErrorUpload: "UploadErrorCodes.UPLOAD", UploadErrorRead: "UploadErrorCodes.READ", KrispCpuOveruse: "NoiseCancellerError.CPU_OVERUSE", KrispFailed: "NoiseCancellerError.FAILED", KrispVadCpuOveruse: "NoiseCancellerError.VAD_CPU_OVERUSE", KrispInitError: "NoiseCancellerError.INIT_ERROR", KrispInitErrorNative: "NoiseCancellerError.INIT_ERROR_NATIVE", KrispInitErrorSse4NotSupported: "NoiseCancellerError.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED", KrispInitErrorAvx2NotSupported: "NoiseCancellerError.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED", KrispInitErrorUnsigned: "NoiseCancellerError.KRISP_INIT_ERROR_UNSIGNED", KrispInitErrorGlobalInit: "NoiseCancellerError.KRISP_INIT_ERROR_GLOBAL_INIT", KrispInitErrorWeight8k: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_8K", KrispInitErrorWeight16k: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_16K", KrispInitErrorWeight32k: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_32K", KrispInitErrorWeightVad: "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_VAD", VideoBackgroundUnsupported: "VideoBackgroundError.UNSUPPORTED", VideoBackgroundInitFailed: "VideoBackgroundError.INIT_FAILED" };
  exports.reportAVError = function reportAVError(context) {
    const type = context.type;
    logger.error("AV error reported: " + type + " " + JSON.stringify(callback(context, closure_2)));
    mapped(closure_1[2]);
    const obj = { type: "REPORT_AV_ERROR", error: type, errorCode: tmp2.errorCode, severity: tmp2.severity, category: tmp2.category, context };
    obj.dispatch(obj);
  };
  exports.getErrorInfo = function getErrorInfo(avError) {
    return obj1[avError];
  };
}
set = new Set(mapped);