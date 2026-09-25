// === Module 14517: BountiesModalContentScroll ===

// Module 14517 (BountiesModalContentScroll)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import ThemeContextProvider from "ThemeContextProvider" /* 4552 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4563 */;
import timing from "timing" /* 4830 */;
import timingPresets from "timingPresets" /* 4833 */;
import QuestContent from "QuestContent" /* 5756 */;
import AdCreativeType from "AdCreativeType" /* 5758 */;
import QuestDataUtils from "QuestDataUtils" /* 7107 */;
import AnalyticsActions from "AnalyticsActions" /* 7126 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7136 */;
import QuestActionCreators from "QuestActionCreators" /* 10670 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 10707 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10722 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14514 */;
import useBountiesRecapScroll from "useBountiesRecapScroll" /* 14523 */;
import BountiesScrollVideoItem from "BountiesScrollVideoItem" /* 14525 */;
import BountiesScrollRecapPage from "BountiesScrollRecapPage" /* 14560 */;
import shared_ThemeTypes from "shared/ThemeTypes" /* 14566 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7110 */;

require = fn;
function ItemSeparator(trailingItem) {
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    const obj = { style: null };
    const obj2 = { height: PX_8 };
    obj.style = obj2;
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
  const fn = function u() {
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
  let obj = index(scrollY[12]);
  fn.__closure = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY: 0.8, interpolate: index(scrollY[12]).interpolate, FADE_DEADBAND: 0.3, Extrapolation: index(scrollY[12]).Extrapolation };
  fn.__workletHash = 6532652233494;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children };
  let items = [style, animatedStyle];
  obj3.style = items;
  return closure_15(slotHeight(scrollY[12]).View, obj3);
}
function BountiesModalContentScrollInner(initialBountyId) {
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  noop = undefined;
  c12 = undefined;
  c23 = undefined;
  closure_30 = undefined;
  let animatedStyle;
  let first4;
  __initData9 = undefined;
  let memo10;
  let derivedValue;
  __initData10 = undefined;
  let tmp = closure_30();
  dependencyMap = tmp;
  const height = sourceQuestContent(1478)().height;
  noop.useRef(null);
  [tmp7, c4] = height(noop.useState(initialBountyId(14519).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  closure_129_0 = tmp7;
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  let size = sourceQuestContent(1478)();
  const width = size.width;
  closure_129_1 = width;
  const height2 = size.height;
  closure_129_2 = height2;
  const tmp9 = sourceQuestContent(1612)();
  closure_129_3 = tmp9;
  let items = [width, height2, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp9);
  items[5] = tmp7;
  const memo = noop.useMemo(() => {
    const rect = height;
    const diff = sourceQuestContent - height.left - height.right;
    const diff1 = closure_2 - height.top - initialBountyId;
    let result = diff / c22;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c22;
      result = diff1;
    }
    const size = { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
    return size;
  }, items);
  let tmp6 = height(noop.useState(initialBountyId(14519).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  const questHomeBounties = initialBountyId(10668).useQuestHomeBounties().questHomeBounties;
  const data = height(noop.useState(() => {
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
    if (findIndexResult < 0) {
      let items = [];
    } else {
      items = questHomeBounties;
      if (0 !== findIndexResult) {
        const items1 = [];
        HermesBuiltin.arraySpread(questHomeBounties.slice(0, findIndexResult), HermesBuiltin.arraySpread(questHomeBounties.slice(findIndexResult), 0));
        items = items1;
        const arraySpreadResult = HermesBuiltin.arraySpread(questHomeBounties.slice(findIndexResult), 0);
      }
    }
    return items;
  }), 1)[0];
  closure_8 = tmp11;
  let items1 = [0 === data.length, initialBountyId, sourceQuestContent];
  const effect = noop.useEffect(() => {
    if (closure_8) {
      const _Error = Error;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj2 = { tags: { source: "BountiesModalContentScroll" }, extra: null };
      const obj3 = { bountyId: initialBountyId, sourceQuestContent };
      obj2.extra = obj3;
      const result = QuestDataUtils.captureQuestsException(error, obj2);
      BountiesModalActionCreatorsDefault.hideModal();
    }
  }, items1);
  adContentId = closure_8;
  let obj2 = initialBountyId(10668);
  const sharedValue = initialBountyId(4563).useSharedValue(1);
  let obj3 = initialBountyId(4563);
  const sharedValue1 = initialBountyId(4563).useSharedValue(0);
  let obj4 = initialBountyId(4563);
  [tmp16, c12] = height(noop.useState(null), 2);
  const ref = noop.useRef(null);
  noop.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp17;
  const items2 = [height, , ];
  ({ top: arr4[1], height: arr4[2] } = memo);
  const memo1 = noop.useMemo(() => closure_2_11({ windowHeight: height, videoTop: memo.top, videoHeight: memo.height }), items2);
  const items3 = [height];
  const items4 = [sharedValue1];
  const memo2 = noop.useMemo(() => closure_2_10(height), items3);
  const callback1 = noop.useCallback((current) => {
    closure_14.current = Date.now();
    closure_13.current = current;
    _undefined2(current);
    const result = sharedValue1.set(timing.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    current.trackOverlayEvent(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items4);
  const items5 = [sharedValue1, sharedValue];
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
      const result1 = sharedValue.set(timing.withTiming(1, timingPresets.timingStandard));
      const result2 = sharedValue1.set(0);
    }
  }, items5);
  const items6 = [callback2, null != tmp16, callback1, sharedValue, memo1];
  const memo3 = noop.useMemo(() => ({ videoEndPeekTargetScale: memo1, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items6);
  const tmp15 = height(noop.useState(null), 2);
  const items7 = [data];
  const items8 = [data, closure_8];
  const stateFromStores = initialBountyId(504).useStateFromStores(items7, () => BountyStore.getCompletedBountyCount(first) * closure_9, items8);
  let obj5 = initialBountyId(504);
  const bountyRecurringSwipeUpNux = initialBountyId(14522).useBountyRecurringSwipeUpNux({ isEligible: tmp24 });
  let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
  const height3 = memo.height;
  let sum = height3 + c23;
  c22 = sum;
  let diff = data.length - 1;
  c23 = diff;
  colors = tmp28;
  let result = diff * sum;
  FOOTER_FADE_END_PROGRESS = result;
  const sum1 = result + height3;
  const items9 = [sum1, result, height3];
  const memo4 = noop.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height3 }), items9);
  let obj6 = initialBountyId(14522);
  const handleRecapMomentumEnd = initialBountyId(14523).useBountiesRecapScroll({ listRef: ref, enabled: tmp28, offsets: memo4 }).handleRecapMomentumEnd;
  const items10 = [data, sum1, stateFromStores > 0, sum];
  const memo5 = noop.useMemo(() => {
    const mapped = first.map((item, index) => index * slotHeight);
    if (closure_24) {
      mapped.push(sum1);
    }
    return mapped;
  }, items10);
  const tmp33 = height(noop.useState(false), 2);
  const first1 = tmp33[0];
  closure_30 = tmp35;
  const tmp36 = height(noop.useState(false), 2);
  const first2 = tmp36[0];
  closure_32 = tmp38;
  const obj7 = initialBountyId(14523);
  [tmp40, tmp41] = height(noop.useState(true), 2);
  __initData2 = tmp41;
  const tmp39 = height(noop.useState(true), 2);
  [tmp43, tmp44] = height(noop.useState(false), 2);
  __initData3 = tmp44;
  const tmp45 = height(noop.useState(0), 2);
  const first3 = tmp45[0];
  __initData4 = tmp45[1];
  const tmp42 = height(noop.useState(false), 2);
  const sharedValue2 = initialBountyId(4563).useSharedValue(false);
  const obj8 = initialBountyId(4563);
  const sharedValue3 = initialBountyId(4563).useSharedValue(false);
  const obj9 = initialBountyId(4563);
  const sharedValue4 = initialBountyId(4563).useSharedValue(0);
  const memo6 = noop.useMemo(() => initialBountyId(closure_2[27]).v4(), []);
  __initData5 = noop.useRef(0);
  __initData6 = noop.useRef(0);
  const effect1 = noop.useEffect(() => {
    closure_41.current = Date.now();
  }, []);
  const items11 = [memo6];
  const callback3 = noop.useCallback((current) => {
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
  }, items11);
  const items12 = [first3, dismissRecurringSwipeUpNux, callback2, callback3, hasRecurringSwipeUpNux];
  const callback4 = noop.useCallback((arg0) => {
    if (tmp) {
      dismissRecurringSwipeUpNux(ContentDismissActionType.USER_DISMISS);
    }
    closure_36(arg0);
    callback2();
    callback3(arg0);
    tmp = 0 === first3 && arg0 > 0 && hasRecurringSwipeUpNux;
  }, items12);
  const obj10 = initialBountyId(4563);
  __initData7 = initialBountyId(14524).useBountiesRecapOrbCount({ scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height3, targetOrbAmount: stateFromStores, enabled: tmp28 });
  const items13 = [data, first3];
  const effect2 = noop.useEffect(() => {
    if (null != first[first3]) {
      const items = [tmp.id];
      QuestActionCreators.markAdContentSeen(AdCreativeType.AdCreativeType.BOUNTY, items);
    }
  }, items13);
  const items14 = [data, first3, sourceQuestContent];
  const items15 = [sourceQuestContent];
  const callback5 = noop.useCallback(() => {
    if (null != first[first3]) {
      const bountyVideoProgress = BountyStore.getBountyVideoProgress(tmp.id);
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
      const result = 1000 * tmp.rewardTimerSeconds;
      const obj2 = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
      const obj3 = { content_name: null, content_id: null, video_progress: null, threshold_met: null, reward_timer_seconds: null };
      const obj = AnalyticsActions;
      obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
      obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_MOBILE;
      obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(num, num2);
      obj3.threshold_met = 1000 * num >= result;
      obj3.reward_timer_seconds = result / 1000;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj2);
    }
    BountiesModalActionCreatorsDefault.hideModal();
  }, items14);
  __initData8 = noop.useCallback(() => {
    const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
    const obj3 = { content_name: null, content_id: null };
    const obj = AnalyticsActions;
    obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL);
    obj3.content_id = QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items15);
  const obj11 = initialBountyId(14524);
  const obj13 = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumEnd: null };
  function ft(contentOffset) {
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
  ft.__closure = { scrollY: sharedValue4, isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: handleRecapMomentumEnd };
  ft.__workletHash = 7942598540397;
  ft.__initData = __initData2;
  obj13.onScroll = ft;
  class Pt {
    constructor(arg0) {
      result = closure_38.set(true);
      if (typeof isScrollEventInBounds === "function") {
        tmp4 = initialBountyId;
        tmp5 = globalThis;
        _Math = Math;
        num = 0;
        tmp7 = initialBountyId.contentOffset.y >= 0 && initialBountyId.contentOffset.y <= tmp6;
        tmp3Result = tmp3(tmp7);
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  Pt.__closure = { isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: handleRecapMomentumEnd };
  Pt.__workletHash = 14039038912528;
  Pt.__initData = __initData3;
  obj13.onBeginDrag = Pt;
  class Ot {
    constructor() {
      result = closure_38.set(false);
      if (!closure_17) {
        tmp2 = closure_37;
        result1 = closure_37.set(false);
      }
      return;
    }
  }
  Ot.__closure = { isDraggingSharedValue: sharedValue3, IS_ANDROID: callback1, isScrollingInBoundsSharedValue: sharedValue2 };
  Ot.__workletHash = 9975335138319;
  Ot.__initData = first3;
  obj13.onEndDrag = Ot;
  class Et {
    constructor(arg0) {
      if (closure_24) {
        tmp = initialBountyId;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp4 = handleRecapMomentumEnd;
        tmp5 = obj.runOnJS(handleRecapMomentumEnd)(initialBountyId);
      }
      result = closure_37.set(false);
      return;
    }
  }
  const obj12 = initialBountyId(4563);
  const obj14 = { scrollY: sharedValue4, isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: handleRecapMomentumEnd };
  const obj15 = { isDraggingSharedValue: sharedValue3, IS_ANDROID: callback1, isScrollingInBoundsSharedValue: sharedValue2 };
  Et.__closure = { showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4563).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 };
  Et.__workletHash = 13684210320337;
  Et.__initData = __initData4;
  obj13.onMomentumEnd = Et;
  const obj16 = { showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4563).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 };
  const animatedScrollHandler = obj12.useAnimatedScrollHandler(obj13);
  class Rt {
    constructor() {
      return Math.min(Math.max(Math.round(closure_39.get() / closure_22), 0), closure_23);
    }
  }
  Rt.__closure = { scrollY: sharedValue4, slotHeight: sum, lastBountyIndex: diff };
  Rt.__workletHash = 14048843158960;
  Rt.__initData = sharedValue2;
  function vt(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback4)(arg0);
    }
  }
  const obj17 = initialBountyId(4563);
  vt.__closure = { runOnJS: initialBountyId(4563).runOnJS, commitSwipe: callback4 };
  vt.__workletHash = 14015091539518;
  vt.__initData = sharedValue3;
  const animatedReaction = obj17.useAnimatedReaction(Rt, vt);
  const obj18 = { runOnJS: initialBountyId(4563).runOnJS, commitSwipe: callback4 };
  class Tt {
    constructor() {
      tmp = closure_24;
      if (closure_24) {
        tmp2 = closure_39;
        tmp4 = closure_26;
        tmp5 = closure_0;
        tmp6 = closure_2;
        value = closure_39.get();
        tmp = value >= closure_26 - closure_0(closure_2[26]).RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const obj19 = initialBountyId(4563);
  Tt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(14523).RECAP_SNAP_EPSILON };
  Tt.__workletHash = 6584708256992;
  Tt.__initData = sharedValue4;
  class At {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_34;
        tmp4 = obj.runOnJS(closure_34)(initialBountyId);
      }
      return;
    }
  }
  const obj20 = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(14523).RECAP_SNAP_EPSILON };
  At.__closure = { runOnJS: initialBountyId(4563).runOnJS, setShowRecapFooter: tmp44 };
  At.__workletHash = 10788669301891;
  At.__initData = memo6;
  const animatedReaction1 = obj19.useAnimatedReaction(Tt, At);
  const obj21 = { runOnJS: initialBountyId(4563).runOnJS, setShowRecapFooter: tmp44 };
  class Ct {
    constructor() {
      tmp = closure_24;
      if (closure_24) {
        tmp2 = closure_39;
        tmp3 = closure_26;
        tmp = closure_39.get() > closure_26;
      }
      return tmp;
    }
  }
  Ct.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result };
  Ct.__workletHash = 6186370630693;
  Ct.__initData = __initData5;
  class Dt {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_30;
        tmp4 = obj.runOnJS(closure_30)(initialBountyId);
      }
      return;
    }
  }
  const obj22 = initialBountyId(4563);
  Dt.__closure = { runOnJS: initialBountyId(4563).runOnJS, setIsRecapPageRevealed: tmp33[1] };
  Dt.__workletHash = 12713474352874;
  Dt.__initData = __initData6;
  const animatedReaction2 = obj22.useAnimatedReaction(Ct, Dt);
  const obj23 = { runOnJS: initialBountyId(4563).runOnJS, setIsRecapPageRevealed: tmp33[1] };
  class It {
    constructor() {
      tmp = closure_24;
      if (closure_24) {
        tmp2 = closure_39;
        tmp4 = closure_27;
        tmp5 = closure_0;
        tmp6 = closure_2;
        value = closure_39.get();
        tmp = value >= closure_27 - closure_0(closure_2[26]).RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const obj24 = initialBountyId(4563);
  It.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(14523).RECAP_SNAP_EPSILON };
  It.__workletHash = 5669564400667;
  It.__initData = callback3;
  class Bt {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_32;
        tmp4 = obj.runOnJS(closure_32)(initialBountyId);
      }
      return;
    }
  }
  const obj25 = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(14523).RECAP_SNAP_EPSILON };
  Bt.__closure = { runOnJS: initialBountyId(4563).runOnJS, setIsRecapPageOnTop: tmp36[1] };
  Bt.__workletHash = 8102193741774;
  Bt.__initData = callback4;
  const animatedReaction3 = obj24.useAnimatedReaction(It, Bt);
  const items16 = [height3, stateFromStores > 0];
  const memo7 = noop.useMemo(() => {
    let tmp = null;
    if (closure_24) {
      const obj = { height: height3 };
      tmp = __initData(BountiesRecapPullZone, obj);
    }
    return tmp;
  }, items16);
  const obj26 = { runOnJS: initialBountyId(4563).runOnJS, setIsRecapPageOnTop: tmp36[1] };
  function wt() {
    value = sharedValue.get();
    if (sharedValue1.get() > 0) {
      let num2 = 0;
    } else {
      num2 = 97;
    }
    return { height: memo.top + memo.height * value + num2 };
  }
  wt.__closure = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1, BOUNTIES_MODAL_FOOTER_HEIGHT: 97, videoLayout: memo };
  wt.__workletHash = 154705522065;
  wt.__initData = __initData7;
  animatedStyle = initialBountyId(4563).useAnimatedStyle(wt);
  const items17 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr19[2], width: arr19[3] } = memo);
  const memo8 = noop.useMemo(() => {
    const items = [closure_2.listWrapper, , ];
    const rect = { top: 0, left: memo.left, width: memo.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items17);
  const tmp64 = height(noop.useState(false), 2);
  first4 = tmp64[0];
  __initData9 = tmp66;
  const obj27 = initialBountyId(4563);
  class Ht {
    constructor() {
      value = closure_10.get();
      tmp2 = closure_11.get() > 0;
      if (!tmp2) {
        num = 1;
        tmp2 = value < 1;
      }
      return tmp2;
    }
  }
  Ht.__closure = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1 };
  Ht.__workletHash = 14406360987242;
  Ht.__initData = __initData8;
  class Mt {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_49;
        tmp4 = obj.runOnJS(closure_49)(initialBountyId);
      }
      return;
    }
  }
  const obj28 = initialBountyId(4563);
  Mt.__closure = { runOnJS: initialBountyId(4563).runOnJS, setHideListFooterPadding: tmp64[1] };
  Mt.__workletHash = 7553157067719;
  Mt.__initData = animatedStyle;
  const animatedReaction4 = obj28.useAnimatedReaction(Ht, Mt);
  const items18 = [first4, memo.top];
  const items19 = [, ];
  ({ width: arr21[0], height: arr21[1] } = memo);
  const memo9 = noop.useMemo(() => {
    const obj = { paddingTop: memo.top, paddingBottom: null };
    let num = 97;
    if (first4) {
      num = 0;
    }
    obj.paddingBottom = num;
    return obj;
  }, items18);
  memo10 = noop.useMemo(() => {
    const size = { width: memo.width, height: memo.height };
    return size;
  }, items19);
  const items20 = [tmp.closeButton, , , ];
  ({ top: arr22[1], left: arr22[2], width: arr22[3] } = memo);
  const items21 = [first2, tmp.recapPage, , , , ];
  ({ top: arr23[2], left: arr23[3], width: arr23[4] } = memo);
  items21[5] = height;
  const memo11 = noop.useMemo(() => {
    const items = [closure_2.closeButton, ];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items20);
  const memo12 = noop.useMemo(() => {
    const items = [closure_2.recapPage, ];
    const size = { top: memo.top, left: memo.left, width: memo.width, height: height - memo.top };
    let tmp = null;
    if (first2) {
      const obj = { zIndex };
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    items[1] = size;
    return items;
  }, items21);
  const obj29 = { runOnJS: initialBountyId(4563).runOnJS, setHideListFooterPadding: tmp64[1] };
  class Jt {
    constructor() {
      obj = closure_0(closure_2[26]);
      return obj.getRevealProgress(closure_39.get(), closure_26, height);
    }
  }
  const obj30 = initialBountyId(4563);
  Jt.__closure = { getRevealProgress: initialBountyId(14523).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height3 };
  Jt.__workletHash = 1141192763711;
  Jt.__initData = first4;
  derivedValue = obj30.useDerivedValue(Jt);
  const obj31 = { getRevealProgress: initialBountyId(14523).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height3 };
  class Ut {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[12]);
      value = closure_51.get();
      obj.opacity = obj2.interpolate(value, [0, 1], [0, 1], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const obj32 = initialBountyId(4563);
  Ut.__closure = { interpolate: initialBountyId(4563).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4563).Extrapolation };
  Ut.__workletHash = 15664240485606;
  Ut.__initData = __initData9;
  const animatedStyle1 = obj32.useAnimatedStyle(Ut);
  const obj33 = { interpolate: initialBountyId(4563).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4563).Extrapolation };
  class Gt {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[12]);
      value = closure_51.get();
      items = [, ];
      items[0] = c25;
      items[1] = c26;
      obj.opacity = obj2.interpolate(value, items, [1, 0], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const obj34 = initialBountyId(4563);
  Gt.__closure = { interpolate: initialBountyId(4563).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: height3, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4563).Extrapolation };
  Gt.__workletHash = 13645152212589;
  Gt.__initData = memo10;
  const animatedStyle2 = obj34.useAnimatedStyle(Gt);
  const obj35 = { interpolate: initialBountyId(4563).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: height3, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4563).Extrapolation };
  const tmp74 = FOOTER_FADE_END_PROGRESS;
  class Qt {
    constructor() {
      obj = closure_39;
      if (closure_39.get() >= closure_26 - closure_22 / 2) {
        tmp5 = closure_51;
        value = closure_51.get();
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[26]);
        tmp3 = height;
        num = 0;
        value = obj2.getRevealProgress(obj.get(), 0, height);
      }
      obj1 = { opacity: null };
      obj4 = closure_0(closure_2[12]);
      items = [, ];
      items[0] = c25;
      items[1] = c26;
      obj1.opacity = obj4.interpolate(value, items, [1, 0], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj1;
    }
  }
  const obj36 = initialBountyId(4563);
  Qt.__closure = { scrollY: sharedValue4, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(14523).getRevealProgress, recapRevealHeight: height3, interpolate: initialBountyId(4563).interpolate, FOOTER_FADE_START_PROGRESS: height3, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4563).Extrapolation };
  Qt.__workletHash = 3460917733424;
  Qt.__initData = derivedValue;
  const items22 = [tmp.peekGradient, , , , ];
  ({ left: arr24[1], width: arr24[2], top: arr24[3], height: arr24[4] } = memo);
  const animatedStyle3 = obj36.useAnimatedStyle(Qt);
  let tmp78 = tmp24;
  const memo13 = noop.useMemo(() => {
    const items = [closure_2.peekGradient, ];
    const rect = { left: memo.left, width: memo.width, top: memo.top + memo.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items22);
  if (data.length > 1) {
    tmp78 = hasRecurringSwipeUpNux;
  }
  if (tmp78) {
    tmp78 = !tmp17;
  }
  __initData10 = tmp78;
  if (hasRecurringSwipeUpNux) {
    hasRecurringSwipeUpNux = tmp24;
  }
  const obj37 = { scrollY: sharedValue4, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(14523).getRevealProgress, recapRevealHeight: height3, interpolate: initialBountyId(4563).interpolate, FOOTER_FADE_START_PROGRESS: height3, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4563).Extrapolation };
  class Zt {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[12]);
      value = closure_39.get();
      items = [0];
      items[1] = closure_22;
      obj.opacity = obj2.interpolate(value, items, [1, 0], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result = initialBountyId(4563);
  Zt.__closure = { interpolate: initialBountyId(4563).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: initialBountyId(4563).Extrapolation };
  Zt.__workletHash = 7289479842131;
  Zt.__initData = __initData10;
  const animatedStyle4 = tmp5Result.useAnimatedStyle(Zt);
  const obj38 = { interpolate: initialBountyId(4563).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: initialBountyId(4563).Extrapolation };
  class Wt {
    constructor() {
      return closure_51.get() < c26;
    }
  }
  Wt.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp74 };
  Wt.__workletHash = 8241096384746;
  Wt.__initData = hasRecurringSwipeUpNux;
  function zt(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(c33)(arg0);
    }
  }
  const tmp5Result2 = initialBountyId(4563);
  zt.__closure = { runOnJS: initialBountyId(4563).runOnJS, setIsCloseButtonPressable: tmp41 };
  zt.__workletHash = 12445734761450;
  zt.__initData = __initData11;
  const animatedReaction5 = tmp5Result2.useAnimatedReaction(Wt, zt);
  const items23 = [sum, sharedValue4, memo10, tmp78, hasRecurringSwipeUpNux, sharedValue, sourceQuestContent, , , , , , ];
  ({ width: arr25[7], height: arr25[8] } = memo);
  items23[9] = first3;
  items23[10] = first1;
  items23[11] = first2;
  items23[12] = sharedValue2;
  const items24 = [first3, first1, first2, , , , , ];
  ({ width: arr26[3], height: arr26[4] } = memo);
  items24[5] = tmp78;
  items24[6] = null != tmp16;
  items24[7] = sharedValue;
  const callback6 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { index, slotHeight, scrollY: sharedValue4, style: memo10, isPeekEnabled, children: null };
    const size = { bounty: item, sourceQuestContent, width: memo.width, height: memo.height, index, isScrollIndicatorEnabled: null, isActive: null, isRecapPageRevealed: null, isRecapPageOnTop: null, isScrollingInBoundsSharedValue: null, shouldLoadHls: null, videoEndPeekScale: null, softDownloadCapsEnabled: true };
    let tmp3 = hasRecurringSwipeUpNux;
    if (hasRecurringSwipeUpNux) {
      tmp3 = 0 === index;
    }
    size.isScrollIndicatorEnabled = tmp3;
    size.isActive = index === first3;
    size.isRecapPageRevealed = first1;
    size.isRecapPageOnTop = first2;
    size.isScrollingInBoundsSharedValue = sharedValue2;
    let tmp6 = tmp5;
    if (index !== first3) {
      tmp6 = index === tmp4 + 1;
    }
    size.shouldLoadHls = tmp6;
    let tmp7;
    if (index === first3) {
      tmp7 = sharedValue;
    }
    size.videoEndPeekScale = tmp7;
    obj.children = __initData(BountiesScrollVideoItem.BountiesScrollVideoItem, size, item.id);
    return __initData(BountiesScrollVideoItemContainer, obj);
  }, items23);
  [][0] = height3;
  const memo14 = obj.useMemo(() => {
    const size = { activeIndex: first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, width: memo.width, height: memo.height, isPeekEnabled, isVideoEndAppStoreOverlayVisible, videoEndPeekScale: sharedValue };
    return size;
  }, items24);
  if (0 === data.length) {
    return null;
  } else {
    let tmp85 = null;
    if (tmp43) {
      const obj40 = { orbAmount: stateFromStores };
      tmp85 = isVideoEndAppStoreOverlayVisible(tmp5(14559).BountiesScrollRecapFooter, obj40);
    }
    const obj41 = { value: memo3, children: null };
    const obj42 = { style: tmp.root, children: null };
    let tmp86Result = null;
    if (tmp28) {
      const obj43 = { style: null, pointerEvents: null, children: null };
      const items25 = [memo12, animatedStyle1];
      obj43.style = items25;
      let str = "none";
      if (first2) {
        str = "box-none";
      }
      obj43.pointerEvents = str;
      const obj44 = {
        adContentId,
        adCreativeType: tmp5(5758).AdCreativeType.BOUNTY,
        questContent: tmp5(5756).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first2,
        sourceQuestContent,
        children() {
              return __initData(BountiesScrollRecapPage.BountiesScrollRecapPage, { orbAmount, onClose, style: { flex: 1 } });
            }
      };
      obj43.children = tmp86(tmp5(10740).QuestContentImpressionTrackerNative, obj44);
      tmp86Result = tmp86(tmp2(4563).View, obj43);
    }
    const items26 = [tmp86Result, , , , , ];
    const obj45 = { style: memo8, children: null };
    const obj46 = {
      ref,
      data,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback6,
      extraData: memo14,
      overrideItemLayout: tmp83,
      ItemSeparatorComponent: sum1,
      ListFooterComponent: memo7,
      snapToOffsets: memo5,
      snapToEnd: false,
      decelerationRate: 0.85,
      showsVerticalScrollIndicator: false,
      drawDistance: sum,
      onScroll: animatedScrollHandler,
      scrollEventThrottle: 16,
      scrollEnabled: !tmp17,
      contentContainerStyle: memo9
    };
    obj45.children = isVideoEndAppStoreOverlayVisible(tmp5(8171).AnimatedFlashList, obj46);
    items26[1] = isVideoEndAppStoreOverlayVisible(tmp2(4563).View, obj45);
    let tmp86Result4 = null;
    if (null != tmp16) {
      const obj47 = { metadata: tmp16.metadata, sheetHeight: memo2, revealProgress: sharedValue1, onDismiss: callback2, onInstallPress: null, onOverlaySurfaceClick: null, onCarouselScroll: null };
      ({ onInstallPress: obj49.onInstallPress, onOverlaySurfaceClick: obj49.onOverlaySurfaceClick, onCarouselScroll: obj49.onCarouselScroll } = tmp16);
      tmp86Result4 = tmp86(tmp2(14564), obj47);
    }
    items26[2] = tmp86Result4;
    let tmp86Result5 = null;
    if (tmp78) {
      tmp86Result5 = null;
      if (data.length > 1) {
        const obj48 = { pointerEvents: "none", style: null, children: null };
        const items27 = [memo13, animatedStyle4];
        obj48.style = items27;
        const obj50 = { colors, style: memo.absoluteFill };
        obj48.children = tmp86(tmp2(5286), obj50);
        tmp86Result5 = tmp86(tmp2(4563).View, obj48);
      }
    }
    items26[3] = tmp86Result5;
    const obj51 = { style: null, pointerEvents: null, children: null };
    const items28 = [memo11, animatedStyle2];
    obj51.style = items28;
    let str2 = "none";
    if (tmp40) {
      str2 = "box-none";
    }
    obj51.pointerEvents = str2;
    let tmp86Result6 = null;
    if (tmp40) {
      const obj52 = { onPress: callback5 };
      tmp86Result6 = tmp86(tmp2(14565), obj52);
    }
    obj51.children = tmp86Result6;
    items26[4] = isVideoEndAppStoreOverlayVisible(tmp2(4563).View, obj51);
    const obj53 = { visible: tmp43, onContentLayout: callback, zIndex: height3, opacityStyle: animatedStyle3, children: tmp85 };
    items26[5] = isVideoEndAppStoreOverlayVisible(tmp2(14519), obj53);
    obj42.children = items26;
    obj41.children = memo1(questHomeBounties, obj42);
    return isVideoEndAppStoreOverlayVisible(tmp5(14528).BountyVideoEndAppStoreProvider, obj41);
  }
  const obj39 = { runOnJS: initialBountyId(4563).runOnJS, setIsCloseButtonPressable: tmp41 };
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestConstants = fn(5751);
({ BOUNTY_ORB_AMOUNT: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_9 } = QuestConstants);
const BountiesModalConstants = fn(14518);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: closure_11 } = BountiesModalConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = Constants);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const PlatformUtils = fn(1365);
let closure_17 = PlatformUtils.isAndroid();
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
const createStyles = fn(4829);
let closure_30 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1 }, recapPage: { position: "absolute", zIndex }, listWrapper: { position: "absolute", zIndex: zIndex2, overflow: "hidden" }, closeButton: { position: "absolute", zIndex: zIndex4 }, peekGradient: { position: "absolute", zIndex: zIndex3 } };
  return obj;
});
const __initData = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
let __initData2 = { code: "function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}" };
let __initData3 = { code: "function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}" };
let closure_35 = { code: "function BountiesModalContentScrollTsx5(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
let __initData4 = { code: "function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}" };
let closure_37 = { code: "function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
let closure_38 = { code: "function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}" };
let closure_39 = { code: "function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_40 = { code: "function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
let __initData5 = { code: "function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
let __initData6 = { code: "function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
let closure_43 = { code: "function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_44 = { code: "function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
let __initData7 = { code: "function BountiesModalContentScrollTsx15(){const{videoEndPeekScale,videoEndAppStoreProgress,BOUNTIES_MODAL_FOOTER_HEIGHT,videoLayout}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();const footerHeight=overlayProgress>0||scale<1?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+videoLayout.height*scale+footerHeight};}" };
let __initData8 = { code: "function BountiesModalContentScrollTsx16(){const{videoEndPeekScale,videoEndAppStoreProgress}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();return overlayProgress>0||scale<1;}" };
let closure_47 = { code: "function BountiesModalContentScrollTsx17(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}" };
let closure_48 = { code: "function BountiesModalContentScrollTsx18(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
let __initData9 = { code: "function BountiesModalContentScrollTsx19(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
let closure_50 = { code: "function BountiesModalContentScrollTsx20(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_51 = { code: "function BountiesModalContentScrollTsx21(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let __initData10 = { code: "function BountiesModalContentScrollTsx22(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
let closure_53 = { code: "function BountiesModalContentScrollTsx23(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
const __initData11 = { code: "function BountiesModalContentScrollTsx24(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  ({ bountyId, sourceQuestContent } = arg0);
  return __initData(ThemeContextProvider.ThemeContextProvider, { theme: shared_ThemeTypes.ThemeTypes.DARK, children: __initData(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }) });
};