// discord_app/modules/threads/ThreadHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import isSystemMessageDefault from "../messages/isSystemMessage.tsx";
import useIsRemoteDefault from "../game_console/hooks/useIsRemote.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import createExperiment from "../experiments/createExperiment.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore.tsx";

const require = fn;
function useCanStartPrivateThread(type) {
  _require = type;
  const items = [PermissionStore];
  const items1 = [type];
  let tmp3 = type.type === constants3.GUILD_TEXT;
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => PermissionStore.can(BigFlagUtilsAll.combine(constants.CREATE_PRIVATE_THREADS), closure_0),
    items1,
  );
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
}
function useCanUnarchiveThread(channel) {
  _require = channel;
  const items = [PermissionStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, tmp);
    }
    if (canResult) {
      canResult = PermissionStore.can(constants.SEND_MESSAGES, tmp);
    }
    return canResult;
  });
  const obj = require("initialize");
  const items1 = [PermissionStore, ChannelStore];
  const items2 = [channel];
  closure_129_0 = channel;
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => {
      channel = null;
      if (null != closure_0) {
        channel = ChannelStore.getChannel(tmp.parent_id);
      }
      let canResult = null != channel;
      if (canResult) {
        canResult = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, tmp);
      }
      if (canResult) {
        canResult = PermissionStore.can(constants.SEND_MESSAGES, channel);
      }
      return canResult;
    },
    items2,
  );
  const obj2 = require("initialize");
  const items3 = [PermissionStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => {
    const items = [PermissionStore];
    const first = _slicedToArray(items, 1)[0];
    let canResult = null != closure_0;
    if (canResult) {
      canResult = first.can(constants.MANAGE_THREADS, closure_0);
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
    channel = ChannelStore.getChannel(parent_id.parent_id);
  }
  let canResult1 = null != channel;
  if (canResult1) {
    canResult1 = obj.can(constants.SEND_MESSAGES_IN_THREADS, channel);
  }
  if (canResult) {
    canResult = canResult1;
  }
  const items = [PermissionStore];
  const first = _slicedToArray(items, 1)[0];
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
const THREADED_CHANNEL_TYPES = fn(1961).THREADED_CHANNEL_TYPES;
const Constants = fn(1074);
({ Permissions: c10, MessageFlags: closure_11, ChannelTypes: closure_12 } = Constants);
let obj = {
  id: "2022-07_voice_in_threads",
  label: "Voice in Threads",
  kind: "guild",
  defaultConfig: { enabled: false },
  treatments: null,
};
let items = [{ id: 1, label: "On", config: { enabled: true } }];
obj.treatments = items;
const importDefaultResultResult = createExperiment(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/ThreadHooks.tsx");

export const VoiceInThreadsExperiment = importDefaultResultResult;
export const useCanStartPublicThread = function useCanStartPublicThread(type, arg1) {
  _require = type;
  const items = [PermissionStore];
  const items1 = [type];
  let flag = false;
  if (
    obj.useStateFromStores(
      items,
      () => {
        if (forumLikeChannel.isForumLikeChannel()) {
          let SEND_MESSAGES = constants.SEND_MESSAGES;
        } else {
          SEND_MESSAGES = BigFlagUtilsAll.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
        }
        return PermissionStore.can(SEND_MESSAGES, forumLikeChannel);
      },
      items1,
    )
  ) {
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
export { useCanStartPrivateThread };
export const computeCanStartPrivateThread = function computeCanStartPrivateThread(type, hasFlag) {
  let flag = false;
  if (PermissionStore.can(constants.CREATE_PRIVATE_THREADS, type)) {
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
  _require = channel;
  const items = [PermissionStore];
  const items1 = [channel];
  let flag = false;
  if (
    obj.useStateFromStores(
      items,
      () => {
        if (forumLikeChannel.isForumLikeChannel()) {
          let SEND_MESSAGES = constants.SEND_MESSAGES;
        } else {
          SEND_MESSAGES = BigFlagUtilsAll.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
        }
        return PermissionStore.can(SEND_MESSAGES, forumLikeChannel);
      },
      items1,
    )
  ) {
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(channel.type)) {
      flag = true;
    }
  }
  if (!flag) {
    flag = useCanStartPrivateThread(channel);
  }
  return flag;
};
export const useCanViewThreadForMessage = function useCanViewThreadForMessage(hasFlag) {
  _require = hasFlag;
  const items = [ChannelStore];
  const items1 = [hasFlag];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ChannelStore.getChannel(SnowflakeUtilsDefault.castMessageIdAsChannelId(hasFlag.id)),
    items1,
  );
  const obj = require("initialize");
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores),
    items3,
  );
  let hasFlagResult = hasFlag.hasFlag(constants2.HAS_THREAD);
  if (hasFlagResult) {
    hasFlagResult = null != stateFromStores && stateFromStores1;
    const tmp5 = null != stateFromStores && stateFromStores1;
  }
  return hasFlagResult;
};
export const useHasActiveThreads = function useHasActiveThreads(channel) {
  _require = channel;
  const items = [ActiveJoinedThreadsStore, PermissionStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    const activeJoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedThreadsForParent(
      user.guild_id,
      user.id,
    );
    const activeJoinedRelevantThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedRelevantThreadsForParent(
      user.guild_id,
      user.id,
    );
    const activeUnjoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForParent(
      user.guild_id,
      user.id,
    );
    let obj = _modDef12(activeJoinedRelevantThreadsForParent);
    const someResult = obj.some((channel) => closure_1_8.can(constants.VIEW_CHANNEL, channel.channel));
    const someResult1 = _modDef12(activeJoinedThreadsForParent).some((channel) => {
      let canResult = !(channel.channel.id in activeJoinedRelevantThreadsForParent);
      if (canResult) {
        canResult = PermissionStore.can(constants.VIEW_CHANNEL, channel.channel);
      }
      return canResult;
    });
    const obj2 = _modDef12(activeJoinedThreadsForParent);
    let someResult2 = _modDef12(activeUnjoinedThreadsForParent).some((item) =>
      closure_1_8.can(constants.VIEW_CHANNEL, item),
    );
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
    obj.hasMoreActiveThreads = someResult2;
    return obj;
  });
};
export const useCanManageThread = function useCanManageThread(channel) {
  _require = channel;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    parent_id = undefined;
    if (parent_id != null) {
      parent_id = parent_id.parent_id;
    }
    return ChannelStore.getChannel(parent_id);
  });
  const obj = require("initialize");
  const items1 = [PermissionStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => {
      let canResult = null != stateFromStores;
      if (canResult) {
        canResult = PermissionStore.can(constants.MANAGE_THREADS, tmp);
      }
      return canResult;
    },
    items2,
  );
  const obj2 = require("initialize");
  const items3 = [AuthenticationStore];
  let tmp4 = null != channel;
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => id.getId());
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
export const computeIsReadOnlyThread = function computeIsReadOnlyThread(channel) {
  if (channel.isMediaThread()) {
    return true;
  } else {
    const canResult = PermissionStore.can(constants.MANAGE_THREADS, channel);
    return channel.isArchivedLockedThread() && !PermissionStore.can(constants.MANAGE_THREADS, channel);
  }
};
export const useIsThreadModerator = function useIsThreadModerator(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const items = [PermissionStore];
    const first = _slicedToArray(items, 1)[0];
    let canResult = null != closure_0;
    if (canResult) {
      canResult = first.can(constants.MANAGE_THREADS, closure_0);
    }
    return canResult;
  });
};
export const isThreadModerator = function isThreadModerator(arg0) {
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
};
export const useCanRemoveThreadMember = function useCanRemoveThreadMember(channelId) {
  _require = channelId;
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
};
export const useHasPermissionToJoinThreadVoice = function useHasPermissionToJoinThreadVoice(isThread) {
  _require = isThread;
  const items = [PermissionStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () =>
    PermissionStore.can(constants.CONNECT, closure_0),
  );
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
  _require = channel;
  let obj = require("initialize");
  const items = [PermissionStore];
  let stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.CONNECT, closure_0));
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
  let tmp3Result = tmp3(7272);
  const isGameInvitesPost = tmp3Result.useIsGameInvitesPost(channel);
  tmp3Result = tmp3(4771);
  let shouldAgeVerifyForAgeGate = tmp3Result.useShouldAgeVerifyForAgeGate();
  if (shouldAgeVerifyForAgeGate) {
    shouldAgeVerifyForAgeGate = tmp3(4771).shouldShowAgeGateForChannelId(channel.id);
    const tmp3Result1 = tmp3(4771);
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
  _require = channel;
  let items = [PermissionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const items = [PermissionStore];
    const first = _slicedToArray(items, 1)[0];
    let canResult = null != closure_0;
    if (canResult) {
      canResult = first.can(constants.MANAGE_THREADS, closure_0);
    }
    return canResult;
  });
  const obj = require("initialize");
  return channel.isLockedThread() && !stateFromStores;
};
export const isNonModInLockedThread = function isNonModInLockedThread(isLockedThread) {
  const items = [PermissionStore];
  const first = _slicedToArray(items, 1)[0];
  let canResult = null != isLockedThread;
  if (canResult) {
    canResult = first.can(constants.MANAGE_THREADS, isLockedThread);
  }
  return isLockedThread.isLockedThread() && !canResult;
};
