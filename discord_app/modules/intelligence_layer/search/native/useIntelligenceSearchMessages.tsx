// === Module 17271: useIntelligenceSearchMessages ===

// Module 17271 (useIntelligenceSearchMessages)
import IntelligenceSearchUtils from "IntelligenceSearchUtils" /* 12700 */;
import noop from "module_19" /* 19 */;

require = fn;
const SearchListItemTypes = fn(8207).SearchListItemTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useIntelligenceSearchMessages.tsx");

export const useIntelligenceSearchMessages = function useIntelligenceSearchMessages(searchContext) {
  searchContext = searchContext.searchContext;
  const hasKeywordResults = searchContext.hasKeywordResults;
  const isKeywordFirstPageLoading = searchContext.isKeywordFirstPageLoading;
  const intelligenceSearchStatus = searchContext(hasKeywordResults[2]).useIntelligenceSearchStatus(searchContext);
  const guildId = intelligenceSearchStatus.guildId;
  const requestKey = intelligenceSearchStatus.requestKey;
  const status = intelligenceSearchStatus.status;
  let obj2 = { item: null, status };
  const items = [status, guildId, hasKeywordResults, isKeywordFirstPageLoading, requestKey, searchContext];
  obj2.item = isKeywordFirstPageLoading.useMemo(() => {
    let tmp2 = null;
    if (null != guildId) {
      tmp2 = null;
      if (!isKeywordFirstPageLoading) {
        tmp2 = null;
        if (obj.isIntelligenceSearchActive(status)) {
          const element = { type: SearchListItemTypes.INTELLIGENCE_SMART_SEARCH, props: null };
          const obj2 = { searchContext, guildId: tmp, requestKey, hasKeywordResults };
          element.props = obj2;
          tmp2 = element;
        }
        obj = IntelligenceSearchUtils;
      }
    }
    return tmp2;
  }, items);
  return obj2;
};