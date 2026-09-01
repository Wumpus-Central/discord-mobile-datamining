// discord_app/modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import useFullscreenPlaceholderCount from "../../../hooks/usePlaceholderStyles.tsx";
import closure_2 from "../../../../SearchMessageStore.tsx";
import closure_3 from "../../../stores/SearchQueryStore.tsx";
import { SEARCH_TABS_TO_SEARCH_QUERY_LIMITS as closure_4 } from "../../../../SearchConstants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx",
);

export const useSearchMessagesLoadingState = function useSearchMessagesLoadingState(arg0) {
  ({ searchContext: require, tab: dependencyMap } = arg0);
  closure_2 = undefined;
  ({ placeholderHeight, numColumns } = arg0);
  closure_2 = useFullscreenPlaceholderCount.useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  let obj = useFullscreenPlaceholderCount;
  const items = [closure_3, closure_2];
  return initialize.useStateFromStoresObject(items, () => {
    let obj = closure_1_0(closure_1_1[5]);
    const searchTabFetchId = obj.getSearchTabFetchId(
      closure_0,
      closure_1,
      closure_1_3.getSearchResultsQuery(closure_0),
    );
    const isInitialFetchComplete = store.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp5;
    if (isInitialFetchComplete) {
      isFetching = store.getIsFetching(searchTabFetchId);
    }
    obj = { isFirstPageLoading: tmp5, isNextPageLoading: isFetching, placeholderCount: null };
    if (!isInitialFetchComplete) {
      let num = Math.max(store, closure_1_4[tmp2]);
    } else {
      num = 0;
    }
    obj[2] = num;
    return obj;
  });
};
