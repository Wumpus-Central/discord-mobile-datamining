// === Module 16630: SearchFilterSuggestions ===

// Module 16630 (SearchFilterSuggestions)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12338 */;
import SearchFilterUtils from "SearchFilterUtils" /* 16631 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function SearchFilterPrefixRow(text) {
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
}
function getSuggestionsKey(arr) {
  const mapped = arr.map((text) => text.text);
  return mapped.join(" ");
}
function AnimatedEnterExitContainer(children) {
  const state = children.state;
  const cleanUp = children.cleanUp;
  let sharedValue;
  let obj = state(sharedValue[10]);
  sharedValue = obj.useSharedValue(0);
  let fn = function l() {
    let obj = { opacity: null, transform: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === state(sharedValue[13]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(sharedValue[10]).runOnJS(cleanUp)();
        const obj = state(sharedValue[10]);
      }
    };
    obj = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 10696166249954;
    fn.__initData = __initData;
    obj.opacity = spring.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    let num = -15;
    if (1 === sharedValue.get()) {
      num = 0;
    }
    obj = { translateY: spring.withSpring(num, springPresets.springStandard) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withSpring: state(sharedValue[11]).withSpring, opacity: sharedValue, springStandard: state(sharedValue[12]).springStandard, state, TransitionStates: state(sharedValue[13]).TransitionStates, runOnJS: state(sharedValue[10]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 334512108462;
  fn.__initData = __initData;
  let items = [sharedValue, state];
  const style = state(sharedValue[10]).useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  return jsx(cleanUp(sharedValue[10]).View, { style, children: children.children });
}
const View = fn(17).View;
const SearchFilterAddLocations = fn(7877).SearchFilterAddLocations;
let jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { card: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.card = obj;
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}" };
let closure_12 = { code: "function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const EMPTY_SEARCH_FILTER_ROWS = [];
const __initData2 = { code: "function SearchFilterSuggestionsTsx3(){const{dismissed}=this.__closure;return dismissed.get();}" };
const __initData3 = { code: "function SearchFilterSuggestionsTsx4(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx");

export default noop.memo(function SearchFilterSuggestions(searchContext) {
  searchContext = searchContext.searchContext;
  const onLayoutMeasure = searchContext.onLayoutMeasure;
  const containerStyle = searchContext.containerStyle;
  const dismissed = searchContext.dismissed;
  let memo;
  let getItemKey;
  const tmp = memo();
  noop = tmp;
  let obj = searchContext(containerStyle[14]);
  const validFilterTokens = obj.useValidFilterTokens(searchContext);
  const tmp3 = dismissed(noop.useState([]), 2);
  const first = tmp3[0];
  jsx = tmp5;
  let items = [validFilterTokens, searchContext, tmp3[1]];
  const effect = noop.useEffect(() => SearchPlatformUtilsDefault.subscribeSearchQueryState(searchContext, (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), isAutocompleteVisible: getTextInputValue.isAutocompleteVisible() }), (arg0) => {
    ({ textInputValue, isAutocompleteVisible } = arg0);
    if ("" !== textInputValue.trim()) {
      if (!isAutocompleteVisible) {
        const searchFilterSuggestions = searchContext(containerStyle[7]).getSearchFilterSuggestions(textInputValue);
        if (0 !== searchFilterSuggestions.length) {
          closure_1 = [];
          const item = searchFilterSuggestions.forEach((token, index) => {
            token = token.token;
            if (set.has(token)) {
              const obj = { text: token.text, searchTokenType: token, start: 0 === index, end: index === searchFilterSuggestions.length - 1, onPress: searchContext(containerStyle[7]).getSearchTokenPressHandler(closure_2_0, token, first.SEARCH_INPUT_DROPDOWN) };
              closure_1.push(obj);
              const obj2 = searchContext(containerStyle[7]);
            }
          });
          closure_7((arr) => {
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
          closure_7(closure_1_14);
        }
        let obj = searchContext(containerStyle[7]);
      }
    }
    closure_7(closure_1_14);
  }), items);
  const fn = function b() {
    return dismissed.get();
  };
  fn.__closure = { dismissed };
  fn.__workletHash = 17191989548971;
  fn.__initData = __initData2;
  class E {
    constructor(arg0) {
      if (searchContext) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp3 = closure_7;
        tmp4 = closure_14;
        tmp5 = obj.runOnJS(closure_7)(closure_14);
      }
      return;
    }
  }
  obj = { runOnJS: searchContext(containerStyle[10]).runOnJS, setSuggestions: tmp5, EMPTY_SEARCH_FILTER_ROWS };
  E.__closure = obj;
  E.__workletHash = 8991360021943;
  E.__initData = __initData3;
  const animatedReaction = searchContext(containerStyle[10]).useAnimatedReaction(fn, E);
  let items1 = [containerStyle, tmp.card];
  memo = noop.useMemo(() => {
    const items = [card.card, containerStyle];
    return items;
  }, items1);
  noop.useRef(null);
  const items2 = [onLayoutMeasure];
  getItemKey = noop.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, left, top) => {
          const rect = { top, bottom: top + arg3, left, right: left + arg2 };
          closure_1_1(rect);
        });
      }
    });
  }, items2);
  const items3 = [first];
  const items4 = [memo, getItemKey];
  const memo1 = noop.useMemo(() => {
    if (first.length > 0) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items3);
  const callback1 = noop.useCallback((arg0, arr, state, cleanUp) => {
    let obj = { state, cleanUp, children: null };
    obj = {
      ref,
      style: memo,
      collapsable: false,
      onLayout,
      children: arr.map((text) => {
        const merged = Object.assign(text);
        return closure_1_7(ref, {}, text.text);
      })
    };
    obj.children = <View ref={ref} style={memo} collapsable={false} onLayout={onLayout}>{arg1.map((text) => {
      const merged = Object.assign(text);
      return closure_1_7(ref, {}, text.text);
    })}</View>;
    return <AnimatedEnterExitContainer key={arg0} ref={ref} style={memo} collapsable={false} onLayout={onLayout}>{arg1.map((text) => {
      const merged = Object.assign(text);
      return closure_1_7(ref, {}, text.text);
    })}</AnimatedEnterExitContainer>;
  }, items4);
  obj = { items: memo1, renderItem: callback1, getItemKey };
  return jsx(searchContext(containerStyle[13]).TransitionGroup, { items: memo1, renderItem: callback1, getItemKey });
});