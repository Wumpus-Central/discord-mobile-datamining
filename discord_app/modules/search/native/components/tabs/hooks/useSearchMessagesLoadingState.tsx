// === Module 16942: useSearchMessagesLoadingState ===

// Module 16942 (useSearchMessagesLoadingState)
import initialize from "initialize" /* 504 */;
import SearchUtils from "SearchUtils" /* 12492 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16889 */;
import SearchMessageStore from "SearchMessageStore" /* 7395 */;
import SearchQueryStore from "SearchQueryStore" /* 12491 */;

require = fn;
let closure_4 = fn(8000).SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export const useSearchMessagesLoadingState = function useSearchMessagesLoadingState(arg0) {
  ({ searchContext: require, tab: dependencyMap } = arg0);
  ({ placeholderHeight, numColumns } = arg0);
  closure_2 = usePlaceholderStyles.useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  const items = [SearchQueryStore, closure_2];
  return initialize.useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_1_0);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(closure_1_0, dependencyMap, searchResultsQuery);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp5;
    if (isInitialFetchComplete) {
      isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    }
    const obj2 = { isFirstPageLoading: !isInitialFetchComplete, isNextPageLoading: isFetching, placeholderCount: null };
    if (!isInitialFetchComplete) {
      let num = Math.max(closure_2, closure_4[dependencyMap]);
    } else {
      num = 0;
    }
    obj2.placeholderCount = num;
    return obj2;
  });
};