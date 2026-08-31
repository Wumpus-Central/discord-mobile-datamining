// === Module 11039: useMessageAuthorActivities ===

// Module 11039 (useMessageAuthorActivities)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { findNodeHandle } from "get ActivityIndicator" /* 17 */;
import closure_6 from "_toTimestampMs" /* 10907 */;
import { updateShouldShowJumpToPresentButton as closure_7 } from "updateChatInputContainerHeight" /* 9495 */;
import closure_8 from "handleConnectionOpen" /* 4823 */;
import closure_9 from "createGuildRecordFromRust" /* 1909 */;
import closure_10 from "sortActivity" /* 4537 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/messages/native/MessagesHooks.tsx");

export const useMessageAuthorActivities = function useMessageAuthorActivities(arg0) {
  const _require = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const obj = {};
    const item = obj.forEach((author) => {
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items);
  const items1 = [closure_10];
  const items2 = [memo];
  return _require(589).useStateFromStoresObject(items1, () => memo(closure_1_2[9]).mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items2);
};
export const useFetchMessageApplications = function useFetchMessageApplications(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const set = new Set();
    const item = set.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    return Array.from(set);
  }, items);
  closure_2 = React.useRef([]);
  const items1 = [memo];
  const effect = React.useEffect(() => {
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const obj2 = memo(tmp2[11]);
      const found = memo(tmp2[9])(tmp3).filter(callback(tmp2[12]).isNotNullish);
      const arr = memo(tmp2[9])(tmp3);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = tmp3;
      const iter = found.uniq();
    }
  }, items1);
};
export const useFetchVoiceChannelInviteStartTimes = function useFetchVoiceChannelInviteStartTimes(stateFromStores4) {
  const _require = stateFromStores4;
  const items = [closure_9, closure_8];
  const items1 = [stateFromStores4];
  const stateFromStoresObject = _require(589).useStateFromStoresObject(items, () => {
    const obj = {};
    const values = stateFromStores4.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.guild) {
        let tmp4 = stateFromStores4;
        let tmp5 = closure_1_2;
        let obj2 = stateFromStores4(closure_1_2[13]);
        let tmp6 = nextResult;
        if (obj2.isVoiceChannelInvite(tmp3)) {
          let tmp7 = nextResult;
          let id = tmp3.guild.id;
          let tmp9 = closure_1_9;
          let tmp8 = id;
          let tmp10 = null != closure_1_9.getGuild(id);
          if (tmp10) {
            let tmp11 = closure_1_8;
            let tmp12 = id;
            tmp10 = !closure_1_8.isUnavailable(tmp8);
          }
          obj[id] = tmp10;
        }
      }
      continue;
    }
    return obj;
  }, items1);
  const items2 = [stateFromStores4, stateFromStoresObject];
  const effect = React.useEffect(() => {
    const values = stateFromStores4.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.guild) {
        let tmp4 = stateFromStores4;
        let tmp5 = closure_1_2;
        let obj = stateFromStores4(closure_1_2[13]);
        let tmp6 = nextResult;
        if (obj.isVoiceChannelInvite(tmp3)) {
          let tmp7 = nextResult;
          let id = tmp3.guild.id;
          let tmp8 = id;
          let tmp9 = stateFromStoresObject;
          let result = true !== stateFromStoresObject[id];
          if (!result) {
            let tmp11 = closure_1_6;
            let tmp12 = id;
            result = closure_1_6.hasRequestedStartTimes(tmp8);
          }
          if (!result) {
            let tmp4Result = tmp4(tmp5[14]);
            let tmp13 = id;
            let channelInfo = tmp4Result.fetchChannelInfo(tmp8);
          }
        }
      }
      continue;
    }
  }, items2);
};
export const useMessagesLifecycle = function useMessagesLifecycle(screenIndex) {
  ({ messages: require, isMessagesReady: importDefault, oldestUnreadMessageId: dependencyMap, channelId } = screenIndex);
  screenIndex = screenIndex.screenIndex;
  ({ updateRows: findNodeHandle, scrollToMessageId: closure_6 } = screenIndex);
  const effect = screenIndex.useEffect(() => {
    let obj = closure_1_0(closure_1_2[15]);
    obj = { messages: closure_0, isMessagesReady: closure_1, oldestUnreadMessageId: closure_2, channelId, screenIndex, updateRows: closure_5, scrollToMessageId: closure_6 };
    obj.syncMessageDisplay(obj);
    closure_1_0(closure_1_2[15]).recordTimings(channelId, closure_0);
  }, []);
  const items = [channelId, screenIndex];
  const effect1 = screenIndex.useEffect(() => () => {
    closure_1_7(closure_3, closure_4, false);
  }, items);
};
export const useScrollState = function useScrollState() {
  const tmp = callback(React.useState({ animated: false, hasHandledScroll: false, isAtBottom: false, isNearBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, _loaded: false }), 2);
  closure_0 = tmp[1];
  const items = [
    tmp[0],
    React.useCallback((arg0) => {
      const callback = arg0;
      callback((arg0) => {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return {};
      });
    }, [])
  ];
  return items;
};
export const useChatUpdatesQueue = function useChatUpdatesQueue(ref5, callback) {
  closure_0 = ref5;
  closure_1 = callback;
  const items = [ref5, callback];
  const memo = React.useMemo(() => new callback(memo[16])(() => {
    let tmp2 = null;
    if (null !== ref.current) {
      tmp2 = closure_1_5(tmp.current);
    }
    return tmp2;
  }, (arg0) => {
    callback(arg0);
  }), items);
  const items1 = [memo];
  const effect = React.useEffect(() => () => {
    closure_2.cleanup();
  }, items1);
  return memo;
};
export const useMessagesState = function useMessagesState() {
  [tmp2, tmp3] = callback(React.useState(false), 2);
  const tmp4 = callback(React.useState(false), 2);
  return { shouldForceRender: tmp2, hasJumpedToOriginalPost: tmp4[0], setHasJumpedToOriginalPost: tmp4[1], setShouldForceRender: tmp3 };
};