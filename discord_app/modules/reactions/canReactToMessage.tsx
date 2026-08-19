// === Module 8194: canReactToMessageInternal ===

// Module 8194 (canReactToMessageInternal)
import hasFlag from "hasFlag" /* 1403 */;
import isCommunicationDisabled from "isCommunicationDisabled" /* 4010 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import recomputeGuild from "recomputeGuild" /* 4977 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = fn;
function canReactToMessageInternal(state, getGuildId, items) {
  [obj, obj2, obj3, obj4] = items;
  const guildId = getGuildId.getGuildId();
  const currentUser = obj.getCurrentUser();
  let member = null;
  if (null != guildId) {
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    member = null;
    if (null != id) {
      member = obj2.getMember(guildId, currentUser.id);
    }
  }
  let canResult = null != guildId && obj3.canChatInGuild(guildId);
  if (canResult) {
    canResult = obj4.can(constants.ADD_REACTIONS, getGuildId);
  }
  if (!canResult) {
    canResult = getGuildId.isPrivate();
  }
  if (canResult) {
    canResult = !getGuildId.isArchivedLockedThread();
  }
  if (canResult) {
    canResult = state.state !== constants2.SEND_FAILED;
  }
  if (canResult) {
    canResult = state.type !== constants3.THREAD_STARTER_MESSAGE;
  }
  if (canResult) {
    canResult = !hasFlag.hasFlag(state.flags, constants4.EPHEMERAL);
  }
  if (canResult) {
    canResult = !isCommunicationDisabled.isMemberCommunicationDisabled(member);
  }
  return canResult;
}
({ Permissions: closure_6, MessageStates: error, MessageTypes: closure_8, MessageFlags: c9 } = ME);
const result = require("obj132").fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export const canReactToMessage = function canReactToMessage(message, channel) {
  const items = [closure_5, closure_2, closure_3, closure_4];
  return canReactToMessageInternal(message, channel, items);
};
export const useCanReactToMessage = function useCanReactToMessage(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let items = [closure_5, closure_2, closure_3, closure_4];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_5, closure_1_2, closure_1_3, closure_1_4];
    return canReactToMessageInternal(closure_0, closure_1, items);
  });
};