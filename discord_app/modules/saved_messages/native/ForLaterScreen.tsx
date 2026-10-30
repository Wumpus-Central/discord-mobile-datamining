// === Module 11134: ForLaterScreen ===

// Module 11134 (ForLaterScreen)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6023 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import useSavedMessagesForPageDefault from "useSavedMessagesForPage" /* 11135 */;
import ForLaterMessageCardDefault from "ForLaterMessageCard" /* 11139 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10171 */;

require = fn;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
function ForLaterPage(type) {
  type = type.type;
  throttledNow = undefined;
  importDefault = undefined;
  let loading = closure_10();
  const tmp3 = useSavedMessagesForPageDefault(type);
  ({ savedMessages, fetchState } = tmp3);
  const items = [SavedMessagesStore];
  const stateFromStoresObject = throttledNow(504).useStateFromStoresObject(items, () => ({ overdueReminderCount: SavedMessagesStore.getOverdueMessageReminderCount(), bookmarkCount: SavedMessagesStore.getBookmarkCount() }));
  ({ overdueReminderCount, bookmarkCount } = stateFromStoresObject);
  if (type !== throttledNow(10172).SavedMessageSortTypes.BOOKMARK) {
    bookmarkCount = savedMessages.length;
  }
  const tmp6 = fetchState === throttledNow(10172).BookmarksFetchState.LOADING;
  const obj = throttledNow(504);
  const analyticsLocations = useAnalyticsLocationsDefault(tmp(7345).FOR_LATER_POPOUT).analyticsLocations;
  const obj2 = { type: null, name: null, properties: null };
  const tmpResult = useAnalyticsLocationsDefault;
  obj2.type = throttledNow(1261).ImpressionTypes.MODAL;
  obj2.name = throttledNow(1261).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj2.properties = { tab_type: type, total_count: bookmarkCount, overdue_count: overdueReminderCount };
  const items1 = [bookmarkCount, overdueReminderCount];
  useTrackImpressionDefault(obj2, {}, items1);
  const tmpResult2 = useTrackImpressionDefault;
  [throttledNow, importDefault] = noop.useState(new Date());
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => closure_1_1(new Date()), closure_1(dependencyMap[16]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === savedMessages.length) {
    if (!tmp6) {
      if (fetchState !== tmp4(10172).BookmarksFetchState.LOADED_HAS_MORE) {
        const obj3 = { value: analyticsLocations, children: null };
        const obj4 = { type };
        obj3.children = closure_8(tmp(11159), obj4);
        let tmp18 = closure_8(tmp4(7320).AnalyticsLocationProvider, obj3);
      }
    }
    const obj5 = { style: null };
    loading = loading.loading;
    obj5.style = loading;
    tmp18 = closure_8(closure_5, obj5);
  } else {
    const obj6 = { value: analyticsLocations, children: null };
    const obj7 = { style: loading.listContainer, children: null };
    const obj8 = { data: savedMessages, renderItem: tmp14, contentContainerStyle: loading.cardContainer, keyExtractor, onScroll: type.handleScroll, onEndReached: tmp3.loadMore, ListFooterComponent: null };
    let tmp22Result = null;
    if (tmp6) {
      const obj9 = { style: loading.loading };
      tmp22Result = closure_8(closure_5, obj9);
    }
    obj8.ListFooterComponent = tmp22Result;
    obj7.children = closure_8(tmp4(7288).FlashList, obj8);
    obj6.children = closure_8(closure_6, obj7);
    return closure_8(tmp4(7320).AnalyticsLocationProvider, obj6);
  }
  const date = new Date();
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 }, headerBorder: null, cardContainer: null, listContainer: null, loading: null };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerBorder = size;
obj.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
obj.listContainer = { flex: 1 };
obj.loading = { padding: 16 };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default noop.memo(function ForLaterScreen(type) {
  let sharedValue;
  const tmp = closure_10();
  sharedValue = sharedValue(5090).useSharedValue(0);
  const items = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num));
  }, items);
  let obj = sharedValue(5090);
  const fn = function n() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 16693192032676;
  fn.__initData = __initData;
  const obj3 = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(5090).useAnimatedStyle(fn);
  const obj4 = { style: null };
  const items1 = [tmp.headerBorder, animatedStyle];
  obj4.style = items1;
  const items2 = [closure_8(ReanimatedRexportDefault.View, obj4), closure_8(ForLaterPage, { type: type.type, handleScroll: callback })];
  obj3.children = items2;
  return closure_9(closure_6, obj3);
});