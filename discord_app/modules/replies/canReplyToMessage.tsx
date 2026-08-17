// discord_app/modules/replies/canReplyToMessage.tsx
import useCanUnarchiveThread from "../threads/ThreadHooks.tsx";
import useUserCommunicationDisabled from "../guild_communication_disabled/useUserCommunicationDisabled.tsx";
import closure_2 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../stores/PermissionStore.tsx";
import closure_4 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { Permissions } from "../../../discord_common/js/shared/Constants.tsx";
import { useUserCommunicationDisabled } from "../guild_communication_disabled/useUserCommunicationDisabled.tsx";
import { useCanUnarchiveThread } from "../threads/ThreadHooks.tsx";

require = arg1;
({ MessageFlags: c5, MessageStates: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/replies/canReplyToMessage.tsx");

export const useCanReplyToMessage = function useCanReplyToMessage(channel, message) {
  const _require = channel;
  dependencyMap = message;
  const canUnarchiveThread = _useCanUnarchiveThread.useCanUnarchiveThread(channel);
  const obj = _useCanUnarchiveThread;
  let tmp = _require;
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const obj2 = _useUserCommunicationDisabled;
  const items = [closure_3];
  let stateFromStores = tmp(589).useStateFromStores(items, () => {
    let tmp = null != channel;
    if (tmp) {
      tmp = null != message;
    }
    if (tmp) {
      if (obj.isPrivate()) {
        let hasItem = !obj.isSystemDM();
      } else {
        hasItem = obj2.can(closure_1_7.SEND_MESSAGES, obj) && obj2.can(closure_1_7.READ_MESSAGE_HISTORY, obj);
        const tmp4 = closure_1_7;
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
export const canReplyToMessage = function canReplyToMessage(isPrivate, type) {
  const obj = useCanUnarchiveThread;
  if (isPrivate.isPrivate()) {
    let hasItem = !isPrivate.isSystemDM();
  } else {
    hasItem = obj2.can(Permissions.SEND_MESSAGES, isPrivate) && obj2.can(Permissions.READ_MESSAGE_HISTORY, isPrivate);
    const tmp4 = Permissions;
  }
  if (hasItem) {
    const REPLYABLE = tmp(686).MessageTypesSets.REPLYABLE;
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