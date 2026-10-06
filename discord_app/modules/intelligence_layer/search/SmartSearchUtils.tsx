// discord_app/modules/intelligence_layer/search/SmartSearchUtils.tsx
import SearchConstants from "../../search/SearchConstants.tsx";
import SmartSearchTypes from "SmartSearchTypes.tsx";
import QueryTokenizer from "../../../lib/QueryTokenizer.tsx";
import SearchUtils from "../../search/SearchUtils.tsx";
import SmartSearchResultsStore from "SmartSearchResultsStore.tsx";
import SmartSearchConstants from "SmartSearchConstants.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let SearchTokenTypes;
let c3;
let closure_4;
let hasOwnProperty;
function isUnsupportedFilterToken(type) {
  const tmp = type.type !== QueryTokenizer.NON_TOKEN_TYPE && !set.has(type.type);
  return tmp;
}
({ MAX_PRESENTED_CITATIONS: c3, SUGGESTED_SEARCH_CHANNEL_KEY_DELIMITER: closure_4 } = SmartSearchConstants);
({ SearchTokenTypes, SearchTypes: hasOwnProperty } = Constants);
const SearchTabs = SearchConstants.SearchTabs;
let items = [,];
({ FILTER_IN: arr[0], ANSWER_IN: arr[1] } = SearchTokenTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchUtils.tsx");

export const getSmartSearchQuery = function getSmartSearchQuery(searchContext, searchQueryString) {
  let channel_id;
  const tmp2 = searchContext.type === hasOwnProperty.GUILD || searchContext.type === tmp.GUILD_CHANNEL;
  if (tmp2) {
    const obj = SearchUtils;
    const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
    if (null == guildIdFromSearchContext) {
      return null;
    } else {
      const tmp4Result = SearchUtils;
      const searchTabFetchId = tmp4Result.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchQueryString);
      const tmp4Result4 = SearchUtils;
      const tokenizeQueryResult = tmp4Result4.tokenizeQuery(searchQueryString);
      const tmp4Result5 = SearchUtils;
      const searchQueryFromTokens = tmp4Result5.getSearchQueryFromTokens(tokenizeQueryResult);
      const tmp4Result6 = SearchUtils;
      const nonTokenQuery = tmp4Result6.getNonTokenQuery(tokenizeQueryResult);
      let tmp8 = null;
      if (!tokenizeQueryResult.some(isUnsupportedFilterToken)) {
        const obj2 = {
          queryText: nonTokenQuery,
          requestKey: searchTabFetchId,
          guildId: guildIdFromSearchContext,
          channelIds: channel_id,
          searchContext,
          searchQueryString,
        };
        channel_id = searchQueryFromTokens.channel_id;
        if (channel_id == null) {
          channel_id = [];
        }
        tmp8 = obj2;
      }
      return tmp8;
    }
  } else {
    return null;
  }
};
export const isSupportedSearchContext = function isSupportedSearchContext(type) {
  return type.type === hasOwnProperty.GUILD || type.type === tmp.GUILD_CHANNEL;
};
export const getChannelFilterKey = function getChannelFilterKey(channelIds) {
  const items = [...channelIds];
  const sorted = items.sort();
  return sorted.join(React3);
};
export const getChannelIdsForFilterKey = function getChannelIdsForFilterKey(item) {
  return item.split(React3);
};
export const parseConversationId = function parseConversationId(sourceId) {
  const obj = /\/(\d+)$/;
  const match = obj.exec(sourceId);
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
  const tmp3 =
    smartSearchStatus === SmartSearchTypes.SmartSearchStatus.EMPTY ||
    smartSearchStatus === SmartSearchTypes.SmartSearchStatus.ERROR;
  return tmp3;
};
export const getSmartSearchCitationsCount = function getSmartSearchCitationsCount(
  searchContext,
  searchResultsQuery,
  arg2,
) {
  const obj = SearchUtils;
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
  if (null == guildIdFromSearchContext) {
    return 0;
  } else {
    const getAnswer = SmartSearchResultsStore.getAnswer;
    const tmpResult = SearchUtils;
    const answer = getAnswer(
      guildIdFromSearchContext,
      tmpResult.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchResultsQuery),
    );
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
      bound = Math.min(num, _false);
    }
    return bound;
  }
};
