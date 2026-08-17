// discord_app/modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import ChatWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ChatWarningIcon.tsx";
import { QUARANTINE_APPEAL_LINK } from "../../../quarantine/QuarantineConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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