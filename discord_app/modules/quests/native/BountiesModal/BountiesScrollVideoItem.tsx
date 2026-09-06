// === Module 15014: BountiesScrollVideoItemInner ===

// Module 15014 (BountiesScrollVideoItemInner)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "redeemError" /* 8852 */;
import closure_8 from "set" /* 7702 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5444 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function BountiesScrollVideoItemInner(bounty) {
  bounty = bounty.bounty;
  let isActive = bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let ref = sourceQuestContent;
  const width = bounty.width;
  dependencyMap = width;
  const height = bounty.height;
  let callback = height;
  isActive = bounty.isActive;
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
  let stateFromStores;
  orbAmount = undefined;
  let result1;
  ref = undefined;
  c10 = undefined;
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
  const memo = isScrollingInBoundsSharedValue.useMemo(() => ({ width: closure_2, height: closure_3 }), items);
  obj1 = isActive(504);
  const items1 = [result1];
  stateFromStores = obj1.useStateFromStores(items1, () => result1.isBountyCompleted(isActive.id));
  [tmp7, tmp8] = isActive(isScrollingInBoundsSharedValue.useState(flag2), 2);
  const tmp9 = isActive(isScrollingInBoundsSharedValue.useState(flag2), 2);
  if (tmp9[0] !== flag2) {
    tmp9[1](flag2);
    if (flag2) {
      tmp8(true);
    }
  }
  let tmp2Result = tmp2(11520);
  const bountiesExperience = tmp2Result.useBountiesExperience(ref.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, orbAmount } = bountiesExperience);
  ({ scrollAffordanceVariant, stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  let LOOP = tmp2(15016).BountyVideoEndMode.END_CARD_WITH_CTA;
  if (loopingEnabled) {
    LOOP = tmp2(15016).BountyVideoEndMode.LOOP;
  } else if (ownedByVerticalScrollExperiment) {
    tmp2Result = tmp2(15017);
    let result = tmp2Result.canUseBountyVideoEndAppStoreOverlay(bounty, scrollAffordanceVariant);
    const BountyVideoEndMode = tmp2(15016).BountyVideoEndMode;
    LOOP = result ? BountyVideoEndMode.APP_STORE_LOOP : BountyVideoEndMode.END_CARD;
  }
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      result1 = 1000 * bounty.rewardTimerSeconds;
    }
    ref = obj.useRef(null);
    dependencyMap = undefined;
    callback = undefined;
    dependencyMap = obj.useRef(true);
    callback = obj.useRef(null);
    const items2 = [isActive, ref];
    callback = obj.useCallback((current) => {
      closure_3.current = current;
    }, []);
    const effect = obj.useEffect(() => {
      if (ref.current) {
        tmp.current = false;
      } else {
        let tmp2 = isActive;
        if (isActive) {
          tmp2 = ref2.current === isActive(ref[8]).PlayerState.PAUSED;
        }
        if (tmp2) {
          const current = ref.current;
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
        currentBalance = orbAmount.getCurrentBalance();
      }
      return currentBalance;
    }), 2);
    [tmp24, tmp25] = tmp5Result;
    c10 = tmp25;
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
    const callback1 = obj.useCallback(callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              c0 = tmp7;
              c0 = false;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(closure_1_2[13]).claimBountyReward(closure_1_0.id, closure_1_1);
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_1 = closure_2;
              obj1 = closure_1_0(closure_1_2[14]);
              const result = obj1.openBountyRewardClaimErrorToast(closure_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c0 = true;
              c3 = 0;
            }
            let tmp18 = c0;
            if (c0) {
              tmp18 = c4;
            }
            if (tmp18) {
              closure_1_10((arg0) => {
                let sum = null;
                if (null != arg0) {
                  sum = arg0 + closure_7;
                }
                return sum;
              });
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp27) {
          closure_2 = tmp27;
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
    obj = { bountyId: null, endMode: null };
    obj[0] = bounty.id;
    obj[1] = LOOP;
    const bountyVideoProgressPersistence = tmp2(15020).useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    const items4 = [flushProgress];
    const effect1 = obj.useEffect(() => () => callback(), items4);
    const tmp2Result1 = tmp2(15020);
    obj = { bountyId: null, sourceQuestContent: null, rewardDurationMs: null, initialPlaybackTimeSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null, wasPreloaded: false, startupPath: null, verticalScrollingPosition: null, isActive: null };
    obj[0] = bounty.id;
    obj[1] = sourceQuestContent;
    obj[2] = result1;
    ({ timestampSec: obj8[3], maxTimestampSec: obj8[4], duration: obj8[5] } = initialProgress);
    let str = "carousel";
    if (ownedByVerticalScrollExperiment) {
      str = "active_only";
    }
    obj[7] = str;
    obj[8] = index;
    obj[9] = isActive;
    const bountiesModalVideoAnalytics = tmp2(15021).useBountiesModalVideoAnalytics(obj);
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
    const tmp2Result2 = tmp2(15021);
    obj1 = { endMode: null, rewardDurationMs: null, isCompleted: null, onRewardEarned: null, onVideoProgress: null, onVideoEnd: null, onVideoLooped: null, onVideoPaused: null, onVideoResumed: null, playerRef: null, initialProgressSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null };
    obj1[0] = LOOP;
    obj1[1] = result1;
    obj1[2] = stateFromStores;
    obj1[3] = callback1;
    obj1[4] = callback2;
    obj1[5] = handleVideoEndAnalytics;
    obj1[6] = handleVideoLoopedAnalytics;
    obj1[7] = handleVideoPausedAnalytics;
    obj1[8] = handleVideoResumedAnalytics;
    obj1[9] = ref;
    ({ timestampSec: obj10[10], maxTimestampSec: obj10[11] } = initialProgress);
    let duration = null;
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj1[12] = duration;
    const bountiesModalTiming = tmp2(15016).useBountiesModalTiming(obj1);
    ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
    handleVideoEnd = bountiesModalTiming.handleVideoEnd;
    handleVideoPaused = bountiesModalTiming.handleVideoPaused;
    handleVideoResumed = bountiesModalTiming.handleVideoResumed;
    ({ handleReplay: c22, handleVideoProgress, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
    const tmp2Result3 = tmp2(15016);
    const obj2 = { bounty: null, sourceQuestContent: null, isActive: null, endMode: null, onOverlayUnavailable: null };
    obj2[0] = bounty;
    obj2[1] = sourceQuestContent;
    obj2[2] = isActive;
    obj2[3] = LOOP;
    obj2[4] = showEndCard;
    onVideoEndForAppStore = tmp2(15017).useBountyVideoEndAppStoreOverlay(obj2).onVideoEndForAppStore;
    const tmp2Result4 = tmp2(15017);
    const bountyVideoEndAppStoreContext = tmp2(15017).useBountyVideoEndAppStoreContext();
    let flag5;
    if (bountyVideoEndAppStoreContext != null) {
      flag5 = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    if (flag5 == null) {
      flag5 = false;
    }
    const tmp2Result5 = tmp2(15017);
    const obj3 = { bounty: null, sourceQuestContent: null, isActive: null, playerRef: null };
    obj3[0] = bounty;
    obj3[1] = sourceQuestContent;
    obj3[2] = isActive;
    obj3[3] = ref;
    onPausedForAppStore = tmp2(15023).useBountyPauseAppStoreSheet(obj3).onPausedForAppStore;
    const CustomAppStoreSqueezeBackExperiment = tmp2(11489).CustomAppStoreSqueezeBackExperiment;
    const obj4 = { location: null };
    obj4[0] = ref.VIDEO_MODAL_MOBILE;
    const config = CustomAppStoreSqueezeBackExperiment.getConfig(obj4);
    const tmp47 = config.enabled && tmp48 === tmp2(11489).BountiesCtrExperiment1Variant.ENTIRE_VIDEO_CLICKABLE && isActive && !isEndCardVisible;
    closure_25 = tmp47;
    const tmp2Result6 = tmp2(15023);
    getQuestImpressionId = tmp2(11486).useGetQuestImpressionId();
    const items6 = [, , , ];
    ({ cta: arr7[0], id: arr7[1] } = bounty);
    items6[2] = getQuestImpressionId;
    items6[3] = sourceQuestContent;
    callback3 = obj.useCallback(() => {
      let obj = isActive(ref[20]);
      obj = { adContentId: isActive.id, adCreativeType: isActive(ref[21]).AdCreativeType.BOUNTY, cta: isActive.cta };
      obj = { content: isActive(ref[22]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: isActive(ref[23]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: ref };
      const result = obj.openAdGameLinkDirectlyFromBountyEntireVideoTap(obj, obj);
    }, items6);
    const items7 = [callback3, handleVideoPaused, isEndCardVisible, tmp47, onPaused, ref, onPausedForAppStore];
    const items8 = [handleVideoResumed, onResumed];
    const callback4 = obj.useCallback((arg0) => {
      if (closure_25) {
        if (arg0 === isActive(ref[8]).PlaybackTriggerSource.USER_INTERACTION) {
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
      loopingEnabled = LOOP === tmp2(15016).BountyVideoEndMode.APP_STORE_LOOP;
    }
    const obj5 = { style: null, children: null };
    obj5[0] = memo;
    const obj6 = { bounty: null, sourceQuestContent: null, isCompleted: null, isCtaVisible: null, isEndCardVisible: null, isScrollIndicatorEnabled: null, isProgressBarVisible: null, orbsBalance: null, handleVideoEnd: null, handleVideoProgress: null, handleVideoPaused: null, handleVideoResumed: null, handleVideoError: null, onLoadStart: null, onBuffer: null, onFirstFrame: null, onVideoTracks: null, rewardRemainingSeconds: null, rewardTotalSeconds: null, normalizedProgress: null, repeat: null, initialProgress: null, isActive: null, isRecapPageRevealed: null, isScrollingInBoundsSharedValue: null, playerRef: null, onPlayerStateChange: null, balanceWidgetPillResetKey: null, shouldLoadHls: null, width: null, height: null, peekScale: null, videoEndPeekScale: null, softDownloadCapsEnabled: null, renderEndCard: null };
    obj6[0] = bounty;
    obj6[1] = sourceQuestContent;
    obj6[2] = stateFromStores;
    if (isCtaVisible) {
      isCtaVisible = !flag5;
    }
    obj6[3] = isCtaVisible;
    obj6[4] = isEndCardVisible;
    if (flag) {
      flag = !flag5;
    }
    obj6[5] = flag;
    let tmp57 = !isEndCardVisible;
    if (!isEndCardVisible) {
      tmp57 = !isRecapPageOnTop;
    }
    if (tmp57) {
      tmp57 = !flag5;
    }
    obj6[6] = tmp57;
    obj6[7] = tmp24;
    obj6[8] = callback6;
    obj6[9] = handleVideoProgress;
    obj6[10] = callback4;
    obj6[11] = callback5;
    obj6[12] = handleVideoErrorAnalytics;
    obj6[13] = handleLoadStartAnalytics;
    obj6[14] = handleBufferAnalytics;
    obj6[15] = handleReadyForDisplayAnalytics;
    obj6[16] = handleVideoTracksAnalytics;
    obj6[17] = rewardRemainingSeconds;
    obj6[18] = rewardTotalSeconds;
    obj6[19] = normalizedProgress;
    obj6[20] = loopingEnabled;
    obj6[21] = initialProgress;
    obj6[22] = isActive;
    obj6[23] = isRecapPageRevealed;
    obj6[24] = isScrollingInBoundsSharedValue;
    obj6[25] = ref;
    obj6[26] = callback;
    obj6[27] = tmp5Result1[0];
    obj6[28] = tmp7;
    obj6[29] = width;
    obj6[30] = height;
    obj6[31] = peekScale;
    obj6[32] = videoEndPeekScale;
    obj6[33] = softDownloadCapsEnabled;
    obj6[34] = function renderEndCard() {
      return _undefined(isActive(ref[25]).QuestContentImpressionTrackerNative, {
        adContentId: isActive.id,
        adCreativeType: isActive(ref[21]).AdCreativeType.BOUNTY,
        questContent: isActive(ref[22]).QuestContent.VIDEO_MODAL_END_CARD,
        sourceQuestContent: ref,
        overrideVisibility: isEndCardVisible,
        children() {
          return closure_1_10(closure_1_1(closure_1_2[26]), { bounty: closure_0, visible: closure_18, onReplay: closure_22, isActive: closure_4, isScrollingInBoundsSharedValue: closure_5, sourceQuestContent: closure_1 });
        }
      });
    };
    obj5[1] = c10(tmp2(15024).BountyVideo, obj6);
    return c10(stateFromStores, obj5);
  }
  result1 = 1000 * rewardTimerSeconds;
}
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx");

export const BountiesScrollVideoItem = function BountiesScrollVideoItem(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  ({ width: dependencyMap, height: closure_3, index: closure_4, isActive } = bounty);
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
  ({ isScrollingInBoundsSharedValue: closure_8, isScrollIndicatorOverlayEnabled } = bounty);
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
      return flag3(closure_1_11, { bounty, sourceQuestContent, width: closure_2, height: closure_3, index: closure_4, isActive, isRecapPageRevealed: flag, isRecapPageOnTop: flag2, isScrollingInBoundsSharedValue: closure_8, isScrollIndicatorOverlayEnabled, shouldLoadHls: flag3, scrollAffordance: closure_11, peekScale: closure_12, videoEndPeekScale: closure_13, softDownloadCapsEnabled });
    }
  });
};