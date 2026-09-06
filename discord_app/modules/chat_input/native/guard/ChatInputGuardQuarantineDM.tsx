// discord_app/modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx
import util from "../../../../intl/index.native.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import ChatWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ChatWarningIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QUARANTINE_APPEAL_LINK = fn(12452).QUARANTINE_APPEAL_LINK;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default noop.memo(function ChatInputGuardQuarantineDM() {
  let obj = { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.EouHwv);
  const intl2 = util.intl;
  obj = { appealLink: QUARANTINE_APPEAL_LINK };
  obj.subtext = intl2.format(util.t.PThBel, obj);
  return jsx(ChatInputGuardDefault, { appealLink: QUARANTINE_APPEAL_LINK });
});
