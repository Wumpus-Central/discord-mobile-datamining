// === Module 17244: SearchFilterSuggestions ===

// Module 17244 (SearchFilterSuggestions)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4788 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import Text_Text from "Text/Text" /* 5087 */;
import spring from "spring" /* 5375 */;
import springPresets from "springPresets" /* 5379 */;
import TableRow from "TableRow" /* 6186 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11990 */;
import SearchFilterUtils from "SearchFilterUtils" /* 17245 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
function getSuggestionsKey(arr) {
  const mapped = arr.map((text) => text.text);
  return mapped.join(" ");
}
let closure_3 = ["text", "searchTokenType", "onPress"];
const View = fn(17).View;
const SearchFilterAddLocations = fn(9284).SearchFilterAddLocations;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = { card: null };
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.card = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchFilterPrefixRow(text) {
  const cResult = c.c(22);
  if (cResult[0] !== text) {
    text = text.text;
    closure_1 = text;
    ({ searchTokenType, onPress } = text);
    closure_0 = onPress;
    const tmp10 = _objectWithoutProperties(text, closure_3);
    cResult[0] = text;
    cResult[1] = onPress;
    cResult[2] = searchTokenType;
    cResult[3] = tmp10;
    cResult[4] = text;
    let tmp6 = tmp10;
    let tmp5 = searchTokenType;
  } else {
    closure_0 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    closure_1 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    const searchTokenIcon = SearchFilterUtils.getSearchTokenIcon(tmp5);
    cResult[5] = tmp5;
    cResult[6] = searchTokenIcon;
    let tmp11 = searchTokenIcon;
    const tmpResult = SearchFilterUtils;
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
    let tmp13 = tmp14;
  } else {
    tmp13 = cResult[8];
  }
  if (cResult[9] !== tmp5) {
    const searchTokenSubLabel = SearchFilterUtils.getSearchTokenSubLabel(tmp5);
    cResult[9] = tmp5;
    cResult[10] = searchTokenSubLabel;
    let tmp16 = searchTokenSubLabel;
    const tmpResult2 = SearchFilterUtils;
  } else {
    tmp16 = cResult[10];
  }
  if (cResult[11] === onPress) {
    if (cResult[12] === tmp7) {
      let tmp18 = cResult[13];
    }
    if (cResult[14] !== tmp7) {
      const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp7 };
      const tmp21 = jsx(Text_Text.Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp7 });
      cResult[14] = tmp7;
      cResult[15] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[15];
    }
    if (cResult[16] === tmp18) {
      if (cResult[17] === tmp13) {
        if (cResult[18] === tmp16) {
          if (cResult[19] === tmp19) {
            if (cResult[20] === tmp6) {
              let tmp22 = cResult[21];
            }
            return tmp22;
          }
        }
      }
    }
    const obj3 = { icon: tmp13, onPress: tmp18, label: tmp19, subLabel: tmp16 };
    const merged = Object.assign(tmp6);
    const tmp27 = jsx(TableRow.TableRow, { icon: tmp13, onPress: tmp18, label: tmp19, subLabel: tmp16 });
    cResult[16] = tmp18;
    cResult[17] = tmp13;
    cResult[18] = tmp16;
    cResult[19] = tmp19;
    cResult[20] = tmp6;
    cResult[21] = tmp27;
    tmp22 = tmp27;
  }
  const fn = function x() {
    closure_0(closure_1);
  };
  cResult[11] = onPress;
  cResult[12] = tmp7;
  cResult[13] = fn;
  tmp18 = fn;
}) : (function SearchFilterPrefixRow(text) {
  text = text.text;
  const require = text;
  const searchTokenType = text.searchTokenType;
  const onPress = text.onPress;
  const merged = Object.assign(text, Object.assign({ text: 0, searchTokenType: 0, onPress: 0 }));
  const items = [searchTokenType];
  const items1 = [searchTokenType];
  const memo = noop.useMemo(() => {
    const searchTokenIcon = SearchFilterUtils.getSearchTokenIcon(searchTokenType);
    let tmp2 = null;
    if (null != searchTokenIcon) {
      tmp2 = <searchTokenIcon size="sm" />;
    }
    return tmp2;
  }, items);
  const items2 = [onPress, text];
  const memo1 = noop.useMemo(() => SearchFilterUtils.getSearchTokenSubLabel(searchTokenType), items1);
  const callback = noop.useCallback(() => {
    onPress(text);
  }, items2);
  const merged1 = Object.assign(merged);
  return jsx(require("TableRow").TableRow, { icon: memo, onPress: callback, label: jsx(require("Text/Text").Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: text }), subLabel: memo1 });
});
const __initData = { code: "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,\"respect-motion-settings\",function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}" };
let closure_14 = { code: "function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function SearchFilterSuggestionsTsx3(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}" };
let closure_16 = { code: "function SearchFilterSuggestionsTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedEnterExitContainer(cleanUp) {
  const cResult = state(sharedValue[9]).c(7);
  ({ children, state } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let obj = state(sharedValue[9]);
  let tmp = sharedValue;
  sharedValue = state(sharedValue[13]).useSharedValue(0);
  let obj2 = state(sharedValue[13]);
  let fn = function n() {
    let obj = { opacity: null, transform: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === state(sharedValue[16]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(sharedValue[13]).runOnJS(cleanUp)();
        const obj = state(sharedValue[13]);
      }
    };
    const obj2 = spring;
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 10696166249954;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    const obj3 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    let num = -15;
    if (1 === sharedValue.get()) {
      num = 0;
    }
    const items = [{ translateY: spring.withSpring(num, springPresets.springStandard) }];
    obj.transform = items;
    return obj;
  };
  let obj3 = state(sharedValue[13]);
  fn.__closure = { withSpring: state(sharedValue[14]).withSpring, opacity: sharedValue, springStandard: state(sharedValue[15]).springStandard, state, TransitionStates: state(sharedValue[16]).TransitionStates, runOnJS: state(sharedValue[13]).runOnJS, cleanUp };
  fn.__workletHash = 12552841910510;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === state) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    if (cResult[4] === animatedStyle) {
      if (cResult[5] === children) {
        let tmp9 = cResult[6];
      }
      return tmp9;
    }
    const obj5 = { style: animatedStyle, children };
    const tmp12 = jsx(cleanUp(tmp[13]).View, { style: animatedStyle, children });
    cResult[4] = animatedStyle;
    cResult[5] = children;
    cResult[6] = tmp12;
    tmp9 = tmp12;
  }
  const fn2 = function s() {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  };
  let items = [sharedValue, state];
  cResult[0] = sharedValue;
  cResult[1] = state;
  cResult[2] = fn2;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn2;
  let obj4 = { withSpring: state(sharedValue[14]).withSpring, opacity: sharedValue, springStandard: state(sharedValue[15]).springStandard, state, TransitionStates: state(sharedValue[16]).TransitionStates, runOnJS: state(sharedValue[13]).runOnJS, cleanUp };
}) : (function AnimatedEnterExitContainer(children) {
  state = children.state;
  const cleanUp = children.cleanUp;
  let sharedValue;
  sharedValue = state(sharedValue[13]).useSharedValue(0);
  let obj = state(sharedValue[13]);
  let fn = function c() {
    let obj = { opacity: null, transform: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === state(sharedValue[16]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(sharedValue[13]).runOnJS(cleanUp)();
        const obj = state(sharedValue[13]);
      }
    };
    const obj2 = spring;
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 11097627179556;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    const obj3 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    let num = -15;
    if (1 === sharedValue.get()) {
      num = 0;
    }
    const items = [{ translateY: spring.withSpring(num, springPresets.springStandard) }];
    obj.transform = items;
    return obj;
  };
  let obj2 = state(sharedValue[13]);
  fn.__closure = { withSpring: state(sharedValue[14]).withSpring, opacity: sharedValue, springStandard: state(sharedValue[15]).springStandard, state, TransitionStates: state(sharedValue[16]).TransitionStates, runOnJS: state(sharedValue[13]).runOnJS, cleanUp };
  fn.__workletHash = 15190607884140;
  fn.__initData = __initData2;
  let items = [sharedValue, state];
  style = obj2.useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  return jsx(cleanUp(sharedValue[13]).View, { style, children: children.children });
});
const EMPTY_SEARCH_FILTER_ROWS = [];
const __initData3 = { code: "function SearchFilterSuggestionsTsx5(){const{dismissed}=this.__closure;return dismissed.get();}" };
const __initData4 = { code: "function SearchFilterSuggestionsTsx6(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}" };
const __initData5 = { code: "function SearchFilterSuggestionsTsx7(){const{dismissed}=this.__closure;return dismissed.get();}" };
const __initData6 = { code: "function SearchFilterSuggestionsTsx8(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}" };
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchFilterSuggestions(searchContext) {
  const cResult = searchContext(suggestionsMounted[9]).c(22);
  searchContext = searchContext.searchContext;
  const containerStyle = searchContext.containerStyle;
  const tmp4 = closure_10();
  let obj = searchContext(suggestionsMounted[9]);
  const searchSuggestionsContext = searchContext(suggestionsMounted[17]).useSearchSuggestionsContext();
  const suggestionsRef = searchSuggestionsContext.suggestionsRef;
  suggestionsMounted = searchSuggestionsContext.suggestionsMounted;
  const dismissed = searchSuggestionsContext.dismissed;
  let obj2 = searchContext(suggestionsMounted[17]);
  const validFilterTokens = searchContext(suggestionsMounted[18]).useValidFilterTokens(searchContext);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  const tmp8 = validFilterTokens(noop.useState(first), 2);
  const first1 = tmp8[0];
  noop = tmp9;
  if (cResult[1] === validFilterTokens) {
    if (cResult[2] === searchContext) {
      let tmp10 = cResult[3];
      let tmp11 = cResult[4];
    }
    const effect = obj4.useEffect(tmp10, tmp11);
    class C {
      constructor() {
        return dismissed.get();
      }
    }
    const obj5 = { dismissed };
    C.__closure = obj5;
    C.__workletHash = 9561648889325;
    C.__initData = __initData3;
    class F {
      constructor(arg0) {
        if (searchContext) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          tmp3 = closure_6;
          tmp4 = closure_18;
          tmp5 = obj.runOnJS(closure_6)(closure_18);
        }
        return;
      }
    }
    const obj6 = { runOnJS: tmp(tmp2[13]).runOnJS, setSuggestions: tmp9, EMPTY_SEARCH_FILTER_ROWS };
    F.__closure = obj6;
    F.__workletHash = 15816192405109;
    F.__initData = __initData4;
    const animatedReaction = tmp(tmp2[13]).useAnimatedReaction(C, F);
    if (cResult[5] === first1.length) {
      if (cResult[6] === suggestionsMounted) {
        let tmp17 = cResult[7];
      }
      if (cResult[8] === first1) {
        if (cResult[9] === suggestionsMounted) {
          const tmp18 = cResult[10];
        }
        const effect1 = obj4.useEffect(tmp17, tmp18);
        if (cResult[11] === containerStyle) {
          if (cResult[12] === tmp4.card) {
            let tmp21 = cResult[13];
          }
          style = tmp21;
          if (cResult[14] !== first1) {
            if (first1.length > 0) {
              const items1 = [first1];
              let items2 = items1;
            } else {
              items2 = [];
            }
            class C {
              constructor() {
                return dismissed.get();
              }
            }
            cResult[15] = items2;
          } else {
            if (cResult[16] === tmp21) {
              if (cResult[17] === suggestionsRef) {
                let tmp25 = cResult[18];
              }
              if (cResult[19] === tmp23) {
                if (cResult[20] === tmp25) {
                  let tmp26 = cResult[21];
                }
                return tmp26;
              }
              class W {
                constructor(arg0, arg1, arg2, arg3) {
                  obj = { state: arg2, cleanUp: arg3, children: null };
                  obj1 = { ref: suggestionsRef, style: closure_7, collapsable: false, children: arg1.map(() => { ... }) };
                  obj.children = jsx(View, obj1);
                  return jsx(AnimatedEnterExitContainer, obj, searchContext);
                }
              }
              class C {
                constructor() {
                  return dismissed.get();
                }
              }
              tmp27[0] = tmp23;
              tmp27[1] = tmp25;
              tmp27[2] = getSuggestionsKey;
              const tmp29 = jsx(tmp(tmp2[16]).TransitionGroup, tmp27);
              cResult[19] = tmp23;
              class F {
                constructor(arg0) {
                  if (searchContext) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp3 = closure_6;
                    tmp4 = closure_18;
                    tmp5 = obj.runOnJS(closure_6)(closure_18);
                  }
                  return;
                }
              }
              cResult[20] = tmp25;
              cResult[21] = tmp29;
              tmp26 = tmp29;
            }
            class W {
              constructor(arg0, arg1, arg2, arg3) {
                obj = { state: arg2, cleanUp: arg3, children: null };
                obj1 = { ref: suggestionsRef, style: closure_7, collapsable: false, children: arg1.map(() => { ... }) };
                obj.children = jsx(View, obj1);
                return jsx(AnimatedEnterExitContainer, obj, searchContext);
              }
            }
            class C {
              constructor() {
                return dismissed.get();
              }
            }
            cResult[16] = tmp21;
            cResult[17] = suggestionsRef;
            cResult[18] = W;
            tmp25 = W;
          }
        }
        class C {
          constructor() {
            return dismissed.get();
          }
        }
        tmp22[0] = tmp4.card;
        tmp22[1] = containerStyle;
        cResult[11] = containerStyle;
        cResult[12] = tmp4.card;
        class F {
          constructor(arg0) {
            if (searchContext) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[13]);
              tmp3 = closure_6;
              tmp4 = closure_18;
              tmp5 = obj.runOnJS(closure_6)(closure_18);
            }
            return;
          }
        }
        tmp21 = tmp22;
      }
      class C {
        constructor() {
          return dismissed.get();
        }
      }
      tmp19[1] = suggestionsMounted;
      cResult[8] = first1;
      cResult[9] = suggestionsMounted;
      cResult[10] = tmp19;
      class F {
        constructor(arg0) {
          if (searchContext) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            tmp3 = closure_6;
            tmp4 = closure_18;
            tmp5 = obj.runOnJS(closure_6)(closure_18);
          }
          return;
        }
      }
    }
    class A {
      constructor() {
        result = suggestionsMounted.set(closure_5.length > 0);
        return;
      }
    }
    cResult[5] = first1.length;
    cResult[6] = suggestionsMounted;
    cResult[7] = A;
    tmp17 = A;
    const tmpResult = tmp(tmp2[13]);
  }
  class D {
    constructor() {
      obj = closure_1(closure_2[19]);
      return obj.subscribeSearchQueryState(searchContext, () => { ... }, () => { ... });
    }
  }
  const items3 = [validFilterTokens, searchContext, tmp8[1]];
  cResult[1] = validFilterTokens;
  cResult[2] = searchContext;
  cResult[3] = D;
  cResult[4] = items3;
  tmp11 = items3;
  tmp10 = D;
  const obj3 = searchContext(suggestionsMounted[18]);
}) : (function SearchFilterSuggestions(searchContext) {
  searchContext = searchContext.searchContext;
  const containerStyle = searchContext.containerStyle;
  const tmp = closure_10();
  dependencyMap = tmp;
  const searchSuggestionsContext = searchContext(17239).useSearchSuggestionsContext();
  const suggestionsRef = searchSuggestionsContext.suggestionsRef;
  const suggestionsMounted = searchSuggestionsContext.suggestionsMounted;
  const dismissed = searchSuggestionsContext.dismissed;
  let obj = searchContext(17239);
  const validFilterTokens = searchContext(17248).useValidFilterTokens(searchContext);
  const tmp4 = suggestionsMounted(validFilterTokens.useState([]), 2);
  const first = tmp4[0];
  closure_8 = tmp6;
  let items = [validFilterTokens, searchContext, tmp4[1]];
  const effect = validFilterTokens.useEffect(() => SearchPlatformUtilsDefault.subscribeSearchQueryState(searchContext, (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), isAutocompleteVisible: getTextInputValue.isAutocompleteVisible() }), (arg0) => {
    ({ textInputValue, isAutocompleteVisible } = arg0);
    if ("" !== textInputValue.trim()) {
      if (!isAutocompleteVisible) {
        const searchFilterSuggestions = searchContext(card[10]).getSearchFilterSuggestions(textInputValue);
        if (0 !== searchFilterSuggestions.length) {
          closure_1 = [];
          const item = searchFilterSuggestions.forEach((token, index) => {
            token = token.token;
            if (set.has(token)) {
              const obj = { text: token.text, searchTokenType: token, start: 0 === index, end: index === searchFilterSuggestions.length - 1, onPress: searchContext(dependencyMap[10]).getSearchTokenPressHandler(closure_2_0, token, constants.SEARCH_INPUT_DROPDOWN) };
              closure_1.push(obj);
              const obj2 = searchContext(dependencyMap[10]);
            }
          });
          constants((arr) => {
            const mapped = arr.map((text) => text.text);
            let tmp2 = closure_1;
            const joined = mapped.join(" ");
            const mapped1 = closure_1.map((text) => text.text);
            if (joined === mapped1.join(" ")) {
              tmp2 = arr;
            }
            return tmp2;
          });
        } else {
          constants(closure_1_18);
        }
        let obj = searchContext(card[10]);
      }
    }
    constants(closure_1_18);
  }), items);
  let obj2 = searchContext(17248);
  const fn = function _() {
    return dismissed.get();
  };
  fn.__closure = { dismissed };
  fn.__workletHash = 2741111473455;
  fn.__initData = __initData5;
  const fn2 = function p(arg0) {
    if (arg0) {
      ReanimatedRexport.runOnJS(closure_8)(closure_18);
    }
  };
  const obj3 = searchContext(4811);
  fn2.__closure = { runOnJS: searchContext(4811).runOnJS, setSuggestions: tmp4[1], EMPTY_SEARCH_FILTER_ROWS };
  fn2.__workletHash = 4958389658939;
  fn2.__initData = __initData6;
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
    if (first.length > 0) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items3);
  const callback = validFilterTokens.useCallback((key, arr, state, cleanUp) => {
    const obj = {
      state,
      cleanUp,
      children: <View ref={suggestionsRef} style={memo} collapsable={false}>{arr.map((text) => {
        const merged = Object.assign(text);
        return memo(closure_1_11, {}, text.text);
      })}</View>
    };
    return <closure_17 key={key} state={state} cleanUp={cleanUp}><View ref={suggestionsRef} style={memo} collapsable={false}>{arr.map((text) => {
      const merged = Object.assign(text);
      return memo(closure_1_11, {}, text.text);
    })}</View></closure_17>;
  }, items4);
  return memo(searchContext(4788).TransitionGroup, { items: memo1, renderItem: callback, getItemKey: getSuggestionsKey });
}));