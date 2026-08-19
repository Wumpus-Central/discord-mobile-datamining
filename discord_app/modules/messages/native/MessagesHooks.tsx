// discord_app/modules/messages/native/MessagesHooks.tsx
import getVisibleMessages from "MessagesUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { findNodeHandle } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import _toTimestampMs from "../../channel/VoiceChannelStartTimeStore.tsx";
import { updateShouldShowJumpToPresentButton as closure_7 } from "../../chat_input/native/useChatBottomManagerUIStore.tsx";
import handleConnectionOpen from "../../../stores/GuildAvailabilityStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import sortActivity from "../../../stores/PresenceStore.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/messages/native/MessagesHooks.tsx");

export const useMessageAuthorActivities = function useMessageAuthorActivities(arg0) {
  const _require = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const obj = {};
    const item = obj.forEach((item, index) => {
      if (tmp) {
        obj[item.author.id] = null;
      }
      tmp = null != item.author && null != item.activity;
    });
    return obj;
  }, items);
  const items1 = [closure_10];
  const items2 = [memo];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items1, () => memo(dependencyMap[9]).mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items2);
};
export const useFetchMessageApplications = function useFetchMessageApplications(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const set = new Set();
    const item = set.forEach((item, index) => {
      if (tmp) {
        set.add(item.applicationId);
      }
      tmp = null != item.applicationId && null == item.application;
    });
    return Array.from(set);
  }, items);
  closure_2 = React.useRef([]);
  const items1 = [memo];
  const effect = React.useEffect(() => {
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const obj2 = memo(ref[11]);
      const found = memo(ref[9])(memo).filter(callback(ref[12]).isNotNullish);
      const arr = memo(ref[9])(memo);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = memo;
      const iter = found.uniq();
    }
    obj = callback(ref[10]);
  }, items1);
};
export const useFetchVoiceChannelInviteStartTimes = function useFetchVoiceChannelInviteStartTimes(stateFromStores4) {
  const _require = stateFromStores4;
  const items = [closure_9, closure_8];
  const items1 = [stateFromStores4];
  const stateFromStoresObject = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
    const obj = {};
    const values = stateFromStores4.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.guild) {
        let obj2 = stateFromStores4(dependencyMap[13]);
        if (obj2.isVoiceChannelInvite(tmp3)) {
          let id = tmp3.guild.id;
          let tmp8 = id;
          let tmp10 = null != closure_1_9.getGuild(id);
          if (tmp10) {
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
        let obj = stateFromStores4(dependencyMap[13]);
        if (obj.isVoiceChannelInvite(tmp3)) {
          let id = tmp3.guild.id;
          let tmp8 = id;
          let result = true !== stateFromStoresObject[id];
          if (!result) {
            result = closure_1_6.hasRequestedStartTimes(tmp8);
          }
          if (!result) {
            let tmp4Result = stateFromStores4(dependencyMap[14]);
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
    const obj = { messages: closure_0, isMessagesReady: closure_1, oldestUnreadMessageId: closure_2, channelId, screenIndex, updateRows: closure_5, scrollToMessageId: closure_6 };
    obj.syncMessageDisplay(obj);
    getVisibleMessages.recordTimings(channelId, closure_0);
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