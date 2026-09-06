// === Module 17874: LogOutDisclaimer ===

// Module 17874 (LogOutDisclaimer)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import _modDef2690 from "module_2690" /* 2690 */;
import Text_Text from "Text/Text" /* 4556 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import ModalDisclaimer from "ModalDisclaimer" /* 14176 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = { children: null };
  obj = { variant: "text-xs/medium", children: null };
  const intl = util.intl;
  obj = {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  };
  obj.children = intl.format(_modDef2690["0DHxym"], obj);
  obj.children = jsx(Text_Text.Text, {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  });
  return jsx(ModalDisclaimer.ModalDisclaimer, {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  });
};