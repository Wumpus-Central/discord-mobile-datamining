// discord_app/modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import AdsVideoTypes from "../AdsVideoTypes.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import VirtualCurrencyStore from "../../../virtual_currency/stores/VirtualCurrencyStore.tsx";
import BountyStore from "../../BountyStore.tsx";

require = fn;
const View = fn(17).View;
const BOUNTY_ORB_AMOUNT = fn(5972).BOUNTY_ORB_AMOUNT;
let jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useResumeOnActive(isActive) {
      const cResult = isActive(576).c(6);
      isActive = isActive.isActive;
      const playerRef = isActive.playerRef;
      dependencyMap = noop.useRef(true);
      asyncGeneratorStep = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(current) {
          closure_3.current = current;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === isActive) {
        if (cResult[2] === playerRef) {
          let tmp3 = cResult[3];
          let tmp4 = cResult[4];
        }
        const effect = noop.useEffect(tmp3, tmp4);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { handlePlayerStateChange: first };
          cResult[5] = obj3;
          let tmp6 = obj3;
        } else {
          tmp6 = cResult[5];
        }
        return tmp6;
      }
      class S {
        constructor() {
          if (closure_2.current) {
            flag = false;
            tmp.current = false;
          } else {
            tmp2 = isActive;
            if (isActive) {
              tmp3 = closure_3;
              tmp4 = closure_0;
              tmp5 = closure_2;
              tmp2 = closure_3.current === closure_0(closure_2[10]).PlayerState.PAUSED;
            }
            if (tmp2) {
              tmp6 = playerRef;
              current = playerRef.current;
              tmp7 = null;
              if (current != null) {
                playResult = current.play();
              }
            }
          }
          return;
        }
      }
      const items = [isActive, playerRef];
      cResult[1] = isActive;
      cResult[2] = playerRef;
      cResult[3] = S;
      cResult[4] = items;
      tmp4 = items;
      tmp3 = S;
      const obj = isActive(576);
    }
  : function useResumeOnActive(isActive) {
      isActive = isActive.isActive;
      const playerRef = isActive.playerRef;
      noop.useRef(true);
      noop.useRef(null);
      const items = [isActive, playerRef];
      const handlePlayerStateChange = noop.useCallback((current) => {
        closure_3.current = current;
      }, []);
      const effect = noop.useEffect(() => {
        if (ref.current) {
          tmp.current = false;
        } else {
          let tmp2 = isActive;
          if (isActive) {
            tmp2 = ref2.current === AdsVideoTypes.PlayerState.PAUSED;
          }
          if (tmp2) {
            const current = playerRef.current;
            if (current != null) {
              current.play();
            }
          }
        }
      }, items);
      return { handlePlayerStateChange };
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BountiesScrollVideoItemInner(bounty) {
      const cResult = require("c").c(99);
      bounty = bounty.bounty;
      _require = bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      ({ width, height, index, isActive } = bounty);
      ({ isRecapPageRevealed, isScrollingInBoundsSharedValue } = bounty);
      ({ shouldLoadHls, softDownloadCapsEnabled, isScrollIndicatorEnabled } = bounty);
      let tmp4 = undefined === shouldLoadHls;
      if (!tmp4) {
        tmp4 = shouldLoadHls;
      }
      if (cResult[0] === height) {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [BountyStore];
          cResult[3] = items;
          let tmp7 = items;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== bounty.id) {
          class L {
            constructor() {
              return closure_8.isBountyCompleted(closure_0.id);
            }
          }
          cResult[4] = bounty.id;
          cResult[5] = L;
        } else {
          class L {
            constructor() {
              return closure_8.isBountyCompleted(closure_0.id);
            }
          }
        }
        const stateFromStores = tmp(isActive[11]).useStateFromStores(tmp7, L);
        const tmpResult = tmp(isActive[11]);
        [r10058, tmp13] = noop.useState(tmp4);
        const tmp12 = _slicedToArray(noop.useState(tmp4), 2);
        if (tmp14[0] !== tmp4) {
          class L {
            constructor() {
              return closure_8.isBountyCompleted(closure_0.id);
            }
          }
          if (tmp4) {
            class L {
              constructor() {
                return closure_8.isBountyCompleted(closure_0.id);
              }
            }
            tmp13(true);
          }
        }
        let result = 1000 * bounty.rewardTimerSeconds;
        if (cResult[6] !== bounty) {
          class L {
            constructor() {
              return closure_8.isBountyCompleted(closure_0.id);
            }
          }
          const bountyVideoEndMode = obj5.getBountyVideoEndMode(bounty);
          cResult[6] = bounty;
          cResult[7] = bountyVideoEndMode;
        } else {
          class L {
            constructor() {
              return closure_8.isBountyCompleted(closure_0.id);
            }
          }
        }
        tmp14 = _slicedToArray(noop.useState(tmp4), 2);
        if (cResult[8] !== isActive) {
          class L {
            constructor() {
              return closure_8.isBountyCompleted(closure_0.id);
            }
          }
          tmp22[0] = isActive;
          tmp22[1] = ref;
          cResult[8] = isActive;
          cResult[9] = tmp22;
        } else {
          class L {
            constructor() {
              return closure_8.isBountyCompleted(closure_0.id);
            }
          }
        }
        const handlePlayerStateChange = closure_11(tmp22).handlePlayerStateChange;
        ref = noop.useRef(null);
        [tmp25, r10094] = noop.useState(isActive);
        if (cResult[10] !== isActive) {
          class X {
            constructor() {
              currentBalance = null;
              if (isActive) {
                tmp2 = closure_7;
                currentBalance = closure_7.getCurrentBalance();
              }
              return currentBalance;
            }
          }
          cResult[10] = isActive;
          cResult[11] = X;
        } else {
          class X {
            constructor() {
              currentBalance = null;
              if (isActive) {
                tmp2 = closure_7;
                currentBalance = closure_7.getCurrentBalance();
              }
              return currentBalance;
            }
          }
        }
        const tmp11Result = _slicedToArray(noop.useState(isActive), 2);
        [tmp28, tmp29] = noop.useState(X);
        _slicedToArray = tmp29;
        const tmp11Result3 = _slicedToArray(noop.useState(X), 2);
        const first = _slicedToArray(noop.useState(0), 2)[0];
        if (tmp25 !== isActive) {
          class X {
            constructor() {
              currentBalance = null;
              if (isActive) {
                tmp2 = closure_7;
                currentBalance = closure_7.getCurrentBalance();
              }
              return currentBalance;
            }
          }
          if (isActive) {
            class X {
              constructor() {
                currentBalance = null;
                if (isActive) {
                  tmp2 = closure_7;
                  currentBalance = closure_7.getCurrentBalance();
                }
                return currentBalance;
              }
            }
            let currentBalance = VirtualCurrencyStore.getCurrentBalance();
            tmp29(currentBalance);
            if (currentBalance !== tmp28) {
              class X {
                constructor() {
                  currentBalance = null;
                  if (isActive) {
                    tmp2 = closure_7;
                    currentBalance = closure_7.getCurrentBalance();
                  }
                  return currentBalance;
                }
              }
            }
          }
        }
        if (cResult[12] === bounty.id) {
          class X {
            constructor() {
              currentBalance = null;
              if (isActive) {
                tmp2 = closure_7;
                currentBalance = closure_7.getCurrentBalance();
              }
              return currentBalance;
            }
          }
        }
        _require = isScrollingInBoundsSharedValue(function* () {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: "+51" };
            }
          } else {
            try {
              c5 = 2;
              if (0 === v2) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_1 = tmp3;
                  user = tmp7;
                  closure_128_1 = undefined;
                  closure_128_0 = false;
                  c3 = 1;
                  v2 = 2;
                  c5 = 1;
                  const obj6 = { value: user(isActive[13]).claimBountyReward(user.id, closure_1), done: false };
                  return obj6;
                }
              } else {
                if (1 === tmp7) {
                  c3 = 0;
                  closure_128_1 = closure_2;
                  const result = user(isActive[14]).openBountyRewardClaimErrorToast(closure_128_1);
                  const obj2 = user(isActive[14]);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = true;
                  c3 = 0;
                }
                let tmp18 = closure_128_0;
                if (closure_128_0) {
                  tmp18 = closure_2;
                }
                if (tmp18) {
                  v2((arg0) => {
                    let sum = null;
                    if (null != arg0) {
                      sum = arg0 + closure_1_9;
                    }
                    return sum;
                  });
                }
                c5 = 3;
                return { value: "IconComponent", done: "+51" };
              }
            } catch (tmp27) {
              closure_2 = tmp27;
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp27;
              } else {
                v2 = tmp;
              }
            }
          }
        });
        function t10() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[12] = bounty.id;
        cResult[13] = isActive;
        cResult[14] = sourceQuestContent;
        cResult[15] = t10;
        const tmp11Result4 = _slicedToArray(noop.useState(0), 2);
      }
      const size = { width, height };
      cResult[0] = height;
      cResult[1] = width;
      cResult[2] = size;
      let obj = require("c");
      tmp = _require;
    }
  : function BountiesScrollVideoItemInner(bounty) {
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      const width = bounty.width;
      const height = bounty.height;
      const isActive = bounty.isActive;
      const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
      let flag = bounty.shouldLoadHls;
      ({ index, isRecapPageRevealed, isRecapPageOnTop } = bounty);
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = bounty.softDownloadCapsEnabled;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let flag3 = bounty.isScrollIndicatorEnabled;
      if (flag3 === undefined) {
        flag3 = false;
      }
      closure_6 = undefined;
      VirtualCurrencyStore = undefined;
      handleProgress = undefined;
      let flushProgress;
      let handleVideoProgressAnalytics;
      isEndCardVisible = undefined;
      const items = [width, height];
      const memo = isScrollingInBoundsSharedValue.useMemo(() => {
        const size = { width, height };
        return size;
      }, items);
      const items1 = [handleProgress];
      const stateFromStores = bounty(width[11]).useStateFromStores(items1, () =>
        BountyStore.isBountyCompleted(bounty.id),
      );
      let obj2 = bounty(width[11]);
      [tmp7, tmp8] = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
      const tmp9 = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
      if (tmp9[0] !== flag) {
        tmp9[1](flag);
        if (flag) {
          tmp8(true);
        }
      }
      closure_6 = flushProgress;
      let result = 1000 * bounty.rewardTimerSeconds;
      const tmp12 = flushProgress;
      const tmp6 = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
      const bountyVideoEndMode = bounty(width[12]).getBountyVideoEndMode(bounty);
      const ref = isScrollingInBoundsSharedValue.useRef(null);
      const tmp2Result = bounty(width[12]);
      [tmp17, tmp18] = isActive(isScrollingInBoundsSharedValue.useState(isActive), 2);
      const tmp5Result = isActive(isScrollingInBoundsSharedValue.useState(isActive), 2);
      [tmp20, tmp21] = isActive(
        isScrollingInBoundsSharedValue.useState(() => {
          let currentBalance = null;
          if (isActive) {
            currentBalance = VirtualCurrencyStore.getCurrentBalance();
          }
          return currentBalance;
        }),
        2,
      );
      VirtualCurrencyStore = tmp21;
      const tmp5Result3 = isActive(
        isScrollingInBoundsSharedValue.useState(() => {
          let currentBalance = null;
          if (isActive) {
            currentBalance = VirtualCurrencyStore.getCurrentBalance();
          }
          return currentBalance;
        }),
        2,
      );
      if (tmp17 !== isActive) {
        tmp18(isActive);
        if (isActive) {
          let currentBalance = VirtualCurrencyStore.getCurrentBalance();
          tmp21(currentBalance);
          if (currentBalance !== tmp20) {
            tmp23((arg0) => arg0 + 1);
          }
        }
      }
      const items2 = [bounty.id, isActive, tmp12, sourceQuestContent];
      const callback = obj.useCallback(
        height(function* () {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: "+51" };
            }
          } else {
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_1 = tmp3;
                  bounty = tmp7;
                  closure_128_0 = false;
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj6 = {
                    value: bounty(tmp27[13]).claimBountyReward(bounty.id, sourceQuestContent),
                    done: false,
                  };
                  return obj6;
                }
              } else {
                if (1 === tmp7) {
                  c3 = 0;
                  closure_128_1 = tmp27;
                  const result = bounty(tmp27[14]).openBountyRewardClaimErrorToast(closure_128_1);
                  const obj2 = bounty(tmp27[14]);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = true;
                  c3 = 0;
                }
                let tmp18 = closure_128_0;
                if (closure_128_0) {
                  tmp18 = closure_129_4;
                }
                if (tmp18) {
                  closure_129_7((arg0) => {
                    let sum = null;
                    if (null != arg0) {
                      sum = arg0 + closure_1_6;
                    }
                    return sum;
                  });
                }
                c5 = 3;
                return { value: "IconComponent", done: "+51" };
              }
            } catch (tmp27) {
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp27;
              } else {
                c4 = tmp;
              }
            }
          }
        }),
        items2,
      );
      const tmp5Result4 = isActive(isScrollingInBoundsSharedValue.useState(0), 2);
      const bountyVideoProgressPersistence = bounty(width[15]).useBountyVideoProgressPersistence({
        bountyId: bounty.id,
        endMode: bountyVideoEndMode,
      });
      ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
      flushProgress = bountyVideoProgressPersistence.flushProgress;
      const items3 = [flushProgress];
      const effect = obj.useEffect(() => () => flushProgress(), items3);
      const obj3 = { bountyId: bounty.id, endMode: bountyVideoEndMode };
      const tmp2Result5 = bounty(width[15]);
      const bountiesModalVideoAnalytics = bounty(width[16]).useBountiesModalVideoAnalytics({
        bountyId: bounty.id,
        sourceQuestContent,
        rewardDurationMs: result,
        initialPlaybackTimeSec: initialProgress.timestampSec,
        initialMaxVideoProgressSec: initialProgress.maxTimestampSec,
        initialVideoDurationSec: initialProgress.duration,
        wasPreloaded: false,
        verticalScrollingPosition: index,
        isActive,
      });
      handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
      const items4 = [handleVideoProgressAnalytics, handleProgress];
      ({
        handleVideoEndAnalytics,
        handleVideoLoopedAnalytics,
        handleVideoPausedAnalytics,
        handleVideoResumedAnalytics,
        handleVideoErrorAnalytics,
        handleLoadStartAnalytics,
        handleVideoTracksAnalytics,
        handleReadyForDisplayAnalytics,
        handleBufferAnalytics,
      } = bountiesModalVideoAnalytics);
      const callback1 = obj.useCallback((arg0, arg1, arg2) => {
        handleVideoProgressAnalytics(arg0, arg1, arg2);
        handleProgress(arg0, arg1, arg2);
      }, items4);
      let obj4 = {
        bountyId: bounty.id,
        sourceQuestContent,
        rewardDurationMs: result,
        initialPlaybackTimeSec: initialProgress.timestampSec,
        initialMaxVideoProgressSec: initialProgress.maxTimestampSec,
        initialVideoDurationSec: initialProgress.duration,
        wasPreloaded: false,
        verticalScrollingPosition: index,
        isActive,
      };
      const tmp2Result6 = bounty(width[16]);
      let obj5 = {
        endMode: bountyVideoEndMode,
        rewardDurationMs: result,
        isCompleted: stateFromStores,
        onRewardEarned: callback,
        onVideoProgress: callback1,
        onVideoEnd: handleVideoEndAnalytics,
        onVideoLooped: handleVideoLoopedAnalytics,
        onVideoPaused: handleVideoPausedAnalytics,
        onVideoResumed: handleVideoResumedAnalytics,
        playerRef: ref,
        initialProgressSec: initialProgress.timestampSec,
        initialMaxVideoProgressSec: initialProgress.maxTimestampSec,
        initialVideoDurationSec: null,
      };
      let duration = null;
      if (initialProgress.duration > 0) {
        duration = initialProgress.duration;
      }
      obj5.initialVideoDurationSec = duration;
      const bountiesModalTiming = bounty(width[17]).useBountiesModalTiming(obj5);
      ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
      ({
        handleVideoEnd,
        handleVideoProgress,
        handleVideoPaused,
        handleVideoResumed,
        showEndCard,
        rewardRemainingSeconds,
        rewardTotalSeconds,
        normalizedProgress,
      } = bountiesModalTiming);
      const tmp2Result7 = bounty(width[17]);
      const bountyAppStoreOverlayPlayback = bounty(width[12]).useBountyAppStoreOverlayPlayback({
        bounty,
        sourceQuestContent,
        isActive,
        endMode: bountyVideoEndMode,
        playerRef: ref,
        handleVideoEnd,
        handleVideoPaused,
        handleVideoResumed,
        showEndCard,
        onPaused: flushProgress,
      });
      const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
      let obj6 = { style: memo, children: null };
      ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
      let size = {
        bounty,
        sourceQuestContent,
        isCompleted: stateFromStores,
        isScrollIndicatorEnabled: flag3,
        isCtaVisible: null,
        isEndCardVisible: null,
        isProgressBarVisible: null,
        orbsBalance: null,
        handleVideoEnd: null,
        handleVideoProgress: null,
        handleVideoPaused: null,
        handleVideoResumed: null,
        handleVideoError: null,
        onLoadStart: null,
        onBuffer: null,
        onFirstFrame: null,
        onVideoTracks: null,
        rewardRemainingSeconds: null,
        rewardTotalSeconds: null,
        normalizedProgress: null,
        repeat: null,
        initialProgress: null,
        isActive: null,
        isRecapPageRevealed: null,
        isScrollingInBoundsSharedValue: null,
        playerRef: null,
        onPlayerStateChange: null,
        balanceWidgetPillResetKey: null,
        shouldLoadHls: null,
        width: null,
        height: null,
        softDownloadCapsEnabled: null,
        renderEndCard: null,
      };
      if (isCtaVisible) {
        isCtaVisible = !isVideoEndAppStoreOverlayVisible;
      }
      size.isCtaVisible = isCtaVisible;
      size.isEndCardVisible = isEndCardVisible;
      let tmp39 = !isEndCardVisible;
      if (!isEndCardVisible) {
        tmp39 = !isRecapPageOnTop;
      }
      if (tmp39) {
        tmp39 = !isVideoEndAppStoreOverlayVisible;
      }
      size.isProgressBarVisible = tmp39;
      size.orbsBalance = tmp20;
      size.handleVideoEnd = handleVideoEndWithAppStore;
      size.handleVideoProgress = handleVideoProgress;
      size.handleVideoPaused = handlePaused;
      size.handleVideoResumed = handleResumed;
      size.handleVideoError = handleVideoErrorAnalytics;
      size.onLoadStart = handleLoadStartAnalytics;
      size.onBuffer = handleBufferAnalytics;
      size.onFirstFrame = handleReadyForDisplayAnalytics;
      size.onVideoTracks = handleVideoTracksAnalytics;
      size.rewardRemainingSeconds = rewardRemainingSeconds;
      size.rewardTotalSeconds = rewardTotalSeconds;
      size.normalizedProgress = normalizedProgress;
      size.repeat = shouldRepeatVideo;
      size.initialProgress = initialProgress;
      size.isActive = isActive;
      size.isRecapPageRevealed = isRecapPageRevealed;
      size.isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue;
      size.playerRef = ref;
      size.onPlayerStateChange = isEndCardVisible({ isActive, playerRef: ref }).handlePlayerStateChange;
      size.balanceWidgetPillResetKey = tmp5Result4[0];
      size.shouldLoadHls = tmp7;
      size.width = width;
      size.height = height;
      size.softDownloadCapsEnabled = flag2;
      size.renderEndCard = function renderEndCard() {
        return jsx(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
          adContentId: bounty.id,
          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
          questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
          sourceQuestContent,
          overrideVisibility: isEndCardVisible,
          children() {
            return handleVideoProgressAnalytics(sourceQuestContent(width[21]), {
              bounty,
              visible,
              isActive,
              isScrollingInBoundsSharedValue,
              sourceQuestContent,
            });
          },
        });
      };
      obj6.children = handleVideoProgressAnalytics(bounty(width[22]).BountyVideo, size);
      return handleVideoProgressAnalytics(closure_6, obj6);
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx");

export const BountiesScrollVideoItem = ReactCompilerGating.isReactCompilerEnabled()
  ? function BountiesScrollVideoItem(bounty) {
      const cResult = bounty(width[9]).c(18);
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      width = bounty.width;
      const height = bounty.height;
      const index = bounty.index;
      ({ isActive, isRecapPageRevealed, isRecapPageOnTop, isScrollingInBoundsSharedValue } = bounty);
      ({ shouldLoadHls, softDownloadCapsEnabled, isScrollIndicatorEnabled } = bounty);
      isActive = tmp4;
      isRecapPageRevealed = tmp5;
      isRecapPageOnTop = tmp6;
      shouldLoadHls = tmp7;
      jsx = tmp8;
      isScrollIndicatorEnabled = tmp9;
      if (cResult[0] === bounty) {
        if (cResult[1] === height) {
          if (cResult[2] === index) {
            if (cResult[3] === tmp4) {
              if (cResult[4] === tmp6) {
                if (cResult[5] === tmp5) {
                  if (cResult[6] === tmp9) {
                    if (cResult[7] === isScrollingInBoundsSharedValue) {
                      if (cResult[8] === tmp7) {
                        if (cResult[9] === tmp8) {
                          if (cResult[10] === sourceQuestContent) {
                            if (cResult[11] === width) {
                              let tmp10 = cResult[12];
                            }
                            if (cResult[13] === bounty.id) {
                              if (cResult[14] === tmp4) {
                                if (cResult[15] === sourceQuestContent) {
                                  if (cResult[16] === tmp10) {
                                    let tmp11 = cResult[17];
                                  }
                                  return tmp11;
                                }
                              }
                            }
                            const obj2 = {
                              adContentId: bounty.id,
                              adCreativeType: tmp(tmp2[19]).AdCreativeType.BOUNTY,
                              questContent: tmp(tmp2[20]).QuestContent.VIDEO_MODAL_MOBILE,
                              sourceQuestContent,
                              overrideVisibility: tmp4,
                              children: tmp10,
                            };
                            const tmp13 = jsx(tmp(tmp2[18]).BillableAdPlacementImpressionTrackerNative, {
                              adContentId: bounty.id,
                              adCreativeType: tmp(tmp2[19]).AdCreativeType.BOUNTY,
                              questContent: tmp(tmp2[20]).QuestContent.VIDEO_MODAL_MOBILE,
                              sourceQuestContent,
                              overrideVisibility: tmp4,
                              children: tmp10,
                            });
                            cResult[13] = bounty.id;
                            cResult[14] = tmp4;
                            cResult[15] = sourceQuestContent;
                            cResult[16] = tmp10;
                            cResult[17] = tmp13;
                            tmp11 = tmp13;
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
      const fn = function o() {
        const size = {
          bounty,
          sourceQuestContent,
          width,
          height,
          index,
          isActive,
          isRecapPageRevealed,
          isRecapPageOnTop,
          isScrollingInBoundsSharedValue,
          shouldLoadHls,
          softDownloadCapsEnabled,
          isScrollIndicatorEnabled,
        };
        return (
          <closure_12
            bounty={bounty}
            sourceQuestContent={sourceQuestContent}
            width={width}
            height={height}
            index={index}
            isActive={isActive}
            isRecapPageRevealed={isRecapPageRevealed}
            isRecapPageOnTop={isRecapPageOnTop}
            isScrollingInBoundsSharedValue={isScrollingInBoundsSharedValue}
            shouldLoadHls={shouldLoadHls}
            softDownloadCapsEnabled={softDownloadCapsEnabled}
            isScrollIndicatorEnabled={isScrollIndicatorEnabled}
          />
        );
      };
      cResult[0] = bounty;
      cResult[1] = height;
      cResult[2] = index;
      cResult[3] = undefined !== isActive && isActive;
      cResult[4] = undefined !== isRecapPageOnTop && isRecapPageOnTop;
      cResult[5] = undefined !== isRecapPageRevealed && isRecapPageRevealed;
      cResult[6] = undefined !== isScrollIndicatorEnabled && isScrollIndicatorEnabled;
      cResult[7] = isScrollingInBoundsSharedValue;
      cResult[8] = undefined === shouldLoadHls || shouldLoadHls;
      cResult[9] = undefined !== softDownloadCapsEnabled && softDownloadCapsEnabled;
      cResult[10] = sourceQuestContent;
      cResult[11] = width;
      cResult[12] = fn;
      tmp10 = fn;
    }
  : function BountiesScrollVideoItem(bounty) {
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      ({ width: dependencyMap, height: asyncGeneratorStep, index: _slicedToArray, isActive } = bounty);
      if (isActive === undefined) {
        isActive = false;
      }
      let flag = bounty.isRecapPageRevealed;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = bounty.isRecapPageOnTop;
      if (flag2 === undefined) {
        flag2 = false;
      }
      ({ isScrollingInBoundsSharedValue: BountyStore, shouldLoadHls } = bounty);
      if (shouldLoadHls === undefined) {
        shouldLoadHls = true;
      }
      let flag3 = bounty.softDownloadCapsEnabled;
      if (flag3 === undefined) {
        flag3 = false;
      }
      let flag4 = bounty.isScrollIndicatorEnabled;
      if (flag4 === undefined) {
        flag4 = false;
      }
      return flag3(bounty(12981).BillableAdPlacementImpressionTrackerNative, {
        adContentId: bounty.id,
        adCreativeType: bounty(5979).AdCreativeType.BOUNTY,
        questContent: bounty(5977).QuestContent.VIDEO_MODAL_MOBILE,
        sourceQuestContent,
        overrideVisibility: isActive,
        children() {
          const size = {
            bounty,
            sourceQuestContent,
            width,
            height,
            index,
            isActive,
            isRecapPageRevealed: flag,
            isRecapPageOnTop: flag2,
            isScrollingInBoundsSharedValue,
            shouldLoadHls,
            softDownloadCapsEnabled: flag3,
            isScrollIndicatorEnabled: flag4,
          };
          return (
            <closure_12
              bounty={bounty}
              sourceQuestContent={sourceQuestContent}
              width={width}
              height={height}
              index={index}
              isActive={isActive}
              isRecapPageRevealed={flag}
              isRecapPageOnTop={flag2}
              isScrollingInBoundsSharedValue={isScrollingInBoundsSharedValue}
              shouldLoadHls={shouldLoadHls}
              softDownloadCapsEnabled={flag3}
              isScrollIndicatorEnabled={flag4}
            />
          );
        },
      });
    };
