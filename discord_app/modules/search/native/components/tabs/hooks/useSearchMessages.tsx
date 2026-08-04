// discord_app/modules/search/native/components/tabs/hooks/useSearchMessages.tsx
import handleReaction from "handleReaction";
import prototype from "prototype";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  const _require = searchContext;
  const dependencyMap = tab;
  const items = [prototype, handleReaction];
  const items1 = [searchContext, tab];
  return _require(589).useStateFromStores(items, () => {
    const searchResultsQuery = outer1_3.getSearchResultsQuery(searchContext);
    return outer1_2.getMessages(searchContext(tab[3]).getSearchTabFetchId(searchContext, tab, searchResultsQuery));
  }, items1);
};