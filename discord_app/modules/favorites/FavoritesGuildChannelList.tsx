// discord_app/modules/favorites/FavoritesGuildChannelList.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import LazyLoadedThreadManagerDefault from "../threads/LazyLoadedThreadManager.tsx";
import ChannelListState from "../guild_sidebar/ChannelListState.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import GuildScheduledEventStore from "../guild_scheduled_events/GuildScheduledEventStore.tsx";
import ActiveJoinedThreadsStore from "../threads/ActiveJoinedThreadsStore.tsx";
import JoinedThreadsStore from "../threads/JoinedThreadsStore.tsx";
import CategoryCollapseStore from "../../stores/CategoryCollapseStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import CollapsedVoiceChannelStore from "../../stores/CollapsedVoiceChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import FavoriteStore from "FavoriteStore.tsx";

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
  c1 = undefined;
  dependencyMap = undefined;
  let voiceChannelId;
  items = undefined;
  let obj2;
  c6 = undefined;
  let obj3;
  let found1;
  closure_9 = undefined;
  let items2;
  collapsed = undefined;
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
      if (tmp20.type === favoriteChannels(1209).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp7 = closure_19(favoriteChannels, tmp20, channel);
        if (null != tmp20.parentId) {
          if (null != favoriteChannels[tmp20.parentId]) {
            if (favoriteChannels[tmp20.parentId].type === tmp4(1209).FavoriteChannelType.CATEGORY) {
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
    },
  };
  Object.defineProperty(obj3, "channelList", {
    get: function () {
      if (null == closure_6) {
        const self = this;
        ({ isCollapsed: c1, isMuted: closure_2 } = this);
        const mapped = _undefined(12)(items).map((isPrivate) => {
          if (!isPrivate.isPrivate()) {
            if (!PermissionStore.can(constants.VIEW_CHANNEL, isPrivate)) {
              return null;
            }
          }
          let tmp4 = null != dependencyMap;
          if (tmp4) {
            let tmp5 = dependencyMap.id === isPrivate.id;
            if (!tmp5) {
              tmp5 = closure_2_3 === isPrivate.id;
            }
            tmp4 = tmp5;
          }
          const tmp7 = null != dependencyMap && dependencyMap.isThread() && dependencyMap.parent_id === isPrivate.id;
          if (!tmp4) {
            if (!tmp7) {
              if (closure_1_1) {
                let activeJoinedUnreadThreadsForParent = c6.getActiveJoinedUnreadThreadsForParent(
                  isPrivate.guild_id,
                  isPrivate.id,
                );
              }
              if (activeJoinedUnreadThreadsForParent == null) {
                activeJoinedUnreadThreadsForParent = {};
              }
              obj3 = favoriteChannels(dependencyMap[20]);
              const threadIds = obj3.computeThreadIds(
                isPrivate,
                activeJoinedUnreadThreadsForParent,
                dependencyMap,
                closure_2_3,
                closure_1,
              );
              const isCollapsedResult = collapsed2.isCollapsed(isPrivate.id);
              if (isPrivate.isThread()) {
                let isMutedResult = obj3.isMuted(isPrivate.id);
              } else {
                isMutedResult = UserGuildSettingsStore.isChannelMuted(isPrivate.guild_id, isPrivate.id);
              }
              obj2 = {
                id: isPrivate.id,
                record: isPrivate,
                category: self,
                position: items[isPrivate.id].order,
                threadIds,
                threadCount: c1(dependencyMap[26]).size(threadIds),
                isCollapsed: isCollapsedResult,
                isMuted: isMutedResult,
                isFirstVoiceChannel: false,
                subtitle: null,
              };
              const obj5 = c1(dependencyMap[26]);
              obj2.subtitle = favoriteChannels(dependencyMap[20]).computeSubtitle(isPrivate, isCollapsedResult, false);
              if (!tmp4) {
                if (!tmp7) {
                  if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                    if (mentionCount.getMentionCount(isPrivate.id) <= 0) {
                      if (closure_1) {
                        if (isMutedResult) {
                          return null;
                        }
                      }
                      if (closure_1_1) {
                        if (!isMutedResult) {
                          if (!closure_1_2) {
                            if (!items2(isPrivate.type)) {
                              if (closure_9(isPrivate.type)) {
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
                  tmp28Result = c1(dependencyMap[26]);
                }
              }
              return obj2;
            }
          }
          activeJoinedUnreadThreadsForParent = c6.getActiveJoinedRelevantThreadsForParent(
            isPrivate.guild_id,
            isPrivate.id,
          );
        });
        const found = mapped.filter(favoriteChannels(1387).isNotNullish);
        const arr = _undefined(12)(items);
        closure_6 = found
          .sortBy((arg0) => {
            ({ record, position } = arg0);
            if (record.isGuildVocal()) {
              let sum = position + 10000;
            } else {
              sum = position;
            }
            return sum;
          })
          .value();
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
    set: undefined,
  });
  const favoritesCategories = favoriteChannels(10294).getFavoritesCategories(favoriteChannels);
  let found = favoritesCategories.filter((id) => null != id.id);
  let mapped = found.map((id) => {
    id = id.id;
    items = undefined;
    closure_1 = undefined;
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
        isMuted: UserGuildSettingsStore.isChannelMuted(closure_1_20, id),
        isCollapsed: collapsed.isCollapsed(id),
        record: categoryRecord,
        id,
        position: null,
        getChannelRecords: null,
        getShownChannelIds: null,
        getShownChannelAndThreadIds: null,
        isEmpty: null,
      };
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
        get: function () {
          if (null == closure_1) {
            const self = this;
            ({ isCollapsed: closure_1, isMuted: closure_2 } = this);
            const mapped = closure_1(12)(items).map((isPrivate) => {
              if (!isPrivate.isPrivate()) {
                if (!PermissionStore.can(constants.VIEW_CHANNEL, isPrivate)) {
                  return null;
                }
              }
              let tmp4 = null != dependencyMap;
              if (tmp4) {
                let tmp5 = dependencyMap.id === isPrivate.id;
                if (!tmp5) {
                  tmp5 = closure_2_3 === isPrivate.id;
                }
                tmp4 = tmp5;
              }
              const tmp7 =
                null != dependencyMap && dependencyMap.isThread() && dependencyMap.parent_id === isPrivate.id;
              if (!tmp4) {
                if (!tmp7) {
                  if (closure_1_1) {
                    let activeJoinedUnreadThreadsForParent = c6.getActiveJoinedUnreadThreadsForParent(
                      isPrivate.guild_id,
                      isPrivate.id,
                    );
                  }
                  if (activeJoinedUnreadThreadsForParent == null) {
                    activeJoinedUnreadThreadsForParent = {};
                  }
                  obj3 = favoriteChannels(dependencyMap[20]);
                  const threadIds = obj3.computeThreadIds(
                    isPrivate,
                    activeJoinedUnreadThreadsForParent,
                    dependencyMap,
                    closure_2_3,
                    closure_1,
                  );
                  const isCollapsedResult = collapsed2.isCollapsed(isPrivate.id);
                  if (isPrivate.isThread()) {
                    let isMutedResult = obj3.isMuted(isPrivate.id);
                  } else {
                    isMutedResult = UserGuildSettingsStore.isChannelMuted(isPrivate.guild_id, isPrivate.id);
                  }
                  obj2 = {
                    id: isPrivate.id,
                    record: isPrivate,
                    category: self,
                    position: items[isPrivate.id].order,
                    threadIds,
                    threadCount: c1(dependencyMap[26]).size(threadIds),
                    isCollapsed: isCollapsedResult,
                    isMuted: isMutedResult,
                    isFirstVoiceChannel: false,
                    subtitle: null,
                  };
                  const obj5 = c1(dependencyMap[26]);
                  obj2.subtitle = favoriteChannels(dependencyMap[20]).computeSubtitle(
                    isPrivate,
                    isCollapsedResult,
                    false,
                  );
                  if (!tmp4) {
                    if (!tmp7) {
                      if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                        if (mentionCount.getMentionCount(isPrivate.id) <= 0) {
                          if (closure_1) {
                            if (isMutedResult) {
                              return null;
                            }
                          }
                          if (closure_1_1) {
                            if (!isMutedResult) {
                              if (!closure_1_2) {
                                if (!items2(isPrivate.type)) {
                                  if (closure_9(isPrivate.type)) {
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
                      tmp28Result = c1(dependencyMap[26]);
                    }
                  }
                  return obj2;
                }
              }
              activeJoinedUnreadThreadsForParent = c6.getActiveJoinedRelevantThreadsForParent(
                isPrivate.guild_id,
                isPrivate.id,
              );
            });
            const found = mapped.filter(items(1387).isNotNullish);
            const arr = closure_1(12)(items);
            closure_1 = found
              .sortBy((arg0) => {
                ({ record, position } = arg0);
                if (record.isGuildVocal()) {
                  let sum = position + 10000;
                } else {
                  sum = position;
                }
                return sum;
              })
              .value();
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
        set: undefined,
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
    },
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
    },
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
        let tmp4 = obj3;
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
      return closure_9;
    },
    getChannelNoticeSection() {
      return closure_11;
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
      items = [obj3, ...found1];
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
    },
  };
}
const ChannelRecord = fn(2067);
({ THREAD_CHANNEL_TYPES: closure_8, isGuildReadableType: closure_9, isVoiceChannel: c10 } = ChannelRecord);
let closure_19 = fn(4706).createFavoritesGuildChannelRecord;
const FavoritesConstants = fn(2077);
({ FAVORITES_RAW_GUILD_ID: closure_20, MAX_FAVORITE_CHANNELS: closure_21 } = FavoritesConstants);
const constants = fn(7245).ChannelListChannelNoticeRow;
const Permissions = fn(1096).Permissions;
let items = [
  EmbeddedActivitiesStore,
  FavoriteStore,
  GatewayConnectionStore,
  GuildScheduledEventStore,
  ActiveJoinedThreadsStore,
  JoinedThreadsStore,
  CategoryCollapseStore,
  ChannelStore,
  PermissionStore,
  ReadStateStore,
  SelectedChannelStore,
  UserGuildSettingsStore,
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildChannelList.tsx");

export const useFavoritesGuildChannelList = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildChannelList(arg0) {
      const cResult = require("c").c(20);
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      let withSuggestionsNotice = tmp4.withSuggestionsNotice;
      _require = tmp5;
      let obj = require("c");
      const hasAccess = require("FavoritesHooks").useFavoritesAccess("FavoritesGuildChannelList").hasAccess;
      if (cResult[2] !== (undefined !== withSuggestionsNotice && withSuggestionsNotice)) {
        const fn = function h() {
          return computeFavoritesState(undefined, { withSuggestionsNotice });
        };
        cResult[2] = tmp5;
        cResult[3] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[3];
      }
      const tmpResult = require("FavoritesHooks");
      dependencyMap = _slicedToArray(noop.useState(tmp6), 2)[1];
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const isConnectedResult = GatewayConnectionStore.isConnected();
        cResult[4] = isConnectedResult;
        let tmp8 = isConnectedResult;
      } else {
        tmp8 = cResult[4];
      }
      _slicedToArray = tmp8;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = computeFavoritesState({});
        cResult[5] = tmp12;
        let obj5 = tmp12;
      } else {
        obj5 = cResult[5];
      }
      if (cResult[6] !== (undefined !== withSuggestionsNotice && withSuggestionsNotice)) {
        const fn2 = function _() {
          dependencyMap(computeFavoritesState(undefined, { withSuggestionsNotice }));
          withSuggestionsNotice = hasAccess(12).throttle(function recompute() {
            dependencyMap(computeFavoritesState(undefined, { withSuggestionsNotice }));
          }, 100);
          let item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_0));
          return () => {
            withSuggestionsNotice.cancel();
            const item = items.forEach((removeChangeListener) =>
              removeChangeListener.removeChangeListener(withSuggestionsNotice),
            );
          };
        };
        items = [tmp5];
        cResult[6] = tmp5;
        cResult[7] = fn2;
        cResult[8] = items;
        let tmp14 = items;
        let tmp13 = fn2;
      } else {
        tmp13 = cResult[7];
        tmp14 = cResult[8];
      }
      const effect = noop.useEffect(tmp13, tmp14);
      if (cResult[9] !== hasAccess) {
        class F {
          constructor() {
            tmp = hasAccess;
            if (hasAccess) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp2 = getMissingFavoriteThreadIds;
              obj = { limit: null, includeLoading: false };
              tmp3 = MAX_FAVORITE_CHANNELS;
              obj.limit = MAX_FAVORITE_CHANNELS;
              num = 0;
              arr = getMissingFavoriteThreadIds(obj);
              if (0 === arr.length) {
                tmp7 = globalThis;
                _Promise = Promise;
                resolved = Promise.resolve();
              } else {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                threadsBulk = obj2.loadThreadsBulk(arr);
              }
            }
            return;
          }
        }
        const items1 = [hasAccess, tmp8];
        cResult[9] = hasAccess;
        cResult[10] = F;
        cResult[11] = items1;
        let tmp17 = items1;
      } else {
        class F {
          constructor() {
            tmp = hasAccess;
            if (hasAccess) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp2 = getMissingFavoriteThreadIds;
              obj = { limit: null, includeLoading: false };
              tmp3 = MAX_FAVORITE_CHANNELS;
              obj.limit = MAX_FAVORITE_CHANNELS;
              num = 0;
              arr = getMissingFavoriteThreadIds(obj);
              if (0 === arr.length) {
                tmp7 = globalThis;
                _Promise = Promise;
                resolved = Promise.resolve();
              } else {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                threadsBulk = obj2.loadThreadsBulk(arr);
              }
            }
            return;
          }
        }
        tmp17 = cResult[11];
      }
      const effect1 = noop.useEffect(F, tmp17);
      if (hasAccess) {
        class F {
          constructor() {
            tmp = hasAccess;
            if (hasAccess) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp2 = getMissingFavoriteThreadIds;
              obj = { limit: null, includeLoading: false };
              tmp3 = MAX_FAVORITE_CHANNELS;
              obj.limit = MAX_FAVORITE_CHANNELS;
              num = 0;
              arr = getMissingFavoriteThreadIds(obj);
              if (0 === arr.length) {
                tmp7 = globalThis;
                _Promise = Promise;
                resolved = Promise.resolve();
              } else {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                threadsBulk = obj2.loadThreadsBulk(arr);
              }
            }
            return;
          }
        }
      }
      if (cResult[12] !== hasAccess) {
        class F {
          constructor() {
            tmp = hasAccess;
            if (hasAccess) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp2 = getMissingFavoriteThreadIds;
              obj = { limit: null, includeLoading: false };
              tmp3 = MAX_FAVORITE_CHANNELS;
              obj.limit = MAX_FAVORITE_CHANNELS;
              num = 0;
              arr = getMissingFavoriteThreadIds(obj);
              if (0 === arr.length) {
                tmp7 = globalThis;
                _Promise = Promise;
                resolved = Promise.resolve();
              } else {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                threadsBulk = obj2.loadThreadsBulk(arr);
              }
            }
            return;
          }
        }
        if (hasAccess) {
          class F {
            constructor() {
              tmp = hasAccess;
              if (hasAccess) {
                tmp = closure_3;
              }
              if (tmp) {
                tmp2 = getMissingFavoriteThreadIds;
                obj = { limit: null, includeLoading: false };
                tmp3 = MAX_FAVORITE_CHANNELS;
                obj.limit = MAX_FAVORITE_CHANNELS;
                num = 0;
                arr = getMissingFavoriteThreadIds(obj);
                if (0 === arr.length) {
                  tmp7 = globalThis;
                  _Promise = Promise;
                  resolved = Promise.resolve();
                } else {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj2 = closure_1(closure_2[22]);
                  threadsBulk = obj2.loadThreadsBulk(arr);
                }
              }
              return;
            }
          }
          const tmp20 = getMissingFavoriteThreadIds({ limit: 1, includeLoading: true }).length > 0;
        }
        cResult[12] = hasAccess;
        cResult[13] = tmp20;
      } else {
        class F {
          constructor() {
            tmp = hasAccess;
            if (hasAccess) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp2 = getMissingFavoriteThreadIds;
              obj = { limit: null, includeLoading: false };
              tmp3 = MAX_FAVORITE_CHANNELS;
              obj.limit = MAX_FAVORITE_CHANNELS;
              num = 0;
              arr = getMissingFavoriteThreadIds(obj);
              if (0 === arr.length) {
                tmp7 = globalThis;
                _Promise = Promise;
                resolved = Promise.resolve();
              } else {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                threadsBulk = obj2.loadThreadsBulk(arr);
              }
            }
            return;
          }
        }
      }
      if (cResult[14] !== obj5) {
        class F {
          constructor() {
            tmp = hasAccess;
            if (hasAccess) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp2 = getMissingFavoriteThreadIds;
              obj = { limit: null, includeLoading: false };
              tmp3 = MAX_FAVORITE_CHANNELS;
              obj.limit = MAX_FAVORITE_CHANNELS;
              num = 0;
              arr = getMissingFavoriteThreadIds(obj);
              if (0 === arr.length) {
                tmp7 = globalThis;
                _Promise = Promise;
                resolved = Promise.resolve();
              } else {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                threadsBulk = obj2.loadThreadsBulk(arr);
              }
            }
            return;
          }
        }
        let flag2 = false;
        if (tmp22 <= tmp(7239).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
          class F {
            constructor() {
              tmp = hasAccess;
              if (hasAccess) {
                tmp = closure_3;
              }
              if (tmp) {
                tmp2 = getMissingFavoriteThreadIds;
                obj = { limit: null, includeLoading: false };
                tmp3 = MAX_FAVORITE_CHANNELS;
                obj.limit = MAX_FAVORITE_CHANNELS;
                num = 0;
                arr = getMissingFavoriteThreadIds(obj);
                if (0 === arr.length) {
                  tmp7 = globalThis;
                  _Promise = Promise;
                  resolved = Promise.resolve();
                } else {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj2 = closure_1(closure_2[22]);
                  threadsBulk = obj2.loadThreadsBulk(arr);
                }
              }
              return;
            }
          }
          obj5.forEachShownChannel(() => {
            c0 = true;
          });
          flag2 = !_require;
        }
        cResult[14] = obj5;
        cResult[15] = flag2;
      } else {
        class F {
          constructor() {
            tmp = hasAccess;
            if (hasAccess) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp2 = getMissingFavoriteThreadIds;
              obj = { limit: null, includeLoading: false };
              tmp3 = MAX_FAVORITE_CHANNELS;
              obj.limit = MAX_FAVORITE_CHANNELS;
              num = 0;
              arr = getMissingFavoriteThreadIds(obj);
              if (0 === arr.length) {
                tmp7 = globalThis;
                _Promise = Promise;
                resolved = Promise.resolve();
              } else {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                threadsBulk = obj2.loadThreadsBulk(arr);
              }
            }
            return;
          }
        }
      }
      if (tmp21) {
        class F {
          constructor() {
            tmp = hasAccess;
            if (hasAccess) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp2 = getMissingFavoriteThreadIds;
              obj = { limit: null, includeLoading: false };
              tmp3 = MAX_FAVORITE_CHANNELS;
              obj.limit = MAX_FAVORITE_CHANNELS;
              num = 0;
              arr = getMissingFavoriteThreadIds(obj);
              if (0 === arr.length) {
                tmp7 = globalThis;
                _Promise = Promise;
                resolved = Promise.resolve();
              } else {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                threadsBulk = obj2.loadThreadsBulk(arr);
              }
            }
            return;
          }
        }
      }
      if (cResult[16] === obj5) {
        class F {
          constructor() {
            tmp = hasAccess;
            if (hasAccess) {
              tmp = closure_3;
            }
            if (tmp) {
              tmp2 = getMissingFavoriteThreadIds;
              obj = { limit: null, includeLoading: false };
              tmp3 = MAX_FAVORITE_CHANNELS;
              obj.limit = MAX_FAVORITE_CHANNELS;
              num = 0;
              arr = getMissingFavoriteThreadIds(obj);
              if (0 === arr.length) {
                tmp7 = globalThis;
                _Promise = Promise;
                resolved = Promise.resolve();
              } else {
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[22]);
                threadsBulk = obj2.loadThreadsBulk(arr);
              }
            }
            return;
          }
        }
      }
      cResult[16] = obj5;
      cResult[17] = tmp21;
      cResult[18] = tmp21;
      cResult[19] = { guildChannels: obj5, shouldShowEmptyState: tmp21, hasNoChannels: tmp21 };
      const obj3 = { guildChannels: obj5, shouldShowEmptyState: tmp21, hasNoChannels: tmp21 };
      const tmp7 = _slicedToArray(noop.useState(tmp6), 2);
    }
  : function useFavoritesGuildChannelList() {
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
      const tmp3 = _slicedToArray(
        noop.useState(() => computeFavoritesState(undefined, { withSuggestionsNotice })),
        2,
      );
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
          const item = items.forEach((removeChangeListener) =>
            removeChangeListener.removeChangeListener(withSuggestionsNotice),
          );
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
      const obj3 = { guildChannels: memo, shouldShowEmptyState: null, hasNoChannels: null };
      let tmp10 = flag2;
      if (flag2) {
        tmp10 = !hasAccess;
      }
      obj3.shouldShowEmptyState = tmp10;
      obj3.hasNoChannels = flag2;
      return obj3;
    };
export { computeFavoritesState };
