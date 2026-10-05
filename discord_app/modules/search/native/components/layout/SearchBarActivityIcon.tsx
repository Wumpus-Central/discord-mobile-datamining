// discord_app/modules/search/native/components/layout/SearchBarActivityIcon.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import SearchConstants from "../../../SearchConstants.tsx";
import SearchUtils from "../../../SearchUtils.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import SearchMessageStore from "../../../SearchMessageStore.tsx";
import SearchQueryStore from "../../stores/SearchQueryStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let searchContext;

let c10;
let c9;
let metroImportAll;
let obj2;
const ActivityIndicator = react_native.ActivityIndicator;
let closure_7 = SearchConstants.SEARCH_MESSAGE_TAB_SENTINEL;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let obj = {
  spinnerColor: obj2,
  spinner: { width: 18, height: 18, alignItems: "center", justifyContent: "center", position: "absolute" },
  icon: { marginLeft: 12, marginRight: 4 },
};
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_11 = createStyles.createStyles(obj);
let obj3 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [,];
({ START: arr[0], END: arr[1] } = obj3);
const __initData = {
  code: "function SearchBarActivityIconTsx1(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};}",
};
const __initData2 = {
  code: "function SearchBarActivityIconTsx2(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};}",
};
const __initData3 = {
  code: "function SearchBarActivityIconTsx3(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};}",
};
const __initData4 = {
  code: "function SearchBarActivityIconTsx4(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (searchContext) => {
        let first;
        let sharedValue;
        let str;
        let tmp8;
        let tmp9;
        const tmp2 = sharedValue;
        let obj = searchContext(sharedValue[9]);
        const cResult = obj.c(25);
        searchContext = searchContext.searchContext;
        const tmp4 = closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          items = [SearchQueryStore, SearchMessageStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== searchContext) {
          const fn = function f() {
            const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
            const obj = SearchUtils;
            const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(
              obj.getSearchTabFetchId(searchContext, closure_7, searchResultsQuery),
            );
            let tmp3 = !isInitialFetchComplete;
            const isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
            const result = SearchQueryStore.isAutocompleteVisible(searchContext);
            if (!isInitialFetchComplete) {
              tmp3 = !isInitialSearchQueryResult;
            }
            if (tmp3) {
              tmp3 = !result;
            }
            return tmp3;
          };
          const items1 = [searchContext];
          cResult[1] = searchContext;
          cResult[2] = fn;
          cResult[3] = items1;
          tmp9 = items1;
          tmp8 = fn;
        } else {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
        }
        const tmpResult = searchContext(tmp2[11]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
        const tmpResult4 = searchContext(tmp2[12]);
        sharedValue = tmpResult4.useSharedValue(obj3.START);
        if (cResult[4] === sharedValue) {
          let tmp12;
          let tmp13;
          if (cResult[5] === stateFromStores) {
            tmp12 = cResult[6];
            tmp13 = cResult[7];
          }
          const effect = react.useEffect(tmp12, tmp13);
          const tmpResult5 = searchContext(tmp2[12]);
          class O {
            constructor() {
              let obj2;
              const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 0.5]) };
              obj2 = ReanimatedRexport;
              return obj;
            }
          }
          let obj2 = {
            interpolate: searchContext(tmp2[12]).interpolate,
            fadeAnimationState: sharedValue,
            ANIMATION_STATE_INPUT: items,
          };
          const useAnimatedStyle = tmpResult5.useAnimatedStyle;
          O.__closure = obj2;
          O.__workletHash = 12880513119188;
          O.__initData = __initData;
          const animatedStyle = useAnimatedStyle(O);
          const tmpResult6 = searchContext(tmp2[12]);
          class P {
            constructor() {
              let obj2;
              const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [1, 0]) };
              obj2 = ReanimatedRexport;
              return obj;
            }
          }
          obj3 = {
            interpolate: searchContext(tmp2[12]).interpolate,
            fadeAnimationState: sharedValue,
            ANIMATION_STATE_INPUT: items,
          };
          const useAnimatedStyle2 = tmpResult6.useAnimatedStyle;
          P.__closure = obj3;
          P.__workletHash = 11061952032557;
          P.__initData = __initData2;
          const animatedStyle2 = useAnimatedStyle2(P);
          if (cResult[8] === tmp4.icon) {
            let tmp23;
            if (cResult[9] === tmp4.spinner) {
              tmp23 = cResult[10];
            }
            if (cResult[11] === tmp4.spinnerColor.color) {
              let tmp24;
              if (cResult[12] === tmp23) {
                tmp24 = cResult[13];
              }
              if (cResult[14] === animatedStyle) {
                let tmp29;
                let tmp34;
                if (cResult[15] === tmp24) {
                  tmp29 = cResult[16];
                }
                if (cResult[17] !== tmp4.icon) {
                  const obj4 = { style: tmp4.icon, size: str, color: "interactive-text-default" };
                  const MagnifyingGlassIcon = tmp(tmp2[14]).MagnifyingGlassIcon;
                  class O {
                    constructor() {
                      let obj2;
                      const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 0.5]) };
                      obj2 = ReanimatedRexport;
                      return obj;
                    }
                  }
                  str = "xs";
                  if (obj7.isAndroid()) {
                    str = "sm";
                  }
                  const tmp35Result = closure_8(MagnifyingGlassIcon, obj4);
                  cResult[17] = tmp4.icon;
                  cResult[18] = tmp35Result;
                  tmp34 = tmp35Result;
                } else {
                  tmp34 = cResult[18];
                }
                if (cResult[19] === animatedStyle2) {
                  let tmp37;
                  if (cResult[20] === tmp34) {
                    tmp37 = cResult[21];
                  }
                  if (cResult[22] === tmp37) {
                    let tmp40;
                    if (cResult[23] === tmp29) {
                      tmp40 = cResult[24];
                    }
                    return tmp40;
                  }
                  class O {
                    constructor() {
                      let obj2;
                      const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 0.5]) };
                      obj2 = ReanimatedRexport;
                      return obj;
                    }
                  }
                  const items2 = [tmp29, tmp37];
                  tmp43[0] = items2;
                  const tmp44 = closure_10(closure_9, tmp43);
                  cResult[22] = tmp37;
                  cResult[23] = tmp29;
                  cResult[24] = tmp44;
                  tmp40 = tmp44;
                }
                class O {
                  constructor() {
                    let obj2;
                    const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 0.5]) };
                    obj2 = ReanimatedRexport;
                    return obj;
                  }
                }
                const obj5 = { style: animatedStyle2, children: tmp34 };
                const tmp39 = closure_8(stateFromStores(tmp2[12]).View, obj5);
                cResult[19] = animatedStyle2;
                cResult[20] = tmp34;
                cResult[21] = tmp39;
                tmp37 = tmp39;
              }
              class O {
                constructor() {
                  let obj2;
                  const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 0.5]) };
                  obj2 = ReanimatedRexport;
                  return obj;
                }
              }
              tmp32[0] = animatedStyle;
              tmp32[1] = tmp24;
              const tmp33 = closure_8(stateFromStores(tmp2[12]).View, tmp32);
              cResult[14] = animatedStyle;
              cResult[15] = tmp24;
              cResult[16] = tmp33;
              tmp29 = tmp33;
            }
            class O {
              constructor() {
                let obj2;
                const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 0.5]) };
                obj2 = ReanimatedRexport;
                return obj;
              }
            }
            tmp27[0] = tmp4.spinnerColor.color;
            tmp27[1] = tmp23;
            const tmp28 = closure_8(ActivityIndicator, tmp27);
            cResult[11] = tmp4.spinnerColor.color;
            cResult[12] = tmp23;
            cResult[13] = tmp28;
            tmp24 = tmp28;
          }
          const items3 = [,];
          ({ icon: arr4[0], spinner: arr4[1] } = tmp4);
          cResult[8] = tmp4.icon;
          cResult[9] = tmp4.spinner;
          cResult[10] = items3;
          tmp23 = items3;
        }
        const fn2 = function x() {
          const withTiming = timing.withTiming;
          timing;
          if (stateFromStores) {
            const result = set(withTiming(obj3.END));
          } else {
            const result1 = set(withTiming(obj3.START));
          }
        };
        const items4 = [stateFromStores, sharedValue];
        cResult[4] = sharedValue;
        cResult[5] = stateFromStores;
        cResult[6] = fn2;
        cResult[7] = items4;
        tmp13 = items4;
        tmp12 = fn2;
      }
    : (searchContext) => {
        let MagnifyingGlassIcon;
        let items3;
        let obj10;
        let obj8;
        let str;
        searchContext = searchContext.searchContext;
        let sharedValue;
        const tmp = closure_11();
        let obj = searchContext(sharedValue[11]);
        items = [SearchQueryStore, SearchMessageStore];
        const items1 = [searchContext];
        const stateFromStores = obj.useStateFromStores(
          items,
          () => {
            const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
            const obj = SearchUtils;
            const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(
              obj.getSearchTabFetchId(searchContext, closure_7, searchResultsQuery),
            );
            let tmp3 = !isInitialFetchComplete;
            const isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
            const result = SearchQueryStore.isAutocompleteVisible(searchContext);
            if (!isInitialFetchComplete) {
              tmp3 = !isInitialSearchQueryResult;
            }
            if (tmp3) {
              tmp3 = !result;
            }
            return tmp3;
          },
          items1,
        );
        let obj2 = searchContext(sharedValue[12]);
        sharedValue = obj2.useSharedValue(obj3.START);
        const items2 = [stateFromStores, sharedValue];
        const effect = react.useEffect(() => {
          const withTiming = timing.withTiming;
          timing;
          if (stateFromStores) {
            const result = set(withTiming(obj3.END));
          } else {
            const result1 = set(withTiming(obj3.START));
          }
        }, items2);
        obj3 = searchContext(sharedValue[12]);
        class E {
          constructor() {
            let obj2;
            const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 0.5]) };
            obj2 = ReanimatedRexport;
            return obj;
          }
        }
        E.__closure = {
          interpolate: searchContext(sharedValue[12]).interpolate,
          fadeAnimationState: sharedValue,
          ANIMATION_STATE_INPUT: items,
        };
        E.__workletHash = 11786393436694;
        E.__initData = __initData3;
        ({
          interpolate: searchContext(sharedValue[12]).interpolate,
          fadeAnimationState: sharedValue,
          ANIMATION_STATE_INPUT: items,
        });
        const animatedStyle = obj3.useAnimatedStyle(E);
        const fn = function v() {
          let obj2;
          const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [1, 0]) };
          obj2 = ReanimatedRexport;
          return obj;
        };
        const obj5 = searchContext(sharedValue[12]);
        fn.__closure = {
          interpolate: searchContext(sharedValue[12]).interpolate,
          fadeAnimationState: sharedValue,
          ANIMATION_STATE_INPUT: items,
        };
        fn.__workletHash = 15993922241515;
        fn.__initData = __initData4;
        ({
          interpolate: searchContext(sharedValue[12]).interpolate,
          fadeAnimationState: sharedValue,
          ANIMATION_STATE_INPUT: items,
        });
        const animatedStyle1 = obj5.useAnimatedStyle(fn);
        const obj7 = { style: animatedStyle, children: closure_8(ActivityIndicator, obj8) };
        obj8 = { color: tmp.spinnerColor.color, style: items3 };
        items3 = [,];
        ({ icon: arr4[0], spinner: arr4[1] } = tmp);
        const View = stateFromStores(sharedValue[12]).View;
        const items4 = [closure_8(View, obj7)];
        const obj9 = { style: animatedStyle1, children: closure_8(MagnifyingGlassIcon, obj10) };
        const View2 = stateFromStores(sharedValue[12]).View;
        obj10 = { style: tmp.icon, size: str, color: "interactive-text-default" };
        MagnifyingGlassIcon = searchContext(sharedValue[14]).MagnifyingGlassIcon;
        str = "xs";
        const obj11 = searchContext(sharedValue[15]);
        if (obj11.isAndroid()) {
          str = "sm";
        }
        const obj12 = { children: items4 };
        items4[1] = closure_8(View2, obj9);
        return closure_10(closure_9, obj12);
      },
);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default memoResult;
