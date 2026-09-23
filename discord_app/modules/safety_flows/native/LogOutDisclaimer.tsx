// === Module 18411: LogOutDisclaimer ===

// Module 18411 (LogOutDisclaimer)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import _modDef2778 from "module_2778" /* 2778 */;
import Text_Text from "Text/Text" /* 4823 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6920 */;
import ModalDisclaimer from "ModalDisclaimer" /* 14542 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  const obj = { children: null };
  const obj2 = { variant: "text-xs/medium", children: null };
  const intl = util.intl;
  obj2.children = intl.format(_modDef2778["0DHxym"], {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  });
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: null });
  return jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
};