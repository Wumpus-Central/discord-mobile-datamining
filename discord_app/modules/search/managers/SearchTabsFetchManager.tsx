// discord_app/modules/search/managers/SearchTabsFetchManager.tsx
import Constants from "../../../Constants.tsx";
import AbstractSearchFetchManager2 from "AbstractSearchFetchManager.tsx";
import SearchFetcher from "../SearchFetcher.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import SearchConstants from "../SearchConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let metroRequire;
let closure_2 = ["include_nsfw", "channel_id", "search_session_id", "search_query_id"];
({
  SEARCH_FILTERS_BY_TAB: closure_4,
  SEARCH_QUERY_BY_SEARCH_FILTER: hasOwnProperty,
  SEARCH_QUERY_DEFAULT_FILTERS: metroRequire,
} = SearchConstants);
const SearchTypes = Constants.SearchTypes;
const AbstractSearchFetchManager = AbstractSearchFetchManager2.AbstractSearchFetchManager;
class SearchTabsFetchManager extends AbstractSearchFetchManager {
  createRequestPayload(trackExactTotalHits) {
    let channel_id;
    let include_nsfw;
    let searchQuery;
    let searchTabs;
    let search_query_id;
    let search_session_id;
    ({ searchQuery, searchTabs, getLimit: require, pagination: dependencyMap } = trackExactTotalHits);
    closure_2 = undefined;
    let obj;
    trackExactTotalHits = trackExactTotalHits.trackExactTotalHits;
    ({ include_nsfw, channel_id, search_session_id, search_query_id } = searchQuery);
    closure_2 = obj(searchQuery, closure_2);
    obj = {
      include_nsfw,
      channel_ids: channel_id,
      tabs: {},
      track_exact_total_hits: trackExactTotalHits,
      search_session_id,
      search_query_id,
    };
    const item = searchTabs.forEach((item) => {
      const tmp = require(item);
      if (null != React3[item]) {
        obj = hasOwnProperty[tmp2];
      } else {
        obj = {};
      }
      const tabs = obj.tabs;
      const obj2 = { limit: tmp };
      const merged = Object.assign(metroRequire);
      const merged1 = Object.assign(obj);
      const merged2 = Object.assign(closure_2);
      const merged3 = Object.assign(dependencyMap);
      tabs[item] = obj2;
    });
    return obj;
  }
  createWithPayload(searchTabs) {
    let searchContext;
    let searchQuery;
    ({ searchContext, searchQuery } = searchTabs);
    const obj = {
      searchQuery,
      searchTabs: searchTabs.searchTabs,
      getLimit: searchTabs.getLimit,
      pagination: searchTabs.pagination,
      trackExactTotalHits: searchTabs.trackExactTotalHits,
    };
    const requestPayload = this.createRequestPayload(obj);
    const type = searchContext.type;
    if (SearchTypes.GUILD !== type) {
      if (SearchTypes.GUILD_CHANNEL !== type) {
        if (SearchTypes.THREAD !== type) {
          if (SearchTypes.CHANNEL === type) {
            const self5 = this;
            const self6 = this;
            const searchTabFetcherImpl = new SearchFetcher.SearchTabFetcherImpl(
              searchContext.channelId,
              searchContext.type,
              searchQuery,
              requestPayload,
            );
            return searchTabFetcherImpl;
          } else if (SearchTypes.DMS === type) {
            const self3 = this;
            const self4 = this;
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
            const self = this;
            const self2 = this;
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
  }
  create(arg0) {
    let getLimit;
    let id;
    let pagination;
    let searchContext;
    let searchQuery;
    let searchTabs;
    let trackExactTotalHits;
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
  }
}
const prototype = SearchTabsFetchManager.prototype;
const searchTabsFetchManager = new SearchTabsFetchManager();
let result = size.fileFinishedImporting("modules/search/managers/SearchTabsFetchManager.tsx");

export default searchTabsFetchManager;
