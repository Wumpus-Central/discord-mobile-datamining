// === Module 11906: prototype ===

// Module 11906 (prototype)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import SearchTokenTypes from "SearchTokenTypes" /* 11907 */;
import isCompleteDefault from "isComplete" /* 11919 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;
import closure_4 from "markAllUserIdListsStale" /* 4130 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7622 */;
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations" /* 7621 */;
import ME from "ME" /* 676 */;
import areArraysShallowlyEqual from "areArraysShallowlyEqual" /* 1991 */;

require = arg1;
({ EMPTY_SEARCH_QUERY_STRING: closure_6, SearchQueryTagTypes: error } = MessageEmbedTypes);
({ SearchTokenTypes: c9, SearchTypes: c10 } = ME);
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
      let textInputValue = "" + queryString + " " + tmp.textInputValue;
    } else {
      textInputValue = tmp.textInputValue;
    }
    return textInputValue;
  };
  obj.isQueryStringEmpty = function isQueryStringEmpty() {
    return 0 === obj.getQueryString().trim().length;
  };
  obj.getTextInputValue = function getTextInputValue() {
    return obj.textInputValue;
  };
  obj.setTextInputValue = function setTextInputValue(closure_0, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    obj.textInputValue = closure_0;
    obj.textInputChangedFromInput = flag;
    const result = obj.resetExplicitSearchSubmitted();
  };
  obj.isInitialSearchQuery = function isInitialSearchQuery() {
    const isExplicitSearchSubmitted = obj.isExplicitSearchSubmitted;
    let tmp2 = !isExplicitSearchSubmitted;
    if (!isExplicitSearchSubmitted) {
      let tmp3 = 0 === tmp.textInputValue.trim().length;
      if (tmp3) {
        const tagsManager = tmp.tagsManager;
        tmp3 = !tagsManager.hasUserAddedTags();
      }
      tmp2 = tmp3;
      const str = tmp.textInputValue;
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
  obj.removeTag = function removeTag(closure_0) {
    const tagsManager = obj.tagsManager;
    tagsManager.removeAtIndex(closure_0);
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
      tmp.textInputValue = tmp.draftTextInputValue;
      tmp.textInputChangedFromInput = false;
      tmp.draftTextInputValue = null;
    }
  };
  obj.reset = function reset() {
    obj.textInputValue = closure_1_6;
    obj.textInputChangedFromInput = false;
    obj.searchResultsQuery = closure_1_6;
    obj.draftTextInputValue = null;
    obj.isExplicitSearchSubmitted = false;
    const tagsManager = obj.tagsManager;
    const result = tagsManager.set(obj.initialTagsSnapshot);
  };
  obj.textInputValue = closure_6;
  obj.textInputChangedFromInput = false;
  obj.searchResultsQuery = closure_6;
  type = type.type;
  if (constants3.THREAD !== type) {
    if (constants3.GUILD_CHANNEL !== type) {
      let items = [];
    }
    obj.initialTagsSnapshot = items;
    const tmp12 = new isCompleteDefault();
    obj.tagsManager = tmp12;
    let tagsManager = obj.tagsManager;
    let result = tagsManager.set(obj.initialTagsSnapshot);
    obj.draftTextInputValue = null;
    return obj;
  }
  channel = channel.getChannel(type.channelId);
  let isObfuscatedResult;
  if (channel != null) {
    isObfuscatedResult = channel.isObfuscated();
  }
  if (isObfuscatedResult) {
    items = [];
  } else {
    let channelName;
    if (null != channel) {
      channelName = obj(4674).computeChannelName(channel, closure_5, closure_4);
      const obj2 = obj(4674);
    }
    if (null == channelName) {
      let items1 = [];
    } else {
      obj = { type: null, searchTokenType: null, text: null, channelId: null, location: null };
      obj[0] = constants.COMPLETE;
      obj[1] = constants2.FILTER_IN;
      const intl = obj(1236).intl;
      const stringResult = intl.string(obj(1236).t.WNpFHa);
      let _HermesInternal = HermesInternal;
      obj[2] = "" + stringResult + ": " + obj(11907).quoteChannelName(channelName);
      obj[3] = type.channelId;
      obj[4] = SearchFilterAddLocations.CLIENT_AUTO_ADD;
      items1 = [obj];
      const obj4 = obj(11907);
    }
    items = items1;
  }
}.prototype;
const map = new Map();
let closure_13 = areArraysShallowlyEqual.cachedFunction((arg0) => new prototype(arg0));
const Store = initializeDefault.Store;
class NativeSearchQueryStore extends Store {
}
const prototype2 = NativeSearchQueryStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_5, closure_4);
};
prototype2["getManager"] = function getManager(closure_0) {
  let value = map.get(SearchTokenTypes.getSearchContextId(closure_0));
  if (value == null) {
    value = callback(closure_0);
  }
  return value;
};
prototype2["getQueryString"] = function getQueryString(searchContext) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.getQueryString(flag);
};
prototype2["isQueryStringEmpty"] = function isQueryStringEmpty(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.isQueryStringEmpty();
};
prototype2["getTextInputValue"] = function getTextInputValue(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.getTextInputValue();
};
prototype2["isInitialSearchQuery"] = function isInitialSearchQuery(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.isInitialSearchQuery();
};
prototype2["getSearchResultsQuery"] = function getSearchResultsQuery(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.getSearchResultsQuery();
};
prototype2["isTextInputValueEmpty"] = function isTextInputValueEmpty(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.isTextInputValueEmpty();
};
prototype2["getTextValueChangedFromInput"] = function getTextValueChangedFromInput(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.getTextValueChangedFromInput();
};
prototype2["hasUserAddedTags"] = function hasUserAddedTags(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.hasUserAddedTags();
};
prototype2["getTags"] = function getTags(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.getTags();
};
prototype2["getPrefixTag"] = function getPrefixTag(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.getPrefixTag();
};
prototype2["isAutocompleteVisible"] = function isAutocompleteVisible(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.isAutocompleteVisible();
};
prototype2["getChannelIds"] = function getChannelIds(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.getChannelIds();
};
prototype2["getUserIds"] = function getUserIds(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.getUserIds(arg1);
};
prototype2["isTagsEmpty"] = function isTagsEmpty(searchContext) {
  let value = map.get(SearchTokenTypes.getSearchContextId(searchContext));
  if (value == null) {
    value = callback(searchContext);
  }
  return value.isTagsEmpty();
};
NativeSearchQueryStore.displayName = "NativeSearchQueryStore";
areArraysShallowlyEqual = {
  SEARCH_QUERY_NATIVE_UPDATE: function handleSearchQueryNativeUpdate(searchContext) {
    searchContext = searchContext.searchContext;
    const searchContextId = SearchTokenTypes.getSearchContextId(searchContext);
    let value = map.get(searchContextId);
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
const nativeSearchQueryStore = new NativeSearchQueryStore(dispatcherDefault, areArraysShallowlyEqual);
let result = require("set").fileFinishedImporting("modules/search/native/stores/SearchQueryStore.tsx");

export default nativeSearchQueryStore;
export const SearchQueryStateManager = prototype;