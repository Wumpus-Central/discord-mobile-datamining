// discord_app/modules/saved_messages/native/ForLaterScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../_runtime/metro/01652__.js";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import useSavedMessagesForPageDefault from "../useSavedMessagesForPage.tsx";
import ForLaterMessageCardDefault from "ForLaterMessageCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SavedMessagesStore from "../SavedMessagesStore.tsx";

const require = globalThis.__r;

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
  items = [SavedMessagesStore];
  const stateFromStoresObject = throttledNow(504).useStateFromStoresObject(items, () => ({
    overdueReminderCount: SavedMessagesStore.getOverdueMessageReminderCount(),
    bookmarkCount: SavedMessagesStore.getBookmarkCount(),
  }));
  ({ overdueReminderCount, bookmarkCount } = stateFromStoresObject);
  if (type !== throttledNow(10370).SavedMessageSortTypes.BOOKMARK) {
    bookmarkCount = savedMessages.length;
  }
  const tmp6 = fetchState === throttledNow(10370).BookmarksFetchState.LOADING;
  const obj = throttledNow(504);
  const analyticsLocations = useAnalyticsLocationsDefault(tmp(7487).FOR_LATER_POPOUT).analyticsLocations;
  const obj2 = { type: null, name: null, properties: null };
  const tmpResult = useAnalyticsLocationsDefault;
  obj2.type = throttledNow(1260).ImpressionTypes.MODAL;
  obj2.name = throttledNow(1260).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj2.properties = { tab_type: type, total_count: bookmarkCount, overdue_count: overdueReminderCount };
  const items1 = [bookmarkCount, overdueReminderCount];
  useTrackImpressionDefault(obj2, {}, items1);
  const tmpResult2 = useTrackImpressionDefault;
  [throttledNow, importDefault] = noop.useState(new Date());
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => closure_1_1(new Date()), closure_1(dependencyMap[17]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === savedMessages.length) {
    if (!tmp6) {
      if (fetchState !== tmp4(10370).BookmarksFetchState.LOADED_HAS_MORE) {
        const obj3 = { value: analyticsLocations, children: null };
        const obj4 = { type };
        obj3.children = closure_8(tmp(11365), obj4);
        let tmp18 = closure_8(tmp4(7462).AnalyticsLocationProvider, obj3);
      }
    }
    const obj5 = { style: null };
    loading = loading.loading;
    obj5.style = loading;
    tmp18 = closure_8(closure_5, obj5);
  } else {
    const obj6 = { value: analyticsLocations, children: null };
    const obj7 = { style: loading.listContainer, children: null };
    const obj8 = {
      data: savedMessages,
      renderItem: tmp14,
      contentContainerStyle: loading.cardContainer,
      keyExtractor,
      onScroll: type.handleScroll,
      onEndReached: tmp3.loadMore,
      ListFooterComponent: null,
    };
    let tmp22Result = null;
    if (tmp6) {
      const obj9 = { style: loading.loading };
      tmp22Result = closure_8(closure_5, obj9);
    }
    obj8.ListFooterComponent = tmp22Result;
    obj7.children = closure_8(tmp4(7430).FlashList, obj8);
    obj6.children = closure_8(closure_6, obj7);
    return closure_8(tmp4(7462).AnalyticsLocationProvider, obj6);
  }
  const date = new Date();
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5141);
let obj = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 },
  headerBorder: null,
  cardContainer: null,
  listContainer: null,
  loading: null,
};
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerBorder = size;
obj.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
obj.listContainer = { flex: 1 };
obj.loading = { padding: 16 };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = {
  code: "(function ForLaterScreenTsx1(){let[borderOpacity]=this.__closure;return{opacity:borderOpacity.get()};})",
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default noop.memo(function ForLaterScreen(type) {
  _require = undefined;
  const tmp = closure_10();
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  _require = sharedValue;
  items = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = _undefined.set(spring_spring.withSpring(num, springPresets.Reanimated3DefaultSpringConfig));
  }, items);
  let obj = require("../../../../_runtime/metro/01652__.js");
  const items1 = [closure_11, sharedValue];
  _require = undefined;
  [tmp5, tmp6] = items1;
  class ForLaterScreenTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  ForLaterScreenTsx1.__closure = items2;
  ForLaterScreenTsx1.__workletHash = 10104767508797;
  ForLaterScreenTsx1.__initData = tmp5;
  const obj3 = { style: tmp.container, children: null };
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(ForLaterScreenTsx1);
  const obj4 = { style: null };
  const items3 = [tmp.headerBorder, animatedStyle];
  obj4.style = items3;
  const items4 = [
    closure_8(_modDef1652.View, obj4),
    closure_8(ForLaterPage, { type: type.type, handleScroll: callback }),
  ];
  obj3.children = items4;
  return closure_9(closure_6, obj3);
});
