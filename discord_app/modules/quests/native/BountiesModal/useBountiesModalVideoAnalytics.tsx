// === Module 15359: useBountiesModalVideoAnalytics ===

// Module 15359 (useBountiesModalVideoAnalytics)
import MonitoringAgentDefault from "MonitoringAgent" /* 5169 */;
import MetricEvents from "MetricEvents" /* 5174 */;
import AdCreativeType from "AdCreativeType" /* 5754 */;
import AnalyticsActions from "AnalyticsActions" /* 8039 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11847 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15351 */;
import AdsVideoUtils from "AdsVideoUtils" /* 15361 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import NetworkStore from "NetworkStore" /* 4876 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_8 = [25, 50, 75];
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx");

export const useBountiesModalVideoAnalytics = function useBountiesModalVideoAnalytics(bountyId) {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
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
  closure_17 = undefined;
  closure_22 = undefined;
  closure_28 = undefined;
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
  const questImpressionId = bountyId(rewardDurationMs[5]).useQuestImpressionId();
  let obj = bountyId(rewardDurationMs[5]);
  const getQuestImpressionId = bountyId(rewardDurationMs[5]).useGetQuestImpressionId();
  const memo = flag.useMemo(() => bountyId(rewardDurationMs[6]).v4(), []);
  const first = num3(flag.useState(() => {
    const obj = bountyId(rewardDurationMs[7]);
    return obj.getAdUser(bountyId(rewardDurationMs[8]).getQuestContentName(bountyId(rewardDurationMs[9]).QuestContent.VIDEO_MODAL_MOBILE));
  }), 1)[0];
  closure_12 = flag.useRef({ getImpressionId: getQuestImpressionId, bountyId, sourceQuestContent });
  const items = [getQuestImpressionId, bountyId, sourceQuestContent];
  const layoutEffect = flag.useLayoutEffect(() => {
    closure_12.current = { getImpressionId: getQuestImpressionId, bountyId, sourceQuestContent };
  }, items);
  const tmp7 = num3(flag.useState(null), 2);
  const first1 = tmp7[0];
  closure_14 = tmp7[1];
  const items1 = [first];
  const layoutEffect1 = flag.useLayoutEffect(() => {
    let obj2 = {
      getImpressionId() {
        const current = ref.current;
        return current.getImpressionId();
      },
      onEmit: null
    };
    closure_0 = num2(function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
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
              closure_2 = tmp3;
              closure_1 = tmp5;
              closure_129_0 = closure_0;
              let VIDEO_MODAL_MOBILE;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              let impressionId;
              closure_129_5 = undefined;
              VIDEO_MODAL_MOBILE = closure_0(5752).QuestContent.VIDEO_MODAL_MOBILE;
              ({ bountyId: closure_129_2, sourceQuestContent: closure_129_3 } = ref.current);
              c4 = 1;
              const current = ref.current;
              impressionId = current.getImpressionId();
              c5 = 2;
              c6 = 1;
              const obj6 = { value, done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            closure_129_6 = closure_3;
            const questLogger = closure_0(8030).getQuestLogger();
            questLogger.warn("[EngagedView] failed to emit quest_content_engaged_viewed", closure_129_6);
            throw closure_129_6;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_129_5 = value;
            const obj8 = { adContentId: closure_129_2, adCreativeType: closure_0(5754).AdCreativeType.BOUNTY, event: constants.QUEST_CONTENT_ENGAGED_VIEWED, properties: null, sourceQuestContent: null };
            const obj10 = {};
            const obj9 = closure_0(8039);
            const merged = Object.assign(closure_0(8049).getContentProperties(VIDEO_MODAL_MOBILE));
            const merged1 = Object.assign(sourceQuestContent(7998)());
            obj10.impression_id = impressionId;
            obj10.video_watch_seconds = closure_129_0.video_watch_seconds;
            obj10.video_position_seconds = closure_129_0.video_position_seconds;
            obj10.video_duration_seconds = closure_129_0.video_duration_seconds;
            let advertisingId = null;
            if (null != closure_129_5) {
              advertisingId = null;
              if (obj.isIOS()) {
                advertisingId = closure_129_5.advertisingId;
              }
              obj = closure_0(1364);
            }
            obj10.apple_advertising_id = advertisingId;
            let advertisingId1 = null;
            if (null != closure_129_5) {
              advertisingId1 = null;
              if (obj2.isAndroid()) {
                advertisingId1 = closure_129_5.advertisingId;
              }
              obj2 = closure_0(1364);
            }
            obj10.android_advertising_id = advertisingId1;
            obj8.properties = obj10;
            obj8.sourceQuestContent = closure_129_3;
            obj9.trackAdContentEvent(obj8);
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp35) {
          closure_3 = tmp35;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp35;
          } else {
            c5 = tmp;
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
    closure_14(bountyId(rewardDurationMs[10]).createEngagedViewEmitter(obj2));
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
  const set = new Set();
  if (tmp12) {
    set.add("start");
  }
  if (1000 * num2 >= rewardDurationMs) {
    set.add("threshold");
  }
  closure_17 = flag.useRef(set);
  flag.useRef(false);
  flag.useRef(num);
  flag.useRef(num3);
  flag.useRef(null);
  closure_22 = obj3.useRef(null);
  flag.useRef(false);
  flag.useRef(false);
  flag.useRef(null);
  flag.useRef(null);
  flag.useRef(-1);
  closure_28 = obj3.useRef({ bitrateBps: null, width: null, height: null, levelIndex: null });
  callback2 = obj3.useCallback(() => {
    if (null != ref7.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref7.current);
      ref7.current = null;
    }
  }, []);
  const items4 = [flag, prop, rewardDurationMs];
  memo1 = obj3.useMemo(() => ({ was_preloaded: flag, startup_path: "active_only", vertical_scrolling_position: prop, reward_timer_seconds: rewardDurationMs / 1000 }), items4);
  callback3 = obj3.useCallback(() => {
    const current = closure_28.current;
    return { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
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
        const result = VideoQuestUtils.formatVideoProgressRatio(num2, tmp2);
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
    ({ videoTimestampSeconds, progress, thresholdMet } = arg0);
    const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_PROGRESSED, properties: { progress, video_timestamp_seconds: videoTimestampSeconds, video_session_id: memo, impression_id: questImpressionId, threshold_met: thresholdMet, reward_timer_seconds: rewardDurationMs / 1000 }, sourceQuestContent };
    AnalyticsActions.trackAdContentEvent(obj2);
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
    current = closure_17.current;
    if (!current.has("threshold")) {
      const current2 = closure_17.current;
      current2.add("threshold");
      const _Math = Math;
      const bound = Math.max(rewardDurationMs / 1000, arg0);
      const obj2 = { videoTimestampSeconds: bound, progress: VideoQuestUtils.formatVideoProgressRatio(bound, current), thresholdMet: true };
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
      const result = VideoQuestUtils.formatVideoProgressRatio(videoTimestampSeconds, current);
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
            let obj = { videoTimestampSeconds, progress: result, thresholdMet: 1000 * videoTimestampSeconds >= rewardDurationMs };
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
    closure_19.current = current2;
    closure_20.current = current;
    callback4(current);
    if (0 === arg0) {
      callback6();
    }
    if (1000 * arg0 >= rewardDurationMs) {
      callback7(arg0, current);
    }
    callback9(arg0, current);
    callback({ positionSeconds: current2, durationSeconds: current, isPlaying: flag2 });
    const obj = { positionSeconds: current2, durationSeconds: current, isPlaying: flag2 };
  }, items11);
  const items13 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback11 = obj3.useCallback((arg0, current, current2) => {
    closure_19.current = current2;
    closure_20.current = current;
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
    closure_19.current = 0;
    const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_LOOPED, properties: { video_session_id: memo, impression_id: questImpressionId, loop_count, reward_timer_seconds: rewardDurationMs / 1000 }, sourceQuestContent };
    AnalyticsActions.trackAdContentEvent(obj2);
  }, items13);
  const items15 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback13 = obj3.useCallback((video_timestamp_seconds, arg1) => {
    callback1();
    if (arg1 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
      const obj = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_PAUSED, properties: null, sourceQuestContent: null };
      const obj2 = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
      obj.properties = obj2;
      obj.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackAdContentEvent(obj);
      const tmp2Result = AnalyticsActions;
    }
  }, items14);
  const items16 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback14 = obj3.useCallback((video_timestamp_seconds, arg1) => {
    if (arg1 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
      const obj = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_RESUMED, properties: null, sourceQuestContent: null };
      const obj2 = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
      obj.properties = obj2;
      obj.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackAdContentEvent(obj);
      const tmpResult = AnalyticsActions;
    }
  }, items15);
  const items17 = [bountyId, memo, questImpressionId, callback3, memo1, sourceQuestContent];
  const callback15 = obj3.useCallback((error) => {
    const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_ERROR, properties: null, sourceQuestContent: null };
    const obj3 = { video_progress: null, video_error_type: null, network_connection_speed: null, video_session_id: null, video_error_code: null, video_error_message: null, video_network_state: null, impression_id: null, reward_timer_seconds: null };
    const obj = AnalyticsActions;
    obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(ref2.current, ref3.current);
    obj3.video_session_id = memo;
    let code;
    if (error != null) {
      code = error.error.code;
    }
    obj3.video_error_code = code;
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
    obj3.video_error_message = localizedDescription;
    obj3.impression_id = questImpressionId;
    obj3.reward_timer_seconds = rewardDurationMs / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    if (tmpResult.isSourceError(error)) {
      const obj5 = { name: MetricEvents.MetricEvents.QUEST_VIDEO_ERROR, tags: ["error_type:SOURCE_ERROR"] };
      MonitoringAgentDefault.increment(obj5);
    }
    tmpResult = AdsVideoUtils;
  }, items16);
  callback16 = obj3.useCallback(() => {
    if (null != ref8.current) {
      const _Date = Date;
      ref8.current = null;
      const diff = Date.now() - ref8.current;
      const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_BUFFERING_ENDED, properties: null, sourceQuestContent: null };
      const obj3 = { video_session_id: memo, impression_id: questImpressionId, duration: diff, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), buffer_index: ref9.current, video_bitrate_bps: closure_28.current.bitrateBps };
      const merged = Object.assign(callback3());
      const merged1 = Object.assign(memo1);
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackAdContentEvent(obj2);
    }
  }, items17);
  const items18 = [bountyId, memo, questImpressionId, callback2, callback3, memo1, sourceQuestContent];
  callback17 = obj3.useCallback(() => {
    let current = ref5.current;
    if (!current) {
      current = null == ref4.current;
    }
    if (!current) {
      current = null == closure_22.current;
    }
    if (!current) {
      ref5.current = true;
      callback2();
      const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_TIME_TO_FIRST_FRAME, properties: null, sourceQuestContent: null };
      const obj3 = { video_session_id: memo, impression_id: questImpressionId, duration_ms: closure_22.current - ref4.current, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), startup_bitrate_bps: closure_28.current.bitrateBps };
      const merged = Object.assign(callback3());
      const merged1 = Object.assign(memo1);
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackAdContentEvent(obj2);
    }
  }, items18);
  const items19 = [callback17];
  callback18 = obj3.useCallback(() => {
    let current = ref5.current;
    if (!current) {
      current = null == ref4.current;
    }
    if (!current) {
      current = null == closure_22.current;
    }
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
  const effect = obj3.useEffect(() => () => {
    if (null != ref.current) {
      callback17();
    }
    callback2();
    callback16();
  }, items20);
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
  let obj4 = { handleVideoProgressAnalytics: callback10, handleVideoEndAnalytics: callback11, handleVideoLoopedAnalytics: callback12, handleVideoPausedAnalytics: callback13, handleVideoResumedAnalytics: callback14, handleVideoErrorAnalytics: callback15, handleLoadStartAnalytics: null, handleVideoTracksAnalytics: null, handleReadyForDisplayAnalytics: null, handleBufferAnalytics: null };
  const items22 = [callback2, callback16];
  obj4.handleLoadStartAnalytics = flag.useCallback(() => {
    callback16();
    callback2();
    closure_21.current = Date.now();
    closure_22.current = null;
    closure_23.current = false;
    closure_24.current = false;
    closure_28.current = { bitrateBps: null, width: null, height: null, levelIndex: null };
  }, items22);
  const items23 = [callback17, flag2];
  obj4.handleVideoTracksAnalytics = flag.useCallback((arg0) => {
    ({ videoTracks, selectedVideoTrackId } = arg0);
    if (0 === videoTracks.length) {
      let size1 = { bitrateBps: null, width: null, height: null, levelIndex: null };
    } else {
      let num = -1;
      if (null != selectedVideoTrackId) {
        num = -1;
        if (selectedVideoTrackId.length > 0) {
          num = videoTracks.findIndex((trackId) => trackId.trackId === selectedVideoTrackId);
        }
      }
      const size = num >= 0 ? videoTracks[num] : videoTracks[0];
      let bitrate = null;
      if (size.bitrate > 0) {
        bitrate = size.bitrate;
      }
      size1 = { bitrateBps: bitrate, width: null, height: null, levelIndex: null };
      let width = null;
      if (size.width > 0) {
        width = size.width;
      }
      size1.width = width;
      let height = null;
      if (size.height > 0) {
        height = size.height;
      }
      size1.height = height;
      let tmp5 = null;
      if (num >= 0) {
        tmp5 = num;
      }
      size1.levelIndex = tmp5;
    }
    closure_28.current = size1;
    let tmp6 = flag2;
    if (flag2) {
      tmp6 = null != closure_22.current;
    }
    if (tmp6) {
      tmp6 = null != closure_28.current.bitrateBps;
    }
    if (tmp6) {
      callback17();
    }
  }, items23);
  const items24 = [flag2, callback18];
  obj4.handleReadyForDisplayAnalytics = flag.useCallback(() => {
    closure_24.current = true;
    if (null == closure_22.current) {
      const _Date = Date;
      tmp.current = Date.now();
    }
    if (flag2) {
      callback18();
    }
  }, items24);
  const items25 = [bountyId, memo, questImpressionId, callback16, callback3, flag2, memo1, sourceQuestContent];
  obj4.handleBufferAnalytics = flag.useCallback((arg0) => {
    if (ref6.current) {
      if (flag2) {
        if (arg0) {
          const _Date = Date;
          closure_26.current = Date.now();
          ref9.current = ref9.current + 1;
          const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_BUFFERING_STARTED, properties: null, sourceQuestContent: null };
          const obj3 = { video_session_id: memo, impression_id: questImpressionId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), buffer_index: ref9.current, video_bitrate_bps: closure_28.current.bitrateBps };
          const merged = Object.assign(callback3());
          const merged1 = Object.assign(memo1);
          obj2.properties = obj3;
          obj2.sourceQuestContent = sourceQuestContent;
          AnalyticsActions.trackAdContentEvent(obj2);
        } else {
          callback16();
        }
        return tmp5;
      }
    }
  }, items25);
  return obj4;
};