// discord_app/modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx
import importAllResult from "noop";
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import { GuildMemberFlags } from "GuildMemberFlags";
import { jsx } from "jsxProd";
import { ChatInputGuard } from "ChatInputGuard.tsx";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [fetchFingerprint, trackCommunicationDisabled];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == guildId) {
      const _Set = Set;
      const set = new Set();
      return set;
    } else {
      const id = outer1_4.getId();
      return guildId(outer1_2[6]).getAutomodQuarantinedGuildMemberFlags(outer1_5.getMember(tmp, id));
    }
  }, items1);
  const callback = importAllResult.useCallback(() => {
    const result = guildId(outer1_2[7]).openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const automodReason = guildId(3935).getAutomodReason(stateFromStores);
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
  const obj2 = guildId(3935);
  tmp6 = GuildMemberFlags;
  obj[3] = jsx(guildId(11826).ChatXIcon, {});
  obj[4] = stringResult1;
  return jsx(ChatInputGuard, { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null });
});
let result = require("trackCommunicationDisabled").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default memoResult;