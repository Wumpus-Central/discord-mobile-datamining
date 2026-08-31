// === Module 11894: ? ===

// Module 11894
import v1 from "v1" /* 514 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 4668 */;
import SearchTokenTypes from "SearchTokenTypes" /* 11874 */;
import _initializeDefault from "_initialize" /* 11895 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;
import closure_4 from "prototype" /* 11873 */;
import { SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY as closure_5 } from "SearchEntrypointAnalyticsLocations" /* 7589 */;
import ME from "ME" /* 676 */;

require = arg1;
({ SearchTokenTypes: closure_6, AnalyticEvents: error } = ME);
const result = require("set").fileFinishedImporting("modules/search/native/tracking/Tracking.tsx");

export default {
  trackSearchOpened(arg0) {
    ({ searchContext, searchLocation } = arg0);
    let obj = _initializeDefault;
    obj.initialize(searchContext, searchLocation);
    const channelIdFromSearchContext = SearchTokenTypes.getChannelIdFromSearchContext(searchContext);
    const channel = store.getChannel(channelIdFromSearchContext);
    const obj2 = SearchTokenTypes;
    obj = { search_session_id: null, search_location: null, guild_id: null, channel_id: null, channel_type: null };
    const obj3 = collectGuildAnalyticsMetadataDefault;
    obj[0] = _initializeDefault.getSessionId(searchContext);
    obj[1] = searchLocation;
    const obj5 = _initializeDefault;
    obj[2] = SearchTokenTypes.getGuildIdFromSearchContext(searchContext);
    obj[3] = channelIdFromSearchContext;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[4] = type;
    obj3.trackWithMetadata(closure_7.SEARCH_OPENED_MOBILE, obj);
  },
  trackSearchStarted(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = closure_4;
    if (!closure_4.isInitialSearchQuery(searchContext)) {
      _initializeDefault.refreshQueryId(searchContext);
      const obj2 = _initializeDefault;
      const channelIdFromSearchContext = SearchTokenTypes.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj3 = SearchTokenTypes;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_query_id: null, search_location: null, guild_id: null, channel_id: null, channel_type: null, search_query_length: null, search_query_content_length: null };
      const obj4 = collectGuildAnalyticsMetadataDefault;
      obj[0] = _initializeDefault.getSessionId(searchContext);
      const obj6 = _initializeDefault;
      obj[1] = _initializeDefault.getQueryId(searchContext);
      const obj7 = _initializeDefault;
      obj[2] = _initializeDefault.getLocation(searchContext);
      const obj8 = _initializeDefault;
      obj[3] = SearchTokenTypes.getGuildIdFromSearchContext(searchContext);
      obj[4] = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj[5] = type;
      obj[6] = str.trim().length;
      obj[7] = str2.trim().length;
      obj4.trackWithMetadata(closure_7.SEARCH_STARTED_MOBILE, obj);
      const obj9 = SearchTokenTypes;
    }
  },
  trackSearchResultClicked(arg0) {
    ({ searchContext, channelId } = arg0);
    let obj = closure_4;
    ({ index, messageId, userId, entityType } = arg0);
    if (!closure_4.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchTokenTypes.getGuildIdFromSearchContext(searchContext);
      const obj2 = SearchTokenTypes;
      const channelIdFromSearchContext = SearchTokenTypes.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const channel1 = store.getChannel(channelId);
      const obj3 = SearchTokenTypes;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, search_tab_selected: null, search_result_index: null, search_result_click_id: null, search_result_content_entity_type: null, search_result_user_id: null, search_result_message_id: null, search_result_channel_id: null, search_result_guild_id: null, search_result_channel_type: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = collectGuildAnalyticsMetadataDefault;
      obj[0] = _initializeDefault.getSessionId(searchContext);
      const obj6 = _initializeDefault;
      obj[1] = _initializeDefault.getLocation(searchContext);
      const obj7 = _initializeDefault;
      obj[2] = _initializeDefault.getQueryId(searchContext);
      obj[3] = str.trim().length;
      obj[4] = str2.trim().length;
      const obj8 = _initializeDefault;
      obj[5] = _initializeDefault.getSelectedTab(searchContext);
      obj[6] = index;
      const obj9 = _initializeDefault;
      obj[7] = v1.v4();
      obj[8] = entityType;
      obj[9] = userId;
      obj[10] = messageId;
      obj[11] = channelId;
      obj[12] = guildIdFromSearchContext;
      let type;
      if (channel1 != null) {
        type = channel1.type;
      }
      obj[13] = type;
      obj[14] = guildIdFromSearchContext;
      obj[15] = channelIdFromSearchContext;
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      obj[16] = type1;
      obj4.trackWithMetadata(closure_7.SEARCH_RESULT_CLICKED_MOBILE, obj);
      const obj10 = v1;
    }
  },
  trackSearchResultReturned(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = closure_4;
    ({ searchResultTotalCount, numMemberTabReturnedResults, numChannelTabReturnedResults, numPeopleTabReturnedResults, numMessageTabReturnedResults, numMediaTabReturnedResults, numFileTabReturnedResults, numLinkTabReturnedResults } = searchContext);
    if (!closure_4.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchTokenTypes.getGuildIdFromSearchContext(searchContext);
      const obj2 = SearchTokenTypes;
      const channelIdFromSearchContext = SearchTokenTypes.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj3 = SearchTokenTypes;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, search_result_total_count: null, num_member_tab_returned_results: null, num_channel_tab_returned_results: null, num_people_tab_returned_results: null, num_message_tab_returned_results: null, num_media_tab_returned_results: null, num_file_tab_returned_results: null, num_link_tab_returned_results: null, exact_search_result_count_setting_enabled: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = collectGuildAnalyticsMetadataDefault;
      obj[0] = _initializeDefault.getSessionId(searchContext);
      const obj6 = _initializeDefault;
      obj[1] = _initializeDefault.getLocation(searchContext);
      const obj7 = _initializeDefault;
      obj[2] = _initializeDefault.getQueryId(searchContext);
      obj[3] = str.trim().length;
      obj[4] = str2.trim().length;
      obj[5] = searchResultTotalCount;
      obj[6] = numMemberTabReturnedResults;
      obj[7] = numChannelTabReturnedResults;
      obj[8] = numPeopleTabReturnedResults;
      obj[9] = numMessageTabReturnedResults;
      obj[10] = numMediaTabReturnedResults;
      obj[11] = numFileTabReturnedResults;
      obj[12] = numLinkTabReturnedResults;
      const obj8 = _initializeDefault;
      obj[13] = explicitContentFromProto.SearchResultExactCountEnabled.getSetting();
      obj[14] = guildIdFromSearchContext;
      obj[15] = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj[16] = type;
      obj4.trackWithMetadata(closure_7.SEARCH_RESULT_RETURNED_MOBILE, obj);
      const SearchResultExactCountEnabled = explicitContentFromProto.SearchResultExactCountEnabled;
    }
  },
  trackSearchEmptyResult(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = closure_4;
    if (!closure_4.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchTokenTypes.getGuildIdFromSearchContext(searchContext);
      const obj2 = SearchTokenTypes;
      const channelIdFromSearchContext = SearchTokenTypes.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj3 = SearchTokenTypes;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = collectGuildAnalyticsMetadataDefault;
      obj[0] = _initializeDefault.getSessionId(searchContext);
      const obj6 = _initializeDefault;
      obj[1] = _initializeDefault.getLocation(searchContext);
      const obj7 = _initializeDefault;
      obj[2] = _initializeDefault.getQueryId(searchContext);
      obj[3] = str.trim().length;
      obj[4] = str2.trim().length;
      obj[5] = guildIdFromSearchContext;
      obj[6] = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj[7] = type;
      obj4.trackWithMetadata(closure_7.SEARCH_EMPTY_RESULT_MOBILE, obj);
      const obj8 = _initializeDefault;
    }
  },
  trackSearchEmptyMessageResult(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = closure_4;
    if (!closure_4.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchTokenTypes.getGuildIdFromSearchContext(searchContext);
      const obj2 = SearchTokenTypes;
      const channelIdFromSearchContext = SearchTokenTypes.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj3 = SearchTokenTypes;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = collectGuildAnalyticsMetadataDefault;
      obj[0] = _initializeDefault.getSessionId(searchContext);
      const obj6 = _initializeDefault;
      obj[1] = _initializeDefault.getLocation(searchContext);
      const obj7 = _initializeDefault;
      obj[2] = _initializeDefault.getQueryId(searchContext);
      obj[3] = str.trim().length;
      obj[4] = str2.trim().length;
      obj[5] = guildIdFromSearchContext;
      obj[6] = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj[7] = type;
      obj4.trackWithMetadata(closure_7.SEARCH_EMPTY_MESSAGE_RESULT_MOBILE, obj);
      const obj8 = _initializeDefault;
    }
  },
  trackSearchClosed(searchContext) {
    _initializeDefault.terminate(searchContext.searchContext);
  },
  trackSearchIndexing(searchContext) {
    searchContext = searchContext.searchContext;
    ({ isHistoricalIndexing, documentsIndexed } = searchContext);
    let obj = collectGuildAnalyticsMetadataDefault;
    obj = { is_historical_indexing: isHistoricalIndexing, documents_indexed: documentsIndexed, search_tab_selected: _initializeDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_query_id: null };
    const obj3 = _initializeDefault;
    obj[3] = _initializeDefault.getLocation(searchContext);
    const obj4 = _initializeDefault;
    obj[4] = _initializeDefault.getSessionId(searchContext);
    const obj5 = _initializeDefault;
    obj[5] = _initializeDefault.getQueryId(searchContext);
    obj.trackWithMetadata(closure_7.SEARCH_V2_INDEXING_VIEWED, obj);
  },
  trackSearchHistoryClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = store.getChannel(searchContext.channelId);
    let obj = collectGuildAnalyticsMetadataDefault;
    obj = { search_tab_selected: _initializeDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_result_channel_type: null, search_history_type: null };
    const obj3 = _initializeDefault;
    obj[1] = _initializeDefault.getLocation(searchContext);
    const obj4 = _initializeDefault;
    obj[2] = _initializeDefault.getSessionId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[3] = type;
    obj[4] = table[searchContext.searchHistoryItemType];
    obj.trackWithMetadata(closure_7.SEARCH_V2_HISTORY_CLICKED, obj);
  },
  trackSuggestedSearchClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = store.getChannel(searchContext.channelId);
    let obj = collectGuildAnalyticsMetadataDefault;
    obj = { search_tab_selected: _initializeDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_result_channel_type: null };
    const obj3 = _initializeDefault;
    obj[1] = _initializeDefault.getLocation(searchContext);
    const obj4 = _initializeDefault;
    obj[2] = _initializeDefault.getSessionId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[3] = type;
    obj.trackWithMetadata(closure_7.SEARCH_V2_SUGGESTED_CLICKED, obj);
  },
  trackSearchFilterAdd(location) {
    ({ searchContext, searchTokenType } = location);
    let obj = collectGuildAnalyticsMetadataDefault;
    obj = { search_tab_selected: _initializeDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_query_id: null, search_filter_type: null, location: null };
    const obj3 = _initializeDefault;
    obj[1] = _initializeDefault.getLocation(searchContext);
    const obj4 = _initializeDefault;
    obj[2] = _initializeDefault.getSessionId(searchContext);
    const obj5 = _initializeDefault;
    obj[3] = _initializeDefault.getQueryId(searchContext);
    let str = "filter_from";
    if (constants.FILTER_FROM !== searchTokenType) {
      str = "filter_mentions";
      if (tmp.FILTER_MENTIONS !== searchTokenType) {
        str = "filter_in";
        if (tmp.FILTER_IN !== searchTokenType) {
          str = "filter_has";
          if (tmp.FILTER_HAS !== searchTokenType) {
            str = "filter_on";
            if (tmp.FILTER_ON !== searchTokenType) {
              str = "filter_after";
              if (tmp.FILTER_AFTER !== searchTokenType) {
                str = null;
                if (tmp.FILTER_BEFORE === searchTokenType) {
                  str = "filter_before";
                }
              }
            }
          }
        }
      }
    }
    obj[4] = str;
    obj[5] = location.location;
    obj.trackWithMetadata(closure_7.SEARCH_V2_FILTER_ADD, obj);
  },
  trackSearchFilterRemove(isDefault) {
    ({ searchContext, searchTokenType } = isDefault);
    let obj = collectGuildAnalyticsMetadataDefault;
    obj = { search_tab_selected: _initializeDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_query_id: null, search_filter_type: null, is_default_search_filter: null };
    const obj3 = _initializeDefault;
    obj[1] = _initializeDefault.getLocation(searchContext);
    const obj4 = _initializeDefault;
    obj[2] = _initializeDefault.getSessionId(searchContext);
    const obj5 = _initializeDefault;
    obj[3] = _initializeDefault.getQueryId(searchContext);
    let str = "filter_from";
    if (constants.FILTER_FROM !== searchTokenType) {
      str = "filter_mentions";
      if (tmp.FILTER_MENTIONS !== searchTokenType) {
        str = "filter_in";
        if (tmp.FILTER_IN !== searchTokenType) {
          str = "filter_has";
          if (tmp.FILTER_HAS !== searchTokenType) {
            str = "filter_on";
            if (tmp.FILTER_ON !== searchTokenType) {
              str = "filter_after";
              if (tmp.FILTER_AFTER !== searchTokenType) {
                str = null;
                if (tmp.FILTER_BEFORE === searchTokenType) {
                  str = "filter_before";
                }
              }
            }
          }
        }
      }
    }
    obj[4] = str;
    obj[5] = isDefault.isDefault;
    obj.trackWithMetadata(closure_7.SEARCH_V2_FILTER_REMOVE, obj);
  },
  trackSearchTabSelected(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = collectGuildAnalyticsMetadataDefault;
    obj = { search_session_id: _initializeDefault.getSessionId(searchContext), search_query_id: null, search_tab_selected: null, search_location: null };
    const obj3 = _initializeDefault;
    obj[1] = _initializeDefault.getQueryId(searchContext);
    const obj4 = _initializeDefault;
    obj[2] = _initializeDefault.getSelectedTab(searchContext);
    const obj5 = _initializeDefault;
    obj[3] = _initializeDefault.getLocation(searchContext);
    obj.trackWithMetadata(closure_7.SEARCH_V2_TAB_SELECTED, obj);
  },
  trackSearchJumpToMessage(arg0) {
    ({ searchContext, channelId } = arg0);
    const channel = store.getChannel(channelId);
    let obj = collectGuildAnalyticsMetadataDefault;
    obj = { search_tab_selected: _initializeDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_query_id: null, search_result_channel_type: null, search_result_channel_id: null };
    const obj3 = _initializeDefault;
    obj[1] = _initializeDefault.getLocation(searchContext);
    const obj4 = _initializeDefault;
    obj[2] = _initializeDefault.getSessionId(searchContext);
    const obj5 = _initializeDefault;
    obj[3] = _initializeDefault.getQueryId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[4] = type;
    obj[5] = channelId;
    obj.trackWithMetadata(closure_7.SEARCH_V2_JUMP_TO_MESSAGE, obj);
  }
};