// === Module 11940: useTrackThreadBrowserTab ===

// Module 11940 (useTrackThreadBrowserTab)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { useShouldShowResolvedFlagsForChannel as closure_5 } from "useReportToModChannelFiltersStore" /* 11941 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "getUncachedChannelPermissions" /* 4021 */;
import closure_8 from "generateOldThreadCutoff" /* 4772 */;
import closure_9 from "handleThreadCreateOrUpdate" /* 4969 */;
import closure_10 from "listKey" /* 7513 */;
import closure_11 from "storeThread" /* 4023 */;
import { Permissions } from "sum" /* 505 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/threads/ThreadBrowserHooks.tsx");

export const useTrackThreadBrowserTab = function useTrackThreadBrowserTab() {
  const effect = React.useEffect(() => {
    const result = callback(table[10]).trackThreadBrowserTab();
  }, []);
};
export const useActiveThreadIds = function useActiveThreadIds(arg0) {
  const _require = arg0;
  const items = [closure_7, closure_9, closure_6];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = arg0);
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    const tmp = stateFromStoresArray(closure_1_2[12]);
    const values = stateFromStoresArray(closure_1_2[12])(closure_1_9.getThreadsForParent(memo.guild_id, memo.id)).values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(memo(closure_1_2[13]).isNotNullish);
    const found1 = found.filter((arg0) => closure_7.can(constants.VIEW_CHANNEL, arg0));
    const tmpResult = stateFromStoresArray(closure_1_2[12])(closure_1_9.getThreadsForParent(memo.guild_id, memo.id));
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const sorted = stateFromStoresArray(closure_1_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = callback(table[14]);
      return obj.compare(closure_8.lastMessageId(arg0), closure_8.lastMessageId(arg1));
    });
    let obj = stateFromStoresArray(closure_1_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
};
export const useActiveThreads = function useActiveThreads(channel) {
  let memo = channel;
  let obj = memo(589);
  const items = [closure_7, closure_9, closure_6];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const tmp = stateFromStoresArray(closure_1_2[12]);
    const values = stateFromStoresArray(closure_1_2[12])(closure_1_9.getThreadsForParent(memo.guild_id, memo.id)).values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(memo(closure_1_2[13]).isNotNullish);
    const found1 = found.filter((arg0) => closure_7.can(constants.VIEW_CHANNEL, arg0));
    const tmpResult = stateFromStoresArray(closure_1_2[12])(closure_1_9.getThreadsForParent(memo.guild_id, memo.id));
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  memo = React.useMemo(() => {
    const sorted = stateFromStoresArray(closure_1_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = callback(table[14]);
      return obj.compare(closure_8.lastMessageId(arg0), closure_8.lastMessageId(arg1));
    });
    let obj = stateFromStoresArray(closure_1_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
  const items3 = [closure_11];
  const items4 = [memo];
  const tmp3 = callback(memo(589).useStateFromStores(items3, () => stateFromStoresArray(closure_1_2[12]).partition(memo, (id) => closure_11.hasJoined(id)), items4, memo(589).statesWillNeverBeEqual), 2);
  obj = { joinedThreadIds: tmp3[0], unjoinedThreadIds: tmp3[1] };
  return obj;
};
export const useActiveGuildThreads = function useActiveGuildThreads(arg0) {
  const _require = arg0;
  const items = [closure_7, closure_9, closure_6];
  const items1 = [arg0];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    const tmp = stateFromStoresArray(closure_1_2[12]);
    const values = stateFromStoresArray(closure_1_2[12])(closure_1_9.getThreadsForGuild(callback)).values();
    const mapped = values.map((arg0) => callback(table[12]).values(arg0));
    const tmpResult = stateFromStoresArray(closure_1_2[12])(closure_1_9.getThreadsForGuild(callback));
    const mapped1 = mapped.flatten().map((id) => channel.getChannel(id.id));
    const found = mapped1.filter(callback(closure_1_2[13]).isNotNullish);
    const found1 = found.filter((arg0) => closure_7.can(constants.VIEW_CHANNEL, arg0));
    const flattenResult = mapped.flatten();
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const sorted = stateFromStoresArray(closure_1_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = callback(table[14]);
      return obj.compare(closure_8.lastMessageId(arg0), closure_8.lastMessageId(arg1));
    });
    let obj = stateFromStoresArray(closure_1_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
};
export const useArchivedThreads = function useArchivedThreads(channel, LATEST_ACTIVITY, loadMore, MATCH_SOME) {
  const _require = channel;
  closure_1 = LATEST_ACTIVITY;
  dependencyMap = loadMore;
  closure_3 = MATCH_SOME;
  const result = channel.isModeratorReportChannel();
  const React = result;
  showResolvedFlags = showResolvedFlags(channel.id).showResolvedFlags;
  let obj = _require(589);
  const items = [closure_10];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ loading: closure_1_10.isLoading(user.id, closure_1, closure_2, closure_3), isInitialLoad: closure_1_10.getIsInitialLoad(user.id, closure_1, closure_2, closure_3), canLoadMore: closure_1_10.getCanLoadMore(user.id, closure_1, closure_2, closure_3), nextOffset: closure_1_10.getNextOffset(user.id, closure_1, closure_2, closure_3) }));
  ({ loading, nextOffset } = stateFromStoresObject);
  const isInitialLoad = stateFromStoresObject.isInitialLoad;
  const items1 = [channel, LATEST_ACTIVITY, loadMore, MATCH_SOME, nextOffset, showResolvedFlags, result];
  const callback = React.useCallback(() => {
    const canResult = isInitialLoad.can(closure_1_12.READ_MESSAGE_HISTORY, closure_0);
    let tmp3 = !canResult;
    if (canResult) {
      let tmp4 = closure_4;
      if (closure_4) {
        tmp4 = !showResolvedFlags;
      }
      tmp3 = tmp4;
    }
    if (!tmp3) {
      let obj = LATEST_ACTIVITY(loadMore[15]);
      obj = { guildId: null, channelId: null, sortOrder: null, tagFilter: null, tagSetting: null, offset: null };
      ({ guild_id: obj2[0], id: obj2[1] } = closure_0);
      obj[2] = LATEST_ACTIVITY;
      obj[3] = loadMore;
      obj[4] = closure_3;
      obj[5] = nextOffset;
      const archivedThreads = obj.loadArchivedThreads(obj);
    }
  }, items1);
  closure_9 = React.useRef(callback);
  const effect = React.useEffect(() => {
    closure_9.current = callback;
  });
  const items2 = [channel.id, LATEST_ACTIVITY, loadMore, isInitialLoad, showResolvedFlags];
  const effect1 = React.useEffect(() => {
    if (isInitialLoad) {
      ref.current();
    }
  }, items2);
  const items3 = [channel.id, showResolvedFlags];
  const effect2 = React.useEffect(() => {
    LATEST_ACTIVITY(loadMore[16]).resort(user.id);
  }, items3);
  obj = {
    threadIds: _require(589).useStateFromStoresArray(items4, () => {
      const tmp = LATEST_ACTIVITY(loadMore[12]);
      const tmpResult = LATEST_ACTIVITY(loadMore[12])(closure_1_10.getThreads(user.id, LATEST_ACTIVITY, loadMore, closure_3));
      return LATEST_ACTIVITY(loadMore[12])(closure_1_10.getThreads(user.id, LATEST_ACTIVITY, loadMore, closure_3)).filter((arg0) => {
        if (closure_4) {
          if (!closure_5) {
            return false;
          }
        }
        channel = closure_1_6.getChannel(arg0);
        let canResult = null != channel;
        if (canResult) {
          canResult = closure_1_7.can(closure_1_12.VIEW_CHANNEL, channel);
        }
        if (canResult) {
          canResult = !channel.isMediaThread();
        }
        return canResult;
      }).value();
    }),
    canLoadMore: stateFromStoresObject.canLoadMore,
    loading: null,
    loadMore: null
  };
  items4 = [closure_10, nextOffset, isInitialLoad];
  if (!loading) {
    loading = isInitialLoad;
  }
  if (loading) {
    loading = showResolvedFlags;
  }
  if (loading) {
    loading = isInitialLoad.can(Permissions.READ_MESSAGE_HISTORY, channel);
  }
  obj[2] = loading;
  obj[3] = callback;
  return obj;
};