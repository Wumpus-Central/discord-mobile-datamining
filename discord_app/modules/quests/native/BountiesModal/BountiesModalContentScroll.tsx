// === Module 15004: ItemSeparator ===

// Module 15004 (ItemSeparator)
import ThemesDefault from "Themes" /* 576 */;
import ThemeContextProvider from "ThemeContextProvider" /* 4285 */;
import items34 from "items" /* 13396 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "set" /* 7702 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5444 */;
import BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS from "BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS" /* 15005 */;
import ME from "ME" /* 1074 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1954 */;
import jsxProd from "jsxProd" /* 21 */;
import PlatformTypes from "PlatformTypes" /* 1116 */;
import createCacheKey from "createCacheKey" /* 4560 */;

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
  let obj = index(scrollY[12]);
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
    const obj = { opacity: index(scrollY[12]).interpolate(absolute, [0, 0.3, 1], items, index(scrollY[12]).Extrapolation.CLAMP) };
    items = [1, 1, num];
    return obj;
  };
  obj = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY: 0.8, interpolate: index(scrollY[12]).interpolate, FADE_DEADBAND: 0.3, Extrapolation: index(scrollY[12]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 6532652233494;
  fn.__initData = closure_31;
  const animatedStyle = obj.useAnimatedStyle(fn);
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return callback2(slotHeight(scrollY[12]).View, { style, children });
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
  closure_12 = undefined;
  let sharedValue;
  let sharedValue1;
  let callback2;
  closure_16 = undefined;
  closure_17 = undefined;
  closure_18 = undefined;
  let memo1;
  let callback1;
  callback2 = undefined;
  let first1;
  let height3;
  c24 = undefined;
  c25 = undefined;
  closure_26 = undefined;
  height3 = undefined;
  let result1;
  let sum1;
  let handleRecapMomentumEnd;
  let first2;
  closure_32 = undefined;
  let first3;
  closure_34 = undefined;
  c35 = undefined;
  c36 = undefined;
  let first4;
  closure_38 = undefined;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let hasSingleUseSwipeUpNux;
  let dismissSingleUseSwipeUpNux;
  let hasRecurringSwipeUpNux;
  let dismissRecurringSwipeUpNux;
  hasRecurringSwipeUpNux = undefined;
  let memo6;
  closure_48 = undefined;
  closure_49 = undefined;
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
  closure_61 = undefined;
  closure_62 = undefined;
  let animatedStyle;
  let first5;
  closure_65 = undefined;
  let memo11;
  let derivedValue;
  closure_68 = undefined;
  let tmp = handleRecapMomentumEnd();
  height2 = tmp;
  let tmp3 = height2;
  const height = width(height2[13])().height;
  callback = height;
  let obj = React;
  const ref = React.useRef(null);
  [tmp8, c4] = callback(React.useState(require(height2[15]).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  require = tmp8;
  width = undefined;
  height2 = undefined;
  callback = undefined;
  callback = React.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  const size = width(height2[13])();
  width = size.width;
  height2 = size.height;
  let tmp10 = width(height2[14])();
  callback = tmp10;
  let items = [width, height2, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp10);
  items[5] = tmp8;
  memo = React.useMemo(() => {
    const rect = closure_3;
    const diff = width - closure_3.left - closure_3.right;
    const diff1 = height2 - closure_3.top - closure_0;
    let result = diff / first1;
    result1 = diff;
    if (result > diff1) {
      result1 = diff1 * first1;
      result = diff1;
    }
    return { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
  }, items);
  obj1 = require(height2[16]);
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
  let obj2 = require(height2[17]);
  const bountiesExperience = obj2.useBountiesExperience(ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE);
  orbAmount = bountiesExperience.orbAmount;
  ownedByVerticalScrollExperiment = bountiesExperience.ownedByVerticalScrollExperiment;
  rewardTimerSeconds = bountiesExperience.rewardTimerSeconds;
  const scrollAffordanceVariant = bountiesExperience.scrollAffordanceVariant;
  closure_12 = tmp13;
  let obj3 = require(height2[18]);
  let result = obj3.shouldUseScrollIndicatorOverlay(scrollAffordanceVariant);
  let obj4 = require(height2[12]);
  sharedValue = obj4.useSharedValue(1);
  let obj5 = require(height2[12]);
  sharedValue1 = obj5.useSharedValue(0);
  let tmp6 = callback;
  let tmp7 = callback(React.useState(require(height2[15]).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  [tmp18, c15] = callback(React.useState(null), 2);
  closure_16 = React.useRef(null);
  closure_17 = React.useRef(0);
  closure_18 = tmp19;
  const items1 = [height, , ];
  ({ top: arr3[1], height: arr3[2] } = memo);
  memo1 = React.useMemo(() => ownedByVerticalScrollExperiment({ windowHeight: closure_3, videoTop: memo.top, videoHeight: memo.height }), items1);
  const items2 = [height];
  const items3 = [sharedValue1];
  const memo2 = React.useMemo(() => rewardTimerSeconds(closure_3), items2);
  callback1 = React.useCallback((current) => {
    closure_17.current = Date.now();
    closure_16.current = current;
    _undefined2(current);
    const result = sharedValue1.set(tmp8(height2[19]).withTiming(1, tmp8(height2[20]).timingSlow));
    const appId = current.metadata.appId;
    current.trackOverlayEvent(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp8(height2[21]).AppStoreOverlayVariant.CUSTOM);
  }, items3);
  const items4 = [sharedValue1, sharedValue];
  callback2 = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const _Date = Date;
      current.trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, tmp8(height2[21]).AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const result = tmp8(height2[22]).clearAppStoreOverlayOpen();
      const ComponentDispatch = tmp8(height2[23]).ComponentDispatch;
      ComponentDispatch.dispatch(sharedValue.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined2(null);
      const obj = tmp8(height2[22]);
      result1 = sharedValue.set(tmp8(height2[19]).withTiming(1, tmp8(height2[20]).timingStandard));
      const result2 = sharedValue1.set(0);
      const obj2 = tmp8(height2[19]);
    }
  }, items4);
  const items5 = [callback2, null != tmp18, callback1, sharedValue, memo1];
  const memo3 = React.useMemo(() => ({ videoEndPeekTargetScale: memo1, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible: closure_18, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items5);
  let obj6 = require(height2[24]);
  const items6 = [first];
  const items7 = [first, orbAmount];
  const stateFromStores = obj6.useStateFromStores(items6, () => first.getCompletedBountyCount(first) * orbAmount, items7);
  first1 = first[0];
  let obj7 = require(height2[24]);
  const items8 = [first];
  const items9 = [first1, rewardTimerSeconds];
  height3 = memo.height;
  let sum = height3 + height3;
  c24 = sum;
  let diff = first.length - 1;
  c25 = diff;
  closure_26 = tmp30;
  result1 = diff * sum;
  sum1 = result1 + height3;
  const items10 = [sum1, result1, height3];
  const stateFromStores1 = obj7.useStateFromStores(items8, () => {
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
  }, items9);
  const memo4 = React.useMemo(() => ({ lastBounty: result1, fullRecap: sum1, revealHeight: height3 }), items10);
  let obj8 = require(height2[25]);
  handleRecapMomentumEnd = obj8.useBountiesRecapScroll({ listRef: ref, enabled: tmp30, offsets: memo4 }).handleRecapMomentumEnd;
  const items11 = [first, sum1, stateFromStores > 0, sum];
  const memo5 = React.useMemo(() => {
    const mapped = first.map((arg0, arg1) => arg1 * closure_24);
    if (closure_26) {
      mapped.push(sum1);
    }
    return mapped;
  }, items11);
  const tmp35 = callback(React.useState(false), 2);
  first2 = tmp35[0];
  closure_32 = tmp37;
  const tmp38 = callback(React.useState(false), 2);
  first3 = tmp38[0];
  closure_34 = tmp40;
  const tmp17 = callback(React.useState(null), 2);
  [tmp42, tmp43] = callback(React.useState(true), 2);
  c35 = tmp43;
  const tmp41 = callback(React.useState(true), 2);
  [tmp45, tmp46] = callback(React.useState(false), 2);
  c36 = tmp46;
  const tmp47 = callback(React.useState(0), 2);
  first4 = tmp47[0];
  closure_38 = tmp47[1];
  let obj9 = require(height2[12]);
  sharedValue2 = obj9.useSharedValue(false);
  let obj10 = require(height2[12]);
  sharedValue3 = obj10.useSharedValue(false);
  let obj11 = require(height2[12]);
  sharedValue4 = obj11.useSharedValue(0);
  let obj12 = require(height2[26]);
  obj = { isEligible: first.length > 1, location: ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE };
  const bountySwipeUpNux = obj12.useBountySwipeUpNux(obj);
  hasSingleUseSwipeUpNux = bountySwipeUpNux.hasSingleUseSwipeUpNux;
  dismissSingleUseSwipeUpNux = bountySwipeUpNux.dismissSingleUseSwipeUpNux;
  hasRecurringSwipeUpNux = bountySwipeUpNux.hasRecurringSwipeUpNux;
  dismissRecurringSwipeUpNux = bountySwipeUpNux.dismissRecurringSwipeUpNux;
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
  memo6 = obj.useMemo(() => tmp8(height2[27]).v4(), []);
  closure_48 = obj.useRef(0);
  closure_49 = obj.useRef(0);
  const effect = obj.useEffect(() => {
    closure_48.current = Date.now();
  }, []);
  const items12 = [first4, memo6];
  const callback3 = obj.useCallback((arg0) => {
    if (arg0 === tmp8(height2[28]).VerticalScrollingDirection.DOWN) {
      const obj = { verticalScrollingPosition: null, scrollSessionId: null };
      obj[0] = first4;
      obj[1] = memo6;
      const result = tmp8(height2[21]).trackBountyAutoScrollDismissed(obj);
      const tmpResult = tmp8(height2[21]);
    }
  }, items12);
  let tmp5Result = tmp5(tmp3[29]);
  obj = { listRef: ref, enabled: null, mode: null, activeIndex: null, activeBountyId: null, slotHeight: null, onCountdownCancelled: null };
  let tmp60 = tmp13;
  if ("auto" === scrollAffordanceVariant) {
    tmp60 = first4 < diff;
  }
  if (tmp60) {
    tmp60 = !tmp19;
  }
  obj[1] = tmp60;
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
    id = tmp61.id;
  }
  if (id == null) {
    id = null;
  }
  obj[4] = id;
  obj[5] = sum;
  obj[6] = callback3;
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
      const result = peekScale.set(tmp8(height2[19]).withTiming(1, tmp8(height2[20]).timingStandard));
      cancel(tmp8(height2[28]).VerticalScrollingDirection.UP);
      const obj = tmp8(height2[19]);
    }
  }, items13);
  const items14 = [onEndCardVisible, onPlaybackTimeChange, pauseCountdown, resumeCountdown];
  memo7 = obj.useMemo(() => ({ onPlaybackTimeChange, onPaused: pauseCountdown, onResumed: resumeCountdown, onEndCardVisible }), items14);
  const items15 = [memo6];
  callback4 = obj.useCallback((current) => {
    let MANUAL = arg1;
    if (arg1 === undefined) {
      MANUAL = tmp8(height2[28]).BountyScrollingType.MANUAL;
    }
    current = ref4.current;
    if (current !== current) {
      tmp3.current = current;
      const _Date = Date;
      const timestamp = Date.now();
      ref3.current = timestamp;
      const diff = timestamp - ref3.current;
      let result = { scrollingType: null, scrollingDirection: null, verticalScrollingPosition: null, scrollSessionId: null, timeWatchedPreScrollMs: null };
      result[0] = MANUAL;
      if (current > current) {
        let UP = tmp8(height2[28]).VerticalScrollingDirection.DOWN;
      } else {
        UP = tmp8(height2[28]).VerticalScrollingDirection.UP;
      }
      result[1] = UP;
      result[2] = current;
      result[3] = memo6;
      result[4] = diff;
      result = tmp8(height2[21]).trackBountyVerticalScroll(result);
      const obj2 = tmp8(height2[21]);
    }
  }, items15);
  const items16 = [takeDidAutoScroll, callback2, callback4, first4, hasSingleUseSwipeUpNux, hasRecurringSwipeUpNux, dismissSingleUseSwipeUpNux, dismissRecurringSwipeUpNux];
  callback5 = obj.useCallback((arg0) => {
    callback(arg0);
    callback2();
    const BountyScrollingType = tmp8(height2[28]).BountyScrollingType;
    callback4(arg0, takeDidAutoScroll() ? BountyScrollingType.AUTO : BountyScrollingType.MANUAL);
    if (tmp6) {
      if (hasSingleUseSwipeUpNux) {
        dismissSingleUseSwipeUpNux(sharedValue1.USER_DISMISS);
      } else {
        if (hasRecurringSwipeUpNux) {
          dismissRecurringSwipeUpNux(sharedValue1.USER_DISMISS);
        }
        tmp8 = hasRecurringSwipeUpNux;
      }
    }
  }, items16);
  tmp5Result = tmp5(tmp3[30]);
  closure_61 = tmp5Result.useBountiesRecapOrbCount({ scrollY: sharedValue4, lastBountyScrollOffset: result1, recapRevealHeight: height3, targetOrbAmount: stateFromStores, enabled: tmp30 });
  const items17 = [first, first4];
  const effect2 = obj.useEffect(() => {
    if (null != first[first4]) {
      const items = [tmp.id];
      tmp8(height2[31]).markAdContentSeen(tmp8(height2[32]).AdCreativeType.BOUNTY, items);
      const obj = tmp8(height2[31]);
    }
  }, items17);
  const items18 = [first, first4, dismissOnClose, rewardTimerSeconds, sourceQuestContent];
  const items19 = [sourceQuestContent];
  const callback6 = obj.useCallback(() => {
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
      let obj = tmp8(height2[21]);
      obj = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
      obj[0] = tmp2.id;
      obj[1] = tmp8(height2[32]).AdCreativeType.BOUNTY;
      obj[2] = constants.AD_VIDEO_MODAL_CLOSED;
      obj = { content_name: null, content_id: null, video_progress: null, threshold_met: null, reward_timer_seconds: null };
      obj[0] = constants(height2[28]).getQuestContentName(constants(height2[33]).QuestContent.VIDEO_MODAL_MOBILE);
      obj[1] = constants(height2[33]).QuestContent.VIDEO_MODAL_MOBILE;
      const obj4 = constants(height2[28]);
      obj[2] = constants(height2[34]).formatVideoProgressRatio(num, num2);
      obj[3] = 1000 * num >= result;
      obj[4] = result / 1000;
      obj[3] = obj;
      obj[4] = width;
      obj.trackAdContentEvent(obj);
      const obj5 = constants(height2[34]);
    }
    width(height2[35]).hideModal();
  }, items18);
  closure_62 = obj.useCallback(() => {
    let obj = tmp8(height2[21]);
    obj = { adContentId: orbAmount, adCreativeType: tmp8(height2[32]).AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
    obj = { content_name: tmp8(height2[28]).getQuestContentName(tmp8(height2[33]).QuestContent.BOUNTIES_END_INTERSTITIAL), content_id: tmp8(height2[33]).QuestContent.BOUNTIES_END_INTERSTITIAL };
    obj[3] = obj;
    obj[4] = width;
    obj.trackAdContentEvent(obj);
    const obj4 = tmp8(height2[28]);
    width(height2[35]).hideModal();
  }, items19);
  const tmp44 = callback(React.useState(false), 2);
  const tmp52 = first.length > 1;
  obj1 = { onScroll: zt, onBeginDrag: null, onEndDrag: null, onMomentumEnd: null };
  zt = function zt(contentOffset) {
    const result = sharedValue4.set(contentOffset.contentOffset.y);
    if (sharedValue3.get()) {
      if (typeof result1 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Math = Math;
      result1 = sharedValue2.set(contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp5);
      const tmp6 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp5;
    }
  };
  obj2 = { scrollY: sharedValue4, isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: result1 };
  zt.__closure = obj2;
  zt.__workletHash = 7942598540397;
  zt.__initData = first3;
  class Zt {
    constructor(arg0) {
      result = closure_40.set(true);
      tmp2 = closure_39;
      if (typeof closure_28 !== "function") {
        str = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      tmp4 = arg0.contentOffset.y >= 0 && arg0.contentOffset.y <= tmp3;
      result1 = closure_39.set(tmp4);
      return;
    }
  }
  Zt.__closure = { isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: result1 };
  Zt.__workletHash = 14039038912528;
  Zt.__initData = closure_34;
  obj1[1] = Zt;
  class Qt {
    constructor(arg0) {
      if (arg0.contentOffset.y < 0) {
        tmp3 = closure_0;
        tmp4 = height;
        UP = closure_0(height[28]).VerticalScrollingDirection.DOWN;
      } else {
        tmp = closure_0;
        tmp2 = height;
        UP = closure_0(height[28]).VerticalScrollingDirection.UP;
      }
      obj = closure_0(height[12]);
      tmp5 = obj.runOnJS(cancel)(UP);
      result = closure_40.set(false);
      if (!closure_17) {
        tmp7 = closure_39;
        result1 = closure_39.set(false);
      }
      return;
    }
  }
  obj3 = { VerticalScrollingDirection: tmp5(tmp3[28]).VerticalScrollingDirection, runOnJS: tmp5(tmp3[12]).runOnJS, cancelScrollAffordance: cancel, isDraggingSharedValue: sharedValue3, IS_ANDROID: closure_17, isScrollingInBoundsSharedValue: sharedValue2 };
  Qt.__closure = obj3;
  Qt.__workletHash = 10752087179842;
  Qt.__initData = c35;
  obj1[2] = Qt;
  class Gt {
    constructor(arg0) {
      if (closure_26) {
        tmp = arg0;
        tmp2 = closure_0;
        tmp3 = height;
        obj = closure_0(height[12]);
        tmp4 = handleRecapMomentumEnd;
        tmp5 = obj.runOnJS(handleRecapMomentumEnd)(arg0);
      }
      result = closure_39.set(false);
      return;
    }
  }
  obj4 = { showRecapPullZone: tmp30, runOnJS: tmp5(tmp3[12]).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 };
  Gt.__closure = obj4;
  Gt.__workletHash = 13684210320337;
  Gt.__initData = c36;
  obj1[3] = Gt;
  const tmp5Result1 = require(tmp3[12]);
  const animatedScrollHandler = require(tmp3[12]).useAnimatedScrollHandler(obj1);
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
        tmp2 = height;
        obj = closure_0(height[12]);
        tmp3 = closure_60;
        tmp4 = obj.runOnJS(closure_60)(arg0);
      }
      return;
    }
  }
  obj5 = { runOnJS: tmp5(tmp3[12]).runOnJS, commitSwipe: callback5 };
  Wt.__closure = obj5;
  Wt.__workletHash = 14015091539518;
  Wt.__initData = closure_38;
  const animatedReaction = require(tmp3[12]).useAnimatedReaction(Kt, Wt);
  const tmp5Result2 = require(tmp3[12]);
  function jt() {
    let tmp = closure_26;
    if (closure_26) {
      const value = sharedValue4.get();
      tmp = value >= result1 - tmp8(height2[25]).RECAP_SNAP_EPSILON;
    }
    return tmp;
  }
  obj6 = { showRecapPullZone: tmp30, scrollY: sharedValue4, lastBountyScrollOffset: result1, RECAP_SNAP_EPSILON: tmp5(tmp3[25]).RECAP_SNAP_EPSILON };
  jt.__closure = obj6;
  jt.__workletHash = 6584708256992;
  jt.__initData = sharedValue2;
  class Xt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = height;
        obj = closure_0(height[12]);
        tmp3 = closure_36;
        tmp4 = obj.runOnJS(closure_36)(arg0);
      }
      return;
    }
  }
  obj7 = { runOnJS: tmp5(tmp3[12]).runOnJS, setShowRecapFooter: tmp46 };
  Xt.__closure = obj7;
  Xt.__workletHash = 10788669301891;
  Xt.__initData = sharedValue3;
  const animatedReaction1 = require(tmp3[12]).useAnimatedReaction(jt, Xt);
  const tmp5Result3 = require(tmp3[12]);
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
      tmp8(height2[12]).runOnJS(closure_32)(arg0);
      const obj = tmp8(height2[12]);
    }
  }
  obj8 = { runOnJS: tmp5(tmp3[12]).runOnJS, setIsRecapPageRevealed: tmp37 };
  qt.__closure = obj8;
  qt.__workletHash = 12713474352874;
  qt.__initData = hasSingleUseSwipeUpNux;
  const animatedReaction2 = require(tmp3[12]).useAnimatedReaction($t, qt);
  const tmp5Result4 = require(tmp3[12]);
  function to() {
    let tmp = closure_26;
    if (closure_26) {
      const value = sharedValue4.get();
      tmp = value >= sum1 - tmp8(height2[25]).RECAP_SNAP_EPSILON;
    }
    return tmp;
  }
  obj9 = { showRecapPullZone: tmp30, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: tmp5(tmp3[25]).RECAP_SNAP_EPSILON };
  to.__closure = obj9;
  to.__workletHash = 5669564400667;
  to.__initData = dismissSingleUseSwipeUpNux;
  function eo(arg0, arg1) {
    if (arg0 !== arg1) {
      tmp8(height2[12]).runOnJS(closure_34)(arg0);
      const obj = tmp8(height2[12]);
    }
  }
  obj10 = { runOnJS: tmp5(tmp3[12]).runOnJS, setIsRecapPageOnTop: tmp40 };
  eo.__closure = obj10;
  eo.__workletHash = 8102193741774;
  eo.__initData = hasRecurringSwipeUpNux;
  const animatedReaction3 = require(tmp3[12]).useAnimatedReaction(to, eo);
  const items20 = [height3, stateFromStores > 0];
  const memo8 = obj.useMemo(() => {
    let tmp = null;
    if (closure_26) {
      const obj = { height: null };
      obj[0] = height3;
      tmp = _undefined2(sum1, obj);
    }
    return tmp;
  }, items20);
  const tmp5Result5 = require(tmp3[12]);
  function ro() {
    const value = sharedValue.get();
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
  animatedStyle = require(tmp3[12]).useAnimatedStyle(ro);
  const items21 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr23[2], width: arr23[3] } = memo);
  const memo9 = obj.useMemo(() => {
    const items = [height2.listWrapper, { top: 0, left: memo.left, width: memo.width }, animatedStyle];
    return items;
  }, items21);
  const tmp6Result = tmp6(obj.useState(false), 2);
  first5 = tmp6Result[0];
  closure_65 = tmp80;
  const tmp5Result6 = require(tmp3[12]);
  function io() {
    const value = sharedValue.get();
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
      tmp8(height2[12]).runOnJS(closure_65)(arg0);
      const obj = tmp8(height2[12]);
    }
  }
  obj11 = { runOnJS: tmp5(tmp3[12]).runOnJS, setHideListFooterPadding: tmp80 };
  so.__closure = obj11;
  so.__workletHash = 7553157067719;
  so.__initData = memo6;
  const animatedReaction4 = require(tmp3[12]).useAnimatedReaction(io, so);
  const items22 = [first5, memo.top];
  const items23 = [, ];
  ({ width: arr25[0], height: arr25[1] } = memo);
  const memo10 = obj.useMemo(() => {
    const obj = { paddingTop: memo.top, paddingBottom: null };
    let num = 97;
    if (first5) {
      num = 0;
    }
    obj[1] = num;
    return obj;
  }, items22);
  memo11 = obj.useMemo(() => ({ width: memo.width, height: memo.height }), items23);
  const items24 = [tmp.closeButton, , , ];
  ({ top: arr26[1], left: arr26[2], width: arr26[3] } = memo);
  const items25 = [tmp.autoScrollIndicator, , , , ];
  ({ top: arr27[1], height: arr27[2], left: arr27[3], width: arr27[4] } = memo);
  const memo12 = obj.useMemo(() => {
    const items = [height2.closeButton, ];
    const obj = { top: memo.top + width(height2[10]).space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - width(height2[10]).space.PX_32;
    obj[1] = diff - width(height2[10]).space.PX_8;
    items[1] = obj;
    return items;
  }, items24);
  const items26 = [first3, tmp.recapPage, , , , ];
  ({ top: arr28[2], left: arr28[3], width: arr28[4] } = memo);
  items26[5] = height;
  const memo13 = obj.useMemo(() => {
    const items = [height2.autoScrollIndicator, ];
    const obj = { top: null, left: null, width: null };
    const sum = memo.top + tmp8(height2[29]).AUTO_SCROLL_PEEK_TOP_OFFSET;
    sum1 = sum + memo.height * tmp8(height2[29]).AUTO_SCROLL_PEEK_SCALE;
    obj[0] = sum1 + width(height2[10]).space.PX_32;
    ({ left: obj[1], width: obj[2] } = memo);
    items[1] = obj;
    return items;
  }, items25);
  const memo14 = obj.useMemo(() => {
    const items = [height2.recapPage, ];
    let obj = { top: memo.top, left: memo.left, width: memo.width, height: closure_3 - memo.top };
    let tmp = null;
    if (first3) {
      obj = { zIndex: null };
      obj[0] = callback2;
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    items[1] = obj;
    return items;
  }, items26);
  const tmp5Result7 = require(tmp3[12]);
  function go(diff) {
    return tmp8(height2[25]).getRevealProgress(sharedValue4.get(), result1, height3);
  }
  obj12 = { getRevealProgress: tmp5(tmp3[25]).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result1, recapRevealHeight: height3 };
  go.__closure = obj12;
  go.__workletHash = 1141192763711;
  go.__initData = closure_48;
  derivedValue = require(tmp3[12]).useDerivedValue(go);
  const tmp5Result8 = require(tmp3[12]);
  class Eo {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(height[12]);
      value = closure_67.get();
      obj[0] = obj2.interpolate(value, [0, 1], [0, 1], closure_0(height[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result9 = require(tmp3[12]);
  Eo.__closure = { interpolate: require(tmp3[12]).interpolate, recapPullProgress: derivedValue, Extrapolation: require(tmp3[12]).Extrapolation };
  Eo.__workletHash = 15664240485606;
  Eo.__initData = closure_49;
  const animatedStyle1 = tmp5Result9.useAnimatedStyle(Eo);
  const obj13 = { interpolate: require(tmp3[12]).interpolate, recapPullProgress: derivedValue, Extrapolation: require(tmp3[12]).Extrapolation };
  class Oo {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(height[12]);
      value = closure_67.get();
      items = [, ];
      items[0] = closure_25;
      items[1] = closure_26;
      obj[0] = obj2.interpolate(value, items, [1, 0], closure_0(height[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result10 = require(tmp3[12]);
  Oo.__closure = { interpolate: require(tmp3[12]).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: c25, FOOTER_FADE_END_PROGRESS: closure_26, Extrapolation: require(tmp3[12]).Extrapolation };
  Oo.__workletHash = 13645152212589;
  Oo.__initData = peekScale;
  const animatedStyle2 = tmp5Result10.useAnimatedStyle(Oo);
  const obj14 = { interpolate: require(tmp3[12]).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: c25, FOOTER_FADE_END_PROGRESS: closure_26, Extrapolation: require(tmp3[12]).Extrapolation };
  const tmp89 = closure_26;
  class Po {
    constructor() {
      obj = closure_41;
      if (closure_41.get() >= closure_28 - closure_24 / 2) {
        tmp5 = closure_67;
        value = closure_67.get();
      } else {
        tmp = closure_0;
        tmp2 = height;
        obj2 = closure_0(height[25]);
        tmp3 = height;
        num = 0;
        value = obj2.getRevealProgress(obj.get(), 0, height);
      }
      obj = { opacity: null };
      obj4 = closure_0(height[12]);
      items = [, ];
      items[0] = closure_25;
      items[1] = closure_26;
      obj[0] = obj4.interpolate(value, items, [1, 0], closure_0(height[12]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result11 = require(tmp3[12]);
  Po.__closure = { scrollY: sharedValue4, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: require(tmp3[25]).getRevealProgress, recapRevealHeight: height3, interpolate: require(tmp3[12]).interpolate, FOOTER_FADE_START_PROGRESS: c25, FOOTER_FADE_END_PROGRESS: closure_26, Extrapolation: require(tmp3[12]).Extrapolation };
  Po.__workletHash = 3460917733424;
  Po.__initData = cancel;
  const items27 = [tmp.peekGradient, , , , ];
  ({ left: arr29[1], width: arr29[2], top: arr29[3], height: arr29[4] } = memo);
  const animatedStyle3 = tmp5Result11.useAnimatedStyle(Po);
  let tmp93 = "peek" === scrollAffordanceVariant;
  const memo15 = obj.useMemo(() => {
    const items = [height2.peekGradient, { left: memo.left, width: memo.width, top: memo.top + memo.height, bottom: 0 }];
    return items;
  }, items27);
  if (tmp93) {
    tmp93 = hasRecurringSwipeUpNux;
  }
  if (tmp93) {
    tmp93 = !tmp19;
  }
  closure_68 = tmp93;
  const obj15 = { scrollY: sharedValue4, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: require(tmp3[25]).getRevealProgress, recapRevealHeight: height3, interpolate: require(tmp3[12]).interpolate, FOOTER_FADE_START_PROGRESS: c25, FOOTER_FADE_END_PROGRESS: closure_26, Extrapolation: require(tmp3[12]).Extrapolation };
  function fo() {
    const obj = { opacity: null };
    const value = sharedValue4.get();
    const items = [0, c24];
    obj[0] = tmp8(height2[12]).interpolate(value, items, [1, 0], tmp8(height2[12]).Extrapolation.CLAMP);
    return obj;
  }
  const tmp5Result12 = require(tmp3[12]);
  fo.__closure = { interpolate: require(tmp3[12]).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: require(tmp3[12]).Extrapolation };
  fo.__workletHash = 7289479842131;
  fo.__initData = dismissOnClose;
  const animatedStyle4 = tmp5Result12.useAnimatedStyle(fo);
  const obj16 = { interpolate: require(tmp3[12]).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: require(tmp3[12]).Extrapolation };
  class Ro {
    constructor() {
      return closure_67.get() < closure_26;
    }
  }
  Ro.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp89 };
  Ro.__workletHash = 8241096384746;
  Ro.__initData = takeDidAutoScroll;
  function vo(arg0, arg1) {
    if (arg0 !== arg1) {
      tmp8(height2[12]).runOnJS(c35)(arg0);
      const obj = tmp8(height2[12]);
    }
  }
  const tmp5Result13 = require(tmp3[12]);
  vo.__closure = { runOnJS: require(tmp3[12]).runOnJS, setIsCloseButtonPressable: tmp43 };
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
    let obj = { index, slotHeight: c24, scrollY: sharedValue4, style: memo11, isPeekEnabled: closure_68, children: null };
    obj = { bounty: item, sourceQuestContent: width, width: memo.width, height: memo.height, index, isActive: tmp6, isRecapPageRevealed: first2, isRecapPageOnTop: first3, isScrollingInBoundsSharedValue: sharedValue2, isScrollIndicatorOverlayEnabled: null, shouldLoadHls: null, scrollAffordance: null, peekScale: null, videoEndPeekScale: null, softDownloadCapsEnabled: null };
    let tmp7 = hasRecurringSwipeUpNux;
    if (hasRecurringSwipeUpNux) {
      tmp7 = 0 === index;
    }
    obj[9] = tmp7;
    obj[10] = flag;
    let tmp9;
    if (closure_12) {
      tmp9 = memo7;
    }
    obj[11] = tmp9;
    let tmp10;
    if (index === first4) {
      if (tmp8) {
        tmp10 = peekScale;
      }
    }
    obj[12] = tmp10;
    let tmp11;
    if (index === first4) {
      if (ownedByVerticalScrollExperiment) {
        tmp11 = sharedValue;
      }
    }
    obj[13] = tmp11;
    obj[14] = ownedByVerticalScrollExperiment;
    obj[5] = c15(closure_12(height2[36]).BountiesScrollVideoItem, obj, item.id);
    return c15(closure_32, obj);
  }, items28);
  [][0] = height3;
  const memo16 = obj.useMemo(() => ({ activeIndex: first4, isRecapPageRevealed: first2, isRecapPageOnTop: first3, width: memo.width, height: memo.height, isPeekEnabled: closure_68, isAutoScrollEnabled: closure_12, ownedByVerticalScrollExperiment, isVideoEndAppStoreOverlayVisible: closure_18, videoEndPeekScale: sharedValue, canShowScrollIndicatorOverlay: hasRecurringSwipeUpNux, isSoftCapPreload: ownedByVerticalScrollExperiment }), items29);
  if (0 === first.length) {
    return null;
  } else {
    if (tmp55) {
      tmp = callback2;
      let tmp99 = callback2(tmp2(tmp3[37]), {});
    } else {
      tmp99 = null;
      if (tmp45) {
        tmp = callback2;
        const obj18 = { orbAmount: null };
        obj18[0] = stateFromStores;
        tmp99 = callback2(tmp5(tmp3[38]).BountiesScrollRecapFooter, obj18);
      }
    }
    tmp = callback2;
    const obj19 = { value: null, children: null };
    obj19[0] = memo3;
    tmp = questHomeBounties;
    const obj20 = { style: null, children: null };
    obj20[0] = tmp.root;
    tmp = closure_16;
    tmp = tmp2(tmp3[40]);
    if (peekActive) {
      peekActive = !tmp19;
    }
    const obj21 = { active: null };
    obj21[0] = peekActive;
    const items30 = [tmp(tmp, obj21), , , , , , , ];
    tmp = null;
    if (tmp30) {
      const obj22 = { style: null, pointerEvents: null, children: null };
      const items31 = [memo14, animatedStyle1];
      obj22[0] = items31;
      let str2 = "none";
      if (first3) {
        str2 = "box-none";
      }
      obj22[1] = str2;
      const obj23 = { adContentId: null, adCreativeType: null, questContent: null, overrideVisibility: null, sourceQuestContent: null, children: null };
      tmp = orbAmount;
      obj23[0] = orbAmount;
      obj23[1] = tmp5(tmp3[32]).AdCreativeType.BOUNTY;
      obj23[2] = tmp5(tmp3[33]).QuestContent.BOUNTIES_END_INTERSTITIAL;
      obj23[3] = first3;
      obj23[4] = sourceQuestContent;
      obj23[5] = function children() {
        return _undefined2(tmp8(height2[42]).BountiesScrollRecapPage, { orbAmount: closure_61, onClose: closure_62, style: { flex: 1 } });
      };
      obj22[2] = tmp(tmp5(tmp3[41]).QuestContentImpressionTrackerNative, obj23);
      tmp = tmp(tmp2(tmp3[12]).View, obj22);
    }
    items30[1] = tmp;
    const obj24 = { style: null, children: null };
    obj24[0] = memo9;
    const obj25 = { ref: null, data: null, keyExtractor: null, renderItem: null, extraData: null, overrideItemLayout: null, ItemSeparatorComponent: null, ListFooterComponent: null, snapToOffsets: null, snapToEnd: false, decelerationRate: 0.85, showsVerticalScrollIndicator: false, drawDistance: null, onScroll: null, scrollEventThrottle: 16, scrollEnabled: null, contentContainerStyle: null };
    obj25[0] = ref;
    obj25[1] = first;
    obj25[2] = function keyExtractor(id) {
      return id.id;
    };
    obj25[3] = callback7;
    obj25[4] = memo16;
    obj25[5] = tmp98;
    tmp = height3;
    obj25[6] = height3;
    obj25[7] = memo8;
    obj25[8] = memo5;
    obj25[12] = sum;
    obj25[13] = animatedScrollHandler;
    tmp = !tmp19;
    obj25[15] = tmp;
    obj25[16] = memo10;
    obj24[1] = tmp(tmp5(tmp3[43]).AnimatedFlashList, obj25);
    items30[2] = tmp(tmp2(tmp3[12]).View, obj24);
    tmp = null;
    if (null != tmp18) {
      const obj26 = { metadata: null, sheetHeight: null, revealProgress: null, onDismiss: null, onInstallPress: null };
      obj26[0] = tmp18.metadata;
      obj26[1] = memo2;
      obj26[2] = sharedValue1;
      obj26[3] = callback2;
      obj26[4] = tmp18.onInstallPress;
      tmp = tmp(tmp2(tmp3[44]), obj26);
    }
    items30[3] = tmp;
    tmp = null;
    if (tmp93) {
      tmp = null;
      if (first.length > 1) {
        const obj27 = { pointerEvents: "none", style: null, children: null };
        const items32 = [memo15, animatedStyle4];
        obj27[1] = items32;
        const obj28 = { colors: null, style: null };
        tmp = c24;
        obj28[0] = c24;
        tmp = memo;
        obj28[1] = memo.absoluteFill;
        obj27[2] = tmp(tmp2(tmp3[45]), obj28);
        tmp = tmp(tmp2(tmp3[12]).View, obj27);
      }
    }
    items30[4] = tmp;
    const obj29 = { style: null, pointerEvents: null, children: null };
    const items33 = [memo12, animatedStyle2];
    obj29[0] = items33;
    let str3 = "none";
    if (tmp42) {
      str3 = "box-none";
    }
    obj29[1] = str3;
    tmp = null;
    if (tmp42) {
      const obj30 = { onPress: null };
      obj30[0] = callback6;
      tmp = tmp(tmp2(tmp3[46]), obj30);
    }
    obj29[2] = tmp;
    items30[5] = tmp(tmp2(tmp3[12]).View, obj29);
    tmp = null;
    if (visible) {
      tmp = null;
      if (!tmp19) {
        const obj31 = { style: null, pointerEvents: "none", children: null };
        obj31[0] = memo13;
        const obj32 = { progress: null, showProgressRing: null };
        obj32[0] = progress;
        obj32[1] = showProgressRing;
        obj31[2] = tmp(tmp2(tmp3[47]), obj32);
        tmp = tmp(tmp, obj31);
      }
    }
    items30[6] = tmp;
    tmp = tmp2(tmp3[15]);
    if (!tmp55) {
      tmp55 = tmp45;
    }
    if (tmp55) {
      tmp55 = tmp;
    }
    const obj33 = { visible: null, onContentLayout: null, zIndex: null, opacityStyle: null, children: null };
    obj33[0] = tmp55;
    obj33[1] = callback;
    tmp = callback2;
    obj33[2] = callback2;
    obj33[3] = animatedStyle3;
    obj33[4] = tmp99;
    items30[7] = tmp(tmp, obj33);
    obj20[1] = items30;
    obj19[1] = tmp(tmp, obj20);
    return tmp(tmp5(tmp3[39]).BountyVideoEndAppStoreProvider, obj19);
  }
  const obj17 = { runOnJS: require(tmp3[12]).runOnJS, setIsCloseButtonPressable: tmp43 };
}
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_8, QuestsExperimentLocations: c9 } = QuestsExperimentLocations);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: unpackModuleId } = BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = PlatformTypes.isAndroid();
let c18 = 0;
let c19 = 1;
let c20 = 2;
let c21 = 3;
let c22 = 0.5625;
const PX_8 = ThemesDefault.space.PX_8;
let closure_24 = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let c25 = 0.05;
let c26 = 0.1;
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
let closure_30 = createCacheKey.createStyles(() => {
  const recapPage = { position: "absolute", zIndex: c18 };
  return { root: { flex: 1 }, recapPage, listWrapper: { position: "absolute", zIndex: c19, overflow: "hidden" }, closeButton: { position: "absolute", zIndex: c21 }, peekGradient: { position: "absolute", zIndex: c20 }, autoScrollIndicator: { position: "absolute", zIndex: c21, alignItems: "center" } };
});
let closure_31 = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
let closure_33 = { code: "function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}" };
let closure_34 = { code: "function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}" };
let closure_35 = { code: "function BountiesModalContentScrollTsx5(event){const{VerticalScrollingDirection,runOnJS,cancelScrollAffordance,isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;const scrollingDirection=event.contentOffset.y<0?VerticalScrollingDirection.DOWN:VerticalScrollingDirection.UP;runOnJS(cancelScrollAffordance)(scrollingDirection);isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
let closure_36 = { code: "function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}" };
let closure_37 = { code: "function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
let closure_38 = { code: "function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}" };
let closure_39 = { code: "function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_40 = { code: "function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
let closure_41 = { code: "function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
let closure_42 = { code: "function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
let closure_43 = { code: "function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_44 = { code: "function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
let closure_45 = { code: "function BountiesModalContentScrollTsx15(){const{videoEndPeekScale,videoEndAppStoreProgress,BOUNTIES_MODAL_FOOTER_HEIGHT,videoLayout}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();const footerHeight=overlayProgress>0||scale<1?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+videoLayout.height*scale+footerHeight};}" };
let closure_46 = { code: "function BountiesModalContentScrollTsx16(){const{videoEndPeekScale,videoEndAppStoreProgress}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();return overlayProgress>0||scale<1;}" };
let closure_47 = { code: "function BountiesModalContentScrollTsx17(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}" };
let closure_48 = { code: "function BountiesModalContentScrollTsx18(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
let closure_49 = { code: "function BountiesModalContentScrollTsx19(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
let closure_50 = { code: "function BountiesModalContentScrollTsx20(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_51 = { code: "function BountiesModalContentScrollTsx21(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_52 = { code: "function BountiesModalContentScrollTsx22(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
let closure_53 = { code: "function BountiesModalContentScrollTsx23(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
let closure_54 = { code: "function BountiesModalContentScrollTsx24(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  ({ bountyId, sourceQuestContent } = arg0);
  return callback2(ThemeContextProvider.ThemeContextProvider, { theme: items34.ThemeTypes.DARKER, children: callback2(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }) });
};