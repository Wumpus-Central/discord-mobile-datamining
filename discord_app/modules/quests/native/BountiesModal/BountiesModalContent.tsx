// discord_app/modules/quests/native/BountiesModal/BountiesModalContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BountyStore from "../../BountyStore.tsx";

require = fn;
function BountiesModalContentInner(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  noop = undefined;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  let isEndCardVisible;
  let maxVideoProgressSeconds;
  let videoDuration;
  const tmp = closure_14();
  dependencyMap = tmp;
  let size = sourceQuestContent(1477)();
  const width = size.width;
  closure_129_0 = width;
  const height = size.height;
  closure_129_1 = height;
  const tmp4 = sourceQuestContent(1611)();
  closure_129_2 = tmp4;
  let obj = noop;
  let items = [width, height, , , ,];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp4);
  const memo = noop.useMemo(() => {
    const rect = closure_2;
    const diff = bounty - closure_2.left - closure_2.right;
    const diff1 = sourceQuestContent - closure_2.top - closure_2.bottom;
    let result = diff / c13;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c13;
      flag = false;
      result = diff1;
    }
    const size = {
      top: Math.floor(rect.top + (diff1 - result) / 2),
      left: Math.floor(rect.left + (diff - result1) / 2),
      width: Math.floor(result1),
      height: Math.floor(result),
      isFullWidth: flag,
    };
    return size;
  }, items);
  let items1 = [tmp.videoWrapper, memo];
  const items2 = [tmp.closeButton, , ,];
  ({ top: arr3[1], left: arr3[2], width: arr3[3] } = memo);
  const memo1 = noop.useMemo(() => {
    const items = [closure_2.videoWrapper];
    const size = { top: memo.top, left: memo.left, width: memo.width, height: memo.height };
    items[1] = size;
    return items;
  }, items1);
  const items3 = [, , , , ,];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = memo);
  const memo2 = noop.useMemo(() => {
    const items = [closure_2.closeButton];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items2);
  const memo3 = noop.useMemo(() => {
    const bottomContainer = closure_2.bottomContainer;
    if (memo.isFullWidth) {
      const items = [bottomContainer, closure_2.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, closure_2.bottomContainerNotFullWidth];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = memo);
      items1[2] = obj;
    }
    return items1;
  }, items3);
  let obj1 = bounty(504);
  const items4 = [flushProgress];
  const stateFromStores = obj1.useStateFromStores(items4, () => BountyStore.isBountyCompleted(bounty.id));
  let obj2 = bounty(8850);
  let obj3 = bounty(11520);
  const bountiesExperience = obj3.useBountiesExperience(handleVideoProgressAnalytics.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  const BountyVideoEndMode = bounty(15016).BountyVideoEndMode;
  const tmp12 = loopingEnabled ? BountyVideoEndMode.LOOP : BountyVideoEndMode.END_CARD;
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      let result = 1000 * bounty.rewardTimerSeconds;
    }
    noop = result;
    let tmp9Result = tmp9(15020);
    obj = { bountyId: bounty.id, endMode: tmp12 };
    const bountyVideoProgressPersistence = tmp9Result.useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    const items5 = [bounty.id, sourceQuestContent];
    const callback = obj.useCallback(
      memo(function* () {
        closure_1 = tmp3;
        yield closure_0(tmp20[17]).claimBountyReward(bounty.id, sourceQuestContent);
        if (1 === tmp7) {
          c3 = 0;
          closure_128_0 = tmp20;
          const result = bounty(tmp20[18]).openBountyRewardClaimErrorToast(closure_128_0);
          c5 = 3;
          bounty(tmp20[18]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      }),
      items5,
    );
    tmp9Result = tmp9(15021);
    obj = {
      bountyId: bounty.id,
      sourceQuestContent,
      rewardDurationMs: result,
      initialPlaybackTimeSec: null,
      initialMaxVideoProgressSec: null,
      initialVideoDurationSec: null,
      wasPreloaded: false,
      startupPath: "carousel",
      verticalScrollingPosition: null,
    };
    ({
      timestampSec: obj8.initialPlaybackTimeSec,
      maxTimestampSec: obj8.initialMaxVideoProgressSec,
      duration: obj8.initialVideoDurationSec,
    } = initialProgress);
    const bountiesModalVideoAnalytics = tmp9Result.useBountiesModalVideoAnalytics(obj);
    handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
    const items6 = [handleVideoProgressAnalytics, handleProgress];
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
    }, items6);
    obj1 = {
      endMode: tmp12,
      rewardDurationMs: result,
      isCompleted: stateFromStores,
      onRewardEarned: callback,
      onVideoProgress: callback1,
      onVideoEnd: handleVideoEndAnalytics,
      onVideoLooped: handleVideoLoopedAnalytics,
      onVideoPaused: handleVideoPausedAnalytics,
      onVideoResumed: handleVideoResumedAnalytics,
      initialProgressSec: null,
      initialMaxVideoProgressSec: null,
      initialVideoDurationSec: null,
    };
    ({ timestampSec: obj10.initialProgressSec, maxTimestampSec: obj10.initialMaxVideoProgressSec } = initialProgress);
    let duration = null;
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj1.initialVideoDurationSec = duration;
    const bountiesModalTiming = tmp9(15016).useBountiesModalTiming(obj1);
    isEndCardVisible = bountiesModalTiming.isEndCardVisible;
    maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
    videoDuration = bountiesModalTiming.videoDuration;
    const items7 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    ({
      isCtaVisible,
      handleVideoEnd,
      handleVideoProgress,
      handleVideoPaused,
      handleVideoResumed,
      rewardRemainingSeconds,
      rewardTotalSeconds,
      normalizedProgress,
    } = bountiesModalTiming);
    const items8 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    const callback2 = obj.useCallback(() => {
      let obj = {
        adContentId: bounty.id,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        event: AnalyticEvents.AD_VIDEO_MODAL_CLOSED,
        properties: null,
        sourceQuestContent: null,
      };
      obj = {
        content_name: AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE),
        content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE,
        video_progress: null,
        threshold_met: null,
        reward_timer_seconds: null,
      };
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
      let obj = {
        adContentId: bounty.id,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        event: AnalyticEvents.AD_VIDEO_MODAL_CLOSED,
        properties: null,
        sourceQuestContent: null,
      };
      obj = {
        content_name: AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD),
        content_id: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
        video_progress: null,
        threshold_met: true,
        reward_timer_seconds: null,
      };
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
        return closure_2_10(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
          adContentId: bounty.id,
          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
          questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
          sourceQuestContent,
          overrideVisibility: isEndCardVisible,
          children() {
            return videoDuration(sourceQuestContent(closure_2[28]), { bounty, visible, sourceQuestContent });
          },
        });
      },
      isScrollIndicatorEnabled: false,
      width: null,
      height: null,
    };
    ({ width: obj13.width, height: obj13.height } = memo);
    obj3.children = videoDuration(tmp9(15024).BountyVideo, size);
    const items9 = [videoDuration(handleProgress, obj3), ,];
    let obj4 = { style: memo2, children: null };
    let obj5 = { onPress: callback2 };
    obj4.children = videoDuration(tmp2(15054), obj5);
    items9[1] = videoDuration(handleProgress, obj4);
    let rect = { left: null, right: null, bottom: true, style: null, pointerEvents: "box-none", children: null };
    ({ isFullWidth: obj16.left, isFullWidth: obj16.right } = memo);
    rect.style = memo3;
    let obj6 = { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback3 };
    rect.children = videoDuration(tmp2(15045), obj6);
    items9[2] = videoDuration(tmp9(7123).SafeAreaPaddingView, rect);
    obj2.children = items9;
    return closure_12(closure_11, obj2);
  }
  result = 1000 * rewardTimerSeconds;
}
const View = fn(17).View;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let c13 = 0.5625;
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles(() => {
  let obj = {
    videoWrapper: { position: "absolute" },
    closeButton: { position: "absolute" },
    bottomContainer: null,
    bottomContainerFullWidth: null,
    bottomContainerNotFullWidth: null,
  };
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

export default function BountiesModalContent(arg0) {
  ({ bountyId: require, sourceQuestContent } = arg0);
  let found;
  let obj = require("hooks/QuestHooks");
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  found = questHomeBounties.find((id) => id.id === require);
  let tmp4 = null;
  if (null != found) {
    obj = { theme: ThemeTypes.DARKER, children: null };
    obj = {
      adContentId: found.id,
      adCreativeType: require("AdCreativeType").AdCreativeType.BOUNTY,
      questContent: require("QuestContent").QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
        return closure_2_10(BountiesModalContentInner, { bounty: found, sourceQuestContent });
      },
    };
    obj.children = closure_10(require("QuestContentImpressionTracker").BillableAdPlacementImpressionTrackerNative, obj);
    tmp4 = closure_10(require("native").ThemeContextProvider, obj);
  }
  return tmp4;
}
