// === Module 12481: ThreadBrowserHooks ===

// Module 12481 (ThreadBrowserHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7883 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9301 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6067 */;
import ArchivedThreadsStore from "ArchivedThreadsStore" /* 7884 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4711 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(12482).useShouldShowResolvedFlagsForChannel;
const Permissions = fn(1096).Permissions;
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveThreadIds(guild_id) {
  _require = guild_id;
  let valueResult = dependencyMap;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id.guild_id) {
    if (cResult[2] === guild_id.id) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    const stateFromStoresArray = tmp(504).useStateFromStoresArray(first, tmp8, tmp9);
    if (cResult[5] !== stateFromStoresArray) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0, arg1) {
            obj = closure_1_1(closure_1_2[16]);
            lastMessageIdResult = closure_1_8.lastMessageId(guild_id);
            return obj.compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
          }
        }
        cResult[7] = S;
      } else {
        class S {
          constructor(arg0, arg1) {
            obj = closure_1_1(closure_1_2[16]);
            lastMessageIdResult = closure_1_8.lastMessageId(guild_id);
            return obj.compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
          }
        }
      }
      const sorted = _modDef12(stateFromStoresArray).sort(S);
      const obj3 = _modDef12(stateFromStoresArray);
      valueResult = sorted.reverse().value();
      cResult[5] = stateFromStoresArray;
      cResult[6] = valueResult;
      const iter = sorted.reverse();
    } else {
      class S {
        constructor(arg0, arg1) {
          obj = closure_1_1(closure_1_2[16]);
          lastMessageIdResult = closure_1_8.lastMessageId(guild_id);
          return obj.compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
        }
      }
    }
    let tmpResult = tmp(504);
  }
  const fn = function s() {
    const values = _modDef12(ActiveThreadsStore.getThreadsForParent(guild_id.guild_id, guild_id.id)).values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const tmpResult = _modDef12(ActiveThreadsStore.getThreadsForParent(guild_id.guild_id, guild_id.id));
    return found1.map((id) => id.id).value();
  };
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = guild_id);
  cResult[1] = guild_id.guild_id;
  cResult[2] = guild_id.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = fn;
  let obj = require("c");
  tmp = _require;
}) : (function useActiveThreadIds(arg0) {
  _require = arg0;
  const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = arg0);
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const values = _modDef12(ActiveThreadsStore.getThreadsForParent(user.guild_id, user.id)).values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const tmpResult = _modDef12(ActiveThreadsStore.getThreadsForParent(user.guild_id, user.id));
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return noop.useMemo(() => {
    const sorted = _modDef12(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = stateFromStoresArray(closure_1_2[16]);
      return obj.compare(closure_1_8.lastMessageId(arg0), closure_1_8.lastMessageId(arg1));
    });
    let obj = _modDef12(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
});
let closure_13 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackThreadBrowserTab() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function a() {
      const result = require("ThreadUtils").trackThreadBrowserTab();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useTrackThreadBrowserTab() {
  const effect = noop.useEffect(() => {
    const result = require("ThreadUtils").trackThreadBrowserTab();
  }, []);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveThreads(arg0) {
  const cResult = require("c").c(7);
  const tmp4 = closure_13(arg0);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [JoinedThreadsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const fn = function o() {
      return _modDef12.partition(closure_0, (id) => closure_1_11.hasJoined(id));
    };
    const items1 = [tmp4];
    cResult[1] = tmp4;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  const tmpResult = require("initialize");
  [tmp10, tmp11] = require("initialize").useStateFromStores(first, tmp7, tmp8, require("initialize").statesWillNeverBeEqual);
  if (cResult[4] === tmp10) {
    if (cResult[5] === tmp11) {
      let tmp12 = cResult[6];
    }
    return tmp12;
  }
  const obj2 = { joinedThreadIds: tmp10, unjoinedThreadIds: tmp11 };
  cResult[4] = tmp10;
  cResult[5] = tmp11;
  cResult[6] = obj2;
  tmp12 = obj2;
  const tmp9 = _slicedToArray(require("initialize").useStateFromStores(first, tmp7, tmp8, require("initialize").statesWillNeverBeEqual), 2);
}) : (function useActiveThreads(arg0) {
  const tmp = closure_13(arg0);
  _require = tmp;
  const items = [JoinedThreadsStore];
  const items1 = [tmp];
  const tmp2 = _slicedToArray(require("initialize").useStateFromStores(items, () => _modDef12.partition(closure_0, (id) => closure_1_11.hasJoined(id)), items1, require("initialize").statesWillNeverBeEqual), 2);
  return { joinedThreadIds: tmp2[0], unjoinedThreadIds: tmp2[1] };
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveGuildThreads(arg0) {
  _require = arg0;
  let valueResult = dependencyMap;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const values = _modDef12(ActiveThreadsStore.getThreadsForGuild(closure_0)).values();
      const mapped = values.map((item) => closure_1_1(closure_1_2[13]).values(item));
      const tmpResult = _modDef12(ActiveThreadsStore.getThreadsForGuild(closure_0));
      const mapped1 = mapped.flatten().map((id) => channel.getChannel(id.id));
      const found = mapped1.filter(GlobalUtils.isNotNullish);
      const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
      const flattenResult = mapped.flatten();
      return found1.map((id) => id.id).value();
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp8, tmp9);
  if (cResult[4] !== stateFromStoresArray) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0, arg1) {
          obj = closure_1_1(closure_1_2[16]);
          lastMessageIdResult = closure_1_8.lastMessageId(arg0);
          return obj.compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
        }
      }
      cResult[6] = S;
    } else {
      class S {
        constructor(arg0, arg1) {
          obj = closure_1_1(closure_1_2[16]);
          lastMessageIdResult = closure_1_8.lastMessageId(arg0);
          return obj.compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
        }
      }
    }
    const sorted = _modDef12(stateFromStoresArray).sort(S);
    const obj3 = _modDef12(stateFromStoresArray);
    valueResult = sorted.reverse().value();
    cResult[4] = stateFromStoresArray;
    cResult[5] = valueResult;
    const iter = sorted.reverse();
  } else {
    class S {
      constructor(arg0, arg1) {
        obj = closure_1_1(closure_1_2[16]);
        lastMessageIdResult = closure_1_8.lastMessageId(arg0);
        return obj.compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
      }
    }
  }
  let tmpResult = require("initialize");
}) : (function useActiveGuildThreads(arg0) {
  _require = arg0;
  const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
  const items1 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const values = _modDef12(ActiveThreadsStore.getThreadsForGuild(closure_0)).values();
    const mapped = values.map((item) => stateFromStoresArray(closure_1_2[13]).values(item));
    const tmpResult = _modDef12(ActiveThreadsStore.getThreadsForGuild(closure_0));
    const mapped1 = mapped.flatten().map((id) => channel.getChannel(id.id));
    const found = mapped1.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const flattenResult = mapped.flatten();
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return noop.useMemo(() => {
    const sorted = _modDef12(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = stateFromStoresArray(closure_1_2[16]);
      return obj.compare(closure_1_8.lastMessageId(arg0), closure_1_8.lastMessageId(arg1));
    });
    let obj = _modDef12(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadBrowserHooks.tsx");

export const useTrackThreadBrowserTab = tmp2;
export const useActiveThreadIds = tmp3;
export const useActiveThreads = tmp4;
export const useActiveGuildThreads = tmp5;
export const useArchivedThreads = ReactCompilerGating.isReactCompilerEnabled() ? (function useArchivedThreads(isModeratorReportChannel, sortOrder, tagFilter, tagSetting) {
  _require = isModeratorReportChannel;
  importDefault = sortOrder;
  dependencyMap = tagFilter;
  const cResult = require("c").c(49);
  if (cResult[0] !== isModeratorReportChannel) {
    const result = isModeratorReportChannel.isModeratorReportChannel();
    cResult[0] = isModeratorReportChannel;
    cResult[1] = result;
    let tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  noop = tmp4;
  showResolvedFlags = showResolvedFlags(isModeratorReportChannel.id).showResolvedFlags;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ArchivedThreadsStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === isModeratorReportChannel.id) {
    if (cResult[4] === sortOrder) {
      if (cResult[5] === tagFilter) {
        if (cResult[6] === tagSetting) {
          let tmp8 = cResult[7];
        }
        const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp6, tmp8);
        ({ canLoadMore, loading, nextOffset } = stateFromStoresObject);
        const isInitialLoad = stateFromStoresObject.isInitialLoad;
        if (cResult[8] === isModeratorReportChannel) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === nextOffset) {
              if (cResult[11] === showResolvedFlags) {
                if (cResult[12] === sortOrder) {
                  if (cResult[13] === tagFilter) {
                    if (cResult[14] === tagSetting) {
                      let tmp10 = cResult[15];
                    }
                    current = tmp10;
                    ActiveThreadsStore = noop.useRef(tmp10);
                    if (cResult[16] !== tmp10) {
                      class L {
                        constructor() {
                          closure_9.current = closure_8;
                          return;
                        }
                      }
                      cResult[16] = tmp10;
                      cResult[17] = L;
                    } else {
                      class L {
                        constructor() {
                          closure_9.current = closure_8;
                          return;
                        }
                      }
                    }
                    const effect = noop.useEffect(L);
                    if (cResult[18] !== isInitialLoad) {
                      class F {
                        constructor() {
                          if (isInitialLoad) {
                            tmp = closure_9;
                            currentResult = closure_9.current();
                          }
                          return;
                        }
                      }
                      cResult[18] = isInitialLoad;
                      cResult[19] = F;
                    } else {
                      class F {
                        constructor() {
                          if (isInitialLoad) {
                            tmp = closure_9;
                            currentResult = closure_9.current();
                          }
                          return;
                        }
                      }
                    }
                    if (cResult[20] === isModeratorReportChannel.id) {
                      class F {
                        constructor() {
                          if (isInitialLoad) {
                            tmp = closure_9;
                            currentResult = closure_9.current();
                          }
                          return;
                        }
                      }
                    }
                    const items1 = [isModeratorReportChannel.id, , , , ];
                    class A {
                      constructor() {
                        tmp = closure_0;
                        canResult = closure_7.can(Permissions.READ_MESSAGE_HISTORY, closure_0);
                        tmp3 = !canResult;
                        if (canResult) {
                          tmp4 = closure_4;
                          if (closure_4) {
                            tmp5 = showResolvedFlags;
                            tmp4 = !showResolvedFlags;
                          }
                          tmp3 = tmp4;
                        }
                        if (!tmp3) {
                          tmp6 = closure_1;
                          tmp7 = closure_2;
                          obj = closure_1(closure_2[17]);
                          obj1 = { guildId: null, channelId: null, sortOrder: null, tagFilter: null, tagSetting: null, offset: null };
                          ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp);
                          tmp8 = closure_1;
                          obj1.sortOrder = closure_1;
                          tmp9 = closure_2;
                          obj1.tagFilter = closure_2;
                          tmp10 = closure_3;
                          obj1.tagSetting = closure_3;
                          tmp11 = nextOffset;
                          obj1.offset = nextOffset;
                          archivedThreads = obj.loadArchivedThreads(obj1);
                        }
                        return;
                      }
                    }
                    items1[2] = tagFilter;
                    items1[3] = isInitialLoad;
                    items1[4] = showResolvedFlags;
                    cResult[20] = isModeratorReportChannel.id;
                    cResult[21] = isInitialLoad;
                    cResult[22] = showResolvedFlags;
                    cResult[23] = sortOrder;
                    cResult[24] = tagFilter;
                    cResult[25] = items1;
                  }
                }
              }
            }
          }
        }
        class A {
          constructor() {
            tmp = closure_0;
            canResult = closure_7.can(Permissions.READ_MESSAGE_HISTORY, closure_0);
            tmp3 = !canResult;
            if (canResult) {
              tmp4 = closure_4;
              if (closure_4) {
                tmp5 = showResolvedFlags;
                tmp4 = !showResolvedFlags;
              }
              tmp3 = tmp4;
            }
            if (!tmp3) {
              tmp6 = closure_1;
              tmp7 = closure_2;
              obj = closure_1(closure_2[17]);
              obj1 = { guildId: null, channelId: null, sortOrder: null, tagFilter: null, tagSetting: null, offset: null };
              ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp);
              tmp8 = closure_1;
              obj1.sortOrder = closure_1;
              tmp9 = closure_2;
              obj1.tagFilter = closure_2;
              tmp10 = closure_3;
              obj1.tagSetting = closure_3;
              tmp11 = nextOffset;
              obj1.offset = nextOffset;
              archivedThreads = obj.loadArchivedThreads(obj1);
            }
            return;
          }
        }
        cResult[8] = isModeratorReportChannel;
        cResult[9] = tmp4;
        cResult[10] = nextOffset;
        cResult[11] = showResolvedFlags;
        cResult[12] = sortOrder;
        cResult[13] = tagFilter;
        cResult[14] = tagSetting;
        cResult[15] = A;
        tmp10 = A;
        let tmpResult = tmp(504);
      }
    }
  }
  const fn = function _() {
    return { loading: ArchivedThreadsStore.isLoading(isModeratorReportChannel.id, closure_1, closure_2, closure_3), isInitialLoad: ArchivedThreadsStore.getIsInitialLoad(isModeratorReportChannel.id, closure_1, closure_2, closure_3), canLoadMore: ArchivedThreadsStore.getCanLoadMore(isModeratorReportChannel.id, closure_1, closure_2, closure_3), nextOffset: ArchivedThreadsStore.getNextOffset(isModeratorReportChannel.id, closure_1, closure_2, closure_3) };
  };
  cResult[3] = isModeratorReportChannel.id;
  cResult[4] = sortOrder;
  cResult[5] = tagFilter;
  cResult[6] = tagSetting;
  cResult[7] = fn;
  tmp8 = fn;
  let obj = require("c");
  tmp = _require;
}) : (function useArchivedThreads(isModeratorReportChannel, sortOrder, tagFilter, tagSetting) {
  _require = isModeratorReportChannel;
  dependencyMap = tagFilter;
  const result = isModeratorReportChannel.isModeratorReportChannel();
  noop = result;
  showResolvedFlags = showResolvedFlags(isModeratorReportChannel.id).showResolvedFlags;
  const items = [ArchivedThreadsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ loading: ArchivedThreadsStore.isLoading(isModeratorReportChannel.id, closure_1, closure_2, closure_3), isInitialLoad: ArchivedThreadsStore.getIsInitialLoad(isModeratorReportChannel.id, closure_1, closure_2, closure_3), canLoadMore: ArchivedThreadsStore.getCanLoadMore(isModeratorReportChannel.id, closure_1, closure_2, closure_3), nextOffset: ArchivedThreadsStore.getNextOffset(isModeratorReportChannel.id, closure_1, closure_2, closure_3) }));
  ({ loading, nextOffset } = stateFromStoresObject);
  const isInitialLoad = stateFromStoresObject.isInitialLoad;
  const items1 = [isModeratorReportChannel, sortOrder, tagFilter, tagSetting, nextOffset, showResolvedFlags, result];
  const loadMore = noop.useCallback(() => {
    const canResult = PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, closure_0);
    let tmp3 = !canResult;
    if (canResult) {
      let tmp4 = result;
      if (result) {
        tmp4 = !showResolvedFlags;
      }
      tmp3 = tmp4;
    }
    if (!tmp3) {
      const obj3 = { guildId: null, channelId: null, sortOrder: null, tagFilter: null, tagSetting: null, offset: null };
      ({ guild_id: obj2.guildId, id: obj2.channelId } = closure_0);
      obj3.sortOrder = sortOrder;
      obj3.tagFilter = tagFilter;
      obj3.tagSetting = tagSetting;
      obj3.offset = nextOffset;
      const archivedThreads = ThreadActionCreatorsDefault.loadArchivedThreads(obj3);
    }
  }, items1);
  noop.useRef(loadMore);
  const effect = noop.useEffect(() => {
    closure_9.current = current;
  });
  const items2 = [isModeratorReportChannel.id, sortOrder, tagFilter, isInitialLoad, showResolvedFlags];
  const effect1 = noop.useEffect(() => {
    if (isInitialLoad) {
      ref.current();
    }
  }, items2);
  const items3 = [isModeratorReportChannel.id, showResolvedFlags];
  const effect2 = noop.useEffect(() => {
    ForumActionCreatorsDefault.resort(isModeratorReportChannel.id);
  }, items3);
  const obj2 = { threadIds: null, canLoadMore: null, loading: null, loadMore: null };
  let obj = require("initialize");
  const items4 = [ArchivedThreadsStore, nextOffset, isInitialLoad];
  obj2.threadIds = require("initialize").useStateFromStoresArray(items4, () => {
    const tmpResult = _modDef12(ArchivedThreadsStore.getThreads(isModeratorReportChannel.id, closure_1, closure_2, closure_3));
    return _modDef12(ArchivedThreadsStore.getThreads(isModeratorReportChannel.id, closure_1, closure_2, closure_3)).filter((item) => {
      if (closure_1_4) {
        if (!showResolvedFlags) {
          return false;
        }
      }
      const channel = nextOffset.getChannel(item);
      let canResult = null != channel;
      if (canResult) {
        canResult = isInitialLoad.can(constants.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        canResult = !channel.isMediaThread();
      }
      return canResult;
    }).value();
  });
  obj2.canLoadMore = stateFromStoresObject.canLoadMore;
  if (!loading) {
    loading = isInitialLoad;
  }
  if (loading) {
    loading = showResolvedFlags;
  }
  if (loading) {
    loading = isInitialLoad.can(Permissions.READ_MESSAGE_HISTORY, isModeratorReportChannel);
  }
  obj2.loading = loading;
  obj2.loadMore = loadMore;
  return obj2;
});