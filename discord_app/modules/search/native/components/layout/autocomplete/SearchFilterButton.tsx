// === Module 16635: ? ===

// Module 16635
import importAllResult from "noop" /* 19 */;
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations" /* 7877 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let validOrderedFilterTokens;
  ({ onOpen, onClose } = searchContext);
  let obj = searchContext(validOrderedFilterTokens[3]);
  validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
  const items = [searchContext, validOrderedFilterTokens];
  const memo = importAllResult.useMemo(() => validOrderedFilterTokens.map((searchTokenType) => {
    const obj = { label: closure_1_0(closure_1_1[4]).getSearchTokenLabel(closure_0, searchTokenType), IconComponent: null, action: null };
    const obj2 = closure_1_0(closure_1_1[4]);
    obj[1] = closure_1_0(closure_1_1[4]).getSearchTokenIcon(searchTokenType);
    const obj3 = closure_1_0(closure_1_1[4]);
    obj[2] = closure_1_0(closure_1_1[4]).getSearchTokenPressHandler(closure_0, searchTokenType, closure_1_3.CONTEXT_MENU);
    return obj;
  }), items);
  obj = { items: memo, align: "below", title: null, ignoreKeyboardHide: true, onOpen: null, onClose: null, children: null };
  let intl = searchContext(validOrderedFilterTokens[6]).intl;
  obj[2] = intl.string(searchContext(validOrderedFilterTokens[6]).t.oYEmhB);
  obj[4] = onOpen;
  obj[5] = onClose;
  obj[6] = function children(ref) {
    const merged = Object.assign(ref, Object.create(null));
    const obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj.variant = "tertiary";
    const intl = searchContext(validOrderedFilterTokens[6]).intl;
    obj.accessibilityLabel = intl.string(searchContext(validOrderedFilterTokens[6]).t.kP6oFy);
    obj.size = "md";
    obj.icon = callback(searchContext(validOrderedFilterTokens[8]).FiltersHorizontalIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return callback(searchContext(validOrderedFilterTokens[7]).IconButton, obj);
  };
  return jsx(searchContext(validOrderedFilterTokens[5]).ContextMenu, { items: memo, align: "below", title: null, ignoreKeyboardHide: true, onOpen: null, onClose: null, children: null });
});
const result = require("set").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx");

export default memoResult;