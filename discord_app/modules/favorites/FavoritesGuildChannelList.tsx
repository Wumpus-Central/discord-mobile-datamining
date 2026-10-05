// === Module 16212: FavoritesGuildChannelList ===

// Module 16212 (FavoritesGuildChannelList)
import Constants from "Constants" /* 1096 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import createFavoritesGuildChannelRecord from "createFavoritesGuildChannelRecord" /* 4508 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 6817 */;
import ChannelListState from "ChannelListState" /* 7039 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 7045 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5691 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 6612 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7038 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import FavoritesConstants from "FavoritesConstants" /* 2065 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, categoryRecord, closure_6, dependencyMap, id, limit;

let c10;
let c9;
let closure_20;
let closure_21;
let metroImportAll;
const f123424 = () => {
  c0 = true;
};
function getMissingFavoriteThreadIds(includeLoading) {
  includeLoading = includeLoading.includeLoading;
  limit = includeLoading.limit;
  const favoriteChannels = FavoriteStore.getFavoriteChannels();
  items = [];
  for (const key10013 in favoriteChannels) {
    if (items.length >= limit) {
      break;
    } else {
      let tmp10 = favoriteChannels[key10013];
      if (tmp10.type !== preloaded_user_settings.FavoriteChannelType.REFERENCE_ORIGINAL) {
        continue;
      } else {
        if (null == tmp10.channelType) {
          continue;
        } else {
          if (!metroImportAll.has(tmp10.channelType)) {
            continue;
          } else {
            if (null != ChannelStore.getChannel(key10013)) {
              continue;
            } else {
              let obj = LazyLoadedThreadManagerDefault;
              let loadState = obj.getLoadState(key10013);
              let tmp6 = "NOT_FOUND" !== loadState;
              if (tmp6) {
                let tmp7 = includeLoading || "LOADING" !== loadState;
                tmp6 = tmp7;
              }
              if (!tmp6) {
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
  let _undefined;
  let channelMuted;
  let closure_2;
  let closure_3;
  const f145640 = (arg0) => {
    let position;
    let record;
    let sum;
    ({ record, position } = arg0);
    if (record.isGuildVocal()) {
      sum = position + 10000;
    } else {
      sum = position;
    }
    return sum;
  };
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.withSuggestionsNotice;
  if (flag === undefined) {
    flag = false;
  }
  favoriteChannels = undefined;
  let c1;
  dependencyMap = undefined;
  let voiceChannelId;
  items = undefined;
  let obj2;
  let c6;
  let obj3;
  let found1;
  let closure_9;
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
  obj2 = {};
  for (const key10024 in favoriteChannels) {
    let tmp20 = favoriteChannels[key10024];
    let channel = ChannelStore.getChannel(tmp20.id);
    if (null == channel) {
      continue;
    } else {
      let tmp4 = favoriteChannels;
      let tmp5 = dependencyMap;
      if (tmp20.type === favoriteChannels(1197).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp7 = closure_19(favoriteChannels, tmp20, channel);
        if (null != tmp20.parentId) {
          if (null != favoriteChannels[tmp20.parentId]) {
            if (favoriteChannels[tmp20.parentId].type === tmp4(1197).FavoriteChannelType.CATEGORY) {
              let parentId = tmp20.parentId;
              if (!(parentId in obj2)) {
                obj2[parentId] = [];
              }
              let arr2 = obj2[parentId];
              let arr = arr2.push(tmp7);
              continue;
            }
          }
        }
        let arr3 = items.push(tmp7);
        continue;
      }
      continue;
    }
    continue;
  }
  c6 = null;
  obj3 = {
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
  Object.defineProperty(obj3, "channelList", {
    get: function() {
      let c1;
      if (null == closure_6) {
        const self = this;
        ({ isCollapsed: c1, isMuted: closure_2 } = this);
        const arr = _undefined(closure_2[26])(items);
        const mapped = arr.map((isPrivate) => {
          let obj5;
          let tmp10Result;
          if (!isPrivate.isPrivate()) {
            if (!closure_3_14.can(constants.VIEW_CHANNEL, isPrivate)) {
              return null;
            }
          }
          let tmp4 = null != thread;
          if (tmp4) {
            tmp4 = thread.id === isPrivate.id || closure_2_3 === isPrivate.id;
            const tmp5 = thread.id === isPrivate.id || closure_2_3 === isPrivate.id;
          }
          const tmp7 = null != thread && thread.isThread() && thread.parent_id === isPrivate.id;
          if (!tmp4) {
            if (!tmp7) {
              let activeJoinedUnreadThreadsForParent;
              let isMutedResult;
              if (closure_1_1) {
                activeJoinedUnreadThreadsForParent = closure_3_6.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
              }
              if (activeJoinedUnreadThreadsForParent == null) {
                activeJoinedUnreadThreadsForParent = {};
              }
              obj3 = items(closure_3_2[20]);
              const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, thread, closure_2_3, closure_2_1);
              const isCollapsedResult = collapsed.isCollapsed(isPrivate.id);
              if (isPrivate.isThread()) {
                isMutedResult = muted.isMuted(isPrivate.id);
              } else {
                isMutedResult = channelMuted.isChannelMuted(isPrivate.guild_id, isPrivate.id);
              }
              obj2 = { id: isPrivate.id, record: isPrivate, category: self, position: closure_2_0[isPrivate.id].order, threadIds, threadCount: obj5.size(threadIds), isCollapsed: isCollapsedResult, isMuted: isMutedResult, isFirstVoiceChannel: false, subtitle: tmp10Result.computeSubtitle(isPrivate, isCollapsedResult, false) };
              obj5 = closure_1(closure_3_2[26]);
              tmp10Result = items(closure_3_2[20]);
              if (!tmp4) {
                if (!tmp7) {
                  const tmp28Result = closure_1(closure_3_2[26]);
                  if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                    if (mentionCount.getMentionCount(isPrivate.id) <= 0) {
                      if (closure_2_1) {
                        if (isMutedResult) {
                          return null;
                        }
                      }
                      if (closure_1_1) {
                        if (!isMutedResult) {
                          if (!closure_1_2) {
                            if (!items2(isPrivate.type)) {
                              if (closure_3_9(isPrivate.type)) {
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
                }
              }
              return obj2;
            }
          }
          activeJoinedUnreadThreadsForParent = closure_3_6.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
        });
        const found = mapped.filter(favoriteChannels(closure_2[27]).isNotNullish);
        const iter = found.sortBy(f145640);
        closure_6 = iter.value();
      }
      return closure_6;
    },
    set: undefined
  });
  const obj4 = favoriteChannels(10036);
  const favoritesCategories = obj4.getFavoritesCategories(favoriteChannels);
  let found = favoritesCategories.filter((id) => null != id.id);
  let mapped = found.map((id) => {
    let mentionCount;
    let muted;
    let num;
    id = id.id;
    items = undefined;
    let closure_1;
    categoryRecord = categoryRecord.getCategoryRecord(id);
    if (null == categoryRecord) {
      return null;
    } else {
      items = obj2[id];
      if (items == null) {
        items = [];
      }
      closure_1 = null;
      const obj = {
        isMuted: channelMuted.isChannelMuted(closure_1_20, id),
        isCollapsed: collapsed.isCollapsed(id),
        record: categoryRecord,
        id,
        position: num,
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
      channelMuted.isChannelMuted(closure_1_20, id);
      let tmp7 = items[id];
      num = undefined;
      if (tmp7 != null) {
        num = tmp7.order;
      }
      if (num == null) {
        num = 0;
      }
      Object.defineProperty(obj, "channelList", {
        get: function() {
            let closure_129_1;
            let closure_129_2;
            let thread;
            if (null == closure_1) {
              const self = this;
              ({ isCollapsed: closure_129_1, isMuted: closure_129_2 } = this);
              const arr = closure_1(closure_1_2[26])(items);
              const mapped = arr.map((isPrivate) => {
                let obj5;
                let tmp10Result;
                if (!isPrivate.isPrivate()) {
                  if (!closure_3_14.can(constants.VIEW_CHANNEL, isPrivate)) {
                    return null;
                  }
                }
                let tmp4 = null != thread;
                if (tmp4) {
                  tmp4 = thread.id === isPrivate.id || closure_2_3 === isPrivate.id;
                  const tmp5 = thread.id === isPrivate.id || closure_2_3 === isPrivate.id;
                }
                const tmp7 = null != thread && thread.isThread() && thread.parent_id === isPrivate.id;
                if (!tmp4) {
                  if (!tmp7) {
                    let activeJoinedUnreadThreadsForParent;
                    let isMutedResult;
                    if (closure_1_1) {
                      activeJoinedUnreadThreadsForParent = closure_3_6.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
                    }
                    if (activeJoinedUnreadThreadsForParent == null) {
                      activeJoinedUnreadThreadsForParent = {};
                    }
                    obj3 = items(closure_3_2[20]);
                    const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, thread, closure_2_3, closure_2_1);
                    const isCollapsedResult = collapsed.isCollapsed(isPrivate.id);
                    if (isPrivate.isThread()) {
                      isMutedResult = muted.isMuted(isPrivate.id);
                    } else {
                      isMutedResult = channelMuted.isChannelMuted(isPrivate.guild_id, isPrivate.id);
                    }
                    obj2 = { id: isPrivate.id, record: isPrivate, category: self, position: closure_2_0[isPrivate.id].order, threadIds, threadCount: obj5.size(threadIds), isCollapsed: isCollapsedResult, isMuted: isMutedResult, isFirstVoiceChannel: false, subtitle: tmp10Result.computeSubtitle(isPrivate, isCollapsedResult, false) };
                    obj5 = closure_1(closure_3_2[26]);
                    tmp10Result = items(closure_3_2[20]);
                    if (!tmp4) {
                      if (!tmp7) {
                        const tmp28Result = closure_1(closure_3_2[26]);
                        if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                          if (mentionCount.getMentionCount(isPrivate.id) <= 0) {
                            if (closure_2_1) {
                              if (isMutedResult) {
                                return null;
                              }
                            }
                            if (closure_1_1) {
                              if (!isMutedResult) {
                                if (!closure_1_2) {
                                  if (!items2(isPrivate.type)) {
                                    if (closure_3_9(isPrivate.type)) {
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
                      }
                    }
                    return obj2;
                  }
                }
                activeJoinedUnreadThreadsForParent = closure_3_6.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
              });
              const found = mapped.filter(items(closure_1_2[27]).isNotNullish);
              const iter = found.sortBy(f145640);
              closure_1 = iter.value();
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
  let items1 = [obj3, ...found1];
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
    items2.push(constants.FAVORITES_SUGGESTIONS);
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
  let obj5 = {
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
      items[ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS] = obj3.channelList.length;
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
      const tmp3 = arg0 < ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY || 0 !== arg1;
      const tmp5 = !tmp3 && 0 === found1[arg0 - ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY].channelList.length;
      return tmp5;
    },
    getCategoryFromSection(arg0) {
      let tmp4;
      if (arg0 === ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS) {
        tmp4 = obj3;
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
          tmp2 = { category: categoryFromSection, channel: categoryFromSection.channelList[arg1] };
          const obj = { category: categoryFromSection, channel: categoryFromSection.channelList[arg1] };
        }
      }
      return tmp2;
    },
    getGuildActionSection() {
      return closure_9;
    },
    getChannelNoticeSection() {
      return collapsed;
    },
    getFirstVoiceChannel() {
      return null;
    },
    getSectionRowsFromChannel(arg0) {
      items = [obj3, ...found1];
      let num = 0;
      if (0 < items.length) {
        while (true) {
          let num2 = 0;
          if (0 < items[num].channelList.length) {
            while (items[num].channelList[num2].id !== arg0) {
              num2 = num2 + 1;
              continue;
            }
            let obj = { section: num + ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS, row: num2 };
            let items1 = [obj];
            return items1;
          }
          num = num + 1;
        }
      }
      return [];
    },
    forEachShownChannel(fn) {
      items = [obj3, ...found1];
      const iter = items[Symbol.iterator]();
      while (iter !== undefined) {
        let channelList = iter.next().channelList;
        for (const item10019 of channelList) {
          let tmp3 = fn(item10019.record);
          let threadIds = item10019.threadIds;
          for (const item10027 of threadIds) {
            let channel = ChannelStore.getChannel(item10027);
            if (null != channel) {
              let tmp10 = fn(tmp8);
            }
            continue;
          }
          continue;
        }
        continue;
      }
    },
    forEachChannel(fn) {
      items = [obj3, ...found1];
      for (const item10011 of items) {
        let channelRecords = item10011.getChannelRecords();
        for (const item10018 of channelRecords) {
          let tmp4 = fn(item10018);
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
  return obj5;
}
let _slicedToArray = _slicedToArray_mod;
({ THREAD_CHANNEL_TYPES: metroImportAll, isGuildReadableType: c9, isVoiceChannel: c10 } = ChannelRecord);
let closure_19 = createFavoritesGuildChannelRecord.createFavoritesGuildChannelRecord;
({ FAVORITES_RAW_GUILD_ID: closure_20, MAX_FAVORITE_CHANNELS: closure_21 } = FavoritesConstants);
const constants = GuildSidebarConstants.ChannelListChannelNoticeRow;
const Permissions = Constants.Permissions;
let items = [EmbeddedActivitiesStore, FavoriteStore, GatewayConnectionStore, GuildScheduledEventStore, ActiveJoinedThreadsStore, JoinedThreadsStore, CategoryCollapseStore, ChannelStore, PermissionStore, ReadStateStore, SelectedChannelStore, UserGuildSettingsStore];
const tmp16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_2;
  let closure_3;
  let obj5;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp20;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(20);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let withSuggestionsNotice = tmp4.withSuggestionsNotice;
  _require = tmp5;
  const tmpResult = tmp(10036);
  const hasAccess = tmpResult.useFavoritesAccess("FavoritesGuildChannelList").hasAccess;
  if (cResult[2] !== (undefined !== withSuggestionsNotice && withSuggestionsNotice)) {
    const fn = function h() {
      const obj = { withSuggestionsNotice };
      return computeFavoritesState(undefined, obj);
    };
    cResult[2] = undefined !== withSuggestionsNotice && withSuggestionsNotice;
    cResult[3] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[3];
  }
  [, dependencyMap] = react.useState(tmp6);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const isConnectedResult = GatewayConnectionStore.isConnected();
    cResult[4] = isConnectedResult;
    tmp8 = isConnectedResult;
  } else {
    tmp8 = cResult[4];
  }
  _slicedToArray = tmp8;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = computeFavoritesState({});
    cResult[5] = tmp12;
    obj5 = tmp12;
  } else {
    obj5 = cResult[5];
  }
  if (cResult[6] !== (undefined !== withSuggestionsNotice && withSuggestionsNotice)) {
    const fn2 = function _() {
      let obj = { withSuggestionsNotice };
      closure_2(computeFavoritesState(undefined, obj));
      const obj2 = hasAccess(closure_2[26]);
      withSuggestionsNotice = obj2.throttle(function recompute() {
        const obj = { withSuggestionsNotice };
        closure_1_2(computeFavoritesState(undefined, obj));
      }, 100);
      let item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(withSuggestionsNotice));
      return () => {
        withSuggestionsNotice.cancel();
        const item = items.forEach((removeChangeListener) => removeChangeListener.removeChangeListener(withSuggestionsNotice));
      };
    };
    items = [undefined !== withSuggestionsNotice && withSuggestionsNotice];
    cResult[6] = undefined !== withSuggestionsNotice && withSuggestionsNotice;
    cResult[7] = fn2;
    cResult[8] = items;
    tmp14 = items;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[7];
    tmp14 = cResult[8];
  }
  const effect = react.useEffect(tmp13, tmp14);
  if (cResult[9] !== hasAccess) {
    class F {
      constructor() {
        const tmp = hasAccess && closure_3;
        if (tmp) {
          const obj = { limit, includeLoading: false };
          const arr = getMissingFavoriteThreadIds(obj);
          if (0 === arr.length) {
            const resolved = Promise.resolve();
          } else {
            const obj2 = LazyLoadedThreadManagerDefault;
            const threadsBulk = obj2.loadThreadsBulk(arr);
          }
        }
      }
    }
    const items1 = [hasAccess, tmp8];
    cResult[9] = hasAccess;
    cResult[10] = F;
    cResult[11] = items1;
    tmp17 = items1;
  } else {
    class F {
      constructor() {
        const tmp = hasAccess && closure_3;
        if (tmp) {
          const obj = { limit, includeLoading: false };
          const arr = getMissingFavoriteThreadIds(obj);
          if (0 === arr.length) {
            const resolved = Promise.resolve();
          } else {
            const obj2 = LazyLoadedThreadManagerDefault;
            const threadsBulk = obj2.loadThreadsBulk(arr);
          }
        }
      }
    }
    tmp17 = cResult[11];
  }
  const effect1 = react.useEffect(F, tmp17);
  if (hasAccess) {
    class F {
      constructor() {
        const tmp = hasAccess && closure_3;
        if (tmp) {
          const obj = { limit, includeLoading: false };
          const arr = getMissingFavoriteThreadIds(obj);
          if (0 === arr.length) {
            const resolved = Promise.resolve();
          } else {
            const obj2 = LazyLoadedThreadManagerDefault;
            const threadsBulk = obj2.loadThreadsBulk(arr);
          }
        }
      }
    }
  }
  if (cResult[12] !== hasAccess) {
    class F {
      constructor() {
        const tmp = hasAccess && closure_3;
        if (tmp) {
          const obj = { limit, includeLoading: false };
          const arr = getMissingFavoriteThreadIds(obj);
          if (0 === arr.length) {
            const resolved = Promise.resolve();
          } else {
            const obj2 = LazyLoadedThreadManagerDefault;
            const threadsBulk = obj2.loadThreadsBulk(arr);
          }
        }
      }
    }
    if (tmp20) {
      class F {
        constructor() {
          const tmp = hasAccess && closure_3;
          if (tmp) {
            const obj = { limit, includeLoading: false };
            const arr = getMissingFavoriteThreadIds(obj);
            if (0 === arr.length) {
              const resolved = Promise.resolve();
            } else {
              const obj2 = LazyLoadedThreadManagerDefault;
              const threadsBulk = obj2.loadThreadsBulk(arr);
            }
          }
        }
      }
      tmp20 = getMissingFavoriteThreadIds({ limit: 1, includeLoading: true }).length > 0;
    }
    cResult[12] = hasAccess;
    cResult[13] = tmp20;
  } else {
    class F {
      constructor() {
        const tmp = hasAccess && closure_3;
        if (tmp) {
          const obj = { limit, includeLoading: false };
          const arr = getMissingFavoriteThreadIds(obj);
          if (0 === arr.length) {
            const resolved = Promise.resolve();
          } else {
            const obj2 = LazyLoadedThreadManagerDefault;
            const threadsBulk = obj2.loadThreadsBulk(arr);
          }
        }
      }
    }
  }
  if (cResult[14] !== obj5) {
    class F {
      constructor() {
        const tmp = hasAccess && closure_3;
        if (tmp) {
          const obj = { limit, includeLoading: false };
          const arr = getMissingFavoriteThreadIds(obj);
          if (0 === arr.length) {
            const resolved = Promise.resolve();
          } else {
            const obj2 = LazyLoadedThreadManagerDefault;
            const threadsBulk = obj2.loadThreadsBulk(arr);
          }
        }
      }
    }
    let flag2 = false;
    if (tmp22 <= tmp(7039).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      class F {
        constructor() {
          const tmp = hasAccess && closure_3;
          if (tmp) {
            const obj = { limit, includeLoading: false };
            const arr = getMissingFavoriteThreadIds(obj);
            if (0 === arr.length) {
              const resolved = Promise.resolve();
            } else {
              const obj2 = LazyLoadedThreadManagerDefault;
              const threadsBulk = obj2.loadThreadsBulk(arr);
            }
          }
        }
      }
      obj5.forEachShownChannel(f123424);
      flag2 = !closure_129_0;
    }
    cResult[14] = obj5;
    cResult[15] = flag2;
  } else {
    class F {
      constructor() {
        const tmp = hasAccess && closure_3;
        if (tmp) {
          const obj = { limit, includeLoading: false };
          const arr = getMissingFavoriteThreadIds(obj);
          if (0 === arr.length) {
            const resolved = Promise.resolve();
          } else {
            const obj2 = LazyLoadedThreadManagerDefault;
            const threadsBulk = obj2.loadThreadsBulk(arr);
          }
        }
      }
    }
  }
  if (cResult[16] === obj5) {
    class F {
      constructor() {
        const tmp = hasAccess && closure_3;
        if (tmp) {
          const obj = { limit, includeLoading: false };
          const arr = getMissingFavoriteThreadIds(obj);
          if (0 === arr.length) {
            const resolved = Promise.resolve();
          } else {
            const obj2 = LazyLoadedThreadManagerDefault;
            const threadsBulk = obj2.loadThreadsBulk(arr);
          }
        }
      }
    }
  }
  const obj3 = { guildChannels: obj5, shouldShowEmptyState: tmp21 && !tmp19, hasNoChannels: tmp21 };
  cResult[16] = obj5;
  cResult[17] = tmp21;
  cResult[18] = tmp21 && !tmp19;
  cResult[19] = obj3;
}) : (() => {
  let c3;
  let closure_2;
  let first;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.withSuggestionsNotice;
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  let tmp = flag;
  let obj2 = flag(10036);
  let hasAccess = obj2.useFavoritesAccess("FavoritesGuildChannelList").hasAccess;
  [first, dependencyMap] = react.useState(() => {
    const obj = { withSuggestionsNotice: flag };
    return computeFavoritesState(undefined, obj);
  });
  const isConnectedResult = GatewayConnectionStore.isConnected();
  _slicedToArray = isConnectedResult;
  let memo = react.useMemo(() => computeFavoritesState({}), []);
  items = [flag];
  const effect = react.useEffect(() => {
    let obj = { withSuggestionsNotice };
    closure_2(computeFavoritesState(undefined, obj));
    const obj2 = hasAccess(closure_2[26]);
    withSuggestionsNotice = obj2.throttle(function recompute() {
      const obj = { withSuggestionsNotice };
      closure_1_2(computeFavoritesState(undefined, obj));
    }, 100);
    let item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(withSuggestionsNotice));
    return () => {
      withSuggestionsNotice.cancel();
      const item = items.forEach((removeChangeListener) => removeChangeListener.removeChangeListener(withSuggestionsNotice));
    };
  }, items);
  const items1 = [hasAccess, isConnectedResult];
  const effect1 = react.useEffect(() => {
    const tmp = hasAccess && c3;
    if (tmp) {
      const obj = { limit, includeLoading: false };
      const arr = getMissingFavoriteThreadIds(obj);
      if (0 === arr.length) {
        const resolved = Promise.resolve();
      } else {
        const obj2 = LazyLoadedThreadManagerDefault;
        const threadsBulk = obj2.loadThreadsBulk(arr);
      }
    }
  }, items1);
  if (hasAccess) {
    memo = first;
  }
  if (hasAccess) {
    hasAccess = getMissingFavoriteThreadIds({ limit: 1, includeLoading: true }).length > 0;
  }
  let flag2 = false;
  if (memo.getSections().length <= tmp(7039).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
    let c0 = false;
    memo.forEachShownChannel(f123424);
    flag2 = !c0;
  }
  return { guildChannels: memo, shouldShowEmptyState: flag2 && !hasAccess, hasNoChannels: flag2 };
});
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildChannelList.tsx");

export const useFavoritesGuildChannelList = tmp16;
export { computeFavoritesState };