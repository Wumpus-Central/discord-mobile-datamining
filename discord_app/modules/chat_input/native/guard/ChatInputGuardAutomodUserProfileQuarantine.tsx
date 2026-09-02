// discord_app/modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/AuthenticationStore.tsx";
import closure_5 from "../../../../stores/GuildMemberStore.tsx";
import { GuildMemberFlags } from "../../../guild_member/GuildMemberConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(586);
  const items = [closure_4, closure_5];
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
        const id = closure_1_4.getId();
        return guildId(closure_1_2[6]).getAutomodQuarantinedGuildMemberFlags(closure_1_5.getMember(tmp, id));
      }
    },
    items1,
  );
  const callback = importAllResult.useCallback(() => {
    const result = guildId(closure_1_2[7]).openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const automodReason = guildId(4126).getAutomodReason(stateFromStores);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1233).intl;
    let stringResult = intl2.string(tmp(1233).t.Viksoo);
  } else {
    const intl = tmp(1233).intl;
    stringResult = intl.string(tmp(1233).t["/PGQf0"]);
  }
  if (automodReason === tmp6.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1233).intl;
    let stringResult1 = intl4.string(tmp(1233).t.ml72ZU);
  } else {
    const intl3 = tmp(1233).intl;
    stringResult1 = intl3.string(tmp(1233).t["8HW7r9"]);
  }
  obj = { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null };
  const obj2 = guildId(4126);
  tmp6 = GuildMemberFlags;
  obj[3] = jsx(guildId(12253).ChatXIcon, {});
  obj[4] = stringResult1;
  return jsx(ChatInputGuardDefault, {
    type: "simple-action",
    actionOnPress: callback,
    actionLabel: stringResult,
    icon: null,
    message: null,
  });
});
let result = require("set").fileFinishedImporting(
  "modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx",
);

export default memoResult;
