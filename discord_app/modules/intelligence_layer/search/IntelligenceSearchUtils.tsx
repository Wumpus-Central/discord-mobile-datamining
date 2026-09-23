// === Module 12700: IntelligenceSearchUtils ===

// Module 12700 (IntelligenceSearchUtils)
import MessageRecordUtils from "MessageRecordUtils" /* 5049 */;
import SearchUtils from "SearchUtils" /* 12674 */;
import QueryTokenizer from "QueryTokenizer" /* 12680 */;
import IntelligenceSearchTypes from "IntelligenceSearchTypes" /* 12699 */;
import RelationshipStore from "RelationshipStore" /* 4472 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 12697 */;

require = fn;
function isUnsupportedFilterToken(type) {
  let tmp = type.type !== QueryTokenizer.NON_TOKEN_TYPE;
  if (tmp) {
    tmp = !set.has(type.type);
  }
  return tmp;
}
const MAX_PRESENTED_CITATIONS = fn(12698).MAX_PRESENTED_CITATIONS;
const Constants = fn(1074);
({ SearchTokenTypes, SearchTypes: hasOwnProperty } = Constants);
const SearchTabs = fn(8207).SearchTabs;
const items = [, ];
({ FILTER_IN: arr[0], ANSWER_IN: arr[1] } = SearchTokenTypes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/IntelligenceSearchUtils.tsx");

export const getIntelligenceSearchQuery = function getIntelligenceSearchQuery(searchQueryString) {
  const tokenizeQueryResult = SearchUtils.tokenizeQuery(searchQueryString);
  const searchQueryFromTokens = SearchUtils.getSearchQueryFromTokens(tokenizeQueryResult);
  const nonTokenQuery = SearchUtils.getNonTokenQuery(tokenizeQueryResult);
  let tmp2 = null;
  if (0 !== nonTokenQuery.length) {
    tmp2 = null;
    if (!tokenizeQueryResult.some(isUnsupportedFilterToken)) {
      const obj2 = { queryText: nonTokenQuery, channelIds: null };
      let channel_id = searchQueryFromTokens.channel_id;
      if (channel_id == null) {
        channel_id = [];
      }
      obj2.channelIds = channel_id;
      tmp2 = obj2;
    }
  }
  return tmp2;
};
export const isSupportedSearchContext = function isSupportedSearchContext(type) {
  return type.type === constants.GUILD || type.type === tmp.GUILD_CHANNEL;
};
export const hydrateAndFilterCitations = function hydrateAndFilterCitations(response) {
  const message_citations = response.message_citations;
  const mapped = message_citations.map((sourceId) => {
    const obj = { sourceId: sourceId.source_id, sourceType: sourceId.source_type, guildId: sourceId.guild_id, channelId: sourceId.channel_id, messageId: sourceId.message_id, message: MessageRecordUtils.createMessageRecord(sourceId.message) };
    return obj;
  });
  return mapped.filter((message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message));
};
export const resolveSearchStatus = function resolveSearchStatus(response, length) {
  const search_status = response.search_status;
  if ("not_qualified" === search_status) {
    return IntelligenceSearchTypes.IntelligenceSearchStatus.NOT_QUALIFIED;
  } else if ("no_results" === search_status) {
    return IntelligenceSearchTypes.IntelligenceSearchStatus.EMPTY;
  } else if ("success" === search_status) {
    if (length > 0) {
      let EMPTY = IntelligenceSearchTypes.IntelligenceSearchStatus.LOADED;
    } else {
      EMPTY = IntelligenceSearchTypes.IntelligenceSearchStatus.EMPTY;
    }
    return EMPTY;
  } else {
    return IntelligenceSearchTypes.IntelligenceSearchStatus.ERROR;
  }
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
export const getIntelligenceSearchStatus = function getIntelligenceSearchStatus(searchContext, searchResultsQuery) {
  const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
  let status = null;
  if (null != guildIdFromSearchContext) {
    status = IntelligenceSearchStore.getStatus(guildIdFromSearchContext, SearchUtils.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchResultsQuery));
    const tmpResult = SearchUtils;
  }
  return status;
};
export const isIntelligenceSearchActive = function isIntelligenceSearchActive(intelligenceStatus) {
  return intelligenceStatus === IntelligenceSearchTypes.IntelligenceSearchStatus.LOADING || intelligenceStatus === IntelligenceSearchTypes.IntelligenceSearchStatus.LOADED;
};
export const isIntelligenceSearchEmptyOrErrored = function isIntelligenceSearchEmptyOrErrored(status) {
  return status === IntelligenceSearchTypes.IntelligenceSearchStatus.EMPTY || status === IntelligenceSearchTypes.IntelligenceSearchStatus.ERROR;
};
export const getIntelligenceSearchCitationsCount = function getIntelligenceSearchCitationsCount(searchContext, searchResultsQuery, arg2) {
  const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
  if (null == guildIdFromSearchContext) {
    return 0;
  } else {
    const answer = IntelligenceSearchStore.getAnswer(guildIdFromSearchContext, SearchUtils.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchResultsQuery));
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
      bound = Math.min(num, MAX_PRESENTED_CITATIONS);
    }
    return bound;
  }
};