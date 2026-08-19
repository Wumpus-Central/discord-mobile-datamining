// discord_app/modules/search/tokens/hooks/useValidFilterTokens.tsx
import initialize from "../../../../stores/StreamerModeStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    const items = [closure_1_2];
    return searchContext(dependencyMap[2]).getValidOrderedFilterTokens(searchContext, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  const items1 = [searchContext];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [closure_1_2];
    return searchContext(dependencyMap[2]).getValidFilterTokens(searchContext, items);
  }, items1, require("../../../../../discord_common/js/shared/utils/SetUtils.tsx").areSetsEqual);
};