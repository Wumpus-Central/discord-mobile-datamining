// discord_app/modules/search/native/tracking/Tracking.tsx
import v1 from "../../../../../_runtime/01255_v1.js";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import SearchUtils from "../../SearchUtils.tsx";
import SearchSessionAnalyticsManagerDefault from "../../managers/native/SearchSessionAnalyticsManager.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SearchQueryStore from "../stores/SearchQueryStore.tsx";

require = fn;
let closure_5 = fn(7297).SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
const Constants = fn(1074);
({ SearchTokenTypes: metroRequire, AnalyticEvents: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/tracking/Tracking.tsx");

export default {
  trackSearchOpened(arg0) {
    ({ searchContext, searchLocation } = arg0);
    SearchSessionAnalyticsManagerDefault.initialize(searchContext, searchLocation);
    const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
    const channel = ChannelStore.getChannel(channelIdFromSearchContext);
    const obj4 = {
      search_session_id: null,
      search_location: null,
      guild_id: null,
      channel_id: null,
      channel_type: null,
    };
    const obj3 = AppAnalyticsUtilsDefault;
    obj4.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj4.search_location = searchLocation;
    obj4.guild_id = SearchUtils.getGuildIdFromSearchContext(searchContext);
    obj4.channel_id = channelIdFromSearchContext;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj4.channel_type = type;
    obj3.trackWithMetadata(React5.SEARCH_OPENED_MOBILE, obj4);
  },
  trackSearchStarted(searchContext) {
    searchContext = searchContext.searchContext;
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      SearchSessionAnalyticsManagerDefault.refreshQueryId(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj5 = {
        search_session_id: null,
        search_query_id: null,
        search_location: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        search_query_length: null,
        search_query_content_length: null,
      };
      const obj4 = AppAnalyticsUtilsDefault;
      obj5.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj5.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj5.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj5.guild_id = SearchUtils.getGuildIdFromSearchContext(searchContext);
      obj5.channel_id = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj5.channel_type = type;
      obj5.search_query_length = str.trim().length;
      obj5.search_query_content_length = str2.trim().length;
      obj4.trackWithMetadata(React5.SEARCH_STARTED_MOBILE, obj5);
    }
  },
  trackSearchResultClicked(arg0) {
    ({ searchContext, channelId } = arg0);
    ({ index, messageId, userId, entityType } = arg0);
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const channel1 = ChannelStore.getChannel(channelId);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj5 = {
        search_session_id: null,
        search_location: null,
        search_query_id: null,
        search_query_length: null,
        search_query_content_length: null,
        search_tab_selected: null,
        search_result_index: null,
        search_result_click_id: null,
        search_result_content_entity_type: null,
        search_result_user_id: null,
        search_result_message_id: null,
        search_result_channel_id: null,
        search_result_guild_id: null,
        search_result_channel_type: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
      };
      const obj4 = AppAnalyticsUtilsDefault;
      obj5.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj5.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj5.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj5.search_query_length = str.trim().length;
      obj5.search_query_content_length = str2.trim().length;
      obj5.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
      obj5.search_result_index = index;
      obj5.search_result_click_id = v1.v4();
      obj5.search_result_content_entity_type = entityType;
      obj5.search_result_user_id = userId;
      obj5.search_result_message_id = messageId;
      obj5.search_result_channel_id = channelId;
      obj5.search_result_guild_id = guildIdFromSearchContext;
      let type;
      if (channel1 != null) {
        type = channel1.type;
      }
      obj5.search_result_channel_type = type;
      obj5.guild_id = guildIdFromSearchContext;
      obj5.channel_id = channelIdFromSearchContext;
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      obj5.channel_type = type1;
      obj4.trackWithMetadata(React5.SEARCH_RESULT_CLICKED_MOBILE, obj5);
    }
  },
  trackSearchResultReturned(searchContext) {
    searchContext = searchContext.searchContext;
    ({
      searchResultTotalCount,
      numMemberTabReturnedResults,
      numChannelTabReturnedResults,
      numPeopleTabReturnedResults,
      numMessageTabReturnedResults,
      numMediaTabReturnedResults,
      numFileTabReturnedResults,
      numLinkTabReturnedResults,
    } = searchContext);
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj5 = {
        search_session_id: null,
        search_location: null,
        search_query_id: null,
        search_query_length: null,
        search_query_content_length: null,
        search_result_total_count: null,
        num_member_tab_returned_results: null,
        num_channel_tab_returned_results: null,
        num_people_tab_returned_results: null,
        num_message_tab_returned_results: null,
        num_media_tab_returned_results: null,
        num_file_tab_returned_results: null,
        num_link_tab_returned_results: null,
        exact_search_result_count_setting_enabled: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
      };
      const obj4 = AppAnalyticsUtilsDefault;
      obj5.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj5.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj5.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj5.search_query_length = str.trim().length;
      obj5.search_query_content_length = str2.trim().length;
      obj5.search_result_total_count = searchResultTotalCount;
      obj5.num_member_tab_returned_results = numMemberTabReturnedResults;
      obj5.num_channel_tab_returned_results = numChannelTabReturnedResults;
      obj5.num_people_tab_returned_results = numPeopleTabReturnedResults;
      obj5.num_message_tab_returned_results = numMessageTabReturnedResults;
      obj5.num_media_tab_returned_results = numMediaTabReturnedResults;
      obj5.num_file_tab_returned_results = numFileTabReturnedResults;
      obj5.num_link_tab_returned_results = numLinkTabReturnedResults;
      obj5.exact_search_result_count_setting_enabled = UserSettings.SearchResultExactCountEnabled.getSetting();
      obj5.guild_id = guildIdFromSearchContext;
      obj5.channel_id = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj5.channel_type = type;
      obj4.trackWithMetadata(React5.SEARCH_RESULT_RETURNED_MOBILE, obj5);
      const SearchResultExactCountEnabled = UserSettings.SearchResultExactCountEnabled;
    }
  },
  trackSearchEmptyResult(searchContext) {
    searchContext = searchContext.searchContext;
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj5 = {
        search_session_id: null,
        search_location: null,
        search_query_id: null,
        search_query_length: null,
        search_query_content_length: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
      };
      const obj4 = AppAnalyticsUtilsDefault;
      obj5.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj5.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj5.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj5.search_query_length = str.trim().length;
      obj5.search_query_content_length = str2.trim().length;
      obj5.guild_id = guildIdFromSearchContext;
      obj5.channel_id = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj5.channel_type = type;
      obj4.trackWithMetadata(React5.SEARCH_EMPTY_RESULT_MOBILE, obj5);
    }
  },
  trackSearchEmptyMessageResult(searchContext) {
    searchContext = searchContext.searchContext;
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = SearchUtils.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj5 = {
        search_session_id: null,
        search_location: null,
        search_query_id: null,
        search_query_length: null,
        search_query_content_length: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
      };
      const obj4 = AppAnalyticsUtilsDefault;
      obj5.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
      obj5.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
      obj5.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
      obj5.search_query_length = str.trim().length;
      obj5.search_query_content_length = str2.trim().length;
      obj5.guild_id = guildIdFromSearchContext;
      obj5.channel_id = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj5.channel_type = type;
      obj4.trackWithMetadata(React5.SEARCH_EMPTY_MESSAGE_RESULT_MOBILE, obj5);
    }
  },
  trackSearchClosed(searchContext) {
    SearchSessionAnalyticsManagerDefault.terminate(searchContext.searchContext);
  },
  trackSearchIndexing(searchContext) {
    searchContext = searchContext.searchContext;
    ({ isHistoricalIndexing, documentsIndexed } = searchContext);
    const obj2 = {
      is_historical_indexing: isHistoricalIndexing,
      documents_indexed: documentsIndexed,
      search_tab_selected: null,
      search_location: null,
      search_session_id: null,
      search_query_id: null,
    };
    const obj = AppAnalyticsUtilsDefault;
    obj2.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
    obj2.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj2.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj2.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
    obj.trackWithMetadata(React5.SEARCH_V2_INDEXING_VIEWED, obj2);
  },
  trackSearchHistoryClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = ChannelStore.getChannel(searchContext.channelId);
    const obj2 = {
      search_tab_selected: null,
      search_location: null,
      search_session_id: null,
      search_result_channel_type: null,
      search_history_type: null,
    };
    const obj = AppAnalyticsUtilsDefault;
    obj2.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
    obj2.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj2.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj2.search_result_channel_type = type;
    obj2.search_history_type = closure_5[searchContext.searchHistoryItemType];
    obj.trackWithMetadata(React5.SEARCH_V2_HISTORY_CLICKED, obj2);
  },
  trackSuggestedSearchClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = ChannelStore.getChannel(searchContext.channelId);
    const obj2 = {
      search_tab_selected: null,
      search_location: null,
      search_session_id: null,
      search_result_channel_type: null,
    };
    const obj = AppAnalyticsUtilsDefault;
    obj2.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
    obj2.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj2.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj2.search_result_channel_type = type;
    obj.trackWithMetadata(React5.SEARCH_V2_SUGGESTED_CLICKED, obj2);
  },
  trackSearchFilterAdd(location) {
    ({ searchContext, searchTokenType } = location);
    const obj2 = {
      search_tab_selected: null,
      search_location: null,
      search_session_id: null,
      search_query_id: null,
      search_filter_type: null,
      location: null,
    };
    const obj = AppAnalyticsUtilsDefault;
    obj2.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
    obj2.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj2.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj2.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
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
    obj2.search_filter_type = str;
    obj2.location = location.location;
    obj.trackWithMetadata(React5.SEARCH_V2_FILTER_ADD, obj2);
  },
  trackSearchFilterRemove(isDefault) {
    ({ searchContext, searchTokenType } = isDefault);
    const obj2 = {
      search_tab_selected: null,
      search_location: null,
      search_session_id: null,
      search_query_id: null,
      search_filter_type: null,
      is_default_search_filter: null,
    };
    const obj = AppAnalyticsUtilsDefault;
    obj2.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
    obj2.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj2.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj2.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
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
    obj2.search_filter_type = str;
    obj2.is_default_search_filter = isDefault.isDefault;
    obj.trackWithMetadata(React5.SEARCH_V2_FILTER_REMOVE, obj2);
  },
  trackSearchTabSelected(searchContext) {
    searchContext = searchContext.searchContext;
    const obj2 = { search_session_id: null, search_query_id: null, search_tab_selected: null, search_location: null };
    const obj = AppAnalyticsUtilsDefault;
    obj2.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj2.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
    obj2.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
    obj2.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj.trackWithMetadata(React5.SEARCH_V2_TAB_SELECTED, obj2);
  },
  trackSearchJumpToMessage(arg0) {
    ({ searchContext, channelId } = arg0);
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = {
      search_tab_selected: null,
      search_location: null,
      search_session_id: null,
      search_query_id: null,
      search_result_channel_type: null,
      search_result_channel_id: null,
    };
    const obj = AppAnalyticsUtilsDefault;
    obj2.search_tab_selected = SearchSessionAnalyticsManagerDefault.getSelectedTab(searchContext);
    obj2.search_location = SearchSessionAnalyticsManagerDefault.getLocation(searchContext);
    obj2.search_session_id = SearchSessionAnalyticsManagerDefault.getSessionId(searchContext);
    obj2.search_query_id = SearchSessionAnalyticsManagerDefault.getQueryId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj2.search_result_channel_type = type;
    obj2.search_result_channel_id = channelId;
    obj.trackWithMetadata(React5.SEARCH_V2_JUMP_TO_MESSAGE, obj2);
  },
};
