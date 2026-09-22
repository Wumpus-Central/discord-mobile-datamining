// discord_app/modules/search/SearchAutocompleteStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import _modDef4876 from "../../../_runtime/metro/04876__.js";
import AutocompleteUtils from "../../utils/AutocompleteUtils.tsx";
import GuildUtilsDefault from "../../utils/GuildUtils.tsx";
import UserSearchManagerDefault from "../autocompleter/UserSearchManager.tsx";
import SearchUtils from "SearchUtils.tsx";
import SearchTokens from "tokens/SearchTokens.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import StreamerModeStore from "../../stores/StreamerModeStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const SearchTokensDefault = SearchTokens;

require = fn;
function handleUserSearchResults(searchContext, results) {
  const searchContextId = SearchUtils.getSearchContextId(searchContext);
  value = map1.get(searchContextId);
  const value3 = map.get(searchContextId);
  if (null != value) {
    if (null != value3) {
      const mode1 = value3.mode;
      let tmp8 = mode1.type === constants.FILTER;
      if (tmp8) {
        const filter = mode1.filter;
        let tmp6 = null != filter;
        if (tmp6) {
          tmp6 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
          const tmp7 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        }
        tmp8 = tmp6;
      }
      if (tmp8) {
        let num = 3;
        if (value3.mode.type === constants.FILTER) {
          num = 10;
        }
        value.results = (function fixUserResults(results, arg1) {
          const items = [];
          const iter = results[Symbol.iterator]();
          while (iter !== undefined) {
            if (items.length >= arg1) {
              iter.return();
              break;
            } else {
              user = user.getUser(tmp2.id);
              let obj3 = user;
              if (null != user) {
                if (!obj3.isNonUserBot()) {
                  let obj = UserUtilsDefault;
                  let userTag = obj.getUserTag(obj3);
                  if (null != userTag) {
                    let obj2 = { text: null, user: null };
                    obj2.text = tmp8;
                    obj2.user = obj3;
                    let arr = items.push(obj2);
                  }
                }
              }
              continue;
            }
            return items;
          }
          const nextResult = iter.next();
        })(results.results, num);
        ({ mode, tokens } = value3);
        ({ query, cursorScope } = value3);
        let tmp10 = getAutocompleteList(searchContext, mode, tokens);
        const searchContextId1 = SearchUtils.getSearchContextId(searchContext);
        let value4 = map1.get(searchContextId1);
        if (value4 == null) {
          const obj4 = {
            results: [],
            context: UserSearchManagerDefault.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)),
          };
          value4 = obj4;
        }
        const result = map1.set(searchContextId1, value4);
        const obj5 = { searchContext, query, mode, tokens, cursorScope, autocompletes: tmp10 };
        const result1 = map.set(searchContextId, obj5);
        searchAutocompleteStoreClass.emitChange();
        const tmpResult = SearchUtils;
      }
    }
  }
}
function getAutocompleteList(searchContext, autocompleteMode, tokens) {
  const type = autocompleteMode.type;
  if (constants.FILTER === type) {
    ({ filter, token } = autocompleteMode);
    let num = c17;
    if (c17 === undefined) {
      num = 10;
    }
    let currentUser;
    let tmp4 = null;
    if (null != filter) {
      let str;
      if (token != null) {
        const str2 = token.getFullMatch();
        if (str2 != null) {
          str = str2.trim();
        }
      }
      if (str == null) {
        str = "";
      }
      if (obj.isGuildLikeSearchContext(searchContext)) {
        let tmp8 = null != filter;
        if (tmp8) {
          tmp8 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
          const tmp9 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        }
        if (tmp8) {
          if (0 !== str.length) {
            const searchContextId = SearchUtils.getSearchContextId(searchContext);
            value = map1.get(searchContextId);
            if (value == null) {
              const obj2 = {
                results: [],
                context: UserSearchManagerDefault.getUserSearchContext(
                  handleUserSearchResults.bind(null, searchContext),
                ),
              };
              value = obj2;
            }
            const result = map1.set(searchContextId, value);
            const results = value.results;
            let arr3 = results;
            if (null != results) {
              let tmp20 = null != filter;
              if (tmp20) {
                tmp20 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
                const tmp19 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
              }
              arr3 = results;
              if (tmp20) {
                arr3 = results;
                if (tmp6Result2.isMeAutcompleteAnswer(str)) {
                  currentUser = UserStore.getCurrentUser();
                  arr3 = results;
                  if (null != currentUser) {
                    const found = results.filter((user) => {
                      user = user.user;
                      let id;
                      if (user != null) {
                        id = user.id;
                      }
                      return id !== currentUser.id;
                    });
                    const obj4 = { text: ME, user: currentUser };
                    found.unshift(obj4);
                    arr3 = found;
                  }
                }
                tmp6Result2 = SearchTokens;
              }
            }
            let tmp25 = null;
            if (null != arr3) {
              tmp25 = null;
              if (0 !== arr3.length) {
                const obj5 = { group: filter, results: arr3 };
                tmp25 = obj5;
              }
            }
            tmp4 = tmp25;
            const tmp6Result = SearchUtils;
          }
        }
      }
      const tmp15 = SearchTokensDefault[filter];
      let getAutocompletions;
      if (tmp15 != null) {
        getAutocompletions = tmp15.getAutocompletions;
      }
      if (null != getAutocompletions) {
        const obj6 = { query: str, searchContext, maxResults: num, tokens };
        let autocompletions = getAutocompletions(obj6);
      } else {
        autocompletions = [];
      }
      obj = SearchUtils;
    }
    if (null != tmp4) {
      const items = [tmp4];
      let tmp26 = items;
    } else {
      tmp26 = closure_14;
    }
    return tmp26;
  } else {
    return closure_14;
  }
}
function handleChannelCreateOrDelete() {
  SearchUtils.clearTokenCache();
}
function rebuildAutocompleteResults(c13) {
  const searchContextId = SearchUtils.getSearchContextId(searchContext);
  value = map.get(searchContextId);
  if (null == value) {
    return false;
  } else {
    ({ mode, tokens } = value);
    ({ query, cursorScope } = value);
    const tmp11 = getAutocompleteList(searchContext, mode, tokens);
    const searchContextId1 = SearchUtils.getSearchContextId(searchContext);
    value2 = map1.get(searchContextId1);
    if (value2 == null) {
      const obj3 = {
        results: [],
        context: UserSearchManagerDefault.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)),
      };
      value2 = obj3;
    }
    const result = map1.set(searchContextId1, value2);
    const obj5 = { searchContext, query, mode, tokens, cursorScope, autocompletes: tmp11 };
    const result1 = map.set(searchContextId, obj5);
    const tmpResult = SearchUtils;
  }
}
const Constants = fn(1074);
({ SearchPopoutModes: closure_9, SearchTokenTypes } = Constants);
const ME = Constants.ME;
fn(5734).AutocompleterResultTypes;
let c13 = null;
let closure_14 = [];
const map = new Map();
const map1 = new Map();
let c17 = 10;
let items = [, ,];
({ FILTER_FROM: arr[0], FILTER_IN: arr[1], FILTER_MENTIONS: arr[2] } = SearchTokenTypes);
new Set(items);
const Store = initializeDefault.Store;
class SearchAutocompleteStoreClass extends Store {}
const prototype = SearchAutocompleteStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildMemberStore, GuildStore, SelectedChannelStore, StreamerModeStore, UserStore);
};
prototype["getState"] = function getState(searchContext) {
  value = map.get(SearchUtils.getSearchContextId(searchContext));
  if (value == null) {
    const obj2 = { searchContext, query: "", mode: null, tokens: null, cursorScope: null, autocompletes: null };
    const obj3 = { type: constants.EMPTY, filter: null, token: null };
    obj2.mode = obj3;
    obj2.tokens = [];
    obj2.autocompletes = [];
    value = obj2;
  }
  return value;
};
prototype["getSelectedSearchContext"] = function getSelectedSearchContext() {
  return c13;
};
SearchAutocompleteStoreClass.displayName = "SearchAutocompleteStore";
const searchAutocompleteStoreClass = new SearchAutocompleteStoreClass(DispatcherDefault, {
  SEARCH_AUTOCOMPLETE_INITIALIZE: function handleSearchAutocompleteInitialize(searchContext) {
    searchContext = searchContext.searchContext;
    if (!_modDef4876(c13, searchContext)) {
      c13 = searchContext;
      SearchUtils.clearTokenCache();
    }
    rebuildAutocompleteResults(searchContext);
  },
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function handleSearchAutocompleteQueryUpdate(arg0) {
    ({ searchContext, tokens, cursorScope } = arg0);
    if (!_modDef4876(c13, searchContext)) {
      c13 = searchContext;
      SearchUtils.clearTokenCache();
    }
    const queryFromTokens = SearchUtils.getQueryFromTokens(tokens);
    const autocompleteMode = SearchUtils.getAutocompleteMode(cursorScope, tokens);
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    value = map.get(searchContextId);
    if (null != value) {
      if (queryFromTokens === value.query) {
        let autocompletes = value.autocompletes;
        let flag = false;
      }
      const searchContextId1 = SearchUtils.getSearchContextId(searchContext);
      let value4 = map1.get(searchContextId1);
      if (value4 == null) {
        const obj6 = {
          results: [],
          context: UserSearchManagerDefault.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)),
        };
        value4 = obj6;
        const tmpResult = UserSearchManagerDefault;
      }
      const result = map1.set(searchContextId1, value4);
      const obj8 = {
        searchContext,
        query: queryFromTokens,
        mode: autocompleteMode,
        tokens,
        cursorScope,
        autocompletes,
      };
      const result1 = map.set(searchContextId, obj8);
      return flag;
    }
    let tmp9 = autocompleteMode.type === constants.FILTER;
    if (tmp9) {
      const filter = autocompleteMode.filter;
      let tmp10 = null != filter;
      if (tmp10) {
        tmp10 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        const tmp11 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
      }
      tmp9 = tmp10;
    }
    if (tmp9) {
      const searchContextId2 = SearchUtils.getSearchContextId(searchContext);
      let value5 = map1.get(searchContextId2);
      if (value5 == null) {
        const obj9 = {
          results: [],
          context: UserSearchManagerDefault.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)),
        };
        value5 = obj9;
        const tmpResult3 = UserSearchManagerDefault;
      }
      const result2 = map1.set(searchContextId2, value5);
      const token = autocompleteMode.token;
      let trimmed;
      if (token != null) {
        const str = token.getFullMatch();
        if (str != null) {
          trimmed = str.trim();
        }
      }
      if (null != trimmed) {
        if (trimmed.length > 0) {
          const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
          if (null != guildIdFromSearchContext) {
            const members = GuildUtilsDefault.requestMembers(guildIdFromSearchContext, trimmed, c17);
            const tmpResult4 = GuildUtilsDefault;
          }
          const context3 = value5.context;
          const obj10 = { query: trimmed, filters: null, boosters: null };
          const obj11 = { guild: guildIdFromSearchContext };
          obj10.filters = obj11;
          const tmp5Result5 = SearchUtils;
          obj10.boosters = AutocompleteUtils.getBoosterMap(AutocompleterResultTypes.USER);
          context3.setQuery(obj10);
          let autocompletes1;
          if (value != null) {
            autocompletes1 = value.autocompletes;
          }
          if (autocompletes1 == null) {
            autocompletes1 = [];
          }
          flag = false;
          autocompletes = autocompletes1;
          const tmp5Result6 = AutocompleteUtils;
        }
      }
      const context2 = value5.context;
      context2.clearQuery();
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
      const tmp5Result4 = SearchUtils;
    } else {
      const value6 = map1.get(searchContextId);
      if (null != value6) {
        const context = value6.context;
        context.clearQuery();
        value6.results = [];
      }
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
    }
  },
  SEARCH_QUERY_TEXT_CLEAR: function handleSearchQueryTextClear(id) {
    id = id.id;
    value = map1.get(id);
    if (null != value) {
      const context = value.context;
      context.destroy();
      value.results = [];
      map1.delete(id);
    }
    map.delete(id);
    c13 = null;
  },
  CHANNEL_CREATE: handleChannelCreateOrDelete,
  CHANNEL_DELETE: handleChannelCreateOrDelete,
  STREAMER_MODE_UPDATE: function handleStreamerModeUpdate() {
    let tmp = null != c13;
    if (tmp) {
      tmp = rebuildAutocompleteResults(c13);
    }
    return tmp;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let tmp = null != c13;
    if (tmp) {
      tmp = rebuildAutocompleteResults(c13);
    }
    return tmp;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/SearchAutocompleteStore.tsx");

export default searchAutocompleteStoreClass;
