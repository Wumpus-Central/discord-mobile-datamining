// discord_app/modules/search/native/components/layout/SearchScreenSearchBar.tsx
import _modDef16465 from "SearchBar.tsx";
import SearchFilterPrefixRowDefault from "autocomplete/SearchFilterSuggestions.tsx";
import _modDef16472 from "autocomplete/SearchFilterButton.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({
  header: { flexDirection: "row", alignItems: "center", paddingLeft: 16, zIndex: 10 },
  headerWithBackButton: { paddingLeft: 0 },
  headerSearch: { flex: 1, flexGrow: 1 },
  headerControlsRight: { paddingRight: 16, paddingLeft: 12 },
  suggestionsAnchor: { height: 0 },
  suggestions: { position: "absolute", left: 0, right: -50, top: 8 },
  suggestionsWithBackButton: { left: -28 },
});
const memoResult = importAllResult.memo(
  importAllResult.forwardRef((arg0, ref) => {
    ({ searchContext, backButton } = arg0);
    ({ onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed } = arg0);
    const tmp = callback2();
    const items = [tmp.header];
    let obj = { style: items, children: null };
    items[1] = null != backButton && tmp.headerWithBackButton;
    const items1 = [backButton, ,];
    obj = { style: tmp.headerSearch, children: null };
    obj = { ref, searchContext, setSuggestionsDismissed };
    const items2 = [callback(_modDef16465, obj)];
    obj1 = { style: tmp.suggestionsAnchor, children: null };
    const obj2 = {
      searchContext,
      onLayoutMeasure: onSuggestionsLayoutMesure,
      dismissed: suggestionsDismissed,
      containerStyle: null,
    };
    const items3 = [tmp.suggestions];
    let suggestionsWithBackButton = null != backButton;
    if (suggestionsWithBackButton) {
      suggestionsWithBackButton = tmp.suggestionsWithBackButton;
    }
    items3[1] = suggestionsWithBackButton;
    obj2[3] = items3;
    obj1[1] = callback(SearchFilterPrefixRowDefault, obj2);
    items2[1] = callback(View, obj1);
    obj[1] = items2;
    items1[1] = closure_4(View, obj);
    const tmp4 = null != backButton && tmp.headerWithBackButton;
    const tmp6 = importDefault;
    const tmp8 = SearchFilterPrefixRowDefault;
    items1[2] = callback(View, { style: tmp.headerControlsRight, children: callback(_modDef16472, { searchContext }) });
    obj[1] = items1;
    return closure_4(View, obj);
  }),
);
const result = require("set").fileFinishedImporting(
  "modules/search/native/components/layout/SearchScreenSearchBar.tsx",
);

export default memoResult;
