// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../../Constants.tsx";
import MonitoringAgentDefault from "../../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import QuestTypes from "../../../QuestTypes.tsx";
import QuestContent from "../../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import DiscordVideoPlayerTypes from "../../../../../../discord_common/js/packages/video-player/DiscordVideoPlayerTypes.tsx";
import AnalyticsActions from "../../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../../lib/analytics/AnalyticsTypes.tsx";
import AdDataUtils from "../../../../ads/utils/AdDataUtils.android.tsx";
import VideoQuestUtils from "../../../utils/VideoQuestUtils.tsx";
import AdsVideoTypes from "../../AdsVideoTypes.tsx";
import AdsVideoUtils from "../../AdsVideoUtils.tsx";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../../_runtime/00019_react.js";
import NetworkStore from "../../../../../stores/NetworkStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c7, c8, closure_5;

const AppState = react_native.AppState;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting(
  "modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx",
);

export default function useVideoQuestPlayerAnalytics(duration) {
  let callback10;
  let items11;
  let items12;
  let items13;
  duration = duration.duration;
  const isQuestCompleted = duration.isQuestCompleted;
  const playerState = duration.playerState;
  const questId = duration.questId;
  let sourceQuestContent = duration.sourceQuestContent;
  const videoAssetId = duration.videoAssetId;
  const videoSessionId = duration.videoSessionId;
  let closure_7 = sourceQuestContent.useRef(null);
  sourceQuestContent.useRef(null);
  let obj = duration(playerState[5]);
  const questImpression = obj.useQuestImpression();
  let obj2 = duration(playerState[5]);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  const ref2 = sourceQuestContent.useRef(null);
  const effect = sourceQuestContent.useEffect(() => {
    if (null == ref2.current) {
      const getAdUser = AdDataUtils.getAdUser;
      AdDataUtils;
      const obj = AnalyticsTypes;
      tmp.current = getAdUser(obj.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE));
    }
  }, []);
  const ref3 = sourceQuestContent.useRef(null);
  let items = [getQuestImpressionId, questId, sourceQuestContent];
  const layoutEffect = sourceQuestContent.useLayoutEffect(() => {
    const tmp = duration(playerState[9]);
    let obj = {
      getImpressionId: getQuestImpressionId,
      onEmit: function () {
        return closure_0(...arguments);
      },
    };
    const createEngagedViewEmitter = tmp.createEngagedViewEmitter;
    let closure_0 = questId(function* (arg0) {
      let advertisingId;
      let advertisingId1;
      let metadata_sealed;
      let obj12;
      closure_0 = arg0;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
        try {
          let VIDEO_MODAL_MOBILE;
          let _null;
          let trackQuestEvent;
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
              sourceQuestContent = tmp;
              VIDEO_MODAL_MOBILE = closure_0(playerState[8]).QuestContent.VIDEO_MODAL_MOBILE;
              c6 = 1;
              _null = getQuestImpressionId();
              trackQuestEvent = ref.current;
              if (null == trackQuestEvent) {
                const getAdUser = closure_0(playerState[6]).getAdUser;
                const tmp46 = closure_0(playerState[6]);
                const obj8 = closure_0(playerState[7]);
                trackQuestEvent = getAdUser(obj8.getQuestContentName(VIDEO_MODAL_MOBILE));
                ref.current = trackQuestEvent;
              }
              trackQuestEvent = ref.current;
              c7 = 2;
              c8 = 1;
              const obj9 = { value: trackQuestEvent, done: false };
              return obj9;
            }
          } else if (1 === tmp4) {
            c6 = 0;
            sourceQuestContent = closure_5;
            const obj6 = closure_0(playerState[14]);
            const questLogger = obj6.getQuestLogger();
            trackQuestEvent = questLogger.warn(
              "[EngagedView] failed to emit quest_content_engaged_viewed",
              sourceQuestContent,
            );
            throw sourceQuestContent;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            trackQuestEvent = closure_0(playerState[10]).trackQuestEvent;
            const obj11 = {
              questId: trackQuestEvent,
              event: constants.QUEST_CONTENT_ENGAGED_VIEWED,
              properties: obj12,
              sourceQuestContent,
            };
            obj12 = {
              impression_id: _null,
              video_watch_seconds: closure_0.video_watch_seconds,
              video_position_seconds: closure_0.video_position_seconds,
              video_duration_seconds: closure_0.video_duration_seconds,
              apple_advertising_id: advertisingId,
              android_advertising_id: advertisingId1,
              metadata_sealed,
              traffic_metadata_sealed: _null,
            };
            const tmp60 = closure_0(playerState[10]);
            const obj14 = closure_0(playerState[7]);
            const merged = Object.assign(obj14.getContentProperties(VIDEO_MODAL_MOBILE));
            const merged1 = Object.assign(engagedViewEmitter(playerState[11])());
            advertisingId = null;
            if (null != trackQuestEvent) {
              advertisingId = null;
              const obj = closure_0(playerState[12]);
              if (obj.isIOS()) {
                advertisingId = trackQuestEvent.advertisingId;
              }
            }
            advertisingId1 = null;
            if (null != trackQuestEvent) {
              advertisingId1 = null;
              const obj2 = closure_0(playerState[12]);
              if (obj2.isAndroid()) {
                advertisingId1 = trackQuestEvent.advertisingId;
              }
            }
            const obj3 = closure_0(playerState[13]);
            const adMetadataSealed = obj3.getAdMetadataSealed(sourceQuestContent, trackQuestEvent);
            metadata_sealed = adMetadataSealed;
            if (adMetadataSealed == null) {
              metadata_sealed = null;
            }
            const obj4 = closure_0(playerState[13]);
            const adTrafficMetadataSealed = obj4.getAdTrafficMetadataSealed(sourceQuestContent, trackQuestEvent);
            _null = adTrafficMetadataSealed;
            if (adTrafficMetadataSealed == null) {
              _null = null;
            }
            trackQuestEvent(obj11);
            c6 = 0;
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp49) {
          closure_5 = tmp49;
          if (0 === c6) {
            c8 = 3;
            throw tmp49;
          } else {
            c7 = 1;
          }
        }
      }
    });
    const engagedViewEmitter = createEngagedViewEmitter(obj);
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
    ref.current = Date.now();
  }, []);
  const items1 = [questId, videoSessionId, playerState, questImpression, sourceQuestContent];
  const effect2 = sourceQuestContent.useEffect(() => {
    let video_session_id;
    let video_state;
    let closure_0 = videoAssetId.addEventListener("change", (event) => {
      let QUEST_VIDEO_APP_UNFOCUSED;
      let id;
      let obj;
      if (null != ref.current) {
        const obj3 = { questId, event: QUEST_VIDEO_APP_UNFOCUSED, properties: obj, sourceQuestContent };
        const trackQuestEvent = duration(playerState[10]).trackQuestEvent;
        duration(playerState[10]);
        if ("active" === event) {
          QUEST_VIDEO_APP_UNFOCUSED = ref.QUEST_VIDEO_APP_FOCUSED;
        } else {
          QUEST_VIDEO_APP_UNFOCUSED = ref.QUEST_VIDEO_APP_UNFOCUSED;
        }
        obj = { video_timestamp_seconds: tmp.current, video_state, video_session_id, impression_id: id };
        id = undefined;
        if (questImpression != null) {
          id = questImpression.getId();
        }
        trackQuestEvent(obj3);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items1);
  const items2 = [
    questId,
    videoAssetId,
    isQuestCompleted,
    videoSessionId,
    duration,
    questImpression,
    sourceQuestContent,
  ];
  const callback2 = sourceQuestContent.useCallback((segment_end_sec) => {
    let id;
    let obj2;
    let obj3;
    if (null != closure_7.current) {
      const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_SEGMENT_WATCHED, properties: obj2, sourceQuestContent };
      obj2 = {
        video_asset_id: videoAssetId,
        quest_completed: isQuestCompleted,
        video_duration_sec: duration,
        video_progress: obj3.formatVideoProgressRatio(segment_end_sec.segment_end_sec, tmp.current),
        video_session_id: videoSessionId,
        impression_id: id,
      };
      const trackQuestEvent = AnalyticsActions.trackQuestEvent;
      AnalyticsActions;
      const merged = Object.assign(segment_end_sec);
      id = undefined;
      obj3 = VideoQuestUtils;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      trackQuestEvent(obj);
    }
  }, items2);
  const callback3 = sourceQuestContent.useCallback(() => closure_7.current, []);
  let obj3 = {
    getCurrentVideoTime: callback3,
    onAnalytics: callback2,
    emitIntervalMs: duration(playerState[16]).SEGMENT_ANALYTICS_EMIT_INTERVAL_MS,
    minSegmentDurationMs: duration(playerState[16]).SEGMENT_ANALYTICS_MIN_DURATION_MS,
  };
  const tmp11 = isQuestCompleted(playerState[16]);
  const tmp11Result = tmp11(obj3);
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
  const ref4 = sourceQuestContent.useRef(null);
  const items4 = [
    handleLoadEnd,
    handleFirstFrame,
    questId,
    videoAssetId,
    videoSessionId,
    questImpression,
    sourceQuestContent,
  ];
  const items5 = [handlePlayerStateChange, callback1];
  const callback4 = sourceQuestContent.useCallback(() => {
    let id;
    let obj2;
    let diff = null;
    if (null != ref4.current) {
      const _Date = Date;
      diff = Date.now() - tmp.current;
    }
    handleLoadEnd(diff);
    handleFirstFrame(0);
    const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_ENDED, properties: obj2, sourceQuestContent };
    const tmp6 = AnalyticsActions;
    const trackQuestEvent = tmp6.trackQuestEvent;
    obj2 = {
      video_asset_id: videoAssetId,
      network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
      duration: diff,
      video_session_id: videoSessionId,
      impression_id: id,
    };
    id = undefined;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    trackQuestEvent(obj);
  }, items4);
  const items6 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback5 = sourceQuestContent.useCallback(() => {
    handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.ENDED, null);
    callback1();
  }, items5);
  const callback6 = sourceQuestContent.useCallback(() => {
    let id;
    let obj2;
    ref4.current = Date.now();
    const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_STARTED, properties: obj2, sourceQuestContent };
    const tmp = AnalyticsActions;
    const trackQuestEvent = tmp.trackQuestEvent;
    obj2 = {
      video_asset_id: videoAssetId,
      network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
      video_session_id: videoSessionId,
      is_hls_supported: true,
      impression_id: id,
    };
    id = undefined;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    trackQuestEvent(obj);
  }, items6);
  const ref = sourceQuestContent.useRef(null);
  const ref5 = sourceQuestContent.useRef(-1);
  const items7 = [questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items8 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback7 = sourceQuestContent.useCallback((arg0) => {
    let id;
    let id1;
    let obj4;
    let obj5;
    const effectiveConnectionSpeed = NetworkStore.getEffectiveConnectionSpeed();
    const tmp3 = arg0;
    if (tmp3) {
      const _Date2 = Date;
      ref.current = Date.now();
      ref5.current = ref5.current + 1;
      const obj2 = {
        questId,
        event: AnalyticEvents.QUEST_VIDEO_BUFFERING_STARTED,
        properties: obj4,
        sourceQuestContent,
      };
      obj4 = {
        video_asset_id: videoAssetId,
        network_connection_speed: effectiveConnectionSpeed,
        buffer_index: ref5.current,
        video_session_id: videoSessionId,
        impression_id: id,
      };
      id = undefined;
      const trackQuestEvent2 = AnalyticsActions.trackQuestEvent;
      AnalyticsActions;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      trackQuestEvent2(obj2);
    } else {
      let diff = null;
      if (null != ref.current) {
        const _Date = Date;
        diff = Date.now() - ref.current;
      }
      const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_BUFFERING_ENDED, properties: obj5, sourceQuestContent };
      obj5 = {
        video_asset_id: videoAssetId,
        network_connection_speed: effectiveConnectionSpeed,
        duration: diff,
        buffer_index: ref5.current,
        video_session_id: videoSessionId,
        impression_id: id1,
      };
      id1 = undefined;
      const trackQuestEvent = AnalyticsActions.trackQuestEvent;
      AnalyticsActions;
      if (questImpression != null) {
        id1 = questImpression.getId();
      }
      trackQuestEvent(obj);
    }
  }, items7);
  const items9 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback8 = sourceQuestContent.useCallback(() => {
    let id;
    let obj2;
    if (null != ref.current) {
      const obj = {
        questId,
        event: AnalyticEvents.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
        properties: obj2,
        sourceQuestContent,
      };
      const _Date = Date;
      obj2 = {
        duration_ms: Date.now() - tmp.current,
        video_session_id: videoSessionId,
        video_asset_id: videoAssetId,
        impression_id: id,
      };
      const trackQuestEvent = AnalyticsActions.trackQuestEvent;
      AnalyticsActions;
      id = undefined;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      trackQuestEvent(obj);
    }
  }, items8);
  const items10 = [questId, videoSessionId, questImpression, sourceQuestContent, callback1];
  const callback9 = sourceQuestContent.useCallback(() => {
    let id;
    let obj2;
    const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_RESUMED, properties: obj2, sourceQuestContent };
    const tmp = AnalyticsActions;
    const trackQuestEvent = tmp.trackQuestEvent;
    obj2 = {
      video_timestamp_seconds: closure_7.current,
      pause_reason: QuestTypes.VideoPauseReason.PAUSE_BUTTON,
      video_session_id: videoSessionId,
      impression_id: id,
    };
    id = undefined;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    trackQuestEvent(obj);
  }, items9);
  let obj4 = {
    handleBufferAnalytics: callback7,
    handleEndAnalytics: callback5,
    handleEngagedViewProgress: callback,
    handleErrorAnalytics: sourceQuestContent.useCallback((error) => {
      let code;
      let id;
      let items;
      let localizedDescription;
      let obj2;
      const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_ERROR, properties: obj2, sourceQuestContent };
      const trackQuestEvent = AnalyticsActions.trackQuestEvent;
      AnalyticsActions;
      let num = closure_7.current;
      const formatVideoProgressRatio = VideoQuestUtils.formatVideoProgressRatio;
      VideoQuestUtils;
      if (num == null) {
        num = 0;
      }
      obj2 = {
        video_progress: formatVideoProgressRatio(duration, num),
        video_error_type: null,
        video_asset_id: videoAssetId,
        network_connection_speed: null,
        video_session_id: videoSessionId,
        video_error_code: code,
        video_error_message: localizedDescription,
        video_network_state: null,
        impression_id: id,
      };
      code = undefined;
      if (error != null) {
        code = error.error.code;
      }
      localizedDescription = undefined;
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
      id = undefined;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      trackQuestEvent(obj);
      const tmpResult = AdsVideoUtils;
      if (tmpResult.isSourceError(error)) {
        const obj4 = { name: MetricEvents.MetricEvents.QUEST_VIDEO_ERROR, tags: items };
        const increment = MonitoringAgentDefault.increment;
        MonitoringAgentDefault;
        const _HermesInternal = HermesInternal;
        items = ["ad_creative_id:" + questId, ,];
        const _HermesInternal2 = HermesInternal;
        items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[AdCreativeType.AdCreativeType.QUEST];
        items[2] = "error_type:SOURCE_ERROR";
        increment(obj4);
      }
    }, items11),
    handleLoadAnalytics: callback4,
    handleLoadStartAnalytics: callback6,
    handlePausePlaybackAnalytics: callback10,
    handleProgressAnalytics: sourceQuestContent.useCallback((progress, video_timestamp_seconds, current) => {
      let id;
      let obj2;
      closure_7.current = current;
      const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_PROGRESSED, properties: obj2, sourceQuestContent };
      obj2 = { progress, video_timestamp_seconds, video_session_id: videoSessionId, impression_id: id };
      id = undefined;
      const trackQuestEvent = AnalyticsActions.trackQuestEvent;
      AnalyticsActions;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      trackQuestEvent(obj);
    }, items12),
    handleReadyForDisplayAnalytics: callback8,
    handleResumePlaybackAnalytics: callback9,
    handleSeekAnalytics: sourceQuestContent.useCallback((from_time_sec, to_time_sec) => {
      let id;
      let obj2;
      handleSeek();
      if (null != from_time_sec) {
        const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_SEEKED, properties: obj2, sourceQuestContent };
        obj2 = { from_time_sec, to_time_sec, video_session_id: videoSessionId, impression_id: id };
        id = undefined;
        const trackQuestEvent = AnalyticsActions.trackQuestEvent;
        AnalyticsActions;
        if (questImpression != null) {
          id = questImpression.getId();
        }
        trackQuestEvent(obj);
      }
    }, items13),
  };
  items11 = [duration, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  callback10 = sourceQuestContent.useCallback(() => {
    let id;
    let obj2;
    callback1();
    const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_PAUSED, properties: obj2, sourceQuestContent };
    const tmp2 = AnalyticsActions;
    const trackQuestEvent = tmp2.trackQuestEvent;
    obj2 = {
      video_timestamp_seconds: closure_7.current,
      reason: QuestTypes.VideoPauseReason.PAUSE_BUTTON,
      video_session_id: videoSessionId,
      impression_id: id,
    };
    id = undefined;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    trackQuestEvent(obj);
  }, items10);
  items12 = [questId, videoSessionId, questImpression, sourceQuestContent];
  items13 = [handleSeek, questId, videoSessionId, questImpression, sourceQuestContent];
  return obj4;
}
