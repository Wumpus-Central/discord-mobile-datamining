// === Module 11135: MessagesHooks ===

// Module 11135 (MessagesHooks)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import shallowEqual from "shallowEqual" /* 568 */;
import react2 from "react" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6658 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7225 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9064 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9854 */;
import ChannelInfoActionCreators from "ChannelInfoActionCreators" /* 11136 */;
import ChatUpdatesQueueDefault from "ChatUpdatesQueue" /* 11137 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10023 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5618 */;
import GuildStore from "GuildStore" /* 2074 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

const findNodeHandle = react_native.findNodeHandle;
let closure_7 = useChatBottomManagerUIStore.updateShouldShowJumpToPresentButton;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  let closure_0;
  let tmp6;
  let tmp8;
  let tmp9;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] !== arr) {
    let obj2 = {};
    _require = obj2;
    const item = arr.forEach((author) => {
      const tmp = null != author.author && null != author.activity;
      if (tmp) {
        closure_0[author.author.id] = null;
      }
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
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function o() {
      let primaryActivity;
      const obj = _modDef12;
      return obj.mapValues(obj2, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
    };
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(tmp6, tmp8, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    const obj = {};
    const item = closure_0.forEach((author) => {
      const tmp = null != author.author && null != author.activity;
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items);
  let obj = require("get initialized");
  const items1 = [PresenceStore];
  const items2 = [memo];
  return obj.useStateFromStoresObject(items1, () => {
    let primaryActivity;
    const obj = _modDef12;
    return obj.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arr) {
  let ref;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] !== arr) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    _require = set;
    const item = arr.forEach((applicationId) => {
      const tmp = null != applicationId.applicationId && null == applicationId.application;
      if (tmp) {
        set.add(applicationId.applicationId);
      }
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
    tmp7 = arr;
  } else {
    tmp7 = cResult[3];
  }
  const current = tmp7;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  dependencyMap = react.useRef(tmp10);
  if (cResult[5] !== tmp7) {
    const fn = function f() {
      const obj = shallowEqual;
      if (!obj.areArraysShallowEqual(current, ref.current)) {
        const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
        ApplicationActionCreatorsDefault;
        const arr = _modDef12(current);
        const found = arr.filter(GlobalUtils.isNotNullish);
        const iter = found.uniq();
        const applications = fetchApplications(iter.value(), false);
        ref.current = current;
      }
    };
    const items1 = [tmp7];
    cResult[5] = tmp7;
    cResult[6] = fn;
    cResult[7] = items1;
    tmp12 = items1;
    tmp11 = fn;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const effect = react.useEffect(tmp11, tmp12);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    set = new Set();
    const item = closure_0.forEach((applicationId) => {
      const tmp = null != applicationId.applicationId && null == applicationId.application;
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    return Array.from(set);
  }, items);
  const ref = react.useRef([]);
  const items1 = [memo];
  const effect = react.useEffect(() => {
    const obj = shallowEqual;
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
      ApplicationActionCreatorsDefault;
      const arr = _modDef12(memo);
      const found = arr.filter(GlobalUtils.isNotNullish);
      const iter = found.uniq();
      const applications = fetchApplications(iter.value(), false);
      ref.current = memo;
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(8);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildAvailabilityStore];
    cResult[0] = items;
    first = items;
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
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
  if (cResult[4] === arg0) {
    let tmp10;
    let tmp11;
    if (cResult[5] === stateFromStoresObject) {
      tmp10 = cResult[6];
      tmp11 = cResult[7];
    }
    const effect = react.useEffect(tmp10, tmp11);
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
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildStore, GuildAvailabilityStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
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
  const effect = react.useEffect(() => {
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_129_0;
  let first;
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { animated: false, hasHandledScroll: false, isAtBottom: false, isNearBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, _loaded: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  [tmp4, closure_129_0] = react.useState(first);
  _slicedToArray(react.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0) {
      let closure_0 = arg0;
      closure_1_0((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return obj;
      });
    };
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const items = [tmp4, tmp5];
    cResult[2] = tmp4;
    cResult[3] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (() => {
  const tmp = _slicedToArray(react.useState({ animated: false, hasHandledScroll: false, isAtBottom: false, isNearBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, _loaded: false }), 2);
  let closure_0 = tmp[1];
  const items = [
    tmp[0],
    react.useCallback((arg0) => {
      closure_0 = arg0;
      closure_0((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return obj;
      });
    }, [])
  ];
  return items;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  let tmp4;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  [tmp3, tmp4] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp6, tmp7] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === tmp6) {
    let tmp8;
    if (cResult[1] === tmp3) {
      tmp8 = cResult[2];
    }
    return tmp8;
  }
  const obj2 = { shouldForceRender: tmp3, hasJumpedToOriginalPost: tmp6, setHasJumpedToOriginalPost: tmp7, setShouldForceRender: tmp4 };
  cResult[0] = tmp6;
  cResult[1] = tmp3;
  cResult[2] = obj2;
  tmp8 = obj2;
}) : (() => {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  return { shouldForceRender: tmp2, hasJumpedToOriginalPost: tmp4[0], setHasJumpedToOriginalPost: tmp4[1], setShouldForceRender: tmp3 };
});
let result = size.fileFinishedImporting("modules/messages/native/MessagesHooks.tsx");

export const useMessageAuthorActivities = tmp2;
export const useFetchMessageApplications = tmp3;
export const useFetchVoiceChannelInviteStartTimes = tmp4;
export const useMessagesLifecycle = function useMessagesLifecycle(screenIndex) {
  let channelId;
  let isMessagesReady;
  let messages;
  let oldestUnreadMessageId;
  let require;
  let scrollToMessageId;
  let updateRows;
  ({ messages: require, isMessagesReady: importDefault, oldestUnreadMessageId: dependencyMap, channelId } = screenIndex);
  screenIndex = screenIndex.screenIndex;
  ({ updateRows: findNodeHandle, scrollToMessageId: VoiceChannelStartTimeStore } = screenIndex);
  const effect = screenIndex.useEffect(() => {
    const obj = messages_MessagesUtils;
    const obj2 = { messages: require, isMessagesReady: importDefault, oldestUnreadMessageId: dependencyMap, channelId, screenIndex, updateRows: findNodeHandle, scrollToMessageId: VoiceChannelStartTimeStore };
    obj.syncMessageDisplay(obj2);
    const obj3 = messages_MessagesUtils;
    obj3.recordTimings(channelId, require);
  }, []);
  const items = [channelId, screenIndex];
  const effect1 = screenIndex.useEffect(() => () => {
    closure_2_7(channelId, screenIndex, false);
  }, items);
};
export const useScrollState = tmp5;
export const useChatUpdatesQueue = function useChatUpdatesQueue(ref5, callback) {
  let closure_0 = ref5;
  let closure_1 = callback;
  const items = [ref5, callback];
  const memo = react.useMemo(() => {
    let ref;
    const tmp = new ChatUpdatesQueueDefault(() => {
      let tmp2 = null;
      if (null !== ref.current) {
        tmp2 = findNodeHandle(tmp.current);
      }
      return tmp2;
    }, (arg0) => {
      callback(arg0);
    });
    return tmp;
  }, items);
  const items1 = [memo];
  const effect = react.useEffect(() => () => {
    memo.cleanup();
  }, items1);
  return memo;
};
export const useMessagesState = tmp6;