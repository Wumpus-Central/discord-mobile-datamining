// === Module 20865: LogOutDisclaimer ===

// Module 20865 (LogOutDisclaimer)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1113 */;
import _modDef2997 from "module_2997" /* 2997 */;
import Text_Text from "Text/Text" /* 5929 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6844 */;
import ModalDisclaimer from "ModalDisclaimer" /* 16494 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  const obj = { children: null };
  const obj2 = { variant: "body-xs/medium", children: null };
  const intl = util.intl;
  obj2.children = intl.format(_modDef2997["0DHxym"], {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  });
  obj.children = jsx(Text_Text.Text, { variant: "body-xs/medium", children: null });
  return jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
};