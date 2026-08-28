// === Module 16150: ? ===

// Module 16150
import importAllResult from "noop" /* 19 */;
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations" /* 7568 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let validOrderedFilterTokens;
  dependencyMap = undefined;
  let obj = searchContext(16149);
  validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
  const items = [searchContext, validOrderedFilterTokens];
  const memo = importAllResult.useMemo(() => validOrderedFilterTokens.map((searchTokenType) => {
    const obj = { label: closure_1_0(closure_1_2[4]).getSearchTokenLabel(closure_0, searchTokenType), IconComponent: null, action: null };
    const obj2 = closure_1_0(closure_1_2[4]);
    obj[1] = closure_1_0(closure_1_2[4]).getSearchTokenIcon(searchTokenType);
    const obj3 = closure_1_0(closure_1_2[4]);
    obj[2] = closure_1_0(closure_1_2[4]).getSearchTokenPressHandler(closure_0, searchTokenType, closure_1_4.CONTEXT_MENU);
    return obj;
  }), items);
  dependencyMap = validOrderedFilterTokens(1367)("SearchFilterButton");
  obj = { items: memo, align: "below", title: null, keyboardShouldPersistTaps: "handled", children: null };
  let intl = searchContext(1236).intl;
  obj[2] = intl.string(searchContext(1236).t.oYEmhB);
  obj[4] = function children(ref) {
    const merged = Object.assign(ref, Object.create(null));
    const obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj.variant = "tertiary";
    const intl = searchContext(1236).intl;
    obj.accessibilityLabel = intl.string(searchContext(1236).t.kP6oFy);
    let str = "sm";
    if (dependencyMap) {
      str = "md";
    }
    obj.size = str;
    obj.icon = closure_1_5(searchContext(14538).FiltersHorizontalIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return closure_1_5(searchContext(7952).IconButton, obj);
  };
  return jsx(searchContext(8733).ContextMenu, { items: memo, align: "below", title: null, keyboardShouldPersistTaps: "handled", children: null });
});
const result = require("set").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx");

export default memoResult;