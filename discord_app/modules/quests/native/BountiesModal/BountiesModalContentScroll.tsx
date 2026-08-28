// === Module 14543: ItemSeparator ===

// Module 14543 (ItemSeparator)
import ThemesDefault from "Themes" /* 712 */;
import ThemeContextProvider from "ThemeContextProvider" /* 1360 */;
import items28 from "items" /* 12990 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "set" /* 7394 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5352 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import PlatformTypes from "PlatformTypes" /* 501 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function ItemSeparator(trailingItem) {
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    let obj = { style: null };
    obj = { height: null };
    obj[0] = PX_8;
    obj[0] = obj;
    tmp = callback2(closure_6, obj);
  }
  return tmp;
}
function BountiesRecapPullZone(height) {
  const style = { height: height.height };
  return callback2(closure_6, { style });
}
function BountiesScrollVideoItemContainer(index) {
  index = index.index;
  const slotHeight = index.slotHeight;
  const scrollY = index.scrollY;
  const isPeekEnabled = index.isPeekEnabled;
  ({ style, children } = index);
  let obj = index(scrollY[11]);
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
    const obj = { opacity: index(scrollY[11]).interpolate(absolute, [0, 0.3, 1], items, index(scrollY[11]).Extrapolation.CLAMP) };
    items = [1, 1, num];
    return obj;
  };
  obj = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY: 0.8, interpolate: index(scrollY[11]).interpolate, FADE_DEADBAND: 0.3, Extrapolation: index(scrollY[11]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 6532652233494;
  fn.__initData = closure_28;
  const animatedStyle = obj.useAnimatedStyle(fn);
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return callback2(slotHeight(scrollY[11]).View, { style, children });
}
function BountiesModalContentScrollInner(arg0) {
  ({ initialBountyId: require, sourceQuestContent } = arg0);
  let width = sourceQuestContent;
  let height2;
  let callback;
  let React;
  let memo;
  let questHomeBounties;
  let first;
  let orbAmount;
  let ownedByVerticalScrollExperiment;
  let rewardTimerSeconds;
  ownedByVerticalScrollExperiment = undefined;
  let callback2;
  let first1;
  let height3;
  c15 = undefined;
  c16 = undefined;
  closure_17 = undefined;
  height3 = undefined;
  let result1;
  let sum1;
  let handleRecapMomentumEnd;
  let first2;
  closure_23 = undefined;
  let first3;
  closure_25 = undefined;
  c26 = undefined;
  let callback3;
  let first4;
  closure_29 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let hasSingleUseSwipeUpNux;
  let dismissSingleUseSwipeUpNux;
  let hasRecurringSwipeUpNux;
  let dismissRecurringSwipeUpNux;
  closure_37 = undefined;
  hasRecurringSwipeUpNux = undefined;
  let memo3;
  closure_40 = undefined;
  closure_41 = undefined;
  let peekScale;
  let cancel;
  let dismissOnClose;
  let takeDidAutoScroll;
  let onPlaybackTimeChange;
  let onEndCardVisible;
  let pauseCountdown;
  let resumeCountdown;
  let memo4;
  callback2 = undefined;
  callback3 = undefined;
  closure_53 = undefined;
  closure_54 = undefined;
  let memo8;
  let derivedValue;
  let tmp = callback3();
  height2 = tmp;
  const height = width(height2[12])().height;
  callback = height;
  let obj = React;
  const ref = React.useRef(null);
  [tmp7, c4] = callback(React.useState(require(height2[14]).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  require = tmp7;
  width = undefined;
  height2 = undefined;
  callback = undefined;
  callback = React.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  const size = width(height2[12])();
  width = size.width;
  height2 = size.height;
  let tmp9 = width(height2[13])();
  callback = tmp9;
  let items = [width, height2, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp9);
  items[5] = tmp7;
  memo = React.useMemo(() => {
    const rect = closure_3;
    const diff = width - closure_3.left - closure_3.right;
    const diff1 = height2 - closure_3.top - closure_0;
    let result = diff / result1;
    result1 = diff;
    if (result > diff1) {
      result1 = diff1 * result1;
      result = diff1;
    }
    return { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
  }, items);
  obj1 = require(height2[15]);
  questHomeBounties = obj1.useQuestHomeBounties().questHomeBounties;
  first = callback(React.useState(() => {
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === closure_0);
    let tmp2 = questHomeBounties;
    if (findIndexResult > 0) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(findIndexResult), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(0, findIndexResult), arraySpreadResult);
      tmp2 = items;
    }
    return tmp2;
  }), 1)[0];
  let obj2 = require(height2[16]);
  const bountiesExperience = obj2.useBountiesExperience(ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE);
  orbAmount = bountiesExperience.orbAmount;
  ownedByVerticalScrollExperiment = bountiesExperience.ownedByVerticalScrollExperiment;
  rewardTimerSeconds = bountiesExperience.rewardTimerSeconds;
  const scrollAffordanceVariant = bountiesExperience.scrollAffordanceVariant;
  callback2 = tmp12;
  let obj3 = require(height2[17]);
  let result = obj3.shouldUseScrollIndicatorOverlay(scrollAffordanceVariant);
  let obj4 = require(height2[18]);
  const items1 = [first];
  const items2 = [first, orbAmount];
  const stateFromStores = obj4.useStateFromStores(items1, () => first.getCompletedBountyCount(first) * orbAmount, items2);
  first1 = first[0];
  let obj5 = require(height2[18]);
  const items3 = [first];
  const items4 = [first1, rewardTimerSeconds];
  height3 = memo.height;
  let sum = height3 + sum1;
  c15 = sum;
  let diff = first.length - 1;
  c16 = diff;
  closure_17 = tmp19;
  result1 = diff * sum;
  sum1 = result1 + height3;
  const items5 = [sum1, result1, height3];
  const stateFromStores1 = obj5.useStateFromStores(items3, () => {
    if (null == first1) {
      return false;
    } else {
      const bountyVideoProgress = first.getBountyVideoProgress(tmp.id);
      let tmp4 = null != bountyVideoProgress;
      if (tmp4) {
        tmp4 = bountyVideoProgress.maxTimestampSec >= rewardTimerSeconds;
      }
      return tmp4;
    }
  }, items4);
  const memo1 = React.useMemo(() => ({ lastBounty: result1, fullRecap: sum1, revealHeight: height3 }), items5);
  let obj6 = require(height2[19]);
  handleRecapMomentumEnd = obj6.useBountiesRecapScroll({ listRef: ref, enabled: tmp19, offsets: memo1 }).handleRecapMomentumEnd;
  const items6 = [first, sum1, stateFromStores > 0, sum];
  const memo2 = React.useMemo(() => {
    const mapped = first.map((arg0, arg1) => arg1 * closure_15);
    if (closure_17) {
      mapped.push(sum1);
    }
    return mapped;
  }, items6);
  const tmp24 = callback(React.useState(false), 2);
  first2 = tmp24[0];
  closure_23 = tmp26;
  const tmp27 = callback(React.useState(false), 2);
  first3 = tmp27[0];
  closure_25 = tmp29;
  let tmp6 = callback(React.useState(require(height2[14]).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  [tmp31, tmp32] = callback(React.useState(true), 2);
  c26 = tmp32;
  const tmp30 = callback(React.useState(true), 2);
  [tmp34, tmp35] = callback(React.useState(false), 2);
  callback3 = tmp35;
  const tmp36 = callback(React.useState(0), 2);
  first4 = tmp36[0];
  closure_29 = tmp36[1];
  let obj7 = require(height2[11]);
  sharedValue = obj7.useSharedValue(false);
  let obj8 = require(height2[11]);
  sharedValue1 = obj8.useSharedValue(false);
  let obj9 = require(height2[11]);
  sharedValue2 = obj9.useSharedValue(0);
  let obj10 = require(height2[20]);
  obj = { isEligible: first.length > 1, location: ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE };
  const bountySwipeUpNux = obj10.useBountySwipeUpNux(obj);
  hasSingleUseSwipeUpNux = bountySwipeUpNux.hasSingleUseSwipeUpNux;
  dismissSingleUseSwipeUpNux = bountySwipeUpNux.dismissSingleUseSwipeUpNux;
  hasRecurringSwipeUpNux = bountySwipeUpNux.hasRecurringSwipeUpNux;
  dismissRecurringSwipeUpNux = bountySwipeUpNux.dismissRecurringSwipeUpNux;
  let tmp44 = tmp43;
  if (0 === first4) {
    tmp44 = hasSingleUseSwipeUpNux;
  }
  if (tmp44) {
    tmp44 = stateFromStores1;
  }
  closure_37 = tmp45;
  let tmp46 = result;
  if (result) {
    tmp46 = hasRecurringSwipeUpNux;
  }
  hasRecurringSwipeUpNux = tmp46;
  memo3 = obj.useMemo(() => tmp7(height2[21]).v4(), []);
  closure_40 = obj.useRef(0);
  closure_41 = obj.useRef(0);
  const effect = obj.useEffect(() => {
    closure_40.current = Date.now();
  }, []);
  const items7 = [first4, memo3];
  const callback1 = obj.useCallback((arg0) => {
    if (arg0 === tmp7(height2[22]).VerticalScrollingDirection.DOWN) {
      const obj = { verticalScrollingPosition: null, scrollSessionId: null };
      obj[0] = first4;
      obj[1] = memo3;
      const result = tmp7(height2[23]).trackBountyAutoScrollDismissed(obj);
      const tmpResult = tmp7(height2[23]);
    }
  }, items7);
  let tmp5Result = tmp5(tmp3[24]);
  obj = { listRef: ref, enabled: null, mode: null, activeIndex: null, activeBountyId: null, slotHeight: null, onCountdownCancelled: null };
  let tmp50 = tmp12;
  if ("auto" === scrollAffordanceVariant) {
    tmp50 = first4 < diff;
  }
  obj[1] = tmp50;
  let str = "hint";
  if (0 === first4) {
    str = "hint";
    if (hasRecurringSwipeUpNux) {
      str = "countdown";
    }
  }
  obj[2] = str;
  obj[3] = first4;
  let id;
  if (first[first4] != null) {
    id = tmp51.id;
  }
  if (id == null) {
    id = null;
  }
  obj[4] = id;
  obj[5] = sum;
  obj[6] = callback1;
  const bountiesAutoScroll = tmp5Result.useBountiesAutoScroll(obj);
  peekScale = bountiesAutoScroll.peekScale;
  cancel = bountiesAutoScroll.cancel;
  dismissOnClose = bountiesAutoScroll.dismissOnClose;
  takeDidAutoScroll = bountiesAutoScroll.takeDidAutoScroll;
  onPlaybackTimeChange = bountiesAutoScroll.onPlaybackTimeChange;
  onEndCardVisible = bountiesAutoScroll.onEndCardVisible;
  pauseCountdown = bountiesAutoScroll.pauseCountdown;
  resumeCountdown = bountiesAutoScroll.resumeCountdown;
  const items8 = [onEndCardVisible, onPlaybackTimeChange, pauseCountdown, resumeCountdown];
  ({ visible, peekActive, progress, showProgressRing } = bountiesAutoScroll);
  memo4 = obj.useMemo(() => ({ onPlaybackTimeChange, onPaused: pauseCountdown, onResumed: resumeCountdown, onEndCardVisible }), items8);
  const items9 = [memo3];
  callback2 = obj.useCallback((current) => {
    let MANUAL = arg1;
    if (arg1 === undefined) {
      MANUAL = tmp7(height2[22]).BountyScrollingType.MANUAL;
    }
    current = ref2.current;
    if (current !== current) {
      tmp3.current = current;
      const _Date = Date;
      const timestamp = Date.now();
      ref.current = timestamp;
      const diff = timestamp - ref.current;
      let result = { scrollingType: null, scrollingDirection: null, verticalScrollingPosition: null, scrollSessionId: null, timeWatchedPreScrollMs: null };
      result[0] = MANUAL;
      if (current > current) {
        let UP = tmp7(height2[22]).VerticalScrollingDirection.DOWN;
      } else {
        UP = tmp7(height2[22]).VerticalScrollingDirection.UP;
      }
      result[1] = UP;
      result[2] = current;
      result[3] = memo3;
      result[4] = diff;
      result = tmp7(height2[23]).trackBountyVerticalScroll(result);
      const obj2 = tmp7(height2[23]);
    }
  }, items9);
  const items10 = [takeDidAutoScroll, callback2, first4, hasSingleUseSwipeUpNux, hasRecurringSwipeUpNux, dismissSingleUseSwipeUpNux, dismissRecurringSwipeUpNux];
  callback3 = obj.useCallback((arg0) => {
    callback2(arg0);
    const BountyScrollingType = tmp7(height2[22]).BountyScrollingType;
    callback2(arg0, takeDidAutoScroll() ? BountyScrollingType.AUTO : BountyScrollingType.MANUAL);
    if (tmp5) {
      if (hasSingleUseSwipeUpNux) {
        dismissSingleUseSwipeUpNux(ownedByVerticalScrollExperiment.USER_DISMISS);
      } else {
        if (hasRecurringSwipeUpNux) {
          dismissRecurringSwipeUpNux(ownedByVerticalScrollExperiment.USER_DISMISS);
        }
        tmp7 = hasRecurringSwipeUpNux;
      }
    }
  }, items10);
  tmp5Result = tmp5(tmp3[25]);
  closure_53 = tmp5Result.useBountiesRecapOrbCount({ scrollY: sharedValue2, lastBountyScrollOffset: result1, recapRevealHeight: height3, targetOrbAmount: stateFromStores, enabled: tmp19 });
  const items11 = [first, first4];
  const effect1 = obj.useEffect(() => {
    if (null != first[first4]) {
      const items = [tmp.id];
      tmp7(height2[26]).markAdContentSeen(tmp7(height2[27]).AdCreativeType.BOUNTY, items);
      const obj = tmp7(height2[26]);
    }
  }, items11);
  const items12 = [first, first4, dismissOnClose, rewardTimerSeconds, sourceQuestContent];
  const items13 = [sourceQuestContent];
  const callback4 = obj.useCallback(() => {
    dismissOnClose();
    if (null != first[first4]) {
      const bountyVideoProgress = first.getBountyVideoProgress(tmp2.id);
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
      let obj = tmp7(height2[23]);
      obj = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
      obj[0] = tmp2.id;
      obj[1] = height2(height2[27]).AdCreativeType.BOUNTY;
      obj[2] = rewardTimerSeconds.AD_VIDEO_MODAL_CLOSED;
      obj = { content_name: null, content_id: null, video_progress: null, threshold_met: null, reward_timer_seconds: null };
      obj[0] = height2(height2[22]).getQuestContentName(height2(height2[28]).QuestContent.VIDEO_MODAL_MOBILE);
      obj[1] = height2(height2[28]).QuestContent.VIDEO_MODAL_MOBILE;
      const obj4 = height2(height2[22]);
      obj[2] = height2(height2[29]).formatVideoProgressRatio(num, num2);
      obj[3] = 1000 * num >= result;
      obj[4] = result / 1000;
      obj[3] = obj;
      obj[4] = width;
      obj.trackAdContentEvent(obj);
      const obj5 = height2(height2[29]);
    }
    width(height2[30]).hideModal();
  }, items12);
  closure_54 = obj.useCallback(() => {
    let obj = tmp7(height2[23]);
    obj = { adContentId: orbAmount, adCreativeType: tmp7(height2[27]).AdCreativeType.BOUNTY, event: rewardTimerSeconds.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
    obj = { content_name: tmp7(height2[22]).getQuestContentName(tmp7(height2[28]).QuestContent.BOUNTIES_END_INTERSTITIAL), content_id: tmp7(height2[28]).QuestContent.BOUNTIES_END_INTERSTITIAL };
    obj[3] = obj;
    obj[4] = width;
    obj.trackAdContentEvent(obj);
    const obj4 = tmp7(height2[22]);
    width(height2[30]).hideModal();
  }, items13);
  const tmp33 = callback(React.useState(false), 2);
  const tmp41 = first.length > 1;
  obj1 = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumEnd: null };
  class Tt {
    constructor(arg0) {
      result = closure_32.set(arg0.contentOffset.y);
      if (closure_31.get()) {
        tmp3 = closure_25;
        tmp2 = closure_30;
        if (typeof closure_25 !== "function") {
          str = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        tmp4 = globalThis;
        _Math = Math;
        num = 0;
        tmp6 = arg0.contentOffset.y >= 0 && arg0.contentOffset.y <= tmp5;
        result1 = closure_30.set(tmp6);
      }
      return;
    }
  }
  obj2 = { scrollY: sharedValue2, isDraggingSharedValue: sharedValue1, isScrollingInBoundsSharedValue: sharedValue, isScrollEventInBounds: closure_25 };
  Tt.__closure = obj2;
  Tt.__workletHash = 7942598540397;
  Tt.__initData = sharedValue;
  obj1[0] = Tt;
  class Bt {
    constructor(arg0) {
      result = closure_31.set(true);
      tmp2 = closure_30;
      if (typeof closure_25 !== "function") {
        str = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      tmp4 = arg0.contentOffset.y >= 0 && arg0.contentOffset.y <= tmp3;
      result1 = closure_30.set(tmp4);
      return;
    }
  }
  Bt.__closure = { isDraggingSharedValue: sharedValue1, isScrollingInBoundsSharedValue: sharedValue, isScrollEventInBounds: closure_25 };
  Bt.__workletHash = 14039038912528;
  Bt.__initData = sharedValue1;
  obj1[1] = Bt;
  class Ct {
    constructor(arg0) {
      if (arg0.contentOffset.y < 0) {
        tmp3 = closure_0;
        tmp4 = height;
        UP = closure_0(height[22]).VerticalScrollingDirection.DOWN;
      } else {
        tmp = closure_0;
        tmp2 = height;
        UP = closure_0(height[22]).VerticalScrollingDirection.UP;
      }
      obj = closure_0(height[11]);
      tmp5 = obj.runOnJS(cancel)(UP);
      result = closure_31.set(false);
      if (!height) {
        tmp7 = closure_30;
        result1 = closure_30.set(false);
      }
      return;
    }
  }
  obj3 = { VerticalScrollingDirection: tmp5(tmp3[22]).VerticalScrollingDirection, runOnJS: tmp5(tmp3[11]).runOnJS, cancelScrollAffordance: cancel, isDraggingSharedValue: sharedValue1, IS_ANDROID: height3, isScrollingInBoundsSharedValue: sharedValue };
  Ct.__closure = obj3;
  Ct.__workletHash = 10752087179842;
  Ct.__initData = sharedValue2;
  obj1[2] = Ct;
  class It {
    constructor(arg0) {
      if (closure_17) {
        tmp = arg0;
        tmp2 = closure_0;
        tmp3 = height;
        obj = closure_0(height[11]);
        tmp4 = handleRecapMomentumEnd;
        tmp5 = obj.runOnJS(handleRecapMomentumEnd)(arg0);
      }
      result = closure_30.set(false);
      return;
    }
  }
  obj4 = { showRecapPullZone: tmp19, runOnJS: tmp5(tmp3[11]).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue };
  It.__closure = obj4;
  It.__workletHash = 13684210320337;
  It.__initData = hasSingleUseSwipeUpNux;
  obj1[3] = It;
  const tmp5Result1 = require(height2[11]);
  const animatedScrollHandler = require(height2[11]).useAnimatedScrollHandler(obj1);
  function xt() {
    return Math.min(Math.max(Math.round(sharedValue2.get() / c15), 0), c16);
  }
  xt.__closure = { scrollY: sharedValue2, slotHeight: sum, lastBountyIndex: diff };
  xt.__workletHash = 14048843158960;
  xt.__initData = dismissSingleUseSwipeUpNux;
  function mt(arg0, arg1) {
    if (arg0 !== arg1) {
      tmp7(height2[11]).runOnJS(callback3)(arg0);
      const obj = tmp7(height2[11]);
    }
  }
  obj5 = { runOnJS: tmp5(tmp3[11]).runOnJS, commitSwipe: callback3 };
  mt.__closure = obj5;
  mt.__workletHash = 14015091539518;
  mt.__initData = hasRecurringSwipeUpNux;
  const animatedReaction = require(height2[11]).useAnimatedReaction(xt, mt);
  const tmp5Result2 = require(height2[11]);
  function wt() {
    let tmp = closure_17;
    if (closure_17) {
      const value = sharedValue2.get();
      tmp = value >= result1 - tmp7(height2[19]).RECAP_SNAP_EPSILON;
    }
    return tmp;
  }
  obj6 = { showRecapPullZone: tmp19, scrollY: sharedValue2, lastBountyScrollOffset: result1, RECAP_SNAP_EPSILON: tmp5(tmp3[19]).RECAP_SNAP_EPSILON };
  wt.__closure = obj6;
  wt.__workletHash = 6584708256992;
  wt.__initData = dismissRecurringSwipeUpNux;
  function yt(arg0, arg1) {
    if (arg0 !== arg1) {
      tmp7(height2[11]).runOnJS(c27)(arg0);
      const obj = tmp7(height2[11]);
    }
  }
  obj7 = { runOnJS: tmp5(tmp3[11]).runOnJS, setShowRecapFooter: tmp35 };
  yt.__closure = obj7;
  yt.__workletHash = 10788669301891;
  yt.__initData = closure_37;
  const animatedReaction1 = require(height2[11]).useAnimatedReaction(wt, yt);
  const tmp5Result3 = require(height2[11]);
  class Nt {
    constructor() {
      tmp = closure_17;
      if (closure_17) {
        tmp2 = closure_32;
        tmp3 = closure_19;
        tmp = closure_32.get() > closure_19;
      }
      return tmp;
    }
  }
  Nt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue2, lastBountyScrollOffset: result1 };
  Nt.__workletHash = 6186370630693;
  Nt.__initData = hasRecurringSwipeUpNux;
  class Mt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = height;
        obj = closure_0(height[11]);
        tmp3 = closure_23;
        tmp4 = obj.runOnJS(closure_23)(arg0);
      }
      return;
    }
  }
  obj8 = { runOnJS: tmp5(tmp3[11]).runOnJS, setIsRecapPageRevealed: tmp26 };
  Mt.__closure = obj8;
  Mt.__workletHash = 12713474352874;
  Mt.__initData = memo3;
  const animatedReaction2 = require(height2[11]).useAnimatedReaction(Nt, Mt);
  const tmp5Result4 = require(height2[11]);
  class Vt {
    constructor() {
      tmp = closure_17;
      if (closure_17) {
        tmp2 = closure_32;
        tmp4 = closure_20;
        tmp5 = closure_0;
        tmp6 = height;
        value = closure_32.get();
        tmp = value >= closure_20 - closure_0(height[19]).RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  obj9 = { showRecapPullZone: tmp19, scrollY: sharedValue2, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: tmp5(tmp3[19]).RECAP_SNAP_EPSILON };
  Vt.__closure = obj9;
  Vt.__workletHash = 5669564400667;
  Vt.__initData = closure_40;
  function bt(arg0, arg1) {
    if (arg0 !== arg1) {
      tmp7(height2[11]).runOnJS(closure_25)(arg0);
      const obj = tmp7(height2[11]);
    }
  }
  obj10 = { runOnJS: tmp5(tmp3[11]).runOnJS, setIsRecapPageOnTop: tmp29 };
  bt.__closure = obj10;
  bt.__workletHash = 8102193741774;
  bt.__initData = closure_41;
  const animatedReaction3 = require(height2[11]).useAnimatedReaction(Vt, bt);
  const items14 = [height3, stateFromStores > 0];
  const items15 = [tmp.listWrapper, memo];
  const memo5 = obj.useMemo(() => {
    let tmp = null;
    if (closure_17) {
      const obj = { height: null };
      obj[0] = height3;
      tmp = callback(c26, obj);
    }
    return tmp;
  }, items14);
  const items16 = [memo.top];
  const memo6 = obj.useMemo(() => {
    const items = [height2.listWrapper, { top: 0, left: memo.left, width: memo.width, height: memo.top + memo.height + 97 }];
    return items;
  }, items15);
  const items17 = [, ];
  ({ width: arr19[0], height: arr19[1] } = memo);
  const memo7 = obj.useMemo(() => ({ paddingTop: memo.top, paddingBottom: 97 }), items16);
  memo8 = obj.useMemo(() => ({ width: memo.width, height: memo.height }), items17);
  const items18 = [tmp.closeButton, , , ];
  ({ top: arr20[1], left: arr20[2], width: arr20[3] } = memo);
  const items19 = [tmp.autoScrollIndicator, , , , ];
  ({ top: arr21[1], height: arr21[2], left: arr21[3], width: arr21[4] } = memo);
  const memo9 = obj.useMemo(() => {
    const items = [height2.closeButton, ];
    const obj = { top: memo.top + width(height2[9]).space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - width(height2[9]).space.PX_32;
    obj[1] = diff - width(height2[9]).space.PX_8;
    items[1] = obj;
    return items;
  }, items18);
  const items20 = [first3, tmp.recapPage, , , , ];
  ({ top: arr22[2], left: arr22[3], width: arr22[4] } = memo);
  items20[5] = height;
  const memo10 = obj.useMemo(() => {
    const items = [height2.autoScrollIndicator, ];
    const obj = { top: null, left: null, width: null };
    const sum = memo.top + tmp7(height2[24]).AUTO_SCROLL_PEEK_TOP_OFFSET;
    sum1 = sum + memo.height * tmp7(height2[24]).AUTO_SCROLL_PEEK_SCALE;
    obj[0] = sum1 + width(height2[9]).space.PX_32;
    ({ left: obj[1], width: obj[2] } = memo);
    items[1] = obj;
    return items;
  }, items19);
  const memo11 = obj.useMemo(() => {
    const items = [height2.recapPage, ];
    let obj = { top: memo.top, left: memo.left, width: memo.width, height: closure_3 - memo.top };
    let tmp = null;
    if (first3) {
      obj = { zIndex: null };
      obj[0] = height3;
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    items[1] = obj;
    return items;
  }, items20);
  const tmp5Result5 = require(height2[11]);
  class Ft {
    constructor() {
      obj = closure_0(height[19]);
      return obj.getRevealProgress(closure_32.get(), closure_19, height);
    }
  }
  const tmp5Result6 = require(height2[11]);
  Ft.__closure = { getRevealProgress: require(height2[19]).getRevealProgress, scrollY: sharedValue2, lastBountyScrollOffset: result1, recapRevealHeight: height3 };
  Ft.__workletHash = 8427964721554;
  Ft.__initData = peekScale;
  derivedValue = tmp5Result6.useDerivedValue(Ft);
  const obj11 = { getRevealProgress: require(height2[19]).getRevealProgress, scrollY: sharedValue2, lastBountyScrollOffset: result1, recapRevealHeight: height3 };
  class Yt {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(height[11]);
      value = closure_56.get();
      obj[0] = obj2.interpolate(value, [0, 1], [0, 1], closure_0(height[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result7 = require(height2[11]);
  Yt.__closure = { interpolate: require(height2[11]).interpolate, recapPullProgress: derivedValue, Extrapolation: require(height2[11]).Extrapolation };
  Yt.__workletHash = 1497321349449;
  Yt.__initData = cancel;
  const animatedStyle = tmp5Result7.useAnimatedStyle(Yt);
  const obj12 = { interpolate: require(height2[11]).interpolate, recapPullProgress: derivedValue, Extrapolation: require(height2[11]).Extrapolation };
  class Jt {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(height[11]);
      value = closure_56.get();
      items = [, ];
      items[0] = closure_22;
      items[1] = closure_23;
      obj[0] = obj2.interpolate(value, items, [1, 0], closure_0(height[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result8 = require(height2[11]);
  Jt.__closure = { interpolate: require(height2[11]).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: first2, FOOTER_FADE_END_PROGRESS: closure_23, Extrapolation: require(height2[11]).Extrapolation };
  Jt.__workletHash = 3685190194249;
  Jt.__initData = dismissOnClose;
  const animatedStyle1 = tmp5Result8.useAnimatedStyle(Jt);
  const obj13 = { interpolate: require(height2[11]).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: first2, FOOTER_FADE_END_PROGRESS: closure_23, Extrapolation: require(height2[11]).Extrapolation };
  class Ut {
    constructor() {
      obj = closure_32;
      if (closure_32.get() >= closure_19 - closure_15 / 2) {
        tmp5 = closure_56;
        value = closure_56.get();
      } else {
        tmp = closure_0;
        tmp2 = height;
        obj2 = closure_0(height[19]);
        tmp3 = height;
        num = 0;
        value = obj2.getRevealProgress(obj.get(), 0, height);
      }
      obj = { opacity: null };
      obj4 = closure_0(height[11]);
      items = [, ];
      items[0] = closure_22;
      items[1] = closure_23;
      obj[0] = obj4.interpolate(value, items, [1, 0], closure_0(height[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result9 = require(height2[11]);
  Ut.__closure = { scrollY: sharedValue2, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: require(height2[19]).getRevealProgress, recapRevealHeight: height3, interpolate: require(height2[11]).interpolate, FOOTER_FADE_START_PROGRESS: first2, FOOTER_FADE_END_PROGRESS: closure_23, Extrapolation: require(height2[11]).Extrapolation };
  Ut.__workletHash = 15092194442650;
  Ut.__initData = takeDidAutoScroll;
  const items21 = [tmp.peekGradient, , , , ];
  ({ left: arr23[1], width: arr23[2], top: arr23[3], height: arr23[4] } = memo);
  const animatedStyle2 = tmp5Result9.useAnimatedStyle(Ut);
  const memo12 = obj.useMemo(() => {
    const items = [height2.peekGradient, { left: memo.left, width: memo.width, top: memo.top + memo.height, bottom: 0 }];
    return items;
  }, items21);
  const obj14 = { scrollY: sharedValue2, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: require(height2[19]).getRevealProgress, recapRevealHeight: height3, interpolate: require(height2[11]).interpolate, FOOTER_FADE_START_PROGRESS: first2, FOOTER_FADE_END_PROGRESS: closure_23, Extrapolation: require(height2[11]).Extrapolation };
  class Gt {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(height[11]);
      value = closure_32.get();
      items = [0];
      items[1] = closure_15;
      obj[0] = obj2.interpolate(value, items, [1, 0], closure_0(height[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result10 = require(height2[11]);
  Gt.__closure = { interpolate: require(height2[11]).interpolate, scrollY: sharedValue2, slotHeight: sum, Extrapolation: require(height2[11]).Extrapolation };
  Gt.__workletHash = 5908400559291;
  Gt.__initData = onPlaybackTimeChange;
  const animatedStyle3 = tmp5Result10.useAnimatedStyle(Gt);
  const obj15 = { interpolate: require(height2[11]).interpolate, scrollY: sharedValue2, slotHeight: sum, Extrapolation: require(height2[11]).Extrapolation };
  class Zt {
    constructor() {
      return closure_56.get() < closure_23;
    }
  }
  Zt.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: closure_23 };
  Zt.__workletHash = 547045699209;
  Zt.__initData = onEndCardVisible;
  class Qt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = height;
        obj = closure_0(height[11]);
        tmp3 = closure_26;
        tmp4 = obj.runOnJS(closure_26)(arg0);
      }
      return;
    }
  }
  const tmp5Result11 = require(height2[11]);
  Qt.__closure = { runOnJS: require(height2[11]).runOnJS, setIsCloseButtonPressable: tmp32 };
  Qt.__workletHash = 6290671204687;
  Qt.__initData = pauseCountdown;
  const animatedReaction4 = tmp5Result11.useAnimatedReaction(Zt, Qt);
  const items22 = [sum, sharedValue2, memo8, "peek" === scrollAffordanceVariant && hasRecurringSwipeUpNux, "auto" === scrollAffordanceVariant, peekScale, sourceQuestContent, , , , , , , , , , ];
  ({ width: arr24[7], height: arr24[8] } = memo);
  items22[9] = first4;
  items22[10] = first2;
  items22[11] = first3;
  items22[12] = sharedValue;
  items22[13] = tmp46;
  items22[14] = memo4;
  items22[15] = ownedByVerticalScrollExperiment;
  items22[16] = ownedByVerticalScrollExperiment;
  const items23 = [first4, first2, first3, , , , , , , ];
  ({ width: arr25[3], height: arr25[4] } = memo);
  items23[5] = "peek" === scrollAffordanceVariant && hasRecurringSwipeUpNux;
  items23[6] = "auto" === scrollAffordanceVariant;
  items23[7] = tmp46;
  items23[8] = ownedByVerticalScrollExperiment;
  items23[9] = ownedByVerticalScrollExperiment;
  const callback5 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    let flag = true;
    if (ownedByVerticalScrollExperiment) {
      let tmp2 = index === first4;
      if (!tmp2) {
        tmp2 = index === tmp + 1;
      }
      flag = tmp2;
    }
    let obj = { index, slotHeight: c15, scrollY: sharedValue2, style: memo8, isPeekEnabled: closure_37, children: null };
    obj = { bounty: item, sourceQuestContent: width, width: memo.width, height: memo.height, index, isActive: tmp5, isRecapPageRevealed: first2, isRecapPageOnTop: first3, isScrollingInBoundsSharedValue: sharedValue, isScrollIndicatorOverlayEnabled: null, shouldLoadHls: null, scrollAffordance: null, peekScale: null, softDownloadCapsEnabled: null };
    let tmp6 = hasRecurringSwipeUpNux;
    if (hasRecurringSwipeUpNux) {
      tmp6 = 0 === index;
    }
    obj[9] = tmp6;
    obj[10] = flag;
    let tmp8;
    if (closure_12) {
      tmp8 = memo4;
    }
    obj[11] = tmp8;
    let tmp9;
    if (index === first4) {
      if (tmp7) {
        tmp9 = peekScale;
      }
    }
    obj[12] = tmp9;
    obj[13] = ownedByVerticalScrollExperiment;
    obj[5] = closure_12(closure_12(height2[31]).BountiesScrollVideoItem, obj, item.id);
    return closure_12(closure_29, obj);
  }, items22);
  [][0] = height3;
  const memo13 = obj.useMemo(() => ({ activeIndex: first4, isRecapPageRevealed: first2, isRecapPageOnTop: first3, width: memo.width, height: memo.height, isPeekEnabled: closure_37, isAutoScrollEnabled: closure_12, canShowScrollIndicatorOverlay: hasRecurringSwipeUpNux, ownedByVerticalScrollExperiment, isSoftCapPreload: ownedByVerticalScrollExperiment }), items23);
  if (0 === first.length) {
    return null;
  } else {
    if (tmp44) {
      let tmp81 = callback2(tmp2(tmp3[32]), {});
    } else {
      tmp81 = null;
      if (tmp34) {
        const obj17 = { orbAmount: null };
        obj17[0] = stateFromStores;
        tmp81 = callback2(tmp5(tmp3[33]).BountiesScrollRecapFooter, obj17);
      }
    }
    const obj18 = { style: null, children: null };
    obj18[0] = tmp.root;
    const obj19 = { active: null };
    obj19[0] = peekActive;
    const items24 = [callback2(tmp2(tmp3[34]), obj19), , , , , , ];
    let tmp86Result = null;
    if (tmp19) {
      const obj20 = { style: null, pointerEvents: null, children: null };
      const items25 = [memo11, animatedStyle];
      obj20[0] = items25;
      let str2 = "none";
      if (first3) {
        str2 = "box-none";
      }
      obj20[1] = str2;
      const obj21 = { adContentId: null, adCreativeType: null, questContent: null, overrideVisibility: null, sourceQuestContent: null, children: null };
      obj21[0] = orbAmount;
      obj21[1] = tmp5(tmp3[27]).AdCreativeType.BOUNTY;
      obj21[2] = tmp5(tmp3[28]).QuestContent.BOUNTIES_END_INTERSTITIAL;
      obj21[3] = first3;
      obj21[4] = sourceQuestContent;
      obj21[5] = function children() {
        return callback(tmp7(height2[36]).BountiesScrollRecapPage, { orbAmount: closure_53, onClose: closure_54, style: { flex: 1 } });
      };
      obj20[2] = tmp86(tmp5(tmp3[35]).QuestContentImpressionTrackerNative, obj21);
      tmp86Result = tmp86(tmp2(tmp3[11]).View, obj20);
    }
    items24[1] = tmp86Result;
    const obj22 = { style: null, children: null };
    obj22[0] = memo6;
    const obj23 = { ref: null, data: null, keyExtractor: null, renderItem: null, extraData: null, overrideItemLayout: null, ItemSeparatorComponent: null, ListFooterComponent: null, snapToOffsets: null, snapToEnd: false, decelerationRate: 0.85, showsVerticalScrollIndicator: false, drawDistance: null, onScroll: null, scrollEventThrottle: 16, contentContainerStyle: null };
    obj23[0] = ref;
    obj23[1] = first;
    obj23[2] = function keyExtractor(id) {
      return id.id;
    };
    obj23[3] = callback5;
    obj23[4] = memo13;
    obj23[5] = tmp80;
    obj23[6] = first3;
    obj23[7] = memo5;
    obj23[8] = memo2;
    obj23[12] = sum;
    obj23[13] = animatedScrollHandler;
    obj23[15] = memo7;
    obj22[1] = callback2(tmp5(tmp3[37]).AnimatedFlashList, obj23);
    items24[2] = callback2(questHomeBounties, obj22);
    tmp86Result = null;
    if (tmp45) {
      tmp86Result = null;
      if (first.length > 1) {
        const obj24 = { pointerEvents: "none", style: null, children: null };
        const items26 = [memo12, animatedStyle3];
        obj24[1] = items26;
        const obj25 = { colors: null, style: null };
        obj25[0] = handleRecapMomentumEnd;
        obj25[1] = memo.absoluteFill;
        obj24[2] = tmp86(tmp2(tmp3[38]), obj25);
        tmp86Result = tmp86(tmp2(tmp3[11]).View, obj24);
      }
    }
    items24[3] = tmp86Result;
    const obj26 = { style: null, pointerEvents: null, children: null };
    const items27 = [memo9, animatedStyle1];
    obj26[0] = items27;
    let str3 = "none";
    if (tmp31) {
      str3 = "box-none";
    }
    obj26[1] = str3;
    let tmp86Result1 = null;
    if (tmp31) {
      const obj27 = { onPress: null };
      obj27[0] = callback4;
      tmp86Result1 = tmp86(tmp2(tmp3[39]), obj27);
    }
    obj26[2] = tmp86Result1;
    items24[4] = callback2(tmp2(tmp3[11]).View, obj26);
    let tmp86Result2 = null;
    if (visible) {
      const obj28 = { style: null, pointerEvents: "none", children: null };
      obj28[0] = memo10;
      const obj29 = { progress: null, showProgressRing: null };
      obj29[0] = progress;
      obj29[1] = showProgressRing;
      obj28[2] = tmp86(tmp2(tmp3[40]), obj29);
      tmp86Result2 = tmp86(tmp85, obj28);
    }
    items24[5] = tmp86Result2;
    if (!tmp44) {
      tmp44 = tmp34;
    }
    const obj30 = { visible: null, onContentLayout: null, zIndex: null, opacityStyle: null, children: null };
    obj30[0] = tmp44;
    obj30[1] = callback;
    obj30[2] = height3;
    obj30[3] = animatedStyle2;
    obj30[4] = tmp81;
    items24[6] = callback2(tmp2(tmp3[14]), obj30);
    obj18[1] = items24;
    return first1(questHomeBounties, obj18);
  }
  const obj16 = { runOnJS: require(height2[11]).runOnJS, setIsCloseButtonPressable: tmp32 };
}
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_8, QuestsExperimentLocations: c9 } = QuestsExperimentLocations);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = PlatformTypes.isAndroid();
let c15 = 0;
let c16 = 1;
let c17 = 2;
let c18 = 3;
let c19 = 0.5625;
const PX_8 = ThemesDefault.space.PX_8;
let closure_21 = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let c22 = 0.05;
let c23 = 0.1;
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
let closure_27 = createCacheKey.createStyles(() => {
  const recapPage = { position: "absolute", zIndex: c15 };
  return { root: { flex: 1 }, recapPage, listWrapper: { position: "absolute", zIndex: c16, overflow: "hidden" }, closeButton: { position: "absolute", zIndex: c18 }, peekGradient: { position: "absolute", zIndex: c17 }, autoScrollIndicator: { position: "absolute", zIndex: c18, alignItems: "center" } };
});
let closure_28 = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
let closure_30 = { code: "function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}" };
let closure_31 = { code: "function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}" };
let closure_32 = { code: "function BountiesModalContentScrollTsx5(event){const{VerticalScrollingDirection,runOnJS,cancelScrollAffordance,isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;const scrollingDirection=event.contentOffset.y<0?VerticalScrollingDirection.DOWN:VerticalScrollingDirection.UP;runOnJS(cancelScrollAffordance)(scrollingDirection);isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
let closure_33 = { code: "function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}" };
let closure_34 = { code: "function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
let closure_35 = { code: "function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}" };
let closure_36 = { code: "function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_37 = { code: "function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
let closure_38 = { code: "function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
let closure_39 = { code: "function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
let closure_40 = { code: "function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_41 = { code: "function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
let closure_42 = { code: "function BountiesModalContentScrollTsx15(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
let closure_43 = { code: "function BountiesModalContentScrollTsx16(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
let closure_44 = { code: "function BountiesModalContentScrollTsx17(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_45 = { code: "function BountiesModalContentScrollTsx18(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_46 = { code: "function BountiesModalContentScrollTsx19(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
let closure_47 = { code: "function BountiesModalContentScrollTsx20(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
let closure_48 = { code: "function BountiesModalContentScrollTsx21(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  ({ bountyId, sourceQuestContent } = arg0);
  return callback2(ThemeContextProvider.ThemeContextProvider, { theme: items28.ThemeTypes.DARKER, children: callback2(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }) });
};