// === Module 16694: useSearchMessagesLoadingState ===

// Module 16694 (useSearchMessagesLoadingState)
import initialize from "initialize" /* 504 */;
import SearchUtils from "SearchUtils" /* 12340 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16646 */;
import SearchMessageStore from "SearchMessageStore" /* 7281 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

require = fn;
let closure_4 = fn(7878).SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export const useSearchMessagesLoadingState = function useSearchMessagesLoadingState(arg0) {
  ({ searchContext: require, tab: dependencyMap } = arg0);
  ({ placeholderHeight, numColumns } = arg0);
  closure_2 = usePlaceholderStyles.useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  const items = [SearchQueryStore, closure_2];
  return initialize.useStateFromStoresObject(items, () => {
    let obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(closure_1_0, dependencyMap, SearchQueryStore.getSearchResultsQuery(closure_1_0));
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp5;
    if (isInitialFetchComplete) {
      isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    }
    obj = { isFirstPageLoading: tmp5, isNextPageLoading: isFetching, placeholderCount: null };
    if (!isInitialFetchComplete) {
      let num = Math.max(closure_2, closure_4[tmp2]);
    } else {
      num = 0;
    }
    obj.placeholderCount = num;
    return obj;
  });
};