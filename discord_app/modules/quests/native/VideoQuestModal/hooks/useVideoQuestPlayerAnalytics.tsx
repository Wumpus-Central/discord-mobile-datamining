// === Module 15470: useVideoQuestPlayerAnalytics ===

// Module 15470 (useVideoQuestPlayerAnalytics)
import MonitoringAgentDefault from "MonitoringAgent" /* 5171 */;
import MetricEvents from "MetricEvents" /* 5176 */;
import QuestTypes from "QuestTypes" /* 5752 */;
import QuestContent from "QuestContent" /* 5754 */;
import DiscordVideoPlayerTypes from "DiscordVideoPlayerTypes" /* 8029 */;
import AnalyticsActions from "AnalyticsActions" /* 8041 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8051 */;
import AdDataUtils from "AdDataUtils" /* 8057 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11853 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15360 */;
import AdsVideoUtils from "AdsVideoUtils" /* 15370 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import NetworkStore from "NetworkStore" /* 4878 */;

require = fn;
const AppState = fn(17).AppState;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx");

export default function useVideoQuestPlayerAnalytics(duration) {
  duration = duration.duration;
  const isQuestCompleted = duration.isQuestCompleted;
  const playerState = duration.playerState;
  let questId = duration.questId;
  let sourceQuestContent = duration.sourceQuestContent;
  const videoAssetId = duration.videoAssetId;
  const videoSessionId = duration.videoSessionId;
  closure_7 = sourceQuestContent.useRef(null);
  sourceQuestContent.useRef(null);
  const questImpression = duration(playerState[5]).useQuestImpression();
  let obj = duration(playerState[5]);
  const getQuestImpressionId = duration(playerState[5]).useGetQuestImpressionId();
  sourceQuestContent.useRef(null);
  const effect = sourceQuestContent.useEffect(() => {
    if (null == ref2.current) {
      const obj = AdDataUtils;
      tmp.current = obj.getAdUser(AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE));
    }
  }, []);
  sourceQuestContent.useRef(null);
  let items = [getQuestImpressionId, questId, sourceQuestContent];
  const layoutEffect = sourceQuestContent.useLayoutEffect(() => {
    let obj2 = { getImpressionId: getQuestImpressionId, onEmit: null };
    closure_0 = questId(function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              sourceQuestContent = tmp3;
              questId = tmp5;
              closure_131_0 = closure_0;
              closure_131_1 = undefined;
              closure_131_2 = undefined;
              closure_131_3 = undefined;
              const VIDEO_MODAL_MOBILE = closure_0(5754).QuestContent.VIDEO_MODAL_MOBILE;
              closure_131_1 = VIDEO_MODAL_MOBILE;
              c6 = 1;
              closure_131_2 = getQuestImpressionId();
              if (null == ref.current) {
                const obj8 = closure_0(8057);
                ref.current = obj8.getAdUser(closure_0(8051).getQuestContentName(VIDEO_MODAL_MOBILE));
                const obj9 = closure_0(8051);
              }
              c7 = 2;
              c8 = 1;
              const obj10 = { value: ref.current, done: false };
              return obj10;
            }
          } else if (1 === tmp8) {
            c6 = 0;
            closure_131_4 = closure_5;
            const questLogger = closure_0(8032).getQuestLogger();
            questLogger.warn("[EngagedView] failed to emit quest_content_engaged_viewed", closure_131_4);
            throw closure_131_4;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_131_3 = value;
            const obj12 = { questId, event: constants.QUEST_CONTENT_ENGAGED_VIEWED, properties: null, sourceQuestContent: null };
            const obj14 = {};
            const obj13 = closure_0(8041);
            const merged = Object.assign(closure_0(8051).getContentProperties(closure_131_1));
            const merged1 = Object.assign(engagedViewEmitter(8000)());
            obj14.impression_id = closure_131_2;
            obj14.video_watch_seconds = closure_131_0.video_watch_seconds;
            obj14.video_position_seconds = closure_131_0.video_position_seconds;
            obj14.video_duration_seconds = closure_131_0.video_duration_seconds;
            let advertisingId = null;
            if (null != closure_131_3) {
              advertisingId = null;
              if (obj.isIOS()) {
                advertisingId = closure_131_3.advertisingId;
              }
              obj = closure_0(1364);
            }
            obj14.apple_advertising_id = advertisingId;
            let advertisingId1 = null;
            if (null != closure_131_3) {
              advertisingId1 = null;
              if (obj2.isAndroid()) {
                advertisingId1 = closure_131_3.advertisingId;
              }
              obj2 = closure_0(1364);
            }
            obj14.android_advertising_id = advertisingId1;
            const obj16 = closure_0(8051);
            const adMetadataSealed = closure_0(8022).getAdMetadataSealed(sourceQuestContent, questId);
            let metadata_sealed = adMetadataSealed;
            if (adMetadataSealed == null) {
              metadata_sealed = null;
            }
            obj14.metadata_sealed = metadata_sealed;
            const obj3 = closure_0(8022);
            const adTrafficMetadataSealed = closure_0(8022).getAdTrafficMetadataSealed(sourceQuestContent, questId);
            let traffic_metadata_sealed = adTrafficMetadataSealed;
            if (adTrafficMetadataSealed == null) {
              traffic_metadata_sealed = null;
            }
            obj14.traffic_metadata_sealed = traffic_metadata_sealed;
            obj12.properties = obj14;
            obj12.sourceQuestContent = sourceQuestContent;
            obj13.trackQuestEvent(obj12);
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp53) {
          closure_5 = tmp53;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp53;
          } else {
            c7 = tmp;
          }
        }
      }
    });
    obj2.onEmit = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const engagedViewEmitter = duration(playerState[9]).createEngagedViewEmitter(obj2);
    ref.current = engagedViewEmitter;
    return () => {
      if (ref.current === engagedViewEmitter) {
        tmp.current = null;
      }
    };
  }, items);
  const callback = sourceQuestContent.useCallback((positionSeconds) => {
    closure_7.current = positionSeconds.positionSeconds;
    const current = ref3.current;
    if (current != null) {
      current.onProgress(positionSeconds);
    }
  }, []);
  const callback1 = sourceQuestContent.useCallback(() => {
    const current = ref3.current;
    if (current != null) {
      current.pause();
    }
  }, []);
  const effect1 = sourceQuestContent.useEffect(() => {
    closure_8.current = Date.now();
  }, []);
  const items1 = [questId, videoSessionId, playerState, questImpression, sourceQuestContent];
  const effect2 = sourceQuestContent.useEffect(() => {
    closure_0 = videoAssetId.addEventListener("change", (event) => {
      if (null != ref.current) {
        const obj4 = { questId, event: null, properties: null, sourceQuestContent: null };
        if ("active" === event) {
          let QUEST_VIDEO_APP_UNFOCUSED = ref.QUEST_VIDEO_APP_FOCUSED;
        } else {
          QUEST_VIDEO_APP_UNFOCUSED = ref.QUEST_VIDEO_APP_UNFOCUSED;
        }
        obj4.event = QUEST_VIDEO_APP_UNFOCUSED;
        const obj = { video_timestamp_seconds: tmp.current, video_state, video_session_id, impression_id: null };
        let id;
        if (questImpression != null) {
          id = questImpression.getId();
        }
        obj.impression_id = id;
        obj4.properties = obj;
        obj4.sourceQuestContent = sourceQuestContent;
        duration(playerState[10]).trackQuestEvent(obj4);
        const obj3 = duration(playerState[10]);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items1);
  const items2 = [questId, videoAssetId, isQuestCompleted, videoSessionId, duration, questImpression, sourceQuestContent];
  const callback2 = sourceQuestContent.useCallback((segment_end_sec) => {
    if (null != closure_7.current) {
      const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_SEGMENT_WATCHED, properties: null, sourceQuestContent: null };
      const obj3 = {};
      const merged = Object.assign(segment_end_sec);
      obj3.video_asset_id = videoAssetId;
      obj3.quest_completed = isQuestCompleted;
      obj3.video_duration_sec = duration;
      const obj = AnalyticsActions;
      obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(segment_end_sec.segment_end_sec, tmp.current);
      obj3.video_session_id = videoSessionId;
      let id;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      obj3.impression_id = id;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj2);
    }
  }, items2);
  const callback3 = sourceQuestContent.useCallback(() => closure_7.current, []);
  let obj3 = { getCurrentVideoTime: callback3, onAnalytics: callback2, emitIntervalMs: null, minSegmentDurationMs: null };
  let obj2 = duration(playerState[5]);
  obj3.emitIntervalMs = duration(playerState[16]).SEGMENT_ANALYTICS_EMIT_INTERVAL_MS;
  obj3.minSegmentDurationMs = duration(playerState[16]).SEGMENT_ANALYTICS_MIN_DURATION_MS;
  const tmp11Result = isQuestCompleted(playerState[16])(obj3);
  const handlePlayerStateChange = tmp11Result.handlePlayerStateChange;
  const handleLoadEnd = tmp11Result.handleLoadEnd;
  const handleFirstFrame = tmp11Result.handleFirstFrame;
  const handleSeek = tmp11Result.handleSeek;
  const items3 = [playerState, handlePlayerStateChange, callback1];
  const effect3 = sourceQuestContent.useEffect(() => {
    if (AdsVideoTypes.PlayerState.PLAYING === playerState) {
      handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.PLAYING, null);
    } else if (AdsVideoTypes.PlayerState.PAUSED === playerState) {
      handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.PAUSED, null);
      callback1();
    } else if (AdsVideoTypes.PlayerState.ENDED === playerState) {
      handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.ENDED, null);
      callback1();
    } else if (AdsVideoTypes.PlayerState.ERRORED === playerState) {
      handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.PAUSED, null);
      callback1();
    }
  }, items3);
  sourceQuestContent.useRef(null);
  const items4 = [handleLoadEnd, handleFirstFrame, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items5 = [handlePlayerStateChange, callback1];
  const callback4 = sourceQuestContent.useCallback(() => {
    let diff = null;
    if (null != ref4.current) {
      const _Date = Date;
      diff = Date.now() - tmp.current;
    }
    handleLoadEnd(diff);
    handleFirstFrame(0);
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_ENDED, properties: null, sourceQuestContent: null };
    const obj3 = { video_asset_id: videoAssetId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), duration: diff, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items4);
  const items6 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback5 = sourceQuestContent.useCallback(() => {
    handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.ENDED, null);
    callback1();
  }, items5);
  const callback6 = sourceQuestContent.useCallback(() => {
    closure_18.current = Date.now();
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_STARTED, properties: null, sourceQuestContent: null };
    const obj3 = { video_asset_id: videoAssetId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), video_session_id: videoSessionId, is_hls_supported: true, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items6);
  sourceQuestContent.useRef(null);
  sourceQuestContent.useRef(-1);
  const items7 = [questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items8 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback7 = sourceQuestContent.useCallback((arg0) => {
    const effectiveConnectionSpeed = NetworkStore.getEffectiveConnectionSpeed();
    if (arg0) {
      const _Date2 = Date;
      ref.current = Date.now();
      ref5.current = ref5.current + 1;
      const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_BUFFERING_STARTED, properties: null, sourceQuestContent: null };
      const obj3 = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, buffer_index: ref5.current, video_session_id: videoSessionId, impression_id: null };
      let id;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      obj3.impression_id = id;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj2);
    } else {
      let diff = null;
      if (null != ref.current) {
        const _Date = Date;
        diff = Date.now() - ref.current;
      }
      const obj6 = { questId, event: AnalyticEvents.QUEST_VIDEO_BUFFERING_ENDED, properties: null, sourceQuestContent: null };
      const obj7 = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, duration: diff, buffer_index: ref5.current, video_session_id: videoSessionId, impression_id: null };
      let id1;
      if (questImpression != null) {
        id1 = questImpression.getId();
      }
      obj7.impression_id = id1;
      obj6.properties = obj7;
      obj6.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj6);
    }
  }, items7);
  const items9 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback8 = sourceQuestContent.useCallback(() => {
    if (null != ref.current) {
      const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_TIME_TO_FIRST_FRAME, properties: null, sourceQuestContent: null };
      const obj3 = { duration_ms: null, video_session_id: null, video_asset_id: null, impression_id: null };
      const _Date = Date;
      obj3.duration_ms = Date.now() - tmp.current;
      obj3.video_session_id = videoSessionId;
      obj3.video_asset_id = videoAssetId;
      let id;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      obj3.impression_id = id;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj2);
    }
  }, items8);
  const items10 = [questId, videoSessionId, questImpression, sourceQuestContent, callback1];
  const callback9 = sourceQuestContent.useCallback(() => {
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_RESUMED, properties: null, sourceQuestContent: null };
    const obj3 = { video_timestamp_seconds: closure_7.current, pause_reason: QuestTypes.VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items9);
  let obj4 = { handleBufferAnalytics: callback7, handleEndAnalytics: callback5, handleEngagedViewProgress: callback, handleErrorAnalytics: null, handleLoadAnalytics: null, handleLoadStartAnalytics: null, handlePausePlaybackAnalytics: null, handleProgressAnalytics: null, handleReadyForDisplayAnalytics: null, handleResumePlaybackAnalytics: null, handleSeekAnalytics: null };
  const items11 = [duration, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const callback10 = sourceQuestContent.useCallback(() => {
    callback1();
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_PAUSED, properties: null, sourceQuestContent: null };
    const obj3 = { video_timestamp_seconds: closure_7.current, reason: QuestTypes.VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items10);
  obj4.handleErrorAnalytics = sourceQuestContent.useCallback((error) => {
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_ERROR, properties: null, sourceQuestContent: null };
    const obj = AnalyticsActions;
    let num = closure_7.current;
    if (num == null) {
      num = 0;
    }
    const obj4 = { video_progress: VideoQuestUtils.formatVideoProgressRatio(duration, num), video_error_type: null, video_asset_id: videoAssetId, network_connection_speed: null, video_session_id: videoSessionId, video_error_code: null, video_error_message: null, video_network_state: null, impression_id: null };
    let code;
    if (error != null) {
      code = error.error.code;
    }
    obj4.video_error_code = code;
    let localizedDescription;
    if (error != null) {
      localizedDescription = error.error.localizedDescription;
    }
    if (localizedDescription == null) {
      let errorString;
      if (error != null) {
        errorString = error.error.errorString;
      }
      localizedDescription = errorString;
    }
    obj4.video_error_message = localizedDescription;
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj4.impression_id = id;
    obj2.properties = obj4;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj2);
    if (tmpResult.isSourceError(error)) {
      const obj6 = { name: MetricEvents.MetricEvents.QUEST_VIDEO_ERROR, tags: null };
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + questId, "error_type:SOURCE_ERROR"];
      obj6.tags = items;
      MonitoringAgentDefault.increment(obj6);
    }
    tmpResult = AdsVideoUtils;
  }, items11);
  obj4.handleLoadAnalytics = callback4;
  obj4.handleLoadStartAnalytics = callback6;
  obj4.handlePausePlaybackAnalytics = callback10;
  const items12 = [questId, videoSessionId, questImpression, sourceQuestContent];
  obj4.handleProgressAnalytics = sourceQuestContent.useCallback((progress, video_timestamp_seconds, current) => {
    closure_7.current = current;
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_PROGRESSED, properties: null, sourceQuestContent: null };
    const obj3 = { progress, video_timestamp_seconds, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items12);
  obj4.handleReadyForDisplayAnalytics = callback8;
  obj4.handleResumePlaybackAnalytics = callback9;
  const items13 = [handleSeek, questId, videoSessionId, questImpression, sourceQuestContent];
  obj4.handleSeekAnalytics = sourceQuestContent.useCallback((from_time_sec, to_time_sec) => {
    handleSeek();
    if (null != from_time_sec) {
      const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_SEEKED, properties: null, sourceQuestContent: null };
      const obj3 = { from_time_sec, to_time_sec, video_session_id: videoSessionId, impression_id: null };
      let id;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      obj3.impression_id = id;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj2);
    }
  }, items13);
  return obj4;
};