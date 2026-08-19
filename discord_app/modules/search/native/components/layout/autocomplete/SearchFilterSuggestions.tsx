// === Module 15852: SearchFilterPrefixRow ===

// Module 15852 (SearchFilterPrefixRow)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations" /* 8506 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

let require = fn;
function SearchFilterPrefixRow(text) {
  text = text.text;
  require = text;
  const searchTokenType = text.searchTokenType;
  const onPress = text.onPress;
  const merged = Object.assign(text, Object.create(null));
  const items = [searchTokenType];
  const items1 = [searchTokenType];
  const memo = importAllResult.useMemo(() => {
    const searchTokenIcon = text(onPress[7]).getSearchTokenIcon(searchTokenType);
    let tmp2 = null;
    if (null != searchTokenIcon) {
      tmp2 = <searchTokenIcon size="sm" />;
    }
    return tmp2;
  }, items);
  const items2 = [onPress, text];
  const memo1 = importAllResult.useMemo(() => text(onPress[7]).getSearchTokenSubLabel(searchTokenType), items1);
  const callback = importAllResult.useCallback(() => {
    onPress(closure_0);
  }, items2);
  const merged1 = Object.assign(merged);
  return jsx(require(onPress[8]).TableRow, { icon: memo, onPress: callback, label: jsx(require(onPress[9]).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: text }), subLabel: memo1 });
}
function getSuggestionsKey(arr) {
  const mapped = arr.map((item, index) => item.text);
  return mapped.join(" ");
}
function AnimatedEnterExitContainer(children) {
  const state = children.state;
  const cleanUp = children.cleanUp;
  let sharedValue;
  let obj = state(sharedValue[10]);
  sharedValue = obj.useSharedValue(0);
  let fn = function l() {
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_0 === state(sharedValue[13]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(sharedValue[10]).runOnJS(closure_1)();
        const obj = state(sharedValue[10]);
      }
    };
    let obj = { state, TransitionStates: state(sharedValue[13]).TransitionStates, runOnJS: state(sharedValue[10]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 10696166249954;
    fn.__initData = closure_1_12;
    obj[0] = state(sharedValue[11]).withSpring(value, state(sharedValue[12]).springStandard, "respect-motion-settings", fn);
    const obj2 = state(sharedValue[11]);
    let num = -15;
    if (1 === sharedValue.get()) {
      num = 0;
    }
    obj = { translateY: state(sharedValue[11]).withSpring(num, state(sharedValue[12]).springStandard) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { withSpring: state(sharedValue[11]).withSpring, opacity: sharedValue, springStandard: state(sharedValue[12]).springStandard, state, TransitionStates: state(sharedValue[13]).TransitionStates, runOnJS: state(sharedValue[10]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 334512108462;
  fn.__initData = closure_11;
  let items = [sharedValue, state];
  const style = state(sharedValue[10]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (state === state(sharedValue[13]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  return jsx(cleanUp(sharedValue[10]).View, { style, children: children.children });
}
let c4 = importAllResult;
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: ThemesDefault.radii.lg, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
let merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}" };
let closure_12 = { code: "function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_14 = [];
let closure_15 = { code: "function SearchFilterSuggestionsTsx3(){const{dismissed}=this.__closure;return dismissed.get();}" };
let closure_16 = { code: "function SearchFilterSuggestionsTsx4(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}" };
const memoResult = importAllResult.memo(function SearchFilterSuggestions(searchContext) {
  searchContext = searchContext.searchContext;
  const onLayoutMeasure = searchContext.onLayoutMeasure;
  const containerStyle = searchContext.containerStyle;
  const dismissed = searchContext.dismissed;
  let memo;
  closure_9 = undefined;
  let callback;
  const tmp = memo();
  importAllResult = tmp;
  let obj = searchContext(containerStyle[14]);
  const validFilterTokens = obj.useValidFilterTokens(searchContext);
  const tmp3 = dismissed(importAllResult.useState([]), 2);
  const first = tmp3[0];
  jsx = tmp5;
  let items = [validFilterTokens, searchContext, tmp3[1]];
  const effect = importAllResult.useEffect(() => onLayoutMeasure(containerStyle[15]).subscribeSearchQueryState(searchContext, (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), isAutocompleteVisible: getTextInputValue.isAutocompleteVisible() }), (arg0) => {
    ({ textInputValue, isAutocompleteVisible } = arg0);
    if ("" !== textInputValue.trim()) {
      if (!isAutocompleteVisible) {
        const searchFilterSuggestions = searchContext(containerStyle[7]).getSearchFilterSuggestions(textInputValue);
        if (0 !== searchFilterSuggestions.length) {
          closure_1 = [];
          const item = searchFilterSuggestions.forEach((item, index) => {
            const token = item.token;
            if (closure_1_5.has(token)) {
              const obj = { text: null, searchTokenType: null, start: null, end: null, onPress: null };
              obj[0] = item.text;
              obj[1] = token;
              obj[2] = 0 === index;
              obj[3] = index === searchFilterSuggestions.length - 1;
              obj[4] = searchContext(containerStyle[7]).getSearchTokenPressHandler(searchFilterSuggestions, token, first.SEARCH_INPUT_DROPDOWN);
              arr = arr.push(obj);
              const obj2 = searchContext(containerStyle[7]);
            }
          });
          callback((arr) => {
            const mapped = arr.map((item, index) => item.text);
            let tmp2 = arr;
            const joined = mapped.join(" ");
            const mapped1 = arr.map((item, index) => item.text);
            if (joined === mapped1.join(" ")) {
              tmp2 = arr;
            }
            return tmp2;
          });
        } else {
          callback(closure_1_14);
        }
        let obj = searchContext(containerStyle[7]);
      }
    }
    callback(closure_1_14);
  }), items);
  const fn = function b() {
    return dismissed.get();
  };
  fn.__closure = { dismissed };
  fn.__workletHash = 17191989548971;
  fn.__initData = closure_15;
  class E {
    constructor(arg0) {
      if (searchContext) {
        tmp = searchContext;
        tmp2 = containerStyle;
        obj = searchContext(containerStyle[10]);
        tmp3 = closure_7;
        tmp4 = closure_1_14;
        tmp5 = obj.runOnJS(closure_7)(closure_1_14);
      }
      return;
    }
  }
  obj = { runOnJS: searchContext(containerStyle[10]).runOnJS, setSuggestions: tmp5, EMPTY_SEARCH_FILTER_ROWS: closure_14 };
  E.__closure = obj;
  E.__workletHash = 8991360021943;
  E.__initData = closure_16;
  const animatedReaction = searchContext(containerStyle[10]).useAnimatedReaction(fn, E);
  let items1 = [containerStyle, tmp.card];
  memo = importAllResult.useMemo(() => {
    const items = [card.card, containerStyle];
    return items;
  }, items1);
  closure_9 = importAllResult.useRef(null);
  const items2 = [onLayoutMeasure];
  callback = importAllResult.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, left, top) => {
          callback({ top, bottom: top + arg3, left, right: left + arg2 });
        });
      }
    });
  }, items2);
  const items3 = [first];
  const items4 = [memo, callback];
  const memo1 = importAllResult.useMemo(() => {
    if (first.length > 0) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items3);
  const callback1 = importAllResult.useCallback((arg0, arr, state, cleanUp) => {
    const obj = {
      ref: closure_9,
      style: memo,
      collapsable: false,
      onLayout: callback,
      children: arr.map((item, index) => {
        const merged = Object.assign(item);
        return callback(closure_9, {}, item.text);
      })
    };
    obj[2] = callback(validFilterTokens, obj);
    return callback(AnimatedEnterExitContainer, obj, arg0);
  }, items4);
  obj = { items: memo1, renderItem: callback1, getItemKey: callback };
  return jsx(searchContext(containerStyle[13]).TransitionGroup, { items: memo1, renderItem: callback1, getItemKey: callback });
});
let result = require("obj132").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx");

export default memoResult;