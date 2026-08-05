// discord_app/modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx
import { QUARANTINE_APPEAL_LINK } from "QUARANTINE_APPEAL_LINK";
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { ChatWarningIcon } from "../../../../design/components/Icon/native/redesign/generated/ChatWarningIcon.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ChatInputGuard } from "ChatInputGuard.tsx";

const require = arg1;
const memoResult = require("noop").memo(function ChatInputGuardQuarantineDM() {
  let obj = { type: "simple-action", icon: null, message: null, subtext: null };
  obj[1] = jsx(ChatWarningIcon.ChatWarningIcon, {});
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.EouHwv);
  const intl2 = getSystemLocale.intl;
  obj = { appealLink: QUARANTINE_APPEAL_LINK };
  obj[3] = intl2.format(getSystemLocale.t.PThBel, obj);
  return jsx(ChatInputGuard, { appealLink: QUARANTINE_APPEAL_LINK });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;