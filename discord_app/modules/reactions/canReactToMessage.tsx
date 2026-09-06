// === Module 7970: canReactToMessage ===

// Module 7970 (canReactToMessage)
import FlagUtils from "FlagUtils" /* 1384 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4188 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7971 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5413 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function canReactToMessageInternal(state, getGuildId, items) {
  [obj, obj2] = items;
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
  let tmp6 = canAddNewReactionsDefault(getGuildId) && !getGuildId.isArchivedLockedThread();
  if (tmp6) {
    tmp6 = state.state !== constants.SEND_FAILED;
  }
  if (tmp6) {
    tmp6 = state.type !== constants2.THREAD_STARTER_MESSAGE;
  }
  if (tmp6) {
    tmp6 = !FlagUtils.hasFlag(state.flags, constants3.EPHEMERAL);
  }
  if (tmp6) {
    tmp6 = !CommunicationDisabledUtils.isMemberCommunicationDisabled(member);
  }
  return tmp6;
}
const Constants = fn(1074);
({ MessageStates: closure_7, MessageTypes: closure_8, MessageFlags: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export const canReactToMessage = function canReactToMessage(message, channel) {
  const items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  return canReactToMessageInternal(message, channel, items);
};
export const useCanReactToMessage = function useCanReactToMessage(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
    return canReactToMessageInternal(closure_0, closure_1, items);
  });
};