// === Module 16272: FavoritesGuildChannelList ===

// Module 16272 (FavoritesGuildChannelList)
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7314 */;
import ChannelListState from "ChannelListState" /* 7528 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5506 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7117 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7527 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

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
  c1 = undefined;
  dependencyMap = undefined;
  let voiceChannelId;
  items = undefined;
  c6 = undefined;
  obj = undefined;
  let found1;
  closure_9 = undefined;
  let items2;
  let collapsed;
  if (favoriteChannels == null) {
    favoriteChannels = FavoriteStore.getFavoriteChannels();
  }
  const isGuildCollapsedResult = UserGuildSettingsStore.isGuildCollapsed(id);
  c1 = isGuildCollapsedResult;
  dependencyMap = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
  voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  items = [];
  obj = {};
  for (const key10024 in favoriteChannels) {
    let tmp20 = favoriteChannels[key10024];
    let channel = ChannelStore.getChannel(tmp20.id);
    if (null == channel) {
      continue;
    } else {
      let tmp4 = favoriteChannels;
      if (tmp20.type === favoriteChannels(1187).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp7 = closure_19(favoriteChannels, tmp20, channel);
        if (null != tmp20.parentId) {
          if (null != favoriteChannels[tmp20.parentId]) {
            if (favoriteChannels[tmp20.parentId].type === tmp4(1187).FavoriteChannelType.CATEGORY) {
              let parentId = tmp20.parentId;
              if (!(parentId in obj)) {
                obj[parentId] = [];
              }
              let arr1 = obj[parentId];
              let arr = arr1.push(tmp7);
              continue;
            }
          }
        }
        arr = items.push(tmp7);
        continue;
      }
      continue;
    }
    continue;
  }
  c6 = null;
  obj = {
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
  Object.defineProperty(obj, "channelList", {
    get: function() {
      if (null == closure_6) {
        const self = this;
        ({ isCollapsed: c1, isMuted: closure_2 } = this);
        const mapped = _undefined(12)(items).map((isPrivate) => {
          if (!isPrivate.isPrivate()) {
            if (!PermissionStore.can(constants.VIEW_CHANNEL, isPrivate)) {
              return null;
            }
          }
          obj = closure_2_2;
          let tmp4 = null != closure_2_2;
          if (tmp4) {
            let tmp5 = obj.id === isPrivate.id;
            if (!tmp5) {
              tmp5 = closure_2_3 === isPrivate.id;
            }
            tmp4 = tmp5;
          }
          const tmp7 = null != obj && obj.isThread() && obj.parent_id === isPrivate.id;
          if (!tmp4) {
            if (!tmp7) {
              if (closure_1_1) {
                let activeJoinedUnreadThreadsForParent = c6.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
              }
              if (activeJoinedUnreadThreadsForParent == null) {
                activeJoinedUnreadThreadsForParent = {};
              }
              const obj3 = favoriteChannels(dependencyMap[20]);
              const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, obj, closure_2_3, closure_1);
              const isCollapsedResult = collapsed2.isCollapsed(isPrivate.id);
              if (isPrivate.isThread()) {
                let isMutedResult = obj.isMuted(isPrivate.id);
              } else {
                isMutedResult = UserGuildSettingsStore.isChannelMuted(isPrivate.guild_id, isPrivate.id);
              }
              obj = { id: isPrivate.id, record: isPrivate, category: self, position: items[isPrivate.id].order, threadIds, threadCount: c1(dependencyMap[24]).size(threadIds), isCollapsed: isCollapsedResult, isMuted: isMutedResult, isFirstVoiceChannel: false, subtitle: null };
              const obj5 = c1(dependencyMap[24]);
              const tmp13 = closure_1;
              const tmp28 = c1;
              obj.subtitle = favoriteChannels(dependencyMap[20]).computeSubtitle(isPrivate, isCollapsedResult, false);
              if (!tmp4) {
                if (!tmp7) {
                  if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                    if (mentionCount.getMentionCount(isPrivate.id) <= 0) {
                      if (tmp13) {
                        if (isMutedResult) {
                          return null;
                        }
                      }
                      if (closure_1_1) {
                        if (!isMutedResult) {
                          if (!closure_1_2) {
                            if (!items2(isPrivate.type)) {
                              if (closure_9(isPrivate.type)) {
                                if (false === obj8.hasUnread(isPrivate.id)) {
                                  return null;
                                }
                              }
                            }
                          }
                        }
                        return null;
                      }
                      return obj;
                    }
                    obj8 = mentionCount;
                  }
                  tmp28Result = tmp28(tmp11[24]);
                }
              }
              return obj;
            }
          }
          activeJoinedUnreadThreadsForParent = c6.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
        });
        const found = mapped.filter(favoriteChannels(1369).isNotNullish);
        const arr = _undefined(12)(items);
        closure_6 = found.sortBy((arg0) => {
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
      return closure_6;
    },
    set: undefined
  });
  const favoritesCategories = favoriteChannels(10224).getFavoritesCategories(favoriteChannels);
  let found = favoritesCategories.filter((id) => null != id.id);
  let mapped = found.map((id) => {
    id = id.id;
    items = undefined;
    closure_1 = undefined;
    categoryRecord = categoryRecord.getCategoryRecord(id);
    if (null == categoryRecord) {
      return null;
    } else {
      items = obj[id];
      if (items == null) {
        items = [];
      }
      closure_1 = null;
      obj = { isMuted: UserGuildSettingsStore.isChannelMuted(closure_1_20, id), isCollapsed: collapsed.isCollapsed(id), record: categoryRecord, id, position: null, getChannelRecords: null, getShownChannelIds: null, getShownChannelAndThreadIds: null, isEmpty: null };
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
                obj = closure_2_2;
                let tmp4 = null != closure_2_2;
                if (tmp4) {
                  let tmp5 = obj.id === isPrivate.id;
                  if (!tmp5) {
                    tmp5 = closure_2_3 === isPrivate.id;
                  }
                  tmp4 = tmp5;
                }
                const tmp7 = null != obj && obj.isThread() && obj.parent_id === isPrivate.id;
                if (!tmp4) {
                  if (!tmp7) {
                    if (closure_1_1) {
                      let activeJoinedUnreadThreadsForParent = c6.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
                    }
                    if (activeJoinedUnreadThreadsForParent == null) {
                      activeJoinedUnreadThreadsForParent = {};
                    }
                    const obj3 = favoriteChannels(dependencyMap[20]);
                    const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, obj, closure_2_3, closure_1);
                    const isCollapsedResult = collapsed2.isCollapsed(isPrivate.id);
                    if (isPrivate.isThread()) {
                      let isMutedResult = obj.isMuted(isPrivate.id);
                    } else {
                      isMutedResult = UserGuildSettingsStore.isChannelMuted(isPrivate.guild_id, isPrivate.id);
                    }
                    obj = { id: isPrivate.id, record: isPrivate, category: self, position: items[isPrivate.id].order, threadIds, threadCount: c1(dependencyMap[24]).size(threadIds), isCollapsed: isCollapsedResult, isMuted: isMutedResult, isFirstVoiceChannel: false, subtitle: null };
                    const obj5 = c1(dependencyMap[24]);
                    const tmp13 = closure_1;
                    const tmp28 = c1;
                    obj.subtitle = favoriteChannels(dependencyMap[20]).computeSubtitle(isPrivate, isCollapsedResult, false);
                    if (!tmp4) {
                      if (!tmp7) {
                        if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                          if (mentionCount.getMentionCount(isPrivate.id) <= 0) {
                            if (tmp13) {
                              if (isMutedResult) {
                                return null;
                              }
                            }
                            if (closure_1_1) {
                              if (!isMutedResult) {
                                if (!closure_1_2) {
                                  if (!items2(isPrivate.type)) {
                                    if (closure_9(isPrivate.type)) {
                                      if (false === obj8.hasUnread(isPrivate.id)) {
                                        return null;
                                      }
                                    }
                                  }
                                }
                              }
                              return null;
                            }
                            return obj;
                          }
                          obj8 = mentionCount;
                        }
                        tmp28Result = tmp28(tmp11[24]);
                      }
                    }
                    return obj;
                  }
                }
                activeJoinedUnreadThreadsForParent = c6.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
              });
              const found = mapped.filter(items(1369).isNotNullish);
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
  let items1 = [obj, ...found1];
  for (const item10083 of items1) {
    let sum = num + 1;
    num = sum;
    item10083.position = sum;
    let channelList = item10083.channelList;
    for (const item10091 of channelList) {
      let sum1 = num + 1;
      num = sum1;
      item10091.position = sum1;
      continue;
    }
    continue;
  }
  closure_9 = {
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
    arr1 = items2.push(constants.FAVORITES_SUGGESTIONS);
  }
  collapsed = {
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
      items[ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS] = obj.channelList.length;
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
        tmp5 = 0 === found1[arg0 - tmp(undefined, 7528).SECTION_INDEX_FIRST_NAMED_CATEGORY].channelList.length;
      }
      return tmp5;
    },
    getCategoryFromSection(arg0) {
      if (arg0 === ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS) {
        let tmp4 = obj;
      } else {
        tmp4 = found1[arg0 - tmp(undefined, 7528).SECTION_INDEX_FIRST_NAMED_CATEGORY];
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
          obj = { category: categoryFromSection, channel: categoryFromSection.channelList[arg1] };
          tmp2 = obj;
        }
      }
      return tmp2;
    },
    getGuildActionSection() {
      return closure_9;
    },
    getChannelNoticeSection() {
      return closure_11;
    },
    getFirstVoiceChannel() {
      return null;
    },
    getSectionRowsFromChannel(arg0) {
      items = [obj, ...found1];
      let num = 0;
      if (0 < items.length) {
        while (true) {
          let num2 = 0;
          if (0 < items[num].channelList.length) {
            while (items[num].channelList[num2].id !== arg0) {
              num2 = num2 + 1;
              continue;
            }
            obj = { section: null, row: null };
            obj.section = num + ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            obj.row = num2;
            let items1 = [obj];
            return items1;
          }
          num = num + 1;
        }
      }
      return [];
    },
    forEachShownChannel(fn) {
      items = [obj, ...found1];
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
      items = [obj, ...found1];
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
const ChannelRecord = fn(1961);
({ THREAD_CHANNEL_TYPES: closure_8, isGuildReadableType: closure_9, isVoiceChannel: c10 } = ChannelRecord);
let closure_19 = fn(4198).createFavoritesGuildChannelRecord;
const FavoritesConstants = fn(1970);
({ FAVORITES_RAW_GUILD_ID: closure_20, MAX_FAVORITE_CHANNELS: closure_21 } = FavoritesConstants);
const constants = fn(7534).ChannelListChannelNoticeRow;
const Permissions = fn(1085).Permissions;
let items = [EmbeddedActivitiesStore, FavoriteStore, GatewayConnectionStore, GuildScheduledEventStore, ActiveJoinedThreadsStore, JoinedThreadsStore, CategoryCollapseStore, ChannelStore, PermissionStore, ReadStateStore, SelectedChannelStore, UserGuildSettingsStore];
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildChannelList.tsx");

export const useFavoritesGuildChannelList = function useFavoritesGuildChannelList(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.withSuggestionsNotice;
  if (flag === undefined) {
    flag = false;
  }
  _require = flag;
  _slicedToArray = undefined;
  let hasAccess = require("FavoritesHooks").useFavoritesAccess("FavoritesGuildChannelList").hasAccess;
  const tmp3 = _slicedToArray(noop.useState(() => computeFavoritesState(undefined, { withSuggestionsNotice })), 2);
  dependencyMap = tmp3[1];
  const isConnectedResult = GatewayConnectionStore.isConnected();
  _slicedToArray = isConnectedResult;
  let memo = noop.useMemo(() => computeFavoritesState({}), []);
  items = [flag];
  const effect = noop.useEffect(() => {
    dependencyMap(computeFavoritesState(undefined, { withSuggestionsNotice }));
    withSuggestionsNotice = hasAccess(12).throttle(function recompute() {
      dependencyMap(computeFavoritesState(undefined, { withSuggestionsNotice }));
    }, 100);
    let item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_0));
    return () => {
      withSuggestionsNotice.cancel();
      const item = items.forEach((removeChangeListener) => removeChangeListener.removeChangeListener(withSuggestionsNotice));
    };
  }, items);
  const items1 = [hasAccess, isConnectedResult];
  const effect1 = noop.useEffect(() => {
    let tmp = hasAccess;
    if (hasAccess) {
      tmp = c3;
    }
    if (tmp) {
      const obj = { limit, includeLoading: false };
      const arr = getMissingFavoriteThreadIds(obj);
      if (0 === arr.length) {
        const resolved = Promise.resolve();
      } else {
        const threadsBulk = LazyLoadedThreadManagerDefault.loadThreadsBulk(arr);
      }
    }
  }, items1);
  if (hasAccess) {
    memo = tmp3[0];
  }
  if (hasAccess) {
    hasAccess = getMissingFavoriteThreadIds({ limit: 1, includeLoading: true }).length > 0;
  }
  let flag2 = false;
  if (memo.getSections().length <= require("ChannelListState").SECTION_INDEX_FIRST_NAMED_CATEGORY) {
    _require = false;
    memo.forEachShownChannel(() => {
      c0 = true;
    });
    flag2 = !_require;
  }
  obj = { guildChannels: memo, shouldShowEmptyState: null, hasNoChannels: null };
  let tmp10 = flag2;
  if (flag2) {
    tmp10 = !hasAccess;
  }
  obj.shouldShowEmptyState = tmp10;
  obj.hasNoChannels = flag2;
  return obj;
};
export { computeFavoritesState };