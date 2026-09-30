// discord_app/modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestDataUtils from "../../utils/QuestDataUtils.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import AppStoreOverlayTelemetryManager from "../AppStoreOverlayTelemetryManager.tsx";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators.tsx";
import useBountiesRecapScroll from "useBountiesRecapScroll.tsx";
import BountiesScrollVideoItem from "BountiesScrollVideoItem.tsx";
import BountiesScrollRecapPage from "BountiesScrollRecapPage.tsx";
import shared_ThemeTypes from "../../../../../discord_common/js/packages/design/shared/ThemeTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BountyStore from "../../BountyStore.tsx";

require = fn;
function ItemSeparator(trailingItem) {
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    const obj = { style: null };
    const obj2 = { height: PX_8 };
    obj.style = obj2;
    tmp = closure_1_17(timestampProducer, obj);
  }
  return tmp;
}
function BountiesRecapPullZone(height) {
  return closure_1_17(timestampProducer, { style: { height: height.height } });
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
  fn.__closure = {
    scrollY,
    index,
    slotHeight,
    isPeekEnabled,
    PEEK_OPACITY: 0.8,
    interpolate: index(scrollY[12]).interpolate,
    FADE_DEADBAND: 0.3,
    Extrapolation: index(scrollY[12]).Extrapolation,
  };
  fn.__workletHash = 6532652233494;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children };
  let items = [style, animatedStyle];
  obj3.style = items;
  return closure_17(slotHeight(scrollY[12]).View, obj3);
}
function BountiesModalContentScrollInner(initialBountyId) {
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  noop = undefined;
  getBountyVideoEndPeekClipHeight = undefined;
  c25 = undefined;
  c32 = undefined;
  let animatedStyle;
  let first4;
  __initData7 = undefined;
  let memo10;
  let derivedValue;
  __initData8 = undefined;
  let tmp = c32();
  dependencyMap = tmp;
  const height = sourceQuestContent(1479)().height;
  const ref = noop.useRef(null);
  [tmp7, c4] = height(noop.useState(initialBountyId(14750).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  closure_129_0 = tmp7;
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  let size = sourceQuestContent(1479)();
  const width = size.width;
  closure_129_1 = width;
  const height2 = size.height;
  closure_129_2 = height2;
  const tmp9 = sourceQuestContent(1613)();
  closure_129_3 = tmp9;
  let items = [width, height2, , , ,];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp9);
  items[5] = tmp7;
  const memo = noop.useMemo(() => {
    const rect = height;
    const diff = sourceQuestContent - height.left - height.right;
    const diff1 = closure_2 - height.top - initialBountyId;
    let result = diff / c24;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c24;
      result = diff1;
    }
    const size = {
      top: rect.top,
      left: Math.floor(rect.left + (diff - result1) / 2),
      width: Math.floor(result1),
      height: Math.floor(result),
    };
    return size;
  }, items);
  const tmp6 = height(noop.useState(initialBountyId(14750).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  const questHomeBounties = initialBountyId(10885).useQuestHomeBounties().questHomeBounties;
  const data = height(
    noop.useState(() => {
      const findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
      if (findIndexResult < 0) {
        let items = [];
      } else {
        items = questHomeBounties;
        if (0 !== findIndexResult) {
          const items1 = [];
          HermesBuiltin.arraySpread(
            questHomeBounties.slice(0, findIndexResult),
            HermesBuiltin.arraySpread(questHomeBounties.slice(findIndexResult), 0),
          );
          items = items1;
          const arraySpreadResult = HermesBuiltin.arraySpread(questHomeBounties.slice(findIndexResult), 0);
        }
      }
      return items;
    }),
    1,
  )[0];
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
  let obj2 = initialBountyId(10885);
  const sharedValue = initialBountyId(4596).useSharedValue(0);
  let obj3 = initialBountyId(4596);
  [tmp15, c11] = height(noop.useState(null), 2);
  getBountyVideoEndPeekScale = noop.useRef(null);
  noop.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp16;
  const items2 = [height, , ,];
  ({ top: arr4[1], width: arr4[2], height: arr4[3] } = memo);
  const memo1 = noop.useMemo(
    () => map1({ windowHeight: height, videoTop: memo.top, videoWidth: memo.width, videoHeight: memo.height }),
    items2,
  );
  const items3 = [height];
  const items4 = [sharedValue];
  const memo2 = noop.useMemo(() => closure_2_10(height), items3);
  const callback1 = noop.useCallback((current) => {
    closure_13.current = Date.now();
    closure_12.current = current;
    _undefined2(current);
    const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    current.trackOverlayEvent(
      constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
      appId,
      AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
    );
  }, items4);
  const items5 = [sharedValue];
  const callback2 = noop.useCallback(() => {
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
      _undefined2(null);
      const result1 = sharedValue.set(timing.withTiming(0, timingPresets.timingStandard));
    }
  }, items5);
  const items6 = [callback2, null != tmp15, callback1, sharedValue, memo1];
  const memo3 = noop.useMemo(
    () => ({
      videoEndPeekProgress: sharedValue,
      videoEndPeekTargetScale: memo1,
      isVideoEndAppStoreOverlayVisible,
      showVideoEndAppStoreOverlay: callback1,
      dismissVideoEndAppStoreOverlay: callback2,
    }),
    items6,
  );
  const tmp14 = height(noop.useState(null), 2);
  const items7 = [data];
  const items8 = [data, closure_8];
  const stateFromStores = initialBountyId(504).useStateFromStores(
    items7,
    () => BountyStore.getCompletedBountyCount(first) * closure_9,
    items8,
  );
  let obj4 = initialBountyId(504);
  const bountyRecurringSwipeUpNux = initialBountyId(14753).useBountyRecurringSwipeUpNux({ isEligible: tmp23 });
  let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
  const height3 = memo.height;
  let sum = height3 + c25;
  c21 = sum;
  let diff = data.length - 1;
  c22 = diff;
  zIndex4 = tmp27;
  let result = diff * sum;
  c25 = result;
  const sum1 = result + height3;
  const items9 = [sum1, result, height3];
  const memo4 = noop.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height3 }), items9);
  let obj5 = initialBountyId(14753);
  const handleRecapMomentumEnd = initialBountyId(14754).useBountiesRecapScroll({
    listRef: ref,
    enabled: tmp27,
    offsets: memo4,
  }).handleRecapMomentumEnd;
  const items10 = [data, sum1, stateFromStores > 0, sum];
  const memo5 = noop.useMemo(() => {
    const mapped = first.map((item, index) => index * slotHeight);
    if (closure_23) {
      mapped.push(sum1);
    }
    return mapped;
  }, items10);
  const tmp32 = height(noop.useState(false), 2);
  const first1 = tmp32[0];
  ItemSeparatorComponent = tmp34;
  const tmp35 = height(noop.useState(false), 2);
  const first2 = tmp35[0];
  closure_31 = tmp37;
  let obj6 = initialBountyId(14754);
  [tmp39, tmp40] = height(noop.useState(true), 2);
  c32 = tmp40;
  const tmp38 = height(noop.useState(true), 2);
  [tmp42, tmp43] = height(noop.useState(false), 2);
  c33 = tmp43;
  const tmp44 = height(noop.useState(0), 2);
  const first3 = tmp44[0];
  __initData2 = tmp44[1];
  const tmp41 = height(noop.useState(false), 2);
  const sharedValue1 = initialBountyId(4596).useSharedValue(false);
  const obj7 = initialBountyId(4596);
  const sharedValue2 = initialBountyId(4596).useSharedValue(false);
  const obj8 = initialBountyId(4596);
  const sharedValue3 = initialBountyId(4596).useSharedValue(0);
  const memo6 = noop.useMemo(() => initialBountyId(closure_2[27]).v4(), []);
  __initData3 = noop.useRef(0);
  __initData4 = noop.useRef(0);
  const effect1 = noop.useEffect(() => {
    closure_40.current = Date.now();
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
      let result = {
        scrollingType: MANUAL,
        scrollingDirection: null,
        verticalScrollingPosition: null,
        scrollSessionId: null,
        timeWatchedPreScrollMs: null,
      };
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
    closure_35(arg0);
    callback2();
    callback3(arg0);
    tmp = 0 === first3 && arg0 > 0 && hasRecurringSwipeUpNux;
  }, items12);
  const obj9 = initialBountyId(4596);
  __initData5 = initialBountyId(14755).useBountiesRecapOrbCount({
    scrollY: sharedValue3,
    lastBountyScrollOffset: result,
    recapRevealHeight: height3,
    targetOrbAmount: stateFromStores,
    enabled: tmp27,
  });
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
      const obj2 = {
        adContentId: tmp.id,
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
      obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(num, num2);
      obj3.threshold_met = 1000 * num >= result;
      obj3.reward_timer_seconds = result / 1000;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj2);
    }
    BountiesModalActionCreatorsDefault.hideModal();
  }, items14);
  __initData6 = noop.useCallback(() => {
    const obj2 = {
      adContentId,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      event: constants.AD_VIDEO_MODAL_CLOSED,
      properties: null,
      sourceQuestContent: null,
    };
    const obj3 = { content_name: null, content_id: null };
    const obj = AnalyticsActions;
    obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL);
    obj3.content_id = QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items15);
  const obj10 = initialBountyId(14755);
  const obj12 = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumEnd: null };
  class Rt {
    constructor(arg0) {
      result = closure_38.set(initialBountyId.contentOffset.y);
      if (closure_37.get()) {
        tmp4 = isScrollEventInBounds;
        if (typeof isScrollEventInBounds === "function") {
          tmp5 = globalThis;
          _Math = Math;
          num = 0;
          tmp7 = initialBountyId.contentOffset.y >= 0 && initialBountyId.contentOffset.y <= tmp6;
          tmp3Result = tmp3(tmp7);
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      return;
    }
  }
  Rt.__closure = {
    scrollY: sharedValue3,
    isDraggingSharedValue: sharedValue2,
    isScrollingInBoundsSharedValue: sharedValue1,
    isScrollEventInBounds: first2,
  };
  Rt.__workletHash = 7942598540397;
  Rt.__initData = __initData2;
  obj12.onScroll = Rt;
  function ft(contentOffset) {
    const result = sharedValue2.set(true);
    if (typeof isScrollEventInBounds === "function") {
      const _Math = Math;
      tmp3(contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  ft.__closure = {
    isDraggingSharedValue: sharedValue2,
    isScrollingInBoundsSharedValue: sharedValue1,
    isScrollEventInBounds: first2,
  };
  ft.__workletHash = 14039038912528;
  ft.__initData = sharedValue1;
  obj12.onBeginDrag = ft;
  class Pt {
    constructor() {
      result = closure_37.set(false);
      if (!closure_19) {
        tmp2 = closure_36;
        result1 = closure_36.set(false);
      }
      return;
    }
  }
  Pt.__closure = {
    isDraggingSharedValue: sharedValue2,
    IS_ANDROID: dismissRecurringSwipeUpNux,
    isScrollingInBoundsSharedValue: sharedValue1,
  };
  Pt.__workletHash = 9975335138319;
  Pt.__initData = sharedValue2;
  obj12.onEndDrag = Pt;
  class Ot {
    constructor(arg0) {
      if (closure_23) {
        tmp = initialBountyId;
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp4 = handleRecapMomentumEnd;
        tmp5 = obj.runOnJS(handleRecapMomentumEnd)(initialBountyId);
      }
      result = closure_36.set(false);
      return;
    }
  }
  const obj11 = initialBountyId(4596);
  const obj13 = {
    scrollY: sharedValue3,
    isDraggingSharedValue: sharedValue2,
    isScrollingInBoundsSharedValue: sharedValue1,
    isScrollEventInBounds: first2,
  };
  const obj14 = {
    isDraggingSharedValue: sharedValue2,
    IS_ANDROID: dismissRecurringSwipeUpNux,
    isScrollingInBoundsSharedValue: sharedValue1,
  };
  Ot.__closure = {
    showRecapPullZone: stateFromStores > 0,
    runOnJS: initialBountyId(4596).runOnJS,
    handleRecapMomentumEnd,
    isScrollingInBoundsSharedValue: sharedValue1,
  };
  Ot.__workletHash = 13684210320337;
  Ot.__initData = sharedValue3;
  obj12.onMomentumEnd = Ot;
  const obj15 = {
    showRecapPullZone: stateFromStores > 0,
    runOnJS: initialBountyId(4596).runOnJS,
    handleRecapMomentumEnd,
    isScrollingInBoundsSharedValue: sharedValue1,
  };
  const animatedScrollHandler = obj11.useAnimatedScrollHandler(obj12);
  class Tt {
    constructor() {
      return Math.min(Math.max(Math.round(closure_38.get() / closure_21), 0), closure_22);
    }
  }
  Tt.__closure = { scrollY: sharedValue3, slotHeight: sum, lastBountyIndex: diff };
  Tt.__workletHash = 14048843158960;
  Tt.__initData = memo6;
  function vt(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback4)(arg0);
    }
  }
  const obj16 = initialBountyId(4596);
  vt.__closure = { runOnJS: initialBountyId(4596).runOnJS, commitSwipe: callback4 };
  vt.__workletHash = 14015091539518;
  vt.__initData = __initData3;
  const animatedReaction = obj16.useAnimatedReaction(Tt, vt);
  const obj17 = { runOnJS: initialBountyId(4596).runOnJS, commitSwipe: callback4 };
  class Bt {
    constructor() {
      tmp = closure_23;
      if (closure_23) {
        tmp2 = closure_38;
        tmp4 = closure_25;
        tmp5 = closure_0;
        tmp6 = closure_2;
        value = closure_38.get();
        tmp = value >= closure_25 - closure_0(closure_2[26]).RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const obj18 = initialBountyId(4596);
  Bt.__closure = {
    showRecapPullZone: stateFromStores > 0,
    scrollY: sharedValue3,
    lastBountyScrollOffset: result,
    RECAP_SNAP_EPSILON: initialBountyId(14754).RECAP_SNAP_EPSILON,
  };
  Bt.__workletHash = 6584708256992;
  Bt.__initData = __initData4;
  class At {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_33;
        tmp4 = obj.runOnJS(closure_33)(initialBountyId);
      }
      return;
    }
  }
  const obj19 = {
    showRecapPullZone: stateFromStores > 0,
    scrollY: sharedValue3,
    lastBountyScrollOffset: result,
    RECAP_SNAP_EPSILON: initialBountyId(14754).RECAP_SNAP_EPSILON,
  };
  At.__closure = { runOnJS: initialBountyId(4596).runOnJS, setShowRecapFooter: tmp43 };
  At.__workletHash = 10788669301891;
  At.__initData = callback3;
  const animatedReaction1 = obj18.useAnimatedReaction(Bt, At);
  const obj20 = { runOnJS: initialBountyId(4596).runOnJS, setShowRecapFooter: tmp43 };
  class Dt {
    constructor() {
      tmp = closure_23;
      if (closure_23) {
        tmp2 = closure_38;
        tmp3 = closure_25;
        tmp = closure_38.get() > closure_25;
      }
      return tmp;
    }
  }
  Dt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, lastBountyScrollOffset: result };
  Dt.__workletHash = 6186370630693;
  Dt.__initData = callback4;
  class Ct {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_29;
        tmp4 = obj.runOnJS(closure_29)(initialBountyId);
      }
      return;
    }
  }
  const obj21 = initialBountyId(4596);
  Ct.__closure = { runOnJS: initialBountyId(4596).runOnJS, setIsRecapPageRevealed: tmp32[1] };
  Ct.__workletHash = 12713474352874;
  Ct.__initData = __initData5;
  const animatedReaction2 = obj21.useAnimatedReaction(Dt, Ct);
  const obj22 = { runOnJS: initialBountyId(4596).runOnJS, setIsRecapPageRevealed: tmp32[1] };
  class It {
    constructor() {
      tmp = closure_23;
      if (closure_23) {
        tmp2 = closure_38;
        tmp4 = closure_26;
        tmp5 = closure_0;
        tmp6 = closure_2;
        value = closure_38.get();
        tmp = value >= closure_26 - closure_0(closure_2[26]).RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const obj23 = initialBountyId(4596);
  It.__closure = {
    showRecapPullZone: stateFromStores > 0,
    scrollY: sharedValue3,
    fullRecapScrollOffset: sum1,
    RECAP_SNAP_EPSILON: initialBountyId(14754).RECAP_SNAP_EPSILON,
  };
  It.__workletHash = 5669564400667;
  It.__initData = __initData6;
  function yt(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_31)(arg0);
    }
  }
  const obj24 = {
    showRecapPullZone: stateFromStores > 0,
    scrollY: sharedValue3,
    fullRecapScrollOffset: sum1,
    RECAP_SNAP_EPSILON: initialBountyId(14754).RECAP_SNAP_EPSILON,
  };
  yt.__closure = { runOnJS: initialBountyId(4596).runOnJS, setIsRecapPageOnTop: tmp35[1] };
  yt.__workletHash = 8102193741774;
  yt.__initData = animatedStyle;
  const animatedReaction3 = obj23.useAnimatedReaction(It, yt);
  const items16 = [height3, stateFromStores > 0];
  const memo7 = noop.useMemo(() => {
    let tmp = null;
    if (closure_23) {
      const obj = { height: height3 };
      tmp = closure_2_17(BountiesRecapPullZone, obj);
    }
    return tmp;
  }, items16);
  const obj25 = { runOnJS: initialBountyId(4596).runOnJS, setIsRecapPageOnTop: tmp35[1] };
  class Mt {
    constructor() {
      value = closure_10.get();
      tmp2 = closure_12(value, closure_15);
      tmp3 = closure_5;
      num = 97;
      tmp4 = closure_11(value, closure_5.width, closure_5.height);
      if (value > 0) {
        num = 0;
      }
      obj = { height: tmp3.top + tmp4 * tmp2 + num };
      return obj;
    }
  }
  Mt.__closure = {
    videoEndPeekProgress: sharedValue,
    getBountyVideoEndPeekScale,
    videoEndPeekTargetScale: memo1,
    getBountyVideoEndPeekClipHeight,
    videoLayout: memo,
    BOUNTIES_MODAL_FOOTER_HEIGHT: 97,
  };
  Mt.__workletHash = 6723524234865;
  Mt.__initData = first4;
  animatedStyle = initialBountyId(4596).useAnimatedStyle(Mt);
  const items17 = [animatedStyle, tmp.listWrapper, ,];
  ({ left: arr19[2], width: arr19[3] } = memo);
  const memo8 = noop.useMemo(() => {
    const items = [closure_2.listWrapper, ,];
    const rect = { top: 0, left: memo.left, width: memo.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items17);
  const tmp63 = height(noop.useState(false), 2);
  first4 = tmp63[0];
  __initData7 = tmp65;
  const obj26 = initialBountyId(4596);
  const obj27 = {
    videoEndPeekProgress: sharedValue,
    getBountyVideoEndPeekScale,
    videoEndPeekTargetScale: memo1,
    getBountyVideoEndPeekClipHeight,
    videoLayout: memo,
    BOUNTIES_MODAL_FOOTER_HEIGHT: 97,
  };
  function kt() {
    return sharedValue.get() > 0;
  }
  kt.__closure = { videoEndPeekProgress: sharedValue };
  kt.__workletHash = 635744460978;
  kt.__initData = __initData7;
  class Ht {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_48;
        tmp4 = obj.runOnJS(closure_48)(initialBountyId);
      }
      return;
    }
  }
  const obj28 = initialBountyId(4596);
  Ht.__closure = { runOnJS: initialBountyId(4596).runOnJS, setHideListFooterPadding: tmp63[1] };
  Ht.__workletHash = 7553157067719;
  Ht.__initData = memo10;
  const animatedReaction4 = obj28.useAnimatedReaction(kt, Ht);
  const items18 = [first4, memo.top];
  const items19 = [,];
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
  const items20 = [tmp.closeButton, , ,];
  ({ top: arr22[1], left: arr22[2], width: arr22[3] } = memo);
  const items21 = [first2, tmp.recapPage, , , ,];
  ({ top: arr23[2], left: arr23[3], width: arr23[4] } = memo);
  items21[5] = height;
  const memo11 = noop.useMemo(() => {
    const items = [closure_2.closeButton];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items20);
  const memo12 = noop.useMemo(() => {
    const items = [closure_2.recapPage];
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
  const obj29 = { runOnJS: initialBountyId(4596).runOnJS, setHideListFooterPadding: tmp63[1] };
  class Ut {
    constructor() {
      obj = closure_0(closure_2[26]);
      return obj.getRevealProgress(closure_38.get(), closure_25, height);
    }
  }
  const obj30 = initialBountyId(4596);
  Ut.__closure = {
    getRevealProgress: initialBountyId(14754).getRevealProgress,
    scrollY: sharedValue3,
    lastBountyScrollOffset: result,
    recapRevealHeight: height3,
  };
  Ut.__workletHash = 1141192763711;
  Ut.__initData = derivedValue;
  derivedValue = obj30.useDerivedValue(Ut);
  const obj31 = {
    getRevealProgress: initialBountyId(14754).getRevealProgress,
    scrollY: sharedValue3,
    lastBountyScrollOffset: result,
    recapRevealHeight: height3,
  };
  class Gt {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[12]);
      value = closure_50.get();
      obj.opacity = obj2.interpolate(value, [0, 1], [0, 1], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const obj32 = initialBountyId(4596);
  Gt.__closure = {
    interpolate: initialBountyId(4596).interpolate,
    recapPullProgress: derivedValue,
    Extrapolation: initialBountyId(4596).Extrapolation,
  };
  Gt.__workletHash = 15664240485606;
  Gt.__initData = __initData8;
  const animatedStyle1 = obj32.useAnimatedStyle(Gt);
  const obj33 = {
    interpolate: initialBountyId(4596).interpolate,
    recapPullProgress: derivedValue,
    Extrapolation: initialBountyId(4596).Extrapolation,
  };
  class Qt {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[12]);
      value = closure_50.get();
      items = [,];
      items[0] = c27;
      items[1] = c28;
      obj.opacity = obj2.interpolate(value, items, [1, 0], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const obj34 = initialBountyId(4596);
  Qt.__closure = {
    interpolate: initialBountyId(4596).interpolate,
    recapPullProgress: derivedValue,
    FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd,
    FOOTER_FADE_END_PROGRESS: first1,
    Extrapolation: initialBountyId(4596).Extrapolation,
  };
  Qt.__workletHash = 13645152212589;
  Qt.__initData = hasRecurringSwipeUpNux;
  const animatedStyle2 = obj34.useAnimatedStyle(Qt);
  const obj35 = {
    interpolate: initialBountyId(4596).interpolate,
    recapPullProgress: derivedValue,
    FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd,
    FOOTER_FADE_END_PROGRESS: first1,
    Extrapolation: initialBountyId(4596).Extrapolation,
  };
  const tmp73 = first1;
  class Zt {
    constructor() {
      obj = closure_38;
      if (closure_38.get() >= closure_25 - closure_21 / 2) {
        tmp5 = closure_50;
        value = closure_50.get();
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
      items = [,];
      items[0] = c27;
      items[1] = c28;
      obj1.opacity = obj4.interpolate(value, items, [1, 0], closure_0(closure_2[12]).Extrapolation.CLAMP);
      return obj1;
    }
  }
  const obj36 = initialBountyId(4596);
  Zt.__closure = {
    scrollY: sharedValue3,
    lastBountyScrollOffset: result,
    slotHeight: sum,
    recapPullProgress: derivedValue,
    getRevealProgress: initialBountyId(14754).getRevealProgress,
    recapRevealHeight: height3,
    interpolate: initialBountyId(4596).interpolate,
    FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd,
    FOOTER_FADE_END_PROGRESS: first1,
    Extrapolation: initialBountyId(4596).Extrapolation,
  };
  Zt.__workletHash = 3460917733424;
  Zt.__initData = __initData9;
  const items22 = [tmp.peekGradient, , , ,];
  ({ left: arr24[1], width: arr24[2], top: arr24[3], height: arr24[4] } = memo);
  const animatedStyle3 = obj36.useAnimatedStyle(Zt);
  let tmp77 = tmp23;
  const memo13 = noop.useMemo(() => {
    const items = [closure_2.peekGradient];
    const rect = { left: memo.left, width: memo.width, top: memo.top + memo.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items22);
  if (data.length > 1) {
    tmp77 = hasRecurringSwipeUpNux;
  }
  if (tmp77) {
    tmp77 = !tmp16;
  }
  __initData8 = tmp77;
  if (hasRecurringSwipeUpNux) {
    hasRecurringSwipeUpNux = tmp23;
  }
  const obj37 = {
    scrollY: sharedValue3,
    lastBountyScrollOffset: result,
    slotHeight: sum,
    recapPullProgress: derivedValue,
    getRevealProgress: initialBountyId(14754).getRevealProgress,
    recapRevealHeight: height3,
    interpolate: initialBountyId(4596).interpolate,
    FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd,
    FOOTER_FADE_END_PROGRESS: first1,
    Extrapolation: initialBountyId(4596).Extrapolation,
  };
  function zt() {
    const obj = { opacity: null };
    value = sharedValue3.get();
    const items = [0, c21];
    obj.opacity = ReanimatedRexport.interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  }
  const tmp5Result = initialBountyId(4596);
  zt.__closure = {
    interpolate: initialBountyId(4596).interpolate,
    scrollY: sharedValue3,
    slotHeight: sum,
    Extrapolation: initialBountyId(4596).Extrapolation,
  };
  zt.__workletHash = 7289479842131;
  zt.__initData = __initData10;
  const animatedStyle4 = tmp5Result.useAnimatedStyle(zt);
  const obj38 = {
    interpolate: initialBountyId(4596).interpolate,
    scrollY: sharedValue3,
    slotHeight: sum,
    Extrapolation: initialBountyId(4596).Extrapolation,
  };
  class Kt {
    constructor() {
      return closure_50.get() < c28;
    }
  }
  Kt.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp73 };
  Kt.__workletHash = 8241096384746;
  Kt.__initData = __initData11;
  class Wt {
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
  const tmp5Result2 = initialBountyId(4596);
  Wt.__closure = { runOnJS: initialBountyId(4596).runOnJS, setIsCloseButtonPressable: tmp40 };
  Wt.__workletHash = 12445734761450;
  Wt.__initData = __initData12;
  const animatedReaction5 = tmp5Result2.useAnimatedReaction(Kt, Wt);
  const items23 = [sum, sharedValue3, memo10, tmp77, hasRecurringSwipeUpNux, sourceQuestContent, , , , , ,];
  ({ width: arr25[6], height: arr25[7] } = memo);
  items23[8] = first3;
  items23[9] = first1;
  items23[10] = first2;
  items23[11] = sharedValue1;
  const items24 = [first3, first1, first2, , , ,];
  ({ width: arr26[3], height: arr26[4] } = memo);
  items24[5] = tmp77;
  items24[6] = null != tmp15;
  const callback6 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { index, slotHeight, scrollY: sharedValue3, style: memo10, isPeekEnabled, children: null };
    const size = {
      bounty: item,
      sourceQuestContent,
      width: memo.width,
      height: memo.height,
      index,
      isScrollIndicatorEnabled: null,
      isActive: null,
      isRecapPageRevealed: null,
      isRecapPageOnTop: null,
      isScrollingInBoundsSharedValue: null,
      shouldLoadHls: null,
      softDownloadCapsEnabled: true,
    };
    let tmp3 = hasRecurringSwipeUpNux;
    if (hasRecurringSwipeUpNux) {
      tmp3 = 0 === index;
    }
    size.isScrollIndicatorEnabled = tmp3;
    let tmp5 = index === first3;
    size.isActive = tmp5;
    size.isRecapPageRevealed = first1;
    size.isRecapPageOnTop = first2;
    size.isScrollingInBoundsSharedValue = sharedValue1;
    if (!tmp5) {
      tmp5 = index === tmp4 + 1;
    }
    size.shouldLoadHls = tmp5;
    obj.children = closure_2_17(BountiesScrollVideoItem.BountiesScrollVideoItem, size, item.id);
    return closure_2_17(BountiesScrollVideoItemContainer, obj);
  }, items23);
  [][0] = height3;
  const memo14 = obj.useMemo(() => {
    const size = {
      activeIndex: first3,
      isRecapPageRevealed: first1,
      isRecapPageOnTop: first2,
      width: memo.width,
      height: memo.height,
      isPeekEnabled,
      isVideoEndAppStoreOverlayVisible,
    };
    return size;
  }, items24);
  if (0 === data.length) {
    return null;
  } else {
    let tmp84 = null;
    if (tmp42) {
      const obj40 = { orbAmount: stateFromStores };
      tmp84 = callback2(tmp5(14790).BountiesScrollRecapFooter, obj40);
    }
    const obj41 = { value: memo3, children: null };
    const obj42 = { style: tmp.root, children: null };
    let tmp85Result = null;
    if (tmp27) {
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
        adCreativeType: tmp5(5960).AdCreativeType.BOUNTY,
        questContent: tmp5(5958).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first2,
        sourceQuestContent,
        children() {
          return closure_2_17(BountiesScrollRecapPage.BountiesScrollRecapPage, {
            orbAmount,
            onClose,
            style: { flex: 1 },
          });
        },
      };
      obj43.children = tmp85(tmp5(10957).QuestContentImpressionTrackerNative, obj44);
      tmp85Result = tmp85(tmp2(4596).View, obj43);
    }
    const items26 = [tmp85Result, , , , ,];
    const obj45 = { style: memo8, children: null };
    const obj46 = {
      ref,
      data,
      keyExtractor(id) {
        return id.id;
      },
      renderItem: callback6,
      extraData: memo14,
      overrideItemLayout: tmp82,
      ItemSeparatorComponent,
      ListFooterComponent: memo7,
      snapToOffsets: memo5,
      snapToEnd: false,
      decelerationRate: 0.85,
      showsVerticalScrollIndicator: false,
      drawDistance: sum,
      onScroll: animatedScrollHandler,
      scrollEventThrottle: 16,
      scrollEnabled: !tmp16,
      contentContainerStyle: memo9,
    };
    obj45.children = callback2(tmp5(8375).AnimatedFlashList, obj46);
    items26[1] = callback2(tmp2(4596).View, obj45);
    let tmp85Result4 = null;
    if (null != tmp15) {
      const obj47 = {
        metadata: tmp15.metadata,
        sheetHeight: memo2,
        revealProgress: sharedValue,
        onDismiss: callback2,
        onInstallPress: null,
        onOverlaySurfaceClick: null,
        onCarouselScroll: null,
      };
      ({
        onInstallPress: obj49.onInstallPress,
        onOverlaySurfaceClick: obj49.onOverlaySurfaceClick,
        onCarouselScroll: obj49.onCarouselScroll,
      } = tmp15);
      tmp85Result4 = tmp85(tmp2(14795), obj47);
    }
    items26[2] = tmp85Result4;
    let tmp85Result5 = null;
    if (tmp77) {
      tmp85Result5 = null;
      if (data.length > 1) {
        const obj48 = { pointerEvents: "none", style: null, children: null };
        const items27 = [memo13, animatedStyle4];
        obj48.style = items27;
        const obj50 = { colors: sum1, style: memo.absoluteFill };
        obj48.children = tmp85(tmp2(5489), obj50);
        tmp85Result5 = tmp85(tmp2(4596).View, obj48);
      }
    }
    items26[3] = tmp85Result5;
    const obj51 = { style: null, pointerEvents: null, children: null };
    const items28 = [memo11, animatedStyle2];
    obj51.style = items28;
    let str2 = "none";
    if (tmp39) {
      str2 = "box-none";
    }
    obj51.pointerEvents = str2;
    let tmp85Result6 = null;
    if (tmp39) {
      const obj52 = { onPress: callback5 };
      tmp85Result6 = tmp85(tmp2(14796), obj52);
    }
    obj51.children = tmp85Result6;
    items26[4] = callback2(tmp2(4596).View, obj51);
    const obj53 = {
      visible: tmp42,
      onContentLayout: callback,
      zIndex: zIndex4,
      opacityStyle: animatedStyle3,
      children: tmp84,
    };
    items26[5] = callback2(tmp2(14750), obj53);
    obj42.children = items26;
    obj41.children = hasRecurringSwipeUpNux(questHomeBounties, obj42);
    return callback2(tmp5(14759).BountyVideoEndAppStoreProvider, obj41);
  }
  const obj39 = { runOnJS: initialBountyId(4596).runOnJS, setIsCloseButtonPressable: tmp40 };
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestConstants = fn(5953);
({ BOUNTY_ORB_AMOUNT: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_9 } = QuestConstants);
const BountiesModalConstants = fn(14749);
({
  getBountyVideoEndAppStoreSheetHeight: c10,
  getBountyVideoEndPeekClipHeight: closure_11,
  getBountyVideoEndPeekScale: closure_12,
  getBountyVideoEndPeekTargetScale: map1,
} = BountiesModalConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, ComponentActions: closure_15 } = Constants);
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const PlatformUtils = fn(1365);
let closure_19 = PlatformUtils.isAndroid();
let c20 = 0;
let c21 = 1;
let c22 = 2;
let c23 = 3;
let c24 = 0.5625;
const PX_8 = nativeDefault.space.PX_8;
let closure_26 = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let c27 = 0.05;
let c28 = 0.1;
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = {
  code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}",
};
const createStyles = fn(4866);
let closure_32 = createStyles.createStyles(() => {
  const obj = {
    root: { flex: 1 },
    recapPage: { position: "absolute", zIndex },
    listWrapper: { position: "absolute", zIndex: zIndex2, overflow: "hidden" },
    closeButton: { position: "absolute", zIndex: zIndex4 },
    peekGradient: { position: "absolute", zIndex: zIndex3 },
  };
  return obj;
});
const __initData = {
  code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}",
};
let __initData2 = {
  code: "function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}",
};
let closure_36 = {
  code: "function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}",
};
let closure_37 = {
  code: "function BountiesModalContentScrollTsx5(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}",
};
let closure_38 = {
  code: "function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}",
};
let closure_39 = {
  code: "function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}",
};
let __initData3 = {
  code: "function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}",
};
let __initData4 = {
  code: "function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}",
};
let closure_42 = {
  code: "function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}",
};
let closure_43 = {
  code: "function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}",
};
let __initData5 = {
  code: "function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}",
};
let __initData6 = {
  code: "function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}",
};
let closure_46 = {
  code: "function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}",
};
let closure_47 = {
  code: "function BountiesModalContentScrollTsx15(){const{videoEndPeekProgress,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,videoLayout,BOUNTIES_MODAL_FOOTER_HEIGHT}=this.__closure;const progress=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress,videoLayout.width,videoLayout.height);const footerHeight=progress>0?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+clipHeight*scale+footerHeight};}",
};
let __initData7 = {
  code: "function BountiesModalContentScrollTsx16(){const{videoEndPeekProgress}=this.__closure;return videoEndPeekProgress.get()>0;}",
};
let closure_49 = {
  code: "function BountiesModalContentScrollTsx17(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}",
};
let closure_50 = {
  code: "function BountiesModalContentScrollTsx18(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}",
};
let __initData8 = {
  code: "function BountiesModalContentScrollTsx19(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}",
};
let closure_52 = {
  code: "function BountiesModalContentScrollTsx20(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}",
};
const __initData9 = {
  code: "function BountiesModalContentScrollTsx21(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}",
};
const __initData10 = {
  code: "function BountiesModalContentScrollTsx22(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}",
};
const __initData11 = {
  code: "function BountiesModalContentScrollTsx23(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}",
};
const __initData12 = {
  code: "function BountiesModalContentScrollTsx24(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  ({ bountyId, sourceQuestContent } = arg0);
  return closure_1_17(native.ThemeContextProvider, {
    theme: shared_ThemeTypes.ThemeTypes.DARK,
    children: closure_1_17(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }),
  });
}
