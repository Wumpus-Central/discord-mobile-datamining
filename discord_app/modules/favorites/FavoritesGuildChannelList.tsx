// === Module 18711: FavoritesGuildChannelList ===

// Module 18711 (FavoritesGuildChannelList)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7551 */;
import ChannelListState from "ChannelListState" /* 7786 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4990 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6625 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6913 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6899 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 5076 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7352 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7785 */;
import GuildStore from "GuildStore" /* 5013 */;
import PermissionStore from "PermissionStore" /* 5074 */;
import ReadStateStore from "ReadStateStore" /* 6900 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6833 */;
import FavoriteStore from "FavoriteStore" /* 4994 */;

const require = globalThis.__r;

require = fn;
function getMissingFavoriteThreadIds(includeLoading) {
  includeLoading = includeLoading.includeLoading;
  const favoriteChannels = FavoriteStore.getFavoriteChannels();
  items = [];
  for (const key10013 in favoriteChannels) {
    if (items.length >= tmp) {
      break;
    } else {
      let tmp11 = favoriteChannels[key10013];
      if (tmp11.type !== preloaded_user_settings.FavoriteChannelType.REFERENCE_ORIGINAL) {
        continue;
      } else {
        if (null == tmp11.channelType) {
          continue;
        } else {
          if (!set.has(tmp11.channelType)) {
            continue;
          } else {
            if (null != ChannelStore.getChannel(key10013)) {
              continue;
            } else {
              let obj = LazyLoadedThreadManagerDefault;
              let loadState = obj.getLoadState(key10013);
              let tmp7 = "NOT_FOUND" !== loadState;
              if (tmp7) {
                let tmp8 = includeLoading;
                if (!includeLoading) {
                  tmp8 = "LOADING" !== loadState;
                }
                tmp7 = tmp8;
              }
              if (!tmp7) {
                continue;
              } else {
                let arr = items.push(key10013);
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  return items;
}
function computeFavoritesState(favoriteChannels, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.withSuggestionsNotice;
  if (flag === undefined) {
    flag = false;
  }
  favoriteChannels = undefined;
  dependencyMap = undefined;
  let channel2;
  let voiceChannelId;
  items = undefined;
  let obj3;
  c7 = undefined;
  let obj4;
  let found1;
  closure_10 = undefined;
  let items2;
  ChannelStore = undefined;
  if (favoriteChannels == null) {
    favoriteChannels = FavoriteStore.getFavoriteChannels();
  }
  new Set(favoriteChannels(10972).getAutoAddedThreadsCategoryIds(favoriteChannels));
  const isGuildCollapsedResult = UserGuildSettingsStore.isGuildCollapsed(id);
  dependencyMap = isGuildCollapsedResult;
  channel2 = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
  voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  items = [];
  obj3 = {};
  for (const key10036 in favoriteChannels) {
    let tmp21 = favoriteChannels[key10036];
    let channel = ChannelStore.getChannel(tmp21.id);
    if (null == channel) {
      continue;
    } else {
      let tmp5 = favoriteChannels;
      if (tmp21.type === favoriteChannels(1196).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp8 = closure_19(favoriteChannels, tmp21, channel);
        if (null != tmp21.parentId) {
          if (null != favoriteChannels[tmp21.parentId]) {
            if (favoriteChannels[tmp21.parentId].type === tmp5(1196).FavoriteChannelType.CATEGORY) {
              let parentId = tmp21.parentId;
              if (!(parentId in obj3)) {
                obj3[parentId] = [];
              }
              let arr2 = obj3[parentId];
              let arr = arr2.push(tmp8);
              continue;
            }
          }
        }
        let arr3 = items.push(tmp8);
        continue;
      }
      continue;
    }
    continue;
  }
  c7 = null;
  obj4 = {
    isMuted: false,
    isCollapsed: false,
    position: 0,
    getChannelRecords() {
      return items;
    },
    getShownChannelIds() {
      return items.map((id) => id.id);
    },
    getShownChannelAndThreadIds() {
      return items.map((id) => id.id);
    },
    isEmpty() {
      return 0 === items.length;
    }
  };
  Object.defineProperty(obj4, "channelList", {
    get: function() {
      if (null == closure_7) {
        const self = this;
        ({ isCollapsed: set, isMuted: c2 } = this);
        const mapped = set(_undefined[24])(items).map((isPrivate) => {
          if (!isPrivate.isPrivate()) {
            if (!PermissionStore.can(constants.VIEW_CHANNEL, isPrivate)) {
              return null;
            }
          }
          let tmp4 = null != thread;
          if (tmp4) {
            let tmp5 = thread.id === isPrivate.id;
            if (!tmp5) {
              tmp5 = closure_2_4 === isPrivate.id;
            }
            tmp4 = tmp5;
          }
          const tmp7 = null != thread && thread.isThread() && thread.parent_id === isPrivate.id;
          if (!tmp4) {
            if (!tmp7) {
              if (closure_1_1) {
                let activeJoinedUnreadThreadsForParent = obj3.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
              }
              if (activeJoinedUnreadThreadsForParent == null) {
                activeJoinedUnreadThreadsForParent = {};
              }
              obj3 = favoriteChannels(dependencyMap[21]);
              const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, thread, closure_2_4, closure_2_2);
              const isCollapsedResult = collapsed.isCollapsed(isPrivate.id);
              if (isPrivate.isThread()) {
                let isMutedResult = muted.isMuted(isPrivate.id);
              } else {
                isMutedResult = UserGuildSettingsStore.isChannelMuted(isPrivate.guild_id, isPrivate.id);
              }
              const obj2 = { id: isPrivate.id, record: isPrivate, category: self, position: items[isPrivate.id].order, threadIds, threadCount: set(dependencyMap[24]).size(threadIds), isCollapsed: isCollapsedResult, isMuted: isMutedResult, isFirstVoiceChannel: false, subtitle: null };
              const obj5 = set(dependencyMap[24]);
              obj2.subtitle = favoriteChannels(dependencyMap[21]).computeSubtitle(isPrivate, isCollapsedResult, false);
              if (!tmp4) {
                if (!tmp7) {
                  if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                    if (mentionCount.getMentionCount(isPrivate.id) <= 0) {
                      if (closure_2_2) {
                        if (isMutedResult) {
                          return null;
                        }
                      }
                      if (closure_1_1) {
                        if (!isMutedResult) {
                          if (!closure_1_2) {
                            if (!closure_10(isPrivate.type)) {
                              if (found1(isPrivate.type)) {
                                if (false === mentionCount.hasUnread(isPrivate.id)) {
                                  return null;
                                }
                              }
                            }
                          }
                        }
                        return null;
                      }
                      return obj2;
                    }
                  }
                  tmp28Result = set(dependencyMap[24]);
                }
              }
              return obj2;
            }
          }
          activeJoinedUnreadThreadsForParent = obj3.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
        });
        const found = mapped.filter(favoriteChannels(_undefined[26]).isNotNullish);
        const arr = set(_undefined[24])(items);
        closure_7 = found.sortBy((arg0) => {
          ({ record, position } = arg0);
          if (record.isGuildVocal()) {
            let sum = position + 10000;
          } else {
            sum = position;
          }
          return sum;
        }).value();
        const iter = found.sortBy((arg0) => {
          ({ record, position } = arg0);
          if (record.isGuildVocal()) {
            let sum = position + 10000;
          } else {
            sum = position;
          }
          return sum;
        });
      }
      return closure_7;
    },
    set: undefined
  });
  let obj2 = favoriteChannels(10972);
  const favoritesCategories = favoriteChannels(10960).getFavoritesCategories(favoriteChannels);
  let found = favoritesCategories.filter((id) => null != id.id);
  let mapped = found.map((id) => {
    id = id.id;
    items = undefined;
    closure_1 = undefined;
    categoryRecord = categoryRecord.getCategoryRecord(id);
    if (null == categoryRecord) {
      return null;
    } else {
      items = obj3[id];
      if (items == null) {
        items = [];
      }
      closure_1 = null;
      const obj = { isMuted: UserGuildSettingsStore.isChannelMuted(closure_1_20, id), isCollapsed: items2.isCollapsed(id), record: categoryRecord, id, position: null, getChannelRecords: null, getShownChannelIds: null, getShownChannelAndThreadIds: null, isEmpty: null };
      let num;
      if (items[id] != null) {
        num = tmp7.order;
      }
      if (num == null) {
        num = 0;
      }
      obj.position = num;
      obj.getChannelRecords = function getChannelRecords() {
        return items;
      };
      obj.getShownChannelIds = function getShownChannelIds() {
        return items.map((id) => id.id);
      };
      obj.getShownChannelAndThreadIds = function getShownChannelAndThreadIds() {
        return items.map((id) => id.id);
      };
      obj.isEmpty = function isEmpty() {
        return 0 === items.length;
      };
      Object.defineProperty(obj, "channelList", {
        get: function() {
            if (null == closure_1) {
              const self = this;
              ({ isCollapsed: closure_1, isMuted: closure_2 } = this);
              const mapped = closure_1(12)(items).map((isPrivate) => {
                if (!isPrivate.isPrivate()) {
                  if (!PermissionStore.can(constants.VIEW_CHANNEL, isPrivate)) {
                    return null;
                  }
                }
                let tmp4 = null != thread;
                if (tmp4) {
                  let tmp5 = thread.id === isPrivate.id;
                  if (!tmp5) {
                    tmp5 = closure_2_4 === isPrivate.id;
                  }
                  tmp4 = tmp5;
                }
                const tmp7 = null != thread && thread.isThread() && thread.parent_id === isPrivate.id;
                if (!tmp4) {
                  if (!tmp7) {
                    if (closure_1_1) {
                      let activeJoinedUnreadThreadsForParent = obj3.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
                    }
                    if (activeJoinedUnreadThreadsForParent == null) {
                      activeJoinedUnreadThreadsForParent = {};
                    }
                    obj3 = favoriteChannels(dependencyMap[21]);
                    const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, thread, closure_2_4, closure_2_2);
                    const isCollapsedResult = collapsed.isCollapsed(isPrivate.id);
                    if (isPrivate.isThread()) {
                      let isMutedResult = muted.isMuted(isPrivate.id);
                    } else {
                      isMutedResult = UserGuildSettingsStore.isChannelMuted(isPrivate.guild_id, isPrivate.id);
                    }
                    const obj2 = { id: isPrivate.id, record: isPrivate, category: self, position: items[isPrivate.id].order, threadIds, threadCount: set(dependencyMap[24]).size(threadIds), isCollapsed: isCollapsedResult, isMuted: isMutedResult, isFirstVoiceChannel: false, subtitle: null };
                    const obj5 = set(dependencyMap[24]);
                    obj2.subtitle = favoriteChannels(dependencyMap[21]).computeSubtitle(isPrivate, isCollapsedResult, false);
                    if (!tmp4) {
                      if (!tmp7) {
                        if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                          if (mentionCount.getMentionCount(isPrivate.id) <= 0) {
                            if (closure_2_2) {
                              if (isMutedResult) {
                                return null;
                              }
                            }
                            if (closure_1_1) {
                              if (!isMutedResult) {
                                if (!closure_1_2) {
                                  if (!closure_10(isPrivate.type)) {
                                    if (found1(isPrivate.type)) {
                                      if (false === mentionCount.hasUnread(isPrivate.id)) {
                                        return null;
                                      }
                                    }
                                  }
                                }
                              }
                              return null;
                            }
                            return obj2;
                          }
                        }
                        tmp28Result = set(dependencyMap[24]);
                      }
                    }
                    return obj2;
                  }
                }
                activeJoinedUnreadThreadsForParent = obj3.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
              });
              const found = mapped.filter(items(1380).isNotNullish);
              const arr = closure_1(12)(items);
              closure_1 = found.sortBy((arg0) => {
                ({ record, position } = arg0);
                if (record.isGuildVocal()) {
                  let sum = position + 10000;
                } else {
                  sum = position;
                }
                return sum;
              }).value();
              const iter = found.sortBy((arg0) => {
                ({ record, position } = arg0);
                if (record.isGuildVocal()) {
                  let sum = position + 10000;
                } else {
                  sum = position;
                }
                return sum;
              });
            }
            return closure_1;
          },
        set: undefined
      });
      return obj;
    }
  });
  found1 = mapped.filter((item) => null != item);
  let num = 0;
  let items1 = [obj4, ...found1];
  for (const item10095 of items1) {
    let sum = num + 1;
    num = sum;
    item10095.position = sum;
    let channelList = item10095.channelList;
    for (const item10103 of channelList) {
      let sum1 = num + 1;
      num = sum1;
      item10103.position = sum1;
      continue;
    }
    continue;
  }
  closure_10 = {
    isEmpty() {
      return true;
    },
    getRows() {
      return [];
    },
    getRow() {
      return null;
    }
  };
  items2 = [];
  if (flag) {
    items2.push(constants.FAVORITES_SUGGESTIONS);
  }
  ChannelStore = {
    isEmpty() {
      return 0 === items2.length;
    },
    getRows() {
      return items2;
    },
    getRow(arg0) {
      let tmp = items2[arg0];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    }
  };
  return {
    id,
    hideMutedChannels: isGuildCollapsedResult,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: -999,
    getSections() {
      let length;
      items = [];
      items[ChannelListState.SECTION_INDEX_CHANNEL_NOTICES] = items2.length;
      let num = 0;
      items[ChannelListState.SECTION_INDEX_GUILD_ACTIONS] = 0;
      items[ChannelListState.SECTION_INDEX_FAVORITES] = 0;
      items[ChannelListState.SECTION_INDEX_RECENTS] = 0;
      items[ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS] = obj4.channelList.length;
      if (0 < found1.length) {
        do {
          let _Math = Math;
          let sum = ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY + num;
          items[sum] = Math.max(1, found1[num].channelList.length);
          num = num + 1;
          length = found1.length;
        } while (num < length);
      }
      return items;
    },
    isPlaceholderRow(arg0, arg1) {
      let tmp3 = arg0 < ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY;
      if (!tmp3) {
        tmp3 = 0 !== arg1;
      }
      let tmp5 = !tmp3;
      if (!tmp3) {
        tmp5 = 0 === found1[arg0 - ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY].channelList.length;
      }
      return tmp5;
    },
    getCategoryFromSection(arg0) {
      if (arg0 === ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS) {
        let tmp4 = obj4;
      } else {
        tmp4 = found1[arg0 - ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY];
      }
      return tmp4;
    },
    getNamedCategoryFromSection(arg0) {
      return found1[arg0 - ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY];
    },
    getChannelFromSectionRow(arg0, arg1) {
      const categoryFromSection = this.getCategoryFromSection(arg0);
      let tmp2 = null;
      if (null != categoryFromSection) {
        tmp2 = null;
        if (null != categoryFromSection.channelList[arg1]) {
          const obj = { category: categoryFromSection, channel: categoryFromSection.channelList[arg1] };
          tmp2 = obj;
        }
      }
      return tmp2;
    },
    getGuildActionSection() {
      return closure_10;
    },
    getChannelNoticeSection() {
      return closure_12;
    },
    getFirstVoiceChannel() {
      return null;
    },
    getSectionRowsFromChannel(arg0) {
      if (null == arg0) {
        return [];
      } else {
        items = [];
        const items1 = [];
        items2 = [];
        const items3 = [obj4];
        HermesBuiltin.arraySpread(found1, 1);
        for (let num2 = 0; num2 < items3.length; num2 = num2 + 1) {
          let tmp = items3[num2];
          let tmp3 = null;
          if (0 < num2) {
            tmp3 = found1[num2 - 1];
          }
          let hasItem = null != tmp3;
          if (hasItem) {
            hasItem = set.has(tmp3.id);
          }
          let sum = num2 + ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
          for (let num = 0; num < tmp.channelList.length; num = num + 1) {
            let tmp10 = tmp.channelList[num];
            if (tmp10.id !== arg0) {
              let threadIds = tmp10.threadIds;
              let index = threadIds.indexOf(arg0);
              if (index >= 0) {
                let obj2 = { section: sum, row: num, threadOffset: index };
                let arr2 = items1.push(obj2);
              }
            } else {
              let arr = items;
              if (hasItem) {
                arr = items2;
              }
              let obj = { section: sum, row: num };
              let arr3 = arr.push(obj);
            }
          }
        }
        const items4 = [];
        HermesBuiltin.arraySpread(items2, HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(items, 0)));
        return items4;
      }
    },
    forEachShownChannel(fn) {
      items = [obj4, ...found1];
      const iter = items[Symbol.iterator]();
      while (iter !== undefined) {
        let channelList = iter.next().channelList;
        for (const item10019 of channelList) {
          let tmp3 = arg0(item10019.record);
          let threadIds = item10019.threadIds;
          for (const item10027 of threadIds) {
            let channel = ChannelStore.getChannel(item10027);
            if (null != channel) {
              let tmp10 = arg0(tmp8);
            }
            continue;
          }
          continue;
        }
        continue;
      }
    },
    forEachChannel(fn) {
      items = [obj4, ...found1];
      for (const item10011 of items) {
        let channelRecords = item10011.getChannelRecords();
        for (const item10018 of channelRecords) {
          let tmp4 = arg0(item10018);
          continue;
        }
        continue;
      }
    },
    getSlicedChannels(arg0) {
      items = [[], arg0, []];
      return items;
    },
    getChannels() {
      return [];
    }
  };
}
const ChannelRecord = fn(4995);
({ THREAD_CHANNEL_TYPES: closure_8, isGuildReadableType: closure_9, isVoiceChannel: closure_10 } = ChannelRecord);
let closure_19 = fn(5073).createFavoritesGuildChannelRecord;
const FavoritesConstants = fn(5004);
({ FAVORITES_RAW_GUILD_ID: closure_20, MAX_FAVORITE_CHANNELS: closure_21 } = FavoritesConstants);
const constants = fn(7792).ChannelListChannelNoticeRow;
const Permissions = fn(1083).Permissions;
let items = [EmbeddedActivitiesStore, FavoriteStore, GatewayConnectionStore, GuildStore, GuildScheduledEventStore, ActiveJoinedThreadsStore, JoinedThreadsStore, CategoryCollapseStore, ChannelStore, PermissionStore, ReadStateStore, SelectedChannelStore, UserGuildSettingsStore];
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildChannelList.tsx");

export function useFavoritesGuildChannelList(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.withSuggestionsNotice;
  if (flag === undefined) {
    flag = false;
  }
  c1 = undefined;
  [obj2, c1] = noop.useState(() => computeFavoritesState(undefined, { withSuggestionsNotice }));
  const isConnectedResult = GatewayConnectionStore.isConnected();
  dependencyMap = isConnectedResult;
  items = [flag];
  const effect = noop.useEffect(() => {
    _undefined(computeFavoritesState(undefined, { withSuggestionsNotice }));
    withSuggestionsNotice = _undefined(_undefined2[24]).throttle(function recompute() {
      _undefined(computeFavoritesState(undefined, { withSuggestionsNotice }));
    }, 100);
    let item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_0));
    return () => {
      withSuggestionsNotice.cancel();
      const item = items.forEach((removeChangeListener) => removeChangeListener.removeChangeListener(withSuggestionsNotice));
    };
  }, items);
  const items1 = [isConnectedResult];
  const effect1 = noop.useEffect(() => {
    if (c2) {
      const obj = { limit, includeLoading: false };
      const arr = getMissingFavoriteThreadIds(obj);
      if (0 === arr.length) {
        const resolved = Promise.resolve();
      } else {
        const threadsBulk = LazyLoadedThreadManagerDefault.loadThreadsBulk(arr);
      }
    }
  }, items1);
  _require = undefined;
  const tmp = _slicedToArray(noop.useState(() => computeFavoritesState(undefined, { withSuggestionsNotice })), 2);
  let flag2 = false;
  if (obj2.getSections().length <= require("ChannelListState").SECTION_INDEX_FIRST_NAMED_CATEGORY) {
    _require = false;
    obj2.forEachShownChannel(() => {
      c0 = true;
    });
    flag2 = !_require;
  }
  const obj3 = { guildChannels: obj2, shouldShowEmptyState: null, hasNoChannels: null };
  let tmp8 = flag2;
  if (flag2) {
    tmp8 = !tmp5;
  }
  obj3.shouldShowEmptyState = tmp8;
  obj3.hasNoChannels = flag2;
  return obj3;
}
export { computeFavoritesState };