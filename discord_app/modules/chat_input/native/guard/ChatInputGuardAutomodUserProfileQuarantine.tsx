// discord_app/modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx
import AutomodPermissionUtils from "../../../guild_automod/AutomodPermissionUtils.tsx";
import GuildAutomodActionActionCreators from "../../../guild_automod/GuildAutomodActionActionCreators.native.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";

require = fn;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx",
);

export default noop.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      if (null == guildId) {
        const _Set = Set;
        const set = new Set();
        return set;
      } else {
        const id = AuthenticationStore.getId();
        return AutomodPermissionUtils.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, id));
      }
    },
    items1,
  );
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
  obj.icon = jsx(guildId(12465).ChatXIcon, {});
  obj.message = stringResult1;
  return jsx(ChatInputGuardDefault, {
    type: "simple-action",
    actionOnPress: callback,
    actionLabel: stringResult,
    icon: null,
    message: null,
  });
});
