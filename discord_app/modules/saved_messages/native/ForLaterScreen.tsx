// === Module 13123: ForLaterScreen ===

// Module 13123 (ForLaterScreen)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8422 */;
import useSavedMessagesForPageDefault from "useSavedMessagesForPage" /* 13124 */;
import ForLaterMessageCardDefault from "ForLaterMessageCard" /* 13126 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11283 */;

require = fn;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ForLaterScreen = "ForLaterScreen";
const createStyles = fn(4890);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 }, headerBorder: null, cardContainer: null, listContainer: null };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerBorder = size;
obj.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
obj.listContainer = { flex: 1 };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const __initData2 = { code: "function ForLaterScreenTsx2(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
const ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let AnalyticsLocationProvider = throttledNow;
  let tmp = dependencyMap;
  const cResult = throttledNow(576).c(40);
  ({ type, handleScroll } = arg0);
  const tmp3 = closure_10();
  const arr = useSavedMessagesForPageDefault(type);
  const obj = throttledNow(576);
  const tmp5 = type === throttledNow(7495).SavedMessageSortTypes.REMINDER;
  const forLaterLimit = throttledNow(7485).useForLaterLimit(ForLaterScreen, tmp5);
  const obj2 = throttledNow(7485);
  const isForLaterLimitUpgradable = throttledNow(7485).useIsForLaterLimitUpgradable(ForLaterScreen);
  let tmp8 = isForLaterLimitUpgradable;
  if (isForLaterLimitUpgradable) {
    tmp8 = forLaterLimit > 0;
  }
  if (tmp8) {
    tmp8 = arr.length >= forLaterLimit;
  }
  let tmp9 = isForLaterLimitUpgradable;
  if (isForLaterLimitUpgradable) {
    tmp9 = arr.length > 0;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SavedMessagesStore];
    const fn = function p() {
      return overdueMessageReminderCount.getOverdueMessageReminderCount();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const result = AnalyticsLocationProvider(504);
  const stateFromStores = result.useStateFromStores(tmp10, tmp11);
  const obj3 = throttledNow(7485);
  const analyticsLocations = useAnalyticsLocationsDefault(tmp4(6681).FOR_LATER_POPOUT).analyticsLocations;
  let tmp15 = tmp9;
  if (tmp9) {
    tmp15 = !tmp8;
  }
  let tmp16 = tmp9;
  if (tmp9) {
    tmp16 = tmp8;
  }
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === arr.length) {
      if (cResult[4] === tmp15) {
        if (cResult[5] === tmp16) {
          if (cResult[6] === type) {
            let tmp17 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = {};
            cResult[8] = obj4;
            let tmp18 = obj4;
          } else {
            tmp18 = cResult[8];
          }
          if (cResult[9] === tmp8) {
            if (cResult[10] === stateFromStores) {
              if (cResult[11] === arr.length) {
                if (cResult[12] === tmp9) {
                  let tmp19 = cResult[13];
                }
                tmp4(8422)(tmp17, tmp18, tmp19);
                const _Symbol2 = Symbol;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const _Date = Date;
                  const date = new Date();
                  cResult[14] = date;
                  let tmp21 = date;
                } else {
                  tmp21 = cResult[14];
                }
                [throttledNow, importDefault] = noop.useState(tmp21);
                const _Symbol3 = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  class N {
                    constructor() {
                      closure_0 = setInterval(() => closure_1_1(new Date()), closure_1(closure_1_2[19]).Millis.MINUTE);
                      return () => {
                        clearInterval(closure_0);
                      };
                    }
                  }
                  const items1 = [];
                  cResult[15] = items1;
                  cResult[16] = N;
                  let tmp30 = N;
                  const tmp29 = items1;
                } else {
                  class N {
                    constructor() {
                      closure_0 = setInterval(() => closure_1_1(new Date()), closure_1(closure_1_2[19]).Millis.MINUTE);
                      return () => {
                        clearInterval(closure_0);
                      };
                    }
                  }
                  tmp30 = cResult[16];
                }
                const effect = noop.useEffect(tmp30, tmp29);
                if (cResult[17] !== throttledNow) {
                  class P {
                    constructor(arg0) {
                      obj = { savedMessage: arg0.item, throttledNow: closure_0 };
                      return jsx(closure_1(closure_2[20]), obj);
                    }
                  }
                  cResult[17] = throttledNow;
                  cResult[18] = P;
                } else {
                  class P {
                    constructor(arg0) {
                      obj = { savedMessage: arg0.item, throttledNow: closure_0 };
                      return jsx(closure_1(closure_2[20]), obj);
                    }
                  }
                }
                if (0 === arr.length) {
                  class P {
                    constructor(arg0) {
                      obj = { savedMessage: arg0.item, throttledNow: closure_0 };
                      return jsx(closure_1(closure_2[20]), obj);
                    }
                  }
                  if (cResult[21] === analyticsLocations) {
                    class P {
                      constructor(arg0) {
                        obj = { savedMessage: arg0.item, throttledNow: closure_0 };
                        return jsx(closure_1(closure_2[20]), obj);
                      }
                    }
                  }
                  AnalyticsLocationProvider = AnalyticsLocationProvider(6657).AnalyticsLocationProvider;
                  const obj5 = { value: analyticsLocations, children: tmp37 };
                  tmp = closure_7(AnalyticsLocationProvider, obj5);
                  cResult[21] = analyticsLocations;
                  cResult[22] = tmp37;
                  cResult[23] = tmp;
                } else {
                  class P {
                    constructor(arg0) {
                      obj = { savedMessage: arg0.item, throttledNow: closure_0 };
                      return jsx(closure_1(closure_2[20]), obj);
                    }
                  }
                  const obj6 = { data: arr, renderItem: P, contentContainerStyle: tmp3.cardContainer, keyExtractor, onScroll: handleScroll };
                  const tmp36 = closure_7(AnalyticsLocationProvider(8371).FlashList, obj6);
                  cResult[24] = handleScroll;
                  cResult[25] = P;
                  cResult[26] = arr;
                  cResult[27] = tmp3.cardContainer;
                  cResult[28] = tmp36;
                }
              }
            }
          }
          const items2 = [arr.length, stateFromStores, tmp9, tmp8];
          cResult[9] = tmp8;
          cResult[10] = stateFromStores;
          cResult[11] = arr.length;
          cResult[12] = tmp9;
          cResult[13] = items2;
          tmp19 = items2;
        }
      }
    }
  }
  const obj8 = { type: AnalyticsLocationProvider(1260).ImpressionTypes.MODAL, name: AnalyticsLocationProvider(1260).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: { tab_type: type, total_count: arr.length, overdue_count: stateFromStores, nitro_upsell_bar_shown: tmp15, nitro_roadblock_upsell_bar_shown: tmp16 } };
  cResult[2] = stateFromStores;
  cResult[3] = arr.length;
  cResult[4] = tmp15;
  cResult[5] = tmp16;
  cResult[6] = type;
  cResult[7] = obj8;
  tmp17 = obj8;
  const tmp4Result = useAnalyticsLocationsDefault;
}) : ((type) => {
  type = type.type;
  throttledNow = undefined;
  importDefault = undefined;
  const tmp = closure_10();
  const arr = useSavedMessagesForPageDefault(type);
  const tmp5 = type === throttledNow(7495).SavedMessageSortTypes.REMINDER;
  const forLaterLimit = throttledNow(7485).useForLaterLimit(ForLaterScreen, tmp5);
  const obj = throttledNow(7485);
  const isForLaterLimitUpgradable = throttledNow(7485).useIsForLaterLimitUpgradable(ForLaterScreen);
  let tmp8 = isForLaterLimitUpgradable;
  if (isForLaterLimitUpgradable) {
    tmp8 = forLaterLimit > 0;
  }
  if (tmp8) {
    tmp8 = arr.length >= forLaterLimit;
  }
  let tmp9 = isForLaterLimitUpgradable;
  if (isForLaterLimitUpgradable) {
    tmp9 = arr.length > 0;
  }
  const obj2 = throttledNow(7485);
  const items = [SavedMessagesStore];
  const stateFromStores = throttledNow(504).useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  const tmp4Result = throttledNow(504);
  const analyticsLocations = useAnalyticsLocationsDefault(tmp2(6681).FOR_LATER_POPOUT).analyticsLocations;
  const obj3 = { type: null, name: null, properties: null };
  const tmp2Result = useAnalyticsLocationsDefault;
  obj3.type = throttledNow(1260).ImpressionTypes.MODAL;
  obj3.name = throttledNow(1260).ImpressionNames.FOR_LATER_LIST_VIEWED;
  const obj4 = { tab_type: type, total_count: arr.length, overdue_count: stateFromStores, nitro_upsell_bar_shown: null, nitro_roadblock_upsell_bar_shown: null };
  let tmp13 = tmp9;
  if (tmp9) {
    tmp13 = !tmp8;
  }
  obj4.nitro_upsell_bar_shown = tmp13;
  let tmp14 = tmp9;
  if (tmp9) {
    tmp14 = tmp8;
  }
  obj4.nitro_roadblock_upsell_bar_shown = tmp14;
  obj3.properties = obj4;
  const items1 = [arr.length, stateFromStores, tmp9, tmp8];
  useTrackImpressionDefault(obj3, {}, items1);
  const tmp2Result2 = useTrackImpressionDefault;
  [throttledNow, importDefault] = noop.useState(new Date());
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => closure_1_1(new Date()), closure_1(dependencyMap[19]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === arr.length) {
    const obj5 = { value: analyticsLocations, children: null };
    const obj6 = { type };
    obj5.children = closure_7(tmp2(13132), obj6);
    let tmp24Result = closure_7(tmp4(6657).AnalyticsLocationProvider, obj5);
  } else {
    const obj7 = { value: analyticsLocations, children: null };
    const obj8 = { style: tmp.listContainer, children: null };
    const obj9 = { data: arr, renderItem: tmp20, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: type.handleScroll };
    obj8.children = closure_7(tmp4(8371).FlashList, obj9);
    const items2 = [closure_7(View, obj8), ];
    let tmp25Result = null;
    if (tmp9) {
      const obj10 = { isReminder: tmp5, isAtLimit: tmp8 };
      tmp25Result = closure_7(tmp2(13136), obj10);
    }
    items2[1] = tmp25Result;
    obj7.children = items2;
    tmp24Result = closure_8(tmp4(6657).AnalyticsLocationProvider, obj7);
  }
  return tmp24Result;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const cResult = sharedValue(576).c(12);
  type = type.type;
  const tmp4 = closure_10();
  let obj = sharedValue(576);
  const tmp = sharedValue;
  sharedValue = sharedValue(4612).useSharedValue(0);
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
  const obj2 = sharedValue(4612);
  const fn2 = function v() {
    return { opacity: sharedValue.get() };
  };
  fn2.__closure = { borderOpacity: sharedValue };
  fn2.__workletHash = 16693192032676;
  fn2.__initData = __initData;
  const animatedStyle = tmp(4612).useAnimatedStyle(fn2);
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
      cResult[10] = tmp10;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { type, handleScroll: tmp6 };
    const tmp13 = closure_7(closure_14, obj4);
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
  const tmpResult = tmp(4612);
}) : ((type) => {
  let sharedValue;
  const tmp = closure_10();
  sharedValue = sharedValue(4612).useSharedValue(0);
  const items = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num));
  }, items);
  let obj = sharedValue(4612);
  const fn = function l() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 14855800666151;
  fn.__initData = __initData2;
  const obj3 = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(4612).useAnimatedStyle(fn);
  const obj4 = { style: null };
  const items1 = [tmp.headerBorder, animatedStyle];
  obj4.style = items1;
  const items2 = [closure_7(ReanimatedRexportDefault.View, obj4), closure_7(closure_14, { type: type.type, handleScroll: callback })];
  obj3.children = items2;
  return closure_8(View, obj3);
}));