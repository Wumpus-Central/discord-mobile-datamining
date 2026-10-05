// === Module 7635: canReplyToMessage ===

// Module 7635 (canReplyToMessage)
import Constants2 from "Constants" /* 1096 */;
import MessageTypes from "MessageTypes" /* 1101 */;
import ThreadHooks from "ThreadHooks" /* 6772 */;
import useUserCommunicationDisabled from "useUserCommunicationDisabled" /* 7636 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroRequire;
({ MessageFlags: hasOwnProperty, MessageStates: metroRequire } = Constants);
const Permissions = Constants2.Permissions;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((getGuildId, hasFlag) => {
  let tmp5;
  let tmp9;
  _require = getGuildId;
  dependencyMap = hasFlag;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(12);
  const obj2 = require("ThreadHooks");
  const canUnarchiveThread = obj2.useCanUnarchiveThread(getGuildId);
  if (cResult[0] !== getGuildId) {
    let guildId;
    if (getGuildId != null) {
      guildId = getGuildId.getGuildId();
    }
    cResult[0] = getGuildId;
    cResult[1] = guildId;
    tmp5 = guildId;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = tmp(7636);
  const tmp8 = _slicedToArray(tmpResult.useCurrentUserCommunicationDisabled(tmp5), 2)[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === getGuildId) {
    let tmp11;
    if (cResult[4] === hasFlag) {
      tmp11 = cResult[5];
    }
    const tmpResult2 = tmp(504);
    const stateFromStores = tmpResult2.useStateFromStores(tmp9, tmp11);
    let tmp14 = null != getGuildId && null != hasFlag;
    if (tmp14) {
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === canUnarchiveThread) {
          if (cResult[8] === getGuildId) {
            if (cResult[9] === tmp8) {
              let tmp15;
              if (cResult[10] === hasFlag) {
                tmp15 = cResult[11];
              }
              tmp14 = tmp15;
            }
          }
        }
      }
      const state = hasFlag.state;
      const SENT = constants2.SENT;
      const hasFlagResult = hasFlag.hasFlag(constants.EPHEMERAL);
      const isArchivedThreadResult = getGuildId.isArchivedThread();
      let tmp20 = !isArchivedThreadResult;
      if (isArchivedThreadResult) {
        tmp20 = canUnarchiveThread;
      }
      const tmp21 = stateFromStores && state === SENT && !hasFlagResult && !tmp8 && tmp20;
      cResult[6] = stateFromStores;
      cResult[7] = canUnarchiveThread;
      cResult[8] = getGuildId;
      cResult[9] = tmp8;
      cResult[10] = hasFlag;
      cResult[11] = tmp21;
      tmp15 = tmp21;
    }
    return tmp14;
  }
  const fn = function v() {
    let tmp = null != getGuildId && null != hasFlag;
    if (tmp) {
      let hasItem;
      if (getGuildId.isPrivate()) {
        hasItem = !getGuildId.isSystemDM();
      } else {
        hasItem = PermissionStore.can(Permissions.SEND_MESSAGES, getGuildId) && PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, getGuildId);
      }
      if (hasItem) {
        const REPLYABLE = MessageTypes.MessageTypesSets.REPLYABLE;
        hasItem = REPLYABLE.has(hasFlag.type);
      }
      tmp = hasItem;
    }
    return tmp;
  };
  cResult[3] = getGuildId;
  cResult[4] = hasFlag;
  cResult[5] = fn;
  tmp11 = fn;
}) : ((getGuildId, hasFlag) => {
  _require = getGuildId;
  dependencyMap = hasFlag;
  let tmp = _require;
  const obj = require("ThreadHooks");
  const canUnarchiveThread = obj.useCanUnarchiveThread(getGuildId);
  let guildId;
  const useCurrentUserCommunicationDisabled = require("useUserCommunicationDisabled").useCurrentUserCommunicationDisabled;
  require("useUserCommunicationDisabled");
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  const items = [PermissionStore];
  const tmp6 = _slicedToArray(useCurrentUserCommunicationDisabled(guildId), 2)[1];
  const tmpResult = tmp(504);
  let stateFromStores = tmpResult.useStateFromStores(items, () => {
    let tmp = null != getGuildId && null != hasFlag;
    if (tmp) {
      let hasItem;
      if (getGuildId.isPrivate()) {
        hasItem = !getGuildId.isSystemDM();
      } else {
        hasItem = PermissionStore.can(Permissions.SEND_MESSAGES, getGuildId) && PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, getGuildId);
      }
      if (hasItem) {
        const REPLYABLE = MessageTypes.MessageTypesSets.REPLYABLE;
        hasItem = REPLYABLE.has(hasFlag.type);
      }
      tmp = hasItem;
    }
    return tmp;
  });
  let tmp8 = null != getGuildId && null != hasFlag;
  if (tmp8) {
    const state = hasFlag.state;
    const SENT = constants2.SENT;
    const hasFlagResult = hasFlag.hasFlag(constants.EPHEMERAL);
    const isArchivedThreadResult = getGuildId.isArchivedThread();
    let tmp13 = !isArchivedThreadResult;
    if (isArchivedThreadResult) {
      tmp13 = canUnarchiveThread;
    }
    if (stateFromStores) {
      stateFromStores = state === SENT;
    }
    if (stateFromStores) {
      stateFromStores = !hasFlagResult;
    }
    if (stateFromStores) {
      stateFromStores = !tmp6;
    }
    if (stateFromStores) {
      stateFromStores = tmp13;
    }
    tmp8 = stateFromStores;
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/replies/canReplyToMessage.tsx");

export const useCanReplyToMessage = tmp3;
export const canReplyToMessage = function canReplyToMessage(isPrivate, type) {
  let hasItem;
  const obj = ThreadHooks;
  const canUnarchiveThreadResult = obj.canUnarchiveThread(isPrivate);
  if (isPrivate.isPrivate()) {
    hasItem = !isPrivate.isSystemDM();
  } else {
    hasItem = PermissionStore.can(Permissions.SEND_MESSAGES, isPrivate) && PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, isPrivate);
  }
  if (hasItem) {
    const REPLYABLE = MessageTypes.MessageTypesSets.REPLYABLE;
    hasItem = REPLYABLE.has(type.type);
  }
  const currentUser = UserStore.getCurrentUser();
  let id;
  const userCommunicationDisabled = useUserCommunicationDisabled.userCommunicationDisabled;
  useUserCommunicationDisabled;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const guildId = isPrivate.getGuildId();
  const state = type.state;
  const SENT = metroRequire.SENT;
  const tmp10 = _slicedToArray(userCommunicationDisabled(id, guildId), 2)[1];
  const hasFlagResult = type.hasFlag(hasOwnProperty.EPHEMERAL);
  const isArchivedThreadResult = isPrivate.isArchivedThread();
  let tmp13 = !isArchivedThreadResult;
  if (isArchivedThreadResult) {
    tmp13 = canUnarchiveThreadResult;
  }
  if (hasItem) {
    hasItem = state === SENT;
  }
  if (hasItem) {
    hasItem = !hasFlagResult;
  }
  if (hasItem) {
    hasItem = !tmp10;
  }
  if (hasItem) {
    hasItem = tmp13;
  }
  return hasItem;
};