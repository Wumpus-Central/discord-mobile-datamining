// === Module 12358: search/tracking/Tracking ===

// Module 12358 (search/tracking/Tracking)
import v1 from "v1" /* 1256 */;
import UserSettings from "UserSettings" /* 1935 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import SearchUtils from "SearchUtils" /* 12340 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12359 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

require = fn;
let closure_5 = fn(7877).SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
const Constants = fn(1074);
({ SearchTokenTypes: metroRequire, AnalyticEvents: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/tracking/Tracking.tsx");

export default {
  trackSearchOpened(arg0) {
    ({ searchContext, searchLocation } = arg0);
    let obj = SearchSessionAnalyticsManagerDefault;
    obj.initialize(searchContext, searchLocation);
    const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
    const channel = ChannelStore.getChannel(channelIdFromSearchContext);
    obj = { search_session_id: null, search_location: null, guild_id: null, channel_id: null, channel_type: null };
    const obj3 = AppAnalyticsUtilsDefault;
    obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj.search_location = searchLocation;
    obj.guild_id = SearchUtils.getGuildIdFromSearchContext(searchContext);
    obj.channel_id = channelIdFromSearchContext;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj.channel_type = type;
    obj3.trackWithMetadata(React5.SEARCH_OPENED_MOBILE, obj);
  },
  trackSearchStarted(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = SearchQueryStore;
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      SearchSessionAnalyticsManagerDefault.refreshQueryId(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_query_id: null, search_location: null, guild_id: null, channel_id: null, channel_type: null, search_query_length: null, search_query_content_length: null };
      const obj4 = AppAnalyticsUtilsDefault;
      obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj.guild_id = SearchUtils.getGuildIdFromSearchContext(searchContext);
      obj.channel_id = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj4.trackWithMetadata(React5.SEARCH_STARTED_MOBILE, obj);
    }
  },
  trackSearchResultClicked(arg0) {
    ({ searchContext, channelId } = arg0);
    let obj = SearchQueryStore;
    ({ index, messageId, userId, entityType } = arg0);
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const channel1 = ChannelStore.getChannel(channelId);
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, search_tab_selected: null, search_result_index: null, search_result_click_id: null, search_result_content_entity_type: null, search_result_user_id: null, search_result_message_id: null, search_result_channel_id: null, search_result_guild_id: null, search_result_channel_type: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = AppAnalyticsUtilsDefault;
      obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
      obj.search_result_index = index;
      obj.search_result_click_id = v1.v4();
      obj.search_result_content_entity_type = entityType;
      obj.search_result_user_id = userId;
      obj.search_result_message_id = messageId;
      obj.search_result_channel_id = channelId;
      obj.search_result_guild_id = guildIdFromSearchContext;
      let type;
      if (channel1 != null) {
        type = channel1.type;
      }
      obj.search_result_channel_type = type;
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      obj.channel_type = type1;
      obj4.trackWithMetadata(React5.SEARCH_RESULT_CLICKED_MOBILE, obj);
    }
  },
  trackSearchResultReturned(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = SearchQueryStore;
    ({ searchResultTotalCount, numMemberTabReturnedResults, numChannelTabReturnedResults, numPeopleTabReturnedResults, numMessageTabReturnedResults, numMediaTabReturnedResults, numFileTabReturnedResults, numLinkTabReturnedResults } = searchContext);
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, search_result_total_count: null, num_member_tab_returned_results: null, num_channel_tab_returned_results: null, num_people_tab_returned_results: null, num_message_tab_returned_results: null, num_media_tab_returned_results: null, num_file_tab_returned_results: null, num_link_tab_returned_results: null, exact_search_result_count_setting_enabled: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = AppAnalyticsUtilsDefault;
      obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj.search_result_total_count = searchResultTotalCount;
      obj.num_member_tab_returned_results = numMemberTabReturnedResults;
      obj.num_channel_tab_returned_results = numChannelTabReturnedResults;
      obj.num_people_tab_returned_results = numPeopleTabReturnedResults;
      obj.num_message_tab_returned_results = numMessageTabReturnedResults;
      obj.num_media_tab_returned_results = numMediaTabReturnedResults;
      obj.num_file_tab_returned_results = numFileTabReturnedResults;
      obj.num_link_tab_returned_results = numLinkTabReturnedResults;
      obj.exact_search_result_count_setting_enabled = UserSettings.SearchResultExactCountEnabled.getSetting();
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj4.trackWithMetadata(React5.SEARCH_RESULT_RETURNED_MOBILE, obj);
      const SearchResultExactCountEnabled = UserSettings.SearchResultExactCountEnabled;
    }
  },
  trackSearchEmptyResult(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = SearchQueryStore;
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = AppAnalyticsUtilsDefault;
      obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj4.trackWithMetadata(React5.SEARCH_EMPTY_RESULT_MOBILE, obj);
    }
  },
  trackSearchEmptyMessageResult(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = SearchQueryStore;
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = AppAnalyticsUtilsDefault;
      obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj4.trackWithMetadata(React5.SEARCH_EMPTY_MESSAGE_RESULT_MOBILE, obj);
    }
  },
  trackSearchClosed(searchContext) {
    SearchSessionAnalyticsManagerDefault.terminate(searchContext.searchContext);
  },
  trackSearchIndexing(searchContext) {
    searchContext = searchContext.searchContext;
    ({ isHistoricalIndexing, documentsIndexed } = searchContext);
    const obj = { is_historical_indexing: isHistoricalIndexing, documents_indexed: documentsIndexed, search_tab_selected: SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_query_id: null };
    obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
    obj.trackWithMetadata(React5.SEARCH_V2_INDEXING_VIEWED, obj);
  },
  trackSearchHistoryClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = ChannelStore.getChannel(searchContext.channelId);
    const obj = { search_tab_selected: SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_result_channel_type: null, search_history_type: null };
    obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj.search_result_channel_type = type;
    obj.search_history_type = closure_5[searchContext.searchHistoryItemType];
    obj.trackWithMetadata(React5.SEARCH_V2_HISTORY_CLICKED, obj);
  },
  trackSuggestedSearchClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = ChannelStore.getChannel(searchContext.channelId);
    const obj = { search_tab_selected: SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_result_channel_type: null };
    obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj.search_result_channel_type = type;
    obj.trackWithMetadata(React5.SEARCH_V2_SUGGESTED_CLICKED, obj);
  },
  trackSearchFilterAdd(location) {
    ({ searchContext, searchTokenType } = location);
    const obj = { search_tab_selected: SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_query_id: null, search_filter_type: null, location: null };
    obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
    let str = "filter_from";
    if (constants.FILTER_FROM !== searchTokenType) {
      str = "filter_mentions";
      if (constants.FILTER_MENTIONS !== searchTokenType) {
        str = "filter_in";
        if (constants.FILTER_IN !== searchTokenType) {
          str = "filter_has";
          if (constants.FILTER_HAS !== searchTokenType) {
            str = "filter_on";
            if (constants.FILTER_ON !== searchTokenType) {
              str = "filter_after";
              if (constants.FILTER_AFTER !== searchTokenType) {
                str = null;
                if (constants.FILTER_BEFORE === searchTokenType) {
                  str = "filter_before";
                }
              }
            }
          }
        }
      }
    }
    obj.search_filter_type = str;
    obj.location = location.location;
    obj.trackWithMetadata(React5.SEARCH_V2_FILTER_ADD, obj);
  },
  trackSearchFilterRemove(isDefault) {
    ({ searchContext, searchTokenType } = isDefault);
    const obj = { search_tab_selected: SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_query_id: null, search_filter_type: null, is_default_search_filter: null };
    obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
    let str = "filter_from";
    if (constants.FILTER_FROM !== searchTokenType) {
      str = "filter_mentions";
      if (constants.FILTER_MENTIONS !== searchTokenType) {
        str = "filter_in";
        if (constants.FILTER_IN !== searchTokenType) {
          str = "filter_has";
          if (constants.FILTER_HAS !== searchTokenType) {
            str = "filter_on";
            if (constants.FILTER_ON !== searchTokenType) {
              str = "filter_after";
              if (constants.FILTER_AFTER !== searchTokenType) {
                str = null;
                if (constants.FILTER_BEFORE === searchTokenType) {
                  str = "filter_before";
                }
              }
            }
          }
        }
      }
    }
    obj.search_filter_type = str;
    obj.is_default_search_filter = isDefault.isDefault;
    obj.trackWithMetadata(React5.SEARCH_V2_FILTER_REMOVE, obj);
  },
  trackSearchTabSelected(searchContext) {
    searchContext = searchContext.searchContext;
    const obj = { search_session_id: SearchSessionAnalyticsManagerDefault.getSessionId(searchContext), search_query_id: null, search_tab_selected: null, search_location: null };
    obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
    obj.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
    obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj.trackWithMetadata(React5.SEARCH_V2_TAB_SELECTED, obj);
  },
  trackSearchJumpToMessage(arg0) {
    ({ searchContext, channelId } = arg0);
    const channel = ChannelStore.getChannel(channelId);
    const obj = { search_tab_selected: SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext), search_location: null, search_session_id: null, search_query_id: null, search_result_channel_type: null, search_result_channel_id: null };
    obj.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj.search_result_channel_type = type;
    obj.search_result_channel_id = channelId;
    obj.trackWithMetadata(React5.SEARCH_V2_JUMP_TO_MESSAGE, obj);
  }
};