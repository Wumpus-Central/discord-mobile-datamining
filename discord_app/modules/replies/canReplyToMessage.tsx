// discord_app/modules/replies/canReplyToMessage.tsx
import set from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import useCanUnarchiveThread from "../threads/ThreadHooks.tsx";
import useUserCommunicationDisabled from "../guild_communication_disabled/useUserCommunicationDisabled.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { Permissions } from "../../../discord_common/js/shared/Constants.tsx";
import { useUserCommunicationDisabled } from "../guild_communication_disabled/useUserCommunicationDisabled.tsx";
import { useCanUnarchiveThread } from "../threads/ThreadHooks.tsx";

require = fn;
({ MessageFlags: c5, MessageStates: closure_6 } = ME);
const result = require("obj132").fileFinishedImporting("modules/replies/canReplyToMessage.tsx");

export const useCanReplyToMessage = function useCanReplyToMessage(channel, message) {
  const _require = channel;
  dependencyMap = message;
  const canUnarchiveThread = require("../threads/ThreadHooks.tsx").useCanUnarchiveThread(channel);
  const obj = useCanUnarchiveThread;
  let tmp = _require;
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const obj2 = useUserCommunicationDisabled;
  const items = [closure_3];
  let stateFromStores = tmp(589).useStateFromStores(items, () => {
    let tmp = null != channel;
    if (tmp) {
      tmp = null != message;
    }
    if (tmp) {
      if (channel.isPrivate()) {
        let hasItem = !channel.isSystemDM();
      } else {
        hasItem = closure_1_3.can(Permissions.SEND_MESSAGES, channel) && closure_1_3.can(Permissions.READ_MESSAGE_HISTORY, channel);
      }
      if (hasItem) {
        const REPLYABLE = channel(message[5]).MessageTypesSets.REPLYABLE;
        hasItem = REPLYABLE.has(message.type);
      }
      tmp = hasItem;
    }
    return tmp;
  });
  let tmp6 = null != channel && null != message;
  if (tmp6) {
    const isArchivedThreadResult = channel.isArchivedThread();
    let tmp11 = !isArchivedThreadResult;
    if (isArchivedThreadResult) {
      tmp11 = canUnarchiveThread;
    }
    if (stateFromStores) {
      stateFromStores = message.state === constants2.SENT;
    }
    if (stateFromStores) {
      stateFromStores = !hasFlagResult;
    }
    if (stateFromStores) {
      stateFromStores = !callback(obj2.useCurrentUserCommunicationDisabled(guildId), 2)[1];
    }
    if (stateFromStores) {
      stateFromStores = tmp11;
    }
    tmp6 = stateFromStores;
    hasFlagResult = message.hasFlag(constants.EPHEMERAL);
  }
  return tmp6;
};
export const canReplyToMessage = function canReplyToMessage(isPrivate, type) {
  if (isPrivate.isPrivate()) {
    let hasItem = !isPrivate.isSystemDM();
  } else {
    hasItem = closure_3.can(Permissions.SEND_MESSAGES, isPrivate) && closure_3.can(Permissions.READ_MESSAGE_HISTORY, isPrivate);
  }
  if (hasItem) {
    const REPLYABLE = set.MessageTypesSets.REPLYABLE;
    hasItem = REPLYABLE.has(type.type);
  }
  currentUser = currentUser.getCurrentUser();
  const canUnarchiveThreadResult = useCanUnarchiveThread.canUnarchiveThread(isPrivate);
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const guildId = isPrivate.getGuildId();
  const tmpResult = useUserCommunicationDisabled;
  const isArchivedThreadResult = isPrivate.isArchivedThread();
  let tmp11 = !isArchivedThreadResult;
  if (isArchivedThreadResult) {
    tmp11 = canUnarchiveThreadResult;
  }
  if (hasItem) {
    hasItem = type.state === constants2.SENT;
  }
  if (hasItem) {
    hasItem = !hasFlagResult;
  }
  if (hasItem) {
    hasItem = !callback(tmpResult.userCommunicationDisabled(id, guildId), 2)[1];
  }
  if (hasItem) {
    hasItem = tmp11;
  }
  return hasItem;
};