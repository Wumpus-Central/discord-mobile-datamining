// discord_app/modules/safety_flows/native/LogOutDisclaimer.tsx
import set from "../../../../_runtime/00002_set.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../SafetyFlows.messages.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import ModalDisclaimer from "../../../design/components/Modal/native/ModalDisclaimer.native.tsx";

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = { children: null };
  obj = { variant: "text-xs/medium", children: null };
  const intl = getSystemLocale.intl;
  obj = {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    },
  };
  obj[1] = intl.format(messagesProxyDefault["0DHxym"], obj);
  obj[0] = jsx(Text.Text, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    },
  });
  return jsx(ModalDisclaimer.ModalDisclaimer, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    },
  });
}
