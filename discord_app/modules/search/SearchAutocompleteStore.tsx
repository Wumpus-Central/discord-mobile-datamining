// discord_app/modules/search/SearchAutocompleteStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import isEqualDefault from "../../../_runtime/04608_isEqual.js";
import getTransformedUserDefault from "../autocompleter/UserSearchManager.tsx";
import SearchTokenTypes from "SearchUtils.tsx";
import getShortcutsDefault from "tokens/SearchTokens.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import closure_4 from "../../stores/GuildMemberStore.tsx";
import closure_5 from "../../stores/GuildStore.tsx";
import closure_6 from "../../stores/SelectedChannelStore.tsx";
import closure_7 from "../../stores/StreamerModeStore.tsx";
import closure_8 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import set from "../../../_runtime/00002_set.js";

require = arg1;
function handleUserSearchResults(c165, results) {
  let obj = SearchTokenTypes;
  const searchContextId = obj.getSearchContextId(c165);
  let value = map1.get(searchContextId);
  value = map.get(searchContextId);
  if (null != value) {
    if (null != value) {
      mode = value.mode;
      let tmp8 = mode.type === constants.FILTER;
      if (tmp8) {
        const filter = mode.filter;
        let tmp6 = null != filter;
        if (tmp6) {
          tmp6 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
          const tmp7 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        }
        tmp8 = tmp6;
      }
      if (tmp8) {
        let num = 3;
        if (value.mode.type === tmp19.FILTER) {
          num = 10;
        }
        value.results = (function fixUserResults(results, arg1) {
          const items = [];
          const iter = results[Symbol.iterator]();
          while (iter !== undefined) {
            if (items.length >= arg1) {
              let tmp12 = iter;
              iter.return();
              break;
            } else {
              let tmp13 = user;
              let tmp14 = nextResult;
              user = user.getUser(tmp2.id);
              let obj3 = user;
              if (null != user) {
                let tmp3 = user;
                if (!obj3.isNonUserBot()) {
                  let tmp4 = callback;
                  let tmp5 = table;
                  let obj = callback(table[10]);
                  let tmp6 = user;
                  let userTag = obj.getUserTag(obj3);
                  if (null != userTag) {
                    obj = { text: null, user: null };
                    let tmp9 = userTag;
                    obj[0] = tmp8;
                    let tmp10 = user;
                    obj[1] = obj3;
                    let arr = items.push(obj);
                  }
                }
              }
              continue;
            }
            return items;
          }
        })(results.results, num);
        ({ mode, tokens } = value);
        ({ query, cursorScope } = value);
        let tmp10 = getAutocompleteList(c165, mode, tokens);
        const searchContextId1 = SearchTokenTypes.getSearchContextId(c165);
        let value1 = obj2.get(searchContextId1);
        if (value1 == null) {
          obj = { results: null, context: null };
          obj[0] = [];
          obj[1] = getTransformedUserDefault.getUserSearchContext(handleUserSearchResults.bind(null, c165));
          value1 = obj;
          const obj6 = getTransformedUserDefault;
        }
        const result = obj2.set(searchContextId1, value1);
        obj = { searchContext: null, query: null, mode: null, tokens: null, cursorScope: null, autocompletes: null };
        obj[0] = c165;
        obj[1] = query;
        obj[2] = mode;
        obj[3] = tokens;
        obj[4] = cursorScope;
        obj[5] = tmp10;
        const result1 = map.set(searchContextId, obj);
        searchAutocompleteStoreClass.emitChange();
        const tmpResult = SearchTokenTypes;
      }
      tmp19 = constants;
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
      let obj = currentUser(11824);
      if (obj.isGuildLikeSearchContext(searchContext)) {
        let tmp8 = null != filter;
        if (tmp8) {
          tmp8 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
          const tmp9 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        }
        if (tmp8) {
          if (0 !== str.length) {
            let tmp6Result = tmp6(11824);
            const searchContextId = tmp6Result.getSearchContextId(searchContext);
            let value = map1.get(searchContextId);
            if (value == null) {
              obj = { results: null, context: null };
              obj[0] = [];
              let obj2 = getTransformedUserDefault;
              obj[1] = obj2.getUserSearchContext(handleUserSearchResults.bind(null, searchContext));
              value = obj;
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
                tmp6Result = tmp6(11825);
                arr3 = results;
                if (tmp6Result.isMeAutcompleteAnswer(str)) {
                  currentUser = currentUser.getCurrentUser();
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
                    obj = { text: null, user: null };
                    obj[0] = ME;
                    obj[1] = currentUser;
                    found.unshift(obj);
                    arr3 = found;
                  }
                }
              }
            }
            let tmp25 = null;
            if (null != arr3) {
              tmp25 = null;
              if (0 !== arr3.length) {
                obj1 = { group: null, results: null };
                obj1[0] = filter;
                obj1[1] = arr3;
                tmp25 = obj1;
              }
            }
            tmp4 = tmp25;
            const obj9 = map1;
          }
        }
      }
      const tmp15 = getShortcutsDefault[filter];
      let getAutocompletions;
      if (tmp15 != null) {
        getAutocompletions = tmp15.getAutocompletions;
      }
      if (null != getAutocompletions) {
        obj2 = { query: null, searchContext: null, maxResults: null, tokens: null };
        obj2[0] = str;
        obj2[1] = searchContext;
        obj2[2] = num;
        obj2[3] = tokens;
        let autocompletions = getAutocompletions(obj2);
      } else {
        autocompletions = [];
      }
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
  SearchTokenTypes.clearTokenCache();
}
function rebuildAutocompleteResults(c13) {
  let obj = SearchTokenTypes;
  const searchContextId = obj.getSearchContextId(c13);
  let value = map.get(searchContextId);
  if (null == value) {
    return false;
  } else {
    ({ mode, tokens } = value);
    ({ query, cursorScope } = value);
    const tmp11 = getAutocompleteList(c13, mode, tokens);
    const searchContextId1 = SearchTokenTypes.getSearchContextId(c13);
    value = map1.get(searchContextId1);
    if (value == null) {
      obj = { results: null, context: null };
      obj[0] = [];
      obj[1] = getTransformedUserDefault.getUserSearchContext(handleUserSearchResults.bind(null, c13));
      value = obj;
      const obj4 = getTransformedUserDefault;
    }
    const result = map1.set(searchContextId1, value);
    obj = { searchContext: null, query: null, mode: null, tokens: null, cursorScope: null, autocompletes: null };
    obj[0] = c13;
    obj[1] = query;
    obj[2] = mode;
    obj[3] = tokens;
    obj[4] = cursorScope;
    obj[5] = tmp11;
    const result1 = obj2.set(searchContextId, obj);
  }
  obj2 = map;
  const tmp = require;
}
({ SearchPopoutModes: c9, SearchTokenTypes } = ME);
ME = ME.ME;
require("HeaderRecord").AutocompleterResultTypes;
let c13 = null;
let closure_14 = [];
const map = new Map();
const map1 = new Map();
let c17 = 10;
let items = [, , ];
({ FILTER_FROM: arr[0], FILTER_IN: arr[1], FILTER_MENTIONS: arr[2] } = SearchTokenTypes);
let set = new Set(items);
const Store = initializeDefault.Store;
class SearchAutocompleteStoreClass extends Store {
}
const prototype = SearchAutocompleteStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4, closure_5, closure_6, closure_7, closure_8);
};
prototype["getState"] = function getState(searchContext) {
  let obj = SearchTokenTypes;
  let value = map.get(obj.getSearchContextId(searchContext));
  if (value == null) {
    obj = { searchContext: null, query: "", mode: null, tokens: null, cursorScope: null, autocompletes: null };
    obj[0] = searchContext;
    obj = { type: null, filter: null, token: null };
    obj[0] = constants.EMPTY;
    obj[2] = obj;
    obj[3] = [];
    obj[5] = [];
    value = obj;
  }
  return value;
};
prototype["getSelectedSearchContext"] = function getSelectedSearchContext() {
  return c13;
};
SearchAutocompleteStoreClass.displayName = "SearchAutocompleteStore";
const searchAutocompleteStoreClass = new SearchAutocompleteStoreClass(dispatcherDefault, {
  SEARCH_AUTOCOMPLETE_INITIALIZE: function handleSearchAutocompleteInitialize(searchContext) {
    searchContext = searchContext.searchContext;
    if (!isEqualDefault(searchContext, searchContext)) {
      SearchTokenTypes.clearTokenCache();
      const obj = SearchTokenTypes;
    }
    rebuildAutocompleteResults(searchContext);
  },
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function handleSearchAutocompleteQueryUpdate(arg0) {
    ({ searchContext, tokens, cursorScope } = arg0);
    if (!isEqualDefault(searchContext, searchContext)) {
      let obj = SearchTokenTypes;
      obj.clearTokenCache();
    }
    obj1 = SearchTokenTypes;
    const queryFromTokens = obj1.getQueryFromTokens(tokens);
    let obj2 = SearchTokenTypes;
    const autocompleteMode = obj2.getAutocompleteMode(cursorScope, tokens);
    let obj3 = SearchTokenTypes;
    const searchContextId = obj3.getSearchContextId(searchContext);
    let value = map.get(searchContextId);
    if (null != value) {
      if (queryFromTokens === value.query) {
        let autocompletes = value.autocompletes;
        let flag = false;
      }
      let tmp5Result = tmp5(11824);
      const searchContextId1 = tmp5Result.getSearchContextId(searchContext);
      value = map1.get(searchContextId1);
      if (value == null) {
        obj = { results: null, context: null };
        obj[0] = [];
        let tmpResult = tmp(9848);
        obj[1] = tmpResult.getUserSearchContext(handleUserSearchResults.bind(null, searchContext));
        value = obj;
      }
      const result = map1.set(searchContextId1, value);
      obj = { searchContext: null, query: null, mode: null, tokens: null, cursorScope: null, autocompletes: null };
      obj[0] = searchContext;
      obj[1] = queryFromTokens;
      obj[2] = autocompleteMode;
      obj[3] = tokens;
      obj[4] = cursorScope;
      obj[5] = autocompletes;
      const result1 = map.set(searchContextId, obj);
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
      tmp5Result = tmp5(11824);
      const searchContextId2 = tmp5Result.getSearchContextId(searchContext);
      let value1 = map1.get(searchContextId2);
      if (value1 == null) {
        obj1 = { results: null, context: null };
        obj1[0] = [];
        tmpResult = tmp(9848);
        obj1[1] = tmpResult.getUserSearchContext(handleUserSearchResults.bind(null, searchContext));
        value1 = obj1;
      }
      const result2 = map1.set(searchContextId2, value1);
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
          const guildIdFromSearchContext = tmp5(11824).getGuildIdFromSearchContext(searchContext);
          if (null != guildIdFromSearchContext) {
            const members = tmp(5408).requestMembers(guildIdFromSearchContext, trimmed, c17);
            const tmpResult1 = tmp(5408);
          }
          const context3 = value1.context;
          obj2 = { query: null, filters: null, boosters: null };
          obj2[0] = trimmed;
          obj3 = { guild: null };
          obj3[0] = guildIdFromSearchContext;
          obj2[1] = obj3;
          const tmp26 = guildIdFromSearchContext;
          const tmp5Result1 = tmp5(11824);
          obj2[2] = tmp5(5337).getBoosterMap(AutocompleterResultTypes.USER);
          context3.setQuery(obj2);
          autocompletes = undefined;
          if (value != null) {
            autocompletes = value.autocompletes;
          }
          if (autocompletes == null) {
            autocompletes = [];
          }
          flag = false;
          const tmp5Result2 = tmp5(5337);
        }
      }
      const context2 = value1.context;
      context2.clearQuery();
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
      const obj7 = map1;
    } else {
      const value2 = map1.get(searchContextId);
      if (null != value2) {
        const context = value2.context;
        context.clearQuery();
        value2.results = [];
      }
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
    }
  },
  SEARCH_QUERY_TEXT_CLEAR: function handleSearchQueryTextClear(id) {
    id = id.id;
    const value = map1.get(id);
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
  }
});
let result = set.fileFinishedImporting("modules/search/SearchAutocompleteStore.tsx");

export default searchAutocompleteStoreClass;