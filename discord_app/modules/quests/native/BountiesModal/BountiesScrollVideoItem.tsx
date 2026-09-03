// discord_app/modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../virtual_currency/stores/VirtualCurrencyStore.tsx";
import closure_8 from "../../BountyStore.tsx";
import { QuestsExperimentLocations } from "../../QuestConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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
  QuestsExperimentLocations = undefined;
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
  c21 = undefined;
  let onVideoEndForAppStore;
  let obj = isScrollingInBoundsSharedValue;
  const items = [width, height];
  const memo = isScrollingInBoundsSharedValue.useMemo(() => ({ width: closure_2, height: closure_3 }), items);
  obj1 = isActive(586);
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
  let tmp2Result = tmp2(11344);
  const bountiesExperience = tmp2Result.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, orbAmount } = bountiesExperience);
  ({ scrollAffordanceVariant, stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  let LOOP = tmp2(14860).BountyVideoEndMode.END_CARD_WITH_CTA;
  if (loopingEnabled) {
    LOOP = tmp2(14860).BountyVideoEndMode.LOOP;
  } else if (ownedByVerticalScrollExperiment) {
    tmp2Result = tmp2(14861);
    let result = tmp2Result.canUseBountyVideoEndAppStoreOverlay(bounty, scrollAffordanceVariant);
    const BountyVideoEndMode = tmp2(14860).BountyVideoEndMode;
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
    [tmp20, tmp21] = tmp5Result;
    tmp5Result = tmp5(
      obj.useState(() => {
        let currentBalance = null;
        if (isActive) {
          currentBalance = orbAmount.getCurrentBalance();
        }
        return currentBalance;
      }),
      2,
    );
    [tmp23, tmp24] = tmp5Result;
    QuestsExperimentLocations = tmp24;
    if (tmp20 !== isActive) {
      tmp21(isActive);
      if (isActive) {
        let currentBalance = orbAmount.getCurrentBalance();
        tmp24(currentBalance);
        if (currentBalance !== tmp23) {
          tmp26((arg0) => arg0 + 1);
        }
      }
    }
    const items3 = [bounty.id, isActive, orbAmount, sourceQuestContent];
    const callback1 = obj.useCallback(
      callback(function* () {
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
                closure_1_9((arg0) => {
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
      }),
      items3,
    );
    const tmp5Result1 = tmp5(obj.useState(0), 2);
    obj = { bountyId: null, endMode: null };
    obj[0] = bounty.id;
    obj[1] = LOOP;
    const bountyVideoProgressPersistence = tmp2(14864).useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    const items4 = [flushProgress];
    const effect1 = obj.useEffect(() => () => callback(), items4);
    const tmp2Result1 = tmp2(14864);
    obj = {
      bountyId: null,
      sourceQuestContent: null,
      rewardDurationMs: null,
      initialPlaybackTimeSec: null,
      initialMaxVideoProgressSec: null,
      initialVideoDurationSec: null,
      wasPreloaded: false,
      startupPath: null,
      verticalScrollingPosition: null,
      isActive: null,
    };
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
    const bountiesModalVideoAnalytics = tmp2(14865).useBountiesModalVideoAnalytics(obj);
    handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
    onPlaybackTimeChange = undefined;
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
    const tmp2Result2 = tmp2(14865);
    obj1 = {
      endMode: null,
      rewardDurationMs: null,
      isCompleted: null,
      onRewardEarned: null,
      onVideoProgress: null,
      onVideoEnd: null,
      onVideoLooped: null,
      onVideoPaused: null,
      onVideoResumed: null,
      playerRef: null,
      initialProgressSec: null,
      initialMaxVideoProgressSec: null,
      initialVideoDurationSec: null,
    };
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
    const bountiesModalTiming = tmp2(14860).useBountiesModalTiming(obj1);
    ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
    handleVideoEnd = bountiesModalTiming.handleVideoEnd;
    handleVideoPaused = bountiesModalTiming.handleVideoPaused;
    handleVideoResumed = bountiesModalTiming.handleVideoResumed;
    ({
      handleReplay: c21,
      handleVideoProgress,
      showEndCard,
      rewardRemainingSeconds,
      rewardTotalSeconds,
      normalizedProgress,
    } = bountiesModalTiming);
    const tmp2Result3 = tmp2(14860);
    const obj2 = { bounty: null, sourceQuestContent: null, isActive: null, endMode: null, onOverlayUnavailable: null };
    obj2[0] = bounty;
    obj2[1] = sourceQuestContent;
    obj2[2] = isActive;
    obj2[3] = LOOP;
    obj2[4] = showEndCard;
    onVideoEndForAppStore = tmp2(14861).useBountyVideoEndAppStoreOverlay(obj2).onVideoEndForAppStore;
    const tmp2Result4 = tmp2(14861);
    const bountyVideoEndAppStoreContext = tmp2(14861).useBountyVideoEndAppStoreContext();
    let flag5;
    if (bountyVideoEndAppStoreContext != null) {
      flag5 = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    if (flag5 == null) {
      flag5 = false;
    }
    const items6 = [handleVideoPaused, isEndCardVisible, onPaused];
    const items7 = [handleVideoResumed, onResumed];
    const callback3 = obj.useCallback((arg0) => {
      handleVideoPaused(arg0);
      if (!isEndCardVisible) {
        if (onPaused != null) {
          onPaused();
        }
      }
    }, items6);
    const items8 = [isActive, isEndCardVisible, onEndCardVisible];
    const callback4 = obj.useCallback((arg0) => {
      handleVideoResumed(arg0);
      if (onResumed != null) {
        onResumed();
      }
    }, items7);
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
    }, items8);
    const items9 = [handleVideoEnd, onVideoEndForAppStore];
    const callback5 = obj.useCallback(() => {
      handleVideoEnd();
      onVideoEndForAppStore();
    }, items9);
    if (!loopingEnabled) {
      loopingEnabled = LOOP === tmp2(14860).BountyVideoEndMode.APP_STORE_LOOP;
    }
    const obj3 = { style: null, children: null };
    obj3[0] = memo;
    const obj4 = {
      bounty: null,
      sourceQuestContent: null,
      isCompleted: null,
      isCtaVisible: null,
      isEndCardVisible: null,
      isScrollIndicatorEnabled: null,
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
      peekScale: null,
      videoEndPeekScale: null,
      softDownloadCapsEnabled: null,
      renderEndCard: null,
    };
    obj4[0] = bounty;
    obj4[1] = sourceQuestContent;
    obj4[2] = stateFromStores;
    if (isCtaVisible) {
      isCtaVisible = !flag5;
    }
    obj4[3] = isCtaVisible;
    obj4[4] = isEndCardVisible;
    if (flag) {
      flag = !flag5;
    }
    obj4[5] = flag;
    let tmp51 = !isEndCardVisible;
    if (!isEndCardVisible) {
      tmp51 = !isRecapPageOnTop;
    }
    if (tmp51) {
      tmp51 = !flag5;
    }
    obj4[6] = tmp51;
    obj4[7] = tmp23;
    obj4[8] = callback5;
    obj4[9] = handleVideoProgress;
    obj4[10] = callback3;
    obj4[11] = callback4;
    obj4[12] = handleVideoErrorAnalytics;
    obj4[13] = handleLoadStartAnalytics;
    obj4[14] = handleBufferAnalytics;
    obj4[15] = handleReadyForDisplayAnalytics;
    obj4[16] = handleVideoTracksAnalytics;
    obj4[17] = rewardRemainingSeconds;
    obj4[18] = rewardTotalSeconds;
    obj4[19] = normalizedProgress;
    obj4[20] = loopingEnabled;
    obj4[21] = initialProgress;
    obj4[22] = isActive;
    obj4[23] = isRecapPageRevealed;
    obj4[24] = isScrollingInBoundsSharedValue;
    obj4[25] = ref;
    obj4[26] = callback;
    obj4[27] = tmp5Result1[0];
    obj4[28] = tmp7;
    obj4[29] = width;
    obj4[30] = height;
    obj4[31] = peekScale;
    obj4[32] = videoEndPeekScale;
    obj4[33] = softDownloadCapsEnabled;
    obj4[34] = function renderEndCard() {
      return handleProgress(isActive(ref[18]).QuestContentImpressionTrackerNative, {
        adContentId: isActive.id,
        adCreativeType: isActive(ref[19]).AdCreativeType.BOUNTY,
        questContent: isActive(ref[20]).QuestContent.VIDEO_MODAL_END_CARD,
        sourceQuestContent: ref,
        overrideVisibility: isEndCardVisible,
        children() {
          return closure_1_10(closure_1_1(closure_1_2[21]), {
            bounty: closure_0,
            visible: closure_17,
            onReplay: closure_21,
            isActive: closure_4,
            isScrollingInBoundsSharedValue: closure_5,
            sourceQuestContent: closure_1,
          });
        },
      });
    };
    obj3[1] = handleProgress(tmp2(14867).BountyVideo, obj4);
    return handleProgress(stateFromStores, obj3);
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
  ({
    scrollAffordance: BountiesScrollVideoItemInner,
    peekScale: closure_12,
    videoEndPeekScale: closure_13,
    softDownloadCapsEnabled,
  } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  return flag3(bounty(11573).BillableAdPlacementImpressionTrackerNative, {
    adContentId: bounty.id,
    adCreativeType: bounty(7457).AdCreativeType.BOUNTY,
    questContent: bounty(5401).QuestContent.VIDEO_MODAL_MOBILE,
    sourceQuestContent,
    overrideVisibility: isActive,
    children() {
      return flag3(closure_1_11, {
        bounty,
        sourceQuestContent,
        width: closure_2,
        height: closure_3,
        index: closure_4,
        isActive,
        isRecapPageRevealed: flag,
        isRecapPageOnTop: flag2,
        isScrollingInBoundsSharedValue: closure_8,
        isScrollIndicatorOverlayEnabled,
        shouldLoadHls: flag3,
        scrollAffordance: closure_11,
        peekScale: closure_12,
        videoEndPeekScale: closure_13,
        softDownloadCapsEnabled,
      });
    },
  });
};
