// === Module 12056: SmartSearchUtils ===

// Module 12056 (SmartSearchUtils)
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 12057 */;
import SmartSearchTypes from "SmartSearchTypes" /* 12058 */;
import QueryTokenizer from "QueryTokenizer" /* 12059 */;
import SearchUtils from "SearchUtils" /* 12060 */;

require = fn;
function isUnsupportedFilterToken(type) {
  let tmp = type.type !== QueryTokenizer.NON_TOKEN_TYPE;
  if (tmp) {
    tmp = !set.has(type.type);
  }
  return tmp;
}
SmartSearchResultsStoreDefault;
const SmartSearchConstants = fn(12055);
({ MAX_PRESENTED_CITATIONS: c3, SUGGESTED_SEARCH_CHANNEL_KEY_DELIMITER: closure_4 } = SmartSearchConstants);
const Constants = fn(1085);
({ SearchTokenTypes, SearchTypes: hasOwnProperty } = Constants);
const SearchTabs = fn(9247).SearchTabs;
let items = [, ];
({ FILTER_IN: arr[0], ANSWER_IN: arr[1] } = SearchTokenTypes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchUtils.tsx");

export const getSmartSearchQuery = function getSmartSearchQuery(searchContext, searchQueryString) {
  if (tmp2) {
    const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
    if (null == guildIdFromSearchContext) {
      return null;
    } else {
      const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchQueryString);
      const tmp4Result = SearchUtils;
      const tokenizeQueryResult = SearchUtils.tokenizeQuery(searchQueryString);
      const tmp4Result4 = SearchUtils;
      const searchQueryFromTokens = SearchUtils.getSearchQueryFromTokens(tokenizeQueryResult);
      const tmp4Result5 = SearchUtils;
      const nonTokenQuery = SearchUtils.getNonTokenQuery(tokenizeQueryResult);
      let tmp8 = null;
      if (!tokenizeQueryResult.some(isUnsupportedFilterToken)) {
        const obj2 = { queryText: nonTokenQuery, requestKey: searchTabFetchId, guildId: guildIdFromSearchContext, channelIds: null, searchContext: null, searchQueryString: null };
        let channel_id = searchQueryFromTokens.channel_id;
        if (channel_id == null) {
          channel_id = [];
        }
        obj2.channelIds = channel_id;
        obj2.searchContext = searchContext;
        obj2.searchQueryString = searchQueryString;
        tmp8 = obj2;
      }
      return tmp8;
    }
  } else {
    return null;
  }
  tmp2 = searchContext.type === constants.GUILD || searchContext.type === tmp.GUILD_CHANNEL;
};
export const isSupportedSearchContext = function isSupportedSearchContext(type) {
  return type.type === constants.GUILD || type.type === tmp.GUILD_CHANNEL;
};
export const getChannelFilterKey = function getChannelFilterKey(channelIds) {
  const items = [...channelIds];
  const sorted = items.sort();
  return sorted.join(React4);
};
export const getChannelIdsForFilterKey = function getChannelIdsForFilterKey(item) {
  return item.split(React4);
};
export const parseConversationId = function parseConversationId(sourceId) {
  const match = /\/(\d+)$/.exec(sourceId);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  if (tmp2 == null) {
    tmp2 = sourceId;
  }
  return tmp2;
};
export const getSmartSearchStatus = function getSmartSearchStatus(smartSearchQuery) {
  let obj = SmartSearchResultsStore;
  if (SmartSearchResultsStore === undefined) {
    obj = SmartSearchResultsStore;
  }
  let NOT_QUALIFIED = obj.getStatus(smartSearchQuery.guildId, smartSearchQuery.requestKey);
  if (NOT_QUALIFIED == null) {
    NOT_QUALIFIED = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
  }
  return NOT_QUALIFIED;
};
export const isSmartSearchEmptyOrErrored = function isSmartSearchEmptyOrErrored(smartSearchStatus) {
  return smartSearchStatus === SmartSearchTypes.SmartSearchStatus.EMPTY || smartSearchStatus === SmartSearchTypes.SmartSearchStatus.ERROR;
};
export const getSmartSearchCitationsCount = function getSmartSearchCitationsCount(searchContext, searchResultsQuery, arg2) {
  const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
  if (null == guildIdFromSearchContext) {
    return 0;
  } else {
    const answer = SmartSearchResultsStore.getAnswer(guildIdFromSearchContext, SearchUtils.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchResultsQuery));
    let num;
    if (answer != null) {
      num = answer.citations.length;
    }
    if (num == null) {
      num = 0;
    }
    let bound = num;
    if (arg2) {
      const _Math = Math;
      bound = Math.min(num, React3);
    }
    return bound;
  }
};