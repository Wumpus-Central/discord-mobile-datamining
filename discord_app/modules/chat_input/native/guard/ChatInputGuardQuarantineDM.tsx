// === Module 12125: ChatInputGuardQuarantineDM ===

// Module 12125 (ChatInputGuardQuarantineDM)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12122 */;
import ChatWarningIcon from "ChatWarningIcon" /* 12127 */;
import noop from "module_19" /* 19 */;

require = fn;
const QUARANTINE_APPEAL_LINK = fn(12126).QUARANTINE_APPEAL_LINK;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputGuardQuarantineDM() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null };
    const intl = util.intl;
    obj2.message = intl.string(util.t.EouHwv);
    const intl2 = util.intl;
    const obj3 = { appealLink: QUARANTINE_APPEAL_LINK };
    obj2.subtext = intl2.format(util.t.PThBel, obj3);
    const tmp9 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null });
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ChatInputGuardQuarantineDM() {
  const obj = { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.EouHwv);
  const intl2 = util.intl;
  obj.subtext = intl2.format(util.t.PThBel, { appealLink: QUARANTINE_APPEAL_LINK });
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null });
}));