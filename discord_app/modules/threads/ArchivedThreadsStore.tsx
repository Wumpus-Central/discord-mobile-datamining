// === Module 7766: ArchivedThreadsStore ===

// Module 7766 (ArchivedThreadsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ThreadSortOrder from "ThreadSortOrder" /* 1966 */;
import ThreadSearchTagSetting from "ThreadSearchTagSetting" /* 1968 */;
import ForumUtils from "ForumUtils" /* 7307 */;
import tracking_Tracking from "tracking/Tracking" /* 7767 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;

require = fn;
function listKey(channelId, sortOrder, tagFilter, tagSetting) {
  let iter = tagFilter;
  const combined = "" + channelId + "|" + sortOrder + "|" + tagSetting + "|";
  if (0 === tagFilter.size) {
    return combined;
  } else if (1 === iter.size) {
    iter = iter.values();
    let sum = combined + iter.next().value;
  } else {
    const _Array = Array;
    const sorted = Array.from(iter).sort();
    sum = combined + sorted.join(",");
    const arr = Array.from(iter);
  }
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
  let id = ChannelStore.getChannel(value.threads[value.threads.length - 1]);
  if (null == id) {
    c4 = null;
    const found = _modDef12(ChannelStore.getAllThreadsForParent(value.channelId)).filter((isArchivedThread) => isArchivedThread.isArchivedThread());
    const found1 = found.filter((appliedTags) => {
      if (0 !== size.size) {
        if (ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME === dependencyMap) {
          const appliedTags2 = appliedTags.appliedTags;
          let someResult;
          if (appliedTags2 != null) {
            someResult = appliedTags2.some((item) => set.has(item));
          }
          if (true !== someResult) {
            return false;
          }
        } else if (tmp20(1968).ThreadSearchTagSetting.MATCH_ALL === tmp19) {
          const values = size.values();
          const iter = values[Symbol.iterator]();
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
          const nextResult = iter.next();
        }
        tmp19 = dependencyMap;
        tmp20 = require;
      }
      if (_slicedToArray) {
        if (null != c4) {
          let tmp13 = null;
          if (null != appliedTags) {
            tmp13 = getSortValue(appliedTags, sortOrder);
          }
          let tmp16 = null != tmp13;
          if (tmp16) {
            tmp16 = SnowflakeUtilsDefault.compare(tmp13, tmp11) >= 0;
          }
          return tmp16;
        }
      }
      return true;
    });
    const sorted = found1.sort((id, id2) => {
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
      return SnowflakeUtilsDefault.compare(id, id2);
    });
    const mapped = sorted.map((id) => id.id);
    const tmp7Result = _modDef12(ChannelStore.getAllThreadsForParent(value.channelId));
    value.threads = mapped.reverse().value();
  } else if (sortOrder === sortOrder(1966).ThreadSortOrder.LATEST_ACTIVITY) {
    id = id.id;
    let id2 = ReadStateStore.lastMessageId(id);
  } else {
    id2 = id.id;
  }
}
const ALL_CHANNEL_TYPES = fn(1961).ALL_CHANNEL_TYPES;
const map = new Map();
let closure_12 = [];
const Store = initializeDefault.Store;
class ArchivedThreadsStore extends Store {
}
const prototype = ArchivedThreadsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, JoinedThreadsStore, ReadStateStore);
};
prototype["getCanLoadMore"] = function getCanLoadMore(id, arg1, size, arg3) {
  let iter = size;
  const combined = "" + id + "|" + arg1 + "|" + arg3 + "|";
  if (0 === size.size) {
    value = map.get(combined);
    let tmp7 = null != value;
    if (tmp7) {
      tmp7 = value.hasMore && !value.loading && !value.failed;
      const tmp8 = value.hasMore && !value.loading && !value.failed;
    }
    return tmp7;
  } else if (1 === iter.size) {
    iter = iter.values();
    let sum = combined + iter.next().value;
  } else {
    const _Array = Array;
    const sorted = Array.from(iter).sort();
    sum = combined + sorted.join(",");
    const arr = Array.from(iter);
  }
};
prototype["getNextOffset"] = function getNextOffset(id, arg1, size, arg3) {
  let iter = size;
  const combined = "" + id + "|" + arg1 + "|" + arg3 + "|";
  if (0 === size.size) {
    value = map.get(combined);
    let num2;
    if (value != null) {
      num2 = value.nextOffset;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num2;
  } else if (1 === iter.size) {
    iter = iter.values();
    let sum = combined + iter.next().value;
  } else {
    const _Array = Array;
    const sorted = Array.from(iter).sort();
    sum = combined + sorted.join(",");
    const arr = Array.from(iter);
  }
};
prototype["getIsInitialLoad"] = function getIsInitialLoad(id, arg1, size, arg3) {
  let iter = size;
  const combined = "" + id + "|" + arg1 + "|" + arg3 + "|";
  if (0 === size.size) {
    value = map.get(combined);
    let flag;
    if (value != null) {
      flag = value.isInitialLoad;
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  } else if (1 === iter.size) {
    iter = iter.values();
    let sum = combined + iter.next().value;
  } else {
    const _Array = Array;
    const sorted = Array.from(iter).sort();
    sum = combined + sorted.join(",");
    const arr = Array.from(iter);
  }
};
prototype["isLoading"] = function isLoading(arg0, arg1, size, arg3) {
  let iter = size;
  const combined = "" + arg0 + "|" + arg1 + "|" + arg3 + "|";
  if (0 === size.size) {
    value = map.get(combined);
    let flag;
    if (value != null) {
      flag = value.loading;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  } else if (1 === iter.size) {
    iter = iter.values();
    let sum = combined + iter.next().value;
  } else {
    const _Array = Array;
    const sorted = Array.from(iter).sort();
    sum = combined + sorted.join(",");
    const arr = Array.from(iter);
  }
};
prototype["getThreads"] = function getThreads(id, arg1, size, arg3) {
  let iter = size;
  const combined = "" + id + "|" + arg1 + "|" + arg3 + "|";
  if (0 === size.size) {
    value = map.get(combined);
    let threads;
    if (value != null) {
      threads = value.threads;
    }
    if (threads == null) {
      threads = closure_12;
    }
    return threads;
  } else if (1 === iter.size) {
    iter = iter.values();
    let sum = combined + iter.next().value;
  } else {
    const _Array = Array;
    const sorted = Array.from(iter).sort();
    sum = combined + sorted.join(",");
    const arr = Array.from(iter);
  }
};
ArchivedThreadsStore.displayName = "ArchivedThreadsStore";
const archivedThreadsStore = new ArchivedThreadsStore(DispatcherDefault, {
  CONNECTION_OPEN: function resetAll() {
    map.clear();
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    if (!(function removeThreadIdFromAllLists(id) {
      closure_0 = id;
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
    })(channel.channel.id)) {
      return false;
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
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
    obj = ForumUtils;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let flag = false;
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
    if (tagFilter.tagFilter instanceof Set) {
      tagFilter = tagFilter.tagFilter;
    } else {
      const _Set = Set;
      tagFilter = new Set(tagFilter.tagFilter);
    }
    listKey(tagFilter.channelId, tagFilter.sortOrder, tagFilter, tagFilter.tagSetting);
    map[Symbol.iterator]();
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(tagFilter) {
    if (tagFilter.tagFilter instanceof Set) {
      let iter = tagFilter.tagFilter;
    } else {
      const _Set = Set;
      iter = new Set(tagFilter.tagFilter);
    }
    const combined = "" + tagFilter.channelId + "|" + tagFilter.sortOrder + "|" + tagFilter.tagSetting + "|";
    if (0 === iter.size) {
      value = map.get(combined);
      if (null == value) {
        return false;
      } else {
        let threads = tagFilter.threads;
        const found = threads.filter((type) => set.has(type.type));
        threads = value.threads;
        value.threads = threads.concat(found.map((id) => id.id));
        const channel = ChannelStore.getChannel(value.channelId);
        if (tmp9) {
          const obj = { guildId: null, channelId: null, numArchivedThreads: null, hasMoreThreads: null, filterTagIds: null, sortOrder: null };
          ({ guild_id: obj4.guildId, id: obj4.channelId } = channel);
          obj.numArchivedThreads = value.threads.length;
          obj.hasMoreThreads = tagFilter.hasMore;
          const _Array2 = Array;
          obj.filterTagIds = Array.from(tagFilter.tagFilter);
          obj.sortOrder = tagFilter.sortOrder;
          const result = tracking_Tracking.trackForumMorePostsLoaded(obj);
        }
        resortListState(value);
        value.hasMore = tagFilter.hasMore;
        value.nextOffset = tagFilter.offset + 25;
        value.loading = false;
        value.isInitialLoad = false;
      }
    } else if (1 === iter.size) {
      iter = iter.values();
      let sum = combined + iter.next().value;
    } else {
      const _Array = Array;
      const sorted = Array.from(iter).sort();
      sum = combined + sorted.join(",");
      const arr = Array.from(iter);
    }
  },
  LOAD_ARCHIVED_THREADS_FAIL: function handleLoadArchivedThreadsFail(tagFilter) {
    if (tagFilter.tagFilter instanceof Set) {
      let iter = tagFilter.tagFilter;
    } else {
      const _Set = Set;
      iter = new Set(tagFilter.tagFilter);
    }
    const combined = "" + tagFilter.channelId + "|" + tagFilter.sortOrder + "|" + tagFilter.tagSetting + "|";
    if (0 === iter.size) {
      value = map.get(combined);
      if (null == value) {
        return false;
      } else {
        value.loading = false;
        value.failed = true;
        value.isInitialLoad = false;
      }
    } else if (1 === iter.size) {
      iter = iter.values();
      let sum = combined + iter.next().value;
    } else {
      const _Array = Array;
      const sorted = Array.from(iter).sort();
      sum = combined + sorted.join(",");
      const arr = Array.from(iter);
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ArchivedThreadsStore.tsx");

export default archivedThreadsStore;
export const PAGE_SIZE = 25;