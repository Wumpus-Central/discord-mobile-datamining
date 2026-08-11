// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx
import importAllResult from "noop";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let validOrderedFilterTokens;
  let dependencyMap;
  let obj = searchContext(15734);
  validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
  const items = [searchContext, validOrderedFilterTokens];
  const memo = importAllResult.useMemo(() => validOrderedFilterTokens.map((searchTokenType) => {
    const obj = { label: null, IconComponent: null, action: null };
    obj[0] = outer1_0(outer1_2[4]).getSearchTokenLabel(closure_0, searchTokenType);
    const obj2 = outer1_0(outer1_2[4]);
    obj[1] = outer1_0(outer1_2[4]).getSearchTokenIcon(searchTokenType);
    const obj3 = outer1_0(outer1_2[4]);
    obj[2] = outer1_0(outer1_2[4]).getSearchTokenPressHandler(closure_0, searchTokenType, outer1_4.CONTEXT_MENU);
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
    obj.icon = outer1_5(searchContext(14254).FiltersHorizontalIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return outer1_5(searchContext(7753).IconButton, obj);
  };
  return jsx(searchContext(8604).ContextMenu, { items: memo, align: "below", title: null, keyboardShouldPersistTaps: "handled", children: null });
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx");

export default memoResult;