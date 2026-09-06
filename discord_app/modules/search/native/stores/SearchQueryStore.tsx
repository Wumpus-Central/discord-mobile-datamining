// === Module 12339: SearchQueryStore ===

// Module 12339 (SearchQueryStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import SearchUtils from "SearchUtils" /* 12340 */;
import SearchQueryTagManagerDefault from "SearchQueryTagManager" /* 12352 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SearchConstants = fn(7878);
({ EMPTY_SEARCH_QUERY_STRING: metroRequire, SearchQueryTagTypes: closure_7 } = SearchConstants);
const SearchFilterAddLocations = fn(7877).SearchFilterAddLocations;
const Constants = fn(1074);
({ SearchTokenTypes: closure_9, SearchTypes: c10 } = Constants);
const prototype = function SearchQueryStateManager(type) {
  let obj = Object.create(new.target.prototype);
  obj.isExplicitSearchSubmitted = false;
  obj.getQueryString = function getQueryString() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const tagsManager = obj.tagsManager;
    const queryString = tagsManager.getQueryString(flag);
    if (0 !== queryString.length) {
      const _HermesInternal = HermesInternal;
      let textInputValue = "" + queryString + " " + obj.textInputValue;
    } else {
      textInputValue = obj.textInputValue;
    }
    return textInputValue;
  };
  obj.isQueryStringEmpty = function isQueryStringEmpty() {
    return 0 === obj.getQueryString().trim().length;
  };
  obj.getTextInputValue = function getTextInputValue() {
    return obj.textInputValue;
  };
  obj.setTextInputValue = function setTextInputValue(textInputValue, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    obj.textInputValue = textInputValue;
    obj.textInputChangedFromInput = flag;
    const result = obj.resetExplicitSearchSubmitted();
  };
  obj.isInitialSearchQuery = function isInitialSearchQuery() {
    const isExplicitSearchSubmitted = obj.isExplicitSearchSubmitted;
    let tmp2 = !isExplicitSearchSubmitted;
    if (!isExplicitSearchSubmitted) {
      let tmp3 = 0 === obj.textInputValue.trim().length;
      if (tmp3) {
        const tagsManager = obj.tagsManager;
        tmp3 = !tagsManager.hasUserAddedTags();
      }
      tmp2 = tmp3;
    }
    return tmp2;
  };
  obj.markExplicitSearchSubmitted = function markExplicitSearchSubmitted() {
    obj.isExplicitSearchSubmitted = true;
  };
  obj.resetExplicitSearchSubmitted = function resetExplicitSearchSubmitted() {
    obj.isExplicitSearchSubmitted = false;
  };
  obj.getSearchResultsQuery = function getSearchResultsQuery() {
    return obj.searchResultsQuery;
  };
  obj.setSearchResultsQuery = function setSearchResultsQuery(searchQueryString) {
    obj.searchResultsQuery = searchQueryString;
  };
  obj.isTextInputValueEmpty = function isTextInputValueEmpty() {
    return 0 === obj.textInputValue.trim().length;
  };
  obj.getTextValueChangedFromInput = function getTextValueChangedFromInput() {
    return obj.textInputChangedFromInput;
  };
  obj.hasUserAddedTags = function hasUserAddedTags() {
    const tagsManager = obj.tagsManager;
    return tagsManager.hasUserAddedTags();
  };
  obj.getTags = function getTags() {
    const tagsManager = obj.tagsManager;
    return tagsManager.get();
  };
  obj.getPrefixTag = function getPrefixTag() {
    const tagsManager = obj.tagsManager;
    return tagsManager.getPrefixTag();
  };
  obj.isAutocompleteVisible = function isAutocompleteVisible() {
    return null != obj.getPrefixTag();
  };
  obj.setTags = function setTags(arg0) {
    const tagsManager = obj.tagsManager;
    const result = tagsManager.set(arg0);
    const result1 = obj.resetExplicitSearchSubmitted();
  };
  obj.addTag = function addTag(arg0) {
    const tagsManager = obj.tagsManager;
    tagsManager.add(arg0);
    const result = obj.resetExplicitSearchSubmitted();
  };
  obj.removeTag = function removeTag(arg0) {
    const tagsManager = obj.tagsManager;
    tagsManager.removeAtIndex(arg0);
    const result = obj.resetExplicitSearchSubmitted();
  };
  obj.removePrefixTags = function removePrefixTags() {
    const tagsManager = obj.tagsManager;
    tagsManager.removeAnyPrefixTags();
    const result = obj.resetExplicitSearchSubmitted();
  };
  obj.getChannelIds = function getChannelIds() {
    const tagsManager = obj.tagsManager;
    return tagsManager.getChannelIds();
  };
  obj.getUserIds = function getUserIds(arg0) {
    const tagsManager = obj.tagsManager;
    return tagsManager.getUserIds(arg0);
  };
  obj.isTagsEmpty = function isTagsEmpty() {
    const tagsManager = obj.tagsManager;
    return tagsManager.isEmpty();
  };
  obj.saveDraftTextInputValue = function saveDraftTextInputValue() {
    if (!tmp) {
      obj.draftTextInputValue = obj.textInputValue;
    }
  };
  obj.restoreDraftTextInputValue = function restoreDraftTextInputValue() {
    if (null != obj.draftTextInputValue) {
      obj.textInputValue = obj.draftTextInputValue;
      obj.textInputChangedFromInput = false;
      obj.draftTextInputValue = null;
    }
  };
  obj.reset = function reset() {
    obj.textInputValue = searchResultsQuery;
    obj.textInputChangedFromInput = false;
    obj.searchResultsQuery = searchResultsQuery;
    obj.draftTextInputValue = null;
    obj.isExplicitSearchSubmitted = false;
    const tagsManager = obj.tagsManager;
    const result = tagsManager.set(obj.initialTagsSnapshot);
  };
  obj.textInputValue = searchResultsQuery;
  obj.textInputChangedFromInput = false;
  obj.searchResultsQuery = searchResultsQuery;
  type = type.type;
  if (constants3.THREAD !== type) {
    if (constants3.GUILD_CHANNEL !== type) {
      let items = [];
    }
    obj.initialTagsSnapshot = items;
    const tmp12 = new SearchQueryTagManagerDefault();
    obj.tagsManager = tmp12;
    let tagsManager = obj.tagsManager;
    let result = tagsManager.set(obj.initialTagsSnapshot);
    obj.draftTextInputValue = null;
    return obj;
  }
  const channel = ChannelStore.getChannel(type.channelId);
  let isObfuscatedResult;
  if (channel != null) {
    isObfuscatedResult = channel.isObfuscated();
  }
  if (isObfuscatedResult) {
    items = [];
  } else {
    let channelName;
    if (null != channel) {
      channelName = obj(4713).computeChannelName(channel, UserStore, RelationshipStore);
      const obj2 = obj(4713);
    }
    if (null == channelName) {
      let items1 = [];
    } else {
      obj = { type: constants.COMPLETE, searchTokenType: constants2.FILTER_IN, text: null, channelId: null, location: null };
      const intl = obj(1114).intl;
      const stringResult = intl.string(obj(1114).t.WNpFHa);
      let _HermesInternal = HermesInternal;
      obj.text = "" + stringResult + ": " + obj(12340).quoteChannelName(channelName);
      obj.channelId = type.channelId;
      obj.location = SearchFilterAddLocations.CLIENT_AUTO_ADD;
      items1 = [obj];
      const obj4 = obj(12340);
    }
    items = items1;
  }
}.prototype;
const map = new Map();
let FunctionUtils = fn(1933);
let closure_13 = FunctionUtils.cachedFunction((arg0) => new prototype(arg0));
const Store = initializeDefault.Store;
class NativeSearchQueryStore extends Store {
}
const prototype2 = NativeSearchQueryStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(ChannelStore, UserStore, RelationshipStore);
};
prototype2["getManager"] = function getManager(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value;
};
prototype2["getQueryString"] = function getQueryString(searchContext) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.getQueryString(flag);
};
prototype2["isQueryStringEmpty"] = function isQueryStringEmpty(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.isQueryStringEmpty();
};
prototype2["getTextInputValue"] = function getTextInputValue(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.getTextInputValue();
};
prototype2["isInitialSearchQuery"] = function isInitialSearchQuery(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.isInitialSearchQuery();
};
prototype2["getSearchResultsQuery"] = function getSearchResultsQuery(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.getSearchResultsQuery();
};
prototype2["isTextInputValueEmpty"] = function isTextInputValueEmpty(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.isTextInputValueEmpty();
};
prototype2["getTextValueChangedFromInput"] = function getTextValueChangedFromInput(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.getTextValueChangedFromInput();
};
prototype2["hasUserAddedTags"] = function hasUserAddedTags(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.hasUserAddedTags();
};
prototype2["getTags"] = function getTags(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.getTags();
};
prototype2["getPrefixTag"] = function getPrefixTag(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.getPrefixTag();
};
prototype2["isAutocompleteVisible"] = function isAutocompleteVisible(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.isAutocompleteVisible();
};
prototype2["getChannelIds"] = function getChannelIds(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.getChannelIds();
};
prototype2["getUserIds"] = function getUserIds(searchContext, arg1) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.getUserIds(arg1);
};
prototype2["isTagsEmpty"] = function isTagsEmpty(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    value = closure_13(searchContext);
  }
  return value.isTagsEmpty();
};
NativeSearchQueryStore.displayName = "NativeSearchQueryStore";
FunctionUtils = {
  SEARCH_QUERY_NATIVE_UPDATE: function handleSearchQueryNativeUpdate(searchContext) {
    searchContext = searchContext.searchContext;
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    value = map.get(searchContextId);
    if (null == value) {
      const tmp6 = new prototype(searchContext);
      const result = map.set(searchContextId, tmp6);
      value = tmp6;
    }
    searchContext.updater(value);
  },
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    map.delete(id.id);
  }
};
const nativeSearchQueryStore = new NativeSearchQueryStore(DispatcherDefault, FunctionUtils);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchQueryStore.tsx");

export default nativeSearchQueryStore;
export const SearchQueryStateManager = prototype;