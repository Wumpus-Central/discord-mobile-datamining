// discord_app/modules/search/native/components/layout/SearchScreenSearchBar.tsx
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import mergeProps from "../../../../../design/utils/native/mergeProps.native.tsx";
import useKeyboardIsOpen from "../../../../keyboard/native/useKeyboardIsOpen.tsx";
import SearchBarDefault from "SearchBar.tsx";
import SearchFilterSuggestionsDefault from "autocomplete/SearchFilterSuggestions.tsx";
import SearchFilterButtonDefault from "autocomplete/SearchFilterButton.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  header: { flexDirection: "row", alignItems: "center", paddingLeft: 16, zIndex: 10 },
  headerWithBackButton: { paddingLeft: 0 },
  headerSearch: { flex: 1, flexGrow: 1 },
  headerControlsRight: { paddingRight: 16, paddingLeft: 12 },
  suggestionsAnchor: { height: 0 },
  suggestions: { position: "absolute", left: 0, right: -50, top: 8 },
  suggestionsWithBackButton: { left: -28 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchScreenSearchBar.tsx");

export default noop.memo(
  noop.forwardRef((arg0, arg1) => {
    ({ searchContext, backButton } = arg0);
    closure_0 = arg1;
    ({ onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed } = arg0);
    const tmp = closure_7();
    importDefault = noop.useRef(null);
    const items = [arg1];
    const memo = noop.useMemo(() => mergeProps.mergeRefs(closure_0, closure_1), items);
    dependencyMap = noop.useRef(false);
    const callback = noop.useCallback(() => {
      closure_2.current = useKeyboardIsOpen.getKeyboardIsOpen();
      const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    }, []);
    const items1 = [tmp.header];
    let headerWithBackButton = null != backButton;
    const callback1 = noop.useCallback((arg0) => {
      let current = arg0;
      if (arg0) {
        current = ref.current;
      }
      if (current) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => {
          const current = ref.current;
          if (current != null) {
            current.focus();
          }
        });
      }
    }, []);
    if (headerWithBackButton) {
      headerWithBackButton = tmp.headerWithBackButton;
    }
    let obj = { style: items1, children: null };
    items1[1] = headerWithBackButton;
    const items2 = [backButton, ,];
    obj = { style: tmp.headerSearch, children: null };
    const items3 = [closure_5(SearchBarDefault, { ref: memo, searchContext, setSuggestionsDismissed })];
    obj = { style: tmp.suggestionsAnchor, children: null };
    const obj1 = {
      searchContext,
      onLayoutMeasure: onSuggestionsLayoutMesure,
      dismissed: suggestionsDismissed,
      containerStyle: null,
    };
    const items4 = [tmp.suggestions];
    let suggestionsWithBackButton = null != backButton;
    if (suggestionsWithBackButton) {
      suggestionsWithBackButton = tmp.suggestionsWithBackButton;
    }
    items4[1] = suggestionsWithBackButton;
    obj1.containerStyle = items4;
    obj.children = closure_5(SearchFilterSuggestionsDefault, obj1);
    items3[1] = closure_5(View, obj);
    obj.children = items3;
    items2[1] = closure_6(View, obj);
    items2[2] = closure_5(View, {
      style: tmp.headerControlsRight,
      children: closure_5(SearchFilterButtonDefault, { searchContext, onOpen: callback, onClose: callback1 }),
    });
    obj.children = items2;
    return closure_6(View, obj);
  }),
);
