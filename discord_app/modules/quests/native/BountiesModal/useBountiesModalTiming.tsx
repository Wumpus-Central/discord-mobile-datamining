// === Module 14372: BountyVideoEndMode ===

// Module 14372 (BountyVideoEndMode)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 6716 */;

const require = fn;
let obj = { END_CARD: "END_CARD", END_CARD_WITH_CTA: "END_CARD_WITH_CTA", LOOP: "LOOP" };
let result = require("obj132").fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalTiming.tsx");

export const BountyVideoEndMode = obj;
export const useBountiesModalTiming = function useBountiesModalTiming(endMode) {
  endMode = endMode.endMode;
  const rewardDurationMs = endMode.rewardDurationMs;
  ({ isCompleted, onRewardEarned } = endMode);
  const onVideoProgress = endMode.onVideoProgress;
  const onVideoEnd = endMode.onVideoEnd;
  const onVideoLooped = endMode.onVideoLooped;
  const onVideoPaused = endMode.onVideoPaused;
  const onVideoResumed = endMode.onVideoResumed;
  const playerRef = endMode.playerRef;
  let num = endMode.initialProgressSec;
  if (num === undefined) {
    num = 0;
  }
  let num2 = endMode.initialMaxVideoProgressSec;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = endMode.initialVideoDurationSec;
  if (num3 === undefined) {
    num3 = null;
  }
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  closure_16 = undefined;
  closure_17 = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  closure_20 = undefined;
  obj = onVideoProgress;
  let tmp = null != num3;
  if (tmp) {
    tmp = num >= num3 - 1;
  }
  if (tmp) {
    tmp = endMode !== onVideoLooped.LOOP;
  }
  [tmp4, c11] = onRewardEarned(onVideoProgress.useState(tmp), 2);
  const tmp3 = onRewardEarned(onVideoProgress.useState(tmp), 2);
  [tmp6, c12] = onRewardEarned(obj.useState(() => {
    num = 0;
    if (null != num3) {
      num = num / tmp;
    }
    return num;
  }), 2);
  const tmp5 = onRewardEarned(obj.useState(() => {
    num = 0;
    if (null != num3) {
      num = num / tmp;
    }
    return num;
  }), 2);
  [tmp8, c13] = onRewardEarned(obj.useState(null), 2);
  const tmp7 = onRewardEarned(obj.useState(null), 2);
  [tmp10, c14] = onRewardEarned(obj.useState(num2), 2);
  const tmp9 = onRewardEarned(obj.useState(num2), 2);
  [tmp12, c15] = onRewardEarned(obj.useState(num3), 2);
  closure_16 = obj.useRef(isCompleted);
  closure_17 = obj.useRef(num2);
  if (num3 == null) {
    num3 = 0;
  }
  closure_18 = obj.useRef(num3);
  closure_19 = obj.useRef(0);
  closure_20 = obj.useRef(num);
  const items = [onVideoProgress, onRewardEarned, rewardDurationMs];
  const items1 = [endMode, onVideoEnd, onVideoLooped, onRewardEarned];
  const callback = obj.useCallback((progress) => {
    ({ currentTime, seekableDuration } = progress);
    _undefined3(null);
    const bound = Math.max(currentTime, ref2.current);
    ref2.current = bound;
    closure_18.current = seekableDuration;
    closure_20.current = currentTime;
    _undefined2(progress.progress);
    _undefined4(bound);
    _undefined5(seekableDuration);
    onVideoProgress(bound, seekableDuration, currentTime);
    const current = ref.current;
    let tmp8 = !current;
    if (!current) {
      tmp8 = 1000 * bound >= rewardDurationMs;
    }
    if (tmp8) {
      ref.current = true;
      onRewardEarned();
    }
  }, items);
  const items2 = [playerRef];
  const callback1 = obj.useCallback(() => {
    onVideoEnd(ref2.current, ref3.current, ref5.current);
    if (endMode === onVideoLooped.LOOP) {
      ref4.current = ref4.current + 1;
      onVideoLooped(ref4.current);
      ref5.current = 0;
    } else {
      _undefined(true);
    }
    if (!ref.current) {
      tmp8.current = true;
      onRewardEarned();
    }
  }, items1);
  const items3 = [onVideoPaused];
  const callback2 = obj.useCallback(() => {
    if (playerRef != null) {
      const current = playerRef.current;
      if (current != null) {
        current.seekToStart();
      }
    }
    _undefined3(0);
    _undefined(false);
  }, items2);
  const items4 = [onVideoResumed];
  const callback3 = obj.useCallback((arg0) => {
    onVideoPaused(ref5.current, arg0);
  }, items3);
  const result = 1000 * tmp10;
  const result1 = rewardDurationMs / 1000;
  const callback4 = obj.useCallback((arg0) => {
    onVideoResumed(ref5.current, arg0);
  }, items4);
  let bound = Math.max(0, result1 - tmp10);
  let num5 = 0;
  if (result < rewardDurationMs) {
    num5 = 0;
    if (!tmp4) {
      num5 = 0;
      if (!isCompleted) {
        num5 = bound;
        if (null != tmp12) {
          num5 = bound;
          if (tmp12 > 0) {
            const _Math = Math;
            const _Math2 = Math;
            num5 = Math.max(0, Math.min(result1, tmp12) - tmp10);
          }
        }
      }
    }
  }
  const tmp11 = onRewardEarned(obj.useState(num3), 2);
  let tmp21 = tmp4;
  if (tmp4) {
    tmp21 = endMode !== onVideoLooped.END_CARD_WITH_CTA;
  }
  if (!isCompleted) {
    isCompleted = result > obj2.useBountiesExperience(onVideoEnd.VIDEO_MODAL_MOBILE).ctaTimerMilliSeconds;
  }
  if (isCompleted) {
    isCompleted = !tmp21;
  }
  obj = { isCtaVisible: isCompleted, isEndCardVisible: tmp4, handleVideoEnd: callback1, handleVideoProgress: callback, handleVideoPaused: callback3, handleVideoResumed: callback4, handleReplay: callback2, rewardRemainingSeconds: num5, rewardTotalSeconds: result1, normalizedProgress: tmp6, maxVideoProgressSeconds: tmp10, videoDuration: tmp12 };
  return obj;
};