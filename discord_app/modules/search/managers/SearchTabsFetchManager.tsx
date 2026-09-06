// discord_app/modules/search/managers/SearchTabsFetchManager.tsx
import SearchFetcher from "../SearchFetcher.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";

require = fn;
let closure_2 = ["include_nsfw", "channel_id"];
const SearchConstants = fn(7878);
({
  SEARCH_FILTERS_BY_TAB: closure_4,
  SEARCH_QUERY_BY_SEARCH_FILTER: hasOwnProperty,
  SEARCH_QUERY_DEFAULT_FILTERS: metroRequire,
} = SearchConstants);
const SearchTypes = fn(1074).SearchTypes;
const AbstractSearchFetchManager = fn(12349).AbstractSearchFetchManager;
class SearchTabsFetchManager extends AbstractSearchFetchManager {}
const prototype = SearchTabsFetchManager.prototype;
prototype["createRequestPayload"] = function createRequestPayload(trackExactTotalHits) {
  ({ searchQuery, searchTabs, getLimit: require, pagination: dependencyMap } = trackExactTotalHits);
  closure_2 = undefined;
  let obj;
  ({ include_nsfw, channel_id } = searchQuery);
  closure_2 = obj(searchQuery, closure_2);
  obj = {
    include_nsfw,
    channel_ids: channel_id,
    tabs: {},
    track_exact_total_hits: trackExactTotalHits.trackExactTotalHits,
  };
  const item = searchTabs.forEach((item) => {
    if (null != React4[item]) {
      obj = hasOwnProperty[tmp2];
    } else {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(timestampProducer);
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(closure_2);
    const merged3 = Object.assign(dependencyMap);
    obj.limit = require(item);
    obj.tabs[item] = obj;
  });
  return obj;
};
prototype["createWithPayload"] = function createWithPayload(searchTabs) {
  ({ searchContext, searchQuery } = searchTabs);
  const requestPayload = this.createRequestPayload({
    searchQuery,
    searchTabs: searchTabs.searchTabs,
    getLimit: searchTabs.getLimit,
    pagination: searchTabs.pagination,
    trackExactTotalHits: searchTabs.trackExactTotalHits,
  });
  const type = searchContext.type;
  if (SearchTypes.GUILD !== type) {
    if (tmp2.GUILD_CHANNEL !== type) {
      if (tmp2.THREAD !== type) {
        if (tmp2.CHANNEL === type) {
          const searchTabFetcherImpl = new SearchFetcher.SearchTabFetcherImpl(
            searchContext.channelId,
            searchContext.type,
            searchQuery,
            requestPayload,
          );
          return searchTabFetcherImpl;
        } else if (tmp2.DMS === type) {
          const searchTabFetcherImpl1 = new SearchFetcher.SearchTabFetcherImpl(
            searchContext.type,
            searchContext.type,
            searchQuery,
            requestPayload,
          );
          return searchTabFetcherImpl1;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("[SearchFetchManager] Unsupported search context type: " + searchContext.type);
          throw error;
        }
      }
    }
  }
  const searchTabFetcherImpl2 = new SearchFetcher.SearchTabFetcherImpl(
    searchContext.guildId,
    searchContext.type,
    searchQuery,
    requestPayload,
  );
  return searchTabFetcherImpl2;
};
prototype["create"] = function create(arg0) {
  ({ id, searchContext, searchQuery, searchTabs, getLimit, pagination, trackExactTotalHits } = arg0);
  this.cancel(id);
  const withPayload = this.createWithPayload({
    searchContext,
    searchQuery,
    searchTabs,
    getLimit,
    pagination,
    trackExactTotalHits,
  });
  const result = this.set(id, withPayload);
  return withPayload;
};
const searchTabsFetchManager = new SearchTabsFetchManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/managers/SearchTabsFetchManager.tsx");

export default searchTabsFetchManager;
