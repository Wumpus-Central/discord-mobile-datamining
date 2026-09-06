// discord_app/modules/replies/canReplyToMessage.tsx
import MessageTypes from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import ThreadHooks from "../threads/ThreadHooks.tsx";
import useUserCommunicationDisabled from "../guild_communication_disabled/useUserCommunicationDisabled.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

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
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null != closure_1;
    }
    if (tmp) {
      if (obj.isPrivate()) {
        let hasItem = !obj.isSystemDM();
      } else {
        hasItem = obj2.can(Permissions.SEND_MESSAGES, obj) && obj2.can(Permissions.READ_MESSAGE_HISTORY, obj);
      }
      if (hasItem) {
        const REPLYABLE = MessageTypes.MessageTypesSets.REPLYABLE;
        hasItem = REPLYABLE.has(tmp3.type);
      }
      tmp = hasItem;
      tmp3 = closure_1;
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
    hasItem = obj2.can(Permissions.SEND_MESSAGES, isPrivate) && obj2.can(Permissions.READ_MESSAGE_HISTORY, isPrivate);
  }
  if (hasItem) {
    const REPLYABLE = tmp(1089).MessageTypesSets.REPLYABLE;
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
