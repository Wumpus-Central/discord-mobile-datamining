// discord_app/modules/search/native/stores/SearchTabsLayoutStore.tsx
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../../Dispatcher.tsx";
import SearchTokenTypes from "../../SearchUtils.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import handleReaction from "../../SearchMessageStore.tsx";
import search from "SearchGuildChannelTabStore.tsx";
import setAutocompleteOptions from "SearchMemberTabStore.tsx";
import teardown from "SearchPeopleTabStore.tsx";
import prototype2 from "SearchQueryStore.tsx";
import MessageEmbedTypes from "../../SearchConstants.tsx";
import { SearchTokenTypes } from "../../SearchUtils.tsx";

require = fn;
function handleSearchQuery(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = SearchTokenTypes;
  const searchContextId = obj.getSearchContextId(searchContext);
  let value = map.get(searchContextId);
  if (value == null) {
    obj = { searchContext: null, wasInitialSearchQuery: true, candidateTabs: null, visibleTabs: null, visibleTabCounts: null };
    obj[0] = searchContext;
    obj[2] = closure_12;
    obj[3] = closure_12;
    value = obj;
  }
  const result = map.set(searchContextId, value);
  return computeLayoutForState(value);
}
function computeLayoutForState(value) {
  const _require = value;
  const searchContext = value.searchContext;
  if (autocompleteVisible.isAutocompleteVisible(searchContext)) {
    return false;
  } else {
    const isInitialSearchQueryResult = obj.isInitialSearchQuery(searchContext);
    dependencyMap = isInitialSearchQueryResult;
    let channel = obj.isTextInputValueEmpty(searchContext);
    closure_4 = obj.hasUserAddedTags(searchContext);
    closure_5 = obj.isTagsEmpty(searchContext);
    const queryString = obj.getQueryString(searchContext);
    if (isInitialSearchQueryResult) {
      let arr = table[searchContext.type];
    } else {
      arr = table2[searchContext.type];
    }
    const searchResultsQuery = obj.getSearchResultsQuery(searchContext);
    channel = channel.getChannel(require("../../SearchUtils.tsx").getChannelIdFromSearchContext(searchContext));
    let flag;
    if (channel != null) {
      flag = channel.isArchivedThread();
    }
    if (flag == null) {
      flag = false;
    }
    const found = arr.filter((item, index) => {
      if (reduced.MEMBERS === item) {
        let tmp4 = !flag;
        if (!flag) {
          let tmp5 = closure_2;
          if (!closure_2) {
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
        if (reduced.RECENT !== item) {
          if (reduced.GUILD_CHANNELS !== item) {
            if (reduced.PEOPLE !== item) {
              return true;
            }
          }
        }
        return closure_5;
      }
    });
    let tmp6Result = tmp6(11511);
    autocompleteVisible = tmp6Result.getSearchContextId(searchContext);
    const reduced = found.reduce((acc, item, index) => {
      if (reduced.MEMBERS === item) {
        acc[item] = searchResultsQuery.getCount(closure_8);
      } else if (reduced.GUILD_CHANNELS === item) {
        acc[item] = count.getCount(closure_8);
      } else if (reduced.PEOPLE === item) {
        acc[item] = flag.getCount(closure_8);
      } else {
        acc[item] = totalCount.getTotalCount(value(isInitialSearchQueryResult[8]).getSearchTabFetchId(searchContext, item, searchResultsQuery));
        const obj = value(isInitialSearchQueryResult[8]);
      }
      return acc;
    }, {});
    let flag2 = true;
    visibleTabCounts = null;
    visibleTabs = found;
    if (!isInitialSearchQueryResult) {
      if (searchResultsQuery !== queryString) {
        visibleTabs = found.filter((item, index) => {
          let wasInitialSearchQuery = value.wasInitialSearchQuery;
          if (!wasInitialSearchQuery) {
            const visibleTabs = tmp.visibleTabs;
            wasInitialSearchQuery = visibleTabs.includes(item);
          }
          return wasInitialSearchQuery;
        });
        flag2 = false;
        visibleTabCounts = null;
      } else if (found.every((item, index) => null != reduced[item])) {
        visibleTabs = found.filter((item, index) => 0 !== reduced[item]);
        flag2 = false;
        visibleTabCounts = reduced;
      } else {
        ({ visibleTabs, visibleTabCounts } = value);
        flag2 = tmp11;
      }
    }
    tmp6Result = tmp6(643);
    const result = tmp6Result.areArraysShallowEqual(value.candidateTabs, found);
    let tmp13 = !result;
    const obj2 = SearchTokenTypes;
    const result1 = require("../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx").areArraysShallowEqual(value.visibleTabs, visibleTabs);
    const visibleTabCounts2 = value.visibleTabCounts;
    let tmp16 = visibleTabCounts2 === visibleTabCounts;
    if (!tmp16) {
      let tmp17 = null != visibleTabCounts2 && null != visibleTabCounts;
      if (tmp17) {
        tmp17 = searchContext(643)(visibleTabCounts2, visibleTabCounts);
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
({ SearchTabs: c9, SEARCH_TYPE_TO_SEARCH_INITIAL_TABS: c10, SEARCH_TYPE_TO_SEARCH_RESULT_TABS: unpackModuleId } = MessageEmbedTypes);
let closure_12 = [];
const map = new Map();
const Store = initializeDefault.Store;
class SearchTabsLayoutStore extends Store {
}
const prototype = SearchTabsLayoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_8, closure_4, closure_6, closure_5, closure_7, closure_3);
  const items = [closure_4, closure_6, closure_5, closure_7];
  this.syncWith(items, computeLayoutForAll);
};
prototype["getCandidateTabs"] = function getCandidateTabs(searchContext) {
  let obj = SearchTokenTypes;
  let value = map.get(obj.getSearchContextId(searchContext));
  if (value == null) {
    obj = { searchContext: null, wasInitialSearchQuery: true, candidateTabs: null, visibleTabs: null, visibleTabCounts: null };
    obj[0] = searchContext;
    obj[2] = closure_12;
    obj[3] = closure_12;
    value = obj;
  }
  return value.candidateTabs;
};
prototype["getVisibleTabs"] = function getVisibleTabs(searchContext) {
  let obj = SearchTokenTypes;
  let value = map.get(obj.getSearchContextId(searchContext));
  if (value == null) {
    obj = { searchContext: null, wasInitialSearchQuery: true, candidateTabs: null, visibleTabs: null, visibleTabCounts: null };
    obj[0] = searchContext;
    obj[2] = closure_12;
    obj[3] = closure_12;
    value = obj;
  }
  return value.visibleTabs;
};
prototype["getVisibleTabCounts"] = function getVisibleTabCounts(searchContext) {
  let obj = SearchTokenTypes;
  let value = map.get(obj.getSearchContextId(searchContext));
  if (value == null) {
    obj = { searchContext: null, wasInitialSearchQuery: true, candidateTabs: null, visibleTabs: null, visibleTabCounts: null };
    obj[0] = searchContext;
    obj[2] = closure_12;
    obj[3] = closure_12;
    value = obj;
  }
  return value.visibleTabCounts;
};
SearchTabsLayoutStore.displayName = "SearchTabsLayoutStore";
const searchTabsLayoutStore = new SearchTabsLayoutStore(dispatcherDefault, {
  SEARCH_QUERY_NATIVE_INITIALIZE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_UPDATE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    return map.delete(id.id);
  }
});
let result = require("obj132").fileFinishedImporting("modules/search/native/stores/SearchTabsLayoutStore.tsx");

export default searchTabsLayoutStore;