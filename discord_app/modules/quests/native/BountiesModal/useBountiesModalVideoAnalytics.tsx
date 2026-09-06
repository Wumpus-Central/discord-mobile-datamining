// === Module 15021: useBountiesModalVideoAnalytics ===

// Module 15021 (useBountiesModalVideoAnalytics)
import AdCreativeType from "AdCreativeType" /* 5451 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11512 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15015 */;
import noop from "module_19" /* 19 */;
import NetworkStore from "NetworkStore" /* 4609 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_6 = [25, 50, 75];
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
  let str = bountyId.startupPath;
  if (str === undefined) {
    str = "carousel";
  }
  let prop = bountyId.verticalScrollingPosition;
  if (prop === undefined) {
    prop = null;
  }
  let flag2 = bountyId.isActive;
  if (flag2 === undefined) {
    flag2 = true;
  }
  closure_11 = undefined;
  closure_16 = undefined;
  closure_22 = undefined;
  let callback;
  let memo1;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let callback7;
  let callback14;
  let callback15;
  let callback16;
  let obj = bountyId(rewardDurationMs[3]);
  const questImpressionId = obj.useQuestImpressionId();
  const memo = num2.useMemo(() => bountyId(rewardDurationMs[4]).v4(), []);
  const set = new Set();
  if (tmp4) {
    set.add("start");
  }
  if (1000 * num2 >= rewardDurationMs) {
    set.add("threshold");
  }
  closure_11 = num2.useRef(set);
  num2.useRef(false);
  num2.useRef(num);
  num2.useRef(num3);
  num2.useRef(null);
  closure_16 = obj2.useRef(null);
  num2.useRef(false);
  num2.useRef(false);
  num2.useRef(null);
  num2.useRef(null);
  num2.useRef(-1);
  closure_22 = obj2.useRef({ bitrateBps: null, width: null, height: null, levelIndex: null });
  callback = obj2.useCallback(() => {
    if (null != ref7.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const items = [flag, str, prop, rewardDurationMs];
  memo1 = obj2.useMemo(() => ({ was_preloaded: flag, startup_path: str, vertical_scrolling_position: prop, reward_timer_seconds: rewardDurationMs / 1000 }), items);
  callback1 = obj2.useCallback(() => {
    const current = closure_22.current;
    return { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
  }, []);
  const items1 = [num2, num3];
  callback2 = obj2.useCallback((current) => {
    if (!ref.current) {
      let tmp2 = current;
      tmp.current = true;
      if (current <= 0) {
        tmp2 = num3;
      }
      if (tmp2 > 0) {
        const result = VideoQuestUtils.formatVideoProgressRatio(num2, tmp2);
        const iter = str[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (result >= nextResult / 100) {
            current = closure_11.current;
            let _HermesInternal = HermesInternal;
            let addResult = current.add("p" + tmp6);
          }
          continue;
        }
      }
    }
  }, items1);
  const items2 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  callback3 = obj2.useCallback((arg0) => {
    ({ videoTimestampSeconds, progress, thresholdMet } = arg0);
    let obj = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_PROGRESSED, properties: null, sourceQuestContent };
    obj = { progress, video_timestamp_seconds: videoTimestampSeconds, video_session_id: memo, impression_id: questImpressionId, threshold_met: thresholdMet, reward_timer_seconds: rewardDurationMs / 1000 };
    obj.properties = obj;
    obj.trackAdContentEvent(obj);
  }, items2);
  const items3 = [callback3];
  callback4 = obj2.useCallback(() => {
    const current = closure_11.current;
    if (!current.has("start")) {
      const current2 = closure_11.current;
      current2.add("start");
      callback3({ videoTimestampSeconds: 0, progress: 0, thresholdMet: false });
    }
  }, items3);
  const items4 = [callback3, rewardDurationMs];
  callback5 = obj2.useCallback((arg0, current) => {
    current = closure_11.current;
    if (!current.has("threshold")) {
      const current2 = closure_11.current;
      current2.add("threshold");
      const _Math = Math;
      const bound = Math.max(rewardDurationMs / 1000, arg0);
      const obj = { videoTimestampSeconds: bound, progress: null, thresholdMet: true };
      obj.progress = obj.formatVideoProgressRatio(bound, current);
      callback3(obj);
    }
  }, items4);
  const items5 = [callback3];
  callback6 = obj2.useCallback((arg0, arg1) => {
    const current = closure_11.current;
    if (!current.has("end")) {
      const current2 = closure_11.current;
      current2.add("end");
      const _Math = Math;
      const obj = { videoTimestampSeconds: Math.max(arg0, arg1), progress: 1, thresholdMet: true };
      callback3(obj);
    }
  }, items5);
  const items6 = [callback3, rewardDurationMs];
  callback7 = obj2.useCallback((videoTimestampSeconds, current) => {
    if (current > 0) {
      const result = VideoQuestUtils.formatVideoProgressRatio(videoTimestampSeconds, current);
      const iter = str[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _HermesInternal = HermesInternal;
        let tmp4 = nextResult;
        let combined = "p" + nextResult;
        current = closure_11.current;
        let tmp6 = combined;
        let tmp7 = closure_11;
        if (!current.has(combined)) {
          if (result >= tmp4 / 100) {
            let current2 = tmp7.current;
            let addResult = current2.add(tmp6);
            let obj = { videoTimestampSeconds, progress: result, thresholdMet: null };
            obj.thresholdMet = 1000 * videoTimestampSeconds >= rewardDurationMs;
            let tmp13 = callback3(obj);
          }
        }
        continue;
      }
    }
  }, items6);
  const items7 = [callback2, callback4, callback5, callback7, rewardDurationMs];
  const items8 = [callback2, callback4, callback5, callback7, callback6];
  const callback8 = obj2.useCallback((arg0, current, current2) => {
    closure_13.current = current2;
    closure_14.current = current;
    callback2(current);
    if (0 === arg0) {
      callback4();
    }
    if (1000 * arg0 >= rewardDurationMs) {
      callback5(arg0, current);
    }
    callback7(arg0, current);
  }, items7);
  const items9 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback9 = obj2.useCallback((arg0, current, current2) => {
    closure_13.current = current2;
    closure_14.current = current;
    callback2(current);
    if (0 === arg0) {
      callback4();
    }
    callback5(arg0, current);
    callback7(arg0, current);
    callback6(arg0, current);
  }, items8);
  const items10 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback10 = obj2.useCallback((loop_count) => {
    closure_13.current = 0;
    let obj = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_LOOPED, properties: null, sourceQuestContent };
    obj = { video_session_id: memo, impression_id: questImpressionId, loop_count, reward_timer_seconds: rewardDurationMs / 1000 };
    obj.properties = obj;
    obj.trackAdContentEvent(obj);
  }, items9);
  const items11 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback11 = obj2.useCallback((video_timestamp_seconds, arg1) => {
    if (arg1 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
      let obj = { adContentId: bountyId, adCreativeType: tmp(5451).AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_PAUSED, properties: null, sourceQuestContent: null };
      obj = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      tmp(7718).trackAdContentEvent(obj);
      const tmpResult = tmp(7718);
    }
  }, items10);
  const items12 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback12 = obj2.useCallback((video_timestamp_seconds, arg1) => {
    if (arg1 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
      let obj = { adContentId: bountyId, adCreativeType: tmp(5451).AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_RESUMED, properties: null, sourceQuestContent: null };
      obj = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      tmp(7718).trackAdContentEvent(obj);
      const tmpResult = tmp(7718);
    }
  }, items11);
  const items13 = [bountyId, memo, questImpressionId, callback1, memo1, sourceQuestContent];
  const callback13 = obj2.useCallback((error) => {
    let obj = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_ERROR, properties: null, sourceQuestContent: null };
    obj = { video_progress: VideoQuestUtils.formatVideoProgressRatio(ref2.current, ref3.current), video_error_type: null, network_connection_speed: null, video_session_id: memo, video_error_code: null, video_error_message: null, video_network_state: null, impression_id: null, reward_timer_seconds: null };
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
    obj.impression_id = questImpressionId;
    obj.reward_timer_seconds = rewardDurationMs / 1000;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj);
    if (tmpResult.isSourceError(error)) {
      const obj1 = { name: tmp(7607).MetricEvents.QUEST_VIDEO_ERROR, tags: ["error_type:SOURCE_ERROR"] };
      MonitoringAgentDefault.increment(obj1);
    }
  }, items12);
  callback14 = obj2.useCallback(() => {
    if (null != ref8.current) {
      const _Date = Date;
      tmp.current = null;
      const diff = Date.now() - tmp.current;
      let obj = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_BUFFERING_ENDED, properties: null, sourceQuestContent: null };
      obj = { video_session_id: memo, impression_id: questImpressionId, duration: diff, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), buffer_index: ref9.current, video_bitrate_bps: closure_22.current.bitrateBps };
      const merged = Object.assign(callback1());
      const merged1 = Object.assign(memo1);
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
    }
  }, items13);
  const items14 = [bountyId, memo, questImpressionId, callback, callback1, memo1, sourceQuestContent];
  callback15 = obj2.useCallback(() => {
    let current = ref5.current;
    if (!current) {
      current = null == ref4.current;
    }
    if (!current) {
      current = null == closure_16.current;
    }
    if (!current) {
      ref5.current = true;
      callback();
      let obj = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_TIME_TO_FIRST_FRAME, properties: null, sourceQuestContent: null };
      obj = { video_session_id: memo, impression_id: questImpressionId, duration_ms: closure_16.current - ref4.current, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), startup_bitrate_bps: closure_22.current.bitrateBps };
      const merged = Object.assign(callback1());
      const merged1 = Object.assign(memo1);
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
    }
  }, items14);
  const items15 = [callback15];
  callback16 = obj2.useCallback(() => {
    let current = ref5.current;
    if (!current) {
      current = null == ref4.current;
    }
    if (!current) {
      current = null == closure_16.current;
    }
    if (!current) {
      if (null == closure_22.current.bitrateBps) {
        if (null == ref7.current) {
          const _setTimeout = setTimeout;
          tmp9.current = setTimeout(() => {
            ref7.current = null;
            callback15();
          }, 500);
        }
      } else {
        callback15();
      }
    }
  }, items15);
  const items16 = [callback, callback14, callback15];
  const effect = obj2.useEffect(() => () => {
    if (null != ref.current) {
      callback15();
    }
    callback();
    callback14();
  }, items16);
  const items17 = [flag2, callback16, callback, callback14, callback15];
  const effect1 = obj2.useEffect(() => {
    if (flag2) {
      callback16();
    } else {
      if (null != ref7.current) {
        callback15();
      }
      callback();
      callback14();
    }
  }, items17);
  obj = { handleVideoProgressAnalytics: callback8, handleVideoEndAnalytics: callback9, handleVideoLoopedAnalytics: callback10, handleVideoPausedAnalytics: callback11, handleVideoResumedAnalytics: callback12, handleVideoErrorAnalytics: callback13, handleLoadStartAnalytics: null, handleVideoTracksAnalytics: null, handleReadyForDisplayAnalytics: null, handleBufferAnalytics: null };
  const items18 = [callback, callback14];
  obj.handleLoadStartAnalytics = num2.useCallback(() => {
    callback14();
    callback();
    closure_15.current = Date.now();
    closure_16.current = null;
    closure_17.current = false;
    closure_18.current = false;
    closure_22.current = { bitrateBps: null, width: null, height: null, levelIndex: null };
  }, items18);
  const items19 = [callback15, flag2];
  obj.handleVideoTracksAnalytics = num2.useCallback((arg0) => {
    ({ videoTracks, selectedVideoTrackId } = arg0);
    if (0 === videoTracks.length) {
      let size = { bitrateBps: null, width: null, height: null, levelIndex: null };
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
      size = { bitrateBps: bitrate, width: null, height: null, levelIndex: null };
      let width = null;
      if (size.width > 0) {
        width = size.width;
      }
      size.width = width;
      let height = null;
      if (size.height > 0) {
        height = size.height;
      }
      size.height = height;
      let tmp5 = null;
      if (num >= 0) {
        tmp5 = num;
      }
      size.levelIndex = tmp5;
    }
    closure_22.current = size;
    let tmp6 = flag2;
    if (flag2) {
      tmp6 = null != closure_16.current;
    }
    if (tmp6) {
      tmp6 = null != tmp.current.bitrateBps;
    }
    if (tmp6) {
      callback15();
    }
  }, items19);
  const items20 = [flag2, callback16];
  obj.handleReadyForDisplayAnalytics = num2.useCallback(() => {
    closure_18.current = true;
    if (null == closure_16.current) {
      const _Date = Date;
      tmp.current = Date.now();
    }
    if (flag2) {
      callback16();
    }
  }, items20);
  const items21 = [bountyId, memo, questImpressionId, callback14, callback1, flag2, memo1, sourceQuestContent];
  obj.handleBufferAnalytics = num2.useCallback((arg0) => {
    if (ref6.current) {
      if (flag2) {
        if (arg0) {
          const _Date = Date;
          closure_20.current = Date.now();
          ref9.current = ref9.current + 1;
          let obj = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_BUFFERING_STARTED, properties: null, sourceQuestContent: null };
          obj = { video_session_id: memo, impression_id: questImpressionId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), buffer_index: ref9.current, video_bitrate_bps: closure_22.current.bitrateBps };
          const merged = Object.assign(callback1());
          const merged1 = Object.assign(memo1);
          obj.properties = obj;
          obj.sourceQuestContent = sourceQuestContent;
          obj.trackAdContentEvent(obj);
        } else {
          callback14();
        }
        return tmp5;
      }
    }
  }, items21);
  return obj;
};