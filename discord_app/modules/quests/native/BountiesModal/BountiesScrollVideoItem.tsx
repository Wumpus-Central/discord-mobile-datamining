// discord_app/modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx
import set from "set";
import _slicedToArray from "_slicedToArray";
import closure_5 from "set";
import { View } from "AdContentImpressionTrackerBaseNative";
import redeemError from "redeemError";
import closure_8 from "set";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { jsx } from "set";

const require = arg1;
function BountiesScrollVideoItemInner(bounty) {
  let handleBufferAnalytics;
  let handleLoadStartAnalytics;
  let handleProgress;
  let handleReadyForDisplayAnalytics;
  let handleVideoEnd;
  let handleVideoEndAnalytics;
  let handleVideoErrorAnalytics;
  let handleVideoLoopedAnalytics;
  let handleVideoPausedAnalytics;
  let handleVideoProgress;
  let handleVideoResumedAnalytics;
  let handleVideoTracksAnalytics;
  let index;
  let initialProgress;
  let isCtaVisible;
  let isRecapPageOnTop;
  let isRecapPageRevealed;
  let loopingEnabled;
  let normalizedProgress;
  let orbAmount;
  let ownedByVerticalScrollExperiment;
  let peekScale;
  let rewardRemainingSeconds;
  let rewardTimerSeconds;
  let rewardTotalSeconds;
  let scrollAffordance;
  let softDownloadCapsEnabled;
  let stage1Enabled;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp7;
  let tmp8;
  bounty = bounty.bounty;
  let isActive = bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let ref = sourceQuestContent;
  const width = bounty.width;
  let dependencyMap = width;
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
  ({ scrollAffordance, softDownloadCapsEnabled, peekScale } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  let stateFromStores;
  orbAmount = undefined;
  let c8;
  let QuestsExperimentLocations;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  let onPlaybackTimeChange;
  let onPaused;
  let onResumed;
  let onEndCardVisible;
  let isEndCardVisible;
  let handleVideoPaused;
  let handleVideoResumed;
  let handleReplay;
  let obj = isScrollingInBoundsSharedValue;
  const items = [width, height];
  const memo = isScrollingInBoundsSharedValue.useMemo(() => ({ width: closure_2, height: set }), items);
  let obj1 = isActive(589);
  const items1 = [c8];
  stateFromStores = obj1.useStateFromStores(items1, () => _undefined.isBountyCompleted(isActive.id));
  [tmp7, tmp8] = isActive(isScrollingInBoundsSharedValue.useState(flag2), 2);
  const tmp9 = isActive(isScrollingInBoundsSharedValue.useState(flag2), 2);
  if (tmp9[0] !== flag2) {
    tmp9[1](flag2);
    if (flag2) {
      tmp8(true);
    }
  }
  let tmp2Result = tmp2(10955);
  const bountiesExperience = tmp2Result.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, orbAmount } = bountiesExperience);
  ({ stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  const BountyVideoEndMode = tmp2(14327).BountyVideoEndMode;
  if (loopingEnabled) {
    let LOOP = BountyVideoEndMode.LOOP;
  } else {
    LOOP = ownedByVerticalScrollExperiment ? BountyVideoEndMode.END_CARD : BountyVideoEndMode.END_CARD_WITH_CTA;
  }
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      let result = 1000 * bounty.rewardTimerSeconds;
    }
    c8 = result;
    ref = obj.useRef(null);
    dependencyMap = undefined;
    callback = undefined;
    dependencyMap = obj.useRef(true);
    callback = obj.useRef(null);
    const items2 = [isActive, ref];
    callback = obj.useCallback((current) => {
      set.current = current;
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
    [tmp19, tmp20] = tmp5Result;
    tmp5Result = tmp5(obj.useState(() => {
      let currentBalance = null;
      if (isActive) {
        currentBalance = orbAmount.getCurrentBalance();
      }
      return currentBalance;
    }), 2);
    [tmp22, tmp23] = tmp5Result;
    QuestsExperimentLocations = tmp23;
    if (tmp19 !== isActive) {
      tmp20(isActive);
      if (isActive) {
        let currentBalance = orbAmount.getCurrentBalance();
        tmp23(currentBalance);
        if (currentBalance !== tmp22) {
          tmp25((arg0) => arg0 + 1);
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
              let closure_1 = tmp3;
              let c0 = tmp7;
              c0 = false;
              let c3 = 1;
              c4 = 2;
              c5 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_0(outer1_2[12]).claimBountyReward(outer1_0.id, outer1_1);
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_1 = closure_2;
              obj1 = outer1_0(outer1_2[13]);
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
              outer1_9((arg0) => {
                let sum = null;
                if (null != arg0) {
                  sum = arg0 + redeemError;
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
    tmp2Result = tmp2(14330);
    obj = { bountyId: null, endMode: null };
    obj[0] = bounty.id;
    obj[1] = LOOP;
    const bountyVideoProgressPersistence = tmp2Result.useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    const items4 = [flushProgress];
    const effect1 = obj.useEffect(() => () => callback(), items4);
    const tmp5Result1 = tmp5(obj.useState(0), 2);
    obj = { bountyId: null, sourceQuestContent: null, rewardDurationMs: null, initialPlaybackTimeSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null, wasPreloaded: false, startupPath: null, verticalScrollingPosition: null, isActive: null };
    obj[0] = bounty.id;
    obj[1] = sourceQuestContent;
    obj[2] = result;
    ({ timestampSec: obj7[3], maxTimestampSec: obj7[4], duration: obj7[5] } = initialProgress);
    let str = "carousel";
    if (ownedByVerticalScrollExperiment) {
      str = "active_only";
    }
    obj[7] = str;
    obj[8] = index;
    obj[9] = isActive;
    const bountiesModalVideoAnalytics = tmp2(14331).useBountiesModalVideoAnalytics(obj);
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
    const items5 = [handleVideoProgressAnalytics, handleProgress, stateFromStores, onPlaybackTimeChange, result];
    const callback2 = obj.useCallback((arg0, arg1, arg2) => {
      handleVideoProgressAnalytics(arg0, arg1, arg2);
      handleProgress(arg0, arg1, arg2);
      if (onPlaybackTimeChange != null) {
        let tmp5 = stateFromStores;
        if (!stateFromStores) {
          tmp5 = 1000 * arg0 >= c8;
        }
        tmp3(arg2, arg1, tmp5, arg0, stateFromStores);
      }
    }, items5);
    const tmp2Result1 = tmp2(14331);
    obj1 = { endMode: null, rewardDurationMs: null, isCompleted: null, onRewardEarned: null, onVideoProgress: null, onVideoEnd: null, onVideoLooped: null, onVideoPaused: null, onVideoResumed: null, playerRef: null, initialProgressSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null };
    obj1[0] = LOOP;
    obj1[1] = result;
    obj1[2] = stateFromStores;
    obj1[3] = callback1;
    obj1[4] = callback2;
    obj1[5] = handleVideoEndAnalytics;
    obj1[6] = handleVideoLoopedAnalytics;
    obj1[7] = handleVideoPausedAnalytics;
    obj1[8] = handleVideoResumedAnalytics;
    obj1[9] = ref;
    ({ timestampSec: obj9[10], maxTimestampSec: obj9[11] } = initialProgress);
    let duration = null;
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj1[12] = duration;
    const bountiesModalTiming = tmp2(14327).useBountiesModalTiming(obj1);
    isEndCardVisible = bountiesModalTiming.isEndCardVisible;
    handleVideoPaused = bountiesModalTiming.handleVideoPaused;
    handleVideoResumed = bountiesModalTiming.handleVideoResumed;
    handleReplay = bountiesModalTiming.handleReplay;
    const items6 = [handleVideoPaused, isEndCardVisible, onPaused];
    ({ isCtaVisible, handleVideoEnd, handleVideoProgress, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
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
    const obj2 = { style: null, children: null };
    obj2[0] = memo;
    const obj3 = { bounty: null, sourceQuestContent: null, isCompleted: null, isCtaVisible: null, isEndCardVisible: null, isScrollIndicatorEnabled: null, isProgressBarVisible: null, orbsBalance: null, handleVideoEnd: null, handleVideoProgress: null, handleVideoPaused: null, handleVideoResumed: null, handleVideoError: null, onLoadStart: null, onBuffer: null, onFirstFrame: null, onVideoTracks: null, rewardRemainingSeconds: null, rewardTotalSeconds: null, normalizedProgress: null, repeat: null, initialProgress: null, isActive: null, isRecapPageRevealed: null, isScrollingInBoundsSharedValue: null, playerRef: null, onPlayerStateChange: null, balanceWidgetPillResetKey: null, shouldLoadHls: null, width: null, height: null, peekScale: null, softDownloadCapsEnabled: null, renderEndCard: null };
    obj3[0] = bounty;
    obj3[1] = sourceQuestContent;
    obj3[2] = stateFromStores;
    obj3[3] = isCtaVisible;
    obj3[4] = isEndCardVisible;
    obj3[5] = flag;
    let tmp48 = !isEndCardVisible;
    if (!isEndCardVisible) {
      tmp48 = !isRecapPageOnTop;
    }
    obj3[6] = tmp48;
    obj3[7] = tmp22;
    obj3[8] = handleVideoEnd;
    obj3[9] = handleVideoProgress;
    obj3[10] = callback3;
    obj3[11] = callback4;
    obj3[12] = handleVideoErrorAnalytics;
    obj3[13] = handleLoadStartAnalytics;
    obj3[14] = handleBufferAnalytics;
    obj3[15] = handleReadyForDisplayAnalytics;
    obj3[16] = handleVideoTracksAnalytics;
    obj3[17] = rewardRemainingSeconds;
    obj3[18] = rewardTotalSeconds;
    obj3[19] = normalizedProgress;
    obj3[20] = loopingEnabled;
    obj3[21] = initialProgress;
    obj3[22] = isActive;
    obj3[23] = isRecapPageRevealed;
    obj3[24] = isScrollingInBoundsSharedValue;
    obj3[25] = ref;
    obj3[26] = callback;
    obj3[27] = tmp5Result1[0];
    obj3[28] = tmp7;
    obj3[29] = width;
    obj3[30] = height;
    obj3[31] = peekScale;
    obj3[32] = softDownloadCapsEnabled;
    obj3[33] = function renderEndCard() {
      const obj = { adContentId: isActive.id, adCreativeType: null, questContent: null, sourceQuestContent: null, overrideVisibility: null, children: null };
      obj[1] = isActive(ref[18]).AdCreativeType.BOUNTY;
      obj[2] = isActive(ref[19]).QuestContent.VIDEO_MODAL_END_CARD;
      obj[3] = ref;
      obj[4] = isEndCardVisible;
      obj[5] = function children() {
        return outer1_10(outer1_1(outer1_2[20]), { bounty: closure_0, visible: closure_17, onReplay: closure_20, isActive: _slicedToArray, isScrollingInBoundsSharedValue: closure_5, sourceQuestContent: closure_1 });
      };
      return handleProgress(isActive(ref[17]).QuestContentImpressionTrackerNative, obj);
    };
    obj2[1] = handleProgress(tmp2(14333).BountyVideo, obj3);
    return handleProgress(stateFromStores, obj2);
  }
  result = 1000 * rewardTimerSeconds;
}
let result = require("noop").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx");

export const BountiesScrollVideoItem = function BountiesScrollVideoItem(bounty) {
  let BountiesScrollVideoItemInner;
  let closure_12;
  let set;
  let _slicedToArray;
  let closure_8;
  let dependencyMap;
  let isActive;
  let isScrollIndicatorOverlayEnabled;
  let softDownloadCapsEnabled;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  ({ width: dependencyMap, height: set, index: _slicedToArray, isActive } = bounty);
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
  ({ scrollAffordance: BountiesScrollVideoItemInner, peekScale: closure_12, softDownloadCapsEnabled } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  const obj = { adContentId: bounty.id, adCreativeType: null, questContent: null, sourceQuestContent: null, overrideVisibility: null, children: null };
  obj[1] = bounty(7222).AdCreativeType.BOUNTY;
  obj[2] = bounty(5207).QuestContent.VIDEO_MODAL_MOBILE;
  obj[3] = sourceQuestContent;
  obj[4] = isActive;
  obj[5] = function children() {
    return flag3(outer1_11, { bounty, sourceQuestContent, width: closure_2, height: set, index: _slicedToArray, isActive, isRecapPageRevealed: flag, isRecapPageOnTop: flag2, isScrollingInBoundsSharedValue: closure_8, isScrollIndicatorOverlayEnabled, shouldLoadHls: flag3, scrollAffordance: closure_11, peekScale: closure_12, softDownloadCapsEnabled });
  };
  return flag3(bounty(11226).BillableAdPlacementImpressionTrackerNative, obj);
};