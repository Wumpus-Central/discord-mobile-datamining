// === Module 7976: canReplyToMessage ===

// Module 7976 (canReplyToMessage)
import MessageTypes from "MessageTypes" /* 1089 */;
import ThreadHooks from "ThreadHooks" /* 7269 */;
import useUserCommunicationDisabled from "useUserCommunicationDisabled" /* 7977 */;
import _slicedToArray from "module_32" /* 32 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ MessageFlags: hasOwnProperty, MessageStates: metroRequire } = Constants);
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/replies/canReplyToMessage.tsx");

export const useCanReplyToMessage = function useCanReplyToMessage(channel, message) {
  _require = channel;
  dependencyMap = message;
  const canUnarchiveThread = require("ThreadHooks").useCanUnarchiveThread(channel);
  const obj = require("ThreadHooks");
  let tmp = _require;
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const obj2 = require("useUserCommunicationDisabled");
  const items = [PermissionStore];
  let stateFromStores = tmp(504).useStateFromStores(items, () => {
    let tmp = null != channel;
    if (tmp) {
      tmp = null != message;
    }
    if (tmp) {
      if (channel.isPrivate()) {
        let hasItem = !channel.isSystemDM();
      } else {
        hasItem = PermissionStore.can(Permissions.SEND_MESSAGES, channel) && PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, channel);
      }
      if (hasItem) {
        const REPLYABLE = MessageTypes.MessageTypesSets.REPLYABLE;
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
      stateFromStores = !_slicedToArray(obj2.useCurrentUserCommunicationDisabled(guildId), 2)[1];
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
    hasItem = PermissionStore.can(Permissions.SEND_MESSAGES, isPrivate) && PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, isPrivate);
  }
  if (hasItem) {
    const REPLYABLE = MessageTypes.MessageTypesSets.REPLYABLE;
    hasItem = REPLYABLE.has(type.type);
  }
  const currentUser = UserStore.getCurrentUser();
  const canUnarchiveThreadResult = ThreadHooks.canUnarchiveThread(isPrivate);
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
    hasItem = !_slicedToArray(tmpResult.userCommunicationDisabled(id, guildId), 2)[1];
  }
  if (hasItem) {
    hasItem = tmp11;
  }
  return hasItem;
};