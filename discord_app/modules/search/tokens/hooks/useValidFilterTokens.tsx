// === Module 16131: useValidOrderedFilterTokens ===

// Module 16131 (useValidOrderedFilterTokens)
import closure_2 from "initialize" /* 4290 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  return _require(589).useStateFromStoresArray(items, () => {
    const items = [closure_1_2];
    return searchContext(closure_1_1[2]).getValidOrderedFilterTokens(searchContext, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  const items1 = [searchContext];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_2];
    return searchContext(closure_1_1[2]).getValidFilterTokens(searchContext, items);
  }, items1, _require(1433).areSetsEqual);
};