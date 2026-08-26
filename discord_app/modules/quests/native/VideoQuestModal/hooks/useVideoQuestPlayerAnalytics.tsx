// === Module 14657: useVideoQuestPlayerAnalytics ===

// Module 14657 (useVideoQuestPlayerAnalytics)
import closure_3 from "noop" /* 19 */;
import { AppState } from "get ActivityIndicator" /* 17 */;
import closure_5 from "handleConnectionInfoChange" /* 4538 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx");

export default function useVideoQuestPlayerAnalytics(duration) {
  duration = duration.duration;
  const isQuestCompleted = duration.isQuestCompleted;
  const playerState = duration.playerState;
  const questId = duration.questId;
  const sourceQuestContent = duration.sourceQuestContent;
  const videoAssetId = duration.videoAssetId;
  const videoSessionId = duration.videoSessionId;
  closure_7 = questId.useRef(null);
  closure_8 = questId.useRef(null);
  let obj = duration(playerState[4]);
  const questImpression = obj.useQuestImpression();
  const effect = questId.useEffect(() => {
    closure_8.current = Date.now();
  }, []);
  let items = [questId, videoSessionId, playerState, questImpression, sourceQuestContent];
  const effect1 = questId.useEffect(() => {
    closure_0 = sourceQuestContent.addEventListener("change", (arg0) => {
      if (null != ref.current) {
        let obj = { questId: null, event: null, properties: null, sourceQuestContent: null };
        obj[0] = closure_3;
        if ("active" === arg0) {
          let QUEST_VIDEO_APP_UNFOCUSED = closure_1_6.QUEST_VIDEO_APP_FOCUSED;
        } else {
          QUEST_VIDEO_APP_UNFOCUSED = closure_1_6.QUEST_VIDEO_APP_UNFOCUSED;
        }
        obj[1] = QUEST_VIDEO_APP_UNFOCUSED;
        obj = { video_timestamp_seconds: null, video_state: null, video_session_id: null, impression_id: null };
        obj[0] = tmp.current;
        obj[1] = closure_2;
        obj[2] = closure_6;
        let id;
        if (closure_9 != null) {
          id = obj2.getId();
        }
        obj[3] = id;
        obj[2] = obj;
        obj[3] = closure_4;
        lib(closure_1_2[5]).trackQuestEvent(obj);
        obj2 = closure_9;
        const obj3 = lib(closure_1_2[5]);
      }
    });
    return () => {
      lib.remove();
    };
  }, items);
  const items1 = [questId, videoAssetId, isQuestCompleted, videoSessionId, duration, questImpression, sourceQuestContent];
  const callback = questId.useCallback((segment_end_sec) => {
    if (null != closure_7.current) {
      let obj = duration(playerState[5]);
      obj = { questId: null, event: null, properties: null, sourceQuestContent: null };
      obj[0] = questId;
      obj[1] = videoSessionId.QUEST_VIDEO_SEGMENT_WATCHED;
      obj = {};
      const merged = Object.assign(segment_end_sec);
      obj.video_asset_id = videoAssetId;
      obj.quest_completed = isQuestCompleted;
      obj.video_duration_sec = duration;
      obj.video_progress = duration(playerState[6]).formatVideoProgressRatio(segment_end_sec.segment_end_sec, tmp.current);
      obj.video_session_id = videoSessionId;
      let id;
      if (questImpression != null) {
        id = obj5.getId();
      }
      obj.impression_id = id;
      obj[2] = obj;
      obj[3] = sourceQuestContent;
      obj.trackQuestEvent(obj);
      const obj4 = duration(playerState[6]);
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
    if (duration(playerState[8]).PlayerState.PLAYING === playerState) {
      handlePlayerStateChange(tmp2(tmp3[9]).VideoPlayerState.PLAYING, null);
    } else if (tmp2(tmp3[8]).PlayerState.PAUSED === tmp) {
      handlePlayerStateChange(tmp2(tmp3[9]).VideoPlayerState.PAUSED, null);
    } else if (tmp2(tmp3[8]).PlayerState.ENDED === tmp) {
      handlePlayerStateChange(tmp2(tmp3[9]).VideoPlayerState.ENDED, null);
    } else if (tmp2(tmp3[8]).PlayerState.ERRORED === tmp) {
      handlePlayerStateChange(tmp2(tmp3[9]).VideoPlayerState.PAUSED, null);
    }
  }, items2);
  closure_14 = questId.useRef(null);
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
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_LOADING_ENDED, properties: null, sourceQuestContent: null };
    obj = { video_asset_id: videoAssetId, network_connection_speed: videoAssetId.getEffectiveConnectionSpeed(), duration: diff, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj[4] = id;
    obj[2] = obj;
    obj[3] = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items3);
  const items5 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback3 = questId.useCallback(() => {
    handlePlayerStateChange(duration(playerState[9]).VideoPlayerState.ENDED, null);
  }, items4);
  const callback4 = questId.useCallback(() => {
    closure_14.current = Date.now();
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_LOADING_STARTED, properties: null, sourceQuestContent: null };
    obj = { video_asset_id: videoAssetId, network_connection_speed: videoAssetId.getEffectiveConnectionSpeed(), video_session_id: videoSessionId, is_hls_supported: true, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj[4] = id;
    obj[2] = obj;
    obj[3] = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items5);
  closure_15 = questId.useRef(null);
  closure_16 = questId.useRef(-1);
  const items6 = [questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items7 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback5 = questId.useCallback((arg0) => {
    const effectiveConnectionSpeed = videoAssetId.getEffectiveConnectionSpeed();
    if (arg0) {
      const _Date2 = Date;
      tmp2.current = Date.now();
      ref3.current = ref3.current + 1;
      let obj = { questId: null, event: null, properties: null, sourceQuestContent: null };
      obj[0] = questId;
      obj[1] = videoSessionId.QUEST_VIDEO_BUFFERING_STARTED;
      obj = { video_asset_id: null, network_connection_speed: null, buffer_index: null, video_session_id: null, impression_id: null };
      obj[0] = videoAssetId;
      obj[1] = effectiveConnectionSpeed;
      obj[2] = ref3.current;
      obj[3] = videoSessionId;
      let id;
      if (questImpression != null) {
        id = obj8.getId();
      }
      obj[4] = id;
      obj[2] = obj;
      obj[3] = sourceQuestContent;
      duration(playerState[5]).trackQuestEvent(obj);
      const obj5 = duration(playerState[5]);
      obj8 = questImpression;
    } else {
      let diff = null;
      if (null != tmp2.current) {
        const _Date = Date;
        diff = Date.now() - tmp2.current;
      }
      obj = duration(playerState[5]);
      obj1 = { questId: null, event: null, properties: null, sourceQuestContent: null };
      obj1[0] = questId;
      obj1[1] = videoSessionId.QUEST_VIDEO_BUFFERING_ENDED;
      const obj2 = { video_asset_id: null, network_connection_speed: null, duration: null, buffer_index: null, video_session_id: null, impression_id: null };
      obj2[0] = videoAssetId;
      obj2[1] = effectiveConnectionSpeed;
      obj2[2] = diff;
      obj2[3] = ref3.current;
      obj2[4] = videoSessionId;
      let id1;
      if (questImpression != null) {
        id1 = obj4.getId();
      }
      obj2[5] = id1;
      obj1[2] = obj2;
      obj1[3] = sourceQuestContent;
      obj.trackQuestEvent(obj1);
      obj4 = questImpression;
    }
  }, items6);
  const items8 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback6 = questId.useCallback(() => {
    if (null != ref.current) {
      let obj = duration(playerState[5]);
      obj = { questId: null, event: null, properties: null, sourceQuestContent: null };
      obj[0] = questId;
      obj[1] = videoSessionId.QUEST_VIDEO_TIME_TO_FIRST_FRAME;
      obj = { duration_ms: null, video_session_id: null, video_asset_id: null, impression_id: null };
      const _Date = Date;
      obj[0] = Date.now() - tmp.current;
      obj[1] = videoSessionId;
      obj[2] = videoAssetId;
      let id;
      if (questImpression != null) {
        id = obj4.getId();
      }
      obj[3] = id;
      obj[2] = obj;
      obj[3] = sourceQuestContent;
      obj.trackQuestEvent(obj);
      obj4 = questImpression;
    }
  }, items7);
  const items9 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback7 = questId.useCallback(() => {
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_RESUMED, properties: null, sourceQuestContent: null };
    obj = { video_timestamp_seconds: closure_7.current, pause_reason: duration(playerState[10]).VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj[3] = id;
    obj[2] = obj;
    obj[3] = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items8);
  obj = { handleBufferAnalytics: callback5, handleEndAnalytics: callback3, handleErrorAnalytics: null, handleLoadAnalytics: null, handleLoadStartAnalytics: null, handlePausePlaybackAnalytics: null, handleProgressAnalytics: null, handleReadyForDisplayAnalytics: null, handleResumePlaybackAnalytics: null, handleSeekAnalytics: null };
  const items10 = [duration, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const callback8 = questId.useCallback(() => {
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_PAUSED, properties: null, sourceQuestContent: null };
    obj = { video_timestamp_seconds: closure_7.current, reason: duration(playerState[10]).VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj[3] = id;
    obj[2] = obj;
    obj[3] = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items9);
  obj[2] = questId.useCallback((error) => {
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_ERROR, properties: null, sourceQuestContent: null };
    let num = closure_7.current;
    if (num == null) {
      num = 0;
    }
    obj = { video_progress: duration(playerState[6]).formatVideoProgressRatio(duration, num), video_error_type: null, video_asset_id: videoAssetId, network_connection_speed: null, video_session_id: videoSessionId, video_error_code: null, video_error_message: null, video_network_state: null, impression_id: null };
    let code;
    if (error != null) {
      code = error.error.code;
    }
    obj[5] = code;
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
    obj[6] = localizedDescription;
    let id;
    if (questImpression != null) {
      id = obj5.getId();
    }
    obj[8] = id;
    obj[2] = obj;
    obj[3] = sourceQuestContent;
    obj.trackQuestEvent(obj);
    const obj3 = duration(playerState[6]);
    obj5 = questImpression;
    const tmp3 = questId;
    const tmp4 = duration;
    if (tmpResult.isSourceError(error)) {
      obj1 = { name: null, tags: null };
      obj1[0] = tmp(tmp2[13]).MetricEvents.QUEST_VIDEO_ERROR;
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + tmp3, "error_type:SOURCE_ERROR"];
      obj1[1] = items;
      isQuestCompleted(tmp2[12]).increment(obj1);
      const obj7 = isQuestCompleted(tmp2[12]);
    }
  }, items10);
  obj[3] = callback2;
  obj[4] = callback4;
  obj[5] = callback8;
  const items11 = [questId, videoSessionId, questImpression, sourceQuestContent];
  obj[6] = questId.useCallback((progress, video_timestamp_seconds, current) => {
    closure_7.current = current;
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_PROGRESSED, properties: null, sourceQuestContent: null };
    obj = { progress, video_timestamp_seconds, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj[3] = id;
    obj[2] = obj;
    obj[3] = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items11);
  obj[7] = callback6;
  obj[8] = callback7;
  const items12 = [handleSeek, questId, videoSessionId, questImpression, sourceQuestContent];
  obj[9] = questId.useCallback((arg0, arg1) => {
    handleSeek();
    if (null != arg0) {
      let obj = duration(playerState[5]);
      obj = { questId: null, event: null, properties: null, sourceQuestContent: null };
      obj[0] = questId;
      obj[1] = videoSessionId.QUEST_VIDEO_SEEKED;
      obj = { from_time_sec: null, to_time_sec: null, video_session_id: null, impression_id: null };
      obj[0] = arg0;
      obj[1] = arg1;
      obj[2] = videoSessionId;
      let id;
      if (questImpression != null) {
        id = obj4.getId();
      }
      obj[3] = id;
      obj[2] = obj;
      obj[3] = sourceQuestContent;
      obj.trackQuestEvent(obj);
      obj4 = questImpression;
    }
  }, items12);
  return obj;
};