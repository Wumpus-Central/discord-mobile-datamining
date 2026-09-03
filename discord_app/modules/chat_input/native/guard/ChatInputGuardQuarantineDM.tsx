// === Module 12251: ? ===

// Module 12251
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12248 */;
import ChatWarningIcon from "ChatWarningIcon" /* 12253 */;
import { QUARANTINE_APPEAL_LINK } from "QUARANTINE_APPEAL_LINK" /* 12252 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function ChatInputGuardQuarantineDM() {
  let obj = { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.EouHwv);
  const intl2 = getSystemLocale.intl;
  obj = { appealLink: QUARANTINE_APPEAL_LINK };
  obj[3] = intl2.format(getSystemLocale.t.PThBel, obj);
  return jsx(ChatInputGuardDefault, { appealLink: QUARANTINE_APPEAL_LINK });
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;