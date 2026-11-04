// === Module 18968: useValidFilterTokens ===

// Module 18968 (useValidFilterTokens)
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 14117 */;
import StreamerModeStore from "StreamerModeStore" /* 5196 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export function useValidOrderedFilterTokens(searchContext) {
  _require = searchContext;
  items = [StreamerModeStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidOrderedFilterTokens(closure_0, items);
  });
}
export function useValidFilterTokens(searchContext) {
  _require = searchContext;
  items = [StreamerModeStore];
  const items1 = [searchContext];
  return require("initialize").useStateFromStores(items, () => {
    items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidFilterTokens(closure_0, items);
  }, items1, require("SetUtils").areSetsEqual);
}