// discord_app/modules/search/native/components/layout/SearchBarActivityIcon.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import SearchUtils from "../../../SearchUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SearchMessageStore from "../../../SearchMessageStore.tsx";
import SearchQueryStore from "../../stores/SearchQueryStore.tsx";

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
let closure_7 = fn(9247).SEARCH_MESSAGE_TAB_SENTINEL;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  spinnerColor: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
  spinner: { width: 18, height: 18, alignItems: "center", justifyContent: "center", position: "absolute" },
  icon: { marginLeft: 12, marginRight: 4 },
};
let closure_11 = createStyles.createStyles(obj);
let obj4 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [,];
({ START: arr[0], END: arr[1] } = obj4);
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
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SearchBarActivityIcon(searchContext) {
        const cResult = searchContext(sharedValue[9]).c(25);
        searchContext = searchContext.searchContext;
        const tmp4 = closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          items = [SearchQueryStore, SearchMessageStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== searchContext) {
          const fn = function f() {
            const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
            const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(
              SearchUtils.getSearchTabFetchId(searchContext, closure_7, searchResultsQuery),
            );
            let tmp3 = !isInitialFetchComplete;
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
          let tmp9 = items1;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
        }
        let obj = searchContext(sharedValue[9]);
        const stateFromStores = searchContext(sharedValue[11]).useStateFromStores(first, tmp8, tmp9);
        const tmpResult = searchContext(sharedValue[11]);
        sharedValue = searchContext(sharedValue[12]).useSharedValue(obj4.START);
        if (cResult[4] === sharedValue) {
          if (cResult[5] === stateFromStores) {
            let tmp12 = cResult[6];
            let tmp13 = cResult[7];
          }
          const effect = noop.useEffect(tmp12, tmp13);
          class O {
            constructor() {
              obj = { opacity: null };
              obj2 = closure_0(closure_2[12]);
              obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [0, 0.5]);
              return obj;
            }
          }
          const obj2 = {
            interpolate: tmp(tmp2[12]).interpolate,
            fadeAnimationState: sharedValue,
            ANIMATION_STATE_INPUT: items,
          };
          O.__closure = obj2;
          O.__workletHash = 12880513119188;
          O.__initData = __initData;
          const animatedStyle = tmp(tmp2[12]).useAnimatedStyle(O);
          const tmpResult5 = tmp(tmp2[12]);
          class P {
            constructor() {
              obj = { opacity: null };
              obj2 = closure_0(closure_2[12]);
              obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [1, 0]);
              return obj;
            }
          }
          const obj3 = {
            interpolate: tmp(tmp2[12]).interpolate,
            fadeAnimationState: sharedValue,
            ANIMATION_STATE_INPUT: items,
          };
          P.__closure = obj3;
          P.__workletHash = 11061952032557;
          P.__initData = __initData2;
          const animatedStyle1 = tmp(tmp2[12]).useAnimatedStyle(P);
          if (cResult[8] === tmp4.icon) {
            if (cResult[9] === tmp4.spinner) {
              let tmp21 = cResult[10];
            }
            if (cResult[11] === tmp4.spinnerColor.color) {
              if (cResult[12] === tmp21) {
                let tmp22 = cResult[13];
              }
              if (cResult[14] === animatedStyle) {
                if (cResult[15] === tmp22) {
                  let tmp27 = cResult[16];
                }
                if (cResult[17] !== tmp4.icon) {
                  obj4 = { style: tmp4.icon, size: null, color: "interactive-text-default" };
                  class O {
                    constructor() {
                      obj = { opacity: null };
                      obj2 = closure_0(closure_2[12]);
                      obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [0, 0.5]);
                      return obj;
                    }
                  }
                  let str = "xs";
                  if (obj9.isAndroid()) {
                    str = "sm";
                  }
                  obj4.size = str;
                  const tmp33Result = closure_8(tmp(tmp2[14]).MagnifyingGlassIcon, obj4);
                  cResult[17] = tmp4.icon;
                  cResult[18] = tmp33Result;
                  let tmp32 = tmp33Result;
                } else {
                  tmp32 = cResult[18];
                }
                if (cResult[19] === animatedStyle1) {
                  if (cResult[20] === tmp32) {
                    let tmp35 = cResult[21];
                  }
                  if (cResult[22] === tmp35) {
                    if (cResult[23] === tmp27) {
                      let tmp38 = cResult[24];
                    }
                    return tmp38;
                  }
                  class O {
                    constructor() {
                      obj = { opacity: null };
                      obj2 = closure_0(closure_2[12]);
                      obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [0, 0.5]);
                      return obj;
                    }
                  }
                  const items2 = [tmp27, tmp35];
                  tmp41[0] = items2;
                  const tmp42 = closure_10(closure_9, tmp41);
                  cResult[22] = tmp35;
                  cResult[23] = tmp27;
                  cResult[24] = tmp42;
                  tmp38 = tmp42;
                }
                class O {
                  constructor() {
                    obj = { opacity: null };
                    obj2 = closure_0(closure_2[12]);
                    obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [0, 0.5]);
                    return obj;
                  }
                }
                const obj5 = { style: animatedStyle1, children: tmp32 };
                const tmp37 = closure_8(stateFromStores(tmp2[12]).View, obj5);
                cResult[19] = animatedStyle1;
                cResult[20] = tmp32;
                cResult[21] = tmp37;
                tmp35 = tmp37;
              }
              class O {
                constructor() {
                  obj = { opacity: null };
                  obj2 = closure_0(closure_2[12]);
                  obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [0, 0.5]);
                  return obj;
                }
              }
              tmp30[0] = animatedStyle;
              tmp30[1] = tmp22;
              const tmp31 = closure_8(stateFromStores(tmp2[12]).View, tmp30);
              cResult[14] = animatedStyle;
              cResult[15] = tmp22;
              cResult[16] = tmp31;
              tmp27 = tmp31;
            }
            class O {
              constructor() {
                obj = { opacity: null };
                obj2 = closure_0(closure_2[12]);
                obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [0, 0.5]);
                return obj;
              }
            }
            tmp25[0] = tmp4.spinnerColor.color;
            tmp25[1] = tmp21;
            const tmp26 = closure_8(ActivityIndicator, tmp25);
            cResult[11] = tmp4.spinnerColor.color;
            cResult[12] = tmp21;
            cResult[13] = tmp26;
            tmp22 = tmp26;
          }
          const items3 = [,];
          ({ icon: arr4[0], spinner: arr4[1] } = tmp4);
          cResult[8] = tmp4.icon;
          cResult[9] = tmp4.spinner;
          cResult[10] = items3;
          tmp21 = items3;
          const tmpResult6 = tmp(tmp2[12]);
        }
        const fn2 = function x() {
          const withTiming = timing.withTiming;
          if (stateFromStores) {
            const result = set(withTiming(obj4.END));
          } else {
            const result1 = set(withTiming(obj4.START));
          }
        };
        const items4 = [stateFromStores, sharedValue];
        cResult[4] = sharedValue;
        cResult[5] = stateFromStores;
        cResult[6] = fn2;
        cResult[7] = items4;
        tmp13 = items4;
        tmp12 = fn2;
        const tmpResult4 = searchContext(sharedValue[12]);
      }
    : function SearchBarActivityIcon(searchContext) {
        searchContext = searchContext.searchContext;
        let sharedValue;
        const tmp = closure_11();
        items = [SearchQueryStore, SearchMessageStore];
        const items1 = [searchContext];
        const stateFromStores = searchContext(sharedValue[11]).useStateFromStores(
          items,
          () => {
            const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
            const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(
              SearchUtils.getSearchTabFetchId(searchContext, closure_7, searchResultsQuery),
            );
            let tmp3 = !isInitialFetchComplete;
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
        let obj = searchContext(sharedValue[11]);
        sharedValue = searchContext(sharedValue[12]).useSharedValue(obj4.START);
        const items2 = [stateFromStores, sharedValue];
        const effect = noop.useEffect(() => {
          const withTiming = timing.withTiming;
          if (stateFromStores) {
            const result = set(withTiming(obj4.END));
          } else {
            const result1 = set(withTiming(obj4.START));
          }
        }, items2);
        const obj2 = searchContext(sharedValue[12]);
        class E {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[12]);
            obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [0, 0.5]);
            return obj;
          }
        }
        obj4 = {
          interpolate: searchContext(sharedValue[12]).interpolate,
          fadeAnimationState: sharedValue,
          ANIMATION_STATE_INPUT: items,
        };
        E.__closure = obj4;
        E.__workletHash = 11786393436694;
        E.__initData = __initData3;
        const animatedStyle = searchContext(sharedValue[12]).useAnimatedStyle(E);
        const obj3 = searchContext(sharedValue[12]);
        const fn = function v() {
          const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), items, [1, 0]) };
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
        const animatedStyle1 = obj5.useAnimatedStyle(fn);
        const obj7 = { style: animatedStyle, children: null };
        const obj8 = { color: tmp.spinnerColor.color, style: null };
        const items3 = [,];
        ({ icon: arr4[0], spinner: arr4[1] } = tmp);
        obj8.style = items3;
        obj7.children = closure_8(ActivityIndicator, obj8);
        const items4 = [closure_8(stateFromStores(sharedValue[12]).View, obj7)];
        const obj9 = { style: animatedStyle1, children: null };
        const obj10 = { style: tmp.icon, size: null, color: "interactive-text-default" };
        const obj6 = {
          interpolate: searchContext(sharedValue[12]).interpolate,
          fadeAnimationState: sharedValue,
          ANIMATION_STATE_INPUT: items,
        };
        let str = "xs";
        if (obj11.isAndroid()) {
          str = "sm";
        }
        const obj12 = { children: null };
        obj10.size = str;
        obj9.children = closure_8(searchContext(sharedValue[14]).MagnifyingGlassIcon, obj10);
        items4[1] = closure_8(stateFromStores(sharedValue[12]).View, obj9);
        obj12.children = items4;
        return closure_10(closure_9, obj12);
      },
);
