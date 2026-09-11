// === Module 15119: BountiesModalContent ===

// Module 15119 (BountiesModalContent)
import nativeDefault from "native" /* 576 */;
import QuestContent from "QuestContent" /* 5500 */;
import AdCreativeType from "AdCreativeType" /* 5502 */;
import QuestDataUtils from "QuestDataUtils" /* 7771 */;
import AnalyticsActions from "AnalyticsActions" /* 7790 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7800 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11606 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 11871 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15057 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7774 */;

require = fn;
function BountiesModalContentInner(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  asyncGeneratorStep = undefined;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  let isEndCardVisible;
  let maxVideoProgressSeconds;
  let videoDuration;
  const tmp = closure_15();
  dependencyMap = tmp;
  let size = sourceQuestContent(1477)();
  const width = size.width;
  closure_129_0 = width;
  const height = size.height;
  closure_129_1 = height;
  const tmp4 = sourceQuestContent(1611)();
  closure_129_2 = tmp4;
  let obj = handleProgress;
  let items = [width, height, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp4);
  const memo = handleProgress.useMemo(() => {
    const rect = closure_2;
    const diff = bounty - closure_2.left - closure_2.right;
    const diff1 = sourceQuestContent - closure_2.top - closure_2.bottom;
    let result = diff / c14;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c14;
      flag = false;
      result = diff1;
    }
    const size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
  let items1 = [tmp.videoWrapper, memo];
  const items2 = [tmp.closeButton, , , ];
  ({ top: arr3[1], left: arr3[2], width: arr3[3] } = memo);
  const memo1 = handleProgress.useMemo(() => {
    const items = [closure_2.videoWrapper, ];
    const size = { top: memo.top, left: memo.left, width: memo.width, height: memo.height };
    items[1] = size;
    return items;
  }, items1);
  const items3 = [, , , , , ];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = memo);
  const memo2 = handleProgress.useMemo(() => {
    const items = [closure_2.closeButton, ];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items2);
  const memo3 = handleProgress.useMemo(() => {
    const bottomContainer = closure_2.bottomContainer;
    if (memo.isFullWidth) {
      const items = [bottomContainer, closure_2.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, closure_2.bottomContainerNotFullWidth, ];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = memo);
      items1[2] = obj;
    }
    return items1;
  }, items3);
  let obj1 = bounty(504);
  const items4 = [handleVideoProgressAnalytics];
  const stateFromStores = obj1.useStateFromStores(items4, () => BountyStore.isBountyCompleted(bounty.id));
  let obj2 = bounty(8940);
  let obj3 = bounty(11614);
  const bountiesExperience = obj3.useBountiesExperience(isEndCardVisible.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  const BountyVideoEndMode = bounty(15072).BountyVideoEndMode;
  const tmp12 = loopingEnabled ? BountyVideoEndMode.LOOP : BountyVideoEndMode.END_CARD;
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      let result = 1000 * bounty.rewardTimerSeconds;
    }
    asyncGeneratorStep = result;
    let tmp9Result = tmp9(15076);
    obj = { bountyId: bounty.id, endMode: tmp12 };
    const bountyVideoProgressPersistence = tmp9Result.useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    const items5 = [bounty.id, sourceQuestContent];
    const callback = obj.useCallback(asyncGeneratorStep(async () => {
      closure_1 = tmp3;
      await closure_0(tmp20[18]).claimBountyReward(bounty.id, sourceQuestContent);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = tmp20;
        const result = bounty(tmp20[19]).openBountyRewardClaimErrorToast(closure_128_0);
        c5 = 3;
        bounty(tmp20[19]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return value;
    }), items5);
    tmp9Result = tmp9(15077);
    obj = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, initialPlaybackTimeSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null, wasPreloaded: false, startupPath: "carousel", verticalScrollingPosition: null };
    ({ timestampSec: obj8.initialPlaybackTimeSec, maxTimestampSec: obj8.initialMaxVideoProgressSec, duration: obj8.initialVideoDurationSec } = initialProgress);
    const bountiesModalVideoAnalytics = tmp9Result.useBountiesModalVideoAnalytics(obj);
    handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
    const items6 = [handleVideoProgressAnalytics, handleProgress];
    ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
    const callback1 = obj.useCallback((arg0, arg1, arg2) => {
      handleVideoProgressAnalytics(arg0, arg1, arg2);
      handleProgress(arg0, arg1, arg2);
    }, items6);
    obj1 = { endMode: tmp12, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: callback1, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, initialProgressSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null };
    ({ timestampSec: obj10.initialProgressSec, maxTimestampSec: obj10.initialMaxVideoProgressSec } = initialProgress);
    let duration = null;
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj1.initialVideoDurationSec = duration;
    const bountiesModalTiming = tmp9(15072).useBountiesModalTiming(obj1);
    isEndCardVisible = bountiesModalTiming.isEndCardVisible;
    maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
    videoDuration = bountiesModalTiming.videoDuration;
    const items7 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    ({ isCtaVisible, handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
    const items8 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    const callback2 = obj.useCallback(() => {
      let obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
      obj = { content_name: AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE), content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE, video_progress: null, threshold_met: null, reward_timer_seconds: null };
      let num = videoDuration;
      if (videoDuration == null) {
        num = 0;
      }
      obj.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
      obj.threshold_met = 1000 * maxVideoProgressSeconds >= c4;
      obj.reward_timer_seconds = c4 / 1000;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
      flushProgress();
      BountiesModalActionCreatorsDefault.hideModal();
    }, items7);
    obj2 = { children: null };
    obj3 = { style: memo1, children: null };
    const callback3 = obj.useCallback(() => {
      let obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
      obj = { content_name: AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD), content_id: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, video_progress: null, threshold_met: true, reward_timer_seconds: null };
      let num = videoDuration;
      if (videoDuration == null) {
        num = 0;
      }
      obj.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
      obj.reward_timer_seconds = c4 / 1000;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
      flushProgress();
      BountiesModalActionCreatorsDefault.hideModal();
    }, items8);
    size = {
      isActive: true,
      bounty,
      sourceQuestContent,
      isCompleted: stateFromStores,
      isCtaVisible,
      isEndCardVisible,
      isProgressBarVisible: !isEndCardVisible,
      orbsBalance: obj2.useFetchVirtualCurrencyBalance().balance,
      handleVideoEnd,
      handleVideoProgress,
      handleVideoPaused,
      handleVideoResumed,
      handleVideoError: handleVideoErrorAnalytics,
      onLoadStart: handleLoadStartAnalytics,
      onBuffer: handleBufferAnalytics,
      onFirstFrame: handleReadyForDisplayAnalytics,
      onVideoTracks: handleVideoTracksAnalytics,
      rewardRemainingSeconds,
      rewardTotalSeconds,
      normalizedProgress,
      repeat: loopingEnabled,
      initialProgress,
      renderEndCard() {
          return closure_2_11(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
            adContentId: bounty.id,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
            sourceQuestContent,
            overrideVisibility: isEndCardVisible,
            children() {
              return closure_2_11(sourceQuestContent(closure_2[29]), { bounty, visible, sourceQuestContent });
            }
          });
        },
      isScrollIndicatorEnabled: false,
      width: null,
      height: null
    };
    ({ width: obj13.width, height: obj13.height } = memo);
    obj3.children = closure_11(tmp9(15080).BountyVideo, size);
    const items9 = [closure_11(flushProgress, obj3), , ];
    let obj4 = { style: memo2, children: null };
    let obj5 = { onPress: callback2 };
    obj4.children = closure_11(tmp2(15111), obj5);
    items9[1] = closure_11(flushProgress, obj4);
    let rect = { left: null, right: null, bottom: true, style: null, pointerEvents: "box-none", children: null };
    ({ isFullWidth: obj16.left, isFullWidth: obj16.right } = memo);
    rect.style = memo3;
    let obj6 = { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback3 };
    rect.children = closure_11(tmp2(15101), obj6);
    items9[2] = closure_11(tmp9(7196).SafeAreaPaddingView, rect);
    obj2.children = items9;
    return closure_13(closure_12, obj2);
  }
  result = 1000 * rewardTimerSeconds;
}
const View = fn(17).View;
const QuestsExperimentLocations = fn(5495).QuestsExperimentLocations;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let c14 = 0.5625;
const createStyles = fn(4606);
let closure_15 = createStyles.createStyles(() => {
  let obj = { videoWrapper: { position: "absolute" }, closeButton: { position: "absolute" }, bottomContainer: null, bottomContainerFullWidth: null, bottomContainerNotFullWidth: null };
  obj = { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" };
  obj.bottomContainer = obj;
  const rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
  obj.bottomContainerFullWidth = rect;
  obj = { paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
  obj.bottomContainerNotFullWidth = obj;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default function BountiesModalContent(bountyId) {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  _slicedToArray = undefined;
  const bounty = _slicedToArray(noop.useState(() => {
    const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(sourceQuestContent);
    let bountyByPlacementAndId = null;
    if (null != questPlacementFromQuestContent) {
      bountyByPlacementAndId = QuestDataUtils.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
      const tmpResult = QuestDataUtils;
    }
    return bountyByPlacementAndId;
  }), 1)[0];
  let tmp2 = null;
  _slicedToArray = tmp3;
  const items = [null == bounty, bountyId, sourceQuestContent];
  const effect = noop.useEffect(() => {
    if (closure_3) {
      const _Error = Error;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      let obj = { tags: { source: "BountiesModalContent" }, extra: null };
      obj = { bountyId, sourceQuestContent };
      obj.extra = obj;
      const result = obj.captureQuestsException(error, obj);
      BountiesModalActionCreatorsDefault.hideModal();
    }
  }, items);
  if (null != bounty) {
    let obj = { theme: ThemeTypes.DARK, children: null };
    obj = {
      adContentId: bounty.id,
      adCreativeType: bountyId(bounty[22]).AdCreativeType.BOUNTY,
      questContent: bountyId(bounty[24]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          return closure_2_11(BountiesModalContentInner, { bounty, sourceQuestContent });
        }
    };
    obj.children = closure_11(bountyId(bounty[28]).BillableAdPlacementImpressionTrackerNative, obj);
    tmp2 = closure_11(bountyId(bounty[34]).ThemeContextProvider, obj);
  }
  return tmp2;
};