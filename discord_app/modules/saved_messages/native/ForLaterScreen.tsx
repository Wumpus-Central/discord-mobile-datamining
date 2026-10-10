// === Module 12646: ForLaterScreen ===

// Module 12646 (ForLaterScreen)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4850 */;
import spring from "spring" /* 5378 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6851 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8971 */;
import useSavedMessagesForPageDefault from "useSavedMessagesForPage" /* 12647 */;
import ForLaterMessageCardDefault from "ForLaterMessageCard" /* 12651 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9680 */;

require = fn;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 }, headerBorder: null, cardContainer: null, listContainer: null, loading: null };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerBorder = size;
obj.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
obj.listContainer = { flex: 1 };
obj.loading = { padding: 16 };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const __initData2 = { code: "function ForLaterScreenTsx2(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
const ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterPage(arg0) {
  const cResult = throttledNow(576).c(38);
  ({ type, handleScroll } = arg0);
  let loading = closure_10();
  const obj = throttledNow(576);
  ({ savedMessages, fetchState, loadMore } = useSavedMessagesForPageDefault(type));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SavedMessagesStore];
    const fn = function _() {
      return { overdueReminderCount: SavedMessagesStore.getOverdueMessageReminderCount(), bookmarkCount: SavedMessagesStore.getBookmarkCount() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmp5 = useSavedMessagesForPageDefault(type);
  const stateFromStoresObject = throttledNow(504).useStateFromStoresObject(tmp6, tmp7);
  ({ overdueReminderCount, bookmarkCount } = stateFromStoresObject);
  if (type !== throttledNow(9681).SavedMessageSortTypes.BOOKMARK) {
    bookmarkCount = savedMessages.length;
  }
  const tmpResult = throttledNow(504);
  const analyticsLocations = useAnalyticsLocationsDefault(tmp4(6878).FOR_LATER_POPOUT).analyticsLocations;
  if (cResult[2] === overdueReminderCount) {
    if (cResult[3] === bookmarkCount) {
      if (cResult[4] === type) {
        let tmp11 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[6] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === overdueReminderCount) {
        if (cResult[8] === bookmarkCount) {
          let tmp13 = cResult[9];
        }
        tmp4(8971)(tmp11, tmp12, tmp13);
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const _Date = Date;
          const date = new Date();
          cResult[10] = date;
          let tmp15 = date;
        } else {
          tmp15 = cResult[10];
        }
        [throttledNow, importDefault] = noop.useState(tmp15);
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function w() {
            const interval = setInterval(() => closure_1_1(new Date()), closure_1(dependencyMap[18]).Millis.MINUTE);
            return () => {
              clearInterval(closure_0);
            };
          };
          const items1 = [];
          cResult[11] = fn2;
          cResult[12] = items1;
          let tmp24 = items1;
          let tmp23 = fn2;
        } else {
          tmp23 = cResult[11];
          tmp24 = cResult[12];
        }
        const effect = noop.useEffect(tmp23, tmp24);
        if (cResult[13] !== throttledNow) {
          class P {
            constructor(arg0) {
              obj = { savedMessage: arg0.item, throttledNow: closure_0 };
              return jsx(closure_1(closure_2[19]), obj);
            }
          }
          cResult[13] = throttledNow;
          cResult[14] = P;
        } else {
          class P {
            constructor(arg0) {
              obj = { savedMessage: arg0.item, throttledNow: closure_0 };
              return jsx(closure_1(closure_2[19]), obj);
            }
          }
        }
        const tmp27 = fetchState === throttledNow(9681).BookmarksFetchState.LOADING;
        if (0 === savedMessages.length) {
          class P {
            constructor(arg0) {
              obj = { savedMessage: arg0.item, throttledNow: closure_0 };
              return jsx(closure_1(closure_2[19]), obj);
            }
          }
          if (cResult[15] !== loading.loading) {
            class P {
              constructor(arg0) {
                obj = { savedMessage: arg0.item, throttledNow: closure_0 };
                return jsx(closure_1(closure_2[19]), obj);
              }
            }
            const obj3 = { style: loading.loading };
            const tmp33 = closure_8(closure_5, obj3);
            loading = loading.loading;
            cResult[15] = loading;
            cResult[16] = tmp33;
          } else {
            class P {
              constructor(arg0) {
                obj = { savedMessage: arg0.item, throttledNow: closure_0 };
                return jsx(closure_1(closure_2[19]), obj);
              }
            }
          }
        } else {
          class P {
            constructor(arg0) {
              obj = { savedMessage: arg0.item, throttledNow: closure_0 };
              return jsx(closure_1(closure_2[19]), obj);
            }
          }
          let tmp29 = null;
          if (tmp27) {
            class P {
              constructor(arg0) {
                obj = { savedMessage: arg0.item, throttledNow: closure_0 };
                return jsx(closure_1(closure_2[19]), obj);
              }
            }
            const obj4 = { style: loading.loading };
            tmp29 = closure_8(closure_5, obj4);
          }
          cResult[22] = tmp27;
          cResult[23] = loading.loading;
          cResult[24] = tmp29;
        }
      }
      const items2 = [bookmarkCount, overdueReminderCount];
      cResult[7] = overdueReminderCount;
      cResult[8] = bookmarkCount;
      cResult[9] = items2;
      tmp13 = items2;
    }
  }
  const obj6 = { type: throttledNow(1273).ImpressionTypes.MODAL, name: throttledNow(1273).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: { tab_type: type, total_count: bookmarkCount, overdue_count: overdueReminderCount } };
  cResult[2] = overdueReminderCount;
  cResult[3] = bookmarkCount;
  cResult[4] = type;
  cResult[5] = obj6;
  tmp11 = obj6;
  const tmp4Result = useAnalyticsLocationsDefault;
}) : (function ForLaterPage(type) {
  type = type.type;
  throttledNow = undefined;
  importDefault = undefined;
  let loading = closure_10();
  const tmp3 = useSavedMessagesForPageDefault(type);
  ({ savedMessages, fetchState } = tmp3);
  const items = [SavedMessagesStore];
  const stateFromStoresObject = throttledNow(504).useStateFromStoresObject(items, () => ({ overdueReminderCount: SavedMessagesStore.getOverdueMessageReminderCount(), bookmarkCount: SavedMessagesStore.getBookmarkCount() }));
  ({ overdueReminderCount, bookmarkCount } = stateFromStoresObject);
  if (type !== throttledNow(9681).SavedMessageSortTypes.BOOKMARK) {
    bookmarkCount = savedMessages.length;
  }
  const tmp6 = fetchState === throttledNow(9681).BookmarksFetchState.LOADING;
  const obj = throttledNow(504);
  const analyticsLocations = useAnalyticsLocationsDefault(tmp(6878).FOR_LATER_POPOUT).analyticsLocations;
  const obj2 = { type: null, name: null, properties: null };
  const tmpResult = useAnalyticsLocationsDefault;
  obj2.type = throttledNow(1273).ImpressionTypes.MODAL;
  obj2.name = throttledNow(1273).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj2.properties = { tab_type: type, total_count: bookmarkCount, overdue_count: overdueReminderCount };
  const items1 = [bookmarkCount, overdueReminderCount];
  useTrackImpressionDefault(obj2, {}, items1);
  const tmpResult2 = useTrackImpressionDefault;
  [throttledNow, importDefault] = noop.useState(new Date());
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => closure_1_1(new Date()), closure_1(dependencyMap[18]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === savedMessages.length) {
    if (!tmp6) {
      if (fetchState !== tmp4(9681).BookmarksFetchState.LOADED_HAS_MORE) {
        const obj3 = { value: analyticsLocations, children: null };
        const obj4 = { type };
        obj3.children = closure_8(tmp(12671), obj4);
        let tmp18 = closure_8(tmp4(6851).AnalyticsLocationProvider, obj3);
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
    obj7.children = closure_8(tmp4(8624).FlashList, obj8);
    obj6.children = closure_8(closure_6, obj7);
    return closure_8(tmp4(6851).AnalyticsLocationProvider, obj6);
  }
  const date = new Date();
});
size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterScreen(type) {
  const cResult = sharedValue(576).c(12);
  type = type.type;
  const tmp4 = closure_10();
  let obj = sharedValue(576);
  const tmp = sharedValue;
  sharedValue = sharedValue(4850).useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function o(nativeEvent) {
      let num = 0;
      if (nativeEvent.nativeEvent.contentOffset.y > 8) {
        num = 1;
      }
      const result = sharedValue.set(spring.withSpring(num));
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const obj2 = sharedValue(4850);
  class S {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  S.__closure = { borderOpacity: sharedValue };
  S.__workletHash = 16693192032676;
  S.__initData = __initData;
  const animatedStyle = tmp(4850).useAnimatedStyle(S);
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp4.headerBorder) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      if (cResult[6] === type) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4.container) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === tmp10) {
            let tmp14 = cResult[11];
          }
          return tmp14;
        }
      }
      const obj3 = { style: tmp4.container, children: null };
      const items = [tmp8, tmp10];
      obj3.children = items;
      const tmp17 = closure_9(closure_6, obj3);
      cResult[8] = tmp4.container;
      cResult[9] = tmp8;
      class S {
        constructor() {
          obj = { opacity: closure_0.get() };
          return obj;
        }
      }
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { type, handleScroll: tmp6 };
    const tmp13 = closure_8(closure_14, obj4);
    cResult[5] = tmp6;
    cResult[6] = type;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const obj5 = { style: null };
  const items1 = [tmp4.headerBorder, animatedStyle];
  obj5.style = items1;
  const tmp9 = closure_8(ReanimatedRexportDefault.View, obj5);
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.headerBorder;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const tmpResult = tmp(4850);
}) : (function ForLaterScreen(type) {
  let sharedValue;
  const tmp = closure_10();
  sharedValue = sharedValue(4850).useSharedValue(0);
  const items = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num));
  }, items);
  let obj = sharedValue(4850);
  const fn = function n() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 14855800666151;
  fn.__initData = __initData2;
  const obj3 = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(4850).useAnimatedStyle(fn);
  const obj4 = { style: null };
  const items1 = [tmp.headerBorder, animatedStyle];
  obj4.style = items1;
  const items2 = [closure_8(ReanimatedRexportDefault.View, obj4), closure_8(closure_14, { type: type.type, handleScroll: callback })];
  obj3.children = items2;
  return closure_9(closure_6, obj3);
}));