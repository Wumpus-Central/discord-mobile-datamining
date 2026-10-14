// discord_app/modules/quickswitcher/QuickSwitcherStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SidebarActionTypes from "../sidebar/SidebarActionTypes.tsx";
import sortByMatchScore from "../autocompleter/index.tsx";
import createAutocompleterResultForChannelIdDefault from "../autocompleter/createAutocompleterResultForChannelId.tsx";
import ReadStateUtils from "../read_states/ReadStateUtils.tsx";
import GameAutocompleteStore from "../games/autocomplete/GameAutocompleteStore.tsx";
import ActiveJoinedThreadsStore from "../threads/ActiveJoinedThreadsStore.tsx";
import ThemeStore from "../user_settings/ThemeStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import DraftStore from "../../stores/DraftStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";

const sortByMatchScoreDefault = sortByMatchScore;

require = fn;
function handleConnectionOpen() {
  let tmp = GuildStore.getGuildCount() >= 3;
  if (!tmp) {
    tmp = _modDef12.size(ChannelStore.getMutablePrivateChannels()) >= 20;
  }
  closure_26 = tmp;
  closure_31 = [];
}
function generateResultFromId(found) {
  const tmp2 = createAutocompleterResultForChannelIdDefault(found);
  if (null == tmp2) {
    return null;
  } else {
    if (tmp3) {
      if (tmp2.type !== sortByMatchScore.AutocompleterResultTypes.USER) {
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
  const guildId = SelectedGuildStore.getGuildId();
  const channelId1 = SelectedChannelStore.getChannelId();
  if (channelId1(set[16]).AutocompleterResultTypes.USER_GLOBAL !== queryMode) {
    if (tmp4(tmp5[16]).AutocompleterResultTypes.USER !== queryMode) {
      if (tmp4(tmp5[16]).AutocompleterResultTypes.APPLICATION === queryMode) {
        return require("AutocompleteUtils").queryApplications({ query: "", limit: 100, fuzzy: true });
      } else if (tmp4(tmp5[16]).AutocompleterResultTypes.GAME_PROFILE === queryMode) {
        return [];
      } else if (tmp4(tmp5[16]).AutocompleterResultTypes.GUILD === queryMode) {
        return require("AutocompleteUtils").queryGuilds({ query: "", limit: 100, fuzzy: true });
      } else if (tmp4(tmp5[16]).AutocompleterResultTypes.TEXT_CHANNEL === queryMode) {
        const obj3 = {
          query: "",
          guildId: SelectedGuildStore.getGuildId(),
          limit: 100,
          fuzzy: true,
          allowEmptyQueries: true,
        };
        return require("AutocompleteUtils").queryChannels(obj3);
      } else if (tmp4(tmp5[16]).AutocompleterResultTypes.VOICE_CHANNEL === queryMode) {
        const obj4 = {
          query: "",
          guildId: SelectedGuildStore.getGuildId(),
          limit: 100,
          fuzzy: true,
          filter() {
            return true;
          },
          type: GUILD_VOCAL_CHANNELS_KEY,
          allowEmptyQueries: true,
        };
        return require("AutocompleteUtils").queryChannels(obj4);
      } else {
        const _Set = Set;
        set = new Set();
        let items = [];
        const channelId2 = SelectedChannelStore.getChannelId();
        let num = 0;
        if (0 < found.length) {
          do {
            if (found[num] !== channelId2) {
              if (found[num] !== tmp46) {
                let tmp51 = generateResultFromId(found[num]);
                let tmp13 = null != tmp51;
                if (tmp13) {
                  let tmp8 = channelId1;
                  let tmp9 = set;
                  let canResult = tmp51.type !== channelId1(set[16]).AutocompleterResultTypes.TEXT_CHANNEL;
                  if (canResult) {
                    canResult = tmp51.type !== tmp8(tmp9[16]).AutocompleterResultTypes.VOICE_CHANNEL;
                  }
                  if (!canResult) {
                    canResult = PermissionStore.can(constants.VIEW_CHANNEL, tmp51.record);
                  }
                  tmp13 = canResult;
                }
                if (tmp13) {
                  let arr = items.push(tmp51);
                  if (set.size < 3) {
                    let addResult = set.add(found[num]);
                  }
                }
              }
            }
            num = num + 1;
          } while (num < found.length);
        }
        const items1 = [];
        const arr2 = (function getDrafts(arg0) {
          closure_0 = arg0;
          const items = [];
          recentlyEditedDrafts = recentlyEditedDrafts.getRecentlyEditedDrafts(ChannelMessage.ChannelMessage);
          const item = recentlyEditedDrafts.forEach((channelId) => {
            channelId = channelId.channelId;
            if (!closure_0(channelId)) {
              const tmp3 = items(set[18])(channelId);
              let tmp5 = null;
              if (null != tmp3) {
                if (tmp8) {
                  tmp5 = tmp3;
                  if (tmp3.type !== channelId1(set[16]).AutocompleterResultTypes.USER) {
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
                tmp8 =
                  queryMode === channelId1(set[16]).AutocompleterResultTypes.USER ||
                  queryMode === channelId1(set[16]).AutocompleterResultTypes.USER_GLOBAL;
              }
              if (null != tmp5) {
                const obj = { record: tmp5, channelId };
                items.push(obj);
              }
            }
          });
          return items;
        })((arg0) => {
          let hasItem = arg0 === channelId1;
          if (!hasItem) {
            hasItem = set.has(arg0);
          }
          return hasItem;
        });
        if (arr2.length > 0) {
          const intl2 = channelId1(set[20]).intl;
          items1.push(channelId1(set[16]).createHeaderResult(intl2.string(channelId1(set[20]).t["4B63jZ"])));
          for (const item10053 of arr2) {
            let addResult1 = set.add(item10053.channelId);
            let arr4 = items1.push(item10053.record);
            continue;
          }
          const obj13 = channelId1(set[16]);
        }
        const mentionChannelIds = ReadStateStore.getMentionChannelIds();
        found = mentionChannelIds.filter((item) => {
          let tmp = item !== channelId1;
          if (tmp) {
            tmp = !set.has(item);
          }
          return tmp;
        });
        const items2 = [];
        let diff = found.length - 1;
        if (0 <= diff) {
          do {
            let tmp23 = found[diff];
            if (null != tmp23) {
              let tmp26 = generateResultFromId(tmp23);
              if (null != tmp26) {
                let obj6 = { channelId: tmp23, result: tmp26 };
                let arr5 = items2.push(obj6);
              }
            }
            diff = diff - 1;
          } while (0 <= diff);
        }
        if (items2.length > 0) {
          const intl3 = channelId1(set[20]).intl;
          items1.push(channelId1(set[16]).createHeaderResult(intl3.string(channelId1(set[20]).t["61Df13"])));
          for (const item10080 of items2) {
            ({ result, channelId } = item10080);
            let addResult2 = set.add(result.record.id);
            let addResult3 = set.add(channelId);
            let arr7 = items1.push(result);
            continue;
          }
          const obj14 = channelId1(set[16]);
        }
        let combined = items1;
        if (null != guildId) {
          const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guildId);
          const found1 = selectableChannelIds.filter((item) => {
            const channel = ChannelStore.getChannel(item);
            let hasItem = null == channel;
            if (!hasItem) {
              hasItem = item === channelId1;
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
            const tmp2 = closure_1(set[18])(item);
            let tmp3 = null;
            if (null != tmp2) {
              if (tmp6) {
                tmp3 = tmp2;
                if (tmp2.type !== channelId1(set[16]).AutocompleterResultTypes.USER) {
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
              tmp6 =
                queryMode === channelId1(set[16]).AutocompleterResultTypes.USER ||
                queryMode === channelId1(set[16]).AutocompleterResultTypes.USER_GLOBAL;
            }
            return tmp3;
          });
          const found2 = mapped.filter(channelId1(set[22]).isNotNullish);
          const _Object = Object;
          const values = Object.values(ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForGuild(guildId));
          let item = values.forEach((item) => {
            for (const key10004 in arg0) {
              let tmp14 = createAutocompleterResultForChannelIdDefault(key10004);
              let tmp5 = null;
              if (null != tmp14) {
                let tmp3 = queryMode === sortByMatchScore.AutocompleterResultTypes.USER;
                if (!tmp3) {
                  tmp3 = queryMode === sortByMatchScore.AutocompleterResultTypes.USER_GLOBAL;
                }
                if (tmp3) {
                  tmp5 = tmp14;
                  if (tmp14.type !== sortByMatchScore.AutocompleterResultTypes.USER) {
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
            const intl = tmp61(tmp62[20]).intl;
            items1.push(tmp61(tmp62[16]).createHeaderResult(intl.string(tmp61(tmp62[20]).t.ieCAhD)));
            combined = items1.concat(found2);
            const tmp61Result = tmp61(tmp62[16]);
          }
        }
        let num2 = 7;
        if (combined.length > 0) {
          num2 = 3;
        }
        if (items.length > num2) {
          items.splice(num2);
        }
        let tmp34 = combined;
        if (items.length > 0) {
          const intl4 = channelId1(set[20]).intl;
          const items3 = [channelId1(set[16]).createHeaderResult(intl4.string(channelId1(set[20]).t["80lOZ1"]))];
          HermesBuiltin.arraySpread(items, 1);
          const items4 = [];
          HermesBuiltin.arraySpread(combined, HermesBuiltin.arraySpread(items3, 0));
          tmp34 = items4;
          const obj15 = channelId1(set[16]);
        }
        return tmp34;
      }
    }
  }
  importDefault = AuthenticationStore.getId();
  const recentlyTalked = require("AutocompleteUtils").getRecentlyTalked(channelId1, 100);
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
  closure_34 = Date.now();
  let tmp132 = _null;
  if (_null == null) {
    const items1 = [
      sortByMatchScore.AutocompleterResultTypes.USER,
      sortByMatchScore.AutocompleterResultTypes.GROUP_DM,
      sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL,
      sortByMatchScore.AutocompleterResultTypes.GUILD,
      sortByMatchScore.AutocompleterResultTypes.APPLICATION,
      sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE,
      sortByMatchScore.AutocompleterResultTypes.LINK,
      sortByMatchScore.AutocompleterResultTypes.IN_APP_NAVIGATION,
    ];
    let num = 5;
    if (null != queryMode) {
      num = 100;
    }
    const obj = { frecencyBoosters: true, blacklist: set, allowSnowflake: true };
    tmp132 = new sortByMatchScoreDefault(handleUserSearchUpdate, items1, num, obj, 100);
  }
  _null = tmp132;
  c29 = null;
  c30 = trimmed.length;
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
      if (DOWN(8705).AutocompleterResultTypes.USER !== queryMode) {
        if (DOWN(8705).AutocompleterResultTypes.TEXT_CHANNEL === queryMode) {
          const intl5 = DOWN(1126).intl;
          arr.unshift(DOWN(8705).createHeaderResult(intl5.string(DOWN(1126).t.W26k4V)));
          let items = arr;
          const DOWNResult = DOWN(8705);
        } else if (DOWN(8705).AutocompleterResultTypes.VOICE_CHANNEL === queryMode) {
          const intl4 = DOWN(1126).intl;
          arr.unshift(DOWN(8705).createHeaderResult(intl4.string(DOWN(1126).t.zUoI5C)));
          items = arr;
          const DOWNResult1 = DOWN(8705);
        } else if (DOWN(8705).AutocompleterResultTypes.GUILD === queryMode) {
          const intl3 = DOWN(1126).intl;
          arr.unshift(DOWN(8705).createHeaderResult(intl3.string(DOWN(1126).t.olADPs)));
          items = arr;
          const DOWNResult2 = DOWN(8705);
        } else if (DOWN(8705).AutocompleterResultTypes.APPLICATION === queryMode) {
          const intl2 = DOWN(1126).intl;
          arr.unshift(DOWN(8705).createHeaderResult(intl2.string(DOWN(1126).t.VwK1ld)));
          items = arr;
          const DOWNResult3 = DOWN(8705);
        } else if (DOWN(8705).AutocompleterResultTypes.GAME_PROFILE === queryMode) {
          const intl = DOWN(1126).intl;
          arr.unshift(DOWN(8705).createHeaderResult(intl.string(DOWN(1126).t.gEp2SG)));
          items = arr;
          const DOWNResult4 = DOWN(8705);
        } else {
          found = arr.filter((type) => type.type === sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE);
          const substr = found.slice(0, 3);
          items = [];
          HermesBuiltin.arraySpread(
            substr,
            HermesBuiltin.arraySpread(
              arr.filter((type) => type.type !== sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE),
              0,
            ),
          );
          arr = items;
        }
        if (str !== c29) {
          c29 = str;
          const _Math = Math;
          c30 = Math.max(str.length, c30);
          str = DOWN(8705).findNextSelectedResult;
          DOWN = DOWN(8705).FindResultDirections.DOWN;
          selectedIndex = str(DOWN, -1, arr);
          const DOWNResult5 = DOWN(8705);
        } else {
          let tmp31 = null != tmp29;
          if (tmp31) {
            tmp31 = tmp29.type === DOWN(8705).AutocompleterResultTypes.HEADER;
          }
          if (tmp31) {
            selectedIndex = DOWN(8705).findNextSelectedResult(DOWN(8705).FindResultDirections.DOWN, selectedIndex, arr);
            const DOWNResult6 = DOWN(8705);
          }
        }
        quickSwitcherStoreClass.emitChange();
      }
    }
    guild = null;
    if (queryMode !== DOWN(8705).AutocompleterResultTypes.USER_GLOBAL) {
      guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
    }
    if (null != guild) {
      const intl7 = DOWN(1126).intl;
      const obj = { name: null };
      guild = guild.name;
      obj.name = guild;
      let formatToPlainStringResult = intl7.formatToPlainString(DOWN(1126).t.FREzQs, obj);
    } else {
      const intl6 = DOWN(1126).intl;
      formatToPlainStringResult = intl6.string(DOWN(1126).t.XFYW1o);
    }
    arr.unshift(DOWN(8705).createHeaderResult(formatToPlainStringResult));
    const DOWNResult7 = DOWN(8705);
    length = arr;
  }
}
function handleQuickSwitcherHide() {
  c29 = null;
  c30 = 0;
  closure_31 = [];
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
const DraftType = fn(7250).DraftType;
const GUILD_VOCAL_CHANNELS_KEY = fn(4750).GUILD_VOCAL_CHANNELS_KEY;
const Constants = fn(1085);
({ CHANNEL_NOTICE_SHOW_DELAY: closure_21, Permissions: closure_22 } = Constants);
const seenQSTutorial = "seenQSTutorial";
let selectedIndex = 0;
let c25 = false;
let closure_26 = false;
const queryMode = null;
let results = [];
let c29 = null;
let c30 = 0;
let found = [];
let c33 = null;
let closure_34 = null;
const PersistedStore = initializeDefault.PersistedStore;
class QuickSwitcherStoreClass extends PersistedStore {}
const prototype = QuickSwitcherStoreClass.prototype;
prototype["initialize"] = function initialize(channelHistory) {
  this.waitFor(
    ActiveJoinedThreadsStore,
    AuthenticationStore,
    ChannelSectionStore,
    ChannelStore,
    DraftStore,
    GameAutocompleteStore,
    GuildChannelStore,
    GuildMemberStore,
    GuildStore,
    PermissionStore,
    ReadStateStore,
    SelectedChannelStore,
    SelectedGuildStore,
    ThemeStore,
    UserGuildSettingsStore,
  );
  const items = [ThemeStore];
  this.syncWith(items, () => true);
  const Storage = Storage2.Storage;
  c25 = Storage.get(seenQSTutorial) || false;
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
      if (type.type !== GROUP_DM(dependencyMap[16]).AutocompleterResultTypes.HEADER) {
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
  let tmp = closure_26;
  if (closure_26) {
    tmp = Date.now() - arg1 >= guild;
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
  return closure_34;
};
prototype["getProps"] = function getProps() {
  const obj = {
    theme: ThemeStore.theme,
    query: null,
    queryMode: null,
    results: null,
    selectedIndex: null,
    seenTutorial: null,
    maxQueryLength: null,
  };
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
          const items = [
            sortByMatchScore.AutocompleterResultTypes.USER,
            sortByMatchScore.AutocompleterResultTypes.GROUP_DM,
            sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL,
            sortByMatchScore.AutocompleterResultTypes.GUILD,
            sortByMatchScore.AutocompleterResultTypes.APPLICATION,
            sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE,
            sortByMatchScore.AutocompleterResultTypes.LINK,
            sortByMatchScore.AutocompleterResultTypes.IN_APP_NAVIGATION,
          ];
          _null.setResultTypes(items);
          let tmp6 = require;
        } else {
          if (tmp2) {
            const items1 = [sortByMatchScore.AutocompleterResultTypes.USER];
            setResultTypes(items1);
            tmp6 = require;
          } else {
            const items2 = [queryMode];
            setResultTypes(items2);
            tmp6 = require;
          }
          tmp2 =
            queryMode === sortByMatchScore.AutocompleterResultTypes.USER ||
            queryMode === sortByMatchScore.AutocompleterResultTypes.USER_GLOBAL;
        }
        let num = 5;
        if (null != queryMode) {
          num = 100;
        }
        _null.setLimit(num);
        const guildId = SelectedGuildStore.getGuildId();
        if (queryMode === tmp6(8705).AutocompleterResultTypes.USER) {
          if (null != guildId) {
            const obj = { userFilters: null };
            const obj2 = { guild: guildId, friends: true };
            obj.userFilters = obj2;
            _null.setOptions(obj, true);
          }
        }
        if (queryMode === tmp6(8705).AutocompleterResultTypes.VOICE_CHANNEL) {
          _null.setOptions({ voiceChannelGuildFilter: null }, true);
        } else {
          _null.setOptions({ userFilters: null, voiceChannelGuildFilter: "r" }, true);
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
    if (c25) {
      return false;
    } else {
      c25 = true;
      const Storage = Storage2.Storage;
      const result = Storage.set(seenQSTutorial, true);
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    let obj2 = null;
    if (null == channelId) {
      return false;
    } else {
      obj2 = channelId;
      found = found1.filter((item) => item !== channelId);
      found1 = found;
      found.unshift(channelId);
      if (found1.length > 8) {
        found1.length = 8;
      }
      const sidebarState = ChannelSectionStore.getSidebarState(channelId);
      let type;
      if (sidebarState != null) {
        type = sidebarState.type;
      }
      if (type === obj2(6068).SidebarType.VIEW_CHANNEL) {
        if (sidebarState.channelId !== channelId) {
          if (null != ChannelSectionStore.getCurrentSidebarChannelId(channelId)) {
            if (null == ChannelSectionStore.getGuildSidebarState(tmp)) {
              const channelId2 = sidebarState.channelId;
              obj2 = channelId2;
              found1 = found1.filter((item) => item !== channelId);
              found1.unshift(channelId2);
              if (found1.length > 8) {
                found1.length = 8;
              }
              obj2 = { parentId: channelId, channelId: sidebarState.channelId, historyBeforeRestore: found1 };
              const _queueMicrotask = queueMicrotask;
              queueMicrotask(() => {
                if (c33 === obj2) {
                  c33 = null;
                }
              });
            }
          }
        }
      }
    }
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(sidebarType) {
    c33 = null;
    if (sidebarType.sidebarType !== SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
      return false;
    } else {
      if (tmp2) {
        found = tmp.historyBeforeRestore;
      }
      const channelId = sidebarType.channelId;
      found = found.filter((item) => item !== channelId);
      found.unshift(channelId);
      if (found.length > 8) {
        found.length = 8;
      }
    }
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: handleGameAutocompleteSettled,
  GAME_AUTOCOMPLETE_FETCH_FAILURE: handleGameAutocompleteSettled,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quickswitcher/QuickSwitcherStore.tsx");

export default quickSwitcherStoreClass;
export { generateResultFromId };
