// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../../../design/animation/reanimated/spring/springPresets.tsx";
import SearchPlatformUtilsDefault from "../../../SearchPlatformUtils.tsx";
import SearchFilterUtils from "SearchFilterUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

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
  return jsx(require("TableRow").TableRow, {
    icon: memo,
    onPress: callback,
    label: jsx(require("Text/Text").Text, {
      lineClamp: 1,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: text,
    }),
    subLabel: memo1,
  });
}
function getSuggestionsKey(arr) {
  const mapped = arr.map((text) => text.text);
  return mapped.join(" ");
}
function AnimatedEnterExitContainer(children) {
  const state = children.state;
  const cleanUp = children.cleanUp;
  let sharedValue;
  sharedValue = state(sharedValue[10]).useSharedValue(0);
  let obj = state(sharedValue[10]);
  let fn = function c() {
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
  let obj2 = state(sharedValue[10]);
  fn.__closure = {
    withSpring: state(sharedValue[11]).withSpring,
    opacity: sharedValue,
    springStandard: state(sharedValue[12]).springStandard,
    state,
    TransitionStates: state(sharedValue[13]).TransitionStates,
    runOnJS: state(sharedValue[10]).runOnJS,
    cleanUp,
  };
  fn.__workletHash = 334512108462;
  fn.__initData = __initData;
  let items = [sharedValue, state];
  const style = obj2.useAnimatedStyle(fn);
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
const SearchFilterAddLocations = fn(7302).SearchFilterAddLocations;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj = { card: null };
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.card = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
};
let closure_8 = createStyles.createStyles(obj);
const __initData = {
  code: "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}",
};
let closure_12 = {
  code: "function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const EMPTY_SEARCH_FILTER_ROWS = [];
const __initData2 = {
  code: "function SearchFilterSuggestionsTsx3(){const{dismissed}=this.__closure;return dismissed.get();}",
};
const __initData3 = {
  code: "function SearchFilterSuggestionsTsx4(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}",
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx",
);

export default noop.memo(function SearchFilterSuggestions(searchContext) {
  searchContext = searchContext.searchContext;
  const containerStyle = searchContext.containerStyle;
  closure_8 = undefined;
  let memo;
  const tmp = closure_8();
  dependencyMap = tmp;
  const searchSuggestionsContext = searchContext(16435).useSearchSuggestionsContext();
  const suggestionsRef = searchSuggestionsContext.suggestionsRef;
  const suggestionsMounted = searchSuggestionsContext.suggestionsMounted;
  const dismissed = searchSuggestionsContext.dismissed;
  let obj = searchContext(16435);
  const validFilterTokens = searchContext(16444).useValidFilterTokens(searchContext);
  const tmp4 = suggestionsRef(suggestionsMounted.useState([]), 2);
  const first = tmp4[0];
  closure_8 = tmp6;
  let items = [validFilterTokens, searchContext, tmp4[1]];
  const effect = suggestionsMounted.useEffect(
    () =>
      SearchPlatformUtilsDefault.subscribeSearchQueryState(
        searchContext,
        (getTextInputValue) => ({
          textInputValue: getTextInputValue.getTextInputValue(),
          isAutocompleteVisible: getTextInputValue.isAutocompleteVisible(),
        }),
        (arg0) => {
          ({ textInputValue, isAutocompleteVisible } = arg0);
          if ("" !== textInputValue.trim()) {
            if (!isAutocompleteVisible) {
              const searchFilterSuggestions = searchContext(card[7]).getSearchFilterSuggestions(textInputValue);
              if (0 !== searchFilterSuggestions.length) {
                closure_1 = [];
                const item = searchFilterSuggestions.forEach((token, index) => {
                  token = token.token;
                  if (set.has(token)) {
                    const obj = {
                      text: token.text,
                      searchTokenType: token,
                      start: 0 === index,
                      end: index === searchFilterSuggestions.length - 1,
                      onPress: searchContext(dependencyMap[7]).getSearchTokenPressHandler(
                        closure_2_0,
                        token,
                        validFilterTokens.SEARCH_INPUT_DROPDOWN,
                      ),
                    };
                    closure_1.push(obj);
                    const obj2 = searchContext(dependencyMap[7]);
                  }
                });
                closure_8((arr) => {
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
                closure_8(closure_1_14);
              }
              let obj = searchContext(card[7]);
            }
          }
          closure_8(closure_1_14);
        },
      ),
    items,
  );
  let obj2 = searchContext(16444);
  const fn = function f() {
    return dismissed.get();
  };
  fn.__closure = { dismissed };
  fn.__workletHash = 17191989548971;
  fn.__initData = __initData2;
  class T {
    constructor(arg0) {
      if (searchContext) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp3 = closure_8;
        tmp4 = closure_14;
        tmp5 = obj.runOnJS(closure_8)(closure_14);
      }
      return;
    }
  }
  const obj3 = searchContext(4566);
  T.__closure = { runOnJS: searchContext(4566).runOnJS, setSuggestions: tmp4[1], EMPTY_SEARCH_FILTER_ROWS };
  T.__workletHash = 8991360021943;
  T.__initData = __initData3;
  const animatedReaction = obj3.useAnimatedReaction(fn, T);
  let items1 = [first, suggestionsMounted];
  const effect1 = suggestionsMounted.useEffect(() => {
    const result = suggestionsMounted.set(first.length > 0);
  }, items1);
  const items2 = [containerStyle, tmp.card];
  memo = suggestionsMounted.useMemo(() => {
    const items = [card.card, containerStyle];
    return items;
  }, items2);
  const items3 = [first];
  const items4 = [memo, suggestionsRef];
  const memo1 = suggestionsMounted.useMemo(() => {
    if (first.length > 0) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items3);
  const callback = suggestionsMounted.useCallback((key, arr, state, cleanUp) => {
    const obj = {
      state,
      cleanUp,
      children: (
        <View ref={suggestionsRef} style={memo} collapsable={false}>
          {arr.map((text) => {
            const merged = Object.assign(text);
            return first(memo, {}, text.text);
          })}
        </View>
      ),
    };
    return (
      <AnimatedEnterExitContainer key={key} state={state} cleanUp={cleanUp}>
        <View ref={suggestionsRef} style={memo} collapsable={false}>
          {arr.map((text) => {
            const merged = Object.assign(text);
            return first(memo, {}, text.text);
          })}
        </View>
      </AnimatedEnterExitContainer>
    );
  }, items4);
  return first(searchContext(4540).TransitionGroup, {
    items: memo1,
    renderItem: callback,
    getItemKey: getSuggestionsKey,
  });
});
