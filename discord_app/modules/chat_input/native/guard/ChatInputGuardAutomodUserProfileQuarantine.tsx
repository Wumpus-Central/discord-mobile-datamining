// === Module 12607: ChatInputGuardAutomodUserProfileQuarantine ===

// Module 12607 (ChatInputGuardAutomodUserProfileQuarantine)
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4282 */;
import GuildAutomodActionActionCreators from "GuildAutomodActionActionCreators" /* 12004 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12591 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;

require = fn;
const GuildMemberFlags = fn(4263).GuildMemberFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default noop.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  guildId = guildId.guildId;
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    if (null == guildId) {
      const _Set = Set;
      const set = new Set();
      return set;
    } else {
      const id = AuthenticationStore.getId();
      return AutomodPermissionUtils.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, id));
    }
  }, items1);
  const callback = noop.useCallback(() => {
    const result = GuildAutomodActionActionCreators.openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const obj = guildId(504);
  const automodReason = guildId(4282).getAutomodReason(stateFromStores);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1115).intl;
    let stringResult = intl2.string(tmp(1115).t.Viksoo);
  } else {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t["/PGQf0"]);
  }
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1115).intl;
    let stringResult1 = intl4.string(tmp(1115).t.ml72ZU);
  } else {
    const intl3 = tmp(1115).intl;
    stringResult1 = intl3.string(tmp(1115).t["8HW7r9"]);
  }
  const obj3 = { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null };
  const obj2 = guildId(4282);
  obj3.icon = jsx(guildId(12608).ChatXIcon, {});
  obj3.message = stringResult1;
  return jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null });
});