// discord_app/modules/search/native/components/tabs/hooks/useSearchMessages.tsx
import handleReaction from "../../../../SearchMessageStore.tsx";
import prototype from "../../../stores/SearchQueryStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  const _require = searchContext;
  dependencyMap = tab;
  const items = [closure_3, closure_2];
  const items1 = [searchContext, tab];
  return require("../../../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const searchResultsQuery = closure_1_3.getSearchResultsQuery(searchContext);
    return closure_1_2.getMessages(searchContext(tab[3]).getSearchTabFetchId(searchContext, tab, searchResultsQuery));
  }, items1);
};