// === Module 15014: BountiesScrollVideoItem ===

// Module 15014 (BountiesScrollVideoItem)
import QuestContent from "QuestContent" /* 5449 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11496 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 11778 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15015 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 8852 */;
import BountyStore from "BountyStore" /* 7702 */;

require = fn;
function BountiesScrollVideoItemInner(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const width = bounty.width;
  const height = bounty.height;
  const isActive = bounty.isActive;
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  let flag = bounty.isScrollIndicatorOverlayEnabled;
  ({ index, isRecapPageRevealed, isRecapPageOnTop } = bounty);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = bounty.shouldLoadHls;
  if (flag2 === undefined) {
    flag2 = true;
  }
  ({ scrollAffordance, softDownloadCapsEnabled, peekScale, videoEndPeekScale } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  orbAmount = undefined;
  let result1;
  let ref;
  jsx = undefined;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  let onPlaybackTimeChange;
  let onPaused;
  let onResumed;
  let onEndCardVisible;
  isEndCardVisible = undefined;
  let handleVideoEnd;
  let handleVideoPaused;
  let handleVideoResumed;
  c22 = undefined;
  let onVideoEndForAppStore;
  let onPausedForAppStore;
  closure_25 = undefined;
  let getQuestImpressionId;
  let callback3;
  let obj = isScrollingInBoundsSharedValue;
  const items = [width, height];
  const memo = isScrollingInBoundsSharedValue.useMemo(() => {
    const size = { width, height };
    return size;
  }, items);
  let obj1 = bounty(width[9]);
  const items1 = [result1];
  const stateFromStores = obj1.useStateFromStores(items1, () => BountyStore.isBountyCompleted(bounty.id));
  [tmp7, tmp8] = isActive(isScrollingInBoundsSharedValue.useState(flag2), 2);
  const tmp9 = isActive(isScrollingInBoundsSharedValue.useState(flag2), 2);
  if (tmp9[0] !== flag2) {
    tmp9[1](flag2);
    if (flag2) {
      tmp8(true);
    }
  }
  let tmp2Result = tmp2(tmp3[10]);
  const bountiesExperience = tmp2Result.useBountiesExperience(ref.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, orbAmount } = bountiesExperience);
  ({ scrollAffordanceVariant, stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  let LOOP = tmp2(tmp3[11]).BountyVideoEndMode.END_CARD_WITH_CTA;
  if (loopingEnabled) {
    LOOP = tmp2(tmp3[11]).BountyVideoEndMode.LOOP;
  } else if (ownedByVerticalScrollExperiment) {
    tmp2Result = tmp2(tmp3[12]);
    let result = tmp2Result.canUseBountyVideoEndAppStoreOverlay(bounty, scrollAffordanceVariant);
    const BountyVideoEndMode = tmp2(tmp3[11]).BountyVideoEndMode;
    LOOP = result ? BountyVideoEndMode.APP_STORE_LOOP : BountyVideoEndMode.END_CARD;
  }
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      result1 = 1000 * bounty.rewardTimerSeconds;
    }
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
    let tmp5Result = tmp5(obj.useState(isActive), 2);
    [tmp21, tmp22] = tmp5Result;
    tmp5Result = tmp5(obj.useState(() => {
      let currentBalance = null;
      if (isActive) {
        currentBalance = VirtualCurrencyStore.getCurrentBalance();
      }
      return currentBalance;
    }), 2);
    [tmp24, tmp25] = tmp5Result;
    jsx = tmp25;
    if (tmp21 !== isActive) {
      tmp22(isActive);
      if (isActive) {
        let currentBalance = orbAmount.getCurrentBalance();
        tmp25(currentBalance);
        if (currentBalance !== tmp24) {
          tmp27((arg0) => arg0 + 1);
        }
      }
    }
    const items3 = [bounty.id, isActive, orbAmount, sourceQuestContent];
    const callback1 = obj.useCallback(height(function*(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              bounty = tmp7;
              closure_128_0 = false;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              let obj1 = { value: bounty(tmp27[13]).claimBountyReward(bounty.id, sourceQuestContent), done: false };
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = tmp27;
              obj1 = bounty(tmp27[14]);
              const result = obj1.openBountyRewardClaimErrorToast(closure_128_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
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
              closure_129_10((arg0) => {
                let sum = null;
                if (null != arg0) {
                  sum = arg0 + closure_1_7;
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
    const tmp5Result1 = tmp5(obj.useState(0), 2);
    obj = { bountyId: bounty.id, endMode: LOOP };
    const bountyVideoProgressPersistence = tmp2(tmp3[15]).useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    const items4 = [flushProgress];
    const effect1 = obj.useEffect(() => () => flushProgress(), items4);
    const tmp2Result1 = tmp2(tmp3[15]);
    obj = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result1, initialPlaybackTimeSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null, wasPreloaded: false, startupPath: null, verticalScrollingPosition: null, isActive: null };
    ({ timestampSec: obj8.initialPlaybackTimeSec, maxTimestampSec: obj8.initialMaxVideoProgressSec, duration: obj8.initialVideoDurationSec } = initialProgress);
    let str = "carousel";
    if (ownedByVerticalScrollExperiment) {
      str = "active_only";
    }
    obj.startupPath = str;
    obj.verticalScrollingPosition = index;
    obj.isActive = isActive;
    const bountiesModalVideoAnalytics = tmp2(tmp3[16]).useBountiesModalVideoAnalytics(obj);
    handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
    onPlaybackTimeChange = undefined;
    ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
    if (scrollAffordance != null) {
      onPlaybackTimeChange = scrollAffordance.onPlaybackTimeChange;
    }
    onPaused = undefined;
    if (scrollAffordance != null) {
      onPaused = scrollAffordance.onPaused;
    }
    onResumed = undefined;
    if (scrollAffordance != null) {
      onResumed = scrollAffordance.onResumed;
    }
    onEndCardVisible = undefined;
    if (scrollAffordance != null) {
      onEndCardVisible = scrollAffordance.onEndCardVisible;
    }
    const items5 = [handleVideoProgressAnalytics, handleProgress, stateFromStores, onPlaybackTimeChange, result1];
    const callback2 = obj.useCallback((arg0, arg1, arg2) => {
      handleVideoProgressAnalytics(arg0, arg1, arg2);
      handleProgress(arg0, arg1, arg2);
      if (onPlaybackTimeChange != null) {
        let tmp5 = stateFromStores;
        if (!stateFromStores) {
          tmp5 = 1000 * arg0 >= result1;
        }
        tmp3(arg2, arg1, tmp5, arg0, stateFromStores);
      }
    }, items5);
    const tmp2Result2 = tmp2(tmp3[16]);
    obj1 = { endMode: LOOP, rewardDurationMs: result1, isCompleted: stateFromStores, onRewardEarned: callback1, onVideoProgress: callback2, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref, initialProgressSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null };
    ({ timestampSec: obj10.initialProgressSec, maxTimestampSec: obj10.initialMaxVideoProgressSec } = initialProgress);
    let duration = null;
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj1.initialVideoDurationSec = duration;
    const bountiesModalTiming = tmp2(tmp3[11]).useBountiesModalTiming(obj1);
    ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
    handleVideoEnd = bountiesModalTiming.handleVideoEnd;
    handleVideoPaused = bountiesModalTiming.handleVideoPaused;
    handleVideoResumed = bountiesModalTiming.handleVideoResumed;
    ({ handleReplay: c22, handleVideoProgress, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
    const tmp2Result3 = tmp2(tmp3[11]);
    const obj2 = { bounty, sourceQuestContent, isActive, endMode: LOOP, onOverlayUnavailable: showEndCard };
    onVideoEndForAppStore = tmp2(tmp3[12]).useBountyVideoEndAppStoreOverlay(obj2).onVideoEndForAppStore;
    const tmp2Result4 = tmp2(tmp3[12]);
    const bountyVideoEndAppStoreContext = tmp2(tmp3[12]).useBountyVideoEndAppStoreContext();
    let flag5;
    if (bountyVideoEndAppStoreContext != null) {
      flag5 = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    if (flag5 == null) {
      flag5 = false;
    }
    const tmp2Result5 = tmp2(tmp3[12]);
    const obj3 = { bounty, sourceQuestContent, isActive, playerRef: ref };
    onPausedForAppStore = tmp2(tmp3[17]).useBountyPauseAppStoreSheet(obj3).onPausedForAppStore;
    const CustomAppStoreSqueezeBackExperiment = tmp2(tmp3[18]).CustomAppStoreSqueezeBackExperiment;
    const obj4 = { location: ref.VIDEO_MODAL_MOBILE };
    const config = CustomAppStoreSqueezeBackExperiment.getConfig(obj4);
    const tmp47 = config.enabled && tmp48 === tmp2(tmp3[18]).BountiesCtrExperiment1Variant.ENTIRE_VIDEO_CLICKABLE && isActive && !isEndCardVisible;
    closure_25 = tmp47;
    const tmp2Result6 = tmp2(tmp3[17]);
    getQuestImpressionId = tmp2(tmp3[19]).useGetQuestImpressionId();
    const items6 = [, , , ];
    ({ cta: arr7[0], id: arr7[1] } = bounty);
    items6[2] = getQuestImpressionId;
    items6[3] = sourceQuestContent;
    callback3 = obj.useCallback(() => {
      let obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
      obj = { content: QuestContent.QuestContent.VIDEO_MODAL_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
      const result = obj.openAdGameLinkDirectlyFromBountyEntireVideoTap(obj, obj);
    }, items6);
    const items7 = [callback3, handleVideoPaused, isEndCardVisible, tmp47, onPaused, ref, onPausedForAppStore];
    const items8 = [handleVideoResumed, onResumed];
    const callback4 = obj.useCallback((arg0) => {
      if (closure_25) {
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
      if (!isEndCardVisible) {
        if (onPaused != null) {
          onPaused();
        }
      }
    }, items7);
    const items9 = [isActive, isEndCardVisible, onEndCardVisible];
    const callback5 = obj.useCallback((arg0) => {
      handleVideoResumed(arg0);
      if (onResumed != null) {
        onResumed();
      }
    }, items8);
    const effect2 = obj.useEffect(() => {
      let tmp = isEndCardVisible;
      if (isEndCardVisible) {
        tmp = isActive;
      }
      if (tmp) {
        if (onEndCardVisible != null) {
          tmp2();
        }
      }
    }, items9);
    const items10 = [handleVideoEnd, onVideoEndForAppStore];
    const callback6 = obj.useCallback(() => {
      handleVideoEnd();
      onVideoEndForAppStore();
    }, items10);
    if (!loopingEnabled) {
      loopingEnabled = LOOP === tmp2(tmp3[11]).BountyVideoEndMode.APP_STORE_LOOP;
    }
    const obj5 = { style: memo, children: null };
    let size = { bounty, sourceQuestContent, isCompleted: stateFromStores, isCtaVisible: null, isEndCardVisible: null, isScrollIndicatorEnabled: null, isProgressBarVisible: null, orbsBalance: null, handleVideoEnd: null, handleVideoProgress: null, handleVideoPaused: null, handleVideoResumed: null, handleVideoError: null, onLoadStart: null, onBuffer: null, onFirstFrame: null, onVideoTracks: null, rewardRemainingSeconds: null, rewardTotalSeconds: null, normalizedProgress: null, repeat: null, initialProgress: null, isActive: null, isRecapPageRevealed: null, isScrollingInBoundsSharedValue: null, playerRef: null, onPlayerStateChange: null, balanceWidgetPillResetKey: null, shouldLoadHls: null, width: null, height: null, peekScale: null, videoEndPeekScale: null, softDownloadCapsEnabled: null, renderEndCard: null };
    if (isCtaVisible) {
      isCtaVisible = !flag5;
    }
    size.isCtaVisible = isCtaVisible;
    size.isEndCardVisible = isEndCardVisible;
    if (flag) {
      flag = !flag5;
    }
    size.isScrollIndicatorEnabled = flag;
    let tmp57 = !isEndCardVisible;
    if (!isEndCardVisible) {
      tmp57 = !isRecapPageOnTop;
    }
    if (tmp57) {
      tmp57 = !flag5;
    }
    size.isProgressBarVisible = tmp57;
    size.orbsBalance = tmp24;
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
    size.repeat = loopingEnabled;
    size.initialProgress = initialProgress;
    size.isActive = isActive;
    size.isRecapPageRevealed = isRecapPageRevealed;
    size.isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue;
    size.playerRef = ref;
    size.onPlayerStateChange = callback;
    size.balanceWidgetPillResetKey = tmp5Result1[0];
    size.shouldLoadHls = tmp7;
    size.width = width;
    size.height = height;
    size.peekScale = peekScale;
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
          return c10(sourceQuestContent(width[26]), { bounty, visible, onReplay, isActive, isScrollingInBoundsSharedValue, sourceQuestContent });
        }
      });
    };
    obj5.children = jsx(tmp2(tmp3[24]).BountyVideo, size);
    return jsx(stateFromStores, obj5);
  }
  result1 = 1000 * rewardTimerSeconds;
}
const View = fn(17).View;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
let jsx = fn(21).jsx;
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
  ({ isScrollingInBoundsSharedValue: BountyStore, isScrollIndicatorOverlayEnabled } = bounty);
  if (isScrollIndicatorOverlayEnabled === undefined) {
    isScrollIndicatorOverlayEnabled = false;
  }
  let flag3 = bounty.shouldLoadHls;
  if (flag3 === undefined) {
    flag3 = true;
  }
  ({ scrollAffordance: BountiesScrollVideoItemInner, peekScale: closure_12, videoEndPeekScale: closure_13, softDownloadCapsEnabled } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  return flag3(bounty(11778).BillableAdPlacementImpressionTrackerNative, {
    adContentId: bounty.id,
    adCreativeType: bounty(5451).AdCreativeType.BOUNTY,
    questContent: bounty(5449).QuestContent.VIDEO_MODAL_MOBILE,
    sourceQuestContent,
    overrideVisibility: isActive,
    children() {
      const size = { bounty, sourceQuestContent, width, height, index, isActive, isRecapPageRevealed: flag, isRecapPageOnTop: flag2, isScrollingInBoundsSharedValue, isScrollIndicatorOverlayEnabled, shouldLoadHls: flag3, scrollAffordance, peekScale, videoEndPeekScale, softDownloadCapsEnabled };
      return <BountiesScrollVideoItemInner bounty={bounty} sourceQuestContent={sourceQuestContent} width={width} height={height} index={index} isActive={isActive} isRecapPageRevealed={flag} isRecapPageOnTop={flag2} isScrollingInBoundsSharedValue={isScrollingInBoundsSharedValue} isScrollIndicatorOverlayEnabled={isScrollIndicatorOverlayEnabled} shouldLoadHls={flag3} scrollAffordance={scrollAffordance} peekScale={peekScale} videoEndPeekScale={videoEndPeekScale} softDownloadCapsEnabled={softDownloadCapsEnabled} />;
    }
  });
};