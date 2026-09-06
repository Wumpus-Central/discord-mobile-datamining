// === Module 12464: ChatInputGuardAutomodUserProfileQuarantine ===

// Module 12464 (ChatInputGuardAutomodUserProfileQuarantine)
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4205 */;
import GuildAutomodActionActionCreators from "GuildAutomodActionActionCreators" /* 11861 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12448 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

require = fn;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default noop.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  const automodReason = guildId(4205).getAutomodReason(stateFromStores);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1114).intl;
    let stringResult = intl2.string(tmp(1114).t.Viksoo);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t["/PGQf0"]);
  }
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1114).intl;
    let stringResult1 = intl4.string(tmp(1114).t.ml72ZU);
  } else {
    const intl3 = tmp(1114).intl;
    stringResult1 = intl3.string(tmp(1114).t["8HW7r9"]);
  }
  obj = { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null };
  const obj2 = guildId(4205);
  obj.icon = jsx(guildId(12465).ChatXIcon, {});
  obj.message = stringResult1;
  return jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null });
});