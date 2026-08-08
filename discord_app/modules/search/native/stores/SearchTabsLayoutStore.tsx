// discord_app/modules/search/native/stores/SearchTabsLayoutStore.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleReaction from "handleReaction";
import search from "search";
import setAutocompleteOptions from "setAutocompleteOptions";
import teardown from "teardown";
import prototype from "prototype";
import MessageEmbedTypes from "MessageEmbedTypes";
import { Store } from "initialize";
import { shallowEqual } from "../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import { SearchTokenTypes } from "../../SearchUtils.tsx";

let c10;
let c9;
let unpackModuleId;
const require = arg1;
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
  let visibleTabCounts;
  let visibleTabs;
  const _require = value;
  const searchContext = value.searchContext;
  if (autocompleteVisible.isAutocompleteVisible(searchContext)) {
    return false;
  } else {
    const isInitialSearchQueryResult = obj.isInitialSearchQuery(searchContext);
    const dependencyMap = isInitialSearchQueryResult;
    let channel = obj.isTextInputValueEmpty(searchContext);
    let handleReaction = obj.hasUserAddedTags(searchContext);
    let search = obj.isTagsEmpty(searchContext);
    const searchResultsQuery = obj.getSearchResultsQuery(searchContext);
    const queryString = obj.getQueryString(searchContext);
    if (isInitialSearchQueryResult) {
      let arr = table[searchContext.type];
    } else {
      arr = table2[searchContext.type];
    }
    channel = channel.getChannel(_SearchTokenTypes.getChannelIdFromSearchContext(searchContext));
    let flag;
    if (channel != null) {
      flag = channel.isArchivedThread();
    }
    if (flag == null) {
      flag = false;
    }
    const found = arr.filter((arg0) => {
      if (reduced.MEMBERS === arg0) {
        let tmp4 = !flag;
        if (!flag) {
          let tmp5 = closure_2;
          if (!closure_2) {
            let tmp7 = !handleReaction;
            if (!handleReaction) {
              tmp7 = !ensureGuildLoaded;
            }
            tmp5 = tmp7;
          }
          tmp4 = tmp5;
        }
        return tmp4;
      } else {
        if (tmp.RECENT !== arg0) {
          if (tmp.GUILD_CHANNELS !== arg0) {
            if (tmp.PEOPLE !== arg0) {
              return true;
            }
          }
        }
        return search;
      }
    });
    let tmp6Result = tmp6(11711);
    autocompleteVisible = tmp6Result.getSearchContextId(searchContext);
    const reduced = found.reduce((arg0, closure_1) => {
      if (reduced.MEMBERS === closure_1) {
        arg0[closure_1] = searchResultsQuery.getCount(prototype);
      } else if (tmp.GUILD_CHANNELS === closure_1) {
        arg0[closure_1] = count.getCount(prototype);
      } else if (tmp.PEOPLE === closure_1) {
        arg0[closure_1] = flag.getCount(prototype);
      } else {
        arg0[closure_1] = totalCount.getTotalCount(value(isInitialSearchQueryResult[8]).getSearchTabFetchId(searchContext, closure_1, searchResultsQuery));
        const obj = value(isInitialSearchQueryResult[8]);
      }
      return arg0;
    }, {});
    let flag2 = true;
    visibleTabCounts = null;
    visibleTabs = found;
    if (!isInitialSearchQueryResult) {
      if (searchResultsQuery !== queryString) {
        visibleTabs = found.filter((arg0) => {
          let wasInitialSearchQuery = value.wasInitialSearchQuery;
          if (!wasInitialSearchQuery) {
            const visibleTabs = tmp.visibleTabs;
            wasInitialSearchQuery = visibleTabs.includes(arg0);
          }
          return wasInitialSearchQuery;
        });
        flag2 = false;
        visibleTabCounts = null;
      } else if (found.every((arg0) => null != reduced[arg0])) {
        visibleTabs = found.filter((arg0) => 0 !== reduced[arg0]);
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
    const obj2 = _SearchTokenTypes;
    const result1 = _shallowEqual.areArraysShallowEqual(value.visibleTabs, visibleTabs);
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
    let tmp4 = computeLayoutForState;
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
class SearchTabsLayoutStore extends Store {
}
const prototype = SearchTabsLayoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(prototype, handleReaction, setAutocompleteOptions, search, teardown, ensureGuildLoaded);
  const items = [handleReaction, setAutocompleteOptions, search, teardown];
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
const searchTabsLayoutStore = new SearchTabsLayoutStore(require("dispatcher"), {
  SEARCH_QUERY_NATIVE_INITIALIZE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_UPDATE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    return map.delete(id.id);
  }
});
let result = require("search").fileFinishedImporting("modules/search/native/stores/SearchTabsLayoutStore.tsx");

export default searchTabsLayoutStore;