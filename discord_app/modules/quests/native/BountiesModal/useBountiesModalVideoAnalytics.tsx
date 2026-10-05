// discord_app/modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx
import Constants from "../../../../Constants.tsx";
import MonitoringAgentDefault from "../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import AdsVideoTypes from "../AdsVideoTypes.tsx";
import AdsVideoUtils from "../AdsVideoUtils.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import NetworkStore from "../../../../stores/NetworkStore.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c5, c6, closure_12, closure_3, set;

const AnalyticEvents = Constants.AnalyticEvents;
let closure_8 = [25, 50, 75];
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx");

export const useBountiesModalVideoAnalytics = function useBountiesModalVideoAnalytics(bountyId) {
  let items22;
  let items23;
  let items24;
  let items25;
  bountyId = bountyId.bountyId;
  let sourceQuestContent = bountyId.sourceQuestContent;
  const rewardDurationMs = bountyId.rewardDurationMs;
  let num = bountyId.initialPlaybackTimeSec;
  if (num === undefined) {
    num = 0;
  }
  let num2 = bountyId.initialMaxVideoProgressSec;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = bountyId.initialVideoDurationSec;
  if (num3 === undefined) {
    num3 = 0;
  }
  let flag = bountyId.wasPreloaded;
  if (flag === undefined) {
    flag = false;
  }
  let prop = bountyId.verticalScrollingPosition;
  if (prop === undefined) {
    prop = null;
  }
  let flag2 = bountyId.isActive;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let closure_17;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let closure_22;
  let ref5;
  let ref6;
  let ref7;
  let ref8;
  let ref9;
  let closure_28;
  let callback2;
  let memo1;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let callback7;
  let callback8;
  let callback9;
  let callback16;
  let callback17;
  let callback18;
  let obj = bountyId(rewardDurationMs[5]);
  const questImpressionId = obj.useQuestImpressionId();
  let obj2 = bountyId(rewardDurationMs[5]);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  let obj3 = flag;
  const memo = flag.useMemo(() => {
    const obj = bountyId(rewardDurationMs[6]);
    return obj.v4();
  }, []);
  const first = num3(
    flag.useState(() => {
      const getAdUser = bountyId(rewardDurationMs[7]).getAdUser;
      bountyId(rewardDurationMs[7]);
      const obj = bountyId(rewardDurationMs[8]);
      return getAdUser(obj.getQuestContentName(bountyId(rewardDurationMs[9]).QuestContent.VIDEO_MODAL_MOBILE));
    }),
    1,
  )[0];
  closure_12 = flag.useRef({ getImpressionId: getQuestImpressionId, bountyId, sourceQuestContent });
  let items = [getQuestImpressionId, bountyId, sourceQuestContent];
  const layoutEffect = flag.useLayoutEffect(() => {
    const obj = { getImpressionId: getQuestImpressionId, bountyId, sourceQuestContent };
    closure_12.current = obj;
  }, items);
  const tmp7 = num3(flag.useState(null), 2);
  const first1 = tmp7[0];
  let closure_14 = tmp7[1];
  const items1 = [first];
  const layoutEffect1 = flag.useLayoutEffect(() => {
    const tmp = bountyId(rewardDurationMs[10]);
    let obj = {
      getImpressionId() {
        const current = ref.current;
        return current.getImpressionId();
      },
      onEmit: function () {
        return closure_0(...arguments);
      },
    };
    const createEngagedViewEmitter = tmp.createEngagedViewEmitter;
    let closure_0 = num2(function* (arg0) {
      let advertisingId;
      let advertisingId1;
      let c2;
      let c3;
      let obj9;
      closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let adContentId;
          let closure_5;
          let VIDEO_MODAL_MOBILE;
          let impression_id;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_2 = tmp;
              adContentId = undefined;
              sourceQuestContent = undefined;
              closure_5 = undefined;
              VIDEO_MODAL_MOBILE = closure_0(rewardDurationMs[9]).QuestContent.VIDEO_MODAL_MOBILE;
              ({ bountyId: c2, sourceQuestContent: c3 } = ref.current);
              c4 = 1;
              const current = ref.current;
              impression_id = current.getImpressionId();
              c5 = 2;
              c6 = 1;
              const obj6 = { value, done: false };
              return obj6;
            }
          } else {
            let trackAdContentEvent;
            if (1 === tmp4) {
              c4 = 0;
              let closure_6 = closure_3;
              const obj4 = closure_0(rewardDurationMs[15]);
              const questLogger = obj4.getQuestLogger();
              trackAdContentEvent = questLogger.warn(
                "[EngagedView] failed to emit quest_content_engaged_viewed",
                closure_6,
              );
              throw closure_6;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_5 = value;
              trackAdContentEvent = closure_0(rewardDurationMs[11]).trackAdContentEvent;
              const obj8 = {
                adContentId,
                adCreativeType: closure_0(rewardDurationMs[12]).AdCreativeType.BOUNTY,
                event: constants.QUEST_CONTENT_ENGAGED_VIEWED,
                properties: obj9,
                sourceQuestContent,
              };
              const tmp41 = closure_0(rewardDurationMs[11]);
              obj9 = {
                impression_id,
                video_watch_seconds: closure_0.video_watch_seconds,
                video_position_seconds: closure_0.video_position_seconds,
                video_duration_seconds: closure_0.video_duration_seconds,
                apple_advertising_id: advertisingId,
                android_advertising_id: advertisingId1,
              };
              const obj11 = closure_0(rewardDurationMs[8]);
              const merged = Object.assign(obj11.getContentProperties(VIDEO_MODAL_MOBILE));
              const merged1 = Object.assign(sourceQuestContent(rewardDurationMs[13])());
              advertisingId = null;
              if (null != closure_5) {
                advertisingId = null;
                const obj = closure_0(rewardDurationMs[14]);
                if (obj.isIOS()) {
                  advertisingId = closure_5.advertisingId;
                }
              }
              advertisingId1 = null;
              if (null != closure_5) {
                advertisingId1 = null;
                const obj2 = closure_0(rewardDurationMs[14]);
                if (obj2.isAndroid()) {
                  advertisingId1 = closure_5.advertisingId;
                }
              }
              trackAdContentEvent(obj8);
              c4 = 0;
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } catch (tmp30) {
          closure_3 = tmp30;
          if (0 === c4) {
            c6 = 3;
            throw tmp30;
          } else {
            c5 = 1;
          }
        }
      }
    });
    closure_14(createEngagedViewEmitter(obj));
  }, items1);
  const items2 = [first1];
  const callback = flag.useCallback((arg0) => {
    if (first1 != null) {
      first1.onProgress(arg0);
    }
  }, items2);
  const items3 = [first1];
  const callback1 = flag.useCallback(() => {
    if (first1 != null) {
      first1.pause();
    }
  }, items3);
  const useRef = flag.useRef;
  set = new Set();
  const tmp12 = num > 0 || num2 > 0;
  if (tmp12) {
    let addResult = set.add("start");
  }
  if (1000 * num2 >= rewardDurationMs) {
    set.add("threshold");
  }
  closure_17 = useRef(set);
  ref = obj3.useRef(false);
  ref2 = obj3.useRef(num);
  ref3 = obj3.useRef(num3);
  ref4 = obj3.useRef(null);
  closure_22 = obj3.useRef(null);
  ref5 = obj3.useRef(false);
  ref6 = obj3.useRef(false);
  ref7 = obj3.useRef(null);
  ref8 = obj3.useRef(null);
  ref9 = obj3.useRef(-1);
  closure_28 = obj3.useRef({ bitrateBps: null, width: null, height: null, levelIndex: null });
  callback2 = obj3.useCallback(() => {
    if (null != ref7.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref7.current);
      ref7.current = null;
    }
  }, []);
  const items4 = [flag, prop, rewardDurationMs];
  memo1 = obj3.useMemo(
    () => ({
      was_preloaded: flag,
      startup_path: "active_only",
      vertical_scrolling_position: prop,
      reward_timer_seconds: rewardDurationMs / 1000,
    }),
    items4,
  );
  callback3 = obj3.useCallback(() => {
    const current = closure_28.current;
    return {
      hls_level_index: current.levelIndex,
      hls_segment_res_width: current.width,
      hls_segment_res_height: current.height,
    };
  }, []);
  const items5 = [num2, num3];
  callback4 = obj3.useCallback((current) => {
    if (!ref.current) {
      let tmp2 = current;
      tmp.current = true;
      if (current <= 0) {
        tmp2 = num3;
      }
      if (tmp2 > 0) {
        const obj = VideoQuestUtils;
        const result = obj.formatVideoProgressRatio(num2, tmp2);
        const iter = questImpressionId[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (result >= nextResult / 100) {
            current = closure_17.current;
            let _HermesInternal = HermesInternal;
            let addResult = current.add("p" + tmp6);
          }
          continue;
        }
      }
    }
  }, items5);
  const items6 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  callback5 = obj3.useCallback((arg0) => {
    let obj3;
    let progress;
    let thresholdMet;
    let videoTimestampSeconds;
    ({ videoTimestampSeconds, progress, thresholdMet } = arg0);
    const obj = AnalyticsActions;
    const obj2 = {
      adContentId: bountyId,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      event: AnalyticEvents.AD_VIDEO_PROGRESSED,
      properties: obj3,
      sourceQuestContent,
    };
    obj3 = {
      progress,
      video_timestamp_seconds: videoTimestampSeconds,
      video_session_id: memo,
      impression_id: questImpressionId,
      threshold_met: thresholdMet,
      reward_timer_seconds: rewardDurationMs / 1000,
    };
    obj.trackAdContentEvent(obj2);
  }, items6);
  const items7 = [callback5];
  callback6 = obj3.useCallback(() => {
    const current = closure_17.current;
    if (!current.has("start")) {
      const current2 = closure_17.current;
      current2.add("start");
      callback5({ videoTimestampSeconds: 0, progress: 0, thresholdMet: false });
    }
  }, items7);
  const items8 = [callback5, rewardDurationMs];
  callback7 = obj3.useCallback((arg0, current) => {
    let obj;
    current = closure_17.current;
    if (!current.has("threshold")) {
      const current2 = closure_17.current;
      current2.add("threshold");
      const _Math = Math;
      const bound = Math.max(rewardDurationMs / 1000, arg0);
      const obj2 = {
        videoTimestampSeconds: bound,
        progress: obj.formatVideoProgressRatio(bound, current),
        thresholdMet: true,
      };
      obj = VideoQuestUtils;
      callback5(obj2);
    }
  }, items8);
  const items9 = [callback5];
  callback8 = obj3.useCallback((arg0, arg1) => {
    const current = closure_17.current;
    if (!current.has("end")) {
      const current2 = closure_17.current;
      current2.add("end");
      const _Math = Math;
      const obj = { videoTimestampSeconds: Math.max(arg0, arg1), progress: 1, thresholdMet: true };
      callback5(obj);
    }
  }, items9);
  const items10 = [callback5, rewardDurationMs];
  callback9 = obj3.useCallback((videoTimestampSeconds, current) => {
    if (current > 0) {
      const obj2 = VideoQuestUtils;
      const result = obj2.formatVideoProgressRatio(videoTimestampSeconds, current);
      const iter = questImpressionId[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _HermesInternal = HermesInternal;
        let tmp4 = nextResult;
        let combined = "p" + nextResult;
        current = closure_17.current;
        let tmp6 = combined;
        if (!current.has(combined)) {
          if (result >= tmp4 / 100) {
            let current2 = closure_17.current;
            let addResult = current2.add(tmp6);
            let obj = {
              videoTimestampSeconds,
              progress: result,
              thresholdMet: 1000 * videoTimestampSeconds >= rewardDurationMs,
            };
            let tmp13 = callback5(obj);
          }
        }
        continue;
      }
    }
  }, items10);
  const items11 = [callback4, callback6, callback7, callback9, rewardDurationMs, callback, flag2];
  const items12 = [callback4, callback6, callback7, callback9, callback8];
  const callback10 = obj3.useCallback((arg0, current, current2) => {
    ref2.current = current2;
    ref3.current = current;
    callback4(current);
    if (0 === arg0) {
      callback6();
    }
    if (1000 * arg0 >= rewardDurationMs) {
      callback7(arg0, current);
    }
    callback9(arg0, current);
    const obj = { positionSeconds: current2, durationSeconds: current, isPlaying: flag2 };
    callback(obj);
  }, items11);
  const items13 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback11 = obj3.useCallback((arg0, current, current2) => {
    ref2.current = current2;
    ref3.current = current;
    callback4(current);
    if (0 === arg0) {
      callback6();
    }
    callback7(arg0, current);
    callback9(arg0, current);
    callback8(arg0, current);
  }, items12);
  const items14 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs, callback1];
  const callback12 = obj3.useCallback((loop_count) => {
    let obj3;
    ref2.current = 0;
    const obj = AnalyticsActions;
    const obj2 = {
      adContentId: bountyId,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      event: AnalyticEvents.AD_VIDEO_LOOPED,
      properties: obj3,
      sourceQuestContent,
    };
    obj3 = {
      video_session_id: memo,
      impression_id: questImpressionId,
      loop_count,
      reward_timer_seconds: rewardDurationMs / 1000,
    };
    obj.trackAdContentEvent(obj2);
  }, items13);
  const items15 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback13 = obj3.useCallback((video_timestamp_seconds, arg1) => {
    let obj2;
    callback1();
    if (arg1 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
      const obj = {
        adContentId: bountyId,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        event: AnalyticEvents.AD_VIDEO_PAUSED,
        properties: obj2,
        sourceQuestContent,
      };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj2 = {
        video_timestamp_seconds,
        video_session_id: memo,
        impression_id: questImpressionId,
        reward_timer_seconds: rewardDurationMs / 1000,
      };
      trackAdContentEvent(obj);
    }
  }, items14);
  const items16 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback14 = obj3.useCallback((video_timestamp_seconds, arg1) => {
    let obj2;
    if (arg1 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
      const obj = {
        adContentId: bountyId,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        event: AnalyticEvents.AD_VIDEO_RESUMED,
        properties: obj2,
        sourceQuestContent,
      };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj2 = {
        video_timestamp_seconds,
        video_session_id: memo,
        impression_id: questImpressionId,
        reward_timer_seconds: rewardDurationMs / 1000,
      };
      trackAdContentEvent(obj);
    }
  }, items15);
  const items17 = [bountyId, memo, questImpressionId, callback3, memo1, sourceQuestContent];
  const callback15 = obj3.useCallback((error) => {
    let code;
    let items;
    let localizedDescription;
    let obj2;
    let obj3;
    const tmp3 = AnalyticsActions;
    const trackAdContentEvent = tmp3.trackAdContentEvent;
    const obj = {
      adContentId: bountyId,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      event: AnalyticEvents.AD_VIDEO_ERROR,
      properties: obj2,
      sourceQuestContent,
    };
    obj2 = {
      video_progress: obj3.formatVideoProgressRatio(ref2.current, ref3.current),
      video_error_type: null,
      network_connection_speed: null,
      video_session_id: memo,
      video_error_code: code,
      video_error_message: localizedDescription,
      video_network_state: null,
      impression_id: questImpressionId,
      reward_timer_seconds: rewardDurationMs / 1000,
    };
    code = undefined;
    obj3 = VideoQuestUtils;
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
    trackAdContentEvent(obj);
    const tmpResult = AdsVideoUtils;
    if (tmpResult.isSourceError(error)) {
      const obj4 = { name: MetricEvents.MetricEvents.QUEST_VIDEO_ERROR, tags: items };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items = ["ad_creative_id:" + bountyId, ,];
      const _HermesInternal2 = HermesInternal;
      items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[AdCreativeType.AdCreativeType.BOUNTY];
      items[2] = "error_type:SOURCE_ERROR";
      increment(obj4);
    }
  }, items16);
  callback16 = obj3.useCallback(() => {
    let obj2;
    if (null != ref8.current) {
      const _Date = Date;
      ref8.current = null;
      const diff = Date.now() - ref8.current;
      const obj = {
        adContentId: bountyId,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        event: AnalyticEvents.AD_VIDEO_BUFFERING_ENDED,
        properties: obj2,
        sourceQuestContent,
      };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj2 = {
        video_session_id: memo,
        impression_id: questImpressionId,
        duration: diff,
        network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
        buffer_index: ref9.current,
        video_bitrate_bps: closure_28.current.bitrateBps,
      };
      const merged = Object.assign(callback3());
      const merged1 = Object.assign(memo1);
      trackAdContentEvent(obj);
    }
  }, items17);
  const items18 = [bountyId, memo, questImpressionId, callback2, callback3, memo1, sourceQuestContent];
  callback17 = obj3.useCallback(() => {
    let obj2;
    const current = ref5.current || null == ref4.current || null == closure_22.current;
    if (!current) {
      ref5.current = true;
      callback2();
      const obj = {
        adContentId: bountyId,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        event: AnalyticEvents.AD_VIDEO_TIME_TO_FIRST_FRAME,
        properties: obj2,
        sourceQuestContent,
      };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj2 = {
        video_session_id: memo,
        impression_id: questImpressionId,
        duration_ms: closure_22.current - ref4.current,
        network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
        startup_bitrate_bps: closure_28.current.bitrateBps,
      };
      const merged = Object.assign(callback3());
      const merged1 = Object.assign(memo1);
      trackAdContentEvent(obj);
    }
  }, items18);
  const items19 = [callback17];
  callback18 = obj3.useCallback(() => {
    const current = ref5.current || null == ref4.current || null == closure_22.current;
    if (!current) {
      if (null == closure_28.current.bitrateBps) {
        if (null == ref7.current) {
          const _setTimeout = setTimeout;
          tmp9.current = setTimeout(() => {
            ref7.current = null;
            callback17();
          }, 500);
        }
      } else {
        callback17();
      }
    }
  }, items19);
  const items20 = [callback2, callback16, callback17];
  const effect = obj3.useEffect(
    () => () => {
      if (null != ref.current) {
        callback17();
      }
      callback2();
      callback16();
    },
    items20,
  );
  const items21 = [flag2, callback18, callback2, callback16, callback17, callback1];
  const effect1 = obj3.useEffect(() => {
    if (flag2) {
      callback18();
    } else {
      if (null != ref7.current) {
        callback17();
      }
      callback2();
      callback16();
      callback1();
    }
  }, items21);
  let obj4 = {
    handleVideoProgressAnalytics: callback10,
    handleVideoEndAnalytics: callback11,
    handleVideoLoopedAnalytics: callback12,
    handleVideoPausedAnalytics: callback13,
    handleVideoResumedAnalytics: callback14,
    handleVideoErrorAnalytics: callback15,
    handleLoadStartAnalytics: obj3.useCallback(() => {
      callback16();
      callback2();
      ref4.current = Date.now();
      closure_22.current = null;
      ref5.current = false;
      ref6.current = false;
      closure_28.current = { bitrateBps: null, width: null, height: null, levelIndex: null };
    }, items22),
    handleVideoTracksAnalytics: obj3.useCallback((arg0) => {
      let height;
      let selectedVideoTrackId;
      let size1;
      let tmp5;
      let videoTracks;
      let width;
      ({ videoTracks, selectedVideoTrackId } = arg0);
      if (0 === videoTracks.length) {
        size1 = { bitrateBps: null, width: null, height: null, levelIndex: null };
      } else {
        let num = -1;
        if (null != selectedVideoTrackId) {
          num = -1;
          if (selectedVideoTrackId.length > 0) {
            num = videoTracks.findIndex((trackId) => trackId.trackId === selectedVideoTrackId);
          }
        }
        size = num >= 0 ? videoTracks[num] : videoTracks[0];
        let bitrate = null;
        if (size.bitrate > 0) {
          bitrate = size.bitrate;
        }
        size1 = { bitrateBps: bitrate, width, height, levelIndex: tmp5 };
        width = null;
        if (size.width > 0) {
          width = size.width;
        }
        height = null;
        if (size.height > 0) {
          height = size.height;
        }
        tmp5 = null;
        if (num >= 0) {
          tmp5 = num;
        }
      }
      closure_28.current = size1;
      const tmp6 = flag2 && null != closure_22.current && null != closure_28.current.bitrateBps;
      if (tmp6) {
        callback17();
      }
    }, items23),
    handleReadyForDisplayAnalytics: obj3.useCallback(() => {
      ref6.current = true;
      if (null == closure_22.current) {
        const _Date = Date;
        tmp.current = Date.now();
      }
      if (flag2) {
        callback18();
      }
    }, items24),
    handleBufferAnalytics: obj3.useCallback((arg0) => {
      let obj2;
      if (ref6.current) {
        if (flag2) {
          const tmp2 = arg0;
          if (tmp2) {
            const _Date = Date;
            ref8.current = Date.now();
            ref9.current = ref9.current + 1;
            const obj = {
              adContentId: bountyId,
              adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
              event: AnalyticEvents.AD_VIDEO_BUFFERING_STARTED,
              properties: obj2,
              sourceQuestContent,
            };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {
              video_session_id: memo,
              impression_id: questImpressionId,
              network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
              buffer_index: ref9.current,
              video_bitrate_bps: closure_28.current.bitrateBps,
            };
            const merged = Object.assign(callback3());
            const merged1 = Object.assign(memo1);
            trackAdContentEvent(obj);
          } else {
            callback16();
          }
          return tmp5;
        }
      }
    }, items25),
  };
  items22 = [callback2, callback16];
  items23 = [callback17, flag2];
  items24 = [flag2, callback18];
  items25 = [bountyId, memo, questImpressionId, callback16, callback3, flag2, memo1, sourceQuestContent];
  return obj4;
};
