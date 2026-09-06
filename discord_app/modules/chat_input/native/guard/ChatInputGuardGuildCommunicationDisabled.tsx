// discord_app/modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx
import util from "../../../../intl/index.native.tsx";
import ClockWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ClockWarningIcon.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import useCommunicationDisabledCountdownCleanup from "../../../guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const link = fn(2023).GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx",
);

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
  obj = {
    type: "simple-action",
    icon: jsx(ClockWarningIcon.ClockWarningIcon, {}),
    message: null,
    subtext: null,
    countdown: null,
  };
  const intl = util.intl;
  obj.message = intl.string(util.t.VSpdzK);
  const intl2 = util.intl;
  obj = { link };
  obj.subtext = intl2.format(util.t["4ZwD5G"], obj);
  obj.countdown = date;
  return jsx(ChatInputGuardDefault, { link });
});
