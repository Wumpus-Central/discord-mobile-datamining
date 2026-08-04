import _objectWithoutProperties from "_objectWithoutProperties";
import reset from "reset";
import handleConnectionOpen from "handleConnectionOpen";
import updateVoiceState from "updateVoiceState";
import isAVErrorContextOfType from "isAVErrorContextOfType";
import "initialize";

const require = arg1;
function setDifference(set, set2) {
  set = new Set();
  const iter = set[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (!set2.has(nextResult)) {
      let tmp3 = nextResult;
      let addResult = set.add(tmp2);
    }
    continue;
  }
  return set;
}
function makeErrorKey(item10044) {
  const obj = require(16792) /* ErrorDefinitions */.ErrorDefinitions[item10044.type];
  let errorContextKey;
  if (obj != null) {
    errorContextKey = obj.makeErrorContextKey(item10044);
  }
  return "" + item10044.type + ":" + errorContextKey;
}
let closure_3 = ["type"];
let c9 = new require("updateVoiceState")("AVErrorManager");
class AVErrorManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { MEDIA_ENGINE_SET_AUDIO_ENABLED: applyArgumentsResult.updateActiveErrors, AUDIO_INPUT_DETECTED: applyArgumentsResult.updateActiveErrors, AUDIO_SET_DISPLAY_SILENCE_WARNING: applyArgumentsResult.updateActiveErrors, CERTIFIED_DEVICES_SET: applyArgumentsResult.updateActiveErrors, AUDIO_SET_INPUT_DEVICE: applyArgumentsResult.updateActiveErrors, AUDIO_SET_OUTPUT_DEVICE: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_DEVICES: applyArgumentsResult.updateActiveErrors, RTC_CONNECTION_STATE: applyArgumentsResult.updateActiveErrors, VOICE_STATE_UPDATES: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_SET_GO_LIVE_SOURCE: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_SOUNDSHARE_FAILED: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_VIDEO_FILTER_ERROR: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_VIDEO_STATE_CHANGED: applyArgumentsResult.updateActiveErrors, NATIVE_SCREEN_SHARE_PICKER_UPDATE: applyArgumentsResult.updateActiveErrors, NATIVE_SCREEN_SHARE_PICKER_ERROR: applyArgumentsResult.updateActiveErrors, MEDIA_SESSION_JOINED: applyArgumentsResult.updateActiveErrors, RTC_CONNECTION_UPDATE_ID: applyArgumentsResult.updateActiveErrors, RTC_CONNECTION_VIDEO: applyArgumentsResult.updateActiveErrors, RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: applyArgumentsResult.updateActiveErrors, VIDEO_STREAM_READY_TIMEOUT: applyArgumentsResult.updateActiveErrors, CLEAR_VIDEO_STREAM_READY_TIMEOUT: applyArgumentsResult.updateActiveErrors, REPORT_AV_ERROR: applyArgumentsResult.handleReportAVError, STREAM_CLOSE: applyArgumentsResult.updateActiveErrors };
    return applyArgumentsResult;
  }
}
const prototype = AVErrorManager.prototype;
prototype["updateActiveErrors"] = function updateActiveErrors() {
  let activeErrors;
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  if (voiceChannelId == null) {
    voiceChannelId = null;
  }
  let tmp2 = null;
  if (null != voiceChannelId) {
    voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
    if (voiceStateForChannel == null) {
      voiceStateForChannel = null;
    }
    tmp2 = voiceStateForChannel;
  }
  allActiveStreams = allActiveStreams.getAllActiveStreams();
  const map = new Map();
  const values = Object.values(require(16792) /* ErrorDefinitions */.ErrorDefinitions);
  const iter = values[Symbol.iterator]();
  while (iter !== undefined) {
    let obj = { voiceChannelId: null, voiceState: null, activeStreams: null };
    obj[0] = voiceChannelId;
    obj[1] = tmp2;
    obj[2] = allActiveStreams;
    activeErrors = nextResult.getActiveErrors(obj);
    if (null != activeErrors) {
      let tmp9 = tmp8;
      let tmp10 = activeErrors;
      for (const item10044 of activeErrors) {
        let tmp11 = makeErrorKey;
        let result = map.set(makeErrorKey(item10044), item10044);
        continue;
      }
    }
    continue;
  }
  const activeErrors1 = activeErrors.getActiveErrors();
  if (activeErrors1 instanceof Map) {
    if (0 !== map.size) {
      const _Set = Set;
      const set = new Set(map.keys());
      const _Set2 = Set;
      const set1 = new Set(activeErrors1.keys());
      if (set.size > set1.size) {
        const tmp24 = setDifference(set, set1);
        for (const item10093 of tmp24) {
          let value = map.get(item10093);
          if (null != value) {
            let tmp29 = require;
            let tmp30 = dependencyMap;
            let obj5 = require(9091) /* mapped */;
            let tmp31 = value;
            let reportAVErrorResult = obj5.reportAVError(tmp28);
          }
          continue;
        }
      }
      if (set1.size > set.size) {
        const tmp47 = setDifference(set1, set);
        const tmp49 = tmp47[Symbol.iterator]();
        while (tmp49 !== undefined) {
          value = activeErrors1.get(tmp34);
          let tmp37 = value;
          if (null != value) {
            let tmp38 = value;
            let tmp39 = callback;
            let tmp40 = closure_3;
            let tmp41 = tmp2;
            let _JSON = JSON;
            let _HermesInternal2 = HermesInternal;
            let infoResult = tmp2.info("Error resolved: " + tmp37.type + " " + JSON.stringify(callback(tmp37, closure_3)));
          }
          continue;
        }
      }
      obj = { type: "ACTIVE_AV_ERRORS_CHANGED", activeErrors: null };
      obj[1] = map;
      importDefault(709).dispatch(obj);
      const obj6 = importDefault(709);
    }
  } else {
    const _Object = Object;
    const call = toString.call;
    const _HermesInternal = HermesInternal;
    tmp2.error("existingErrors is not a Map: " + activeErrors1 + " type: " + typeof call === "unknown" ? toString() : call(activeErrors1));
  }
};
prototype["handleReportAVError"] = function handleReportAVError(arg0) {
  let context;
  let error;
  ({ error, context } = arg0);
  const result = require(16812) /* getCurrentScreenshareCaptureMethod */.sendAVErrorAnalyticsEvent(error, context);
};
const aVErrorManager = new AVErrorManager();
let tmp2 = new require("updateVoiceState")("AVErrorManager");
let result = require("handleConnectionOpen").fileFinishedImporting("modules/errors/av_errors/AVErrorManager.tsx");

export default aVErrorManager;