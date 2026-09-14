// discord_app/modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import AdsVideoTypes from "../AdsVideoTypes.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import VirtualCurrencyStore from "../../../virtual_currency/stores/VirtualCurrencyStore.tsx";
import BountyStore from "../../BountyStore.tsx";

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
  let ref;
  c8 = undefined;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  isEndCardVisible = undefined;
  let handleVideoEnd;
  let handleVideoPaused;
  let handleVideoResumed;
  let onVideoEndForAppStore;
  let onPausedForAppStore;
  closure_18 = undefined;
  let getQuestImpressionId;
  let callback3;
  const items = [width, height];
  const memo = isScrollingInBoundsSharedValue.useMemo(() => {
    const size = { width, height };
    return size;
  }, items);
  const items1 = [c8];
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
  closure_6 = handleProgress;
  let result = 1000 * bounty.rewardTimerSeconds;
  const tmp12 = handleProgress;
  const tmp6 = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
  const result1 = bounty(width[10]).canUseBountyVideoEndAppStoreOverlay(bounty);
  const BountyVideoEndMode = tmp2(tmp3[11]).BountyVideoEndMode;
  const tmp15 = result1 ? BountyVideoEndMode.APP_STORE_LOOP : BountyVideoEndMode.END_CARD;
  ref = obj.useRef(null);
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
  [tmp20, tmp21] = isActive(isScrollingInBoundsSharedValue.useState(isActive), 2);
  const tmp5Result = isActive(isScrollingInBoundsSharedValue.useState(isActive), 2);
  [tmp23, tmp24] = isActive(
    isScrollingInBoundsSharedValue.useState(() => {
      let currentBalance = null;
      if (isActive) {
        currentBalance = VirtualCurrencyStore.getCurrentBalance();
      }
      return currentBalance;
    }),
    2,
  );
  c8 = tmp24;
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
  if (tmp20 !== isActive) {
    tmp21(isActive);
    if (isActive) {
      let currentBalance = ref.getCurrentBalance();
      tmp24(currentBalance);
      if (currentBalance !== tmp23) {
        tmp26((arg0) => arg0 + 1);
      }
    }
  }
  const items3 = [bounty.id, isActive, tmp12, sourceQuestContent];
  const callback1 = obj.useCallback(
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
              const obj6 = { value: bounty(tmp27[12]).claimBountyReward(bounty.id, sourceQuestContent), done: false };
              return obj6;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = tmp27;
              const result = bounty(tmp27[13]).openBountyRewardClaimErrorToast(closure_128_1);
              const obj2 = bounty(tmp27[13]);
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
              closure_129_8((arg0) => {
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
    }),
    items3,
  );
  const tmp5Result4 = isActive(isScrollingInBoundsSharedValue.useState(0), 2);
  const bountyVideoProgressPersistence = bounty(width[14]).useBountyVideoProgressPersistence({
    bountyId: bounty.id,
    endMode: tmp15,
  });
  ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
  flushProgress = bountyVideoProgressPersistence.flushProgress;
  const items4 = [flushProgress];
  const effect1 = obj.useEffect(() => () => flushProgress(), items4);
  const obj3 = { bountyId: bounty.id, endMode: tmp15 };
  const tmp2Result8 = bounty(width[14]);
  const bountiesModalVideoAnalytics = bounty(width[15]).useBountiesModalVideoAnalytics({
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
  const items5 = [handleVideoProgressAnalytics, handleProgress];
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
  const callback2 = obj.useCallback((arg0, arg1, arg2) => {
    handleVideoProgressAnalytics(arg0, arg1, arg2);
    handleProgress(arg0, arg1, arg2);
  }, items5);
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
  const tmp2Result9 = bounty(width[15]);
  let obj5 = {
    endMode: tmp15,
    rewardDurationMs: result,
    isCompleted: stateFromStores,
    onRewardEarned: callback1,
    onVideoProgress: callback2,
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
  const bountiesModalTiming = bounty(width[11]).useBountiesModalTiming(obj5);
  ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
  handleVideoEnd = bountiesModalTiming.handleVideoEnd;
  handleVideoPaused = bountiesModalTiming.handleVideoPaused;
  handleVideoResumed = bountiesModalTiming.handleVideoResumed;
  ({ handleVideoProgress, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } =
    bountiesModalTiming);
  const tmp2Result10 = bounty(width[11]);
  onVideoEndForAppStore = bounty(width[10]).useBountyVideoEndAppStoreOverlay({
    bounty,
    sourceQuestContent,
    isActive,
    endMode: tmp15,
    onOverlayUnavailable: showEndCard,
  }).onVideoEndForAppStore;
  const tmp2Result11 = bounty(width[10]);
  const bountyVideoEndAppStoreContext = bounty(width[10]).useBountyVideoEndAppStoreContext();
  let flag4;
  if (bountyVideoEndAppStoreContext != null) {
    flag4 = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
  }
  if (flag4 == null) {
    flag4 = false;
  }
  const tmp2Result12 = bounty(width[10]);
  onPausedForAppStore = bounty(width[16]).useBountyPauseAppStoreSheet({
    bounty,
    sourceQuestContent,
    isActive,
    playerRef: ref,
  }).onPausedForAppStore;
  const CustomAppStoreSqueezeBackExperiment = tmp2(tmp3[17]).CustomAppStoreSqueezeBackExperiment;
  const config = CustomAppStoreSqueezeBackExperiment.getConfig({ location: flushProgress.VIDEO_MODAL_MOBILE });
  const tmp41 =
    config.enabled &&
    tmp42 === bounty(width[17]).BountiesCtrExperiment1Variant.ENTIRE_VIDEO_CLICKABLE &&
    isActive &&
    !isEndCardVisible;
  closure_18 = tmp41;
  let obj6 = { location: flushProgress.VIDEO_MODAL_MOBILE };
  const tmp2Result13 = bounty(width[16]);
  getQuestImpressionId = bounty(width[18]).useGetQuestImpressionId();
  const items6 = [, , ,];
  ({ cta: arr7[0], id: arr7[1] } = bounty);
  items6[2] = getQuestImpressionId;
  items6[3] = sourceQuestContent;
  callback3 = obj.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
    const result = obj.openAdGameLinkDirectlyFromBountyEntireVideoTap(obj2, {
      content: QuestContent.QuestContent.VIDEO_MODAL_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent,
    });
  }, items6);
  const items7 = [callback3, handleVideoPaused, tmp41, onPausedForAppStore, ref];
  const items8 = [handleVideoResumed];
  const callback4 = obj.useCallback((arg0) => {
    if (closure_18) {
      if (arg0 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
        callback3();
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
    handleVideoPaused(arg0);
    onPausedForAppStore(arg0);
  }, items7);
  const items9 = [handleVideoEnd, onVideoEndForAppStore];
  const callback5 = obj.useCallback((arg0) => {
    handleVideoResumed(arg0);
  }, items8);
  const callback6 = obj.useCallback(() => {
    handleVideoEnd();
    onVideoEndForAppStore();
  }, items9);
  const obj7 = { style: memo, children: null };
  let size = {
    bounty,
    sourceQuestContent,
    isCompleted: stateFromStores,
    isScrollIndicatorEnabled: flag2,
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
    videoEndPeekScale: null,
    softDownloadCapsEnabled: null,
    renderEndCard: null,
  };
  if (isCtaVisible) {
    isCtaVisible = !flag4;
  }
  size.isCtaVisible = isCtaVisible;
  size.isEndCardVisible = isEndCardVisible;
  let tmp50 = !isEndCardVisible;
  if (!isEndCardVisible) {
    tmp50 = !isRecapPageOnTop;
  }
  if (tmp50) {
    tmp50 = !flag4;
  }
  size.isProgressBarVisible = tmp50;
  size.orbsBalance = tmp23;
  size.handleVideoEnd = callback6;
  size.handleVideoProgress = handleVideoProgress;
  size.handleVideoPaused = callback4;
  size.handleVideoResumed = callback5;
  size.handleVideoError = handleVideoErrorAnalytics;
  size.onLoadStart = handleLoadStartAnalytics;
  size.onBuffer = handleBufferAnalytics;
  size.onFirstFrame = handleReadyForDisplayAnalytics;
  size.onVideoTracks = handleVideoTracksAnalytics;
  size.rewardRemainingSeconds = rewardRemainingSeconds;
  size.rewardTotalSeconds = rewardTotalSeconds;
  size.normalizedProgress = normalizedProgress;
  size.repeat = tmp15 === bounty(width[11]).BountyVideoEndMode.APP_STORE_LOOP;
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
        return handleVideoProgressAnalytics(sourceQuestContent(width[25]), {
          bounty,
          visible,
          isActive,
          isScrollingInBoundsSharedValue,
          sourceQuestContent,
        });
      },
    });
  };
  obj7.children = handleVideoProgressAnalytics(bounty(width[23]).BountyVideo, size);
  return handleVideoProgressAnalytics(closure_6, obj7);
}
const View = fn(17).View;
const QuestConstants = fn(5525);
({ BOUNTY_ORB_AMOUNT: closure_9, QuestsExperimentLocations: c10 } = QuestConstants);
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
  ({ videoEndPeekScale: closure_10, softDownloadCapsEnabled } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  let flag3 = bounty.isScrollIndicatorEnabled;
  if (flag3 === undefined) {
    flag3 = false;
  }
  return softDownloadCapsEnabled(bounty(11908).BillableAdPlacementImpressionTrackerNative, {
    adContentId: bounty.id,
    adCreativeType: bounty(5532).AdCreativeType.BOUNTY,
    questContent: bounty(5530).QuestContent.VIDEO_MODAL_MOBILE,
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
        videoEndPeekScale,
        softDownloadCapsEnabled,
        isScrollIndicatorEnabled: flag3,
      };
      return (
        <BountiesScrollVideoItemInner
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
          videoEndPeekScale={videoEndPeekScale}
          softDownloadCapsEnabled={softDownloadCapsEnabled}
          isScrollIndicatorEnabled={flag3}
        />
      );
    },
  });
};
