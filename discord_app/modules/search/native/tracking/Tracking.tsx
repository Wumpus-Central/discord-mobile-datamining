// === Module 10253: ? ===

// Module 10253
import ensureGuildLoaded from "ensureGuildLoaded";
import prototype from "prototype";
import { SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY as closure_5 } from "SearchEntrypointAnalyticsLocations";
import ME from "ME";

let closure_6;
let error;
const require = arg1;
({ SearchTokenTypes: closure_6, AnalyticEvents: error } = ME);
const result = require("SearchEntrypointAnalyticsLocations").fileFinishedImporting("modules/search/native/tracking/Tracking.tsx");

export default {
  trackSearchOpened(arg0) {
    let searchContext;
    let searchLocation;
    ({ searchContext, searchLocation } = arg0);
    let obj = importDefault(10268);
    obj.initialize(searchContext, searchLocation);
    const channelIdFromSearchContext = require(10255) /* SearchTokenTypes */.getChannelIdFromSearchContext(searchContext);
    const channel = store.getChannel(channelIdFromSearchContext);
    const obj2 = require(10255) /* SearchTokenTypes */;
    obj = { search_session_id: null, search_location: null, guild_id: null, channel_id: null, channel_type: null };
    const obj3 = importDefault(4450);
    obj[0] = importDefault(10268).getSessionId(searchContext);
    obj[1] = searchLocation;
    const obj5 = importDefault(10268);
    obj[2] = require(10255) /* SearchTokenTypes */.getGuildIdFromSearchContext(searchContext);
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
    let obj = prototype;
    if (!prototype.isInitialSearchQuery(searchContext)) {
      importDefault(10268).refreshQueryId(searchContext);
      const obj2 = importDefault(10268);
      const channelIdFromSearchContext = require(10255) /* SearchTokenTypes */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj3 = require(10255) /* SearchTokenTypes */;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_query_id: null, search_location: null, guild_id: null, channel_id: null, channel_type: null, search_query_length: null, search_query_content_length: null };
      const obj4 = importDefault(4450);
      obj[0] = importDefault(10268).getSessionId(searchContext);
      const obj6 = importDefault(10268);
      obj[1] = importDefault(10268).getQueryId(searchContext);
      const obj7 = importDefault(10268);
      obj[2] = importDefault(10268).getLocation(searchContext);
      const obj8 = importDefault(10268);
      obj[3] = require(10255) /* SearchTokenTypes */.getGuildIdFromSearchContext(searchContext);
      obj[4] = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj[5] = type;
      obj[6] = str.trim().length;
      obj[7] = str2.trim().length;
      obj4.trackWithMetadata(closure_7.SEARCH_STARTED_MOBILE, obj);
      const obj9 = require(10255) /* SearchTokenTypes */;
    }
  },
  trackSearchResultClicked(arg0) {
    let channelId;
    let entityType;
    let index;
    let messageId;
    let searchContext;
    let userId;
    ({ searchContext, channelId } = arg0);
    let obj = prototype;
    ({ index, messageId, userId, entityType } = arg0);
    if (!prototype.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = require(10255) /* SearchTokenTypes */.getGuildIdFromSearchContext(searchContext);
      const obj2 = require(10255) /* SearchTokenTypes */;
      const channelIdFromSearchContext = require(10255) /* SearchTokenTypes */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const channel1 = store.getChannel(channelId);
      const obj3 = require(10255) /* SearchTokenTypes */;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, search_tab_selected: null, search_result_index: null, search_result_click_id: null, search_result_content_entity_type: null, search_result_user_id: null, search_result_message_id: null, search_result_channel_id: null, search_result_guild_id: null, search_result_channel_type: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = importDefault(4450);
      obj[0] = importDefault(10268).getSessionId(searchContext);
      const obj6 = importDefault(10268);
      obj[1] = importDefault(10268).getLocation(searchContext);
      const obj7 = importDefault(10268);
      obj[2] = importDefault(10268).getQueryId(searchContext);
      obj[3] = str.trim().length;
      obj[4] = str2.trim().length;
      const obj8 = importDefault(10268);
      obj[5] = importDefault(10268).getSelectedTab(searchContext);
      obj[6] = index;
      const obj9 = importDefault(10268);
      obj[7] = require(514) /* v1 */.v4();
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
      const obj10 = require(514) /* v1 */;
    }
  },
  trackSearchResultReturned(searchContext) {
    let numChannelTabReturnedResults;
    let numFileTabReturnedResults;
    let numLinkTabReturnedResults;
    let numMediaTabReturnedResults;
    let numMemberTabReturnedResults;
    let numMessageTabReturnedResults;
    let numPeopleTabReturnedResults;
    let searchResultTotalCount;
    searchContext = searchContext.searchContext;
    let obj = prototype;
    ({ searchResultTotalCount, numMemberTabReturnedResults, numChannelTabReturnedResults, numPeopleTabReturnedResults, numMessageTabReturnedResults, numMediaTabReturnedResults, numFileTabReturnedResults, numLinkTabReturnedResults } = searchContext);
    if (!prototype.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = require(10255) /* SearchTokenTypes */.getGuildIdFromSearchContext(searchContext);
      const obj2 = require(10255) /* SearchTokenTypes */;
      const channelIdFromSearchContext = require(10255) /* SearchTokenTypes */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj3 = require(10255) /* SearchTokenTypes */;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, search_result_total_count: null, num_member_tab_returned_results: null, num_channel_tab_returned_results: null, num_people_tab_returned_results: null, num_message_tab_returned_results: null, num_media_tab_returned_results: null, num_file_tab_returned_results: null, num_link_tab_returned_results: null, exact_search_result_count_setting_enabled: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = importDefault(4450);
      obj[0] = importDefault(10268).getSessionId(searchContext);
      const obj6 = importDefault(10268);
      obj[1] = importDefault(10268).getLocation(searchContext);
      const obj7 = importDefault(10268);
      obj[2] = importDefault(10268).getQueryId(searchContext);
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
      const obj8 = importDefault(10268);
      obj[13] = require(3928) /* explicitContentFromProto */.SearchResultExactCountEnabled.getSetting();
      obj[14] = guildIdFromSearchContext;
      obj[15] = channelIdFromSearchContext;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj[16] = type;
      obj4.trackWithMetadata(closure_7.SEARCH_RESULT_RETURNED_MOBILE, obj);
      const SearchResultExactCountEnabled = require(3928) /* explicitContentFromProto */.SearchResultExactCountEnabled;
    }
  },
  trackSearchEmptyResult(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = prototype;
    if (!prototype.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = require(10255) /* SearchTokenTypes */.getGuildIdFromSearchContext(searchContext);
      const obj2 = require(10255) /* SearchTokenTypes */;
      const channelIdFromSearchContext = require(10255) /* SearchTokenTypes */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj3 = require(10255) /* SearchTokenTypes */;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = importDefault(4450);
      obj[0] = importDefault(10268).getSessionId(searchContext);
      const obj6 = importDefault(10268);
      obj[1] = importDefault(10268).getLocation(searchContext);
      const obj7 = importDefault(10268);
      obj[2] = importDefault(10268).getQueryId(searchContext);
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
      const obj8 = importDefault(10268);
    }
  },
  trackSearchEmptyMessageResult(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = prototype;
    if (!prototype.isInitialSearchQuery(searchContext)) {
      const guildIdFromSearchContext = require(10255) /* SearchTokenTypes */.getGuildIdFromSearchContext(searchContext);
      const obj2 = require(10255) /* SearchTokenTypes */;
      const channelIdFromSearchContext = require(10255) /* SearchTokenTypes */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj3 = require(10255) /* SearchTokenTypes */;
      const str = obj.getQueryString(searchContext);
      const str2 = obj.getTextInputValue(searchContext);
      obj = { search_session_id: null, search_location: null, search_query_id: null, search_query_length: null, search_query_content_length: null, guild_id: null, channel_id: null, channel_type: null };
      const obj4 = importDefault(4450);
      obj[0] = importDefault(10268).getSessionId(searchContext);
      const obj6 = importDefault(10268);
      obj[1] = importDefault(10268).getLocation(searchContext);
      const obj7 = importDefault(10268);
      obj[2] = importDefault(10268).getQueryId(searchContext);
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
      const obj8 = importDefault(10268);
    }
  },
  trackSearchClosed(searchContext) {
    importDefault(10268).terminate(searchContext.searchContext);
  },
  trackSearchIndexing(searchContext) {
    let documentsIndexed;
    let isHistoricalIndexing;
    searchContext = searchContext.searchContext;
    ({ isHistoricalIndexing, documentsIndexed } = searchContext);
    let obj = importDefault(4450);
    obj = { is_historical_indexing: isHistoricalIndexing, documents_indexed: documentsIndexed, search_tab_selected: null, search_location: null, search_session_id: null, search_query_id: null };
    obj[2] = importDefault(10268).getSelectedTab(searchContext);
    const obj3 = importDefault(10268);
    obj[3] = importDefault(10268).getLocation(searchContext);
    const obj4 = importDefault(10268);
    obj[4] = importDefault(10268).getSessionId(searchContext);
    const obj5 = importDefault(10268);
    obj[5] = importDefault(10268).getQueryId(searchContext);
    obj.trackWithMetadata(closure_7.SEARCH_V2_INDEXING_VIEWED, obj);
  },
  trackSearchHistoryClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = store.getChannel(searchContext.channelId);
    let obj = importDefault(4450);
    obj = { search_tab_selected: null, search_location: null, search_session_id: null, search_result_channel_type: null, search_history_type: null };
    obj[0] = importDefault(10268).getSelectedTab(searchContext);
    const obj3 = importDefault(10268);
    obj[1] = importDefault(10268).getLocation(searchContext);
    const obj4 = importDefault(10268);
    obj[2] = importDefault(10268).getSessionId(searchContext);
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
    let obj = importDefault(4450);
    obj = { search_tab_selected: null, search_location: null, search_session_id: null, search_result_channel_type: null };
    obj[0] = importDefault(10268).getSelectedTab(searchContext);
    const obj3 = importDefault(10268);
    obj[1] = importDefault(10268).getLocation(searchContext);
    const obj4 = importDefault(10268);
    obj[2] = importDefault(10268).getSessionId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[3] = type;
    obj.trackWithMetadata(closure_7.SEARCH_V2_SUGGESTED_CLICKED, obj);
  },
  trackSearchFilterAdd(location) {
    let searchContext;
    let searchTokenType;
    ({ searchContext, searchTokenType } = location);
    let obj = importDefault(4450);
    obj = { search_tab_selected: null, search_location: null, search_session_id: null, search_query_id: null, search_filter_type: null, location: null };
    obj[0] = importDefault(10268).getSelectedTab(searchContext);
    const obj3 = importDefault(10268);
    obj[1] = importDefault(10268).getLocation(searchContext);
    const obj4 = importDefault(10268);
    obj[2] = importDefault(10268).getSessionId(searchContext);
    const obj5 = importDefault(10268);
    obj[3] = importDefault(10268).getQueryId(searchContext);
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
    let searchContext;
    let searchTokenType;
    ({ searchContext, searchTokenType } = isDefault);
    let obj = importDefault(4450);
    obj = { search_tab_selected: null, search_location: null, search_session_id: null, search_query_id: null, search_filter_type: null, is_default_search_filter: null };
    obj[0] = importDefault(10268).getSelectedTab(searchContext);
    const obj3 = importDefault(10268);
    obj[1] = importDefault(10268).getLocation(searchContext);
    const obj4 = importDefault(10268);
    obj[2] = importDefault(10268).getSessionId(searchContext);
    const obj5 = importDefault(10268);
    obj[3] = importDefault(10268).getQueryId(searchContext);
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
    let obj = importDefault(4450);
    obj = { search_session_id: null, search_query_id: null, search_tab_selected: null, search_location: null };
    obj[0] = importDefault(10268).getSessionId(searchContext);
    const obj3 = importDefault(10268);
    obj[1] = importDefault(10268).getQueryId(searchContext);
    const obj4 = importDefault(10268);
    obj[2] = importDefault(10268).getSelectedTab(searchContext);
    const obj5 = importDefault(10268);
    obj[3] = importDefault(10268).getLocation(searchContext);
    obj.trackWithMetadata(closure_7.SEARCH_V2_TAB_SELECTED, obj);
  },
  trackSearchJumpToMessage(arg0) {
    let channelId;
    let searchContext;
    ({ searchContext, channelId } = arg0);
    const channel = store.getChannel(channelId);
    let obj = importDefault(4450);
    obj = { search_tab_selected: null, search_location: null, search_session_id: null, search_query_id: null, search_result_channel_type: null, search_result_channel_id: null };
    obj[0] = importDefault(10268).getSelectedTab(searchContext);
    const obj3 = importDefault(10268);
    obj[1] = importDefault(10268).getLocation(searchContext);
    const obj4 = importDefault(10268);
    obj[2] = importDefault(10268).getSessionId(searchContext);
    const obj5 = importDefault(10268);
    obj[3] = importDefault(10268).getQueryId(searchContext);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[4] = type;
    obj[5] = channelId;
    obj.trackWithMetadata(closure_7.SEARCH_V2_JUMP_TO_MESSAGE, obj);
  }
};