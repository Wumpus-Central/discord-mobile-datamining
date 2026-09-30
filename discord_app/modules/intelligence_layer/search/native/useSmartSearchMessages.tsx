// === Module 16766: useSmartSearchMessages ===

// Module 16766 (useSmartSearchMessages)
import SmartSearchTypes from "SmartSearchTypes" /* 12051 */;
import SmartSearchUtils from "SmartSearchUtils" /* 12052 */;
import noop from "module_19" /* 19 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 12061 */;

require = fn;
const SearchListItemTypes = fn(7499).SearchListItemTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchMessages.tsx");

export const useSmartSearchMessages = function useSmartSearchMessages(searchContext) {
  searchContext = searchContext.searchContext;
  const searchQueryString = searchContext.searchQueryString;
  const hasKeywordResults = searchContext.hasKeywordResults;
  const isKeywordFirstPageLoading = searchContext.isKeywordFirstPageLoading;
  let isNlpSearchEnabled;
  let stateFromStores;
  const items = [searchContext, searchQueryString];
  const memo = hasKeywordResults.useMemo(() => SmartSearchUtils.getSmartSearchQuery(searchContext, searchQueryString), items);
  const smartSearchStatus = searchContext(searchQueryString[4]).useSmartSearchStatus(memo);
  let obj = hasKeywordResults;
  const obj2 = searchContext(searchQueryString[4]);
  let tmp2 = searchContext;
  const tmp3 = searchQueryString;
  let guildId;
  if (memo != null) {
    guildId = memo.guildId;
  }
  isNlpSearchEnabled = searchContext(searchQueryString[5]).useIsNlpSearchEnabled(guildId, "fetch_answer");
  const obj3 = searchContext(searchQueryString[5]);
  const items1 = [isKeywordFirstPageLoading];
  const items2 = [memo];
  stateFromStores = tmp2(tmp3[6]).useStateFromStores(items1, () => {
    let hasSuggestionsResult = null != memo;
    if (hasSuggestionsResult) {
      hasSuggestionsResult = SuggestedSearchStore.hasSuggestions(memo.guildId, memo.channelIds);
    }
    return hasSuggestionsResult;
  }, items2);
  const obj4 = { item: null, status: smartSearchStatus };
  const items3 = [hasKeywordResults, stateFromStores, memo, isKeywordFirstPageLoading, isNlpSearchEnabled, smartSearchStatus];
  obj4.item = obj.useMemo(() => {
    let tmp2 = null;
    if (null != memo) {
      tmp2 = null;
      if (isNlpSearchEnabled) {
        tmp2 = null;
        if (!isKeywordFirstPageLoading) {
          tmp2 = null;
          if (smartSearchStatus !== SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED) {
            if (!tmp6Result.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
              const element = { type: SearchListItemTypes.SMART_SEARCH, props: null };
              const obj = { smartSearchQuery: tmp, hasKeywordResults };
              element.props = obj;
              tmp2 = element;
            } else {
              tmp2 = null;
            }
            tmp6Result = SmartSearchUtils;
          }
        }
      }
    }
    return tmp2;
  }, items3);
  return obj4;
};