// === Module 12132: ChatInputGuardGuildCommunicationDisabled ===

// Module 12132 (ChatInputGuardGuildCommunicationDisabled)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ClockWarningIcon from "ClockWarningIcon" /* 11478 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12105 */;
import useCommunicationDisabledCountdownCleanup from "useCommunicationDisabledCountdownCleanup" /* 12133 */;
import noop from "module_19" /* 19 */;

require = fn;
const link = fn(2114).GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildMember) => {
  const cResult = c.c(7);
  guildMember = guildMember.guildMember;
  const communicationDisabledCountdownCleanup = useCommunicationDisabledCountdownCleanup.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (cResult[0] !== communicationDisabledUntil) {
    if (null == communicationDisabledUntil) {
      const _Date2 = Date;
      let date = new Date();
    } else {
      const _Date = Date;
      date = new Date(communicationDisabledUntil);
    }
    cResult[0] = communicationDisabledUntil;
    cResult[1] = date;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp21 = jsx(ClockWarningIcon.ClockWarningIcon, {});
      const intl = util.intl;
      const stringResult = intl.string(util.t.VSpdzK);
      const intl2 = util.intl;
      const obj3 = { link };
      const formatResult = intl2.format(util.t["4ZwD5G"], obj3);
      cResult[2] = tmp21;
      cResult[3] = stringResult;
      cResult[4] = formatResult;
      let tmp19 = formatResult;
      let tmp18 = stringResult;
      let tmp17 = tmp21;
    } else {
      tmp17 = cResult[2];
      tmp18 = cResult[3];
      tmp19 = cResult[4];
    }
    if (cResult[5] !== cResult[1]) {
      const obj4 = { type: "simple-action", icon: tmp17, message: tmp18, subtext: tmp19, countdown: tmp5 };
      const tmp28 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp17, message: tmp18, subtext: tmp19, countdown: tmp5 });
      cResult[5] = tmp5;
      cResult[6] = tmp28;
      let tmp25 = tmp28;
    } else {
      tmp25 = cResult[6];
    }
    return tmp25;
  }
}) : ((guildMember) => {
  guildMember = guildMember.guildMember;
  const communicationDisabledCountdownCleanup = useCommunicationDisabledCountdownCleanup.useCommunicationDisabledCountdownCleanup(guildMember);
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
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: null, message: null, subtext: null, countdown: null });
}));