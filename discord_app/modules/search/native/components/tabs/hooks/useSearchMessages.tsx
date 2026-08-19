// === Module 15914: useSearchMessages ===

// Module 15914 (useSearchMessages)
import handleReaction from "handleReaction" /* 4971 */;
import prototype from "prototype" /* 11510 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  const _require = searchContext;
  dependencyMap = tab;
  const items = [closure_3, closure_2];
  const items1 = [searchContext, tab];
  return _require(589).useStateFromStores(items, () => {
    const searchResultsQuery = closure_1_3.getSearchResultsQuery(searchContext);
    return closure_1_2.getMessages(searchContext(tab[3]).getSearchTabFetchId(searchContext, tab, searchResultsQuery));
  }, items1);
};