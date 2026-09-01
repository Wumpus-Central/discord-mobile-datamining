// === Module 12028: ? ===

// Module 12028
import ChatInputGuardDefault from "ChatInputGuard" /* 12012 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4109 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [closure_4, closure_5];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == guildId) {
      const _Set = Set;
      const set = new Set();
      return set;
    } else {
      const id = closure_1_4.getId();
      return guildId(closure_1_2[6]).getAutomodQuarantinedGuildMemberFlags(closure_1_5.getMember(tmp, id));
    }
  }, items1);
  const callback = importAllResult.useCallback(() => {
    const result = guildId(closure_1_2[7]).openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const automodReason = guildId(4127).getAutomodReason(stateFromStores);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1236).intl;
    let stringResult = intl2.string(tmp(1236).t.Viksoo);
  } else {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t["/PGQf0"]);
  }
  if (automodReason === tmp6.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1236).intl;
    let stringResult1 = intl4.string(tmp(1236).t.ml72ZU);
  } else {
    const intl3 = tmp(1236).intl;
    stringResult1 = intl3.string(tmp(1236).t["8HW7r9"]);
  }
  obj = { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null };
  const obj2 = guildId(4127);
  tmp6 = GuildMemberFlags;
  obj[3] = jsx(guildId(12029).ChatXIcon, {});
  obj[4] = stringResult1;
  return jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null });
});
let result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default memoResult;