// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import { SearchFilterAddLocations } from "../../../tracking/TrackingConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let c3 = importAllResult;
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let obj = searchContext(15858);
  const validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
  const items = [searchContext, validOrderedFilterTokens];
  const memo = importAllResult.useMemo(() => validOrderedFilterTokens.map((item, index) => {
    const obj = { label: searchContext(closure_1_2[4]).getSearchTokenLabel(closure_0, item), IconComponent: null, action: null };
    const obj2 = searchContext(closure_1_2[4]);
    obj[1] = searchContext(closure_1_2[4]).getSearchTokenIcon(item);
    const obj3 = searchContext(closure_1_2[4]);
    obj[2] = searchContext(closure_1_2[4]).getSearchTokenPressHandler(closure_0, item, closure_1_4.CONTEXT_MENU);
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
    obj.icon = jsx(searchContext(14356).FiltersHorizontalIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return jsx(searchContext(8035).IconButton, { ref: ref.ref });
  };
  return jsx(searchContext(9958).ContextMenu, { items: memo, align: "below", title: null, keyboardShouldPersistTaps: "handled", children: null });
});
const result = require("obj132").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx");

export default memoResult;