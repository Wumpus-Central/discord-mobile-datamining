// === Module 12132: ChatInputGuardGuildCommunicationDisabled ===

// Module 12132 (ChatInputGuardGuildCommunicationDisabled)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2114 */;
import ClockWarningIcon from "ClockWarningIcon" /* 11478 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12105 */;
import useCommunicationDisabledCountdownCleanup from "useCommunicationDisabledCountdownCleanup" /* 12133 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const link = GuildDisableCommunicationConstants.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function(guildMember) {
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp19;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(7);
  guildMember = guildMember.guildMember;
  const obj2 = useCommunicationDisabledCountdownCleanup;
  const communicationDisabledCountdownCleanup = obj2.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (cResult[0] !== communicationDisabledUntil) {
    let date;
    if (null == communicationDisabledUntil) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date = new Date();
    } else {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(communicationDisabledUntil);
    }
    cResult[0] = communicationDisabledUntil;
    cResult[1] = date;
    tmp5 = date;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp15 = jsx(ClockWarningIcon.ClockWarningIcon, {});
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.VSpdzK);
    const intl2 = intl3.intl;
    const obj3 = { link };
    const formatResult = intl2.format(intl3.t["4ZwD5G"], obj3);
    cResult[2] = tmp15;
    cResult[3] = stringResult;
    cResult[4] = formatResult;
    tmp13 = formatResult;
    tmp12 = stringResult;
    tmp11 = tmp15;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    const tmp22 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp11, message: tmp12, subtext: tmp13, countdown: tmp5 });
    cResult[5] = tmp5;
    cResult[6] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[6];
  }
  return tmp19;
}) : (function(guildMember) {
  let date;
  guildMember = guildMember.guildMember;
  const obj = useCommunicationDisabledCountdownCleanup;
  const communicationDisabledCountdownCleanup = obj.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (null == communicationDisabledUntil) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date = new Date();
  } else {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(communicationDisabledUntil);
  }
  ChatInputGuardDefault;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  const obj3 = { link };
  return <tmp8 type="simple-action" icon={null} message={intl.string(intl3.t.VSpdzK)} subtext={intl2.format(intl3.t["4ZwD5G"], obj3)} countdown={date} />;
}));
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default memoResult;