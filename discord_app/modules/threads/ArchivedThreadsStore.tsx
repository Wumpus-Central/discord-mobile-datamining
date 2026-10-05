// === Module 7262: ArchivedThreadsStore ===

// Module 7262 (ArchivedThreadsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ThreadSortOrder from "ThreadSortOrder" /* 2061 */;
import ThreadSearchTagSetting from "ThreadSearchTagSetting" /* 2063 */;
import ForumUtils from "ForumUtils" /* 6810 */;
import tracking_Tracking from "tracking/Tracking" /* 7263 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import size from "module_2" /* 2 */;

let appliedTags;

function listKey(channelId, sortOrder, tagFilter, tagSetting) {
  const combined = "" + channelId + "|" + sortOrder + "|" + tagSetting + "|";
  let tmp2 = combined;
  if (0 !== tagFilter.size) {
    let sum;
    if (1 === tagFilter.size) {
      const iter = tagFilter.values();
      sum = combined + iter.next().value;
    } else {
      const _Array = Array;
      const arr = Array.from(tagFilter);
      const sorted = arr.sort();
      sum = combined + sorted.join(",");
    }
    tmp2 = sum;
  }
  return tmp2;
}
function getSortValue(id, sortOrder) {
  if (sortOrder === ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY) {
    id = ReadStateStore.lastMessageId(id.id);
  } else {
    id = id.id;
  }
  return id;
}
function resortListState(value) {
  const sortOrder = value.sortOrder;
  ({ tagFilter: importDefault, tagSetting: dependencyMap, hasMore: _slicedToArray } = value);
  const channelId = value.channelId;
  const channel = ChannelStore.getChannel(value.threads[value.threads.length - 1]);
  let tmp2 = null;
  if (null != channel) {
    let id;
    if (sortOrder === sortOrder(2061).ThreadSortOrder.LATEST_ACTIVITY) {
      id = ReadStateStore.lastMessageId(channel.id);
    } else {
      id = channel.id;
    }
    tmp2 = id;
  }
  id = tmp2;
  const tmp6 = _modDef12;
  const tmp6Result = tmp6(ChannelStore.getAllThreadsForParent(channelId));
  const found = tmp6Result.filter((isArchivedThread) => isArchivedThread.isArchivedThread());
  const found1 = found.filter((appliedTags) => {
    if (0 !== importDefault.size) {
      if (ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME === dependencyMap) {
        const appliedTags2 = appliedTags.appliedTags;
        let someResult;
        if (appliedTags2 != null) {
          someResult = appliedTags2.some((item) => set.has(item));
        }
        if (true !== someResult) {
          return false;
        }
      } else if (ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_ALL === dependencyMap) {
        const values = importDefault.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          appliedTags = appliedTags.appliedTags;
          let hasItem;
          if (appliedTags != null) {
            hasItem = appliedTags.includes(tmp5);
          }
          if (true !== hasItem) {
            iter.return();
            let flag = false;
            return false;
          }
        }
      }
    }
    if (_slicedToArray) {
      if (null != id) {
        let tmp14 = null;
        if (null != appliedTags) {
          tmp14 = getSortValue(appliedTags, sortOrder);
        }
        let tmp17 = null != tmp14;
        if (tmp17) {
          const obj2 = SnowflakeUtilsDefault;
          tmp17 = obj2.compare(tmp14, tmp12) >= 0;
        }
        return tmp17;
      }
    }
    return true;
  });
  const sorted = found1.sort((id, id2) => {
    const compare = SnowflakeUtilsDefault.compare;
    SnowflakeUtilsDefault;
    if (sortOrder === ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY) {
      id = ReadStateStore.lastMessageId(id.id);
    } else {
      id = id.id;
    }
    if (sortOrder === ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY) {
      id2 = ReadStateStore.lastMessageId(id2.id);
    } else {
      id2 = id2.id;
    }
    return compare(id, id2);
  });
  const mapped = sorted.map((id) => id.id);
  let iter = mapped.reverse();
  value.threads = iter.value();
}
const ALL_CHANNEL_TYPES = ChannelRecord.ALL_CHANNEL_TYPES;
const map = new Map();
let closure_12 = [];
const Store = get_initializedDefault.Store;
class ArchivedThreadsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, JoinedThreadsStore, ReadStateStore);
  }
  getCanLoadMore(id, sortOrder, size, tagSetting) {
    const get = map.get;
    const combined = "" + id + "|" + sortOrder + "|" + tagSetting + "|";
    let tmp3 = combined;
    if (0 !== size.size) {
      let sum;
      if (1 === size.size) {
        const iter = size.values();
        sum = combined + iter.next().value;
      } else {
        const _Array = Array;
        const arr = Array.from(size);
        const sorted = arr.sort();
        sum = combined + sorted.join(",");
      }
      tmp3 = sum;
    }
    const value = get(tmp3);
    let tmp6 = null != value;
    if (tmp6) {
      tmp6 = value.hasMore && !value.loading && !value.failed;
    }
    return tmp6;
  }
  getNextOffset(id, sortOrder, size, tagSetting) {
    const get = map.get;
    const combined = "" + id + "|" + sortOrder + "|" + tagSetting + "|";
    let tmp3 = combined;
    if (0 !== size.size) {
      let sum;
      if (1 === size.size) {
        const iter = size.values();
        sum = combined + iter.next().value;
      } else {
        const _Array = Array;
        const arr = Array.from(size);
        const sorted = arr.sort();
        sum = combined + sorted.join(",");
      }
      tmp3 = sum;
    }
    const value = get(tmp3);
    let num2;
    if (value != null) {
      num2 = value.nextOffset;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num2;
  }
  getIsInitialLoad(id, sortOrder, size, tagSetting) {
    const get = map.get;
    const combined = "" + id + "|" + sortOrder + "|" + tagSetting + "|";
    let tmp3 = combined;
    if (0 !== size.size) {
      let sum;
      if (1 === size.size) {
        const iter = size.values();
        sum = combined + iter.next().value;
      } else {
        const _Array = Array;
        const arr = Array.from(size);
        const sorted = arr.sort();
        sum = combined + sorted.join(",");
      }
      tmp3 = sum;
    }
    const value = get(tmp3);
    let flag;
    if (value != null) {
      flag = value.isInitialLoad;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  }
  isLoading(arg0, arg1, size, arg3) {
    const get = map.get;
    const combined = "" + arg0 + "|" + arg1 + "|" + arg3 + "|";
    let tmp3 = combined;
    if (0 !== size.size) {
      let sum;
      if (1 === size.size) {
        const iter = size.values();
        sum = combined + iter.next().value;
      } else {
        const _Array = Array;
        const arr = Array.from(size);
        const sorted = arr.sort();
        sum = combined + sorted.join(",");
      }
      tmp3 = sum;
    }
    const value = get(tmp3);
    let flag;
    if (value != null) {
      flag = value.loading;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getThreads(id, sortOrder, size, tagSetting) {
    const get = map.get;
    const combined = "" + id + "|" + sortOrder + "|" + tagSetting + "|";
    let tmp3 = combined;
    if (0 !== size.size) {
      let sum;
      if (1 === size.size) {
        const iter = size.values();
        sum = combined + iter.next().value;
      } else {
        const _Array = Array;
        const arr = Array.from(size);
        const sorted = arr.sort();
        sum = combined + sorted.join(",");
      }
      tmp3 = sum;
    }
    const value = get(tmp3);
    let threads;
    if (value != null) {
      threads = value.threads;
    }
    if (threads == null) {
      threads = closure_12;
    }
    return threads;
  }
}
const prototype = ArchivedThreadsStore.prototype;
ArchivedThreadsStore.displayName = "ArchivedThreadsStore";
let obj = {
  CONNECTION_OPEN: function resetAll() {
    map.clear();
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    function removeThreadIdFromAllLists(id) {
      let closure_0 = id;
      let flag = false;
      const values = map.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let threads = nextResult.threads;
        if (threads.indexOf(id) >= 0) {
          let threads1 = tmp3.threads;
          tmp3.threads = threads1.filter((item) => item !== closure_0);
          flag = true;
        }
        continue;
      }
      return flag;
    }
    if (!removeThreadIdFromAllLists(channel.channel.id)) {
      let flag = false;
      return false;
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    const obj = ForumUtils;
    if (obj.isForumPostPinned(channel.id)) {
      let flag = false;
      const values = map.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult;
        let tmp8 = nextResult.channelId === channel.parent_id;
        if (tmp8) {
          let threads = tmp7.threads;
          tmp8 = threads.indexOf(channel.id) >= 0;
        }
        if (tmp8) {
          let threads1 = tmp7.threads;
          tmp7.threads = threads1.filter((item) => item !== channel.id);
          flag = true;
        }
        continue;
      }
      return flag && undefined;
    } else {
      return false;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let flag = false;
    const tmp2 = map[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let first = tmp5[0];
      if (tmp5[1].channelId === channel.channel.id) {
        let deleteResult = map.delete(first);
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  },
  LOAD_ARCHIVED_THREADS: function handleLoadArchivedThreads(tagFilter) {
    let tmp7;
    let tmp9;
    function createListState(channelId, sortOrder, tagFilter, tagSetting) {
      return { loading: false, isInitialLoad: true, hasMore: false, failed: false, threads: [], nextOffset: 0, channelId, sortOrder, tagFilter, tagSetting };
    }
    function touchList(arg0, value) {
      let tmp12;
      let tmp13;
      map.delete(arg0);
      const result = map.set(arg0, value);
      if (map.size > 50) {
        const obj = map[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp11 = _slicedToArray(tmp8, 2);
          [tmp12, tmp13] = tmp11;
          if (map.size <= 50) {
            obj.return();
            break;
          } else {
            if (!tmp13.loading) {
              let deleteResult1 = map.delete(tmp12);
            }
            continue;
          }
          break;
        }
      }
    }
    if (tagFilter.tagFilter instanceof Set) {
      tagFilter = tagFilter.tagFilter;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      tagFilter = new Set(tagFilter.tagFilter);
    }
    const tmp = listKey(tagFilter.channelId, tagFilter.sortOrder, tagFilter, tagFilter.tagSetting);
    const tmp3 = map[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      [tmp7, tmp9] = tmp6;
      let failed = tmp7 !== tmp && tmp9.channelId === tagFilter.channelId && tmp9.failed;
      if (failed) {
        let deleteResult = map.delete(tmp7);
      }
      continue;
    }
    let value = map.get(tmp);
    if (null == value) {
      value = createListState(tagFilter.channelId, tagFilter.sortOrder, tagFilter, tagFilter.tagSetting);
    } else {
      value.tagFilter = tagFilter;
      value.failed = false;
    }
    value.loading = true;
    value.isInitialLoad = false;
    touchList(tmp, value);
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(tagFilter) {
    if (tagFilter.tagFilter instanceof Set) {
      tagFilter = tagFilter.tagFilter;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      tagFilter = new Set(tagFilter.tagFilter);
    }
    const combined = "" + tagFilter.channelId + "|" + tagFilter.sortOrder + "|" + tagFilter.tagSetting + "|";
    let tmp2 = combined;
    if (0 !== tagFilter.size) {
      let sum;
      if (1 === tagFilter.size) {
        const iter = tagFilter.values();
        sum = combined + iter.next().value;
      } else {
        const _Array = Array;
        const arr = Array.from(tagFilter);
        const sorted = arr.sort();
        sum = combined + sorted.join(",");
      }
      tmp2 = sum;
    }
    const value = map.get(tmp2);
    if (null == value) {
      return false;
    } else {
      const threads1 = tagFilter.threads;
      const found = threads1.filter((type) => set.has(type.type));
      const threads = value.threads;
      value.threads = threads.concat(found.map((id) => id.id));
      const channel = ChannelStore.getChannel(value.channelId);
      const tmp5 = null != channel && channel.isForumLikeChannel();
      if (tmp5) {
        ({ guild_id: obj3.guildId, id: obj3.channelId } = channel);
        const _Array2 = Array;
        const obj = { guildId: null, channelId: null, numArchivedThreads: value.threads.length, hasMoreThreads: tagFilter.hasMore, filterTagIds: Array.from(tagFilter.tagFilter), sortOrder: tagFilter.sortOrder };
        const trackForumMorePostsLoaded = tracking_Tracking.trackForumMorePostsLoaded;
        tracking_Tracking;
        const result = trackForumMorePostsLoaded(obj);
      }
      resortListState(value);
      value.hasMore = tagFilter.hasMore;
      value.nextOffset = tagFilter.offset + 25;
      value.loading = false;
      value.isInitialLoad = false;
    }
  },
  LOAD_ARCHIVED_THREADS_FAIL: function handleLoadArchivedThreadsFail(tagFilter) {
    if (tagFilter.tagFilter instanceof Set) {
      tagFilter = tagFilter.tagFilter;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      tagFilter = new Set(tagFilter.tagFilter);
    }
    const combined = "" + tagFilter.channelId + "|" + tagFilter.sortOrder + "|" + tagFilter.tagSetting + "|";
    let tmp2 = combined;
    if (0 !== tagFilter.size) {
      let sum;
      if (1 === tagFilter.size) {
        const iter = tagFilter.values();
        sum = combined + iter.next().value;
      } else {
        const _Array = Array;
        const arr = Array.from(tagFilter);
        const sorted = arr.sort();
        sum = combined + sorted.join(",");
      }
      tmp2 = sum;
    }
    const value = map.get(tmp2);
    if (null == value) {
      return false;
    } else {
      value.loading = false;
      value.failed = true;
      value.isInitialLoad = false;
    }
  },
  RESORT_THREADS: function handleResortThreads(channelId) {
    let flag = false;
    const values = map.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = null != channelId.channelId;
      if (tmp4) {
        tmp4 = tmp3.channelId !== channelId.channelId;
      }
      if (!tmp4) {
        let tmp8 = resortListState(tmp3);
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  }
};
const archivedThreadsStore = new ArchivedThreadsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/threads/ArchivedThreadsStore.tsx");

export default archivedThreadsStore;
export const PAGE_SIZE = 25;