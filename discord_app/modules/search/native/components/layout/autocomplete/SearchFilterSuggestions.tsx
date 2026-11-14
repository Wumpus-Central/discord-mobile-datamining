// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1655 from "../../../../../../../_runtime/metro/01655__.js";
import native from "../../../../../../../discord_common/js/packages/design/native.tsx";
import SearchPlatformUtilsDefault from "../../../SearchPlatformUtils.tsx";
import SearchFilterUtils from "SearchFilterUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function SearchFilterPrefixRow(text) {
  text = text.text;
  const require = text;
  const searchTokenType = text.searchTokenType;
  const onPress = text.onPress;
  const merged = Object.assign(text, Object.assign({ text: 0, searchTokenType: 0, onPress: 0 }));
  items = [searchTokenType];
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
      variant: "body-md/semibold",
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
function AnimatedEnterExitContainer(state) {
  state = state.state;
  _require = state;
  ({ children, cleanUp } = state);
  const sharedValue = require("../../../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  const obj = require("../../../../../../../_runtime/metro/01655__.js");
  items = [
    closure_12,
    require("spring/spring").withSpring,
    sharedValue,
    require("springPresets").springStandard,
    closure_11,
    state,
    require("native").TransitionStates,
    require("../../../../../../../_runtime/metro/01708__.js").scheduleOnRN,
    cleanUp,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  jsx = undefined;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class SearchFilterSuggestionsTsx2 {
    constructor() {
      tmp = closure_0;
      obj = closure_1;
      value = closure_1.get();
      tmp3 = closure_2;
      items = [, , , ,];
      items[0] = closure_3;
      items[1] = closure_4;
      items[2] = closure_5;
      items[3] = closure_6;
      items[4] = closure_7;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      obj1 = { opacity: null, transform: null };
      class SearchFilterSuggestionsTsx1 {
        constructor(arg0) {
          tmp = state;
          if (state) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      items1 = [, , ,];
      items1[0] = tmp5;
      items1[1] = tmp6;
      items1[2] = tmp7;
      items1[3] = tmp8;
      SearchFilterSuggestionsTsx1.__closure = items1;
      SearchFilterSuggestionsTsx1.__workletHash = 9856383139449;
      SearchFilterSuggestionsTsx1.__initData = tmp4;
      obj1.opacity = tmp(value, tmp3, "respect-motion-settings", SearchFilterSuggestionsTsx1);
      num = -15;
      if (1 === obj.get()) {
        num = 0;
      }
      obj4 = { translateY: tmp(num, tmp3) };
      items2 = [];
      items2[0] = obj4;
      obj1.transform = items2;
      return obj1;
    }
  }
  let items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  SearchFilterSuggestionsTsx2.__closure = items1;
  SearchFilterSuggestionsTsx2.__workletHash = 16725655687152;
  SearchFilterSuggestionsTsx2.__initData = tmp3;
  let items2 = [sharedValue, state];
  const style = require("../../../../../../../_runtime/metro/01655__.js").useAnimatedStyle(SearchFilterSuggestionsTsx2);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (c0 === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = _undefined.set(num);
  }, items2);
  return jsx(_modDef1655.View, { style, children });
}
const View = fn(17).View;
const SearchFilterAddLocations = fn(9065).SearchFilterAddLocations;
let jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj = { card: null };
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.card = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
};
let closure_8 = createStyles.createStyles(obj);
let closure_11 = {
  code: "(function SearchFilterSuggestionsTsx1(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})",
};
let closure_12 = {
  code: "(function SearchFilterSuggestionsTsx2(){let[withSpring,opacity,springStandard,_worklet_9856383139449_init_data,state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function SearchFilterSuggestionsTsx1Factory([_worklet_9856383139449_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const SearchFilterSuggestionsTsx1=function(finished){if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};SearchFilterSuggestionsTsx1.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];SearchFilterSuggestionsTsx1.__workletHash=9856383139449;SearchFilterSuggestionsTsx1.__initData=_worklet_9856383139449_init_data;return SearchFilterSuggestionsTsx1;}([_worklet_9856383139449_init_data,state,TransitionStates,scheduleOnRN,cleanUp])),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};})",
};
let closure_14 = [];
let closure_15 = {
  code: "(function SearchFilterSuggestionsTsx3(){let[dismissed]=this.__closure;return dismissed.get();})",
};
let closure_16 = {
  code: "(function SearchFilterSuggestionsTsx4(isDismissed){let[scheduleOnRN,setSuggestions,EMPTY_SEARCH_FILTER_ROWS]=this.__closure;if(isDismissed){scheduleOnRN(setSuggestions,EMPTY_SEARCH_FILTER_ROWS);}})",
};
const obj3 = {
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
  _require = searchContext;
  const containerStyle = searchContext.containerStyle;
  c1 = containerStyle;
  let memo;
  const tmp = memo();
  dependencyMap = tmp;
  const searchSuggestionsContext = require("useSearchSuggestionsGesture").useSearchSuggestionsContext();
  const suggestionsRef = searchSuggestionsContext.suggestionsRef;
  const suggestionsMounted = searchSuggestionsContext.suggestionsMounted;
  let obj = require("useSearchSuggestionsGesture");
  const validFilterTokens = require("useValidFilterTokens").useValidFilterTokens(searchContext);
  const tmp6 = suggestionsRef(suggestionsMounted.useState([]), 2);
  const first = tmp6[0];
  jsx = tmp8;
  items = [validFilterTokens, searchContext, tmp6[1]];
  const effect = suggestionsMounted.useEffect(
    () =>
      SearchPlatformUtilsDefault.subscribeSearchQueryState(
        c0,
        (getTextInputValue) => ({
          textInputValue: getTextInputValue.getTextInputValue(),
          isAutocompleteVisible: getTextInputValue.isAutocompleteVisible(),
        }),
        (arg0) => {
          ({ textInputValue, isAutocompleteVisible } = arg0);
          if ("" !== textInputValue.trim()) {
            if (!isAutocompleteVisible) {
              const searchFilterSuggestions = _undefined(_undefined2[7]).getSearchFilterSuggestions(textInputValue);
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
                      onPress: searchFilterSuggestions(dependencyMap[7]).getSearchTokenPressHandler(
                        _undefined,
                        token,
                        first.SEARCH_INPUT_DROPDOWN,
                      ),
                    };
                    closure_1.push(obj);
                    const obj2 = searchFilterSuggestions(dependencyMap[7]);
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
              let obj = _undefined(_undefined2[7]);
            }
          }
          closure_7(closure_1_14);
        },
      ),
    items,
  );
  let obj2 = require("useValidFilterTokens");
  let items1 = [closure_15, searchSuggestionsContext.dismissed];
  _require = undefined;
  [tmp10, tmp11] = items1;
  class SearchFilterSuggestionsTsx3 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp11];
  SearchFilterSuggestionsTsx3.__closure = items2;
  SearchFilterSuggestionsTsx3.__workletHash = 6265244900562;
  SearchFilterSuggestionsTsx3.__initData = tmp10;
  const items3 = [
    closure_16,
    require("../../../../../../../_runtime/metro/01708__.js").scheduleOnRN,
    tmp6[1],
    closure_14,
  ];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  [tmp12, tmp13, tmp14, tmp15] = items3;
  class SearchFilterSuggestionsTsx4 {
    constructor(arg0) {
      if (searchContext) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_0(closure_1, closure_2);
      }
      return;
    }
  }
  const items4 = [tmp13, tmp14, tmp15];
  SearchFilterSuggestionsTsx4.__closure = items4;
  SearchFilterSuggestionsTsx4.__workletHash = 4953846866307;
  SearchFilterSuggestionsTsx4.__initData = tmp12;
  const animatedReaction = require("../../../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    SearchFilterSuggestionsTsx3,
    SearchFilterSuggestionsTsx4,
  );
  const items5 = [first, suggestionsMounted];
  const effect1 = obj3.useEffect(() => {
    const result = suggestionsMounted.set(first.length > 0);
  }, items5);
  const items6 = [containerStyle, tmp.card];
  memo = obj3.useMemo(() => {
    items = [_undefined2.card, c1];
    return items;
  }, items6);
  const items7 = [first];
  const items8 = [memo, suggestionsRef];
  const memo1 = obj3.useMemo(() => {
    if (first.length > 0) {
      items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items7);
  const callback = obj3.useCallback((key, arr, state, cleanUp) => {
    const obj = {
      state,
      cleanUp,
      children: (
        <View ref={suggestionsRef} style={memo} collapsable={false}>
          {arr.map((text) => {
            const merged = Object.assign(text);
            return closure_1_7(closure_1_9, {}, text.text);
          })}
        </View>
      ),
    };
    return (
      <AnimatedEnterExitContainer key={key} state={state} cleanUp={cleanUp}>
        <View ref={suggestionsRef} style={memo} collapsable={false}>
          {arr.map((text) => {
            const merged = Object.assign(text);
            return closure_1_7(closure_1_9, {}, text.text);
          })}
        </View>
      </AnimatedEnterExitContainer>
    );
  }, items8);
  return jsx(require("native").TransitionGroup, { items: memo1, renderItem: callback, getItemKey: getSuggestionsKey });
});
