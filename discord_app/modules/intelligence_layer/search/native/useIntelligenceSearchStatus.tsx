// === Module 17178: useIntelligenceSearchStatus ===

// Module 17178 (useIntelligenceSearchStatus)
import SearchUtils from "SearchUtils" /* 12674 */;
import IntelligenceSearchTypes from "IntelligenceSearchTypes" /* 12699 */;
import SearchQueryStore from "SearchQueryStore" /* 12673 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 12697 */;

const require = globalThis.__r;

require = fn;
const SearchTabs = fn(8207).SearchTabs;
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
  const isNlpSearchEnabled = require("IntelligenceSearchExperiments").useIsNlpSearchEnabled(guildIdFromSearchContext, "search");
  const tmpResult3 = require("IntelligenceSearchExperiments");
  const items = [isNlpSearchEnabled, IntelligenceSearchStore];
  const items1 = [searchContext, guildIdFromSearchContext, isNlpSearchEnabled];
  return require("initialize").useStateFromStoresObject(items, () => {
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
  }, items1);
};