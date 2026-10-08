// === Module 18398: LogOutDisclaimer ===

// Module 18398 (LogOutDisclaimer)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef2859 from "module_2859" /* 2859 */;
import Text_Text from "Text/Text" /* 5086 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5936 */;
import ModalDisclaimer from "ModalDisclaimer" /* 14116 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function LogOutDisclaimer() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const obj3 = { variant: "text-xs/medium", children: null };
    const intl = util.intl;
    const obj4 = {
      handleLogOut() {
          AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
        }
    };
    obj3.children = intl.format(_modDef2859["0DHxym"], obj4);
    obj2.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: null });
    const tmp7 = jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function LogOutDisclaimer() {
  const obj = { children: null };
  const obj2 = { variant: "text-xs/medium", children: null };
  const intl = util.intl;
  obj2.children = intl.format(_modDef2859["0DHxym"], {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  });
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: null });
  return jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
});