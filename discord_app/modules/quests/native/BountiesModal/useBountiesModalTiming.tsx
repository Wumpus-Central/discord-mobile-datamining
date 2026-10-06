// === Module 14843: useBountiesModalTiming ===

// Module 14843 (useBountiesModalTiming)
import QuestConstants from "QuestConstants" /* 5630 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let endMode;

let closure_4 = QuestConstants.BOUNTY_CTA_TIMER_MILLISECONDS;
const BountyVideoEndMode = { END_CARD: "END_CARD", END_CARD_WITH_CTA: "END_CARD_WITH_CTA", LOOP: "LOOP", APP_STORE_LOOP: "APP_STORE_LOOP" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((endMode) => {
  let closure_11;
  let closure_13;
  let closure_14;
  let closure_15;
  let initialMaxVideoProgressSec;
  let initialProgressSec;
  let initialVideoDurationSec;
  let isCompleted;
  let onRewardEarned;
  let rewardDurationMs;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp7;
  const obj = endMode(rewardDurationMs[4]);
  const cResult = obj.c(32);
  endMode = endMode.endMode;
  rewardDurationMs = endMode.rewardDurationMs;
  ({ isCompleted, onRewardEarned } = endMode);
  const onVideoProgress = endMode.onVideoProgress;
  const onVideoEnd = endMode.onVideoEnd;
  const onVideoLooped = endMode.onVideoLooped;
  const onVideoPaused = endMode.onVideoPaused;
  const onVideoResumed = endMode.onVideoResumed;
  const playerRef = endMode.playerRef;
  ({ initialProgressSec, initialMaxVideoProgressSec, initialVideoDurationSec } = endMode);
  let num = 0;
  if (undefined !== initialProgressSec) {
    num = initialProgressSec;
  }
  let num2 = 0;
  if (undefined !== initialMaxVideoProgressSec) {
    num2 = initialMaxVideoProgressSec;
  }
  let num3 = null;
  if (undefined !== initialVideoDurationSec) {
    num3 = initialVideoDurationSec;
  }
  let tmp2 = null != num3;
  const useState = onVideoProgress.useState;
  if (tmp2) {
    tmp2 = num >= num3 - 1;
  }
  if (tmp2) {
    const tmp3 = onVideoLooped;
    tmp2 = endMode !== onVideoLooped.LOOP;
  }
  if (tmp2) {
    tmp2 = endMode !== onVideoLooped.APP_STORE_LOOP;
  }
  [tmp7, closure_11] = onRewardEarned(useState(tmp2), 2);
  const tmp6 = onRewardEarned(useState(tmp2), 2);
  if (cResult[0] === num) {
    let tmp8;
    if (cResult[1] === num3) {
      tmp8 = cResult[2];
    }
    [tmp10, closure_12] = onRewardEarned(onVideoProgress.useState(tmp8), 2);
    onRewardEarned(onVideoProgress.useState(tmp8), 2);
    [tmp12, closure_13] = onRewardEarned(onVideoProgress.useState(null), 2);
    onRewardEarned(onVideoProgress.useState(null), 2);
    [tmp14, closure_14] = onRewardEarned(onVideoProgress.useState(num2), 2);
    onRewardEarned(onVideoProgress.useState(num2), 2);
    [tmp16, closure_15] = onRewardEarned(onVideoProgress.useState(num3), 2);
    onRewardEarned(onVideoProgress.useState(num3), 2);
    const ref = obj2.useRef(isCompleted);
    const ref2 = obj2.useRef(num2);
    const useRef = obj2.useRef;
    if (num3 == null) {
      num3 = 0;
    }
    const ref3 = useRef(num3);
    const ref4 = obj2.useRef(0);
    const ref5 = obj2.useRef(num);
    if (cResult[3] === onRewardEarned) {
      if (cResult[4] === onVideoProgress) {
        let tmp17;
        if (cResult[5] === rewardDurationMs) {
          tmp17 = cResult[6];
        }
        if (cResult[7] === endMode) {
          if (cResult[8] === onRewardEarned) {
            if (cResult[9] === onVideoEnd) {
              let tmp18;
              let tmp19;
              let tmp21;
              let tmp22;
              let tmp23;
              if (cResult[10] === onVideoLooped) {
                tmp18 = cResult[11];
              }
              if (cResult[12] !== playerRef) {
                function te() {
                  if (playerRef != null) {
                    const current = playerRef.current;
                    if (current != null) {
                      current.seekToStart();
                    }
                  }
                  closure_13(0);
                  closure_11(false);
                }
                cResult[12] = playerRef;
                cResult[13] = te;
                tmp19 = te;
              } else {
                tmp19 = cResult[13];
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                function oe() {
                  closure_11(true);
                }
                cResult[14] = oe;
                tmp21 = oe;
              } else {
                tmp21 = cResult[14];
              }
              if (cResult[15] !== onVideoPaused) {
                function se(arg0) {
                  onVideoPaused(ref5.current, arg0);
                }
                cResult[15] = onVideoPaused;
                cResult[16] = se;
                tmp22 = se;
              } else {
                tmp22 = cResult[16];
              }
              if (cResult[17] !== onVideoResumed) {
                function le(arg0) {
                  onVideoResumed(ref5.current, arg0);
                }
                cResult[17] = onVideoResumed;
                cResult[18] = le;
                tmp23 = le;
              } else {
                tmp23 = cResult[18];
              }
              const result = 1000 * tmp14;
              const result1 = rewardDurationMs / 1000;
              const _Math = Math;
              let bound = Math.max(0, result1 - tmp14);
              let num22 = 0;
              if (result < rewardDurationMs) {
                num22 = 0;
                if (!tmp7) {
                  num22 = 0;
                  if (!isCompleted) {
                    num22 = bound;
                    if (null != tmp16) {
                      num22 = bound;
                      if (tmp16 > 0) {
                        const _Math2 = Math;
                        const _Math3 = Math;
                        num22 = Math.max(0, Math.min(result1, tmp16) - tmp14);
                      }
                    }
                  }
                }
              }
              const tmp27 = tmp7 && endMode !== onVideoLooped.END_CARD_WITH_CTA;
              if (!isCompleted) {
                isCompleted = result > onVideoEnd;
              }
              if (isCompleted) {
                isCompleted = !tmp27;
              }
              if (cResult[19] === tmp19) {
                if (cResult[20] === tmp18) {
                  if (cResult[21] === tmp22) {
                    if (cResult[22] === tmp17) {
                      if (cResult[23] === tmp23) {
                        if (cResult[24] === tmp7) {
                          if (cResult[25] === tmp14) {
                            if (cResult[26] === num22) {
                              if (cResult[27] === result1) {
                                if (cResult[28] === isCompleted) {
                                  if (cResult[29] === tmp10) {
                                    let tmp30;
                                    if (cResult[30] === tmp16) {
                                      tmp30 = cResult[31];
                                    }
                                    return tmp30;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = { isCtaVisible: isCompleted, isEndCardVisible: tmp7, handleVideoEnd: tmp18, handleVideoProgress: tmp17, handleVideoPaused: tmp22, handleVideoResumed: tmp23, handleReplay: tmp19, showEndCard: tmp21, rewardRemainingSeconds: num22, rewardTotalSeconds: result1, normalizedProgress: tmp10, maxVideoProgressSeconds: tmp14, videoDuration: tmp16 };
              cResult[19] = tmp19;
              cResult[20] = tmp18;
              cResult[21] = tmp22;
              cResult[22] = tmp17;
              cResult[23] = tmp23;
              cResult[24] = tmp7;
              cResult[25] = tmp14;
              cResult[26] = num22;
              cResult[27] = result1;
              cResult[28] = isCompleted;
              cResult[29] = tmp10;
              cResult[30] = tmp16;
              cResult[31] = obj3;
              tmp30 = obj3;
            }
          }
        }
        function ne() {
          onVideoEnd(ref2.current, ref3.current, ref5.current);
          if (endMode !== obj.LOOP) {
            if (tmp3 !== obj.APP_STORE_LOOP) {
              closure_11(true);
            }
            if (!ref.current) {
              tmp7.current = true;
              onRewardEarned();
            }
          }
          ref4.current = ref4.current + 1;
          onVideoLooped(ref4.current);
          ref5.current = 0;
        }
        cResult[7] = endMode;
        cResult[8] = onRewardEarned;
        cResult[9] = onVideoEnd;
        cResult[10] = onVideoLooped;
        cResult[11] = ne;
        tmp18 = ne;
      }
    }
    const fn2 = function w(progress) {
      let currentTime;
      let seekableDuration;
      ({ currentTime, seekableDuration } = progress);
      progress = progress.progress;
      closure_13(null);
      const bound = Math.max(currentTime, ref2.current);
      ref2.current = bound;
      ref3.current = seekableDuration;
      ref5.current = currentTime;
      closure_12(progress);
      closure_14(bound);
      closure_15(seekableDuration);
      onVideoProgress(bound, seekableDuration, currentTime);
      const current = ref.current;
      const tmp8 = !current && 1000 * bound >= rewardDurationMs;
      if (tmp8) {
        ref.current = true;
        onRewardEarned();
      }
    };
    cResult[3] = onRewardEarned;
    cResult[4] = onVideoProgress;
    cResult[5] = rewardDurationMs;
    cResult[6] = fn2;
    tmp17 = fn2;
  }
  const fn = function l() {
    num = 0;
    if (null != num3) {
      num = num / tmp;
    }
    return num;
  };
  cResult[0] = num;
  cResult[1] = num3;
  cResult[2] = fn;
  tmp8 = fn;
}) : ((endMode) => {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let isCompleted;
  let onRewardEarned;
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp7;
  let tmp9;
  const f118376 = () => {
    num = 0;
    if (null != num3) {
      num = num / tmp;
    }
    return num;
  };
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
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  const obj = onVideoProgress;
  let tmp = null != num3;
  const useState = onVideoProgress.useState;
  if (tmp) {
    tmp = num >= num3 - 1;
  }
  if (tmp) {
    tmp = endMode !== onVideoLooped.LOOP;
  }
  if (tmp) {
    const tmp3 = onVideoLooped;
    tmp = endMode !== onVideoLooped.APP_STORE_LOOP;
  }
  [tmp5, c11] = onRewardEarned(useState(tmp), 2);
  const tmp4 = onRewardEarned(useState(tmp), 2);
  [tmp7, c12] = onRewardEarned(obj.useState(f118376), 2);
  const tmp6 = onRewardEarned(obj.useState(f118376), 2);
  let tmp8 = onRewardEarned(obj.useState(null), 2);
  [tmp9, c13] = tmp8;
  [tmp11, c14] = onRewardEarned(obj.useState(num2), 2);
  onRewardEarned(obj.useState(num2), 2);
  [tmp13, c15] = onRewardEarned(obj.useState(num3), 2);
  onRewardEarned(obj.useState(num3), 2);
  ref = obj.useRef(isCompleted);
  ref2 = obj.useRef(num2);
  const useRef = obj.useRef;
  if (num3 == null) {
    num3 = 0;
  }
  ref3 = useRef(num3);
  ref4 = obj.useRef(0);
  ref5 = obj.useRef(num);
  const items = [onVideoProgress, onRewardEarned, rewardDurationMs];
  const items1 = [endMode, onVideoEnd, onVideoLooped, onRewardEarned];
  const callback = obj.useCallback((progress) => {
    let currentTime;
    let seekableDuration;
    ({ currentTime, seekableDuration } = progress);
    progress = progress.progress;
    _undefined3(null);
    const bound = Math.max(currentTime, ref2.current);
    ref2.current = bound;
    ref3.current = seekableDuration;
    ref5.current = currentTime;
    _undefined2(progress);
    _undefined4(bound);
    _undefined5(seekableDuration);
    onVideoProgress(bound, seekableDuration, currentTime);
    const current = ref.current;
    const tmp8 = !current && 1000 * bound >= rewardDurationMs;
    if (tmp8) {
      ref.current = true;
      onRewardEarned();
    }
  }, items);
  const items2 = [playerRef];
  const callback1 = obj.useCallback(() => {
    onVideoEnd(ref2.current, ref3.current, ref5.current);
    if (endMode !== obj.LOOP) {
      if (tmp3 !== obj.APP_STORE_LOOP) {
        _undefined(true);
      }
      if (!ref.current) {
        tmp7.current = true;
        onRewardEarned();
      }
    }
    ref4.current = ref4.current + 1;
    onVideoLooped(ref4.current);
    ref5.current = 0;
  }, items1);
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
  const items3 = [onVideoPaused];
  const callback3 = obj.useCallback(() => {
    _undefined(true);
  }, []);
  const items4 = [onVideoResumed];
  const callback4 = obj.useCallback((arg0) => {
    onVideoPaused(ref5.current, arg0);
  }, items3);
  const result = 1000 * tmp11;
  const result1 = rewardDurationMs / 1000;
  const callback5 = obj.useCallback((arg0) => {
    onVideoResumed(ref5.current, arg0);
  }, items4);
  let bound = Math.max(0, result1 - tmp11);
  let num5 = 0;
  if (result < rewardDurationMs) {
    num5 = 0;
    if (!tmp5) {
      num5 = 0;
      if (!isCompleted) {
        num5 = bound;
        if (null != tmp13) {
          num5 = bound;
          if (tmp13 > 0) {
            const _Math = Math;
            const _Math2 = Math;
            num5 = Math.max(0, Math.min(result1, tmp13) - tmp11);
          }
        }
      }
    }
  }
  const tmp23 = tmp5 && endMode !== onVideoLooped.END_CARD_WITH_CTA;
  if (!isCompleted) {
    isCompleted = result > onVideoEnd;
  }
  if (isCompleted) {
    isCompleted = !tmp23;
  }
  return { isCtaVisible: isCompleted, isEndCardVisible: tmp5, handleVideoEnd: callback1, handleVideoProgress: callback, handleVideoPaused: callback4, handleVideoResumed: callback5, handleReplay: callback2, showEndCard: callback3, rewardRemainingSeconds: num5, rewardTotalSeconds: result1, normalizedProgress: tmp7, maxVideoProgressSeconds: tmp11, videoDuration: tmp13 };
});
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalTiming.tsx");

export { BountyVideoEndMode };
export const useBountiesModalTiming = tmp2;