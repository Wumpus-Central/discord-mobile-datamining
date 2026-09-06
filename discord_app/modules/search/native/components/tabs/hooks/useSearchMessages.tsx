// discord_app/modules/search/native/components/tabs/hooks/useSearchMessages.tsx
import SearchUtils from "../../../../SearchUtils.tsx";
import SearchMessageStore from "../../../../SearchMessageStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  _require = searchContext;
  dependencyMap = tab;
  const items = [SearchQueryStore, SearchMessageStore];
  const items1 = [searchContext, tab];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_0);
      return SearchMessageStore.getMessages(SearchUtils.getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
    },
    items1,
  );
};
