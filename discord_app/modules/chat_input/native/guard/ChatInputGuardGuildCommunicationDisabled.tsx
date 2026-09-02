// discord_app/modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import ClockWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ClockWarningIcon.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import useCommunicationDisabledCountdownCleanup from "../../../guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx";
import { GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK as closure_3 } from "../../../guild_communication_disabled/GuildDisableCommunicationConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
const memoResult = importAllResult.memo(function CommunicationDisabledNoticeForGuild(guildMember) {
  guildMember = guildMember.guildMember;
  let obj = useCommunicationDisabledCountdownCleanup;
  const communicationDisabledCountdownCleanup = obj.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (null == communicationDisabledUntil) {
    const _Date2 = Date;
    let date = new Date();
  } else {
    const _Date = Date;
    date = new Date(communicationDisabledUntil);
  }
  obj = {
    type: "simple-action",
    icon: jsx(ClockWarningIcon.ClockWarningIcon, {}),
    message: null,
    subtext: null,
    countdown: null,
  };
  const intl = tmp(1233).intl;
  obj[2] = intl.string(getSystemLocale.t.VSpdzK);
  const intl2 = tmp(1233).intl;
  obj = { link: closure_3 };
  obj[3] = intl2.format(getSystemLocale.t["4ZwD5G"], obj);
  obj[4] = date;
  return jsx(ChatInputGuardDefault, { link: closure_3 });
});
const result = require("set").fileFinishedImporting(
  "modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx",
);

export default memoResult;
