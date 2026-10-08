// === Module 12659: ForLaterScreen ===

// Module 12659 (ForLaterScreen)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4810 */;
import spring from "spring" /* 5374 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8941 */;
import useSavedMessagesForPageDefault from "useSavedMessagesForPage" /* 12660 */;
import ForLaterMessageCardDefault from "ForLaterMessageCard" /* 12663 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9632 */;

const ForLaterIntroDefault = tmp2(12683);
require = fn;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 }, headerBorder: null, cardContainer: null, listContainer: null };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerBorder = size;
obj.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
obj.listContainer = { flex: 1 };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const __initData2 = { code: "function ForLaterScreenTsx2(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
const ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterPage(arg0) {
  let AnalyticsLocationProvider = throttledNow;
  let tmp = dependencyMap;
  const cResult = throttledNow(576).c(31);
  ({ type, handleScroll } = arg0);
  const tmp3 = closure_9();
  const arr = useSavedMessagesForPageDefault(type);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SavedMessagesStore];
    const fn = function _() {
      return overdueMessageReminderCount.getOverdueMessageReminderCount();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const result = AnalyticsLocationProvider(504);
  const stateFromStores = result.useStateFromStores(tmp5, tmp6);
  const obj = throttledNow(576);
  const analyticsLocations = useAnalyticsLocationsDefault(tmp4(6865).FOR_LATER_POPOUT).analyticsLocations;
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === arr.length) {
      if (cResult[4] === type) {
        let tmp10 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[6] = obj2;
        let tmp11 = obj2;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === arr.length) {
          let tmp12 = cResult[9];
        }
        tmp4(8941)(tmp10, tmp11, tmp12);
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const _Date = Date;
          const date = new Date();
          cResult[10] = date;
          let tmp14 = date;
        } else {
          tmp14 = cResult[10];
        }
        [throttledNow, importDefault] = noop.useState(tmp14);
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              closure_0 = setInterval(() => closure_1_1(new Date()), closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          const items1 = [];
          cResult[11] = F;
          cResult[12] = items1;
          let tmp23 = items1;
        } else {
          class F {
            constructor() {
              closure_0 = setInterval(() => closure_1_1(new Date()), closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          tmp23 = cResult[12];
        }
        const effect = noop.useEffect(F, tmp23);
        if (cResult[13] !== throttledNow) {
          class F {
            constructor() {
              closure_0 = setInterval(() => closure_1_1(new Date()), closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          cResult[13] = throttledNow;
          cResult[14] = tmp26;
        } else {
          class F {
            constructor() {
              closure_0 = setInterval(() => closure_1_1(new Date()), closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
        }
        if (0 === arr.length) {
          class F {
            constructor() {
              closure_0 = setInterval(() => closure_1_1(new Date()), closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          if (cResult[17] === analyticsLocations) {
            class F {
              constructor() {
                closure_0 = setInterval(() => closure_1_1(new Date()), closure_1(closure_1_2[17]).Millis.MINUTE);
                return () => {
                  clearInterval(closure_0);
                };
              }
            }
          }
          AnalyticsLocationProvider = AnalyticsLocationProvider(6841).AnalyticsLocationProvider;
          const obj3 = { value: analyticsLocations, children: tmp31 };
          tmp = closure_7(AnalyticsLocationProvider, obj3);
          cResult[17] = analyticsLocations;
          cResult[18] = tmp31;
          cResult[19] = tmp;
        } else {
          class F {
            constructor() {
              closure_0 = setInterval(() => closure_1_1(new Date()), closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          const obj4 = { data: arr, renderItem: tmp26, contentContainerStyle: tmp3.cardContainer, keyExtractor, onScroll: handleScroll };
          const tmp30 = closure_7(AnalyticsLocationProvider(8600).FlashList, obj4);
          cResult[20] = handleScroll;
          cResult[21] = tmp26;
          cResult[22] = arr;
          cResult[23] = tmp3.cardContainer;
          cResult[24] = tmp30;
        }
      }
      const items2 = [arr.length, stateFromStores];
      cResult[7] = stateFromStores;
      cResult[8] = arr.length;
      cResult[9] = items2;
      tmp12 = items2;
    }
  }
  const obj6 = { type: AnalyticsLocationProvider(1272).ImpressionTypes.MODAL, name: AnalyticsLocationProvider(1272).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: { tab_type: type, total_count: arr.length, overdue_count: stateFromStores } };
  cResult[2] = stateFromStores;
  cResult[3] = arr.length;
  cResult[4] = type;
  cResult[5] = obj6;
  tmp10 = obj6;
  const tmp4Result = useAnalyticsLocationsDefault;
}) : (function ForLaterPage(type) {
  type = type.type;
  throttledNow = undefined;
  importDefault = undefined;
  const tmp = closure_9();
  const arr = useSavedMessagesForPageDefault(type);
  const items = [SavedMessagesStore];
  const stateFromStores = throttledNow(504).useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  const obj = throttledNow(504);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.FOR_LATER_POPOUT).analyticsLocations;
  const obj2 = { type: null, name: null, properties: null };
  obj2.type = throttledNow(1272).ImpressionTypes.MODAL;
  obj2.name = throttledNow(1272).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj2.properties = { tab_type: type, total_count: arr.length, overdue_count: stateFromStores };
  const items1 = [arr.length, stateFromStores];
  useTrackImpressionDefault(obj2, {}, items1);
  [throttledNow, importDefault] = noop.useState(new Date());
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => closure_1_1(new Date()), closure_1(dependencyMap[17]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === arr.length) {
    const obj3 = { value: analyticsLocations, children: null };
    const obj4 = { type };
    obj3.children = closure_7(ForLaterIntroDefault, obj4);
    let tmp15 = closure_7(tmp4(6841).AnalyticsLocationProvider, obj3);
  } else {
    const obj5 = { value: analyticsLocations, children: null };
    const obj6 = { style: tmp.listContainer, children: null };
    const obj7 = { data: arr, renderItem: tmp13, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: type.handleScroll };
    obj6.children = closure_7(tmp4(8600).FlashList, obj7);
    obj5.children = closure_7(View, obj6);
    tmp15 = closure_7(tmp4(6841).AnalyticsLocationProvider, obj5);
  }
  return tmp15;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterScreen(type) {
  const cResult = sharedValue(576).c(12);
  type = type.type;
  const tmp4 = closure_9();
  let obj = sharedValue(576);
  const tmp = sharedValue;
  sharedValue = sharedValue(4810).useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function n(nativeEvent) {
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
  const obj2 = sharedValue(4810);
  class S {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  S.__closure = { borderOpacity: sharedValue };
  S.__workletHash = 16693192032676;
  S.__initData = __initData;
  const animatedStyle = tmp(4810).useAnimatedStyle(S);
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
      const tmp17 = closure_8(View, obj3);
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
    const tmp13 = closure_7(closure_13, obj4);
    cResult[5] = tmp6;
    cResult[6] = type;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const obj5 = { style: null };
  const items1 = [tmp4.headerBorder, animatedStyle];
  obj5.style = items1;
  const tmp9 = closure_7(ReanimatedRexportDefault.View, obj5);
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.headerBorder;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const tmpResult = tmp(4810);
}) : (function ForLaterScreen(type) {
  let sharedValue;
  const tmp = closure_9();
  sharedValue = sharedValue(4810).useSharedValue(0);
  const items = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num));
  }, items);
  let obj = sharedValue(4810);
  const fn = function l() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 14855800666151;
  fn.__initData = __initData2;
  const obj3 = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(4810).useAnimatedStyle(fn);
  const obj4 = { style: null };
  const items1 = [tmp.headerBorder, animatedStyle];
  obj4.style = items1;
  const items2 = [closure_7(ReanimatedRexportDefault.View, obj4), closure_7(closure_13, { type: type.type, handleScroll: callback })];
  obj3.children = items2;
  return closure_8(View, obj3);
}));