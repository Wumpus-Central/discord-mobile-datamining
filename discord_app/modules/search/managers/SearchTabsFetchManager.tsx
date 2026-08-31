// === Module 11882: createRequestPayload ===

// Module 11882 (createRequestPayload)
import fetch from "fetch" /* 11884 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7590 */;
import { SearchTypes } from "ME" /* 676 */;
import { AbstractSearchFetchManager } from "cleanUp" /* 11883 */;

require = arg1;
let closure_2 = ["include_nsfw", "channel_id"];
({ SEARCH_FILTERS_BY_TAB: c4, SEARCH_QUERY_BY_SEARCH_FILTER: c5, SEARCH_QUERY_DEFAULT_FILTERS: closure_6 } = MessageEmbedTypes);
class SearchTabsFetchManager extends AbstractSearchFetchManager {
}
const prototype = SearchTabsFetchManager.prototype;
prototype["createRequestPayload"] = function createRequestPayload(trackExactTotalHits) {
  ({ searchQuery, searchTabs, getLimit: require, pagination: dependencyMap } = trackExactTotalHits);
  closure_2 = undefined;
  let obj;
  ({ include_nsfw, channel_id } = searchQuery);
  closure_2 = obj(searchQuery, closure_2);
  obj = { include_nsfw, channel_ids: channel_id, tabs: {}, track_exact_total_hits: trackExactTotalHits.trackExactTotalHits };
  const item = searchTabs.forEach((arg0) => {
    if (null != closure_1_4[arg0]) {
      obj = closure_1_5[tmp2];
    } else {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(closure_1_6);
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(closure_2);
    const merged3 = Object.assign(closure_1);
    obj.limit = callback(arg0);
    obj.tabs[arg0] = obj;
  });
  return obj;
};
prototype["createWithPayload"] = function createWithPayload(searchTabs) {
  ({ searchContext, searchQuery } = searchTabs);
  const requestPayload = this.createRequestPayload({ searchQuery, searchTabs: searchTabs.searchTabs, getLimit: searchTabs.getLimit, pagination: searchTabs.pagination, trackExactTotalHits: searchTabs.trackExactTotalHits });
  const type = searchContext.type;
  if (SearchTypes.GUILD !== type) {
    if (tmp2.GUILD_CHANNEL !== type) {
      if (tmp2.THREAD !== type) {
        if (tmp2.CHANNEL === type) {
          const searchTabFetcherImpl = new fetch.SearchTabFetcherImpl(searchContext.channelId, searchContext.type, searchQuery, requestPayload);
          return searchTabFetcherImpl;
        } else if (tmp2.DMS === type) {
          const searchTabFetcherImpl1 = new fetch.SearchTabFetcherImpl(searchContext.type, searchContext.type, searchQuery, requestPayload);
          return searchTabFetcherImpl1;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("[SearchFetchManager] Unsupported search context type: " + searchContext.type);
          throw error;
        }
      }
    }
  }
  const searchTabFetcherImpl2 = new fetch.SearchTabFetcherImpl(searchContext.guildId, searchContext.type, searchQuery, requestPayload);
  return searchTabFetcherImpl2;
};
prototype["create"] = function create(arg0) {
  ({ id, searchContext, searchQuery, searchTabs, getLimit, pagination, trackExactTotalHits } = arg0);
  this.cancel(id);
  const withPayload = this.createWithPayload({ searchContext, searchQuery, searchTabs, getLimit, pagination, trackExactTotalHits });
  const result = this.set(id, withPayload);
  return withPayload;
};
const searchTabsFetchManager = new SearchTabsFetchManager();
let result = require("set").fileFinishedImporting("modules/search/managers/SearchTabsFetchManager.tsx");

export default searchTabsFetchManager;