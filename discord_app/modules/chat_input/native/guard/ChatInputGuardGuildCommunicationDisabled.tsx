// discord_app/modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx
import util from "../../../../intl/index.native.tsx";
import ClockWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ClockWarningIcon.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import useCommunicationDisabledCountdownCleanup from "../../../guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const link = fn(2110).GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx",
);

export default noop.memo(function CommunicationDisabledNoticeForGuild(guildMember) {
  guildMember = guildMember.guildMember;
  const communicationDisabledCountdownCleanup =
    useCommunicationDisabledCountdownCleanup.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (null == communicationDisabledUntil) {
    const _Date2 = Date;
    let date = new Date();
  } else {
    const _Date = Date;
    date = new Date(communicationDisabledUntil);
  }
  const obj2 = { type: "simple-action", icon: null, message: null, subtext: null, countdown: null };
  obj2.icon = jsx(ClockWarningIcon.ClockWarningIcon, {});
  const intl = util.intl;
  obj2.message = intl.string(util.t.VSpdzK);
  const intl2 = util.intl;
  obj2.subtext = intl2.format(util.t["4ZwD5G"], { link });
  obj2.countdown = date;
  return jsx(ChatInputGuardDefault, {
    type: "simple-action",
    icon: null,
    message: null,
    subtext: null,
    countdown: null,
  });
});
