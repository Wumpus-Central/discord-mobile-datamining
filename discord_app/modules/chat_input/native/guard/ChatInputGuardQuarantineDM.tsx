// discord_app/modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx
import { QUARANTINE_APPEAL_LINK } from "QUARANTINE_APPEAL_LINK";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function ChatInputGuardQuarantineDM() {
  let obj = { type: "simple-action", icon: null, message: null, subtext: null };
  obj[1] = jsx(require(11726) /* ChatWarningIcon */.ChatWarningIcon, {});
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.EouHwv);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj = { appealLink: QUARANTINE_APPEAL_LINK };
  obj[3] = intl2.format(require(1236) /* getSystemLocale */.t.PThBel, obj);
  return jsx(importDefault(11721), { appealLink: QUARANTINE_APPEAL_LINK });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;