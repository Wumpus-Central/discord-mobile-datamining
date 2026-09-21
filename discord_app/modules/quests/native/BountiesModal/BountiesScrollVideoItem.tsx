// === Module 15291: BountiesScrollVideoItem ===

// Module 15291 (BountiesScrollVideoItem)
import QuestContent from "QuestContent" /* 5666 */;
import AdCreativeType from "AdCreativeType" /* 5668 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 12031 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15292 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9131 */;
import BountyStore from "BountyStore" /* 7938 */;

require = fn;
function BountiesScrollVideoItemInner(bounty) {
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
  ({ softDownloadCapsEnabled, videoEndPeekScale } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  let flag2 = bounty.isScrollIndicatorEnabled;
  if (flag2 === undefined) {
    flag2 = false;
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
  const stateFromStores = bounty(width[9]).useStateFromStores(items1, () => BountyStore.isBountyCompleted(bounty.id));
  let obj2 = bounty(width[9]);
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
  const bountyVideoEndMode = bounty(width[10]).getBountyVideoEndMode(bounty);
  const ref = isScrollingInBoundsSharedValue.useRef(null);
  closure_129_0 = isActive;
  closure_129_1 = ref;
  closure_129_2 = obj.useRef(true);
  closure_129_3 = obj.useRef(null);
  const items2 = [isActive, ref];
  const callback = obj.useCallback((current) => {
    height.current = current;
  }, []);
  const effect = obj.useEffect(() => {
    if (width.current) {
      tmp.current = false;
    } else {
      let tmp2 = bounty;
      if (bounty) {
        tmp2 = height.current === AdsVideoTypes.PlayerState.PAUSED;
      }
      if (tmp2) {
        const current = sourceQuestContent.current;
        if (current != null) {
          current.play();
        }
      }
    }
  }, items2);
  const tmp2Result = bounty(width[10]);
  [tmp19, tmp20] = isActive(isScrollingInBoundsSharedValue.useState(isActive), 2);
  const tmp5Result = isActive(isScrollingInBoundsSharedValue.useState(isActive), 2);
  [tmp22, tmp23] = isActive(isScrollingInBoundsSharedValue.useState(() => {
    let currentBalance = null;
    if (isActive) {
      currentBalance = VirtualCurrencyStore.getCurrentBalance();
    }
    return currentBalance;
  }), 2);
  VirtualCurrencyStore = tmp23;
  const tmp5Result3 = isActive(isScrollingInBoundsSharedValue.useState(() => {
    let currentBalance = null;
    if (isActive) {
      currentBalance = VirtualCurrencyStore.getCurrentBalance();
    }
    return currentBalance;
  }), 2);
  if (tmp19 !== isActive) {
    tmp20(isActive);
    if (isActive) {
      let currentBalance = VirtualCurrencyStore.getCurrentBalance();
      tmp23(currentBalance);
      if (currentBalance !== tmp22) {
        tmp25((arg0) => arg0 + 1);
      }
    }
  }
  const items3 = [bounty.id, isActive, tmp12, sourceQuestContent];
  const callback1 = obj.useCallback(height(function*() {
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
        return { value: "HermesInternal", done: null };
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
            const obj6 = { value: bounty(tmp27[11]).claimBountyReward(bounty.id, sourceQuestContent), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp27;
            const result = bounty(tmp27[12]).openBountyRewardClaimErrorToast(closure_128_1);
            const obj2 = bounty(tmp27[12]);
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
          return { value: "HermesInternal", done: null };
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
  }), items3);
  const tmp5Result4 = isActive(isScrollingInBoundsSharedValue.useState(0), 2);
  const bountyVideoProgressPersistence = bounty(width[13]).useBountyVideoProgressPersistence({ bountyId: bounty.id, endMode: bountyVideoEndMode });
  ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
  flushProgress = bountyVideoProgressPersistence.flushProgress;
  const items4 = [flushProgress];
  const effect1 = obj.useEffect(() => () => flushProgress(), items4);
  const obj3 = { bountyId: bounty.id, endMode: bountyVideoEndMode };
  const tmp2Result5 = bounty(width[13]);
  const bountiesModalVideoAnalytics = bounty(width[14]).useBountiesModalVideoAnalytics({ bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, initialPlaybackTimeSec: initialProgress.timestampSec, initialMaxVideoProgressSec: initialProgress.maxTimestampSec, initialVideoDurationSec: initialProgress.duration, wasPreloaded: false, verticalScrollingPosition: index, isActive });
  handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
  const items5 = [handleVideoProgressAnalytics, handleProgress];
  ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
  const callback2 = obj.useCallback((arg0, arg1, arg2) => {
    handleVideoProgressAnalytics(arg0, arg1, arg2);
    handleProgress(arg0, arg1, arg2);
  }, items5);
  let obj4 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, initialPlaybackTimeSec: initialProgress.timestampSec, initialMaxVideoProgressSec: initialProgress.maxTimestampSec, initialVideoDurationSec: initialProgress.duration, wasPreloaded: false, verticalScrollingPosition: index, isActive };
  const tmp2Result6 = bounty(width[14]);
  let obj5 = { endMode: bountyVideoEndMode, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback1, onVideoProgress: callback2, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref, initialProgressSec: initialProgress.timestampSec, initialMaxVideoProgressSec: initialProgress.maxTimestampSec, initialVideoDurationSec: null };
  let duration = null;
  if (initialProgress.duration > 0) {
    duration = initialProgress.duration;
  }
  obj5.initialVideoDurationSec = duration;
  const bountiesModalTiming = bounty(width[15]).useBountiesModalTiming(obj5);
  ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
  ({ handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
  const tmp2Result7 = bounty(width[15]);
  const bountyAppStoreOverlayPlayback = bounty(width[10]).useBountyAppStoreOverlayPlayback({ bounty, sourceQuestContent, isActive, endMode: bountyVideoEndMode, playerRef: ref, handleVideoEnd, handleVideoPaused, handleVideoResumed, showEndCard, onPaused: flushProgress });
  const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
  let obj6 = { style: memo, children: null };
  ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
  let size = { bounty, sourceQuestContent, isCompleted: stateFromStores, isScrollIndicatorEnabled: flag2, isCtaVisible: null, isEndCardVisible: null, isProgressBarVisible: null, orbsBalance: null, handleVideoEnd: null, handleVideoProgress: null, handleVideoPaused: null, handleVideoResumed: null, handleVideoError: null, onLoadStart: null, onBuffer: null, onFirstFrame: null, onVideoTracks: null, rewardRemainingSeconds: null, rewardTotalSeconds: null, normalizedProgress: null, repeat: null, initialProgress: null, isActive: null, isRecapPageRevealed: null, isScrollingInBoundsSharedValue: null, playerRef: null, onPlayerStateChange: null, balanceWidgetPillResetKey: null, shouldLoadHls: null, width: null, height: null, videoEndPeekScale: null, softDownloadCapsEnabled: null, renderEndCard: null };
  if (isCtaVisible) {
    isCtaVisible = !isVideoEndAppStoreOverlayVisible;
  }
  size.isCtaVisible = isCtaVisible;
  size.isEndCardVisible = isEndCardVisible;
  let tmp41 = !isEndCardVisible;
  if (!isEndCardVisible) {
    tmp41 = !isRecapPageOnTop;
  }
  if (tmp41) {
    tmp41 = !isVideoEndAppStoreOverlayVisible;
  }
  size.isProgressBarVisible = tmp41;
  size.orbsBalance = tmp22;
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
  size.onPlayerStateChange = callback;
  size.balanceWidgetPillResetKey = tmp5Result4[0];
  size.shouldLoadHls = tmp7;
  size.width = width;
  size.height = height;
  size.videoEndPeekScale = videoEndPeekScale;
  size.softDownloadCapsEnabled = softDownloadCapsEnabled;
  size.renderEndCard = function renderEndCard() {
    return jsx(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
      adContentId: bounty.id,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
      sourceQuestContent,
      overrideVisibility: isEndCardVisible,
      children() {
        return handleVideoProgressAnalytics(sourceQuestContent(width[20]), { bounty, visible, isActive, isScrollingInBoundsSharedValue, sourceQuestContent });
      }
    });
  };
  obj6.children = handleVideoProgressAnalytics(bounty(width[16]).BountyVideo, size);
  return handleVideoProgressAnalytics(closure_6, obj6);
}
const View = fn(17).View;
const BOUNTY_ORB_AMOUNT = fn(5661).BOUNTY_ORB_AMOUNT;
const jsx = fn(21).jsx;
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx");

export const BountiesScrollVideoItem = function BountiesScrollVideoItem(bounty) {
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
  ({ videoEndPeekScale: jsx, softDownloadCapsEnabled } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  let flag3 = bounty.isScrollIndicatorEnabled;
  if (flag3 === undefined) {
    flag3 = false;
  }
  return jsx(bounty(12031).BillableAdPlacementImpressionTrackerNative, {
    adContentId: bounty.id,
    adCreativeType: bounty(5668).AdCreativeType.BOUNTY,
    questContent: bounty(5666).QuestContent.VIDEO_MODAL_MOBILE,
    sourceQuestContent,
    overrideVisibility: isActive,
    children() {
      const size = { bounty, sourceQuestContent, width, height, index, isActive, isRecapPageRevealed: flag, isRecapPageOnTop: flag2, isScrollingInBoundsSharedValue, shouldLoadHls, videoEndPeekScale, softDownloadCapsEnabled, isScrollIndicatorEnabled: flag3 };
      return <BountiesScrollVideoItemInner bounty={bounty} sourceQuestContent={sourceQuestContent} width={width} height={height} index={index} isActive={isActive} isRecapPageRevealed={flag} isRecapPageOnTop={flag2} isScrollingInBoundsSharedValue={isScrollingInBoundsSharedValue} shouldLoadHls={shouldLoadHls} videoEndPeekScale={videoEndPeekScale} softDownloadCapsEnabled={softDownloadCapsEnabled} isScrollIndicatorEnabled={flag3} />;
    }
  });
};