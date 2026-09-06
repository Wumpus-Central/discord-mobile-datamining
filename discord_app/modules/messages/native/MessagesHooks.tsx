// discord_app/modules/messages/native/MessagesHooks.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import InviteTypeUtils from "../../instant_invite/InviteTypeUtils.tsx";
import messages_MessagesUtils from "MessagesUtils.tsx";
import ChatUpdatesQueueDefault from "../../chat/native/ChatUpdatesQueue.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import VoiceChannelStartTimeStore from "../../channel/VoiceChannelStartTimeStore.tsx";
import GuildAvailabilityStore from "../../../stores/GuildAvailabilityStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";

require = fn;
const findNodeHandle = fn(17).findNodeHandle;
let closure_7 = fn(9485).updateShouldShowJumpToPresentButton;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessagesHooks.tsx");

export const useMessageAuthorActivities = function useMessageAuthorActivities(arg0) {
  _require = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => {
    const obj = {};
    const item = closure_0.forEach((author) => {
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items);
  const items1 = [PresenceStore];
  const items2 = [memo];
  return require("initialize").useStateFromStoresObject(
    items1,
    () => _modDef12.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)),
    items2,
  );
};
export const useFetchMessageApplications = function useFetchMessageApplications(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => {
    const set = new Set();
    const item = closure_0.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    return Array.from(set);
  }, items);
  noop.useRef([]);
  const items1 = [memo];
  const effect = noop.useEffect(() => {
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const obj2 = ApplicationActionCreatorsDefault;
      const found = _modDef12(tmp3).filter(GlobalUtils.isNotNullish);
      const arr = _modDef12(tmp3);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = tmp3;
      const iter = found.uniq();
    }
  }, items1);
};
export const useFetchVoiceChannelInviteStartTimes = function useFetchVoiceChannelInviteStartTimes(stateFromStores4) {
  _require = stateFromStores4;
  const items = [GuildStore, GuildAvailabilityStore];
  const items1 = [stateFromStores4];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => {
      const obj = {};
      const values = stateFromStores4.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        if (null != nextResult.guild) {
          let obj2 = InviteTypeUtils;
          if (obj2.isVoiceChannelInvite(tmp3)) {
            let id = tmp3.guild.id;
            let tmp8 = id;
            let tmp10 = null != GuildStore.getGuild(id);
            if (tmp10) {
              tmp10 = !GuildAvailabilityStore.isUnavailable(tmp8);
            }
            obj[id] = tmp10;
          }
        }
        continue;
      }
      return obj;
    },
    items1,
  );
  const items2 = [stateFromStores4, stateFromStoresObject];
  const effect = noop.useEffect(() => {
    const values = stateFromStores4.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.guild) {
        let tmp4 = require;
        let obj = InviteTypeUtils;
        if (obj.isVoiceChannelInvite(tmp3)) {
          let id = tmp3.guild.id;
          let tmp8 = id;
          let result = true !== stateFromStoresObject[id];
          if (!result) {
            result = VoiceChannelStartTimeStore.hasRequestedStartTimes(tmp8);
          }
          if (!result) {
            let tmp4Result = tmp4(11477);
            let channelInfo = tmp4Result.fetchChannelInfo(tmp8);
          }
        }
      }
      continue;
    }
  }, items2);
};
export const useMessagesLifecycle = function useMessagesLifecycle(screenIndex) {
  ({
    messages: require,
    isMessagesReady: importDefault,
    oldestUnreadMessageId: dependencyMap,
    channelId,
  } = screenIndex);
  screenIndex = screenIndex.screenIndex;
  ({ updateRows: findNodeHandle, scrollToMessageId: VoiceChannelStartTimeStore } = screenIndex);
  const effect = screenIndex.useEffect(() => {
    const obj = {
      messages,
      isMessagesReady,
      oldestUnreadMessageId,
      channelId,
      screenIndex,
      updateRows,
      scrollToMessageId,
    };
    obj.syncMessageDisplay(obj);
    messages_MessagesUtils.recordTimings(channelId, messages);
  }, []);
  const items = [channelId, screenIndex];
  const effect1 = screenIndex.useEffect(
    () => () => {
      closure_2_7(channelId, screenIndex, false);
    },
    items,
  );
};
export const useScrollState = function useScrollState() {
  const tmp = _slicedToArray(
    noop.useState({
      animated: false,
      hasHandledScroll: false,
      isAtBottom: false,
      isNearBottom: false,
      isNearTop: false,
      decelerating: false,
      dragging: false,
      hasMoreMessagesAfterForLastUpdate: false,
      _loaded: false,
    }),
    2,
  );
  closure_0 = tmp[1];
  const items = [
    tmp[0],
    noop.useCallback((arg0) => {
      closure_0 = arg0;
      closure_0((arg0) => {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return {};
      });
    }, []),
  ];
  return items;
};
export const useChatUpdatesQueue = function useChatUpdatesQueue(ref5, callback) {
  closure_0 = ref5;
  closure_1 = callback;
  const items = [ref5, callback];
  const memo = noop.useMemo(
    () =>
      new ChatUpdatesQueueDefault(
        () => {
          let tmp2 = null;
          if (null !== ref.current) {
            tmp2 = findNodeHandle(tmp.current);
          }
          return tmp2;
        },
        (arg0) => {
          callback(arg0);
        },
      ),
    items,
  );
  const items1 = [memo];
  const effect = noop.useEffect(
    () => () => {
      memo.cleanup();
    },
    items1,
  );
  return memo;
};
export const useMessagesState = function useMessagesState() {
  [tmp2, tmp3] = _slicedToArray(noop.useState(false), 2);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  return {
    shouldForceRender: tmp2,
    hasJumpedToOriginalPost: tmp4[0],
    setHasJumpedToOriginalPost: tmp4[1],
    setShouldForceRender: tmp3,
  };
};
