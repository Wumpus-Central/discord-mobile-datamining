// === Module 11135: MessagesHooks ===

// Module 11135 (MessagesHooks)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 568 */;
import c from "c" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6658 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7225 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9854 */;
import ChannelInfoActionCreators from "ChannelInfoActionCreators" /* 11136 */;
import ChatUpdatesQueueDefault from "ChatUpdatesQueue" /* 11137 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10023 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5618 */;
import GuildStore from "GuildStore" /* 2074 */;
import PresenceStore from "PresenceStore" /* 4930 */;

require = fn;
const findNodeHandle = fn(17).findNodeHandle;
let closure_7 = fn(9064).updateShouldShowJumpToPresentButton;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  const cResult = require("c").c(6);
  if (cResult[0] !== arr) {
    let obj2 = {};
    _require = obj2;
    const item = arr.forEach((author) => {
      if (tmp) {
        closure_0[author.author.id] = null;
      }
      tmp = null != author.author && null != author.activity;
    });
    cResult[0] = arr;
    cResult[1] = obj2;
  } else {
    _require = cResult[1];
  }
  obj2 = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function o() {
      return _modDef12.mapValues(obj2, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
    };
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(tmp6, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => {
    const obj = {};
    const item = closure_0.forEach((author) => {
      if (tmp) {
        obj[author.author.id] = null;
      }
      tmp = null != author.author && null != author.activity;
    });
    return obj;
  }, items);
  const items1 = [PresenceStore];
  const items2 = [memo];
  return require("initialize").useStateFromStoresObject(items1, () => _modDef12.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items2);
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  const cResult = require("c").c(8);
  if (cResult[0] !== arr) {
    const _Set = Set;
    const set = new Set();
    _require = set;
    const item = arr.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
      tmp = null != applicationId.applicationId && null == applicationId.application;
    });
    cResult[0] = arr;
    cResult[1] = set;
  } else {
    _require = cResult[1];
  }
  if (cResult[2] !== tmp2) {
    const _Array = Array;
    arr = Array.from(tmp2);
    cResult[2] = tmp2;
    cResult[3] = arr;
    let tmp9 = arr;
  } else {
    tmp9 = cResult[3];
  }
  const current = tmp9;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[4] = items;
    let tmp12 = items;
  } else {
    tmp12 = cResult[4];
  }
  dependencyMap = noop.useRef(tmp12);
  if (cResult[5] !== tmp9) {
    const fn = function f() {
      if (!obj.areArraysShallowEqual(current, ref.current)) {
        const obj2 = ApplicationActionCreatorsDefault;
        const found = _modDef12(current).filter(GlobalUtils.isNotNullish);
        const arr = _modDef12(current);
        const applications = obj2.fetchApplications(found.uniq().value(), false);
        ref.current = current;
        const iter = found.uniq();
      }
      obj = discord_common_shallowEqual;
    };
    const items1 = [tmp9];
    cResult[5] = tmp9;
    cResult[6] = fn;
    cResult[7] = items1;
    let tmp14 = items1;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const effect = noop.useEffect(tmp13, tmp14);
  let obj = require("c");
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => {
    const set = new Set();
    const item = closure_0.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
      tmp = null != applicationId.applicationId && null == applicationId.application;
    });
    return Array.from(set);
  }, items);
  noop.useRef([]);
  const items1 = [memo];
  const effect = noop.useEffect(() => {
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const obj2 = ApplicationActionCreatorsDefault;
      const found = _modDef12(memo).filter(GlobalUtils.isNotNullish);
      const arr = _modDef12(memo);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = memo;
      const iter = found.uniq();
    }
    obj = discord_common_shallowEqual;
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildAvailabilityStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const obj = {};
      const values = closure_0.values();
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp7, tmp8);
  if (cResult[4] === arg0) {
    if (cResult[5] === stateFromStoresObject) {
      let tmp10 = cResult[6];
      let tmp11 = cResult[7];
    }
    const effect = noop.useEffect(tmp10, tmp11);
  }
  const fn2 = function h() {
    const values = closure_0.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.guild) {
        let obj = InviteTypeUtils;
        if (obj.isVoiceChannelInvite(tmp3)) {
          let id = tmp3.guild.id;
          let tmp8 = id;
          let result = true !== stateFromStoresObject[id];
          if (!result) {
            result = VoiceChannelStartTimeStore.hasRequestedStartTimes(tmp8);
          }
          if (!result) {
            let tmp4Result = ChannelInfoActionCreators;
            let channelInfo = tmp4Result.fetchChannelInfo(tmp8);
          }
        }
      }
      continue;
    }
  };
  const items2 = [arg0, stateFromStoresObject];
  cResult[4] = arg0;
  cResult[5] = stateFromStoresObject;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp11 = items2;
  tmp10 = fn2;
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore, GuildAvailabilityStore];
  const items1 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    const obj = {};
    const values = closure_0.values();
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
  }, items1);
  const items2 = [arg0, stateFromStoresObject];
  const effect = noop.useEffect(() => {
    const values = closure_0.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.guild) {
        let obj = InviteTypeUtils;
        if (obj.isVoiceChannelInvite(tmp3)) {
          let id = tmp3.guild.id;
          let tmp8 = id;
          let result = true !== stateFromStoresObject[id];
          if (!result) {
            result = VoiceChannelStartTimeStore.hasRequestedStartTimes(tmp8);
          }
          if (!result) {
            let tmp4Result = ChannelInfoActionCreators;
            let channelInfo = tmp4Result.fetchChannelInfo(tmp8);
          }
        }
      }
      continue;
    }
  }, items2);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { animated: false, hasHandledScroll: false, isAtBottom: false, isNearBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, _loaded: false };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  [tmp4, require] = noop.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0) {
      closure_0 = arg0;
      _require((arg0) => {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return {};
      });
    };
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const items = [tmp4, tmp5];
    cResult[2] = tmp4;
    cResult[3] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (() => {
  const tmp = _slicedToArray(noop.useState({ animated: false, hasHandledScroll: false, isAtBottom: false, isNearBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, _loaded: false }), 2);
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
    }, [])
  ];
  return items;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessagesHooks.tsx");

export const useMessageAuthorActivities = tmp2;
export const useFetchMessageApplications = tmp3;
export const useFetchVoiceChannelInviteStartTimes = tmp4;
export const useMessagesLifecycle = function useMessagesLifecycle(screenIndex) {
  ({ messages: require, isMessagesReady: importDefault, oldestUnreadMessageId: dependencyMap, channelId } = screenIndex);
  screenIndex = screenIndex.screenIndex;
  ({ updateRows: findNodeHandle, scrollToMessageId: VoiceChannelStartTimeStore } = screenIndex);
  const effect = screenIndex.useEffect(() => {
    messages_MessagesUtils.syncMessageDisplay({ messages, isMessagesReady, oldestUnreadMessageId, channelId, screenIndex, updateRows, scrollToMessageId });
    const obj2 = { messages, isMessagesReady, oldestUnreadMessageId, channelId, screenIndex, updateRows, scrollToMessageId };
    messages_MessagesUtils.recordTimings(channelId, messages);
  }, []);
  const items = [channelId, screenIndex];
  const effect1 = screenIndex.useEffect(() => () => {
    closure_2_7(channelId, screenIndex, false);
  }, items);
};
export const useScrollState = tmp5;
export const useChatUpdatesQueue = function useChatUpdatesQueue(ref5, callback) {
  closure_0 = ref5;
  closure_1 = callback;
  const items = [ref5, callback];
  const memo = noop.useMemo(() => new ChatUpdatesQueueDefault(() => {
    let tmp2 = null;
    if (null !== ref.current) {
      tmp2 = findNodeHandle(tmp.current);
    }
    return tmp2;
  }, (arg0) => {
    callback(arg0);
  }), items);
  const items1 = [memo];
  const effect = noop.useEffect(() => () => {
    memo.cleanup();
  }, items1);
  return memo;
};
export const useMessagesState = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  [tmp3, tmp4] = noop.useState(false);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp6, tmp7] = noop.useState(false);
  if (cResult[0] === tmp6) {
    if (cResult[1] === tmp3) {
      let tmp8 = cResult[2];
    }
    return tmp8;
  }
  const obj2 = { shouldForceRender: tmp3, hasJumpedToOriginalPost: tmp6, setHasJumpedToOriginalPost: tmp7, setShouldForceRender: tmp4 };
  cResult[0] = tmp6;
  cResult[1] = tmp3;
  cResult[2] = obj2;
  tmp8 = obj2;
}) : (() => {
  [tmp2, tmp3] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  return { shouldForceRender: tmp2, hasJumpedToOriginalPost: tmp4[0], setHasJumpedToOriginalPost: tmp4[1], setShouldForceRender: tmp3 };
});