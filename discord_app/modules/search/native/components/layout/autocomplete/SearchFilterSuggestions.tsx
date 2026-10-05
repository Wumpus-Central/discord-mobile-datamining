// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import spring from "../../../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../../../design/animation/reanimated/spring/springPresets.tsx";
import TableRow2 from "../../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TrackingConstants from "../../../tracking/TrackingConstants.tsx";
import SearchPlatformUtilsDefault from "../../../SearchPlatformUtils.tsx";
import SearchFilterUtils from "SearchFilterUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react_mod from "../../../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let _require, dependencyMap, obj1, set, style, tmp3, token;

let obj2;
const f126636 = (text) => text.text;
function getSuggestionsKey(arr) {
  const mapped = arr.map(f126636);
  return mapped.join(" ");
}
let closure_3 = ["text", "searchTokenType", "onPress"];
let react = react_mod;
const View = react_native.View;
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { card: obj2 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
};
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (text) => {
      let onPress;
      let searchTokenType;
      let tmp11;
      let tmp13;
      let tmp16;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(22);
      if (cResult[0] !== text) {
        text = text.text;
        let closure_1 = text;
        ({ searchTokenType, onPress } = text);
        _require = onPress;
        const tmp10 = _objectWithoutProperties(text, closure_3);
        cResult[0] = text;
        cResult[1] = onPress;
        class O {
          constructor() {
            tmp = closure_0(closure_1);
            return;
          }
        }
        cResult[2] = searchTokenType;
        cResult[3] = tmp10;
        cResult[4] = text;
        tmp6 = tmp10;
        tmp5 = searchTokenType;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        closure_1 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        const tmpResult = SearchFilterUtils;
        const searchTokenIcon = tmpResult.getSearchTokenIcon(tmp5);
        cResult[5] = tmp5;
        cResult[6] = searchTokenIcon;
        tmp11 = searchTokenIcon;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp11) {
        let tmp14 = null;
        if (null != tmp11) {
          tmp14 = <tmp11 size="sm" />;
        }
        cResult[7] = tmp11;
        cResult[8] = tmp14;
        tmp13 = tmp14;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp5) {
        const tmpResult2 = SearchFilterUtils;
        const searchTokenSubLabel = tmpResult2.getSearchTokenSubLabel(tmp5);
        cResult[9] = tmp5;
        cResult[10] = searchTokenSubLabel;
        tmp16 = searchTokenSubLabel;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === onPress) {
        let tmp18;
        let tmp19;
        if (cResult[12] === tmp7) {
          tmp18 = cResult[13];
        }
        if (cResult[14] !== tmp7) {
          const tmp21 = jsx(Text_Text.Text, {
            lineClamp: 1,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: tmp7,
          });
          cResult[14] = tmp7;
          cResult[15] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[15];
        }
        if (cResult[16] === tmp18) {
          if (cResult[17] === tmp13) {
            if (cResult[18] === tmp16) {
              if (cResult[19] === tmp19) {
                let tmp22;
                if (cResult[20] === tmp6) {
                  tmp22 = cResult[21];
                }
                return tmp22;
              }
            }
          }
        }
        const TableRow = TableRow2.TableRow;
        class O {
          constructor() {
            tmp = closure_0(closure_1);
            return;
          }
        }
        const tmp26 = <TableRow icon={tmp13} onPress={tmp18} label={tmp19} subLabel={tmp16} />;
        cResult[16] = tmp18;
        cResult[17] = tmp13;
        cResult[18] = tmp16;
        cResult[19] = tmp19;
        cResult[20] = tmp6;
        cResult[21] = tmp26;
        tmp22 = tmp26;
      }
      class O {
        constructor() {
          tmp = closure_0(closure_1);
          return;
        }
      }
      cResult[11] = onPress;
      cResult[12] = tmp7;
      cResult[13] = O;
      tmp18 = O;
    }
  : (text) => {
      text = text.text;
      const require = text;
      const searchTokenType = text.searchTokenType;
      const onPress = text.onPress;
      const merged = Object.assign(text, Object.assign({ text: 0, searchTokenType: 0, onPress: 0 }));
      const items = [searchTokenType];
      const items1 = [searchTokenType];
      const memo = react.useMemo(() => {
        const obj = SearchFilterUtils;
        const searchTokenIcon = obj.getSearchTokenIcon(searchTokenType);
        let tmp2 = null;
        if (null != searchTokenIcon) {
          tmp2 = <searchTokenIcon size="sm" />;
        }
        return tmp2;
      }, items);
      const items2 = [onPress, text];
      const memo1 = react.useMemo(() => {
        const obj = SearchFilterUtils;
        return obj.getSearchTokenSubLabel(searchTokenType);
      }, items1);
      const callback = react.useCallback(() => {
        onPress(require);
      }, items2);
      const TableRow = require("TableRow").TableRow;
      const merged1 = Object.assign(merged);
      return <TableRow icon={memo} onPress={callback} label={null} subLabel={memo1} />;
    };
const __initData = {
  code: 'function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,"respect-motion-settings",function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}',
};
let closure_14 = {
  code: "function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const __initData2 = {
  code: "function SearchFilterSuggestionsTsx3(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}",
};
let closure_16 = {
  code: "function SearchFilterSuggestionsTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (cleanUp) => {
      let children;
      let sharedValue;
      let state;
      let tmp = sharedValue;
      let obj = state(sharedValue[9]);
      const cResult = obj.c(7);
      ({ children, state } = cleanUp);
      cleanUp = cleanUp.cleanUp;
      let obj2 = state(sharedValue[13]);
      sharedValue = obj2.useSharedValue(0);
      const obj3 = state(sharedValue[13]);
      let fn = function n() {
        let fn;
        let items;
        let springStandard;
        let value;
        let withSpring;
        let obj = { opacity: withSpring(value, springStandard, "respect-motion-settings", fn), transform: items };
        withSpring = spring.withSpring;
        spring;
        value = sharedValue.get();
        fn = function t(arg0) {
          const tmp = arg0 && closure_1_0 === state(sharedValue[16]).TransitionStates.YEETED;
          if (tmp) {
            const obj = state(sharedValue[13]);
            obj.runOnJS(cleanUp)();
          }
        };
        const obj2 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
        springStandard = springPresets.springStandard;
        fn.__closure = obj2;
        fn.__workletHash = 10696166249954;
        fn.__initData = __initData;
        const withSpring2 = spring.withSpring;
        let num = -15;
        spring;
        if (1 === sharedValue.get()) {
          num = 0;
        }
        items = [{ translateY: withSpring2(num, springPresets.springStandard) }];
        ({ translateY: withSpring2(num, springPresets.springStandard) });
        return obj;
      };
      fn.__closure = {
        withSpring: state(sharedValue[14]).withSpring,
        opacity: sharedValue,
        springStandard: state(sharedValue[15]).springStandard,
        state,
        TransitionStates: state(sharedValue[16]).TransitionStates,
        runOnJS: state(sharedValue[13]).runOnJS,
        cleanUp,
      };
      fn.__workletHash = 12552841910510;
      fn.__initData = __initData;
      ({
        withSpring: state(sharedValue[14]).withSpring,
        opacity: sharedValue,
        springStandard: state(sharedValue[15]).springStandard,
        state,
        TransitionStates: state(sharedValue[16]).TransitionStates,
        runOnJS: state(sharedValue[13]).runOnJS,
        cleanUp,
      });
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (cResult[0] === sharedValue) {
        let tmp5;
        let tmp6;
        if (cResult[1] === state) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const effect = react.useEffect(tmp5, tmp6);
        if (cResult[4] === animatedStyle) {
          let tmp9;
          if (cResult[5] === children) {
            tmp9 = cResult[6];
          }
          return tmp9;
        }
        const tmp12 = jsx(cleanUp(tmp[13]).View, { style: animatedStyle, children });
        let num = 4;
        cResult[4] = animatedStyle;
        cResult[5] = children;
        cResult[6] = tmp12;
        tmp9 = tmp12;
      }
      const fn2 = function s() {
        let num = 1;
        set = sharedValue.set;
        if (state === native.TransitionStates.YEETED) {
          num = 0;
        }
        const result = set(num);
      };
      let items = [sharedValue, state];
      cResult[0] = sharedValue;
      cResult[1] = state;
      cResult[2] = fn2;
      cResult[3] = items;
      tmp6 = items;
      tmp5 = fn2;
    }
  : (state) => {
      state = state.state;
      const cleanUp = state.cleanUp;
      let sharedValue;
      const children = state.children;
      let obj = state(sharedValue[13]);
      sharedValue = obj.useSharedValue(0);
      let obj2 = state(sharedValue[13]);
      let fn = function c() {
        let fn;
        let items;
        let springStandard;
        let value;
        let withSpring;
        let obj = { opacity: withSpring(value, springStandard, "respect-motion-settings", fn), transform: items };
        withSpring = spring.withSpring;
        spring;
        value = sharedValue.get();
        fn = function t(arg0) {
          const tmp = arg0 && closure_1_0 === state(sharedValue[16]).TransitionStates.YEETED;
          if (tmp) {
            const obj = state(sharedValue[13]);
            obj.runOnJS(cleanUp)();
          }
        };
        const obj2 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
        springStandard = springPresets.springStandard;
        fn.__closure = obj2;
        fn.__workletHash = 11097627179556;
        fn.__initData = __initData;
        const withSpring2 = spring.withSpring;
        let num = -15;
        spring;
        if (1 === sharedValue.get()) {
          num = 0;
        }
        items = [{ translateY: withSpring2(num, springPresets.springStandard) }];
        ({ translateY: withSpring2(num, springPresets.springStandard) });
        return obj;
      };
      const obj3 = {
        withSpring: state(sharedValue[14]).withSpring,
        opacity: sharedValue,
        springStandard: state(sharedValue[15]).springStandard,
        state,
        TransitionStates: state(sharedValue[16]).TransitionStates,
        runOnJS: state(sharedValue[13]).runOnJS,
        cleanUp,
      };
      fn.__closure = obj3;
      fn.__workletHash = 15190607884140;
      fn.__initData = __initData2;
      let items = [sharedValue, state];
      style = obj2.useAnimatedStyle(fn);
      const effect = react.useEffect(() => {
        let num = 1;
        set = sharedValue.set;
        if (state === native.TransitionStates.YEETED) {
          num = 0;
        }
        const result = set(num);
      }, items);
      return jsx(cleanUp(sharedValue[13]).View, { style, children });
    };
const EMPTY_SEARCH_FILTER_ROWS = [];
const __initData3 = {
  code: "function SearchFilterSuggestionsTsx5(){const{dismissed}=this.__closure;return dismissed.get();}",
};
const __initData4 = {
  code: "function SearchFilterSuggestionsTsx6(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}",
};
const __initData5 = {
  code: "function SearchFilterSuggestionsTsx7(){const{dismissed}=this.__closure;return dismissed.get();}",
};
const __initData6 = {
  code: "function SearchFilterSuggestionsTsx8(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (searchContext) => {
        let closure_6;
        let first;
        let suggestionsMounted;
        let tmp = searchContext;
        let tmp2 = suggestionsMounted;
        let obj = searchContext(suggestionsMounted[9]);
        const cResult = obj.c(22);
        searchContext = searchContext.searchContext;
        const containerStyle = searchContext.containerStyle;
        const tmp4 = closure_10();
        let obj2 = searchContext(suggestionsMounted[17]);
        const searchSuggestionsContext = obj2.useSearchSuggestionsContext();
        const suggestionsRef = searchSuggestionsContext.suggestionsRef;
        suggestionsMounted = searchSuggestionsContext.suggestionsMounted;
        const dismissed = searchSuggestionsContext.dismissed;
        const obj3 = searchContext(suggestionsMounted[18]);
        const validFilterTokens = obj3.useValidFilterTokens(searchContext);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        const tmp8 = validFilterTokens(react.useState(first), 2);
        const first1 = tmp8[0];
        react = tmp9;
        if (cResult[1] === validFilterTokens) {
          let tmp10;
          let tmp11;
          if (cResult[2] === searchContext) {
            tmp10 = cResult[3];
            tmp11 = cResult[4];
          }
          const effect = obj4.useEffect(tmp10, tmp11);
          const tmpResult = tmp(tmp2[13]);
          class A {
            constructor() {
              return dismissed.get();
            }
          }
          const obj5 = { dismissed };
          A.__closure = obj5;
          A.__workletHash = 9561648889325;
          A.__initData = __initData3;
          class C {
            constructor(arg0) {
              tmp = searchContext;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[13]);
                tmp4 = closure_6;
                tmp5 = closure_18;
                tmp6 = obj.runOnJS(closure_6)(closure_18);
              }
              return;
            }
          }
          const useAnimatedReaction = tmpResult.useAnimatedReaction;
          C.__closure = { runOnJS: tmp(tmp2[13]).runOnJS, setSuggestions: tmp8[1], EMPTY_SEARCH_FILTER_ROWS };
          C.__workletHash = 15816192405109;
          C.__initData = __initData4;
          const obj6 = { runOnJS: tmp(tmp2[13]).runOnJS, setSuggestions: tmp8[1], EMPTY_SEARCH_FILTER_ROWS };
          const animatedReaction = useAnimatedReaction(A, C);
          if (cResult[5] === first1.length) {
            let tmp18;
            if (cResult[6] === suggestionsMounted) {
              tmp18 = cResult[7];
            }
            if (cResult[8] === first1) {
              let tmp19;
              if (cResult[9] === suggestionsMounted) {
                tmp19 = cResult[10];
              }
              const effect1 = obj4.useEffect(tmp18, tmp19);
              if (cResult[11] === containerStyle) {
                let tmp21;
                if (cResult[12] === tmp4.card) {
                  tmp21 = cResult[13];
                }
                style = tmp21;
                if (cResult[14] !== first1) {
                  let items2;
                  if (first1.length > 0) {
                    const items1 = [first1];
                    items2 = items1;
                  } else {
                    items2 = [];
                  }
                  class A {
                    constructor() {
                      return dismissed.get();
                    }
                  }
                  class W {
                    constructor(arg0, arg1, arg2, arg3) {
                      obj = { state: arg2, cleanUp: arg3, children: null };
                      obj1 = {
                        ref: suggestionsRef,
                        style: closure_7,
                        collapsable: false,
                        children: arg1.map(() => {
                          /* body not rendered: F146606 */
                        }),
                      };
                      obj.children = jsx(View, obj1);
                      return jsx(f75197, obj, searchContext);
                    }
                  }
                  cResult[15] = items2;
                }
                class A {
                  constructor() {
                    return dismissed.get();
                  }
                }
                class W {
                  constructor(arg0, arg1, arg2, arg3) {
                    obj = { state: arg2, cleanUp: arg3, children: null };
                    obj1 = {
                      ref: suggestionsRef,
                      style: closure_7,
                      collapsable: false,
                      children: arg1.map(() => {
                        /* body not rendered: F146606 */
                      }),
                    };
                    obj.children = jsx(View, obj1);
                    return jsx(f75197, obj, searchContext);
                  }
                }
                cResult[16] = tmp21;
                cResult[17] = suggestionsRef;
                cResult[18] = W;
                class C {
                  constructor(arg0) {
                    tmp = searchContext;
                    if (tmp) {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = closure_0(closure_2[13]);
                      tmp4 = closure_6;
                      tmp5 = closure_18;
                      tmp6 = obj.runOnJS(closure_6)(closure_18);
                    }
                    return;
                  }
                }
              }
              class A {
                constructor() {
                  return dismissed.get();
                }
              }
              tmp22[1] = containerStyle;
              cResult[11] = containerStyle;
              cResult[12] = tmp4.card;
              class C {
                constructor(arg0) {
                  tmp = searchContext;
                  if (tmp) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp4 = closure_6;
                    tmp5 = closure_18;
                    tmp6 = obj.runOnJS(closure_6)(closure_18);
                  }
                  return;
                }
              }
              tmp21 = tmp22;
            }
            const items3 = [,];
            class A {
              constructor() {
                return dismissed.get();
              }
            }
            cResult[8] = first1;
            cResult[9] = suggestionsMounted;
            cResult[10] = items3;
            class C {
              constructor(arg0) {
                tmp = searchContext;
                if (tmp) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[13]);
                  tmp4 = closure_6;
                  tmp5 = closure_18;
                  tmp6 = obj.runOnJS(closure_6)(closure_18);
                }
                return;
              }
            }
          }
          class F {
            constructor() {
              result = suggestionsMounted.set(closure_5.length > 0);
              return;
            }
          }
          cResult[5] = first1.length;
          cResult[6] = suggestionsMounted;
          cResult[7] = F;
          tmp18 = F;
        }
        class D {
          constructor() {
            obj = closure_1(closure_2[19]);
            return obj.subscribeSearchQueryState(
              searchContext,
              () => {
                /* body not rendered: F146604 */
              },
              () => {
                /* body not rendered: F146605 */
              },
            );
          }
        }
        const items4 = [validFilterTokens, searchContext, tmp9];
        cResult[1] = validFilterTokens;
        cResult[2] = searchContext;
        cResult[3] = D;
        cResult[4] = items4;
        tmp11 = items4;
        tmp10 = D;
      }
    : (searchContext) => {
        let card;
        searchContext = searchContext.searchContext;
        const containerStyle = searchContext.containerStyle;
        let tmp = closure_10();
        dependencyMap = tmp;
        let obj = searchContext(16789);
        const searchSuggestionsContext = obj.useSearchSuggestionsContext();
        const suggestionsRef = searchSuggestionsContext.suggestionsRef;
        const suggestionsMounted = searchSuggestionsContext.suggestionsMounted;
        const dismissed = searchSuggestionsContext.dismissed;
        let obj2 = searchContext(16798);
        const validFilterTokens = obj2.useValidFilterTokens(searchContext);
        const tmp4 = suggestionsMounted(validFilterTokens.useState([]), 2);
        const first = tmp4[0];
        let closure_8 = tmp6;
        let items = [validFilterTokens, searchContext, tmp6];
        const effect = validFilterTokens.useEffect(() => {
          let obj = SearchPlatformUtilsDefault;
          return obj.subscribeSearchQueryState(
            searchContext,
            (getTextInputValue) => {
              const obj = {
                textInputValue: getTextInputValue.getTextInputValue(),
                isAutocompleteVisible: getTextInputValue.isAutocompleteVisible(),
              };
              return obj;
            },
            (arg0) => {
              let isAutocompleteVisible;
              let textInputValue;
              ({ textInputValue, isAutocompleteVisible } = arg0);
              if ("" !== textInputValue.trim()) {
                if (!isAutocompleteVisible) {
                  let obj = searchContext(card[10]);
                  const searchFilterSuggestions = obj.getSearchFilterSuggestions(textInputValue);
                  if (0 !== searchFilterSuggestions.length) {
                    let closure_1 = [];
                    const item = searchFilterSuggestions.forEach((token, index) => {
                      let obj2;
                      token = token.token;
                      const text = token.text;
                      if (set.has(token)) {
                        const push = closure_1.push;
                        const obj = {
                          text,
                          searchTokenType: token,
                          start: 0 === index,
                          end: index === searchFilterSuggestions.length - 1,
                          onPress: obj2.getSearchTokenPressHandler(closure_2_0, token, constants.SEARCH_INPUT_DROPDOWN),
                        };
                        obj2 = searchContext(card[10]);
                        push(obj);
                      }
                    });
                    constants((arr) => {
                      const mapped = arr.map(f126636);
                      let tmp2 = closure_1;
                      const joined = mapped.join(" ");
                      const mapped1 = closure_1.map(f126636);
                      if (joined === mapped1.join(" ")) {
                        tmp2 = arr;
                      }
                      return tmp2;
                    });
                  } else {
                    constants(closure_1_18);
                  }
                }
              }
              constants(closure_1_18);
            },
          );
        }, items);
        const fn = function _() {
          return dismissed.get();
        };
        fn.__closure = { dismissed };
        fn.__workletHash = 2741111473455;
        fn.__initData = __initData5;
        const fn2 = function p(arg0) {
          const tmp = arg0;
          if (tmp) {
            const obj = ReanimatedRexport;
            obj.runOnJS(closure_8)(EMPTY_SEARCH_FILTER_ROWS);
          }
        };
        const obj3 = searchContext(4612);
        fn2.__closure = { runOnJS: searchContext(4612).runOnJS, setSuggestions: tmp4[1], EMPTY_SEARCH_FILTER_ROWS };
        fn2.__workletHash = 4958389658939;
        fn2.__initData = __initData6;
        ({ runOnJS: searchContext(4612).runOnJS, setSuggestions: tmp4[1], EMPTY_SEARCH_FILTER_ROWS });
        const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
        let items1 = [first, suggestionsMounted];
        const effect1 = validFilterTokens.useEffect(() => {
          const result = suggestionsMounted.set(first.length > 0);
        }, items1);
        const items2 = [containerStyle, tmp.card];
        const memo = validFilterTokens.useMemo(() => {
          const items = [card.card, containerStyle];
          return items;
        }, items2);
        const items3 = [first];
        const items4 = [memo, suggestionsRef];
        const memo1 = validFilterTokens.useMemo(() => {
          let items1;
          if (first.length > 0) {
            const items = [tmp];
            items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }, items3);
        const callback = validFilterTokens.useCallback((key, arr, state, cleanUp) => {
          ({
            ref: suggestionsRef,
            style: memo,
            collapsable: false,
            children: arr.map((text) => {
              const obj = {};
              const merged = Object.assign(text);
              return memo(closure_1_11, obj, text.text);
            }),
          });
          return (
            <closure_17 key={key} state={state} cleanUp={cleanUp}>
              {null}
            </closure_17>
          );
        }, items4);
        const obj5 = { items: memo1, renderItem: callback, getItemKey: getSuggestionsKey };
        return memo(searchContext(4589).TransitionGroup, obj5);
      },
);
let result = size.fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx",
);

export default memoResult;
