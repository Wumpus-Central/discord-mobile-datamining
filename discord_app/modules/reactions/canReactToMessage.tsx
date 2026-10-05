// === Module 7629: canReactToMessage ===

// Module 7629 (canReactToMessage)
import FlagUtils from "FlagUtils" /* 1390 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4496 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7630 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5570 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
function canReactToMessageInternal(state, getGuildId, items) {
  let obj;
  let obj2;
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
  let tmp6 = canAddNewReactionsDefault(getGuildId) && !getGuildId.isArchivedLockedThread() && state.state !== metroImportDefault.SEND_FAILED && state.type !== metroImportAll.THREAD_STARTER_MESSAGE;
  if (tmp6) {
    const obj3 = FlagUtils;
    tmp6 = !obj3.hasFlag(state.flags, constants3.EPHEMERAL);
  }
  if (tmp6) {
    const obj4 = CommunicationDisabledUtils;
    tmp6 = !obj4.isMemberCommunicationDisabled(member);
  }
  return tmp6;
}
({ MessageStates: metroImportDefault, MessageTypes: metroImportAll, MessageFlags: c9 } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp9;
    if (cResult[2] === arg0) {
      tmp9 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp9);
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
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
    return canReactToMessageInternal(closure_0, closure_1, items);
  });
});
const result = size.fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export const canReactToMessage = function canReactToMessage(message, channel) {
  const items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  return canReactToMessageInternal(message, channel, items);
};
export const useCanReactToMessage = tmp3;