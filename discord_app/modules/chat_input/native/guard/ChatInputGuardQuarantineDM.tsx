// discord_app/modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx
import { QUARANTINE_APPEAL_LINK } from "QUARANTINE_APPEAL_LINK";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function ChatInputGuardQuarantineDM() {
  let obj = { type: "simple-action", icon: null, message: null, subtext: null };
  obj[1] = jsx(require("../../../../design/components/Icon/native/redesign/generated/ChatWarningIcon.tsx") /* ChatWarningIcon */.ChatWarningIcon, {});
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.EouHwv);
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { appealLink: QUARANTINE_APPEAL_LINK };
  obj[3] = intl2.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.PThBel, obj);
  return jsx(require("ChatInputGuard.tsx"), { appealLink: QUARANTINE_APPEAL_LINK });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;