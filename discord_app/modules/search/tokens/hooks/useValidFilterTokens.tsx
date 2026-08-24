// discord_app/modules/search/tokens/hooks/useValidFilterTokens.tsx
import closure_2 from "../../../../stores/StreamerModeStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    const items = [closure_1_2];
    return searchContext(closure_1_1[2]).getValidOrderedFilterTokens(searchContext, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  const items1 = [searchContext];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [closure_1_2];
    return searchContext(closure_1_1[2]).getValidFilterTokens(searchContext, items);
  }, items1, require("../../../../../discord_common/js/shared/utils/SetUtils.tsx").areSetsEqual);
};