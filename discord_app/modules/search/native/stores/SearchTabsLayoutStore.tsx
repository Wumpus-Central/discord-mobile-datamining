// === Module 12696: SearchTabsLayoutStore ===

// Module 12696 (SearchTabsLayoutStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import SearchUtils from "SearchUtils" /* 12674 */;
import IntelligenceSearchTypes from "IntelligenceSearchTypes" /* 12699 */;
import IntelligenceSearchUtils from "IntelligenceSearchUtils" /* 12700 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 12697 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import SearchMessageStore from "SearchMessageStore" /* 7609 */;
import SearchGuildChannelTabStore from "SearchGuildChannelTabStore" /* 12701 */;
import SearchMemberTabStore from "SearchMemberTabStore" /* 12702 */;
import SearchPeopleTabStore from "SearchPeopleTabStore" /* 12703 */;
import SearchQueryStore from "SearchQueryStore" /* 12673 */;

require = fn;
function handleSearchQuery(searchContext) {
  searchContext = searchContext.searchContext;
  const searchContextId = SearchUtils.getSearchContextId(searchContext);
  value = map.get(searchContextId);
  if (value == null) {
    const obj3 = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
    value = obj3;
  }
  const result = map.set(searchContextId, value);
  return computeLayoutForState(value);
}
function computeLayoutForState(value) {
  _require = value;
  const searchContext = value.searchContext;
  if (reduced.isAutocompleteVisible(searchContext)) {
    return false;
  } else {
    const isInitialSearchQueryResult = obj.isInitialSearchQuery(searchContext);
    dependencyMap = isInitialSearchQueryResult;
    closure_3 = obj.isTextInputValueEmpty(searchContext);
    ChannelStore = obj.hasUserAddedTags(searchContext);
    closure_5 = obj.isTagsEmpty(searchContext);
    const queryString = obj.getQueryString(searchContext);
    if (isInitialSearchQueryResult) {
      let arr = closure_11[searchContext.type];
    } else {
      arr = closure_12[searchContext.type];
    }
    const searchResultsQuery = obj.getSearchResultsQuery(searchContext);
    const channel = ChannelStore.getChannel(require("SearchUtils").getChannelIdFromSearchContext(searchContext));
    let flag;
    if (channel != null) {
      flag = channel.isArchivedThread();
    }
    if (flag == null) {
      flag = false;
    }
    const found = arr.filter((item) => {
      if (constants.MEMBERS === item) {
        let tmp4 = !flag;
        if (!flag) {
          let tmp5 = isInitialSearchQueryResult;
          if (!isInitialSearchQueryResult) {
            let tmp7 = !closure_4;
            if (!closure_4) {
              tmp7 = !closure_3;
            }
            tmp5 = tmp7;
          }
          tmp4 = tmp5;
        }
        return tmp4;
      } else {
        if (constants.RECENT !== item) {
          if (constants.GUILD_CHANNELS !== item) {
            if (constants.PEOPLE !== item) {
              return true;
            }
          }
        }
        return closure_5;
      }
    });
    let obj2 = require("SearchUtils");
    const searchContextId = require("SearchUtils").getSearchContextId(searchContext);
    reduced = found.reduce((acc, item) => {
      if (constants.MEMBERS === item) {
        acc[item] = SearchMemberTabStore.getCount(closure_8);
      } else if (constants.GUILD_CHANNELS === item) {
        acc[item] = SearchGuildChannelTabStore.getCount(closure_8);
      } else if (constants.PEOPLE === item) {
        acc[item] = SearchPeopleTabStore.getCount(closure_8);
      } else if (constants.MESSAGES === item) {
        const totalCount = SearchMessageStore.getTotalCount(SearchUtils.getSearchTabFetchId(searchContext, item, searchResultsQuery));
        let sum = null;
        if (null != totalCount) {
          sum = totalCount + IntelligenceSearchUtils.getIntelligenceSearchCitationsCount(searchContext, searchResultsQuery, totalCount > 0);
          const tmp8Result = IntelligenceSearchUtils;
        }
        acc[item] = sum;
      } else {
        acc[item] = SearchMessageStore.getTotalCount(SearchUtils.getSearchTabFetchId(searchContext, item, searchResultsQuery));
      }
      return acc;
    }, {});
    let flag2 = true;
    visibleTabCounts = null;
    visibleTabs = found;
    if (!isInitialSearchQueryResult) {
      if (searchResultsQuery !== queryString) {
        visibleTabs = found.filter((item) => {
          let wasInitialSearchQuery = value.wasInitialSearchQuery;
          if (!wasInitialSearchQuery) {
            const visibleTabs = tmp.visibleTabs;
            wasInitialSearchQuery = visibleTabs.includes(item);
          }
          return wasInitialSearchQuery;
        });
        flag2 = false;
        visibleTabCounts = null;
      } else if (found.every((item) => null != reduced[item])) {
        const found1 = found.filter((item) => {
          if (item === constants.MESSAGES) {
            let tmp5 = 0 !== reduced[constants.MESSAGES];
            if (!tmp5) {
              const intelligenceSearchStatus = IntelligenceSearchUtils.getIntelligenceSearchStatus(tmp, tmp2);
              tmp5 = intelligenceSearchStatus === IntelligenceSearchTypes.IntelligenceSearchStatus.LOADING;
            }
            let tmp4 = tmp5;
          } else {
            tmp4 = 0 !== reduced[item];
          }
          return tmp4;
        });
        flag2 = false;
        visibleTabCounts = reduced;
        visibleTabs = found1;
        if (tmp13) {
          reduced[constants.MESSAGES] = null;
          flag2 = false;
          visibleTabCounts = reduced;
          visibleTabs = found1;
        }
        tmp13 = 0 === reduced[constants.MESSAGES] && found1.includes(constants.MESSAGES);
      } else {
        ({ visibleTabs, visibleTabCounts } = value);
        flag2 = tmp11;
      }
    }
    const tmp6Result = require("SearchUtils");
    const result = require("discord_common/shallowEqual").areArraysShallowEqual(value.candidateTabs, found);
    let tmp15 = !result;
    const tmp6Result3 = require("discord_common/shallowEqual");
    const result1 = require("discord_common/shallowEqual").areArraysShallowEqual(value.visibleTabs, visibleTabs);
    const visibleTabCounts2 = value.visibleTabCounts;
    let tmp18 = visibleTabCounts2 === visibleTabCounts;
    if (!tmp18) {
      let tmp19 = null != visibleTabCounts2 && null != visibleTabCounts;
      if (tmp19) {
        tmp19 = searchContext(558)(visibleTabCounts2, visibleTabCounts);
      }
      tmp18 = tmp19;
    }
    if (!result) {
      value.candidateTabs = found;
    }
    if (!result1) {
      value.visibleTabs = visibleTabs;
    }
    if (!tmp18) {
      value.visibleTabCounts = visibleTabCounts;
    }
    value.wasInitialSearchQuery = flag2;
    if (result) {
      tmp15 = tmp17;
    }
    if (!tmp15) {
      tmp15 = tmp21;
    }
    return tmp15;
  }
}
function computeLayoutForAll() {
  let flag = false;
  const values = map.values();
  while (tmp2 !== undefined) {
    if (computeLayoutForState(tmp3)) {
      flag = true;
    }
    continue;
  }
  return flag;
}
const SearchConstants = fn(8207);
({ SearchTabs: c10, SEARCH_TYPE_TO_SEARCH_INITIAL_TABS: closure_11, SEARCH_TYPE_TO_SEARCH_RESULT_TABS: closure_12 } = SearchConstants);
let closure_13 = [];
const map = new Map();
const Store = initializeDefault.Store;
class SearchTabsLayoutStore extends Store {
}
const prototype = SearchTabsLayoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(SearchQueryStore, SearchMessageStore, SearchMemberTabStore, SearchGuildChannelTabStore, SearchPeopleTabStore, ChannelStore, IntelligenceSearchStore);
  const items = [SearchMessageStore, SearchMemberTabStore, SearchGuildChannelTabStore, SearchPeopleTabStore, IntelligenceSearchStore];
  this.syncWith(items, computeLayoutForAll);
};
prototype["getCandidateTabs"] = function getCandidateTabs(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    const obj2 = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
    value = obj2;
  }
  return value.candidateTabs;
};
prototype["getVisibleTabs"] = function getVisibleTabs(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    const obj2 = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
    value = obj2;
  }
  return value.visibleTabs;
};
prototype["getVisibleTabCounts"] = function getVisibleTabCounts(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    const obj2 = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
    value = obj2;
  }
  return value.visibleTabCounts;
};
SearchTabsLayoutStore.displayName = "SearchTabsLayoutStore";
const searchTabsLayoutStore = new SearchTabsLayoutStore(DispatcherDefault, {
  SEARCH_QUERY_NATIVE_INITIALIZE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_UPDATE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    return map.delete(id.id);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchTabsLayoutStore.tsx");

export default searchTabsLayoutStore;