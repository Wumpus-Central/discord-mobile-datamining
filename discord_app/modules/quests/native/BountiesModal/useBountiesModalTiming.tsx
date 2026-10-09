// discord_app/modules/quests/native/BountiesModal/useBountiesModalTiming.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_4 = fn(5979).BOUNTY_CTA_TIMER_MILLISECONDS;
const BountyVideoEndMode = {
  END_CARD: "END_CARD",
  END_CARD_WITH_CTA: "END_CARD_WITH_CTA",
  LOOP: "LOOP",
  APP_STORE_LOOP: "APP_STORE_LOOP",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalTiming.tsx");

export { BountyVideoEndMode };
export const useBountiesModalTiming = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBountiesModalTiming(endMode) {
      const cResult = endMode(rewardDurationMs[4]).c(32);
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
      if (tmp2) {
        tmp2 = num >= num3 - 1;
      }
      if (tmp2) {
        tmp2 = endMode !== onVideoLooped.LOOP;
      }
      if (tmp2) {
        tmp2 = endMode !== onVideoLooped.APP_STORE_LOOP;
      }
      const obj = endMode(rewardDurationMs[4]);
      [tmp7, closure_11] = onRewardEarned(onVideoProgress.useState(tmp2), 2);
      if (cResult[0] === num) {
        if (cResult[1] === num3) {
          let tmp8 = cResult[2];
        }
        [tmp10, closure_12] = onRewardEarned(obj2.useState(tmp8), 2);
        const tmp5Result = onRewardEarned(obj2.useState(tmp8), 2);
        [tmp12, closure_13] = onRewardEarned(obj2.useState(null), 2);
        const tmp5Result4 = onRewardEarned(obj2.useState(null), 2);
        [tmp14, closure_14] = onRewardEarned(obj2.useState(num2), 2);
        const tmp5Result5 = onRewardEarned(obj2.useState(num2), 2);
        [tmp16, closure_15] = onRewardEarned(obj2.useState(num3), 2);
        obj2.useRef(isCompleted);
        obj2.useRef(num2);
        if (num3 == null) {
          num3 = 0;
        }
        obj2.useRef(num3);
        obj2.useRef(0);
        obj2.useRef(num);
        if (cResult[3] === onRewardEarned) {
          if (cResult[4] === onVideoProgress) {
            if (cResult[5] === rewardDurationMs) {
              let tmp17 = cResult[6];
            }
            if (cResult[7] === endMode) {
              if (cResult[8] === onRewardEarned) {
                if (cResult[9] === onVideoEnd) {
                  if (cResult[10] === onVideoLooped) {
                    let tmp18 = cResult[11];
                  }
                  if (cResult[12] !== playerRef) {
                    function te() {
                      if (playerRef != null) {
                        const current = playerRef.current;
                        if (current != null) {
                          current.seekToStart();
                        }
                      }
                      closure_1_13(0);
                      closure_1_11(false);
                    }
                    cResult[12] = playerRef;
                    cResult[13] = te;
                    let tmp19 = te;
                  } else {
                    tmp19 = cResult[13];
                  }
                  const _Symbol = Symbol;
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    function ie() {
                      closure_1_11(true);
                    }
                    cResult[14] = ie;
                    let tmp21 = ie;
                  } else {
                    tmp21 = cResult[14];
                  }
                  if (cResult[15] !== onVideoPaused) {
                    function se(arg0) {
                      onVideoPaused(ref5.current, arg0);
                    }
                    cResult[15] = onVideoPaused;
                    cResult[16] = se;
                    let tmp22 = se;
                  } else {
                    tmp22 = cResult[16];
                  }
                  if (cResult[17] !== onVideoResumed) {
                    function le(arg0) {
                      onVideoResumed(ref5.current, arg0);
                    }
                    cResult[17] = onVideoResumed;
                    cResult[18] = le;
                    let tmp23 = le;
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
                  let tmp27 = tmp7;
                  if (tmp7) {
                    tmp27 = endMode !== onVideoLooped.END_CARD_WITH_CTA;
                  }
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
                                        if (cResult[30] === tmp16) {
                                          let tmp30 = cResult[31];
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
                  const obj3 = {
                    isCtaVisible: isCompleted,
                    isEndCardVisible: tmp7,
                    handleVideoEnd: tmp18,
                    handleVideoProgress: tmp17,
                    handleVideoPaused: tmp22,
                    handleVideoResumed: tmp23,
                    handleReplay: tmp19,
                    showEndCard: tmp21,
                    rewardRemainingSeconds: num22,
                    rewardTotalSeconds: result1,
                    normalizedProgress: tmp10,
                    maxVideoProgressSeconds: tmp14,
                    videoDuration: tmp16,
                  };
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
                  closure_1_11(true);
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
          ({ currentTime, seekableDuration } = progress);
          closure_1_13(null);
          const bound = Math.max(currentTime, ref2.current);
          ref2.current = bound;
          closure_18.current = seekableDuration;
          closure_20.current = currentTime;
          closure_1_12(progress.progress);
          closure_1_14(bound);
          closure_1_15(seekableDuration);
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
        };
        cResult[3] = onRewardEarned;
        cResult[4] = onVideoProgress;
        cResult[5] = rewardDurationMs;
        cResult[6] = fn2;
        tmp17 = fn2;
        const tmp5Result6 = onRewardEarned(obj2.useState(num3), 2);
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
      const tmp6 = onRewardEarned(onVideoProgress.useState(tmp2), 2);
    }
  : function useBountiesModalTiming(endMode) {
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
      let tmp = null != num3;
      if (tmp) {
        tmp = num >= num3 - 1;
      }
      if (tmp) {
        tmp = endMode !== onVideoLooped.LOOP;
      }
      if (tmp) {
        tmp = endMode !== onVideoLooped.APP_STORE_LOOP;
      }
      [tmp5, c11] = onRewardEarned(onVideoProgress.useState(tmp), 2);
      const tmp4 = onRewardEarned(onVideoProgress.useState(tmp), 2);
      [tmp7, c12] = onRewardEarned(
        onVideoProgress.useState(() => {
          num = 0;
          if (null != num3) {
            num = num / tmp;
          }
          return num;
        }),
        2,
      );
      const tmp6 = onRewardEarned(
        onVideoProgress.useState(() => {
          num = 0;
          if (null != num3) {
            num = num / tmp;
          }
          return num;
        }),
        2,
      );
      [tmp9, c13] = onRewardEarned(onVideoProgress.useState(null), 2);
      let tmp8 = onRewardEarned(onVideoProgress.useState(null), 2);
      [tmp11, c14] = onRewardEarned(onVideoProgress.useState(num2), 2);
      const tmp10 = onRewardEarned(onVideoProgress.useState(num2), 2);
      [tmp13, c15] = onRewardEarned(onVideoProgress.useState(num3), 2);
      onVideoProgress.useRef(isCompleted);
      onVideoProgress.useRef(num2);
      if (num3 == null) {
        num3 = 0;
      }
      onVideoProgress.useRef(num3);
      onVideoProgress.useRef(0);
      onVideoProgress.useRef(num);
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
      let tmp23 = tmp5;
      if (tmp5) {
        tmp23 = endMode !== onVideoLooped.END_CARD_WITH_CTA;
      }
      if (!isCompleted) {
        isCompleted = result > onVideoEnd;
      }
      if (isCompleted) {
        isCompleted = !tmp23;
      }
      const obj2 = {
        isCtaVisible: isCompleted,
        isEndCardVisible: tmp5,
        handleVideoEnd: callback1,
        handleVideoProgress: callback,
        handleVideoPaused: callback4,
        handleVideoResumed: callback5,
        handleReplay: callback2,
        showEndCard: callback3,
        rewardRemainingSeconds: num5,
        rewardTotalSeconds: result1,
        normalizedProgress: tmp7,
        maxVideoProgressSeconds: tmp11,
        videoDuration: tmp13,
      };
      return obj2;
    };
