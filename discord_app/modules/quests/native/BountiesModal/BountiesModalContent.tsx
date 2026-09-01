// discord_app/modules/quests/native/BountiesModal/BountiesModalContent.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../BountyStore.tsx";
import { QuestsExperimentLocations } from "../../QuestConstants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function BountiesModalContentInner(bounty) {
  bounty = bounty.bounty;
  let width = bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let height = sourceQuestContent;
  dependencyMap = undefined;
  let memo;
  let React;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  let isEndCardVisible;
  let maxVideoProgressSeconds;
  let videoDuration;
  let tmp = callback3();
  dependencyMap = tmp;
  width = undefined;
  height = undefined;
  dependencyMap = undefined;
  const size = height(1493)();
  width = size.width;
  height = size.height;
  const tmp4 = height(1628)();
  dependencyMap = tmp4;
  let obj = React;
  let items = [width, height, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp4);
  memo = React.useMemo(() => {
    const rect = closure_2;
    const diff = width - closure_2.left - closure_2.right;
    const diff1 = height - closure_2.top - closure_2.bottom;
    let result = diff / closure_1_13;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * closure_1_13;
      flag = false;
      result = diff1;
    }
    return { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
  }, items);
  let items1 = [tmp.videoWrapper, memo];
  const items2 = [tmp.closeButton, , , ];
  ({ top: arr3[1], left: arr3[2], width: arr3[3] } = memo);
  const memo1 = React.useMemo(() => {
    const items = [closure_2.videoWrapper, { top: memo.top, left: memo.left, width: memo.width, height: memo.height }];
    return items;
  }, items1);
  const items3 = [, , , , , ];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = memo);
  const memo2 = React.useMemo(() => {
    const items = [closure_2.closeButton, ];
    const obj = { top: memo.top + height(closure_2[11]).space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - height(closure_2[11]).space.PX_32;
    obj[1] = diff - height(closure_2[11]).space.PX_8;
    items[1] = obj;
    return items;
  }, items2);
  const memo3 = React.useMemo(() => {
    const bottomContainer = closure_2.bottomContainer;
    if (memo.isFullWidth) {
      const items = [bottomContainer, tmp2.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, tmp2.bottomContainerNotFullWidth, ];
      const obj = { left: null, width: null };
      ({ left: obj[0], width: obj[1] } = memo);
      items1[2] = obj;
    }
    return items1;
  }, items3);
  obj1 = width(589);
  const items4 = [flushProgress];
  const stateFromStores = obj1.useStateFromStores(items4, () => flushProgress.isBountyCompleted(width.id));
  let obj2 = width(11352);
  let obj3 = width(11118);
  const bountiesExperience = obj3.useBountiesExperience(handleVideoProgressAnalytics.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  const BountyVideoEndMode = width(14621).BountyVideoEndMode;
  const tmp12 = loopingEnabled ? BountyVideoEndMode.LOOP : BountyVideoEndMode.END_CARD;
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      let result = 1000 * bounty.rewardTimerSeconds;
    }
    React = result;
    let tmp9Result = tmp9(14624);
    obj = { bountyId: null, endMode: null };
    obj[0] = bounty.id;
    obj[1] = tmp12;
    const bountyVideoProgressPersistence = tmp9Result.useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    const items5 = [bounty.id, sourceQuestContent];
    const callback = obj.useCallback(memo(function*() {
      closure_1 = tmp3;
      c3 = 1;
      yield closure_1_0(closure_1_2[17]).claimBountyReward(closure_1_0.id, closure_1_1);
      if (1 === tmp7) {
        c3 = 0;
        closure_0 = closure_2;
        obj1 = closure_1_0(closure_1_2[18]);
        const result = obj1.openBountyRewardClaimErrorToast(closure_0);
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    }), items5);
    tmp9Result = tmp9(14625);
    obj = { bountyId: null, sourceQuestContent: null, rewardDurationMs: null, initialPlaybackTimeSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null, wasPreloaded: false, startupPath: "carousel", verticalScrollingPosition: null };
    obj[0] = bounty.id;
    obj[1] = sourceQuestContent;
    obj[2] = result;
    ({ timestampSec: obj8[3], maxTimestampSec: obj8[4], duration: obj8[5] } = initialProgress);
    const bountiesModalVideoAnalytics = tmp9Result.useBountiesModalVideoAnalytics(obj);
    handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
    const items6 = [handleVideoProgressAnalytics, handleProgress];
    ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
    const callback1 = obj.useCallback((arg0, arg1, arg2) => {
      handleVideoProgressAnalytics(arg0, arg1, arg2);
      handleProgress(arg0, arg1, arg2);
    }, items6);
    obj1 = { endMode: null, rewardDurationMs: null, isCompleted: null, onRewardEarned: null, onVideoProgress: null, onVideoEnd: null, onVideoLooped: null, onVideoPaused: null, onVideoResumed: null, initialProgressSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null };
    obj1[0] = tmp12;
    obj1[1] = result;
    obj1[2] = stateFromStores;
    obj1[3] = callback;
    obj1[4] = callback1;
    obj1[5] = handleVideoEndAnalytics;
    obj1[6] = handleVideoLoopedAnalytics;
    obj1[7] = handleVideoPausedAnalytics;
    obj1[8] = handleVideoResumedAnalytics;
    ({ timestampSec: obj10[9], maxTimestampSec: obj10[10] } = initialProgress);
    let duration = null;
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj1[11] = duration;
    const bountiesModalTiming = tmp9(14621).useBountiesModalTiming(obj1);
    isEndCardVisible = bountiesModalTiming.isEndCardVisible;
    maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
    videoDuration = bountiesModalTiming.videoDuration;
    const items7 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    ({ isCtaVisible, handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
    const items8 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    const callback2 = obj.useCallback(() => {
      let obj = width(closure_2[20]);
      obj = { adContentId: width.id, adCreativeType: width(closure_2[21]).AdCreativeType.BOUNTY, event: isEndCardVisible.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
      obj = { content_name: width(closure_2[22]).getQuestContentName(width(closure_2[23]).QuestContent.VIDEO_MODAL_MOBILE), content_id: width(closure_2[23]).QuestContent.VIDEO_MODAL_MOBILE, video_progress: null, threshold_met: null, reward_timer_seconds: null };
      const obj4 = width(closure_2[22]);
      const tmp = closure_2;
      let num = videoDuration;
      if (videoDuration == null) {
        num = 0;
      }
      obj[2] = width(closure_2[24]).formatVideoProgressRatio(maxVideoProgressSeconds, num);
      obj[3] = 1000 * maxVideoProgressSeconds >= c4;
      obj[4] = c4 / 1000;
      obj[3] = obj;
      obj[4] = height;
      obj.trackAdContentEvent(obj);
      flushProgress();
      const obj5 = width(closure_2[24]);
      height(tmp[25]).hideModal();
    }, items7);
    obj2 = { children: null };
    obj3 = { style: null, children: null };
    obj3[0] = memo1;
    callback3 = obj.useCallback(() => {
      let obj = width(closure_2[20]);
      obj = { adContentId: width.id, adCreativeType: width(closure_2[21]).AdCreativeType.BOUNTY, event: isEndCardVisible.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
      obj = { content_name: width(closure_2[22]).getQuestContentName(width(closure_2[23]).QuestContent.VIDEO_MODAL_END_CARD), content_id: width(closure_2[23]).QuestContent.VIDEO_MODAL_END_CARD, video_progress: null, threshold_met: true, reward_timer_seconds: null };
      const obj4 = width(closure_2[22]);
      const tmp = closure_2;
      let num = videoDuration;
      if (videoDuration == null) {
        num = 0;
      }
      obj[2] = width(closure_2[24]).formatVideoProgressRatio(maxVideoProgressSeconds, num);
      obj[4] = c4 / 1000;
      obj[3] = obj;
      obj[4] = height;
      obj.trackAdContentEvent(obj);
      flushProgress();
      const obj5 = width(closure_2[24]);
      const tmp2 = maxVideoProgressSeconds;
      height(tmp[25]).hideModal();
    }, items8);
    let obj4 = { isActive: true, bounty: null, sourceQuestContent: null, isCompleted: null, isCtaVisible: null, isEndCardVisible: null, isProgressBarVisible: null, orbsBalance: null, handleVideoEnd: null, handleVideoProgress: null, handleVideoPaused: null, handleVideoResumed: null, handleVideoError: null, onLoadStart: null, onBuffer: null, onFirstFrame: null, onVideoTracks: null, rewardRemainingSeconds: null, rewardTotalSeconds: null, normalizedProgress: null, repeat: null, initialProgress: null, renderEndCard: null, isScrollIndicatorEnabled: false, width: null, height: null };
    obj4[1] = bounty;
    obj4[2] = sourceQuestContent;
    obj4[3] = stateFromStores;
    obj4[4] = isCtaVisible;
    obj4[5] = isEndCardVisible;
    obj4[6] = !isEndCardVisible;
    obj4[7] = obj2.useFetchVirtualCurrencyBalance().balance;
    obj4[8] = handleVideoEnd;
    obj4[9] = handleVideoProgress;
    obj4[10] = handleVideoPaused;
    obj4[11] = handleVideoResumed;
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
    obj4[22] = function renderEndCard() {
      return videoDuration(width(closure_2[27]).QuestContentImpressionTrackerNative, {
        adContentId: width.id,
        adCreativeType: width(closure_2[21]).AdCreativeType.BOUNTY,
        questContent: width(closure_2[23]).QuestContent.VIDEO_MODAL_END_CARD,
        sourceQuestContent: height,
        overrideVisibility: isEndCardVisible,
        children() {
          return closure_1_10(closure_1_1(closure_1_2[28]), { bounty: closure_0, visible: closure_8, sourceQuestContent: closure_1 });
        }
      });
    };
    ({ width: obj13[24], height: obj13[25] } = memo);
    obj3[1] = videoDuration(tmp9(14627).BountyVideo, obj4);
    const items9 = [videoDuration(handleProgress, obj3), , ];
    let obj5 = { style: null, children: null };
    obj5[0] = memo2;
    const obj6 = { onPress: null };
    obj6[0] = callback2;
    obj5[1] = videoDuration(tmp2(14656), obj6);
    items9[1] = videoDuration(handleProgress, obj5);
    const obj7 = { left: null, right: null, bottom: true, style: null, pointerEvents: "box-none", children: null };
    ({ isFullWidth: obj16[0], isFullWidth: obj16[1] } = memo);
    obj7[3] = memo3;
    const obj8 = { bounty: null, visible: null, sourceQuestContent: null, onClose: null };
    obj8[0] = bounty;
    obj8[1] = isEndCardVisible;
    obj8[2] = sourceQuestContent;
    obj8[3] = callback3;
    obj7[5] = videoDuration(tmp2(14648), obj8);
    items9[2] = videoDuration(tmp9(5553).SafeAreaPaddingView, obj7);
    obj2[0] = items9;
    return callback2(closure_11, obj2);
  }
  result = 1000 * rewardTimerSeconds;
}
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let c13 = 0.5625;
let closure_14 = createCacheKey.createStyles(() => {
  let obj = { videoWrapper: { position: "absolute" }, closeButton: { position: "absolute" }, bottomContainer: null, bottomContainerFullWidth: null, bottomContainerNotFullWidth: null };
  obj = { position: "absolute", bottom: ThemesDefault.space.PX_24, justifyContent: "flex-end" };
  obj[2] = obj;
  obj = { left: ThemesDefault.space.PX_16, right: ThemesDefault.space.PX_16 };
  obj[3] = obj;
  obj[4] = { paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16 };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default function BountiesModalContent(arg0) {
  ({ bountyId: require, sourceQuestContent } = arg0);
  let found;
  let obj = require(found[32]);
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  found = questHomeBounties.find((id) => id.id === closure_0);
  let tmp4 = null;
  if (null != found) {
    obj = { theme: null, children: null };
    obj[0] = ThemeTypes.DARKER;
    obj = { adContentId: null, adCreativeType: null, questContent: null, sourceQuestContent: null, overrideVisibility: true, children: null };
    obj[0] = found.id;
    obj[1] = tmp(tmp2[21]).AdCreativeType.BOUNTY;
    obj[2] = tmp(tmp2[23]).QuestContent.VIDEO_MODAL_MOBILE;
    obj[3] = sourceQuestContent;
    obj[5] = function children() {
      return closure_1_10(closure_1_15, { bounty: found, sourceQuestContent });
    };
    obj[1] = callback(tmp(tmp2[27]).BillableAdPlacementImpressionTrackerNative, obj);
    tmp4 = callback(tmp(tmp2[33]).ThemeContextProvider, obj);
  }
  return tmp4;
};