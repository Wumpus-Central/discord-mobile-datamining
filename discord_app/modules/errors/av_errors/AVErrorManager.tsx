// === Module 18071: AVErrorManager ===

// Module 18071 (AVErrorManager)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AVError from "AVError" /* 9131 */;
import ErrorDefinitions from "ErrorDefinitions" /* 18072 */;
import AVErrorAnalytics from "AVErrorAnalytics" /* 18092 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import AVErrorStore from "AVErrorStore" /* 9130 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let map;

function setDifference(set, set2) {
  set = new Set();
  const iter = set[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (!set2.has(nextResult)) {
      let addResult = set.add(tmp2);
    }
    continue;
  }
  return set;
}
function makeErrorKey(item10044) {
  const obj = ErrorDefinitions.ErrorDefinitions[item10044.type];
  let errorContextKey;
  const type = item10044.type;
  if (obj != null) {
    errorContextKey = obj.makeErrorContextKey(item10044);
  }
  return "" + type + ":" + errorContextKey;
}
let closure_3 = ["type"];
let tmp2 = new LoggerDefault("AVErrorManager");
const React4 = tmp2;
class AVErrorManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { MEDIA_ENGINE_SET_AUDIO_ENABLED: applyArgumentsResult.updateActiveErrors, AUDIO_INPUT_DETECTED: applyArgumentsResult.updateActiveErrors, AUDIO_SET_DISPLAY_SILENCE_WARNING: applyArgumentsResult.updateActiveErrors, CERTIFIED_DEVICES_SET: applyArgumentsResult.updateActiveErrors, AUDIO_SET_INPUT_DEVICE: applyArgumentsResult.updateActiveErrors, AUDIO_SET_OUTPUT_DEVICE: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_DEVICES: applyArgumentsResult.updateActiveErrors, RTC_CONNECTION_STATE: applyArgumentsResult.updateActiveErrors, VOICE_STATE_UPDATES: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_SET_GO_LIVE_SOURCE: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_SOUNDSHARE_FAILED: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_VIDEO_FILTER_ERROR: applyArgumentsResult.updateActiveErrors, MEDIA_ENGINE_VIDEO_STATE_CHANGED: applyArgumentsResult.updateActiveErrors, NATIVE_SCREEN_SHARE_PICKER_UPDATE: applyArgumentsResult.updateActiveErrors, NATIVE_SCREEN_SHARE_PICKER_ERROR: applyArgumentsResult.updateActiveErrors, MEDIA_SESSION_JOINED: applyArgumentsResult.updateActiveErrors, RTC_CONNECTION_UPDATE_ID: applyArgumentsResult.updateActiveErrors, RTC_CONNECTION_VIDEO: applyArgumentsResult.updateActiveErrors, RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: applyArgumentsResult.updateActiveErrors, VIDEO_STREAM_READY_TIMEOUT: applyArgumentsResult.updateActiveErrors, CLEAR_VIDEO_STREAM_READY_TIMEOUT: applyArgumentsResult.updateActiveErrors, REPORT_AV_ERROR: applyArgumentsResult.handleReportAVError, STREAM_CLOSE: applyArgumentsResult.updateActiveErrors };
    return applyArgumentsResult;
  }
  updateActiveErrors() {
    let voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (voiceChannelId == null) {
      voiceChannelId = null;
    }
    let tmp2 = null;
    if (null != voiceChannelId) {
      let voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId);
      if (voiceStateForChannel == null) {
        voiceStateForChannel = null;
      }
      tmp2 = voiceStateForChannel;
    }
    const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
    map = new Map();
    const values = Object.values(ErrorDefinitions.ErrorDefinitions);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj = { voiceChannelId, voiceState: tmp2, activeStreams: allActiveStreams };
      let activeErrors = nextResult.getActiveErrors(obj);
      if (null != activeErrors) {
        for (const item10044 of activeErrors) {
          let result = map.set(makeErrorKey(item10044), item10044);
          continue;
        }
      }
      continue;
    }
    const activeErrors1 = AVErrorStore.getActiveErrors();
    if (activeErrors1 instanceof Map) {
      if (0 !== map.size) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(map.keys());
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        const set1 = new Set(activeErrors1.keys());
        if (set.size > set1.size) {
          const tmp20 = setDifference(set, set1);
          for (const item10093 of tmp20) {
            let value = map.get(item10093);
            if (null != value) {
              let obj5 = AVError;
              let reportAVErrorResult = obj5.reportAVError(tmp24);
            }
            continue;
          }
        }
        if (set1.size > set.size) {
          const tmp43 = setDifference(set1, set);
          const tmp45 = tmp43[Symbol.iterator]();
          while (tmp45 !== undefined) {
            let value2 = activeErrors1.get(tmp30);
            let tmp33 = value2;
            if (null != value2) {
              let _JSON = JSON;
              let _HermesInternal2 = HermesInternal;
              let infoResult = logger.info("Error resolved: " + tmp33.type + " " + JSON.stringify(_objectWithoutProperties(tmp33, closure_3)));
            }
            continue;
          }
        }
        const obj2 = { type: "ACTIVE_AV_ERRORS_CHANGED", activeErrors: map };
        const obj6 = DispatcherDefault;
        obj6.dispatch(obj2);
      }
    } else {
      const _Object = Object;
      const _HermesInternal = HermesInternal;
      logger.error("existingErrors is not a Map: " + activeErrors1 + " type: " + toString.call(activeErrors1));
    }
  }
  handleReportAVError(arg0) {
    let context;
    let error;
    ({ error, context } = arg0);
    const obj = AVErrorAnalytics;
    const result = obj.sendAVErrorAnalyticsEvent(error, context);
  }
}
const prototype = AVErrorManager.prototype;
const aVErrorManager = new AVErrorManager();
let result = size.fileFinishedImporting("modules/errors/av_errors/AVErrorManager.tsx");

export default aVErrorManager;