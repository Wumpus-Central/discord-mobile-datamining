// === Module 15142: BountiesModalContent ===

// Module 15142 (BountiesModalContent)
import nativeDefault from "native" /* 576 */;
import QuestContent from "QuestContent" /* 5530 */;
import AdCreativeType from "AdCreativeType" /* 5532 */;
import QuestDataUtils from "QuestDataUtils" /* 7801 */;
import AnalyticsActions from "AnalyticsActions" /* 7820 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7830 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11645 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 11907 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15091 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7804 */;

require = fn;
function BountiesModalContentInner(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  handleProgress = undefined;
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
  let items = [width, height, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp4);
  const size2 = handleProgress.useMemo(() => {
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
    const size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
  let items1 = [tmp.videoWrapper, size2];
  const items2 = [tmp.closeButton, , , ];
  ({ top: arr3[1], left: arr3[2], width: arr3[3] } = size2);
  const memo = handleProgress.useMemo(() => {
    const items = [closure_2.videoWrapper, ];
    const size = { top: size2.top, left: size2.left, width: size2.width, height: size2.height };
    items[1] = size;
    return items;
  }, items1);
  const items3 = [, , , , , ];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = size2);
  const memo1 = handleProgress.useMemo(() => {
    const items = [closure_2.closeButton, ];
    const rect = { top: size2.top + nativeDefault.space.PX_8, left: null };
    const sum = size2.left + size2.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items2);
  const memo2 = handleProgress.useMemo(() => {
    const bottomContainer = closure_2.bottomContainer;
    if (size2.isFullWidth) {
      const items = [bottomContainer, closure_2.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, closure_2.bottomContainerNotFullWidth, ];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = size2);
      items1[2] = obj;
    }
    return items1;
  }, items3);
  let obj1 = bounty(504);
  const items4 = [handleVideoProgressAnalytics];
  const stateFromStores = obj1.useStateFromStores(items4, () => BountyStore.isBountyCompleted(bounty.id));
  let obj2 = bounty(8975);
  const END_CARD = bounty(15106).BountyVideoEndMode.END_CARD;
  let result = 1000 * bounty.rewardTimerSeconds;
  asyncGeneratorStep = result;
  const ref = handleProgress.useRef(null);
  let obj3 = bounty(15108);
  let obj = { bountyId: bounty.id, endMode: END_CARD };
  const bountyVideoProgressPersistence = obj3.useBountyVideoProgressPersistence(obj);
  ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
  const flushProgress = bountyVideoProgressPersistence.flushProgress;
  const items5 = [flushProgress];
  const effect = handleProgress.useEffect(() => () => flushProgress(), items5);
  const items6 = [bounty.id, sourceQuestContent];
  const callback = handleProgress.useCallback(asyncGeneratorStep(async () => {
    closure_1 = tmp3;
    await closure_0(tmp20[16]).claimBountyReward(bounty.id, sourceQuestContent);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp20;
      const result = bounty(tmp20[17]).openBountyRewardClaimErrorToast(closure_128_0);
      c5 = 3;
      bounty(tmp20[17]);
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  }), items6);
  obj = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, initialPlaybackTimeSec: initialProgress.timestampSec, initialMaxVideoProgressSec: initialProgress.maxTimestampSec, initialVideoDurationSec: initialProgress.duration, wasPreloaded: false, verticalScrollingPosition: null, isActive: true };
  const bountiesModalVideoAnalytics = bounty(15109).useBountiesModalVideoAnalytics(obj);
  handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
  const items7 = [handleVideoProgressAnalytics, handleProgress];
  ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
  const callback1 = handleProgress.useCallback((arg0, arg1, arg2) => {
    handleVideoProgressAnalytics(arg0, arg1, arg2);
    handleProgress(arg0, arg1, arg2);
  }, items7);
  let obj6 = bounty(15109);
  obj1 = { endMode: END_CARD, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: callback1, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref, initialProgressSec: initialProgress.timestampSec, initialMaxVideoProgressSec: initialProgress.maxTimestampSec, initialVideoDurationSec: null };
  let duration = null;
  if (initialProgress.duration > 0) {
    duration = initialProgress.duration;
  }
  obj1.initialVideoDurationSec = duration;
  const bountiesModalTiming = bounty(15106).useBountiesModalTiming(obj1);
  isEndCardVisible = bountiesModalTiming.isEndCardVisible;
  maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
  videoDuration = bountiesModalTiming.videoDuration;
  const items8 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
  ({ isCtaVisible, handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
  const items9 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
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
  }, items8);
  obj2 = { children: null };
  obj3 = { style: memo, children: null };
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
  }, items9);
  size = {
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
          return videoDuration(sourceQuestContent(closure_2[27]), { bounty, visible, sourceQuestContent });
        }
      });
    }
  };
  obj3.children = videoDuration(bounty(15112).BountyVideo, size);
  const items10 = [videoDuration(flushProgress, obj3), , ];
  const obj8 = bounty(15106);
  items10[1] = videoDuration(flushProgress, { style: memo1, children: videoDuration(sourceQuestContent(15140), { onPress: callback2 }) });
  let rect = { left: size2.isFullWidth, right: size2.isFullWidth, bottom: true, style: memo2, pointerEvents: "box-none", children: videoDuration(tmp2(15133), { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback3 }) };
  items10[2] = videoDuration(bounty(7226).SafeAreaPaddingView, rect);
  obj2.children = items10;
  return closure_12(closure_11, obj2);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let c13 = 0.5625;
const createStyles = fn(4636);
let closure_14 = createStyles.createStyles(() => {
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
  let bounty;
  bounty = bounty(noop.useState(() => {
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
  }), 1)[0];
  let tmp2 = null;
  closure_4 = tmp3;
  const items = [null == bounty, bountyId, sourceQuestContent];
  const effect = noop.useEffect(() => {
    if (closure_4) {
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
      adCreativeType: bountyId(bounty[20]).AdCreativeType.BOUNTY,
      questContent: bountyId(bounty[22]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          return closure_2_10(BountiesModalContentInner, { bounty, sourceQuestContent });
        }
    };
    obj.children = closure_10(bountyId(bounty[26]).BillableAdPlacementImpressionTrackerNative, obj);
    tmp2 = closure_10(bountyId(bounty[32]).ThemeContextProvider, obj);
  }
  return tmp2;
};