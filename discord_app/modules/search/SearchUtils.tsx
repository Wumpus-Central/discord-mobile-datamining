// === Module 12340: SearchUtils ===

// Module 12340 (SearchUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1114 */;
import _modDef4153 from "module_4153" /* 4153 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import useChannelName from "useChannelName" /* 4713 */;
import SearchTokens from "SearchTokens" /* 12341 */;
import QueryTokenizerDefault from "QueryTokenizer" /* 12346 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12347 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 4772 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;

const SearchTokensDefault = SearchTokens;

require = fn;
const SearchTabs = fn(7878).SearchTabs;
const Constants = fn(1074);
({ SearchTypes: c10, SearchTokenTypes } = Constants);
({ SearchPopoutModes: closure_12, IS_SEARCH_ANSWER_TOKEN: map1, IS_SEARCH_FILTER_TOKEN: closure_14, SearchModes: closure_15, ME } = Constants);
let c16 = 2592000;
let c17 = 31536000;
const ShowDatePicker = { [SearchTokenTypes.FILTER_BEFORE]: true, [SearchTokenTypes.FILTER_AFTER]: true, [SearchTokenTypes.FILTER_ON]: true };
const navigation = new QueryTokenizerDefault();
let tmp4 = new QueryTokenizerDefault();
const navigation2 = new QueryTokenizerDefault();
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/SearchUtils.tsx");

export const getSearchContextId = function getSearchContextId(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD === type) {
    return searchContext.guildId;
  } else {
    if (tmp.GUILD_CHANNEL !== type) {
      if (tmp.CHANNEL !== type) {
        if (tmp.THREAD !== type) {
          return tmp.DMS === type ? searchContext.type : undefined;
        }
      }
    }
    return searchContext.channelId;
  }
};
export const getSearchHistoryStateId = function getSearchHistoryStateId(type) {
  type = type.type;
  if (constants.GUILD === type) {
    let channelId = type.guildId;
  } else {
    if (tmp.GUILD_CHANNEL !== type) {
      if (tmp.CHANNEL !== type) {
        if (tmp.THREAD !== type) {
          if (tmp.DMS === type) {
            channelId = type.type;
          }
        }
      }
    }
    channelId = type.channelId;
  }
  return channelId;
};
export const getSearchTabFetchId = function getSearchTabFetchId(searchContext, MEDIA, searchResultsQuery) {
  const type = searchContext.type;
  if (constants.GUILD === type) {
    let channelId = searchContext.guildId;
  } else {
    if (tmp.GUILD_CHANNEL !== type) {
      if (tmp.CHANNEL !== type) {
        if (tmp.THREAD !== type) {
          if (tmp.DMS === type) {
            channelId = searchContext.type;
          }
        }
      }
    }
    channelId = searchContext.channelId;
  }
  return "" + channelId + "-" + MEDIA + "-" + searchResultsQuery;
};
export const getChannelActiveAgoTimestamp = function getChannelActiveAgoTimestamp(arg0) {
  let obj = _modDef4153();
  const diffResult = obj.diff(_modDef4153(arg0), "s");
  if (diffResult > c17) {
    const _Math5 = Math;
    const rounded = Math.round(diffResult / tmp3);
    const intl7 = util.intl;
    obj = { count: rounded };
    return intl7.formatToPlainString(util.t["7th+Mf"], obj);
  } else if (diffResult > c16) {
    const _Math4 = Math;
    const rounded1 = Math.round(diffResult / tmp21);
    const intl6 = util.intl;
    obj = { count: rounded1 };
    return intl6.formatToPlainString(util.t.g2uHTD, obj);
  } else if (diffResult > 172800) {
    const _Math3 = Math;
    const rounded2 = Math.round(diffResult / 86400);
    const intl5 = util.intl;
    const obj1 = { count: rounded2 };
    return intl5.formatToPlainString(util.t.HNgi95, obj1);
  } else if (diffResult > 86400) {
    const intl4 = util.intl;
    return intl4.string(util.t.uNkIhT);
  } else if (diffResult > 3600) {
    const _Math2 = Math;
    const rounded3 = Math.round(diffResult / 3600);
    const intl3 = util.intl;
    const obj2 = { count: rounded3 };
    return intl3.formatToPlainString(util.t.WJBWP1, obj2);
  } else if (diffResult > 60) {
    const _Math = Math;
    const rounded4 = Math.round(diffResult / 60);
    const intl2 = util.intl;
    const obj3 = { count: rounded4 };
    return intl2.formatToPlainString(util.t.CbRfwg, obj3);
  } else {
    const intl = util.intl;
    return intl.string(util.t["5Ldpkc"]);
  }
};
export const getIndexingErrorText = function getIndexingErrorText(searchContext) {
  const type = searchContext.type;
  if (constants.CHANNEL === type) {
    const intl3 = util.intl;
    return intl3.string(util.t.Q0JJjv);
  } else if (tmp.DMS === type) {
    const intl2 = util.intl;
    return intl2.string(util.t.Br0xJA);
  } else {
    const intl = util.intl;
    return intl.string(util.t.AXPbZr);
  }
};
export const getGuildIdFromSearchContext = function getGuildIdFromSearchContext(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD_CHANNEL !== type) {
    if (tmp.GUILD !== type) {
      if (tmp.THREAD !== type) {
        if (tmp.CHANNEL === type) {
          const channel = ChannelStore.getChannel(searchContext.channelId);
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          if (guild_id == null) {
            guild_id = null;
          }
          return guild_id;
        } else {
          return null;
        }
      }
    }
  }
  return searchContext.guildId;
};
export const isGuildLikeSearchContext = function isGuildLikeSearchContext(searchContext) {
  return searchContext.type === constants.GUILD || searchContext.type === constants.GUILD_CHANNEL || searchContext.type === constants.THREAD;
};
export const getChannelIdFromSearchContext = function getChannelIdFromSearchContext(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD_CHANNEL !== type) {
    if (tmp.CHANNEL !== type) {
      if (tmp.THREAD !== type) {
        return null;
      }
    }
  }
  return searchContext.channelId;
};
export const getTabTitle = function getTabTitle(id) {
  if (SearchTabs.RECENT === id) {
    const intl10 = util.intl;
    return intl10.string(util.t.tWnHcL);
  } else if (tmp.MESSAGES === id) {
    const intl9 = util.intl;
    return intl9.string(util.t.dvZAkp);
  } else if (tmp.PEOPLE === id) {
    const intl8 = util.intl;
    return intl8.string(util.t["GFd/I5"]);
  } else if (tmp.MEDIA === id) {
    const intl7 = util.intl;
    return intl7.string(util.t["Aw9+/M"]);
  } else if (tmp.PINS === id) {
    const intl6 = util.intl;
    return intl6.string(util.t["/MoGoB"]);
  } else if (tmp.LINKS === id) {
    const intl5 = util.intl;
    return intl5.string(util.t.DFSvTt);
  } else if (tmp.FILES === id) {
    const intl4 = util.intl;
    return intl4.string(util.t["WgVYR/"]);
  } else if (tmp.GUILD_CHANNELS === id) {
    const intl3 = util.intl;
    return intl3.string(util.t.OGiMXJ);
  } else if (tmp.MEMBERS === id) {
    const intl2 = util.intl;
    return intl2.string(util.t["9Oq93m"]);
  } else if (tmp.THREADS === id) {
    const intl = util.intl;
    return intl.string(util.t.B2panI);
  }
};
export const searchModeToSearchQueryParams = function searchModeToSearchQueryParams(searchMode) {
  if (constants3.MOST_RELEVANT === searchMode) {
    return { sort_by: "relevance", sort_order: "desc" };
  } else if (tmp.OLDEST === searchMode) {
    return { sort_by: "timestamp", sort_order: "asc" };
  } else {
    const NEWEST = tmp.NEWEST;
    return { sort_by: "timestamp", sort_order: "desc" };
  }
};
export const searchQueryParamsToSearchMode = function searchQueryParamsToSearchMode(sort_by) {
  if (null != sort_by.sort_by) {
    if (null != sort_by.sort_order) {
      if ("relevance" === sort_by.sort_by) {
        let NEWEST = constants3.MOST_RELEVANT;
      } else if ("asc" === sort_by.sort_order) {
        NEWEST = constants3.OLDEST;
      } else {
        NEWEST = constants3.NEWEST;
      }
    }
    return NEWEST;
  }
  NEWEST = constants3.NEWEST;
};
export const getSearchOptionAnswer = function getSearchOptionAnswer(arg0) {
  if (SearchTokenTypes.FILTER_FROM === arg0) {
    const intl10 = util.intl;
    return intl10.string(util.t.E466pL);
  } else if (tmp.FILTER_MENTIONS === arg0) {
    const intl9 = util.intl;
    return intl9.string(util.t.BYvFWl);
  } else if (tmp.FILTER_HAS === arg0) {
    const intl8 = util.intl;
    return intl8.string(util.t.bhSYbc);
  } else {
    if (tmp.FILTER_BEFORE !== arg0) {
      if (tmp.FILTER_ON !== arg0) {
        if (tmp.FILTER_AFTER !== arg0) {
          if (tmp.FILTER_IN === arg0) {
            const intl6 = util.intl;
            return intl6.string(util.t["GpM+/7"]);
          } else if (tmp.FILTER_LINK_FROM === arg0) {
            const intl5 = util.intl;
            return intl5.string(util.t.FdDTni);
          } else if (tmp.FILTER_FILE_TYPE === arg0) {
            const intl4 = util.intl;
            return intl4.string(util.t.FXcAFe);
          } else if (tmp.FILTER_FILE_NAME === arg0) {
            const intl3 = util.intl;
            return intl3.string(util.t.uAbFDM);
          } else if (tmp.FILTER_PINNED === arg0) {
            const intl2 = util.intl;
            return intl2.string(util.t.UJxL3V);
          } else if (tmp.FILTER_AUTHOR_TYPE === arg0) {
            const intl = util.intl;
            return intl.string(util.t.qCQzBl);
          }
        }
      }
    }
    const intl7 = util.intl;
    return intl7.string(util.t.Zbbc1E);
  }
};
export { ShowDatePicker };
export const setIncludeNSFW = function setIncludeNSFW(arg0, guildIdFromSearchContext) {
  if (GuildNSFWAgreeStore.didAgree(guildIdFromSearchContext)) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      arg0.include_nsfw = null == currentUser.nsfwAllowed || currentUser.nsfwAllowed;
      const tmp4 = null == currentUser.nsfwAllowed || currentUser.nsfwAllowed;
    }
  }
};
export const getSearchQueryFromTokens = function getSearchQueryFromTokens(tokenizeQueryResult) {
  const obj = {};
  const item = tokenizeQueryResult.forEach((type) => {
    type = type.type;
    if (!regex2.test(type)) {
      if (SearchTokenTypes.ANSWER_BEFORE !== type) {
        if (tmp.ANSWER_ON !== type) {
          if (tmp.ANSWER_AFTER !== type) {
            const tmp27 = (function getQueryKey(type) {
              const tmp = closure_1_1(closure_1_2[11])[type];
              let str = null;
              if (null != tmp) {
                str = tmp.queryKey;
              }
              if (null == str) {
                str = "content";
              }
              return str;
            })(type);
            if (null == obj[tmp27]) {
              const _Set = Set;
              const set = new Set();
              tmp28[tmp27] = set;
            }
            if (tmp.ANSWER_USERNAME_FROM !== type) {
              if (tmp.ANSWER_USERNAME_MENTIONS !== type) {
                if (tmp.ANSWER_LINK_FROM !== type) {
                  if (tmp.ANSWER_FILE_TYPE !== type) {
                    if (tmp.ANSWER_FILE_NAME !== type) {
                      if (tmp.ANSWER_IN === type) {
                        let data = type.getData("channelIds");
                        if (data == null) {
                          data = [];
                        }
                        for (const item10045 of data) {
                          let addResult = obj.add(item10045);
                          continue;
                        }
                      } else if (tmp.ANSWER_HAS === type) {
                        obj.add(type.getData("has"));
                      } else if (tmp.ANSWER_PINNED === type) {
                        obj.add(type.getData("pinned"));
                      } else if (tmp.ANSWER_AUTHOR_TYPE === type) {
                        obj.add(type.getData("author_type"));
                      } else {
                        obj.add(type.getFullMatch().trim());
                        let str = type.getFullMatch();
                      }
                    }
                  }
                }
                obj.add(type.getMatch(1));
              }
            }
            obj[tmp27].add(type.getData("userId"));
          }
        }
      }
      const data1 = type.getData("start");
      const data2 = type.getData("end");
      if (data1) {
        obj.min_id = SnowflakeUtilsDefault.fromTimestamp(data1);
      }
      if (data2) {
        const fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(data2);
        obj.max_id = fromTimestampResult;
      }
    }
  });
  const entries = Object.entries(obj);
  while (tmp5 !== undefined) {
    let tmp8 = _slicedToArray(tmp6, 2);
    [tmp9, tmp10] = tmp8;
    let _Set = Set;
    if (tmp10 instanceof Set) {
      let _Array = Array;
      obj[tmp9] = Array.from(tmp11);
    }
    continue;
  }
  if (obj.content) {
    delete tmp[tmp2];
    const content = obj.content;
    obj.content = content.join(" ").trim();
    if (!obj.content) {
      delete tmp[tmp2];
    }
    const str3 = content.join(" ");
  }
  return obj;
};
export const getQueryContentString = function getQueryContentString(searchQueryFromTokens) {
  let contents;
  if (searchQueryFromTokens != null) {
    contents = searchQueryFromTokens.contents;
  }
  if (null != contents) {
    if (searchQueryFromTokens.contents.length > 0) {
      let joined;
      if (searchQueryFromTokens != null) {
        const contents1 = searchQueryFromTokens.contents;
        if (contents1 != null) {
          const mapped = contents1.map((item) => {
            const parts = item.split("|");
            const substr = parts.slice(1);
            return substr.join("|");
          });
          joined = mapped.join(" ");
        }
      }
      let content = joined;
    }
    return content;
  }
  if (searchQueryFromTokens != null) {
    content = searchQueryFromTokens.content;
  }
};
export const getNonTokenQuery = function getNonTokenQuery(arr) {
  const mapped = arr.map((type) => {
    let str = "";
    if (type.type === QueryTokenizerDefault.NON_TOKEN_TYPE) {
      str = type.getFullMatch();
    }
    return str;
  });
  return mapped.join(" ").trim();
};
export const getSelectionScope = function getSelectionScope(tokenizeQueryResult, focusOffset, anchorOffset) {
  closure_1 = focusOffset;
  closure_2 = anchorOffset;
  const found = tokenizeQueryResult.find((start, index) => {
    if (closure_1 >= start.start) {
      if (tmp <= start.end) {
        if (closure_2 >= start.start) {
          if (tmp2 <= start.end) {
            let flag = true;
            if (null != tokenizeQueryResult[index + 1]) {
              closure_4 = tmp4[index + 1];
              flag = true;
            }
          }
          return flag;
        }
      }
    }
    closure_3 = start;
    flag = false;
  });
  let tmp2 = null;
  if (null != found) {
    const obj = { previousToken, currentToken: found, nextToken, focusOffset, anchorOffset };
    tmp2 = obj;
  }
  return tmp2;
};
export const getAutocompleteMode = function getAutocompleteMode(cursorScope, tokens) {
  let obj = cursorScope;
  if (cursorScope == null) {
    obj = {};
  }
  ({ currentToken, nextToken, previousToken } = obj);
  if (0 === tokens.length) {
    obj = { type: constants2.EMPTY, filter: null, token: null };
    return obj;
  } else if (null == currentToken) {
    obj = { type: constants2.FILTER_ALL, filter: null, token: null };
    return obj;
  } else {
    if (obj9.isSearchFilterTokenType(currentToken.type)) {
      if (null != nextToken) {
        if (nextToken.type !== QueryTokenizerDefault.NON_TOKEN_TYPE) {
          if (null != nextToken) {
            if (!regex.test(nextToken.type)) {
              const obj1 = { type: constants2.FILTER, filter: currentToken.type, token: null };
              return obj1;
            }
          }
        }
      }
      const obj2 = { type: constants2.FILTER, filter: currentToken.type, token: nextToken };
      return obj2;
    }
    if (currentToken.type === QueryTokenizerDefault.NON_TOKEN_TYPE) {
      if (null != previousToken) {
        if (tmp10Result.isSearchFilterTokenType(previousToken.type)) {
          const obj3 = { type: constants2.FILTER, filter: previousToken.type, token: currentToken };
          let obj4 = obj3;
        }
        return obj4;
      }
    }
    let tmp4;
    if (currentToken.type === tmp3(12346).NON_TOKEN_TYPE) {
      tmp4 = currentToken;
    }
    obj4 = { type: constants2.FILTER_ALL, filter: null, token: tmp4 };
    obj9 = SearchTokens;
    tmp3 = importDefault;
  }
};
export const quoteChannelName = function quoteChannelName(channelName) {
  let combined = channelName;
  if (null != channelName.match(/([\\" ])/g)) {
    const _HermesInternal = HermesInternal;
    combined = "\"" + channelName.replaceAll(/([\\"])/g, (arg0, arg1) => "\\" + arg1) + "\"";
  }
  return combined;
};
export const getFlattenedAutocompleteResults = function getFlattenedAutocompleteResults(arg0, arg1) {
  closure_0 = arg1;
  importDefault = [];
  const item = _modDef12(arg0).forEach((results) => {
    closure_0 = results;
    if (null != results) {
      if (0 !== results.results.length) {
        let group = results.group;
        results = results.results;
        group = group.concat(results.map((text) => {
          let tmp = str;
          if (null != text.channel) {
            let combined = str;
            if (null != str.match(/([\\" ])/g)) {
              const _HermesInternal = HermesInternal;
              combined = "\"" + str.replaceAll(/([\\"])/g, (arg0, arg1) => "\\" + arg1) + "\"";
            }
            tmp = combined;
          }
          let combined1 = tmp;
          if (closure_0.type === constants2.FILTER_ALL) {
            group = text.group;
            const tmp8 = SearchTokensDefault[group];
            let key;
            if (tmp8 != null) {
              key = tmp8.key;
            }
            let tmp10 = null != key;
            if (tmp10) {
              let key1;
              if (tmp8 != null) {
                key1 = tmp8.key;
              }
              tmp10 = "" !== key1;
            }
            combined1 = tmp;
            if (tmp10) {
              const _HermesInternal2 = HermesInternal;
              combined1 = "" + tmp8.key + " " + tmp;
            }
          }
          return { result: text, group: closure_0.group, resultText: combined1 };
        }));
      }
    }
  });
  return importDefault.filter((resultText) => "" !== resultText.resultText);
};
export const getQueryFromTokens = function getQueryFromTokens(tokens) {
  let str = "";
  if (null != tokens) {
    const mapped = tokens.map((getFullMatch) => getFullMatch.getFullMatch());
    str = mapped.join("");
  }
  return str;
};
export const queryHasFilter = function queryHasFilter(errorcode, arg1) {
  closure_0 = arg1;
  return navigation.tokenize(errorcode).some((type) => type.type === closure_0);
};
export const tokenizeQuery = function tokenizeQuery(searchQueryString) {
  return navigation.tokenize(searchQueryString);
};
export const clearTokenCache = function clearTokenCache() {
  navigation.clearCache();
  navigation2.clearCache();
};
export const showDatePicker = function showDatePicker(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = obj[arg0];
  }
  return tmp;
};
export const filterHasAnswer = function filterHasAnswer(type, type2) {
  const isMatch = regex2.test(type.type);
  let tmp2 = null == type2 && isMatch;
  if (!tmp2) {
    let tmp3 = null != type2 && isMatch;
    if (tmp3) {
      tmp3 = !regex.test(type2.type);
    }
    tmp2 = tmp3;
  }
  return !tmp2;
};
export const refreshSearchTokens = function refreshSearchTokens() {
  const result = SearchTokens.rebuildSearchTokenConfigs();
  navigation.reset();
  _modDef12(SearchTokensDefault).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return navigation.addRule({ type });
  });
  navigation2.reset();
  const tmp3Result = _modDef12(SearchTokensDefault);
  const crossDMSearchTokensConfig = SearchTokens.buildCrossDMSearchTokensConfig();
  _modDef12(crossDMSearchTokensConfig).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return navigation2.addRule({ type });
  });
  const obj4 = _modDef12(crossDMSearchTokensConfig);
  const result1 = SearchActionCreatorsDefault.markSearchTokensRefreshed();
};
export const getChannelDisplayName = function getChannelDisplayName(isDM) {
  const channelName = useChannelName.computeChannelName(isDM, UserStore, RelationshipStore);
  if (isDM.isDM()) {
    const user = UserStore.getUser(isDM.getRecipientId());
    const userTag = UserUtilsDefault.getUserTag(user);
    let flag = false;
    let str = userTag;
    if (null == userTag) {
      return null;
    }
  } else {
    flag = false;
    str = channelName;
    if (!isDM.isGroupDM()) {
      const tmp3 = !isDM.isThread();
      const tmp5 = GuildChannelStore.getTextChannelNameDisambiguations(isDM.getGuildId())[isDM.id];
      let name;
      if (tmp5 != null) {
        name = tmp5.name;
      }
      flag = tmp3;
      str = channelName;
      if (null != name) {
        str = tmp5.name;
        flag = tmp3;
      }
    }
  }
  let combined = str;
  if (null != str.match(/([\\" ])/g)) {
    const _HermesInternal = HermesInternal;
    combined = "\"" + str.replaceAll(/([\\"])/g, (arg0, arg1) => "\\" + arg1) + "\"";
  }
  let combined1 = combined;
  if (flag) {
    const _HermesInternal2 = HermesInternal;
    combined1 = "#" + combined;
  }
  return combined1;
};
export const getChannelPlaceholderName = function getChannelPlaceholderName(isGroupDM) {
  if (isGroupDM.isGroupDM()) {
    return useChannelName.computeChannelName(isGroupDM, UserStore, RelationshipStore);
  } else if (isGroupDM.isDM()) {
    const user = UserStore.getUser(isGroupDM.getRecipientId());
    return UserUtilsDefault.getUserTag(user);
  } else {
    const tmp2 = GuildChannelStore.getTextChannelNameDisambiguations(isGroupDM.getGuildId())[isGroupDM.id];
    let name;
    if (tmp2 != null) {
      name = tmp2.name;
    }
    if (name == null) {
      name = useChannelName.computeChannelName(isGroupDM, UserStore, RelationshipStore);
    }
    return name;
  }
};
export const removeInvalidPrivateChannelSearchTokens = function removeInvalidPrivateChannelSearchTokens(errorcode) {
  const items = [];
  const item = navigation2.tokenize(errorcode).forEach((type) => {
    if (!tmp2) {
      items.push(type);
    }
  });
  importDefault = "";
  const item1 = items.forEach((getFullMatch) => {
    closure_1 = closure_1 + getFullMatch.getFullMatch();
  });
  return importDefault.trim();
};