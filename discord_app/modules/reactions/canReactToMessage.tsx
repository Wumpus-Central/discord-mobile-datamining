// === Module 7629: canReactToMessage ===

// Module 7629 (canReactToMessage)
import FlagUtils from "FlagUtils" /* 1390 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4496 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7630 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5570 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;

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
const Constants = fn(1085);
({ MessageStates: closure_7, MessageTypes: closure_8, MessageFlags: closure_9 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export const canReactToMessage = function canReactToMessage(message, channel) {
  const items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  return canReactToMessageInternal(message, channel, items);
};
export const useCanReactToMessage = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp9 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp9);
  }
  class M {
    constructor() {
      items = [, , , ];
      items[0] = closure_6;
      items[1] = closure_3;
      items[2] = closure_4;
      items[3] = closure_5;
      return canReactToMessageInternal(closure_0, closure_1, items);
    }
  }
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = M;
  tmp9 = M;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  let items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
    return canReactToMessageInternal(closure_0, closure_1, items);
  });
});