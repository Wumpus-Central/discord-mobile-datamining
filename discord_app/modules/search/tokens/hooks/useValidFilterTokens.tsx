// === Module 15858: useValidOrderedFilterTokens ===

// Module 15858 (useValidOrderedFilterTokens)
import initialize from "initialize" /* 4220 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  return _require(589).useStateFromStoresArray(items, () => {
    const items = [closure_1_2];
    return searchContext(dependencyMap[2]).getValidOrderedFilterTokens(searchContext, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  const items1 = [searchContext];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_2];
    return searchContext(dependencyMap[2]).getValidFilterTokens(searchContext, items);
  }, items1, _require(1433).areSetsEqual);
};