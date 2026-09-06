// discord_app/modules/search/native/stores/SearchTabsLayoutStore.tsx
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import SearchUtils from "../../SearchUtils.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SearchMessageStore from "../../SearchMessageStore.tsx";
import SearchGuildChannelTabStore from "SearchGuildChannelTabStore.tsx";
import SearchMemberTabStore from "SearchMemberTabStore.tsx";
import SearchPeopleTabStore from "SearchPeopleTabStore.tsx";
import SearchQueryStore from "SearchQueryStore.tsx";

require = fn;
function handleSearchQuery(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = SearchUtils;
  const searchContextId = obj.getSearchContextId(searchContext);
  value = map.get(searchContextId);
  if (value == null) {
    obj = {
      searchContext,
      wasInitialSearchQuery: true,
      candidateTabs: visibleTabs,
      visibleTabs,
      visibleTabCounts: null,
    };
    value = obj;
  }
  const result = map.set(searchContextId, value);
  return computeLayoutForState(value);
}
function computeLayoutForState(value) {
  _require = value;
  const searchContext = value.searchContext;
  if (SearchQueryStore.isAutocompleteVisible(searchContext)) {
    return false;
  } else {
    const isInitialSearchQueryResult = obj.isInitialSearchQuery(searchContext);
    dependencyMap = isInitialSearchQueryResult;
    ChannelStore = obj.isTextInputValueEmpty(searchContext);
    closure_4 = obj.hasUserAddedTags(searchContext);
    closure_5 = obj.isTagsEmpty(searchContext);
    const queryString = obj.getQueryString(searchContext);
    if (isInitialSearchQueryResult) {
      let arr = closure_10[searchContext.type];
    } else {
      arr = closure_11[searchContext.type];
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
    let tmp6Result = tmp6(12340);
    SearchQueryStore = tmp6Result.getSearchContextId(searchContext);
    const reduced = found.reduce((acc, item) => {
      if (constants.MEMBERS === item) {
        acc[item] = SearchMemberTabStore.getCount(closure_8);
      } else if (constants.GUILD_CHANNELS === item) {
        acc[item] = SearchGuildChannelTabStore.getCount(closure_8);
      } else if (constants.PEOPLE === item) {
        acc[item] = SearchPeopleTabStore.getCount(closure_8);
      } else {
        acc[item] = SearchMessageStore.getTotalCount(
          SearchUtils.getSearchTabFetchId(searchContext, item, searchResultsQuery),
        );
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
        visibleTabs = found.filter((item) => 0 !== reduced[item]);
        flag2 = false;
        visibleTabCounts = reduced;
      } else {
        ({ visibleTabs, visibleTabCounts } = value);
        flag2 = tmp11;
      }
    }
    tmp6Result = tmp6(558);
    const result = tmp6Result.areArraysShallowEqual(value.candidateTabs, found);
    let tmp13 = !result;
    const obj2 = require("SearchUtils");
    const result1 = require("discord_common/shallowEqual").areArraysShallowEqual(value.visibleTabs, visibleTabs);
    const visibleTabCounts2 = value.visibleTabCounts;
    let tmp16 = visibleTabCounts2 === visibleTabCounts;
    if (!tmp16) {
      let tmp17 = null != visibleTabCounts2 && null != visibleTabCounts;
      if (tmp17) {
        tmp17 = searchContext(558)(visibleTabCounts2, visibleTabCounts);
      }
      tmp16 = tmp17;
    }
    if (!result) {
      value.candidateTabs = found;
    }
    if (!result1) {
      value.visibleTabs = visibleTabs;
    }
    if (!tmp16) {
      value.visibleTabCounts = visibleTabCounts;
    }
    value.wasInitialSearchQuery = flag2;
    if (result) {
      tmp13 = tmp15;
    }
    if (!tmp13) {
      tmp13 = tmp19;
    }
    return tmp13;
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
const SearchConstants = fn(7878);
({
  SearchTabs: closure_9,
  SEARCH_TYPE_TO_SEARCH_INITIAL_TABS: c10,
  SEARCH_TYPE_TO_SEARCH_RESULT_TABS: closure_11,
} = SearchConstants);
let closure_12 = [];
const map = new Map();
const Store = initializeDefault.Store;
class SearchTabsLayoutStore extends Store {}
const prototype = SearchTabsLayoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    SearchQueryStore,
    SearchMessageStore,
    SearchMemberTabStore,
    SearchGuildChannelTabStore,
    SearchPeopleTabStore,
    ChannelStore,
  );
  const items = [SearchMessageStore, SearchMemberTabStore, SearchGuildChannelTabStore, SearchPeopleTabStore];
  this.syncWith(items, computeLayoutForAll);
};
prototype["getCandidateTabs"] = function getCandidateTabs(searchContext) {
  let obj = SearchUtils;
  value = map.get(obj.getSearchContextId(searchContext));
  if (value == null) {
    obj = {
      searchContext,
      wasInitialSearchQuery: true,
      candidateTabs: visibleTabs,
      visibleTabs,
      visibleTabCounts: null,
    };
    value = obj;
  }
  return value.candidateTabs;
};
prototype["getVisibleTabs"] = function getVisibleTabs(searchContext) {
  let obj = SearchUtils;
  value = map.get(obj.getSearchContextId(searchContext));
  if (value == null) {
    obj = {
      searchContext,
      wasInitialSearchQuery: true,
      candidateTabs: visibleTabs,
      visibleTabs,
      visibleTabCounts: null,
    };
    value = obj;
  }
  return value.visibleTabs;
};
prototype["getVisibleTabCounts"] = function getVisibleTabCounts(searchContext) {
  let obj = SearchUtils;
  value = map.get(obj.getSearchContextId(searchContext));
  if (value == null) {
    obj = {
      searchContext,
      wasInitialSearchQuery: true,
      candidateTabs: visibleTabs,
      visibleTabs,
      visibleTabCounts: null,
    };
    value = obj;
  }
  return value.visibleTabCounts;
};
SearchTabsLayoutStore.displayName = "SearchTabsLayoutStore";
const searchTabsLayoutStore = new SearchTabsLayoutStore(DispatcherDefault, {
  SEARCH_QUERY_NATIVE_INITIALIZE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_UPDATE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    return map.delete(id.id);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchTabsLayoutStore.tsx");

export default searchTabsLayoutStore;
