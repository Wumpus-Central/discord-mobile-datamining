// discord_app/modules/search/tokens/hooks/useValidFilterTokens.tsx
import SearchTokenStreamerModeUtils from "../SearchTokenStreamerModeUtils.tsx";
import StreamerModeStore from "../../../../stores/StreamerModeStore.tsx";

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
  return require("initialize").useStateFromStores(
    items,
    () => {
      const items = [StreamerModeStore];
      return SearchTokenStreamerModeUtils.getValidFilterTokens(closure_0, items);
    },
    items1,
    require("SetUtils").areSetsEqual,
  );
};
