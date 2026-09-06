// === Module 9834: QuickSwitcherStore ===

// Module 9834 (QuickSwitcherStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import sortByMatchScore from "sortByMatchScore" /* 9835 */;
import createAutocompleterResultForChannelIdDefault from "createAutocompleterResultForChannelId" /* 9844 */;
import ReadStateUtils from "ReadStateUtils" /* 9845 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5108 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5506 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import DraftStore from "DraftStore" /* 4901 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

const sortByMatchScoreDefault = sortByMatchScore;

require = fn;
function handleConnectionOpen() {
  let tmp = GuildStore.getGuildCount() >= 3;
  if (!tmp) {
    tmp = _modDef12.size(ChannelStore.getMutablePrivateChannels()) >= 20;
  }
  closure_25 = tmp;
  closure_30 = [];
}
function generateResultFromId(found) {
  const tmp2 = createAutocompleterResultForChannelIdDefault(found);
  if (null == tmp2) {
    return null;
  } else {
    if (tmp3) {
      if (tmp2.type !== tmp7(9835).AutocompleterResultTypes.USER) {
        return null;
      }
    } else if (null != queryMode) {
      if (queryMode !== tmp2.type) {
        return null;
      }
    }
    return tmp2;
  }
}
function generateInitialResults() {
  let obj = SelectedGuildStore;
  const guildId = SelectedGuildStore.getGuildId();
  channelId = SelectedChannelStore.getChannelId();
  if (channelId(set[15]).AutocompleterResultTypes.USER_GLOBAL !== queryMode) {
    if (tmp4(tmp5[15]).AutocompleterResultTypes.USER !== tmp3) {
      if (tmp4(tmp5[15]).AutocompleterResultTypes.APPLICATION === tmp3) {
        return require("AutocompleteUtils").queryApplications({ query: "", limit: 100, fuzzy: true });
      } else if (tmp4(tmp5[15]).AutocompleterResultTypes.GAME_PROFILE === tmp3) {
        return [];
      } else if (tmp4(tmp5[15]).AutocompleterResultTypes.GUILD === tmp3) {
        return require("AutocompleteUtils").queryGuilds({ query: "", limit: 100, fuzzy: true });
      } else if (tmp4(tmp5[15]).AutocompleterResultTypes.TEXT_CHANNEL === tmp3) {
        obj = { query: "", guildId: null, limit: 100, fuzzy: true, allowEmptyQueries: true };
        obj.guildId = obj.getGuildId();
        return require("AutocompleteUtils").queryChannels(obj);
      } else if (tmp4(tmp5[15]).AutocompleterResultTypes.VOICE_CHANNEL === tmp3) {
        obj = { query: "", guildId: null, limit: 100, fuzzy: true, filter: null, type: null, allowEmptyQueries: true };
        obj.guildId = obj.getGuildId();
        obj.filter = function filter() {
          return true;
        };
        obj.type = GUILD_VOCAL_CHANNELS_KEY;
        return require("AutocompleteUtils").queryChannels(obj);
      } else {
        const _Set = Set;
        set = new Set();
        let items = [];
        let num = 1;
        if (1 < found.length) {
          do {
            let tmp8 = generateResultFromId(found[num]);
            if (null != tmp8) {
              let tmp44 = channelId;
              let tmp45 = set;
              let canResult = tmp8.type !== channelId(set[15]).AutocompleterResultTypes.TEXT_CHANNEL;
              if (canResult) {
                canResult = tmp8.type !== tmp44(tmp45[15]).AutocompleterResultTypes.VOICE_CHANNEL;
              }
              if (!canResult) {
                canResult = PermissionStore.can(constants.VIEW_CHANNEL, tmp8.record);
              }
              if (canResult) {
                let arr = items.push(tmp8);
                if (set.size < 3) {
                  let addResult = set.add(found[num]);
                }
              }
            }
            num = num + 1;
          } while (num < found.length);
        }
        const items1 = [];
        let arr1 = (function getDrafts(arg0) {
          closure_0 = arg0;
          const items = [];
          recentlyEditedDrafts = recentlyEditedDrafts.getRecentlyEditedDrafts(ChannelMessage.ChannelMessage);
          const item = recentlyEditedDrafts.forEach((channelId) => {
            channelId = channelId.channelId;
            if (!closure_0(channelId)) {
              const tmp3 = items(set[17])(channelId);
              let tmp5 = null;
              if (null != tmp3) {
                if (tmp8) {
                  tmp5 = tmp3;
                  if (tmp3.type !== tmp7(tmp2[15]).AutocompleterResultTypes.USER) {
                    tmp5 = null;
                  }
                } else {
                  tmp5 = tmp3;
                  if (null != queryMode) {
                    tmp5 = tmp3;
                    if (queryMode !== tmp3.type) {
                      tmp5 = null;
                    }
                  }
                }
                tmp8 = queryMode === channelId(tmp2[15]).AutocompleterResultTypes.USER || queryMode === channelId(tmp2[15]).AutocompleterResultTypes.USER_GLOBAL;
              }
              if (null != tmp5) {
                const obj = { record: tmp5, channelId };
                items.push(obj);
              }
            }
          });
          return items;
        })((arg0) => {
          let hasItem = arg0 === channelId;
          if (!hasItem) {
            hasItem = set.has(arg0);
          }
          return hasItem;
        });
        if (arr1.length > 0) {
          const intl2 = channelId(set[19]).intl;
          items1.push(channelId(set[15]).createHeaderResult(intl2.string(channelId(set[19]).t["4B63jZ"])));
          for (const item10048 of arr1) {
            let addResult1 = set.add(item10048.channelId);
            arr1 = items1.push(item10048.record);
            continue;
          }
          const obj12 = channelId(set[15]);
        }
        const mentionChannelIds = ReadStateStore.getMentionChannelIds();
        found = mentionChannelIds.filter((item) => {
          let tmp = item !== channelId;
          if (tmp) {
            tmp = !set.has(item);
          }
          return tmp;
        });
        const items2 = [];
        let diff = found.length - 1;
        if (0 <= diff) {
          do {
            let tmp22 = found[diff];
            if (null != tmp22) {
              let tmp25 = generateResultFromId(tmp22);
              if (null != tmp25) {
                let obj1 = { channelId: tmp22, result: tmp25 };
                let arr2 = items2.push(obj1);
              }
            }
            diff = diff - 1;
          } while (0 <= diff);
        }
        if (items2.length > 0) {
          const intl3 = channelId(set[19]).intl;
          items1.push(channelId(set[15]).createHeaderResult(intl3.string(channelId(set[19]).t["61Df13"])));
          for (const item10075 of items2) {
            ({ result, channelId } = item10075);
            let addResult2 = set.add(result.record.id);
            let addResult3 = set.add(channelId);
            let arr4 = items1.push(result);
            continue;
          }
          const obj13 = channelId(set[15]);
        }
        let combined = items1;
        if (null != guildId) {
          const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guildId);
          const found1 = selectableChannelIds.filter((item) => {
            const channel = ChannelStore.getChannel(item);
            let hasItem = null == channel;
            if (!hasItem) {
              hasItem = item === channelId;
            }
            if (!hasItem) {
              hasItem = set.has(item);
            }
            if (!hasItem) {
              hasItem = UserGuildSettingsStore.isChannelMuted(channel.guild_id, item);
            }
            if (!hasItem) {
              let isChannelMutedResult = null != channel.parent_id;
              if (isChannelMutedResult) {
                isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(channel.guild_id, channel.parent_id);
              }
              hasItem = isChannelMutedResult;
            }
            let hasImportantUnread = !hasItem;
            if (!hasItem) {
              hasImportantUnread = ReadStateUtils.getHasImportantUnread(channel);
            }
            return hasImportantUnread;
          });
          const mapped = found1.map((item) => {
            const tmp2 = closure_1(set[17])(item);
            let tmp3 = null;
            if (null != tmp2) {
              if (tmp6) {
                tmp3 = tmp2;
                if (tmp2.type !== tmp5(tmp[15]).AutocompleterResultTypes.USER) {
                  tmp3 = null;
                }
              } else {
                tmp3 = tmp2;
                if (null != queryMode) {
                  tmp3 = tmp2;
                  if (queryMode !== tmp2.type) {
                    tmp3 = null;
                  }
                }
              }
              tmp6 = queryMode === channelId(tmp[15]).AutocompleterResultTypes.USER || queryMode === channelId(tmp[15]).AutocompleterResultTypes.USER_GLOBAL;
            }
            return tmp3;
          });
          const found2 = mapped.filter(channelId(set[21]).isNotNullish);
          const _Object = Object;
          const values = Object.values(ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForGuild(guildId));
          let item = values.forEach((item) => {
            for (const key10004 in arg0) {
              let tmp14 = createAutocompleterResultForChannelIdDefault(key10004);
              let tmp5 = null;
              if (null != tmp14) {
                let tmp2 = require;
                let tmp = queryMode;
                let tmp3 = queryMode === sortByMatchScore.AutocompleterResultTypes.USER;
                if (!tmp3) {
                  tmp3 = tmp === tmp2(9835).AutocompleterResultTypes.USER_GLOBAL;
                }
                if (tmp3) {
                  tmp5 = tmp14;
                  if (tmp14.type !== tmp2(9835).AutocompleterResultTypes.USER) {
                    tmp5 = null;
                  }
                } else {
                  tmp5 = tmp14;
                  if (null != queryMode) {
                    tmp5 = tmp14;
                    if (queryMode !== tmp14.type) {
                      tmp5 = null;
                    }
                  }
                }
              }
              let hasItem = null == tmp5;
              if (!hasItem) {
                hasItem = set.has(tmp5.record.id);
              }
              if (hasItem) {
                continue;
              } else {
                let arr = found2.push(tmp5);
                continue;
              }
              continue;
            }
          });
          combined = items1;
          if (found2.length > 0) {
            const intl = tmp55(tmp56[19]).intl;
            items1.push(tmp55(tmp56[15]).createHeaderResult(intl.string(tmp55(tmp56[19]).t.ieCAhD)));
            combined = items1.concat(found2);
            const tmp55Result = tmp55(tmp56[15]);
          }
        }
        let num3 = 7;
        if (combined.length > 0) {
          num3 = 3;
        }
        if (items.length > num3) {
          items.splice(num3);
        }
        let tmp33 = combined;
        if (items.length > 0) {
          const intl4 = channelId(set[19]).intl;
          const items3 = [channelId(set[15]).createHeaderResult(intl4.string(channelId(set[19]).t["80lOZ1"]))];
          HermesBuiltin.arraySpread(items, 1);
          const items4 = [];
          HermesBuiltin.arraySpread(combined, HermesBuiltin.arraySpread(items3, 0));
          tmp33 = items4;
          const obj14 = channelId(set[15]);
        }
        return tmp33;
      }
    }
  }
  importDefault = AuthenticationStore.getId();
  const recentlyTalked = require("AutocompleteUtils").getRecentlyTalked(channelId, 100);
  return recentlyTalked.filter((record) => record.record.id !== closure_1);
}
function handleQuickSwitcherShow(arg0) {
  ({ query, queryMode } = arg0);
  const trimmed = query.trim();
  const guildId = SelectedGuildStore.getGuildId();
  const items = ["user:" + AuthenticationStore.getId()];
  const set = new Set(items);
  if (null != guildId) {
    const _HermesInternal = HermesInternal;
    set.add("guild:" + guildId);
  }
  closure_32 = Date.now();
  let tmp13 = _null;
  if (_null == null) {
    tmp13 = sortByMatchScoreDefault;
    const items1 = [sortByMatchScore.AutocompleterResultTypes.USER, sortByMatchScore.AutocompleterResultTypes.GROUP_DM, sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL, sortByMatchScore.AutocompleterResultTypes.GUILD, sortByMatchScore.AutocompleterResultTypes.APPLICATION, sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE, sortByMatchScore.AutocompleterResultTypes.LINK, sortByMatchScore.AutocompleterResultTypes.IN_APP_NAVIGATION];
    let num = 5;
    if (null != queryMode) {
      num = 100;
    }
    const obj = { frecencyBoosters: true, blacklist: set, allowSnowflake: true };
    tmp13 = new tmp13(tmp14, items1, num, obj, 100);
  }
  _null = tmp13;
  c28 = null;
  c29 = trimmed.length;
  _null.search(trimmed);
}
function handleUserSearchUpdate(arr, str) {
  str = str.trim();
  if ("" === str.trim()) {
    arr = generateInitialResults();
  }
  let flag = false;
  if (arr.length === length.length) {
    let num2 = 0;
    flag = true;
    if (0 < arr.length) {
      flag = false;
      while (arr[num2].record.id === tmp2[num2].record.id) {
        flag = false;
        if (tmp3.type !== tmp4.type) {
          break;
        } else {
          let sum = num2 + 1;
          num2 = sum;
          flag = true;
          if (sum >= arr.length) {
            break;
          }
        }
      }
    }
  }
  if (!flag) {
    let DOWN = require;
    if (sortByMatchScore.AutocompleterResultTypes.USER_GLOBAL !== queryMode) {
      if (DOWN(9835).AutocompleterResultTypes.USER !== tmp7) {
        if (DOWN(9835).AutocompleterResultTypes.TEXT_CHANNEL === tmp7) {
          const intl5 = DOWN(1114).intl;
          arr = arr.unshift(DOWN(9835).createHeaderResult(intl5.string(DOWN(1114).t.W26k4V)));
          let items = arr;
          const DOWNResult = DOWN(9835);
        } else if (DOWN(9835).AutocompleterResultTypes.VOICE_CHANNEL === tmp7) {
          const intl4 = DOWN(1114).intl;
          arr = arr.unshift(DOWN(9835).createHeaderResult(intl4.string(DOWN(1114).t.zUoI5C)));
          items = arr;
          const DOWNResult1 = DOWN(9835);
        } else if (DOWN(9835).AutocompleterResultTypes.GUILD === tmp7) {
          const intl3 = DOWN(1114).intl;
          arr.unshift(DOWN(9835).createHeaderResult(intl3.string(DOWN(1114).t.olADPs)));
          items = arr;
          const DOWNResult2 = DOWN(9835);
        } else if (DOWN(9835).AutocompleterResultTypes.APPLICATION === tmp7) {
          const intl2 = DOWN(1114).intl;
          arr.unshift(DOWN(9835).createHeaderResult(intl2.string(DOWN(1114).t.VwK1ld)));
          items = arr;
          const DOWNResult3 = DOWN(9835);
        } else if (DOWN(9835).AutocompleterResultTypes.GAME_PROFILE === tmp7) {
          const intl = DOWN(1114).intl;
          arr.unshift(DOWN(9835).createHeaderResult(intl.string(DOWN(1114).t.gEp2SG)));
          items = arr;
          const DOWNResult4 = DOWN(9835);
        } else {
          found = arr.filter((type) => type.type === sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE);
          const substr = found.slice(0, 3);
          items = [];
          HermesBuiltin.arraySpread(substr, HermesBuiltin.arraySpread(arr.filter((type) => type.type !== sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE), 0));
          arr = items;
        }
        if (str !== c28) {
          c28 = str;
          const _Math = Math;
          c29 = Math.max(str.length, c29);
          str = DOWN(9835).findNextSelectedResult;
          DOWN = DOWN(9835).FindResultDirections.DOWN;
          selectedIndex = str(DOWN, -1, arr);
          const DOWNResult5 = DOWN(9835);
        } else {
          let tmp31 = null != tmp29;
          if (tmp31) {
            tmp31 = tmp29.type === DOWN(9835).AutocompleterResultTypes.HEADER;
          }
          if (tmp31) {
            selectedIndex = DOWN(9835).findNextSelectedResult(DOWN(9835).FindResultDirections.DOWN, selectedIndex, arr);
            const DOWNResult6 = DOWN(9835);
          }
        }
        quickSwitcherStoreClass.emitChange();
      }
    }
    let guild = null;
    if (queryMode !== DOWN(9835).AutocompleterResultTypes.USER_GLOBAL) {
      guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
    }
    if (null != guild) {
      const intl7 = DOWN(1114).intl;
      const obj = { name: null };
      guild = guild.name;
      obj.name = guild;
      let formatToPlainStringResult = intl7.formatToPlainString(DOWN(1114).t.FREzQs, obj);
    } else {
      const intl6 = DOWN(1114).intl;
      formatToPlainStringResult = intl6.string(DOWN(1114).t.XFYW1o);
    }
    arr.unshift(DOWN(9835).createHeaderResult(formatToPlainStringResult));
    const DOWNResult7 = DOWN(9835);
    length = arr;
  }
}
function handleQuickSwitcherHide() {
  c28 = null;
  c29 = 0;
  closure_30 = [];
  if (null != _null) {
    _null.destroy();
    _null = null;
  }
}
function handleGameAutocompleteSettled() {
  if (null == _null) {
    return false;
  } else {
    _null.refreshGameProfiles();
  }
}
const DraftType = fn(4901).DraftType;
const GUILD_VOCAL_CHANNELS_KEY = fn(2012).GUILD_VOCAL_CHANNELS_KEY;
const Constants = fn(1074);
({ CHANNEL_NOTICE_SHOW_DELAY: closure_20, Permissions: closure_21 } = Constants);
const seenQSTutorial = "seenQSTutorial";
let selectedIndex = 0;
let c24 = false;
let closure_25 = false;
const queryMode = null;
let results = [];
let c28 = null;
let c29 = 0;
let found = [];
let closure_32 = null;
const PersistedStore = initializeDefault.PersistedStore;
class QuickSwitcherStoreClass extends PersistedStore {
}
const prototype = QuickSwitcherStoreClass.prototype;
prototype["initialize"] = function initialize(channelHistory) {
  this.waitFor(ActiveJoinedThreadsStore, AuthenticationStore, ChannelStore, DraftStore, GameAutocompleteStore, GuildChannelStore, GuildMemberStore, GuildStore, PermissionStore, ReadStateStore, SelectedChannelStore, SelectedGuildStore, ThemeStore, UserGuildSettingsStore);
  const items = [ThemeStore];
  this.syncWith(items, () => true);
  const Storage = Storage2.Storage;
  c24 = Storage.get(seenQSTutorial) || false;
  channelHistory = undefined;
  if (channelHistory != null) {
    channelHistory = channelHistory.channelHistory;
  }
  if (channelHistory == null) {
    channelHistory = [];
  }
  found = channelHistory;
};
prototype["getState"] = function getState() {
  return { channelHistory: found };
};
prototype["isOpen"] = function isOpen() {
  return null != c3;
};
prototype["getResultTotals"] = function getResultTotals(GROUP_DM) {
  if (null == _null) {
    return 0;
  } else if (null == GROUP_DM) {
    results = _null.results;
    let reduced = results.reduce((acc, type) => {
      let sum = acc;
      if (type.type !== GROUP_DM(dependencyMap[15]).AutocompleterResultTypes.HEADER) {
        sum = acc + 1;
      }
      return sum;
    }, 0);
  } else {
    const results1 = _null.results;
    reduced = results1.reduce((acc, type) => {
      let sum = acc;
      if (type.type === closure_0) {
        sum = acc + 1;
      }
      return sum;
    }, 0);
  }
};
prototype["channelNoticePredicate"] = function channelNoticePredicate(arg0, arg1) {
  let tmp = closure_25;
  if (closure_25) {
    tmp = Date.now() - arg1 >= closure_1_20;
  }
  return tmp;
};
prototype["getFrequentGuilds"] = function getFrequentGuilds() {
  let queryGuildsResult = null;
  if (null != _null) {
    queryGuildsResult = _null.queryGuilds("", 100);
  }
  return queryGuildsResult;
};
prototype["getFrequentGuildsLength"] = function getFrequentGuildsLength() {
  let num = 0;
  if (null != _null) {
    num = _null.queryGuilds("", 100).length;
  }
  return num;
};
prototype["getChannelHistory"] = function getChannelHistory() {
  return found;
};
prototype["getLastShowTimestamp"] = function getLastShowTimestamp() {
  return closure_32;
};
prototype["getProps"] = function getProps() {
  const obj = { theme: ThemeStore.theme, query: null, queryMode: null, results: null, selectedIndex: null, seenTutorial: null, maxQueryLength: null };
  let str = "";
  if (null != _null) {
    str = _null.query;
  }
  obj.query = str;
  obj.queryMode = queryMode;
  obj.results = results;
  obj.selectedIndex = selectedIndex;
  obj.seenTutorial = seenTutorial;
  obj.maxQueryLength = maxQueryLength;
  return obj;
};
QuickSwitcherStoreClass.displayName = "QuickSwitcherStore";
QuickSwitcherStoreClass.persistKey = "QuickSwitcherStore";
const quickSwitcherStoreClass = new QuickSwitcherStoreClass(DispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  QUICKSWITCHER_SHOW: handleQuickSwitcherShow,
  SHOW_ACTION_SHEET_QUICK_SWITCHER: handleQuickSwitcherShow,
  QUICKSWITCHER_HIDE: handleQuickSwitcherHide,
  OVERLAY_SET_INPUT_LOCKED: handleQuickSwitcherHide,
  HIDE_ACTION_SHEET_QUICK_SWITCHER: handleQuickSwitcherHide,
  QUICKSWITCHER_SEARCH: function handleQuickSwitcherSearch(arg0) {
    ({ query, queryMode } = arg0);
    const trimmed = query.trim();
    if (null == _null) {
      return false;
    } else {
      if (queryMode !== queryMode) {
        if (null == queryMode) {
          const items = [sortByMatchScore.AutocompleterResultTypes.USER, sortByMatchScore.AutocompleterResultTypes.GROUP_DM, sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL, sortByMatchScore.AutocompleterResultTypes.GUILD, sortByMatchScore.AutocompleterResultTypes.APPLICATION, sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE, sortByMatchScore.AutocompleterResultTypes.LINK, sortByMatchScore.AutocompleterResultTypes.IN_APP_NAVIGATION];
          _null.setResultTypes(items);
          let tmp6 = require;
        } else {
          if (tmp2) {
            const items1 = [tmp31(9835).AutocompleterResultTypes.USER];
            setResultTypes(items1);
            tmp6 = tmp31;
          } else {
            const items2 = [queryMode];
            setResultTypes(items2);
            tmp6 = tmp31;
          }
          tmp2 = queryMode === sortByMatchScore.AutocompleterResultTypes.USER || queryMode === sortByMatchScore.AutocompleterResultTypes.USER_GLOBAL;
        }
        let num = 5;
        if (null != queryMode) {
          num = 100;
        }
        _null.setLimit(num);
        const guildId = SelectedGuildStore.getGuildId();
        if (queryMode === tmp6(9835).AutocompleterResultTypes.USER) {
          if (null != guildId) {
            let obj = { userFilters: null };
            obj = { guild: guildId, friends: true };
            obj.userFilters = obj;
            _null.setOptions(obj, true);
          }
        }
        if (queryMode === tmp6(9835).AutocompleterResultTypes.VOICE_CHANNEL) {
          _null.setOptions({ voiceChannelGuildFilter: null }, true);
        } else {
          _null.setOptions({ userFilters: null, voiceChannelGuildFilter: "a" }, true);
        }
      }
      if (queryMode === sortByMatchScore.AutocompleterResultTypes.USER) {
        let guildId1 = SelectedGuildStore.getGuildId();
        if (guildId1 == null) {
          guildId1 = null;
        }
        _null.search(trimmed, guildId1);
      } else {
        _null.search(trimmed, undefined);
      }
    }
  },
  QUICKSWITCHER_SELECT: function handleQuickSwitcherSelect(selectedIndex) {
    selectedIndex = selectedIndex.selectedIndex;
  },
  QUICKSWITCHER_SWITCH_TO: function handleQuickSwitcherSwitchTo() {
    if (c24) {
      return false;
    } else {
      c24 = true;
      const Storage = Storage2.Storage;
      const result = Storage.set(seenQSTutorial, true);
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      return false;
    } else {
      found = found.filter((item) => item !== channelId);
      found.unshift(channelId);
      if (found.length > 8) {
        found.length = 8;
      }
    }
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: handleGameAutocompleteSettled,
  GAME_AUTOCOMPLETE_FETCH_FAILURE: handleGameAutocompleteSettled
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quickswitcher/QuickSwitcherStore.tsx");

export default quickSwitcherStoreClass;
export { generateResultFromId };