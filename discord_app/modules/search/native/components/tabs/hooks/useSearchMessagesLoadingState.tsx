// discord_app/modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import SearchUtils from "../../../../SearchUtils.tsx";
import usePlaceholderStyles from "../../../hooks/usePlaceholderStyles.tsx";
import SearchMessageStore from "../../../../SearchMessageStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";

require = fn;
let closure_4 = fn(9247).SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx",
);

export const useSearchMessagesLoadingState = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSearchMessagesLoadingState(searchContext) {
      const cResult = searchContext(tab[4]).c(8);
      searchContext = searchContext.searchContext;
      tab = searchContext.tab;
      ({ placeholderHeight, numColumns } = searchContext);
      if (cResult[0] === numColumns) {
        if (cResult[1] === placeholderHeight) {
          let tmp4 = cResult[2];
        }
        const fullscreenPlaceholderCount = tmp(tmp2[5]).useFullscreenPlaceholderCount(tmp4);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SearchQueryStore, fullscreenPlaceholderCount];
          cResult[3] = items;
          let tmp7 = items;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === fullscreenPlaceholderCount) {
          if (cResult[5] === searchContext) {
            if (cResult[6] === tab) {
              let tmp10 = cResult[7];
            }
            return tmp(tmp2[7]).useStateFromStoresObject(tmp7, tmp10);
          }
        }
        const fn = function p() {
          const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
          const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, tab, searchResultsQuery);
          const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
          let isFetching = !tmp5;
          if (isInitialFetchComplete) {
            isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
          }
          const obj2 = {
            isFirstPageLoading: !isInitialFetchComplete,
            isNextPageLoading: isFetching,
            placeholderCount: null,
          };
          if (!isInitialFetchComplete) {
            let num = Math.max(fullscreenPlaceholderCount, closure_4[tab]);
          } else {
            num = 0;
          }
          obj2.placeholderCount = num;
          return obj2;
        };
        cResult[4] = fullscreenPlaceholderCount;
        cResult[5] = searchContext;
        cResult[6] = tab;
        cResult[7] = fn;
        tmp10 = fn;
        const tmpResult = tmp(tmp2[5]);
      }
      let obj2 = { placeholderHeight, numColumns };
      cResult[0] = numColumns;
      cResult[1] = placeholderHeight;
      cResult[2] = obj2;
      tmp4 = obj2;
      const obj = searchContext(tab[4]);
    }
  : function useSearchMessagesLoadingState(arg0) {
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
        const obj2 = {
          isFirstPageLoading: !isInitialFetchComplete,
          isNextPageLoading: isFetching,
          placeholderCount: null,
        };
        if (!isInitialFetchComplete) {
          let num = Math.max(closure_2, closure_4[dependencyMap]);
        } else {
          num = 0;
        }
        obj2.placeholderCount = num;
        return obj2;
      });
    };
