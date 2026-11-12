// === Module 19272: useCanShowNoSearchResults ===

// Module 19272 (useCanShowNoSearchResults)
import SearchQueryStore from "SearchQueryStore" /* 14641 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useCanShowNoSearchResults.tsx");

export function useCanShowNoSearchResults(searchContext, visibleTabCounts) {
  _require = searchContext;
  items = [SearchQueryStore];
  const items1 = [searchContext];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    const isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(closure_0);
    let tmp3 = !isInitialSearchQueryResult;
    if (!isInitialSearchQueryResult) {
      tmp3 = !SearchQueryStore.isAutocompleteVisible(closure_0);
    }
    if (tmp3) {
      tmp3 = SearchQueryStore.getSearchResultsQuery(closure_0) === SearchQueryStore.getQueryString(closure_0);
      const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_0);
    }
    return tmp3;
  }, items1);
  if (stateFromStores) {
    stateFromStores = null != visibleTabCounts;
  }
  return stateFromStores;
}