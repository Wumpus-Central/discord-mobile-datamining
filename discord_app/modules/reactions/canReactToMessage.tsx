// === Module 8589: canReactToMessage ===

// Module 8589 (canReactToMessage)
import FlagUtils from "FlagUtils" /* 1406 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4711 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 8590 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6410 */;
import PermissionStore from "PermissionStore" /* 4724 */;
import UserStore from "UserStore" /* 1388 */;

const require = globalThis.__r;

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
const Constants = fn(1072);
({ MessageStates: metroImportDefault, MessageTypes: closure_8, MessageFlags: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export function canReactToMessage(message, channel) {
  items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  return canReactToMessageInternal(message, channel, items);
}
export function useCanReactToMessage(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
    return canReactToMessageInternal(closure_0, closure_1, items);
  });
}