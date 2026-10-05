// === Module 11982: search/tracking/Tracking ===

// Module 11982 (search/tracking/Tracking)
import v1 from "v1" /* 1266 */;
import UserSettings from "UserSettings" /* 2028 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import TrackingConstants from "TrackingConstants" /* 7512 */;
import SearchUtils from "SearchUtils" /* 11968 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 11983 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let closure_5 = TrackingConstants.SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
({ SearchTokenTypes: metroRequire, AnalyticEvents: metroImportDefault } = Constants);
let obj = {
  trackSearchOpened(arg0) {
    let obj4;
    let obj5;
    let searchContext;
    let searchLocation;
    let type;
    ({ searchContext, searchLocation } = arg0);
    const obj = SearchSessionAnalyticsManagerDefault;
    obj.initialize(searchContext, searchLocation);
    const obj2 = SearchUtils;
    const channelIdFromSearchContext = obj2.getChannelIdFromSearchContext(searchContext);
    const channel = ChannelStore.getChannel(channelIdFromSearchContext);
    const obj3 = { search_session_id: obj4.getSessionId(searchContext), search_location: searchLocation, guild_id: obj5.getGuildIdFromSearchContext(searchContext), channel_id: channelIdFromSearchContext, channel_type: type };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_OPENED_MOBILE = metroImportDefault.SEARCH_OPENED_MOBILE;
    AppAnalyticsUtilsDefault;
    obj4 = SearchSessionAnalyticsManagerDefault;
    type = undefined;
    obj5 = SearchUtils;
    if (channel != null) {
      type = channel.type;
    }
    trackWithMetadata(SEARCH_OPENED_MOBILE, obj3);
  },
  trackSearchStarted(searchContext) {
    let obj5;
    let obj6;
    let obj7;
    let obj8;
    let type;
    searchContext = searchContext.searchContext;
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const obj2 = SearchSessionAnalyticsManagerDefault;
      obj2.refreshQueryId(searchContext);
      const obj3 = SearchUtils;
      const channelIdFromSearchContext = obj3.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj4 = { search_session_id: obj5.getSessionId(searchContext), search_query_id: obj6.getQueryId(searchContext), search_location: obj7.getLocation(searchContext), guild_id: obj8.getGuildIdFromSearchContext(searchContext), channel_id: channelIdFromSearchContext, channel_type: type, search_query_length: str.trim().length, search_query_content_length: str2.trim().length };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const SEARCH_STARTED_MOBILE = metroImportDefault.SEARCH_STARTED_MOBILE;
      AppAnalyticsUtilsDefault;
      obj5 = SearchSessionAnalyticsManagerDefault;
      obj6 = SearchSessionAnalyticsManagerDefault;
      obj7 = SearchSessionAnalyticsManagerDefault;
      type = undefined;
      obj8 = SearchUtils;
      if (channel != null) {
        type = channel.type;
      }
      trackWithMetadata(SEARCH_STARTED_MOBILE, obj4);
    }
  },
  trackSearchResultClicked(arg0) {
    let channelId;
    let entityType;
    let index;
    let messageId;
    let obj5;
    let obj6;
    let obj7;
    let obj8;
    let obj9;
    let searchContext;
    let type;
    let type1;
    let userId;
    ({ searchContext, channelId } = arg0);
    ({ index, messageId, userId, entityType } = arg0);
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const obj2 = SearchUtils;
      const guildIdFromSearchContext = obj2.getGuildIdFromSearchContext(searchContext);
      const obj3 = SearchUtils;
      const channelIdFromSearchContext = obj3.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const channel1 = ChannelStore.getChannel(channelId);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj4 = { search_session_id: obj5.getSessionId(searchContext), search_location: obj6.getLocation(searchContext), search_query_id: obj7.getQueryId(searchContext), search_query_length: str.trim().length, search_query_content_length: str2.trim().length, search_tab_selected: obj8.getSelectedTab(searchContext), search_result_index: index, search_result_click_id: obj9.v4(), search_result_content_entity_type: entityType, search_result_user_id: userId, search_result_message_id: messageId, search_result_channel_id: channelId, search_result_guild_id: guildIdFromSearchContext, search_result_channel_type: type, guild_id: guildIdFromSearchContext, channel_id: channelIdFromSearchContext, channel_type: type1 };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const SEARCH_RESULT_CLICKED_MOBILE = metroImportDefault.SEARCH_RESULT_CLICKED_MOBILE;
      AppAnalyticsUtilsDefault;
      obj5 = SearchSessionAnalyticsManagerDefault;
      obj6 = SearchSessionAnalyticsManagerDefault;
      obj7 = SearchSessionAnalyticsManagerDefault;
      obj8 = SearchSessionAnalyticsManagerDefault;
      type = undefined;
      obj9 = v1;
      if (channel1 != null) {
        type = channel1.type;
      }
      type1 = undefined;
      if (channel != null) {
        type1 = channel.type;
      }
      trackWithMetadata(SEARCH_RESULT_CLICKED_MOBILE, obj4);
    }
  },
  trackSearchResultReturned(searchContext) {
    let SearchResultExactCountEnabled;
    let numChannelTabReturnedResults;
    let numFileTabReturnedResults;
    let numLinkTabReturnedResults;
    let numMediaTabReturnedResults;
    let numMemberTabReturnedResults;
    let numMessageTabReturnedResults;
    let numPeopleTabReturnedResults;
    let obj5;
    let obj6;
    let obj7;
    let searchResultTotalCount;
    let type;
    searchContext = searchContext.searchContext;
    ({ searchResultTotalCount, numMemberTabReturnedResults, numChannelTabReturnedResults, numPeopleTabReturnedResults, numMessageTabReturnedResults, numMediaTabReturnedResults, numFileTabReturnedResults, numLinkTabReturnedResults } = searchContext);
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const obj2 = SearchUtils;
      const guildIdFromSearchContext = obj2.getGuildIdFromSearchContext(searchContext);
      const obj3 = SearchUtils;
      const channelIdFromSearchContext = obj3.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj4 = { search_session_id: obj5.getSessionId(searchContext), search_location: obj6.getLocation(searchContext), search_query_id: obj7.getQueryId(searchContext), search_query_length: str.trim().length, search_query_content_length: str2.trim().length, search_result_total_count: searchResultTotalCount, num_member_tab_returned_results: numMemberTabReturnedResults, num_channel_tab_returned_results: numChannelTabReturnedResults, num_people_tab_returned_results: numPeopleTabReturnedResults, num_message_tab_returned_results: numMessageTabReturnedResults, num_media_tab_returned_results: numMediaTabReturnedResults, num_file_tab_returned_results: numFileTabReturnedResults, num_link_tab_returned_results: numLinkTabReturnedResults, exact_search_result_count_setting_enabled: SearchResultExactCountEnabled.getSetting(), guild_id: guildIdFromSearchContext, channel_id: channelIdFromSearchContext, channel_type: type };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const SEARCH_RESULT_RETURNED_MOBILE = metroImportDefault.SEARCH_RESULT_RETURNED_MOBILE;
      AppAnalyticsUtilsDefault;
      obj5 = SearchSessionAnalyticsManagerDefault;
      obj6 = SearchSessionAnalyticsManagerDefault;
      obj7 = SearchSessionAnalyticsManagerDefault;
      type = undefined;
      SearchResultExactCountEnabled = UserSettings.SearchResultExactCountEnabled;
      if (channel != null) {
        type = channel.type;
      }
      trackWithMetadata(SEARCH_RESULT_RETURNED_MOBILE, obj4);
    }
  },
  trackSearchEmptyResult(searchContext) {
    let obj5;
    let obj6;
    let obj7;
    let type;
    searchContext = searchContext.searchContext;
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const obj2 = SearchUtils;
      const guildIdFromSearchContext = obj2.getGuildIdFromSearchContext(searchContext);
      const obj3 = SearchUtils;
      const channelIdFromSearchContext = obj3.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj4 = { search_session_id: obj5.getSessionId(searchContext), search_location: obj6.getLocation(searchContext), search_query_id: obj7.getQueryId(searchContext), search_query_length: str.trim().length, search_query_content_length: str2.trim().length, guild_id: guildIdFromSearchContext, channel_id: channelIdFromSearchContext, channel_type: type };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const SEARCH_EMPTY_RESULT_MOBILE = metroImportDefault.SEARCH_EMPTY_RESULT_MOBILE;
      AppAnalyticsUtilsDefault;
      obj5 = SearchSessionAnalyticsManagerDefault;
      obj6 = SearchSessionAnalyticsManagerDefault;
      type = undefined;
      obj7 = SearchSessionAnalyticsManagerDefault;
      if (channel != null) {
        type = channel.type;
      }
      trackWithMetadata(SEARCH_EMPTY_RESULT_MOBILE, obj4);
    }
  },
  trackSearchEmptyMessageResult(searchContext) {
    let obj5;
    let obj6;
    let obj7;
    let type;
    searchContext = searchContext.searchContext;
    if (!SearchQueryStore.isInitialSearchQuery(searchContext)) {
      const obj2 = SearchUtils;
      const guildIdFromSearchContext = obj2.getGuildIdFromSearchContext(searchContext);
      const obj3 = SearchUtils;
      const channelIdFromSearchContext = obj3.getChannelIdFromSearchContext(searchContext);
      const channel = ChannelStore.getChannel(channelIdFromSearchContext);
      const str = SearchQueryStore.getQueryString(searchContext);
      const str2 = SearchQueryStore.getTextInputValue(searchContext);
      const obj4 = { search_session_id: obj5.getSessionId(searchContext), search_location: obj6.getLocation(searchContext), search_query_id: obj7.getQueryId(searchContext), search_query_length: str.trim().length, search_query_content_length: str2.trim().length, guild_id: guildIdFromSearchContext, channel_id: channelIdFromSearchContext, channel_type: type };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const SEARCH_EMPTY_MESSAGE_RESULT_MOBILE = metroImportDefault.SEARCH_EMPTY_MESSAGE_RESULT_MOBILE;
      AppAnalyticsUtilsDefault;
      obj5 = SearchSessionAnalyticsManagerDefault;
      obj6 = SearchSessionAnalyticsManagerDefault;
      type = undefined;
      obj7 = SearchSessionAnalyticsManagerDefault;
      if (channel != null) {
        type = channel.type;
      }
      trackWithMetadata(SEARCH_EMPTY_MESSAGE_RESULT_MOBILE, obj4);
    }
  },
  trackSearchClosed(searchContext) {
    searchContext = searchContext.searchContext;
    const obj = SearchSessionAnalyticsManagerDefault;
    obj.terminate(searchContext);
  },
  trackSearchIndexing(searchContext) {
    let documentsIndexed;
    let isHistoricalIndexing;
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    searchContext = searchContext.searchContext;
    ({ isHistoricalIndexing, documentsIndexed } = searchContext);
    const obj = { is_historical_indexing: isHistoricalIndexing, documents_indexed: documentsIndexed, search_tab_selected: obj2.getSelectedTab(searchContext), search_location: obj3.getLocation(searchContext), search_session_id: obj4.getSessionId(searchContext), search_query_id: obj5.getQueryId(searchContext) };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_V2_INDEXING_VIEWED = metroImportDefault.SEARCH_V2_INDEXING_VIEWED;
    AppAnalyticsUtilsDefault;
    obj2 = SearchSessionAnalyticsManagerDefault;
    obj3 = SearchSessionAnalyticsManagerDefault;
    obj4 = SearchSessionAnalyticsManagerDefault;
    obj5 = SearchSessionAnalyticsManagerDefault;
    trackWithMetadata(SEARCH_V2_INDEXING_VIEWED, obj);
  },
  trackSearchHistoryClicked(searchContext) {
    let obj2;
    let obj3;
    let obj4;
    let type;
    searchContext = searchContext.searchContext;
    const searchHistoryItemType = searchContext.searchHistoryItemType;
    const channel = ChannelStore.getChannel(searchContext.channelId);
    const tmp2 = closure_5[searchHistoryItemType];
    const obj = { search_tab_selected: obj2.getSelectedTab(searchContext), search_location: obj3.getLocation(searchContext), search_session_id: obj4.getSessionId(searchContext), search_result_channel_type: type, search_history_type: tmp2 };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_V2_HISTORY_CLICKED = metroImportDefault.SEARCH_V2_HISTORY_CLICKED;
    AppAnalyticsUtilsDefault;
    obj2 = SearchSessionAnalyticsManagerDefault;
    obj3 = SearchSessionAnalyticsManagerDefault;
    type = undefined;
    obj4 = SearchSessionAnalyticsManagerDefault;
    if (channel != null) {
      type = channel.type;
    }
    trackWithMetadata(SEARCH_V2_HISTORY_CLICKED, obj);
  },
  trackSuggestedSearchClicked(searchContext) {
    let obj2;
    let obj3;
    let obj4;
    let type;
    searchContext = searchContext.searchContext;
    const channel = ChannelStore.getChannel(searchContext.channelId);
    const obj = { search_tab_selected: obj2.getSelectedTab(searchContext), search_location: obj3.getLocation(searchContext), search_session_id: obj4.getSessionId(searchContext), search_result_channel_type: type };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_V2_SUGGESTED_CLICKED = metroImportDefault.SEARCH_V2_SUGGESTED_CLICKED;
    AppAnalyticsUtilsDefault;
    obj2 = SearchSessionAnalyticsManagerDefault;
    obj3 = SearchSessionAnalyticsManagerDefault;
    type = undefined;
    obj4 = SearchSessionAnalyticsManagerDefault;
    if (channel != null) {
      type = channel.type;
    }
    trackWithMetadata(SEARCH_V2_SUGGESTED_CLICKED, obj);
  },
  trackSearchFilterAdd(location) {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let searchContext;
    let searchTokenType;
    let str;
    ({ searchContext, searchTokenType } = location);
    const _location = location.location;
    const obj = { search_tab_selected: obj2.getSelectedTab(searchContext), search_location: obj3.getLocation(searchContext), search_session_id: obj4.getSessionId(searchContext), search_query_id: obj5.getQueryId(searchContext), search_filter_type: str, location: _location };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_V2_FILTER_ADD = metroImportDefault.SEARCH_V2_FILTER_ADD;
    AppAnalyticsUtilsDefault;
    obj2 = SearchSessionAnalyticsManagerDefault;
    obj3 = SearchSessionAnalyticsManagerDefault;
    obj4 = SearchSessionAnalyticsManagerDefault;
    str = "filter_from";
    obj5 = SearchSessionAnalyticsManagerDefault;
    if (metroRequire.FILTER_FROM !== searchTokenType) {
      str = "filter_mentions";
      if (metroRequire.FILTER_MENTIONS !== searchTokenType) {
        str = "filter_in";
        if (metroRequire.FILTER_IN !== searchTokenType) {
          str = "filter_has";
          if (metroRequire.FILTER_HAS !== searchTokenType) {
            str = "filter_on";
            if (metroRequire.FILTER_ON !== searchTokenType) {
              str = "filter_after";
              if (metroRequire.FILTER_AFTER !== searchTokenType) {
                str = null;
                if (metroRequire.FILTER_BEFORE === searchTokenType) {
                  str = "filter_before";
                }
              }
            }
          }
        }
      }
    }
    trackWithMetadata(SEARCH_V2_FILTER_ADD, obj);
  },
  trackSearchFilterRemove(isDefault) {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let searchContext;
    let searchTokenType;
    let str;
    ({ searchContext, searchTokenType } = isDefault);
    isDefault = isDefault.isDefault;
    const obj = { search_tab_selected: obj2.getSelectedTab(searchContext), search_location: obj3.getLocation(searchContext), search_session_id: obj4.getSessionId(searchContext), search_query_id: obj5.getQueryId(searchContext), search_filter_type: str, is_default_search_filter: isDefault };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_V2_FILTER_REMOVE = metroImportDefault.SEARCH_V2_FILTER_REMOVE;
    AppAnalyticsUtilsDefault;
    obj2 = SearchSessionAnalyticsManagerDefault;
    obj3 = SearchSessionAnalyticsManagerDefault;
    obj4 = SearchSessionAnalyticsManagerDefault;
    str = "filter_from";
    obj5 = SearchSessionAnalyticsManagerDefault;
    if (metroRequire.FILTER_FROM !== searchTokenType) {
      str = "filter_mentions";
      if (metroRequire.FILTER_MENTIONS !== searchTokenType) {
        str = "filter_in";
        if (metroRequire.FILTER_IN !== searchTokenType) {
          str = "filter_has";
          if (metroRequire.FILTER_HAS !== searchTokenType) {
            str = "filter_on";
            if (metroRequire.FILTER_ON !== searchTokenType) {
              str = "filter_after";
              if (metroRequire.FILTER_AFTER !== searchTokenType) {
                str = null;
                if (metroRequire.FILTER_BEFORE === searchTokenType) {
                  str = "filter_before";
                }
              }
            }
          }
        }
      }
    }
    trackWithMetadata(SEARCH_V2_FILTER_REMOVE, obj);
  },
  trackSearchTabSelected(searchContext) {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    searchContext = searchContext.searchContext;
    const obj = { search_session_id: obj2.getSessionId(searchContext), search_query_id: obj3.getQueryId(searchContext), search_tab_selected: obj4.getSelectedTab(searchContext), search_location: obj5.getLocation(searchContext) };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_V2_TAB_SELECTED = metroImportDefault.SEARCH_V2_TAB_SELECTED;
    AppAnalyticsUtilsDefault;
    obj2 = SearchSessionAnalyticsManagerDefault;
    obj3 = SearchSessionAnalyticsManagerDefault;
    obj4 = SearchSessionAnalyticsManagerDefault;
    obj5 = SearchSessionAnalyticsManagerDefault;
    trackWithMetadata(SEARCH_V2_TAB_SELECTED, obj);
  },
  trackSearchJumpToMessage(arg0) {
    let channelId;
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let searchContext;
    let type;
    ({ searchContext, channelId } = arg0);
    const channel = ChannelStore.getChannel(channelId);
    const obj = { search_tab_selected: obj2.getSelectedTab(searchContext), search_location: obj3.getLocation(searchContext), search_session_id: obj4.getSessionId(searchContext), search_query_id: obj5.getQueryId(searchContext), search_result_channel_type: type, search_result_channel_id: channelId };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SEARCH_V2_JUMP_TO_MESSAGE = metroImportDefault.SEARCH_V2_JUMP_TO_MESSAGE;
    AppAnalyticsUtilsDefault;
    obj2 = SearchSessionAnalyticsManagerDefault;
    obj3 = SearchSessionAnalyticsManagerDefault;
    obj4 = SearchSessionAnalyticsManagerDefault;
    type = undefined;
    obj5 = SearchSessionAnalyticsManagerDefault;
    if (channel != null) {
      type = channel.type;
    }
    trackWithMetadata(SEARCH_V2_JUMP_TO_MESSAGE, obj);
  }
};
const result = size.fileFinishedImporting("modules/search/native/tracking/Tracking.tsx");

export default obj;