// === Module 15246: useVideoQuestPlayerAnalytics ===

// Module 15246 (useVideoQuestPlayerAnalytics)
import QuestTypes from "QuestTypes" /* 5535 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7716 */;
import MetricEvents from "MetricEvents" /* 7721 */;
import DiscordVideoPlayerTypes from "DiscordVideoPlayerTypes" /* 7820 */;
import AnalyticsActions from "AnalyticsActions" /* 7832 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11666 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15138 */;
import AdsVideoUtils from "AdsVideoUtils" /* 15145 */;
import noop from "module_19" /* 19 */;
import NetworkStore from "NetworkStore" /* 4689 */;

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
  const questImpression = duration(playerState[4]).useQuestImpression();
  const effect = questId.useEffect(() => {
    closure_8.current = Date.now();
  }, []);
  let items = [questId, videoSessionId, playerState, questImpression, sourceQuestContent];
  const effect1 = questId.useEffect(() => {
    closure_0 = sourceQuestContent.addEventListener("change", (event) => {
      if (null != ref.current) {
        const obj4 = { questId, event: null, properties: null, sourceQuestContent: null };
        if ("active" === event) {
          let QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_FOCUSED;
        } else {
          QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_UNFOCUSED;
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
        duration(playerState[5]).trackQuestEvent(obj4);
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
  }, items1);
  const callback1 = questId.useCallback(() => closure_7.current, []);
  let obj2 = { getCurrentVideoTime: callback1, onAnalytics: callback, emitIntervalMs: null, minSegmentDurationMs: null };
  let obj = duration(playerState[4]);
  obj2.emitIntervalMs = duration(playerState[7]).SEGMENT_ANALYTICS_EMIT_INTERVAL_MS;
  obj2.minSegmentDurationMs = duration(playerState[7]).SEGMENT_ANALYTICS_MIN_DURATION_MS;
  const tmp6Result = isQuestCompleted(playerState[7])(obj2);
  const handlePlayerStateChange = tmp6Result.handlePlayerStateChange;
  const handleLoadEnd = tmp6Result.handleLoadEnd;
  const handleFirstFrame = tmp6Result.handleFirstFrame;
  const handleSeek = tmp6Result.handleSeek;
  const items2 = [playerState, handlePlayerStateChange];
  const effect2 = questId.useEffect(() => {
    if (AdsVideoTypes.PlayerState.PLAYING === playerState) {
      handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.PLAYING, null);
    } else if (AdsVideoTypes.PlayerState.PAUSED === playerState) {
      handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.PAUSED, null);
    } else if (AdsVideoTypes.PlayerState.ENDED === playerState) {
      handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.ENDED, null);
    } else if (AdsVideoTypes.PlayerState.ERRORED === playerState) {
      handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.PAUSED, null);
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
  }, items3);
  const items5 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback3 = questId.useCallback(() => {
    handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.ENDED, null);
  }, items4);
  const callback4 = questId.useCallback(() => {
    closure_14.current = Date.now();
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
  }, items5);
  questId.useRef(null);
  questId.useRef(-1);
  const items6 = [questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items7 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback5 = questId.useCallback((arg0) => {
    const effectiveConnectionSpeed = NetworkStore.getEffectiveConnectionSpeed();
    if (arg0) {
      const _Date2 = Date;
      ref.current = Date.now();
      ref3.current = ref3.current + 1;
      const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_BUFFERING_STARTED, properties: null, sourceQuestContent: null };
      const obj3 = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, buffer_index: ref3.current, video_session_id: videoSessionId, impression_id: null };
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
      const obj7 = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, duration: diff, buffer_index: ref3.current, video_session_id: videoSessionId, impression_id: null };
      let id1;
      if (questImpression != null) {
        id1 = questImpression.getId();
      }
      obj7.impression_id = id1;
      obj6.properties = obj7;
      obj6.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj6);
    }
  }, items6);
  const items8 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback6 = questId.useCallback(() => {
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
  }, items7);
  const items9 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback7 = questId.useCallback(() => {
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
  }, items8);
  let obj3 = { handleBufferAnalytics: callback5, handleEndAnalytics: callback3, handleErrorAnalytics: null, handleLoadAnalytics: null, handleLoadStartAnalytics: null, handlePausePlaybackAnalytics: null, handleProgressAnalytics: null, handleReadyForDisplayAnalytics: null, handleResumePlaybackAnalytics: null, handleSeekAnalytics: null };
  const items10 = [duration, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const callback8 = questId.useCallback(() => {
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
  }, items9);
  obj3.handleErrorAnalytics = questId.useCallback((error) => {
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
  }, items10);
  obj3.handleLoadAnalytics = callback2;
  obj3.handleLoadStartAnalytics = callback4;
  obj3.handlePausePlaybackAnalytics = callback8;
  const items11 = [questId, videoSessionId, questImpression, sourceQuestContent];
  obj3.handleProgressAnalytics = questId.useCallback((progress, video_timestamp_seconds, current) => {
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
  }, items11);
  obj3.handleReadyForDisplayAnalytics = callback6;
  obj3.handleResumePlaybackAnalytics = callback7;
  const items12 = [handleSeek, questId, videoSessionId, questImpression, sourceQuestContent];
  obj3.handleSeekAnalytics = questId.useCallback((from_time_sec, to_time_sec) => {
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
  }, items12);
  return obj3;
};