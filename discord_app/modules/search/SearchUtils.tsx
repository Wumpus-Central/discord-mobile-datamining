// discord_app/modules/search/SearchUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import intl11 from "../../intl/index.native.tsx";
import _modDef4467 from "../../../_runtime/metro/04467__.js";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import SearchConstants from "SearchConstants.tsx";
import QueryTokenizerDefault from "../../lib/QueryTokenizer.tsx";
import SearchTokens from "tokens/SearchTokens.tsx";
import isGuildLikeSearchContext from "isGuildLikeSearchContext.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import ConsentStore from "../../stores/ConsentStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildNSFWAgreeStore from "../../stores/GuildNSFWAgreeStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SearchTokensDefault = SearchTokens;
let addRule, closure_4, importDefault, results, set;

let ME;
let SearchTokenTypes;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
const f110069 = (arg0, arg1) => "\\" + arg1;
const SearchTabs = SearchConstants.SearchTabs;
({ SearchTypes: closure_12, SearchTokenTypes } = Constants);
({
  SearchPopoutModes: closure_14,
  IS_SEARCH_ANSWER_TOKEN: closure_15,
  IS_SEARCH_FILTER_TOKEN: closure_16,
  SearchModes: closure_17,
  ME,
  Consents: closure_18,
  GuildFeatures: closure_19,
} = Constants);
let c20 = 2592000;
let c21 = 31536000;
const ShowDatePicker = {
  [SearchTokenTypes.FILTER_BEFORE]: true,
  [SearchTokenTypes.FILTER_AFTER]: true,
  [SearchTokenTypes.FILTER_ON]: true,
};
let tmp4 = new QueryTokenizerDefault();
const navigation = tmp4;
let tmp5 = new QueryTokenizerDefault();
const navigation2 = tmp5;
let result = size.fileFinishedImporting("modules/search/SearchUtils.tsx");

export const getSearchContextId = function getSearchContextId(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD === type) {
    return searchContext.guildId;
  } else {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.CHANNEL !== type) {
        if (constants.THREAD !== type) {
          return constants.DMS === type ? searchContext.type : undefined;
        }
      }
    }
    return searchContext.channelId;
  }
};
export const getSearchHistoryStateId = function getSearchHistoryStateId(type) {
  let channelId;
  type = type.type;
  if (constants.GUILD === type) {
    channelId = type.guildId;
  } else {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.CHANNEL !== type) {
        if (constants.THREAD !== type) {
          if (constants.DMS === type) {
            channelId = type.type;
          }
        }
      }
    }
    channelId = type.channelId;
  }
  return channelId;
};
export const getSearchTabFetchId = function getSearchTabFetchId(searchContext, tab, searchResultsQuery) {
  let channelId;
  const type = searchContext.type;
  if (constants.GUILD === type) {
    channelId = searchContext.guildId;
  } else {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.CHANNEL !== type) {
        if (constants.THREAD !== type) {
          if (constants.DMS === type) {
            channelId = searchContext.type;
          }
        }
      }
    }
    channelId = searchContext.channelId;
  }
  return "" + channelId + "-" + tab + "-" + searchResultsQuery;
};
export const getChannelActiveAgoTimestamp = function getChannelActiveAgoTimestamp(cResult) {
  const obj = _modDef4467();
  const diffResult = obj.diff(_modDef4467(cResult), "s");
  if (diffResult > c21) {
    const _Math5 = Math;
    const rounded = Math.round(diffResult / tmp3);
    const intl7 = intl11.intl;
    const obj2 = { count: rounded };
    return intl7.formatToPlainString(intl11.t["7th+Mf"], obj2);
  } else if (diffResult > c20) {
    const _Math4 = Math;
    const rounded1 = Math.round(diffResult / tmp21);
    const intl6 = intl11.intl;
    const obj3 = { count: rounded1 };
    return intl6.formatToPlainString(intl11.t.g2uHTD, obj3);
  } else if (diffResult > 172800) {
    const _Math3 = Math;
    const rounded2 = Math.round(diffResult / 86400);
    const intl5 = intl11.intl;
    const obj4 = { count: rounded2 };
    return intl5.formatToPlainString(intl11.t.HNgi95, obj4);
  } else if (diffResult > 86400) {
    const intl4 = intl11.intl;
    return intl4.string(intl11.t.uNkIhT);
  } else if (diffResult > 3600) {
    const _Math2 = Math;
    const rounded3 = Math.round(diffResult / 3600);
    const intl3 = intl11.intl;
    const obj5 = { count: rounded3 };
    return intl3.formatToPlainString(intl11.t.WJBWP1, obj5);
  } else if (diffResult > 60) {
    const _Math = Math;
    const rounded4 = Math.round(diffResult / 60);
    const intl2 = intl11.intl;
    const obj6 = { count: rounded4 };
    return intl2.formatToPlainString(intl11.t.CbRfwg, obj6);
  } else {
    const intl = intl11.intl;
    return intl.string(intl11.t["5Ldpkc"]);
  }
};
export const getIndexingErrorText = function getIndexingErrorText(searchContext) {
  const type = searchContext.type;
  if (constants.CHANNEL === type) {
    const intl3 = intl11.intl;
    return intl3.string(intl11.t.Q0JJjv);
  } else if (constants.DMS === type) {
    const intl2 = intl11.intl;
    return intl2.string(intl11.t.Br0xJA);
  } else {
    const intl = intl11.intl;
    return intl.string(intl11.t.AXPbZr);
  }
};
export const getGuildIdFromSearchContext = function getGuildIdFromSearchContext(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD_CHANNEL !== type) {
    if (constants.GUILD !== type) {
      if (constants.THREAD !== type) {
        if (constants.CHANNEL === type) {
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
export const getChannelIdFromSearchContext = function getChannelIdFromSearchContext(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD_CHANNEL !== type) {
    if (constants.CHANNEL !== type) {
      if (constants.THREAD !== type) {
        return null;
      }
    }
  }
  return searchContext.channelId;
};
export const getTabTitle = function getTabTitle(id) {
  if (SearchTabs.RECENT === id) {
    const intl10 = intl11.intl;
    return intl10.string(intl11.t.tWnHcL);
  } else if (SearchTabs.MESSAGES === id) {
    const intl9 = intl11.intl;
    return intl9.string(intl11.t.dvZAkp);
  } else if (SearchTabs.PEOPLE === id) {
    const intl8 = intl11.intl;
    return intl8.string(intl11.t["GFd/I5"]);
  } else if (SearchTabs.MEDIA === id) {
    const intl7 = intl11.intl;
    return intl7.string(intl11.t["Aw9+/M"]);
  } else if (SearchTabs.PINS === id) {
    const intl6 = intl11.intl;
    return intl6.string(intl11.t["/MoGoB"]);
  } else if (SearchTabs.LINKS === id) {
    const intl5 = intl11.intl;
    return intl5.string(intl11.t.DFSvTt);
  } else if (SearchTabs.FILES === id) {
    const intl4 = intl11.intl;
    return intl4.string(intl11.t["WgVYR/"]);
  } else if (SearchTabs.GUILD_CHANNELS === id) {
    const intl3 = intl11.intl;
    return intl3.string(intl11.t.OGiMXJ);
  } else if (SearchTabs.MEMBERS === id) {
    const intl2 = intl11.intl;
    return intl2.string(intl11.t["9Oq93m"]);
  } else if (SearchTabs.THREADS === id) {
    const intl = intl11.intl;
    return intl.string(intl11.t.B2panI);
  }
};
export const searchModeToSearchQueryParams = function searchModeToSearchQueryParams(searchMode) {
  if (constants3.MOST_RELEVANT === searchMode) {
    return { sort_by: "relevance", sort_order: "desc" };
  } else if (constants3.OLDEST === searchMode) {
    return { sort_by: "timestamp", sort_order: "asc" };
  } else {
    const NEWEST = constants3.NEWEST;
    return { sort_by: "timestamp", sort_order: "desc" };
  }
};
export const searchQueryParamsToSearchMode = function searchQueryParamsToSearchMode(sort_by) {
  if (null != sort_by.sort_by) {
    let NEWEST;
    if (null != sort_by.sort_order) {
      if ("relevance" === sort_by.sort_by) {
        NEWEST = constants3.MOST_RELEVANT;
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
    const intl10 = intl11.intl;
    return intl10.string(intl11.t.E466pL);
  } else if (SearchTokenTypes.FILTER_MENTIONS === arg0) {
    const intl9 = intl11.intl;
    return intl9.string(intl11.t.BYvFWl);
  } else if (SearchTokenTypes.FILTER_HAS === arg0) {
    const intl8 = intl11.intl;
    return intl8.string(intl11.t.bhSYbc);
  } else {
    if (SearchTokenTypes.FILTER_BEFORE !== arg0) {
      if (SearchTokenTypes.FILTER_ON !== arg0) {
        if (SearchTokenTypes.FILTER_AFTER !== arg0) {
          if (SearchTokenTypes.FILTER_IN === arg0) {
            const intl6 = intl11.intl;
            return intl6.string(intl11.t["GpM+/7"]);
          } else if (SearchTokenTypes.FILTER_LINK_FROM === arg0) {
            const intl5 = intl11.intl;
            return intl5.string(intl11.t.FdDTni);
          } else if (SearchTokenTypes.FILTER_FILE_TYPE === arg0) {
            const intl4 = intl11.intl;
            return intl4.string(intl11.t.FXcAFe);
          } else if (SearchTokenTypes.FILTER_FILE_NAME === arg0) {
            const intl3 = intl11.intl;
            return intl3.string(intl11.t.uAbFDM);
          } else if (SearchTokenTypes.FILTER_PINNED === arg0) {
            const intl2 = intl11.intl;
            return intl2.string(intl11.t.UJxL3V);
          } else if (SearchTokenTypes.FILTER_AUTHOR_TYPE === arg0) {
            const intl = intl11.intl;
            return intl.string(intl11.t.qCQzBl);
          }
        }
      }
    }
    const intl7 = intl11.intl;
    return intl7.string(intl11.t.Zbbc1E);
  }
};
export { ShowDatePicker };
export const setIncludeNSFW = function setIncludeNSFW(arg0, guildIdFromSearchContext) {
  if (GuildNSFWAgreeStore.didAgree(guildIdFromSearchContext)) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const tmp4 = null == currentUser.nsfwAllowed || currentUser.nsfwAllowed;
      arg0.include_nsfw = tmp4;
    }
  }
};
export const getSearchQueryFromTokens = function getSearchQueryFromTokens(tokenizeQueryResult) {
  let tmp7;
  let tmp8;
  const obj = {};
  const item = tokenizeQueryResult.forEach(function (type) {
    function getQueryKey(type) {
      const tmp = closure_1_1(closure_1_2[13])[type];
      let str = null;
      if (null != tmp) {
        str = tmp.queryKey;
      }
      if (null == str) {
        str = "content";
      }
      return str;
    }
    type = type.type;
    if (!regex.test(type)) {
      if (SearchTokenTypes.ANSWER_BEFORE !== type) {
        if (SearchTokenTypes.ANSWER_ON !== type) {
          if (SearchTokenTypes.ANSWER_AFTER !== type) {
            const tmp25 = getQueryKey(type);
            if (null == obj[tmp25]) {
              const _Set = Set;
              const self = this;
              const self2 = this;
              obj[tmp25] = new Set();
              set = new Set();
            }
            if (SearchTokenTypes.ANSWER_USERNAME_FROM !== type) {
              if (SearchTokenTypes.ANSWER_USERNAME_MENTIONS !== type) {
                if (SearchTokenTypes.ANSWER_LINK_FROM !== type) {
                  if (SearchTokenTypes.ANSWER_FILE_TYPE !== type) {
                    if (SearchTokenTypes.ANSWER_FILE_NAME !== type) {
                      if (SearchTokenTypes.ANSWER_IN === type) {
                        let data = type.getData("channelIds");
                        if (data == null) {
                          data = [];
                        }
                        for (const item10045 of data) {
                          let addResult = obj.add(item10045);
                          continue;
                        }
                      } else if (SearchTokenTypes.ANSWER_HAS === type) {
                        obj[tmp25].add(type.getData("has"));
                      } else if (SearchTokenTypes.ANSWER_PINNED === type) {
                        obj[tmp25].add(type.getData("pinned"));
                      } else if (SearchTokenTypes.ANSWER_AUTHOR_TYPE === type) {
                        obj[tmp25].add(type.getData("author_type"));
                      } else {
                        const add = obj.add;
                        let str = type.getFullMatch();
                        add(str.trim());
                      }
                    }
                  }
                }
                obj[tmp25].add(type.getMatch(1));
              }
            }
            obj[tmp25].add(type.getData("userId"));
          }
        }
      }
      const data1 = type.getData("start");
      const data2 = type.getData("end");
      if (data1) {
        const obj2 = SnowflakeUtilsDefault;
        obj.min_id = obj2.fromTimestamp(data1);
      }
      const tmp19 = data2;
      if (tmp19) {
        const obj3 = SnowflakeUtilsDefault;
        obj.max_id = obj3.fromTimestamp(data2);
        const fromTimestampResult = obj3.fromTimestamp(data2);
      }
    }
  });
  const entries = Object.entries(obj);
  const tmp3 = entries[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    let _Set = Set;
    if (tmp8 instanceof Set) {
      let _Array = Array;
      obj[tmp7] = Array.from(tmp9);
    }
    continue;
  }
  if (obj.content) {
    delete obj["contents"];
    const content = obj.content;
    let str = " ";
    const str2 = content.join(" ");
    obj.content = str2.trim();
    if (!obj.content) {
      delete obj["content"];
    }
  }
  return obj;
};
export const getQueryContentString = function getQueryContentString(searchQueryFromTokens) {
  let content;
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
      content = joined;
    }
    return content;
  }
  if (searchQueryFromTokens != null) {
    content = searchQueryFromTokens.content;
  }
};
export const getNonTokenQuery = function getNonTokenQuery(tokenizeQueryResult) {
  const mapped = tokenizeQueryResult.map((type) => {
    let str = "";
    if (type.type === QueryTokenizerDefault.NON_TOKEN_TYPE) {
      str = type.getFullMatch();
    }
    return str;
  });
  let str = mapped.join(" ");
  return str.trim();
};
export const getSelectionScope = function getSelectionScope(tokenizeQueryResult, focusOffset, anchorOffset) {
  let closure_1 = focusOffset;
  let closure_2 = anchorOffset;
  const found = tokenizeQueryResult.find((start, index) => {
    if (focusOffset >= start.start) {
      if (tmp <= start.end) {
        if (anchorOffset >= start.start) {
          let flag;
          if (tmp2 <= start.end) {
            flag = true;
            if (null != tokenizeQueryResult[index + 1]) {
              closure_4 = tmp4[index + 1];
              flag = true;
            }
          }
          return flag;
        }
      }
    }
    let closure_1_3 = start;
    flag = false;
  });
  let tmp2 = null;
  if (null != found) {
    tmp2 = { previousToken: _slicedToArray, currentToken: found, nextToken, focusOffset, anchorOffset };
    const obj = { previousToken: _slicedToArray, currentToken: found, nextToken, focusOffset, anchorOffset };
  }
  return tmp2;
};
export const getAutocompleteMode = function getAutocompleteMode(cursorScope, tokens) {
  let currentToken;
  let previousToken;
  let obj = cursorScope;
  if (cursorScope == null) {
    obj = {};
  }
  ({ currentToken, nextToken, previousToken } = obj);
  if (0 === tokens.length) {
    return { type: constants2.EMPTY, filter: null, token: null };
  } else if (null == currentToken) {
    return { type: constants2.FILTER_ALL, filter: null, token: null };
  } else {
    const obj9 = SearchTokens;
    if (obj9.isSearchFilterTokenType(currentToken.type)) {
      if (null != nextToken) {
        if (nextToken.type !== QueryTokenizerDefault.NON_TOKEN_TYPE) {
          if (null != nextToken) {
            if (!regex.test(nextToken.type)) {
              return { type: constants2.FILTER, filter: currentToken.type, token: null };
            }
          }
        }
      }
      return { type: constants2.FILTER, filter: currentToken.type, token: nextToken };
    }
    if (currentToken.type === QueryTokenizerDefault.NON_TOKEN_TYPE) {
      if (null != previousToken) {
        let obj7;
        const tmp10Result = SearchTokens;
        if (tmp10Result.isSearchFilterTokenType(previousToken.type)) {
          obj7 = { type: constants2.FILTER, filter: previousToken.type, token: currentToken };
          const obj6 = { type: constants2.FILTER, filter: previousToken.type, token: currentToken };
        }
        return obj7;
      }
    }
    let tmp4;
    if (currentToken.type === QueryTokenizerDefault.NON_TOKEN_TYPE) {
      tmp4 = currentToken;
    }
    obj7 = { type: constants2.FILTER_ALL, filter: null, token: tmp4 };
  }
};
export const quoteChannelName = function quoteChannelName(channelName) {
  let combined = channelName;
  if (null != channelName.match(/([\\" ])/g)) {
    const _HermesInternal = HermesInternal;
    combined = '"' + channelName.replaceAll(/([\\"])/g, f110069) + '"';
  }
  return combined;
};
export const getFlattenedAutocompleteResults = function getFlattenedAutocompleteResults(arg0, arg1) {
  let closure_1;
  let closure_0 = arg1;
  importDefault = [];
  const arr = _modDef12(arg0);
  const item = arr.forEach((results) => {
    if (null != results) {
      if (0 !== results.results.length) {
        let group = results.group;
        let tmp = group;
        results = results.results;
        group = group.concat(
          results.map((text) => {
            let tmp = str;
            if (null != text.channel) {
              let combined = str;
              if (null != text.text.match(/([\\" ])/g)) {
                const _HermesInternal = HermesInternal;
                combined = '"' + str.replaceAll(/([\\"])/g, f110069) + '"';
              }
              tmp = combined;
            }
            let combined1 = tmp;
            if (results.type === constants.FILTER_ALL) {
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
            return { result: text, group: results.group, resultText: combined1 };
          }),
        );
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
  let closure_0 = arg1;
  const tokenizeResult = navigation.tokenize(errorcode);
  return tokenizeResult.some((type) => type.type === closure_0);
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
    tmp2 = null != type2 && isMatch && !regex.test(type2.type);
    const tmp3 = null != type2 && isMatch && !regex.test(type2.type);
  }
  return !tmp2;
};
export const refreshSearchTokens = function refreshSearchTokens() {
  let addRule2;
  let obj = SearchTokens;
  const result = obj.rebuildSearchTokenConfigs();
  navigation.reset();
  const tmp3 = _modDef12;
  const tmp3Result = tmp3(SearchTokensDefault);
  tmp3Result.forOwn((arg0, type) => {
    addRule = addRule.addRule;
    const obj = { type };
    const merged = Object.assign(arg0);
    return addRule(obj);
  });
  navigation2.reset();
  const obj3 = SearchTokens;
  const crossDMSearchTokensConfig = obj3.buildCrossDMSearchTokensConfig();
  const obj4 = _modDef12(crossDMSearchTokensConfig);
  obj4.forOwn((arg0, type) => {
    addRule = addRule2.addRule;
    const obj = { type };
    const merged = Object.assign(arg0);
    return addRule(obj);
  });
  const obj5 = DispatcherDefault;
  obj5.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
};
export const getChannelDisplayName = function getChannelDisplayName(isDM) {
  let flag;
  let str;
  const obj = useChannelName;
  const channelName = obj.computeChannelName(isDM, UserStore, RelationshipStore);
  if (isDM.isDM()) {
    const user = UserStore.getUser(isDM.getRecipientId());
    const obj3 = UserUtilsDefault;
    const userTag = obj3.getUserTag(user);
    flag = false;
    str = userTag;
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
    combined = '"' + str.replaceAll(/([\\"])/g, f110069) + '"';
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
    const obj3 = useChannelName;
    return obj3.computeChannelName(isGroupDM, UserStore, RelationshipStore);
  } else if (isGroupDM.isDM()) {
    const user = UserStore.getUser(isGroupDM.getRecipientId());
    const obj2 = UserUtilsDefault;
    return obj2.getUserTag(user);
  } else {
    const tmp2 = GuildChannelStore.getTextChannelNameDisambiguations(isGroupDM.getGuildId())[isGroupDM.id];
    let name;
    if (tmp2 != null) {
      name = tmp2.name;
    }
    if (name == null) {
      const obj = useChannelName;
      name = obj.computeChannelName(isGroupDM, UserStore, RelationshipStore);
    }
    return name;
  }
};
export const removeInvalidPrivateChannelSearchTokens = function removeInvalidPrivateChannelSearchTokens(errorcode) {
  const items = [];
  const tokenizeResult = navigation2.tokenize(errorcode);
  const item = tokenizeResult.forEach((type) => {
    const tmp2 = type.type === SearchTokenTypes.FILTER_IN || type.type === tmp.ANSWER_IN;
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
export const getSearchAnalyticsIds = function getSearchAnalyticsIds(guildId, getSessionId) {
  const obj = isGuildLikeSearchContext;
  if (obj.isGuildLikeSearchContext(guildId)) {
    if (ConsentStore.hasConsented(constants4.USAGE_STATISTICS)) {
      const guild = GuildStore.getGuild(guildId.guildId);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(constants5.DISCOVERABLE);
      }
      if (hasItem) {
        const sessionId = getSessionId.getSessionId(guildId);
        const queryId = getSessionId.getQueryId(guildId);
        let tmp11 = null;
        if (null != sessionId) {
          tmp11 = null;
          if (null != queryId) {
            tmp11 = { search_session_id: sessionId, search_query_id: queryId };
            const obj2 = { search_session_id: sessionId, search_query_id: queryId };
          }
        }
        return tmp11;
      }
    }
  }
  return null;
};
