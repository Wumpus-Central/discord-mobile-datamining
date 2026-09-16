// === Module 16838: useValidFilterTokens ===

// Module 16838 (useValidFilterTokens)
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 12488 */;
import StreamerModeStore from "StreamerModeStore" /* 4483 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  _require = searchContext;
  let items = [StreamerModeStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidOrderedFilterTokens(closure_0, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  _require = searchContext;
  let items = [StreamerModeStore];
  const items1 = [searchContext];
  return require("initialize").useStateFromStores(items, () => {
    const items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidFilterTokens(closure_0, items);
  }, items1, require("SetUtils").areSetsEqual);
};