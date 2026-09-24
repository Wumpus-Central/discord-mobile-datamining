// === Module 18434: LogOutDisclaimer ===

// Module 18434 (LogOutDisclaimer)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import _modDef2780 from "module_2780" /* 2780 */;
import Text_Text from "Text/Text" /* 4825 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6922 */;
import ModalDisclaimer from "ModalDisclaimer" /* 14551 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  const obj = { children: null };
  const obj2 = { variant: "text-xs/medium", children: null };
  const intl = util.intl;
  obj2.children = intl.format(_modDef2780["0DHxym"], {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  });
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: null });
  return jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
};