// discord_app/modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import QuestConstants from "../../QuestConstants.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import AdsVideoTypes from "../AdsVideoTypes.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import VirtualCurrencyStore_mod from "../../../virtual_currency/stores/VirtualCurrencyStore.tsx";
import BountyStore from "../../BountyStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let bounty, c4, c5, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let VirtualCurrencyStore = VirtualCurrencyStore_mod;
const BOUNTY_ORB_AMOUNT = QuestConstants.BOUNTY_ORB_AMOUNT;
let jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isActive) => {
      let first;
      let ref;
      const obj = isActive(576);
      const cResult = obj.c(6);
      isActive = isActive.isActive;
      const playerRef = isActive.playerRef;
      dependencyMap = react.useRef(true);
      const ref2 = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(current) {
          ref2.current = current;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === isActive) {
        let tmp3;
        let tmp4;
        let tmp6;
        if (cResult[2] === playerRef) {
          tmp3 = cResult[3];
          tmp4 = cResult[4];
        }
        const effect = react.useEffect(tmp3, tmp4);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { handlePlayerStateChange: first };
          cResult[5] = obj3;
          tmp6 = obj3;
        } else {
          tmp6 = cResult[5];
        }
        return tmp6;
      }
      const fn2 = function y() {
        if (ref.current) {
          tmp.current = false;
        } else {
          const tmp2 = isActive && ref2.current === AdsVideoTypes.PlayerState.PAUSED;
          if (tmp2) {
            const current = playerRef.current;
            if (current != null) {
              current.play();
            }
          }
        }
      };
      const items = [isActive, playerRef];
      cResult[1] = isActive;
      cResult[2] = playerRef;
      cResult[3] = fn2;
      cResult[4] = items;
      tmp4 = items;
      tmp3 = fn2;
    }
  : (isActive) => {
      isActive = isActive.isActive;
      const playerRef = isActive.playerRef;
      const ref = react.useRef(true);
      const ref2 = react.useRef(null);
      const items = [isActive, playerRef];
      const handlePlayerStateChange = react.useCallback((current) => {
        ref2.current = current;
      }, []);
      const effect = react.useEffect(() => {
        if (ref.current) {
          tmp.current = false;
        } else {
          const tmp2 = isActive && ref2.current === AdsVideoTypes.PlayerState.PAUSED;
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bounty) => {
      let closure_4;
      let height;
      let index;
      let isActive;
      let isRecapPageRevealed;
      let isScrollIndicatorEnabled;
      let isScrollingInBoundsSharedValue;
      let obj5;
      let overrideVisibility;
      let shouldLoadHls;
      let softDownloadCapsEnabled;
      let tmp13;
      let tmp25;
      let tmp28;
      let tmp29;
      let width;
      const tmp = bounty;
      let obj = bounty(isActive[9]);
      const cResult = obj.c(99);
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      ({ width, height, index, isActive } = bounty);
      ({ isRecapPageRevealed, isScrollingInBoundsSharedValue } = bounty);
      ({ shouldLoadHls, softDownloadCapsEnabled, isScrollIndicatorEnabled } = bounty);
      const tmp4 = undefined === shouldLoadHls || shouldLoadHls;
      if (cResult[0] === height) {
        let tmp7;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [BountyStore];
          cResult[3] = items;
          tmp7 = items;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== bounty.id) {
          class L {
            constructor() {
              return BountyStore.isBountyCompleted(bounty.id);
            }
          }
          cResult[4] = bounty.id;
          cResult[5] = L;
        } else {
          class L {
            constructor() {
              return BountyStore.isBountyCompleted(bounty.id);
            }
          }
        }
        const tmpResult = tmp(isActive[11]);
        const stateFromStores = tmpResult.useStateFromStores(tmp7, L);
        [r10058, tmp13] = _slicedToArray(react.useState(tmp4), 2);
        const tmp12 = _slicedToArray(react.useState(tmp4), 2);
        const tmp14 = _slicedToArray(react.useState(tmp4), 2);
        if (tmp14[0] !== tmp4) {
          class L {
            constructor() {
              return BountyStore.isBountyCompleted(bounty.id);
            }
          }
          if (tmp4) {
            class L {
              constructor() {
                return BountyStore.isBountyCompleted(bounty.id);
              }
            }
            tmp13(true);
          }
        }
        let result = 1000 * bounty.rewardTimerSeconds;
        if (cResult[6] !== bounty) {
          class L {
            constructor() {
              return BountyStore.isBountyCompleted(bounty.id);
            }
          }
          const bountyVideoEndMode = obj5.getBountyVideoEndMode(bounty);
          cResult[6] = bounty;
          cResult[7] = bountyVideoEndMode;
        } else {
          class L {
            constructor() {
              return BountyStore.isBountyCompleted(bounty.id);
            }
          }
        }
        const ref = react.useRef(null);
        if (cResult[8] !== isActive) {
          class L {
            constructor() {
              return BountyStore.isBountyCompleted(bounty.id);
            }
          }
          tmp22[0] = isActive;
          tmp22[1] = ref;
          cResult[8] = isActive;
          cResult[9] = tmp22;
        } else {
          class L {
            constructor() {
              return BountyStore.isBountyCompleted(bounty.id);
            }
          }
        }
        const handlePlayerStateChange = closure_11(tmp22).handlePlayerStateChange;
        [tmp25, r10094] = react.useState(isActive);
        _slicedToArray(react.useState(isActive), 2);
        if (cResult[10] !== isActive) {
          class X {
            constructor() {
              let currentBalance = null;
              if (isActive) {
                currentBalance = VirtualCurrencyStore.getCurrentBalance();
              }
              return currentBalance;
            }
          }
          cResult[10] = isActive;
          cResult[11] = X;
        } else {
          class X {
            constructor() {
              let currentBalance = null;
              if (isActive) {
                currentBalance = VirtualCurrencyStore.getCurrentBalance();
              }
              return currentBalance;
            }
          }
        }
        [tmp28, tmp29] = react.useState(X);
        _slicedToArray(react.useState(X), 2);
        _slicedToArray = tmp29;
        const first = _slicedToArray(react.useState(0), 2)[0];
        _slicedToArray(react.useState(0), 2);
        if (tmp25 !== isActive) {
          class X {
            constructor() {
              let currentBalance = null;
              if (isActive) {
                currentBalance = VirtualCurrencyStore.getCurrentBalance();
              }
              return currentBalance;
            }
          }
          if (isActive) {
            class X {
              constructor() {
                let currentBalance = null;
                if (isActive) {
                  currentBalance = VirtualCurrencyStore.getCurrentBalance();
                }
                return currentBalance;
              }
            }
            let currentBalance = VirtualCurrencyStore.getCurrentBalance();
            tmp29(currentBalance);
            if (currentBalance !== tmp28) {
              class X {
                constructor() {
                  let currentBalance = null;
                  if (isActive) {
                    currentBalance = VirtualCurrencyStore.getCurrentBalance();
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
              let currentBalance = null;
              if (isActive) {
                currentBalance = VirtualCurrencyStore.getCurrentBalance();
              }
              return currentBalance;
            }
          }
        }
        let closure_0 = isScrollingInBoundsSharedValue(function* () {
          let obj3;
          let v1;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              let closure_1;
              let c0;
              c5 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_0 = tmp4;
                  closure_1 = undefined;
                  c0 = false;
                  c3 = 1;
                  v1 = 2;
                  c5 = 1;
                  const obj6 = { value: obj3.claimBountyReward(closure_0.id, closure_1), done: false };
                  obj3 = closure_0(isActive[13]);
                  return obj6;
                }
              } else {
                if (1 === v1) {
                  c3 = 0;
                  closure_1 = closure_2;
                  const obj2 = closure_0(isActive[14]);
                  const result = obj2.openBountyRewardClaimErrorToast(closure_1);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c0 = true;
                  c3 = 0;
                }
                const tmp15 = c0 && closure_2;
                if (tmp15) {
                  v1((arg0) => {
                    let sum = null;
                    if (null != arg0) {
                      sum = arg0 + closure_1_9;
                    }
                    return sum;
                  });
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp24) {
              closure_2 = tmp24;
              if (0 === c3) {
                c5 = 3;
                throw tmp24;
              } else {
                v1 = 1;
              }
            }
          }
        });
        const fn = function () {
          return closure_0(...arguments);
        };
        cResult[12] = bounty.id;
        cResult[13] = isActive;
        cResult[14] = sourceQuestContent;
        cResult[15] = fn;
      }
      size = { width, height };
      cResult[0] = height;
      cResult[1] = width;
      cResult[2] = size;
    }
  : (bounty) => {
      let BountyVideo;
      let c7;
      let duration;
      let handleBufferAnalytics;
      let handleLoadStartAnalytics;
      let handlePaused;
      let handleProgress;
      let handleReadyForDisplayAnalytics;
      let handleResumed;
      let handleVideoEnd;
      let handleVideoEndAnalytics;
      let handleVideoEndWithAppStore;
      let handleVideoErrorAnalytics;
      let handleVideoLoopedAnalytics;
      let handleVideoPaused;
      let handleVideoPausedAnalytics;
      let handleVideoProgress;
      let handleVideoResumed;
      let handleVideoResumedAnalytics;
      let handleVideoTracksAnalytics;
      let index;
      let initialProgress;
      let isCtaVisible;
      let isEndCardVisible;
      let isRecapPageOnTop;
      let isRecapPageRevealed;
      let normalizedProgress;
      let rewardRemainingSeconds;
      let rewardTotalSeconds;
      let shouldRepeatVideo;
      let showEndCard;
      let tmp17;
      let tmp18;
      let tmp20;
      let tmp21;
      let tmp7;
      let tmp8;
      const f118348 = () => {
        let currentBalance = null;
        if (isActive) {
          currentBalance = VirtualCurrencyStore.getCurrentBalance();
        }
        return currentBalance;
      };
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      let width = bounty.width;
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
      let closure_6;
      VirtualCurrencyStore = undefined;
      handleProgress = undefined;
      let flushProgress;
      let handleVideoProgressAnalytics;
      isEndCardVisible = undefined;
      let obj = isScrollingInBoundsSharedValue;
      const items = [width, height];
      const tmp3 = width;
      const memo = isScrollingInBoundsSharedValue.useMemo(() => {
        size = { width, height };
        return size;
      }, items);
      let obj2 = bounty(width[11]);
      const items1 = [handleProgress];
      const stateFromStores = obj2.useStateFromStores(items1, () => BountyStore.isBountyCompleted(bounty.id));
      [tmp7, tmp8] = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
      const tmp6 = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
      const tmp9 = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
      if (tmp9[0] !== flag) {
        tmp9[1](flag);
        if (flag) {
          tmp8(true);
        }
      }
      closure_6 = flushProgress;
      let result = 1000 * bounty.rewardTimerSeconds;
      const tmp2Result = bounty(tmp3[12]);
      const bountyVideoEndMode = tmp2Result.getBountyVideoEndMode(bounty);
      const ref = obj.useRef(null);
      const handlePlayerStateChange = isEndCardVisible({ isActive, playerRef: ref }).handlePlayerStateChange;
      [tmp17, tmp18] = isActive(obj.useState(isActive), 2);
      isActive(obj.useState(isActive), 2);
      [tmp20, tmp21] = isActive(obj.useState(f118348), 2);
      VirtualCurrencyStore = tmp21;
      isActive(obj.useState(f118348), 2);
      const first = tmp5(obj.useState(0), 2)[0];
      isActive(obj.useState(0), 2);
      const tmp12 = flushProgress;
      if (tmp17 !== isActive) {
        tmp18(isActive);
        if (isActive) {
          let currentBalance = VirtualCurrencyStore.getCurrentBalance();
          tmp21(currentBalance);
          if (currentBalance !== tmp20) {
            tmp24((arg0) => arg0 + 1);
          }
        }
      }
      const items2 = [bounty.id, isActive, tmp12, sourceQuestContent];
      const callback = obj.useCallback(
        height(function* () {
          let closure_0;
          let closure_2;
          let obj3;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              let closure_1;
              let c0;
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
                  closure_1 = tmp;
                  bounty = tmp4;
                  c0 = false;
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: obj3.claimBountyReward(bounty.id, sourceQuestContent), done: false };
                  obj3 = bounty(width[13]);
                  return obj6;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  closure_1 = width;
                  const obj2 = bounty(width[14]);
                  const result = obj2.openBountyRewardClaimErrorToast(closure_1);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c0 = true;
                  c3 = 0;
                }
                const tmp15 = c0 && closure_129_4;
                if (tmp15) {
                  closure_129_7((arg0) => {
                    let sum = null;
                    if (null != arg0) {
                      sum = arg0 + closure_1_6;
                    }
                    return sum;
                  });
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp24) {
              width = tmp24;
              if (0 === c3) {
                c5 = 3;
                throw tmp24;
              } else {
                c4 = 1;
              }
            }
          }
        }),
        items2,
      );
      let obj3 = { bountyId: bounty.id, endMode: bountyVideoEndMode };
      const tmp2Result5 = bounty(tmp3[15]);
      const bountyVideoProgressPersistence = tmp2Result5.useBountyVideoProgressPersistence(obj3);
      ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
      flushProgress = bountyVideoProgressPersistence.flushProgress;
      const items3 = [flushProgress];
      const effect = obj.useEffect(() => () => flushProgress(), items3);
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
      const tmp2Result6 = bounty(tmp3[16]);
      const bountiesModalVideoAnalytics = tmp2Result6.useBountiesModalVideoAnalytics(obj4);
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
        initialVideoDurationSec: duration,
      };
      duration = null;
      const useBountiesModalTiming = tmp2(tmp3[17]).useBountiesModalTiming;
      bounty(tmp3[17]);
      if (initialProgress.duration > 0) {
        duration = initialProgress.duration;
      }
      const bountiesModalTiming = useBountiesModalTiming(obj5);
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
      const tmp2Result8 = bounty(tmp3[12]);
      const bountyAppStoreOverlayPlayback = tmp2Result8.useBountyAppStoreOverlayPlayback({
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
      let obj6 = { style: memo, children: handleVideoProgressAnalytics(BountyVideo, size) };
      ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
      size = {
        bounty,
        sourceQuestContent,
        isCompleted: stateFromStores,
        isScrollIndicatorEnabled: flag3,
        isCtaVisible,
        isEndCardVisible,
        isProgressBarVisible: !isEndCardVisible && !isRecapPageOnTop && !isVideoEndAppStoreOverlayVisible,
        orbsBalance: tmp20,
        handleVideoEnd: handleVideoEndWithAppStore,
        handleVideoProgress,
        handleVideoPaused: handlePaused,
        handleVideoResumed: handleResumed,
        handleVideoError: handleVideoErrorAnalytics,
        onLoadStart: handleLoadStartAnalytics,
        onBuffer: handleBufferAnalytics,
        onFirstFrame: handleReadyForDisplayAnalytics,
        onVideoTracks: handleVideoTracksAnalytics,
        rewardRemainingSeconds,
        rewardTotalSeconds,
        normalizedProgress,
        repeat: shouldRepeatVideo,
        initialProgress,
        isActive,
        isRecapPageRevealed,
        isScrollingInBoundsSharedValue,
        playerRef: ref,
        onPlayerStateChange: handlePlayerStateChange,
        balanceWidgetPillResetKey: first,
        shouldLoadHls: tmp7,
        width,
        height,
        softDownloadCapsEnabled: flag2,
        renderEndCard() {
          let visible;
          const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
          return (
            <QuestContentImpressionTrackerNative
              adContentId={bounty.id}
              adCreativeType={AdCreativeType.AdCreativeType.BOUNTY}
              questContent={QuestContent.QuestContent.VIDEO_MODAL_END_CARD}
              sourceQuestContent={sourceQuestContent}
              overrideVisibility={isEndCardVisible}
            >
              {function children() {
                const obj = { bounty, visible, isActive, isScrollingInBoundsSharedValue, sourceQuestContent };
                return handleVideoProgressAnalytics(sourceQuestContent(width[21]), obj);
              }}
            </QuestContentImpressionTrackerNative>
          );
        },
      };
      BountyVideo = tmp2(tmp3[22]).BountyVideo;
      const tmp40 = closure_6;
      if (isCtaVisible) {
        isCtaVisible = !isVideoEndAppStoreOverlayVisible;
      }
      return handleVideoProgressAnalytics(tmp40, obj6);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bounty) => {
      let isActive;
      let isRecapPageOnTop;
      let isRecapPageRevealed;
      let isScrollIndicatorEnabled;
      let isScrollingInBoundsSharedValue;
      let shouldLoadHls;
      let softDownloadCapsEnabled;
      let width;
      const obj = bounty(width[9]);
      const cResult = obj.c(18);
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
            if (cResult[3] === (undefined !== isActive && isActive)) {
              if (cResult[4] === (undefined !== isRecapPageOnTop && isRecapPageOnTop)) {
                if (cResult[5] === (undefined !== isRecapPageRevealed && isRecapPageRevealed)) {
                  if (cResult[6] === (undefined !== isScrollIndicatorEnabled && isScrollIndicatorEnabled)) {
                    if (cResult[7] === isScrollingInBoundsSharedValue) {
                      if (cResult[8] === (undefined === shouldLoadHls || shouldLoadHls)) {
                        if (cResult[9] === (undefined !== softDownloadCapsEnabled && softDownloadCapsEnabled)) {
                          if (cResult[10] === sourceQuestContent) {
                            let tmp10;
                            if (cResult[11] === width) {
                              tmp10 = cResult[12];
                            }
                            if (cResult[13] === bounty.id) {
                              if (cResult[14] === (undefined !== isActive && isActive)) {
                                if (cResult[15] === sourceQuestContent) {
                                  let tmp11;
                                  if (cResult[16] === tmp10) {
                                    tmp11 = cResult[17];
                                  }
                                  return tmp11;
                                }
                              }
                            }
                            const BillableAdPlacementImpressionTrackerNative = tmp(
                              tmp2[18],
                            ).BillableAdPlacementImpressionTrackerNative;
                            const tmp13 = (
                              <BillableAdPlacementImpressionTrackerNative
                                adContentId={bounty.id}
                                adCreativeType={bounty(width[19]).AdCreativeType.BOUNTY}
                                questContent={bounty(width[20]).QuestContent.VIDEO_MODAL_MOBILE}
                                sourceQuestContent={sourceQuestContent}
                                overrideVisibility={undefined !== isActive && isActive}
                              >
                                {tmp10}
                              </BillableAdPlacementImpressionTrackerNative>
                            );
                            cResult[13] = bounty.id;
                            cResult[14] = undefined !== isActive && isActive;
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
  : (bounty) => {
      let height;
      let index;
      let isActive;
      let isScrollingInBoundsSharedValue;
      let shouldLoadHls;
      let width;
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      ({ width: dependencyMap, height: _asyncToGenerator, index: _slicedToArray, isActive } = bounty);
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
      const obj = {
        adContentId: bounty.id,
        adCreativeType: bounty(5637).AdCreativeType.BOUNTY,
        questContent: bounty(5635).QuestContent.VIDEO_MODAL_MOBILE,
        sourceQuestContent,
        overrideVisibility: isActive,
        children() {
          return (
            <closure_12
              bounty={bounty}
              sourceQuestContent={sourceQuestContent}
              width={dependencyMap}
              height={_asyncToGenerator}
              index={_slicedToArray}
              isActive={isActive}
              isRecapPageRevealed={flag}
              isRecapPageOnTop={flag2}
              isScrollingInBoundsSharedValue={BountyStore}
              shouldLoadHls={shouldLoadHls}
              softDownloadCapsEnabled={flag3}
              isScrollIndicatorEnabled={flag4}
            />
          );
        },
      };
      const BillableAdPlacementImpressionTrackerNative = bounty(10971).BillableAdPlacementImpressionTrackerNative;
      return flag3(BillableAdPlacementImpressionTrackerNative, obj);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx");

export const BountiesScrollVideoItem = tmp2;
