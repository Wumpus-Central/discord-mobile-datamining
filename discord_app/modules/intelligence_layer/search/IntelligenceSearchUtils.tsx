// discord_app/modules/intelligence_layer/search/IntelligenceSearchUtils.tsx
import MessageRecordUtils from "../../messages/MessageRecordUtils.tsx";
import SearchUtils from "../../search/SearchUtils.tsx";
import QueryTokenizer from "../../../lib/QueryTokenizer.tsx";
import IntelligenceSearchTypes from "IntelligenceSearchTypes.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
function isUnsupportedFilterToken(type) {
  let tmp = type.type !== QueryTokenizer.NON_TOKEN_TYPE;
  if (tmp) {
    tmp = !set.has(type.type);
  }
  return tmp;
}
const Constants = fn(1074);
({ SearchTokenTypes, SearchTypes: c3 } = Constants);
const items = [,];
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
    const obj = {
      sourceId: sourceId.source_id,
      sourceType: sourceId.source_type,
      guildId: sourceId.guild_id,
      channelId: sourceId.channel_id,
      messageId: sourceId.message_id,
      message: MessageRecordUtils.createMessageRecord(sourceId.message),
    };
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
