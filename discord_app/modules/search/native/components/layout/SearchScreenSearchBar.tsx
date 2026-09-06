// === Module 16627: ? ===

// Module 16627
import _modDef16628 from "module_16628" /* 16628 */;
import SearchFilterPrefixRowDefault from "SearchFilterPrefixRow" /* 16630 */;
import _modDef16635 from "module_16635" /* 16635 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ header: { flexDirection: "row", alignItems: "center", paddingLeft: 16, zIndex: 10 }, headerWithBackButton: { paddingLeft: 0 }, headerSearch: { flex: 1, flexGrow: 1 }, headerControlsRight: { paddingRight: 16, paddingLeft: 12 }, suggestionsAnchor: { height: 0 }, suggestions: { position: "absolute", left: 0, right: -50, top: 8 }, suggestionsWithBackButton: { left: -28 } });
const memoResult = importAllResult.memo(importAllResult.forwardRef((arg0, arg1) => {
  ({ searchContext, backButton } = arg0);
  closure_0 = arg1;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed } = arg0);
  const tmp = callback2();
  importDefault = importAllResult.useRef(null);
  const items = [arg1];
  const memo = importAllResult.useMemo(() => callback(ref[4]).mergeRefs(callback, closure_1), items);
  dependencyMap = importAllResult.useRef(false);
  const callback = importAllResult.useCallback(() => {
    ref.current = callback(ref[5]).getKeyboardIsOpen();
    const obj = callback(ref[5]);
    const result = callback(ref[6]).dismissGlobalKeyboard();
  }, []);
  const items1 = [tmp.header, ];
  let headerWithBackButton = null != backButton;
  const callback1 = importAllResult.useCallback((arg0) => {
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
  const items2 = [backButton, , ];
  obj = { style: tmp.headerSearch, children: null };
  const items3 = [callback(_modDef16628, { ref: memo, searchContext, setSuggestionsDismissed }), ];
  obj = { style: tmp.suggestionsAnchor, children: null };
  obj1 = { searchContext, onLayoutMeasure: onSuggestionsLayoutMesure, dismissed: suggestionsDismissed, containerStyle: null };
  const items4 = [tmp.suggestions, ];
  let suggestionsWithBackButton = null != backButton;
  if (suggestionsWithBackButton) {
    suggestionsWithBackButton = tmp.suggestionsWithBackButton;
  }
  items4[1] = suggestionsWithBackButton;
  obj1[3] = items4;
  obj[1] = callback(SearchFilterPrefixRowDefault, obj1);
  items3[1] = callback(View, obj);
  obj[1] = items3;
  items2[1] = closure_6(View, obj);
  const tmp10 = SearchFilterPrefixRowDefault;
  const tmp8 = importDefault;
  items2[2] = callback(View, { style: tmp.headerControlsRight, children: callback(_modDef16635, { searchContext, onOpen: callback, onClose: callback1 }) });
  obj[1] = items2;
  return closure_6(View, obj);
}));
let result = require("set").fileFinishedImporting("modules/search/native/components/layout/SearchScreenSearchBar.tsx");

export default memoResult;