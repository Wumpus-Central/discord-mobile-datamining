// === Module 7762: useCanReplyToMessage ===

// Module 7762 (useCanReplyToMessage)
import _slicedToArray from "_slicedToArray";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { Permissions } from "sum";

let c5;
let closure_6;
const require = arg1;
({ MessageFlags: c5, MessageStates: closure_6 } = ME);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/replies/canReplyToMessage.tsx");

export const useCanReplyToMessage = function useCanReplyToMessage(channel, message) {
  const _require = channel;
  const dependencyMap = message;
  const canUnarchiveThread = _require(6052).useCanUnarchiveThread(channel);
  const obj = _require(6052);
  let tmp = _require;
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const obj2 = _require(7763);
  const items = [getUncachedChannelPermissions];
  let stateFromStores = tmp(589).useStateFromStores(items, () => {
    let tmp = null != channel;
    if (tmp) {
      tmp = null != message;
    }
    if (tmp) {
      if (obj.isPrivate()) {
        let hasItem = !obj.isSystemDM();
      } else {
        hasItem = obj2.can(outer1_7.SEND_MESSAGES, obj) && obj2.can(outer1_7.READ_MESSAGE_HISTORY, obj);
        const tmp4 = outer1_7;
      }
      if (hasItem) {
        const REPLYABLE = channel(message[5]).MessageTypesSets.REPLYABLE;
        hasItem = REPLYABLE.has(tmp3.type);
      }
      tmp = hasItem;
      tmp3 = message;
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
export const canReplyToMessage = function canReplyToMessage(channel, message) {
  const obj = require(6052) /* useCanUnarchiveThread */;
  if (channel.isPrivate()) {
    let hasItem = !channel.isSystemDM();
  } else {
    hasItem = obj2.can(Permissions.SEND_MESSAGES, channel) && obj2.can(Permissions.READ_MESSAGE_HISTORY, channel);
    const tmp4 = Permissions;
  }
  if (hasItem) {
    const REPLYABLE = tmp(686).MessageTypesSets.REPLYABLE;
    hasItem = REPLYABLE.has(message.type);
  }
  currentUser = currentUser.getCurrentUser();
  const canUnarchiveThreadResult = require(6052) /* useCanUnarchiveThread */.canUnarchiveThread(channel);
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const guildId = channel.getGuildId();
  const tmpResult = require(7763) /* useUserCommunicationDisabled */;
  const isArchivedThreadResult = channel.isArchivedThread();
  let tmp11 = !isArchivedThreadResult;
  if (isArchivedThreadResult) {
    tmp11 = canUnarchiveThreadResult;
  }
  if (hasItem) {
    hasItem = message.state === constants2.SENT;
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