// discord_app/modules/search/tokens/hooks/useValidFilterTokens.tsx
import initialize from "initialize";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { areSetsEqual } from "../../../../../discord_common/js/shared/utils/SetUtils.tsx";

const require = arg1;
const result = require("getValidOrderedFilterTokens").fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [initialize];
  return _initialize.useStateFromStoresArray(items, () => {
    const items = [outer1_2];
    return searchContext(outer1_1[2]).getValidOrderedFilterTokens(searchContext, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [initialize];
  const items1 = [searchContext];
  return _initialize.useStateFromStores(items, () => {
    const items = [outer1_2];
    return searchContext(outer1_1[2]).getValidFilterTokens(searchContext, items);
  }, items1, _areSetsEqual.areSetsEqual);
};