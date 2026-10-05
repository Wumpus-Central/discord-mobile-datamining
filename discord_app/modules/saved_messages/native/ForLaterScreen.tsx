// discord_app/modules/saved_messages/native/ForLaterScreen.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import useSavedMessagesForPageDefault from "../useSavedMessagesForPage.tsx";
import ForLaterMessageCardDefault from "ForLaterMessageCard.tsx";
import ForLaterIntroDefault from "ForLaterIntro.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import SavedMessagesStore from "../SavedMessagesStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let importDefault, set, throttledNow;

let metroImportAll;
let metroImportDefault;
let obj2;
let size;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ForLaterScreen = "ForLaterScreen";
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  headerBorder: size,
  cardContainer: { paddingHorizontal: 16, paddingVertical: 8 },
  listContainer: { flex: 1 },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
createStyles = createStyles.createStyles;
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
const __initData = {
  code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
const __initData2 = {
  code: "function ForLaterScreenTsx2(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (type) => {
        let items;
        let items1;
        let sharedValue;
        let tmp6;
        let obj = sharedValue(576);
        const cResult = obj.c(12);
        type = type.type;
        const tmp4 = closure_10();
        const obj2 = sharedValue(4612);
        const tmp = sharedValue;
        sharedValue = obj2.useSharedValue(0);
        if (cResult[0] !== sharedValue) {
          const fn = function n(nativeEvent) {
            let num = 0;
            set = sharedValue.set;
            const withSpring = spring.withSpring;
            spring;
            if (nativeEvent.nativeEvent.contentOffset.y > 8) {
              num = 1;
            }
            const result = set(withSpring(num));
          };
          cResult[0] = sharedValue;
          let num = 1;
          cResult[1] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[1];
        }
        const fn2 = function v() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        };
        fn2.__closure = { borderOpacity: sharedValue };
        fn2.__workletHash = 16693192032676;
        fn2.__initData = __initData;
        const tmpResult = tmp(4612);
        const animatedStyle = tmpResult.useAnimatedStyle(fn2);
        if (cResult[2] === animatedStyle) {
          let tmp8;
          if (cResult[3] === tmp4.headerBorder) {
            tmp8 = cResult[4];
          }
          if (cResult[5] === tmp6) {
            let tmp10;
            if (cResult[6] === type) {
              tmp10 = cResult[7];
            }
            if (cResult[8] === tmp4.container) {
              if (cResult[9] === tmp8) {
                let tmp14;
                if (cResult[10] === tmp10) {
                  tmp14 = cResult[11];
                }
                return tmp14;
              }
            }
            const obj3 = { style: tmp4.container, children: items };
            items = [tmp8, tmp10];
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
        const obj5 = { style: items1 };
        items1 = [tmp4.headerBorder, animatedStyle];
        const tmp9 = closure_7(ReanimatedRexportDefault.View, obj5);
        cResult[2] = animatedStyle;
        cResult[3] = tmp4.headerBorder;
        cResult[4] = tmp9;
        tmp8 = tmp9;
      }
    : (type) => {
        let items1;
        let items2;
        let sharedValue;
        type = type.type;
        const tmp = closure_10();
        let obj = sharedValue(4612);
        sharedValue = obj.useSharedValue(0);
        const items = [sharedValue];
        const callback = react.useCallback((nativeEvent) => {
          let num = 0;
          set = sharedValue.set;
          const withSpring = spring.withSpring;
          spring;
          if (nativeEvent.nativeEvent.contentOffset.y > 8) {
            num = 1;
          }
          const result = set(withSpring(num));
        }, items);
        const fn = function l() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        };
        fn.__closure = { borderOpacity: sharedValue };
        fn.__workletHash = 14855800666151;
        fn.__initData = __initData2;
        const obj3 = { style: tmp.container, children: items2 };
        const obj2 = sharedValue(4612);
        const animatedStyle = obj2.useAnimatedStyle(fn);
        const obj4 = { style: items1 };
        items1 = [tmp.headerBorder, animatedStyle];
        items2 = [
          closure_7(ReanimatedRexportDefault.View, obj4),
          closure_7(closure_14, { type, handleScroll: callback }),
        ];
        return closure_8(View, obj3);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let closure_1;
      let handleScroll;
      let overdueMessageReminderCount;
      let tmp11;
      let tmp12;
      let tmp38;
      let type;
      let obj = throttledNow(576);
      const cResult = obj.c(40);
      ({ type, handleScroll } = arg0);
      const tmp4 = closure_10();
      const arr = useSavedMessagesForPageDefault(type);
      const tmp6 = type === throttledNow(7495).SavedMessageSortTypes.REMINDER;
      const obj2 = throttledNow(7485);
      const forLaterLimit = obj2.useForLaterLimit(ForLaterScreen, tmp6);
      const obj3 = throttledNow(7485);
      const isForLaterLimitUpgradable = obj3.useIsForLaterLimitUpgradable(ForLaterScreen);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SavedMessagesStore];
        const fn = function p() {
          return overdueMessageReminderCount.getOverdueMessageReminderCount();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp11 = items;
        tmp12 = fn;
      } else {
        [tmp11, tmp12] = cResult;
      }
      const tmpResult = throttledNow(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp11, tmp12);
      const tmp5Result = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp5Result(tmp5(6681).FOR_LATER_POPOUT).analyticsLocations;
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === arr.length) {
          if (
            cResult[4] ===
            (isForLaterLimitUpgradable &&
              arr.length > 0 &&
              !(isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit))
          ) {
            if (
              cResult[5] ===
              (isForLaterLimitUpgradable &&
                arr.length > 0 &&
                isForLaterLimitUpgradable && forLaterLimit > 0 &&
                arr.length >= forLaterLimit)
            ) {
              let tmp18;
              let tmp19;
              if (cResult[6] === type) {
                tmp18 = cResult[7];
              }
              const _Symbol = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = {};
                cResult[8] = obj4;
                tmp19 = obj4;
              } else {
                tmp19 = cResult[8];
              }
              if (cResult[9] === (isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit)) {
                if (cResult[10] === stateFromStores) {
                  if (cResult[11] === arr.length) {
                    let tmp20;
                    let tmp22;
                    let tmp29;
                    let tmp28;
                    let tmp36;
                    if (cResult[12] === (isForLaterLimitUpgradable && arr.length > 0)) {
                      tmp20 = cResult[13];
                    }
                    useTrackImpressionDefault(tmp18, tmp19, tmp20);
                    const _Symbol2 = Symbol;
                    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                      const _Date = Date;
                      const self = this;
                      const self2 = this;
                      let date = new Date();
                      cResult[14] = date;
                      tmp22 = date;
                    } else {
                      tmp22 = cResult[14];
                    }
                    [throttledNow, importDefault] = react.useState(tmp22);
                    const _Symbol3 = Symbol;
                    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                      class N {
                        constructor() {
                          closure_0 = setInterval(() => {
                            const date = new Date();
                            return closure_1_1(date);
                          }, closure_1(closure_1_2[19]).Millis.MINUTE);
                          return () => {
                            clearInterval(closure_0);
                          };
                        }
                      }
                      const items1 = [];
                      cResult[15] = items1;
                      cResult[16] = N;
                      tmp29 = N;
                      tmp28 = items1;
                    } else {
                      class N {
                        constructor() {
                          closure_0 = setInterval(() => {
                            const date = new Date();
                            return closure_1_1(date);
                          }, closure_1(closure_1_2[19]).Millis.MINUTE);
                          return () => {
                            clearInterval(closure_0);
                          };
                        }
                      }
                      tmp29 = cResult[16];
                    }
                    const effect = react.useEffect(tmp29, tmp28);
                    if (cResult[17] !== throttledNow) {
                      class P {
                        constructor(savedMessage) {
                          const obj = { savedMessage: savedMessage.item, throttledNow };
                          return metroImportDefault(ForLaterMessageCardDefault, obj);
                        }
                      }
                      cResult[17] = throttledNow;
                      cResult[18] = P;
                    } else {
                      class P {
                        constructor(savedMessage) {
                          const obj = { savedMessage: savedMessage.item, throttledNow };
                          return metroImportDefault(ForLaterMessageCardDefault, obj);
                        }
                      }
                    }
                    if (0 === arr.length) {
                      class P {
                        constructor(savedMessage) {
                          const obj = { savedMessage: savedMessage.item, throttledNow };
                          return metroImportDefault(ForLaterMessageCardDefault, obj);
                        }
                      }
                      if (cResult[21] === analyticsLocations) {
                        class P {
                          constructor(savedMessage) {
                            const obj = { savedMessage: savedMessage.item, throttledNow };
                            return metroImportDefault(ForLaterMessageCardDefault, obj);
                          }
                        }
                        tmp36 = tmp38;
                      }
                      const obj5 = { value: analyticsLocations, children: tmp37 };
                      const tmp40 = closure_7(throttledNow(6657).AnalyticsLocationProvider, obj5);
                      cResult[21] = analyticsLocations;
                      cResult[22] = tmp37;
                      cResult[23] = tmp40;
                      tmp38 = tmp40;
                    } else {
                      class P {
                        constructor(savedMessage) {
                          const obj = { savedMessage: savedMessage.item, throttledNow };
                          return metroImportDefault(ForLaterMessageCardDefault, obj);
                        }
                      }
                      const obj6 = {
                        data: arr,
                        renderItem: P,
                        contentContainerStyle: tmp4.cardContainer,
                        keyExtractor,
                        onScroll: handleScroll,
                      };
                      cResult[24] = handleScroll;
                      cResult[25] = P;
                      cResult[26] = arr;
                      cResult[27] = tmp4.cardContainer;
                      cResult[28] = closure_7(throttledNow(8371).FlashList, obj6);
                      const tmp35 = closure_7(throttledNow(8371).FlashList, obj6);
                    }
                    return tmp36;
                  }
                }
              }
              const items2 = [arr.length, stateFromStores, tmp10, tmp9];
              cResult[9] = isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit;
              cResult[10] = stateFromStores;
              cResult[11] = arr.length;
              cResult[12] = isForLaterLimitUpgradable && arr.length > 0;
              cResult[13] = items2;
              tmp20 = items2;
            }
          }
        }
      }
      const obj8 = {
        type: throttledNow(1260).ImpressionTypes.MODAL,
        name: throttledNow(1260).ImpressionNames.FOR_LATER_LIST_VIEWED,
        properties: {
          tab_type: type,
          total_count: arr.length,
          overdue_count: stateFromStores,
          nitro_upsell_bar_shown:
            isForLaterLimitUpgradable &&
            arr.length > 0 &&
            !(isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit),
          nitro_roadblock_upsell_bar_shown:
            isForLaterLimitUpgradable &&
            arr.length > 0 &&
            isForLaterLimitUpgradable && forLaterLimit > 0 &&
            arr.length >= forLaterLimit,
        },
      };
      cResult[2] = stateFromStores;
      cResult[3] = arr.length;
      cResult[4] =
        isForLaterLimitUpgradable &&
        arr.length > 0 &&
        !(isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit);
      cResult[5] =
        isForLaterLimitUpgradable &&
        arr.length > 0 &&
        isForLaterLimitUpgradable && forLaterLimit > 0 &&
        arr.length >= forLaterLimit;
      cResult[6] = type;
      cResult[7] = obj8;
      tmp18 = obj8;
    }
  : (type) => {
      let closure_1;
      let items2;
      let obj4;
      let obj6;
      let obj9;
      let overdueMessageReminderCount;
      let tmp22Result;
      type = type.type;
      throttledNow = undefined;
      importDefault = undefined;
      const handleScroll = type.handleScroll;
      const tmp = closure_10();
      const arr = useSavedMessagesForPageDefault(type);
      const tmp5 = type === throttledNow(7495).SavedMessageSortTypes.REMINDER;
      let obj = throttledNow(7485);
      const forLaterLimit = obj.useForLaterLimit(ForLaterScreen, tmp5);
      const obj2 = throttledNow(7485);
      const isForLaterLimitUpgradable = obj2.useIsForLaterLimitUpgradable(ForLaterScreen);
      const items = [SavedMessagesStore];
      const tmp4Result = throttledNow(504);
      const stateFromStores = tmp4Result.useStateFromStores(items, () =>
        overdueMessageReminderCount.getOverdueMessageReminderCount(),
      );
      const tmp2Result = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp2Result(tmp2(6681).FOR_LATER_POPOUT).analyticsLocations;
      const obj3 = {
        type: throttledNow(1260).ImpressionTypes.MODAL,
        name: throttledNow(1260).ImpressionNames.FOR_LATER_LIST_VIEWED,
        properties: obj4,
      };
      const items1 = [arr.length, stateFromStores, tmp9, tmp8];
      obj4 = {
        tab_type: type,
        total_count: arr.length,
        overdue_count: stateFromStores,
        nitro_upsell_bar_shown:
          isForLaterLimitUpgradable &&
          arr.length > 0 &&
          !(isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit),
        nitro_roadblock_upsell_bar_shown:
          isForLaterLimitUpgradable &&
          arr.length > 0 &&
          isForLaterLimitUpgradable && forLaterLimit > 0 &&
          arr.length >= forLaterLimit,
      };
      const tmp2Result2 = useTrackImpressionDefault;
      tmp2Result2(obj3, {}, items1);
      const useState = react.useState;
      let date = new Date();
      [throttledNow, importDefault] = useState(date);
      const effect = react.useEffect(() => {
        let closure_0;
        const interval = setInterval(() => {
          const date = new Date();
          return closure_1_1(date);
        }, closure_1(dependencyMap[19]).Millis.MINUTE);
        return () => {
          clearInterval(closure_0);
        };
      }, []);
      [][0] = throttledNow;
      if (0 === arr.length) {
        const obj5 = { value: analyticsLocations, children: closure_7(ForLaterIntroDefault, obj6) };
        const AnalyticsLocationProvider = tmp4(6657).AnalyticsLocationProvider;
        obj6 = { type };
        tmp22Result = closure_7(AnalyticsLocationProvider, obj5);
      } else {
        const obj7 = { value: analyticsLocations, children: items2 };
        const obj8 = { style: tmp.listContainer, children: closure_7(throttledNow(8371).FlashList, obj9) };
        const AnalyticsLocationProvider2 = tmp4(6657).AnalyticsLocationProvider;
        obj9 = {
          data: arr,
          renderItem: tmp18,
          contentContainerStyle: tmp.cardContainer,
          keyExtractor,
          onScroll: handleScroll,
        };
        items2 = [closure_7(View, obj8)];
        let tmp23Result = null;
        if (isForLaterLimitUpgradable && arr.length > 0) {
          const obj10 = {
            isReminder: tmp5,
            isAtLimit: isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit,
          };
          tmp23Result = closure_7(tmp2(13136), obj10);
        }
        items2[1] = tmp23Result;
        tmp22Result = closure_8(AnalyticsLocationProvider2, obj7);
      }
      return tmp22Result;
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;
