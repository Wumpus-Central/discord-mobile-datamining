// === Module 7234: useCanUnarchiveThread ===

// Module 7234 (useCanUnarchiveThread)
import fromStringAll from "fromString" /* 506 */;
import isSystemMessageDefault from "isSystemMessage" /* 5385 */;
import useIsRemoteDefault from "useIsRemote" /* 7235 */;
import closure_4 from "_slicedToArray" /* 32 */;
import { THREADED_CHANNEL_TYPES } from "createChannelRecord" /* 1395 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "getUncachedChannelPermissions" /* 4021 */;
import closure_9 from "rebuild" /* 5251 */;
import ME from "ME" /* 676 */;
import importDefaultResult from "createExperiment" /* 4287 */;

const require = arg1;
function useCanUnarchiveThread(channel) {
  let _require = channel;
  const items = [closure_8];
  let stateFromStores = _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_8.can(closure_1_10.SEND_MESSAGES_IN_THREADS, tmp);
    }
    if (canResult) {
      canResult = closure_1_8.can(closure_1_10.SEND_MESSAGES, tmp);
    }
    return canResult;
  });
  const obj = _require(589);
  const items1 = [closure_8, closure_7];
  const items2 = [channel];
  _require = channel;
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => {
    channel = null;
    if (null != closure_0) {
      channel = closure_1_7.getChannel(tmp.parent_id);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_8.can(closure_1_10.SEND_MESSAGES_IN_THREADS, tmp);
    }
    if (canResult) {
      canResult = closure_1_8.can(closure_1_10.SEND_MESSAGES, channel);
    }
    return canResult;
  }, items2);
  const obj2 = _require(589);
  const items3 = [closure_8];
  const stateFromStores2 = _require(589).useStateFromStores(items3, () => {
    const items = [closure_1_8];
    const first = closure_1_4(items, 1)[0];
    let canResult = null != closure_0;
    if (canResult) {
      canResult = first.can(closure_1_10.MANAGE_THREADS, closure_0);
    }
    return canResult;
  });
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  const tmp4 = null == channel || !channel.isThread() || channel.isMediaThread();
  let tmp5 = !tmp4;
  if (!tmp4) {
    const threadMetadata = channel.threadMetadata;
    let locked;
    if (threadMetadata != null) {
      locked = threadMetadata.locked;
    }
    if (locked) {
      stateFromStores = stateFromStores2;
    }
    tmp5 = stateFromStores;
  }
  return tmp5;
}
function canUnarchiveThread(parent_id) {
  let canResult = null != parent_id;
  if (canResult) {
    canResult = obj.can(constants.SEND_MESSAGES_IN_THREADS, parent_id);
  }
  let channel = null;
  if (null != parent_id) {
    channel = channel.getChannel(parent_id.parent_id);
  }
  let canResult1 = null != channel;
  if (canResult1) {
    canResult1 = obj.can(constants.SEND_MESSAGES_IN_THREADS, channel);
  }
  if (canResult) {
    canResult = canResult1;
  }
  const items = [closure_8];
  const first = callback(items, 1)[0];
  let canResult2 = null != parent_id;
  if (canResult2) {
    canResult2 = first.can(constants.MANAGE_THREADS, parent_id);
  }
  const tmp9 = null == parent_id || !parent_id.isThread() || parent_id.isMediaThread();
  let tmp10 = !tmp9;
  if (!tmp9) {
    const threadMetadata = parent_id.threadMetadata;
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
({ Permissions: c10, MessageFlags: unpackModuleId, ChannelTypes: closure_12 } = ME);
let items = [{ id: 1, label: "On", config: { enabled: true } }];
const importDefaultResultResult = importDefaultResult({ id: "2022-07_voice_in_threads", label: "Voice in Threads", kind: "guild", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/threads/ThreadHooks.tsx");

export const VoiceInThreadsExperiment = importDefaultResultResult;
export const useCanStartPublicThread = function useCanStartPublicThread(type) {
  const _require = type;
  const items = [closure_8];
  const items1 = [type];
  let flag = false;
  if (obj.useStateFromStores(items, () => {
    if (forumLikeChannel.isForumLikeChannel()) {
      let SEND_MESSAGES = closure_1_10.SEND_MESSAGES;
    } else {
      SEND_MESSAGES = closure_1_2(closure_1_3[9]).combine(closure_1_10.CREATE_PUBLIC_THREADS, closure_1_10.READ_MESSAGE_HISTORY);
      const obj = closure_1_2(closure_1_3[9]);
    }
    return closure_1_8.can(SEND_MESSAGES, forumLikeChannel);
  }, items1)) {
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(type.type)) {
      flag = true;
      if (null != arg1) {
        flag = false;
        if (!arg1.hasFlag(constants2.HAS_THREAD)) {
          flag = true;
          if (isSystemMessageDefault(arg1)) {
            flag = false;
          }
        }
      }
    }
  }
  return flag;
};
export const computeCanStartPublicThread = function computeCanStartPublicThread(channel, message) {
  if (channel.isForumLikeChannel()) {
    let SEND_MESSAGES = constants.SEND_MESSAGES;
  } else {
    SEND_MESSAGES = fromStringAll.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
    const obj = fromStringAll;
  }
  let flag = false;
  if (closure_8.can(SEND_MESSAGES, channel)) {
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
export const useCanStartPrivateThread = function useCanStartPrivateThread(type) {
  const _require = type;
  _require(589);
  [][0] = type;
  let tmp3 = type.type === constants3.GUILD_TEXT;
  if (tmp3) {
    let flag = false;
    if (tmp2) {
      flag = false;
      if (THREADED_CHANNEL_TYPES.has(type.type)) {
        flag = true;
      }
    }
    tmp3 = flag;
  }
  return tmp3;
};
export const computeCanStartPrivateThread = function computeCanStartPrivateThread(type, hasFlag) {
  let flag = false;
  if (closure_8.can(constants.CREATE_PRIVATE_THREADS, type)) {
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
};
export const useCanStartThread = function useCanStartThread(channel) {
  let _require = channel;
  const items = [closure_8];
  const items1 = [channel];
  let flag = false;
  if (obj.useStateFromStores(items, () => {
    if (forumLikeChannel.isForumLikeChannel()) {
      let SEND_MESSAGES = closure_1_10.SEND_MESSAGES;
    } else {
      SEND_MESSAGES = closure_1_2(closure_1_3[9]).combine(closure_1_10.CREATE_PUBLIC_THREADS, closure_1_10.READ_MESSAGE_HISTORY);
      const obj = closure_1_2(closure_1_3[9]);
    }
    return closure_1_8.can(SEND_MESSAGES, forumLikeChannel);
  }, items1)) {
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(channel.type)) {
      flag = true;
    }
  }
  _require = channel;
  _require(589);
  [][0] = channel;
  let tmp6 = channel.type === constants3.GUILD_TEXT;
  if (tmp6) {
    let flag2 = false;
    if (tmp5) {
      flag2 = false;
      if (THREADED_CHANNEL_TYPES.has(channel.type)) {
        flag2 = true;
      }
    }
    tmp6 = flag2;
  }
  if (!flag) {
    flag = tmp6;
  }
  return flag;
};
export const useCanViewThreadForMessage = function useCanViewThreadForMessage(hasFlag) {
  const _require = hasFlag;
  const items = [closure_7];
  const items1 = [hasFlag];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_7.getChannel(stateFromStores(closure_1_3[11]).castMessageIdAsChannelId(hasFlag.id)), items1);
  const obj = _require(589);
  const items2 = [closure_8];
  const items3 = [stateFromStores];
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => closure_1_8.can(closure_1_10.VIEW_CHANNEL, stateFromStores), items3);
  let hasFlagResult = hasFlag.hasFlag(constants2.HAS_THREAD);
  if (hasFlagResult) {
    hasFlagResult = null != stateFromStores && stateFromStores1;
    const tmp5 = null != stateFromStores && stateFromStores1;
  }
  return hasFlagResult;
};
export const useHasActiveThreads = function useHasActiveThreads(channel) {
  const _require = channel;
  const items = [closure_9, closure_8];
  return _require(589).useStateFromStoresObject(items, () => {
    const activeJoinedThreadsForParent = closure_1_9.getActiveJoinedThreadsForParent(activeJoinedRelevantThreadsForParent.guild_id, activeJoinedRelevantThreadsForParent.id);
    activeJoinedRelevantThreadsForParent = closure_1_9.getActiveJoinedRelevantThreadsForParent(activeJoinedRelevantThreadsForParent.guild_id, activeJoinedRelevantThreadsForParent.id);
    const activeUnjoinedThreadsForParent = closure_1_9.getActiveUnjoinedThreadsForParent(activeJoinedRelevantThreadsForParent.guild_id, activeJoinedRelevantThreadsForParent.id);
    let obj = closure_1_1(closure_1_3[12])(activeJoinedRelevantThreadsForParent);
    const someResult = obj.some((channel) => closure_8.can(constants.VIEW_CHANNEL, channel.channel));
    const someResult1 = closure_1_1(closure_1_3[12])(activeJoinedThreadsForParent).some((channel) => {
      let canResult = !(channel.channel.id in activeJoinedRelevantThreadsForParent);
      if (canResult) {
        canResult = closure_1_8.can(closure_1_10.VIEW_CHANNEL, channel.channel);
      }
      return canResult;
    });
    const obj2 = closure_1_1(closure_1_3[12])(activeJoinedThreadsForParent);
    let someResult2 = closure_1_1(closure_1_3[12])(activeUnjoinedThreadsForParent).some((arg0) => closure_8.can(constants.VIEW_CHANNEL, arg0));
    let tmp7 = someResult;
    if (!someResult) {
      tmp7 = someResult1;
    }
    if (!tmp7) {
      tmp7 = someResult2;
    }
    obj = { hasActiveThreads: tmp7, hasMoreActiveThreads: null };
    if (!someResult2) {
      someResult2 = someResult1;
    }
    obj[1] = someResult2;
    return obj;
  });
};
export const useCanManageThread = function useCanManageThread(channel) {
  const _require = channel;
  const items = [closure_7];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let parent_id;
    if (parent_id != null) {
      parent_id = parent_id.parent_id;
    }
    return closure_1_7.getChannel(parent_id);
  });
  const obj = _require(589);
  const items1 = [closure_8];
  const items2 = [stateFromStores];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = closure_1_8.can(closure_1_10.MANAGE_THREADS, tmp);
    }
    return canResult;
  }, items2);
  const obj2 = _require(589);
  const items3 = [closure_6];
  let tmp4 = null != channel;
  const stateFromStores2 = _require(589).useStateFromStores(items3, () => id.getId());
  if (tmp4) {
    tmp4 = null != stateFromStores;
  }
  if (tmp4) {
    let isThreadResult = channel.isThread();
    if (isThreadResult) {
      let tmp6 = stateFromStores1;
      if (!tmp6) {
        const isLockedThreadResult = channel.isLockedThread();
        let tmp8 = !isLockedThreadResult;
        if (!isLockedThreadResult) {
          tmp8 = channel.ownerId === stateFromStores2;
        }
        tmp6 = tmp8;
      }
      isThreadResult = tmp6;
    }
    tmp4 = isThreadResult;
  }
  return tmp4;
};
export { useCanUnarchiveThread };
export { canUnarchiveThread };
export const useIsActiveChannelOrUnarchivableThread = function useIsActiveChannelOrUnarchivableThread(channel) {
  let tmp2 = null != channel;
  if (tmp2) {
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
        isArchivedThreadResult = tmp;
      }
      isActiveThreadResult = isArchivedThreadResult;
    }
    tmp2 = isActiveThreadResult;
  }
  return tmp2;
};
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
export const computeIsReadOnlyThread = function computeIsReadOnlyThread(messageChannel) {
  if (messageChannel.isMediaThread()) {
    return true;
  } else {
    const canResult = closure_8.can(constants.MANAGE_THREADS, messageChannel);
    return messageChannel.isArchivedLockedThread() && !closure_8.can(constants.MANAGE_THREADS, messageChannel);
  }
};
export const useIsThreadModerator = function useIsThreadModerator(channel) {
  const _require = channel;
  const items = [closure_8];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_8];
    const first = closure_1_4(items, 1)[0];
    let canResult = null != closure_0;
    if (canResult) {
      canResult = first.can(closure_1_10.MANAGE_THREADS, closure_0);
    }
    return canResult;
  });
};
export const isThreadModerator = function isThreadModerator(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_8];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
  let canResult = null != arg0;
  if (canResult) {
    canResult = first.can(constants.MANAGE_THREADS, arg0);
  }
  return canResult;
};
export const useCanRemoveThreadMember = function useCanRemoveThreadMember(channelId) {
  const _require = channelId;
  let items = [closure_7, closure_8, closure_6];
  return _require(589).useStateFromStores(items, () => {
    const channel = closure_1_7.getChannel(closure_0);
    if (null == channel) {
      return false;
    } else {
      let tmp5 = channel.type === closure_1_12.PRIVATE_THREAD && channel.ownerId === tmp3;
      if (!tmp5) {
        const items = [closure_1_8];
        const first = closure_1_4(items, 1)[0];
        let canResult = null != channel;
        if (canResult) {
          canResult = first.can(closure_1_10.MANAGE_THREADS, channel);
        }
        tmp5 = canResult;
      }
      return tmp5;
    }
  });
};
export const useHasPermissionToJoinThreadVoice = function useHasPermissionToJoinThreadVoice(isThread) {
  const _require = isThread;
  const items = [closure_8];
  let stateFromStores = _require(589).useStateFromStores(items, () => closure_1_8.can(closure_1_10.CONNECT, closure_0));
  let tmp3 = null != isThread;
  if (tmp3) {
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
    tmp3 = isActiveThreadResult;
  }
  if (stateFromStores) {
    stateFromStores = tmp3;
  }
  return stateFromStores;
};
export const useCanJoinThreadVoice = function useCanJoinThreadVoice(channel) {
  const tmp2 = useIsRemoteDefault();
  const _require = channel;
  let obj = _require(589);
  const items = [closure_8];
  let stateFromStores = obj.useStateFromStores(items, () => closure_1_8.can(closure_1_10.CONNECT, closure_0));
  let tmp6 = null != channel;
  if (tmp6) {
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
        isArchivedThreadResult = tmp5;
      }
      isActiveThreadResult = isArchivedThreadResult;
    }
    tmp6 = isActiveThreadResult;
  }
  if (stateFromStores) {
    stateFromStores = tmp6;
  }
  obj = { guildId: channel.guild_id, location: "e791ea_1" };
  let enabled = importDefaultResultResult.useExperiment(obj, { autoTrackExposure: false }).enabled;
  let tmp3Result = tmp3(7236);
  const isGameInvitesPost = tmp3Result.useIsGameInvitesPost(channel);
  tmp3Result = tmp3(5252);
  let shouldAgeVerifyForAgeGate = tmp3Result.useShouldAgeVerifyForAgeGate();
  if (shouldAgeVerifyForAgeGate) {
    shouldAgeVerifyForAgeGate = tmp3(5252).shouldShowAgeGateForChannelId(channel.id);
    const tmp3Result1 = tmp3(5252);
  }
  let isVocalThreadResult = !tmp2;
  if (!tmp2) {
    isVocalThreadResult = channel.isVocalThread();
  }
  if (isVocalThreadResult) {
    if (!enabled) {
      enabled = isGameInvitesPost;
    }
    isVocalThreadResult = enabled;
  }
  if (isVocalThreadResult) {
    isVocalThreadResult = stateFromStores;
  }
  if (isVocalThreadResult) {
    isVocalThreadResult = !shouldAgeVerifyForAgeGate;
  }
  return isVocalThreadResult;
};
export const useIsNonModInLockedThread = function useIsNonModInLockedThread(channel) {
  const _require = channel;
  let items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    const items = [closure_1_8];
    const first = closure_1_4(items, 1)[0];
    let canResult = null != closure_0;
    if (canResult) {
      canResult = first.can(closure_1_10.MANAGE_THREADS, closure_0);
    }
    return canResult;
  });
  const obj = _require(589);
  return channel.isLockedThread() && !stateFromStores;
};
export const isNonModInLockedThread = function isNonModInLockedThread(isLockedThread) {
  const items = [closure_8];
  const first = callback(items, 1)[0];
  let canResult = null != isLockedThread;
  if (canResult) {
    canResult = first.can(constants.MANAGE_THREADS, isLockedThread);
  }
  return isLockedThread.isLockedThread() && !canResult;
};