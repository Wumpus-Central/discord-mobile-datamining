// === Module 7353: ThreadHooks ===

// Module 7353 (ThreadHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1099 */;
import shouldAgeVerifyForAgeGate2 from "shouldAgeVerifyForAgeGate" /* 6639 */;
import AgeGateUtils from "AgeGateUtils" /* 6648 */;
import isSystemMessageDefault from "isSystemMessage" /* 6802 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 7359 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 7361 */;
import useIsRemoteDefault from "useIsRemote" /* 7362 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 7363 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import createExperiment from "createExperiment" /* 5175 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6756 */;
import ThreadMemberListStore from "ThreadMemberListStore" /* 7354 */;

require = fn;
function canUnarchiveThread(stateFromStores) {
  let canResult = null != stateFromStores;
  if (canResult) {
    canResult = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, stateFromStores);
  }
  let channel = null;
  if (null != stateFromStores) {
    channel = ChannelStore.getChannel(stateFromStores.parent_id);
  }
  let canResult1 = null != channel;
  if (canResult1) {
    canResult1 = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, channel);
  }
  if (canResult) {
    canResult = canResult1;
  }
  const items = [PermissionStore];
  const first = _slicedToArray(items, 1)[0];
  let canResult2 = null != stateFromStores;
  if (canResult2) {
    canResult2 = first.can(constants.MANAGE_THREADS, stateFromStores);
  }
  const tmp9 = null == stateFromStores || !stateFromStores.isThread() || stateFromStores.isMediaThread();
  let tmp10 = !tmp9;
  if (!tmp9) {
    const threadMetadata = stateFromStores.threadMetadata;
    let locked;
    if (threadMetadata != null) {
      locked = threadMetadata.locked;
    }
    if (locked) {
      canResult = canResult2;
    }
    tmp10 = canResult;
  }
  return tmp10;
}
const THREADED_CHANNEL_TYPES = fn(4825).THREADED_CHANNEL_TYPES;
const Constants = fn(1087);
({ Permissions: closure_12, MessageFlags: map1, ChannelTypes: closure_14 } = Constants);
let obj = { id: "2022-07_voice_in_threads", label: "Voice in Threads", kind: "guild", defaultConfig: { enabled: false }, treatments: null };
let items = [{ id: 1, label: "On", config: { enabled: true } }];
obj.treatments = items;
const importDefaultResultResult = createExperiment(obj);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanStartPublicThread(type, hasFlag) {
  _require = type;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== type) {
    const fn = function s() {
      if (type.isForumLikeChannel()) {
        let SEND_MESSAGES = constants.SEND_MESSAGES;
      } else {
        SEND_MESSAGES = BigFlagUtilsAll.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
      }
      return PermissionStore.can(SEND_MESSAGES, type);
    };
    const items1 = [type];
    cResult[1] = type;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === type) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === hasFlag) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  let flag = false;
  if (stateFromStores) {
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(type.type)) {
      flag = true;
      if (null != hasFlag) {
        flag = false;
        if (!hasFlag.hasFlag(constants2.HAS_THREAD)) {
          flag = true;
          if (isSystemMessageDefault(hasFlag)) {
            flag = false;
          }
        }
      }
    }
  }
  cResult[4] = type;
  cResult[5] = stateFromStores;
  cResult[6] = hasFlag;
  cResult[7] = flag;
  tmp9 = flag;
  const tmpResult = require("initialize");
}) : (function useCanStartPublicThread(type, hasFlag) {
  _require = type;
  const items = [PermissionStore];
  const items1 = [type];
  let flag = false;
  if (obj.useStateFromStores(items, () => {
    if (type.isForumLikeChannel()) {
      let SEND_MESSAGES = constants.SEND_MESSAGES;
    } else {
      SEND_MESSAGES = BigFlagUtilsAll.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
    }
    return PermissionStore.can(SEND_MESSAGES, type);
  }, items1)) {
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(type.type)) {
      flag = true;
      if (null != hasFlag) {
        flag = false;
        if (!hasFlag.hasFlag(constants2.HAS_THREAD)) {
          flag = true;
          if (isSystemMessageDefault(hasFlag)) {
            flag = false;
          }
        }
      }
    }
  }
  return flag;
});
let closure_16 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanStartPrivateThread(type) {
  _require = type;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== type) {
    const fn = function o() {
      return PermissionStore.can(BigFlagUtilsAll.combine(constants.CREATE_PRIVATE_THREADS), closure_0);
    };
    const items1 = [type];
    cResult[1] = type;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === type) {
    if (cResult[5] === stateFromStores) {
      let tmp9 = cResult[6];
    }
    return tmp9;
  }
  let tmp11 = type.type === constants3.GUILD_TEXT || type.type === tmp10.GUILD_APP;
  if (tmp11) {
    let flag = false;
    if (stateFromStores) {
      flag = false;
      if (THREADED_CHANNEL_TYPES.has(type.type)) {
        flag = true;
      }
    }
    tmp11 = flag;
  }
  cResult[4] = type;
  cResult[5] = stateFromStores;
  cResult[6] = tmp11;
  tmp9 = tmp11;
  const tmpResult = require("initialize");
}) : (function useCanStartPrivateThread(type) {
  _require = type;
  const items = [PermissionStore];
  const items1 = [type];
  let tmp3 = type.type === constants3.GUILD_TEXT;
  const stateFromStores = require("initialize").useStateFromStores(items, () => PermissionStore.can(BigFlagUtilsAll.combine(constants.CREATE_PRIVATE_THREADS), closure_0), items1);
  if (!tmp3) {
    tmp3 = type.type === tmp2.GUILD_APP;
  }
  if (tmp3) {
    let flag = false;
    if (stateFromStores) {
      flag = false;
      if (THREADED_CHANNEL_TYPES.has(type.type)) {
        flag = true;
      }
    }
    tmp3 = flag;
  }
  return tmp3;
});
let closure_17 = tmp6;
fn(558);
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanStartThread(arg0) {
  let tmp = closure_16(arg0);
  if (!tmp) {
    tmp = closure_17(arg0);
  }
  return tmp;
}) : (function useCanStartThread(arg0) {
  let tmp = closure_16(arg0);
  if (!tmp) {
    tmp = closure_17(arg0);
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanViewThreadForMessage(id) {
  _require = id;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      return ChannelStore.getChannel(SnowflakeUtilsDefault.castMessageIdAsChannelId(id.id));
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== id) {
    const items1 = [id];
    cResult[3] = id;
    cResult[4] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[4];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[5] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== stateFromStores) {
    class S {
      constructor() {
        return closure_9.can(Permissions.VIEW_CHANNEL, closure_1);
      }
    }
    const items3 = [stateFromStores];
    cResult[6] = stateFromStores;
    cResult[7] = S;
    cResult[8] = items3;
    let tmp12 = items3;
  } else {
    class S {
      constructor() {
        return closure_9.can(Permissions.VIEW_CHANNEL, closure_1);
      }
    }
    tmp12 = cResult[8];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, S, tmp12);
  if (cResult[9] === stateFromStores1) {
    class S {
      constructor() {
        return closure_9.can(Permissions.VIEW_CHANNEL, closure_1);
      }
    }
  }
  let hasFlagResult = id.hasFlag(constants2.HAS_THREAD);
  if (hasFlagResult) {
    class S {
      constructor() {
        return closure_9.can(Permissions.VIEW_CHANNEL, closure_1);
      }
    }
    hasFlagResult = null != stateFromStores && stateFromStores1;
    const tmp15 = null != stateFromStores && stateFromStores1;
  }
  cResult[9] = stateFromStores1;
  cResult[10] = id;
  cResult[11] = stateFromStores;
  cResult[12] = hasFlagResult;
  const tmpResult2 = require("initialize");
}) : (function useCanViewThreadForMessage(hasFlag) {
  _require = hasFlag;
  const items = [ChannelStore];
  const items1 = [hasFlag];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(SnowflakeUtilsDefault.castMessageIdAsChannelId(hasFlag.id)), items1);
  const obj = require("initialize");
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores), items3);
  let hasFlagResult = hasFlag.hasFlag(constants2.HAS_THREAD);
  if (hasFlagResult) {
    hasFlagResult = null != stateFromStores && stateFromStores1;
    const tmp5 = null != stateFromStores && stateFromStores1;
  }
  return hasFlagResult;
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasActiveThreads(guild_id) {
  _require = guild_id;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveJoinedThreadsStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id.guild_id) {
    if (cResult[2] === guild_id.id) {
      let tmp7 = cResult[3];
    }
    return tmp(504).useStateFromStoresObject(first, tmp7);
  }
  const fn = function o() {
    const activeJoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedThreadsForParent(guild_id.guild_id, guild_id.id);
    const activeJoinedRelevantThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedRelevantThreadsForParent(guild_id.guild_id, guild_id.id);
    const activeUnjoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForParent(guild_id.guild_id, guild_id.id);
    const someResult = _modDef12(activeJoinedRelevantThreadsForParent).some((channel) => closure_1_9.can(constants.VIEW_CHANNEL, channel.channel));
    const obj = _modDef12(activeJoinedRelevantThreadsForParent);
    const someResult1 = _modDef12(activeJoinedThreadsForParent).some((channel) => {
      let canResult = !(channel.channel.id in activeJoinedRelevantThreadsForParent);
      if (canResult) {
        canResult = PermissionStore.can(constants.VIEW_CHANNEL, channel.channel);
      }
      return canResult;
    });
    const obj2 = _modDef12(activeJoinedThreadsForParent);
    let someResult2 = _modDef12(activeUnjoinedThreadsForParent).some((item) => closure_1_9.can(constants.VIEW_CHANNEL, item));
    let tmp7 = someResult;
    if (!someResult) {
      tmp7 = someResult1;
    }
    if (!tmp7) {
      tmp7 = someResult2;
    }
    const obj4 = { hasActiveThreads: tmp7, hasMoreActiveThreads: null };
    if (!someResult2) {
      someResult2 = someResult1;
    }
    obj4.hasMoreActiveThreads = someResult2;
    return obj4;
  };
  cResult[1] = guild_id.guild_id;
  cResult[2] = guild_id.id;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = require("c");
  tmp = _require;
}) : (function useHasActiveThreads(arg0) {
  _require = arg0;
  const items = [ActiveJoinedThreadsStore, PermissionStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    const activeJoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedThreadsForParent(user.guild_id, user.id);
    const activeJoinedRelevantThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedRelevantThreadsForParent(user.guild_id, user.id);
    const activeUnjoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForParent(user.guild_id, user.id);
    const someResult = _modDef12(activeJoinedRelevantThreadsForParent).some((channel) => closure_1_9.can(constants.VIEW_CHANNEL, channel.channel));
    const obj = _modDef12(activeJoinedRelevantThreadsForParent);
    const someResult1 = _modDef12(activeJoinedThreadsForParent).some((channel) => {
      let canResult = !(channel.channel.id in activeJoinedRelevantThreadsForParent);
      if (canResult) {
        canResult = PermissionStore.can(constants.VIEW_CHANNEL, channel.channel);
      }
      return canResult;
    });
    const obj2 = _modDef12(activeJoinedThreadsForParent);
    let someResult2 = _modDef12(activeUnjoinedThreadsForParent).some((item) => closure_1_9.can(constants.VIEW_CHANNEL, item));
    let tmp7 = someResult;
    if (!someResult) {
      tmp7 = someResult1;
    }
    if (!tmp7) {
      tmp7 = someResult2;
    }
    const obj4 = { hasActiveThreads: tmp7, hasMoreActiveThreads: null };
    if (!someResult2) {
      someResult2 = someResult1;
    }
    obj4.hasMoreActiveThreads = someResult2;
    return obj4;
  });
});
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanUnarchiveThread(isThread) {
  _require = isThread;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== isThread) {
    const fn = function o() {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, closure_0);
      }
      if (canResult) {
        canResult = PermissionStore.can(constants.SEND_MESSAGES, closure_0);
      }
      return canResult;
    };
    cResult[1] = isThread;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore, ChannelStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== isThread) {
    const fn2 = function h() {
      let channel = null;
      if (null != isThread) {
        channel = ChannelStore.getChannel(isThread.parent_id);
      }
      let canResult = null != channel;
      if (canResult) {
        canResult = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, isThread);
      }
      if (canResult) {
        canResult = PermissionStore.can(constants.SEND_MESSAGES, channel);
      }
      return canResult;
    };
    const items2 = [isThread];
    cResult[4] = isThread;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp12 = items2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp11, tmp12);
  const tmp14 = closure_21(isThread);
  let tmp15 = stateFromStores;
  if (stateFromStores) {
    tmp15 = stateFromStores1;
  }
  if (cResult[7] === isThread) {
    if (cResult[8] === tmp14) {
      if (cResult[9] === tmp15) {
        let tmp16 = cResult[10];
      }
      return tmp16;
    }
  }
  const tmp17 = null == isThread || !isThread.isThread() || isThread.isMediaThread();
  let tmp18 = !tmp17;
  if (!tmp17) {
    const threadMetadata = isThread.threadMetadata;
    let locked;
    if (threadMetadata != null) {
      locked = threadMetadata.locked;
    }
    let tmp20 = tmp15;
    if (locked) {
      tmp20 = tmp14;
    }
    tmp18 = tmp20;
  }
  cResult[7] = isThread;
  cResult[8] = tmp14;
  cResult[9] = tmp15;
  cResult[10] = tmp18;
  tmp16 = tmp18;
  const tmpResult2 = require("initialize");
}) : (function useCanUnarchiveThread(isThread) {
  _require = isThread;
  const items = [PermissionStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, closure_0);
    }
    if (canResult) {
      canResult = PermissionStore.can(constants.SEND_MESSAGES, closure_0);
    }
    return canResult;
  });
  const obj = require("initialize");
  const items1 = [PermissionStore, ChannelStore];
  const items2 = [isThread];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let channel = null;
    if (null != isThread) {
      channel = ChannelStore.getChannel(isThread.parent_id);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, isThread);
    }
    if (canResult) {
      canResult = PermissionStore.can(constants.SEND_MESSAGES, channel);
    }
    return canResult;
  }, items2);
  const obj2 = require("initialize");
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  const tmp4 = null == isThread || !isThread.isThread() || isThread.isMediaThread();
  let tmp5 = !tmp4;
  if (!tmp4) {
    const threadMetadata = isThread.threadMetadata;
    let locked;
    if (threadMetadata != null) {
      locked = threadMetadata.locked;
    }
    if (locked) {
      stateFromStores = tmp3;
    }
    tmp5 = stateFromStores;
  }
  return tmp5;
});
let closure_18 = tmp11;
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsActiveChannelOrUnarchivableThread(isThread) {
  const cResult = c.c(3);
  const tmp2 = closure_18(isThread);
  let flag = null;
  if (null == isThread) {
    return tmp3;
  } else {
    if (cResult[0] === tmp2) {
    }
    const isThreadResult = isThread.isThread();
    let isActiveThreadResult = !isThreadResult;
    if (isThreadResult) {
      isActiveThreadResult = isThread.isActiveThread();
    }
    if (!isActiveThreadResult) {
      let isArchivedThreadResult = isThread.isArchivedThread();
      if (isArchivedThreadResult) {
        const threadMetadata = isThread.threadMetadata;
        let locked;
        if (threadMetadata != flag) {
          locked = threadMetadata.locked;
        }
        flag = true;
        isArchivedThreadResult = true !== locked;
      }
      if (isArchivedThreadResult) {
        isArchivedThreadResult = tmp2;
      }
      isActiveThreadResult = isArchivedThreadResult;
    }
    cResult[0] = tmp2;
    cResult[1] = isThread;
    cResult[2] = isActiveThreadResult;
  }
}) : (function useIsActiveChannelOrUnarchivableThread(isThread) {
  let tmp2 = null != isThread;
  if (tmp2) {
    const isThreadResult = isThread.isThread();
    let isActiveThreadResult = !isThreadResult;
    if (isThreadResult) {
      isActiveThreadResult = isThread.isActiveThread();
    }
    if (!isActiveThreadResult) {
      let isArchivedThreadResult = isThread.isArchivedThread();
      if (isArchivedThreadResult) {
        const threadMetadata = isThread.threadMetadata;
        let locked;
        if (threadMetadata != null) {
          locked = threadMetadata.locked;
        }
        isArchivedThreadResult = true !== locked;
      }
      if (isArchivedThreadResult) {
        isArchivedThreadResult = tmp;
      }
      isActiveThreadResult = isArchivedThreadResult;
    }
    tmp2 = isActiveThreadResult;
  }
  return tmp2;
});
let closure_20 = tmp12;
ReactCompilerGating = fn(558);
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsThreadModerator(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const items = [PermissionStore];
      const first = _slicedToArray(items, 1)[0];
      let canResult = null != closure_0;
      if (canResult) {
        canResult = first.can(constants.MANAGE_THREADS, closure_0);
      }
      return canResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useIsThreadModerator(arg0) {
  _require = arg0;
  let items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const items = [PermissionStore];
    const first = _slicedToArray(items, 1)[0];
    let canResult = null != closure_0;
    if (canResult) {
      canResult = first.can(constants.MANAGE_THREADS, closure_0);
    }
    return canResult;
  });
});
let closure_21 = tmp13;
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanManageThread(parent_id) {
  _require = parent_id;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  parent_id = undefined;
  if (parent_id != null) {
    parent_id = parent_id.parent_id;
  }
  if (cResult[1] !== parent_id) {
    let parent_id1;
    if (parent_id != null) {
      parent_id1 = parent_id.parent_id;
    }
    const fn = function o() {
      parent_id = undefined;
      if (parent_id != null) {
        parent_id = parent_id.parent_id;
      }
      return ChannelStore.getChannel(parent_id);
    };
    cResult[1] = parent_id1;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class S {
      constructor() {
        canResult = null != closure_1;
        if (canResult) {
          tmp3 = closure_9;
          tmp4 = Permissions;
          canResult = closure_9.can(Permissions.MANAGE_THREADS, tmp);
        }
        return canResult;
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = S;
    cResult[6] = items2;
    let tmp13 = items2;
  } else {
    class S {
      constructor() {
        canResult = null != closure_1;
        if (canResult) {
          tmp3 = closure_9;
          tmp4 = Permissions;
          canResult = closure_9.can(Permissions.MANAGE_THREADS, tmp);
        }
        return canResult;
      }
    }
    tmp13 = cResult[6];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp10, S, tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        canResult = null != closure_1;
        if (canResult) {
          tmp3 = closure_9;
          tmp4 = Permissions;
          canResult = closure_9.can(Permissions.MANAGE_THREADS, tmp);
        }
        return canResult;
      }
    }
    const items3 = [AuthenticationStore];
    class A {
      constructor() {
        return closure_1_7.getId();
      }
    }
    cResult[7] = items3;
    cResult[8] = A;
    let tmp16 = A;
    const tmp15 = items3;
  } else {
    class S {
      constructor() {
        canResult = null != closure_1;
        if (canResult) {
          tmp3 = closure_9;
          tmp4 = Permissions;
          canResult = closure_9.can(Permissions.MANAGE_THREADS, tmp);
        }
        return canResult;
      }
    }
    tmp16 = cResult[8];
  }
  const tmpResult3 = require("initialize");
  let tmp18 = null != parent_id;
  const stateFromStores2 = require("initialize").useStateFromStores(tmp15, tmp16);
  if (tmp18) {
    class S {
      constructor() {
        canResult = null != closure_1;
        if (canResult) {
          tmp3 = closure_9;
          tmp4 = Permissions;
          canResult = closure_9.can(Permissions.MANAGE_THREADS, tmp);
        }
        return canResult;
      }
    }
  }
  if (tmp18) {
    class S {
      constructor() {
        canResult = null != closure_1;
        if (canResult) {
          tmp3 = closure_9;
          tmp4 = Permissions;
          canResult = closure_9.can(Permissions.MANAGE_THREADS, tmp);
        }
        return canResult;
      }
    }
    if (tmp20) {
      class S {
        constructor() {
          canResult = null != closure_1;
          if (canResult) {
            tmp3 = closure_9;
            tmp4 = Permissions;
            canResult = closure_9.can(Permissions.MANAGE_THREADS, tmp);
          }
          return canResult;
        }
      }
      if (!tmp20) {
        class S {
          constructor() {
            canResult = null != closure_1;
            if (canResult) {
              tmp3 = closure_9;
              tmp4 = Permissions;
              canResult = closure_9.can(Permissions.MANAGE_THREADS, tmp);
            }
            return canResult;
          }
        }
        if (!tmp21) {
          class S {
            constructor() {
              canResult = null != closure_1;
              if (canResult) {
                tmp3 = closure_9;
                tmp4 = Permissions;
                canResult = closure_9.can(Permissions.MANAGE_THREADS, tmp);
              }
              return canResult;
            }
          }
        }
        class A {
          constructor() {
            return closure_1_7.getId();
          }
        }
      }
    }
    tmp18 = tmp20;
  }
  return tmp18;
}) : (function useCanManageThread(isThread) {
  _require = isThread;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let parent_id;
    if (isThread != null) {
      parent_id = isThread.parent_id;
    }
    return ChannelStore.getChannel(parent_id);
  });
  const obj = require("initialize");
  const items1 = [PermissionStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(constants.MANAGE_THREADS, tmp);
    }
    return canResult;
  }, items2);
  const obj2 = require("initialize");
  const items3 = [AuthenticationStore];
  let tmp4 = null != isThread;
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => id.getId());
  if (tmp4) {
    tmp4 = null != stateFromStores;
  }
  if (tmp4) {
    let isThreadResult = isThread.isThread();
    if (isThreadResult) {
      let tmp6 = stateFromStores1;
      if (!tmp6) {
        const isLockedThreadResult = isThread.isLockedThread();
        let tmp8 = !isLockedThreadResult;
        if (!isLockedThreadResult) {
          tmp8 = isThread.ownerId === stateFromStores2;
        }
        tmp6 = tmp8;
      }
      isThreadResult = tmp6;
    }
    tmp4 = isThreadResult;
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanRemoveThreadMember(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelStore, PermissionStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const channel = ChannelStore.getChannel(closure_0);
      if (null == channel) {
        return false;
      } else {
        let tmp5 = channel.type === constants3.PRIVATE_THREAD && channel.ownerId === tmp3;
        if (!tmp5) {
          const items = [PermissionStore];
          const first = _slicedToArray(items, 1)[0];
          let canResult = null != channel;
          if (canResult) {
            canResult = first.can(constants.MANAGE_THREADS, channel);
          }
          tmp5 = canResult;
        }
        return tmp5;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8);
}) : (function useCanRemoveThreadMember(arg0) {
  _require = arg0;
  let items = [ChannelStore, PermissionStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null == channel) {
      return false;
    } else {
      let tmp5 = channel.type === constants3.PRIVATE_THREAD && channel.ownerId === tmp3;
      if (!tmp5) {
        const items = [PermissionStore];
        const first = _slicedToArray(items, 1)[0];
        let canResult = null != channel;
        if (canResult) {
          canResult = first.can(constants.MANAGE_THREADS, channel);
        }
        tmp5 = canResult;
      }
      return tmp5;
    }
  });
});
ReactCompilerGating = fn(558);
let tmp16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasPermissionToJoinThreadVoice(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return PermissionStore.can(constants.CONNECT, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  let stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (stateFromStores) {
    stateFromStores = closure_20(arg0);
  }
  return stateFromStores;
}) : (function useHasPermissionToJoinThreadVoice(arg0) {
  _require = arg0;
  const items = [PermissionStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => PermissionStore.can(constants.CONNECT, closure_0));
  if (stateFromStores) {
    stateFromStores = closure_20(arg0);
  }
  return stateFromStores;
});
let closure_22 = tmp16;
ReactCompilerGating = fn(558);
let tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsThreadMember(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const channel = ChannelStore.getChannel(closure_0);
      let isThreadResult;
      if (channel != null) {
        isThreadResult = channel.isThread();
      }
      let guildId = null;
      if (true === isThreadResult) {
        guildId = channel.getGuildId();
      }
      return guildId;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === arg0) {
    if (cResult[4] === stateFromStores) {
      let tmp8 = cResult[5];
      let tmp9 = cResult[6];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ThreadMemberListStore];
      cResult[7] = items1;
      let tmp12 = items1;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === arg0) {
      if (cResult[9] === arg1) {
        let tmp14 = cResult[10];
      }
      return tmp(504).useStateFromStores(tmp12, tmp14);
    }
    const fn3 = function _() {
      let isMemberResult = null;
      if (null != closure_0) {
        isMemberResult = ThreadMemberListStore.isMember(tmp, closure_1);
      }
      return isMemberResult;
    };
    cResult[8] = arg0;
    cResult[9] = arg1;
    cResult[10] = fn3;
    tmp14 = fn3;
  }
  const fn2 = function h() {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      GuildSubscriptionsActionCreators.subscribeChannel(stateFromStores, closure_0, GuildChannelSubscriptions.DEFAULT_RANGES);
    }
  };
  const items2 = [stateFromStores, arg0];
  cResult[3] = arg0;
  cResult[4] = stateFromStores;
  cResult[5] = fn2;
  cResult[6] = items2;
  tmp9 = items2;
  tmp8 = fn2;
  const tmpResult = require("initialize");
}) : (function useIsThreadMember(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    let guildId = null;
    if (true === isThreadResult) {
      guildId = channel.getGuildId();
    }
    return guildId;
  });
  const items1 = [stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      GuildSubscriptionsActionCreators.subscribeChannel(stateFromStores, closure_0, GuildChannelSubscriptions.DEFAULT_RANGES);
    }
  }, items1);
  let obj = require("initialize");
  const items2 = [ThreadMemberListStore];
  return require("initialize").useStateFromStores(items2, () => {
    let isMemberResult = null;
    if (null != closure_0) {
      isMemberResult = ThreadMemberListStore.isMember(tmp, closure_1);
    }
    return isMemberResult;
  });
});
ReactCompilerGating = fn(558);
let tmp17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanJoinThreadVoice(guild_id) {
  const cResult = c.c(10);
  const tmp4 = useIsRemoteDefault();
  const tmp5 = closure_22(guild_id);
  if (cResult[0] !== guild_id.guild_id) {
    const obj2 = { guildId: guild_id.guild_id, location: "e791ea_1" };
    cResult[0] = guild_id.guild_id;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { autoTrackExposure: false };
    cResult[2] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[2];
  }
  const enabled = importDefaultResultResult.useExperiment(tmp6, tmp7).enabled;
  const isGameInvitesPost = GameInvitesChannelUtils.useIsGameInvitesPost(guild_id);
  const tmpResult = GameInvitesChannelUtils;
  let shouldAgeVerifyForAgeGate = shouldAgeVerifyForAgeGate2.useShouldAgeVerifyForAgeGate();
  if (shouldAgeVerifyForAgeGate) {
    shouldAgeVerifyForAgeGate = AgeGateUtils.shouldShowAgeGateForChannelId(guild_id.id);
    const tmpResult4 = AgeGateUtils;
  }
  if (cResult[3] === guild_id) {
    if (cResult[4] === enabled) {
      if (cResult[5] === tmp5) {
        if (cResult[6] === isGameInvitesPost) {
          if (cResult[7] === tmp4) {
            if (cResult[8] === shouldAgeVerifyForAgeGate) {
              let tmp10 = cResult[9];
            }
            return tmp10;
          }
        }
      }
    }
  }
  let isVocalThreadResult = !tmp4;
  if (!tmp4) {
    isVocalThreadResult = guild_id.isVocalThread();
  }
  if (isVocalThreadResult) {
    let tmp12 = enabled;
    if (!enabled) {
      tmp12 = isGameInvitesPost;
    }
    isVocalThreadResult = tmp12;
  }
  if (isVocalThreadResult) {
    isVocalThreadResult = tmp5;
  }
  if (isVocalThreadResult) {
    isVocalThreadResult = !shouldAgeVerifyForAgeGate;
  }
  cResult[3] = guild_id;
  cResult[4] = enabled;
  cResult[5] = tmp5;
  cResult[6] = isGameInvitesPost;
  cResult[7] = tmp4;
  cResult[8] = shouldAgeVerifyForAgeGate;
  cResult[9] = isVocalThreadResult;
  tmp10 = isVocalThreadResult;
  const tmpResult3 = shouldAgeVerifyForAgeGate2;
}) : (function useCanJoinThreadVoice(guildId) {
  const tmp2 = useIsRemoteDefault();
  let enabled = importDefaultResultResult.useExperiment({ guildId: guildId.guild_id, location: "e791ea_1" }, { autoTrackExposure: false }).enabled;
  const obj = { guildId: guildId.guild_id, location: "e791ea_1" };
  const tmp3 = closure_22(guildId);
  const isGameInvitesPost = GameInvitesChannelUtils.useIsGameInvitesPost(guildId);
  let shouldAgeVerifyForAgeGate = shouldAgeVerifyForAgeGate2.useShouldAgeVerifyForAgeGate();
  if (shouldAgeVerifyForAgeGate) {
    shouldAgeVerifyForAgeGate = AgeGateUtils.shouldShowAgeGateForChannelId(guildId.id);
    const tmp4Result = AgeGateUtils;
  }
  let isVocalThreadResult = !tmp2;
  if (!tmp2) {
    isVocalThreadResult = guildId.isVocalThread();
  }
  if (isVocalThreadResult) {
    if (!enabled) {
      enabled = isGameInvitesPost;
    }
    isVocalThreadResult = enabled;
  }
  if (isVocalThreadResult) {
    isVocalThreadResult = tmp3;
  }
  if (isVocalThreadResult) {
    isVocalThreadResult = !shouldAgeVerifyForAgeGate;
  }
  return isVocalThreadResult;
});
function isThreadModerator(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  let canResult = null != arg0;
  if (canResult) {
    canResult = first.can(constants.MANAGE_THREADS, arg0);
  }
  return canResult;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/ThreadHooks.tsx");

export const VoiceInThreadsExperiment = importDefaultResultResult;
export const useCanStartPublicThread = tmp5;
export const computeCanStartPublicThread = function computeCanStartPublicThread(channel, message) {
  if (channel.isForumLikeChannel()) {
    let SEND_MESSAGES = constants.SEND_MESSAGES;
  } else {
    SEND_MESSAGES = BigFlagUtilsAll.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
  }
  let flag = false;
  if (PermissionStore.can(SEND_MESSAGES, channel)) {
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(channel.type)) {
      flag = true;
      if (null != message) {
        flag = false;
        if (!message.hasFlag(constants2.HAS_THREAD)) {
          flag = true;
          if (isSystemMessageDefault(message)) {
            flag = false;
          }
        }
      }
    }
  }
  return flag;
};
export const useCanStartPrivateThread = tmp6;
export const computeCanStartPrivateThread = function computeCanStartPrivateThread(type, hasFlag) {
  let tmp3 = type.type === constants3.GUILD_TEXT;
  if (!tmp3) {
    tmp3 = type.type === tmp2.GUILD_APP;
  }
  if (tmp3) {
    let flag = false;
    if (canResult) {
      flag = false;
      if (THREADED_CHANNEL_TYPES.has(type.type)) {
        flag = true;
        if (null != hasFlag) {
          flag = false;
          if (!hasFlag.hasFlag(constants2.HAS_THREAD)) {
            flag = true;
            if (isSystemMessageDefault(hasFlag)) {
              flag = false;
            }
          }
        }
      }
    }
    tmp3 = flag;
  }
  return tmp3;
};
export const useCanStartThread = tmp7;
export const useCanViewThreadForMessage = tmp8;
export const useHasActiveThreads = tmp9;
export const useCanManageThread = tmp10;
export const useCanUnarchiveThread = tmp11;
export { canUnarchiveThread };
export const useIsActiveChannelOrUnarchivableThread = tmp12;
export const getIsActiveChannelOrUnarchivableThread = function getIsActiveChannelOrUnarchivableThread(channel) {
  let tmp = null != channel;
  if (tmp) {
    const isThreadResult = channel.isThread();
    let isActiveThreadResult = !isThreadResult;
    if (isThreadResult) {
      isActiveThreadResult = channel.isActiveThread();
    }
    if (!isActiveThreadResult) {
      let isArchivedThreadResult = channel.isArchivedThread();
      if (isArchivedThreadResult) {
        const threadMetadata = channel.threadMetadata;
        let locked;
        if (threadMetadata != null) {
          locked = threadMetadata.locked;
        }
        isArchivedThreadResult = true !== locked;
      }
      if (isArchivedThreadResult) {
        isArchivedThreadResult = canUnarchiveThread(channel);
      }
      isActiveThreadResult = isArchivedThreadResult;
    }
    tmp = isActiveThreadResult;
  }
  return tmp;
};
export const computeIsReadOnlyThread = function computeIsReadOnlyThread(channel) {
  if (channel.isMediaThread()) {
    return true;
  } else {
    const canResult = PermissionStore.can(constants.MANAGE_THREADS, channel);
    return channel.isArchivedLockedThread() && !PermissionStore.can(constants.MANAGE_THREADS, channel);
  }
};
export const useIsThreadModerator = tmp13;
export { isThreadModerator };
export const useCanRemoveThreadMember = tmp14;
export const useIsThreadMember = tmp15;
export const useHasPermissionToJoinThreadVoice = tmp16;
export const useCanJoinThreadVoice = tmp17;
export const useIsNonModInLockedThread = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsNonModInLockedThread(isLockedThread) {
  const cResult = c.c(3);
  const tmp2 = closure_21(isLockedThread);
  if (cResult[0] === isLockedThread) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = isLockedThread.isLockedThread() && !tmp2;
  cResult[0] = isLockedThread;
  cResult[1] = tmp2;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function useIsNonModInLockedThread(isLockedThread) {
  const tmp = closure_21(isLockedThread);
  return isLockedThread.isLockedThread() && !closure_21(isLockedThread);
});
export const isNonModInLockedThread = function isNonModInLockedThread(isLockedThread) {
  const items = [PermissionStore];
  const first = _slicedToArray(items, 1)[0];
  let canResult = null != isLockedThread;
  if (canResult) {
    canResult = first.can(constants.MANAGE_THREADS, isLockedThread);
  }
  return isLockedThread.isLockedThread() && !canResult;
};