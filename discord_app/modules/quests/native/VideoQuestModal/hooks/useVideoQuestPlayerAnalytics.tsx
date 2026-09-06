// === Module 15134: useVideoQuestPlayerAnalytics ===

// Module 15134 (useVideoQuestPlayerAnalytics)
import QuestTypes from "QuestTypes" /* 5447 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import DiscordVideoPlayerTypes from "DiscordVideoPlayerTypes" /* 7706 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11512 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15015 */;
import noop from "module_19" /* 19 */;
import NetworkStore from "NetworkStore" /* 4609 */;

require = fn;
const AppState = fn(17).AppState;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx");

export default function useVideoQuestPlayerAnalytics(duration) {
  duration = duration.duration;
  const isQuestCompleted = duration.isQuestCompleted;
  const playerState = duration.playerState;
  const questId = duration.questId;
  const sourceQuestContent = duration.sourceQuestContent;
  const videoAssetId = duration.videoAssetId;
  const videoSessionId = duration.videoSessionId;
  closure_7 = questId.useRef(null);
  questId.useRef(null);
  let obj = duration(playerState[4]);
  const questImpression = obj.useQuestImpression();
  const effect = questId.useEffect(() => {
    closure_8.current = Date.now();
  }, []);
  let items = [questId, videoSessionId, playerState, questImpression, sourceQuestContent];
  const effect1 = questId.useEffect(() => {
    closure_0 = sourceQuestContent.addEventListener("change", (event) => {
      if (null != ref.current) {
        let obj = { questId, event: null, properties: null, sourceQuestContent: null };
        if ("active" === event) {
          let QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_FOCUSED;
        } else {
          QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_UNFOCUSED;
        }
        obj.event = QUEST_VIDEO_APP_UNFOCUSED;
        obj = { video_timestamp_seconds: tmp.current, video_state, video_session_id, impression_id: null };
        let id;
        if (questImpression != null) {
          id = obj2.getId();
        }
        obj.impression_id = id;
        obj.properties = obj;
        obj.sourceQuestContent = sourceQuestContent;
        duration(playerState[5]).trackQuestEvent(obj);
        obj2 = questImpression;
        const obj3 = duration(playerState[5]);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items);
  const items1 = [questId, videoAssetId, isQuestCompleted, videoSessionId, duration, questImpression, sourceQuestContent];
  const callback = questId.useCallback((segment_end_sec) => {
    if (null != closure_7.current) {
      let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_SEGMENT_WATCHED, properties: null, sourceQuestContent: null };
      obj = {};
      const merged = Object.assign(segment_end_sec);
      obj.video_asset_id = videoAssetId;
      obj.quest_completed = isQuestCompleted;
      obj.video_duration_sec = duration;
      obj.video_progress = VideoQuestUtils.formatVideoProgressRatio(segment_end_sec.segment_end_sec, tmp.current);
      obj.video_session_id = videoSessionId;
      let id;
      if (questImpression != null) {
        id = obj5.getId();
      }
      obj.impression_id = id;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj);
      obj5 = questImpression;
    }
  }, items1);
  const callback1 = questId.useCallback(() => closure_7.current, []);
  obj = { getCurrentVideoTime: callback1, onAnalytics: callback, emitIntervalMs: duration(playerState[7]).SEGMENT_ANALYTICS_EMIT_INTERVAL_MS, minSegmentDurationMs: duration(playerState[7]).SEGMENT_ANALYTICS_MIN_DURATION_MS };
  const tmp6Result = isQuestCompleted(playerState[7])(obj);
  const handlePlayerStateChange = tmp6Result.handlePlayerStateChange;
  const handleLoadEnd = tmp6Result.handleLoadEnd;
  const handleFirstFrame = tmp6Result.handleFirstFrame;
  const handleSeek = tmp6Result.handleSeek;
  const items2 = [playerState, handlePlayerStateChange];
  const effect2 = questId.useEffect(() => {
    if (AdsVideoTypes.PlayerState.PLAYING === playerState) {
      handlePlayerStateChange(tmp2(7706).VideoPlayerState.PLAYING, null);
    } else if (tmp2(15015).PlayerState.PAUSED === tmp) {
      handlePlayerStateChange(tmp2(7706).VideoPlayerState.PAUSED, null);
    } else if (tmp2(15015).PlayerState.ENDED === tmp) {
      handlePlayerStateChange(tmp2(7706).VideoPlayerState.ENDED, null);
    } else if (tmp2(15015).PlayerState.ERRORED === tmp) {
      handlePlayerStateChange(tmp2(7706).VideoPlayerState.PAUSED, null);
    }
  }, items2);
  questId.useRef(null);
  const items3 = [handleLoadEnd, handleFirstFrame, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items4 = [handlePlayerStateChange];
  const callback2 = questId.useCallback(() => {
    let diff = null;
    if (null != ref2.current) {
      const _Date = Date;
      diff = Date.now() - tmp.current;
    }
    handleLoadEnd(diff);
    handleFirstFrame(0);
    let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_ENDED, properties: null, sourceQuestContent: null };
    obj = { video_asset_id: videoAssetId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), duration: diff, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items3);
  const items5 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback3 = questId.useCallback(() => {
    handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.ENDED, null);
  }, items4);
  const callback4 = questId.useCallback(() => {
    closure_14.current = Date.now();
    let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_STARTED, properties: null, sourceQuestContent: null };
    obj = { video_asset_id: videoAssetId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), video_session_id: videoSessionId, is_hls_supported: true, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items5);
  closure_15 = questId.useRef(null);
  questId.useRef(-1);
  const items6 = [questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items7 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback5 = questId.useCallback((arg0) => {
    const effectiveConnectionSpeed = NetworkStore.getEffectiveConnectionSpeed();
    if (arg0) {
      const _Date2 = Date;
      tmp2.current = Date.now();
      ref3.current = ref3.current + 1;
      let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_BUFFERING_STARTED, properties: null, sourceQuestContent: null };
      obj = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, buffer_index: ref3.current, video_session_id: videoSessionId, impression_id: null };
      let id;
      if (questImpression != null) {
        id = obj8.getId();
      }
      obj.impression_id = id;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj);
      obj8 = questImpression;
    } else {
      let diff = null;
      if (null != tmp2.current) {
        const _Date = Date;
        diff = Date.now() - tmp2.current;
      }
      obj = AnalyticsActions;
      const obj1 = { questId, event: AnalyticEvents.QUEST_VIDEO_BUFFERING_ENDED, properties: null, sourceQuestContent: null };
      const obj2 = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, duration: diff, buffer_index: ref3.current, video_session_id: videoSessionId, impression_id: null };
      let id1;
      if (questImpression != null) {
        id1 = obj4.getId();
      }
      obj2.impression_id = id1;
      obj1.properties = obj2;
      obj1.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj1);
      obj4 = questImpression;
    }
  }, items6);
  const items8 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback6 = questId.useCallback(() => {
    if (null != ref.current) {
      let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_TIME_TO_FIRST_FRAME, properties: null, sourceQuestContent: null };
      obj = { duration_ms: null, video_session_id: null, video_asset_id: null, impression_id: null };
      const _Date = Date;
      obj.duration_ms = Date.now() - tmp.current;
      obj.video_session_id = videoSessionId;
      obj.video_asset_id = videoAssetId;
      let id;
      if (questImpression != null) {
        id = obj4.getId();
      }
      obj.impression_id = id;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj);
      obj4 = questImpression;
    }
  }, items7);
  const items9 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback7 = questId.useCallback(() => {
    let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_RESUMED, properties: null, sourceQuestContent: null };
    obj = { video_timestamp_seconds: closure_7.current, pause_reason: QuestTypes.VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items8);
  obj = { handleBufferAnalytics: callback5, handleEndAnalytics: callback3, handleErrorAnalytics: null, handleLoadAnalytics: null, handleLoadStartAnalytics: null, handlePausePlaybackAnalytics: null, handleProgressAnalytics: null, handleReadyForDisplayAnalytics: null, handleResumePlaybackAnalytics: null, handleSeekAnalytics: null };
  const items10 = [duration, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const callback8 = questId.useCallback(() => {
    let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_PAUSED, properties: null, sourceQuestContent: null };
    obj = { video_timestamp_seconds: closure_7.current, reason: QuestTypes.VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items9);
  obj.handleErrorAnalytics = questId.useCallback((error) => {
    let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_ERROR, properties: null, sourceQuestContent: null };
    let num = closure_7.current;
    if (num == null) {
      num = 0;
    }
    obj = { video_progress: VideoQuestUtils.formatVideoProgressRatio(duration, num), video_error_type: null, video_asset_id: videoAssetId, network_connection_speed: null, video_session_id: videoSessionId, video_error_code: null, video_error_message: null, video_network_state: null, impression_id: null };
    let code;
    if (error != null) {
      code = error.error.code;
    }
    obj.video_error_code = code;
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
    obj.video_error_message = localizedDescription;
    let id;
    if (questImpression != null) {
      id = obj5.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
    obj5 = questImpression;
    const tmp3 = questId;
    if (tmpResult.isSourceError(error)) {
      const obj1 = { name: tmp(7607).MetricEvents.QUEST_VIDEO_ERROR, tags: null };
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + tmp3, "error_type:SOURCE_ERROR"];
      obj1.tags = items;
      MonitoringAgentDefault.increment(obj1);
    }
  }, items10);
  obj.handleLoadAnalytics = callback2;
  obj.handleLoadStartAnalytics = callback4;
  obj.handlePausePlaybackAnalytics = callback8;
  const items11 = [questId, videoSessionId, questImpression, sourceQuestContent];
  obj.handleProgressAnalytics = questId.useCallback((progress, video_timestamp_seconds, current) => {
    closure_7.current = current;
    let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_PROGRESSED, properties: null, sourceQuestContent: null };
    obj = { progress, video_timestamp_seconds, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items11);
  obj.handleReadyForDisplayAnalytics = callback6;
  obj.handleResumePlaybackAnalytics = callback7;
  const items12 = [handleSeek, questId, videoSessionId, questImpression, sourceQuestContent];
  obj.handleSeekAnalytics = questId.useCallback((from_time_sec, to_time_sec) => {
    handleSeek();
    if (null != from_time_sec) {
      let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_SEEKED, properties: null, sourceQuestContent: null };
      obj = { from_time_sec, to_time_sec, video_session_id: videoSessionId, impression_id: null };
      let id;
      if (questImpression != null) {
        id = obj4.getId();
      }
      obj.impression_id = id;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj);
      obj4 = questImpression;
    }
  }, items12);
  return obj;
};