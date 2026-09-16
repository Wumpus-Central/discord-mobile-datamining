// discord_app/modules/quests/native/BountiesModal/BountiesModalContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestDataUtils from "../../utils/QuestDataUtils.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BountyStore from "../../BountyStore.tsx";

require = fn;
function BountiesModalContentInner(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let isEndCardVisible;
  let videoDuration;
  const tmp = closure_15();
  dependencyMap = tmp;
  let size = sourceQuestContent(1478)();
  const width = size.width;
  closure_129_0 = width;
  const height = size.height;
  closure_129_1 = height;
  const tmp2 = sourceQuestContent(1612)();
  closure_129_2 = tmp2;
  let items = [width, height, , , ,];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp2);
  const size2 = isEndCardVisible.useMemo(() => {
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
  let items1 = [tmp.videoWrapper, size2];
  const items2 = [tmp.closeButton, , ,];
  ({ top: arr3[1], left: arr3[2], width: arr3[3] } = size2);
  const memo = isEndCardVisible.useMemo(() => {
    const items = [closure_2.videoWrapper];
    const size = { top: size2.top, left: size2.left, width: size2.width, height: size2.height };
    items[1] = size;
    return items;
  }, items1);
  const items3 = [, , , , ,];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = size2);
  const memo1 = isEndCardVisible.useMemo(() => {
    const items = [closure_2.closeButton];
    const rect = { top: size2.top + nativeDefault.space.PX_8, left: null };
    const sum = size2.left + size2.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items2);
  const memo2 = isEndCardVisible.useMemo(() => {
    const bottomContainer = closure_2.bottomContainer;
    if (size2.isFullWidth) {
      const items = [bottomContainer, closure_2.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, closure_2.bottomContainerNotFullWidth];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = size2);
      items1[2] = obj;
    }
    return items1;
  }, items3);
  const items4 = [videoDuration];
  const stateFromStores = bounty(504).useStateFromStores(items4, () => BountyStore.isBountyCompleted(bounty.id));
  let obj = bounty(504);
  let result = 1000 * bounty.rewardTimerSeconds;
  asyncGeneratorStep = result;
  const ref = isEndCardVisible.useRef(null);
  const items5 = [bounty.id, sourceQuestContent];
  const callback = isEndCardVisible.useCallback(
    asyncGeneratorStep(async () => {
      closure_1 = tmp3;
      await closure_0(tmp20[15]).claimBountyReward(bounty.id, sourceQuestContent);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = tmp20;
        const result = bounty(tmp20[16]).openBountyRewardClaimErrorToast(closure_128_0);
        c5 = 3;
        bounty(tmp20[16]);
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
  let obj2 = bounty(8989);
  const bountiesModalVideoAnalytics = bounty(15136).useBountiesModalVideoAnalytics({
    bountyId: bounty.id,
    sourceQuestContent,
    rewardDurationMs: result,
    wasPreloaded: false,
    verticalScrollingPosition: null,
    isActive: true,
  });
  ({
    handleVideoProgressAnalytics,
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
  let obj3 = bounty(15136);
  let obj4 = {
    bountyId: bounty.id,
    sourceQuestContent,
    rewardDurationMs: result,
    wasPreloaded: false,
    verticalScrollingPosition: null,
    isActive: true,
  };
  const bountiesModalTiming = bounty(15133).useBountiesModalTiming({
    endMode: bounty(15133).BountyVideoEndMode.END_CARD,
    rewardDurationMs: result,
    isCompleted: stateFromStores,
    onRewardEarned: callback,
    onVideoProgress: handleVideoProgressAnalytics,
    onVideoEnd: handleVideoEndAnalytics,
    onVideoLooped: handleVideoLoopedAnalytics,
    onVideoPaused: handleVideoPausedAnalytics,
    onVideoResumed: handleVideoResumedAnalytics,
    playerRef: ref,
  });
  isEndCardVisible = bountiesModalTiming.isEndCardVisible;
  const maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
  videoDuration = bountiesModalTiming.videoDuration;
  const items6 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
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
  const items7 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  const callback1 = isEndCardVisible.useCallback(() => {
    const obj2 = {
      adContentId: bounty.id,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      event: AnalyticEvents.AD_VIDEO_MODAL_CLOSED,
      properties: null,
      sourceQuestContent: null,
    };
    const obj3 = {
      content_name: null,
      content_id: null,
      video_progress: null,
      threshold_met: null,
      reward_timer_seconds: null,
    };
    const obj = AnalyticsActions;
    obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
    obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_MOBILE;
    let num = videoDuration;
    if (videoDuration == null) {
      num = 0;
    }
    obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
    obj3.threshold_met = 1000 * maxVideoProgressSeconds >= c4;
    obj3.reward_timer_seconds = c4 / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items6);
  let obj6 = { children: null };
  const obj7 = { style: memo, children: null };
  const callback2 = isEndCardVisible.useCallback(() => {
    const obj2 = {
      adContentId: bounty.id,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      event: AnalyticEvents.AD_VIDEO_MODAL_CLOSED,
      properties: null,
      sourceQuestContent: null,
    };
    const obj3 = {
      content_name: null,
      content_id: null,
      video_progress: null,
      threshold_met: true,
      reward_timer_seconds: null,
    };
    const obj = AnalyticsActions;
    obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD);
    obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_END_CARD;
    let num = videoDuration;
    if (videoDuration == null) {
      num = 0;
    }
    obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
    obj3.reward_timer_seconds = c4 / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items7);
  const size1 = {
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
    repeat: false,
    initialProgress,
    isActive: true,
    playerRef: ref,
    width: size2.width,
    height: size2.height,
    renderEndCard() {
      return closure_2_10(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
        adContentId: bounty.id,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
        sourceQuestContent,
        overrideVisibility: isEndCardVisible,
        children() {
          return closure_2_10(sourceQuestContent(closure_2[26]), { bounty, visible, sourceQuestContent });
        },
      });
    },
  };
  obj7.children = closure_10(bounty(15139).BountyVideo, size1);
  const items8 = [closure_10(maxVideoProgressSeconds, obj7), ,];
  let obj5 = bounty(15133);
  items8[1] = closure_10(maxVideoProgressSeconds, {
    style: memo1,
    children: closure_10(sourceQuestContent(15167), { onPress: callback1 }),
  });
  let rect = {
    left: size2.isFullWidth,
    right: size2.isFullWidth,
    bottom: true,
    style: memo2,
    pointerEvents: "box-none",
    children: closure_10(sourceQuestContent(15160), {
      bounty,
      visible: isEndCardVisible,
      sourceQuestContent,
      onClose: callback2,
    }),
  };
  items8[2] = closure_10(bounty(7233).SafeAreaPaddingView, rect);
  obj6.children = items8;
  return closure_12(closure_11, obj6);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let c13 = 0.5625;
const initialProgress = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
const createStyles = fn(4638);
let closure_15 = createStyles.createStyles(() => {
  const obj = {
    videoWrapper: { position: "absolute" },
    closeButton: { position: "absolute" },
    bottomContainer: { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" },
    bottomContainerFullWidth: null,
    bottomContainerNotFullWidth: null,
  };
  const rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
  obj.bottomContainerFullWidth = rect;
  const obj2 = { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" };
  obj.bottomContainerNotFullWidth = { paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default function BountiesModalContent(bountyId) {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  let bounty;
  bounty = bounty(
    noop.useState(() => {
      if (null != bounty) {
        if (bounty.id === bountyId) {
          return bounty;
        }
      }
      const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(sourceQuestContent);
      let bountyByPlacementAndId = null;
      if (null != questPlacementFromQuestContent) {
        bountyByPlacementAndId = QuestDataUtils.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
        const tmp3Result = QuestDataUtils;
      }
      return bountyByPlacementAndId;
    }),
    1,
  )[0];
  let tmp2 = null;
  closure_4 = tmp3;
  const items = [null == bounty, bountyId, sourceQuestContent];
  const effect = noop.useEffect(() => {
    if (closure_4) {
      const _Error = Error;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj2 = { tags: { source: "BountiesModalContent" }, extra: null };
      const obj3 = { bountyId, sourceQuestContent };
      obj2.extra = obj3;
      const result = QuestDataUtils.captureQuestsException(error, obj2);
      BountiesModalActionCreatorsDefault.hideModal();
    }
  }, items);
  if (null != bounty) {
    let obj = { theme: ThemeTypes.DARK, children: null };
    let obj2 = {
      adContentId: bounty.id,
      adCreativeType: bountyId(bounty[19]).AdCreativeType.BOUNTY,
      questContent: bountyId(bounty[21]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
        return closure_2_10(BountiesModalContentInner, { bounty, sourceQuestContent });
      },
    };
    obj.children = closure_10(bountyId(bounty[25]).BillableAdPlacementImpressionTrackerNative, obj2);
    tmp2 = closure_10(bountyId(bounty[31]).ThemeContextProvider, obj);
  }
  return tmp2;
}
