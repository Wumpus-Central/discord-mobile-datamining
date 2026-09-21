// === Module 15332: BountiesModalContent ===

// Module 15332 (BountiesModalContent)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import timing from "timing" /* 4757 */;
import timingPresets from "timingPresets" /* 4760 */;
import QuestContent from "QuestContent" /* 5666 */;
import AdCreativeType from "AdCreativeType" /* 5668 */;
import QuestDataUtils from "QuestDataUtils" /* 7935 */;
import AnalyticsActions from "AnalyticsActions" /* 7954 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7964 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 11752 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11767 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 12031 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15280 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7938 */;

require = fn;
function BountiesModalContentInner(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const dismissVideoEndAppStoreOverlay = bounty.dismissVideoEndAppStoreOverlay;
  noop = undefined;
  isEndCardVisible = undefined;
  let maxVideoProgressSeconds;
  const tmp = closure_19();
  closure_3 = tmp;
  let size = sourceQuestContent(dismissVideoEndAppStoreOverlay[10])();
  const width = size.width;
  closure_129_0 = width;
  const height = size.height;
  closure_129_1 = height;
  const tmp4 = sourceQuestContent(dismissVideoEndAppStoreOverlay[11])();
  closure_129_2 = tmp4;
  let items = [width, height, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp4);
  const memo = noop.useMemo(() => {
    const rect = sharedValue;
    const diff = height - sharedValue.left - sharedValue.right;
    const diff1 = memo - sharedValue.top - sharedValue.bottom;
    let result = diff / c17;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c17;
      flag = false;
      result = diff1;
    }
    const size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
  let items1 = [tmp.videoWrapper, memo];
  const items2 = [tmp.closeButton, , , ];
  ({ top: arr3[1], left: arr3[2], width: arr3[3] } = memo);
  const memo1 = noop.useMemo(() => {
    const items = [closure_3.videoWrapper, ];
    const size = { top: memo.top, left: memo.left, width: memo.width, height: memo.height };
    items[1] = size;
    return items;
  }, items1);
  const items3 = [, , , , , ];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = memo);
  const memo2 = noop.useMemo(() => {
    const items = [closure_3.closeButton, ];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items2);
  const memo3 = noop.useMemo(() => {
    const bottomContainer = closure_3.bottomContainer;
    if (memo.isFullWidth) {
      const items = [bottomContainer, closure_3.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, closure_3.bottomContainerNotFullWidth, ];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = memo);
      items1[2] = obj;
    }
    return items1;
  }, items3);
  const items4 = [maxVideoProgressSeconds];
  const stateFromStores = bounty(dismissVideoEndAppStoreOverlay[14]).useStateFromStores(items4, () => BountyStore.isBountyCompleted(bounty.id));
  let obj = bounty(dismissVideoEndAppStoreOverlay[14]);
  const tmp9 = bounty;
  let obj2 = bounty(dismissVideoEndAppStoreOverlay[15]);
  const bountyVideoEndMode = bounty(dismissVideoEndAppStoreOverlay[16]).getBountyVideoEndMode(bounty);
  let result = 1000 * bounty.rewardTimerSeconds;
  noop = result;
  const ref = noop.useRef(null);
  const items5 = [bounty.id, sourceQuestContent];
  const callback = noop.useCallback(memo(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = tmp3;
            bounty = tmp7;
            closure_128_0 = false;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj7 = { value: bounty(tmp32[17]).claimBountyReward(bounty.id, sourceQuestContent), done: false };
            return obj7;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp32;
            const result = bounty(tmp32[18]).openBountyRewardClaimErrorToast(closure_128_1);
            const obj2 = bounty(tmp32[18]);
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
          let hapticFeedbackOnRewardEarnedEnabled = closure_128_0;
          if (closure_128_0) {
            const BountiesMobileQuestBarExperiment = bounty(tmp32[19]).BountiesMobileQuestBarExperiment;
            const obj8 = { location: constants.VIDEO_MODAL_MOBILE };
            hapticFeedbackOnRewardEarnedEnabled = BountiesMobileQuestBarExperiment.getConfig(obj8).hapticFeedbackOnRewardEarnedEnabled;
          }
          if (hapticFeedbackOnRewardEarnedEnabled) {
            const result1 = bounty(tmp32[20]).triggerHapticFeedback(bounty(tmp32[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
            const obj4 = bounty(tmp32[20]);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp32) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp32;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items5);
  let obj3 = bounty(dismissVideoEndAppStoreOverlay[16]);
  const bountiesModalVideoAnalytics = bounty(dismissVideoEndAppStoreOverlay[21]).useBountiesModalVideoAnalytics({ bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, wasPreloaded: false, verticalScrollingPosition: null, isActive: true });
  ({ handleVideoProgressAnalytics, handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
  let obj4 = bounty(dismissVideoEndAppStoreOverlay[21]);
  let obj5 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, wasPreloaded: false, verticalScrollingPosition: null, isActive: true };
  const bountiesModalTiming = bounty(dismissVideoEndAppStoreOverlay[22]).useBountiesModalTiming({ endMode: bountyVideoEndMode, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: handleVideoProgressAnalytics, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref });
  ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
  maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
  const videoDuration = bountiesModalTiming.videoDuration;
  ({ handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
  let obj6 = bounty(dismissVideoEndAppStoreOverlay[22]);
  const bountyAppStoreOverlayPlayback = bounty(dismissVideoEndAppStoreOverlay[16]).useBountyAppStoreOverlayPlayback({ bounty, sourceQuestContent, isActive: true, endMode: bountyVideoEndMode, playerRef: ref, handleVideoEnd, handleVideoPaused, handleVideoResumed, showEndCard });
  const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
  const items6 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
  const items7 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  const callback1 = noop.useCallback(() => {
    dismissVideoEndAppStoreOverlay();
    const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
    const obj3 = { content_name: null, content_id: null, video_progress: null, threshold_met: null, reward_timer_seconds: null };
    const obj = AnalyticsActions;
    obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
    obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_MOBILE;
    let num = videoDuration;
    if (videoDuration == null) {
      num = 0;
    }
    obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
    obj3.threshold_met = 1000 * maxVideoProgressSeconds >= c5;
    obj3.reward_timer_seconds = c5 / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items6);
  let obj8 = { style: memo1, children: null };
  const callback2 = noop.useCallback(() => {
    dismissVideoEndAppStoreOverlay();
    const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
    const obj3 = { content_name: null, content_id: null, video_progress: null, threshold_met: true, reward_timer_seconds: null };
    const obj = AnalyticsActions;
    obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD);
    obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_END_CARD;
    let num = videoDuration;
    if (videoDuration == null) {
      num = 0;
    }
    obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
    obj3.reward_timer_seconds = c5 / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items7);
  const size1 = { bounty, sourceQuestContent, isCompleted: stateFromStores, isCtaVisible: null, isEndCardVisible: null, isProgressBarVisible: null, orbsBalance: null, handleVideoEnd: null, handleVideoProgress: null, handleVideoPaused: null, handleVideoResumed: null, handleVideoError: null, onLoadStart: null, onBuffer: null, onFirstFrame: null, onVideoTracks: null, rewardRemainingSeconds: null, rewardTotalSeconds: null, normalizedProgress: null, repeat: null, initialProgress: null, isActive: true, playerRef: null, width: null, height: null, videoEndPeekScale: null, renderEndCard: null };
  if (isCtaVisible) {
    isCtaVisible = !isVideoEndAppStoreOverlayVisible;
  }
  size1.isCtaVisible = isCtaVisible;
  size1.isEndCardVisible = isEndCardVisible;
  let tmp24 = !isEndCardVisible;
  if (!isEndCardVisible) {
    tmp24 = !isVideoEndAppStoreOverlayVisible;
  }
  size1.isProgressBarVisible = tmp24;
  size1.orbsBalance = obj2.useFetchVirtualCurrencyBalance().balance;
  size1.handleVideoEnd = handleVideoEndWithAppStore;
  size1.handleVideoProgress = handleVideoProgress;
  size1.handleVideoPaused = handlePaused;
  size1.handleVideoResumed = handleResumed;
  size1.handleVideoError = handleVideoErrorAnalytics;
  size1.onLoadStart = handleLoadStartAnalytics;
  size1.onBuffer = handleBufferAnalytics;
  size1.onFirstFrame = handleReadyForDisplayAnalytics;
  size1.onVideoTracks = handleVideoTracksAnalytics;
  size1.rewardRemainingSeconds = rewardRemainingSeconds;
  size1.rewardTotalSeconds = rewardTotalSeconds;
  size1.normalizedProgress = normalizedProgress;
  size1.repeat = shouldRepeatVideo;
  size1.initialProgress = initialProgress;
  size1.playerRef = ref;
  ({ width: obj9.width, height: obj9.height } = memo);
  size1.videoEndPeekScale = bounty.videoEndPeekScale;
  size1.renderEndCard = function renderEndCard() {
    return closure_2_14(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
      adContentId: bounty.id,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
      sourceQuestContent,
      overrideVisibility: isEndCardVisible,
      children() {
        return closure_2_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[31]), { bounty, visible, sourceQuestContent });
      }
    });
  };
  obj8.children = closure_14(bounty(dismissVideoEndAppStoreOverlay[29]).BountyVideo, size1);
  const items8 = [closure_14(isEndCardVisible, obj8), , ];
  let obj7 = bounty(dismissVideoEndAppStoreOverlay[16]);
  items8[1] = closure_14(isEndCardVisible, { style: memo2, children: closure_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[32]), { onPress: callback1 }) });
  let rect = { left: memo.isFullWidth, right: memo.isFullWidth, bottom: true, style: memo3, pointerEvents: "box-none", children: null };
  const obj11 = { bounty, visible: null, sourceQuestContent: null, onClose: null };
  const obj10 = { style: memo2, children: closure_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[32]), { onPress: callback1 }) };
  if (isEndCardVisible) {
    isEndCardVisible = !isVideoEndAppStoreOverlayVisible;
  }
  const obj12 = { children: null };
  obj11.visible = isEndCardVisible;
  obj11.sourceQuestContent = sourceQuestContent;
  obj11.onClose = callback2;
  rect.children = closure_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[34]), obj11);
  items8[2] = closure_14(tmp9(dismissVideoEndAppStoreOverlay[33]).SafeAreaPaddingView, rect);
  obj12.children = items8;
  return closure_16(closure_15, obj12);
}
function BountiesModalContentWithAppStore(arg0) {
  let memo;
  let sharedValue;
  c4 = undefined;
  noop = undefined;
  ({ bounty, sourceQuestContent } = arg0);
  const height = memo(sharedValue[10])().height;
  let size = memo(sharedValue[10])();
  const width = size.width;
  closure_129_0 = width;
  const height2 = size.height;
  closure_129_1 = height2;
  const tmp3 = memo(sharedValue[11])();
  closure_129_2 = tmp3;
  const items = [width, height2, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp3);
  memo = noop.useMemo(() => {
    const rect = sharedValue;
    const diff = height - sharedValue.left - sharedValue.right;
    const diff1 = memo - sharedValue.top - sharedValue.bottom;
    let result = diff / c17;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c17;
      flag = false;
      result = diff1;
    }
    const size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
  sharedValue = height(sharedValue[35]).useSharedValue(1);
  let obj = height(sharedValue[35]);
  const tmp = memo;
  const tmp2 = sharedValue;
  const sharedValue1 = height(sharedValue[35]).useSharedValue(0);
  let obj2 = height(sharedValue[35]);
  [tmp8, c4] = sharedValue1(noop.useState(null), 2);
  noop = noop.useRef(null);
  noop.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp9;
  const items1 = [height, , ];
  ({ top: arr2[1], height: arr2[2] } = memo);
  const memo1 = noop.useMemo(() => closure_2_10({ windowHeight: height, videoTop: memo.top, videoHeight: memo.height }), items1);
  const items2 = [height];
  const items3 = [sharedValue1];
  const memo2 = noop.useMemo(() => React7(height), items2);
  const showVideoEndAppStoreOverlay = noop.useCallback((current) => {
    closure_6.current = Date.now();
    closure_5.current = current;
    _undefined(current);
    const result = sharedValue1.set(timing.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    current.trackOverlayEvent(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items3);
  const items4 = [sharedValue1, sharedValue];
  const callback1 = noop.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const _Date = Date;
      current.trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const result = AppStoreOverlayTelemetryManager.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined(null);
      const result1 = sharedValue.set(timing.withTiming(1, timingPresets.timingStandard));
      const result2 = sharedValue1.set(0);
    }
  }, items4);
  const items5 = [callback1, null != tmp8, showVideoEndAppStoreOverlay, sharedValue, memo1];
  const memo3 = noop.useMemo(() => ({ videoEndPeekTargetScale: memo1, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay, dismissVideoEndAppStoreOverlay: callback1 }), items5);
  const obj3 = { value: memo3, children: null };
  const items6 = [closure_14(BountiesModalContentInner, { bounty, sourceQuestContent, videoEndPeekScale: sharedValue, dismissVideoEndAppStoreOverlay: callback1 }), ];
  let tmp16Result = null;
  if (null != tmp8) {
    const obj4 = { metadata: tmp8.metadata, sheetHeight: memo2, revealProgress: sharedValue1, onDismiss: callback1, onInstallPress: tmp8.onInstallPress };
    tmp16Result = closure_14(tmp(tmp2[41]), obj4);
  }
  items6[1] = tmp16Result;
  obj3.children = items6;
  return closure_16(height(sharedValue[40]).BountyVideoEndAppStoreProvider, obj3);
}
const View = fn(17).View;
const QuestsExperimentLocations = fn(5661).QuestsExperimentLocations;
const BountiesModalConstants = fn(15284);
({ getBountyVideoEndAppStoreSheetHeight: closure_9, getBountyVideoEndPeekTargetScale: c10 } = BountiesModalConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, ComponentActions: closure_12 } = Constants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 0.5625;
const initialProgress = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
const createStyles = fn(4756);
let closure_19 = createStyles.createStyles(() => {
  const obj = { videoWrapper: { position: "absolute" }, closeButton: { position: "absolute" }, bottomContainer: { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" }, bottomContainerFullWidth: null, bottomContainerNotFullWidth: null };
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
      adCreativeType: bountyId(bounty[24]).AdCreativeType.BOUNTY,
      questContent: bountyId(bounty[26]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          return closure_2_14(BountiesModalContentWithAppStore, { bounty, sourceQuestContent });
        }
    };
    obj.children = closure_14(bountyId(bounty[30]).BillableAdPlacementImpressionTrackerNative, obj2);
    tmp2 = closure_14(bountyId(bounty[43]).ThemeContextProvider, obj);
  }
  return tmp2;
};