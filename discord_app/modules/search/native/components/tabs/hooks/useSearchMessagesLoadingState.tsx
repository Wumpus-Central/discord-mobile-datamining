import { initialize } from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import { useFullscreenPlaceholderCount } from "../../../hooks/usePlaceholderStyles.tsx";
// discord_app/modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx
import handleReaction from "handleReaction";
import prototype from "prototype";
import { SEARCH_TABS_TO_SEARCH_QUERY_LIMITS as closure_4 } from "MessageEmbedTypes";

const require = arg1;
const result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export const useSearchMessagesLoadingState = function useSearchMessagesLoadingState(arg0) {
  let dependencyMap;
  let numColumns;
  let placeholderHeight;
  let require;
  ({ searchContext: require, tab: dependencyMap } = arg0);
  let handleReaction;
  ({ placeholderHeight, numColumns } = arg0);
  handleReaction = useFullscreenPlaceholderCount /* useFullscreenPlaceholderCount */.useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  let obj = useFullscreenPlaceholderCount /* useFullscreenPlaceholderCount */;
  const items = [prototype, handleReaction];
  return initialize /* initialize */.useStateFromStoresObject(items, () => {
    let obj = outer1_0(outer1_1[5]);
    const searchTabFetchId = obj.getSearchTabFetchId(closure_0, closure_1, outer1_3.getSearchResultsQuery(closure_0));
    const isInitialFetchComplete = store.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp5;
    if (isInitialFetchComplete) {
      isFetching = store.getIsFetching(searchTabFetchId);
    }
    obj = { isFirstPageLoading: tmp5, isNextPageLoading: isFetching, placeholderCount: null };
    if (!isInitialFetchComplete) {
      let num = Math.max(store, outer1_4[tmp2]);
    } else {
      num = 0;
    }
    obj[2] = num;
    return obj;
  });
};