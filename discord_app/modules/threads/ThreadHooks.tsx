// === Module 6782: ThreadHooks ===

// Module 6782 (ThreadHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import react from "react" /* 576 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import AgeGateUtils from "AgeGateUtils" /* 5106 */;
import isSystemMessageDefault from "isSystemMessage" /* 6783 */;
import useIsRemoteDefault from "useIsRemote" /* 6784 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 6785 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import createExperiment from "createExperiment" /* 4781 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5698 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let items;
let unpackModuleId;
function canUnarchiveThread(stateFromStores) {
  let canResult = null != stateFromStores && PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, stateFromStores);
  let channel = null;
  if (null != stateFromStores) {
    channel = ChannelStore.getChannel(stateFromStores.parent_id);
  }
  const canResult1 = null != channel && PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, channel);
  if (canResult) {
    canResult = canResult1;
  }
  const items = [PermissionStore];
  const first = _slicedToArray(items, 1)[0];
  const canResult2 = null != stateFromStores && first.can(constants.MANAGE_THREADS, stateFromStores);
  let tmp10 = !(null == stateFromStores || !stateFromStores.isThread() || stateFromStores.isMediaThread());
  null == stateFromStores || !stateFromStores.isThread() || stateFromStores.isMediaThread();
  if (tmp10) {
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
const THREADED_CHANNEL_TYPES = ChannelRecord.THREADED_CHANNEL_TYPES;
({ Permissions: c10, MessageFlags: unpackModuleId, ChannelTypes: closure_12 } = Constants);
let obj = { id: "2022-07_voice_in_threads", label: "Voice in Threads", kind: "guild", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "On", config: { enabled: true } }];
const importDefaultResultResult = createExperiment(obj);
const map1 = importDefaultResultResult;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((type, hasFlag) => {
  let first;
  let tmp6;
  let tmp7;
  _require = type;
  let obj = require("react");
  const cResult = obj.c(8);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== type) {
    const fn = function c() {
      let SEND_MESSAGES;
      if (type.isForumLikeChannel()) {
        SEND_MESSAGES = constants.SEND_MESSAGES;
      } else {
        const obj = BigFlagUtilsAll;
        SEND_MESSAGES = obj.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
      }
      return PermissionStore.can(SEND_MESSAGES, type);
    };
    const items1 = [type];
    cResult[1] = type;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === type) {
    if (cResult[5] === stateFromStores) {
      let tmp9;
      if (cResult[6] === hasFlag) {
        tmp9 = cResult[7];
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
}) : ((type, hasFlag) => {
  _require = type;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [type];
  let flag = false;
  if (obj.useStateFromStores(items, () => {
    let SEND_MESSAGES;
    if (type.isForumLikeChannel()) {
      SEND_MESSAGES = constants.SEND_MESSAGES;
    } else {
      const obj = BigFlagUtilsAll;
      SEND_MESSAGES = obj.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
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
let closure_14 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  let first;
  let tmp6;
  let tmp7;
  _require = type;
  let obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== type) {
    const fn = function o() {
      const can = PermissionStore.can;
      const obj = BigFlagUtilsAll;
      return can(obj.combine(constants.CREATE_PRIVATE_THREADS), type);
    };
    const items1 = [type];
    cResult[1] = type;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === type) {
    let tmp9;
    if (cResult[5] === stateFromStores) {
      tmp9 = cResult[6];
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
}) : ((type) => {
  _require = type;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [type];
  let tmp3 = type.type === constants3.GUILD_TEXT;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const can = PermissionStore.can;
    const obj = BigFlagUtilsAll;
    return can(obj.combine(constants.CREATE_PRIVATE_THREADS), type);
  }, items1);
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
let closure_15 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const tmp = closure_14(arg0) || closure_15(arg0);
  return tmp;
}) : ((arg0) => {
  const tmp = closure_14(arg0) || closure_15(arg0);
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let first;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = id;
  let obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      const getChannel = ChannelStore.getChannel;
      const obj = SnowflakeUtilsDefault;
      return getChannel(obj.castMessageIdAsChannelId(id.id));
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== id) {
    const items1 = [id];
    cResult[3] = id;
    cResult[4] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[4];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[5] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== stateFromStores) {
    class T {
      constructor() {
        return PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores);
      }
    }
    const items3 = [stateFromStores];
    cResult[6] = stateFromStores;
    cResult[7] = T;
    cResult[8] = items3;
    tmp12 = items3;
  } else {
    class T {
      constructor() {
        return PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores);
      }
    }
    tmp12 = cResult[8];
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, T, tmp12);
  if (cResult[9] === stateFromStores1) {
    class T {
      constructor() {
        return PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores);
      }
    }
  }
  let hasFlagResult = id.hasFlag(constants2.HAS_THREAD);
  if (hasFlagResult) {
    class T {
      constructor() {
        return PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores);
      }
    }
    hasFlagResult = null != stateFromStores && stateFromStores1;
  }
  cResult[9] = stateFromStores1;
  cResult[10] = id;
  cResult[11] = stateFromStores;
  cResult[12] = hasFlagResult;
}) : ((hasFlag) => {
  _require = hasFlag;
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [hasFlag];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const getChannel = ChannelStore.getChannel;
    const obj = SnowflakeUtilsDefault;
    return getChannel(obj.castMessageIdAsChannelId(hasFlag.id));
  }, items1);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores), items3);
  let hasFlagResult = hasFlag.hasFlag(constants2.HAS_THREAD);
  if (hasFlagResult) {
    hasFlagResult = null != stateFromStores && stateFromStores1;
  }
  return hasFlagResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  let first;
  _require = guild_id;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveJoinedThreadsStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id.guild_id) {
    let tmp7;
    if (cResult[2] === guild_id.id) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStoresObject(first, tmp7);
  }
  const fn = function o() {
    const activeJoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedThreadsForParent(guild_id.guild_id, guild_id.id);
    const activeJoinedRelevantThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedRelevantThreadsForParent(guild_id.guild_id, guild_id.id);
    const activeUnjoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForParent(guild_id.guild_id, guild_id.id);
    const obj = _modDef12(activeJoinedRelevantThreadsForParent);
    const someResult = obj.some((channel) => closure_1_8.can(constants.VIEW_CHANNEL, channel.channel));
    const obj2 = _modDef12(activeJoinedThreadsForParent);
    const someResult1 = obj2.some((channel) => {
      const canResult = !(channel.channel.id in activeJoinedRelevantThreadsForParent) && closure_2_8.can(constants.VIEW_CHANNEL, channel.channel);
      return canResult;
    });
    const obj3 = _modDef12(activeUnjoinedThreadsForParent);
    let someResult2 = obj3.some((item) => closure_1_8.can(constants.VIEW_CHANNEL, item));
    const obj4 = { hasActiveThreads: someResult || someResult1 || someResult2, hasMoreActiveThreads: someResult2 };
    if (!someResult2) {
      someResult2 = someResult1;
    }
    return obj4;
  };
  cResult[1] = guild_id.guild_id;
  cResult[2] = guild_id.id;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((arg0) => {
  let user;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ActiveJoinedThreadsStore, PermissionStore];
  return obj.useStateFromStoresObject(items, () => {
    const activeJoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedThreadsForParent(user.guild_id, user.id);
    const activeJoinedRelevantThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedRelevantThreadsForParent(user.guild_id, user.id);
    const activeUnjoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForParent(user.guild_id, user.id);
    const obj = _modDef12(activeJoinedRelevantThreadsForParent);
    const someResult = obj.some((channel) => closure_1_8.can(constants.VIEW_CHANNEL, channel.channel));
    const obj2 = _modDef12(activeJoinedThreadsForParent);
    const someResult1 = obj2.some((channel) => {
      const canResult = !(channel.channel.id in activeJoinedRelevantThreadsForParent) && closure_2_8.can(constants.VIEW_CHANNEL, channel.channel);
      return canResult;
    });
    const obj3 = _modDef12(activeUnjoinedThreadsForParent);
    let someResult2 = obj3.some((item) => closure_1_8.can(constants.VIEW_CHANNEL, item));
    const obj4 = { hasActiveThreads: someResult || someResult1 || someResult2, hasMoreActiveThreads: someResult2 };
    if (!someResult2) {
      someResult2 = someResult1;
    }
    return obj4;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((parent_id) => {
  let first;
  let id;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp8;
  _require = parent_id;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  parent_id = undefined;
  const tmp6 = cResult[1];
  if (parent_id != null) {
    parent_id = parent_id.parent_id;
  }
  if (tmp6 !== parent_id) {
    let parent_id1;
    if (parent_id != null) {
      parent_id1 = parent_id.parent_id;
    }
    const fn = function o() {
      parent_id = undefined;
      const getChannel = ChannelStore.getChannel;
      if (parent_id != null) {
        parent_id = parent_id.parent_id;
      }
      return getChannel(parent_id);
    };
    cResult[1] = parent_id1;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class T {
      constructor() {
        const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
        return canResult;
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = T;
    cResult[6] = items2;
    tmp14 = items2;
  } else {
    class T {
      constructor() {
        const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
        return canResult;
      }
    }
    tmp14 = cResult[6];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, T, tmp14);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
        return canResult;
      }
    }
    const items3 = [AuthenticationStore];
    class A {
      constructor() {
        return id.getId();
      }
    }
    cResult[7] = items3;
    cResult[8] = A;
    tmp17 = A;
    tmp16 = items3;
  } else {
    class T {
      constructor() {
        const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
        return canResult;
      }
    }
    tmp17 = cResult[8];
  }
  let tmp19 = null != parent_id;
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp16, tmp17);
  if (tmp19) {
    class T {
      constructor() {
        const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
        return canResult;
      }
    }
  }
  if (tmp19) {
    class T {
      constructor() {
        const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
        return canResult;
      }
    }
    if (tmp20) {
      class T {
        constructor() {
          const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
          return canResult;
        }
      }
      if (!tmp21) {
        class T {
          constructor() {
            const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
            return canResult;
          }
        }
      }
    }
    tmp19 = tmp20;
  }
  return tmp19;
}) : ((isThread) => {
  let id;
  _require = isThread;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let parent_id;
    const getChannel = ChannelStore.getChannel;
    if (isThread != null) {
      parent_id = isThread.parent_id;
    }
    return getChannel(parent_id);
  });
  const items1 = [PermissionStore];
  const items2 = [stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
    return canResult;
  }, items2);
  const items3 = [AuthenticationStore];
  let tmp4 = null != isThread;
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items3, () => id.getId());
  if (tmp4) {
    tmp4 = null != stateFromStores;
  }
  if (tmp4) {
    let isThreadResult = isThread.isThread();
    if (isThreadResult) {
      let tmp6 = stateFromStores1;
      if (!tmp6) {
        tmp6 = !isThread.isLockedThread() && isThread.ownerId === stateFromStores2;
        !isThread.isLockedThread() && isThread.ownerId === stateFromStores2;
      }
      isThreadResult = tmp6;
    }
    tmp4 = isThreadResult;
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((isThread) => {
  let first;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp8;
  _require = isThread;
  const obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== isThread) {
    const fn = function o() {
      const canResult = null != isThread && PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, isThread) && PermissionStore.can(constants.SEND_MESSAGES, isThread);
      return canResult;
    };
    cResult[1] = isThread;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore, ChannelStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== isThread) {
    const fn2 = function h() {
      let channel = null;
      if (null != isThread) {
        channel = ChannelStore.getChannel(isThread.parent_id);
      }
      const canResult = null != channel && PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, isThread) && PermissionStore.can(constants.SEND_MESSAGES, channel);
      return canResult;
    };
    const items2 = [isThread];
    cResult[4] = isThread;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp12 = items2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp11, tmp12);
  const tmp14 = closure_19(isThread);
  if (cResult[7] === isThread) {
    if (cResult[8] === tmp14) {
      let tmp16;
      if (cResult[9] === (stateFromStores && stateFromStores1)) {
        tmp16 = cResult[10];
      }
      return tmp16;
    }
  }
  let tmp18 = !(null == isThread || !isThread.isThread() || isThread.isMediaThread());
  null == isThread || !isThread.isThread() || isThread.isMediaThread();
  if (tmp18) {
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
  cResult[9] = stateFromStores && stateFromStores1;
  cResult[10] = tmp18;
  tmp16 = tmp18;
}) : ((isThread) => {
  _require = isThread;
  const items = [PermissionStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => {
    const canResult = null != isThread && PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, isThread) && PermissionStore.can(constants.SEND_MESSAGES, isThread);
    return canResult;
  });
  const items1 = [PermissionStore, ChannelStore];
  const items2 = [isThread];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let channel = null;
    if (null != isThread) {
      channel = ChannelStore.getChannel(isThread.parent_id);
    }
    const canResult = null != channel && PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, isThread) && PermissionStore.can(constants.SEND_MESSAGES, channel);
    return canResult;
  }, items2);
  const tmp3 = closure_19(isThread);
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  let tmp5 = !(null == isThread || !isThread.isThread() || isThread.isMediaThread());
  null == isThread || !isThread.isThread() || isThread.isMediaThread();
  if (tmp5) {
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
let closure_16 = tmp11;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((isThread) => {
  const obj = react;
  const cResult = obj.c(3);
  const tmp2 = closure_16(isThread);
  let tmp3 = null != isThread;
  if (tmp3) {
    if (cResult[0] === tmp2) {
      let tmp4;
      if (cResult[1] === isThread) {
        tmp4 = cResult[2];
      }
      tmp3 = tmp4;
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
        if (threadMetadata != null) {
          locked = threadMetadata.locked;
        }
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
    tmp4 = isActiveThreadResult;
  }
  return tmp3;
}) : ((isThread) => {
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
let closure_18 = tmp12;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const items = [PermissionStore];
      const first = _slicedToArray(items, 1)[0];
      const canResult = null != closure_0 && first.can(constants.MANAGE_THREADS, closure_0);
      return canResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const items = [PermissionStore];
    const first = _slicedToArray(items, 1)[0];
    const canResult = null != closure_0 && first.can(constants.MANAGE_THREADS, closure_0);
    return canResult;
  });
});
let closure_19 = tmp13;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelStore, PermissionStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const channel = ChannelStore.getChannel(closure_0);
      if (null == channel) {
        return false;
      } else {
        let tmp5 = channel.type === constants2.PRIVATE_THREAD && channel.ownerId === tmp3;
        if (!tmp5) {
          const items = [PermissionStore];
          const first = _slicedToArray(items, 1)[0];
          tmp5 = null != channel && first.can(constants.MANAGE_THREADS, channel);
          const canResult = null != channel && first.can(constants.MANAGE_THREADS, channel);
        }
        return tmp5;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let items = [ChannelStore, PermissionStore, AuthenticationStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null == channel) {
      return false;
    } else {
      let tmp5 = channel.type === constants2.PRIVATE_THREAD && channel.ownerId === tmp3;
      if (!tmp5) {
        const items = [PermissionStore];
        const first = _slicedToArray(items, 1)[0];
        tmp5 = null != channel && first.can(constants.MANAGE_THREADS, channel);
        const canResult = null != channel && first.can(constants.MANAGE_THREADS, channel);
      }
      return tmp5;
    }
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return PermissionStore.can(constants.CONNECT, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6) && closure_18(arg0);
  return stateFromStores;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.CONNECT, closure_0)) && closure_18(arg0);
  return stateFromStores;
});
let closure_20 = tmp15;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp16 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  let tmp6;
  let tmp7;
  const obj = react;
  const cResult = obj.c(10);
  const tmp4 = useIsRemoteDefault();
  const tmp5 = closure_20(guild_id);
  if (cResult[0] !== guild_id.guild_id) {
    const obj2 = { guildId: guild_id.guild_id, location: "e791ea_1" };
    cResult[0] = guild_id.guild_id;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { autoTrackExposure: false };
    cResult[2] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[2];
  }
  const enabled = map1.useExperiment(tmp6, tmp7).enabled;
  const tmpResult = GameInvitesChannelUtils;
  const isGameInvitesPost = tmpResult.useIsGameInvitesPost(guild_id);
  const tmpResult3 = AgeGateUtils;
  let shouldAgeVerifyForAgeGate = tmpResult3.useShouldAgeVerifyForAgeGate();
  if (shouldAgeVerifyForAgeGate) {
    const tmpResult4 = AgeGateUtils;
    shouldAgeVerifyForAgeGate = tmpResult4.shouldShowAgeGateForChannelId(guild_id.id);
  }
  if (cResult[3] === guild_id) {
    if (cResult[4] === enabled) {
      if (cResult[5] === tmp5) {
        if (cResult[6] === isGameInvitesPost) {
          if (cResult[7] === tmp4) {
            let tmp10;
            if (cResult[8] === shouldAgeVerifyForAgeGate) {
              tmp10 = cResult[9];
            }
            return tmp10;
          }
        }
      }
    }
  }
  let tmp11 = !tmp4 && guild_id.isVocalThread();
  if (tmp11) {
    tmp11 = enabled || isGameInvitesPost;
  }
  if (tmp11) {
    tmp11 = tmp5;
  }
  if (tmp11) {
    tmp11 = !shouldAgeVerifyForAgeGate;
  }
  cResult[3] = guild_id;
  cResult[4] = enabled;
  cResult[5] = tmp5;
  cResult[6] = isGameInvitesPost;
  cResult[7] = tmp4;
  cResult[8] = shouldAgeVerifyForAgeGate;
  cResult[9] = tmp11;
  tmp10 = tmp11;
}) : ((guildId) => {
  const obj = { guildId: guildId.guild_id, location: "e791ea_1" };
  const tmp2 = useIsRemoteDefault();
  const tmp3 = closure_20(guildId);
  let enabled = map1.useExperiment(obj, { autoTrackExposure: false }).enabled;
  const obj2 = GameInvitesChannelUtils;
  const isGameInvitesPost = obj2.useIsGameInvitesPost(guildId);
  const obj3 = AgeGateUtils;
  let shouldAgeVerifyForAgeGate = obj3.useShouldAgeVerifyForAgeGate();
  if (shouldAgeVerifyForAgeGate) {
    const tmp4Result = AgeGateUtils;
    shouldAgeVerifyForAgeGate = tmp4Result.shouldShowAgeGateForChannelId(guildId.id);
  }
  let tmp7 = !tmp2 && guildId.isVocalThread();
  if (tmp7) {
    if (!enabled) {
      enabled = isGameInvitesPost;
    }
    tmp7 = enabled;
  }
  if (tmp7) {
    tmp7 = tmp3;
  }
  if (tmp7) {
    tmp7 = !shouldAgeVerifyForAgeGate;
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp17 = ReactCompilerGating.isReactCompilerEnabled() ? ((isLockedThread) => {
  const obj = react;
  const cResult = obj.c(3);
  const tmp2 = closure_19(isLockedThread);
  if (cResult[0] === isLockedThread) {
    let tmp3;
    if (cResult[1] === tmp2) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = isLockedThread.isLockedThread() && !tmp2;
  cResult[0] = isLockedThread;
  cResult[1] = tmp2;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((isLockedThread) => {
  const tmp = closure_19(isLockedThread);
  const tmp2 = isLockedThread.isLockedThread() && !tmp;
  return tmp2;
});
function isThreadModerator(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  const canResult = null != arg0 && first.can(constants.MANAGE_THREADS, arg0);
  return canResult;
}
const result = size.fileFinishedImporting("modules/threads/ThreadHooks.tsx");

export const VoiceInThreadsExperiment = importDefaultResultResult;
export const useCanStartPublicThread = tmp5;
export const computeCanStartPublicThread = function computeCanStartPublicThread(channel, message) {
  let SEND_MESSAGES;
  if (channel.isForumLikeChannel()) {
    SEND_MESSAGES = constants.SEND_MESSAGES;
  } else {
    const obj = BigFlagUtilsAll;
    SEND_MESSAGES = obj.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
  }
  let flag = false;
  if (PermissionStore.can(SEND_MESSAGES, channel)) {
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(channel.type)) {
      flag = true;
      if (null != message) {
        flag = false;
        if (!message.hasFlag(unpackModuleId.HAS_THREAD)) {
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
  const canResult = PermissionStore.can(constants.CREATE_PRIVATE_THREADS, type);
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
          if (!hasFlag.hasFlag(unpackModuleId.HAS_THREAD)) {
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
    const tmp4 = channel.isArchivedLockedThread() && !canResult;
    return tmp4;
  }
};
export const useIsThreadModerator = tmp13;
export { isThreadModerator };
export const useCanRemoveThreadMember = tmp14;
export const useHasPermissionToJoinThreadVoice = tmp15;
export const useCanJoinThreadVoice = tmp16;
export const useIsNonModInLockedThread = tmp17;
export const isNonModInLockedThread = function isNonModInLockedThread(isLockedThread) {
  const items = [PermissionStore];
  const first = _slicedToArray(items, 1)[0];
  const canResult = null != isLockedThread && first.can(constants.MANAGE_THREADS, isLockedThread);
  const tmp3 = isLockedThread.isLockedThread() && !canResult;
  return tmp3;
};