// discord_app/modules/search/SearchUtils.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import applyDefault from "../../../_runtime/00012_apply.js";
import getSystemLocale from "../../intl/index.native.tsx";
import handleConnectionOpenDefault from "../../stores/SelectedChannelStore.tsx";
import tDefault from "../../../_runtime/03975_t.js";
import nameFromUserDefault from "../../utils/UserUtils.tsx";
import computeChannelName from "../channel/useChannelName.tsx";
import getShortcuts from "tokens/SearchTokens.tsx";
import getShortcutsDefault from "tokens/SearchTokens.tsx";
import getMatchDefault from "../../lib/QueryTokenizer.tsx";
import _modDef11518 from "SearchActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";
import initialize from "../../stores/GuildNSFWAgreeStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { SearchTabs } from "SearchConstants.tsx";
import ME from "../../Constants.tsx";

require = fn;
handleConnectionOpenDefault;
({ SearchTypes: c10, SearchTokenTypes } = ME);
({ SearchPopoutModes: closure_12, IS_SEARCH_ANSWER_TOKEN: map1, IS_SEARCH_FILTER_TOKEN: closure_14, SearchModes: closure_15, ME } = ME);
let c16 = 2592000;
let c17 = 31536000;
let obj = { [SearchTokenTypes.FILTER_BEFORE]: true, [SearchTokenTypes.FILTER_AFTER]: true, [SearchTokenTypes.FILTER_ON]: true };
let closure_19 = new getMatchDefault();
let tmp4 = new getMatchDefault();
let closure_20 = new getMatchDefault();
let tmp5 = new getMatchDefault();
let result = require("obj132").fileFinishedImporting("modules/search/SearchUtils.tsx");

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
  type = type.type;
  if (constants.GUILD === type) {
    let channelId = type.guildId;
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
export const getSearchTabFetchId = function getSearchTabFetchId(closure_0, closure_1, searchResultsQuery) {
  const type = _require.type;
  if (constants.GUILD === type) {
    let channelId = _require.guildId;
  } else {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.CHANNEL !== type) {
        if (constants.THREAD !== type) {
          if (constants.DMS === type) {
            channelId = _require.type;
          }
        }
      }
    }
    channelId = _require.channelId;
  }
  return "" + channelId + "-" + closure_1 + "-" + searchResultsQuery;
};
export const getChannelActiveAgoTimestamp = function getChannelActiveAgoTimestamp(arg0) {
  obj = tDefault();
  const diffResult = obj.diff(tDefault(arg0), "s");
  if (diffResult > c17) {
    const _Math5 = Math;
    const rounded = Math.round(diffResult / tmp3);
    const intl7 = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = rounded;
    return intl7.formatToPlainString(getSystemLocale.t["7th+Mf"], obj);
  } else if (diffResult > c16) {
    const _Math4 = Math;
    const rounded1 = Math.round(diffResult / tmp21);
    const intl6 = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = rounded1;
    return intl6.formatToPlainString(getSystemLocale.t.g2uHTD, obj);
  } else if (diffResult > 172800) {
    const _Math3 = Math;
    const rounded2 = Math.round(diffResult / 86400);
    const intl5 = getSystemLocale.intl;
    obj1 = { count: null };
    obj1[0] = rounded2;
    return intl5.formatToPlainString(getSystemLocale.t.HNgi95, obj1);
  } else if (diffResult > 86400) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.uNkIhT);
  } else if (diffResult > 3600) {
    const _Math2 = Math;
    const rounded3 = Math.round(diffResult / 3600);
    const intl3 = getSystemLocale.intl;
    const obj2 = { count: null };
    obj2[0] = rounded3;
    return intl3.formatToPlainString(getSystemLocale.t.WJBWP1, obj2);
  } else if (diffResult > 60) {
    const _Math = Math;
    const rounded4 = Math.round(diffResult / 60);
    const intl2 = getSystemLocale.intl;
    const obj3 = { count: null };
    obj3[0] = rounded4;
    return intl2.formatToPlainString(getSystemLocale.t.CbRfwg, obj3);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5Ldpkc"]);
  }
};
export const getIndexingErrorText = function getIndexingErrorText(searchContext) {
  const type = searchContext.type;
  if (constants.CHANNEL === type) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.Q0JJjv);
  } else if (constants.DMS === type) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.Br0xJA);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.AXPbZr);
  }
};
export const getGuildIdFromSearchContext = function getGuildIdFromSearchContext(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD_CHANNEL !== type) {
    if (constants.GUILD !== type) {
      if (constants.THREAD !== type) {
        if (constants.CHANNEL === type) {
          channel = channel.getChannel(searchContext.channelId);
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
    if (constants.CHANNEL !== type) {
      if (constants.THREAD !== type) {
        return null;
      }
    }
  }
  return searchContext.channelId;
};
export const getTabTitle = function getTabTitle(item) {
  if (SearchTabs.RECENT === item) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.tWnHcL);
  } else if (SearchTabs.MESSAGES === item) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.dvZAkp);
  } else if (SearchTabs.PEOPLE === item) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t["GFd/I5"]);
  } else if (SearchTabs.MEDIA === item) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t["Aw9+/M"]);
  } else if (SearchTabs.PINS === item) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t["/MoGoB"]);
  } else if (SearchTabs.LINKS === item) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.DFSvTt);
  } else if (SearchTabs.FILES === item) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t["WgVYR/"]);
  } else if (SearchTabs.GUILD_CHANNELS === item) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.OGiMXJ);
  } else if (SearchTabs.MEMBERS === item) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["9Oq93m"]);
  } else if (SearchTabs.THREADS === item) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.B2panI);
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
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.E466pL);
  } else if (SearchTokenTypes.FILTER_MENTIONS === arg0) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.BYvFWl);
  } else if (SearchTokenTypes.FILTER_HAS === arg0) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.bhSYbc);
  } else {
    if (SearchTokenTypes.FILTER_BEFORE !== arg0) {
      if (SearchTokenTypes.FILTER_ON !== arg0) {
        if (SearchTokenTypes.FILTER_AFTER !== arg0) {
          if (SearchTokenTypes.FILTER_IN === arg0) {
            const intl6 = getSystemLocale.intl;
            return intl6.string(getSystemLocale.t["GpM+/7"]);
          } else if (SearchTokenTypes.FILTER_LINK_FROM === arg0) {
            const intl5 = getSystemLocale.intl;
            return intl5.string(getSystemLocale.t.FdDTni);
          } else if (SearchTokenTypes.FILTER_FILE_TYPE === arg0) {
            const intl4 = getSystemLocale.intl;
            return intl4.string(getSystemLocale.t.FXcAFe);
          } else if (SearchTokenTypes.FILTER_FILE_NAME === arg0) {
            const intl3 = getSystemLocale.intl;
            return intl3.string(getSystemLocale.t.uAbFDM);
          } else if (SearchTokenTypes.FILTER_PINNED === arg0) {
            const intl2 = getSystemLocale.intl;
            return intl2.string(getSystemLocale.t.UJxL3V);
          } else if (SearchTokenTypes.FILTER_AUTHOR_TYPE === arg0) {
            const intl = getSystemLocale.intl;
            return intl.string(getSystemLocale.t.qCQzBl);
          }
        }
      }
    }
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.Zbbc1E);
  }
};
export const ShowDatePicker = obj;
export const setIncludeNSFW = function setIncludeNSFW(arg0, guildIdFromSearchContext) {
  if (closure_6.didAgree(guildIdFromSearchContext)) {
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      arg0.include_nsfw = null == currentUser.nsfwAllowed || currentUser.nsfwAllowed;
    }
  }
};
export const getSearchQueryFromTokens = function getSearchQueryFromTokens(tokenizeQueryResult) {
  obj = {};
  const item = tokenizeQueryResult.forEach((item, index) => {
    const type = item.type;
    if (!closure_1_14.test(type)) {
      if (SearchTokenTypes.ANSWER_BEFORE !== type) {
        if (SearchTokenTypes.ANSWER_ON !== type) {
          if (SearchTokenTypes.ANSWER_AFTER !== type) {
            const tmp27 = (function getQueryKey(type) {
              const tmp = callback(table[11])[type];
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
            if (SearchTokenTypes.ANSWER_USERNAME_FROM !== type) {
              if (SearchTokenTypes.ANSWER_USERNAME_MENTIONS !== type) {
                if (SearchTokenTypes.ANSWER_LINK_FROM !== type) {
                  if (SearchTokenTypes.ANSWER_FILE_TYPE !== type) {
                    if (SearchTokenTypes.ANSWER_FILE_NAME !== type) {
                      if (SearchTokenTypes.ANSWER_IN === type) {
                        let data = item.getData("channelIds");
                        if (data == null) {
                          data = [];
                        }
                        for (const item10045 of data) {
                          let addResult = obj.add(item10045);
                          continue;
                        }
                      } else if (SearchTokenTypes.ANSWER_HAS === type) {
                        obj.add(item.getData("has"));
                      } else if (SearchTokenTypes.ANSWER_PINNED === type) {
                        obj.add(item.getData("pinned"));
                      } else if (SearchTokenTypes.ANSWER_AUTHOR_TYPE === type) {
                        obj.add(item.getData("author_type"));
                      } else {
                        obj.add(item.getFullMatch().trim());
                        let str = item.getFullMatch();
                      }
                    }
                  }
                }
                obj.add(item.getMatch(1));
              }
            }
            obj[tmp27].add(item.getData("userId"));
          }
        }
      }
      const data1 = item.getData("start");
      const data2 = item.getData("end");
      if (data1) {
        obj.min_id = DISCORD_EPOCHDefault.fromTimestamp(data1);
      }
      if (data2) {
        const fromTimestampResult = DISCORD_EPOCHDefault.fromTimestamp(data2);
        obj.max_id = fromTimestampResult;
      }
    }
  });
  const entries = Object.entries(obj);
  while (tmp5 !== undefined) {
    let tmp8 = callback(tmp6, 2);
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
          const mapped = contents1.map((item, index) => {
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
  const mapped = arr.map((item, index) => {
    let str = "";
    if (item.type === callback(table[13]).NON_TOKEN_TYPE) {
      str = item.getFullMatch();
    }
    return str;
  });
  return mapped.join(" ").trim();
};
export const getSelectionScope = function getSelectionScope(tokenizeQueryResult, arg1, arg2) {
  closure_0 = tokenizeQueryResult;
  closure_1 = arg1;
  closure_2 = arg2;
  const found = tokenizeQueryResult.find((item, index) => {
    if (closure_1 >= item.start) {
      if (tmp <= item.end) {
        if (closure_2 >= item.start) {
          if (tmp2 <= item.end) {
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
    closure_3 = item;
    flag = false;
  });
  let tmp2 = null;
  if (null != found) {
    obj = { previousToken: null, currentToken: null, nextToken: null, focusOffset: null, anchorOffset: null };
    obj[0] = closure_3;
    obj[1] = found;
    obj[2] = closure_4;
    obj[3] = arg1;
    obj[4] = arg2;
    tmp2 = obj;
  }
  return tmp2;
};
export const getAutocompleteMode = function getAutocompleteMode(cursorScope, tokens) {
  obj = cursorScope;
  if (cursorScope == null) {
    obj = {};
  }
  ({ currentToken, nextToken, previousToken } = obj);
  if (0 === tokens.length) {
    obj = { type: null, filter: null, token: null };
    obj[0] = constants2.EMPTY;
    return obj;
  } else if (null == currentToken) {
    obj = { type: null, filter: null, token: null };
    obj[0] = constants2.FILTER_ALL;
    return obj;
  } else {
    if (obj9.isSearchFilterTokenType(currentToken.type)) {
      if (null != nextToken) {
        if (nextToken.type !== getMatchDefault.NON_TOKEN_TYPE) {
          if (null != nextToken) {
            if (!regex.test(nextToken.type)) {
              obj1 = { type: null, filter: null, token: null };
              obj1[0] = constants2.FILTER;
              obj1[1] = currentToken.type;
              return obj1;
            }
          }
        }
      }
      const obj2 = { type: null, filter: null, token: null };
      obj2[0] = constants2.FILTER;
      obj2[1] = currentToken.type;
      obj2[2] = nextToken;
      return obj2;
    }
    if (currentToken.type === getMatchDefault.NON_TOKEN_TYPE) {
      if (null != previousToken) {
        if (tmp10Result.isSearchFilterTokenType(previousToken.type)) {
          const obj3 = { type: null, filter: null, token: null };
          obj3[0] = constants2.FILTER;
          obj3[1] = previousToken.type;
          obj3[2] = currentToken;
          let obj4 = obj3;
        }
        return obj4;
      }
    }
    let tmp4;
    if (currentToken.type === getMatchDefault.NON_TOKEN_TYPE) {
      tmp4 = currentToken;
    }
    obj4 = { type: null, filter: null, token: null };
    obj4[0] = constants2.FILTER_ALL;
    obj4[2] = tmp4;
    obj9 = getShortcuts;
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
  const item = applyDefault(arg0).forEach((item, index) => {
    closure_0 = item;
    if (null != item) {
      if (0 !== item.results.length) {
        let group = item.group;
        const results = item.results;
        group = group.concat(results.map((item, index) => {
          let tmp = str;
          if (null != item.channel) {
            let combined = str;
            if (null != str.match(/([\\" ])/g)) {
              const _HermesInternal = HermesInternal;
              combined = "\"" + str.replaceAll(/([\\"])/g, (arg0, arg1) => "\\" + arg1) + "\"";
            }
            tmp = combined;
          }
          let combined1 = tmp;
          if (item.type === closure_2_12.FILTER_ALL) {
            const group = item.group;
            const tmp8 = callback(dependencyMap[11])[group];
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
          return { result: item, group: item.group, resultText: combined1 };
        }));
      }
    }
  });
  return importDefault.filter((item, index) => "" !== item.resultText);
};
export const getQueryFromTokens = function getQueryFromTokens(tokens) {
  let str = "";
  if (null != tokens) {
    const mapped = tokens.map((item, index) => item.getFullMatch());
    str = mapped.join("");
  }
  return str;
};
export const queryHasFilter = function queryHasFilter(errorcode) {
  closure_0 = arg1;
  return navigation.tokenize(errorcode).some((item, index) => item.type === closure_0);
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
  const result = getShortcuts.rebuildSearchTokenConfigs();
  navigation.reset();
  applyDefault(getShortcutsDefault).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return closure_19.addRule({ type });
  });
  navigation2.reset();
  const tmp3Result = applyDefault(getShortcutsDefault);
  const crossDMSearchTokensConfig = getShortcuts.buildCrossDMSearchTokensConfig();
  applyDefault(crossDMSearchTokensConfig).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return closure_20.addRule({ type });
  });
  const obj4 = applyDefault(crossDMSearchTokensConfig);
  const result1 = _modDef11518.markSearchTokensRefreshed();
};
export const getChannelDisplayName = function getChannelDisplayName(isDM) {
  const channelName = computeChannelName.computeChannelName(isDM, user, closure_7);
  if (isDM.isDM()) {
    user = user.getUser(isDM.getRecipientId());
    const userTag = nameFromUserDefault.getUserTag(user);
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
      const tmp5 = store.getTextChannelNameDisambiguations(isDM.getGuildId())[isDM.id];
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
    return computeChannelName.computeChannelName(isGroupDM, authStore, closure_7);
  } else if (isGroupDM.isDM()) {
    const user = authStore.getUser(isGroupDM.getRecipientId());
    return nameFromUserDefault.getUserTag(user);
  } else {
    const tmp2 = store.getTextChannelNameDisambiguations(isGroupDM.getGuildId())[isGroupDM.id];
    let name;
    if (tmp2 != null) {
      name = tmp2.name;
    }
    if (name == null) {
      name = computeChannelName.computeChannelName(isGroupDM, authStore, closure_7);
    }
    return name;
  }
};
export const removeInvalidPrivateChannelSearchTokens = function removeInvalidPrivateChannelSearchTokens(errorcode) {
  const items = [];
  const item = navigation2.tokenize(errorcode).forEach((item, index) => {
    if (!tmp2) {
      items.push(item);
    }
    tmp2 = item.type === SearchTokenTypes.FILTER_IN || item.type === tmp.ANSWER_IN;
  });
  importDefault = "";
  const item1 = items.forEach((item, index) => {
    closure_1 = closure_1 + item.getFullMatch();
  });
  return importDefault.trim();
};