// discord_app/modules/favorites/FavoritesGuildChannelList.tsx
import _slicedToArray from "_slicedToArray";
import sum from "sum";
import importDefaultResult1 from "_handleConnectionOpen";
import importDefaultResult from "participantFromServer";
import importDefaultResult3 from "rebuild";
import importDefaultResult4 from "storeThread";
import createChannelRecord from "createChannelRecord";
import importDefaultResult5 from "incrementVersion";
import importDefaultResult6 from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import importDefaultResult7 from "getUncachedChannelPermissions";
import importDefaultResult8 from "generateOldThreadCutoff";
import importDefaultResult9 from "handleConnectionOpen";
import importDefaultResult10 from "updateUserGuildSettingsInternal";
import importDefaultResult11 from "initializeFromUserSettings";
import { createFavoritesGuildChannelRecord as closure_19 } from "createFavoritesGuildChannelRecord";
import importDefaultResult2 from "scheduledEventSort";
import { ChannelListChannelNoticeRow as closure_22 } from "ChannelListGuildActionRow";
import { Permissions } from "sum";
import date from "date";
import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { computeSubtitle } from "../guild_sidebar/ChannelListState.tsx";
import { initialize } from "../threads/LazyLoadedThreadManager.tsx";
import { useFavoritesAccess } from "FavoritesHooks.tsx";

let c10;
let c9;
let closure_20;
let closure_21;
let metroImportAll;
const require = arg1;
function getMissingFavoriteThreadIds(includeLoading) {
  includeLoading = includeLoading.includeLoading;
  const favoriteChannels = importDefaultResult11.getFavoriteChannels();
  const items = [];
  for (const key10013 in favoriteChannels) {
    let tmp10 = key10013;
    if (items.length >= tmp) {
      break;
    } else {
      let tmp11 = favoriteChannels[key10013];
      let tmp12 = require;
      let tmp13 = dependencyMap;
      if (tmp11.type !== create.FavoriteChannelType.REFERENCE_ORIGINAL) {
        continue;
      } else {
        if (null == tmp11.channelType) {
          continue;
        } else {
          let tmp3 = set;
          if (!set.has(tmp11.channelType)) {
            continue;
          } else {
            let tmp4 = importDefaultResult6;
            if (null != importDefaultResult6.getChannel(key10013)) {
              continue;
            } else {
              let tmp5 = importDefault;
              let obj = initialize;
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
function computeFavoritesState(favoriteChannels) {
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
  let dependencyMap;
  let voiceChannelId;
  let items;
  obj = undefined;
  let c6;
  obj = undefined;
  let found1;
  let closure_9;
  let items2;
  let closure_11;
  if (favoriteChannels == null) {
    favoriteChannels = importDefaultResult11.getFavoriteChannels();
  }
  const isGuildCollapsedResult = importDefaultResult10.isGuildCollapsed(closure_20);
  c1 = isGuildCollapsedResult;
  dependencyMap = importDefaultResult6.getChannel(importDefaultResult9.getChannelId());
  voiceChannelId = importDefaultResult9.getVoiceChannelId();
  items = [];
  obj = {};
  for (const key10024 in favoriteChannels) {
    let tmp19 = key10024;
    let tmp20 = favoriteChannels[key10024];
    let tmp21 = importDefaultResult6;
    let channel = importDefaultResult6.getChannel(tmp20.id);
    if (null == channel) {
      continue;
    } else {
      let tmp4 = favoriteChannels;
      let tmp5 = dependencyMap;
      if (tmp20.type === favoriteChannels(1306).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp6 = callback2;
        let tmp7 = callback2(favoriteChannels, tmp20, channel);
        if (null != tmp20.parentId) {
          if (null != favoriteChannels[tmp20.parentId]) {
            if (favoriteChannels[tmp20.parentId].type === tmp4(1306).FavoriteChannelType.CATEGORY) {
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
      let c1;
      let closure_2;
      if (null == closure_6) {
        let self = this;
        self = this;
        ({ isCollapsed: c1, isMuted: closure_2 } = this);
        const mapped = _undefined(12)(items).map((isPrivate) => {
          if (!isPrivate.isPrivate()) {
            if (!outer2_14.can(outer2_23.VIEW_CHANNEL, isPrivate)) {
              return null;
            }
          }
          let obj = outer1_2;
          let tmp4 = null != outer1_2;
          if (tmp4) {
            let tmp5 = obj.id === isPrivate.id;
            if (!tmp5) {
              tmp5 = outer1_3 === isPrivate.id;
            }
            tmp4 = tmp5;
          }
          const tmp7 = null != obj && obj.isThread() && obj.parent_id === isPrivate.id;
          if (!tmp4) {
            if (!tmp7) {
              if (closure_1) {
                let activeJoinedUnreadThreadsForParent = outer2_6.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
              }
              if (activeJoinedUnreadThreadsForParent == null) {
                activeJoinedUnreadThreadsForParent = {};
              }
              const obj3 = items(outer2_2[20]);
              const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, obj, outer1_3, closure_1);
              const isCollapsedResult = outer2_13.isCollapsed(isPrivate.id);
              if (isPrivate.isThread()) {
                let isMutedResult = outer2_7.isMuted(isPrivate.id);
              } else {
                isMutedResult = outer2_17.isChannelMuted(isPrivate.guild_id, isPrivate.id);
              }
              obj = { id: null, record: null, category: null, position: null, threadIds: null, threadCount: null, isCollapsed: null, isMuted: null, isFirstVoiceChannel: false, subtitle: null };
              obj[0] = isPrivate.id;
              obj[1] = isPrivate;
              obj[2] = self;
              obj[3] = self[isPrivate.id].order;
              obj[4] = threadIds;
              obj[5] = callback(outer2_2[24]).size(threadIds);
              obj[6] = isCollapsedResult;
              obj[7] = isMutedResult;
              const obj5 = callback(outer2_2[24]);
              const tmp10 = items;
              const tmp13 = closure_1;
              const tmp28 = callback;
              obj[9] = items(outer2_2[20]).computeSubtitle(isPrivate, isCollapsedResult, false);
              if (!tmp4) {
                if (!tmp7) {
                  if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                    if (outer2_15.getMentionCount(isPrivate.id) <= 0) {
                      if (tmp13) {
                        if (isMutedResult) {
                          return null;
                        }
                      }
                      if (closure_1) {
                        if (!isMutedResult) {
                          if (!closure_2) {
                            if (!outer2_10(isPrivate.type)) {
                              if (outer2_9(isPrivate.type)) {
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
                    obj8 = outer2_15;
                  }
                  tmp28Result = tmp28(tmp11[24]);
                }
              }
              return obj;
            }
          }
          activeJoinedUnreadThreadsForParent = outer2_6.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
        });
        const found = mapped.filter(favoriteChannels(1370).isNotNullish);
        const arr = _undefined(12)(items);
        closure_6 = found.sortBy((arg0) => {
          let position;
          let record;
          ({ record, position } = arg0);
          if (record.isGuildVocal()) {
            let sum = position + 10000;
          } else {
            sum = position;
          }
          return sum;
        }).value();
        const iter = found.sortBy((arg0) => {
          let position;
          let record;
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
  const favoritesCategories = favoriteChannels(9759).getFavoritesCategories(favoriteChannels);
  let found = favoritesCategories.filter((id) => null != id.id);
  let mapped = found.map((id) => {
    id = id.id;
    let items;
    let c1;
    const categoryRecord = outer1_18.getCategoryRecord(id);
    if (null == categoryRecord) {
      return null;
    } else {
      items = obj[id];
      if (items == null) {
        items = [];
      }
      c1 = null;
      obj = { isMuted: null, isCollapsed: null, record: null, id: null, position: null, getChannelRecords: null, getShownChannelIds: null, getShownChannelAndThreadIds: null, isEmpty: null };
      obj[0] = outer1_17.isChannelMuted(outer1_20, id);
      obj[1] = collapsed.isCollapsed(id);
      obj[2] = categoryRecord;
      obj[3] = id;
      let num;
      if (items[id] != null) {
        num = tmp7.order;
      }
      if (num == null) {
        num = 0;
      }
      obj[4] = num;
      obj[5] = function getChannelRecords() {
        return items;
      };
      obj[6] = function getShownChannelIds() {
        return items.map((id) => id.id);
      };
      obj[7] = function getShownChannelAndThreadIds() {
        return items.map((id) => id.id);
      };
      obj[8] = function isEmpty() {
        return 0 === items.length;
      };
      Object.defineProperty(obj, "channelList", {
        get: function() {
            let closure_1;
            let closure_2;
            if (null == closure_1) {
              let self = this;
              self = this;
              ({ isCollapsed: closure_1, isMuted: closure_2 } = this);
              const mapped = _null(outer1_2[24])(self).map((isPrivate) => {
                if (!isPrivate.isPrivate()) {
                  if (!outer2_14.can(outer2_23.VIEW_CHANNEL, isPrivate)) {
                    return null;
                  }
                }
                let obj = outer1_2;
                let tmp4 = null != outer1_2;
                if (tmp4) {
                  let tmp5 = obj.id === isPrivate.id;
                  if (!tmp5) {
                    tmp5 = outer1_3 === isPrivate.id;
                  }
                  tmp4 = tmp5;
                }
                const tmp7 = null != obj && obj.isThread() && obj.parent_id === isPrivate.id;
                if (!tmp4) {
                  if (!tmp7) {
                    if (closure_1) {
                      let activeJoinedUnreadThreadsForParent = outer2_6.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
                    }
                    if (activeJoinedUnreadThreadsForParent == null) {
                      activeJoinedUnreadThreadsForParent = {};
                    }
                    const obj3 = items(outer2_2[20]);
                    const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, obj, outer1_3, closure_1);
                    const isCollapsedResult = outer2_13.isCollapsed(isPrivate.id);
                    if (isPrivate.isThread()) {
                      let isMutedResult = outer2_7.isMuted(isPrivate.id);
                    } else {
                      isMutedResult = outer2_17.isChannelMuted(isPrivate.guild_id, isPrivate.id);
                    }
                    obj = { id: null, record: null, category: null, position: null, threadIds: null, threadCount: null, isCollapsed: null, isMuted: null, isFirstVoiceChannel: false, subtitle: null };
                    obj[0] = isPrivate.id;
                    obj[1] = isPrivate;
                    obj[2] = self;
                    obj[3] = self[isPrivate.id].order;
                    obj[4] = threadIds;
                    obj[5] = callback(outer2_2[24]).size(threadIds);
                    obj[6] = isCollapsedResult;
                    obj[7] = isMutedResult;
                    const obj5 = callback(outer2_2[24]);
                    const tmp10 = items;
                    const tmp13 = closure_1;
                    const tmp28 = callback;
                    obj[9] = items(outer2_2[20]).computeSubtitle(isPrivate, isCollapsedResult, false);
                    if (!tmp4) {
                      if (!tmp7) {
                        if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                          if (outer2_15.getMentionCount(isPrivate.id) <= 0) {
                            if (tmp13) {
                              if (isMutedResult) {
                                return null;
                              }
                            }
                            if (closure_1) {
                              if (!isMutedResult) {
                                if (!closure_2) {
                                  if (!outer2_10(isPrivate.type)) {
                                    if (outer2_9(isPrivate.type)) {
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
                          obj8 = outer2_15;
                        }
                        tmp28Result = tmp28(tmp11[24]);
                      }
                    }
                    return obj;
                  }
                }
                activeJoinedUnreadThreadsForParent = outer2_6.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
              });
              const found = mapped.filter(items(outer1_2[26]).isNotNullish);
              const arr = _null(outer1_2[24])(self);
              closure_1 = found.sortBy((arg0) => {
                let position;
                let record;
                ({ record, position } = arg0);
                if (record.isGuildVocal()) {
                  let sum = position + 10000;
                } else {
                  sum = position;
                }
                return sum;
              }).value();
              const iter = found.sortBy((arg0) => {
                let position;
                let record;
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
  found1 = mapped.filter((arg0) => null != arg0);
  let num = 0;
  let items1 = [obj, ...found1];
  for (const item10083 of items1) {
    let tmp11 = num;
    let sum = num + 1;
    num = sum;
    item10083.position = sum;
    let channelList = item10083.channelList;
    let tmp13 = channelList;
    let tmp14 = channelList;
    for (const item10091 of channelList) {
      let tmp15 = num;
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
  closure_11 = {
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
    id: closure_20,
    hideMutedChannels: isGuildCollapsedResult,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: -999,
    getSections() {
      let length;
      const items = [];
      items[favoriteChannels(7035).SECTION_INDEX_CHANNEL_NOTICES] = items2.length;
      let num = 0;
      items[favoriteChannels(7035).SECTION_INDEX_GUILD_ACTIONS] = 0;
      items[favoriteChannels(7035).SECTION_INDEX_FAVORITES] = 0;
      items[favoriteChannels(7035).SECTION_INDEX_RECENTS] = 0;
      items[favoriteChannels(7035).SECTION_INDEX_UNCATEGORIZED_CHANNELS] = obj.channelList.length;
      if (0 < found1.length) {
        do {
          let tmp = favoriteChannels;
          let tmp2 = dependencyMap;
          let _Math = Math;
          let tmp4 = found1;
          let sum = favoriteChannels(7035).SECTION_INDEX_FIRST_NAMED_CATEGORY + num;
          items[sum] = Math.max(1, found1[num].channelList.length);
          num = num + 1;
          length = found1.length;
        } while (num < length);
      }
      return items;
    },
    isPlaceholderRow(arg0, arg1) {
      let tmp3 = arg0 < favoriteChannels(7035).SECTION_INDEX_FIRST_NAMED_CATEGORY;
      if (!tmp3) {
        tmp3 = 0 !== arg1;
      }
      let tmp5 = !tmp3;
      if (!tmp3) {
        tmp5 = 0 === found1[arg0 - tmp(undefined, 7035).SECTION_INDEX_FIRST_NAMED_CATEGORY].channelList.length;
      }
      return tmp5;
    },
    getCategoryFromSection(arg0) {
      if (arg0 === favoriteChannels(7035).SECTION_INDEX_UNCATEGORIZED_CHANNELS) {
        let tmp4 = obj;
      } else {
        tmp4 = found1[arg0 - tmp(undefined, 7035).SECTION_INDEX_FIRST_NAMED_CATEGORY];
      }
      return tmp4;
    },
    getNamedCategoryFromSection(arg0) {
      return found1[arg0 - favoriteChannels(undefined, 7035).SECTION_INDEX_FIRST_NAMED_CATEGORY];
    },
    getChannelFromSectionRow(arg0, arg1) {
      const categoryFromSection = this.getCategoryFromSection(arg0);
      let tmp2 = null;
      if (null != categoryFromSection) {
        tmp2 = null;
        if (null != categoryFromSection.channelList[arg1]) {
          const obj = { category: null, channel: null };
          obj[0] = categoryFromSection;
          obj[1] = categoryFromSection.channelList[arg1];
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
      let obj;
      const items = [obj, ...found1];
      let num = 0;
      if (0 < items.length) {
        while (true) {
          let tmp = num;
          let num2 = 0;
          if (0 < items[num].channelList.length) {
            let tmp2 = num2;
            while (items[num].channelList[num2].id !== arg0) {
              num2 = num2 + 1;
              continue;
            }
            obj = { section: null, row: null };
            let tmp3 = favoriteChannels;
            let tmp4 = dependencyMap;
            obj[0] = num + favoriteChannels(7035).SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            obj[1] = num2;
            let items1 = [obj];
            return items1;
          }
          num = num + 1;
        }
      }
      return [];
    },
    forEachShownChannel(arg0) {
      const items = [obj, ...found1];
      const iter = items[Symbol.iterator]();
      while (iter !== undefined) {
        let channelList = iter.next().channelList;
        let tmp = channelList;
        let tmp2 = channelList;
        for (const item10019 of channelList) {
          let tmp3 = arg0(item10019.record);
          let threadIds = item10019.threadIds;
          let tmp4 = threadIds;
          let tmp5 = threadIds;
          for (const item10027 of threadIds) {
            let tmp6 = outer1_12;
            let channel = outer1_12.getChannel(item10027);
            if (null != channel) {
              let tmp9 = channel;
              let tmp10 = arg0(tmp8);
            }
            continue;
          }
          continue;
        }
        continue;
      }
    },
    forEachChannel(arg0) {
      const items = [obj, ...found1];
      for (const item10011 of items) {
        let channelRecords = item10011.getChannelRecords();
        let tmp2 = channelRecords;
        let tmp3 = channelRecords;
        for (const item10018 of channelRecords) {
          let tmp4 = arg0(item10018);
          continue;
        }
        continue;
      }
    },
    getSlicedChannels(arg0) {
      const items = [[], arg0, []];
      return items;
    },
    getChannels() {
      return [];
    }
  };
}
({ THREAD_CHANNEL_TYPES: metroImportAll, isGuildReadableType: c9, isVoiceChannel: c10 } = createChannelRecord);
({ FAVORITES_RAW_GUILD_ID: closure_20, MAX_FAVORITE_CHANNELS: closure_21 } = require("date"));
let items = [importDefaultResult, importDefaultResult11, importDefaultResult1, importDefaultResult2, importDefaultResult3, importDefaultResult4, importDefaultResult5, importDefaultResult6, importDefaultResult7, importDefaultResult8, importDefaultResult9, importDefaultResult10];
const result = require("participantFromServer").fileFinishedImporting("modules/favorites/FavoritesGuildChannelList.tsx");

export const useFavoritesGuildChannelList = function useFavoritesGuildChannelList(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.withSuggestionsNotice;
  if (flag === undefined) {
    flag = false;
  }
  let _require = flag;
  let hasAccess;
  let dependencyMap;
  let callback;
  hasAccess = _useFavoritesAccess.useFavoritesAccess("FavoritesGuildChannelList").hasAccess;
  const tmp3 = callback(React.useState(() => outer1_26(undefined, { withSuggestionsNotice: c0 })), 2);
  dependencyMap = tmp3[1];
  const isConnectedResult = importDefaultResult1.isConnected();
  callback = isConnectedResult;
  let memo = React.useMemo(() => callback({}), []);
  const items = [flag];
  const effect = React.useEffect(() => {
    dependencyMap(outer1_26(undefined, { withSuggestionsNotice: closure_0 }));
    closure_0 = hasAccess(12).throttle(function recompute() {
      callback(outer1_26(undefined, { withSuggestionsNotice: closure_0 }));
    }, 100);
    let item = outer1_24.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_0));
    return () => {
      closure_0.cancel();
      const item = outer2_24.forEach((removeChangeListener) => removeChangeListener.removeChangeListener(closure_0));
    };
  }, items);
  const items1 = [hasAccess, isConnectedResult];
  const effect1 = React.useEffect(() => {
    let tmp = hasAccess;
    if (hasAccess) {
      tmp = c3;
    }
    if (tmp) {
      const obj = { limit: null, includeLoading: false };
      obj[0] = outer1_21;
      const arr = outer1_25(obj);
      if (0 === arr.length) {
        const resolved = Promise.resolve();
      } else {
        const threadsBulk = hasAccess(5972).loadThreadsBulk(arr);
        const obj2 = hasAccess(5972);
      }
    }
  }, items1);
  hasAccess(15471)();
  if (hasAccess) {
    memo = tmp3[0];
  }
  if (hasAccess) {
    hasAccess = getMissingFavoriteThreadIds({ limit: 1, includeLoading: true }).length > 0;
  }
  let flag2 = false;
  if (memo.getSections().length <= _computeSubtitle.SECTION_INDEX_FIRST_NAMED_CATEGORY) {
    _require = false;
    memo.forEachShownChannel(() => {
      let c0 = true;
    });
    flag2 = !_require;
  }
  obj = { guildChannels: memo, shouldShowEmptyState: null, hasNoChannels: null };
  let tmp11 = flag2;
  if (flag2) {
    tmp11 = !hasAccess;
  }
  obj[1] = tmp11;
  obj[2] = flag2;
  return obj;
};
export { computeFavoritesState };