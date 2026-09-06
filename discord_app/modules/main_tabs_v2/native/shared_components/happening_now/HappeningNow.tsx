// === Module 16058: HappeningNow ===

// Module 16058 (HappeningNow)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import updateSharedValueIfChanged from "updateSharedValueIfChanged" /* 11354 */;
import HappeningNowAnalytics from "HappeningNowAnalytics" /* 16059 */;
import happeningNowRankingUtils from "happeningNowRankingUtils" /* 16067 */;
import HappeningNowCardPlaceholder from "HappeningNowCardPlaceholder" /* 16069 */;
import HappeningNowCardLiveStageDefault from "HappeningNowCardLiveStage" /* 16070 */;
import HappeningNowCardUnifiedVCDefault from "HappeningNowCardUnifiedVC" /* 16072 */;
import HappeningNowCardActivityDefault from "HappeningNowCardActivity" /* 16073 */;
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity" /* 16085 */;
import HappeningNowCardVoiceDefault from "HappeningNowCardVoice" /* 16086 */;
import HappeningNowCardEventDefault from "HappeningNowCardEvent" /* 16087 */;
import HappeningNowCardActiveChannelDefault from "HappeningNowCardActiveChannel" /* 16089 */;
import HappeningNowCardUserDefault from "HappeningNowCardUser" /* 16090 */;
import HappeningNowActions from "HappeningNowActions" /* 16091 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderCard(kind, fullWidth) {
  if ("placeholder" !== kind.kind) {
    if (!fullWidth.loading) {
      switch (kind.kind) {
        case "live-guild-stage":
          let obj = {};
          const merged = Object.assign(kind);
          const merged1 = Object.assign(fullWidth);
          return jsx(HappeningNowCardLiveStageDefault, {});
        case "guild-event":
          obj = {};
          const merged2 = Object.assign(kind);
          const merged3 = Object.assign(fullWidth);
          return jsx(HappeningNowCardEventDefault, {});
        case "active-channel":
          const obj1 = {};
          const merged4 = Object.assign(kind);
          const merged5 = Object.assign(fullWidth);
          return jsx(HappeningNowCardActiveChannelDefault, {});
        case "user":
          const obj2 = {};
          const merged6 = Object.assign(kind);
          const merged7 = Object.assign(fullWidth);
          return jsx(HappeningNowCardUserDefault, {});
        case "activity":
          const obj3 = {};
          const merged8 = Object.assign(kind);
          const merged9 = Object.assign(fullWidth);
          return jsx(HappeningNowCardActivityDefault, {});
        case "voice":
          const obj4 = {};
          const merged10 = Object.assign(kind);
          const merged11 = Object.assign(fullWidth);
          return jsx(HappeningNowCardVoiceDefault, {});
        case "invite":
          const obj5 = {};
          const merged12 = Object.assign(kind);
          const merged13 = Object.assign(fullWidth);
          return jsx(HappeningNowActions.HappeningNowCardInvite, {});
        case "customize-guild":
          const obj6 = {};
          const merged14 = Object.assign(kind);
          const merged15 = Object.assign(fullWidth);
          return jsx(HappeningNowActions.HappeningNowCardCustomizeGuild, {});
        case "create-channel":
          const obj7 = {};
          const merged16 = Object.assign(kind);
          const merged17 = Object.assign(fullWidth);
          return jsx(HappeningNowActions.HappeningNowCardCreateChannel, {});
        case "student-hub-add-channel":
          const obj8 = {};
          const merged18 = Object.assign(kind);
          const merged19 = Object.assign(fullWidth);
          return jsx(HappeningNowActions.HappeningNowStudentHubAddServer, {});
        case "embedded-activity":
          const obj9 = {};
          const merged20 = Object.assign(kind);
          const merged21 = Object.assign(fullWidth);
          obj9.cardKey = keyExtractor(kind);
          return jsx(HappeningNowCardEmbeddedActivityDefault, {});
        case "unified-vc":
          obj = {};
          const merged22 = Object.assign(kind);
          const merged23 = Object.assign(fullWidth);
          obj.cardKey = keyExtractor(kind);
          return jsx(HappeningNowCardUnifiedVCDefault, {});
        default:
          GlobalUtils.assertNever(kind);
      }
    }
  }
  return jsx(HappeningNowCardPlaceholder.HappeningNowCardPlaceholder, { fullWidth: fullWidth.fullwidth, panelVariant: fullWidth.panelVariant });
}
function keyExtractor(kind) {
  switch (kind.kind) {
    case "placeholder":
      const _HermesInternal7 = HermesInternal;
      return "" + kind.kind + "-" + kind.index;
    case "live-guild-stage":
      const _HermesInternal6 = HermesInternal;
      return "" + kind.kind + "-" + kind.stage.id;
    case "guild-event":
      const _HermesInternal5 = HermesInternal;
      return "" + kind.kind + "-" + kind.event.id;
    case "active-channel":
      const _HermesInternal4 = HermesInternal;
      return "" + kind.kind + "-" + kind.channelId;
    case "user":
      ({ kind: kind3, userId: userId3 } = kind);
      let _HermesInternal3 = HermesInternal;
      let combined = "" + kind3 + "-" + userId3;
      return combined;
    case "activity":
      ({ kind: kind3, userId: userId3 } = kind);
      _HermesInternal3 = HermesInternal;
      combined = "" + kind3 + "-" + userId3;
      return combined;
    case "voice":
      ({ kind: kind2, voiceState } = kind);
      let userId2 = voiceState.channelId;
      if (userId2 == null) {
        userId2 = kind.userId;
      }
      let _HermesInternal2 = HermesInternal;
      let combined1 = "" + kind2 + "-" + userId2;
      return combined1;
    case "unified-vc":
      ({ kind: kind2, voiceState } = kind);
      userId2 = voiceState.channelId;
      if (userId2 == null) {
        userId2 = kind.userId;
      }
      _HermesInternal2 = HermesInternal;
      combined1 = "" + kind2 + "-" + userId2;
      return combined1;
    case "invite":
      return kind.kind;
    case "customize-guild":
      return kind.kind;
    case "create-channel":
      return kind.kind;
    case "student-hub-add-channel":
      return kind.kind;
    case "embedded-activity":
      kind = kind.kind;
      let userId = kind.voiceState.channelId;
      if (userId == null) {
        userId = kind.userId;
      }
      const _HermesInternal = HermesInternal;
      return "" + kind + "-" + userId + "-" + kind.activity.applicationId;
    default:
      GlobalUtils.assertNever(kind);
  }
}
function getItemType(kind) {
  return kind.kind;
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const HappeningNowConstants = fn(15294);
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: closure_7, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: closure_8, HAPPENING_NOW_PANELS_CONTAINER_PADDING, HappeningNowKindIds: closure_9 } = HappeningNowConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const ReanimatedHelperTypes = fn(7074);
const context = noop.createContext(ReanimatedHelperTypes.createFakeSharedValue([]));
const createStyles = fn(4560);
let obj = { containerInner: { paddingLeft: HAPPENING_NOW_PANELS_CONTAINER_PADDING, paddingRight: HAPPENING_NOW_PANELS_CONTAINER_PADDING }, loading: null };
obj = { paddingHorizontal: nativeDefault.space.PX_8, flex: 1 };
obj.loading = obj;
let closure_13 = createStyles.createStyles(obj);
const Gesture = fn(6655).Gesture;
const gesture = Gesture.Native().disallowInterruption(true);
const forwardRefResult = noop.forwardRef((arg0, ref) => {
  let obj = { gesture, children: null };
  obj = { ref };
  const merged = Object.assign(arg0);
  obj.children = <hasOwnProperty ref={ref} />;
  return jsx(LegacyBaseButton.GestureDetector, { ref });
});
forwardRefResult.displayName = "HappeningNowScrollView";
const NativeResult = Gesture.Native();
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx");

export default noop.memo((listRef) => {
  listRef = listRef.listRef;
  let children;
  _slicedToArray = undefined;
  let ref;
  let sharedValue;
  let callback2;
  let tmp = closure_13();
  let obj = listRef(children[14]);
  let isFocused = obj.useIsFocused();
  const tmp7 = _slicedToArray(isFocused(children[15])(listRef.cards, { withoutUserCards: "HermesInternal", guildId: "Array", showMultipleActivitiesPerChannel: null, isFocused }), 2);
  children = tmp7[0];
  _slicedToArray = tmp8;
  let obj1 = ref;
  ref = ref.useRef(0);
  obj = { data: children, isFocused, loading: tmp8 };
  closure_129_0 = obj;
  closure_129_1 = ref;
  isFocused = obj.isFocused;
  closure_129_2 = isFocused;
  closure_129_3 = ref.useRef(obj);
  const tmp11 = isFocused(children[10])(() => {
    const obj = { context: "messages", num_cards: loading.current.data.length, max_viewed_card_index: Math.min(isFocused.current, loading.current.data.length), card_types: null };
    const data = loading.current.data;
    obj.card_types = data.map((item) => closure_1_9[item.kind]);
    const merged = Object.assign(HappeningNowAnalytics.getAffinityProperties(loading.current.data));
    return obj;
  });
  closure_129_4 = tmp11;
  const effect = ref.useEffect(() => {
    closure_3.current = listRef;
  });
  const items = [isFocused, tmp11];
  const effect1 = ref.useEffect(() => {
    let tmp = !first;
    if (!first) {
      const current = loading.current;
      loading = current.loading;
      let tmp3 = !loading;
      if (!loading) {
        tmp3 = current.data.length > 0;
      }
      tmp = tmp3;
    }
    if (tmp) {
      AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_CARDS_VIEWED, ref());
    }
  }, items);
  isFocused(children[13])(() => () => {
    const current = ref.current;
    loading = current.loading;
    let tmp = !loading;
    if (!loading) {
      tmp = current.data.length > 0;
    }
    if (tmp) {
      isFocused(first[12]).track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
      const obj = isFocused(first[12]);
    }
  });
  const items1 = [isFocused, listRef];
  const effect2 = ref.useEffect(() => {
    if (!isFocused) {
      const current = listRef.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
      ref.current = 0;
    }
  }, items1);
  const findIndexResult = children.findIndex((item) => listRef(first[18]).cardSize(item) === callback2);
  c5 = findIndexResult;
  let num = Infinity;
  if (findIndexResult >= 0) {
    num = sharedValue * findIndexResult;
  }
  const items2 = [findIndexResult, num];
  const callback = obj1.useCallback((arg0, arg1) => {
    const sum = arg1 + arg0;
    if (sum < num) {
      let sum1 = sum / React5 | 0;
    } else {
      sum1 = c5 + ((sum - tmp2) / React6 | 0);
    }
    if (sum1 > ref.current) {
      ref.current = sum1;
    }
  }, items2);
  const tmp6Result = _slicedToArray(isFocused(children[19])(num, callback), 2);
  if (tmp6Result[1]) {
    const tmp20 = sharedValue;
  }
  const items3 = [children];
  const memo = obj1.useMemo(() => {
    const result = happeningNowRankingUtils.filterHappeningNowCards(first);
    return happeningNowRankingUtils.sortHappeningNowCards(result);
  }, items3);
  let tmp2Result = tmp2(tmp3[19]);
  const items4 = [tmp7[1]];
  const happeningNowScrollSnapping = tmp2Result.useHappeningNowScrollSnapping(listRef);
  const callback1 = obj1.useCallback((index) => renderCard(index.item, { index: index.index, loading, panelVariant: true }), items4);
  tmp2Result = tmp2(tmp3[20]);
  sharedValue = tmp2Result.useSharedValue([]);
  const items5 = [sharedValue];
  callback2 = obj1.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const result = updateSharedValueIfChanged.updateSharedValueArrayIfChanged(sharedValue, viewableItems.map((item) => closure_1_17(item.item)));
  }, items5);
  const items6 = [callback2];
  const memo1 = obj1.useMemo(() => _mod12.debounce(callback2, 130), items6);
  if (0 === children.length) {
    if (!tmp8) {
      return <num />;
    }
  }
  if (!tmp7[1]) {
    obj = { value: sharedValue, children: null };
    obj1 = { value: tmp9(isFocused(children[17]).ACTIVITIES_HAPPENING_NOW).analyticsLocations, children: null };
    const obj2 = { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: tmp6Result[0], snapToInterval: tmp20, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null };
    const intl = tmp2(tmp3[24]).intl;
    obj2.accessibilityLabel = intl.string(tmp2(tmp3[24]).t["1+boPi"]);
    obj2.contentContainerStyle = tmp.containerInner;
    obj2.data = memo;
    obj2.renderItem = callback1;
    obj2.onViewableItemsChanged = memo1;
    obj2.keyExtractor = keyExtractor;
    obj2.getItemType = getItemType;
    obj1.children = jsx(tmp2(tmp3[23]).FlashList, { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: tmp6Result[0], snapToInterval: tmp20, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null });
    obj.children = jsx(tmp2(tmp3[16]).AnalyticsLocationProvider, { value: tmp9(isFocused(children[17]).ACTIVITIES_HAPPENING_NOW).analyticsLocations, children: null });
    <context.Provider value={sharedValue}>{null}</context.Provider>;
  }
  const obj3 = { style: tmp.loading, children: null };
  children = renderCard(children.length > 0 ? children[0] : { kind: "placeholder", index: 0 }, { index: 0, loading: tmp8, fullwidth: true, panelVariant: true });
  obj3.children = children;
  <num style={tmp.loading}>{null}</num>;
  tmp9 = isFocused(children[16]);
});
export const ViewableHappeningNowCardKeysContext = context;