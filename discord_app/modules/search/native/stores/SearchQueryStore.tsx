// discord_app/modules/search/native/stores/SearchQueryStore.tsx
import get_initializedDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import TrackingConstants from "../tracking/TrackingConstants.tsx";
import SearchUtils from "../../SearchUtils.tsx";
import SearchQueryTagManagerDefault from "SearchQueryTagManager.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import SearchConstants from "../../SearchConstants.tsx";
import Constants from "../../../../Constants.tsx";
import FunctionUtils from "../../../../utils/FunctionUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let metroImportDefault;
let metroRequire;
({ EMPTY_SEARCH_QUERY_STRING: metroRequire, SearchQueryTagTypes: metroImportDefault } = SearchConstants);
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
({ SearchTokenTypes: c9, SearchTypes: c10 } = Constants);
class SearchQueryStateManager {
  constructor(searchContext) {
    let items;
    let obj4;
    let stringResult;
    const obj = Object.create(new.target.prototype);
    obj.isExplicitSearchSubmitted = false;
    obj.getQueryString = function getQueryString() {
      let textInputValue;
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const tagsManager = obj.tagsManager;
      const queryString = tagsManager.getQueryString(flag);
      if (0 !== queryString.length) {
        const _HermesInternal = HermesInternal;
        textInputValue = "" + queryString + " " + obj.textInputValue;
      } else {
        textInputValue = obj.textInputValue;
      }
      return textInputValue;
    };
    obj.isQueryStringEmpty = function isQueryStringEmpty() {
      const str = obj.getQueryString();
      return 0 === str.trim().length;
    };
    obj.getTextInputValue = function getTextInputValue() {
      return obj.textInputValue;
    };
    obj.setTextInputValue = function setTextInputValue(suggestedSearchText, arg1) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      obj.textInputValue = suggestedSearchText;
      obj.textInputChangedFromInput = flag;
      const result = obj.resetExplicitSearchSubmitted();
    };
    obj.isInitialSearchQuery = function isInitialSearchQuery() {
      let tmp2 = !obj.isExplicitSearchSubmitted;
      if (tmp2) {
        const str = obj.textInputValue;
        let tmp3 = 0 === str.trim().length;
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
      const str = obj.textInputValue;
      return 0 === str.trim().length;
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
      const tmp = null != obj.draftTextInputValue || obj.isTextInputValueEmpty();
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
    const type = searchContext.type;
    if (constants3.THREAD !== type) {
      if (constants3.GUILD_CHANNEL !== type) {
        items = [];
      }
      obj.initialTagsSnapshot = items;
      const self = this;
      const self2 = this;
      obj.tagsManager = new SearchQueryTagManagerDefault();
      let tagsManager = obj.tagsManager;
      const tmp10 = new SearchQueryTagManagerDefault();
      let result = tagsManager.set(obj.initialTagsSnapshot);
      obj.draftTextInputValue = null;
      return obj;
    }
    const channel = ChannelStore.getChannel(searchContext.channelId);
    let isObfuscatedResult;
    if (channel != null) {
      isObfuscatedResult = channel.isObfuscated();
    }
    if (isObfuscatedResult) {
      items = [];
    } else {
      let items1;
      let channelName;
      if (null != channel) {
        const obj2 = obj(5043);
        channelName = obj2.computeChannelName(channel, UserStore, RelationshipStore);
      }
      if (null == channelName) {
        items1 = [];
      } else {
        const obj3 = {
          type: constants.COMPLETE,
          searchTokenType: constants2.FILTER_IN,
          text: "" + stringResult + ": " + obj4.quoteChannelName(channelName),
          channelId: searchContext.channelId,
          location: SearchFilterAddLocations.CLIENT_AUTO_ADD,
        };
        const intl = obj(1126).intl;
        let _HermesInternal = HermesInternal;
        let str = ": ";
        stringResult = intl.string(obj(1126).t.WNpFHa);
        items1 = [obj3];
        obj4 = obj(11968);
      }
      items = items1;
    }
  }
}
const map = new Map();
FunctionUtils.cachedFunction((searchContext) => new SearchQueryStateManager(searchContext));
const Store = get_initializedDefault.Store;
class NativeSearchQueryStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, UserStore, RelationshipStore);
  }
  getManager(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value;
  }
  getQueryString(searchContext) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.getQueryString(flag);
  }
  isQueryStringEmpty(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.isQueryStringEmpty();
  }
  getTextInputValue(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.getTextInputValue();
  }
  isInitialSearchQuery(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.isInitialSearchQuery();
  }
  getSearchResultsQuery(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.getSearchResultsQuery();
  }
  isTextInputValueEmpty(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.isTextInputValueEmpty();
  }
  getTextValueChangedFromInput(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.getTextValueChangedFromInput();
  }
  hasUserAddedTags(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.hasUserAddedTags();
  }
  getTags(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.getTags();
  }
  getPrefixTag(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.getPrefixTag();
  }
  isAutocompleteVisible(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.isAutocompleteVisible();
  }
  getChannelIds(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.getChannelIds();
  }
  getUserIds(searchContext, arg1) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.getUserIds(arg1);
  }
  isTagsEmpty(searchContext) {
    const get = map.get;
    const obj = SearchUtils;
    let value = get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = closure_13(searchContext);
    }
    return value.isTagsEmpty();
  }
}
const prototype = NativeSearchQueryStore.prototype;
NativeSearchQueryStore.displayName = "NativeSearchQueryStore";
let obj = {
  SEARCH_QUERY_NATIVE_UPDATE: function handleSearchQueryNativeUpdate(searchContext) {
    searchContext = searchContext.searchContext;
    const updater = searchContext.updater;
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    let value = map.get(searchContextId);
    if (null == value) {
      const self = this;
      const tmp5 = new SearchQueryStateManager(searchContext);
      const result = map.set(searchContextId, tmp5);
      value = tmp5;
    }
    updater(value);
  },
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    map.delete(id.id);
  },
};
const nativeSearchQueryStore = new NativeSearchQueryStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchQueryStore.tsx");

export default nativeSearchQueryStore;
export { SearchQueryStateManager };
