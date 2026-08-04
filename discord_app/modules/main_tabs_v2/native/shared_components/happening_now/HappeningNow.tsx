// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx
import HappeningNowCardCreateChannel from "HappeningNowCardCreateChannel";
import importAllResult from "useHappeningNowScrollBehavior";
import get_ActivityIndicator from "QUICK_SWITCHER";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { AnalyticEvents } from "ME";
import { jsx } from "u";
import createFakeSharedValue from "createFakeSharedValue";
import createCacheKey from "createCacheKey";
import { Gesture } from "Directions";

let HAPPENING_NOW_PANELS_CONTAINER_PADDING;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function renderCard(kind, fullWidth) {
  if ("placeholder" !== kind.kind) {
    if (!fullWidth.loading) {
      kind = kind.kind;
    }
  }
  return jsx(require(15084) /* HappeningNowCardPlaceholder */.HappeningNowCardPlaceholder, { fullWidth: fullWidth.fullwidth, panelVariant: fullWidth.panelVariant });
}
function keyExtractor(voiceState) {
  let kind;
  let kind2;
  ({ kind, kind: kind2 } = voiceState);
  let userId = voiceState.voiceState.channelId;
  if (userId == null) {
    userId = voiceState.userId;
  }
  return "" + kind2 + "-" + userId + "-" + voiceState.activity.applicationId;
}
function getItemType(kind) {
  return kind.kind;
}
let c4 = importAllResult;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: error, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: metroImportAll, HAPPENING_NOW_PANELS_CONTAINER_PADDING, HappeningNowKindIds: c9 } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const context = importAllResult.createContext(createFakeSharedValue.createFakeSharedValue([]));
let obj = { containerInner: { paddingLeft: HAPPENING_NOW_PANELS_CONTAINER_PADDING, paddingRight: HAPPENING_NOW_PANELS_CONTAINER_PADDING }, loading: null };
obj = { paddingHorizontal: require("Themes").space.PX_8, flex: 1 };
obj[1] = obj;
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = Gesture.Native().disallowInterruption(true);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let obj = { gesture: closure_14, children: null };
  obj = { ref };
  const merged = Object.assign(arg0);
  obj[1] = <closure_5 ref={arg1} />;
  return jsx(require(5277) /* Directions */.GestureDetector, { ref });
});
forwardRefResult.displayName = "HappeningNowScrollView";
const NativeResult = Gesture.Native();
const memoResult = importAllResult.memo((listRef) => {
  listRef = listRef.listRef;
  let obj = listRef;
  let ref;
  let isFocused;
  let callback;
  let importAllResult;
  let c5;
  let num;
  let sharedValue;
  let callback2;
  let tmp = callback2();
  obj = obj(isFocused[14]);
  isFocused = obj.useIsFocused();
  ref = isFocused;
  obj = { withoutUserCards: "HermesInternal", guildId: "Array", showMultipleActivitiesPerChannel: "P", isFocused: "\u{1F3CA}" };
  obj[3] = isFocused;
  const tmp7 = callback(ref(isFocused[15])(listRef.cards, obj), 2);
  let first = tmp7[0];
  isFocused = first;
  callback = tmp8;
  let obj2 = importAllResult;
  ref = importAllResult.useRef(0);
  importAllResult = ref;
  obj = { data: first, isFocused, loading: tmp8 };
  isFocused = undefined;
  callback = undefined;
  importAllResult = undefined;
  isFocused = obj.isFocused;
  callback = importAllResult.useRef(obj);
  const tmp11 = ref(isFocused[10])(() => {
    const obj = { context: "messages", num_cards: HappeningNowCardCreateChannel.current.data.length, max_viewed_card_index: Math.min(ref.current, HappeningNowCardCreateChannel.current.data.length), card_types: data.map((arg0) => table[arg0.kind]) };
    data = HappeningNowCardCreateChannel.current.data;
    const merged = Object.assign(obj(isFocused[11]).getAffinityProperties(HappeningNowCardCreateChannel.current.data));
    return obj;
  });
  importAllResult = tmp11;
  const effect = importAllResult.useEffect(() => {
    HappeningNowCardCreateChannel.current = obj;
  });
  const items = [isFocused, tmp11];
  const effect1 = importAllResult.useEffect(() => {
    let tmp = !isFocused;
    if (!isFocused) {
      const current = HappeningNowCardCreateChannel.current;
      const loading = current.loading;
      let tmp3 = !loading;
      if (!loading) {
        tmp3 = current.data.length > 0;
      }
      tmp = tmp3;
    }
    if (tmp) {
      ref(isFocused[12]).track(outer1_10.ACTIVITY_CARDS_VIEWED, _undefined());
      const obj = ref(isFocused[12]);
    }
  }, items);
  ref(isFocused[13])(() => () => {
    const current = ref.current;
    const loading = current.loading;
    let tmp = !loading;
    if (!loading) {
      tmp = current.data.length > 0;
    }
    if (tmp) {
      outer1_1(outer1_2[12]).track(outer1_10.ACTIVITY_CARDS_VIEWED, callback());
      const obj = outer1_1(outer1_2[12]);
    }
  });
  const items1 = [isFocused, listRef];
  const effect2 = importAllResult.useEffect(() => {
    if (!ref) {
      const current = obj.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
      c4.current = 0;
    }
  }, items1);
  const findIndexResult = first.findIndex((arg0) => {
    obj = obj(isFocused[18]);
    return obj.cardSize(arg0) === callback2;
  });
  c5 = findIndexResult;
  num = Infinity;
  if (findIndexResult >= 0) {
    num = sharedValue * findIndexResult;
  }
  const items2 = [findIndexResult, num];
  callback = obj2.useCallback((arg0, arg1) => {
    const sum = arg1 + arg0;
    if (sum < num) {
      let sum1 = sum / sharedValue | 0;
    } else {
      sum1 = c5 + ((sum - tmp2) / callback2 | 0);
    }
    if (sum1 > _undefined.current) {
      _undefined.current = sum1;
    }
  }, items2);
  const tmp6Result = callback(ref(isFocused[19])(num, callback), 2);
  if (tmp6Result[1]) {
    const tmp20 = sharedValue;
  }
  const items3 = [first];
  const memo = obj2.useMemo(() => {
    obj = obj(isFocused[18]);
    const result = obj.filterHappeningNowCards(isFocused);
    return obj(isFocused[18]).sortHappeningNowCards(result);
  }, items3);
  let tmp2Result = tmp2(tmp3[19]);
  const items4 = [tmp7[1]];
  const happeningNowScrollSnapping = tmp2Result.useHappeningNowScrollSnapping(listRef);
  const callback1 = obj2.useCallback((index) => outer1_16(index.item, { index: index.index, loading: HappeningNowCardCreateChannel, panelVariant: true }), items4);
  tmp2Result = tmp2(tmp3[20]);
  sharedValue = tmp2Result.useSharedValue([]);
  const items5 = [sharedValue];
  callback2 = obj2.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    obj = obj(isFocused[21]);
    const result = obj.updateSharedValueArrayIfChanged(sharedValue, viewableItems.map((item) => callback(item.item)));
  }, items5);
  const items6 = [callback2];
  const memo1 = obj2.useMemo(() => {
    obj = obj(isFocused[22]);
    return obj.debounce(callback2, 130);
  }, items6);
  if (0 === first.length) {
    if (!tmp8) {
      return <num />;
    }
  }
  if (!tmp7[1]) {
    const obj1 = { value: null, children: null };
    obj1[0] = sharedValue;
    obj2 = { value: null, children: null };
    obj2[0] = tmp9(ref(isFocused[17]).ACTIVITIES_HAPPENING_NOW).analyticsLocations;
    const obj3 = { ref: null, horizontal: true, renderScrollComponent: null, decelerationRate: "fast", onScroll: null, snapToInterval: null, snapToOffsets: null, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null };
    obj3[0] = listRef;
    obj3[2] = closure_15;
    obj3[4] = tmp6Result[0];
    obj3[5] = tmp20;
    obj3[6] = happeningNowScrollSnapping;
    const intl = tmp2(tmp3[24]).intl;
    obj3[8] = intl.string(tmp2(tmp3[24]).t["1+boPi"]);
    obj3[9] = tmp.containerInner;
    obj3[10] = memo;
    obj3[11] = callback1;
    obj3[12] = memo1;
    obj3[13] = keyExtractor;
    obj3[14] = getItemType;
    obj2[1] = tmp29(tmp2(tmp3[23]).FlashList, obj3);
    obj1[1] = tmp29(tmp2(tmp3[16]).AnalyticsLocationProvider, obj2);
    tmp29(context.Provider, obj1);
  }
  const obj4 = { style: tmp.loading, children: null };
  first = renderCard(first.length > 0 ? first[0] : { kind: "placeholder", index: 0 }, { index: 0, loading: tmp8, fullwidth: true, panelVariant: true });
  obj4[1] = first;
  <num style={tmp.loading}>{null}</num>;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx");

export default memoResult;
export const ViewableHappeningNowCardKeysContext = context;