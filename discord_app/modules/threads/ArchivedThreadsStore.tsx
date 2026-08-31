// discord_app/modules/threads/ArchivedThreadsStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import set from "../../../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx";
import trackForumChannelSeenBatch from "../forums/tracking/Tracking.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import { ALL_CHANNEL_TYPES } from "../../records/ChannelRecord.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "../../stores/ReadStateStore.tsx";
import closure_7 from "JoinedThreadsStore.tsx";

require = arg1;
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
function getSortValue(id) {
  if (arg1 === set.ThreadSortOrder.LATEST_ACTIVITY) {
    id = closure_6.lastMessageId(id.id);
  } else {
    id = id.id;
  }
  return id;
}
function resortListState(value) {
  const sortOrder = value.sortOrder;
  ({ tagFilter: importDefault, tagSetting: dependencyMap, hasMore: closure_3 } = value);
  let id = store.getChannel(value.threads[value.threads.length - 1]);
  if (null == id) {
    c4 = null;
    let tmp7 = applyDefault;
    const found = applyDefault(store.getAllThreadsForParent(value.channelId)).filter((isArchivedThread) => isArchivedThread.isArchivedThread());
    const found1 = found.filter((appliedTags) => {
      if (0 !== size.size) {
        if (sortOrder(closure_1_2[8]).ThreadSearchTagSetting.MATCH_SOME === closure_2) {
          const appliedTags2 = appliedTags.appliedTags;
          let someResult;
          if (appliedTags2 != null) {
            someResult = appliedTags2.some((arg0) => set.has(arg0));
          }
          if (true !== someResult) {
            return false;
          }
        } else if (tmp20(closure_1_2[8]).ThreadSearchTagSetting.MATCH_ALL === tmp19) {
          const values = size.values();
          const iter = values[Symbol.iterator]();
          while (iter !== undefined) {
            appliedTags = appliedTags.appliedTags;
            let hasItem;
            if (appliedTags != null) {
              let tmp7 = nextResult;
              hasItem = appliedTags.includes(tmp5);
            }
            if (true !== hasItem) {
              let tmp8 = iter;
              iter.return();
              let flag = false;
              return false;
            }
          }
          nextResult = iter.next();
        }
        tmp19 = closure_2;
        tmp20 = sortOrder;
      }
      if (closure_3) {
        if (null != c4) {
          let tmp13 = null;
          if (null != appliedTags) {
            tmp13 = closure_1_10(appliedTags, sortOrder);
          }
          let tmp16 = null != tmp13;
          if (tmp16) {
            tmp16 = closure_1_1(closure_1_2[9]).compare(tmp13, tmp11) >= 0;
            const obj2 = closure_1_1(closure_1_2[9]);
          }
          return tmp16;
        }
      }
      return true;
    });
    const sorted = found1.sort((id, id2) => {
      if (sortOrder === sortOrder(closure_1_2[5]).ThreadSortOrder.LATEST_ACTIVITY) {
        id = closure_1_6.lastMessageId(id.id);
      } else {
        id = id.id;
      }
      if (sortOrder === sortOrder(closure_1_2[5]).ThreadSortOrder.LATEST_ACTIVITY) {
        id2 = closure_1_6.lastMessageId(id2.id);
      } else {
        id2 = id2.id;
      }
      return closure_1_1(closure_1_2[9]).compare(id, id2);
    });
    const mapped = sorted.map((id) => id.id);
    const tmp7Result = applyDefault(store.getAllThreadsForParent(value.channelId));
    value.threads = mapped.reverse().value();
  } else if (sortOrder === sortOrder(1396).ThreadSortOrder.LATEST_ACTIVITY) {
    id = id.id;
    let id2 = closure_6.lastMessageId(id);
  } else {
    id2 = id.id;
  }
}
const map = new Map();
let closure_12 = [];
const Store = initializeDefault.Store;
class ArchivedThreadsStore extends Store {
}
const prototype = ArchivedThreadsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5, closure_7, closure_6);
};
prototype["getCanLoadMore"] = function getCanLoadMore(id, closure_1, closure_2, closure_3) {
  let iter = closure_2;
  const combined = "" + id + "|" + closure_1 + "|" + closure_3 + "|";
  if (0 === closure_2.size) {
    const value = map.get(combined);
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
prototype["getNextOffset"] = function getNextOffset(id, closure_1, closure_2, closure_3) {
  let iter = closure_2;
  const combined = "" + id + "|" + closure_1 + "|" + closure_3 + "|";
  if (0 === closure_2.size) {
    const value = map.get(combined);
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
prototype["getIsInitialLoad"] = function getIsInitialLoad(id, closure_1, closure_2, closure_3) {
  let iter = closure_2;
  const combined = "" + id + "|" + closure_1 + "|" + closure_3 + "|";
  if (0 === closure_2.size) {
    const value = map.get(combined);
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
prototype["isLoading"] = function isLoading(arg0, arg1, size) {
  let iter = size;
  const combined = "" + arg0 + "|" + arg1 + "|" + arg3 + "|";
  if (0 === size.size) {
    const value = map.get(combined);
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
prototype["getThreads"] = function getThreads(id, closure_1, closure_2, closure_3) {
  let iter = closure_2;
  const combined = "" + id + "|" + closure_1 + "|" + closure_3 + "|";
  if (0 === closure_2.size) {
    const value = map.get(combined);
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
const archivedThreadsStore = new ArchivedThreadsStore(dispatcherDefault, {
  CONNECTION_OPEN: function resetAll() {
    map.clear();
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    if (!(function removeThreadIdFromAllLists(id) {
      closure_0 = id;
      let flag = false;
      const values = closure_8.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let threads = nextResult.threads;
        if (threads.indexOf(id) >= 0) {
          let tmp4 = nextResult;
          let threads1 = tmp3.threads;
          tmp3.threads = threads1.filter((arg0) => arg0 !== closure_0);
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
          let tmp9 = nextResult;
          let threads = tmp7.threads;
          tmp8 = threads.indexOf(channel.id) >= 0;
        }
        if (tmp8) {
          let tmp10 = nextResult;
          let threads1 = tmp7.threads;
          tmp7.threads = threads1.filter((arg0) => arg0 !== channel.id);
          flag = true;
        }
        continue;
      }
      return flag && undefined;
    } else {
      return false;
    }
    obj = channel(6120);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let flag = false;
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      let first = tmp5[0];
      if (tmp5[1].channelId === channel.channel.id) {
        let tmp7 = map;
        let tmp8 = first;
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
      const value = map.get(combined);
      if (null == value) {
        return false;
      } else {
        let threads = tagFilter.threads;
        const found = threads.filter((type) => set.has(type.type));
        threads = value.threads;
        value.threads = threads.concat(found.map((id) => id.id));
        const channel = store.getChannel(value.channelId);
        if (tmp9) {
          const obj = { guildId: null, channelId: null, numArchivedThreads: null, hasMoreThreads: null, filterTagIds: null, sortOrder: null };
          ({ guild_id: obj4[0], id: obj4[1] } = channel);
          obj[2] = value.threads.length;
          obj[3] = tagFilter.hasMore;
          const _Array2 = Array;
          obj[4] = Array.from(tagFilter.tagFilter);
          obj[5] = tagFilter.sortOrder;
          const result = trackForumChannelSeenBatch.trackForumMorePostsLoaded(obj);
          const obj3 = trackForumChannelSeenBatch;
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
      const value = map.get(combined);
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
        let tmp5 = nextResult;
        tmp4 = tmp3.channelId !== channelId.channelId;
      }
      if (!tmp4) {
        let tmp6 = resortListState;
        let tmp7 = nextResult;
        let tmp8 = resortListState(tmp3);
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  }
});
let result = require("set").fileFinishedImporting("modules/threads/ArchivedThreadsStore.tsx");

export default archivedThreadsStore;
export const PAGE_SIZE = 25;