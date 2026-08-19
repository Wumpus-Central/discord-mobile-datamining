// === Module 15915: useSearchMessagesLoadingState ===

// Module 15915 (useSearchMessagesLoadingState)
import initialize from "initialize" /* 589 */;
import SearchTokenTypes from "SearchTokenTypes" /* 11511 */;
import useFullscreenPlaceholderCount from "useFullscreenPlaceholderCount" /* 15870 */;
import handleReaction from "handleReaction" /* 4971 */;
import prototype from "prototype" /* 11510 */;
import { SEARCH_TABS_TO_SEARCH_QUERY_LIMITS as closure_4 } from "MessageEmbedTypes" /* 8507 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export const useSearchMessagesLoadingState = function useSearchMessagesLoadingState(arg0) {
  ({ searchContext: require, tab: dependencyMap } = arg0);
  ({ placeholderHeight, numColumns } = arg0);
  closure_2 = useFullscreenPlaceholderCount.useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  const items = [closure_3, closure_2];
  return initialize.useStateFromStoresObject(items, () => {
    let obj = SearchTokenTypes;
    const searchTabFetchId = obj.getSearchTabFetchId(closure_0, closure_1, closure_1_3.getSearchResultsQuery(closure_0));
    const isInitialFetchComplete = store.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp5;
    if (isInitialFetchComplete) {
      isFetching = store.getIsFetching(searchTabFetchId);
    }
    obj = { isFirstPageLoading: tmp5, isNextPageLoading: isFetching, placeholderCount: null };
    if (!isInitialFetchComplete) {
      let num = Math.max(store, closure_1_4[closure_1]);
    } else {
      num = 0;
    }
    obj[2] = num;
    return obj;
  });
};