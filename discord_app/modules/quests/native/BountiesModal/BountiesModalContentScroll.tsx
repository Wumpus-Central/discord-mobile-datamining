// === Module 15004: BountiesModalContentScroll ===

// Module 15004 (BountiesModalContentScroll)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import ThemeContextProvider from "ThemeContextProvider" /* 4285 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import QuestContent from "QuestContent" /* 5449 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import QuestActionCreators from "QuestActionCreators" /* 11276 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11483 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 11497 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11512 */;
import useBountiesExperience from "useBountiesExperience" /* 11520 */;
import BountiesVerticalScrollExperiment from "BountiesVerticalScrollExperiment" /* 11521 */;
import shared_ThemeTypes from "shared/ThemeTypes" /* 13396 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15002 */;
import BountiesScrollPromptFooter from "BountiesScrollPromptFooter" /* 15006 */;
import useBountiesRecapScroll from "useBountiesRecapScroll" /* 15009 */;
import useBountySwipeUpNux from "useBountySwipeUpNux" /* 15010 */;
import useBountiesAutoScroll from "useBountiesAutoScroll" /* 15012 */;
import BountiesScrollVideoItem from "BountiesScrollVideoItem" /* 15014 */;
import BountiesScrollRecapPage from "BountiesScrollRecapPage" /* 15049 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7702 */;

require = fn;
function ItemSeparator(trailingItem) {
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    let obj = { style: null };
    obj = { height: PX_8 };
    obj.style = obj;
    tmp = __initData(timestampProducer, obj);
  }
  return tmp;
}
function BountiesRecapPullZone(height) {
  return __initData(timestampProducer, { style: { height: height.height } });
}
function BountiesScrollVideoItemContainer(index) {
  index = index.index;
  const slotHeight = index.slotHeight;
  const scrollY = index.scrollY;
  const isPeekEnabled = index.isPeekEnabled;
  ({ style, children } = index);
  index(scrollY[12]);
  const fn = function c() {
    const result = (scrollY.get() - index * slotHeight) / slotHeight;
    const absolute = Math.abs(result);
    let num = 0;
    if (isPeekEnabled) {
      num = 0;
      if (result < 0) {
        num = 0;
        if (1 === index) {
          num = 0.8;
        }
      }
    }
    const obj = { opacity: null };
    const items = [1, 1, num];
    obj.opacity = ReanimatedRexport.interpolate(absolute, [0, 0.3, 1], items, ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  let obj = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY: 0.8, interpolate: index(scrollY[12]).interpolate, FADE_DEADBAND: 0.3, Extrapolation: index(scrollY[12]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 6532652233494;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: null, children };
  let items = [style, animatedStyle];
  obj.style = items;
  return closure_15(slotHeight(scrollY[12]).View, obj);
}
function BountiesModalContentScrollInner(arg0) {
  ({ initialBountyId: require, sourceQuestContent } = arg0);
  noop = undefined;
  let ownedByVerticalScrollExperiment;
  c15 = undefined;
  let handleRecapMomentumEnd;
  let memo6;
  __initData6 = undefined;
  __initData7 = undefined;
  peekScale = undefined;
  let cancel;
  let dismissOnClose;
  let takeDidAutoScroll;
  let onPlaybackTimeChange;
  let onEndCardVisible;
  let pauseCountdown;
  let resumeCountdown;
  let memo7;
  let callback4;
  let callback5;
  let onClose;
  let animatedStyle;
  let first5;
  closure_65 = undefined;
  let memo11;
  let derivedValue;
  let isPeekEnabled;
  let tmp = handleRecapMomentumEnd();
  dependencyMap = tmp;
  const height = sourceQuestContent(1477)().height;
  noop.useRef(null);
  [tmp8, c4] = height(noop.useState(BountiesScrollPromptFooter.BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  closure_129_0 = tmp8;
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  let size = sourceQuestContent(1477)();
  const width = size.width;
  closure_129_1 = width;
  const height2 = size.height;
  closure_129_2 = height2;
  let tmp10 = sourceQuestContent(1611)();
  closure_129_3 = tmp10;
  let items = [width, height2, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp10);
  items[5] = tmp8;
  const memo = noop.useMemo(() => {
    const rect = height;
    const diff = sourceQuestContent - height.left - height.right;
    const diff1 = closure_2 - height.top - _require;
    let result = diff / c22;
    result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c22;
      result = diff1;
    }
    const size = { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
    return size;
  }, items);
  let obj1 = hooks_QuestHooks;
  const questHomeBounties = obj1.useQuestHomeBounties().questHomeBounties;
  const data = height(noop.useState(() => {
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === closure_1_0);
    let tmp2 = questHomeBounties;
    if (findIndexResult > 0) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(findIndexResult), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(0, findIndexResult), arraySpreadResult);
      tmp2 = items;
    }
    return tmp2;
  }), 1)[0];
  let obj2 = useBountiesExperience;
  const bountiesExperience = obj2.useBountiesExperience(ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE);
  let orbAmount = bountiesExperience.orbAmount;
  ownedByVerticalScrollExperiment = bountiesExperience.ownedByVerticalScrollExperiment;
  const rewardTimerSeconds = bountiesExperience.rewardTimerSeconds;
  const scrollAffordanceVariant = bountiesExperience.scrollAffordanceVariant;
  const isAutoScrollEnabled = tmp13;
  let obj3 = BountiesVerticalScrollExperiment;
  let result = obj3.shouldUseScrollIndicatorOverlay(scrollAffordanceVariant);
  let obj4 = ReanimatedRexport;
  const sharedValue = obj4.useSharedValue(1);
  let obj5 = ReanimatedRexport;
  const sharedValue1 = obj5.useSharedValue(0);
  const tmp6 = height;
  let tmp7 = height(noop.useState(BountiesScrollPromptFooter.BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  [tmp18, c15] = height(noop.useState(null), 2);
  const ref = noop.useRef(null);
  IS_ANDROID = noop.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp19;
  const items1 = [height, , ];
  ({ top: arr3[1], height: arr3[2] } = memo);
  const memo1 = noop.useMemo(() => closure_2_11({ windowHeight: height, videoTop: memo.top, videoHeight: memo.height }), items1);
  const items2 = [height];
  const items3 = [sharedValue1];
  const memo2 = noop.useMemo(() => closure_2_10(height), items2);
  const callback1 = noop.useCallback((current) => {
    closure_17.current = Date.now();
    closure_16.current = current;
    _undefined2(current);
    const result = sharedValue1.set(timing.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    current.trackOverlayEvent(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items3);
  const items4 = [sharedValue1, sharedValue];
  const callback2 = noop.useCallback(() => {
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
      _undefined2(null);
      result1 = sharedValue.set(timing.withTiming(1, timingPresets.timingStandard));
      const result2 = sharedValue1.set(0);
    }
  }, items4);
  const items5 = [callback2, null != tmp18, callback1, sharedValue, memo1];
  const memo3 = noop.useMemo(() => ({ videoEndPeekTargetScale: memo1, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items5);
  let obj6 = initialize;
  const items6 = [data];
  const items7 = [data, orbAmount];
  const stateFromStores = obj6.useStateFromStores(items6, () => BountyStore.getCompletedBountyCount(first) * orbAmount, items7);
  const first1 = data[0];
  let obj7 = initialize;
  const items8 = [data];
  const items9 = [first1, rewardTimerSeconds];
  const height3 = memo.height;
  let sum = height3 + height3;
  colors = sum;
  let diff = data.length - 1;
  FOOTER_FADE_START_PROGRESS = diff;
  FOOTER_FADE_END_PROGRESS = tmp30;
  let result1 = diff * sum;
  let sum1 = result1 + height3;
  const items10 = [sum1, result1, height3];
  const stateFromStores1 = obj7.useStateFromStores(items8, () => {
    if (null == first1) {
      return false;
    } else {
      const bountyVideoProgress = BountyStore.getBountyVideoProgress(tmp.id);
      let tmp4 = null != bountyVideoProgress;
      if (tmp4) {
        tmp4 = bountyVideoProgress.maxTimestampSec >= rewardTimerSeconds;
      }
      return tmp4;
    }
  }, items9);
  const memo4 = noop.useMemo(() => ({ lastBounty: result1, fullRecap: sum1, revealHeight: height3 }), items10);
  let obj8 = useBountiesRecapScroll;
  handleRecapMomentumEnd = obj8.useBountiesRecapScroll({ listRef: ref, enabled: tmp30, offsets: memo4 }).handleRecapMomentumEnd;
  const items11 = [data, sum1, stateFromStores > 0, sum];
  const memo5 = noop.useMemo(() => {
    const mapped = first.map((item, index) => index * slotHeight);
    if (closure_26) {
      mapped.push(sum1);
    }
    return mapped;
  }, items11);
  const tmp35 = height(noop.useState(false), 2);
  const first2 = tmp35[0];
  closure_32 = tmp37;
  const tmp38 = height(noop.useState(false), 2);
  const first3 = tmp38[0];
  __initData2 = tmp40;
  const tmp17 = height(noop.useState(null), 2);
  [tmp42, tmp43] = height(noop.useState(true), 2);
  __initData3 = tmp43;
  const tmp41 = height(noop.useState(true), 2);
  [tmp45, tmp46] = height(noop.useState(false), 2);
  __initData4 = tmp46;
  const tmp47 = height(noop.useState(0), 2);
  const first4 = tmp47[0];
  __initData5 = tmp47[1];
  let obj9 = ReanimatedRexport;
  const sharedValue2 = obj9.useSharedValue(false);
  let obj10 = ReanimatedRexport;
  const sharedValue3 = obj10.useSharedValue(false);
  let obj11 = ReanimatedRexport;
  const sharedValue4 = obj11.useSharedValue(0);
  let obj12 = useBountySwipeUpNux;
  let obj = { isEligible: data.length > 1, location: ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE };
  const bountySwipeUpNux = obj12.useBountySwipeUpNux(obj);
  const hasSingleUseSwipeUpNux = bountySwipeUpNux.hasSingleUseSwipeUpNux;
  const dismissSingleUseSwipeUpNux = bountySwipeUpNux.dismissSingleUseSwipeUpNux;
  let hasRecurringSwipeUpNux = bountySwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountySwipeUpNux.dismissRecurringSwipeUpNux;
  let tmp55 = tmp54;
  if (0 === first4) {
    tmp55 = hasSingleUseSwipeUpNux;
  }
  if (tmp55) {
    tmp55 = stateFromStores1;
  }
  let tmp56 = result;
  if (result) {
    tmp56 = hasRecurringSwipeUpNux;
  }
  hasRecurringSwipeUpNux = tmp56;
  memo6 = obj.useMemo(() => require("v1").v4(), []);
  __initData6 = obj.useRef(0);
  __initData7 = obj.useRef(0);
  const effect = obj.useEffect(() => {
    closure_48.current = Date.now();
  }, []);
  const items12 = [first4, memo6];
  const callback3 = obj.useCallback((arg0) => {
    if (arg0 === AnalyticsTypes.VerticalScrollingDirection.DOWN) {
      const obj = { verticalScrollingPosition: first4, scrollSessionId: memo6 };
      const result = AnalyticsActions.trackBountyAutoScrollDismissed(obj);
      const tmpResult = AnalyticsActions;
    }
  }, items12);
  let tmp5Result = tmp5(15012);
  obj = { listRef: ref, enabled: null, mode: null, activeIndex: null, activeBountyId: null, slotHeight: null, onCountdownCancelled: null };
  let tmp60 = tmp13;
  if ("auto" === scrollAffordanceVariant) {
    tmp60 = first4 < diff;
  }
  if (tmp60) {
    tmp60 = !tmp19;
  }
  obj.enabled = tmp60;
  let str = "hint";
  if (0 === first4) {
    str = "hint";
    if (hasRecurringSwipeUpNux) {
      str = "countdown";
    }
  }
  obj.mode = str;
  obj.activeIndex = first4;
  let id;
  if (data[first4] != null) {
    id = tmp61.id;
  }
  if (id == null) {
    id = null;
  }
  obj.activeBountyId = id;
  obj.slotHeight = sum;
  obj.onCountdownCancelled = callback3;
  const bountiesAutoScroll = tmp5Result.useBountiesAutoScroll(obj);
  ({ peekActive, peekScale } = bountiesAutoScroll);
  cancel = bountiesAutoScroll.cancel;
  dismissOnClose = bountiesAutoScroll.dismissOnClose;
  takeDidAutoScroll = bountiesAutoScroll.takeDidAutoScroll;
  onPlaybackTimeChange = bountiesAutoScroll.onPlaybackTimeChange;
  onEndCardVisible = bountiesAutoScroll.onEndCardVisible;
  pauseCountdown = bountiesAutoScroll.pauseCountdown;
  resumeCountdown = bountiesAutoScroll.resumeCountdown;
  const items13 = [cancel, null != tmp18, peekScale];
  ({ visible, progress, showProgressRing } = bountiesAutoScroll);
  const effect1 = obj.useEffect(() => {
    if (closure_18) {
      const result = peekScale.set(timing.withTiming(1, timingPresets.timingStandard));
      cancel(AnalyticsTypes.VerticalScrollingDirection.UP);
    }
  }, items13);
  const items14 = [onEndCardVisible, onPlaybackTimeChange, pauseCountdown, resumeCountdown];
  memo7 = obj.useMemo(() => ({ onPlaybackTimeChange, onPaused: pauseCountdown, onResumed: resumeCountdown, onEndCardVisible }), items14);
  const items15 = [memo6];
  callback4 = obj.useCallback((current) => {
    let MANUAL = arg1;
    if (arg1 === undefined) {
      MANUAL = AnalyticsTypes.BountyScrollingType.MANUAL;
    }
    current = ref4.current;
    if (current !== current) {
      tmp3.current = current;
      const _Date = Date;
      const timestamp = Date.now();
      ref3.current = timestamp;
      const diff = timestamp - ref3.current;
      let result = { scrollingType: MANUAL, scrollingDirection: null, verticalScrollingPosition: null, scrollSessionId: null, timeWatchedPreScrollMs: null };
      if (current > current) {
        let UP = AnalyticsTypes.VerticalScrollingDirection.DOWN;
      } else {
        UP = AnalyticsTypes.VerticalScrollingDirection.UP;
      }
      result.scrollingDirection = UP;
      result.verticalScrollingPosition = current;
      result.scrollSessionId = memo6;
      result.timeWatchedPreScrollMs = diff;
      result = AnalyticsActions.trackBountyVerticalScroll(result);
    }
  }, items15);
  const items16 = [takeDidAutoScroll, callback2, callback4, first4, hasSingleUseSwipeUpNux, hasRecurringSwipeUpNux, dismissSingleUseSwipeUpNux, dismissRecurringSwipeUpNux];
  callback5 = obj.useCallback((arg0) => {
    closure_38(arg0);
    callback2();
    const BountyScrollingType = AnalyticsTypes.BountyScrollingType;
    callback4(arg0, takeDidAutoScroll() ? BountyScrollingType.AUTO : BountyScrollingType.MANUAL);
    if (tmp6) {
      if (hasSingleUseSwipeUpNux) {
        dismissSingleUseSwipeUpNux(ContentDismissActionType.USER_DISMISS);
      } else if (hasRecurringSwipeUpNux) {
        dismissRecurringSwipeUpNux(ContentDismissActionType.USER_DISMISS);
      }
    }
  }, items16);
  tmp5Result = tmp5(15013);
  orbAmount = tmp5Result.useBountiesRecapOrbCount({ scrollY: sharedValue4, lastBountyScrollOffset: result1, recapRevealHeight: height3, targetOrbAmount: stateFromStores, enabled: tmp30 });
  const items17 = [data, first4];
  const effect2 = obj.useEffect(() => {
    if (null != first[first4]) {
      const items = [tmp.id];
      QuestActionCreators.markAdContentSeen(AdCreativeType.AdCreativeType.BOUNTY, items);
    }
  }, items17);
  const items18 = [data, first4, dismissOnClose, rewardTimerSeconds, sourceQuestContent];
  const items19 = [sourceQuestContent];
  const callback6 = obj.useCallback(() => {
    dismissOnClose();
    if (null != first[first4]) {
      const bountyVideoProgress = BountyStore.getBountyVideoProgress(tmp2.id);
      let num;
      if (bountyVideoProgress != null) {
        num = bountyVideoProgress.maxTimestampSec;
      }
      if (num == null) {
        num = 0;
      }
      let num2;
      if (bountyVideoProgress != null) {
        num2 = bountyVideoProgress.duration;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const result = 1000 * rewardTimerSeconds;
      let obj = { adContentId: tmp2.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
      obj = { content_name: AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE), content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE, video_progress: null, threshold_met: null, reward_timer_seconds: null };
      obj.video_progress = VideoQuestUtils.formatVideoProgressRatio(num, num2);
      obj.threshold_met = 1000 * num >= result;
      obj.reward_timer_seconds = result / 1000;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
    }
    BountiesModalActionCreatorsDefault.hideModal();
  }, items18);
  onClose = obj.useCallback(() => {
    let obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
    obj = { content_name: AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL), content_id: QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL };
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items19);
  const tmp44 = height(noop.useState(false), 2);
  const tmp52 = data.length > 1;
  obj1 = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumEnd: null };
  function zt(contentOffset) {
    const result = sharedValue4.set(contentOffset.contentOffset.y);
    if (sharedValue3.get()) {
      if (typeof isScrollEventInBounds === "function") {
        const _Math = Math;
        tmp3(contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6);
        const tmp7 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  obj2 = { scrollY: sharedValue4, isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: result1 };
  zt.__closure = obj2;
  zt.__workletHash = 7942598540397;
  zt.__initData = first3;
  obj1.onScroll = zt;
  class Zt {
    constructor(arg0) {
      result = closure_40.set(true);
      if (typeof isScrollEventInBounds === "function") {
        tmp4 = arg0;
        tmp5 = globalThis;
        _Math = Math;
        num = 0;
        tmp7 = arg0.contentOffset.y >= 0 && arg0.contentOffset.y <= tmp6;
        tmp3Result = tmp3(tmp7);
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  Zt.__closure = { isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: result1 };
  Zt.__workletHash = 14039038912528;
  Zt.__initData = __initData2;
  obj1.onBeginDrag = Zt;
  class Qt {
    constructor(arg0) {
      if (arg0.contentOffset.y < 0) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        UP = closure_0(closure_2[28]).VerticalScrollingDirection.DOWN;
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        UP = closure_0(closure_2[28]).VerticalScrollingDirection.UP;
      }
      obj = closure_0(closure_2[12]);
      tmp5 = obj.runOnJS(cancel)(UP);
      result = closure_40.set(false);
      if (!closure_17) {
        tmp7 = closure_39;
        result1 = closure_39.set(false);
      }
      return;
    }
  }
  obj3 = { VerticalScrollingDirection: tmp5(7728).VerticalScrollingDirection, runOnJS: tmp5(4296).runOnJS, cancelScrollAffordance: cancel, isDraggingSharedValue: sharedValue3, IS_ANDROID, isScrollingInBoundsSharedValue: sharedValue2 };
  Qt.__closure = obj3;
  Qt.__workletHash = 10752087179842;
  Qt.__initData = __initData3;
  obj1.onEndDrag = Qt;
  class Gt {
    constructor(arg0) {
      if (closure_26) {
        tmp = arg0;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp4 = handleRecapMomentumEnd;
        tmp5 = obj.runOnJS(handleRecapMomentumEnd)(arg0);
      }
      result = closure_39.set(false);
      return;
    }
  }
  obj4 = { showRecapPullZone: tmp30, runOnJS: tmp5(4296).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 };
  Gt.__closure = obj4;
  Gt.__workletHash = 13684210320337;
  Gt.__initData = __initData4;
  obj1.onMomentumEnd = Gt;
  const tmp5Result1 = ReanimatedRexport;
  const animatedScrollHandler = ReanimatedRexport.useAnimatedScrollHandler(obj1);
  class Kt {
    constructor() {
      return Math.min(Math.max(Math.round(closure_41.get() / closure_24), 0), closure_25);
    }
  }
  Kt.__closure = { scrollY: sharedValue4, slotHeight: sum, lastBountyIndex: diff };
  Kt.__workletHash = 14048843158960;
  Kt.__initData = first4;
  class Wt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_60;
        tmp4 = obj.runOnJS(closure_60)(arg0);
      }
      return;
    }
  }
  obj5 = { runOnJS: tmp5(4296).runOnJS, commitSwipe: callback5 };
  Wt.__closure = obj5;
  Wt.__workletHash = 14015091539518;
  Wt.__initData = __initData5;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(Kt, Wt);
  const tmp5Result2 = ReanimatedRexport;
  function jt() {
    let tmp = closure_26;
    if (closure_26) {
      value = sharedValue4.get();
      tmp = value >= result1 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
    }
    return tmp;
  }
  obj6 = { showRecapPullZone: tmp30, scrollY: sharedValue4, lastBountyScrollOffset: result1, RECAP_SNAP_EPSILON: tmp5(15009).RECAP_SNAP_EPSILON };
  jt.__closure = obj6;
  jt.__workletHash = 6584708256992;
  jt.__initData = sharedValue2;
  class Xt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_36;
        tmp4 = obj.runOnJS(closure_36)(arg0);
      }
      return;
    }
  }
  obj7 = { runOnJS: tmp5(4296).runOnJS, setShowRecapFooter: tmp46 };
  Xt.__closure = obj7;
  Xt.__workletHash = 10788669301891;
  Xt.__initData = sharedValue3;
  const animatedReaction1 = ReanimatedRexport.useAnimatedReaction(jt, Xt);
  const tmp5Result3 = ReanimatedRexport;
  function $t() {
    let tmp = closure_26;
    if (closure_26) {
      tmp = sharedValue4.get() > result1;
    }
    return tmp;
  }
  $t.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result1 };
  $t.__workletHash = 6186370630693;
  $t.__initData = sharedValue4;
  function qt(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_32)(arg0);
    }
  }
  obj8 = { runOnJS: tmp5(4296).runOnJS, setIsRecapPageRevealed: tmp37 };
  qt.__closure = obj8;
  qt.__workletHash = 12713474352874;
  qt.__initData = hasSingleUseSwipeUpNux;
  const animatedReaction2 = ReanimatedRexport.useAnimatedReaction($t, qt);
  const tmp5Result4 = ReanimatedRexport;
  function to() {
    let tmp = closure_26;
    if (closure_26) {
      value = sharedValue4.get();
      tmp = value >= sum1 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
    }
    return tmp;
  }
  obj9 = { showRecapPullZone: tmp30, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: tmp5(15009).RECAP_SNAP_EPSILON };
  to.__closure = obj9;
  to.__workletHash = 5669564400667;
  to.__initData = dismissSingleUseSwipeUpNux;
  function eo(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_34)(arg0);
    }
  }
  obj10 = { runOnJS: tmp5(4296).runOnJS, setIsRecapPageOnTop: tmp40 };
  eo.__closure = obj10;
  eo.__workletHash = 8102193741774;
  eo.__initData = hasRecurringSwipeUpNux;
  const animatedReaction3 = ReanimatedRexport.useAnimatedReaction(to, eo);
  const items20 = [height3, stateFromStores > 0];
  const memo8 = obj.useMemo(() => {
    let tmp = null;
    if (closure_26) {
      const obj = { height: height3 };
      tmp = __initData(BountiesRecapPullZone, obj);
    }
    return tmp;
  }, items20);
  const tmp5Result5 = ReanimatedRexport;
  function ro() {
    value = sharedValue.get();
    if (sharedValue1.get() > 0) {
      let num2 = 0;
    } else {
      num2 = 97;
    }
    return { height: memo.top + memo.height * value + num2 };
  }
  ro.__closure = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1, BOUNTIES_MODAL_FOOTER_HEIGHT: 97, videoLayout: memo };
  ro.__workletHash = 154705522065;
  ro.__initData = dismissRecurringSwipeUpNux;
  animatedStyle = ReanimatedRexport.useAnimatedStyle(ro);
  const items21 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr23[2], width: arr23[3] } = memo);
  const memo9 = obj.useMemo(() => {
    const items = [closure_2.listWrapper, , ];
    const rect = { top: 0, left: memo.left, width: memo.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items21);
  const tmp6Result = tmp6(obj.useState(false), 2);
  first5 = tmp6Result[0];
  closure_65 = tmp80;
  const tmp5Result6 = ReanimatedRexport;
  function io() {
    value = sharedValue.get();
    let tmp2 = sharedValue1.get() > 0;
    if (!tmp2) {
      tmp2 = value < 1;
    }
    return tmp2;
  }
  io.__closure = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1 };
  io.__workletHash = 14406360987242;
  io.__initData = hasRecurringSwipeUpNux;
  function so(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_65)(arg0);
    }
  }
  obj11 = { runOnJS: tmp5(4296).runOnJS, setHideListFooterPadding: tmp80 };
  so.__closure = obj11;
  so.__workletHash = 7553157067719;
  so.__initData = memo6;
  const animatedReaction4 = ReanimatedRexport.useAnimatedReaction(io, so);
  const items22 = [first5, memo.top];
  const items23 = [, ];
  ({ width: arr25[0], height: arr25[1] } = memo);
  const memo10 = obj.useMemo(() => {
    const obj = { paddingTop: memo.top, paddingBottom: null };
    let num = 97;
    if (first5) {
      num = 0;
    }
    obj.paddingBottom = num;
    return obj;
  }, items22);
  memo11 = obj.useMemo(() => {
    const size = { width: memo.width, height: memo.height };
    return size;
  }, items23);
  const items24 = [tmp.closeButton, , , ];
  ({ top: arr26[1], left: arr26[2], width: arr26[3] } = memo);
  const items25 = [tmp.autoScrollIndicator, , , , ];
  ({ top: arr27[1], height: arr27[2], left: arr27[3], width: arr27[4] } = memo);
  const memo12 = obj.useMemo(() => {
    const items = [closure_2.closeButton, ];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items24);
  const items26 = [first3, tmp.recapPage, , , , ];
  ({ top: arr28[2], left: arr28[3], width: arr28[4] } = memo);
  items26[5] = height;
  const memo13 = obj.useMemo(() => {
    const items = [closure_2.autoScrollIndicator, ];
    const rect = { top: null, left: null, width: null };
    const sum = memo.top + useBountiesAutoScroll.AUTO_SCROLL_PEEK_TOP_OFFSET;
    sum1 = sum + memo.height * useBountiesAutoScroll.AUTO_SCROLL_PEEK_SCALE;
    rect.top = sum1 + nativeDefault.space.PX_32;
    ({ left: obj.left, width: obj.width } = memo);
    items[1] = rect;
    return items;
  }, items25);
  const memo14 = obj.useMemo(() => {
    const items = [closure_2.recapPage, ];
    const size = { top: memo.top, left: memo.left, width: memo.width, height: height - memo.top };
    let tmp = null;
    if (first3) {
      const obj = { zIndex };
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    items[1] = size;
    return items;
  }, items26);
  const tmp5Result7 = ReanimatedRexport;
  function go() {
    return useBountiesRecapScroll.getRevealProgress(sharedValue4.get(), result1, height3);
  }
  obj12 = { getRevealProgress: tmp5(15009).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result1, recapRevealHeight: height3 };
  go.__closure = obj12;
  go.__workletHash = 1141192763711;
  go.__initData = __initData6;
  derivedValue = ReanimatedRexport.useDerivedValue(go);
  const tmp5Result8 = ReanimatedRexport;
  class Eo {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[12]);
      value = closure_67.get();
      obj.opacity = obj2.interpolate(value, [0, 1], [0, 1], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result9 = ReanimatedRexport;
  Eo.__closure = { interpolate: ReanimatedRexport.interpolate, recapPullProgress: derivedValue, Extrapolation: ReanimatedRexport.Extrapolation };
  Eo.__workletHash = 15664240485606;
  Eo.__initData = __initData7;
  const animatedStyle1 = tmp5Result9.useAnimatedStyle(Eo);
  const obj13 = { interpolate: ReanimatedRexport.interpolate, recapPullProgress: derivedValue, Extrapolation: ReanimatedRexport.Extrapolation };
  class Oo {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[12]);
      value = closure_67.get();
      items = [, ];
      items[0] = c25;
      items[1] = c26;
      obj.opacity = obj2.interpolate(value, items, [1, 0], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result10 = ReanimatedRexport;
  Oo.__closure = { interpolate: ReanimatedRexport.interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS, FOOTER_FADE_END_PROGRESS, Extrapolation: ReanimatedRexport.Extrapolation };
  Oo.__workletHash = 13645152212589;
  Oo.__initData = peekScale;
  const animatedStyle2 = tmp5Result10.useAnimatedStyle(Oo);
  const obj14 = { interpolate: ReanimatedRexport.interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS, FOOTER_FADE_END_PROGRESS, Extrapolation: ReanimatedRexport.Extrapolation };
  const tmp89 = FOOTER_FADE_END_PROGRESS;
  class Po {
    constructor() {
      obj = closure_41;
      if (closure_41.get() >= closure_28 - closure_24 / 2) {
        tmp5 = closure_67;
        value = closure_67.get();
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[25]);
        tmp3 = height;
        num = 0;
        value = obj2.getRevealProgress(obj.get(), 0, height);
      }
      obj = { opacity: null };
      obj4 = closure_0(closure_2[12]);
      items = [, ];
      items[0] = c25;
      items[1] = c26;
      obj.opacity = obj4.interpolate(value, items, [1, 0], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result11 = ReanimatedRexport;
  Po.__closure = { scrollY: sharedValue4, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: useBountiesRecapScroll.getRevealProgress, recapRevealHeight: height3, interpolate: ReanimatedRexport.interpolate, FOOTER_FADE_START_PROGRESS, FOOTER_FADE_END_PROGRESS, Extrapolation: ReanimatedRexport.Extrapolation };
  Po.__workletHash = 3460917733424;
  Po.__initData = cancel;
  const items27 = [tmp.peekGradient, , , , ];
  ({ left: arr29[1], width: arr29[2], top: arr29[3], height: arr29[4] } = memo);
  const animatedStyle3 = tmp5Result11.useAnimatedStyle(Po);
  let tmp93 = "peek" === scrollAffordanceVariant;
  const memo15 = obj.useMemo(() => {
    const items = [closure_2.peekGradient, ];
    const rect = { left: memo.left, width: memo.width, top: memo.top + memo.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items27);
  if (tmp93) {
    tmp93 = hasRecurringSwipeUpNux;
  }
  if (tmp93) {
    tmp93 = !tmp19;
  }
  isPeekEnabled = tmp93;
  const obj15 = { scrollY: sharedValue4, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: useBountiesRecapScroll.getRevealProgress, recapRevealHeight: height3, interpolate: ReanimatedRexport.interpolate, FOOTER_FADE_START_PROGRESS, FOOTER_FADE_END_PROGRESS, Extrapolation: ReanimatedRexport.Extrapolation };
  function fo() {
    const obj = { opacity: null };
    value = sharedValue4.get();
    const items = [0, c24];
    obj.opacity = ReanimatedRexport.interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  }
  const tmp5Result12 = ReanimatedRexport;
  fo.__closure = { interpolate: ReanimatedRexport.interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: ReanimatedRexport.Extrapolation };
  fo.__workletHash = 7289479842131;
  fo.__initData = dismissOnClose;
  const animatedStyle4 = tmp5Result12.useAnimatedStyle(fo);
  const obj16 = { interpolate: ReanimatedRexport.interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: ReanimatedRexport.Extrapolation };
  class Ro {
    constructor() {
      return closure_67.get() < c26;
    }
  }
  Ro.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp89 };
  Ro.__workletHash = 8241096384746;
  Ro.__initData = takeDidAutoScroll;
  function vo(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(c35)(arg0);
    }
  }
  const tmp5Result13 = ReanimatedRexport;
  vo.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsCloseButtonPressable: tmp43 };
  vo.__workletHash = 12445734761450;
  vo.__initData = onPlaybackTimeChange;
  const animatedReaction5 = tmp5Result13.useAnimatedReaction(Ro, vo);
  const items28 = [sum, sharedValue4, memo11, tmp93, "auto" === scrollAffordanceVariant, ownedByVerticalScrollExperiment, sharedValue, peekScale, sourceQuestContent, , , , , , , , , ];
  ({ width: arr30[9], height: arr30[10] } = memo);
  items28[11] = first4;
  items28[12] = first2;
  items28[13] = first3;
  items28[14] = sharedValue2;
  items28[15] = tmp56;
  items28[16] = memo7;
  items28[17] = ownedByVerticalScrollExperiment;
  const items29 = [first4, first2, first3, , , , , , , , , ];
  ({ width: arr31[3], height: arr31[4] } = memo);
  items29[5] = tmp93;
  items29[6] = "auto" === scrollAffordanceVariant;
  items29[7] = ownedByVerticalScrollExperiment;
  items29[8] = null != tmp18;
  items29[9] = sharedValue;
  items29[10] = tmp56;
  items29[11] = ownedByVerticalScrollExperiment;
  const callback7 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    let flag = true;
    if (ownedByVerticalScrollExperiment) {
      let tmp3 = index === first4;
      if (!tmp3) {
        tmp3 = index === tmp2 + 1;
      }
      flag = tmp3;
    }
    const obj = { index, slotHeight, scrollY: sharedValue4, style: memo11, isPeekEnabled, children: null };
    const size = { bounty: item, sourceQuestContent, width: memo.width, height: memo.height, index, isActive: index === first4, isRecapPageRevealed: first2, isRecapPageOnTop: first3, isScrollingInBoundsSharedValue: sharedValue2, isScrollIndicatorOverlayEnabled: null, shouldLoadHls: null, scrollAffordance: null, peekScale: null, videoEndPeekScale: null, softDownloadCapsEnabled: null };
    let tmp7 = hasRecurringSwipeUpNux;
    if (hasRecurringSwipeUpNux) {
      tmp7 = 0 === index;
    }
    size.isScrollIndicatorOverlayEnabled = tmp7;
    size.shouldLoadHls = flag;
    let tmp9;
    if (closure_12) {
      tmp9 = memo7;
    }
    size.scrollAffordance = tmp9;
    let tmp10;
    if (index === first4) {
      if (closure_12) {
        tmp10 = peekScale;
      }
    }
    size.peekScale = tmp10;
    let tmp11;
    if (index === first4) {
      if (ownedByVerticalScrollExperiment) {
        tmp11 = sharedValue;
      }
    }
    size.videoEndPeekScale = tmp11;
    size.softDownloadCapsEnabled = ownedByVerticalScrollExperiment;
    obj.children = __initData(BountiesScrollVideoItem.BountiesScrollVideoItem, size, item.id);
    return __initData(BountiesScrollVideoItemContainer, obj);
  }, items28);
  [][0] = height3;
  const memo16 = obj.useMemo(() => {
    const size = { activeIndex: first4, isRecapPageRevealed: first2, isRecapPageOnTop: first3, width: memo.width, height: memo.height, isPeekEnabled, isAutoScrollEnabled, ownedByVerticalScrollExperiment, isVideoEndAppStoreOverlayVisible, videoEndPeekScale: sharedValue, canShowScrollIndicatorOverlay: hasRecurringSwipeUpNux, isSoftCapPreload: ownedByVerticalScrollExperiment };
    return size;
  }, items29);
  if (0 === data.length) {
    return null;
  } else {
    if (tmp55) {
      let tmp99 = c15(tmp2(15046), {});
    } else {
      tmp99 = null;
      if (tmp45) {
        const obj18 = { orbAmount: stateFromStores };
        tmp99 = c15(tmp5(15047).BountiesScrollRecapFooter, obj18);
      }
    }
    const obj19 = { value: memo3, children: null };
    const obj20 = { style: tmp.root, children: null };
    let tmp2Result = tmp2(15048);
    if (peekActive) {
      peekActive = !tmp19;
    }
    const obj21 = { active: peekActive };
    const items30 = [c15(tmp2Result, obj21), , , , , , , ];
    let tmp102Result = null;
    if (tmp30) {
      const obj22 = { style: null, pointerEvents: null, children: null };
      const items31 = [memo14, animatedStyle1];
      obj22.style = items31;
      let str2 = "none";
      if (first3) {
        str2 = "box-none";
      }
      obj22.pointerEvents = str2;
      const obj23 = {
        adContentId: orbAmount,
        adCreativeType: tmp5(5451).AdCreativeType.BOUNTY,
        questContent: tmp5(5449).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first3,
        sourceQuestContent,
        children() {
              return __initData(BountiesScrollRecapPage.BountiesScrollRecapPage, { orbAmount, onClose, style: { flex: 1 } });
            }
      };
      obj22.children = tmp102(tmp5(11778).QuestContentImpressionTrackerNative, obj23);
      tmp102Result = tmp102(tmp2(4296).View, obj22);
    }
    items30[1] = tmp102Result;
    const obj24 = { style: memo9, children: null };
    const obj25 = {
      ref,
      data,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback7,
      extraData: memo16,
      overrideItemLayout: tmp98,
      ItemSeparatorComponent: height3,
      ListFooterComponent: memo8,
      snapToOffsets: memo5,
      snapToEnd: false,
      decelerationRate: 0.85,
      showsVerticalScrollIndicator: false,
      drawDistance: sum,
      onScroll: animatedScrollHandler,
      scrollEventThrottle: 16,
      scrollEnabled: !tmp19,
      contentContainerStyle: memo10
    };
    obj24.children = c15(tmp5(8874).AnimatedFlashList, obj25);
    items30[2] = c15(tmp2(4296).View, obj24);
    tmp102Result = null;
    if (null != tmp18) {
      const obj26 = { metadata: tmp18.metadata, sheetHeight: memo2, revealProgress: sharedValue1, onDismiss: callback2, onInstallPress: tmp18.onInstallPress };
      tmp102Result = tmp102(tmp2(15053), obj26);
    }
    items30[3] = tmp102Result;
    let tmp102Result1 = null;
    if (tmp93) {
      tmp102Result1 = null;
      if (data.length > 1) {
        const obj27 = { pointerEvents: "none", style: null, children: null };
        const items32 = [memo15, animatedStyle4];
        obj27.style = items32;
        const obj28 = { colors, style: memo.absoluteFill };
        obj27.children = tmp102(tmp2(4987), obj28);
        tmp102Result1 = tmp102(tmp2(4296).View, obj27);
      }
    }
    items30[4] = tmp102Result1;
    const obj29 = { style: null, pointerEvents: null, children: null };
    const items33 = [memo12, animatedStyle2];
    obj29.style = items33;
    let str3 = "none";
    if (tmp42) {
      str3 = "box-none";
    }
    obj29.pointerEvents = str3;
    let tmp102Result2 = null;
    if (tmp42) {
      const obj30 = { onPress: callback6 };
      tmp102Result2 = tmp102(tmp2(15054), obj30);
    }
    obj29.children = tmp102Result2;
    items30[5] = c15(tmp2(4296).View, obj29);
    let tmp102Result3 = null;
    if (visible) {
      tmp102Result3 = null;
      if (!tmp19) {
        const obj31 = { style: memo13, pointerEvents: "none", children: null };
        const obj32 = { progress, showProgressRing };
        obj31.children = tmp102(tmp2(15055), obj32);
        tmp102Result3 = tmp102(tmp104, obj31);
      }
    }
    items30[6] = tmp102Result3;
    tmp2Result = tmp2(15006);
    if (!tmp55) {
      tmp55 = tmp45;
    }
    if (tmp55) {
      tmp55 = tmp109;
    }
    const obj33 = { visible: tmp55, onContentLayout: callback, zIndex: callback2, opacityStyle: animatedStyle3, children: tmp99 };
    items30[7] = c15(tmp2Result, obj33);
    obj20.children = items30;
    obj19.children = ref(questHomeBounties, obj20);
    return c15(tmp5(15017).BountyVideoEndAppStoreProvider, obj19);
  }
  const obj17 = { runOnJS: ReanimatedRexport.runOnJS, setIsCloseButtonPressable: tmp43 };
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestConstants = fn(5444);
({ DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_8, QuestsExperimentLocations: closure_9 } = QuestConstants);
const BountiesModalConstants = fn(15005);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: closure_11 } = BountiesModalConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const PlatformUtils = fn(1116);
let IS_ANDROID = PlatformUtils.isAndroid();
let c18 = 0;
let c19 = 1;
let c20 = 2;
let c21 = 3;
let c22 = 0.5625;
const PX_8 = nativeDefault.space.PX_8;
let colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let c25 = 0.05;
let c26 = 0.1;
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
const createStyles = fn(4560);
let closure_30 = createStyles.createStyles(() => {
  let obj = { root: { flex: 1 }, recapPage: null, listWrapper: null, closeButton: null, peekGradient: null, autoScrollIndicator: null };
  obj = { position: "absolute", zIndex };
  obj.recapPage = obj;
  obj = { position: "absolute", zIndex: zIndex2, overflow: "hidden" };
  obj.listWrapper = obj;
  obj.closeButton = { position: "absolute", zIndex: zIndex4 };
  obj.peekGradient = { position: "absolute", zIndex: zIndex3 };
  obj.autoScrollIndicator = { position: "absolute", zIndex: zIndex4, alignItems: "center" };
  return obj;
});
const __initData = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
let closure_33 = { code: "function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}" };
let __initData2 = { code: "function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}" };
let __initData3 = { code: "function BountiesModalContentScrollTsx5(event){const{VerticalScrollingDirection,runOnJS,cancelScrollAffordance,isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;const scrollingDirection=event.contentOffset.y<0?VerticalScrollingDirection.DOWN:VerticalScrollingDirection.UP;runOnJS(cancelScrollAffordance)(scrollingDirection);isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
let __initData4 = { code: "function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}" };
let closure_37 = { code: "function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
let __initData5 = { code: "function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}" };
let closure_39 = { code: "function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_40 = { code: "function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
let closure_41 = { code: "function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
let closure_42 = { code: "function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
let closure_43 = { code: "function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_44 = { code: "function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
let closure_45 = { code: "function BountiesModalContentScrollTsx15(){const{videoEndPeekScale,videoEndAppStoreProgress,BOUNTIES_MODAL_FOOTER_HEIGHT,videoLayout}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();const footerHeight=overlayProgress>0||scale<1?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+videoLayout.height*scale+footerHeight};}" };
let closure_46 = { code: "function BountiesModalContentScrollTsx16(){const{videoEndPeekScale,videoEndAppStoreProgress}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();return overlayProgress>0||scale<1;}" };
let closure_47 = { code: "function BountiesModalContentScrollTsx17(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}" };
let __initData6 = { code: "function BountiesModalContentScrollTsx18(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
let __initData7 = { code: "function BountiesModalContentScrollTsx19(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
let closure_50 = { code: "function BountiesModalContentScrollTsx20(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_51 = { code: "function BountiesModalContentScrollTsx21(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_52 = { code: "function BountiesModalContentScrollTsx22(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
let closure_53 = { code: "function BountiesModalContentScrollTsx23(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
let closure_54 = { code: "function BountiesModalContentScrollTsx24(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  ({ bountyId, sourceQuestContent } = arg0);
  return __initData(ThemeContextProvider.ThemeContextProvider, { theme: shared_ThemeTypes.ThemeTypes.DARKER, children: __initData(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }) });
};