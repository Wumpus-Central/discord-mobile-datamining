// discord_app/modules/quests/native/BountiesModal/BountiesModalContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestDataUtils from "../../utils/QuestDataUtils.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import AppStoreOverlayTelemetryManager from "../AppStoreOverlayTelemetryManager.tsx";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BountyStore from "../../BountyStore.tsx";

require = fn;
function BountiesModalContentInner(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const dismissVideoEndAppStoreOverlay = bounty.dismissVideoEndAppStoreOverlay;
  let balance;
  c6 = undefined;
  closure_7 = undefined;
  isEndCardVisible = undefined;
  const tmp = closure_20();
  asyncGeneratorStep = tmp;
  let size = sourceQuestContent(dismissVideoEndAppStoreOverlay[10])();
  const width = size.width;
  closure_129_0 = width;
  const height = size.height;
  closure_129_1 = height;
  const tmp4 = sourceQuestContent(dismissVideoEndAppStoreOverlay[11])();
  closure_129_2 = tmp4;
  let items = [width, height, , , ,];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp4);
  const memo = balance.useMemo(() => {
    const rect = sharedValue;
    const diff = height - sharedValue.left - sharedValue.right;
    const diff1 = memo - sharedValue.top - sharedValue.bottom;
    let result = diff / c18;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c18;
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
  const memo1 = balance.useMemo(() => {
    const items = [closure_3.videoWrapper];
    const size = { top: memo.top, left: memo.left, width: memo.width, height: memo.height };
    items[1] = size;
    return items;
  }, items1);
  const items3 = [, , , , ,];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = memo);
  const memo2 = balance.useMemo(() => {
    const items = [closure_3.closeButton];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items2);
  const memo3 = balance.useMemo(() => {
    const bottomContainer = closure_3.bottomContainer;
    if (memo.isFullWidth) {
      const items = [bottomContainer, closure_3.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, closure_3.bottomContainerNotFullWidth];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = memo);
      items1[2] = obj;
    }
    return items1;
  }, items3);
  const items4 = [closure_7];
  const stateFromStores = bounty(dismissVideoEndAppStoreOverlay[17]).useStateFromStores(items4, () =>
    BountyStore.isBountyCompleted(bounty.id),
  );
  let obj = bounty(dismissVideoEndAppStoreOverlay[17]);
  const tmp9 = bounty;
  balance = bounty(dismissVideoEndAppStoreOverlay[18]).useFetchVirtualCurrencyBalance().balance;
  let obj2 = bounty(dismissVideoEndAppStoreOverlay[18]);
  [tmp12, c6] = memo(balance.useState(null), 2);
  closure_7 = balance.useRef(balance);
  const items5 = [balance];
  const effect = balance.useEffect(() => {
    closure_7.current = balance;
  }, items5);
  const tmp11 = memo(balance.useState(null), 2);
  const bountyVideoEndMode = bounty(dismissVideoEndAppStoreOverlay[19]).getBountyVideoEndMode(bounty);
  let result = 1000 * bounty.rewardTimerSeconds;
  c8 = result;
  const ref = balance.useRef(null);
  const items6 = [bounty.id, sourceQuestContent];
  const callback = balance.useCallback(
    asyncGeneratorStep(async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
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
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_1 = tmp3;
              bounty = tmp7;
              closure_128_1 = undefined;
              closure_128_0 = false;
              const current = ref.current;
              closure_128_1 = current;
              if (null != current) {
                _undefined(current);
              }
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: bounty(tmp39[20]).claimBountyReward(bounty.id, sourceQuestContent), done: false };
              return obj6;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_2 = tmp39;
              let result = bounty(tmp39[21]).openBountyRewardClaimErrorToast(closure_128_2);
              closure_129_6(null);
              let obj2 = bounty(tmp39[21]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = true;
              c3 = 0;
            }
            let tmp20 = closure_128_0;
            if (closure_128_0) {
              tmp20 = null != closure_128_1;
            }
            if (tmp20) {
              closure_129_6(closure_128_1 + closure_1_8);
              const BountiesMobileQuestBarExperiment = bounty(tmp39[22]).BountiesMobileQuestBarExperiment;
              const obj7 = { location: constants.VIDEO_MODAL_MOBILE };
              if (BountiesMobileQuestBarExperiment.getConfig(obj7).hapticFeedbackOnRewardEarnedEnabled) {
                (function doRewardEarnedHapticFeedback() {
                  let sum;
                  let num = 0.25;
                  if (obj.isAndroid()) {
                    num = 0.15;
                  }
                  obj = closure_1_0(1364);
                  const tmpResult = closure_1_0(1364);
                  const items = [];
                  let num3 = 0;
                  let num4 = 0;
                  do {
                    let _Math = Math;
                    let result = arr[num3] / tmp4;
                    let rounded = Math.round(
                      result * (closure_1_0(10765).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS - 100),
                    );
                    let obj2 = {
                      time: num4,
                      type: "continuous",
                      duration: rounded,
                      intensity: num + tmp5 * (num3 / 5),
                      sharpness: 0.5,
                    };
                    let arr4 = items.push(obj2);
                    sum = num4 + rounded;
                    num3 = num3 + 1;
                    num4 = sum;
                  } while (num3 < 6);
                  items.push({ time: sum + 100, type: "transient", intensity: 1, sharpness: 0.95 });
                  arr = Array.from({ length: 6 }, (arg0, arg1) => 6 - arg1);
                  const obj3 = { time: sum + 100, type: "transient", intensity: 1, sharpness: 0.95 };
                  closure_1_0(4833).triggerPattern(items);
                  const tmp7Result = closure_1_0(4833);
                })();
              }
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp39) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp39;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items6,
  );
  let obj3 = bounty(dismissVideoEndAppStoreOverlay[19]);
  const bountiesModalVideoAnalytics = bounty(dismissVideoEndAppStoreOverlay[23]).useBountiesModalVideoAnalytics({
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
  let obj4 = bounty(dismissVideoEndAppStoreOverlay[23]);
  let obj5 = {
    bountyId: bounty.id,
    sourceQuestContent,
    rewardDurationMs: result,
    wasPreloaded: false,
    verticalScrollingPosition: null,
    isActive: true,
  };
  const bountiesModalTiming = bounty(dismissVideoEndAppStoreOverlay[24]).useBountiesModalTiming({
    endMode: bountyVideoEndMode,
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
  ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
  const maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
  const videoDuration = bountiesModalTiming.videoDuration;
  ({
    handleVideoEnd,
    handleVideoProgress,
    handleVideoPaused,
    handleVideoResumed,
    showEndCard,
    rewardRemainingSeconds,
    rewardTotalSeconds,
    normalizedProgress,
  } = bountiesModalTiming);
  let obj6 = bounty(dismissVideoEndAppStoreOverlay[24]);
  const bountyAppStoreOverlayPlayback = bounty(dismissVideoEndAppStoreOverlay[19]).useBountyAppStoreOverlayPlayback({
    bounty,
    sourceQuestContent,
    isActive: true,
    endMode: bountyVideoEndMode,
    playerRef: ref,
    handleVideoEnd,
    handleVideoPaused,
    handleVideoResumed,
    showEndCard,
  });
  const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
  const items7 = [
    bounty.id,
    dismissVideoEndAppStoreOverlay,
    maxVideoProgressSeconds,
    result,
    sourceQuestContent,
    videoDuration,
  ];
  ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
  const items8 = [
    bounty.id,
    dismissVideoEndAppStoreOverlay,
    maxVideoProgressSeconds,
    result,
    sourceQuestContent,
    videoDuration,
  ];
  const callback1 = balance.useCallback(() => {
    dismissVideoEndAppStoreOverlay();
    const obj2 = {
      adContentId: bounty.id,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      event: constants.AD_VIDEO_MODAL_CLOSED,
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
    obj3.threshold_met = 1000 * maxVideoProgressSeconds >= c8;
    obj3.reward_timer_seconds = c8 / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items7);
  const obj8 = { style: memo1, children: null };
  const callback2 = balance.useCallback(() => {
    dismissVideoEndAppStoreOverlay();
    const obj2 = {
      adContentId: bounty.id,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      event: constants.AD_VIDEO_MODAL_CLOSED,
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
    obj3.reward_timer_seconds = c8 / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items8);
  const size1 = {
    bounty,
    sourceQuestContent,
    isCompleted: stateFromStores,
    isCtaVisible: null,
    isEndCardVisible: null,
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
    isActive: true,
    playerRef: null,
    width: null,
    height: null,
    renderEndCard: null,
  };
  if (isCtaVisible) {
    isCtaVisible = !isVideoEndAppStoreOverlayVisible;
  }
  size1.isCtaVisible = isCtaVisible;
  size1.isEndCardVisible = isEndCardVisible;
  let tmp27 = !isEndCardVisible;
  if (!isEndCardVisible) {
    tmp27 = !isVideoEndAppStoreOverlayVisible;
  }
  size1.isProgressBarVisible = tmp27;
  size1.orbsBalance = tmp12;
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
  size1.renderEndCard = function renderEndCard() {
    return __initData(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
      adContentId: bounty.id,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
      sourceQuestContent,
      overrideVisibility: isEndCardVisible,
      children() {
        return closure_2_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[33]), {
          bounty,
          visible,
          sourceQuestContent,
        });
      },
    });
  };
  obj8.children = closure_15(bounty(dismissVideoEndAppStoreOverlay[31]).BountyVideo, size1);
  const items9 = [closure_15(c6, obj8), ,];
  let obj7 = bounty(dismissVideoEndAppStoreOverlay[19]);
  items9[1] = closure_15(c6, {
    style: memo2,
    children: closure_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[34]), { onPress: callback1 }),
  });
  let rect = {
    left: memo.isFullWidth,
    right: memo.isFullWidth,
    bottom: true,
    style: memo3,
    pointerEvents: "box-none",
    children: null,
  };
  const obj11 = { bounty, visible: null, sourceQuestContent: null, onClose: null };
  const obj10 = {
    style: memo2,
    children: closure_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[34]), { onPress: callback1 }),
  };
  if (isEndCardVisible) {
    isEndCardVisible = !isVideoEndAppStoreOverlayVisible;
  }
  const obj12 = { children: null };
  obj11.visible = isEndCardVisible;
  obj11.sourceQuestContent = sourceQuestContent;
  obj11.onClose = callback2;
  rect.children = closure_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[36]), obj11);
  items9[2] = closure_15(tmp9(dismissVideoEndAppStoreOverlay[35]).SafeAreaPaddingView, rect);
  obj12.children = items9;
  return closure_17(closure_16, obj12);
}
function BountiesModalContentWithAppStore(arg0) {
  let memo;
  let sharedValue;
  c3 = undefined;
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
  const items = [width, height2, , , ,];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp3);
  memo = noop.useMemo(() => {
    const rect = sharedValue;
    const diff = height - sharedValue.left - sharedValue.right;
    const diff1 = memo - sharedValue.top - sharedValue.bottom;
    let result = diff / c18;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c18;
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
  sharedValue = height(sharedValue[37]).useSharedValue(0);
  let obj = height(sharedValue[37]);
  const tmp = memo;
  const tmp2 = sharedValue;
  [tmp7, c3] = noop.useState(null);
  _slicedToArray = noop.useRef(null);
  noop = noop.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp8;
  const items1 = [height, , ,];
  ({ top: arr2[1], width: arr2[2], height: arr2[3] } = memo);
  const memo1 = noop.useMemo(
    () => closure_2_11({ windowHeight: height, videoTop: memo.top, videoWidth: memo.width, videoHeight: memo.height }),
    items1,
  );
  const items2 = [height];
  const items3 = [sharedValue];
  const memo2 = noop.useMemo(() => closure_2_10(height), items2);
  const showVideoEndAppStoreOverlay = noop.useCallback((current) => {
    closure_5.current = Date.now();
    closure_4.current = current;
    _undefined(current);
    const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    current.trackOverlayEvent(
      constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
      appId,
      AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
    );
  }, items3);
  const items4 = [sharedValue];
  const callback1 = noop.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const _Date = Date;
      current.trackOverlayEvent(
        QUEST_APP_STORE_OVERLAY_CLOSED,
        appId,
        AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
        Date.now() - ref2.current,
      );
      const result = AppStoreOverlayTelemetryManager.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined(null);
      const result1 = sharedValue.set(timing.withTiming(0, timingPresets.timingStandard));
    }
  }, items4);
  const items5 = [callback1, null != tmp7, showVideoEndAppStoreOverlay, sharedValue, memo1];
  const memo3 = noop.useMemo(
    () => ({
      videoEndPeekProgress: sharedValue,
      videoEndPeekTargetScale: memo1,
      isVideoEndAppStoreOverlayVisible,
      showVideoEndAppStoreOverlay,
      dismissVideoEndAppStoreOverlay: callback1,
    }),
    items5,
  );
  let obj2 = { value: memo3, children: null };
  const items6 = [
    closure_15(BountiesModalContentInner, { bounty, sourceQuestContent, dismissVideoEndAppStoreOverlay: callback1 }),
  ];
  let tmp15Result = null;
  if (null != tmp7) {
    const obj3 = {
      metadata: tmp7.metadata,
      sheetHeight: memo2,
      revealProgress: sharedValue,
      onDismiss: callback1,
      onInstallPress: tmp7.onInstallPress,
    };
    tmp15Result = closure_15(tmp(tmp2[43]), obj3);
  }
  items6[1] = tmp15Result;
  obj2.children = items6;
  return closure_17(height(sharedValue[42]).BountyVideoEndAppStoreProvider, obj2);
}
const View = fn(17).View;
const QuestConstants = fn(5953);
({ BOUNTY_ORB_AMOUNT: closure_8, QuestsExperimentLocations: closure_9 } = QuestConstants);
const BountiesModalConstants = fn(14749);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: closure_11 } = BountiesModalConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = Constants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
let c18 = 0.5625;
const initialProgress = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
const createStyles = fn(4866);
let closure_20 = createStyles.createStyles(() => {
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
  _slicedToArray = undefined;
  const bounty = _slicedToArray(
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
  _slicedToArray = tmp3;
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
      adCreativeType: bountyId(bounty[26]).AdCreativeType.BOUNTY,
      questContent: bountyId(bounty[28]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
        return __initData(BountiesModalContentWithAppStore, { bounty, sourceQuestContent });
      },
    };
    obj.children = closure_15(bountyId(bounty[32]).BillableAdPlacementImpressionTrackerNative, obj2);
    tmp2 = closure_15(bountyId(bounty[45]).ThemeContextProvider, obj);
  }
  return tmp2;
}
