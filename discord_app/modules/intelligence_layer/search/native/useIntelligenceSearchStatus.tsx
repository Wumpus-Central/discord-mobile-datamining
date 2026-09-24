// discord_app/modules/intelligence_layer/search/native/useIntelligenceSearchStatus.tsx
import SearchUtils from "../../../search/SearchUtils.tsx";
import IntelligenceSearchTypes from "../IntelligenceSearchTypes.tsx";
import SearchQueryStore from "../../../search/native/stores/SearchQueryStore.tsx";
import IntelligenceSearchStore from "../IntelligenceSearchStore.tsx";

const require = globalThis.__r;

require = fn;
const SearchTabs = fn(8209).SearchTabs;
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useIntelligenceSearchStatus.tsx");

export const useIntelligenceSearchStatus = function useIntelligenceSearchStatus(searchContext) {
  _require = searchContext;
  let guildIdFromSearchContext = null;
  if (obj.isSupportedSearchContext(searchContext)) {
    guildIdFromSearchContext = tmp(tmp2[4]).getGuildIdFromSearchContext(searchContext);
    const tmpResult = tmp(tmp2[4]);
  }
  obj = require("IntelligenceSearchUtils");
  const isNlpSearchEnabled = require("IntelligenceSearchExperiments").useIsNlpSearchEnabled(
    guildIdFromSearchContext,
    "search",
  );
  const tmpResult3 = require("IntelligenceSearchExperiments");
  const items = [isNlpSearchEnabled, IntelligenceSearchStore];
  const items1 = [searchContext, guildIdFromSearchContext, isNlpSearchEnabled];
  return require("initialize").useStateFromStoresObject(
    items,
    () => {
      const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_0);
      const searchTabFetchId = SearchUtils.getSearchTabFetchId(closure_0, SearchTabs.MESSAGES, searchResultsQuery);
      if (null != guildIdFromSearchContext) {
        if (isNlpSearchEnabled) {
          let NOT_QUALIFIED2 = IntelligenceSearchStore.getStatus(guildIdFromSearchContext, searchTabFetchId);
          if (NOT_QUALIFIED2 == null) {
            NOT_QUALIFIED2 = IntelligenceSearchTypes.IntelligenceSearchStatus.NOT_QUALIFIED;
          }
          let NOT_QUALIFIED = NOT_QUALIFIED2;
        }
        const obj2 = { status: NOT_QUALIFIED, guildId: guildIdFromSearchContext, requestKey: searchTabFetchId };
        return obj2;
      }
      NOT_QUALIFIED = IntelligenceSearchTypes.IntelligenceSearchStatus.NOT_QUALIFIED;
    },
    items1,
  );
};
