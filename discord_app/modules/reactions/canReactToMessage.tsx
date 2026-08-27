// === Module 7811: canReactToMessageInternal ===

// Module 7811 (canReactToMessageInternal)
import hasFlag from "hasFlag" /* 1403 */;
import isCommunicationDisabled from "isCommunicationDisabled" /* 4078 */;
import _modDef7812 from "module_7812" /* 7812 */;
import closure_3 from "trackCommunicationDisabled" /* 1992 */;
import closure_4 from "recomputeGuild" /* 5309 */;
import closure_5 from "getUncachedChannelPermissions" /* 4089 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = arg1;
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
  let tmp6 = _modDef7812(getGuildId) && !getGuildId.isArchivedLockedThread();
  if (tmp6) {
    tmp6 = state.state !== constants.SEND_FAILED;
  }
  if (tmp6) {
    tmp6 = state.type !== constants2.THREAD_STARTER_MESSAGE;
  }
  if (tmp6) {
    tmp6 = !hasFlag.hasFlag(state.flags, constants3.EPHEMERAL);
    const obj3 = hasFlag;
  }
  if (tmp6) {
    tmp6 = !isCommunicationDisabled.isMemberCommunicationDisabled(member);
    const obj4 = isCommunicationDisabled;
  }
  return tmp6;
}
({ MessageStates: error, MessageTypes: closure_8, MessageFlags: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export const canReactToMessage = function canReactToMessage(message, channel) {
  const items = [closure_6, closure_3, closure_4, closure_5];
  return canReactToMessageInternal(message, channel, items);
};
export const useCanReactToMessage = function useCanReactToMessage(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_6, closure_3, closure_4, closure_5];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_6, closure_1_3, closure_1_4, closure_1_5];
    return closure_1_10(closure_0, closure_1, items);
  });
};