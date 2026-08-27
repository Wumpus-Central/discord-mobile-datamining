// === Module 17367: LogOutDisclaimer ===

// Module 17367 (LogOutDisclaimer)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2631 */;
import Text from "Text" /* 4441 */;
import ModalDisclaimer from "ModalDisclaimer" /* 13733 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = { children: null };
  obj = { variant: "text-xs/medium", children: null };
  const intl = getSystemLocale.intl;
  obj = {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  };
  obj[1] = intl.format(messagesProxyDefault["0DHxym"], obj);
  obj[0] = jsx(Text.Text, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
  return jsx(ModalDisclaimer.ModalDisclaimer, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
};