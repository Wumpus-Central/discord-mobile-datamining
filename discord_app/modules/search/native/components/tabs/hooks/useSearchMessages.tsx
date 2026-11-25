// === Module 18961: useSearchMessages ===

// Module 18961 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 13241 */;
import SearchMessageStore from "SearchMessageStore" /* 6922 */;
import SearchQueryStore from "SearchQueryStore" /* 13248 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export function useSearchMessages(searchContext, tab) {
  _require = searchContext;
  dependencyMap = tab;
  items = [SearchQueryStore, SearchMessageStore];
  const items1 = [searchContext, tab];
  return require("initialize").useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_0);
    return SearchMessageStore.getMessages(SearchUtils.getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
  }, items1);
}