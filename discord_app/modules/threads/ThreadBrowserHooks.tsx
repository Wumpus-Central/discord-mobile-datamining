// === Module 12761: ThreadBrowserHooks ===

// Module 12761 (ThreadBrowserHooks)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7765 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7898 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5507 */;
import ArchivedThreadsStore from "ArchivedThreadsStore" /* 7766 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;

require = fn;
let closure_5 = fn(12762).useShouldShowResolvedFlagsForChannel;
const Permissions = fn(1085).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadBrowserHooks.tsx");

export const useTrackThreadBrowserTab = function useTrackThreadBrowserTab() {
  const effect = noop.useEffect(() => {
    const result = require("ThreadUtils").trackThreadBrowserTab();
  }, []);
};
export const useActiveThreadIds = function useActiveThreadIds(arg0) {
  _require = arg0;
  const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = arg0);
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const values = _modDef12(ActiveThreadsStore.getThreadsForParent(memo.guild_id, memo.id)).values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const tmpResult = _modDef12(ActiveThreadsStore.getThreadsForParent(memo.guild_id, memo.id));
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return noop.useMemo(() => {
    const sorted = _modDef12(closure_1_1).sort((arg0, arg1) => {
      const obj = closure_1_1(closure_1_2[14]);
      return obj.compare(closure_1_8.lastMessageId(arg0), closure_1_8.lastMessageId(arg1));
    });
    let obj = _modDef12(closure_1_1);
    return sorted.reverse().value();
  }, items2);
};
export const useActiveThreads = function useActiveThreads(channel) {
  closure_129_0 = channel;
  let obj = memo(504);
  const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const values = _modDef12(ActiveThreadsStore.getThreadsForParent(memo.guild_id, memo.id)).values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const tmpResult = _modDef12(ActiveThreadsStore.getThreadsForParent(memo.guild_id, memo.id));
    return found1.map((id) => id.id).value();
  }, items1);
  closure_129_1 = stateFromStoresArray;
  const items2 = [stateFromStoresArray];
  memo = noop.useMemo(() => {
    const sorted = _modDef12(closure_1_1).sort((arg0, arg1) => {
      const obj = closure_1_1(closure_1_2[14]);
      return obj.compare(closure_1_8.lastMessageId(arg0), closure_1_8.lastMessageId(arg1));
    });
    let obj = _modDef12(closure_1_1);
    return sorted.reverse().value();
  }, items2);
  const items3 = [JoinedThreadsStore];
  const items4 = [memo];
  const tmp3 = _slicedToArray(memo(504).useStateFromStores(items3, () => _modDef12.partition(memo, (id) => closure_1_11.hasJoined(id)), items4, memo(504).statesWillNeverBeEqual), 2);
  obj = { joinedThreadIds: tmp3[0], unjoinedThreadIds: tmp3[1] };
  return obj;
};
export const useActiveGuildThreads = function useActiveGuildThreads(arg0) {
  _require = arg0;
  const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
  const items1 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const values = _modDef12(ActiveThreadsStore.getThreadsForGuild(closure_0)).values();
    const mapped = values.map((item) => stateFromStoresArray(closure_1_2[12]).values(item));
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
      const obj = stateFromStoresArray(closure_1_2[14]);
      return obj.compare(closure_1_8.lastMessageId(arg0), closure_1_8.lastMessageId(arg1));
    });
    let obj = _modDef12(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
};
export const useArchivedThreads = function useArchivedThreads(channel, LATEST_ACTIVITY, loadMore, MATCH_SOME) {
  _require = channel;
  const sortOrder = LATEST_ACTIVITY;
  dependencyMap = loadMore;
  const tagSetting = MATCH_SOME;
  const result = channel.isModeratorReportChannel();
  noop = result;
  showResolvedFlags = showResolvedFlags(channel.id).showResolvedFlags;
  let obj = require("initialize");
  const items = [ArchivedThreadsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ loading: ArchivedThreadsStore.isLoading(user.id, closure_1, closure_2, closure_3), isInitialLoad: ArchivedThreadsStore.getIsInitialLoad(user.id, closure_1, closure_2, closure_3), canLoadMore: ArchivedThreadsStore.getCanLoadMore(user.id, closure_1, closure_2, closure_3), nextOffset: ArchivedThreadsStore.getNextOffset(user.id, closure_1, closure_2, closure_3) }));
  ({ loading, nextOffset } = stateFromStoresObject);
  const isInitialLoad = stateFromStoresObject.isInitialLoad;
  const items1 = [channel, LATEST_ACTIVITY, loadMore, MATCH_SOME, nextOffset, showResolvedFlags, result];
  loadMore = noop.useCallback(() => {
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
      const obj = { guildId: null, channelId: null, sortOrder: null, tagFilter: null, tagSetting: null, offset: null };
      ({ guild_id: obj2.guildId, id: obj2.channelId } = closure_0);
      obj.sortOrder = sortOrder;
      obj.tagFilter = tagFilter;
      obj.tagSetting = tagSetting;
      obj.offset = nextOffset;
      const archivedThreads = obj.loadArchivedThreads(obj);
    }
  }, items1);
  noop.useRef(loadMore);
  const effect = noop.useEffect(() => {
    closure_9.current = current;
  });
  const items2 = [channel.id, LATEST_ACTIVITY, loadMore, isInitialLoad, showResolvedFlags];
  const effect1 = noop.useEffect(() => {
    if (isInitialLoad) {
      ref.current();
    }
  }, items2);
  const items3 = [channel.id, showResolvedFlags];
  const effect2 = noop.useEffect(() => {
    ForumActionCreatorsDefault.resort(user.id);
  }, items3);
  obj = { threadIds: null, canLoadMore: stateFromStoresObject.canLoadMore, loading: null, loadMore: null };
  const items4 = [ArchivedThreadsStore, nextOffset, isInitialLoad];
  obj.threadIds = require("initialize").useStateFromStoresArray(items4, () => {
    const tmpResult = _modDef12(ArchivedThreadsStore.getThreads(user.id, closure_1, closure_2, closure_3));
    return _modDef12(ArchivedThreadsStore.getThreads(user.id, closure_1, closure_2, closure_3)).filter((item) => {
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
  if (!loading) {
    loading = isInitialLoad;
  }
  if (loading) {
    loading = showResolvedFlags;
  }
  if (loading) {
    loading = isInitialLoad.can(Permissions.READ_MESSAGE_HISTORY, channel);
  }
  obj.loading = loading;
  obj.loadMore = loadMore;
  return obj;
};