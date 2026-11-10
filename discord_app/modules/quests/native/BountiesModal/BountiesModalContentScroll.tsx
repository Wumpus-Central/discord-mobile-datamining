// === Module 17269: BountiesModalContentScroll ===

// Module 17269 (BountiesModalContentScroll)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import native from "native" /* 5201 */;
import timing_timing from "timing/timing" /* 5372 */;
import timingPresets from "timingPresets" /* 5375 */;
import QuestContent from "QuestContent" /* 6844 */;
import AdCreativeType from "AdCreativeType" /* 6846 */;
import QuestDataUtils from "QuestDataUtils" /* 7922 */;
import AnalyticsActions from "AnalyticsActions" /* 7943 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7952 */;
import QuestActionCreators from "QuestActionCreators" /* 9779 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 14923 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14946 */;
import shared_ThemeTypes from "shared/ThemeTypes" /* 16822 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 17266 */;
import BountiesScrollVideoItem from "BountiesScrollVideoItem" /* 17277 */;
import BountiesScrollRecapPage from "BountiesScrollRecapPage" /* 17316 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7925 */;

const _modDef1652 = _mod1652;

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
function BountiesScrollVideoItemContainer(arg0) {
  ({ index, slotHeight, scrollY, style, isPeekEnabled, children } = arg0);
  items = [closure_31, scrollY, index, slotHeight, isPeekEnabled, 0.8, _mod1652.interpolate, 0.3, _mod1652.Extrapolation];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class BountiesModalContentScrollTsx2 {
    constructor() {
      result = (closure_0.get() - closure_1 * closure_2) / closure_2;
      tmp = closure_1;
      absolute = Math.abs(result);
      items = [0];
      items[1] = closure_6;
      items[2] = 1;
      num = 0;
      tmp4 = closure_5;
      if (closure_3) {
        num = 0;
        if (result < 0) {
          num = 0;
          if (1 === tmp) {
            num = closure_4;
          }
        }
      }
      obj = { opacity: null };
      items1 = [1, 1];
      items1[2] = num;
      obj.opacity = tmp4(absolute, items, items1, closure_7.CLAMP);
      return obj;
    }
  }
  let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  BountiesModalContentScrollTsx2.__closure = items1;
  BountiesModalContentScrollTsx2.__workletHash = 5598409177263;
  BountiesModalContentScrollTsx2.__initData = tmp2;
  const animatedStyle = _mod1652.useAnimatedStyle(BountiesModalContentScrollTsx2);
  const obj2 = { style: null, children };
  const items2 = [style, animatedStyle];
  obj2.style = items2;
  return closure_1_17(_modDef1652.View, obj2);
}
function BountiesModalContentScrollInner(initialBountyId) {
  initialBountyId = initialBountyId.initialBountyId;
  _require = initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  noop = undefined;
  c11 = undefined;
  let sum1;
  let sharedValue1;
  let animatedStyle;
  let first4;
  let memo10;
  let isPeekEnabled;
  let tmp = sharedValue1();
  const height = useWindowDimensionsDefault().height;
  c3 = height;
  noop.useRef(null);
  [tmp8, c4] = c3(noop.useState(require("BountiesScrollPromptFooter").BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  closure_129_0 = tmp8;
  const callback = noop.useCallback((nativeEvent) => {
    _undefined2(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  let size = useWindowDimensionsDefault();
  const width = size.width;
  closure_129_1 = width;
  const height2 = size.height;
  closure_129_2 = height2;
  const tmp10 = useSafeAreaInsetsDefault();
  closure_129_3 = tmp10;
  items = [width, height2, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp10);
  items[5] = tmp8;
  const memo = noop.useMemo(() => {
    const rect = windowHeight;
    const diff = c1 - windowHeight.left - windowHeight.right;
    const diff1 = c2 - windowHeight.top - c0;
    let result = diff / c24;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c24;
      result = diff1;
    }
    const size = { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
    return size;
  }, items);
  absoluteFill = memo;
  const tmp6 = c3;
  const tmp7 = c3(noop.useState(require("BountiesScrollPromptFooter").BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  let questHomeBounties = require("hooks/QuestHooks").useQuestHomeBounties().questHomeBounties;
  const first = c3(noop.useState(() => {
    const findIndexResult = _undefined4.findIndex((id) => id.id === bountyId);
    if (findIndexResult < 0) {
      items = [];
    } else {
      items = _undefined4;
      if (0 !== findIndexResult) {
        const items1 = [];
        HermesBuiltin.arraySpread(_undefined4.slice(0, findIndexResult), HermesBuiltin.arraySpread(_undefined4.slice(findIndexResult), 0));
        items = items1;
        const arraySpreadResult = HermesBuiltin.arraySpread(_undefined4.slice(findIndexResult), 0);
      }
    }
    return items;
  }), 1)[0];
  c7 = first;
  c8 = tmp12;
  let items1 = [0 === first.length, initialBountyId, sourceQuestContent];
  const effect = noop.useEffect(() => {
    if (c8) {
      const _Error = Error;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj2 = { tags: { source: "BountiesModalContentScroll" }, extra: null };
      const obj3 = { bountyId, sourceQuestContent };
      obj2.extra = obj3;
      const result = QuestDataUtils.captureQuestsException(error, obj2);
      BountiesModalActionCreatorsDefault.hideModal();
    }
  }, items1);
  adContentId = c8;
  let obj2 = require("hooks/QuestHooks");
  const sharedValue = require("module_1652").useSharedValue(0);
  let obj3 = require("module_1652");
  [tmp16, c11] = c3(noop.useState(null), 2);
  const ref = noop.useRef(null);
  noop.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp17;
  const items2 = [height, , , ];
  ({ top: arr4[1], width: arr4[2], height: arr4[3] } = memo);
  const memo1 = noop.useMemo(() => state({ windowHeight, videoTop: _undefined3.top, videoWidth: _undefined3.width, videoHeight: _undefined3.height }), items2);
  const items3 = [height];
  const items4 = [sharedValue];
  const memo2 = noop.useMemo(() => closure_2_10(c3), items3);
  const callback1 = noop.useCallback((current) => {
    closure_13.current = Date.now();
    closure_12.current = current;
    _undefined7(current);
    const result = sharedValue.set(timing_timing.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    current.trackOverlayEvent(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items4);
  const items5 = [sharedValue];
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
      _undefined7(null);
      const result1 = sharedValue.set(timing_timing.withTiming(0, timingPresets.timingStandard));
    }
  }, items5);
  const items6 = [callback2, null != tmp16, callback1, sharedValue, memo1];
  const memo3 = noop.useMemo(() => ({ videoEndPeekProgress: sharedValue, videoEndPeekTargetScale: memo1, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items6);
  const tmp15 = c3(noop.useState(null), 2);
  const items7 = [c7];
  const items8 = [first, c8];
  const stateFromStores = require("initialize").useStateFromStores(items7, () => BountyStore.getCompletedBountyCount(c7) * c9, items8);
  let obj4 = require("initialize");
  const bountyRecurringSwipeUpNux = require("useBountyRecurringSwipeUpNux").useBountyRecurringSwipeUpNux({ isEligible: tmp24 });
  let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
  const height3 = memo.height;
  let sum = height3 + sum1;
  c21 = sum;
  let diff = first.length - 1;
  closure_22 = tmp28;
  let result = diff * sum;
  c24 = result;
  sum1 = result + height3;
  const items9 = [sum1, result, height3];
  const memo4 = noop.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height3 }), items9);
  let obj5 = require("useBountyRecurringSwipeUpNux");
  const items10 = [first, sum1, stateFromStores > 0, sum];
  const memo5 = noop.useMemo(() => {
    const mapped = _undefined5.map((item, index) => index * slotHeight);
    if (closure_22) {
      mapped.push(sum1);
    }
    return mapped;
  }, items10);
  const tmp33 = c3(noop.useState(false), 2);
  const first1 = tmp33[0];
  const tmp35 = c3(noop.useState(false), 2);
  const first2 = tmp35[0];
  let obj6 = require("useBountiesRecapScroll");
  [tmp38, tmp39] = c3(noop.useState(true), 2);
  const tmp37 = c3(noop.useState(true), 2);
  [tmp41, tmp42] = c3(noop.useState(false), 2);
  const tmp43 = c3(noop.useState(0), 2);
  const first3 = tmp43[0];
  closure_29 = tmp43[1];
  const tmp40 = c3(noop.useState(false), 2);
  sharedValue1 = require("module_1652").useSharedValue(false);
  const obj7 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(false);
  const obj8 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(0);
  const memo6 = noop.useMemo(() => bountyId(_undefined[27]).v4(), []);
  const ref3 = noop.useRef(0);
  const ref4 = noop.useRef(0);
  const effect1 = noop.useEffect(() => {
    closure_33.current = Date.now();
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
    closure_29(arg0);
    callback2();
    callback3(arg0);
    tmp = 0 === first3 && arg0 > 0 && hasRecurringSwipeUpNux;
  }, items12);
  const obj9 = require("module_1652");
  const orbAmount = require("useBountiesRecapOrbCount").useBountiesRecapOrbCount({ scrollY: sharedValue3, lastBountyScrollOffset: result, recapRevealHeight: height3, targetOrbAmount: stateFromStores, enabled: tmp28 });
  const items13 = [first, first3];
  const effect2 = noop.useEffect(() => {
    if (null != _undefined5[first3]) {
      items = [tmp.id];
      QuestActionCreators.markAdContentSeen(AdCreativeType.AdCreativeType.BOUNTY, items);
    }
  }, items13);
  const items14 = [first, first3, sourceQuestContent];
  const items15 = [sourceQuestContent];
  const callback5 = noop.useCallback(() => {
    if (null != _undefined5[first3]) {
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
  const onClose = noop.useCallback(() => {
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
  const obj10 = require("useBountiesRecapOrbCount");
  const items16 = [ref3, sharedValue3, sharedValue2, sharedValue1, first3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp54, tmp55, tmp56, tmp57, tmp58] = items16;
  const obj12 = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumEnd: null };
  class BountiesModalContentScrollTsx3 {
    constructor(arg0) {
      result = closure_0.set(initialBountyId.contentOffset.y);
      if (closure_1.get()) {
        tmp2 = closure_2;
        tmp3 = closure_3;
        result1 = closure_2.set(closure_3(initialBountyId));
      }
      return;
    }
  }
  const items17 = [tmp55, tmp56, tmp57, tmp58];
  BountiesModalContentScrollTsx3.__closure = items17;
  BountiesModalContentScrollTsx3.__workletHash = 10715376570228;
  BountiesModalContentScrollTsx3.__initData = tmp54;
  obj12.onScroll = BountiesModalContentScrollTsx3;
  const items18 = [ref4, sharedValue2, sharedValue1, first3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp59, tmp60, tmp61, tmp62] = items18;
  class BountiesModalContentScrollTsx4 {
    constructor(arg0) {
      result = closure_0.set(true);
      result1 = closure_1.set(closure_2(initialBountyId));
      return;
    }
  }
  const items19 = [tmp60, tmp61, tmp62];
  BountiesModalContentScrollTsx4.__closure = items19;
  BountiesModalContentScrollTsx4.__workletHash = 9771605321321;
  BountiesModalContentScrollTsx4.__initData = tmp59;
  obj12.onBeginDrag = BountiesModalContentScrollTsx4;
  const items20 = [callback3, sharedValue2, dismissRecurringSwipeUpNux, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp63, tmp64, tmp65, tmp66] = items20;
  class BountiesModalContentScrollTsx5 {
    constructor() {
      result = closure_0.set(false);
      if (!closure_1) {
        tmp2 = closure_2;
        result1 = closure_2.set(false);
      }
      return;
    }
  }
  const items21 = [tmp64, tmp65, tmp66];
  BountiesModalContentScrollTsx5.__closure = items21;
  BountiesModalContentScrollTsx5.__workletHash = 13193066516406;
  BountiesModalContentScrollTsx5.__initData = tmp63;
  obj12.onEndDrag = BountiesModalContentScrollTsx5;
  const items22 = [orbAmount, stateFromStores > 0, require("module_1705").scheduleOnRN, obj6.useBountiesRecapScroll({ listRef: ref, enabled: stateFromStores > 0, offsets: memo4 }).handleRecapMomentumEnd, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp67, tmp68, tmp69, tmp70, tmp71] = items22;
  class BountiesModalContentScrollTsx6 {
    constructor(arg0) {
      if (closure_0) {
        tmp = initialBountyId;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_1(closure_2, initialBountyId);
      }
      result = closure_3.set(false);
      return;
    }
  }
  const items23 = [tmp68, tmp69, tmp70, tmp71];
  BountiesModalContentScrollTsx6.__closure = items23;
  BountiesModalContentScrollTsx6.__workletHash = 11833509470853;
  BountiesModalContentScrollTsx6.__initData = tmp67;
  obj12.onMomentumEnd = BountiesModalContentScrollTsx6;
  const obj11 = require("module_1652");
  const animatedScrollHandler = require("module_1652").useAnimatedScrollHandler(obj12);
  const items24 = [onClose, sharedValue3, sum, diff];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp73, tmp74, tmp75, tmp76] = items24;
  class BountiesModalContentScrollTsx7 {
    constructor() {
      return Math.min(Math.max(Math.round(closure_0.get() / closure_1), 0), closure_2);
    }
  }
  const items25 = [tmp74, tmp75, tmp76];
  BountiesModalContentScrollTsx7.__closure = items25;
  BountiesModalContentScrollTsx7.__workletHash = 15263335344329;
  BountiesModalContentScrollTsx7.__initData = tmp73;
  const items26 = [animatedStyle, require("module_1705").scheduleOnRN, callback4];
  _require = undefined;
  importDefault = undefined;
  [tmp77, tmp78, tmp79] = items26;
  class BountiesModalContentScrollTsx8 {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, initialBountyId);
      }
      return;
    }
  }
  const items27 = [tmp78, tmp79];
  BountiesModalContentScrollTsx8.__closure = items27;
  BountiesModalContentScrollTsx8.__workletHash = 7117021770762;
  BountiesModalContentScrollTsx8.__initData = tmp77;
  const animatedReaction = require("module_1652").useAnimatedReaction(BountiesModalContentScrollTsx7, BountiesModalContentScrollTsx8);
  const tmp5Result = require("module_1652");
  const items28 = [first4, stateFromStores > 0, sharedValue3, result, require("useBountiesRecapScroll").RECAP_SNAP_EPSILON];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp81, tmp82, tmp83, tmp84, tmp85] = items28;
  class BountiesModalContentScrollTsx9 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        tmp = closure_1.get() >= closure_2 - closure_3;
      }
      return tmp;
    }
  }
  const items29 = [tmp82, tmp83, tmp84, tmp85];
  BountiesModalContentScrollTsx9.__closure = items29;
  BountiesModalContentScrollTsx9.__workletHash = 1510735356441;
  BountiesModalContentScrollTsx9.__initData = tmp81;
  const items30 = [memo10, require("module_1705").scheduleOnRN, tmp42];
  _require = undefined;
  importDefault = undefined;
  [tmp86, tmp87, tmp88] = items30;
  class BountiesModalContentScrollTsx10 {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, initialBountyId);
      }
      return;
    }
  }
  const items31 = [tmp87, tmp88];
  BountiesModalContentScrollTsx10.__closure = items31;
  BountiesModalContentScrollTsx10.__workletHash = 9911843745367;
  BountiesModalContentScrollTsx10.__initData = tmp86;
  const animatedReaction1 = require("module_1652").useAnimatedReaction(BountiesModalContentScrollTsx9, BountiesModalContentScrollTsx10);
  const tmp5Result12 = require("module_1652");
  const items32 = [isPeekEnabled, stateFromStores > 0, sharedValue3, result];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp90, tmp91, tmp92, tmp93] = items32;
  class BountiesModalContentScrollTsx11 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp = closure_1.get() > closure_2;
      }
      return tmp;
    }
  }
  const items33 = [tmp91, tmp92, tmp93];
  BountiesModalContentScrollTsx11.__closure = items33;
  BountiesModalContentScrollTsx11.__workletHash = 6652015407036;
  BountiesModalContentScrollTsx11.__initData = tmp90;
  const items34 = [hasRecurringSwipeUpNux, require("module_1705").scheduleOnRN, tmp33[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp94, tmp95, tmp96] = items34;
  class BountiesModalContentScrollTsx12 {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, initialBountyId);
      }
      return;
    }
  }
  const items35 = [tmp95, tmp96];
  BountiesModalContentScrollTsx12.__closure = items35;
  BountiesModalContentScrollTsx12.__workletHash = 7535649681310;
  BountiesModalContentScrollTsx12.__initData = tmp94;
  const animatedReaction2 = require("module_1652").useAnimatedReaction(BountiesModalContentScrollTsx11, BountiesModalContentScrollTsx12);
  const tmp5Result13 = require("module_1652");
  const items36 = [closure_43, stateFromStores > 0, sharedValue3, sum1, require("useBountiesRecapScroll").RECAP_SNAP_EPSILON];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp98, tmp99, tmp100, tmp101, tmp102] = items36;
  class BountiesModalContentScrollTsx13 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        tmp = closure_1.get() >= closure_2 - closure_3;
      }
      return tmp;
    }
  }
  const items37 = [tmp99, tmp100, tmp101, tmp102];
  BountiesModalContentScrollTsx13.__closure = items37;
  BountiesModalContentScrollTsx13.__workletHash = 2596573002466;
  BountiesModalContentScrollTsx13.__initData = tmp98;
  const items38 = [closure_44, require("module_1705").scheduleOnRN, tmp35[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp103, tmp104, tmp105] = items38;
  class BountiesModalContentScrollTsx14 {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, initialBountyId);
      }
      return;
    }
  }
  const items39 = [tmp104, tmp105];
  BountiesModalContentScrollTsx14.__closure = items39;
  BountiesModalContentScrollTsx14.__workletHash = 9994976909562;
  BountiesModalContentScrollTsx14.__initData = tmp103;
  const animatedReaction3 = require("module_1652").useAnimatedReaction(BountiesModalContentScrollTsx13, BountiesModalContentScrollTsx14);
  const items40 = [height3, stateFromStores > 0];
  const memo7 = obj.useMemo(() => {
    let tmp = null;
    if (closure_22) {
      const obj = { height: height3 };
      tmp = closure_2_17(BountiesRecapPullZone, obj);
    }
    return tmp;
  }, items40);
  const tmp5Result14 = require("module_1652");
  const items41 = [closure_45, sharedValue, ref, memo1, c11, memo, 97];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  absoluteFill = undefined;
  [tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114] = items41;
  class BountiesModalContentScrollTsx15 {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_1(value, closure_2);
      tmp3 = closure_4;
      num = 0;
      tmp4 = closure_3(value, closure_4.width, closure_4.height);
      if (value <= 0) {
        num = closure_5;
      }
      obj = { height: tmp3.top + tmp4 * tmp2 + num };
      return obj;
    }
  }
  const items42 = [tmp109, tmp110, tmp111, tmp112, tmp113, tmp114];
  BountiesModalContentScrollTsx15.__closure = items42;
  BountiesModalContentScrollTsx15.__workletHash = 11345166526440;
  BountiesModalContentScrollTsx15.__initData = tmp108;
  animatedStyle = require("module_1652").useAnimatedStyle(BountiesModalContentScrollTsx15);
  const items43 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr45[2], width: arr45[3] } = memo);
  const memo8 = obj.useMemo(() => {
    items = [_undefined.listWrapper, , ];
    const rect = { top: 0, left: _undefined3.left, width: _undefined3.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items43);
  const tmp6Result = tmp6(noop.useState(false), 2);
  first4 = tmp6Result[0];
  const tmp5Result15 = require("module_1652");
  const items44 = [closure_46, sharedValue];
  _require = undefined;
  [tmp119, tmp120] = items44;
  class BountiesModalContentScrollTsx16 {
    constructor() {
      return closure_0.get() > 0;
    }
  }
  const items45 = [tmp120];
  BountiesModalContentScrollTsx16.__closure = items45;
  BountiesModalContentScrollTsx16.__workletHash = 13605926420267;
  BountiesModalContentScrollTsx16.__initData = tmp119;
  const items46 = [closure_47, require("module_1705").scheduleOnRN, tmp6Result[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp121, tmp122, tmp123] = items46;
  class BountiesModalContentScrollTsx17 {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, initialBountyId);
      }
      return;
    }
  }
  const items47 = [tmp122, tmp123];
  BountiesModalContentScrollTsx17.__closure = items47;
  BountiesModalContentScrollTsx17.__workletHash = 2131624119443;
  BountiesModalContentScrollTsx17.__initData = tmp121;
  const animatedReaction4 = require("module_1652").useAnimatedReaction(BountiesModalContentScrollTsx16, BountiesModalContentScrollTsx17);
  const items48 = [first4, memo.top];
  const items49 = [, ];
  ({ width: arr51[0], height: arr51[1] } = memo);
  const memo9 = obj.useMemo(() => {
    const obj = { paddingTop: _undefined3.top, paddingBottom: null };
    let num = 97;
    if (first4) {
      num = 0;
    }
    obj.paddingBottom = num;
    return obj;
  }, items48);
  memo10 = obj.useMemo(() => {
    const size = { width: _undefined3.width, height: _undefined3.height };
    return size;
  }, items49);
  const items50 = [tmp.closeButton, , , ];
  ({ top: arr52[1], left: arr52[2], width: arr52[3] } = memo);
  const items51 = [first2, tmp.recapPage, , , , ];
  ({ top: arr53[2], left: arr53[3], width: arr53[4] } = memo);
  items51[5] = height;
  const memo11 = obj.useMemo(() => {
    items = [_undefined.closeButton, ];
    const rect = { top: _undefined3.top + nativeDefault.space.PX_8, left: null };
    const sum = _undefined3.left + _undefined3.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items50);
  const memo12 = obj.useMemo(() => {
    items = [_undefined.recapPage, ];
    const size = { top: _undefined3.top, left: _undefined3.left, width: _undefined3.width, height: c3 - _undefined3.top };
    let tmp = null;
    if (first2) {
      const obj = { zIndex };
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    items[1] = size;
    return items;
  }, items51);
  const tmp5Result16 = require("module_1652");
  const items52 = [closure_48, require("useBountiesRecapScroll").getRevealProgress, sharedValue3, result, height3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp129, tmp130, tmp131, tmp132, tmp133] = items52;
  class BountiesModalContentScrollTsx18 {
    constructor() {
      return closure_0(closure_1.get(), closure_2, closure_3);
    }
  }
  const items53 = [tmp130, tmp131, tmp132, tmp133];
  BountiesModalContentScrollTsx18.__closure = items53;
  BountiesModalContentScrollTsx18.__workletHash = 3609524767718;
  BountiesModalContentScrollTsx18.__initData = tmp129;
  const derivedValue = require("module_1652").useDerivedValue(BountiesModalContentScrollTsx18);
  const tmp5Result17 = require("module_1652");
  const items54 = [closure_49, require("module_1652").interpolate, derivedValue, require("module_1652").Extrapolation];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp135, tmp136, tmp137, tmp138] = items54;
  class BountiesModalContentScrollTsx19 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), [0, 1], [0, 1], closure_2.CLAMP) };
      return obj;
    }
  }
  const items55 = [tmp136, tmp137, tmp138];
  BountiesModalContentScrollTsx19.__closure = items55;
  BountiesModalContentScrollTsx19.__workletHash = 12052812104767;
  BountiesModalContentScrollTsx19.__initData = tmp135;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(BountiesModalContentScrollTsx19);
  const tmp5Result18 = require("module_1652");
  const items56 = [closure_50, require("module_1652").interpolate, derivedValue, 0.05, 0.1, require("module_1652").Extrapolation];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp140, tmp141, tmp142, tmp143, tmp144, tmp145] = items56;
  class BountiesModalContentScrollTsx20 {
    constructor() {
      obj = { opacity: null };
      items = [, ];
      items[0] = closure_2;
      items[1] = closure_3;
      obj.opacity = closure_0(closure_1.get(), items, [1, 0], closure_4.CLAMP);
      return obj;
    }
  }
  const items57 = [tmp141, tmp142, tmp143, tmp144, tmp145];
  BountiesModalContentScrollTsx20.__closure = items57;
  BountiesModalContentScrollTsx20.__workletHash = 12251993225876;
  BountiesModalContentScrollTsx20.__initData = tmp140;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(BountiesModalContentScrollTsx20);
  const tmp5Result19 = require("module_1652");
  const items58 = [closure_51, sharedValue3, result, sum, derivedValue, require("useBountiesRecapScroll").getRevealProgress, height3, require("module_1652").interpolate, 0.05, 0.1, require("module_1652").Extrapolation];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  absoluteFill = undefined;
  questHomeBounties = undefined;
  c7 = undefined;
  c8 = undefined;
  adContentId = undefined;
  [tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157] = items58;
  class BountiesModalContentScrollTsx21 {
    constructor() {
      obj = closure_0;
      if (closure_0.get() >= closure_1 - closure_2 / 2) {
        tmp4 = closure_3;
        value = closure_3.get();
      } else {
        tmp = closure_4;
        tmp2 = closure_5;
        num = 0;
        value = closure_4(obj.get(), 0, closure_5);
      }
      obj1 = { opacity: null };
      items = [, ];
      items[0] = closure_7;
      items[1] = closure_8;
      obj1.opacity = closure_6(value, items, [1, 0], closure_9.CLAMP);
      return obj1;
    }
  }
  const items59 = [tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157];
  BountiesModalContentScrollTsx21.__closure = items59;
  BountiesModalContentScrollTsx21.__workletHash = 1048703085737;
  BountiesModalContentScrollTsx21.__initData = tmp147;
  const items60 = [tmp.peekGradient, , , , ];
  ({ left: arr62[1], width: arr62[2], top: arr62[3], height: arr62[4] } = memo);
  const animatedStyle3 = require("module_1652").useAnimatedStyle(BountiesModalContentScrollTsx21);
  let tmp160 = tmp24;
  const memo13 = obj.useMemo(() => {
    items = [_undefined.peekGradient, ];
    const rect = { left: _undefined3.left, width: _undefined3.width, top: _undefined3.top + _undefined3.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items60);
  if (first.length > 1) {
    tmp160 = hasRecurringSwipeUpNux;
  }
  if (tmp160) {
    tmp160 = !tmp17;
  }
  isPeekEnabled = tmp160;
  if (hasRecurringSwipeUpNux) {
    hasRecurringSwipeUpNux = tmp24;
  }
  const tmp5Result20 = require("module_1652");
  const items61 = [closure_52, require("module_1652").interpolate, sharedValue3, sum, require("module_1652").Extrapolation];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp161, tmp162, tmp163, tmp164, tmp165] = items61;
  class BountiesModalContentScrollTsx22 {
    constructor() {
      obj = { opacity: null };
      items = [0];
      items[1] = closure_2;
      obj.opacity = closure_0(closure_1.get(), items, [1, 0], closure_3.CLAMP);
      return obj;
    }
  }
  const items62 = [tmp162, tmp163, tmp164, tmp165];
  BountiesModalContentScrollTsx22.__closure = items62;
  BountiesModalContentScrollTsx22.__workletHash = 7822704338666;
  BountiesModalContentScrollTsx22.__initData = tmp161;
  const animatedStyle4 = require("module_1652").useAnimatedStyle(BountiesModalContentScrollTsx22);
  const tmp5Result21 = require("module_1652");
  const items63 = [closure_53, derivedValue, 0.1];
  _require = undefined;
  importDefault = undefined;
  [tmp167, tmp168, tmp169] = items63;
  class BountiesModalContentScrollTsx23 {
    constructor() {
      return closure_0.get() < closure_1;
    }
  }
  const items64 = [tmp168, tmp169];
  BountiesModalContentScrollTsx23.__closure = items64;
  BountiesModalContentScrollTsx23.__workletHash = 4049505759859;
  BountiesModalContentScrollTsx23.__initData = tmp167;
  const items65 = [closure_54, require("module_1705").scheduleOnRN, tmp39];
  _require = undefined;
  importDefault = undefined;
  [tmp170, tmp171, tmp172] = items65;
  class BountiesModalContentScrollTsx24 {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, initialBountyId);
      }
      return;
    }
  }
  const items66 = [tmp171, tmp172];
  BountiesModalContentScrollTsx24.__closure = items66;
  BountiesModalContentScrollTsx24.__workletHash = 16546668186590;
  BountiesModalContentScrollTsx24.__initData = tmp170;
  const animatedReaction5 = require("module_1652").useAnimatedReaction(BountiesModalContentScrollTsx23, BountiesModalContentScrollTsx24);
  const items67 = [sum, sharedValue3, memo10, tmp160, hasRecurringSwipeUpNux, sourceQuestContent, , , , , , ];
  ({ width: arr69[6], height: arr69[7] } = memo);
  items67[8] = first3;
  items67[9] = first1;
  items67[10] = first2;
  items67[11] = sharedValue1;
  const items68 = [first3, first1, first2, , , , ];
  ({ width: arr70[3], height: arr70[4] } = memo);
  items68[5] = tmp160;
  items68[6] = null != tmp16;
  const callback6 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { index, slotHeight, scrollY: sharedValue3, style: memo10, isPeekEnabled, children: null };
    const size = { bounty: item, sourceQuestContent, width: _undefined3.width, height: _undefined3.height, index, isScrollIndicatorEnabled: null, isActive: null, isRecapPageRevealed: null, isRecapPageOnTop: null, isScrollingInBoundsSharedValue: null, shouldLoadHls: null, softDownloadCapsEnabled: true };
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
  }, items67);
  [][0] = height3;
  const memo14 = obj.useMemo(() => {
    const size = { activeIndex: first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, width: _undefined3.width, height: _undefined3.height, isPeekEnabled, isVideoEndAppStoreOverlayVisible };
    return size;
  }, items68);
  if (0 === first.length) {
    return null;
  } else {
    let tmp178 = null;
    if (tmp41) {
      const obj13 = { orbAmount: stateFromStores };
      tmp178 = callback2(tmp5(17315).BountiesScrollRecapFooter, obj13);
    }
    const obj14 = { value: memo3, children: null };
    const obj15 = { style: tmp.root, children: null };
    let tmp179Result = null;
    if (tmp28) {
      const obj16 = { style: null, pointerEvents: null, children: null };
      const items69 = [memo12, animatedStyle1];
      obj16.style = items69;
      let str = "none";
      if (first2) {
        str = "box-none";
      }
      obj16.pointerEvents = str;
      const obj17 = {
        adContentId,
        adCreativeType: tmp5(6846).AdCreativeType.BOUNTY,
        questContent: tmp5(6844).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first2,
        sourceQuestContent,
        children() {
              return closure_2_17(BountiesScrollRecapPage.BountiesScrollRecapPage, { orbAmount, onClose, style: { flex: 1 } });
            }
      };
      obj16.children = tmp179(tmp5(14961).QuestContentImpressionTrackerNative, obj17);
      tmp179Result = tmp179(tmp2(1652).View, obj16);
    }
    const items70 = [tmp179Result, , , , , ];
    const obj18 = { style: memo8, children: null };
    const obj19 = {
      ref,
      data: first,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback6,
      extraData: memo14,
      overrideItemLayout: tmp176,
      ItemSeparatorComponent: first2,
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
    obj18.children = callback2(tmp5(7360).AnimatedFlashList, obj19);
    items70[1] = callback2(tmp2(1652).View, obj18);
    let tmp179Result4 = null;
    if (null != tmp16) {
      const obj20 = { metadata: tmp16.metadata, sheetHeight: memo2, revealProgress: sharedValue, onDismiss: callback2, onInstallPress: null, onOverlaySurfaceClick: null, onCarouselScroll: null };
      ({ onInstallPress: obj32.onInstallPress, onOverlaySurfaceClick: obj32.onOverlaySurfaceClick, onCarouselScroll: obj32.onCarouselScroll } = tmp16);
      tmp179Result4 = tmp179(tmp2(17320), obj20);
    }
    items70[2] = tmp179Result4;
    let tmp179Result5 = null;
    if (tmp160) {
      tmp179Result5 = null;
      if (first.length > 1) {
        const obj21 = { pointerEvents: "none", style: null, children: null };
        const items71 = [memo13, animatedStyle4];
        obj21.style = items71;
        const obj22 = { colors: first1, style: absoluteFill.absoluteFill };
        obj21.children = tmp179(tmp2(5717), obj22);
        tmp179Result5 = tmp179(tmp2(1652).View, obj21);
      }
    }
    items70[3] = tmp179Result5;
    const obj23 = { style: null, pointerEvents: null, children: null };
    const items72 = [memo11, animatedStyle2];
    obj23.style = items72;
    let str2 = "none";
    if (tmp38) {
      str2 = "box-none";
    }
    obj23.pointerEvents = str2;
    let tmp179Result6 = null;
    if (tmp38) {
      const obj24 = { onPress: callback5 };
      tmp179Result6 = tmp179(tmp2(17321), obj24);
    }
    obj23.children = tmp179Result6;
    items70[4] = callback2(tmp2(1652).View, obj23);
    const obj25 = { visible: tmp41, onContentLayout: callback, zIndex: height3, opacityStyle: animatedStyle3, children: tmp178 };
    items70[5] = callback2(tmp2(17271), obj25);
    obj15.children = items70;
    obj14.children = hasRecurringSwipeUpNux(questHomeBounties, obj15);
    return callback2(tmp5(17280).BountyVideoEndAppStoreProvider, obj14);
  }
  const tmp5Result22 = require("module_1652");
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const QuestConstants = fn(6839);
({ BOUNTY_ORB_AMOUNT: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_9 } = QuestConstants);
const BountiesModalConstants = fn(17270);
({ getBountyVideoEndAppStoreSheetHeight: closure_10, getBountyVideoEndPeekClipHeight: closure_11, getBountyVideoEndPeekScale: closure_12, getBountyVideoEndPeekTargetScale: map1 } = BountiesModalConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_14, ComponentActions: closure_15 } = Constants);
const ContentDismissActionType = fn(4988).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const PlatformUtils = fn(1357);
let closure_19 = PlatformUtils.isAndroid();
let c20 = 0;
let c21 = 1;
let c22 = 2;
let c23 = 3;
let c24 = 0.5625;
const PX_8 = nativeDefault.space.PX_8;
let closure_26 = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let items = [{ code: "(function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;})" }];
[tmp7] = items;
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__workletHash = 3579964422615;
isScrollEventInBounds.__initData = tmp7;
const createStyles = fn(5142);
let closure_30 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1 }, recapPage: { position: "absolute", zIndex }, listWrapper: { position: "absolute", zIndex: zIndex2, overflow: "hidden" }, closeButton: { position: "absolute", zIndex: zIndex4 }, peekGradient: { position: "absolute", zIndex: zIndex3 } };
  return obj;
});
let closure_31 = { code: "(function BountiesModalContentScrollTsx2(){let[scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation]=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};})" };
let closure_33 = { code: "(function BountiesModalContentScrollTsx3(event){let[scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds]=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}})" };
let closure_34 = { code: "(function BountiesModalContentScrollTsx4(event){let[isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds]=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));})" };
let closure_35 = { code: "(function BountiesModalContentScrollTsx5(){let[isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue]=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}})" };
let closure_36 = { code: "(function BountiesModalContentScrollTsx6(event){let[showRecapPullZone,scheduleOnRN,handleRecapMomentumEnd,isScrollingInBoundsSharedValue]=this.__closure;if(showRecapPullZone){scheduleOnRN(handleRecapMomentumEnd,event);}isScrollingInBoundsSharedValue.set(false);})" };
let closure_37 = { code: "(function BountiesModalContentScrollTsx7(){let[scrollY,slotHeight,lastBountyIndex]=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);})" };
let closure_38 = { code: "(function BountiesModalContentScrollTsx8(next,prev){let[scheduleOnRN,commitSwipe]=this.__closure;if(next!==prev){scheduleOnRN(commitSwipe,next);}})" };
let closure_39 = { code: "(function BountiesModalContentScrollTsx9(){let[showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON]=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;})" };
let closure_40 = { code: "(function BountiesModalContentScrollTsx10(show,previousShow){let[scheduleOnRN,setShowRecapFooter]=this.__closure;if(show!==previousShow){scheduleOnRN(setShowRecapFooter,show);}})" };
let closure_41 = { code: "(function BountiesModalContentScrollTsx11(){let[showRecapPullZone,scrollY,lastBountyScrollOffset]=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;})" };
let closure_42 = { code: "(function BountiesModalContentScrollTsx12(revealed,previousRevealed){let[scheduleOnRN,setIsRecapPageRevealed]=this.__closure;if(revealed!==previousRevealed){scheduleOnRN(setIsRecapPageRevealed,revealed);}})" };
let closure_43 = { code: "(function BountiesModalContentScrollTsx13(){let[showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON]=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;})" };
let closure_44 = { code: "(function BountiesModalContentScrollTsx14(onTop,previousOnTop){let[scheduleOnRN,setIsRecapPageOnTop]=this.__closure;if(onTop!==previousOnTop){scheduleOnRN(setIsRecapPageOnTop,onTop);}})" };
let closure_45 = { code: "(function BountiesModalContentScrollTsx15(){let[videoEndPeekProgress,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,videoLayout,BOUNTIES_MODAL_FOOTER_HEIGHT]=this.__closure;const progress=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress,videoLayout.width,videoLayout.height);const footerHeight=progress>0?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+clipHeight*scale+footerHeight};})" };
let closure_46 = { code: "(function BountiesModalContentScrollTsx16(){let[videoEndPeekProgress]=this.__closure;return videoEndPeekProgress.get()>0;})" };
let closure_47 = { code: "(function BountiesModalContentScrollTsx17(hide,previousHide){let[scheduleOnRN,setHideListFooterPadding]=this.__closure;if(hide!==previousHide){scheduleOnRN(setHideListFooterPadding,hide);}})" };
let closure_48 = { code: "(function BountiesModalContentScrollTsx18(){let[getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight]=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);})" };
let closure_49 = { code: "(function BountiesModalContentScrollTsx19(){let[interpolate,recapPullProgress,Extrapolation]=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};})" };
let closure_50 = { code: "(function BountiesModalContentScrollTsx20(){let[interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation]=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};})" };
let closure_51 = { code: "(function BountiesModalContentScrollTsx21(){let[scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation]=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};})" };
let closure_52 = { code: "(function BountiesModalContentScrollTsx22(){let[interpolate,scrollY,slotHeight,Extrapolation]=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};})" };
let closure_53 = { code: "(function BountiesModalContentScrollTsx23(){let[recapPullProgress,FOOTER_FADE_END_PROGRESS]=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;})" };
let closure_54 = { code: "(function BountiesModalContentScrollTsx24(pressable,previousPressable){let[scheduleOnRN,setIsCloseButtonPressable]=this.__closure;if(pressable!==previousPressable){scheduleOnRN(setIsCloseButtonPressable,pressable);}})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  ({ bountyId, sourceQuestContent } = arg0);
  return closure_1_17(native.ThemeContextProvider, { theme: shared_ThemeTypes.ThemeTypes.DARK, children: closure_1_17(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }) });
};