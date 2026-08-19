// === Module 11629: ? ===

// Module 11629
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ClockWarningIcon from "ClockWarningIcon" /* 11033 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 11616 */;
import useCommunicationDisabledCountdownCleanup from "useCommunicationDisabledCountdownCleanup" /* 11630 */;
import { GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK as closure_3 } from "getFriendlyDurationString" /* 1992 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
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
  obj = { type: "simple-action", icon: jsx(ClockWarningIcon.ClockWarningIcon, {}), message: null, subtext: null, countdown: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.VSpdzK);
  const intl2 = getSystemLocale.intl;
  obj = { link: closure_3 };
  obj[3] = intl2.format(getSystemLocale.t["4ZwD5G"], obj);
  obj[4] = date;
  return jsx(ChatInputGuardDefault, { link: closure_3 });
});
const result = require("obj132").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default memoResult;