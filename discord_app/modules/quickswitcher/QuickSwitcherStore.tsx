// discord_app/modules/quickswitcher/QuickSwitcherStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import sortByMatchScore from "../autocompleter/index.tsx";
import sortByMatchScoreDefault from "../autocompleter/index.tsx";
import createAutocompleterResultForChannelIdDefault from "../autocompleter/createAutocompleterResultForChannelId.tsx";
import closure_4 from "../games/autocomplete/GameAutocompleteStore.tsx";
import closure_5 from "../threads/ActiveJoinedThreadsStore.tsx";
import closure_6 from "../user_settings/ThemeStore.tsx";
import closure_7 from "../../stores/AuthenticationStore.tsx";
import closure_8 from "../../stores/ChannelStore.tsx";
import closure_9 from "../../stores/DraftStore.tsx";
import { DraftType } from "../../stores/DraftStore.tsx";
import closure_11 from "../../stores/GuildChannelStore.tsx";
import { GUILD_VOCAL_CHANNELS_KEY } from "../../stores/GuildChannelStore.tsx";
import closure_13 from "../../stores/GuildMemberStore.tsx";
import closure_14 from "../../stores/GuildStore.tsx";
import closure_15 from "../../stores/PermissionStore.tsx";
import closure_16 from "../../stores/ReadStateStore.tsx";
import closure_17 from "../../stores/SelectedChannelStore.tsx";
import closure_18 from "../../stores/SelectedGuildStore.tsx";
import closure_19 from "../../stores/UserGuildSettingsStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function handleConnectionOpen() {
  let tmp = store3.getGuildCount() >= 3;
  if (!tmp) {
    tmp = applyDefault.size(mutablePrivateChannels.getMutablePrivateChannels()) >= 20;
    const obj = applyDefault;
  }
  closure_25 = tmp;
  closure_30 = [];
}
function generateResultFromId(arg0) {
  const tmp2 = createAutocompleterResultForChannelIdDefault(arg0);
  if (null == tmp2) {
    return null;
  } else {
    if (tmp3) {
      if (tmp2.type !== tmp7(9924).AutocompleterResultTypes.USER) {
        return null;
      }
    } else if (null != c26) {
      if (c26 !== tmp2.type) {
        return null;
      }
    }
    return tmp2;
  }
}
function generateInitialResults() {
  let obj = store4;
  const guildId = store4.getGuildId();
  channelId = channelId.getChannelId();
  if (channelId(set[15]).AutocompleterResultTypes.USER_GLOBAL !== c26) {
    if (tmp4(tmp5[15]).AutocompleterResultTypes.USER !== tmp3) {
      if (tmp4(tmp5[15]).AutocompleterResultTypes.APPLICATION === tmp3) {
        return importDefault(tmp5[18]).queryApplications({ query: "", limit: 100, fuzzy: true });
      } else if (tmp4(tmp5[15]).AutocompleterResultTypes.GAME_PROFILE === tmp3) {
        return [];
      } else if (tmp4(tmp5[15]).AutocompleterResultTypes.GUILD === tmp3) {
        return importDefault(tmp5[18]).queryGuilds({ query: "", limit: 100, fuzzy: true });
      } else if (tmp4(tmp5[15]).AutocompleterResultTypes.TEXT_CHANNEL === tmp3) {
        obj = { query: "", guildId: null, limit: 100, fuzzy: true, allowEmptyQueries: true };
        obj[1] = obj.getGuildId();
        return importDefault(tmp5[18]).queryChannels(obj);
      } else if (tmp4(tmp5[15]).AutocompleterResultTypes.VOICE_CHANNEL === tmp3) {
        obj = { query: "", guildId: null, limit: 100, fuzzy: true, filter: null, type: null, allowEmptyQueries: true };
        obj[1] = obj.getGuildId();
        obj[4] = function filter() {
          return true;
        };
        obj[5] = GUILD_VOCAL_CHANNELS_KEY;
        return importDefault(tmp5[18]).queryChannels(obj);
      } else {
        const _Set = Set;
        set = new Set();
        let items = [];
        let num = 1;
        if (1 < closure_31.length) {
          do {
            let tmp6 = generateResultFromId;
            let tmp7 = closure_31;
            let tmp8 = generateResultFromId(closure_31[num]);
            let tmp9 = num;
            if (null != tmp8) {
              let tmp44 = channelId;
              let tmp45 = set;
              let canResult = tmp8.type !== channelId(set[15]).AutocompleterResultTypes.TEXT_CHANNEL;
              if (canResult) {
                canResult = tmp8.type !== tmp44(tmp45[15]).AutocompleterResultTypes.VOICE_CHANNEL;
              }
              if (!canResult) {
                let tmp11 = closure_15;
                let tmp12 = constants;
                canResult = closure_15.can(constants.VIEW_CHANNEL, tmp8.record);
              }
              if (canResult) {
                let arr = items.push(tmp8);
                if (set.size < 3) {
                  let tmp14 = closure_31;
                  let addResult = set.add(closure_31[num]);
                }
              }
            }
            num = num + 1;
            let tmp16 = closure_31;
          } while (num < closure_31.length);
        }
        const items1 = [];
        let arr1 = (function getDrafts(arg0) {
          closure_0 = arg0;
          const items = [];
          recentlyEditedDrafts = recentlyEditedDrafts.getRecentlyEditedDrafts(ChannelMessage.ChannelMessage);
          const item = recentlyEditedDrafts.forEach((channelId) => {
            channelId = channelId.channelId;
            if (!callback(channelId)) {
              const tmp3 = items(closure_1_2[17])(channelId);
              let tmp5 = null;
              if (null != tmp3) {
                if (tmp8) {
                  tmp5 = tmp3;
                  if (tmp3.type !== tmp7(tmp2[15]).AutocompleterResultTypes.USER) {
                    tmp5 = null;
                  }
                } else {
                  tmp5 = tmp3;
                  if (null != closure_1_26) {
                    tmp5 = tmp3;
                    if (closure_1_26 !== tmp3.type) {
                      tmp5 = null;
                    }
                  }
                }
                const tmp6 = closure_1_26;
                tmp8 =
                  closure_1_26 === callback(tmp2[15]).AutocompleterResultTypes.USER ||
                  closure_1_26 === callback(tmp2[15]).AutocompleterResultTypes.USER_GLOBAL;
              }
              if (null != tmp5) {
                const obj = { record: null, channelId: null };
                obj[0] = tmp5;
                obj[1] = channelId;
                items.push(obj);
                const tmp15 = callback;
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
        mentionChannelIds = mentionChannelIds.getMentionChannelIds();
        const found = mentionChannelIds.filter((arg0) => {
          let tmp = arg0 !== channelId;
          if (tmp) {
            tmp = !set.has(arg0);
          }
          return tmp;
        });
        const items2 = [];
        let diff = found.length - 1;
        if (0 <= diff) {
          do {
            let tmp22 = found[diff];
            let tmp23 = diff;
            if (null != tmp22) {
              let tmp24 = generateResultFromId;
              let tmp25 = generateResultFromId(tmp22);
              if (null != tmp25) {
                obj1 = { channelId: null, result: null };
                obj1[0] = tmp22;
                obj1[1] = tmp25;
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
          selectableChannelIds = selectableChannelIds.getSelectableChannelIds(guildId);
          const found1 = selectableChannelIds.filter((id) => {
            const channel = closure_1_8.getChannel(id);
            let hasItem = null == channel;
            if (!hasItem) {
              hasItem = id === channelId;
            }
            if (!hasItem) {
              hasItem = set.has(id);
            }
            if (!hasItem) {
              hasItem = closure_1_19.isChannelMuted(channel.guild_id, id);
            }
            if (!hasItem) {
              let isChannelMutedResult = null != channel.parent_id;
              if (isChannelMutedResult) {
                isChannelMutedResult = closure_1_19.isChannelMuted(channel.guild_id, channel.parent_id);
              }
              hasItem = isChannelMutedResult;
            }
            let hasImportantUnread = !hasItem;
            if (!hasItem) {
              hasImportantUnread = channelId(set[20]).getHasImportantUnread(channel);
              const obj = channelId(set[20]);
            }
            return hasImportantUnread;
          });
          const mapped = found1.map((arg0) => {
            const tmp2 = callback(set[17])(arg0);
            let tmp3 = null;
            if (null != tmp2) {
              if (tmp6) {
                tmp3 = tmp2;
                if (tmp2.type !== tmp5(tmp[15]).AutocompleterResultTypes.USER) {
                  tmp3 = null;
                }
              } else {
                tmp3 = tmp2;
                if (null != closure_26) {
                  tmp3 = tmp2;
                  if (closure_26 !== tmp2.type) {
                    tmp3 = null;
                  }
                }
              }
              const tmp4 = closure_26;
              tmp6 =
                closure_26 === channelId(tmp[15]).AutocompleterResultTypes.USER ||
                closure_26 === channelId(tmp[15]).AutocompleterResultTypes.USER_GLOBAL;
            }
            return tmp3;
          });
          const found2 = mapped.filter(channelId(set[21]).isNotNullish);
          const _Object = Object;
          const values = Object.values(activeJoinedUnreadThreadsForGuild.getActiveJoinedUnreadThreadsForGuild(guildId));
          let item = values.forEach((obj) => {
            for (const key10004 in arg0) {
              let tmp11 = key10004;
              let tmp12 = callback;
              let tmp13 = set;
              let tmp14 = callback(set[17])(key10004);
              let tmp5 = null;
              if (null != tmp14) {
                let tmp2 = channelId;
                let tmp = closure_1_26;
                let tmp3 = closure_1_26 === channelId(tmp13[15]).AutocompleterResultTypes.USER;
                if (!tmp3) {
                  tmp3 = tmp === tmp2(tmp13[15]).AutocompleterResultTypes.USER_GLOBAL;
                }
                if (tmp3) {
                  tmp5 = tmp14;
                  if (tmp14.type !== tmp2(tmp13[15]).AutocompleterResultTypes.USER) {
                    tmp5 = null;
                  }
                } else {
                  let tmp4 = closure_1_26;
                  tmp5 = tmp14;
                  if (null != closure_1_26) {
                    let tmp6 = closure_1_26;
                    tmp5 = tmp14;
                    if (closure_1_26 !== tmp14.type) {
                      tmp5 = null;
                    }
                  }
                }
              }
              let hasItem = null == tmp5;
              if (!hasItem) {
                let tmp8 = set;
                hasItem = set.has(tmp5.record.id);
              }
              if (hasItem) {
                continue;
              } else {
                let tmp9 = found2;
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
  importDefault = store2.getId();
  const recentlyTalked = importDefault(set[18]).getRecentlyTalked(channelId, 100);
  return recentlyTalked.filter((record) => record.record.id !== closure_1);
}
function handleQuickSwitcherShow(arg0) {
  ({ query, queryMode } = arg0);
  const trimmed = query.trim();
  const guildId = store4.getGuildId();
  const items = ["user:" + store2.getId()];
  const set = new Set(items);
  if (null != guildId) {
    const _HermesInternal = HermesInternal;
    set.add("guild:" + guildId);
  }
  closure_32 = Date.now();
  let tmp13 = store;
  if (store == null) {
    tmp13 = sortByMatchScoreDefault;
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
    const obj = { frecencyBoosters: true, blacklist: null, allowSnowflake: true };
    obj[1] = set;
    tmp13 = new tmp13(tmp14, items1, num, obj, 100);
  }
  store = tmp13;
  c28 = null;
  store.search(trimmed);
}
function handleUserSearchUpdate(arr, str) {
  str = str.trim();
  if ("" === str.trim()) {
    arr = generateInitialResults();
  }
  let flag = false;
  if (arr.length === arr.length) {
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
    if (sortByMatchScore.AutocompleterResultTypes.USER_GLOBAL !== c26) {
      if (DOWN(9924).AutocompleterResultTypes.USER !== tmp7) {
        if (DOWN(9924).AutocompleterResultTypes.TEXT_CHANNEL === tmp7) {
          const intl5 = DOWN(1236).intl;
          arr = arr.unshift(DOWN(9924).createHeaderResult(intl5.string(DOWN(1236).t.W26k4V)));
          let items = arr;
          const DOWNResult = DOWN(9924);
        } else if (DOWN(9924).AutocompleterResultTypes.VOICE_CHANNEL === tmp7) {
          const intl4 = DOWN(1236).intl;
          arr = arr.unshift(DOWN(9924).createHeaderResult(intl4.string(DOWN(1236).t.zUoI5C)));
          items = arr;
          const DOWNResult1 = DOWN(9924);
        } else if (DOWN(9924).AutocompleterResultTypes.GUILD === tmp7) {
          const intl3 = DOWN(1236).intl;
          arr.unshift(DOWN(9924).createHeaderResult(intl3.string(DOWN(1236).t.olADPs)));
          items = arr;
          const DOWNResult2 = DOWN(9924);
        } else if (DOWN(9924).AutocompleterResultTypes.APPLICATION === tmp7) {
          const intl2 = DOWN(1236).intl;
          arr.unshift(DOWN(9924).createHeaderResult(intl2.string(DOWN(1236).t.VwK1ld)));
          items = arr;
          const DOWNResult3 = DOWN(9924);
        } else if (DOWN(9924).AutocompleterResultTypes.GAME_PROFILE === tmp7) {
          const intl = DOWN(1236).intl;
          arr.unshift(DOWN(9924).createHeaderResult(intl.string(DOWN(1236).t.gEp2SG)));
          items = arr;
          const DOWNResult4 = DOWN(9924);
        } else {
          const found = arr.filter((type) => type.type === callback(9924).AutocompleterResultTypes.GAME_PROFILE);
          const substr = found.slice(0, 3);
          items = [];
          HermesBuiltin.arraySpread(
            substr,
            HermesBuiltin.arraySpread(
              arr.filter((type) => type.type !== callback(9924).AutocompleterResultTypes.GAME_PROFILE),
              0,
            ),
          );
          arr = items;
        }
        if (str !== str) {
          const _Math = Math;
          closure_29 = Math.max(str.length, closure_29);
          str = DOWN(9924).findNextSelectedResult;
          DOWN = DOWN(9924).FindResultDirections.DOWN;
          closure_23 = str(DOWN, -1, arr);
          const DOWNResult5 = DOWN(9924);
        } else {
          let tmp31 = null != tmp29;
          if (tmp31) {
            tmp31 = tmp29.type === DOWN(9924).AutocompleterResultTypes.HEADER;
          }
          if (tmp31) {
            closure_23 = DOWN(9924).findNextSelectedResult(DOWN(9924).FindResultDirections.DOWN, closure_23, arr);
            const DOWNResult6 = DOWN(9924);
          }
        }
        quickSwitcherStoreClass.emitChange();
      }
    }
    let guild = null;
    if (c26 !== DOWN(9924).AutocompleterResultTypes.USER_GLOBAL) {
      guild = store3.getGuild(store4.getGuildId());
    }
    if (null != guild) {
      const intl7 = DOWN(1236).intl;
      const obj = { name: null };
      guild = guild.name;
      obj[0] = guild;
      let formatToPlainStringResult = intl7.formatToPlainString(DOWN(1236).t.FREzQs, obj);
    } else {
      const intl6 = DOWN(1236).intl;
      formatToPlainStringResult = intl6.string(DOWN(1236).t.XFYW1o);
    }
    arr.unshift(DOWN(9924).createHeaderResult(formatToPlainStringResult));
    const DOWNResult7 = DOWN(9924);
  }
}
function handleQuickSwitcherHide() {
  c28 = null;
  c29 = 0;
  closure_30 = [];
  if (null != store) {
    store.destroy();
    store = null;
  }
}
function handleGameAutocompleteSettled() {
  if (null == store) {
    return false;
  } else {
    store.refreshGameProfiles();
  }
}
({ CHANNEL_NOTICE_SHOW_DELAY: closure_20, Permissions: closure_21 } = ME);
const seenQSTutorial = "seenQSTutorial";
let c23 = 0;
let c24 = false;
let c25 = false;
let c26 = null;
let closure_27 = [];
let c28 = null;
let c29 = 0;
let closure_30 = [];
let closure_31 = [];
let c32 = null;
const PersistedStore = initializeDefault.PersistedStore;
class QuickSwitcherStoreClass extends PersistedStore {}
const prototype = QuickSwitcherStoreClass.prototype;
prototype["initialize"] = function initialize(channelHistory) {
  this.waitFor(
    closure_5,
    closure_7,
    closure_8,
    closure_9,
    closure_4,
    closure_11,
    closure_13,
    closure_14,
    closure_15,
    closure_16,
    closure_17,
    closure_18,
    closure_6,
    closure_19,
  );
  const items = [closure_6];
  this.syncWith(items, () => true);
  const Storage = Storage2.Storage;
  closure_24 = Storage.get(seenQSTutorial) || false;
  channelHistory = undefined;
  if (channelHistory != null) {
    channelHistory = channelHistory.channelHistory;
  }
  if (channelHistory == null) {
    channelHistory = [];
  }
};
prototype["getState"] = function getState() {
  return { channelHistory: closure_31 };
};
prototype["isOpen"] = function isOpen() {
  return null != closure_3;
};
prototype["getResultTotals"] = function getResultTotals(GROUP_DM) {
  closure_0 = GROUP_DM;
  if (null == store) {
    return 0;
  } else if (null == GROUP_DM) {
    const results = store.results;
    let reduced = results.reduce((arg0, type) => {
      let sum = arg0;
      if (type.type !== GROUP_DM(table[15]).AutocompleterResultTypes.HEADER) {
        sum = arg0 + 1;
      }
      return sum;
    }, 0);
  } else {
    const results1 = store.results;
    reduced = results1.reduce((arg0, type) => {
      let sum = arg0;
      if (type.type === closure_0) {
        sum = arg0 + 1;
      }
      return sum;
    }, 0);
  }
};
prototype["channelNoticePredicate"] = function channelNoticePredicate(arg0, arg1) {
  let tmp = c25;
  if (c25) {
    tmp = Date.now() - arg1 >= closure_20;
  }
  return tmp;
};
prototype["getFrequentGuilds"] = function getFrequentGuilds() {
  let queryGuildsResult = null;
  if (null != store) {
    queryGuildsResult = store.queryGuilds("", 100);
  }
  return queryGuildsResult;
};
prototype["getFrequentGuildsLength"] = function getFrequentGuildsLength() {
  let num = 0;
  if (null != store) {
    num = store.queryGuilds("", 100).length;
  }
  return num;
};
prototype["getChannelHistory"] = function getChannelHistory() {
  return closure_31;
};
prototype["getLastShowTimestamp"] = function getLastShowTimestamp() {
  return c32;
};
prototype["getProps"] = function getProps() {
  const obj = {
    theme: theme.theme,
    query: null,
    queryMode: null,
    results: null,
    selectedIndex: null,
    seenTutorial: null,
    maxQueryLength: null,
  };
  let str = "";
  if (null != store) {
    str = store.query;
  }
  obj[1] = str;
  obj[2] = c26;
  obj[3] = closure_27;
  obj[4] = c23;
  obj[5] = c24;
  obj[6] = c29;
  return obj;
};
QuickSwitcherStoreClass.displayName = "QuickSwitcherStore";
QuickSwitcherStoreClass.persistKey = "QuickSwitcherStore";
const quickSwitcherStoreClass = new QuickSwitcherStoreClass(dispatcherDefault, {
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
    if (null == store) {
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
          store.setResultTypes(items);
          let tmp6 = require;
        } else {
          if (tmp2) {
            const items1 = [tmp31(9924).AutocompleterResultTypes.USER];
            setResultTypes(items1);
            tmp6 = tmp31;
          } else {
            const items2 = [queryMode];
            setResultTypes(items2);
            tmp6 = tmp31;
          }
          tmp2 =
            queryMode === sortByMatchScore.AutocompleterResultTypes.USER ||
            queryMode === sortByMatchScore.AutocompleterResultTypes.USER_GLOBAL;
        }
        let num = 5;
        if (null != queryMode) {
          num = 100;
        }
        store.setLimit(num);
        const guildId = store4.getGuildId();
        if (queryMode === tmp6(9924).AutocompleterResultTypes.USER) {
          if (null != guildId) {
            let obj = { userFilters: null };
            obj = { guild: null, friends: true };
            obj[0] = guildId;
            obj[0] = obj;
            store.setOptions(obj, true);
          }
        }
        if (queryMode === tmp6(9924).AutocompleterResultTypes.VOICE_CHANNEL) {
          store.setOptions({ voiceChannelGuildFilter: null }, true);
        } else {
          store.setOptions({ userFilters: null, voiceChannelGuildFilter: "Array" }, true);
        }
      }
      if (queryMode === sortByMatchScore.AutocompleterResultTypes.USER) {
        let guildId1 = store4.getGuildId();
        if (guildId1 == null) {
          guildId1 = null;
        }
        store.search(trimmed, guildId1);
      } else {
        store.search(trimmed, undefined);
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
      found = found.filter((arg0) => arg0 !== channelId);
      found.unshift(channelId);
      if (found.length > 8) {
        found.length = 8;
      }
    }
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: handleGameAutocompleteSettled,
  GAME_AUTOCOMPLETE_FETCH_FAILURE: handleGameAutocompleteSettled,
});
let result = require("set").fileFinishedImporting("modules/quickswitcher/QuickSwitcherStore.tsx");

export default quickSwitcherStoreClass;
export { generateResultFromId };
