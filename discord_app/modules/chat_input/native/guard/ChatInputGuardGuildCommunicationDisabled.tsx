// === Module 12461: ChatInputGuardGuildCommunicationDisabled ===

// Module 12461 (ChatInputGuardGuildCommunicationDisabled)
import util from "util" /* 1114 */;
import ClockWarningIcon from "ClockWarningIcon" /* 11853 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12448 */;
import useCommunicationDisabledCountdownCleanup from "useCommunicationDisabledCountdownCleanup" /* 12462 */;
import noop from "module_19" /* 19 */;

require = fn;
const link = fn(2023).GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default noop.memo(function CommunicationDisabledNoticeForGuild(guildMember) {
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
  const intl = tmp(1114).intl;
  obj.message = intl.string(util.t.VSpdzK);
  const intl2 = tmp(1114).intl;
  obj = { link };
  obj.subtext = intl2.format(util.t["4ZwD5G"], obj);
  obj.countdown = date;
  return jsx(ChatInputGuardDefault, { link });
});