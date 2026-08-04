// discord_app/modules/guild_sidebar/FavoritesGuildChannelList.tsx
import _slicedToArray from "_slicedToArray";
import computeSubtitle from "computeSubtitle";
import importDefaultResult1 from "initializeFromUserSettings";
import { createFavoritesGuildChannelRecord as closure_6 } from "createFavoritesGuildChannelRecord";
import importDefaultResult2 from "_handleConnectionOpen";
import importDefaultResult from "participantFromServer";
import importDefaultResult4 from "rebuild";
import importDefaultResult5 from "storeThread";
import createChannelRecord from "createChannelRecord";
import importDefaultResult6 from "incrementVersion";
import importDefaultResult7 from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import importDefaultResult8 from "getUncachedChannelPermissions";
import importDefaultResult9 from "generateOldThreadCutoff";
import importDefaultResult10 from "handleConnectionOpen";
import importDefaultResult11 from "updateUserGuildSettingsInternal";
import importDefaultResult3 from "scheduledEventSort";
import { Permissions } from "sum";
import date from "date";

let c10;
let closure_12;
let closure_20;
let closure_21;
let unpackModuleId;
const require = arg1;
function getMissingFavoriteThreadIds(includeLoading) {
  includeLoading = includeLoading.includeLoading;
  const favoriteChannels = importDefaultResult1.getFavoriteChannels();
  const items = [];
  for (const key10013 in favoriteChannels) {
    let tmp10 = key10013;
    if (items.length >= tmp) {
      break;
    } else {
      let tmp11 = favoriteChannels[key10013];
      let tmp12 = require;
      let tmp13 = dependencyMap;
      if (tmp11.type !== require(1306) /* create */.FavoriteChannelType.REFERENCE_ORIGINAL) {
        continue;
      } else {
        if (null == tmp11.channelType) {
          continue;
        } else {
          let tmp3 = set;
          if (!set.has(tmp11.channelType)) {
            continue;
          } else {
            let tmp4 = importDefaultResult7;
            if (null != importDefaultResult7.getChannel(key10013)) {
              continue;
            } else {
              let tmp5 = importDefault;
              let obj = importDefault(10431);
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
  if (favoriteChannels == null) {
    favoriteChannels = obj.getFavoriteChannels();
  }
  const isGuildCollapsedResult = importDefaultResult11.isGuildCollapsed(closure_20);
  const importDefault = isGuildCollapsedResult;
  const dependencyMap = importDefaultResult7.getChannel(importDefaultResult10.getChannelId());
  const voiceChannelId = importDefaultResult10.getVoiceChannelId();
  let items = [];
  obj = {};
  for (const key10022 in favoriteChannels) {
    let tmp17 = key10022;
    let tmp18 = favoriteChannels[key10022];
    let tmp19 = importDefaultResult7;
    let channel = importDefaultResult7.getChannel(tmp18.id);
    if (null == channel) {
      continue;
    } else {
      let tmp4 = favoriteChannels;
      let tmp5 = dependencyMap;
      if (tmp18.type === favoriteChannels(1306).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp6 = callback2;
        let tmp7 = callback2(favoriteChannels, tmp18, channel);
        if (null != tmp18.parentId) {
          if (null != favoriteChannels[tmp18.parentId]) {
            if (favoriteChannels[tmp18.parentId].type === tmp4(1306).FavoriteChannelType.CATEGORY) {
              let parentId = tmp18.parentId;
              if (!(parentId in obj)) {
                obj[parentId] = [];
              }
              let arr2 = obj[parentId];
              let arr = arr2.push(tmp7);
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
  const callback2 = null;
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
      let closure_1;
      let closure_2;
      if (null == closure_6) {
        let self = this;
        self = this;
        ({ isCollapsed: closure_1, isMuted: closure_2 } = this);
        const mapped = isGuildCollapsedResult(12)(items).map((isPrivate) => {
          if (!isPrivate.isPrivate()) {
            if (!outer2_16.can(outer2_22.VIEW_CHANNEL, isPrivate)) {
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
                let activeJoinedUnreadThreadsForParent = outer2_8.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
              }
              if (activeJoinedUnreadThreadsForParent == null) {
                activeJoinedUnreadThreadsForParent = {};
              }
              const obj3 = items(outer2_2[19]);
              const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, obj, outer1_3, closure_1);
              const isCollapsedResult = outer2_15.isCollapsed(isPrivate.id);
              if (isPrivate.isThread()) {
                let isMutedResult = outer2_9.isMuted(isPrivate.id);
              } else {
                isMutedResult = outer2_19.isChannelMuted(isPrivate.guild_id, isPrivate.id);
              }
              obj = { id: null, record: null, category: null, position: null, threadIds: null, threadCount: null, isCollapsed: null, isMuted: null, isFirstVoiceChannel: false, subtitle: null };
              obj[0] = isPrivate.id;
              obj[1] = isPrivate;
              obj[2] = self;
              obj[3] = self[isPrivate.id].order;
              obj[4] = threadIds;
              obj[5] = callback(outer2_2[23]).size(threadIds);
              obj[6] = isCollapsedResult;
              obj[7] = isMutedResult;
              const obj5 = callback(outer2_2[23]);
              const tmp10 = items;
              const tmp13 = closure_1;
              const tmp28 = callback;
              obj[9] = items(outer2_2[19]).computeSubtitle(isPrivate, isCollapsedResult, false);
              if (!tmp4) {
                if (!tmp7) {
                  if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                    if (outer2_17.getMentionCount(isPrivate.id) <= 0) {
                      if (tmp13) {
                        if (isMutedResult) {
                          return null;
                        }
                      }
                      if (closure_1) {
                        if (!isMutedResult) {
                          if (!closure_2) {
                            if (!outer2_12(isPrivate.type)) {
                              if (outer2_11(isPrivate.type)) {
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
                    obj8 = outer2_17;
                  }
                  tmp28Result = tmp28(tmp11[23]);
                }
              }
              return obj;
            }
          }
          activeJoinedUnreadThreadsForParent = outer2_8.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
        });
        const found = mapped.filter(favoriteChannels(1351).isNotNullish);
        const arr = isGuildCollapsedResult(12)(items);
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
  const favoritesCategories = favoriteChannels(10228).getFavoritesCategories(favoriteChannels);
  let found = favoritesCategories.filter((id) => null != id.id);
  let mapped = found.map((id) => {
    id = id.id;
    let items;
    let c1;
    const categoryRecord = obj.getCategoryRecord(id);
    if (null == categoryRecord) {
      return null;
    } else {
      items = obj[id];
      if (items == null) {
        items = [];
      }
      c1 = null;
      obj = { isMuted: null, isCollapsed: null, record: null, id: null, position: null, getChannelRecords: null, getShownChannelIds: null, getShownChannelAndThreadIds: null, isEmpty: null };
      obj[0] = outer1_19.isChannelMuted(outer1_20, id);
      obj[1] = outer1_13.isCollapsed(id);
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
              const mapped = _null(outer1_2[23])(self).map((isPrivate) => {
                if (!isPrivate.isPrivate()) {
                  if (!outer2_16.can(outer2_22.VIEW_CHANNEL, isPrivate)) {
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
                      let activeJoinedUnreadThreadsForParent = outer2_8.getActiveJoinedUnreadThreadsForParent(isPrivate.guild_id, isPrivate.id);
                    }
                    if (activeJoinedUnreadThreadsForParent == null) {
                      activeJoinedUnreadThreadsForParent = {};
                    }
                    const obj3 = items(outer2_2[19]);
                    const threadIds = obj3.computeThreadIds(isPrivate, activeJoinedUnreadThreadsForParent, obj, outer1_3, closure_1);
                    const isCollapsedResult = outer2_15.isCollapsed(isPrivate.id);
                    if (isPrivate.isThread()) {
                      let isMutedResult = outer2_9.isMuted(isPrivate.id);
                    } else {
                      isMutedResult = outer2_19.isChannelMuted(isPrivate.guild_id, isPrivate.id);
                    }
                    obj = { id: null, record: null, category: null, position: null, threadIds: null, threadCount: null, isCollapsed: null, isMuted: null, isFirstVoiceChannel: false, subtitle: null };
                    obj[0] = isPrivate.id;
                    obj[1] = isPrivate;
                    obj[2] = self;
                    obj[3] = self[isPrivate.id].order;
                    obj[4] = threadIds;
                    obj[5] = callback(outer2_2[23]).size(threadIds);
                    obj[6] = isCollapsedResult;
                    obj[7] = isMutedResult;
                    const obj5 = callback(outer2_2[23]);
                    const tmp10 = items;
                    const tmp13 = closure_1;
                    const tmp28 = callback;
                    obj[9] = items(outer2_2[19]).computeSubtitle(isPrivate, isCollapsedResult, false);
                    if (!tmp4) {
                      if (!tmp7) {
                        if (tmp28Result.isEmpty(activeJoinedUnreadThreadsForParent)) {
                          if (outer2_17.getMentionCount(isPrivate.id) <= 0) {
                            if (tmp13) {
                              if (isMutedResult) {
                                return null;
                              }
                            }
                            if (closure_1) {
                              if (!isMutedResult) {
                                if (!closure_2) {
                                  if (!outer2_12(isPrivate.type)) {
                                    if (outer2_11(isPrivate.type)) {
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
                          obj8 = outer2_17;
                        }
                        tmp28Result = tmp28(tmp11[23]);
                      }
                    }
                    return obj;
                  }
                }
                activeJoinedUnreadThreadsForParent = outer2_8.getActiveJoinedRelevantThreadsForParent(isPrivate.guild_id, isPrivate.id);
              });
              const found = mapped.filter(items(outer1_2[24]).isNotNullish);
              const arr = _null(outer1_2[23])(self);
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
  const found1 = mapped.filter((arg0) => null != arg0);
  let num = 0;
  let items1 = [obj, ...found1];
  for (const item10081 of items1) {
    let tmp11 = num;
    let sum = num + 1;
    num = sum;
    item10081.position = sum;
    let channelList = item10081.channelList;
    let tmp13 = channelList;
    let tmp14 = channelList;
    for (const item10089 of channelList) {
      let tmp15 = num;
      let sum1 = num + 1;
      num = sum1;
      item10089.position = sum1;
      continue;
    }
    continue;
  }
  let closure_9 = {
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
  let closure_10 = {
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
  obj = {
    id: closure_20,
    hideMutedChannels: isGuildCollapsedResult,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: -999,
    getSections() {
      let length;
      const items = [];
      let num = 0;
      items[favoriteChannels(5786).SECTION_INDEX_CHANNEL_NOTICES] = 0;
      items[favoriteChannels(5786).SECTION_INDEX_GUILD_ACTIONS] = 0;
      items[favoriteChannels(5786).SECTION_INDEX_FAVORITES] = 0;
      items[favoriteChannels(5786).SECTION_INDEX_RECENTS] = 0;
      items[favoriteChannels(5786).SECTION_INDEX_UNCATEGORIZED_CHANNELS] = obj.channelList.length;
      if (0 < found1.length) {
        do {
          let tmp = favoriteChannels;
          let tmp2 = dependencyMap;
          let _Math = Math;
          let tmp4 = found1;
          let sum = favoriteChannels(5786).SECTION_INDEX_FIRST_NAMED_CATEGORY + num;
          items[sum] = Math.max(1, found1[num].channelList.length);
          num = num + 1;
          length = found1.length;
        } while (num < length);
      }
      return items;
    },
    isPlaceholderRow(arg0, arg1) {
      let tmp3 = arg0 < favoriteChannels(5786).SECTION_INDEX_FIRST_NAMED_CATEGORY;
      if (!tmp3) {
        tmp3 = 0 !== arg1;
      }
      let tmp5 = !tmp3;
      if (!tmp3) {
        tmp5 = 0 === found1[arg0 - tmp(undefined, 5786).SECTION_INDEX_FIRST_NAMED_CATEGORY].channelList.length;
      }
      return tmp5;
    },
    getCategoryFromSection(arg0) {
      if (arg0 === favoriteChannels(5786).SECTION_INDEX_UNCATEGORIZED_CHANNELS) {
        let tmp4 = obj;
      } else {
        tmp4 = found1[arg0 - tmp(undefined, 5786).SECTION_INDEX_FIRST_NAMED_CATEGORY];
      }
      return tmp4;
    },
    getNamedCategoryFromSection(arg0) {
      return found1[arg0 - favoriteChannels(undefined, 5786).SECTION_INDEX_FIRST_NAMED_CATEGORY];
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
      return closure_10;
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
            obj[0] = num + favoriteChannels(5786).SECTION_INDEX_UNCATEGORIZED_CHANNELS;
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
            let tmp6 = outer1_14;
            let channel = outer1_14.getChannel(item10027);
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
  return obj;
}
({ THREAD_CHANNEL_TYPES: c10, isGuildReadableType: unpackModuleId, isVoiceChannel: closure_12 } = createChannelRecord);
({ FAVORITES_RAW_GUILD_ID: closure_20, MAX_FAVORITE_CHANNELS: closure_21 } = require("date"));
let items = [importDefaultResult, importDefaultResult1, importDefaultResult2, importDefaultResult3, importDefaultResult4, importDefaultResult5, importDefaultResult6, importDefaultResult7, importDefaultResult8, importDefaultResult9, importDefaultResult10, importDefaultResult11];
const result = require("participantFromServer").fileFinishedImporting("modules/guild_sidebar/FavoritesGuildChannelList.tsx");

export const useFavoritesGuildChannelList = function useFavoritesGuildChannelList() {
  let hasAccess = _require(10228).useFavoritesAccess("FavoritesGuildChannelList").hasAccess;
  _require = hasAccess;
  const tmp3 = callback(React.useState(() => callback2()), 2);
  let closure_1 = tmp3[1];
  const isConnectedResult = importDefaultResult2.isConnected();
  const dependencyMap = isConnectedResult;
  let guildChannels = React.useMemo(() => callback2({}), []);
  const effect = React.useEffect(() => {
    let closure_0 = callback(isConnectedResult[23]).throttle(() => callback(outer1_25()), 100);
    const item = outer1_23.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_0));
    return () => outer2_23.forEach((removeChangeListener) => removeChangeListener.removeChangeListener(closure_0));
  }, []);
  const items = [hasAccess, isConnectedResult];
  const effect1 = React.useEffect(() => {
    let tmp = c0;
    if (c0) {
      tmp = closure_2;
    }
    if (tmp) {
      const obj = { limit: null, includeLoading: false };
      obj[0] = outer1_21;
      const arr = outer1_24(obj);
      if (0 === arr.length) {
        const resolved = Promise.resolve();
      } else {
        const threadsBulk = callback(isConnectedResult[21]).loadThreadsBulk(arr);
        const obj2 = callback(isConnectedResult[21]);
      }
    }
  }, items);
  if (hasAccess) {
    guildChannels = tmp3[0];
  }
  if (hasAccess) {
    hasAccess = getMissingFavoriteThreadIds({ limit: 1, includeLoading: true }).length > 0;
  }
  let shouldShowEmptyState = false;
  if (guildChannels.getSections().length <= _require(5786).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
    _require = false;
    guildChannels.forEachShownChannel(() => {
      let c0 = true;
    });
    shouldShowEmptyState = !_require;
  }
  if (shouldShowEmptyState) {
    shouldShowEmptyState = !hasAccess;
  }
  return { guildChannels, shouldShowEmptyState };
};
export { computeFavoritesState };