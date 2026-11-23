// === Module 20145: LogOutDisclaimer ===

// Module 20145 (LogOutDisclaimer)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1112 */;
import _modDef3120 from "module_3120" /* 3120 */;
import Text_Text from "Text/Text" /* 5504 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6425 */;
import ModalDisclaimer from "ModalDisclaimer" /* 15286 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  const obj = { children: null };
  const obj2 = { variant: "body-xs/medium", children: null };
  const intl = util.intl;
  obj2.children = intl.format(_modDef3120["0DHxym"], {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  });
  obj.children = jsx(Text_Text.Text, { variant: "body-xs/medium", children: null });
  return jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
};