// === Module 12464: ? ===

// Module 12464
import ChatInputGuardDefault from "ChatInputGuard" /* 12448 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "fetchFingerprint" /* 502 */;
import closure_5 from "trackCommunicationDisabled" /* 2021 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4187 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
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
  const automodReason = guildId(4205).getAutomodReason(stateFromStores);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1114).intl;
    let stringResult = intl2.string(tmp(1114).t.Viksoo);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t["/PGQf0"]);
  }
  if (automodReason === tmp6.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1114).intl;
    let stringResult1 = intl4.string(tmp(1114).t.ml72ZU);
  } else {
    const intl3 = tmp(1114).intl;
    stringResult1 = intl3.string(tmp(1114).t["8HW7r9"]);
  }
  obj = { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null };
  const obj2 = guildId(4205);
  tmp6 = GuildMemberFlags;
  obj[3] = jsx(guildId(12465).ChatXIcon, {});
  obj[4] = stringResult1;
  return jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null });
});
let result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default memoResult;