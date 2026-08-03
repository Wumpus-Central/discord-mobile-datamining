import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { useShouldShowResolvedFlagsForChannel as closure_5 } from "useReportToModChannelFiltersStore";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate";
import listKey from "listKey";
import storeThread from "storeThread";
import { Permissions } from "sum";

const require = arg1;
let result = require("useReportToModChannelFiltersStore").fileFinishedImporting("modules/threads/ThreadBrowserHooks.tsx");

export const useTrackThreadBrowserTab = function useTrackThreadBrowserTab() {
  const effect = React.useEffect(() => {
    const result = callback(table[10]).trackThreadBrowserTab();
  }, []);
};
export const useActiveThreadIds = function useActiveThreadIds(arg0) {
  const _require = arg0;
  const items = [getUncachedChannelPermissions, handleThreadCreateOrUpdate, ensureGuildLoaded];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = arg0);
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    const tmp = stateFromStoresArray(outer1_2[12]);
    const values = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForParent(memo.guild_id, memo.id)).values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(memo(outer1_2[13]).isNotNullish);
    const found1 = found.filter((arg0) => getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, arg0));
    const tmpResult = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForParent(memo.guild_id, memo.id));
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const sorted = stateFromStoresArray(outer1_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = callback(table[14]);
      return obj.compare(generateOldThreadCutoff.lastMessageId(arg0), generateOldThreadCutoff.lastMessageId(arg1));
    });
    let obj = stateFromStoresArray(outer1_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
};
export const useActiveThreads = function useActiveThreads(channel) {
  let memo = channel;
  let obj = memo(589);
  const items = [getUncachedChannelPermissions, handleThreadCreateOrUpdate, ensureGuildLoaded];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const tmp = stateFromStoresArray(outer1_2[12]);
    const values = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForParent(memo.guild_id, memo.id)).values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(memo(outer1_2[13]).isNotNullish);
    const found1 = found.filter((arg0) => getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, arg0));
    const tmpResult = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForParent(memo.guild_id, memo.id));
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  memo = React.useMemo(() => {
    const sorted = stateFromStoresArray(outer1_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = callback(table[14]);
      return obj.compare(generateOldThreadCutoff.lastMessageId(arg0), generateOldThreadCutoff.lastMessageId(arg1));
    });
    let obj = stateFromStoresArray(outer1_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
  const items3 = [storeThread];
  const items4 = [memo];
  const tmp3 = callback(memo(589).useStateFromStores(items3, () => stateFromStoresArray(outer1_2[12]).partition(memo, (id) => storeThread.hasJoined(id)), items4, memo(589).statesWillNeverBeEqual), 2);
  obj = { joinedThreadIds: tmp3[0], unjoinedThreadIds: tmp3[1] };
  return obj;
};
export const useActiveGuildThreads = function useActiveGuildThreads(arg0) {
  const _require = arg0;
  const items = [getUncachedChannelPermissions, handleThreadCreateOrUpdate, ensureGuildLoaded];
  const items1 = [arg0];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    const tmp = stateFromStoresArray(outer1_2[12]);
    const values = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForGuild(callback)).values();
    const mapped = values.map((arg0) => callback(table[12]).values(arg0));
    const tmpResult = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForGuild(callback));
    const mapped1 = mapped.flatten().map((id) => channel.getChannel(id.id));
    const found = mapped1.filter(callback(outer1_2[13]).isNotNullish);
    const found1 = found.filter((arg0) => getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, arg0));
    const flattenResult = mapped.flatten();
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const sorted = stateFromStoresArray(outer1_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = callback(table[14]);
      return obj.compare(generateOldThreadCutoff.lastMessageId(arg0), generateOldThreadCutoff.lastMessageId(arg1));
    });
    let obj = stateFromStoresArray(outer1_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
};
export const useArchivedThreads = function useArchivedThreads(channel, LATEST_ACTIVITY, loadMore, MATCH_SOME) {
  let loading;
  let nextOffset;
  const _require = channel;
  let closure_1 = LATEST_ACTIVITY;
  const dependencyMap = loadMore;
  let _slicedToArray = MATCH_SOME;
  const result = channel.isModeratorReportChannel();
  const React = result;
  showResolvedFlags = showResolvedFlags(channel.id).showResolvedFlags;
  let obj = _require(589);
  const items = [listKey];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ loading: outer1_10.isLoading(user.id, closure_1, closure_2, _slicedToArray), isInitialLoad: outer1_10.getIsInitialLoad(user.id, closure_1, closure_2, _slicedToArray), canLoadMore: outer1_10.getCanLoadMore(user.id, closure_1, closure_2, _slicedToArray), nextOffset: outer1_10.getNextOffset(user.id, closure_1, closure_2, _slicedToArray) }));
  ({ loading, nextOffset } = stateFromStoresObject);
  const isInitialLoad = stateFromStoresObject.isInitialLoad;
  const items1 = [channel, LATEST_ACTIVITY, loadMore, MATCH_SOME, nextOffset, showResolvedFlags, result];
  const callback = React.useCallback(() => {
    const canResult = isInitialLoad.can(outer1_12.READ_MESSAGE_HISTORY, closure_0);
    let tmp3 = !canResult;
    if (canResult) {
      let tmp4 = noop;
      if (noop) {
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
      obj[4] = _slicedToArray;
      obj[5] = nextOffset;
      const archivedThreads = obj.loadArchivedThreads(obj);
    }
  }, items1);
  let handleThreadCreateOrUpdate = React.useRef(callback);
  const effect = React.useEffect(() => {
    handleThreadCreateOrUpdate.current = callback;
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
  obj = { threadIds: null, canLoadMore: null, loading: null, loadMore: null };
  const items4 = [listKey, nextOffset, isInitialLoad];
  obj[0] = _require(589).useStateFromStoresArray(items4, () => {
    const tmp = LATEST_ACTIVITY(loadMore[12]);
    const tmpResult = LATEST_ACTIVITY(loadMore[12])(outer1_10.getThreads(user.id, LATEST_ACTIVITY, loadMore, _slicedToArray));
    return LATEST_ACTIVITY(loadMore[12])(outer1_10.getThreads(user.id, LATEST_ACTIVITY, loadMore, _slicedToArray)).filter((arg0) => {
      if (noop) {
        if (!closure_5) {
          return false;
        }
      }
      const channel = outer1_6.getChannel(arg0);
      let canResult = null != channel;
      if (canResult) {
        canResult = outer1_7.can(outer1_12.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        canResult = !channel.isMediaThread();
      }
      return canResult;
    }).value();
  });
  obj[1] = stateFromStoresObject.canLoadMore;
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