// discord_app/modules/search/SearchUtils.tsx
import _slicedToArray from "_slicedToArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import initialize from "initialize";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import { SearchTabs } from "MessageEmbedTypes";
import ME from "ME";
import { apply } from "../../../_runtime/00012_apply.js";
import { t } from "../../../_runtime/03943_t.js";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { getMatch } from "../../lib/QueryTokenizer.tsx";
import { nameFromUser } from "../../utils/UserUtils.tsx";
import { computeChannelName } from "../channel/useChannelName.tsx";
import { SearchActionCreators } from "SearchActionCreators.tsx";
import { getShortcuts } from "tokens/SearchTokens.tsx";

let ME;
let SearchTokenTypes;
let c10;
let closure_12;
let closure_14;
let closure_15;
let map1;
const require = arg1;
({ SearchTypes: c10, SearchTokenTypes } = ME);
({ SearchPopoutModes: closure_12, IS_SEARCH_ANSWER_TOKEN: map1, IS_SEARCH_FILTER_TOKEN: closure_14, SearchModes: closure_15, ME } = ME);
let c16 = 2592000;
let c17 = 31536000;
let obj = { [SearchTokenTypes.FILTER_BEFORE]: true, [SearchTokenTypes.FILTER_AFTER]: true, [SearchTokenTypes.FILTER_ON]: true };
let closure_19 = new require("getMatch")();
let tmp4 = new require("getMatch")();
let closure_20 = new require("getMatch")();
let tmp5 = new require("getMatch")();
let result = require("comparator").fileFinishedImporting("modules/search/SearchUtils.tsx");

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
export const getSearchTabFetchId = function getSearchTabFetchId(closure_0, closure_1, searchResultsQuery) {
  const type = closure_0.type;
  if (constants.GUILD === type) {
    let channelId = closure_0.guildId;
  } else {
    if (tmp.GUILD_CHANNEL !== type) {
      if (tmp.CHANNEL !== type) {
        if (tmp.THREAD !== type) {
          if (tmp.DMS === type) {
            channelId = closure_0.type;
          }
        }
      }
    }
    channelId = closure_0.channelId;
  }
  return "" + channelId + "-" + closure_1 + "-" + searchResultsQuery;
};
export const getChannelActiveAgoTimestamp = function getChannelActiveAgoTimestamp(arg0) {
  let obj = t();
  const diffResult = obj.diff(t(arg0), "s");
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
    const obj1 = { count: null };
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
  } else if (tmp.DMS === type) {
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
    if (tmp.GUILD !== type) {
      if (tmp.THREAD !== type) {
        if (tmp.CHANNEL === type) {
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
    if (tmp.CHANNEL !== type) {
      if (tmp.THREAD !== type) {
        return null;
      }
    }
  }
  return searchContext.channelId;
};
export const getTabTitle = function getTabTitle(tab) {
  if (SearchTabs.RECENT === tab) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.tWnHcL);
  } else if (tmp.MESSAGES === tab) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.dvZAkp);
  } else if (tmp.PEOPLE === tab) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t["GFd/I5"]);
  } else if (tmp.MEDIA === tab) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t["Aw9+/M"]);
  } else if (tmp.PINS === tab) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t["/MoGoB"]);
  } else if (tmp.LINKS === tab) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.DFSvTt);
  } else if (tmp.FILES === tab) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t["WgVYR/"]);
  } else if (tmp.GUILD_CHANNELS === tab) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.OGiMXJ);
  } else if (tmp.MEMBERS === tab) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["9Oq93m"]);
  } else if (tmp.THREADS === tab) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.B2panI);
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
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.E466pL);
  } else if (tmp.FILTER_MENTIONS === arg0) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.BYvFWl);
  } else if (tmp.FILTER_HAS === arg0) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.bhSYbc);
  } else {
    if (tmp.FILTER_BEFORE !== arg0) {
      if (tmp.FILTER_ON !== arg0) {
        if (tmp.FILTER_AFTER !== arg0) {
          if (tmp.FILTER_IN === arg0) {
            const intl6 = getSystemLocale.intl;
            return intl6.string(getSystemLocale.t["GpM+/7"]);
          } else if (tmp.FILTER_LINK_FROM === arg0) {
            const intl5 = getSystemLocale.intl;
            return intl5.string(getSystemLocale.t.FdDTni);
          } else if (tmp.FILTER_FILE_TYPE === arg0) {
            const intl4 = getSystemLocale.intl;
            return intl4.string(getSystemLocale.t.FXcAFe);
          } else if (tmp.FILTER_FILE_NAME === arg0) {
            const intl3 = getSystemLocale.intl;
            return intl3.string(getSystemLocale.t.uAbFDM);
          } else if (tmp.FILTER_PINNED === arg0) {
            const intl2 = getSystemLocale.intl;
            return intl2.string(getSystemLocale.t.UJxL3V);
          } else if (tmp.FILTER_AUTHOR_TYPE === arg0) {
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
  if (initialize.didAgree(guildIdFromSearchContext)) {
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      arg0.include_nsfw = null == currentUser.nsfwAllowed || currentUser.nsfwAllowed;
      const tmp4 = null == currentUser.nsfwAllowed || currentUser.nsfwAllowed;
    }
  }
};
export const getSearchQueryFromTokens = function getSearchQueryFromTokens(tokenizeQueryResult) {
  let tmp10;
  let tmp9;
  const obj = {};
  const item = tokenizeQueryResult.forEach((type) => {
    type = type.type;
    if (!outer1_14.test(type)) {
      if (outer1_11.ANSWER_BEFORE !== type) {
        if (tmp.ANSWER_ON !== type) {
          if (tmp.ANSWER_AFTER !== type) {
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
        obj.min_id = outer1_1(outer1_2[12]).fromTimestamp(data1);
        const obj2 = outer1_1(outer1_2[12]);
      }
      if (data2) {
        const fromTimestampResult = outer1_1(outer1_2[12]).fromTimestamp(data2);
        obj.max_id = fromTimestampResult;
        const obj3 = outer1_1(outer1_2[12]);
      }
    }
  });
  const entries = Object.entries(obj);
  while (tmp5 !== undefined) {
    let tmp7 = callback;
    let tmp8 = callback(tmp6, 2);
    [tmp9, tmp10] = tmp8;
    let _Set = Set;
    if (tmp10 instanceof Set) {
      let tmp12 = tmp9;
      let _Array = Array;
      let tmp13 = tmp10;
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
          const mapped = contents1.map((str) => {
            const parts = str.split("|");
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
    if (type.type === callback(table[13]).NON_TOKEN_TYPE) {
      str = type.getFullMatch();
    }
    return str;
  });
  return mapped.join(" ").trim();
};
export const getSelectionScope = function getSelectionScope(tokenizeQueryResult, arg1, arg2) {
  let closure_0 = tokenizeQueryResult;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const found = tokenizeQueryResult.find((start) => {
    if (closure_1 >= start.start) {
      if (tmp <= start.end) {
        if (closure_2 >= start.start) {
          if (tmp2 <= start.end) {
            let flag = true;
            if (null != tokenizeQueryResult[arg1 + 1]) {
              let ensureGuildLoaded = tmp4[arg1 + 1];
              flag = true;
            }
          }
          return flag;
        }
      }
    }
    let _slicedToArray = start;
    flag = false;
  });
  let tmp2 = null;
  if (null != found) {
    const obj = { previousToken: null, currentToken: null, nextToken: null, focusOffset: null, anchorOffset: null };
    obj[0] = _slicedToArray;
    obj[1] = found;
    obj[2] = ensureGuildLoaded;
    obj[3] = arg1;
    obj[4] = arg2;
    tmp2 = obj;
  }
  return tmp2;
};
export const getAutocompleteMode = function getAutocompleteMode(cursorScope, tokens) {
  let currentToken;
  let nextToken;
  let previousToken;
  let obj = cursorScope;
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
        if (nextToken.type !== getMatch.NON_TOKEN_TYPE) {
          if (null != nextToken) {
            if (!regex.test(nextToken.type)) {
              const obj1 = { type: null, filter: null, token: null };
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
    if (currentToken.type === getMatch.NON_TOKEN_TYPE) {
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
    if (currentToken.type === tmp3(11778).NON_TOKEN_TYPE) {
      tmp4 = currentToken;
    }
    obj4 = { type: null, filter: null, token: null };
    obj4[0] = constants2.FILTER_ALL;
    obj4[2] = tmp4;
    obj9 = getShortcuts;
    const tmp10 = require;
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
  let closure_0 = arg1;
  const importDefault = [];
  const item = apply(arg0).forEach((results) => {
    let closure_0 = results;
    if (null != results) {
      if (0 !== results.results.length) {
        let group = results.group;
        results = results.results;
        group = group.concat(results.map((result) => {
          let tmp = str;
          if (null != result.channel) {
            let combined = str;
            if (null != str.match(/([\\" ])/g)) {
              const _HermesInternal = HermesInternal;
              combined = "\"" + str.replaceAll(/([\\"])/g, (arg0, arg1) => "\\" + arg1) + "\"";
            }
            tmp = combined;
          }
          let combined1 = tmp;
          if (closure_0.type === outer2_12.FILTER_ALL) {
            const group = result.group;
            const tmp8 = callback(outer2_2[11])[group];
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
          return { result, group: closure_0.group, resultText: combined1 };
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
export const queryHasFilter = function queryHasFilter(errorcode) {
  let closure_0 = arg1;
  return tmp4.tokenize(errorcode).some((type) => type.type === closure_0);
};
export const tokenizeQuery = function tokenizeQuery(searchQueryString) {
  return tmp4.tokenize(searchQueryString);
};
export const clearTokenCache = function clearTokenCache() {
  tmp4.clearCache();
  tmp5.clearCache();
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
  tmp4.reset();
  const obj = getShortcuts;
  const tmp3 = apply;
  apply(getShortcuts).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return closure_19.addRule({ type });
  });
  tmp5.reset();
  const tmp3Result = apply(getShortcuts);
  const crossDMSearchTokensConfig = getShortcuts.buildCrossDMSearchTokensConfig();
  const obj3 = getShortcuts;
  apply(crossDMSearchTokensConfig).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return closure_20.addRule({ type });
  });
  const obj4 = apply(crossDMSearchTokensConfig);
  const result1 = SearchActionCreators.markSearchTokensRefreshed();
};
export const getChannelDisplayName = function getChannelDisplayName(isDM) {
  const channelName = computeChannelName.computeChannelName(isDM, mergeGuildAvatar, markAllUserIdListsStale);
  if (isDM.isDM()) {
    const user = mergeGuildAvatar.getUser(isDM.getRecipientId());
    const userTag = nameFromUser.getUserTag(user);
    let flag = false;
    let str = userTag;
    if (null == userTag) {
      return null;
    }
    const obj3 = nameFromUser;
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
    return computeChannelName.computeChannelName(isGroupDM, authStore, markAllUserIdListsStale);
  } else if (isGroupDM.isDM()) {
    const user = authStore.getUser(isGroupDM.getRecipientId());
    return nameFromUser.getUserTag(user);
  } else {
    const tmp2 = store.getTextChannelNameDisambiguations(isGroupDM.getGuildId())[isGroupDM.id];
    let name;
    if (tmp2 != null) {
      name = tmp2.name;
    }
    if (name == null) {
      name = computeChannelName.computeChannelName(isGroupDM, authStore, markAllUserIdListsStale);
      const obj = computeChannelName;
    }
    return name;
  }
};
export const removeInvalidPrivateChannelSearchTokens = function removeInvalidPrivateChannelSearchTokens(errorcode) {
  const items = [];
  const item = tmp5.tokenize(errorcode).forEach((type) => {
    if (!tmp2) {
      items.push(type);
    }
  });
  const importDefault = "";
  const item1 = items.forEach((getFullMatch) => {
    closure_1 = closure_1 + getFullMatch.getFullMatch();
  });
  return importDefault.trim();
};